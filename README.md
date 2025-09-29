# 📌 Hub de Perfis Favoritos

A aplicação permite buscar perfis do **GitHub** e manter uma lista pessoal de **favoritos**.

---

## 🎨 Design (UI/UX)
O layout da aplicação é baseado em um protótipo do **Figma**.  
🔗 **Figma**: [Abrir protótipo no Figma](https://www.figma.com/design/QSL79Wt29IKvGRCzLT1Nmm/Teste-Front-end?node-id=45-348&t=XwYfGeBg8JmD0QEv-0)  

---

## 🚀 Funcionalidades Essenciais
- 🔍 **Busca de Perfil**: Pesquisa de um perfil único pela página inicial usando a API pública do GitHub.  
  - Endpoint: [`https://api.github.com/users/{username}`](https://api.github.com/users/{username})  
  - Documentação: [GitHub REST API — Get a user](https://docs.github.com/en/rest/users/users#get-a-user)  

- ⭐ **Lista de Favoritos**:  
  - Página `/favoritos` exibindo todos os perfis favoritados.  
  - Adicionar/remover perfis da lista sem duplicação.  
  - Interface indica se o perfil já está favoritado.  

- 🌍 **Estado Global**:  
  - Optei pelo Zustand como gerenciador de estado global da aplicação por ser uma solução leve, simples e eficiente, que se integra de forma natural ao ecossistema React sem adicionar complexidade desnecessária.

  - Outro ponto relevante é a utilização do middleware de persistência (persist), que permite armazenar os dados diretamente no Local Storage. Com isso, garantimos que informações importantes — como a lista de favoritos — sejam mantidas mesmo após o fechamento ou recarregamento da página, oferecendo uma melhor experiência ao usuário.

  - Além dos benefícios técnicos, a decisão também se baseia na familiaridade prévia com a biblioteca, o que garante maior produtividade no desenvolvimento, facilidade na manutenção do código e agilidade na implementação de novas funcionalidades, sem a necessidade de aprender ou configurar soluções mais complexas como Redux.o.  


- 💾 **Persistência de Dados**:  
  - Mantém os favoritos entre sessões (ex.: `localStorage`).  

- 🧭 **Navegação Clara**:  
  - Fluxo intuitivo entre páginas.  

---

## 🛠️ Stack Técnica
- [Next.js (App Router)](https://nextjs.org/docs)  
- [React](https://react.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  

---

## ⚡ Desafios Adicionais (Opcional)
- 📱 **Design Responsivo**: Adaptação para telas menores.  
- ⏳ **Estados de Carregamento**: Skeletons/spinners para melhorar a experiência.  

---

## ▶️ Como Rodar o Projeto
```bash
# Clone o repositório
git clone https://github.com/GabeAugust/Esparta--Etapa2.git

# Acesse a pasta do projeto
cd hub-perfis-favoritos

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
