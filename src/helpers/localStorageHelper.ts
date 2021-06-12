const USER_NAME_KEY = 'userName'

export function setUserName (userName: string): void {
  localStorage.setItem(USER_NAME_KEY, userName)
}

export function getUserName (): string {
  return <string>localStorage.getItem(USER_NAME_KEY)
}

export default {
  setUserName,
  getUserName
}
