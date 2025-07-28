import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoginForm from "../components/loginForm";
import bg2 from "../assets/imagens/bg2.jpg";

const LoginPage = () => {
  return (
    // Container principal com background, altura mínima da tela e centralização
    <div
      className="flex flex-col min-h-screen bg-cover bg-center items-center justify-center relative"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      {/* Navbar fica no topo */}
      <Navbar />

      {/* Área central que cresce para ocupar espaço disponível */}
      <div className="flex-grow flex items-center justify-center w-full max-w-md px-4">
        <LoginForm />
      </div>

      {/* Footer fica no final */}
      <Footer />
    </div>
  );
};

export default LoginPage;
