import { v4 as uuidv4 } from 'uuid'

const USER_NAME_KEY = 'userName'
const USER_ID_KEY = 'userId'

export function getUserId (): string {
  let userId: string = <string>localStorage.getItem(USER_ID_KEY)
  if (!userId) {
    userId = uuidv4()
    localStorage.setItem(USER_ID_KEY, userId)
  }
  return userId
}

export function setUserName (userName: string): void {
  localStorage.setItem(USER_NAME_KEY, userName)
}

export function getUserName (): string {
  return <string>localStorage.getItem(USER_NAME_KEY)
}

export default {
  getUserId,
  setUserName,
  getUserName
}
