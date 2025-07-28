import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";

const contactpage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
            
                <Navbar/>
                <ContactForm/>
                </div>



            <div>
                <Footer />
            </div>





        </>





    )




}
export default contactpage;