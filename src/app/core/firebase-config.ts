/**
 * @module CoreModule
 */ /** */
import { FirebaseAppConfig } from 'angularfire2';
/**
 * @whatItDoes provides config info for initializing the AngularFireModule
 * @consumers {@link CoreModule}
 */
export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyCp4R72IRClKsqIyq0OlReOI1nmAOSWygc',
  authDomain: 'https://pv-site.firebaseio.com/',
  databaseURL: 'https://pv-site.firebaseio.com/',
  storageBucket: 'gs://pv-site.appspot.com'
};
