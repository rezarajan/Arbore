// @flow
import { Record } from 'immutable'

export const Page = {
  SHARING: 'SHARING',
  CHAT: 'CHAT',
  CONTACT: 'CONTACT',
  SETTINGS: 'SETTINGS'
}
export type PageType = $Keys<typeof Page>

export const writable = {
  profileOpen: 'profileOpen',
  newShareOpen: 'newShareOpen',
  page: 'page',
  selectedChat: 'selectedChat',
}

export const UiRecord = Record({
  profileOpen: false,
  newShareOpen: false,
  page: Page.CONTACT,
  selectedChat: null,
}, 'UiState')

export default class UiState extends UiRecord {
  profileOpen: boolean
  newShareOpen: boolean
  page: PageType
  selectedChat: string

  // indicate if any drawer is open
  get drawerOpen() : boolean {
    return this.newShareOpen || this.profileOpen
  }
}
