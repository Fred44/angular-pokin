// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: "AIzaSyAxiYC9gGzYiThXk6gxUA3rKaDGP2ihw9Y",
  authDomain: "mynggirebase.firebaseapp.com",
  databaseURL: "https://mynggirebase.firebaseio.com",
  projectId: "mynggirebase",
  storageBucket: "mynggirebase.appspot.com",
  messagingSenderId: "11203105826"
};

export const functionsUrl = 'https://us-central1-mynggirebase.cloudfunctions.net';


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
