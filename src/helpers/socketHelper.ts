import io from 'socket.io-client'
import ChatMessage from '@/models/ChatMessage'

const MESSAGE_CHANNEL = 'chatMsgEvent'
const UPDATE_CHANNEL = 'updateUser'
const JOIN_CHANNEL = 'joinRoom'
const LEAVE_CHANNEL = 'leaveRoom'

export default class SocketHelper {
  private static instance: SocketHelper;
  // eslint-disable-next-line
  private readonly socket: any;

  private constructor () {
    this.socket = io('http://localhost:8081', { transports: ['websocket'] })
  }

  public static getInstance (): SocketHelper {
    if (!SocketHelper.instance) {
      SocketHelper.instance = new SocketHelper()
    }
    return SocketHelper.instance
  }

  // eslint-disable-next-line
  public get getSocket (): any {
    return this.socket
  }

  public listenMessages (handler: (a: ChatMessage) => void): void {
    this.socket.on(MESSAGE_CHANNEL, handler)
  }

  public stopListening (): void {
    this.socket.off(MESSAGE_CHANNEL)
  }

  public sendMessage (chatMsg: ChatMessage): void {
    this.socket.emit(MESSAGE_CHANNEL, chatMsg)
  }

  public joinRoom (key: string, id: string, user: string): void {
    this.socket.emit(JOIN_CHANNEL, key, id, user)
  }

  public leaveRoom (key: string, id: string, user: string): void {
    this.socket.emit(LEAVE_CHANNEL, key, id, user)
  }

  public updateInfo (key: string, id: string, user: string): void {
    this.socket.emit(UPDATE_CHANNEL, key, id, user)
  }
}
