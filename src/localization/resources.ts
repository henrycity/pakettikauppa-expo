// the translations
// (tip move them in a JSON file and import them (which should make the app load faster when there are lots of resources))
const resources = {
  en: {
    translation: {
      profile: 'Profile',
      reports: 'Reports',
      statistics: 'Statistics',
      shipments: 'Shipments',
      shipmentDetails: 'Shipment details',
      settings: 'Settings',
      logout: 'Log out',
      login: 'Login',
      register: 'Register',
      registerDetails: 'Please enter your details',
      registerSuccess: 'Registration submitted!',
      email: 'Email:',
      submit: 'Submit',
      close: 'Close',
      vatID: 'Vat ID',
      loginText: 'Login or register with a Google account',

      newShipment: 'New shipment',
      pickup: 'Pickup orders',
      lineHaul: 'Create line haul label',
      multipleLabels: 'Download multiple labels',
      download: 'Download',
      delete: 'Delete',
      back: 'Back',
      next: 'Next',
      sender: 'Sender info',
      businessID: 'Business ID',
      name: 'Name',
      address: 'Address',
      city: 'City',
      postcode: 'Postcode',
      country: 'Country',
      phone: 'Phone Number',
      email2: 'Email',
      previous: 'Previous',
      deliveryCompany: 'Delivery Company',
      shippingMethod: 'Shipping Method',
      weight: 'Weight',
      reference: 'Reference',
      description: 'Description',
      invoiceNumber: 'Invoice Number',
      receiver: 'Receiver info',
      other: 'Other info',
      createShipment: 'Create new shipment',
      language: 'Language',
      selection: 'English',
      shipmentAdded: 'Shipment added!',
    },
    shipments: {
      createdOn: 'Date',
      trackingCode: 'Tracking code',
      receiverName: 'Name',
      receiverEmail: 'E-mail',
      receiverPostCode: 'Postcode',
      receiverCity: 'Post office',
      receiverCountry: 'Country code',
      price: 'Price',
      deliveryCompany: 'Delivery company',
      status: 'Status code',
      reference: 'Reference',
      latestEvent: 'Latest event',
      invoiceNumber: 'Invoice number',
      shippingMethod: 'Delivery method',
    },
    shipmentDetails: {
      carrier: 'Carrier',
      carrierService: 'Carrier service',
      stamp: 'Stamp',
      receiver: 'Receiver',
      phoneNumber: 'Phone number',
      email: 'E-mail',
      pickupPoint: 'Pickup point',
      additionalServices: 'Additional services',
      estimatedPrice: 'Estimated price',
      actualPrice: 'Actual price',
      measuredWeight: 'Measured weight',
      createdAt: 'Created at',
      transaction: 'Transaction',
    },
  },
  fi: {
    translation: {
      profile: 'Profiili',
      reports: 'Raportit',
      statistics: 'Tilastot',
      shipments: 'Lähetykset',
      shipmentDetails: 'Lähetyksen tiedot',
      settings: 'Asetukset',
      logout: 'Kirjaudu ulos',
      login: 'Kirjaudu',
      register: 'Rekisteröidy',
      registerDetails: 'Lisää tietosi',
      registerSuccess: 'Rekisteröinti lähetetty!',
      email: 'Sähköposti:',
      submit: 'Lähetä',
      close: 'Sulje',
      vatID: 'ALV tunnus:',
      loginText: 'Kirjaudu sisään tai rekisteröidy Google-tilillä',
      newShipment: 'Uusi kuljetus',
      pickup: 'Haettavat tilaukset',
      lineHaul: 'Luo maalinjaetiketti',
      multipleLabels: 'Lataa useita etikettejä',
      delete: 'Poista',
      back: 'Takaisin',
      next: 'Seuraava',
      sender: 'Lähettäjän tiedot',
      businessID: 'Yrityksen ID',
      name: 'Nimi',
      address: 'Osoite',
      city: 'Kaupunki',
      postcode: 'Postinumero',
      country: 'Maa',
      phone: 'Puhelinnumero',
      email2: 'Sähköposti',
      previous: 'Edellinen',
      deliveryCompany: 'Lähettiyritys',
      shippingMethod: 'Kuljetustapa',
      weight: 'Paino',
      reference: 'Viite',
      description: 'Kuvaus',
      invoiceNumber: 'Laskun NRO',
      receiver: 'Vastaanottajan tiedot',
      other: 'Muut tiedot',
      createShipment: 'Luo uusi kuljetus',
      language: 'Kieli',
      selection: 'Suomi',
    },
    shipments: {
      createdOn: 'Päivämäärä',
      receiverName: 'Nimi',
      trackingCode: 'Seurantakoodi',
      receiverEmail: 'Sähköposti',
      receiverPostCode: 'Postinumero',
      receiverCity: 'Postitoimipaikka',
      receiverCountry: 'Maakoodi',
      price: 'Kustannus',
      deliveryCompany: 'Kuljetusyhtiö',
      status: 'Tila',
      reference: 'Viitenumero',
      latestEvent: 'Viimeisin tapahtuma',
      invoiceNumber: 'Laskun numero',
      shippingMethod: 'Toimitustapa',
    },
    shipmentDetails: {
      carrier: 'Kuljetusyhtiö',
      carrierService: 'Toimitusmuoto',
      stamp: 'Leima',
      receiver: 'Viitenumero',
      phoneNumber: 'Puhelin',
      email: 'Sähköposti',
      pickupPoint: 'Noutopiste',
      additionalServices: 'Palvelut',
      estimatedPrice: 'Arvioitu kustannus',
      actualPrice: 'Toteutunut kustannus',
      measuredWeight: 'Mitattu paino',
      createdAt: 'Luotu',
      transaction: 'Lähetys',
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
      login: 'Logga in',
      register: 'Registrera dig',
      registerDetails: 'Lägg till din information',
      registerSuccess: 'Registering skickad!',
      email: 'E-post:',
      submit: 'Skicka in',
      close: 'Stäng',
      vatID: 'MOMS ID:',
      loginText: 'Logga in eller registrera dig med din Google-konto',
      //TODO
      newShipment: 'Ny transport',
      pickup: 'Pickup transport',
      lineHaul: 'Skapa linjetrafiksetikett',
      multipleLabels: 'Ladda ner flera etiketter',
      delete: 'Radera',
      back: 'Stäng',
      next: 'Nästa',
      sender: 'Sändare',
      businessID: 'Företags ID',
      name: 'Namn',
      address: 'Adress',
      city: 'Stad',
      postcode: 'Postanstalt',
      country: 'Land',
      phone: 'Telefonnummer',
      email2: 'E-post',
      previous: 'Föregående',
      deliveryCompany: 'Distributionsföretag',
      shippingMethod: 'Transportsätt',
      weight: 'Vikt',
      reference: 'Referensnummer',
      description: 'Beskrivning',
      invoiceNumber: 'Fakturanummer',
      receiver: 'Mottagare',
      other: 'Övrig information',
      createShipment: 'Skapa ny transport',
      language: 'Språk',
      selection: 'Svenska',
    },
    shipments: {
      createdOn: 'Datum',
      receiverName: 'Namn',
      receiverEmail: 'E-post',
      receiverPostCode: 'Postkod',
      receiverCity: 'Postanstalt',
      receiverCountry: 'Land',
      price: 'Pris',
      deliveryCompany: 'Distributionsföretag',
      status: 'Status',
      reference: 'Referensnummer',
      latestEvent: 'Senaste händelse',
      invoiceNumber: 'Fakturanr.',
      shippingMethod: 'Transportsätt',
    },
  },
}

export default resources

export const languages = [
  { code: 'fi', name: 'Suomi' },
  { code: 'en', name: 'English' },
  { code: 'se', name: 'Svenska' },
]
