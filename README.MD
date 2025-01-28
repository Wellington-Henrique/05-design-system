Design System
Somente componentes que podem ser compartilhados por toda a aplicação:

[] Heading
[] Text
[] Box (Container)
[] Button
[] TextInput
[] TextArea
[] CheckBox
[] Avatar
[] MultiStep

em tokens e react rodar os comandos
npm init -y
npm i typescript -D
npx tsc --init
npm i tsup -D

na pasta root do projeto rodar o comando
npm init -y

-- alterar o name do projeto react e tokens em package.json para o seguinte exemplo
-- "name": "@wellingtonhlc-ui-test/tokens"

-- No commit "A base de um Design System: Configurando tokens" foram adicionados alguns exemplos de token, mas podem ser criados outros para sombras, opacidade, tempo de animação.

-- monorepo

no projeto eslint-config rodar
npm i eslint -D
npm i @rocketseat/eslint-config -D

-- no projeto react rodar os comandos
npm i react -D
npm i @stitches/react

-- no projeto doc rodar o comando
npx storybook@latest init
npm i vite -D  
npm i vite @vitejs/plugin-react -D
npm i react react-dom

//usar se ocorrer erros: npx sb init --builder @storybook/builder-vite --type react

-- turbo repo:
-- executa script em todos os pacotes ao mesmo tempo
-- acelera o processo de build (guarda o cash da build e sobrepõe apenas os arquivos alterados)
-- no root rodar o comando
npm i turbo@latest -D

-- publicar a documentação
npm i @storybook/storybook-deployer --save-dev

-- Configurando o yml

name: Deploy docs

on:
push:
branches: - main

jobs:
build-and-deploy:
runs-on: ubuntu-latest
steps: - name: Checkout
uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20

      - run: npm ci // faz a instalação dos pacotes npm

      - run: npm run build // faz a build do monorepo todo

      - name: Deploy storybook
        working-directory: ./packages/docs // entra em doc e faz o deploy do storybook, font: https://github.com/storybook-eol/storybook-deployer
        run: npm run deploy-storybook -- --ci --existing-output-dir=storybook-static
        env:
          GH_TOKEN: ${{ github.actor }}:${{ secrets.GITHUB_TOKEN }}

-- após o deploy ir em
Settings/Pages

- Deploy from a branch

  - gh-pages

- Instalando o changesets
  npm i @changesets/cli -D
  npx changeset init

- publicar npm
  npm login
  npm whoami

  npm run changeset
  npm run version-packages
  npm run release
