import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { SuccessToast } from '../../utils/toast';
import Gift from './Gift';
import GiftConfirmationForm from '../Forms/GiftConfirmationForm';
import Modal from '../Modal';
import * as SheetsService from '../../services/Sheets';
import './styles.scss';


export default function GiftListItems() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedGifts, setSelectedGifts] = useState([]);
    const [giftList, setGiftList] = useState([]);
    const storage = window.sessionStorage;

    useEffect(() => {
        if (storage.getItem('giftConfirmationSuccess')) {
            SuccessToast('Presentes confirmados, obrigado!', { position: toast.POSITION.TOP_CENTER });
            storage.removeItem('giftConfirmationSuccess');
        }
    });

    useEffect(() => {
        async function loadGiftList() {
            if (!giftList.length) {
                const gifts = await SheetsService.GetGiftList();
                setGiftList(gifts.filter(g => !g.From));
            }
        }
        loadGiftList();
    }, [giftList.length]);

    const toggleModal = () => setIsModalVisible(!isModalVisible);
    const addGifts = (e, gift) => {
        if (e.target.checked) {
            setSelectedGifts(previous => [...previous, gift]);
        }
        else setSelectedGifts(previous => [...previous.filter(p => p.Name !== gift.Name)]);
    };

    return (
        <div className="scroll-container">
            <h2 className="gift-title">Lista de Presentes</h2>
            <div className="overflow">
                {giftList.map((gift, i) => <Gift gift={gift} onCheck={(e) => addGifts(e, gift)} key={i} />)}
            </div>
            <div className="gift-confirmation">
                <button className="btn-gift-confirmation" onClick={toggleModal}>Confirmar Presentes</button>
            </div>
            {isModalVisible ?
                <Modal onClose={toggleModal}>
                    {selectedGifts.length ?
                        <GiftConfirmationForm selectedGifts={selectedGifts} />
                        :
                        <div className="no-gifts-chosen">
                            <span>Selecione um presente primeiro!</span>
                            <button onClick={toggleModal}>Ok</button>
                        </div>
                    }
                </Modal>
                :
                null
            }
        </div>
    );
}
