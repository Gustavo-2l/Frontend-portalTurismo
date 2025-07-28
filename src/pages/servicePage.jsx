import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import bg2 from "../assets/imagens/bg2.jpg"
import Carousel from "../components/carousel";

const ServicePage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                    <Hero Background = {bg2} titulo = "Portal de Serviços" paragrafo="Venha conhecer os mais diversos serviços de turismo" rota="#" botao="Conhecer Agora" />
                    <div>
                        <Carousel/>
                    </div>
                </div>
                    <Footer />
            </div>
        </>
    )
}

export default ServicePage;