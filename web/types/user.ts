import { USTAInfo } from './ustaInfo'

export interface User {
  id: string
  firstName: string
  lastName: string
  fullName: string
  image: string
  fallbackImgText: string
  phoneNumber: string
  email: string
  ustaInfo: USTAInfo
}