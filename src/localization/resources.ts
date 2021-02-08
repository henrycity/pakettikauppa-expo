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
      register: 'Register',
      registerDetails: 'Please enter your details',
      registerSuccess: 'Registration submitted!',
      email: 'Email:',
      submit: 'Submit',
      close: 'Close',
      vatID: 'Vat ID',
      loginText: 'Login or register with a Google account',
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
      login: 'Kirjaudu',
      register: 'Rekisteröidy',
      registerDetails: 'Lisää tietosi',
      registerSuccess: 'Rekisteröinti lähetetty!',
      email: 'Sähköposti:',
      submit: 'Lähetä',
      close: 'Sulje',
      vatID: 'ALV tunnus:',
      loginText: 'Kirjaudu sisään tai rekisteröidy Google-tilillä',
    },
  },
  se: {
    translation: {
      profile: 'Profil',
      reports: 'Raporter',
      statistics: 'Statistik',
      shipments: 'Transporter',
      settings: 'Inställningar',
      logout: 'Logga ut',
      login: 'Logga in',
      register: 'Registrera',
      registerDetails: 'Lägg till din information',
      registerSuccess: 'Registering skickad!',
      email: 'E-post:',
      submit: 'Skicka in',
      close: 'stäng',
      vatID: 'MOMS ID:',
      loginText: 'Logga in eller registrera dig med din Google-konto',
    },
  },
}

export default resources

export const languages = Object.keys(resources)
