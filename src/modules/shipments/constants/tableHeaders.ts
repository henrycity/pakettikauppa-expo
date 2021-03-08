import { Shipment } from '../types'

export const cellData: {
  [key: string]: { flex: number }
} = {
  invoiceNumber: {
    flex: 1.3,
  },
  receiverName: {
    flex: 1.6,
  },
  receiverPostCode: {
    flex: 1.2,
  },
  receiverCity: {
    flex: 1.4,
  },
  receiverCountry: {
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
  shippingMethod: {
    flex: 1.7,
  },
}

export const shipmentHeaders: (keyof Shipment)[] = [
  'invoiceNumber',
  'receiverName',
  'receiverPostCode',
  'receiverCity',
  'receiverCountry',
  'receiverEmail',
  'reference',
  'price',
  'status',
  'latestEvent',
  'deliveryCompany',
  'createdOn',
  'shippingMethod',
]
