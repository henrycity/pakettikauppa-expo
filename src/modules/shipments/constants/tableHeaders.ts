const tableHeaders = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Invoice Number',
    accessor: 'invoiceNumber',
  },
  {
    Header: 'Receiver Name',
    accessor: 'receiverName',
  },
  {
    Header: 'Post Code',
    accessor: 'postCode',
  },
  {
    Header: 'Post Office',
    accessor: 'postOffice',
  },
  {
    Header: 'Country Code',
    accessor: 'countryCode',
  },
  {
    Header: 'Receiver Email',
    accessor: 'receiverEmail',
  },
  {
    Header: 'Reference',
    accessor: 'reference',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Latest Event',
    accessor: 'latestEvent',
  },
  {
    Header: 'Created On',
    accessor: 'createdOn',
  },
]

export const cellWidths: { [key: string]: number } = {
  invoiceNumber: 100,
  receiverName: 100,
  postCode: 100,
  postOffice: 100,
  countryCode: 100,
  receiverEmail: 130,
  reference: 100,
  price: 100,
  status: 100,
  latestEvent: 100,
  createdOn: 330,
}

export default tableHeaders
