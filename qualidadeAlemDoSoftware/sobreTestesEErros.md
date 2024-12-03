# Sobre Testes e Erros
 ## About tests and errors

 ### O que é Teste?
 ### What is a Test?

 Segundo o ISTQB, o teste de software é um conjunto de atividades para descobrir defeitos e avaliar a qualidade dos artefatos de software.

 Também segundo o ISTQB, objetivo de se testar software é:

 - Avaliar produtos de trabalho, como requisitos, histórias de usuários, projetos e código;
 - Detectar falhas e defeitos;
 - Garantir a cobertura necessária de um objeto de teste;
 - Verificar se os requisitos especificados foram atendidos;
 - Verificar se um objeto de teste está em conformidade com os requisitos contratuais, legais e normativos;
 - Fornecer informações aos stakeholders para que eles possam tomar decisões;
 - Criar confiança na qualidade do objeto de teste;
 - E validar se o objeto de teste está completo e funciona conforme o esperado pelos stakeholders.


 ### Por que erros acontecem?
 ### Why errors happen?

 Existem vários fatores que nos fazem cometer erros, alguns deles são:

 - Pressão do tempo;
 - Falha Humana;
 - Participantes inexperientes;
 - Falhas/falta de comunicação;
 - Complexidade do código;
 - Tecnologias desconhecidas;
 - Falta de documentação;
 - Falta de conhecimento de negócio.

 ### Os Sete Princípios do Teste
 ### The Seven Testing Principles

 Vamos falar um pouco sobre os sete princípios do teste:

 1. O teste mostra a presença. não a ausência de defeitos.
   Mesmo que nenhum defeito seja encontrado, não podemos afirmar que não há nenhum defeito naquele software.

 2. Testes exaustivos são impossíveis. 
   Ao invés de testarmos exaustivamente, devemos usar técnicas que nos ajudam a escolher os melhores testes para serem realizados. Testar exaustivamente uma enorme quantidade de dados é muito caro e nem é tão útil.

 3. Testes antecipados economizam tempo e dinheiro.
   Então, quando os defeitos são encontranos no início do processo, eles acabam sendo muito mais baratos, porque, consequentemente, as próximas fases não vão se basear em um erro, fazendo com que as fases seguintes se baseiem em algo correto e não em algo que possui defeito.

 4. Os defeitos se agrupam.
   Este é o **Princípio de Pareto** que fala que um número pequeno de componentes no sistema geralmente contém a maioria das falhas, esse número é 20% dos componentes contém geralmente 80% das falhas.

 5. Os testes se degradam.
   Então, assim como osistema vai se atualizando, a gente tem que dar manutenção nos nossos testes.
   Não adianta a gente só ficar atualizando os testes com novas funcionalidades e alteração de alguma funcionalidade existente e correção de algum bug e deixar o teste ali. O teste pode está passando 100% na Pipeline, mas ele pode estar nos dando um *falso positivo*. Então é interessante sempre que formos mexer em algum grupo de uma funcionalidade dentro do sistema, também gastarmos um tempo olhando e validando se aqueles testes precisam de uma manutenção.

 6. Os testes dependem do contexto.
   Isso quer dizer que não existe uma abordagem única aplicável a todos os testes. Testar mobile, por exemplo, é totalmente diferente de testar em um sistema desktop. Então, quando pensamos nos nossos testes, precisamos penar em todo o contexto que envolve eles.

 7. A falácia da ausência de defeitos.
   Não encontrarmos em um sistema nenhum defeito não significa que aquele sistema vai ter sucesso. Pois, não encontrar defeitos não significa que estamos atendendo a expectativa do nosso cliente. Estamos aqui para resolver problemas, então se a gente está resolvendo problemas, então a gente está atendendo a expectativa do cliente.