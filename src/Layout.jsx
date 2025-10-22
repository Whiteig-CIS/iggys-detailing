import {Outlet} from "react-router-dom";
import Header from './components/Header';

const Layout = () => {
    return (
        <>
            <Header />
           
            <Outlet />

            <p>My footer</p>
        </>
    );
}

export default Layout;