# Técnicas de teste - testing techniques

 Técnicas de testes são métodos ou abordagens que utilizamos para planejar e projetar nossos testes.

 O objetivo delas é ajudar a identificar as condições de teste, os casos de teste e os dados de teste que devemos utilizar para obter os melhores testes possíveis.

 As técnicas de testes são classificadas como caixa-preta, caixa-branca ou baseada na experiência.


 ## Técnicas de Tesde de Caixa Preta - Black Box tests

 As técnicas de teste caixa-preta se concentram nas entradas e saídas do objeto de teste sem referência a sua estrutura interna.

 Essas técnicas são aplicáveis a testes funcionais e não funcionais.

 Então a gente não se importa com o que aquele software foi construído, qual é a tecnologia, seja C#, se é microserviço ou monlito, qual o banco de dados... Nada disso. A gente tem um software pronto e nos concentramos em saber quais são os dados que iremos imputar e quais são os dados que esperamos como resultado.

 ### Técnica de Caixa Preta: Partição por Equivalência

 A técnica de partição por equivalência tem por característica dividir os dados de testes em partições (ou classes). As partições devem ser formadas por dados válidos ou inválidos e a partição de equivalência pode ser aplicada em todos os níveis de teste.

 ### Técnica de Caixa Preta: Análise de valor limite

 A análise de valor limite é uma extensão do particionamento de de equivalência, mas **só pode ser usada quando a partição é ordenada**, consistindo em dados numéricos ou sequênciais. A ideia é testar os valores mínimos e máximos de uma partição, ou seja, seus valores limites, pois, a maior chance de acontecer algum erro são os limites.

 ### Técnica de Caixa Preta: Tabela de Decisão

 