import axios from 'axios';

import { google } from '../config';


const { giftListUrl } = google.sheets;

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