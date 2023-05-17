// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getRemoteConfig } from "firebase/remote-config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfQeV4byOlNw7J07ZU3jkybyKfzMWfx5A",
  authDomain: "metridash-test.firebaseapp.com",
  projectId: "metridash-test",
  storageBucket: "metridash-test.appspot.com",
  messagingSenderId: "496401816575",
  appId: "1:496401816575:web:92edb1d51a8ba7ea9925ca",
  measurementId: "G-Q294VLDYWH",
};

export const firebase = initializeApp(firebaseConfig);

let remoteConfigVar;
if (typeof window !== "undefined") {
  remoteConfigVar = getRemoteConfig(firebase);
  remoteConfigVar.settings.minimumFetchIntervalMillis = 600000;
}
export const remoteConfig = remoteConfigVar;
