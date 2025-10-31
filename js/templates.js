/* ============================================
   TEMPLATES.JS - Conteúdo COMPLETO das Páginas
   ONG Esperança Solidária
   ============================================ */

const Templates = {
  
  /**
   * TEMPLATE DA PÁGINA INICIAL
   */
  home: () => `
<section id="hero">
            <div class="container">
                <h2>Transformando Vidas Através da Solidariedade</h2>
                <p>Juntos, construímos um futuro melhor para crianças e famílias em situação de vulnerabilidade social.</p>
                <img src="imagens/banner-principal.jpg" alt="Crianças participando de atividades educacionais da ONG Esperança Solidária" width="1200" height="400">
            </div>
        </section>

        
        <section id="sobre">
            <div class="container">
                <h2>Quem Somos</h2>
                <div class="grid grid-cols-1 gap-6">
                    <article>
                        <h3>Nossa História</h3>
                        <p>Fundada em 2010, a <strong>Esperança Solidária</strong> nasceu do sonho de um grupo de educadores e voluntários que acreditavam no poder transformador da educação e da solidariedade. Ao longo de mais de uma década, já impactamos positivamente a vida de mais de <em>15.000 crianças e jovens</em> em situação de vulnerabilidade social.</p>
                        
                        <p>Nossa trajetória é marcada por conquistas significativas: inauguração de 5 centros comunitários, formação de 200 voluntários capacitados e reconhecimento nacional por projetos de excelência em educação inclusiva.</p>
                        
                        <img src="imagens/equipe.jpg" alt="Equipe de voluntários e coordenadores da ONG Esperança Solidária" width="800" height="500">
                    </article>

                    <article>
                        <h3>Missão</h3>
                        <p>Promover a inclusão social e o desenvolvimento integral de crianças, jovens e famílias em situação de vulnerabilidade, através de ações educativas, culturais e de apoio comunitário.</p>
                    </article>

                    <article>
                        <h3>Visão</h3>
                        <p>Ser referência nacional em projetos de transformação social, reconhecida pela excelência, transparência e impacto positivo nas comunidades atendidas.</p>
                    </article>

                    <article>
                        <h3>Valores</h3>
                        <ul>
                            <li><strong>Solidariedade:</strong> Promover o espírito de cooperação e empatia</li>
                            <li><strong>Transparência:</strong> Gestão ética e prestação de contas clara</li>
                            <li><strong>Respeito:</strong> Valorizar a dignidade de cada indivíduo</li>
                            <li><strong>Educação:</strong> Acreditar no conhecimento como ferramenta de mudança</li>
                            <li><strong>Inclusão:</strong> Garantir oportunidades iguais para todos</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>

        
        <section id="impacto">
            <div class="container">
                <h2 class="text-center">Nosso Impacto em Números</h2>
                <div class="table-responsive">
                    <table>
                        <caption>Estatísticas de Atendimento 2024</caption>
                        <thead>
                            <tr>
                                <th>Indicador</th>
                                <th>Quantidade</th>
                                <th>Crescimento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Crianças Atendidas</td>
                                <td>2.450</td>
                                <td>+15%</td>
                            </tr>
                            <tr>
                                <td>Voluntários Ativos</td>
                                <td>320</td>
                                <td>+22%</td>
                            </tr>
                            <tr>
                                <td>Projetos em Andamento</td>
                                <td>12</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>Famílias Beneficiadas</td>
                                <td>1.800</td>
                                <td>+18%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        
        <section id="depoimentos">
            <div class="container">
                <h2 class="text-center">Histórias que Inspiram</h2>
                <div class="grid grid-cols-1 grid-cols-md-2 gap-6">
                    <article>
                        <h3>Maria Silva - Ex-aluna</h3>
                        <blockquote>
                            <p>"A Esperança Solidária mudou minha vida. Graças ao projeto de reforço escolar, consegui ingressar na universidade e hoje sou professora, retribuindo tudo que recebi."</p>
                        </blockquote>
                        <img src="imagens/depoimento-maria.jpg" alt="Maria Silva, ex-aluna da ONG que se tornou professora" width="300" height="300">
                    </article>

                    <article>
                        <h3>João Santos - Voluntário</h3>
                        <blockquote>
                            <p>"Ser voluntário aqui é uma experiência transformadora. Ver o sorriso das crianças e saber que estou contribuindo para um futuro melhor me motiva todos os dias."</p>
                        </blockquote>
                        <img src="imagens/depoimento-joao.jpg" alt="João Santos, voluntário ativo há 3 anos" width="300" height="300">
                    </article>
                </div>
            </div>
        </section>

        
        <section id="transparencia">
            <div class="container">
                <h2>Transparência e Prestação de Contas</h2>
                <div class="grid grid-cols-1 grid-cols-md-2 gap-6">
                    <article>
                        <h3>Relatórios Anuais</h3>
                        <p>Acreditamos na transparência total de nossas ações. Confira nossos relatórios de atividades e demonstrativos financeiros:</p>
                        <ul>
                            <li><a href="#" download>Relatório de Atividades 2024 (PDF)</a></li>
                            <li><a href="#" download>Demonstrativo Financeiro 2024 (PDF)</a></li>
                            <li><a href="#" download>Relatório de Impacto Social 2024 (PDF)</a></li>
                        </ul>
                    </article>

                    <article>
                        <h3>Certificações e Parcerias</h3>
                        <p>Somos certificados pelo <strong>CEBAS</strong> (Certificado de Entidade Beneficente de Assistência Social) e mantemos parcerias com diversas instituições públicas e privadas.</p>
                    </article>
                </div>
            </div>
        </section>
  `,

  /**
   * TEMPLATE DA PÁGINA DE PROJETOS
   */
  projetos: () => `
<section id="intro-projetos">
            <div class="container">
                <h2>Nossos Projetos Sociais</h2>
                <p>Desenvolvemos projetos que promovem educação, cultura, esporte e inclusão social. Cada iniciativa é cuidadosamente planejada para gerar impacto positivo e duradouro na vida das pessoas atendidas.</p>
                <img src="imagens/projetos-banner.jpg" alt="Crianças participando de atividades dos projetos sociais" width="1200" height="400">
            </div>
        </section>

        
        <section id="lista-projetos">
            <div class="container">
                <h2>Conheça Nossas Iniciativas</h2>

                
                <div class="grid grid-cols-1 grid-cols-md-2 gap-6">
                    
                    
                    <article class="projeto card">
                        <div class="card-img-wrapper">
                            <img src="imagens/projeto-educacao.jpg" alt="Crianças em sala de aula do projeto Educar para Transformar" class="card-img">
                        </div>
                        <div class="card-body">
                            <h3>Educar para Transformar</h3>
                            <p>O projeto oferece reforço escolar, aulas de informática e oficinas de leitura para crianças de 6 a 14 anos.</p>
                            <span class="badge badge-primary">Educação</span>
                            <span class="badge badge-success">Ativo</span>
                        </div>
                        <div class="card-footer">
                            <a href="#projeto-educacao" class="btn btn-primary btn-block">Saiba Mais</a>
                        </div>
                    </article>

                    
                    <article class="projeto card">
                        <div class="card-img-wrapper">
                            <img src="imagens/projeto-esporte.jpg" alt="Jovens praticando atividades esportivas" class="card-img">
                        </div>
                        <div class="card-body">
                            <h3>Esporte e Cidadania</h3>
                            <p>Utiliza o esporte como ferramenta de inclusão social, oferecendo aulas de futebol, vôlei, basquete e judô.</p>
                            <span class="badge badge-secondary">Esporte</span>
                            <span class="badge badge-success">Ativo</span>
                        </div>
                        <div class="card-footer">
                            <a href="#projeto-esporte" class="btn btn-primary btn-block">Saiba Mais</a>
                        </div>
                    </article>

                    
                    <article class="projeto card">
                        <div class="card-img-wrapper">
                            <img src="imagens/projeto-cultura.jpg" alt="Apresentação cultural com crianças e adolescentes" class="card-img">
                        </div>
                        <div class="card-body">
                            <h3>Arte e Cultura na Comunidade</h3>
                            <p>Desenvolve talentos artísticos através de oficinas de teatro, música, dança e artes visuais.</p>
                            <span class="badge badge-warning">Cultura</span>
                            <span class="badge badge-success">Ativo</span>
                        </div>
                        <div class="card-footer">
                            <a href="#projeto-cultura" class="btn btn-primary btn-block">Saiba Mais</a>
                        </div>
                    </article>

                    
                    <article class="projeto card">
                        <div class="card-img-wrapper">
                            <img src="imagens/projeto-familia.jpg" alt="Reunião com famílias atendidas pelo projeto" class="card-img">
                        </div>
                        <div class="card-body">
                            <h3>Família Solidária</h3>
                            <p>Oferece apoio integral às famílias incluindo orientação psicológica, cursos profissionalizantes e cestas básicas.</p>
                            <span class="badge badge-info">Assistência</span>
                            <span class="badge badge-success">Ativo</span>
                        </div>
                        <div class="card-footer">
                            <a href="#projeto-familia" class="btn btn-primary btn-block">Saiba Mais</a>
                        </div>
                    </article>
                </div>

                <div class="divider"></div>

                
                <article id="projeto-educacao" class="projeto">
                    <h3>Educar para Transformar</h3>
                    <img src="imagens/projeto-educacao.jpg" alt="Crianças em sala de aula" width="600" height="400">
                    
                    <h4>Sobre o Projeto</h4>
                    <p>O projeto <strong>Educar para Transformar</strong> oferece reforço escolar, aulas de informática e oficinas de leitura para crianças de 6 a 14 anos. Com uma equipe de 25 educadores voluntários, atendemos 500 crianças semanalmente.</p>
                    
                    <h4>Objetivos</h4>
                    <ul>
                        <li>Melhorar o desempenho escolar das crianças atendidas</li>
                        <li>Desenvolver habilidades de leitura e escrita</li>
                        <li>Promover inclusão digital</li>
                        <li>Estimular o hábito de leitura</li>
                    </ul>

                    <h4>Resultados Alcançados</h4>
                    <ul>
                        <li>85% das crianças melhoraram suas notas</li>
                        <li>200 livros distribuídos mensalmente</li>
                        <li>100% dos alunos alfabetizados digitalmente</li>
                    </ul>

                    <h4>Vídeo do Projeto</h4>
                    <video controls width="640" height="360" poster="imagens/poster-educacao.jpg">
                        <source src="videos/projeto-educacao.mp4" type="video/mp4">
                        <source src="videos/projeto-educacao.webm" type="video/webm">
                        Seu navegador não suporta a reprodução de vídeos.
                    </video>
                </article>

                <article id="projeto-esporte" class="projeto">
                    <h3>Esporte e Cidadania</h3>
                    <img src="imagens/projeto-esporte.jpg" alt="Jovens praticando atividades esportivas" width="600" height="400">
                    
                    <h4>Sobre o Projeto</h4>
                    <p>O <strong>Esporte e Cidadania</strong> utiliza o esporte como ferramenta de inclusão social, oferecendo aulas de futebol, vôlei, basquete e judô para jovens de 10 a 18 anos.</p>
                    
                    <h4>Atividades Oferecidas</h4>
                    <ol>
                        <li>Futebol de campo e futsal</li>
                        <li>Vôlei e vôlei de praia</li>
                        <li>Basquete</li>
                        <li>Judô e capoeira</li>
                        <li>Atletismo</li>
                    </ol>

                    <h4>Impacto Social</h4>
                    <p>Mais de <em>300 jovens</em> participam regularmente das atividades, desenvolvendo não apenas habilidades esportivas, mas também valores como disciplina, trabalho em equipe e respeito.</p>

                    <h4>Galeria de Fotos</h4>
                    <div class="grid grid-cols-1 grid-cols-md-3 gap-4">
                        <img src="imagens/esporte-1.jpg" alt="Turma de futebol durante treino" width="400" height="300">
                        <img src="imagens/esporte-2.jpg" alt="Campeonato interno de vôlei" width="400" height="300">
                        <img src="imagens/esporte-3.jpg" alt="Aula de judô com crianças" width="400" height="300">
                    </div>
                </article>

                <article id="projeto-cultura" class="projeto">
                    <h3>Arte e Cultura na Comunidade</h3>
                    <img src="imagens/projeto-cultura.jpg" alt="Apresentação cultural" width="600" height="400">
                    
                    <h4>Sobre o Projeto</h4>
                    <p>Desenvolvemos talentos artísticos através de oficinas de teatro, música, dança e artes visuais, promovendo a expressão cultural e o desenvolvimento criativo.</p>
                    
                    <h4>Oficinas Disponíveis</h4>
                    <ul>
                        <li><strong>Teatro:</strong> Técnicas de interpretação e produção de espetáculos</li>
                        <li><strong>Música:</strong> Aulas de violão, teclado, percussão e canto</li>
                        <li><strong>Dança:</strong> Ballet, jazz, hip hop e danças populares</li>
                        <li><strong>Artes Visuais:</strong> Pintura, desenho e artesanato</li>
                    </ul>

                    <h4>Áudio - Apresentação Musical</h4>
                    <audio controls>
                        <source src="audios/apresentacao-musical.mp3" type="audio/mpeg">
                        <source src="audios/apresentacao-musical.ogg" type="audio/ogg">
                        Seu navegador não suporta a reprodução de áudio.
                    </audio>
                    <p><small>Apresentação do coral infantil - Concerto de Natal 2024</small></p>
                </article>

                <article id="projeto-familia" class="projeto">
                    <h3>Família Solidária</h3>
                    <img src="imagens/projeto-familia.jpg" alt="Reunião com famílias" width="600" height="400">
                    
                    <h4>Sobre o Projeto</h4>
                    <p>O projeto <strong>Família Solidária</strong> oferece apoio integral às famílias em situação de vulnerabilidade, incluindo orientação psicológica, cursos profissionalizantes e distribuição de cestas básicas.</p>
                    
                    <h4>Serviços Oferecidos</h4>
                    <dl>
                        <dt>Orientação Psicológica</dt>
                        <dd>Atendimento individual e em grupo com psicólogos voluntários</dd>
                        
                        <dt>Cursos Profissionalizantes</dt>
                        <dd>Capacitação em costura, culinária, informática e empreendedorismo</dd>
                        
                        <dt>Assistência Básica</dt>
                        <dd>Distribuição mensal de cestas básicas e kits de higiene</dd>
                        
                        <dt>Orientação Jurídica</dt>
                        <dd>Assessoria jurídica gratuita em parceria com universidades</dd>
                    </dl>

                    <h4>Mapa de Abrangência</h4>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                        width="600" 
                        height="450" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        title="Mapa de localização dos centros de atendimento">
                    </iframe>
                </article>
            </div>
        </section>

        
        <section id="voluntariado">
            <div class="container">
                <h2>Seja um Voluntário</h2>
                <p>O voluntariado é o coração da nossa organização. Contamos com pessoas dispostas a doar seu tempo, conhecimento e amor para transformar vidas.</p>
                
                <div class="grid grid-cols-1 grid-cols-md-2 gap-6">
                    <article>
                        <h3>Por que Ser Voluntário?</h3>
                        <ul>
                            <li>Fazer a diferença na vida de crianças e famílias</li>
                            <li>Desenvolver novas habilidades e competências</li>
                            <li>Ampliar sua rede de relacionamentos</li>
                            <li>Contribuir para uma sociedade mais justa</li>
                            <li>Receber certificado de horas voluntárias</li>
                        </ul>
                    </article>

                    <article>
                        <h3>Como se Tornar Voluntário</h3>
                        <ol>
                            <li>Preencha o formulário de cadastro na página <a href="/cadastro">Cadastre-se</a></li>
                            <li>Participe de uma reunião de integração (online ou presencial)</li>
                            <li>Escolha a área de atuação que mais combina com você</li>
                            <li>Receba o treinamento específico da área escolhida</li>
                            <li>Comece a transformar vidas!</li>
                        </ol>
                    </article>
                </div>

                <div class="table-responsive mt-6">
                    <table>
                        <caption>Oportunidades de Voluntariado Disponíveis</caption>
                        <thead>
                            <tr>
                                <th>Área</th>
                                <th>Atividades</th>
                                <th>Disponibilidade</th>
                                <th>Vagas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Educação</td>
                                <td>Reforço escolar e alfabetização</td>
                                <td>2x por semana (tarde)</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Esportes</td>
                                <td>Instrutor de atividades esportivas</td>
                                <td>Finais de semana</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Cultura</td>
                                <td>Oficinas de arte e música</td>
                                <td>1x por semana</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>Administrativo</td>
                                <td>Apoio em gestão e comunicação</td>
                                <td>Flexível (remoto)</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>Saúde</td>
                                <td>Atendimento psicológico</td>
                                <td>Agendamento prévio</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <aside class="mt-6">
                    <h4>Depoimento de Voluntária</h4>
                    <blockquote>
                        <p>"Ser voluntária da Esperança Solidária mudou minha perspectiva de vida. A cada aula que dou, aprendo mais do que ensino. Ver o progresso das crianças é minha maior recompensa."</p>
                        <footer>— Ana Paula Costa, voluntária há 2 anos</footer>
                    </blockquote>
                </aside>
            </div>
        </section>

        
        <section id="doacoes">
            <div class="container">
                <h2>Como Doar</h2>
                <p>Sua doação transforma vidas! Todo recurso arrecadado é aplicado diretamente em nossos projetos, com total transparência e prestação de contas.</p>

                <div class="grid grid-cols-1 grid-cols-lg-2 gap-6">
                    <article>
                        <h3>Formas de Contribuir</h3>
                        
                        <h4>1. Doação Financeira</h4>
                        <p>Você pode fazer doações únicas ou mensais através de:</p>
                        <ul>
                            <li><strong>PIX:</strong> doacoes@esperancasolidaria.org.br</li>
                            <li><strong>Transferência Bancária:</strong>
                                <ul>
                                    <li>Banco do Brasil - Agência: 1234-5</li>
                                    <li>Conta Corrente: 98765-4</li>
                                    <li>CNPJ: 12.345.678/0001-90</li>
                                </ul>
                            </li>
                            <li><strong>Cartão de Crédito:</strong> através do nosso site (em breve)</li>
                        </ul>

                        <h4>2. Doação de Materiais</h4>
                        <p>Aceitamos doações de:</p>
                        <ul>
                            <li>Material escolar (cadernos, lápis, mochilas)</li>
                            <li>Livros infantis e didáticos</li>
                            <li>Equipamentos esportivos</li>
                            <li>Alimentos não perecíveis</li>
                            <li>Roupas e calçados em bom estado</li>
                            <li>Brinquedos educativos</li>
                        </ul>
                    </article>

                    <article>
                        <h3>Impacto das Doações</h3>
                        <table>
                            <caption>O que sua doação pode fazer</caption>
                            <thead>
                                <tr>
                                    <th>Valor</th>
                                    <th>Impacto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>R$ 30,00</td>
                                    <td>Kit de material escolar completo para 1 criança</td>
                                </tr>
                                <tr>
                                    <td>R$ 50,00</td>
                                    <td>Cesta básica para 1 família por 1 mês</td>
                                </tr>
                                <tr>
                                    <td>R$ 100,00</td>
                                    <td>Uniforme esportivo completo para 2 crianças</td>
                                </tr>
                                <tr>
                                    <td>R$ 200,00</td>
                                    <td>1 mês de aulas de reforço escolar para 5 crianças</td>
                                </tr>
                                <tr>
                                    <td>R$ 500,00</td>
                                    <td>Compra de instrumentos musicais para oficina</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4 class="mt-4">Incentivos Fiscais</h4>
                        <p>Pessoas físicas e jurídicas podem deduzir as doações do Imposto de Renda:</p>
                        <ul>
                            <li><strong>Pessoa Física:</strong> até 6% do IR devido</li>
                            <li><strong>Pessoa Jurídica:</strong> até 1% do IR devido</li>
                        </ul>
                    </article>
                </div>

                <aside class="mt-6">
                    <h4>Transparência Total</h4>
                    <p>Publicamos relatórios trimestrais detalhando a aplicação de todos os recursos recebidos. Acesse nossos relatórios na <a href="index.html#transparencia">página inicial</a>.</p>
                </aside>
            </div>
        </section>

        
        <section id="cta">
            <div class="container">
                <h2>Faça Parte Desta Transformação!</h2>
                <p>Seja voluntário, faça uma doação ou simplesmente divulgue nosso trabalho. Cada ação conta!</p>
                <nav>
                    <a href="/cadastro" class="btn btn-lg">
                        <strong>Cadastre-se como Voluntário</strong>
                    </a>
                    <a href="#doacoes" class="btn btn-lg btn-secondary">
                        <strong>Fazer uma Doação</strong>
                    </a>
                </nav>
            </div>
        </section>
  `,

  /**
   * TEMPLATE DA PÁGINA DE CADASTRO
   */
  cadastro: () => `
<section id="intro-cadastro">
            <div class="container">
                <h2>Cadastro de Voluntário</h2>
                <p>Seja bem-vindo(a)! Estamos muito felizes com seu interesse em fazer parte da nossa equipe de voluntários. Preencha o formulário abaixo com seus dados e entraremos em contato para os próximos passos.</p>
                <img src="imagens/voluntarios-cadastro.jpg" alt="Grupo de voluntários sorridentes da ONG Esperança Solidária" width="800" height="400">
                
                <article class="mt-6">
                    <h3>Por que Ser Voluntário?</h3>
                    <div class="grid grid-cols-1 grid-cols-md-2 gap-4">
                        <ul>
                            <li>Transforme vidas através da sua dedicação e conhecimento</li>
                            <li>Desenvolva novas habilidades pessoais e profissionais</li>
                            <li>Faça parte de uma comunidade engajada e solidária</li>
                        </ul>
                        <ul>
                            <li>Receba certificado de horas voluntárias</li>
                            <li>Participe de treinamentos e capacitações gratuitas</li>
                            <li>Contribua para um mundo melhor</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>

        
        <section id="secao-formulario-cadastro">
            <div class="container">
                <h2>Formulário de Inscrição</h2>
                
                <form id="formulario-cadastro" action="#" method="POST">
                    
                    
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        
                        <div>
                            <label for="nome-completo">Nome Completo: <abbr title="Obrigatório">*</abbr></label>
                            <input 
                                type="text" 
                                id="nome-completo" 
                                name="nome" 
                                placeholder="Digite seu nome completo"
                                required
                                minlength="3"
                                maxlength="100">
                        </div>

                        <div>
                            <label for="email">E-mail: <abbr title="Obrigatório">*</abbr></label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="seu@email.com"
                                required>
                            <small>Usaremos este e-mail para entrar em contato com você</small>
                        </div>

                        <div class="form-row">
                            <div>
                                <label for="cpf">CPF: <abbr title="Obrigatório">*</abbr></label>
                                <input 
                                    type="text" 
                                    id="cpf" 
                                    name="cpf" 
                                    placeholder="000.000.000-00"
                                    required
                                    maxlength="14">
                                <small>Formato: 000.000.000-00</small>
                            </div>

                            <div>
                                <label for="telefone">Telefone: <abbr title="Obrigatório">*</abbr></label>
                                <input 
                                    type="tel" 
                                    id="telefone" 
                                    name="telefone" 
                                    placeholder="(00) 00000-0000"
                                    required
                                    maxlength="15">
                                <small>Formato: (00) 00000-0000</small>
                            </div>
                        </div>

                        <div>
                            <label for="data-nascimento">Data de Nascimento: <abbr title="Obrigatório">*</abbr></label>
                            <input 
                                type="date" 
                                id="data-nascimento" 
                                name="data_nascimento" 
                                required
                                min="1924-01-01"
                                max="2010-12-31">
                            <small>Voluntários devem ter entre 14 e 100 anos</small>
                        </div>

                        <div>
                            <label>Gênero:</label>
                            <div class="flex flex-wrap gap-4">
                                <div class="form-check">
                                    <input type="radio" id="genero-feminino" name="genero" value="feminino">
                                    <label for="genero-feminino">Feminino</label>
                                </div>
                                
                                <div class="form-check">
                                    <input type="radio" id="genero-masculino" name="genero" value="masculino">
                                    <label for="genero-masculino">Masculino</label>
                                </div>
                                
                                <div class="form-check">
                                    <input type="radio" id="genero-outro" name="genero" value="outro">
                                    <label for="genero-outro">Outro</label>
                                </div>
                                
                                <div class="form-check">
                                    <input type="radio" id="genero-nao-informar" name="genero" value="nao-informar" checked>
                                    <label for="genero-nao-informar">Prefiro não informar</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    
                    <fieldset>
                        <legend>Endereço</legend>
                        
                        <div class="form-row">
                            <div>
                                <label for="cep">CEP: <abbr title="Obrigatório">*</abbr></label>
                                <input 
                                    type="text" 
                                    id="cep" 
                                    name="cep" 
                                    placeholder="00000-000"
                                    required
                                    pattern="\d{5}-\d{3}"
                                    title="Digite um CEP válido no formato: 00000-000"
                                    maxlength="9">
                                <small>Formato: 00000-000</small>
                            </div>

                            <div>
                                <label for="numero">Número:</label>
                                <input 
                                    type="text" 
                                    id="numero" 
                                    name="numero" 
                                    placeholder="123"
                                    maxlength="10">
                            </div>
                        </div>

                        <div>
                            <label for="endereco">Endereço: <abbr title="Obrigatório">*</abbr></label>
                            <input 
                                type="text" 
                                id="endereco" 
                                name="endereco" 
                                placeholder="Rua, Avenida, etc."
                                required
                                minlength="5"
                                maxlength="200">
                        </div>

                        <div>
                            <label for="complemento">Complemento:</label>
                            <input 
                                type="text" 
                                id="complemento" 
                                name="complemento" 
                                placeholder="Apto, Bloco, etc."
                                maxlength="50">
                        </div>

                        <div class="form-row">
                            <div>
                                <label for="bairro">Bairro:</label>
                                <input 
                                    type="text" 
                                    id="bairro" 
                                    name="bairro" 
                                    placeholder="Nome do bairro"
                                    maxlength="100">
                            </div>

                            <div>
                                <label for="cidade">Cidade: <abbr title="Obrigatório">*</abbr></label>
                                <input 
                                    type="text" 
                                    id="cidade" 
                                    name="cidade" 
                                    placeholder="Nome da cidade"
                                    required
                                    minlength="2"
                                    maxlength="100">
                            </div>
                        </div>

                        <div>
                            <label for="estado">Estado: <abbr title="Obrigatório">*</abbr></label>
                            <select id="estado" name="estado" required>
                                <option value="">Selecione um estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                        </div>
                    </fieldset>

                    
                    <fieldset>
                        <legend>Informações Profissionais e Acadêmicas</legend>
                        
                        <div class="form-row">
                            <div>
                                <label for="profissao">Profissão/Ocupação:</label>
                                <input 
                                    type="text" 
                                    id="profissao" 
                                    name="profissao" 
                                    placeholder="Ex: Estudante, Professor, Engenheiro"
                                    maxlength="100">
                            </div>

                            <div>
                                <label for="escolaridade">Escolaridade:</label>
                                <select id="escolaridade" name="escolaridade">
                                    <option value="">Selecione</option>
                                    <option value="fundamental-incompleto">Ensino Fundamental Incompleto</option>
                                    <option value="fundamental-completo">Ensino Fundamental Completo</option>
                                    <option value="medio-incompleto">Ensino Médio Incompleto</option>
                                    <option value="medio-completo">Ensino Médio Completo</option>
                                    <option value="superior-incompleto">Ensino Superior Incompleto</option>
                                    <option value="superior-completo">Ensino Superior Completo</option>
                                    <option value="pos-graduacao">Pós-Graduação</option>
                                    <option value="mestrado">Mestrado</option>
                                    <option value="doutorado">Doutorado</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label for="habilidades">Habilidades e Talentos:</label>
                            <textarea 
                                id="habilidades" 
                                name="habilidades" 
                                rows="3"
                                placeholder="Ex: Informática, Música, Esportes, Idiomas, etc."
                                maxlength="500"></textarea>
                            <small>Máximo de 500 caracteres</small>
                        </div>
                    </fieldset>

                    
                    <fieldset>
                        <legend>Disponibilidade</legend>
                        
                        <div>
                            <label>Dias da Semana Disponíveis:</label>
                            <div class="grid grid-cols-2 grid-cols-md-3 gap-2">
                                <div class="form-check">
                                    <input type="checkbox" id="seg" name="dias_disponiveis" value="segunda">
                                    <label for="seg">Segunda-feira</label>
                                </div>
                                
                                <div class="form-check">
                                    <input type="checkbox" id="ter" name="dias_disponiveis" value="terca">
                                    <label for="ter">Terça-feira</label>
                                </div>
                                
                                <div class="form-check">
                                    <input type="checkbox" id="qua" name="dias_disponiveis" value="quarta">
                                    <label for="qua">Quarta-feira</label>
                                </div>
                                
                                <div class="form-check">
                                    <input type="checkbox" id="qui" name="dias_disponiveis" value="quinta">
                                    <label for="qui">Quinta-feira</label>
                                </div>
                                
                                <div class="form-check">
                                    <input type="checkbox" id="sex" name="dias_disponiveis" value="sexta">
                                    <label for="sex">Sexta-feira</label>
                                </div>
                                
                                <div class="form-check">
                                    <input type="checkbox" id="sab" name="dias_disponiveis" value="sabado">
                                    <label for="sab">Sábado</label>
                                </div>
                                
                                <div class="form-check">
                                    <input type="checkbox" id="dom" name="dias_disponiveis" value="domingo">
                                    <label for="dom">Domingo</label>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div>
                                <label for="periodo">Período Preferencial:</label>
                                <select id="periodo" name="periodo">
                                    <option value="">Selecione</option>
                                    <option value="manha">Manhã (8h às 12h)</option>
                                    <option value="tarde">Tarde (12h às 18h)</option>
                                    <option value="noite">Noite (18h às 22h)</option>
                                    <option value="flexivel">Flexível</option>
                                </select>
                            </div>

                            <div>
                                <label for="horas-semanais">Horas Semanais Disponíveis:</label>
                                <input 
                                    type="number" 
                                    id="horas-semanais" 
                                    name="horas_semanais" 
                                    min="2" 
                                    max="40" 
                                    step="1"
                                    placeholder="Ex: 4">
                                <small>Mínimo de 2 horas por semana</small>
                            </div>
                        </div>

                        <div>
                            <label for="data-inicio">Data de Início Desejada:</label>
                            <input 
                                type="date" 
                                id="data-inicio" 
                                name="data_inicio"
                                min="2024-10-22">
                        </div>
                    </fieldset>

                    
                    <fieldset>
                        <legend>Experiência com Voluntariado</legend>
                        
                        <div>
                            <label>Já foi voluntário(a) antes?</label>
                            <div class="flex gap-4">
                                <div class="form-check">
                                    <input type="radio" id="exp-sim" name="experiencia_voluntario" value="sim">
                                    <label for="exp-sim">Sim</label>
                                </div>
                                
                                <div class="form-check">
                                    <input type="radio" id="exp-nao" name="experiencia_voluntario" value="nao" checked>
                                    <label for="exp-nao">Não</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label for="detalhes-experiencia">Se sim, conte-nos sobre sua experiência:</label>
                            <textarea 
                                id="detalhes-experiencia" 
                                name="detalhes_experiencia" 
                                rows="4"
                                placeholder="Descreva suas experiências anteriores como voluntário"
                                maxlength="500"></textarea>
                        </div>
                    </fieldset>

                    
                    <fieldset>
                        <legend>Motivação</legend>
                        
                        <div>
                            <label for="motivacao">Por que você deseja ser voluntário da Esperança Solidária? <abbr title="Obrigatório">*</abbr></label>
                            <textarea 
                                id="motivacao" 
                                name="motivacao" 
                                rows="5"
                                placeholder="Conte-nos o que te motivou a se inscrever como voluntário..."
                                required
                                minlength="50"
                                maxlength="1000"></textarea>
                            <small>Mínimo de 50 caracteres, máximo de 1000 caracteres</small>
                        </div>

                        <div>
                            <label for="como-conheceu">Como você conheceu a Esperança Solidária?</label>
                            <select id="como-conheceu" name="como_conheceu">
                                <option value="">Selecione</option>
                                <option value="redes-sociais">Redes Sociais</option>
                                <option value="amigo">Indicação de Amigo</option>
                                <option value="busca-google">Busca no Google</option>
                                <option value="evento">Evento/Palestra</option>
                                <option value="escola">Escola/Universidade</option>
                                <option value="midia">Mídia (TV, Rádio, Jornal)</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                    </fieldset>

                    
                    <fieldset>
                        <legend>Termos e Condições</legend>
                        
                        <div class="form-check">
                            <input type="checkbox" id="termos" name="termos" required>
                            <label for="termos">
                                Li e aceito os <a href="#" target="_blank">termos de voluntariado</a> e a <a href="#" target="_blank">política de privacidade</a> <abbr title="Obrigatório">*</abbr>
                            </label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="comunicacao" name="comunicacao">
                            <label for="comunicacao">
                                Aceito receber comunicações sobre eventos, projetos e novidades da ONG
                            </label>
                        </div>

                        <div class="form-check">
                            <input type="checkbox" id="uso-imagem" name="uso_imagem">
                            <label for="uso-imagem">
                                Autorizo o uso de minha imagem em materiais de divulgação da ONG
                            </label>
                        </div>
                    </fieldset>

                    
                    <div class="form-buttons">
                        <button type="reset" class="btn btn-secondary">Limpar Formulário</button>
                        <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
                    </div>

                    <p class="text-center mt-4"><small><abbr title="Obrigatório">*</abbr> Campos obrigatórios</small></p>
                </form>
            </div>
        </section>

        
        <aside class="container">
            <h2>Dúvidas Frequentes</h2>
            
            <div class="grid grid-cols-1 grid-cols-md-2 gap-4">
                <article>
                    <h3>Quanto tempo dura o voluntariado?</h3>
                    <p>Não há tempo mínimo ou máximo. Você pode contribuir pelo tempo que desejar, desde que mantenha o compromisso assumido.</p>
                </article>

                <article>
                    <h3>Preciso ter experiência anterior?</h3>
                    <p>Não! Oferecemos treinamento completo para todas as áreas de atuação. O mais importante é sua vontade de ajudar.</p>
                </article>

                <article>
                    <h3>Há algum custo para ser voluntário?</h3>
                    <p>Não há nenhum custo. O voluntariado é 100% gratuito e você receberá todo o suporte necessário.</p>
                </article>

                <article>
                    <h3>Posso ser voluntário mesmo estudando/trabalhando?</h3>
                    <p>Sim! Temos horários flexíveis e você pode escolher os dias e períodos que melhor se adequam à sua rotina.</p>
                </article>

                <article>
                    <h3>Vou receber certificado?</h3>
                    <p>Sim! Emitimos certificado de horas voluntárias que pode ser utilizado para complementar atividades acadêmicas.</p>
                </article>

                <article>
                    <h3>Como funciona o processo de seleção?</h3>
                    <p>Após o cadastro, você participará de uma reunião de integração e receberá treinamento específico para a área escolhida.</p>
                </article>
            </div>
        </aside>

        
        <section id="contato-cadastro">
            <div class="container">
                <h2>Ainda Tem Dúvidas?</h2>
                <p>Nossa equipe está pronta para ajudar! Entre em contato:</p>
                <address>
                    <p><strong>E-mail:</strong> <a href="mailto:voluntarios@esperancasolidaria.org.br">voluntarios@esperancasolidaria.org.br</a></p>
                    <p><strong>Telefone:</strong> <a href="tel:+551133334444">(11) 3333-4444</a></p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/5511999998888" target="_blank">(11) 99999-8888</a></p>
                    <p><strong>Horário:</strong> Segunda a Sexta, das 9h às 17h</p>
                </address>
            </div>
        </section>
  `,

  /**
   * TEMPLATE DE PÁGINA NÃO ENCONTRADA - 404
   */
  notFound: () => `
    <section style="padding: 4rem 0; text-align: center;">
      <div class="container">
        <h1 style="font-size: 6rem; color: var(--primary-color);">404</h1>
        <h2>Página Não Encontrada</h2>
        <p>A página que você procura não existe.</p>
        <a href="/" class="btn btn-primary">Voltar para Home</a>
      </div>
    </section>
  `
};

// Exportar para uso global
window.Templates = Templates;