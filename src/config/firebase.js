import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import Constant from "expo-constants";

const firebaseConfig = {
    apikey: Constant.manifest.extra.apikey,
    authDomain: Constant.manifest.extra.authDomain,
    projectId: Constant.manifest.extra.projectId,
    StorageBucket: Constant.manifest.extra.StorageBucket,
    appId: Constant.manifest.extra.appId,
    messagingSenderId: Constant.manifest.extra.messagingSenderId,
    measurementId: Constant.manifest.extra.measurementId
}

initializeApp(firebaseConfig);
export const BD = getFirestore();
