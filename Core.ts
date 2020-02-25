import * as http from "http";
import * as https from "https";

import {
	Entity,
	createBoundary,
	composeBody,
} from "./multipart";

export type updateListener = (update: any) => void;

export default class Core {
	private token: string;

	constructor(token: string) {
		this.token = token;
	}

	public call(method: string, parameters: any = null, multipart: boolean = false): Promise<any> {
		let contentType: string;
		let data: Buffer;

		if (multipart && parameters) {
			const boundary = createBoundary(69);

			contentType = `multipart/form-data; boundary="${boundary}"`;

			const entities = Object.entries<any>(parameters).map<Entity>(([name, value]) => {
				const contentDispositionHeader = {
					name: "content-disposition",
					value: "form-data",
					attributes: {
						"name": name,
					},
				};

				if (value.content) {
					(contentDispositionHeader.attributes as any)["filename"] = value.name;

					return {
						headers: [
							contentDispositionHeader,
							{
								name: "content-type",
								value: value.contentType || "application/octet-stream",
							},
						],
						body: Buffer.from(value.content),
					};
				} else {
					return {
						headers: [contentDispositionHeader],
						body: Buffer.from(String(value)),
					};
				}
			});

			data = composeBody(entities, boundary);
		} else {
			contentType = "application/json";
			data = parameters ? Buffer.from(JSON.stringify(parameters)) : Buffer.alloc(0);
		}

		return new Promise((resolve, reject) => {
			const request = https.request({
				method: "POST",
				hostname: "api.telegram.org",
				path: `/bot${this.token}/${method}`,
				headers: {
					"content-type": contentType,
					"content-length": data.length,
				},
			});

			request.on("error", (error) => {
				reject(`Connection error: ${error.message}`);
			});

			request.on("response", (response: http.IncomingMessage) => {
				if (response.statusCode === 200) {
					let body = Buffer.alloc(0);

					response.on("data", (chunk: Buffer) => {
						body = Buffer.concat([body, chunk]);
					});

					response.on("end", () => {
						const result = JSON.parse(body.toString());

						if (result.ok) {
							resolve(result.result);
						} else {
							reject(`API error: ${result.description}`);
						}
					});
				} else {
					reject(`Server error: ${response.statusCode} ${response.statusMessage}`);
				}
			});

			request.write(data);
			request.end();
		});
	}

	public listen(port: number, url: string, updateListener: updateListener) {
		const server = http.createServer();

		server.on("request", (request: http.IncomingMessage, response: http.ServerResponse) => {
			if (request.url === url) {
				let body = Buffer.alloc(0);

				request.on("data", (chunk: Buffer) => {
					body = Buffer.concat([body, chunk]);
				});

				request.on("end", () => {
					updateListener(JSON.parse(body.toString()));

					response.end();
				});
			}
		});

		server.listen(port);
	}
}
