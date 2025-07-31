import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://backend-poratlturismo.onrender.com/api/auth/login", {
        email,
        password
      })
      const userData = response.data;
      localStorage.setItem("user", JSON.stringify(userData))
      alert("usuario logado com sucesso!!")
      navigate("/")
    } catch (error) {
      if (error.response) {
        alert("Erro ao logar usuário email ou senha incorretos")
      } else {
        alert("erro ao conectar ao servidor")
      }
    }
  };
 
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl text-white font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-white">E-mail</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-sm sm:text-base"
            placeholder="Digite seu email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-white">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500  text-white text-sm sm:text-base"
            placeholder="Digite sua senha"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-full mt-2"
        >
          Entrar
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-white">
        Não tem conta?{' '}
        <a href="/register" className="text-purple-600 hover:underline p-2">
          Cadastre-se
        </a>
      </p>
    </div>
  );
};
 
export default LoginForm;
 
 