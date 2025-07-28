# Portal Nova Serra Verde - Frontend

Interface web do Portal Nova Serra Verde, construída com React, Vite e Tailwind CSS para oferecer uma experiência rápida, responsiva e moderna.

---

## Tecnologias Utilizadas

- React  
- Vite (bundler e dev server)  
- Tailwind CSS (estilização)  
- Swiper (Efeito de carrosel nas imagens)

---

## Instalação e Execução Local

### Pré-requisitos

- Node.js (versão 16+ recomendada)  
- Yarn ou npm (gerenciador de pacotes)

### Passos

1. Clone o repositório (ou acesse a pasta do frontend):  
   ```bash
   git clone https://github.com/seuusuario/portal-nova-serra-verde.git
   cd portal-nova-serra-verde/frontend



2. Instale as dependências
npm install
# ou
yarn

3. Configure as variáveis de ambiente criando um arquivo .env na raiz do frontend, por exemplo:
VITE_API_URL=http://localhost:5000/api

4. Inicie o servidor de desenvolvimento:


npm run dev
# ou
yarn dev

5. Abra no navegador em http://localhost:5173 (porta padrão do Vite) para visualizar a aplicação.

Scripts Úteis
npm run dev — inicia o servidor de desenvolvimento

npm run build — gera o build otimizado para produção

npm run preview — pré-visualiza o build gerado

### Estrutura do Projeto:

frontend/
├── public/          # Arquivos estáticos
├── src/
│   ├── assets/      # Imagens, fontes, etc.
│   ├── components/  # Componentes reutilizáveis (Navbar, Footer, etc.)
│   ├── pages/       # Páginas da aplicação
│   ├── services/    # Configurações do Axios e chamadas API
│   ├── styles/      # Arquivos CSS/Tailwind
│   └── main.jsx     # Ponto de entrada React
├── vite.config.js   # Configuração do Vite
├── package.json     # Dependências e scripts
└── .env             # Variáveis de ambiente (não versionar)


### Funcionalidades:
Interface responsiva construída com Tailwind CSS

Rotas e navegação entre páginas (React Router)

Consumo de API backend via Axios para autenticação, listagem e detalhes das atrações

Formulários de login e cadastro com validação básica


### Contribuição:
Sinta-se à vontade para abrir issues e pull requests!
Para contribuir:

Fork este repositório

Crie uma branch para sua feature (git checkout -b feature/nome-da-feature)

Faça commit das alterações (git commit -m 'Descrição da feature')

Envie para o repositório remoto (git push origin feature/nome-da-feature)

Abra um Pull Request para revisão

### Licença
Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais informações.

### Contato
Email: dri.khedira@gmail.com

GitHub: https://github.com/Gustavo-2l

### Agradecimentos
Obrigado por contribuir e utilizar o Portal Nova Serra Verde!



