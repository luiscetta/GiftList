import axios from 'axios';

import { sheets } from '../config';


const { giftListUrl, presenceListUrl } = sheets;

export async function GetGiftList() {
    try {
        const gifts = (await axios.get(giftListUrl)).data;
        return gifts;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function UpdateGiftList(data) {
    try {
        await axios.patch(`${giftListUrl}/${data.Id - 1}`, data);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function AddToPresenceList(data) {
    try {
        await axios.post(presenceListUrl, data);
    } catch (err) {
        console.error(err);
        throw err;
    }
}