import React, { useState } from "react";
import axios from 'axios'
const RegisterForm = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://backend-poratlturismo.onrender.com/api/users", {
                name : nome,
                email,
                password : senha,  // corrigido aqui
            });
            const userData = response.data;
            localStorage.setItem("user", JSON.stringify(userData));
            alert("Usuário cadastrado com sucesso!!");
            navigate("/");
        } catch (error) {
            console.error("Erro ao cadastrar novo usuario", error);
            alert("Erro ao conectar ao servidor");
        }
    }

    return (
        <>
            <div className="bg-gray-800 p-8 rounded-3xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-white">Cadastrar</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-white font-medium mb-1 ">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-purple-500 text-sm sm:text-base text-white"
                            placeholder="Digite seu nome" />
                    </div>
                    <div>
                        <label className="block text-white font-medium mb-1 ">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-purple-500 text-sm sm:text-base text-white"
                            placeholder="Digite seu email" />
                    </div>
                    <div>
                        <label className="block text-white font-medium mb-1 ">Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-purple-500 text-sm sm:text-base text-white"
                            placeholder="Digite sua senha" />
                    </div>
                    <button type="submit" className="bg-purple-500 hover:bg-purple-600 hover:scale-90 transform-border px-6 py-2
                    rounded-lg transition duration-300 w-full sm:w-full mt-2 text-white">
                        Cadastrar</button>
                </form>


            </div>
        </>
    )
}

export default RegisterForm