import Core from "./Core";

export interface Update {
	readonly update_id: number;
	readonly message?: Message;
	readonly edited_message?: Message;
	readonly channel_post?: Message;
	readonly edited_channel_post?: Message;
	readonly inline_query?: InlineQuery;
	readonly chosen_inline_result?: ChosenInlineResult;
	readonly callback_query?: CallbackQuery;
	readonly shipping_query?: ShippingQuery;
	readonly pre_checkout_query?: PreCheckoutQuery;
}

export interface WebhookInfo {
	readonly url: string;
	readonly has_custom_certificate: boolean;
	readonly pending_update_count: number;
	readonly last_error_date?: number;
	readonly last_error_message?: string;
	readonly max_connections?: number;
	readonly allowed_updates?: string[];
}

export interface User {
	readonly id: number;
	readonly first_name: string;
	readonly last_name?: string;
	readonly username?: string;
	readonly language_code?: string;
}

export interface Chat {
	readonly id: number;
	readonly type: "private" | "group" | "supergroup" | "channel";
	readonly title?: string;
	readonly username?: string;
	readonly first_name?: string;
	readonly last_name?: string;
	readonly all_members_are_administrators?: boolean;
	readonly photo?: ChatPhoto;
	readonly description?: string;
	readonly invite_link?: string;
}

export interface Message {
	readonly message_id: number;
	readonly from?: User;
	readonly date: number;
	readonly chat: Chat;
	readonly forward_from?: User;
	readonly forward_from_chat?: Chat;
	readonly forward_from_message_id?: number;
	readonly forward_date?: number;
	readonly reply_to_message?: Message;
	readonly edit_date?: number;
	readonly text?: string;
	readonly entities?: MessageEntity[];
	readonly audio?: Audio;
	readonly document?: Document;
	readonly game?: Game;
	readonly photo?: PhotoSize[];
	readonly sticker?: Sticker;
	readonly video?: Video;
	readonly voice?: Voice;
	readonly video_note?: VideoNote;
	readonly new_chat_members?: User[];
	readonly caption?: string;
	readonly contact?: Contact;
	readonly location?: Location;
	readonly venue?: Venue;
	readonly new_chat_member?: User;
	readonly left_chat_member?: User;
	readonly new_chat_title?: string;
	readonly new_chat_photo?: PhotoSize[];
	readonly delete_chat_photo?: boolean;
	readonly group_chat_created?: boolean;
	readonly supergroup_chat_created?: boolean;
	readonly channel_chat_created?: boolean;
	readonly migrate_to_chat_id?: number;
	readonly migrate_from_chat_id?: number;
	readonly pinned_message?: Message;
	readonly invoice?: Invoice;
	readonly successful_payment?: SuccessfulPayment;
}

export interface MessageEntity {
	readonly type: "mention" | "hashtag" | "bot_command" | "url" | "email" | "bold" | "italic" | "code" | "pre" | "text_link" | "text_mention";
	readonly offset: number;
	readonly length: number;
	readonly url?: string;
	readonly user?: User;
}

export interface PhotoSize {
	readonly file_id: string;
	readonly width: number;
	readonly height: number;
	readonly file_size?: number;
}

export interface Audio {
	readonly file_id: string;
	readonly duration: number;
	readonly performer?: string;
	readonly title?: string;
	readonly mime_type?: string;
	readonly file_size?: number;
}

export interface Document {
	readonly file_id: string;
	readonly thumb?: PhotoSize;
	readonly file_name?: string;
	readonly mime_type?: string;
	readonly file_size?: number;
}

export interface Sticker {
	readonly file_id: string;
	readonly width: number;
	readonly height: number;
	readonly thumb?: PhotoSize;
	readonly emoji?: string;
	readonly file_size?: number;
}

export interface Video {
	readonly file_id: string;
	readonly width: number;
	readonly height: number;
	readonly duration: number;
	readonly thumb?: PhotoSize;
	readonly mime_type?: string;
	readonly file_size?: number;
}

export interface Voice {
	readonly file_id: string;
	readonly duration: number;
	readonly mime_type?: string;
	readonly file_size?: number;
}

export interface VideoNote {
	readonly file_id: string;
	readonly length: number;
	readonly duration: number;
	readonly thumb?: PhotoSize;
	readonly file_size?: number;
}

export interface Contact {
	readonly phone_number: string;
	readonly first_name: string;
	readonly last_name?: string;
	readonly user_id?: number;
}

export interface Location {
	readonly longitude: number;
	readonly latitude: number;
}

export interface Venue {
	readonly location: Location;
	readonly title: string;
	readonly address: string;
	readonly foursquare_id?: string;
}

export interface UserProfilePhotos {
	readonly total_count: number;
	readonly photos: PhotoSize[];
}

export interface File {
	readonly file_id: string;
	readonly file_size?: number;
	readonly file_path?: string;
}

export interface ReplyKeyboardMarkup {
	readonly keyboard: KeyboardButton[][];
	readonly resize_keyboard?: boolean;
	readonly one_time_keyboard?: boolean;
	readonly selective?: boolean;
}

export interface KeyboardButton {
	readonly text: string;
	readonly request_contact?: boolean;
	readonly request_location?: boolean;
}

export interface ReplyKeyboardRemove {
	readonly remove_keyboard: true;
	readonly selective?: boolean;
}

export interface InlineKeyboardMarkup {
	readonly inline_keyboard: InlineKeyboardButton[][];
}

export interface InlineKeyboardButton {
	readonly text: string;
	readonly url?: string;
	readonly callback_data?: string;
	readonly switch_inline_query?: string;
	readonly switch_inline_query_current_chat?: string;
	readonly callback_game?: CallbackGame;
	readonly pay?: boolean;
}

export interface CallbackQuery {
	readonly id: string;
	readonly from: User;
	readonly message?: Message;
	readonly inline_message_id?: string;
	readonly chat_instance: string;
	readonly data?: string;
	readonly game_short_name?: string;
}

export interface ForceReply {
	readonly force_reply: true;
	readonly selective?: boolean;
}

export interface ChatPhoto {
	readonly small_file_id: string;
	readonly big_file_id: string;
}

export interface ChatMember {
	readonly user: User;
	readonly status: string;
	readonly until_date?: number;
	readonly can_be_edited?: boolean;
	readonly can_change_info?: boolean;
	readonly can_post_messages?: boolean;
	readonly can_edit_messages?: boolean;
	readonly can_delete_messages?: boolean;
	readonly can_invite_users?: boolean;
	readonly can_restrict_members?: boolean;
	readonly can_pin_messages?: boolean;
	readonly can_promote_members?: boolean;
	readonly can_send_messages?: boolean;
	readonly can_send_media_messages?: boolean;
	readonly can_send_other_messages?: boolean;
	readonly can_add_web_page_previews?: boolean;
}

export interface ResponseParameters {
	readonly migrate_to_chat_id?: number;
	readonly retry_after?: number;
}

export interface InlineQuery {
	readonly id: string;
	readonly from: User;
	readonly location?: Location;
	readonly query: string;
	readonly offset: string;
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
