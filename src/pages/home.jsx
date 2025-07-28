import React from "react";
import Footer from "../components/footer";   // Importa o componente Footer (rodapé)
import Hero from "../components/hero";       // Importa o componente Hero (seção principal)
import Navbar from "../components/navbar";   // Importa o componente Navbar (barra de navegação)
import bg2 from "../assets/imagens/bg2.jpg"  // Importa a imagem de background para o Hero

const Home = () => {
  return (
    <>
      {/* Container principal com layout em coluna e altura mínima da tela */}
      <div className="flex flex-col min-h-screen">
        
        {/* Barra de navegação */}
        <Navbar />
        
        <div>
          {/* Componente Hero com props:
              - Background: imagem de fundo (repare que a prop começa com maiúscula, verifique se o componente Hero usa isso)
              - titulo: título principal
              - paragrafo: texto descritivo
              - rota: link do botão
              - botao: texto do botão
          */}
          <Hero 
            Background={bg2} 
            titulo="Nova serra Verde" 
            paragrafo="Conheça Nossas Atrações" 
            rota="#" 
            botao="Saiba mais" 
          />
          
          {/* Título vazio, pode ser removido ou preenchido */}
          <h1 className="text-center"></h1>
          
          {/* Div vazia, pode remover se não usar */}
          <div></div>
        </div>
        
        {/* Rodapé */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
