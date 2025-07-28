import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <footer className="w-full bg-gradient-to-l from-purple-300 to-purple-950 text-black py-2 px-2 shadow-lg mt-auto">
            <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-'1">
                    <p className="text-base text-white"> Nova serra verde. Todos os direitos reservados</p>
                    <p className="text-base text-white"> Created By Gustavo Andrade Vidal 2025</p>
                </div>

                <div className="flex space-x-6 text-lg">
                <a href="#" className="hover:text-purple-800"><FaFacebookF /></a>
                <a href="#" className="hover:text-purple-800"><FaWhatsapp/></a>
                <a href="#" className="hover:text-purple-800"><FaInstagram/></a>
                </div>
                
            </div>
        </footer>
        </>
    )
}

export default Footer