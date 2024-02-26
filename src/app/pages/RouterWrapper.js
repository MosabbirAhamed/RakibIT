import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/sections";
import WhatsappBtn from "../components/elements/WhatsappBtn";





function RouterWrapper() {

    return (
        <>

            <Header />
            <Outlet />

            <Footer />
            <WhatsappBtn />
        </>

    )
}

export default RouterWrapper