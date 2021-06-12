export default class ChatMessage {
  room: string
  userNickName: string
  sentTimestamp: number;
  message: string;

  constructor (room: string, userNickName: string, sentTimestamp: number, message: string) {
    this.room = room
    this.userNickName = userNickName
    this.sentTimestamp = sentTimestamp
    this.message = message
  }
}
