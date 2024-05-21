# Tela de Login - React

![](./src/design/preview-desktop.jpg)

## Sumário

- [Visão geral](#visão-geral)
  - [O Projeto](#o-projeto)
  - [Instalação](#instalação)
  - [Contribuição](#contribuição)
  - [Tecnologias](#tecnologias-usadas)
  - [O que eu aprendi](#o-que-aprendi)
  - [Dificuldades](#dificuldades)
- [Contato](#contato)

## Visão Geral


### O Projeto

  Este projeto é uma tela de login desenvolvida com React JS. O objetivo é fornecer uma implementação básica de uma interface de login, utilizando as melhores práticas de desenvolvimento front-end. Ele inclui configuração mínima com Vite para permitir desenvolvimento rápido e eficiente.


## Instalação
 - Certifique-se de ter o Node.js instalado em sua máquina.

    ### Clonar repositório

        git clone 
    

    ### Instalar dependências
        cd tela-de-login
        npm install

    ### biblioteca de icones
      - no terminal do VSCode <br>
      `npm i @react-icons/all-files react-icons`

      - depois importar a biblioteca no componente alvo: <br>
      ``import { FaUser, FaLock } from "react-icons/fa";``


    ### Inicializar o servidor de desenvolvimento
        npm run dev

    ### Comandos disponíveis
        npm run dev: Inicia o servidor de desenvolvimento.
        npm run build: Constrói a aplicação para produção.
        npm run serve: Serve a aplicação construída localmente.

## Contribuição
  - Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Meu Processo

  - Inicializei o projeto com Vite para configurar um ambiente de desenvolvimento rápido e eficiente.
  - Criei os componentes principais da tela de login, incluindo campos de entrada para o nome de usuário e senha.
  - Implementei validações simples para garantir que os campos não estejam vazios.
  - Adicionei estilos para tornar a interface mais amigável e responsiva.


### Tecnologias usadas:

  - React JS
  - Vite
  - CSS
  - Node JS
  - Git


### O que aprendi?

  - Durante o desenvolvimento deste projeto, aprendi a:
  - Configurar um ambiente de desenvolvimento com Vite.
  - Criar componentes reutilizáveis em React.
  - Implementar validações básicas de formulário.
  - Aplicar estilos CSS para criar uma interface responsiva.


### Dificuldades

  - <b> Gereciamento de Estados: </b> Uma das principais dificuldades técnicas foi manipular as mudanças de estado utilizando hooks, especialmente o hook `useState`. Gerenciar o estado do formulário de login, validar as entradas em tempo real e atualizar a interface de usuário de forma eficiente foram desafios significativos. Em particular, a validação do e-mail e a lógica de submissão exigiram atenção cuidadosa para evitar erros comuns, como a verificação inadequada de expressões regulares e o gerenciamento de eventos. Garantir que os campos de entrada fossem limpos corretamente após a submissão bem-sucedida também foi um desafio técnico que precisei superar.

## Contato

  - Github - [mazziera.io](https://github.com/mazziera)
  - Linkedin - [@raphael-mazzieri](https://www.linkedin.com/in/raphael-mazzieri/)