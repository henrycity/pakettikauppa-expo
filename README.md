# Pakettikauppa Expo

![Coverage](https://gitlab.pakettikauppa.fi/aalto/pakettikauppa-expo/badges/master/coverage.svg?style=flat-square)

## Latest deployed versions

Mobile

- [Expo CDN](https://expo.io/@pakettikauppa/projects/pakettikauppa-expo)

Web ![Netlify Status](https://api.netlify.com/api/v1/badges/4ae69533-894e-4cd3-9cd5-6f4065e6c74e/deploy-status)

- [Netlify](https://pakettikauppa-expo.netlify.app)

## Instructions

### Starting the developement server

```
expo start
```

### Testing the web build

```
expo build:web
npx serve web-build
```

### Running tests

```
yarn test
```

_Automated on git commits and pushes._

### Code formatting, liting, and type checking

```
yarn format
yarn lint
yarn type-check
```

_Automated on git commits._
