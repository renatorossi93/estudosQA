**NOTA**: Neste arquivo MarkDown estarão todas as minhas anotações sobre o conteúdo do curso "Git e GitHub para Iniciantes" na Udemy.

Nem todo o conteúdo do curso em si estará aqui, haja visto que, as explicações iniciais são básicas e nos levam ao momento de aprendizado prático e real do uso do Git e do GitHub.

Sendo assim, A partir daqui já foi ensinado sobre: O que é o Git (e GitHub), sua instalação e configuração inicial e como inicializar um repositório.

# Ciclo de vida dos status de seus arquivos no Git
 ## File Status Lifesycle

 O Git separa o estado dos arquivos em quatro estágios bem definidos. Sendo eles:

 1. **Untracked (Não rastreado):**
 Este estágio se refere ao momento em que o arquivo acabou de ser adicionado ao repositório mas ainda não foi visto pelo git, ou seja, o git não reconhece a existência deste arquivo.
 
 2. **Unmodified (Não modificado):**
 Depois de adicionado este arquivo, dentro do Git ele passa para o estágio *unmodified*, aqui o Git já reconhece o seu arquivo mas em seu estado inicial.
 
 3. **Modified (Modificado):**
 A partir do momento em que você edita o seu arquivo ele passará para o estágio *modified*, ou seja, ele reconhece que você trabalhou neste arquivo e o modificou.
 
 4. **Staged (prepadado):**
 Após você trabalhar no seu arquivo, você poderá levá-lo para o estágio chamado *staged* que significa que o seu arquivo está pronto para o versionamento. Assim que você versionar o seu arquivo, realizando um commit, ele voltará ao estágio *unmodified*, indicando que, a partir daquela versão, o arquivo não foi modificado novamente.

 Agora, passaremos por esses diferentes estágios dos arquivos, usando comandos feitos no terminal do git, para exemplificar.

 $ git status 
     
     Serve para reportar como está o repositório neste momento. 
     Aqui, como foi o primeiro comando a ser executado, ele deverá mostrar que não há nenhum arquivo em estado de *untracked*, e pedirá para adicionar arquivos usando o comando de adicionar aquivos que veremos adiante.
     
     A mensagem será assim: 

          Untracked files:
          (use "git add <file>..." to include in what will be committed)

 $ code Readme.md  
     
     Usando o comando "code Readme.md", eu estou usando o próprio terminal Git Bash para criar um arquivo "Readme.md" dentro do VS Code ("code").

     Com o arquivo criado, neste momento ele estará no estágio *unmodified* esperando para ser modificado ou para ir para o estágio de *staged*.

 $ git add Readme.md

     Com esse comando, você adiciona o arquivo (neste caso, Readme.md) ao estado de *staged*, pronto para ser comitado. 
     
     Caso tenha criado vários arquivos e queira adicionar todos ao estado de *staged*, você não precisa fazer um por um para commitar, basta usar o comando "$ git add ."
     Assim, todos os arquivos criados estarão preparados para serem commitados, ou seja, estarão em estado de *staged*

     Mesmo que você faça isso mas ainda não use o comando para commitar o arquivo, caso modifique o arquivo de novo, terá que novamente mandá-lo para o estado *staged*

 $ git commit -m "mensagem sobre o commit do seu arquivo"

     Aqui, você está commitando o arquivo ou os arquivos que foram adicionados com o comando "$ git add". Assim, versionando o seu arquivo. Esta versão terá um "hash", ou seja, um número de de rastreio único e que te permitirá rastrá-la para diversos fins, inclusive para, caso queira, voltar o seu repositório para esta versão.

     No terminal, você provavelmente saberá qual o hash da versão pois, estará assim:

     [master (root-commit) 3a2a729] criando commit enquanto aprendo sobre commit no curso

     "master" é a branch em que o arquivo foi commitado, 3a2a729 é o hash da  versão, ou seja, esse é o código único desta versão de commit. O resto, como pode perceber, é a mensagem enviada.

 A partir daqui, se você voltar a usar o comando "git status" verá que aparecerá uma mensagem em inglês dizendo que não há nada para commitar. Então aqui é como se voltássemos para o estado *unmodified*.

# Visualizando logs
 ## Displaying logs

 Conforme você irá trabalhando com o Git, fazendo commits, versionando arquivos, etc. É interessante conseguir vizualisar o histórico, cada versão nova adicionada e quais arquivos mudaram para que você possa entender melhor o que está acontecendo no seu repositório.

 $ git log

     O git log nos mostra uma hash de cada commit, o autor da modificação, com nome e e-mail, a data de cada commit e a sua mensagem.

 $ git log --decorate

     o --decorate nos mostra infromações adicionais, por exemplo, se houve merge no repositório, se algum arquivo foi movido de uma branch para outra, além de outras informações.

 $ git log --online
     
     Este comando te ajuda a ter uma visão rápida e resumida do log de commits, para quando você quer ver apenas as mensagens e hashes dos commits sem muitos detalhes.

 $ git log --author="(nome ou e-mail do autor de um commit)"
     
     É útil para quando você estiver procurando commits realizados por um autor específico.

 $ git show (hash do commit)

     Já este comando serve para que você consiga ver detalhes de um commit específico, incluindo mudanças, o localizando através da sua hash.

 $ git shortlog

     O shortlog nos mostra, em ordem alfabética, os autores de commits, quais commits eles fizeram e a quantidade deles. Muito útil para se mensurar os contribuíntes de um repositório.

 $ git diff

     Já o git diff é um comando muito importante e deve ser usado sempre antes de realizarmos um commit, pois, ele nos mostra as diferenças entre o nosso código atual, aquele que iremos commitar, e o último commit, aquele que já foi commitado por último, nos podendo revisar mudanças antes de adicioná-las ou commitá-las. Ele também serve para vermos a diferença entre dois commits específicos.

     Vamos a alguns comandos usando git diff para usarmos:

     $ git diff --cached: Mostra as alterações já adicionadas (staged).
     $ git diff HEAD: Compara todas as mudanças com o último commit.
     $ git diff (hash1) (hash2): Compara dois commits específicos.

# Desfazendo coisas
 ## Undoing things

 Uma característica do Git é a possibilidade de "resetar" os nossos erros, ou seja, desfazer mudanças e regressar versões.
 Abaixo veremos alguns comandos para explorarmos essa possibilidade.

 $ git checkout (arquivo)
     
     O git checkout nos permite retornar o arquivo ao estado do último commit, mas as mudanças serão perdidas, pois, serve para descartar alterações em um arquivo que ainda não foi preparado, ou seja, após usr o git add (staged).

 $ git checkout (hash)

     Já ao usar um hash em vez do nome do arquivo, você estará retornando a um commit específico, mudando o estado do repositório para aquele commit.

 $ git checkout main

     Para voltar a branch principal, você pode trocar o main pelo nome de outra branch para também voltar à mesma.

 $ git reset (arquivo)

     Se você já usou o git add, mas quer desfazer isso, use o git reset pois ele removerá o arquivo da área de staging ainda mantendo as alterações no diretório de trabalho.

 $ git reset --soft (hash)

     Este comando desfaz o último commit, mas mantem as alterações, inclusive mantendo o arquivo em staged.

 $ git reset --hard (hash)

     Oposto ao git reset --soft, este comando desfaz o último commit incluindo todas as mudanças associadas a ele.

 $ git revert (hash)

     Muito útil pois desfaz um commit no histórico, porém, sem perder as mudanças feitas depois, ou seja, reverte um commit específico, criando um novo commit que desfaz as alterações do commit especificado.

 $ git resert --hard (hash)

     Lembra o revert, mas ao invés de desfazer um commit específico, ele na verdade volta PARA um commit específico, descartando os commits recentes e revertendo a branch ao estado deste commit específico anterior.

# Repositórios remotos
 ## Remote repositories

 Repositório remoto é aquele repositório que fica em outro servidor, seja ele na nuvem ou em outra máquina.
 A opção de repositório remoto mais famosa é o GitHub, conhecida como a maior rede social de códigos open source do mundo.

 **criando um repositório no GitHub**

 Para criar um repositório no GitHub, basta:

 1. Acessar o GitHub: entre em https://github.com e faça login na sua conta ou se cadastre.
 
 2. Crie um novo repositório: clique no botão "+" no canto superior direito da tela e selecione "New Repository" (Novo repositório).
 
 3. Configure o repositório: preencha as seguintes informações:
      - Repository Name: Nome do repositório, no caso, do projeto.
      - Description (opicional): uma descrição do seu projeto.
      - Visibility: Serve para escolher se o seu repositório será público (public) onde qualquer pessoa pode  ver, ou privado (private) onde apenas você e quem convidar podem ver.
      - Initialize this Repository with a README (inicializar este repositório com um README): Se quiser, você pode marcar essa caixa e criar o seu repositório já com um arquivo Readme.md incluso.
 
 4. Finalize: Agora basta clicar no botão "Create Repository".

 **criando e adicionando uma chave SSH**
 
 Para que o GitHub saiba que você é o usuário certo que está enviando o código para o repositório, ele precisa te identificar, para isso ele usa a codificação SSH.
 Antes de criar uma nova SSH, veja se você já tem uma configurada, digitando no terminal assim: $ ls ~/.ssh e se aparecer um arquivo como id_rsa ou id_ed25519, então você já tem uma chave.

 Agora vamos criar uma nova chave SSH:

 1. No terminal ou Git Bash, digite: $ ssh-keygen -t rsa -b 4096 -C "seuemail@exemplo.com"
      - -T rsa especifica o tipo de chave, mas, se preferir, pode usar  também o -t ed25519.
      - -C adiciona um comentário para identificar a chave, sendo geralmente esse comentário o seu e-mail.
 
 2. Quando for solicitado, aperte Enter para aceitar o local padrão (~/.ssh/id_rsa).
 
 3. Se desejar, você pode adicionr uma senha para proteger a chave, mas é opicional, caso contrário é só apertar Enter.
 
 4. Copie a sua chave SSH: Você precisa copiar a sua chave para adicioná-la ao GitHub. Para isso digite: $ cat ~/.ssh/id_rsa.pub e copie o texto que aparecer e que começa com ssh-rsa
 
 5. Adicione a sua chave SSH ao GitHub: acesse o GitHub e faça o login, então no canto superior direito, clique na sua foto de perfil e vá em "Settings" (configurações).
   Após isso, na sua barra lateral, clique em "SSH and GPG keys" e clique no botão "New SSH Key".
   Então, preencha os campos: - Title: Nome descritivo para a sua chave, por exemplo, "Meu PC". - Key: cole o conteúdo copiado no seu terminal ou Git Bash.
   Por fim, cloque em "Add SSH key".

 6. Teste a conexão: Para saber se a sua chave foi configurada de maneira correta é só testar a sua conexão com ela, use a seguinte forma:
   No terminal, digite: $ ssh -T git@github.com e se tudo estiver certo, você irá ver uma mensagem dizendo "Hi (seu nome de usuário)! You've successfully authenticated..."

 Pronto! Agora você já pode clonar, puxar e enviar para seus repositórios GitHub usando SSH!

 **Ligando um repositório local a um remoto**

 Este processo é simples, basta:

 1. adicionar o repositório remoto, digitando no terminal ou Git Bash: $ git remote add origin (url fornecida pelo GitHub)
   Substitua a url por "git@github.com:seu-usuario/seu-repositorio.git" se quiser usar o SSH ou por "https://github.com/seu-usuario/seu-repositorio.git" caso queira fazer isso por https.

 2. Confirme que o repositório remoto foi configurado, digitando $ git remote -v
   Você deverá ver algo assim: 
     
     origin  git@github.com:seu-usuario/seu-repositorio.git (fetch)

     origin  git@github.com:seu-usuario/seu-repositorio.git (push)

 3. Envie o repositório local para o remoto, usando o seguinte comando: $ git push -u origin main
   - O -u associa a branch local "main" ao remoto "main.

 Pronto, agora o seu repositório local está conectado ao repositório remoto no GitHub.

 **Clonando repositórios remotos**

 Como dentro do GitHub se encontra milhares de códigos open source, é comum a gente querer trabalhar em algum outro repositório ou pegar algum código e trabalhar com ele na nossa máquina, para isso existe o git clone, criando uma cópia completa de um repositório remoto dentro do GitHub para o seu computador local, ele cria uma cópia tão completa que inclusive, vem com o histórico de commits junto.

 Para clonar, use os seguintes comandos:

 $ git clone (Url do repositório)
     Este url pode ser tanto a url SSH quanto a HTTPS do repositório que deseja clonar.

 Você também pode clonar uma pasta específica de um repositório, usando:
 $ git clone (url do repositório) (nome da pasta)

 Além disso, existe um comando para clonar apenas uma branch específica:
 $ git clone -b (nome da branch) (url do repositório)

 E caso você só precise dos arquivos mais recentes, excluindo o histórico de commits, use:
 $ git clone --depth 1 (url do repositório)

 **Fazendo Fork de um projeto**

 O fork é uma função do GitHub que serve para criar uma cópia de um repositório de outra conta, te permitindo trabalhar em um projeto de outro usuário sem afetar diretamente o repositório original dele. O fork mantém a conexão com o repositório original, permitindo que você sincronize mudanças e envie contribuições, chamadas de Pull requests.

 Você usará o Fork da seguinte maneira:

 1. Vá até o repositório que deseja copiar no GitHub e clique no botão Fork no canto superior direito, copiando o repositório para a sua conta GitHub.
 
 2. Após isso, clone-o para trabalhar com o repositóio localmente, usando o comando: $ git clone (url do seu repositório fork)
 
 3. Agora você pode adicionar, modificar ou excluir arquivos no seu repositório fork, enfim, trabalhar nele e fazer commits.
 
 4. Caso o repositório original tenha sido atualizado, você pode sincronizar as mudanças no seu fork, assim:
      - Adicione o repositório original como remoto: $ git remote add upstream (url do repositorio original)
      - sincronize as mudanças: $ git fetch upstream
      - faça um merge das mudanças com o seu repositório: $ git merge upstream/main
 
 5. Enfim, envie as alterações que você fez no seu repositório fork para o repositório original, criando um Pull Request.

# Ramificação (Branch)
 
 Branches são "ramificações" no Git que permitem trabalhar em versões paralelas de um repositório.
 Elas criam uma linha separada de devensilvimento para que você possa testar ideias, adicionar recursos ou corrigir bugs sem afetar a versão principal, geralmente chamada de main ou master.

 Uma nova branch parte de um ponto específico no histórico do repositório, criando um caminho "alternativo".
 a seguir, veremos alguns comandos do Git Bash para trabalharmos com as branches.

 - $ git branch (nome da branch) usado para criar a sua branch

 - $ git checkout (nome da branch) para mudar para a sua branch e começar a commitar e usar demais comandos nela.

 - $ git switch (nome da branch) também pode ser usado para você trocar de uma branch, geralmente a main, para outra.

 - $ git merge (Nome da branch) para realizar um "merge" da sua branch com a principal, enviando os arquivos dela para a principal.

 - $ git branch -d (nome da branch) Este comando serve para excluir uma branch, geralmente usado após você dar merge nela.

 Branches são úteis pois cada membro da equipe pode trabalhar em uma branch própria e depois juntar ela com a principal através do merge.
 Para o QA, a branch te permite testar mudanças sem afetar a versão principal.

 Branches são essenciais para um fluxo de trabalho organizado no Git.

 Já que estamos aqui, falaremos sobre o **Merge** e o **Rebase**

 O merge e o rebase servem para unir as branches, para isso temos os métodos merge e o Rebase que trabalham isso mas de jeitos bem diferentes.

 **Merge**
 Como já vimos, merge serve para integrar mudanças de uma branch em outra. Ele combina os históricos das duas branches, criando então um commit que representa a fusão das alterações.
 No merge o histórico é preservado, mostrando claramente onde e quando as branches foram unidas.
 O git combina automaticamente as  alterações quando não há conflitos e um novo commit é criado para documentar o merge entre as branches.

 Vamos aos comandos para se usar o merge:
 
 - $ git checkout main

 - $ git merge (Nome da branch) feito após o comando acima, de checkout.
 
 se o merge tiver conflitos, ou seja, alterações na mesma parte do código, o Git pedirá para resolvermos manualmente.
 Então, após resolver os conflitos, finalize o merge com o seguinte comando:

 - $ git add .

 - $ git commit.

 como pode ver, esses comandos servem para adicionar os arquivos, indo para o estágio de staged e pronto para ser commitado, como acontece seguidamente.

 O merge preserva o histórico e deixa claro o ponto onde as alterações foram combinadas, sendo ideal para integrar mudanças de diferentes stakeholders de um projeto de software.
 Além disso, o merge mantém o histórico ramificado, útil para projetos grandes.

 **NOTA:** Use o comando **$ git log --graph** para visualizar os merges no histórico do repositório.

 **Rebase**

 Já o rebase reorganiza o histórico de commits de uma branche ao mover seus commits para a base, ou seja o início, de outra branch.
 O rebase reescreve o histórico de commits para parecer linear, como se todas as alterações tivessem sido feitas diretamente na branch alvo, geralmente a main.
 Assim, o rebase mantém o histórico limpo e organizado, ideais em projetos pessoais ou pequenos.

 Comandos do rebase:

 - $ git checkout (nome da brand).. Para trocar para a branch em que voce irá dar merge, geralmente com main.
  
 - $ git rebase main. movimenta os commits da sua branc para a branch main.

 **NOTA:** O rebase reescreve o histórico, então, nunca use ele em branches compartilhadas com outros usuários, ou seja, em equipes.

 
# Criando o .gitignore
 ## creating a .gitignore

 O gitignore sere epsecificamente para ignorar e não trackear (rastrear) alguns arquivos do seu repositório.
 Ele é útil para evitar que arquivos desnecessários, confidenciais ou temporários sejam versionados.
 Para usálo, basta criar um arquivo chamado .gitignore na raíz do repositório e liste nele os arquivos, pasta ou padrões que o git deve ignorar.
 Os comandos para tais atos são:

 - $ arquivo. log 
  Este comando serve para que você ignore arquivos específicos.

 - $ /pasta/ 
  Para ignorar pastas inteiras.

 - $ *.log
  Use para ignorar todos os arquivos de um tipo específico.

 - $ !nomedo-arquivo.log
  Serve para exluir um arquivo de ser ignorado, ou seja, para não ser ignorado

 **NOTA:** O .gitignore só funciona para arquivos que ainda não estão rastreados (Untracked), ou seja, se o arquivo já foi adicionado ao git, precisará removê-lo primeiro.
 Os arquivos ignorados *não são excluídos* do sistema, apenas do controle de versão.

 O .gitignore é ótimo para evitar que se rastreie arquivos irrelevantes, como logs e builds.
 Também é útil para proteger informações sensíveis, como chaves de API e senhas.
 E também ajuda a reduzir o tamanho do repositório com arquivos temporários desnecessários.


# Versionando com Tags
 ## Versioning with Tags

 Tags são usadas geralmente para marcar versões, como releases de software, por exemplo: v1.0, v2.1, 3.1.14, etc.

 Tags facilitam reverter ou consultar um ponto específico no histórico de commits. Também ajudam a identificar lançamentos no GitHub, ou seja, releases que possuem tags.

 Há dois tipos de tags, são elas:

 - Tags anotadas, que incluem dados como mensagem, autor e data e geralmente são udsadas para versões formais. O código é:
     - $ git tag -a v1.0 -m "versão 1.0 do cadastro"

 - Tags leves, elas apontam para apenas um commit, sem dados extras e geralmente são usadas para marcações rápidas. O comando é:
     - $ git tag v1.0

 Agora, vamos a alguns comandos para usar com tags:

 - $ git tag (Nome da tag) *Este comando serve para criar uma tag no commit atual*

 - $ git tag (nome da tag) (id do commit) *Este comando serve para criar uma tag para um commit específico*

 - $ git tag *Este comando serve para listar todas as tags.*

 - $ git push origin (nome da tag) *Este comando serve para enviar tags para o repositório remoto*
  
 - $ git push origin --tags *Este é para enviar todas as tags de uma só vez*

 - $ git tag -d (nome da tag) *Já este comando serve para excluir uma tag específica logalmente*
  
 - $ git push origin --delete (Nome da tag) *Por fim, este comando serve para excluir uma tag no repositório remoto*


# Usando o Git Revert
 ## Using Git Revert

 Algum commit seu quebrou o sistema em produção? Este é o seu salvador.

 O **$ git revert** desfaz um commit específico ao criar um novo commit que reverte as alterações feitas pelo commit original. Além disso ele ainda preserva o histórico do repositório, não alterando o histórico anterior.

 Este comando é mais seguro que o *$ git reset* já que preserva o histórico, sendo ideal em repositórios compartilhados onde o histórico não deve ser reescrito.

 Para usar o git reverse use os seguintes comandos:

 - $ gitrevert (id do commit) *Serve para reverter apenas um commit específico. O git abrirá um editor para que você confirme ou altere a mensagem do commit de reversão*
 
 - $ git revert (id do commit) -m "mensagem do commit de reversão" *Já este comando é para reverter já sem abrir o editor, já com uma nova mensagem para o commit de reversão*
 
 - $ git revert (id do commit) (id do commit) (id do commit) *Como dá para notar, este comando ajuda a reverter vários commits, um por vez*
 
 - $ git revert --no-commit (id do commit) *Já este ajuda a reverter sem aplicar as mudanças automaticamente, de forma manual. Isso prepara as mudanças no staging para que você finalize as mudanças usando o $ git commit*

 **NOTA:** Nã se esqueça que, para apagar tags e branches remotos, basta usar o comando:

 - $ git push origin :(número da versão da tag ou do commit).

<br>
<br>
Assim, passamos pelas principais essenciaiscaracterísticas e comandos do Git com o GitHub, finalizando o curso.