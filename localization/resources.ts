// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      profile: 'Profile',
      shipments: 'Shipments',
      settings: 'Settings',
    },
  },
  fi: {
    translation: {
      profile: 'Profiili',
      shipments: 'Lähetykset',
      settings: 'Asetukset',
    },
  },
  se: {
    translation: {
      profile: 'Profil',
      shipments: 'Transporter',
      settings: 'Inställningar',
    },
  },
}

export default resources

export const languages = Object.keys(resources)
