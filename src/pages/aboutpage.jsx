import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutHero from "../components/aboutHero";
import bg2 from "../assets/imagens/bg2.jpg";


const aboutpage = () => {
return (


    <>
    <div className="flex flex-col min-h-screen">
            
            <Navbar/>
           
            

    <div className="content-wrap p-8">
    <AboutHero img = {bg2}/>
    </div>

        
            <Footer />
        </div>
    
    
    </>
)





}
export default aboutpage