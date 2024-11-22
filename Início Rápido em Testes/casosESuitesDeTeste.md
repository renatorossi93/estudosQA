# Casos e Suítes de Testes
 ## Test cases and suites
<br>
<br>

 ## O que é um Caso de Teste
  ### What is a Test Case

 Um caso de teste é um componente dentro de um processo de testes que descreve como testar um cenário específico de uma funcionalidade ou requisito do sistema. O objetivo aqui é verificar se o comportamento do software é igual ao esperado em uma situação específica. 

 *Por que casos de testes são importantes?*
 Eles garantem que a equipe de QA possa executar testes de forma sistemática e encontrar bugs antes que o sistema seje entregue ao cliente, permite documentar o que foi testado para, até mesmo, auditorias ou revisões no futuro.

 Casos de testes devem prever, não apenas cenários positivos, ou seja, o que deve funcionar, mas também cenários negativos, como erros esperados.

 **Anatomia de um Caso de Teste:**

 Vamos detalhar aqui cada componente básico com exemplos.

 1. Identificador (ID):
   Serve para organizar e referenciar o caso de teste, como um código único.
   - Exemplo: "TC001" para "Test Case 001"
   Em ferramentas como TestRail, IDs podem ser gerados automaticamente. 
 
 2. Título ou Descrição:
   É um resumo claro e objetivo do que o caso de teste verifica.
   - Exemplo: "Verificar login com credenciais válidas."
 
 3. Pré-condições:
   Estado do sistema ou configurações que precisam estar prontas antes do teste começar.
   - Exemplo: "Usuário já registrado no sistema com e-mail válido."
 
 4. Passos para Execução:
   São instruções detalhadas para executar o teste. Devem ser sequenciais e compreensíveis, até para alguém que não conhece o sistema.
   - Exemplo: 
       1. Abrir o navegador e acessar a URL do sistema.
       2. Inserir o e-mail "teste@teste.com".
       3. Inserir a senha "123456".
       4. Clicar em "Entrar".
 
 5. Dados de Teste:
   São informações específicas que o teste utiliza.
   - Exemplo: E-mail do usuário, senha, número de cartão de crédito.
 
 6. Resultado Esperado:
   É o que deve acontecer se o software estiver funcionando corretamente. Deve ser escrito com precisão, incluindo mensagens, redirecionamentos ou mudanças no estado do sistema.
   - Exemplo: "Usuário é autenticado com sucesso e redirecionado para a página inicial."
 
 7. Resultado Obtido:
   Usado durante a execução para registrar se o comportamento observado corresponde ao esperado.

 **Exemplo aprofundado de Caso de Teste:**
 
 - ID: TC001
 
 - Título: Validar Login com credenciais válidas.
 
 - Pré-condições:
     1. O sistema deve estar acessível na URL "https://minhaaplicacao.com".
     2. O usuário "teste@teste.com" já deve estar cadastrado.
 
 - Passos para execução:
     1. Abrir o navegador e acessar "https://minhaaplicacao.com".
     2. Preencher o campo "E-mail" com "teste@teste.com".
     3. Preencher o campo "Senha" com "123456".
     4. Clicar no botão "Entrar".

 - Dados de Teste:
     1. E-mail: teste@teste.com
     2. Senha: 123456

 - Resultado Esperado:
     1. O sistema valida as credenciais.
     2. Exibe a mensagem "Bem-vindo, [nome do usuário]!".
     3. O usuário é redirecionado para a página inicial.

 **OBS:** No exemplo acima, um cenário negativo *(Resultado Esperado negativo)*, seria inserir uma senha errada e validar se a mensagem "Senha Inválida" aparece.
 <br>
 <br>
 <br>

 ## O que é uma Suíte de Testes
 ### What is a Test Suite

 Agora que sabemos o que são casos de teste, vamos para as suítes de testes. Suítes de testes são um conjunto organizado de casos de teste que possuem algo em comum. Pense nas suítes de testes como um *pacote temático* que agrupa casos de teste relacionados entre si.

 *Por que usar Suítes de Testes?*
 Há alguns motivos para se usar Suítes de Testes, como: organização, pois facilita agrupar testes de funcionalidades ou módulos semelhantes; Execução em Lote, já que facilita que as ferramentas de automação e gerenciamento possam executar todos os casos de uma suíte em sequência; Relatórios, pois suítes de testes permitem visualizar o status de teste por área do sistema.

 Então, suítes são ideais para automação, pois você pode configurar ferramentas como Selenium, Cypress ou JUnit para executar uma suíte inteira e gerar relatórios.

 Com Suítes de Teste, você também poderá revisar Casos de Teste sempre que os requisitos mudarem. Evitando testes desatualizados que não refletem a realidade do sistema.

 Também, em projetos grandes, você pode priorizar casos críticos, começando pelos testes mais críticos. Exemplo: Testar o processo de pagamento antes de testes de busca.
 
 Por fim, suítes automatizadas podem ser integradas ao pipeline de CI/CD para execução em cada build ou deploy, ou seja, Suítes de Teste provém integração com CI/CD.

 **Como montar uma Suíte de Testes:**

 1. Identifique o Escopo:
    Qual funcionalidade ou módulo você deseja testar?
   - Exemplo: Autenticação, Carrinho de Compras.

 2. Selecione os Casos de Teste:
   Inclua todos os casos revelantes para o escopo definido.

 3. Nomeie a Suíte:
   Escolha um nome descritivo, como "Testes de Login" ou "Funcionalidades do Carrinho".

 4. Defina Prioridades:
   Certifique-se de que os casos mais críticos sejam executados primeiro.

 **Exemplo de Suíte de Teste:**

 Suíte: Módulo de Autenticação

 Esta suíte reúne casos de teste para o módulo de login, cadastro e recuperação de senha:

  - TC001: Validar login com credenciais válidas.
  - TC002: Verificar login com e-mail inválido.
  - TC003: Verificar login com senha inválida.
  - TC004: Testar recuperação de senha com e-mail válido.
  - TC005: Testar recuperação de senha com e-mail inválido.

 *Como esta suíte do exemplo ajuda?*
 Ao executar esta suíte, você verifica de forma estruturada todas as funcionalidades relacionadas á autenticação. Isso é útil tanto em testes manuais quanto em testes automáticos.

 **Cenário Prático Completo: Loja Virtual**

 Imagine que você está testando uma loja virtual com vários módulos. Cada suíte seria criada para focar em uma área específica:

 1. Suíte: Login e Cadastro
     - Casos de teste para validação de login, criação de conta e mensagens de erro.
 
 2. Suíte: Navegação pelos Produtos
     - Casos de teste para verificar busca, filtros e exibição de detalhes de produtos.
 
 3. Suíte: Carrinho de Compras
     - Casos de teste para adicionar, remover e alterar itens no carrinho.
 
 4. Suíte: Pagamento
     - Casos de teste para testar fluxos de pagamento, erros em dados de cartão e integração com gateways de pagamento.