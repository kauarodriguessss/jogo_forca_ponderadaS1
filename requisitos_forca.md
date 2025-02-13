# Documento de Requisitos do Jogo de Forca

## 1. Descrição
Este documento apresenta os requisitos funcionais e não funcionais para o desenvolvimento de um jogo de forca. O sistema deve garantir jogabilidade fluida, acessibilidade em diferentes dispositivos e segurança nas informações dos usuários.

---

## 2. Requisitos Funcionais

### 2.1. Cadastro e Acesso
- **RF001** - O sistema deve permitir que os usuários criem uma conta informando e-mail, nome de usuário e senha.  
- **RF002** - O sistema deve validar as credenciais dos usuários antes de permitir o acesso.  
- **RF003** - O sistema deve disponibilizar um mecanismo de recuperação de senha por e-mail.  
- **RF004** - O usuário deve ter a opção de entrar como convidado, sem necessidade de cadastro.  

### 2.2. Partidas e Mecânica do Jogo
- **RF005** - O sistema deve permitir a criação de partidas tanto privadas quanto públicas.  
- **RF006** - Os jogadores devem poder ingressar em salas públicas ou privadas, caso tenham o código de acesso.  
- **RF007** - A cada rodada, o sistema deve selecionar aleatoriamente uma palavra para o jogo.  
- **RF008** - O sistema deve exibir a palavra oculta em formato de traços, indicando o número de letras.  
- **RF009** - Os jogadores devem poder sugerir letras e receber feedback imediato sobre acertos e erros.  
- **RF010** - O sistema deve registrar e exibir o número de tentativas restantes.  
- **RF011** - Caso um jogador acerte a palavra, o sistema deve encerrar a rodada e exibir a palavra completa.  
- **RF012** - Se todas as tentativas forem esgotadas, o jogo deve exibir a palavra correta antes de encerrar a rodada.  
- **RF013** - O sistema deve permitir que os usuários joguem individualmente no modo "single player".  

### 2.3. Modo Multiplayer
- **RF014** - O sistema deve permitir partidas com múltiplos jogadores simultaneamente.  
- **RF015** - O jogo deve exibir o status de cada participante em tempo real, incluindo tentativas erradas e progresso.  
- **RF016** - Deve ser possível convidar amigos para uma partida por meio de um link compartilhável.  
- **RF017** - O sistema deve registrar pontuação ou estatísticas dos jogadores para ranqueamento em modos competitivos.  

---

## 3. Requisitos Não Funcionais

- **RNF001** - O sistema deve estar disponível **24 horas por dia, 7 dias por semana**, com taxa de indisponibilidade inferior a 1%.  
- **RNF002** - O tempo de carregamento da interface principal não deve ultrapassar **3 segundos** em conexões banda larga.  
- **RNF003** - A aplicação deve ser responsiva e compatível com diferentes tamanhos de tela, incluindo dispositivos móveis e desktops.  
- **RNF004** - O sistema deve garantir a segurança dos dados armazenados, protegendo informações sensíveis dos usuários.  
- **RNF005** - Todas as comunicações do sistema devem ocorrer via **protocolo seguro (HTTPS)**.  
- **RNF006** - O jogo deve ser otimizado para suportar até **100 jogadores simultâneos** sem degradação no desempenho.  
- **RNF007** - A plataforma deve possuir um **sistema de logs** para auditoria de eventos e detecção de falhas.  

