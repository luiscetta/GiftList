import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


toast.configure({
    style: { 
        fontWeight: 'bold',
        fontSize: '.9rem',
    },
});

export function SuccessToast(content, options = {}) {
    return toast.success(content, { ...options });
}

export function ErrorToast(content, options = {}) {
    return toast.error(content, { ...options });
}

export function WarningToast(content, options = {}) {
    return toast.warning(content, ...options);
}

export function InfoToast(content, options = {}) {
    return toast.info(content, ...options);
}