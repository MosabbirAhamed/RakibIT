import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/sections";





function RouterWrapper() {

    return (
        <>
            <Header />
            <Outlet />

            <Footer />

        </>
    )
}

export default RouterWrapper