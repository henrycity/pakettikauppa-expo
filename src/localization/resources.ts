// the translations
// (tip move them in a JSON file and import them (which should make the app load faster when there are lots of resources))
const resources = {
  en: {
    translation: {
      profile: 'Profile',
      reports: 'Reports',
      statistics: 'Statistics',
      shipments: 'Shipments',
      settings: 'Settings',
      logout: 'Log out',
      login: 'Login',
    },
    shipments: {
      createdOn: 'Created on',
      receiverName: 'Receiver name',
      receiverEmail: 'Receiver email',
      postCode: 'Post code',
      postOffice: 'Post office',
      countryCode: 'Country code',
      price: 'Price',
      deliveryCompany: 'Delivery company',
      status: 'Status',
      reference: 'Reference',
      latestEvent: 'Latest event',
      invoiceNumber: 'Invoice number',
    },
  },
  fi: {
    translation: {
      profile: 'Profiili',
      reports: 'Raportit',
      statistics: 'Tilastot',
      shipments: 'Lähetykset',
      settings: 'Asetukset',
      logout: 'Kirjaudu ulos',
    },
  },
  se: {
    translation: {
      profile: 'Profil',
      reports: 'Rapporter',
      statistics: 'Statistik',
      shipments: 'Transporter',
      settings: 'Inställningar',
      logout: 'Logga ut',
    },
  },
}

export default resources

export const languages = Object.keys(resources)
