export default class ChatMessage {
  userNickName: string
  sentTimestamp: number;
  message: string;

  constructor (userNickName: string, sentTimestamp: number, message: string) {
    this.userNickName = userNickName
    this.sentTimestamp = sentTimestamp
    this.message = message
  }
}
