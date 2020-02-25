/**
 * This [object](https://core.telegram.org/bots/api#available-types) represents an incoming update.
 *
 * At most **one** of the optional parameters can be present in any given update.
 */
export interface Update {
	/**
	 * The update‘s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you’re using [Webhooks](https://core.telegram.org/bots/api#setwebhook), since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
	 */
	update_id: number;

	/**
	 * _Optional_. New incoming message of any kind — text, photo, sticker, etc.
	 */
	message?: Message;

	/**
	 * _Optional_. New version of a message that is known to the bot and was edited
	 */
	edited_message?: Message;

	/**
	 * _Optional_. New incoming channel post of any kind — text, photo, sticker, etc.
	 */
	channel_post?: Message;

	/**
	 * _Optional_. New version of a channel post that is known to the bot and was edited
	 */
	edited_channel_post?: Message;

	/**
	 * _Optional_. New incoming [inline](https://core.telegram.org/bots/api#inline-mode) query
	 */
	inline_query?: InlineQuery;

	/**
	 * _Optional_. The result of an [inline](https://core.telegram.org/bots/api#inline-mode) query that was chosen by a user and sent to their chat partner. Please see our documentation on the [feedback collecting](https://core.telegram.org/bots/inline#collecting-feedback) for details on how to enable these updates for your bot.
	 */
	chosen_inline_result?: ChosenInlineResult;

	/**
	 * _Optional_. New incoming callback query
	 */
	callback_query?: CallbackQuery;

	/**
	 * _Optional_. New incoming shipping query. Only for invoices with flexible price
	 */
	shipping_query?: ShippingQuery;

	/**
	 * _Optional_. New incoming pre-checkout query. Contains full information about checkout
	 */
	pre_checkout_query?: PreCheckoutQuery;

	/**
	 * _Optional_. New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot
	 */
	poll?: Poll;
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
	 * _Optional_. Unix time for the most recent error that happened when trying to deliver an update via webhook
	 */
	last_error_date?: number;

	/**
	 * _Optional_. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
	 */
	last_error_message?: string;

	/**
	 * _Optional_. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
	 */
	max_connections?: number;

	/**
	 * _Optional_. A list of update types the bot is subscribed to. Defaults to all update types
	 */
	allowed_updates?: string[];
}

/**
 * This object represents a Telegram user or bot.
 */
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
	 * _Optional_. User‘s or bot’s last name
	 */
	last_name?: string;

	/**
	 * _Optional_. User‘s or bot’s username
	 */
	username?: string;

	/**
	 * _Optional_. [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language
	 */
	language_code?: string;
}

/**
 * This object represents a chat.
 */
export interface Chat {
	/**
	 * Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
	 */
	id: number;

	/**
	 * Type of chat, can be either “private”, “group”, “supergroup” or “channel”
	 */
	type: "private" | "group" | "supergroup" | "channel";

	/**
	 * _Optional_. Title, for supergroups, channels and group chats
	 */
	title?: string;

	/**
	 * _Optional_. Username, for private chats, supergroups and channels if available
	 */
	username?: string;

	/**
	 * _Optional_. First name of the other party in a private chat
	 */
	first_name?: string;

	/**
	 * _Optional_. Last name of the other party in a private chat
	 */
	last_name?: string;

	/**
	 * _Optional_. True if a group has ‘All Members Are Admins’ enabled.
	 */
	all_members_are_administrators?: boolean;

	/**
	 * _Optional_. Chat photo. Returned only in [getChat](https://core.telegram.org/bots/api#getchat).
	 */
	photo?: ChatPhoto;

	/**
	 * _Optional_. Description, for supergroups and channel chats. Returned only in [getChat](https://core.telegram.org/bots/api#getchat).
	 */
	description?: string;

	/**
	 * _Optional_. Chat invite link, for supergroups and channel chats. Each administrator in a chat generates their own invite links, so the bot must first generate the link using [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink). Returned only in [getChat](https://core.telegram.org/bots/api#getchat).
	 */
	invite_link?: string;

	/**
	 * _Optional_. Pinned message, for groups, supergroups and channels. Returned only in [getChat](https://core.telegram.org/bots/api#getchat).
	 */
	pinned_message?: Message;

	/**
	 * _Optional_. For supergroups, name of group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api#getchat).
	 */
	sticker_set_name?: string;

	/**
	 * _Optional_. True, if the bot can change the group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api#getchat).
	 */
	can_set_sticker_set?: boolean;
}

/**
 * This object represents a message.
 */
export interface Message {
	/**
	 * Unique message identifier inside this chat
	 */
	message_id: number;

	/**
	 * _Optional_. Sender, empty for messages sent to channels
	 */
	from?: User;

	/**
	 * Date the message was sent in Unix time
	 */
	date: number;

	/**
	 * Conversation the message belongs to
	 */
	chat: Chat;

	/**
	 * _Optional_. For forwarded messages, sender of the original message
	 */
	forward_from?: User;

	/**
	 * _Optional_. For messages forwarded from channels, information about the original channel
	 */
	forward_from_chat?: Chat;

	/**
	 * _Optional_. For messages forwarded from channels, identifier of the original message in the channel
	 */
	forward_from_message_id?: number;

	/**
	 * _Optional_. For messages forwarded from channels, signature of the post author if present
	 */
	forward_signature?: string;

	/**
	 * _Optional_. Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages
	 */
	forward_sender_name?: string;

	/**
	 * _Optional_. For forwarded messages, date the original message was sent in Unix time
	 */
	forward_date?: number;

	/**
	 * _Optional_. For replies, the original message. Note that the Message object in this field will not contain further _reply_to_message_ fields even if it itself is a reply.
	 */
	reply_to_message?: Message;

	/**
	 * _Optional_. Date the message was last edited in Unix time
	 */
	edit_date?: number;

	/**
	 * _Optional_. The unique identifier of a media message group this message belongs to
	 */
	media_group_id?: string;

	/**
	 * _Optional_. Signature of the post author for messages in channels
	 */
	author_signature?: string;

	/**
	 * _Optional_. For text messages, the actual UTF-8 text of the message, 0-4096 characters.
	 */
	text?: string;

	/**
	 * _Optional_. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
	 */
	entities?: MessageEntity[];

	/**
	 * _Optional_. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
	 */
	caption_entities?: MessageEntity[];

	/**
	 * _Optional_. Message is an audio file, information about the file
	 */
	audio?: Audio;

	/**
	 * _Optional_. Message is a general file, information about the file
	 */
	document?: Document;

	/**
	 * _Optional_. Message is an animation, information about the animation. For backward compatibility, when this field is set, the _document_ field will also be set
	 */
	animation?: Animation;

	/**
	 * _Optional_. Message is a game, information about the game. [More about games »](https://core.telegram.org/bots/api#games)
	 */
	game?: Game;

	/**
	 * _Optional_. Message is a photo, available sizes of the photo
	 */
	photo?: PhotoSize[];

	/**
	 * _Optional_. Message is a sticker, information about the sticker
	 */
	sticker?: Sticker;

	/**
	 * _Optional_. Message is a video, information about the video
	 */
	video?: Video;

	/**
	 * _Optional_. Message is a voice message, information about the file
	 */
	voice?: Voice;

	/**
	 * _Optional_. Message is a [video note](https://telegram.org/blog/video-messages-and-telescope), information about the video message
	 */
	video_note?: VideoNote;

	/**
	 * _Optional_. Caption for the animation, audio, document, photo, video or voice, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Message is a shared contact, information about the contact
	 */
	contact?: Contact;

	/**
	 * _Optional_. Message is a shared location, information about the location
	 */
	location?: Location;

	/**
	 * _Optional_. Message is a venue, information about the venue
	 */
	venue?: Venue;

	/**
	 * _Optional_. Message is a native poll, information about the poll
	 */
	poll?: Poll;

	/**
	 * _Optional_. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
	 */
	new_chat_members?: User[];

	/**
	 * _Optional_. A member was removed from the group, information about them (this member may be the bot itself)
	 */
	left_chat_member?: User;

	/**
	 * _Optional_. A chat title was changed to this value
	 */
	new_chat_title?: string;

	/**
	 * _Optional_. A chat photo was change to this value
	 */
	new_chat_photo?: PhotoSize[];

	/**
	 * _Optional_. Service message: the chat photo was deleted
	 */
	delete_chat_photo?: true;

	/**
	 * _Optional_. Service message: the group has been created
	 */
	group_chat_created?: true;

	/**
	 * _Optional_. Service message: the supergroup has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
	 */
	supergroup_chat_created?: true;

	/**
	 * _Optional_. Service message: the channel has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.
	 */
	channel_chat_created?: true;

	/**
	 * _Optional_. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
	 */
	migrate_to_chat_id?: number;

	/**
	 * _Optional_. The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
	 */
	migrate_from_chat_id?: number;

	/**
	 * _Optional_. Specified message was pinned. Note that the Message object in this field will not contain further _reply_to_message_ fields even if it is itself a reply.
	 */
	pinned_message?: Message;

	/**
	 * _Optional_. Message is an invoice for a [payment](https://core.telegram.org/bots/api#payments), information about the invoice. [More about payments »](https://core.telegram.org/bots/api#payments)
	 */
	invoice?: Invoice;

	/**
	 * _Optional_. Message is a service message about a successful payment, information about the payment. [More about payments »](https://core.telegram.org/bots/api#payments)
	 */
	successful_payment?: SuccessfulPayment;

	/**
	 * _Optional_. The domain name of the website on which the user has logged in. [More about Telegram Login »](https://core.telegram.org/widgets/login)
	 */
	connected_website?: string;

	/**
	 * _Optional_. Telegram Passport data
	 */
	passport_data?: PassportData;

	/**
	 * _Optional_. Inline keyboard attached to the message. `login_url` buttons are represented as ordinary `url` buttons.
	 */
	reply_markup?: InlineKeyboardMarkup;
}

/**
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 */
export interface MessageEntity {
	/**
	 * Type of the entity. Can be _mention_ (`@username`), _hashtag_, _cashtag_, _bot_command_, _url_, _email_, _phone_number_, _bold_ (bold text), _italic_ (italic text), _code_ (monowidth string), _pre_ (monowidth block), _text_link_ (for clickable text URLs), _text_mention_ (for users [without usernames](https://telegram.org/blog/edit#new-mentions))
	 */
	type: "mention" | "hashtag" | "cashtag" | "bot_command" | "url" | "email" | "phone_number" | "bold" | "italic" | "code" | "pre" | "text_link" | "text_mention";

	/**
	 * Offset in UTF-16 code units to the start of the entity
	 */
	offset: number;

	/**
	 * Length of the entity in UTF-16 code units
	 */
	length: number;

	/**
	 * _Optional_. For “text_link” only, url that will be opened after user taps on the text
	 */
	url?: string;

	/**
	 * _Optional_. For “text_mention” only, the mentioned user
	 */
	user?: User;
}

/**
 * This object represents one size of a photo or a [file](https://core.telegram.org/bots/api#document) / [sticker](https://core.telegram.org/bots/api#sticker) thumbnail.
 */
export interface PhotoSize {
	/**
	 * Unique identifier for this file
	 */
	file_id: string;

	/**
	 * Photo width
	 */
	width: number;

	/**
	 * Photo height
	 */
	height: number;

	/**
	 * _Optional_. File size
	 */
	file_size?: number;
}

/**
 * This object represents an audio file to be treated as music by the Telegram clients.
 */
export interface Audio {
	/**
	 * Unique identifier for this file
	 */
	file_id: string;

	/**
	 * Duration of the audio in seconds as defined by sender
	 */
	duration: number;

	/**
	 * _Optional_. Performer of the audio as defined by sender or by audio tags
	 */
	performer?: string;

	/**
	 * _Optional_. Title of the audio as defined by sender or by audio tags
	 */
	title?: string;

	/**
	 * _Optional_. MIME type of the file as defined by sender
	 */
	mime_type?: string;

	/**
	 * _Optional_. File size
	 */
	file_size?: number;

	/**
	 * _Optional_. Thumbnail of the album cover to which the music file belongs
	 */
	thumb?: PhotoSize;
}

/**
 * This object represents a general file (as opposed to [photos](https://core.telegram.org/bots/api#photosize), [voice messages](https://core.telegram.org/bots/api#voice) and [audio files](https://core.telegram.org/bots/api#audio)).
 */
export interface Document {
	/**
	 * Unique file identifier
	 */
	file_id: string;

	/**
	 * _Optional_. Document thumbnail as defined by sender
	 */
	thumb?: PhotoSize;

	/**
	 * _Optional_. Original filename as defined by sender
	 */
	file_name?: string;

	/**
	 * _Optional_. MIME type of the file as defined by sender
	 */
	mime_type?: string;

	/**
	 * _Optional_. File size
	 */
	file_size?: number;
}

/**
 * This object represents a video file.
 */
export interface Video {
	/**
	 * Unique identifier for this file
	 */
	file_id: string;

	/**
	 * Video width as defined by sender
	 */
	width: number;

	/**
	 * Video height as defined by sender
	 */
	height: number;

	/**
	 * Duration of the video in seconds as defined by sender
	 */
	duration: number;

	/**
	 * _Optional_. Video thumbnail
	 */
	thumb?: PhotoSize;

	/**
	 * _Optional_. Mime type of a file as defined by sender
	 */
	mime_type?: string;

	/**
	 * _Optional_. File size
	 */
	file_size?: number;
}

/**
 * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 */
export interface Animation {
	/**
	 * Unique file identifier
	 */
	file_id: string;

	/**
	 * Video width as defined by sender
	 */
	width: number;

	/**
	 * Video height as defined by sender
	 */
	height: number;

	/**
	 * Duration of the video in seconds as defined by sender
	 */
	duration: number;

	/**
	 * _Optional_. Animation thumbnail as defined by sender
	 */
	thumb?: PhotoSize;

	/**
	 * _Optional_. Original animation filename as defined by sender
	 */
	file_name?: string;

	/**
	 * _Optional_. MIME type of the file as defined by sender
	 */
	mime_type?: string;

	/**
	 * _Optional_. File size
	 */
	file_size?: number;
}

/**
 * This object represents a voice note.
 */
export interface Voice {
	/**
	 * Unique identifier for this file
	 */
	file_id: string;

	/**
	 * Duration of the audio in seconds as defined by sender
	 */
	duration: number;

	/**
	 * _Optional_. MIME type of the file as defined by sender
	 */
	mime_type?: string;

	/**
	 * _Optional_. File size
	 */
	file_size?: number;
}

/**
 * This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)).
 */
export interface VideoNote {
	/**
	 * Unique identifier for this file
	 */
	file_id: string;

	/**
	 * Video width and height (diameter of the video message) as defined by sender
	 */
	length: number;

	/**
	 * Duration of the video in seconds as defined by sender
	 */
	duration: number;

	/**
	 * _Optional_. Video thumbnail
	 */
	thumb?: PhotoSize;

	/**
	 * _Optional_. File size
	 */
	file_size?: number;
}

/**
 * This object represents a phone contact.
 */
export interface Contact {
	/**
	 * Contact's phone number
	 */
	phone_number: string;

	/**
	 * Contact's first name
	 */
	first_name: string;

	/**
	 * _Optional_. Contact's last name
	 */
	last_name?: string;

	/**
	 * _Optional_. Contact's user identifier in Telegram
	 */
	user_id?: number;

	/**
	 * _Optional_. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard)
	 */
	vcard?: string;
}

/**
 * This object represents a point on the map.
 */
export interface Location {
	/**
	 * Longitude as defined by sender
	 */
	longitude: number;

	/**
	 * Latitude as defined by sender
	 */
	latitude: number;
}

/**
 * This object represents a venue.
 */
export interface Venue {
	/**
	 * Venue location
	 */
	location: Location;

	/**
	 * Name of the venue
	 */
	title: string;

	/**
	 * Address of the venue
	 */
	address: string;

	/**
	 * _Optional_. Foursquare identifier of the venue
	 */
	foursquare_id?: string;

	/**
	 * _Optional_. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
	 */
	foursquare_type?: string;
}

/**
 * This object contains information about one answer option in a poll.
 */
export interface PollOption {
	/**
	 * Option text, 1-100 characters
	 */
	text: string;

	/**
	 * Number of users that voted for this option
	 */
	voter_count: number;
}

/**
 * This object contains information about a poll.
 */
export interface Poll {
	/**
	 * Unique poll identifier
	 */
	id: string;

	/**
	 * Poll question, 1-255 characters
	 */
	question: string;

	/**
	 * List of poll options
	 */
	options: PollOption[];

	/**
	 * True, if the poll is closed
	 */
	is_closed: boolean;
}

/**
 * This object represent a user's profile pictures.
 */
export interface UserProfilePhotos {
	/**
	 * Total number of profile pictures the target user has
	 */
	total_count: number;

	/**
	 * Requested profile pictures (in up to 4 sizes each)
	 */
	photos: PhotoSize[][];
}

/**
 * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile).
 *
 * > Maximum file size to download is 20 MB
 */
export interface File {
	/**
	 * Unique identifier for this file
	 */
	file_id: string;

	/**
	 * _Optional_. File size, if known
	 */
	file_size?: number;

	/**
	 * _Optional_. File path. Use `https://api.telegram.org/file/bot<token>/<file_path>` to get the file.
	 */
	file_path?: string;
}

/**
 * This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples).
 */
export interface ReplyKeyboardMarkup {
	/**
	 * Array of button rows, each represented by an Array of [KeyboardButton](https://core.telegram.org/bots/api#keyboardbutton) objects
	 */
	keyboard: KeyboardButton[][];

	/**
	 * _Optional_. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to _false_, in which case the custom keyboard is always of the same height as the app's standard keyboard.
	 */
	resize_keyboard?: boolean;

	/**
	 * _Optional_. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to _false_.
	 */
	one_time_keyboard?: boolean;

	/**
	 * _Optional_. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the _text_ of the [Message](https://core.telegram.org/bots/api#message) object; 2) if the bot's message is a reply (has _reply_to_message_id_), sender of the original message.
	 *
	 * _Example:_ A user requests to change the bot‘s language, bot replies to the request with a keyboard to select the new language. Other users in the group don’t see the keyboard.
	 */
	selective?: boolean;
}

/**
 * This object represents one button of the reply keyboard. For simple text buttons _String_ can be used instead of this object to specify text of the button. Optional fields are mutually exclusive.
 *
 * **Note:** _request_contact_ and _request_location_ options will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export interface KeyboardButton {
	/**
	 * Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
	 */
	text: string;

	/**
	 * _Optional_. If _True_, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only
	 */
	request_contact?: boolean;

	/**
	 * _Optional_. If _True_, the user's current location will be sent when the button is pressed. Available in private chats only
	 */
	request_location?: boolean;
}

/**
 * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)).
 */
export interface ReplyKeyboardRemove {
	/**
	 * Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use _one_time_keyboard_ in [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup))
	 */
	remove_keyboard: true;

	/**
	 * _Optional_. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the _text_ of the [Message](https://core.telegram.org/bots/api#message) object; 2) if the bot's message is a reply (has _reply_to_message_id_), sender of the original message.
	 *
	 * _Example:_ A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
	 */
	selective?: boolean;
}

/**
 * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will display _unsupported message_.
 */
export interface InlineKeyboardMarkup {
	/**
	 * Array of button rows, each represented by an Array of [InlineKeyboardButton](https://core.telegram.org/bots/api#inlinekeyboardbutton) objects
	 */
	inline_keyboard: InlineKeyboardButton[][];
}

/**
 * This object represents one button of an inline keyboard. You **must** use exactly one of the optional fields.
 */
export interface InlineKeyboardButton {
	/**
	 * Label text on the button
	 */
	text: string;

	/**
	 * _Optional_. HTTP or tg:// url to be opened when button is pressed
	 */
	url?: string;

	/**
	 * _Optional_. An HTTP URL used to automatically authorize the user. Can be used as a replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login).
	 */
	login_url?: LoginUrl;

	/**
	 * _Optional_. Data to be sent in a [callback query](https://core.telegram.org/bots/api#callbackquery) to the bot when button is pressed, 1-64 bytes
	 */
	callback_data?: string;

	/**
	 * _Optional_. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field. Can be empty, in which case just the bot’s username will be inserted.
	 *
	 * **Note:** This offers an easy way for users to start using your bot in [inline mode](https://core.telegram.org/bots/inline) when they are currently in a private chat with it. Especially useful when combined with [_switch_pm…_](https://core.telegram.org/bots/api#answerinlinequery) actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen.
	 */
	switch_inline_query?: string;

	/**
	 * _Optional_. If set, pressing the button will insert the bot‘s username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot’s username will be inserted.
	 *
	 * This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.
	 */
	switch_inline_query_current_chat?: string;

	/**
	 * _Optional_. Description of the game that will be launched when the user presses the button.
	 *
	 * **NOTE:** This type of button **must** always be the first button in the first row.
	 */
	callback_game?: CallbackGame;

	/**
	 * _Optional_. Specify True, to send a [Pay button](https://core.telegram.org/bots/api#payments).
	 *
	 * **NOTE:** This type of button **must** always be the first button in the first row.
	 */
	pay?: boolean;
}

/**
 * This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login) when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:
 *
 * Telegram apps support these buttons as of [version 5.7](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots).
 *
 * > Sample bot: [@discussbot](https://t.me/discussbot)
 */
export interface LoginUrl {
	/**
	 * An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in [Receiving authorization data](https://core.telegram.org/widgets/login#receiving-authorization-data).
	 *
	 * **NOTE:** You **must** always check the hash of the received data to verify the authentication and the integrity of the data as described in [Checking authorization](https://core.telegram.org/widgets/login#checking-authorization).
	 */
	url: string;

	/**
	 * _Optional_. New text of the button in forwarded messages.
	 */
	forward_text?: string;

	/**
	 * _Optional_. Username of a bot, which will be used for user authorization. See [Setting up a bot](https://core.telegram.org/widgets/login#setting-up-a-bot) for more details. If not specified, the current bot's username will be assumed. The _url_'s domain must be the same as the domain linked with the bot. See [Linking your domain to the bot](https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot) for more details.
	 */
	bot_username?: string;

	/**
	 * _Optional_. Pass True to request the permission for your bot to send messages to the user.
	 */
	request_write_access?: boolean;
}

/**
 * This object represents an incoming callback query from a callback button in an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If the button that originated the query was attached to a message sent by the bot, the field _message_ will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.telegram.org/bots/api#inline-mode)), the field _inline_message_id_ will be present. Exactly one of the fields _data_ or _game_short_name_ will be present.
 *
 * > **NOTE:** After the user presses a callback button, Telegram clients will display a progress bar until you call [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery). It is, therefore, necessary to react by calling [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery) even if no notification to the user is needed (e.g., without specifying any of the optional parameters).
 */
export interface CallbackQuery {
	/**
	 * Unique identifier for this query
	 */
	id: string;

	/**
	 * Sender
	 */
	from: User;

	/**
	 * _Optional_. Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old
	 */
	message?: Message;

	/**
	 * _Optional_. Identifier of the message sent via the bot in inline mode, that originated the query.
	 */
	inline_message_id?: string;

	/**
	 * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in [games](https://core.telegram.org/bots/api#games).
	 */
	chat_instance: string;

	/**
	 * _Optional_. Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field.
	 */
	data?: string;

	/**
	 * _Optional_. Short name of a [Game](https://core.telegram.org/bots/api#games) to be returned, serves as the unique identifier for the game
	 */
	game_short_name?: string;
}

/**
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot‘s message and tapped ’Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](https://core.telegram.org/bots#privacy-mode).
 *
 * > **Example:** A [poll bot](https://t.me/PollBot) for groups runs in privacy mode (only receives commands, replies to its messages and mentions). There could be two ways to create a new poll:
 *
 * - Explain the user how to send a command with parameters (e.g. /newpoll question answer1 answer2). May be appealing for hardcore users but lacks modern day polish.
 * - Guide the user through a step-by-step process. ‘Please send me your question’, ‘Cool, now let’s add the first answer option‘, ’Great. Keep adding answer options, then send /done when you‘re ready’.
 *
 * The last option is definitely more attractive. And if you use [ForceReply](https://core.telegram.org/bots/api#forcereply) in your bot‘s questions, it will receive the user’s answers even if it only receives replies, commands and mentions — without any extra work for the user.
 */
export interface ForceReply {
	/**
	 * Shows reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply'
	 */
	force_reply: true;

	/**
	 * _Optional_. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the _text_ of the [Message](https://core.telegram.org/bots/api#message) object; 2) if the bot's message is a reply (has _reply_to_message_id_), sender of the original message.
	 */
	selective?: boolean;
}

/**
 * This object represents a chat photo.
 */
export interface ChatPhoto {
	/**
	 * Unique file identifier of small (160x160) chat photo. This file_id can be used only for photo download.
	 */
	small_file_id: string;

	/**
	 * Unique file identifier of big (640x640) chat photo. This file_id can be used only for photo download.
	 */
	big_file_id: string;
}

/**
 * This object contains information about one member of a chat.
 */
export interface ChatMember {
	/**
	 * Information about the user
	 */
	user: User;

	/**
	 * The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked”
	 */
	status: "creator" | "administrator" | "member" | "restricted" | "left" | "kicked";

	/**
	 * _Optional_. Restricted and kicked only. Date when restrictions will be lifted for this user, unix time
	 */
	until_date?: number;

	/**
	 * _Optional_. Administrators only. True, if the bot is allowed to edit administrator privileges of that user
	 */
	can_be_edited?: boolean;

	/**
	 * _Optional_. Administrators only. True, if the administrator can change the chat title, photo and other settings
	 */
	can_change_info?: boolean;

	/**
	 * _Optional_. Administrators only. True, if the administrator can post in the channel, channels only
	 */
	can_post_messages?: boolean;

	/**
	 * _Optional_. Administrators only. True, if the administrator can edit messages of other users and can pin messages, channels only
	 */
	can_edit_messages?: boolean;

	/**
	 * _Optional_. Administrators only. True, if the administrator can delete messages of other users
	 */
	can_delete_messages?: boolean;

	/**
	 * _Optional_. Administrators only. True, if the administrator can invite new users to the chat
	 */
	can_invite_users?: boolean;

	/**
	 * _Optional_. Administrators only. True, if the administrator can restrict, ban or unban chat members
	 */
	can_restrict_members?: boolean;

	/**
	 * _Optional_. Administrators only. True, if the administrator can pin messages, groups and supergroups only
	 */
	can_pin_messages?: boolean;

	/**
	 * _Optional_. Administrators only. True, if the administrator can add new administrators with a subset of his own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user)
	 */
	can_promote_members?: boolean;

	/**
	 * _Optional_. Restricted only. True, if the user is a member of the chat at the moment of the request
	 */
	is_member?: boolean;

	/**
	 * _Optional_. Restricted only. True, if the user can send text messages, contacts, locations and venues
	 */
	can_send_messages?: boolean;

	/**
	 * _Optional_. Restricted only. True, if the user can send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages
	 */
	can_send_media_messages?: boolean;

	/**
	 * _Optional_. Restricted only. True, if the user can send animations, games, stickers and use inline bots, implies can_send_media_messages
	 */
	can_send_other_messages?: boolean;

	/**
	 * _Optional_. Restricted only. True, if user may add web page previews to his messages, implies can_send_media_messages
	 */
	can_add_web_page_previews?: boolean;
}

/**
 * Contains information about why a request was unsuccessful.
 */
export interface ResponseParameters {
	/**
	 * _Optional_. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
	 */
	migrate_to_chat_id?: number;

	/**
	 * _Optional_. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
	 */
	retry_after?: number;
}

/**
 * This object represents the content of a media message to be sent. It should be one of
 *
 * - [InputMediaAnimation](https://core.telegram.org/bots/api#inputmediaanimation)
 * - [InputMediaDocument](https://core.telegram.org/bots/api#inputmediadocument)
 * - [InputMediaAudio](https://core.telegram.org/bots/api#inputmediaaudio)
 * - [InputMediaPhoto](https://core.telegram.org/bots/api#inputmediaphoto)
 * - [InputMediaVideo](https://core.telegram.org/bots/api#inputmediavideo)
 */
export type InputMedia = InputMediaPhoto | InputMediaVideo | InputMediaAnimation | InputMediaAudio | InputMediaDocument;

/**
 * Represents a photo to be sent.
 */
export interface InputMediaPhoto {
	/**
	 * Type of the result, must be _photo_
	 */
	type: "photo";

	/**
	 * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	media: string;

	/**
	 * _Optional_. Caption of the photo to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";
}

/**
 * Represents a video to be sent.
 */
export interface InputMediaVideo {
	/**
	 * Type of the result, must be _video_
	 */
	type: "video";

	/**
	 * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	media: string;

	/**
	 * _Optional_. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	thumb?: InputFile | string;

	/**
	 * _Optional_. Caption of the video to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. Video width
	 */
	width?: number;

	/**
	 * _Optional_. Video height
	 */
	height?: number;

	/**
	 * _Optional_. Video duration
	 */
	duration?: number;

	/**
	 * _Optional_. Pass _True_, if the uploaded video is suitable for streaming
	 */
	supports_streaming?: boolean;
}

/**
 * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
 */
export interface InputMediaAnimation {
	/**
	 * Type of the result, must be _animation_
	 */
	type: "animation";

	/**
	 * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	media: string;

	/**
	 * _Optional_. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	thumb?: InputFile | string;

	/**
	 * _Optional_. Caption of the animation to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. Animation width
	 */
	width?: number;

	/**
	 * _Optional_. Animation height
	 */
	height?: number;

	/**
	 * _Optional_. Animation duration
	 */
	duration?: number;
}

/**
 * Represents an audio file to be treated as music to be sent.
 */
export interface InputMediaAudio {
	/**
	 * Type of the result, must be _audio_
	 */
	type: "audio";

	/**
	 * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	media: string;

	/**
	 * _Optional_. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	thumb?: InputFile | string;

	/**
	 * _Optional_. Caption of the audio to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. Duration of the audio in seconds
	 */
	duration?: number;

	/**
	 * _Optional_. Performer of the audio
	 */
	performer?: string;

	/**
	 * _Optional_. Title of the audio
	 */
	title?: string;
}

/**
 * Represents a general file to be sent.
 */
export interface InputMediaDocument {
	/**
	 * Type of the result, must be _document_
	 */
	type: "document";

	/**
	 * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	media: string;

	/**
	 * _Optional_. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	thumb?: InputFile | string;

	/**
	 * _Optional_. Caption of the document to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";
}

/**
 * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
 */
export interface InputFile {
	name?: string;

	contentType?: string;

	content: Buffer;
}

/**
 * This object represents a sticker.
 */
export interface Sticker {
	/**
	 * Unique identifier for this file
	 */
	file_id: string;

	/**
	 * Sticker width
	 */
	width: number;

	/**
	 * Sticker height
	 */
	height: number;

	/**
	 * _Optional_. Sticker thumbnail in the .webp or .jpg format
	 */
	thumb?: PhotoSize;

	/**
	 * _Optional_. Emoji associated with the sticker
	 */
	emoji?: string;

	/**
	 * _Optional_. Name of the sticker set to which the sticker belongs
	 */
	set_name?: string;

	/**
	 * _Optional_. For mask stickers, the position where the mask should be placed
	 */
	mask_position?: MaskPosition;

	/**
	 * _Optional_. File size
	 */
	file_size?: number;
}

/**
 * This object represents a sticker set.
 */
export interface StickerSet {
	/**
	 * Sticker set name
	 */
	name: string;

	/**
	 * Sticker set title
	 */
	title: string;

	/**
	 * _True_, if the sticker set contains masks
	 */
	contains_masks: boolean;

	/**
	 * List of all set stickers
	 */
	stickers: Sticker[];
}

/**
 * This object describes the position on faces where a mask should be placed by default.
 */
export interface MaskPosition {
	/**
	 * The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.
	 */
	point: "forehead" | "eyes" | "mouth" | "chin";

	/**
	 * Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.
	 */
	x_shift: number;

	/**
	 * Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.
	 */
	y_shift: number;

	/**
	 * Mask scaling coefficient. For example, 2.0 means double size.
	 */
	scale: number;
}

/**
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 */
export interface InlineQuery {
	/**
	 * Unique identifier for this query
	 */
	id: string;

	/**
	 * Sender
	 */
	from: User;

	/**
	 * _Optional_. Sender location, only for bots that request user location
	 */
	location?: Location;

	/**
	 * Text of the query (up to 512 characters)
	 */
	query: string;

	/**
	 * Offset of the results to be returned, can be controlled by the bot
	 */
	offset: string;
}

/**
 * This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:
 *
 * - [InlineQueryResultCachedAudio](https://core.telegram.org/bots/api#inlinequeryresultcachedaudio)
 * - [InlineQueryResultCachedDocument](https://core.telegram.org/bots/api#inlinequeryresultcacheddocument)
 * - [InlineQueryResultCachedGif](https://core.telegram.org/bots/api#inlinequeryresultcachedgif)
 * - [InlineQueryResultCachedMpeg4Gif](https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif)
 * - [InlineQueryResultCachedPhoto](https://core.telegram.org/bots/api#inlinequeryresultcachedphoto)
 * - [InlineQueryResultCachedSticker](https://core.telegram.org/bots/api#inlinequeryresultcachedsticker)
 * - [InlineQueryResultCachedVideo](https://core.telegram.org/bots/api#inlinequeryresultcachedvideo)
 * - [InlineQueryResultCachedVoice](https://core.telegram.org/bots/api#inlinequeryresultcachedvoice)
 * - [InlineQueryResultArticle](https://core.telegram.org/bots/api#inlinequeryresultarticle)
 * - [InlineQueryResultAudio](https://core.telegram.org/bots/api#inlinequeryresultaudio)
 * - [InlineQueryResultContact](https://core.telegram.org/bots/api#inlinequeryresultcontact)
 * - [InlineQueryResultGame](https://core.telegram.org/bots/api#inlinequeryresultgame)
 * - [InlineQueryResultDocument](https://core.telegram.org/bots/api#inlinequeryresultdocument)
 * - [InlineQueryResultGif](https://core.telegram.org/bots/api#inlinequeryresultgif)
 * - [InlineQueryResultLocation](https://core.telegram.org/bots/api#inlinequeryresultlocation)
 * - [InlineQueryResultMpeg4Gif](https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif)
 * - [InlineQueryResultPhoto](https://core.telegram.org/bots/api#inlinequeryresultphoto)
 * - [InlineQueryResultVenue](https://core.telegram.org/bots/api#inlinequeryresultvenue)
 * - [InlineQueryResultVideo](https://core.telegram.org/bots/api#inlinequeryresultvideo)
 * - [InlineQueryResultVoice](https://core.telegram.org/bots/api#inlinequeryresultvoice)
 */
export type InlineQueryResult = InlineQueryResultArticle | InlineQueryResultPhoto | InlineQueryResultGif | InlineQueryResultMpeg4Gif | InlineQueryResultVideo | InlineQueryResultAudio | InlineQueryResultVoice | InlineQueryResultDocument | InlineQueryResultLocation | InlineQueryResultVenue | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultCachedPhoto | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedSticker | InlineQueryResultCachedDocument | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultCachedAudio;

/**
 * Represents a link to an article or web page.
 */
export interface InlineQueryResultArticle {
	/**
	 * Type of the result, must be _article_
	 */
	type: "article";

	/**
	 * Unique identifier for this result, 1-64 Bytes
	 */
	id: string;

	/**
	 * Title of the result
	 */
	title: string;

	/**
	 * Content of the message to be sent
	 */
	input_message_content: InputMessageContent;

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. URL of the result
	 */
	url?: string;

	/**
	 * _Optional_. Pass _True_, if you don't want the URL to be shown in the message
	 */
	hide_url?: boolean;

	/**
	 * _Optional_. Short description of the result
	 */
	description?: string;

	/**
	 * _Optional_. Url of the thumbnail for the result
	 */
	thumb_url?: string;

	/**
	 * _Optional_. Thumbnail width
	 */
	thumb_width?: number;

	/**
	 * _Optional_. Thumbnail height
	 */
	thumb_height?: number;
}

/**
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the photo.
 */
export interface InlineQueryResultPhoto {
	/**
	 * Type of the result, must be _photo_
	 */
	type: "photo";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid URL of the photo. Photo must be in **jpeg** format. Photo size must not exceed 5MB
	 */
	photo_url: string;

	/**
	 * URL of the thumbnail for the photo
	 */
	thumb_url: string;

	/**
	 * _Optional_. Width of the photo
	 */
	photo_width?: number;

	/**
	 * _Optional_. Height of the photo
	 */
	photo_height?: number;

	/**
	 * _Optional_. Title for the result
	 */
	title?: string;

	/**
	 * _Optional_. Short description of the result
	 */
	description?: string;

	/**
	 * _Optional_. Caption of the photo to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the photo
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the animation.
 */
export interface InlineQueryResultGif {
	/**
	 * Type of the result, must be _gif_
	 */
	type: "gif";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid URL for the GIF file. File size must not exceed 1MB
	 */
	gif_url: string;

	/**
	 * _Optional_. Width of the GIF
	 */
	gif_width?: number;

	/**
	 * _Optional_. Height of the GIF
	 */
	gif_height?: number;

	/**
	 * _Optional_. Duration of the GIF
	 */
	gif_duration?: number;

	/**
	 * URL of the static thumbnail for the result (jpeg or gif)
	 */
	thumb_url: string;

	/**
	 * _Optional_. Title for the result
	 */
	title?: string;

	/**
	 * _Optional_. Caption of the GIF file to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the GIF animation
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the animation.
 */
export interface InlineQueryResultMpeg4Gif {
	/**
	 * Type of the result, must be _mpeg4_gif_
	 */
	type: "mpeg4_gif";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid URL for the MP4 file. File size must not exceed 1MB
	 */
	mpeg4_url: string;

	/**
	 * _Optional_. Video width
	 */
	mpeg4_width?: number;

	/**
	 * _Optional_. Video height
	 */
	mpeg4_height?: number;

	/**
	 * _Optional_. Video duration
	 */
	mpeg4_duration?: number;

	/**
	 * URL of the static thumbnail (jpeg or gif) for the result
	 */
	thumb_url: string;

	/**
	 * _Optional_. Title for the result
	 */
	title?: string;

	/**
	 * _Optional_. Caption of the MPEG-4 file to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the video animation
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the video.
 *
 * > If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you **must** replace its content using _input_message_content_.
 */
export interface InlineQueryResultVideo {
	/**
	 * Type of the result, must be _video_
	 */
	type: "video";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid URL for the embedded video player or video file
	 */
	video_url: string;

	/**
	 * Mime type of the content of video url, “text/html” or “video/mp4”
	 */
	mime_type: string;

	/**
	 * URL of the thumbnail (jpeg only) for the video
	 */
	thumb_url: string;

	/**
	 * Title for the result
	 */
	title: string;

	/**
	 * _Optional_. Caption of the video to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. Video width
	 */
	video_width?: number;

	/**
	 * _Optional_. Video height
	 */
	video_height?: number;

	/**
	 * _Optional_. Video duration in seconds
	 */
	video_duration?: number;

	/**
	 * _Optional_. Short description of the result
	 */
	description?: string;

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the video. This field is **required** if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to an mp3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the audio.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export interface InlineQueryResultAudio {
	/**
	 * Type of the result, must be _audio_
	 */
	type: "audio";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid URL for the audio file
	 */
	audio_url: string;

	/**
	 * Title
	 */
	title: string;

	/**
	 * _Optional_. Caption, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. Performer
	 */
	performer?: string;

	/**
	 * _Optional_. Audio duration in seconds
	 */
	audio_duration?: number;

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the audio
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to a voice recording in an .ogg container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the the voice message.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export interface InlineQueryResultVoice {
	/**
	 * Type of the result, must be _voice_
	 */
	type: "voice";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid URL for the voice recording
	 */
	voice_url: string;

	/**
	 * Recording title
	 */
	title: string;

	/**
	 * _Optional_. Caption, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. Recording duration in seconds
	 */
	voice_duration?: number;

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the voice recording
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the file. Currently, only **.PDF** and **.ZIP** files can be sent using this method.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export interface InlineQueryResultDocument {
	/**
	 * Type of the result, must be _document_
	 */
	type: "document";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * Title for the result
	 */
	title: string;

	/**
	 * _Optional_. Caption of the document to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * A valid URL for the file
	 */
	document_url: string;

	/**
	 * Mime type of the content of the file, either “application/pdf” or “application/zip”
	 */
	mime_type: string;

	/**
	 * _Optional_. Short description of the result
	 */
	description?: string;

	/**
	 * _Optional_. Inline keyboard attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the file
	 */
	input_message_content?: InputMessageContent;

	/**
	 * _Optional_. URL of the thumbnail (jpeg only) for the file
	 */
	thumb_url?: string;

	/**
	 * _Optional_. Thumbnail width
	 */
	thumb_width?: number;

	/**
	 * _Optional_. Thumbnail height
	 */
	thumb_height?: number;
}

/**
 * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the location.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export interface InlineQueryResultLocation {
	/**
	 * Type of the result, must be _location_
	 */
	type: "location";

	/**
	 * Unique identifier for this result, 1-64 Bytes
	 */
	id: string;

	/**
	 * Location latitude in degrees
	 */
	latitude: number;

	/**
	 * Location longitude in degrees
	 */
	longitude: number;

	/**
	 * Location title
	 */
	title: string;

	/**
	 * _Optional_. Period in seconds for which the location can be updated, should be between 60 and 86400.
	 */
	live_period?: number;

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the location
	 */
	input_message_content?: InputMessageContent;

	/**
	 * _Optional_. Url of the thumbnail for the result
	 */
	thumb_url?: string;

	/**
	 * _Optional_. Thumbnail width
	 */
	thumb_width?: number;

	/**
	 * _Optional_. Thumbnail height
	 */
	thumb_height?: number;
}

/**
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the venue.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export interface InlineQueryResultVenue {
	/**
	 * Type of the result, must be _venue_
	 */
	type: "venue";

	/**
	 * Unique identifier for this result, 1-64 Bytes
	 */
	id: string;

	/**
	 * Latitude of the venue location in degrees
	 */
	latitude: number;

	/**
	 * Longitude of the venue location in degrees
	 */
	longitude: number;

	/**
	 * Title of the venue
	 */
	title: string;

	/**
	 * Address of the venue
	 */
	address: string;

	/**
	 * _Optional_. Foursquare identifier of the venue if known
	 */
	foursquare_id?: string;

	/**
	 * _Optional_. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
	 */
	foursquare_type?: string;

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the venue
	 */
	input_message_content?: InputMessageContent;

	/**
	 * _Optional_. Url of the thumbnail for the result
	 */
	thumb_url?: string;

	/**
	 * _Optional_. Thumbnail width
	 */
	thumb_width?: number;

	/**
	 * _Optional_. Thumbnail height
	 */
	thumb_height?: number;
}

/**
 * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the contact.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export interface InlineQueryResultContact {
	/**
	 * Type of the result, must be _contact_
	 */
	type: "contact";

	/**
	 * Unique identifier for this result, 1-64 Bytes
	 */
	id: string;

	/**
	 * Contact's phone number
	 */
	phone_number: string;

	/**
	 * Contact's first name
	 */
	first_name: string;

	/**
	 * _Optional_. Contact's last name
	 */
	last_name?: string;

	/**
	 * _Optional_. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes
	 */
	vcard?: string;

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the contact
	 */
	input_message_content?: InputMessageContent;

	/**
	 * _Optional_. Url of the thumbnail for the result
	 */
	thumb_url?: string;

	/**
	 * _Optional_. Thumbnail width
	 */
	thumb_width?: number;

	/**
	 * _Optional_. Thumbnail height
	 */
	thumb_height?: number;
}

/**
 * Represents a [Game](https://core.telegram.org/bots/api#games).
 *
 * **Note:** This will only work in Telegram versions released after October 1, 2016. Older clients will not display any inline results if a game result is among them.
 */
export interface InlineQueryResultGame {
	/**
	 * Type of the result, must be _game_
	 */
	type: "game";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * Short name of the game
	 */
	game_short_name: string;

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;
}

/**
 * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the photo.
 */
export interface InlineQueryResultCachedPhoto {
	/**
	 * Type of the result, must be _photo_
	 */
	type: "photo";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid file identifier of the photo
	 */
	photo_file_id: string;

	/**
	 * _Optional_. Title for the result
	 */
	title?: string;

	/**
	 * _Optional_. Short description of the result
	 */
	description?: string;

	/**
	 * _Optional_. Caption of the photo to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the photo
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use _input_message_content_ to send a message with specified content instead of the animation.
 */
export interface InlineQueryResultCachedGif {
	/**
	 * Type of the result, must be _gif_
	 */
	type: "gif";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid file identifier for the GIF file
	 */
	gif_file_id: string;

	/**
	 * _Optional_. Title for the result
	 */
	title?: string;

	/**
	 * _Optional_. Caption of the GIF file to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the GIF animation
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the animation.
 */
export interface InlineQueryResultCachedMpeg4Gif {
	/**
	 * Type of the result, must be _mpeg4_gif_
	 */
	type: "mpeg4_gif";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid file identifier for the MP4 file
	 */
	mpeg4_file_id: string;

	/**
	 * _Optional_. Title for the result
	 */
	title?: string;

	/**
	 * _Optional_. Caption of the MPEG-4 file to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the video animation
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the sticker.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export interface InlineQueryResultCachedSticker {
	/**
	 * Type of the result, must be _sticker_
	 */
	type: "sticker";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid file identifier of the sticker
	 */
	sticker_file_id: string;

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the sticker
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the file.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export interface InlineQueryResultCachedDocument {
	/**
	 * Type of the result, must be _document_
	 */
	type: "document";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * Title for the result
	 */
	title: string;

	/**
	 * A valid file identifier for the file
	 */
	document_file_id: string;

	/**
	 * _Optional_. Short description of the result
	 */
	description?: string;

	/**
	 * _Optional_. Caption of the document to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the file
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the video.
 */
export interface InlineQueryResultCachedVideo {
	/**
	 * Type of the result, must be _video_
	 */
	type: "video";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid file identifier for the video file
	 */
	video_file_id: string;

	/**
	 * Title for the result
	 */
	title: string;

	/**
	 * _Optional_. Short description of the result
	 */
	description?: string;

	/**
	 * _Optional_. Caption of the video to be sent, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the video
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the voice message.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export interface InlineQueryResultCachedVoice {
	/**
	 * Type of the result, must be _voice_
	 */
	type: "voice";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid file identifier for the voice message
	 */
	voice_file_id: string;

	/**
	 * Voice message title
	 */
	title: string;

	/**
	 * _Optional_. Caption, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the voice message
	 */
	input_message_content?: InputMessageContent;
}

/**
 * Represents a link to an mp3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use _input_message_content_ to send a message with the specified content instead of the audio.
 *
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export interface InlineQueryResultCachedAudio {
	/**
	 * Type of the result, must be _audio_
	 */
	type: "audio";

	/**
	 * Unique identifier for this result, 1-64 bytes
	 */
	id: string;

	/**
	 * A valid file identifier for the audio file
	 */
	audio_file_id: string;

	/**
	 * _Optional_. Caption, 0-1024 characters
	 */
	caption?: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
	 */
	reply_markup?: InlineKeyboardMarkup;

	/**
	 * _Optional_. Content of the message to be sent instead of the audio
	 */
	input_message_content?: InputMessageContent;
}

/**
 * This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:
 *
 * - [InputTextMessageContent](https://core.telegram.org/bots/api#inputtextmessagecontent)
 * - [InputLocationMessageContent](https://core.telegram.org/bots/api#inputlocationmessagecontent)
 * - [InputVenueMessageContent](https://core.telegram.org/bots/api#inputvenuemessagecontent)
 * - [InputContactMessageContent](https://core.telegram.org/bots/api#inputcontactmessagecontent)
 */
export type InputMessageContent = InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent;

/**
 * Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a text message to be sent as the result of an inline query.
 */
export interface InputTextMessageContent {
	/**
	 * Text of the message to be sent, 1-4096 characters
	 */
	message_text: string;

	/**
	 * _Optional_. Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * _Optional_. Disables link previews for links in the sent message
	 */
	disable_web_page_preview?: boolean;
}

/**
 * Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a location message to be sent as the result of an inline query.
 */
export interface InputLocationMessageContent {
	/**
	 * Latitude of the location in degrees
	 */
	latitude: number;

	/**
	 * Longitude of the location in degrees
	 */
	longitude: number;

	/**
	 * _Optional_. Period in seconds for which the location can be updated, should be between 60 and 86400.
	 */
	live_period?: number;
}

/**
 * Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a venue message to be sent as the result of an inline query.
 */
export interface InputVenueMessageContent {
	/**
	 * Latitude of the venue in degrees
	 */
	latitude: number;

	/**
	 * Longitude of the venue in degrees
	 */
	longitude: number;

	/**
	 * Name of the venue
	 */
	title: string;

	/**
	 * Address of the venue
	 */
	address: string;

	/**
	 * _Optional_. Foursquare identifier of the venue, if known
	 */
	foursquare_id?: string;

	/**
	 * _Optional_. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
	 */
	foursquare_type?: string;
}

/**
 * Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a contact message to be sent as the result of an inline query.
 */
export interface InputContactMessageContent {
	/**
	 * Contact's phone number
	 */
	phone_number: string;

	/**
	 * Contact's first name
	 */
	first_name: string;

	/**
	 * _Optional_. Contact's last name
	 */
	last_name?: string;

	/**
	 * _Optional_. Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes
	 */
	vcard?: string;
}

/**
 * Represents a [result](https://core.telegram.org/bots/api#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner.
 *
 * **Note:** It is necessary to enable [inline feedback](https://core.telegram.org/bots/inline#collecting-feedback) via [@Botfather](https://t.me/botfather) in order to receive these objects in updates.
 */
export interface ChosenInlineResult {
	/**
	 * The unique identifier for the result that was chosen
	 */
	result_id: string;

	/**
	 * The user that chose the result
	 */
	from: User;

	/**
	 * _Optional_. Sender location, only for bots that require user location
	 */
	location?: Location;

	/**
	 * _Optional_. Identifier of the sent inline message. Available only if there is an [inline keyboard](https://core.telegram.org/bots/api#inlinekeyboardmarkup) attached to the message. Will be also received in [callback queries](https://core.telegram.org/bots/api#callbackquery) and can be used to [edit](https://core.telegram.org/bots/api#updating-messages) the message.
	 */
	inline_message_id?: string;

	/**
	 * The query that was used to obtain the result
	 */
	query: string;
}

/**
 * This object represents a portion of the price for goods or services.
 */
export interface LabeledPrice {
	/**
	 * Portion label
	 */
	label: string;

	/**
	 * Price of the product in the _smallest units_ of the [currency](https://core.telegram.org/bots/payments#supported-currencies) (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the _exp_ parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
	 */
	amount: number;
}

/**
 * This object contains basic information about an invoice.
 */
export interface Invoice {
	/**
	 * Product name
	 */
	title: string;

	/**
	 * Product description
	 */
	description: string;

	/**
	 * Unique bot deep-linking parameter that can be used to generate this invoice
	 */
	start_parameter: string;

	/**
	 * Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code
	 */
	currency: string;

	/**
	 * Total price in the _smallest units_ of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the _exp_ parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
	 */
	total_amount: number;
}

/**
 * This object represents a shipping address.
 */
export interface ShippingAddress {
	/**
	 * ISO 3166-1 alpha-2 country code
	 */
	country_code: string;

	/**
	 * State, if applicable
	 */
	state: string;

	/**
	 * City
	 */
	city: string;

	/**
	 * First line for the address
	 */
	street_line1: string;

	/**
	 * Second line for the address
	 */
	street_line2: string;

	/**
	 * Address post code
	 */
	post_code: string;
}

/**
 * This object represents information about an order.
 */
export interface OrderInfo {
	/**
	 * _Optional_. User name
	 */
	name?: string;

	/**
	 * _Optional_. User's phone number
	 */
	phone_number?: string;

	/**
	 * _Optional_. User email
	 */
	email?: string;

	/**
	 * _Optional_. User shipping address
	 */
	shipping_address?: ShippingAddress;
}

/**
 * This object represents one shipping option.
 */
export interface ShippingOption {
	/**
	 * Shipping option identifier
	 */
	id: string;

	/**
	 * Option title
	 */
	title: string;

	/**
	 * List of price portions
	 */
	prices: LabeledPrice[];
}

/**
 * This object contains basic information about a successful payment.
 */
export interface SuccessfulPayment {
	/**
	 * Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code
	 */
	currency: string;

	/**
	 * Total price in the _smallest units_ of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the _exp_ parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
	 */
	total_amount: number;

	/**
	 * Bot specified invoice payload
	 */
	invoice_payload: string;

	/**
	 * _Optional_. Identifier of the shipping option chosen by the user
	 */
	shipping_option_id?: string;

	/**
	 * _Optional_. Order info provided by the user
	 */
	order_info?: OrderInfo;

	/**
	 * Telegram payment identifier
	 */
	telegram_payment_charge_id: string;

	/**
	 * Provider payment identifier
	 */
	provider_payment_charge_id: string;
}

/**
 * This object contains information about an incoming shipping query.
 */
export interface ShippingQuery {
	/**
	 * Unique query identifier
	 */
	id: string;

	/**
	 * User who sent the query
	 */
	from: User;

	/**
	 * Bot specified invoice payload
	 */
	invoice_payload: string;

	/**
	 * User specified shipping address
	 */
	shipping_address: ShippingAddress;
}

/**
 * This object contains information about an incoming pre-checkout query.
 */
export interface PreCheckoutQuery {
	/**
	 * Unique query identifier
	 */
	id: string;

	/**
	 * User who sent the query
	 */
	from: User;

	/**
	 * Three-letter ISO 4217 [currency](https://core.telegram.org/bots/payments#supported-currencies) code
	 */
	currency: string;

	/**
	 * Total price in the _smallest units_ of the currency (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the _exp_ parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
	 */
	total_amount: number;

	/**
	 * Bot specified invoice payload
	 */
	invoice_payload: string;

	/**
	 * _Optional_. Identifier of the shipping option chosen by the user
	 */
	shipping_option_id?: string;

	/**
	 * _Optional_. Order info provided by the user
	 */
	order_info?: OrderInfo;
}

/**
 * Contains information about Telegram Passport data shared with the bot by the user.
 */
export interface PassportData {
	/**
	 * Array with information about documents and other Telegram Passport elements that was shared with the bot
	 */
	data: EncryptedPassportElement[];

	/**
	 * Encrypted credentials required to decrypt the data
	 */
	credentials: EncryptedCredentials;
}

/**
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
 */
export interface PassportFile {
	/**
	 * Unique identifier for this file
	 */
	file_id: string;

	/**
	 * File size
	 */
	file_size: number;

	/**
	 * Unix time when the file was uploaded
	 */
	file_date: number;
}

/**
 * Contains information about documents or other Telegram Passport elements shared with the bot by the user.
 */
export interface EncryptedPassportElement {
	/**
	 * Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.
	 */
	type: "personal_details" | "passport" | "driver_license" | "identity_card" | "internal_passport" | "address" | "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration" | "phone_number" | "email";

	/**
	 * _Optional_. Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).
	 */
	data?: string;

	/**
	 * _Optional_. User's verified phone number, available only for “phone_number” type
	 */
	phone_number?: string;

	/**
	 * _Optional_. User's verified email address, available only for “email” type
	 */
	email?: string;

	/**
	 * _Optional_. Array of encrypted files with documents provided by the user, available for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).
	 */
	files?: PassportFile[];

	/**
	 * _Optional_. Encrypted file with the front side of the document, provided by the user. Available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).
	 */
	front_side?: PassportFile;

	/**
	 * _Optional_. Encrypted file with the reverse side of the document, provided by the user. Available for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).
	 */
	reverse_side?: PassportFile;

	/**
	 * _Optional_. Encrypted file with the selfie of the user holding a document, provided by the user; available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).
	 */
	selfie?: PassportFile;

	/**
	 * _Optional_. Array of encrypted files with translated versions of documents provided by the user. Available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials).
	 */
	translation?: PassportFile[];

	/**
	 * Base64-encoded element hash for using in [PassportElementErrorUnspecified](https://core.telegram.org/bots/api#passportelementerrorunspecified)
	 */
	hash: string;
}

/**
 * Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes.
 */
export interface EncryptedCredentials {
	/**
	 * Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for [EncryptedPassportElement](https://core.telegram.org/bots/api#encryptedpassportelement) decryption and authentication
	 */
	data: string;

	/**
	 * Base64-encoded data hash for data authentication
	 */
	hash: string;

	/**
	 * Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
	 */
	secret: string;
}

/**
 * This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:
 *
 * - [PassportElementErrorDataField](https://core.telegram.org/bots/api#passportelementerrordatafield)
 * - [PassportElementErrorFrontSide](https://core.telegram.org/bots/api#passportelementerrorfrontside)
 * - [PassportElementErrorReverseSide](https://core.telegram.org/bots/api#passportelementerrorreverseside)
 * - [PassportElementErrorSelfie](https://core.telegram.org/bots/api#passportelementerrorselfie)
 * - [PassportElementErrorFile](https://core.telegram.org/bots/api#passportelementerrorfile)
 * - [PassportElementErrorFiles](https://core.telegram.org/bots/api#passportelementerrorfiles)
 * - [PassportElementErrorTranslationFile](https://core.telegram.org/bots/api#passportelementerrortranslationfile)
 * - [PassportElementErrorTranslationFiles](https://core.telegram.org/bots/api#passportelementerrortranslationfiles)
 * - [PassportElementErrorUnspecified](https://core.telegram.org/bots/api#passportelementerrorunspecified)
 */
export type PassportElementError = PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified;

/**
 * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
 */
export interface PassportElementErrorDataField {
	/**
	 * Error source, must be _data_
	 */
	source: "data";

	/**
	 * The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”
	 */
	type: "personal_details" | "passport" | "driver_license" | "identity_card" | "internal_passport" | "address";

	/**
	 * Name of the data field which has the error
	 */
	field_name: string;

	/**
	 * Base64-encoded data hash
	 */
	data_hash: string;

	/**
	 * Error message
	 */
	message: string;
}

/**
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 */
export interface PassportElementErrorFrontSide {
	/**
	 * Error source, must be _front_side_
	 */
	source: "front_side";

	/**
	 * The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
	 */
	type: "passport" | "driver_license" | "identity_card" | "internal_passport";

	/**
	 * Base64-encoded hash of the file with the front side of the document
	 */
	file_hash: string;

	/**
	 * Error message
	 */
	message: string;
}

/**
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
 */
export interface PassportElementErrorReverseSide {
	/**
	 * Error source, must be _reverse_side_
	 */
	source: "reverse_side";

	/**
	 * The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card”
	 */
	type: "driver_license" | "identity_card";

	/**
	 * Base64-encoded hash of the file with the reverse side of the document
	 */
	file_hash: string;

	/**
	 * Error message
	 */
	message: string;
}

/**
 * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
 */
export interface PassportElementErrorSelfie {
	/**
	 * Error source, must be _selfie_
	 */
	source: "selfie";

	/**
	 * The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
	 */
	type: "passport" | "driver_license" | "identity_card" | "internal_passport";

	/**
	 * Base64-encoded hash of the file with the selfie
	 */
	file_hash: string;

	/**
	 * Error message
	 */
	message: string;
}

/**
 * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
 */
export interface PassportElementErrorFile {
	/**
	 * Error source, must be _file_
	 */
	source: "file";

	/**
	 * The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
	 */
	type: "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";

	/**
	 * Base64-encoded file hash
	 */
	file_hash: string;

	/**
	 * Error message
	 */
	message: string;
}

/**
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 */
export interface PassportElementErrorFiles {
	/**
	 * Error source, must be _files_
	 */
	source: "files";

	/**
	 * The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
	 */
	type: "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";

	/**
	 * List of base64-encoded file hashes
	 */
	file_hashes: string[];

	/**
	 * Error message
	 */
	message: string;
}

/**
 * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
 */
export interface PassportElementErrorTranslationFile {
	/**
	 * Error source, must be _translation_file_
	 */
	source: "translation_file";

	/**
	 * Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
	 */
	type: "passport" | "driver_license" | "identity_card" | "internal_passport" | "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";

	/**
	 * Base64-encoded file hash
	 */
	file_hash: string;

	/**
	 * Error message
	 */
	message: string;
}

/**
 * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
 */
export interface PassportElementErrorTranslationFiles {
	/**
	 * Error source, must be _translation_files_
	 */
	source: "translation_files";

	/**
	 * Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
	 */
	type: "passport" | "driver_license" | "identity_card" | "internal_passport" | "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration";

	/**
	 * List of base64-encoded file hashes
	 */
	file_hashes: string[];

	/**
	 * Error message
	 */
	message: string;
}

/**
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 */
export interface PassportElementErrorUnspecified {
	/**
	 * Error source, must be _unspecified_
	 */
	source: "unspecified";

	/**
	 * Type of element of the user's Telegram Passport which has the issue
	 */
	type: "personal_details" | "passport" | "driver_license" | "identity_card" | "internal_passport" | "address" | "utility_bill" | "bank_statement" | "rental_agreement" | "passport_registration" | "temporary_registration" | "phone_number" | "email";

	/**
	 * Base64-encoded element hash
	 */
	element_hash: string;

	/**
	 * Error message
	 */
	message: string;
}

/**
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 */
export interface Game {
	/**
	 * Title of the game
	 */
	title: string;

	/**
	 * Description of the game
	 */
	description: string;

	/**
	 * Photo that will be displayed in the game message in chats.
	 */
	photo: PhotoSize[];

	/**
	 * _Optional_. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls [setGameScore](https://core.telegram.org/bots/api#setgamescore), or manually edited using [editMessageText](https://core.telegram.org/bots/api#editmessagetext). 0-4096 characters.
	 */
	text?: string;

	/**
	 * _Optional_. Special entities that appear in _text_, such as usernames, URLs, bot commands, etc.
	 */
	text_entities?: MessageEntity[];

	/**
	 * _Optional_. Animation that will be displayed in the game message in chats. Upload via [BotFather](https://t.me/botfather)
	 */
	animation?: Animation;
}

/**
 * A placeholder, currently holds no information. Use [BotFather](https://t.me/botfather) to set up your game.
 */
export interface CallbackGame {
}

/**
 * This object represents one row of the high scores table for a game.
 */
export interface GameHighScore {
	/**
	 * Position in high score table for the game
	 */
	position: number;

	/**
	 * User
	 */
	user: User;

	/**
	 * Score
	 */
	score: number;
}

/**
 * `getUpdates` parameters
 */
export interface GetUpdatesParameters {
	/**
	 * Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as [getUpdates](https://core.telegram.org/bots/api#getupdates) is called with an _offset_ higher than its _update_id_. The negative offset can be specified to retrieve updates starting from _-offset_ update from the end of the updates queue. All previous updates will forgotten.
	 */
	offset?: number;

	/**
	 * Limits the number of updates to be retrieved. Values between 1—100 are accepted. Defaults to 100.
	 */
	limit?: number;

	/**
	 * Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
	 */
	timeout?: number;

	/**
	 * List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
	 *
	 * Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
	 */
	allowed_updates?: string[];
}

/**
 * `setWebhook` parameters
 */
export interface SetWebhookParameters {
	/**
	 * HTTPS url to send updates to. Use an empty string to remove webhook integration
	 */
	url: string;

	/**
	 * Upload your public key certificate so that the root certificate in use can be checked. See our [self-signed guide](https://core.telegram.org/bots/self-signed) for details.
	 */
	certificate?: InputFile;

	/**
	 * Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to _40_. Use lower values to limit the load on your bot‘s server, and higher values to increase your bot’s throughput.
	 */
	max_connections?: number;

	/**
	 * List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
	 *
	 * Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
	 */
	allowed_updates?: string[];
}

/**
 * `sendMessage` parameters
 */
export interface SendMessageParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Text of the message to be sent
	 */
	text: string;

	/**
	 * Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * Disables link previews for links in this message
	 */
	disable_web_page_preview?: boolean;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `forwardMessage` parameters
 */
export interface ForwardMessageParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)
	 */
	from_chat_id: number | string;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * Message identifier in the chat specified in _from_chat_id_
	 */
	message_id: number;
}

/**
 * `sendPhoto` parameters
 */
export interface SendPhotoParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	photo: InputFile | string;

	/**
	 * Photo caption (may also be used when resending photos by _file_id_), 0-1024 characters
	 */
	caption?: string;

	/**
	 * Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `sendAudio` parameters
 */
export interface SendAudioParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	audio: InputFile | string;

	/**
	 * Audio caption, 0-1024 characters
	 */
	caption?: string;

	/**
	 * Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * Duration of the audio in seconds
	 */
	duration?: number;

	/**
	 * Performer
	 */
	performer?: string;

	/**
	 * Track name
	 */
	title?: string;

	/**
	 * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	thumb?: InputFile | string;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `sendDocument` parameters
 */
export interface SendDocumentParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	document: InputFile | string;

	/**
	 * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	thumb?: InputFile | string;

	/**
	 * Document caption (may also be used when resending documents by _file_id_), 0-1024 characters
	 */
	caption?: string;

	/**
	 * Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `sendVideo` parameters
 */
export interface SendVideoParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	video: InputFile | string;

	/**
	 * Duration of sent video in seconds
	 */
	duration?: number;

	/**
	 * Video width
	 */
	width?: number;

	/**
	 * Video height
	 */
	height?: number;

	/**
	 * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	thumb?: InputFile | string;

	/**
	 * Video caption (may also be used when resending videos by _file_id_), 0-1024 characters
	 */
	caption?: string;

	/**
	 * Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * Pass _True_, if the uploaded video is suitable for streaming
	 */
	supports_streaming?: boolean;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `sendAnimation` parameters
 */
export interface SendAnimationParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	animation: InputFile | string;

	/**
	 * Duration of sent animation in seconds
	 */
	duration?: number;

	/**
	 * Animation width
	 */
	width?: number;

	/**
	 * Animation height
	 */
	height?: number;

	/**
	 * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	thumb?: InputFile | string;

	/**
	 * Animation caption (may also be used when resending animation by _file_id_), 0-1024 characters
	 */
	caption?: string;

	/**
	 * Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `sendVoice` parameters
 */
export interface SendVoiceParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	voice: InputFile | string;

	/**
	 * Voice message caption, 0-1024 characters
	 */
	caption?: string;

	/**
	 * Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * Duration of the voice message in seconds
	 */
	duration?: number;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `sendVideoNote` parameters
 */
export interface SendVideoNoteParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files). Sending video notes by a URL is currently unsupported
	 */
	video_note: InputFile | string;

	/**
	 * Duration of sent video in seconds
	 */
	duration?: number;

	/**
	 * Video width and height, i.e. diameter of the video message
	 */
	length?: number;

	/**
	 * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	thumb?: InputFile | string;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `sendMediaGroup` parameters
 */
export interface SendMediaGroupParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * A JSON-serialized array describing photos and videos to be sent, must include 2–10 items
	 */
	media: (InputMediaPhoto | InputMediaVideo)[];

	/**
	 * Sends the messages [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the messages are a reply, ID of the original message
	 */
	reply_to_message_id?: number;
}

/**
 * `sendLocation` parameters
 */
export interface SendLocationParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Latitude of the location
	 */
	latitude: number;

	/**
	 * Longitude of the location
	 */
	longitude: number;

	/**
	 * Period in seconds for which the location will be updated (see [Live Locations](https://telegram.org/blog/live-locations), should be between 60 and 86400.
	 */
	live_period?: number;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `editMessageLiveLocation` parameters
 */
export interface EditMessageLiveLocationParameters {
	/**
	 * Required if _inline_message_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id?: number | string;

	/**
	 * Required if _inline_message_id_ is not specified. Identifier of the message to edit
	 */
	message_id?: number;

	/**
	 * Required if _chat_id_ and _message_id_ are not specified. Identifier of the inline message
	 */
	inline_message_id?: string;

	/**
	 * Latitude of new location
	 */
	latitude: number;

	/**
	 * Longitude of new location
	 */
	longitude: number;

	/**
	 * A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating).
	 */
	reply_markup?: InlineKeyboardMarkup;
}

/**
 * `stopMessageLiveLocation` parameters
 */
export interface StopMessageLiveLocationParameters {
	/**
	 * Required if _inline_message_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id?: number | string;

	/**
	 * Required if _inline_message_id_ is not specified. Identifier of the message with live location to stop
	 */
	message_id?: number;

	/**
	 * Required if _chat_id_ and _message_id_ are not specified. Identifier of the inline message
	 */
	inline_message_id?: string;

	/**
	 * A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating).
	 */
	reply_markup?: InlineKeyboardMarkup;
}

/**
 * `sendVenue` parameters
 */
export interface SendVenueParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Latitude of the venue
	 */
	latitude: number;

	/**
	 * Longitude of the venue
	 */
	longitude: number;

	/**
	 * Name of the venue
	 */
	title: string;

	/**
	 * Address of the venue
	 */
	address: string;

	/**
	 * Foursquare identifier of the venue
	 */
	foursquare_id?: string;

	/**
	 * Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
	 */
	foursquare_type?: string;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `sendContact` parameters
 */
export interface SendContactParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Contact's phone number
	 */
	phone_number: string;

	/**
	 * Contact's first name
	 */
	first_name: string;

	/**
	 * Contact's last name
	 */
	last_name?: string;

	/**
	 * Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes
	 */
	vcard?: string;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `sendPoll` parameters
 */
export interface SendPollParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`). A native poll can't be sent to a private chat.
	 */
	chat_id: number | string;

	/**
	 * Poll question, 1-255 characters
	 */
	question: string;

	/**
	 * List of answer options, 2-10 strings 1-100 characters each
	 */
	options: string[];

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `sendChatAction` parameters
 */
export interface SendChatActionParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Type of action to broadcast. Choose one, depending on what the user is about to receive: _typing_ for [text messages](https://core.telegram.org/bots/api#sendmessage), _upload_photo_ for [photos](https://core.telegram.org/bots/api#sendphoto), _record_video_ or _upload_video_ for [videos](https://core.telegram.org/bots/api#sendvideo), _record_audio_ or _upload_audio_ for [audio files](https://core.telegram.org/bots/api#sendaudio), _upload_document_ for [general files](https://core.telegram.org/bots/api#senddocument), _find_location_ for [location data](https://core.telegram.org/bots/api#sendlocation), _record_video_note_ or _upload_video_note_ for [video notes](https://core.telegram.org/bots/api#sendvideonote).
	 */
	action: "typing" | "upload_photo" | "record_video" | "upload_video" | "record_audio" | "upload_audio" | "upload_document" | "find_location" | "record_video_note" | "upload_video_note";
}

/**
 * `getUserProfilePhotos` parameters
 */
export interface GetUserProfilePhotosParameters {
	/**
	 * Unique identifier of the target user
	 */
	user_id: number;

	/**
	 * Sequential number of the first photo to be returned. By default, all photos are returned.
	 */
	offset?: number;

	/**
	 * Limits the number of photos to be retrieved. Values between 1—100 are accepted. Defaults to 100.
	 */
	limit?: number;
}

/**
 * `getFile` parameters
 */
export interface GetFileParameters {
	/**
	 * File identifier to get info about
	 */
	file_id: string;
}

/**
 * `kickChatMember` parameters
 */
export interface KickChatMemberParameters {
	/**
	 * Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Unique identifier of the target user
	 */
	user_id: number;

	/**
	 * Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever
	 */
	until_date?: number;
}

/**
 * `unbanChatMember` parameters
 */
export interface UnbanChatMemberParameters {
	/**
	 * Unique identifier for the target group or username of the target supergroup or channel (in the format `@username`)
	 */
	chat_id: number | string;

	/**
	 * Unique identifier of the target user
	 */
	user_id: number;
}

/**
 * `restrictChatMember` parameters
 */
export interface RestrictChatMemberParameters {
	/**
	 * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
	 */
	chat_id: number | string;

	/**
	 * Unique identifier of the target user
	 */
	user_id: number;

	/**
	 * Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
	 */
	until_date?: number;

	/**
	 * Pass True, if the user can send text messages, contacts, locations and venues
	 */
	can_send_messages?: boolean;

	/**
	 * Pass True, if the user can send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages
	 */
	can_send_media_messages?: boolean;

	/**
	 * Pass True, if the user can send animations, games, stickers and use inline bots, implies can_send_media_messages
	 */
	can_send_other_messages?: boolean;

	/**
	 * Pass True, if the user may add web page previews to their messages, implies can_send_media_messages
	 */
	can_add_web_page_previews?: boolean;
}

/**
 * `promoteChatMember` parameters
 */
export interface PromoteChatMemberParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Unique identifier of the target user
	 */
	user_id: number;

	/**
	 * Pass True, if the administrator can change chat title, photo and other settings
	 */
	can_change_info?: boolean;

	/**
	 * Pass True, if the administrator can create channel posts, channels only
	 */
	can_post_messages?: boolean;

	/**
	 * Pass True, if the administrator can edit messages of other users and can pin messages, channels only
	 */
	can_edit_messages?: boolean;

	/**
	 * Pass True, if the administrator can delete messages of other users
	 */
	can_delete_messages?: boolean;

	/**
	 * Pass True, if the administrator can invite new users to the chat
	 */
	can_invite_users?: boolean;

	/**
	 * Pass True, if the administrator can restrict, ban or unban chat members
	 */
	can_restrict_members?: boolean;

	/**
	 * Pass True, if the administrator can pin messages, supergroups only
	 */
	can_pin_messages?: boolean;

	/**
	 * Pass True, if the administrator can add new administrators with a subset of his own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him)
	 */
	can_promote_members?: boolean;
}

/**
 * `exportChatInviteLink` parameters
 */
export interface ExportChatInviteLinkParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;
}

/**
 * `setChatPhoto` parameters
 */
export interface SetChatPhotoParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * New chat photo, uploaded using multipart/form-data
	 */
	photo: InputFile;
}

/**
 * `deleteChatPhoto` parameters
 */
export interface DeleteChatPhotoParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;
}

/**
 * `setChatTitle` parameters
 */
export interface SetChatTitleParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * New chat title, 1-255 characters
	 */
	title: string;
}

/**
 * `setChatDescription` parameters
 */
export interface SetChatDescriptionParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * New chat description, 0-255 characters
	 */
	description?: string;
}

/**
 * `pinChatMessage` parameters
 */
export interface PinChatMessageParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Identifier of a message to pin
	 */
	message_id: number;

	/**
	 * Pass _True_, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels.
	 */
	disable_notification?: boolean;
}

/**
 * `unpinChatMessage` parameters
 */
export interface UnpinChatMessageParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;
}

/**
 * `leaveChat` parameters
 */
export interface LeaveChatParameters {
	/**
	 * Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
	 */
	chat_id: number | string;
}

/**
 * `getChat` parameters
 */
export interface GetChatParameters {
	/**
	 * Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
	 */
	chat_id: number | string;
}

/**
 * `getChatAdministrators` parameters
 */
export interface GetChatAdministratorsParameters {
	/**
	 * Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
	 */
	chat_id: number | string;
}

/**
 * `getChatMembersCount` parameters
 */
export interface GetChatMembersCountParameters {
	/**
	 * Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
	 */
	chat_id: number | string;
}

/**
 * `getChatMember` parameters
 */
export interface GetChatMemberParameters {
	/**
	 * Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Unique identifier of the target user
	 */
	user_id: number;
}

/**
 * `setChatStickerSet` parameters
 */
export interface SetChatStickerSetParameters {
	/**
	 * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
	 */
	chat_id: number | string;

	/**
	 * Name of the sticker set to be set as the group sticker set
	 */
	sticker_set_name: string;
}

/**
 * `deleteChatStickerSet` parameters
 */
export interface DeleteChatStickerSetParameters {
	/**
	 * Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
	 */
	chat_id: number | string;
}

/**
 * `answerCallbackQuery` parameters
 */
export interface AnswerCallbackQueryParameters {
	/**
	 * Unique identifier for the query to be answered
	 */
	callback_query_id: string;

	/**
	 * Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
	 */
	text?: string;

	/**
	 * If _true_, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to _false_.
	 */
	show_alert?: boolean;

	/**
	 * URL that will be opened by the user's client. If you have created a [Game](https://core.telegram.org/bots/api#game) and accepted the conditions via [@Botfather](https://t.me/botfather), specify the URL that opens your game – note that this will only work if the query comes from a [_callback_game_](https://core.telegram.org/bots/api#inlinekeyboardbutton) button.
	 *
	 * Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
	 */
	url?: string;

	/**
	 * The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.
	 */
	cache_time?: number;
}

/**
 * `editMessageText` parameters
 */
export interface EditMessageTextParameters {
	/**
	 * Required if _inline_message_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id?: number | string;

	/**
	 * Required if _inline_message_id_ is not specified. Identifier of the message to edit
	 */
	message_id?: number;

	/**
	 * Required if _chat_id_ and _message_id_ are not specified. Identifier of the inline message
	 */
	inline_message_id?: string;

	/**
	 * New text of the message
	 */
	text: string;

	/**
	 * Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * Disables link previews for links in this message
	 */
	disable_web_page_preview?: boolean;

	/**
	 * A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating).
	 */
	reply_markup?: InlineKeyboardMarkup;
}

/**
 * `editMessageCaption` parameters
 */
export interface EditMessageCaptionParameters {
	/**
	 * Required if _inline_message_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id?: number | string;

	/**
	 * Required if _inline_message_id_ is not specified. Identifier of the message to edit
	 */
	message_id?: number;

	/**
	 * Required if _chat_id_ and _message_id_ are not specified. Identifier of the inline message
	 */
	inline_message_id?: string;

	/**
	 * New caption of the message
	 */
	caption?: string;

	/**
	 * Send [_Markdown_](https://core.telegram.org/bots/api#markdown-style) or [_HTML_](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption.
	 */
	parse_mode?: "Markdown" | "HTML";

	/**
	 * A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating).
	 */
	reply_markup?: InlineKeyboardMarkup;
}

/**
 * `editMessageMedia` parameters
 */
export interface EditMessageMediaParameters {
	/**
	 * Required if _inline_message_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id?: number | string;

	/**
	 * Required if _inline_message_id_ is not specified. Identifier of the message to edit
	 */
	message_id?: number;

	/**
	 * Required if _chat_id_ and _message_id_ are not specified. Identifier of the inline message
	 */
	inline_message_id?: string;

	/**
	 * A JSON-serialized object for a new media content of the message
	 */
	media: InputMedia;

	/**
	 * A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating).
	 */
	reply_markup?: InlineKeyboardMarkup;
}

/**
 * `editMessageReplyMarkup` parameters
 */
export interface EditMessageReplyMarkupParameters {
	/**
	 * Required if _inline_message_id_ is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id?: number | string;

	/**
	 * Required if _inline_message_id_ is not specified. Identifier of the message to edit
	 */
	message_id?: number;

	/**
	 * Required if _chat_id_ and _message_id_ are not specified. Identifier of the inline message
	 */
	inline_message_id?: string;

	/**
	 * A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating).
	 */
	reply_markup?: InlineKeyboardMarkup;
}

/**
 * `stopPoll` parameters
 */
export interface StopPollParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Identifier of the original message with the poll
	 */
	message_id: number;

	/**
	 * A JSON-serialized object for a new message [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating).
	 */
	reply_markup?: InlineKeyboardMarkup;
}

/**
 * `deleteMessage` parameters
 */
export interface DeleteMessageParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Identifier of the message to delete
	 */
	message_id: number;
}

/**
 * `sendSticker` parameters
 */
export interface SendStickerParameters {
	/**
	 * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
	 */
	chat_id: number | string;

	/**
	 * Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .webp file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	sticker: InputFile | string;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
	 */
	reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
}

/**
 * `getStickerSet` parameters
 */
export interface GetStickerSetParameters {
	/**
	 * Name of the sticker set
	 */
	name: string;
}

/**
 * `uploadStickerFile` parameters
 */
export interface UploadStickerFileParameters {
	/**
	 * User identifier of sticker file owner
	 */
	user_id: number;

	/**
	 * **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	png_sticker: InputFile;
}

/**
 * `createNewStickerSet` parameters
 */
export interface CreateNewStickerSetParameters {
	/**
	 * User identifier of created sticker set owner
	 */
	user_id: number;

	/**
	 * Short name of sticker set, to be used in `t.me/addstickers/` URLs (e.g., _animals_). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in _“_by_<bot username>”_. _<bot_username>_ is case insensitive. 1-64 characters.
	 */
	name: string;

	/**
	 * Sticker set title, 1-64 characters
	 */
	title: string;

	/**
	 * **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a _file_id_ as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	png_sticker: InputFile | string;

	/**
	 * One or more emoji corresponding to the sticker
	 */
	emojis: string;

	/**
	 * Pass _True_, if a set of mask stickers should be created
	 */
	contains_masks?: boolean;

	/**
	 * A JSON-serialized object for position where the mask should be placed on faces
	 */
	mask_position?: MaskPosition;
}

/**
 * `addStickerToSet` parameters
 */
export interface AddStickerToSetParameters {
	/**
	 * User identifier of sticker set owner
	 */
	user_id: number;

	/**
	 * Sticker set name
	 */
	name: string;

	/**
	 * **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a _file_id_ as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files)
	 */
	png_sticker: InputFile | string;

	/**
	 * One or more emoji corresponding to the sticker
	 */
	emojis: string;

	/**
	 * A JSON-serialized object for position where the mask should be placed on faces
	 */
	mask_position?: MaskPosition;
}

/**
 * `setStickerPositionInSet` parameters
 */
export interface SetStickerPositionInSetParameters {
	/**
	 * File identifier of the sticker
	 */
	sticker: string;

	/**
	 * New sticker position in the set, zero-based
	 */
	position: number;
}

/**
 * `deleteStickerFromSet` parameters
 */
export interface DeleteStickerFromSetParameters {
	/**
	 * File identifier of the sticker
	 */
	sticker: string;
}

/**
 * `answerInlineQuery` parameters
 */
export interface AnswerInlineQueryParameters {
	/**
	 * Unique identifier for the answered query
	 */
	inline_query_id: string;

	/**
	 * A JSON-serialized array of results for the inline query
	 */
	results: InlineQueryResult[];

	/**
	 * The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
	 */
	cache_time?: number;

	/**
	 * Pass _True_, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query
	 */
	is_personal?: boolean;

	/**
	 * Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don‘t support pagination. Offset length can’t exceed 64 bytes.
	 */
	next_offset?: string;

	/**
	 * If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter _switch_pm_parameter_
	 */
	switch_pm_text?: string;

	/**
	 * [Deep-linking](https://core.telegram.org/bots#deep-linking) parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.
	 *
	 * _Example:_ An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a ‘Connect your YouTube account’ button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a [_switch_inline_](https://core.telegram.org/bots/api#inlinekeyboardmarkup) button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
	 */
	switch_pm_parameter?: string;
}

/**
 * `sendInvoice` parameters
 */
export interface SendInvoiceParameters {
	/**
	 * Unique identifier for the target private chat
	 */
	chat_id: number;

	/**
	 * Product name, 1-32 characters
	 */
	title: string;

	/**
	 * Product description, 1-255 characters
	 */
	description: string;

	/**
	 * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
	 */
	payload: string;

	/**
	 * Payments provider token, obtained via [Botfather](https://t.me/botfather)
	 */
	provider_token: string;

	/**
	 * Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter
	 */
	start_parameter: string;

	/**
	 * Three-letter ISO 4217 currency code, see [more on currencies](https://core.telegram.org/bots/payments#supported-currencies)
	 */
	currency: string;

	/**
	 * Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
	 */
	prices: LabeledPrice[];

	/**
	 * JSON-encoded data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
	 */
	provider_data?: string;

	/**
	 * URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
	 */
	photo_url?: string;

	/**
	 * Photo size
	 */
	photo_size?: number;

	/**
	 * Photo width
	 */
	photo_width?: number;

	/**
	 * Photo height
	 */
	photo_height?: number;

	/**
	 * Pass _True_, if you require the user's full name to complete the order
	 */
	need_name?: boolean;

	/**
	 * Pass _True_, if you require the user's phone number to complete the order
	 */
	need_phone_number?: boolean;

	/**
	 * Pass _True_, if you require the user's email address to complete the order
	 */
	need_email?: boolean;

	/**
	 * Pass _True_, if you require the user's shipping address to complete the order
	 */
	need_shipping_address?: boolean;

	/**
	 * Pass _True_, if user's phone number should be sent to provider
	 */
	send_phone_number_to_provider?: boolean;

	/**
	 * Pass _True_, if user's email address should be sent to provider
	 */
	send_email_to_provider?: boolean;

	/**
	 * Pass _True_, if the final price depends on the shipping method
	 */
	is_flexible?: boolean;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If empty, one 'Pay `total price`' button will be shown. If not empty, the first button must be a Pay button.
	 */
	reply_markup?: InlineKeyboardMarkup;
}

/**
 * `answerShippingQuery` parameters
 */
export interface AnswerShippingQueryParameters {
	/**
	 * Unique identifier for the query to be answered
	 */
	shipping_query_id: string;

	/**
	 * Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
	 */
	ok: boolean;

	/**
	 * Required if _ok_ is True. A JSON-serialized array of available shipping options.
	 */
	shipping_options?: ShippingOption[];

	/**
	 * Required if _ok_ is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.
	 */
	error_message?: string;
}

/**
 * `answerPreCheckoutQuery` parameters
 */
export interface AnswerPreCheckoutQueryParameters {
	/**
	 * Unique identifier for the query to be answered
	 */
	pre_checkout_query_id: string;

	/**
	 * Specify _True_ if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use _False_ if there are any problems.
	 */
	ok: boolean;

	/**
	 * Required if _ok_ is _False_. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.
	 */
	error_message?: string;
}

/**
 * `setPassportDataErrors` parameters
 */
export interface SetPassportDataErrorsParameters {
	/**
	 * User identifier
	 */
	user_id: number;

	/**
	 * A JSON-serialized array describing the errors
	 */
	errors: PassportElementError[];
}

/**
 * `sendGame` parameters
 */
export interface SendGameParameters {
	/**
	 * Unique identifier for the target chat
	 */
	chat_id: number;

	/**
	 * Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather).
	 */
	game_short_name: string;

	/**
	 * Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
	 */
	disable_notification?: boolean;

	/**
	 * If the message is a reply, ID of the original message
	 */
	reply_to_message_id?: number;

	/**
	 * A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If empty, one ‘Play game_title’ button will be shown. If not empty, the first button must launch the game.
	 */
	reply_markup?: InlineKeyboardMarkup;
}

/**
 * `setGameScore` parameters
 */
export interface SetGameScoreParameters {
	/**
	 * User identifier
	 */
	user_id: number;

	/**
	 * New score, must be non-negative
	 */
	score: number;

	/**
	 * Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
	 */
	force?: boolean;

	/**
	 * Pass True, if the game message should not be automatically edited to include the current scoreboard
	 */
	disable_edit_message?: boolean;

	/**
	 * Required if _inline_message_id_ is not specified. Unique identifier for the target chat
	 */
	chat_id?: number;

	/**
	 * Required if _inline_message_id_ is not specified. Identifier of the sent message
	 */
	message_id?: number;

	/**
	 * Required if _chat_id_ and _message_id_ are not specified. Identifier of the inline message
	 */
	inline_message_id?: string;
}

/**
 * `getGameHighScores` parameters
 */
export interface GetGameHighScoresParameters {
	/**
	 * Target user id
	 */
	user_id: number;

	/**
	 * Required if _inline_message_id_ is not specified. Unique identifier for the target chat
	 */
	chat_id?: number;

	/**
	 * Required if _inline_message_id_ is not specified. Identifier of the sent message
	 */
	message_id?: number;

	/**
	 * Required if _chat_id_ and _message_id_ are not specified. Identifier of the inline message
	 */
	inline_message_id?: string;
}

export default abstract class AbstractApi {
	/**
	 * Use this method to receive incoming updates using long polling ([wiki](http://en.wikipedia.org/wiki/Push_technology#Long_polling)). An Array of [Update](https://core.telegram.org/bots/api#update) objects is returned.
	 *
	 * > **Notes**
	 * >
	 * > **1.** This method will not work if an outgoing webhook is set up.
	 * >
	 * > **2.** In order to avoid getting duplicate updates, recalculate _offset_ after each server response.
	 */
	abstract getUpdates(parameters: GetUpdatesParameters): Promise<Update[]>;

	/**
	 * Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized [Update](https://core.telegram.org/bots/api#update). In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns _True_ on success.
	 *
	 * If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL, e.g. `https://www.example.com/<token>`. Since nobody else knows your bot‘s token, you can be pretty sure it’s us.
	 *
	 * > **Notes**
	 * >
	 * > **1.** You will not be able to receive updates using [getUpdates](https://core.telegram.org/bots/api#getupdates) for as long as an outgoing webhook is set up.
	 * >
	 * > **2.** To use a self-signed certificate, you need to upload your [public key certificate](https://core.telegram.org/bots/self-signed) using _certificate_ parameter. Please upload as InputFile, sending a String will not work.
	 * >
	 * > **3.** Ports currently supported _for Webhooks_: **443, 80, 88, 8443**.
	 * >
	 * > **NEW!** If you're having any trouble setting up webhooks, please check out this [amazing guide to Webhooks](https://core.telegram.org/bots/webhooks).
	 */
	abstract setWebhook(parameters: SetWebhookParameters): Promise<boolean>;

	/**
	 * Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api#getupdates). Returns _True_ on success. Requires no parameters.
	 */
	abstract deleteWebhook(): Promise<boolean>;

	/**
	 * Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api#webhookinfo) object. If the bot is using [getUpdates](https://core.telegram.org/bots/api#getupdates), will return an object with the _url_ field empty.
	 */
	abstract getWebhookInfo(): Promise<WebhookInfo>;

	/**
	 * A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api#user) object.
	 */
	abstract getMe(): Promise<User>;

	/**
	 * Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract sendMessage(parameters: SendMessageParameters): Promise<Message>;

	/**
	 * Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract forwardMessage(parameters: ForwardMessageParameters): Promise<Message>;

	/**
	 * Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract sendPhoto(parameters: SendPhotoParameters): Promise<Message>;

	/**
	 * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .mp3 format. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
	 *
	 * For sending voice messages, use the [sendVoice](https://core.telegram.org/bots/api#sendvoice) method instead.
	 */
	abstract sendAudio(parameters: SendAudioParameters): Promise<Message>;

	/**
	 * Use this method to send general files. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
	 */
	abstract sendDocument(parameters: SendDocumentParameters): Promise<Message>;

	/**
	 * Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as [Document](https://core.telegram.org/bots/api#document)). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
	 */
	abstract sendVideo(parameters: SendVideoParameters): Promise<Message>;

	/**
	 * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
	 */
	abstract sendAnimation(parameters: SendAnimationParameters): Promise<Message>;

	/**
	 * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .ogg file encoded with OPUS (other formats may be sent as [Audio](https://core.telegram.org/bots/api#audio) or [Document](https://core.telegram.org/bots/api#document)). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
	 */
	abstract sendVoice(parameters: SendVoiceParameters): Promise<Message>;

	/**
	 * As of [v.4.0](https://telegram.org/blog/video-messages-and-telescope), Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract sendVideoNote(parameters: SendVideoNoteParameters): Promise<Message>;

	/**
	 * Use this method to send a group of photos or videos as an album. On success, an array of the sent [Messages](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract sendMediaGroup(parameters: SendMediaGroupParameters): Promise<Message>;

	/**
	 * Use this method to send point on the map. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract sendLocation(parameters: SendLocationParameters): Promise<Message>;

	/**
	 * Use this method to edit live location messages. A location can be edited until its _live_period_ expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api#stopmessagelivelocation). On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned.
	 */
	abstract editMessageLiveLocation(parameters: EditMessageLiveLocationParameters): Promise<Message | boolean>;

	/**
	 * Use this method to stop updating a live location message before _live_period_ expires. On success, if the message was sent by the bot, the sent [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned.
	 */
	abstract stopMessageLiveLocation(parameters: StopMessageLiveLocationParameters): Promise<Message | boolean>;

	/**
	 * Use this method to send information about a venue. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract sendVenue(parameters: SendVenueParameters): Promise<Message>;

	/**
	 * Use this method to send phone contacts. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract sendContact(parameters: SendContactParameters): Promise<Message>;

	/**
	 * Use this method to send a native poll. A native poll can't be sent to a private chat. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract sendPoll(parameters: SendPollParameters): Promise<Message>;

	/**
	 * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns _True_ on success.
	 *
	 * > Example: The [ImageBot](https://t.me/imagebot) needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use [sendChatAction](https://core.telegram.org/bots/api#sendchataction) with _action_ = _upload_photo_. The user will see a “sending photo” status for the bot.
	 *
	 * We only recommend using this method when a response from the bot will take a **noticeable** amount of time to arrive.
	 */
	abstract sendChatAction(parameters: SendChatActionParameters): Promise<boolean>;

	/**
	 * Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api#userprofilephotos) object.
	 */
	abstract getUserProfilePhotos(parameters: GetUserProfilePhotosParameters): Promise<UserProfilePhotos>;

	/**
	 * Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile) again.
	 *
	 * **Note:** This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.
	 */
	abstract getFile(parameters: GetFileParameters): Promise<File>;

	/**
	 * Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless [unbanned](https://core.telegram.org/bots/api#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns _True_ on success.
	 *
	 * > Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group. Otherwise members may only be removed by the group's creator or by the member that added them.
	 */
	abstract kickChatMember(parameters: KickChatMemberParameters): Promise<boolean>;

	/**
	 * Use this method to unban a previously kicked user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. Returns _True_ on success.
	 */
	abstract unbanChatMember(parameters: UnbanChatMemberParameters): Promise<boolean>;

	/**
	 * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass _True_ for all boolean parameters to lift restrictions from a user. Returns _True_ on success.
	 */
	abstract restrictChatMember(parameters: RestrictChatMemberParameters): Promise<boolean>;

	/**
	 * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass _False_ for all boolean parameters to demote a user. Returns _True_ on success.
	 */
	abstract promoteChatMember(parameters: PromoteChatMemberParameters): Promise<boolean>;

	/**
	 * Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as _String_ on success.
	 *
	 * > Note: Each administrator in a chat generates their own invite links. Bots can't use invite links generated by other administrators. If you want your bot to work with invite links, it will need to generate its own link using [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink) – after this the link will become available to the bot via the [getChat](https://core.telegram.org/bots/api#getchat) method. If your bot needs to generate a new invite link replacing its previous one, use [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink) again.
	 */
	abstract exportChatInviteLink(parameters: ExportChatInviteLinkParameters): Promise<string>;

	/**
	 * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns _True_ on success.
	 *
	 * > Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
	 */
	abstract setChatPhoto(parameters: SetChatPhotoParameters): Promise<boolean>;

	/**
	 * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns _True_ on success.
	 *
	 * > Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
	 */
	abstract deleteChatPhoto(parameters: DeleteChatPhotoParameters): Promise<boolean>;

	/**
	 * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns _True_ on success.
	 *
	 * > Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
	 */
	abstract setChatTitle(parameters: SetChatTitleParameters): Promise<boolean>;

	/**
	 * Use this method to change the description of a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns _True_ on success.
	 */
	abstract setChatDescription(parameters: SetChatDescriptionParameters): Promise<boolean>;

	/**
	 * Use this method to pin a message in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the ‘can_pin_messages’ admin right in the supergroup or ‘can_edit_messages’ admin right in the channel. Returns _True_ on success.
	 */
	abstract pinChatMessage(parameters: PinChatMessageParameters): Promise<boolean>;

	/**
	 * Use this method to unpin a message in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the ‘can_pin_messages’ admin right in the supergroup or ‘can_edit_messages’ admin right in the channel. Returns _True_ on success.
	 */
	abstract unpinChatMessage(parameters: UnpinChatMessageParameters): Promise<boolean>;

	/**
	 * Use this method for your bot to leave a group, supergroup or channel. Returns _True_ on success.
	 */
	abstract leaveChat(parameters: LeaveChatParameters): Promise<boolean>;

	/**
	 * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a [Chat](https://core.telegram.org/bots/api#chat) object on success.
	 */
	abstract getChat(parameters: GetChatParameters): Promise<Chat>;

	/**
	 * Use this method to get a list of administrators in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api#chatmember) objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
	 */
	abstract getChatAdministrators(parameters: GetChatAdministratorsParameters): Promise<ChatMember[]>;

	/**
	 * Use this method to get the number of members in a chat. Returns _Int_ on success.
	 */
	abstract getChatMembersCount(parameters: GetChatMembersCountParameters): Promise<number>;

	/**
	 * Use this method to get information about a member of a chat. Returns a [ChatMember](https://core.telegram.org/bots/api#chatmember) object on success.
	 */
	abstract getChatMember(parameters: GetChatMemberParameters): Promise<ChatMember>;

	/**
	 * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field _can_set_sticker_set_ optionally returned in [getChat](https://core.telegram.org/bots/api#getchat) requests to check if the bot can use this method. Returns _True_ on success.
	 */
	abstract setChatStickerSet(parameters: SetChatStickerSetParameters): Promise<boolean>;

	/**
	 * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field _can_set_sticker_set_ optionally returned in [getChat](https://core.telegram.org/bots/api#getchat) requests to check if the bot can use this method. Returns _True_ on success.
	 */
	abstract deleteChatStickerSet(parameters: DeleteChatStickerSetParameters): Promise<boolean>;

	/**
	 * Use this method to send answers to callback queries sent from [inline keyboards](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, _True_ is returned.
	 *
	 * > Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via [@Botfather](https://t.me/botfather) and accept the terms. Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
	 */
	abstract answerCallbackQuery(parameters: AnswerCallbackQueryParameters): Promise<boolean>;

	/**
	 * Use this method to edit text and [game](https://core.telegram.org/bots/api#games) messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned.
	 */
	abstract editMessageText(parameters: EditMessageTextParameters): Promise<Message | boolean>;

	/**
	 * Use this method to edit captions of messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned.
	 */
	abstract editMessageCaption(parameters: EditMessageCaptionParameters): Promise<Message | boolean>;

	/**
	 * Use this method to edit animation, audio, document, photo, or video messages. If a message is a part of a message album, then it can be edited only to a photo or a video. Otherwise, message type can be changed arbitrarily. When inline message is edited, new file can't be uploaded. Use previously uploaded file via its file_id or specify a URL. On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned.
	 */
	abstract editMessageMedia(parameters: EditMessageMediaParameters): Promise<Message | boolean>;

	/**
	 * Use this method to edit only the reply markup of messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise _True_ is returned.
	 */
	abstract editMessageReplyMarkup(parameters: EditMessageReplyMarkupParameters): Promise<Message | boolean>;

	/**
	 * Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](https://core.telegram.org/bots/api#poll) with the final results is returned.
	 */
	abstract stopPoll(parameters: StopPollParameters): Promise<Poll>;

	/**
	 * Use this method to delete a message, including service messages, with the following limitations:
	 *
	 * - A message can only be deleted if it was sent less than 48 hours ago.
	 *
	 * - Bots can delete outgoing messages in private chats, groups, and supergroups.
	 *
	 * - Bots can delete incoming messages in private chats.
	 *
	 * - Bots granted _can_post_messages_ permissions can delete outgoing messages in channels.
	 *
	 * - If the bot is an administrator of a group, it can delete any message there.
	 *
	 * - If the bot has _can_delete_messages_ permission in a supergroup or a channel, it can delete any message there.
	 *
	 * Returns _True_ on success.
	 */
	abstract deleteMessage(parameters: DeleteMessageParameters): Promise<boolean>;

	/**
	 * Use this method to send .webp stickers. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract sendSticker(parameters: SendStickerParameters): Promise<Message>;

	/**
	 * Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api#stickerset) object is returned.
	 */
	abstract getStickerSet(parameters: GetStickerSetParameters): Promise<StickerSet>;

	/**
	 * Use this method to upload a .png file with a sticker for later use in _createNewStickerSet_ and _addStickerToSet_ methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api#file) on success.
	 */
	abstract uploadStickerFile(parameters: UploadStickerFileParameters): Promise<File>;

	/**
	 * Use this method to create new sticker set owned by a user. The bot will be able to edit the created sticker set. Returns _True_ on success.
	 */
	abstract createNewStickerSet(parameters: CreateNewStickerSetParameters): Promise<boolean>;

	/**
	 * Use this method to add a new sticker to a set created by the bot. Returns _True_ on success.
	 */
	abstract addStickerToSet(parameters: AddStickerToSetParameters): Promise<boolean>;

	/**
	 * Use this method to move a sticker in a set created by the bot to a specific position . Returns _True_ on success.
	 */
	abstract setStickerPositionInSet(parameters: SetStickerPositionInSetParameters): Promise<boolean>;

	/**
	 * Use this method to delete a sticker from a set created by the bot. Returns _True_ on success.
	 */
	abstract deleteStickerFromSet(parameters: DeleteStickerFromSetParameters): Promise<boolean>;

	/**
	 * Use this method to send answers to an inline query. On success, _True_ is returned.
	 *
	 * No more than **50** results per query are allowed.
	 */
	abstract answerInlineQuery(parameters: AnswerInlineQueryParameters): Promise<boolean>;

	/**
	 * Use this method to send invoices. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract sendInvoice(parameters: SendInvoiceParameters): Promise<Message>;

	/**
	 * If you sent an invoice requesting a shipping address and the parameter _is_flexible_ was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api#update) with a _shipping_query_ field to the bot. Use this method to reply to shipping queries. On success, True is returned.
	 */
	abstract answerShippingQuery(parameters: AnswerShippingQueryParameters): Promise<boolean>;

	/**
	 * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api#update) with the field _pre_checkout_query_. Use this method to respond to such pre-checkout queries. On success, True is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
	 */
	abstract answerPreCheckoutQuery(parameters: AnswerPreCheckoutQueryParameters): Promise<boolean>;

	/**
	 * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns _True_ on success.
	 *
	 * Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
	 */
	abstract setPassportDataErrors(parameters: SetPassportDataErrorsParameters): Promise<boolean>;

	/**
	 * Use this method to send a game. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned.
	 */
	abstract sendGame(parameters: SendGameParameters): Promise<Message>;

	/**
	 * Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api#message), otherwise returns _True_. Returns an error, if the new score is not greater than the user's current score in the chat and _force_ is _False_.
	 */
	abstract setGameScore(parameters: SetGameScoreParameters): Promise<Message | boolean>;

	/**
	 * Use this method to get data for high score tables. Will return the score of the specified user and several of his neighbors in a game. On success, returns an _Array_ of [GameHighScore](https://core.telegram.org/bots/api#gamehighscore) objects.
	 *
	 * > This method will currently return scores for the target user, plus two of his closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change.
	 */
	abstract getGameHighScores(parameters: GetGameHighScoresParameters): Promise<GameHighScore[]>;
}

