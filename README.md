# math-platform

> - Acesse o [ambiente de produção](http://math-platform.com.br)

## Sobre o projeto

O projeto se baseia em um facilitador para cálculos simples, como porcentagem e juros, para ser usado em cálculos do dia a dia.

## Por que?

Desenvolvi este projeto para ser parte do meu portfólio pessoal e para que possa aprender com ele. Portanto, sou grato se você puder fornecer um feedback sobre o projeto, seja sobre o código, sobre a ideia, o design ou qualquer informação que você acredite que possa ajudar. Aqui estão algumas formas de contato:

- Conecte-se comigo no [Linkedin](https://www.linkedin.com/in/gustavo-junkes-545797214/)
- Me mande um [email](gujunkes50@gmail.com)


## Funcionalidades

Até o momento, o projeto conta com as seguintes funcionalidades:

- Cálculo de datas
  - Diferença de dias entre duas datas
- Cálculo de juros
  - Cálculo de juros compostos
- Cálculo de porcentagem
  - Porcentagem que um valor representa de outro
  - Descobrir valor de uma porcentagem
  - Aumento percentual
  - Diminuição percentual

## Especificações técnicas

O projeto é desenvolvido em Angular, usando a menor quantidade possível de bibliotecas externas.

Versão do [node](https://github.com/nodejs/node): 16.14.0 

Versão do [Angular CLI](https://github.com/angular/angular-cli): 13.2.5

## Getting started

Para rodar o projeto localmente, siga os seguintes passos: basta cloná-lo, abrir o projeto em seu terminal de preferência e 

1 - **Clonando o projeto**
``` git clone https://github.com/gustavoJunkes/math-platform.git ```

2 - **Instalando dependências**
```npm install```

3 - **Rodando o projeto**
``` npm start ```

Abra o navegador em http://localhost:4200/

### Deploy

Este projeto utiliza o serviço AWS S3 para deploy de código, routing 53 para gestão de domínio e CloudFront e AWS Certificate Manager para acesso via HTTPS.

e ficará disponível até abril de 2023.
