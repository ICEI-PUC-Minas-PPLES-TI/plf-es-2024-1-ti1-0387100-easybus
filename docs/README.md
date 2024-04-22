Introdução  

Este documento tem como objetivo fornecer uma documentação abrangente do projeto do sistema EasyBus. Ele visa capturar e comunicar todo o planejamento e processo envolvidos no desenvolvimento desse sistema.  

Informações Gerais  

Projeto: EasyBus  

Repositório GitHub: EasyBus  

Membros da equipe:  

Thyago Marques Correa  

Santhiago Takaesu Sampaio  

William Matheus Meira da Silva  

João Pedro Gomes Ruas  

Contexto  

O projeto EasyBus surge como uma resposta direta aos desafios enfrentados no cenário urbano atual. A superlotação de ônibus é um problema recorrente que afeta diretamente a qualidade de vida dos cidadãos e a eficiência dos sistemas de transporte público. Os cidadãos da cidade de Belo Horizonte e da região metropolitana, que dependem do serviço de transporte público, enfrentam desafios diários. Essas dificuldades não são exclusivas dos passageiros, mas também afetam os condutores dos ônibus, que enfrentam os obstáculos inerentes ao sistema de transporte. Diariamente, os usuários do transporte público se deparam com problemas como superlotação, escassez de veículos e uma frota desatualizada e inadequadamente mantida, com vários problemas de manutenção. Essas circunstâncias culminam em situações constrangedoras e desconfortáveis para todos os envolvidos.  

Objetivos   

Neste projeto, delineamos objetivos claros para abordar os desafios enfrentados no cenário urbano relacionados à superlotação de ônibus. O objetivo geral é desenvolver um software que solucione esse problema e aprimore a qualidade dos serviços de transporte público. Além disso, estabelecemos objetivos específicos para direcionar nossa investigação e aprofundar nosso trabalho:  

Otimização da Operação de Ônibus:  

Implementar estratégias e tecnologias que tornem a operação dos ônibus mais eficiente.  

Reduzir os tempos de espera dos passageiros.  

Otimizar as rotas para maximizar a capacidade de transporte.  

Melhoria da Experiência do Passageiro:  

Priorizar o conforto, a segurança e a conveniência dos passageiros.  

Garantir uma viagem agradável e sem transtornos, mesmo durante os períodos de alta demanda.  

Utilização Inteligente de Recursos:  

Empregar recursos tecnológicos avançados, como sensores de ocupação e sistemas de monitoramento em tempo real.  

Otimizar a utilização dos ônibus e dos recursos disponíveis.  

Aumento da Eficiência Operacional:  

Implementar ferramentas e processos para melhorar a gestão e o controle da frota de ônibus.  

Reduzir custos operacionais e aumentar a eficiência global do sistema de transporte público.  

Com esses objetivos, o projeto EasyBus visa contribuir para uma mobilidade urbana mais eficiente e satisfatória, beneficiando tanto os passageiros quanto os condutores  

Justificativa  

A escolha do sistema EasyBus como foco do nosso projeto foi baseada em uma análise criteriosa das necessidades e desafios enfrentados pelos cidadãos de Belo Horizonte e região metropolitana no que diz respeito ao transporte público. A superlotação de ônibus é um problema recorrente que impacta diretamente a qualidade de vida dos usuários e a eficiência do sistema como um todo.  

Com base em nossas experiências e nas informações diariamente veiculadas em telejornais e no cotidiano das pessoas, bem como nos dados do censo mensal liberado pela Prefeitura de Belo Horizonte, realizamos uma análise técnica que nos levou a questionar como resolver os problemas anteriormente citados.  

Analisando os números com base no censo de fevereiro, observamos o seguinte:  

No ano de 2023, o acumulado em relação ao número de passageiros foi de 275.196.161.  

Em 2012, esse número era de 453.219.840, representando uma queda de exatos 39,29% em 10 anos.  

No último ano, a média de ônibus na frota foi de aproximadamente 2.620,42, com um crescimento médio de 10,29% em um ano.  

Diante desses dados, surge a pergunta: por que vemos os ônibus sempre cheios?  

Nossa crença é que isso ocorre devido à gestão e à manutenção inadequadas desses veículos. A falta de investimento na frota e a ausência de estratégias eficientes para lidar com a demanda resultam em desconforto para os passageiros e ineficiência no sistema de transporte público. O projeto EasyBus visa abordar esses problemas e contribuir para uma solução mais inteligente e eficaz.  

Público-Alvo  

O público-alvo do projeto EasyBus é composto por duas categorias principais:  

Usuários do Transporte Público:  

Esses são os passageiros que dependem diariamente dos ônibus em Belo Horizonte e região metropolitana.  

Inclui estudantes, trabalhadores, idosos e outros cidadãos que utilizam o transporte público para suas atividades cotidianas.  

Essas pessoas enfrentam desafios como superlotação, atrasos e desconforto durante suas viagens.  

Empresas de Transporte e Motoristas de Ônibus:  

Os condutores e as empresas de transporte também fazem parte do público-alvo.  

Eles enfrentam obstáculos relacionados à gestão da frota, manutenção dos veículos e eficiência operacional.  

O EasyBus visa melhorar a experiência tanto para os passageiros quanto para os motoristas e operadores do sistema.  

Em resumo, o público-alvo da EasyBus é formado por todos os envolvidos no ecossistema do transporte público: passageiros, motoristas e empresas. Nosso objetivo é criar soluções inteligentes que beneficiem a todos, tornando o sistema mais eficiente, confortável e confiável.  

Concepção (Design Thinking)  

Ao desenvolver este projeto, levamos em consideração as necessidades de nossos stakeholders de maneira séria. O problema da mobilidade urbana, que é exacerbado pela superlotação, afeta a vida diária das pessoas. Realizamos um estudo focado em nossos stakeholders, pois acreditamos que, ao ouvir as experiências de motoristas e passageiros (jovens, adultos e idosos), podemos entender melhor as necessidades de nossos clientes.  

Através de entrevistas, observações e pesquisas, nos esforçamos para ser o mais empáticos possível. Concluímos que, ao abordar a superlotação e os problemas de mobilidade urbana em geral, é essencial discutir a gestão de recursos e o manejo de pessoas.  

Em um sistema tão aberto e complexo como uma cidade, é fundamental entender sua dinâmica e como ela muda rapidamente e com agilidade. Para isso, saímos às ruas para perguntar aos usuários de transporte público, motoristas e funcionários administrativos de uma empresa de ônibus sobre como seu dia é afetado por essa realidade.  

Entrevista com Passageiro Anônimo, 17 anos  

Pergunta: Com que frequência você enfrenta ônibus superlotados?  

Resposta: Frequentemente enfrento ônibus superlotados, principalmente quando estou voltando da escola e, às vezes, quando estou indo para lá. Isso geralmente acontece por volta das 12:00 e 18:00.  

Pergunta: Como a superlotação afeta sua experiência de viagem?  

Resposta: A superlotação resulta em odores fortes, ruído excessivo e calor. Além disso, é sempre desconfortável carregar minha mochila quando o ônibus está cheio.  

Pergunta: Você já teve que esperar por um ônibus menos cheio em vez de embarcar em um superlotado?  

Resposta: Sim, isso acontece com frequência. Mas até que não é um problema, às vezes fico conversando com os amigos para evitar pegar os ônibus mais cheios.  

Pergunta: O que você costuma fazer para evitar pegar ônibus lotado?  

Resposta: Quando não posso esperar, costumo atravessar o centro para pegar um ônibus alternativo de outra linha.  

Pergunta: Você acredita que a conscientização dos passageiros sobre a importância de não exceder a capacidade do ônibus pode ajudar a resolver o problema?  

Resposta: Sim, acredito que a conscientização pode ajudar. No entanto, não consigo especificar exatamente como isso poderia ser feito.  

Pergunta: Como você descreveria um sistema web que tentasse resolver seu problema?  

Resposta: Acredito que um sistema web que me permitisse saber onde os ônibus estão seria útil para planejar melhor minhas viagens. Além disso, gostaria de poder calcular melhor o tempo de um trajeto.  

Entrevista com Passageiro Anônimo, 34 anos  

Pergunta: Com que frequência você enfrenta ônibus superlotados?  

Resposta: Infelizmente, enfrentar ônibus superlotados é uma realidade diária nas minhas viagens de ida e volta para o trabalho.  

Pergunta: Como a superlotação afeta sua experiência de viagem?  

Resposta: A superlotação cria um ambiente desconfortável, caracterizado por calor excessivo e ruído constante. Além disso, a falta de espaço pessoal pode levar a situações humilhantes e até mesmo a casos de assédio, os quais já testemunhei.  

Pergunta: Você já teve que esperar por um ônibus menos cheio em vez de embarcar em um superlotado?  

Resposta: Sim, sempre que possível, eu espero. No entanto, muitas vezes a incerteza sobre a chegada do próximo ônibus me obriga a embarcar no ônibus cheio.  

Pergunta: O que você costuma fazer para evitar pegar ônibus lotado?  

Resposta: Algumas estratégias que utilizo incluem caminhar até outro ponto de ônibus onde sei que o ônibus estará menos cheio, ou esperar intencionalmente alguns minutos para pegar o próximo ônibus.  

Pergunta: Você acredita que a conscientização dos passageiros sobre a importância de não exceder a capacidade do ônibus pode ajudar a resolver o problema?  

Resposta: Não necessariamente. Acredito que as pessoas precisam se deslocar e realizar suas viagens, independentemente da lotação do ônibus.  

Pergunta: Como você descreveria um sistema web que tentasse resolver seu problema?  

Resposta: Um sistema web ideal para mim precisaria fornecer alertas para que eu nunca perdesse o ônibus. Além disso, deveria me avisar em dias de eventos que o ônibus estaria mais cheio. Isso me ajudaria a planejar melhor minhas viagens.  

Entrevista com Passageira Anônima, 83 anos  

Pergunta: Com que frequência você enfrenta ônibus superlotados?  

Resposta: Quase nunca enfrento ônibus superlotados, apenas às vezes quando vou ao centro resolver alguma coisa com minha nora.  

Pergunta: Como é a sua experiência com as viagens de ônibus?  

Resposta: Minha experiência com as viagens de ônibus é tranquila, pois pego muito pouco ônibus. No entanto, vejo na TV os ônibus cheios como lata de sardinha. Não sei andar pela cidade e também sou analfabeta.  

Pergunta: A superlotação te afeta de alguma forma?  

Resposta: Sim, afeta. Meu neto sempre chega em casa tarde e cansado.  

Pergunta: Você acredita que a conscientização dos passageiros sobre a importância de não exceder a capacidade do ônibus pode ajudar a resolver o problema?  

Resposta: Sim, acredito que as pessoas deveriam andar mais a pé e se exercitar, além de evitar viagens curtas.  

Pergunta: Você acha que esse é um problema que a internet poderia resolver?  

Resposta: Não sei se a internet poderia resolver esse problema.  

Entrevista com Motorista Anônimo, 49 anos  

Pergunta: Quantas vezes você enfrenta superlotação em seu itinerário diário?  

Resposta: A superlotação é uma realidade diária, especialmente nos horários de pico pela manhã, por volta das 7 horas. Quando trabalhava à tarde e à noite, a situação era ainda pior. Além disso, nem todos os passageiros viajam para o centro de manhã; por exemplo, os estudantes que frequentam a escola à tarde também retornam por volta das 5 ou 6 horas, o que contribui para a lotação.  

Pergunta: O que mais te atrapalha durante esses momentos de aperto?  

Resposta: Além do desconforto térmico, o barulho e a visibilidade dentro do ônibus são desafios significativos. A superlotação dificulta minha capacidade de ver as escadas, o que pode atrapalhar o embarque e desembarque dos passageiros. Já me vi prendendo pessoas que estavam entrando ou saindo do ônibus, simplesmente porque não conseguia vê-las adequadamente.  

Pergunta: Como a superlotação afeta sua programação e horários?  

Resposta: Quando há muitos passageiros, aumenta o risco de incidentes ou acidentes. Isso causa ansiedade e agonia, além de poder atrasar a próxima viagem. Caso isso ocorra, há descontos em meus salários, o que torna a situação ainda mais desafiadora.  

Pergunta: Quais medidas você acha que poderiam ajudar a reduzir a superlotação nos ônibus?  

Resposta: Sugiro que haja mais união entre os motoristas para evitar paradas desnecessárias e otimizar o fluxo de passageiros. Cortar caminhos ou evitar paradas extras pode ajudar a aliviar a sobrecarga.  

Pergunta: Como você lida com passageiros insatisfeitos durante os horários de pico?  

Resposta: Geralmente, ignoro as reclamações. Entendo que, para o passageiro, pareço estar errado por estar atrasado, mas, muitas vezes, não tenho tempo suficiente para cumprir os horários rigorosos. O risco de ser repreendido ou ter descontos salariais é uma realidade com a qual lido, mesmo quando não sou culpado pela situação. A superlotação é um desafio constante, tanto para os motoristas quanto para os passageiros.  

Pergunta: Você acredita que a conscientização dos passageiros sobre a importância de não exceder a capacidade do ônibus pode ajudar a resolver o problema?  

Resposta: “Também, mas não é só isso. Pelo menos na região metropolitana onde eu trabalho, nós não temos um fluxo grande de viagens. Então, algumas vezes, a única opção que o passageiro tem é pegar o ônibus ou esperar horas no ponto. Às vezes, até eu mesmo, depois de uma viagem.”  

Pergunta: Como você descreveria um sistema web que tentasse resolver seu problema?  

Resposta: Um sistema web ideal para mim seria aquele que me permitisse saber se há alguém atrás de mim, mesmo de outras linhas, para dividir a demanda de passageiros.  

Com base nas respostas que coletamos, ficou evidente que a solução para esse problema exigiria uma abordagem direcionada àqueles que têm o poder de implementar mudanças significativas. Concluímos que a melhor maneira de atender a essa necessidade do mercado seria desenvolver uma solução de gestão para as empresas de ônibus.  

No entanto, embora os executivos dessas empresas sejam nossos clientes e usuários, os públicos-alvo apresentados nas entrevistas devem ser o centro de nossa atenção quando consideramos a interface e a usabilidade. Este será o foco do nosso próximo tópico.  

 Processo de Design Thinking  

O arquivo a seguir apresenta os resultados de parte do caminho que percorremos para modelar o projeto. Nosso objetivo é que ele seja o mais fiel possível a uma solução ideal para o nosso usuário e cliente. Para isso, utilizaremos a plataforma Miro e as metodologias propostas que serão apresentadas a seguir.  

(Páginas do Miro)  

   

Especificações do Projeto  

   

Ao trabalhar com diversos públicos, percebemos a necessidade de atender a diferentes demandas. Inicialmente, a ideia do projeto era desenvolver um produto para as pessoas que utilizam transporte público. No entanto, essa ideia não se mostrou viável ao longo do projeto.  

   

Percebemos que as empresas que gerenciam o transporte coletivo têm o poder de atender melhor ao nosso público. A partir daí, começamos a buscar as demandas que essas empresas precisariam para otimizar seus processos e entregar um melhor resultado para nosso público final.  

   

Em resumo, a proposta da EasyBus é tratar as demandas de gestão dessas empresas para otimizar processos. Nosso objetivo é vender para essas empresas uma solução que pode melhorar sua eficiência e atender aos usuários de transporte coletivo.  

   

Histórias de Usuários  

   

A partir do que levantamos anteriormente com as entrevistas e as nossas personas, desenvolvemos à seguinte história de usuário:  

   

Eu Como : Persona Gabriel (motorista)   

Quero/preciso: saber a localização de meus colegas  

 Para: facilitar meu trabalho no dia a dia  

   

Eu Como: Persona Gabriel (motorista)   

Quero/preciso: ter assistência de meus supervisores e de autoridades sempre que for necessário   

Para: diminuir stresses comuns a minha profissão  

   

Eu Como: Persona Gabriel (motorista)   

Quero/preciso: registrar ocorrências e entregar relatórios sobre ocorrências Para: ganhar tempo e aproveitar melhor minha vida pessoal  

   

Eu como: passageiro mais jovem  
 Quero/preciso: um sistema para me ajudar a pegar ônibus mais vazios  
 Para: não passar por situações desconfortáveis  

   

Eu como: passageiro mais jovem  
 Quero/preciso: um sistema para me encontrar alternativas de trajeto para meu destino   

Para: ganhar tempo em meu trajeto para casa  

   

Eu como: passageiro mais jovem  
 Quero/preciso: um sistema para me permitir ver o tempo que cada ônibus levará para chegar aos pontos próximos a mim  

 Para: decidir o quanto vale a pena andar até o meu próximo ponto  

   

Eu como: passageiro mais velho   

Quero/preciso: avisos sobre os ônibus que tenho o costume de pegar, onde ele está e quando tenho que sair para alcançá-lo   

Para: não perder o ônibus e chegar atrasado no trabalho  

   

Eu como: passageiro mais velho   

Quero/preciso: alertas de horários que devo acordar  
 Para: não perder o horário de acordar  

   

Eu como: passageiro mais velho   

Quero/preciso: ser avisado se algum incidente interferir no meu trajeto  
 Para: para saber o que fazer e me planejar no meu trajeto  

   

Eu como: administrador do sistema  
 Quero/preciso: ter todas as informações pertinentes a minha frota e meus funcionários em um só lugar   

Para: para facilitar lidar com minhas obrigações corporativas  

   

Eu como: administrador do sistema  
 Quero/preciso: relatórios e provas jurídicas  
 Para: para facilitar lidar com minhas obrigações corporativas  

   

Eu como administrador do sistema  

Quero/preciso: gerenciador de filmagens de eventos   

Para: para me ajudar a lidar com eventos  

 

 

Requisitos funcionais da easybus: 

Requisitos do passageiro:  

Monitoramento em tempo real: O usuário deve poder saber em tempo real a situação dos ônibus em relação à lotação.  

Minimapa: O usuário deve poder visualizar um minimapa para melhor entendimento da localização dos ônibus.  

Acesso ao GPS: O usuário deve ter acesso ao GPS para planejar a melhor rota.  

Informações sobre pontos de ônibus: O usuário deve ter acesso a todos os pontos de ônibus e horários ao seu redor.  

Notificações personalizadas: O usuário deve receber notificações dos ônibus que costuma pegar.  

Acesso a aplicativos de transporte parceiros: O usuário deve ter acesso aos aplicativos de transporte parceiros.  

Requisitos do Cliente Potencial:  

Pesquisa de recursos: O cliente potencial deve conseguir pesquisar por recursos oferecidos pela empresa.  

Acesso facilitado para contratação: O cliente potencial deve ter acesso facilitado para a contratação dos serviços.  

Chat assíncrono: O cliente potencial deve ter acesso a um chat assíncrono para levantamento de questões.  

Acesso ao painel de controle: O cliente potencial deve ter acesso direto ao seu painel de controle caso se torne cliente.  

Requisitos do Motorista Parceiro:  

Página de acompanhamento de viagens: O motorista parceiro precisa de uma página para acompanhar os dados sobre as viagens.  

Página de incidentes: O motorista parceiro precisa de uma página para informar o acontecimento de algum incidente.  

Botão de SOS: O motorista parceiro precisa de um botão de SOS para acionar autoridades.  

Comunicação com a garagem: O motorista parceiro precisa de uma comunicação direta com a garagem.  

Página de localização de ônibus: O motorista parceiro precisa de uma página para ver a localização de todos os ônibus e onde cada um se encontra.  

Página de treinamento: O motorista parceiro precisa ter acesso a uma página de treinamento oferecido pela empresa.  

Requisitos do Administrador do Sistema:  

  

Visão simplificada da frota: O administrador do sistema precisa ter uma visão simplificada da frota com o estado de cada ônibus e horários que devem cumprir.  

Interface para organização de escalas: O administrador do sistema precisa ter uma interface para organizar as escalas dos motoristas e ver o seu status operacional.  

Acesso a relatórios: O administrador do sistema precisa ter acesso a relatórios de ocorrências vivenciadas pelo motorista e pelos passageiros.  

Interface personalizada: O administrador do sistema precisa ter uma interface personalizada para a sua empresa.  

Página de cursos: O administrador do sistema precisa ter uma página para postar e acompanhar o status dos cursos dos motoristas.  

  

 Requisitos não funcionais da easybus: 

 

Desempenho: O sistema deve ser capaz de suportar 1000 usuários simultâneos sem degradar a qualidade do serviço. 

Disponibilidade: O sistema deve estar disponível 24 horas por dia, 7 dias por semana, com uma taxa de uptime de 90%. 

Segurança: O sistema deve criptografar dados sensíveis para proteger a privacidade do usuário. 

Usabilidade: O sistema deve ser fácil de usar e intuitivo, com uma curva de aprendizado mínima. 

Manutenibilidade: O sistema deve ser projetado de forma a facilitar atualizações e manutenção futuras. 

Portabilidade: O sistema deve ser compatível com diferentes sistemas operacionais e navegadores da web. 

Escalabilidade: O sistema deve ser capaz de lidar com um aumento na carga de trabalho sem impactar o desempenho. 

Resiliência: O sistema deve ser capaz de se recuperar rapidamente de falhas e continuar a fornecer serviços. 

Interoperabilidade: O sistema deve ser capaz de se integrar e funcionar bem com outros sistemas externos. 

Localização: O sistema deve suportar vários idiomas e formatos de data/hora para atender a usuários de diferentes regiões. 

Acessibilidade: O sistema deve ser acessível para usuários com deficiências, seguindo as diretrizes de acessibilidade da web. 

Sustentabilidade: O sistema deve ser projetado de forma a minimizar o consumo de energia e o impacto ambiental. 

 

  

Projeto de Interface  

  

Wireframes  

A partir dos dados apresentados e nosssa proposta de solução elaboramos a seguinte interface para atender da melhor forma as necessidades de nossos clientes.  

...... COLOQUE AQUI OS PROTÓTIPO DE TELAS E SUA DESCRIÇÃO ......  

Userflow:  

Para reprentar o funcionamento dessa interface elaboramos o seguinte userflow  

...... COLOQUE AQUI O DIAGRAMA DE USER FLOW E O LINK PARA O PROTÓTIPO INTERATIVO ......  

  

  

  

Metodologia  

Nosso grupo está utilizando o processo de metodologias ágeis, onde cada membro do grupo se concentra em um aspecto da documentação e todos colaboram através do código no GitHub. Também utilizamos o Kanban para organizar as ideias do grupo e gerenciar as etapas do trabalho a ser realizado.  

O processo de Design Thinking foi realizado através da plataforma online MIRO. Nela, organizamos o propósito do nosso trabalho e discutimos quais perguntas deveriam ser feitas às pessoas para definirmos as personas que deveríamos atender para resolver seus problemas.  

  

Ferramentas  

Relação de ferramentas empregadas pelo grupo durante o projeto.   

.  

Ambiente  

Plataforma  

Link de Acesso  

Processo de Design Thinking  

  

Miro  

https://miro.com/app/board/uXjVKdAsEI8=/  

  

Repositório de código  

  

GitHub  

  

https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0387100-easybus  

  

Hospedagem do site  

  

  

Em processo  

Protótipo Interativo  

Figma  

  

https://www.figma.com/files/team/1359233799757941309  

  

Gestão do Projeto  

A divisão de papéis no grupo foi apresentada, juntamente com a estrutura da ferramenta de controle de tarefas (Kanban). O projeto foi dividido de forma que todos contribuíssem com uma parte da documentação, dividida em Introdução, Contexto, Concepção e Metodologia. Por sermos um grupo pequeno, todos deveriam ter seu papel bem definido para que o desenvolvimento ocorresse. Além da documentação, duas pessoas ficaram responsáveis pelo Design Thinking, uma para projetar os slides e outra para fazer o protótipo do nosso site com as ideias fornecidas por todos do grupo.  

Dessa forma, utilizamos o quadro de gerenciamento do time (Kanban) para organizar os trabalhos que deveriam ser feitos na sprint e em qual etapa este trabalho estava naquele momento.  

  

Referências Bibliográficas  

Transporte :: RESULTADOS (pbh.gov.br)  - https://prefeitura.pbh.gov.br/sites/default/files/estrutura-de-governo/bhtrans/2024/relatorio-de-fevereiro-2024-para_publicacao.pdf   

https://github.com/orgs/ICEI-PUC-Minas-PPLES-TI/projects/366  

  

  

Trabalho Interdisciplinar - ICEI PUC Minas  
 Modelo adaptado de iDocs - Design & Develop by HarnishDesign  

   

Apresentação:   

problemas ocasionasionados pela falta de gestão nas empressas de onibus  

  

 

 
