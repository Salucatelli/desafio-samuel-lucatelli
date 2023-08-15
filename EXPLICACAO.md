# CAIXA DA LANCHONETE

Olá, meu nome é Samuel, e estou escrevendo este arquivo para fazer um breve resumo da minha solução do desafio Caixa Da Lanchonete.

Para começar, eu criei uma pasta chamada "Controllers" para separar a maior parte do códio do arquivo principal, facilitando futuras manutenções se necessário.

## 1 - Controladores

O controladores são "itensSeparator.js" que trata os dados recebidos de itens e método de pagamento, juntando tudo em um array do pedido "order" com um objeto para cada iten do pedido, facilitando a manipulação dos dados no próximo controlador.

Já o controlador "priceMaker.js" pega o array de pedido "order" e faz a soma do valor final de acordo com a quantidade de cada pedido de acordo dom os dados cadastrados no arquivo "/DB/menu.js", que simula um cardápio da lanchonete cadastrado em um banco de dados.

## 2 - Arquivo principal

No arquivo principal caixa-da-lanchonete.js as funções são chamadas e o resultado final é dado pela variável finalPrice, formatada para que fique como uma string e com formato de dinheiro, "R$ 3,50" por exemplo.

## 3 - Validações

E também vale mencionar que durante o código existem varias validações para garantir que, caso aconteça um erro, o sistema informe o usuário e pare o funcionamento do programa imediatamente.

## 4 - Testes

Alem dos testes já criados no arquivo "caixa-da-lanchonete.test.js", também inseri mais um teste, para averiguar um possivel erro onde seja informado o pedido sem a vírgula entre o nome da comida e a quantidade, por exemplo ["cafe1"], quando o jeito certo seria ["cafe,1"].

> Obrigado pela oportunidade de participar do Programa de Estágio Start DB!!
