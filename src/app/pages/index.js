import { Routes, Route, } from "react-router-dom";
import RouterWrapper from "./RouterWrapper";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
import NotFound from "./NotFound";


function Pages() {
    return (
        <>
            <Routes>

                <Route path="/" element={<RouterWrapper />} >
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>
        </>
    )
}

export default Pages