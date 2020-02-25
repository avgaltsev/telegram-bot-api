Telegram Bot API
================

This is a comprehensive Telegram Bot API written in TypeScript. It provides a full up-to-date list of methods and types defined by the [official documentation]((https://core.telegram.org/bots/api)).

Using the API
-------------

```TypeScript
import {Api} from "@somethings/telegram-bot-api";

const TOKEN = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11";

const api = new Api(TOKEN);

api.getMe().then((user) => {
	console.log(user.id);
});
```

This API exposes all officially documented methods as individual functions.

It also provides two mutually exclusive methods: `listen` and `poll`, which represent two officially supported ways of [getting updates](https://core.telegram.org/bots/api#getting-updates).

### `listen(port: number, url: string, getUpdate: UpdateGetter)`

Starts a HTTP server listening for incoming [Webhooks](https://core.telegram.org/bots/webhooks). Note that Telegram only supports communication over HTTPS, so you have to set up a third-party HTTPS capable web-proxy like [nginx](https://nginx.org/).

- `port: number` - port to listen on;
- `url: string` - URL to match against incoming requests that will use the value specified during initialization via [`setWebhook`](https://core.telegram.org/bots/api#setwebhook); all other requests will be ignored;
- `getUpdate: UpdateGetter` - callback for getting incoming [updates](https://core.telegram.org/bots/api#update).

### `poll(timeout: number, getUpdate: UpdateGetter)`

Establishes an infinite loop of [`getUpdates`](https://core.telegram.org/bots/api#getupdates) long polling calls.

- `timeout: number` - polling timeout;
- `getUpdate: UpdateGetter` - callback for getting incoming [updates](https://core.telegram.org/bots/api#update).

### Sending files

There are some methods for sending binary files to the Telegram cloud like [`setWebhook`](https://core.telegram.org/bots/api#setwebhook) and [`sendPhoto`](https://core.telegram.org/bots/api#sendphoto). This API provides a custom type representing such data - `InputFile`, which is different from the [`InputFile`](https://core.telegram.org/bots/api#inputfile) type defined in the official documentation. Refer to the code for more information please, it's pretty self-explanatory.

How to update the API
---------------------

1. Clone the repositpry and `npm install` all the dependencies;
2. Run `npm run download` to download a copy of the official documentation page and save it to `sync/api.html` file;
3. Inspect the diff of `sync/api.html` to determine if the API needs to be updated:
	- If there are only changes in existing types or methods just run `npm run parse` to read documentation from `sync/api.html` and `sync/api.json` and generate `AbstractApi.ts` with actual interfaces fields and descriptions;
	- If there are new types or methods or any changes affecting manually managed information update `sync/api.json` accordingly and run `npm run parse`;
4. Inspect changes in `AbstractApi.ts`;
5. Check `Api.ts` for possible TypeScript errors as it derives from generated `AbstractApi.ts` and possibly add new methods here;
6. Commit everything.
