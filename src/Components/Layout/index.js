import { Routes } from '../../routes';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
    return (
        <>
            <Header/>
            <Routes/>
            <Footer/>
        </>
    )
}