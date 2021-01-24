import { Shipment } from '../../../types'

export const cellData: {
  [key: string]: { flex: number; headerRows: number }
} = {
  invoiceNumber: {
    flex: 1.3,
    headerRows: 2,
  },
  receiverName: {
    flex: 1.6,
    headerRows: 2,
  },
  postCode: {
    flex: 1.2,
    headerRows: 2,
  },
  postOffice: {
    flex: 1.4,
    headerRows: 2,
  },
  countryCode: {
    flex: 1.7,
    headerRows: 2,
  },
  receiverEmail: {
    flex: 2.1,
    headerRows: 2,
  },
  reference: {
    flex: 1.5,
    headerRows: 1,
  },
  price: {
    flex: 1,
    headerRows: 1,
  },
  status: {
    flex: 1,
    headerRows: 1,
  },
  latestEvent: {
    flex: 1,
    headerRows: 2,
  },
  createdOn: {
    flex: 2,
    headerRows: 2,
  },
  deliveryCompany: {
    flex: 1.7,
    headerRows: 2,
  },
}

export const shipmentHeaders: (keyof Shipment)[] = [
  'createdOn',
  'receiverName',
  'receiverEmail',
  'postCode',
  'postOffice',
  'countryCode',
  'price',
  'deliveryCompany',
  'status',
  'reference',
  'latestEvent',
  'invoiceNumber',
]
