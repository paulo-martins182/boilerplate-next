# Boilerplate

Um boilerplate para aplicações web utilizando **Next.js** com **App Router** e **Styled Components**. Este projeto é configurado para facilitar o desenvolvimento de componentes reutilizáveis e inclui ferramentas para testes e linting.

## Recursos

- **Next.js**: Framework React para produção otimizada.
- **Styled Components**: CSS-in-JS para estilização de componentes.
- **Plop**: Ferramenta para gerar componentes de forma rápida e fácil.
- **Jest**: Framework de testes para garantir a qualidade do código.
- **Prettier** e **ESLint**: Ferramentas para garantir formatação e linting consistentes.
- **Husky**: Ferramentas para garantir um commit/push do bem e para te estressar.

## Estrutura do Projeto

A estrutura básica do projeto inclui:

- `src/`: Contém os arquivos de código fonte.
- `generators/`: Contém os arquivos de configuração do Plop.
- `pages/`: Estrutura padrão do Next.js para páginas.
- `components/`: Diretório para componentes reutilizáveis.
- `templates/`: Diretório para a estilizaçao das paginas.

## Instalação

Para iniciar com este boilerplate, siga os passos abaixo:

1. Clone este repositório:
   `git clone <URL_DO_REPOSITORIO>`
   `cd boilerplate`

2. Instale as dependências:
   `pnpm install`

## Scripts

O projeto inclui os seguintes scripts principais:

- **Desenvolvimento**: Inicia o servidor de desenvolvimento.
  `pnpm dev`

- **Build**: Cria uma versão otimizada para produção.
  `pnpm build`

- **Iniciar**: Inicia a aplicação em produção.
  `pnpm start`

- **Lint**: Executa a verificação de linting.
  `pnpm lint`

- **Testes**: Executa os testes unitários.
  `pnpm test`

- **Gerar Componentes**: Gera um novo componente utilizando Plop.
  `pnpm generate`

- **Gerar Componentes com Erro**: Gera um novo componente com uma estrutura de erro utilizando Plop.
  `pnpm generate:error`

## Dependências

As dependências principais do projeto são:

```json
"dependencies": {
  "framer-motion": "^11.5.5",
  "ky": "^1.7.2",
  "next": "14.2.11",
  "react": "^18",
  "react-dom": "^18",
  "react-icons": "^5.3.0",
  "styled-components": "^6.1.13",
  "ts-node": "^10.9.2"
},
"devDependencies": {
  "@testing-library/react": "^16.0.1",
  "eslint": "^8.0.0",
  "jest": "^29.7.0",
  "plop": "^4.0.1",
  "typescript": "^5"
}

```

<!-- ## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. -->
