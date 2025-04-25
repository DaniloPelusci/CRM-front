# CRM Frontend

Interface web para o sistema de CRM (Customer Relationship Management), desenvolvido com foco em usabilidade e performance.

## 📋 Visão Geral

Este projeto representa a camada frontend de um sistema de CRM, permitindo que usuários gerenciem clientes, oportunidades e tarefas de forma eficiente. A aplicação é construída utilizando tecnologias modernas para garantir uma experiência de usuário fluida e responsiva.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)

## ⚙️ Instalação e Execução

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/DaniloPelusci/CRM-front.git
   cd CRM-front
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

A aplicação estará disponível em `http://localhost:5173`.

## 🧪 Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Compila a aplicação para produção.
- `preview`: Visualiza a versão de produção localmente.

## 📁 Estrutura de Pastas

```
CRM-front/
├── public/             # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens e recursos visuais
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── services/       # Integração com APIs
│   ├── store/          # Gerenciamento de estado
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Ponto de entrada da aplicação
├── vite.config.ts      # Configuração do Vite
└── package.json        # Dependências e scripts
```

## 🔗 Backend

Este frontend é projetado para se comunicar com o backend disponível em: [DaniloPelusci/CRM-back](https://github.com/DaniloPelusci/CRM-back)

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

