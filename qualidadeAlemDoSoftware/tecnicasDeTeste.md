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

 A tabela de decisão é uma boa maneira de registrar regras de negócios complexas que um sistema deve implementar. 
 Ao criar tabelas de decisão, o testador identifica as condições (geralmente entradas) e as ações resultantes (geralmente saídas) do sistema. 

 A tabela de decisões é útil para testar a implementação de requisitos do sistema que especificam como diferentes condições de combinações levam a resultados diferentes.

 Existe uma anotação comum nas tabelas de decisão que funcionam da seguinte maneira:
     
 **Para condições**

 **"S"** - Significa que a condição seja verdadeira (também pode ser mostrada como "V" ou "1").

 **"N"** - Significa que a condição seja falsa (também pode ser mostrada como "F" ou "0").

 **"-"** - Significa que o valor da condição não importa (também pode ser mostrado como "N/A").

 **Para ações**

 **"X"** - Significa que a ação deve ocorrer (também pode ser mostrada como "S" ou "V" ou "1").

 **Em Branco** - Significa que a ação não deve ocorrer (também pode ser mostrada como "-" ou "N" ou "F" ou "0").


 ### Técnica de Caixa Preta: Transição de Estado

 Com essa técnica de testes, devemos identificar os estados que o sistema ou a funcionalidade pode transitar, para isso, normalmente são criados diagramas de transição de estado e neles são exibidos os possíveis estados do sistema, bem como a forma que o sistema entra, sai e transita entre os estados.

 Esta técnica é muito boa para ser utilizada quando temos um fluxo, um processo a ser seguido e ali a gente pdoe encontrar vários estados em que aquele fluxo ou processo está.

 O objetivo dessa técnica é garantir que todas as transições entre os estados sejam corretamente implementadas e que o sistema funcione corretamente em todos os estados possíveis.


 ## Técnicas de Teste de Caixa Branca - White Box tests

 O teste de caixa branca utiliza a estrutura interna do sistema para os testes. As verificações são realizadas em código, arquitetura, armazenamento de dados, entre outros.

 Isso significa que o testador tem que ter acesso e conhecimento sobre a estrutura interna daquele software, ou seja, ele tem que conhecer o código fonte, a arquitetura, a tecnologia, tudo o que compõe, tudo que ajudou a construir aquele software. Ele não está mais olhando para uma caixa fechada, sem saber o que aconteceu, o que foi utilizado para construir, chegar naquela  solução, naquele software pronto.

 ### Técnica de Caixa Branca: Cobertura de Instruções

 A técnica decobertura de instruções também pode ser conhecida como teste de cobertura de código e é uma técnica de teste de software que tem como objetivo medir a quantidade de código que é executada durante a execução dos testes.

 O objetivo principal aqui é identificar as partes do código que não foram exercitadas pelos testes, indicando possíveis áreas não testadas e que podem conter erros ou falhas. 100% de cobertura significa que temos testes que executam todas as linhas.

 ### Técnica de Caixa Branca: Cobertura de Decisão

 Esta técnica de teste de software também pode ser conhecida como teste de cobertura condicional e é uma técnica de teste que visa garantir que todas as decisões lógicas em um programa sejam testadas.

 O objetivo desse teste é identificar os diferentes caminhos de execução do programa e garantir que todos eles sejam testados. Isso ajuda a aumentar a confiança na qualidade do software e a detectar possíveis falhas ou erros lógicos nas decisões do programa.

 Então, diferente do teste de instruções, no qual a gente estava basicamente verificando se ao rodar os nossos testes automatizados, todas as linhas do método de produção estavam sendo executadas, aqui a gente vai verificar se todas as condicionais estão verificadas, até porque algumas delas não estão totalmente explícidas.

 
 ## Técnicas de teste baseadas na experiência -Experience-based testing techniques

 Ao aplicar as técnicas de teste baseadas na experiência, os casos de teste são derivados da habilidade e intuição do testador e de sua experiência com aplicativos e tecnologias semelhantes. Essas técnicas podem ser úteis na identificação de testes que não foram facilmente identificados por outras técnicas mais sistemáticas.

 Diferente de todas as outras técnicas que nós vimos até aqui, a técnica de testes baseada na experiência é uma técnica *empírica*, ou seja, totalmente baseada na experiência vivida, na observação das coisas e no histórico de tudo o que o testador é. Quanto mais experiência vamos tendo, os testes que vamos fazendo vão se tornando cada vez melhores.

 Existem três classificações dessa técnica de testes, veremos elas a seguir.

 ### Técnica de teste baseada na experiência: Suposição de Erro

 A suposição de erro é uma técnica usada para prever a ocorrência de erros, defeitos e falhas com base no conhecimento do testador. Incluem:

  - Como o aplicativo funcionou no passado - A pessoa que está testando naquele momento já tem um conhecimento da aplicação que está sendo testada e sabe o comportamento esperado.
  
  - Que tipos de erro tendem a ser cometidos - Com os bugs encontrados, conseguimos ir percebendo quais funcionalidades e áreas do sistema o cliente mais usa e com isso vamos dando mais atenção a esses pontos.
  
  - Falhas ocorridas em outros aplicativos - O QA tem conhecimento de outros aplicativos que são semelhantes ao que ele está testando, fazendo com que ele use os mesmo tipos de testes para encontrar algum defeito no aplicativo em que ele estiver testando agora.

 ### Técnica de teste baseada na experiência: Teste Exploratório

 Nessa técnica, os testes são modelados, executados, registrados e avaliados dinamicamente durante a execução do teste. Os resultados do teste são usados para aprender mais sobre o sistema e para criar ainda mais testes.

 O teste exploratório é bem útil quando temos um projeto que não tem uma documentação muito bem definida ou desatualizada, também é útil para quando existe pouco tempo disponível.

 Esta técnica de teste também é bem útil quando a pessoa que irá realizar os testes não conhece aquele sistema, não conhece muito aquele aplicativo. Isto é útil pois ela vai chegar sem manias nenhuma e ela irá testar cenários diferentes do que uma pessoa mais experiênte que, comumente, irá seguir no mesmo caminho de testes.

 ### Técnica de teste baseada na experiência: Teste Baseado em Lista de Verificação

 Nessa técnica de testes, os testadores modelam, implementam e executam testes para cobrir as condições de teste encontradas em uma lista. As listas podem ser criadas para dar suporte a vários tipos de teste, incluindo testes funcionais e não-funcionais.