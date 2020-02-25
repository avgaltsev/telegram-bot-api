import * as http from "http";
import * as https from "https";

import {
	Header,
	Entity,
	createBoundary,
	composeBody,
} from "./multipart";

import AbstractApi from "./AbstractApi";
import * as api from "./AbstractApi";

const URL = "api.telegram.org";

export type UpdateGetter = (update: api.Update) => void;

export default class Api extends AbstractApi {
	private server: http.Server;
	private polling = false;

	constructor(private token: string) {
		super();
	}

	private call(method: string, parameters: any = null): Promise<any> {
		const hasInputFile = parameters && Object.values(parameters).some((value: api.InputFile) => value.content && Buffer.isBuffer(value.content));

		let contentType: string;
		let data: Buffer;

		if (hasInputFile) {
			const boundary = createBoundary(69);

			contentType = `multipart/form-data; boundary="${boundary}"`;

			const entities = Object.entries<any>(parameters).map<Entity>(([name, value]) => {
				const contentDispositionHeader: Header = {
					name: "content-disposition",
					value: "form-data",
					attributes: {
						"name": name,
					},
				};

				if (value.content) {
					if (value.name) {
						contentDispositionHeader.attributes["filename"] = value.name;
					}

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
				hostname: URL,
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

	private startListening(port: number, url: string, getUpdate: UpdateGetter) {
		this.server = http.createServer();

		this.server.on("request", (request: http.IncomingMessage, response: http.ServerResponse) => {
			if (request.url === url) {
				let body = Buffer.alloc(0);

				request.on("data", (chunk: Buffer) => {
					body = Buffer.concat([body, chunk]);
				});

				request.on("end", () => {
					getUpdate(JSON.parse(body.toString()));

					response.end();
				});
			}
		});

		this.server.listen(port);
	}

	private startPolling(offset: number, timeout: number, getUpdate: UpdateGetter) {
		this.polling = true;

		this.getUpdates({
			offset,
			timeout,
		}).then((updates) => {
			if (this.polling) {
				let lastUpdateId: number;

				updates.forEach((update) => {
					lastUpdateId = update.update_id;

					getUpdate(update);
				});

				this.startPolling(lastUpdateId ? lastUpdateId + 1 : offset, timeout, getUpdate);
			}
		});
	}

	public stopListening() {
		if (this.server) {
			this.server.close();
		}
	}

	public stopPolling() {
		this.polling = false;
	}

	public listen(port: number, url: string, getUpdate: UpdateGetter) {
		this.stopListening();
		this.stopPolling();

		this.startListening(port, url, getUpdate);
	}

	public poll(timeout: number, getUpdate: UpdateGetter) {
		this.stopListening();
		this.stopPolling();

		this.startPolling(0, timeout, getUpdate);
	}

	public getUpdates(parameters: api.GetUpdatesParameters): Promise<api.Update[]> {
		return this.call("getUpdates", parameters);
	}

	public setWebhook(parameters: api.SetWebhookParameters): Promise<boolean> {
		return this.call("setWebhook", parameters);
	}

	public deleteWebhook(): Promise<boolean> {
		return this.call("deleteWebhook");
	}

	public getWebhookInfo(): Promise<api.WebhookInfo> {
		return this.call("getWebhookInfo");
	}

	public getMe(): Promise<api.User> {
		return this.call("getMe");
	}

	public sendMessage(parameters: api.SendMessageParameters): Promise<api.Message> {
		return this.call("sendMessage", parameters);
	}

	public forwardMessage(parameters: api.ForwardMessageParameters): Promise<api.Message> {
		return this.call("forwardMessage", parameters);
	}

	public sendPhoto(parameters: api.SendPhotoParameters): Promise<api.Message> {
		return this.call("sendPhoto", parameters);
	}

	public sendAudio(parameters: api.SendAudioParameters): Promise<api.Message> {
		return this.call("sendAudio", parameters);
	}

	public sendDocument(parameters: api.SendDocumentParameters): Promise<api.Message> {
		return this.call("sendDocument", parameters);
	}

	public sendVideo(parameters: api.SendVideoParameters): Promise<api.Message> {
		return this.call("sendVideo", parameters);
	}

	public sendAnimation(parameters: api.SendAnimationParameters): Promise<api.Message> {
		return this.call("sendAnimation", parameters);
	}

	public sendVoice(parameters: api.SendVoiceParameters): Promise<api.Message> {
		return this.call("sendVoice", parameters);
	}

	public sendVideoNote(parameters: api.SendVideoNoteParameters): Promise<api.Message> {
		return this.call("sendVideoNote", parameters);
	}

	public sendMediaGroup(parameters: api.SendMediaGroupParameters): Promise<api.Message> {
		return this.call("sendMediaGroup", parameters);
	}

	public sendLocation(parameters: api.SendLocationParameters): Promise<api.Message> {
		return this.call("sendLocation", parameters);
	}

	public editMessageLiveLocation(parameters: api.EditMessageLiveLocationParameters): Promise<boolean | api.Message> {
		return this.call("editMessageLiveLocation", parameters);
	}

	public stopMessageLiveLocation(parameters: api.StopMessageLiveLocationParameters): Promise<boolean | api.Message> {
		return this.call("stopMessageLiveLocation", parameters);
	}

	public sendVenue(parameters: api.SendVenueParameters): Promise<api.Message> {
		return this.call("sendVenue", parameters);
	}

	public sendContact(parameters: api.SendContactParameters): Promise<api.Message> {
		return this.call("sendContact", parameters);
	}

	public sendPoll(parameters: api.SendPollParameters): Promise<api.Message> {
		return this.call("sendPoll", parameters);
	}

	public sendChatAction(parameters: api.SendChatActionParameters): Promise<boolean> {
		return this.call("sendChatAction", parameters);
	}

	public getUserProfilePhotos(parameters: api.GetUserProfilePhotosParameters): Promise<api.UserProfilePhotos> {
		return this.call("getUserProfilePhotos", parameters);
	}

	public getFile(parameters: api.GetFileParameters): Promise<api.File> {
		return this.call("getFile", parameters);
	}

	public kickChatMember(parameters: api.KickChatMemberParameters): Promise<boolean> {
		return this.call("kickChatMember", parameters);
	}

	public unbanChatMember(parameters: api.UnbanChatMemberParameters): Promise<boolean> {
		return this.call("unbanChatMember", parameters);
	}

	public restrictChatMember(parameters: api.RestrictChatMemberParameters): Promise<boolean> {
		return this.call("restrictChatMember", parameters);
	}

	public promoteChatMember(parameters: api.PromoteChatMemberParameters): Promise<boolean> {
		return this.call("promoteChatMember", parameters);
	}

	public exportChatInviteLink(parameters: api.ExportChatInviteLinkParameters): Promise<string> {
		return this.call("exportChatInviteLink", parameters);
	}

	public setChatPhoto(parameters: api.SetChatPhotoParameters): Promise<boolean> {
		return this.call("setChatPhoto", parameters);
	}

	public deleteChatPhoto(parameters: api.DeleteChatPhotoParameters): Promise<boolean> {
		return this.call("deleteChatPhoto", parameters);
	}

	public setChatTitle(parameters: api.SetChatTitleParameters): Promise<boolean> {
		return this.call("setChatTitle", parameters);
	}

	public setChatDescription(parameters: api.SetChatDescriptionParameters): Promise<boolean> {
		return this.call("setChatDescription", parameters);
	}

	public pinChatMessage(parameters: api.PinChatMessageParameters): Promise<boolean> {
		return this.call("pinChatMessage", parameters);
	}

	public unpinChatMessage(parameters: api.UnpinChatMessageParameters): Promise<boolean> {
		return this.call("unpinChatMessage", parameters);
	}

	public leaveChat(parameters: api.LeaveChatParameters): Promise<boolean> {
		return this.call("leaveChat", parameters);
	}

	public getChat(parameters: api.GetChatParameters): Promise<api.Chat> {
		return this.call("getChat", parameters);
	}

	public getChatAdministrators(parameters: api.GetChatAdministratorsParameters): Promise<api.ChatMember[]> {
		return this.call("getChatAdministrators", parameters);
	}

	public getChatMembersCount(parameters: api.GetChatMembersCountParameters): Promise<number> {
		return this.call("getChatMembersCount", parameters);
	}

	public getChatMember(parameters: api.GetChatMemberParameters): Promise<api.ChatMember> {
		return this.call("getChatMember", parameters);
	}

	public setChatStickerSet(parameters: api.SetChatStickerSetParameters): Promise<boolean> {
		return this.call("setChatStickerSet", parameters);
	}

	public deleteChatStickerSet(parameters: api.DeleteChatStickerSetParameters): Promise<boolean> {
		return this.call("deleteChatStickerSet", parameters);
	}

	public answerCallbackQuery(parameters: api.AnswerCallbackQueryParameters): Promise<boolean> {
		return this.call("answerCallbackQuery", parameters);
	}

	public editMessageText(parameters: api.EditMessageTextParameters): Promise<boolean | api.Message> {
		return this.call("editMessageText", parameters);
	}

	public editMessageCaption(parameters: api.EditMessageCaptionParameters): Promise<boolean | api.Message> {
		return this.call("editMessageCaption", parameters);
	}

	public editMessageMedia(parameters: api.EditMessageMediaParameters): Promise<boolean | api.Message> {
		return this.call("editMessageMedia", parameters);
	}

	public editMessageReplyMarkup(parameters: api.EditMessageReplyMarkupParameters): Promise<boolean | api.Message> {
		return this.call("editMessageReplyMarkup", parameters);
	}

	public stopPoll(parameters: api.StopPollParameters): Promise<api.Poll> {
		return this.call("stopPoll", parameters);
	}

	public deleteMessage(parameters: api.DeleteMessageParameters): Promise<boolean> {
		return this.call("deleteMessage", parameters);
	}

	public sendSticker(parameters: api.SendStickerParameters): Promise<api.Message> {
		return this.call("sendSticker", parameters);
	}

	public getStickerSet(parameters: api.GetStickerSetParameters): Promise<api.StickerSet> {
		return this.call("getStickerSet", parameters);
	}

	public uploadStickerFile(parameters: api.UploadStickerFileParameters): Promise<api.File> {
		return this.call("uploadStickerFile", parameters);
	}

	public createNewStickerSet(parameters: api.CreateNewStickerSetParameters): Promise<boolean> {
		return this.call("createNewStickerSet", parameters);
	}

	public addStickerToSet(parameters: api.AddStickerToSetParameters): Promise<boolean> {
		return this.call("addStickerToSet", parameters);
	}

	public setStickerPositionInSet(parameters: api.SetStickerPositionInSetParameters): Promise<boolean> {
		return this.call("setStickerPositionInSet", parameters);
	}

	public deleteStickerFromSet(parameters: api.DeleteStickerFromSetParameters): Promise<boolean> {
		return this.call("deleteStickerFromSet", parameters);
	}

	public answerInlineQuery(parameters: api.AnswerInlineQueryParameters): Promise<boolean> {
		return this.call("answerInlineQuery", parameters);
	}

	public sendInvoice(parameters: api.SendInvoiceParameters): Promise<api.Message> {
		return this.call("sendInvoice", parameters);
	}

	public answerShippingQuery(parameters: api.AnswerShippingQueryParameters): Promise<boolean> {
		return this.call("answerShippingQuery", parameters);
	}

	public answerPreCheckoutQuery(parameters: api.AnswerPreCheckoutQueryParameters): Promise<boolean> {
		return this.call("answerPreCheckoutQuery", parameters);
	}

	public setPassportDataErrors(parameters: api.SetPassportDataErrorsParameters): Promise<boolean> {
		return this.call("setPassportDataErrors", parameters);
	}

	public sendGame(parameters: api.SendGameParameters): Promise<api.Message> {
		return this.call("sendGame", parameters);
	}

	public setGameScore(parameters: api.SetGameScoreParameters): Promise<boolean | api.Message> {
		return this.call("setGameScore", parameters);
	}

	public getGameHighScores(parameters: api.GetGameHighScoresParameters): Promise<api.GameHighScore[]> {
		return this.call("getGameHighScores", parameters);
	}
}
