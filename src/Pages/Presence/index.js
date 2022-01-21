import { useEffect } from 'react';
import { toast } from 'react-toastify';

import InputGroup from '../../Components/PresenceInput';
import { SuccessToast } from '../../utils/toast';


export default function Presence() {
    const storage = window.sessionStorage;

    useEffect(() => {
        if (storage.getItem('presenceConfirmationSuccess')) {
            SuccessToast('Presença confirmada com sucesso!', { position: toast.POSITION.TOP_CENTER });
            storage.removeItem('presenceConfirmationSuccess');
        }
    });

    return (
        <>
            <InputGroup/>
        </>
    )
}