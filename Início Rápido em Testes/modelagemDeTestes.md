# Modelagem de Testes
 ## Modeling tests

 A modelagem de testes também pode ser chamada de elaboração ou escrita de testes. É aqui que a gente efetivamente começa a escrever os testes.

 Na etapa de modelagem de tetes o objetivo é garantir que os testes sejam completos, eficientes e eficazes, criando modelos para planejar, descrever e otimizar a execução dos testes para, finalmente, entrarmos depois na etapa de implementação dos testes.

 Então nós fizemos a *Análise de Testes*, onde entendemos o que o software precisa fazer, levantamos os requisitos do software.
 
 Fizemos, também, a *Identificação dos Cenários de Testes*, após analisarmos e entendermos os requisitos, onde simulamos cenários de como o sistema será usado e/ou como ele pode falhar.

 Após isso, fazemos a criação de *Casos de Teste, que é uma descrição detalhada de ações a serem realizadas e os resultados esperados. Ou seja, transformamos os cenários de testes em casos de testes, descrevendo os cenários com **bastante** detalhe. É como descrever a receita de um prato, cada passo conta para o resultado final.

 Enfim, definimos *Estratégias de Cobertura* dos testes, onde decidimos quais técnicas de modelagem utilizar para assegurarmos que os casos de teste serão abrangentes, garantindo que os testes serão bem pensados. 

 As **técnicas de Modelagem de Testes** que podemos usar para definirmos nossa *estratégia de cobertura* são:

 - *Partição de Equivalência:*<br>
 Aqui você irá dividir os dados em grupos que podem ser tratados como equivalentes.
 
     Exemplo: Imagine que você tem um campo de entrada no software onde o usuario pode digitar a idade e o sistema aceita idades entre 18 e 100. Fazer testes em cada valor possível de 18 a 100 seria ineficiente. A técnica de Partição de Equivalência divide esses dados de entrada em grupos (ou classes) que devem ser tratados da mesma forma pelo sistema. Então, nesse exemplo, dividiriamos os dados em classes de equivalência como: Uma classe válida (idades de 18 a 100) e uma classe inválida (idades menores que 18 e maiores que 100). 
     Para cada classe, selecionaríamos valores representativos, como, Classe válida: 18, 50 e 100. Classe inválida: 17 e 101.

     Por que usar partição de equivalência? Porque se um valor de uma classe funciona corretamente, é provável que todos os outros valores dessa classe também funcionem, economizando tempo e esforço.

 - *Análise de Valor-Limite:*<br>
     Pensa em um sistema que tem limites, como um formulário que aceita números de 1 a 100. É justamente nos lmites que os bugs costumam aparecer. A Análise e Valor-Limite se concentra em testar os extremos de um intervalo, porque é mais provável que o sistema falhe nesses pontos.
     Então, com esta técnica, você testa valores imediatamente dentro, nos limites e fora do intervalo.

     Exemplo: Você tem um campo onde o usuário digita a quantidade de itens a comprar, com o mínimo sendo 1 e o máximo sendo 10. Você testaria:
      - 0 (abaixo do limite) para garantir que o sistema rejeita isso.
      - 1 (exatamente no limite mínimo) para ver se o sistema aceita.
      - 10 (no limite máximo) para confirmar que o sistema ainda aceita.
      - 11 (acima do limite máximo) para verificar se o sistema rejeita isso.
     
     Por que usar Análise de Valor-Limite? Porque os erros mais comuns acontecem quando você atinge ou ultrapassa os limites especificados do software.

 - *Tabelas de decisão:*<br>
     Essa técnica é útil quando o comportamento do software depende de várias condições. Pensa nela como uma tabela que organiza todas as combinações possíveis de condições e as ações que devem ser tomadas.
     Então, com esta técnica, você listas todas as condições e depois você define todas as combinações possíveis dessas condições e as ações correspondentes.

     Exemplo: Imagine um sistema de e-commerce que ofecere descontos dependendo de várias condições:
      - Se é feriado e o usuário é VIP, desconto de 20%.
      - Se é feriado, mas o usuário não é VIP, desconto de 10%.
      - Se não é feriado e o usuário é VIP, desconto de 15%.
      - Se nenhuma das condições é satisfeita, ou seja, não é feriado e o usuário não é VIP, então não há desconto.
     
     Por que usar tabela de decisão? porque a tabela de decisão de ajuda a visualizar cada cenário e testar todas as combinações.

 - *Diagramas de Transição de Estado:*<br>
     É uma técnica usada quando o sistema tem estados diferentes e o comportamento muda com base no estado atual e em eventos específicos.

