import axios from "axios";
import LibException from "../exceptions/lib-exception";
import * as appManager from "../infrastructure/app-manager"
import firebase from 'firebase'
import { uuid } from "vue-uuid";

const uploadImage = async (file) => {
    const storageRef = await firebase.storage().ref(uuid.v1()).put(file);

    const imageUrl = await storageRef.ref.getDownloadURL();

    return imageUrl;
}

export {
    uploadImage,
}