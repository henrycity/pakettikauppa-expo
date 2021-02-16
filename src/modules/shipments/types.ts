export type FormDataOne = {
  businessID: string
  senderName: string
  senderAddress: string
  senderCountry: string
  senderPostCode: string
  senderCity: string
  senderPhoneNumber: string
  senderEmail: string
}

export type FormDataTwo = {
  receiverAddress: string
  receiverCity: string
  receiverCountry: string
  receiverEmail: string
  receiverName: string
  receiverPhoneNumber: string
  receiverPostCode: string
}

export type FormDataThree = {
  description: string
  invoiceNumber: string
  reference: string
  deliveryCompany: string
  shippingMethod: string
  weight: string
}

export type allShipments = {
  businessID: string
  senderName: string
  senderAddress: string
  senderCountry: string
  senderPostCode: string
  senderCity: string
  senderPhoneNumber: string
  senderEmail: string
  receiverAddress: string
  receiverCity: string
  receiverCountry: string
  receiverEmail: string
  receiverName: string
  receiverPhoneNumber: string
  receiverPostCode: string
  description: string
  invoiceNumber: string
  reference: string
  deliveryCompany: string
  shippingMethod: string
  weight: string
}

export type finalShipment = {
  businessID: string
  senderName: string
  senderAddress: string
  senderCountry: string
  senderPostCode: string
  senderCity: string
  senderPhoneNumber: string
  senderEmail: string
  receiverAddress: string
  receiverCity: string
  receiverCountry: string
  receiverEmail: string
  receiverName: string
  receiverPhoneNumber: string
  receiverPostCode: string
  description: string
  invoiceNumber: string
  reference: string
  deliveryCompany: string
  shippingMethod: string
  weight: string
  latestEvent: string
  status: string
  createdOn: string
  id: number
  price: string
}

type Next = {
  type: 'next'
}

type Previous = {
  type: 'previous'
}

type Submit = {
  type: 'submit'
}

type Back = {
  type: 'back'
}

export type ActionType = Next | Previous | Submit | Back

export interface State {
  count: number
}

export type ValidatorError = {
  param: string
  value: string
  msg: string
}
