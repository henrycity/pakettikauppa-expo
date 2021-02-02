import { Shipment } from '../../../types'

export const cellData: {
  [key: string]: { flex: number }
} = {
  invoiceNumber: {
    flex: 1.3,
  },
  receiverName: {
    flex: 1.6,
  },
  postCode: {
    flex: 1.2,
  },
  postOffice: {
    flex: 1.4,
  },
  countryCode: {
    flex: 1.7,
  },
  receiverEmail: {
    flex: 2.1,
  },
  reference: {
    flex: 1.5,
  },
  price: {
    flex: 1,
  },
  status: {
    flex: 1,
  },
  latestEvent: {
    flex: 1,
  },
  createdOn: {
    flex: 2,
  },
  deliveryCompany: {
    flex: 1.7,
  },
}

export const shipmentHeaders: (keyof Shipment)[] = [
  'invoiceNumber',
  'receiverName',
  'postCode',
  'postOffice',
  'countryCode',
  'receiverEmail',
  'reference',
  'price',
  'status',
  'latestEvent',
  'deliveryCompany',
  'createdOn',
]
