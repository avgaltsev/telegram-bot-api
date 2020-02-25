import Core from "./Core";

/**
 * This object represents an incoming update.
 * At most one of the optional parameters can be present in any given update.
 */
export interface Update {
	/**
	 * The update‘s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you’re using Webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
	 *
	 * ![asd](https://core.telegram.org/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c)
	 */
	update_id: number;

	/**
	 * New incoming message of any kind — text, photo, sticker, etc.
	 */
	message?: Message;

	/**
	 * New version of a message that is known to the bot and was edited
	 */
	edited_message?: Message;

	/**
	 * New incoming channel post of any kind — text, photo, sticker, etc.
	 */
	channel_post?: Message;

	/**
	 * New version of a channel post that is known to the bot and was edited
	 */
	edited_channel_post?: Message;

	/**
	 * New incoming inline query
	 */
	inline_query?: InlineQuery;

	/**
	 * The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
	 */
	chosen_inline_result?: ChosenInlineResult;

	/**
	 * New incoming callback query
	 */
	callback_query?: CallbackQuery;

	/**
	 * New incoming shipping query. Only for invoices with flexible price
	 */
	shipping_query?: ShippingQuery;

	/**
	 * New incoming pre-checkout query. Contains full information about checkout
	 */
	pre_checkout_query?: PreCheckoutQuery;

	/**
	 * New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot
	 */
	// poll?: Poll;
}

/**
 * Contains information about the current status of a webhook.
 */
export interface WebhookInfo {
	/**
	 * Webhook URL, may be empty if webhook is not set up
	 */
	url: string;

	/**
	 * True, if a custom certificate was provided for webhook certificate checks
	 */
	has_custom_certificate: boolean;

	/**
	 * Number of updates awaiting delivery
	 */
	pending_update_count: number;

	/**
	 * Unix time for the most recent error that happened when trying to deliver an update via webhook
	 */
	last_error_date?: number;

	/**
	 * Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
	 */
	last_error_message?: string;

	/**
	 * Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
	 */
	max_connections?: number;

	/**
	 * A list of update types the bot is subscribed to. Defaults to all update types
	 */
	allowed_updates?: string[];
}

export interface User {
	/**
	 * Unique identifier for this user or bot
	 */
	id: number;

	/**
	 * True, if this user is a bot
	 */
	is_bot: boolean;

	/**
	 * User‘s or bot’s first name
	 */
	first_name: string;

	/**
	 * User‘s or bot’s last name
	 */
	last_name?: string;

	/**
	 * User‘s or bot’s username
	 */
	username?: string;

	/**
	 * IETF language tag of the user's language
	 */
	language_code?: string;
}

export interface Chat {
	id: number;
	type: "private" | "group" | "supergroup" | "channel";
	title?: string;
	username?: string;
	first_name?: string;
	last_name?: string;
	all_members_are_administrators?: boolean;
	photo?: ChatPhoto;
	description?: string;
	invite_link?: string;
}

export interface Message {
	message_id: number;
	from?: User;
	date: number;
	chat: Chat;
	forward_from?: User;
	forward_from_chat?: Chat;
	forward_from_message_id?: number;
	forward_date?: number;
	reply_to_message?: Message;
	edit_date?: number;
	text?: string;
	entities?: MessageEntity[];
	audio?: Audio;
	document?: Document;
	game?: Game;
	photo?: PhotoSize[];
	sticker?: Sticker;
	video?: Video;
	voice?: Voice;
	video_note?: VideoNote;
	new_chat_members?: User[];
	caption?: string;
	contact?: Contact;
	location?: Location;
	venue?: Venue;
	new_chat_member?: User;
	left_chat_member?: User;
	new_chat_title?: string;
	new_chat_photo?: PhotoSize[];
	delete_chat_photo?: boolean;
	group_chat_created?: boolean;
	supergroup_chat_created?: boolean;
	channel_chat_created?: boolean;
	migrate_to_chat_id?: number;
	migrate_from_chat_id?: number;
	pinned_message?: Message;
	invoice?: Invoice;
	successful_payment?: SuccessfulPayment;
}

export interface MessageEntity {
	type: "mention" | "hashtag" | "bot_command" | "url" | "email" | "bold" | "italic" | "code" | "pre" | "text_link" | "text_mention";
	offset: number;
	length: number;
	url?: string;
	user?: User;
}

export interface PhotoSize {
	file_id: string;
	width: number;
	height: number;
	file_size?: number;
}

export interface Audio {
	file_id: string;
	duration: number;
	performer?: string;
	title?: string;
	mime_type?: string;
	file_size?: number;
}

export interface Document {
	file_id: string;
	thumb?: PhotoSize;
	file_name?: string;
	mime_type?: string;
	file_size?: number;
}

export interface Sticker {
	file_id: string;
	width: number;
	height: number;
	thumb?: PhotoSize;
	emoji?: string;
	file_size?: number;
}

export interface Video {
	file_id: string;
	width: number;
	height: number;
	duration: number;
	thumb?: PhotoSize;
	mime_type?: string;
	file_size?: number;
}

export interface Voice {
	file_id: string;
	duration: number;
	mime_type?: string;
	file_size?: number;
}

export interface VideoNote {
	file_id: string;
	length: number;
	duration: number;
	thumb?: PhotoSize;
	file_size?: number;
}

export interface Contact {
	phone_number: string;
	first_name: string;
	last_name?: string;
	user_id?: number;
}

export interface Location {
	longitude: number;
	latitude: number;
}

export interface Venue {
	location: Location;
	title: string;
	address: string;
	foursquare_id?: string;
}

export interface UserProfilePhotos {
	total_count: number;
	photos: PhotoSize[];
}

export interface File {
	file_id: string;
	file_size?: number;
	file_path?: string;
}

export interface ReplyKeyboardMarkup {
	keyboard: KeyboardButton[][];
	resize_keyboard?: boolean;
	one_time_keyboard?: boolean;
	selective?: boolean;
}

export interface KeyboardButton {
	text: string;
	request_contact?: boolean;
	request_location?: boolean;
}

export interface ReplyKeyboardRemove {
	remove_keyboard: true;
	selective?: boolean;
}

export interface InlineKeyboardMarkup {
	inline_keyboard: InlineKeyboardButton[][];
}

export interface InlineKeyboardButton {
	text: string;
	url?: string;
	callback_data?: string;
	switch_inline_query?: string;
	switch_inline_query_current_chat?: string;
	callback_game?: CallbackGame;
	pay?: boolean;
}

export interface CallbackQuery {
	id: string;
	from: User;
	message?: Message;
	inline_message_id?: string;
	chat_instance: string;
	data?: string;
	game_short_name?: string;
}

export interface ForceReply {
	force_reply: true;
	selective?: boolean;
}

export interface ChatPhoto {
	small_file_id: string;
	big_file_id: string;
}

export interface ChatMember {
	user: User;
	status: string;
	until_date?: number;
	can_be_edited?: boolean;
	can_change_info?: boolean;
	can_post_messages?: boolean;
	can_edit_messages?: boolean;
	can_delete_messages?: boolean;
	can_invite_users?: boolean;
	can_restrict_members?: boolean;
	can_pin_messages?: boolean;
	can_promote_members?: boolean;
	can_send_messages?: boolean;
	can_send_media_messages?: boolean;
	can_send_other_messages?: boolean;
	can_add_web_page_previews?: boolean;
}

export interface ResponseParameters {
	migrate_to_chat_id?: number;
	retry_after?: number;
}

export interface InlineQuery {
	id: string;
	from: User;
	location?: Location;
	query: string;
	offset: string;
}

export interface InlineQueryResult {}

export interface InlineQueryResultArticle extends InlineQueryResult {}

export interface ChosenInlineResult {}

export interface LabeledPrice {}

export interface Invoice {}

export interface ShippingAddress {}

export interface OrderInfo {}

export interface ShippingOption {}

export interface SuccessfulPayment {}

export interface ShippingQuery {}

export interface PreCheckoutQuery {}

export interface Game {}

export interface Animation {}

export interface CallbackGame {}

export interface GameHighScore {}

export type updateListener = (update: Update) => void;

export interface InputFile {
	name?: string;
	contentType?: string;
	content: Buffer;
}

export interface GetUpdatesParameters {
	offset?: number;
	limit?: number;
	timeout?: number;
	allowed_updates?: string[];
}

export interface SetWebhookParameters {
	url: string;
	certificate?: InputFile;
	max_connections?: number;
	allowed_updates?: string[];
}

export interface SendMessageParameters {
	chat_id: number | string;
	text: string;
	parse_mode?: "Markdown" | "HTML";
	disable_web_page_preview?: boolean;
	disable_notification?: boolean;
	reply_to_message_id?: number;
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

export interface ForwardMessageParameters {}

export interface SendPhotoParameters {}

export interface SendAudioParameters {}

export interface SendDocumentParameters {}

export interface SendStickerParameters {}

export interface SendVideoParameters {}

export interface SendVoiceParameters {}

export interface SendVideoNoteParameters {}

export interface SendLocationParameters {}

export interface SendVenueParameters {}

export interface SendContactParameters {}

export interface SendChatActionParameters {}

export interface GetUserProfilePhotosParameters {}

export interface GetFileParameters {}

export interface KickChatMemberParameters {}

export interface UnbanChatMemberParameters {}

export interface RestrictChatMemberParameters {}

export interface PromoteChatMemberParameters {}

export interface ExportChatInviteLinkParameters {}

export interface SetChatPhotoParameters {}

export interface DeleteChatPhotoParameters {}

export interface SetChatTitleParameters {}

export interface SetChatDescriptionParameters {}

export interface PinChatMessageParameters {}

export interface UnpinChatMessageParameters {}

export interface LeaveChatParameters {}

export interface GetChatParameters {}

export interface GetChatAdministratorsParameters {}

export interface GetChatMembersCountParameters {}

export interface GetChatMemberParameters {}

export interface AnswerCallbackQueryParameters {}

export interface EditMessageTextParameters {}

export interface EditMessageCaptionParameters {}

export interface EditMessageReplyMarkupParameters {}

export interface DeleteMessageParameters {}

export interface AnswerInlineQueryParameters {}

export interface SendInvoiceParameters {}

export interface AnswerShippingQueryParameters {}

export interface AnswerPreCheckoutQueryParameters {}

export interface SendGameParameters {}

export interface SetGameScoreParameters {}

export interface GetGameHighScoresParameters {}

export default class Api extends Core {
	public listen(port: number, url: string, updateListener: updateListener) {
		super.listen(port, url, updateListener);
	}

	public getUpdates(parameters: GetUpdatesParameters): Promise<Update[]> {
		return this.call("getUpdates", parameters);
	}

	public setWebhook(parameters: SetWebhookParameters): Promise<true> {
		return this.call("setWebhook", parameters);
	}

	public deleteWebhook(): Promise<true> {
		return this.call("deleteWebhook");
	}

	public getWebhookInfo(): Promise<WebhookInfo> {
		return this.call("getWebhookInfo");
	}

	public getMe(): Promise<User> {
		return this.call("getMe");
	}

	public sendMessage(parameters: SendMessageParameters): Promise<Message> {
		return this.call("sendMessage", parameters);
	}
}
