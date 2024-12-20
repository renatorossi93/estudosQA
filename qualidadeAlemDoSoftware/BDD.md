# BDD - Behavior Driven Development

 O BDD é uma abordagem de desenvolvimento de software que se concentra na comunicação efetiva entre membros da equipe, incluindo desenvolvedores, testadores e gerentes de negócios.

 O BDD busca alinhar o desenvolvimento de software com os requisitos de negócio e comportamento esperado.

 Os cenários de comportamento são geralmente expressos em linguagem natural, utilizando uma estrutura de especificação chamada *Gherkin*. O Gherkin usa palavras-chave como **Dado**, **Quando** e **Então** para descrever o contexto, a ação e o resultado esperado de um cenário.
 
 **Exemplo**

 *Cenário:* Realizar uma transação PIX com sucesso.

 *Dado** que estou logado no aplicativo do banco e tenho saldo suficiente na minha conta corrente
 
 *Quando* eu seleciono a opção de realizar uma transação PIX e informo o valor de R$100,00 e insiro a chave PIX CPF do destinaário como "123.456.789-00" e confirmo a transação
 
 *Então* eu devo ver uma mensagem de confirmação de sucesso e o saldo da minha conta corrente deve  ser atualizado

 Em um ambiente de trabalho real, o correto é criar todos os cenários possíveis para os testes.

 BDD NÃO é "dado, quando então", isto é o método Gherkin, BDD é cerimônia onde se entende como a aplicação deve se comportar, feita pelos envolvidos (geralmente PO, UX, Dev e QA).

 **Ganhos de se utilizar o BDD**

 1. *Compartilhamento de conhecimento:* Uma vez que a cerimônia é feita, é o momento de todo mundo entender como aquela aplicação deve se comportar perante o usuário.

 2. *Foco nos resultados:* Uma vez que eu digo que estou desenvolvendo guiado por comportamento, eu estou dizendo que a minha prioridade é o resultado, é o que eu desejo que a minha aplicação faça.

 3. *Comunicação eficaz:* Uma vez que eu estou na cerimônia com várias pessoas, eu consigo me comunicar claramente e tirar todas as dúvidas, todos os impedimentos para que aquela implementação seja feita.

 4. *Redução de retrabalho:* Uma vez que eu fiz a cerimônia, todo mundo entendeu como precisa ser implementado e o que se espera daquela nova funcionalidade, eu reduzo o meu trabalho pois eu não vou chegar lá no final e descobrir que está faltando alguma coisa ou que não foi pensado algum cenário ou que o que foi implementado não era o esperado.

 5. *Melhoria na colaboração:* Eu tenho mais colaboração do time e das pessoas de entendimento daquela funcionalidade, remando  todos para o mesmo objetivo já que todo mundo entendeu como aquilo deve ser implementado e quais são os ganhos ou como a aplicação deve se comportar perante ao usuário.

 6. *Construção de documentação:* Então eu tenho mais uma documentação de software, de negócio, uma outra documentação muito mais específica do meu usuário dentro da aplicação, me possibilitando, da mesma forma, a automação destes cenários criados.

 7. *Possibilidade de automação dos cenários:* No mercado temos um framework chamado Cucumber que trabalha com o Gherkin e nos possibilita automatizar esses cenários e nos trazendo um pouco mais de agilidade.