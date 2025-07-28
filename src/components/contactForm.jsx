import React from "react";
import { useState } from "react";
import bg2 from "../assets/imagens/bg2.jpg"
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const handleChange = (e) =>{
        setFormData({
            ...formData,[e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();


        try {
            console.log(`Mensagem enviada ${formData.name} , ${formData.email}`)
        console.log(`${formData.message}`)
 
        alert('Mensagem enviada com sucesso')
 
        setFormData({name:'', email:'', message:''}) 
        } catch (error) {
            
        }
 

   
    }
    return(
        <>
        <div
            className="min-h-screen relative h-[975px] bg-cover bg-center flex items-center justify-center px-4 py-8"
            style={{backgroundImage: `url(${bg2})`}}
        >
            <div className="bg-gray-800 text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-4xl w-full max-w-md sm:max-w-lg">
            <h2 className="text-x1 sm:text-2xl font-semibold mb-4 sm:md-6 text-center text-white-">Entre em contato</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div> {/* campo para entrada de nome */}
                    <label htmlFor="name" className="block text-white font-medium mb-1">Nome</label>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="Digite seu nome"/>
                </div>
                <div> {/* campo para entrada de email */}
                    <label htmlFor="email" className="block text-white font-mono mb-1">E-mail</label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="Digite seu E-mail"/>
                </div>
                <div> {/* campo para entrada de mensagem */}
                <label htmlFor="message" className="block text-white font-medium mb-1">Mensagem</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="Digite sua mensagem..."
                    rows="5"
                    />
                </div>
 
                <div className="text-center"> {/* botão para enviara mensagem */}
                    <button
                        type="submit"
                        className="bg-purple-950 hover:bg-purple-600 hover:scale-90 transform-border text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-full"
                    >
                        Enviar Mensagem
                    </button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}
 
export default ContactForm
 