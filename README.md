🎓 Site Institucional UNIESP
Este é o repositório do website institucional da UNIESP, desenvolvido como uma Single Page Application (SPA) moderna, utilizando React e Vite. O projeto foca em responsividade, performance e uma experiência de navegação fluida.

🚀 Tecnologias Utilizadas
Categoria	Tecnologia	Função no Projeto
Core Framework	React (^18.2.0)	Biblioteca principal para construção da interface de usuário (UI) e gerenciamento do Virtual DOM.
Bundler & Server	Vite	Ferramenta moderna que oferece empacotamento rápido e Hot Module Replacement (HMR) para desenvolvimento ágil.
Roteamento	React Router DOM	Gerencia a navegação na SPA, mapeando URLs (/, /a-faculdade) para componentes sem recarregar a página.
Estilização & UI	Bootstrap / React-Bootstrap	Fornece a estrutura de layout responsiva (Grid System: <Row>, <Col>) e componentes prontos (ex: <Card>, <Navbar>).
Comunicação	Axios	Cliente HTTP baseado em Promises, utilizado para fazer requisições (ex: GET para buscar notícias) a APIs externas.
Protótipo (Dev)	JSON Server	Ferramenta de desenvolvimento para simular uma API REST com base em arquivos JSON, facilitando o desenvolvimento frontend isolado.
🏗️ Arquitetura do Projeto
O projeto segue a arquitetura de Componentes Funcionais e utiliza o useState Hook para gerenciar o estado local, garantindo a interatividade.

1. Componentes Chave

Arquivo/Componente	Função	Detalhes Técnicos
App.jsx	Componente Raiz	Define o layout global. O <CustomNavbar> é persistente (fora do <Routes>), e o <Routes> lida com o mapeamento da URL.
CustomNavbar.jsx	Navegação	Componente de Layout que utiliza useState para controlar a visibilidade do menu lateral <Offcanvas> em telas menores que o breakpoint md.
Inicial.jsx	Página Inicial	Componente de Page View que utiliza o sistema de Grid (<Row> e <Col>) do Bootstrap para apresentar cards em layouts de 3 e 2 colunas, garantindo responsividade.
pages/	Páginas Views	Contém os componentes de alto nível (Faculdade.jsx, Dpo.jsx) que representam as diferentes URLs.
2. Padrões de Design Aplicados

Princípio DRY (Don't Repeat Yourself): Há uma clara oportunidade de Refatoração em Inicial.jsx para substituir a repetição da estrutura dos Cards (violação do DRY) por um Array de Dados e a função .map() do JavaScript, tornando o código mais escalável.

Composição: O projeto faz uso extensivo da Composição, criando componentes reutilizáveis (<BannerAd />) e montando as páginas a partir de primitives do React-Bootstrap.

SPA (Single Page Application): Garante uma transição de tela suave e rápida, sem recarregamento da página, através do React Router DOM.

💻 Instalação e Execução
Siga os passos abaixo para clonar e rodar o projeto localmente.

Pré-requisitos

Node.js (versão LTS recomendada)

npm ou Yarn

1. Clonar o Repositório

Bash
git clone https://github.com/PGeorge044/pjtfrontkelson.git
cd pjtfrontkelson
2. Instalar Dependências

Bash
npm install
# ou
yarn install
3. Rodar o Projeto

O comando abaixo inicia o servidor de desenvolvimento Vite, que fica disponível em http://localhost:5179.

Bash
npm run dev
💡 Contribuições
Sinta-se à vontade para sugerir melhorias. As principais áreas para contribuição incluem:

Refatoração dos Cards: Converter a renderização estática dos cards para iteração de dados (.map()).

Acessibilidade (WCAG): Garantir que o carrossel (BannerAd) e outros elementos tenham controles de pausa e atributos ARIA corretos.

Implementação de APIs: Integrar axios para buscar dados dinâmicos (ex: notícias) da mock API (json-server).
