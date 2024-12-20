# Papéis e Responsabilidades no SLDC Ágil
 ## Roles and Responsibilities in the Agile SLDC

 Vamos falar um pouco sobre os papéis e responsabilidades que existem dentro da área de Desenvolvimento de Software.

 **Product Owner (PO):**

 As principais responsabilidades do PO são:

 - *Definir a visão do produto.* Responsável por estabelecer a visão, a estratégia do produto, definir as metas e os objetivos, enfim, tudo o que está relacionado ao produto.
  
 - *Gerenciar o backlog do produto.* Responsável por gerenciar e manter o backlog atualizado.
  
 - *Priodizar histórias de usuário.* Com base nas necessidades do cliente, o PO é a pessoa que deve priorizar essas histórias de usuário dentro do backlog.
  
 - *Elaborar e refinar histórias de usuário.* Trabalhando em uma estreita relação com o time de desenvolvimento para se definir e elabora as histórais de usuários, em uma linguagem compreensivel, o que será desenvolvido.
  
 - *Participar do planejamento e revisões de iterações.* O PO precisa estar presente nas reuniões de planejamento, para que a equipe tire todas as possíveis dúvidas sobre o desenvolvimento do produto.
  
 - *Representar os interesses dos stakeholders e definir as necessidades e requisitos do produto.* Ele está ali para representar o cliente, fazendo esse papel de ponte entre o time de desenvolvimento e o cliente para que a equipe desenvolva o produto da melhor forma possível.
  
 - *Documentar.* De modo geral em algumas empresas isso é responsabilidade de algum time, mas com toda certeza o PO também ajuda o time ou as vezes é até o responsável pela documentação.
  
 - *Tomar decições de produto.* Como autoridade máxima em relação as decisões do produto, então ele é o dono do produto, relizando decisões antes e ao longo do desenvolvimento e comunicando isso ao time e aos stakedolders.

 **Arquitetos e Desenvolvedores:**

  - *Analisar os requisitos* O time de desenvolvimento precisa analisar e compreender os requisitos de projeto para que ele consiga identificar as funcionalidades e características que o software deve ter. Se o PO diz *o que*, aqui vemos o *como*.
  
  - *Design e arquitetura de software.* Com base nos requisitos identificados, o time de desenvolvimento será o responsável por projetar a arquitetura do software, dizer a forma como ele tem que ser construído, incluindo a estrutura geral do sistema, quais os componentes principais, como as interfaces irão funcionar, etc.
  
  - *Codificar.* Uma das principais responsabilidades do time de desenvolvimento é escrever o código, colocando a mão na massa, garantindo que ele funcione corretamente, também incluindo codar a parte de testes, principalmente testes unitários.
  
  - *Testar.* Faz parte do arquiteto, do desenvolvedor, testar e garantir que o que ele está construindo está correto, construindo, realizando testes unitários e prover manutenção nesses scripts de teste. Faz parte de um grande desenvolvedor, de um grande arquiteto, saber testar também.
  
  - *Depurar e corrigir bugs.* Durante o processo de desenvolvimento podem sugir falhas e erros e o time de desenvolvimento deve ser capaz e identificar e corrigir esses problemas. Então o resenvolvedor tem essa responsabilidade de repurar e corrigir um bug.
  - *Documentar.* Muitas vezes o desenvolvedor tem que documentar, principalmente a parte mais técnica do desenvolvimento.

 **O papel do QA:**

 - *Colaborar com a definição de critérios de aceite.* Faz parte total do QA, não há mais muito espaço para um QA que só fique testando, ele precisa estar envolvido desde o início do processo e isso significa que ele vai colaborar com a definição desses critérios de aceite, pensando em jornada de usuário, pensando em caminhos alternativos, em caminhos de excessão, bem como o caminho feliz.
  
 - *Levantar riscos.* Isto irá acontecendo tanto na colaboração nos critérios de aceite, quanto durante o desenvolvimento, percebendo novos riscos que irão acontecendo, levantando os riscos que a equipe pode ter durante o desenvolvimento do produto.
 
 - *Planejar os testes.* Sendo responsável por criar um plano de teste detalhado, pensando na estratégia, nas abordagens, nos critérios de aceite, garantindo que as funcionalidades e todos os requisitos sejam testados de forma adequada, pensando em cenários, pensando em possibilidades e combinações, ou seja, em trazer qualidade para as funcionalidades que o time estiver desenvolvendo. Isto é responsabilidade de todos da equipe, mas a maior responsabilidade é do QA pois ele está pensando nos testes.
 
 - *Criar, executar e manter os testes.* Criando, mantendo os scripts, executando os testes criados, ou seja, tudo que esteja envolvendo o teste, principalmente em uma camada *end to end*, com um olhar mais de usuários.
 
 - *Identificar e relatar defeitos.* Faz parte de qualquer pessoa relacionada ao desenvolvimento do software, mas, o QA tem uma visão muito mais apurada para identificar e relatar defeitos. Então, faz parte do trabalho do QA identificar, relatar, acompanhar se aquele erro foi corrigindo e testar, seguindo todo o fluxo de desenvolvimento do software. 

 Com certeza existem outras responsibilidades além dessas com o papel do QA, estas são só algumas das principais que ele exerce durante o desenvolvimento do software.

 **Stakeholders.**
   
 Exitem muitos papéis de stakeholders dentro do desenvolvimento do software, estes a seguir são apenas alguns desses papéis.

 - *Gerente de projetos.* Algumas empresas tem, outras não tem, mas,é um papél importante e ele seria o responsável por garantir que o projeto esteja de acordo com as metas e requisitos definidos, alocar recuros, acompanhar o processo do desenvolvimento e manter a comunicação entre os stakeholders.

 - *Usuários finais.* Extremamente importantes, então eles devem fornecer feedbacks e validar se o software atende às suas necessidades e expectativas, não adianta termos um software e quase não tem bugs mas que também não atendem as necessidades dos usuários.

 - *Equipe de suporte.* Responsável por fornecer suporte técnico e de negócio aos usuários apóes implantação do sistema.

 **NOTA:** Além desses, há vários outros papéis como: Costumer Success, Design, Analytics, Etc. Conforme as empresas vão crescendo, outros times e papéis irão sendo acrescentados.


 ## Modelo Cascata X Modelo Ágil
 ### Waterfall Model vs. Agile Model

 **O modelo cascata**
 
 O modelo cascata é um modelo que durante muitos anos dominou a área de software e ele é divido em 5 etapas:

 1. *Requerimento:* Onde fazemos os levantamentos dos requisitos, feito geralmente pelo gerente de negócios. Esta fase é muito importante, por isso, os requisitos precisam ser criados de forma bem definida.
 
 2. *Design:* Após o levantamento dos requisitos, entra a parte de Design, também chamada as vezes de *planejamento*. Na etapa de design é onde fazemos o levantamento das etapas que serão realizadas para que consigamos desenvolver aquele software.
 
 3. *Implementação:* Nesta etapa é onde o time de desenvolvimento realmente entra em ação. É onde transformamos a fase 1 de requisitos em um sistema funcional.
 
 4. *Verificação:* Após o término da fase de construção do software, ou seja, de implementação, partimos para a fase de verificação, também chamada as vezes de fase de **testes**. Aqui é quando realmente testamos os códigos, encontramos bugs, testamos as funcionalidades e, principalmente, validamos se o que foi desenvolvido está de acordo com os requisitos. Aqui usamos todas nossas táticas e métodos de QA.
 
 5. *Manutenção:* É onde colocamos o sistema em produção já que o nosso sistema nesta fase estaria completo, então é onde o cliente consegue verificar o resultado final. Após isso é praticado realmente a manutenção, onde podem surgir novas funcionalidades, podemos acabar encontrando algum erro que passou despercebido pelo time na fase de teste, etc.


 **O modelo ágil**

 O modelo ágil se tornou muito comum nos últimos anos, sendo bem diferente do modelo cascata, pois, aqui a ideia é focar muito mais nos indivíduos e em suas interações do que no próprio processo em si e nas próprias ferramentas.

 A vantagem desse modelo é que enquanto desenvolvemos os software, mostramos para o cliente e ele pode dar esse feedback rápido e constante para que possamos ir trabalhando no software de forma para que nos aproximamos do desejo ou das necessidades do cliente de forma mais eficiente possível.

 As etapas do modelo ágil são:

 1. *Requerimento, compreensão e planejamento ágil:* De algo pequeno como uma ou duas funcionalidades, mas que ainda sim temos essa parte de pensar nos requerimentos, tendo reuniões com o cliente e com o time para compreender o que será desenvolvido.
 
 2. *Desenvolvimento de 1 ou 2 funcionalidades:* Aqui desenvolvemos algumas funcionalidades, **integramos** elas e testamos o sistema o tempo inteiro
 
 3. *Release:* Criamos uma release, entregando as funcionalidades utilizáveis ao cliente, mesmo que seja o mínimo viável (MVP).
 
 4. *Revisão e demonstração para o usuários:* Verificando se aquelas funcionalidades foram aceitas.
 
 5. *Se o cliente aceitou que foi entregue -> Produção. Se ele não aceitou -> ajustes e nova iteração:* Como bem claro, após a revisão e demonstração da funcionalidade que foi entregue no release, se aprovada pelo cliente, então enviamos elas para produção, se não, fazemos ajustes daquela funcionalidade e já partimos para a iteração de uma nova funcionalidade.

 A ideia principal do desenvolvimento ágil é que temos pequenas iterações o tempo inteiro, como se houvesse vários ciclos de pequenas entregas. Há diversos frameworks para se trabalhar com o desenvolvimento ágil, como o Kanban e o Scrum, por exemplo.

 <br>
 <br>
 
 **NOTA:** Ambos os métodos possuem vantagens e desvantagens, por isso, ambos ainda são utilizados no mercado de desenvolvimento de software

 ## Pair Programming

 O pair programming é uma prática do XP (extreme Programming) que sugereque todo o código produzido deve ser implementado por duas pessoas dividindo uma única máquina e nas quais essas se revezam no teclado.

 Isto significa que temos dois papéis: do *navegador* e do *piloto*.

 - O *piloto* é o programador, com a mão no teclado, escrevendo código ativamente o tempo inteiro.
 
 - O *navegador* vai fornecendo revisões em tempo real, fazendo sugestões, verificando o código e possíveis erros, atuando como um pensador crítico, entendendo aquele código, como um code review em tempo real e, com isso, ambos vão discutindo soluções.

 Há sempre uma troca de papéis entre as duas pessoas, nunca ficando o tempo inteiro uma pessoa como piloto e outra como navegador. Essa frequência de trocas de papéis vai variando mas a ideia é que ambos os papéis contribuem para este conhecimento.

 Outro ponto muito importante para o funcionamento do *Pair Programmin* é a **comunicação**, essencial para que o pair *programming funcione*, pois os programadores precisam discutir ideias e e abordagens para resolver os problemas que encontrarem.

 O quarto ponto seria o contexto em que se deve utilizar o pair programming e há vários contextos possíveis, como resolução de bugs, revisão de códigos, pra qualquer coisa que o time ache que faz sentido.

 **Ganhos de se utilizar o Pair Programming**

 1. *Solução otimizada:* É mais gente pensando na solução de um problema, ajudando a encontrar a melhor solução técnica para um problema.
 
 2. *Conhecimento compartilhado:* Quano se está trabalhando em dupla, se mitiga vários riscos e o compartilhamento de conhecimento técnico e de negócios contribui para um desenvolvimento melhor.
 
 3. *Code review a todo momento:* Enquanto um desenvolvedor exercer o papél de piloto, o navegador vai a todo momento discutindo e sugerindo soluções e outras maneiras de se resolver problemas, providenciando um code review em tempo real. 
 
 4. *Quebra de viéses:* Todo mundo, enquanto vai construindo a sua carreira, acaba adquirindo manias e viéses, o pair programming ajuda ajuda a pessoas trabalharem com pensamentos diferentes, melhorando no resultado do desenvolvimento.


 ## Desk Check

 Desk Check é uma demonstração de um item ou tarefa realizada pelo desenvolvedor para a equipe (QA, PO, Stakeholders) ao finalizar seu código e seus testes.
 O objetivo é validar o que foi desenvolvido e confirmar se os critérios de aceite estão sendo atendidos.
 O Desk Check deve ter um timebox máximo de 15 minutos. 

 É bem comum hoje nas companhias termos um Kanban, onde o Desk Check acontece exatamente entre o fim do desenvolvimento e o code review.
 Ali, no Desk Check, precisam estar o(s) desenvolvedor(es)  que fez aquela tarefa, o PO que é quem solicitou essa demanda e o QA que é quem sabe sabe o que aquela demanda fará e já pensou nos testes para aquela demanda e pode até já ter compartilhado com o dev os testes que serão realizados para aquela demanda.

 
 ## Shift-Left Testing

 O shif-left testing é o conceito de teste de software que se concentra em antecipar e iniciar atividades de teste o mais cedo possível no ciclo de vida do desenvolvimento de software. Ele envolve a mudança da abordagem tradicional de testar no final do ciclo de desenvolvimento para começar os testes mais cedo, preferencialmente durante as fases iniciais como o design e a codificação.

 Não necessariamente você irá aplicar testes de fato, você pode estar aplicando mais qualidade utilizando alguns tipos de ferramentas.

 **Ganhos de se utilizar o Shift-Left Testing**

 1. *Detecção precoce de defeitos:* Se não esperarmos até a etapa de testes para encontrar defeitos, podemos prevê-los muito antes, consequentemente reduzindo os custos de desenvolvimento do software, pois, quanto mais tarde se encontra um erro, falha ou bug, mais caro é para corrigi-lo.
 
 2. *Melhoria da qualidade do software:* Uma vez que estamos pensando em testes e em qualidade o quanto antes, o resultado é uma melhoria significativa do produto.

 3. *Redução de custos:* Como explicado anteriormente, quanto antes encontrarmos o erro, mais barato será o custo de resolvê-lo.
 
 4. *Aceleração do tempo de lançamento no mercado:* Se encontramos os erros desde cedo, os resolvemos antecipadamente e o resultado disso é uma aceleração do tempo de lançamento do software no mercado.
 
 5. *Maior colaboração entre equipes:* Buscando a qualidade desde o início do desenvolvimento do software, estamos disseminado mais qualidade entre os membros da equipe, colaborando entre si.
 
 6. *Feedback mais rápido:* Quanto antes encontramos o erro, o feedback desses erros, por consequência, será mais rápido, então poderemos trabalhar nele para melhorar a qualidade do que está sendo entregue.
 
 7. *Oferece vantagem competitiva entre concorrentes:* Com a aceleração do tempo de lançamento do software no mercado, oferecemos uma vantagem competitiva do nosso produto entre os concorrentes.

 
 ## Quadrante de teste ágil
 ### Agile testing quadrant

 O Principal objetivo do quadrante de teste ágil é ajudar as equipes a organizar melhor as suas atividades de teste em um contexto ágil. 

 O quadrante de teste ágil é dividido em quatro quadrantes menores e cada quadrante menor tem um objetivo específico.

 *Q1 - O primeiro quadrante* é focado nos testes orientados para o time, sendo testes que apoiam o time de desenvolvimento, com a intenção de ajudar o time a compreender melhor os requisitos e desenvolver essas funcionalidades, sendo o foco principal os detalhes técnicos, lógica de programação, o comportamento esperado de cada unidade. É neste quadrante que trabalhamos com testes unitários e de componente. 
 Estes testes (unitários de de componente) são o tipo de testes que devem ser automatizados.

 *Q-2 O segundo quadrante* possui o foco mais voltado para a parte funcional. Neste quadrante temos os testes funcionais, testes da história de usuário, os protótipose simulações. Ele serve também de apoio para o time de desenvolvimento, mas, em um nível funcional.
 Neste quadrante verificamos o software em um nível de critério de aceite, olhando com uma visão voltada para o cliente, para os stakeholders, validando se o que desenvolvemos está alinhado com o negócio.
 Os testes deste quadrante podem ser executados de acordo de forma manual ou automatizada a depender da necessidade. Geralmente eles são bastante automatizados em um fluxo que esteja mais voltado para o sistema, mas, muitas vezes não faz sentido automatizar algo bem pontual pois, seria mais rápido e mais barato fazer aquele teste de forma manual, pois pode ser um teste que a gente não executa com tanta frequencia em um lugar que não mexemos muito dentro do sistema.

 *Q-3 O terceiro quadrante*  é quando devemos possuir uma visão de explorar o sistema e descobrir novos cenários. Utilizamos, aqui, testes exploratórios, de  cenários, testes de usabilidade, teste de aceitação, testes alfa e beta, etc. Neste ponto estamos fazendo de uma forma manual, com uma visão total do usuário. Aqui podemos colocar o chapéu de testador em vários papéis do time, podendo ser um QA a executar esse tipo de teste, um BA(Business Analyst), um analista de negócio, um UX ou até o próprio cliente. A ideia é que tenhamos uma expectativa do ponto de vista do cliente.

 *Q-4 O quarto quadrante* está muito focado nas tecnologias que vêm para apoiar o nosso negócio, voltado para ferramentas. O foco principal deste quadrante é garantir o desempenho, a segurança e até a usabilidade pode ser focada aqui caso pensamos em alguma ferramenta que venha apoiar o negócio para que garantiremos que o que estamos entregando esteja correto.

 Então, utilizamos este quadrante de teste ágil no momento em que estamos planejando e organizando nossas atividades de teste, eles nos auxiliam dentro deste contexto ágil para que consigamos construir a nossa funcionalidade e a nossa história, olhando para um todo.