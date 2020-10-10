# Projeto para cálculo de salário líquido em JS

- Este é um projeto desenvolvido em JS para calcular o salário líquido mediante um salário bruto informado.
- Na implementação, foi utilizado o Babel.js, para que o código possa ser compilado em navagadores mais antigos.
- Para desenvolver a função do cálculo de salário líquido, foi utilizada a tabela de contribuição para Empregado, Empregado Doméstico e Trabalhador Avulso, para calcular
o desconto do INSS com base no salário bruto. Para calcular o desconto do IRRF, com base no valor resultante após o cálculo do desconto do INSS, foi utilizada a tabela 
de incidência mensal. Segue abaixo os links para obter os dados das tabelas, cujo acesso para a elaboração deste projeto foi feito em 09/10/2020.

https://www.inss.gov.br/servicos-do-inss/calculo-da-guia-da-previdencia-social-gps/tabela-de-contribuicao-mensal/

http://www.receita.economia.gov.br/acesso-rapido/tributos/irpf-imposto-de-renda-pessoa-fisica

## Como executar o projeto:

### 1) Instale o Node.js (https://nodejs.org/en/download/) e em seguida o Yarn (https://classic.yarnpkg.com/en/docs/install/). Caso já tenha essas ferramentas instaladas,
desconsidere este tópico.

### 2) Na pasta raiz do projeto, abra seu prompt de comando (terminal) de preferência e execute o comando a seguir para obter os pacotes utilizados no projeto:

> yarn install

### 3) Para finalizar, abra o arquivo index.html em seu navegador de preferência e pronto, já pode realizar o cálculo de seu salário líquido :)
