import React, { useState, useEffect } from 'react';

import './App.css'






function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (


    <div className={`App'  ${theme}`}>
      <div> <button onClick={toggleTheme}>Modo escuro</button></div>
      <div className='borda'>


        <div className="Titulo">
          <h1 className='titulo'>Jogos eletrônicos e seus benefícios</h1>
          <div className='Autor'><h3 className='nome'>Autor: Gustavo Rodrigues Neves <h4 className='curso'>Curso: Ciências da Computação</h4> </h3></div>



          <div className='INTRO'>
            <h2>RESUMO</h2>

            <p>"Podemos dizer que a criatividade que os jogos oferecem na vida de uma pessoa pode contribuir para o dia a dia e até mesmo para o mercado de trabalho,
              uma vez que os jogos desafiam o cérebro a encontrar soluções,o desenvolvimento do raciocínio lógico é uma das principais características dos jogos eletrônicos que se apresenta em jogos de estratégia,
              já que são jogos onde a pessoa consegue controlar os aspectos, controlar a batalha, ter o comando de liderança e até mesmo gestão econômica,
              ou seja, faz com que o jogador tenha uma dinâmica e visão das melhores estratégias fazendo com que seja alcançado o seu objetivo final.
              Este artigo apresenta o potencial dos jogos eletrônicos e seus benefícios e a importância para as pessoas"</p>

            <h2>ABSTRACT</h2>

            <p> “We can say that the creativity that games offer in a person's life can contribute to everyday life and even to the job market, since games challenge the brain to find solutions,
              the development of logical reasoning is a one of the main characteristics of electronic games that is presented in strategy games, since they are games where the person can control aspects, control the battle, have leadership command and even economic management, that is, it makes the player have a dynamic and vision of the best strategies to achieve the final objective.
              This article presents the potential of electronic games and their benefits and importance for people”</p>

          </div>

          <div className='Introducao'>
            <h2>INTRODUÇÃO</h2>

            <p> "Segundo Veen e Vrakking, no seu livro Homo Zappiens: Educando na Era Digital, comentou: "a nova geração, que aprendeu a lidar com novas tecnologias, está ingressando em nosso sistema educacional. Essa geração, que chamamos de geração Homo Zappiens, cresceu usando múltiplos recursos tecnológicos desde a infância”. Diante desta informação, a era digital regressou para auxiliar o convívio social, raciocínio lógico e até mesmo controlar as emoções.
              Os jogos eletrônicos são uma forma de entretenimento para que os usuários possam se divertir, jogando alguns jogos  e aprendendo a desenvolver algumas habilidades."</p>

            <h3 >1. Criatividade</h3>
            <p>
              Existem jogos capazes de contribuir com a criatividade e a imaginação de uma forma espontânea no momento do jogo, um exemplo de jogo que estimula a criatividade e o minecraft você pode contar com diversas ferramentas diferentes. essas ferramentas você pode coletar os materiais para criar armas para se defender dos monstros,
              o jogo tem a opção de o usuário construir o que bem entender, como criar sua própria casa para se proteger dos monstros e guardar seus recursos,
              fazendo assim o jogador  ter conhecimento para sobreviver no mundo do minecraft.Trazendo para vida real o minecraft pode ajudar a pessoas desenvolver conhecimento e ter facilidade com a matemática,
              e também a criatividade para montar algo ter facilidade de organização como separar as coisas importantes por cor, como vermelho algo muito importante amarelo médio ou azul com não importante,
              a pessoa pode também pintar com esmalte um chaveiro para poder diferenciar de cada setor por cor específica fazendo ficar mais fácil na hora pegar a chaves.</p>

            <span>Desta forma, podemos concluir que a criatividade que o jogo exerce na vida de uma pessoa pode contribuir para o dia a dia e até mesmo para o mercado de trabalho,
              uma vez que os jogos eletrônicos desafiam o cérebro a encontrar soluções inesperadas para situações que apresenta não ter solução.</span>

            <p>Portanto, as tarefas do dia a dia, o mercado de trabalho e as empresas valorizam pessoas criativas que não tenham medo de serem ousadas com ideias inovadoras que geralmente são mais abertas o que agrada um público maior já que abrange uma diversidade.</p>

            <h3 >2. Desenvolvimento do raciocínio Lógico</h3>
            <span>O desenvolvimento do raciocínio lógico é uma das principais características dos jogos eletrônicos que se apresenta em jogos de estratégia, já que são jogos onde a pessoa consegue controlar os aspectos, controlar a batalha, ter o comando de liderança e até mesmo gestão econômica,
              ou seja, faz com que o jogador tenha uma dinâmica e visão das melhores estratégias fazendo com que seja alcançado o seu objetivo final.  </span>
            <p>Um exemplo de jogo de estratégia e agilidade é o Fortnite, que põe seus usuários em confronto em uma ilha de 100 jogadores online, os jogadores têm a opção de jogar em sozinho, dupla ou squad(que são 4 jogadores), tem como principal objetivo sobreviver, a ilha vai fechando de acordo com o tempo, o jogador tem que pegar armas e materiais para construção, o último jogador ganha a partida.</p>
            <p>Essas características do jogo de Fortnite destacam o desenvolvimento do raciocínio lógico, devido às etapas que estimulam o jogador a compreender o campo de batalha e seus adversários, fazendo com que o jogador pense rápido para a sua próxima estratégia.  </p>

            <h3 >3. Aumentam o foco e a concentração</h3>

            <p>Alguns tipos de jogos podem ajudar a melhorar  a concentração,  uns dos jogos para concentração é o xadrez ele exige muito conhecimento e muito raciocínio lógico, fazendo assim que  cérebro trabalhar para pensar qual é a jogada do inimigo para ficar um passo à frente  para ganhar, o  xadrez funciona com algumas peças e cada peças tem sua função no tabuleiro sendo assim, o jogador tem que pensar em todas a peças para fazer a movimentação no tabuleiro cada peça tem sua posição, as peças são Rei, Rainha, Bispo, Torre, Peão, e cavaleiro.</p>

            <span>Trazendo para vida real o xadrez pode ajudar os jogadores a raciocinar melhor e pois o jogo você tem que ficar calmo sem demonstrar nervosismo para seu oponente não perceba, então outro benefício é ficar calmo ter paciência esperar a outra pessoa jogar então isso pode te ajudar a ficar calmo e saber perder e ganhar, outro benefício  é a criatividade a podendo você surpreender seu oponente na jogada fazenda assim você ter a criatividade para resolver seus problemas, como um ambiente de trabalho você pode ter facilmente a resposta do seu problema fazendo você raciocinar mais rápido para solucionar seu problemas.</span>

            <h3 >4. Melhoram a memorização e a coordenação motora</h3>
            <span>Em grande parte dos jogos eletrônicos, o jogador precisa memorizar séries e mais séries de comandos, que com o tempo, acabam se tornando automáticos. As recompensas dessas séries comandos memorizados, quando executados de maneira estratégica, dão recompensas muito boas, fazendo assim com o jogador ponha à prova suas capacidades de memorização e estratégia. Isso sem falar que, durante toda essa atividade cerebral intensa, o jogador também acaba exercitando suas capacidades de decisão durante a sua sessão de jogo: ele precisa decidir cada ação do seu personagem ou até mesmo que movimento ele fará em seguida, sempre pensando nas consequências daquela decisão para o sucesso daquele momento do jogo.</span>
            <p/>
            <h2>CONSIDERAÇÕES FINAIS</h2>
            <h3>Referências</h3>
            <p>Veen.w | Vrakking.Ben. Homo Zappiens: Educando na Era Digital. Artmed Editora. 2009.</p>
            <p>Érica Catarina de Faria, Ricardo Fernandes da Silva, Francisco C. R. Fernandes - ESTÍMULO AO RACIOCÍNIO E À LÓGICA POR MEIO DE JOGOS VIRTUAIS.2019 </p>
            <a target="_blank" href="http://www.inicepg.univap.br/cd/INIC_2009/anais/arquivos/RE_0478_0242_01.pdf">http://www.inicepg.univap.br/cd/INIC_2009/anais/arquivos/RE_0478_0242_01.pdf</a>
            <p>Acessado 15/04/2022</p>
            <p>Especialistas afirmam que jogos computadorizados melhoram a capacidade mental.cidadeverde. 29/08/2018.</p>
            <a target="_blank" href="https://cidadeverde.com/noticias/281137/especialistas-afirmam-que-jogos-computadorizados-melhoram-a-capacidade-mental#:~:text=%E2%80%9CJogos%20computadorizados%20funcionam%20como%20efeito,pensamento%20l%C3%B3gico%E2%80%9D%2C%20aponta%20Portuguez">https://cidadeverde.com/noticias/281137/especialistas-afirmam-que-jogos</a>
            <p>Acessado 17/04/2022</p>
            <p>Gérson Peres Batista. Os 10 benefícios do Xadrez para a saúde. 25/08/2018</p>
            <a target="_blank" href="http://jornaldosudoeste.com.br/noticia.php?codigo=201558#:~:text=Promove%20o%20desenvolvimento%20cerebral%3A%20Jogos,melhora%20e%20fica%20mais%20r%C3%A1pida">http://jornaldosudoeste.com.br/noticia.php?codigo=201558#:~:text=Promove%20o%20desenvolvimento%20cerebral.</a>
            <p>Acessado 23/04/2022</p>
            <p>Filguth,Rubens A Importância do Xadrez Artmed Editora, 2009</p>
            <a target="_blank" href="https://books.google.com.br/books?hl=pt-BR&lr=&id=YHig1j0g2cYC&oi=fnd&pg=PR5&dq=xadrez+&ots=JspEG-IWkB&sig=ifal-ImLRy5iB5Jo_EkVqPKnKHE#v=onepage&q=xadrez&f=false">https://books.google.com.br/books?hl=pt-BR&lr=&id=YHig1j0g2cYC&oi=fnd&pg=PR5&dq=xadrez+&ots=JspEG-IWkB&sig=ifal-ImLRy5iB5Jo_EkVqPKnKHE#v=onepage&q=xadrez&f=false</a>
            <p>Acessado 23/06/2022</p>

          </div>
        </div>
      </div>
    </div>

  )
}
export default App