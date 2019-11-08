import React from 'react';
import './CursosContainer/CursosContainer.scss';
import CaixaCursos from './CursosContainer/CursosContainer.js';

//imagens dos cursos

import Ballet from '../imagens/Ballet.jpeg'
import Circo from '../imagens/Circo.jpg'
import Artesanato from '../imagens/Artesanato.jpg'
import Meditação from '../imagens/meditacao.jpg'
import Jazz from '../imagens/Jazz.jpg'
import Dançaderua from '../imagens/Dançaderua.jpg'
import Pintura from '../imagens/pintura.jpg'
import Canto from '../imagens/Canto.jpg'
import Sapateado from '../imagens/Sapateado.jpg'
import Teatro from '../imagens/Teatro.jpg'
import Dançadesalão from '../imagens/Dançadesalão.jpeg'
import Dançadoventre from '../imagens/Dançadoventre.jpg'


const Cursos = () => {
    return (
        <div className="PaginaCursos">
            <div id="Titulo">
                <h2>Cursos disponiveis</h2>
            </div>

            <div className="tcursos">

                <CaixaCursos img={Ballet} titulo="Ballet" texto="Dança executada por um conjunto de bailarinos, em que, juntamente com o cenário, vestimentas e recursos de pantomima, se expressa uma história, um tema ou uma atmosfera; bailado." botao="Saiba mais" />
                <CaixaCursos img={Pintura} titulo="Pintura em tela" texto="Pintura é uma técnica que utiliza pigmentos em forma líquida para colorir uma superfície, atribuindo tons e texturas, esta superfície pode ser tela, papel etc..." botao="Saiba mais"  />
                <CaixaCursos img={Teatro} titulo="Teatro" texto="Lugar ou edifício destinado à apresentação de obras dramáticas, óperas ou outros espetáculos públicos." botao="Em breve" />
                <CaixaCursos img={Jazz} titulo="Jazz" texto="Música moderna de origem negro-americana, caracterizada pelo improviso e pelas sonoridades e ritmos sincopados, basicamente extraídos do ragtime e do blues." botao="Em breve" />
                <CaixaCursos img={Circo} titulo="Circo" texto="A Roma antiga, grande anfiteatro com camarotes e arquibancadas onde se realizavam espetáculos público" botao="Em breve" />
                <CaixaCursos img={Meditação} titulo="Meditação" texto="Meditar é esvaziar a mente. Em busca do autoconhecimento, o não-fazer nos prepara para o que deve ser feito." botao="Em breve" />
                <CaixaCursos img={Dançadoventre} titulo="Dança do ventre" texto="Originado no Antigo Egito vinda de rituais ligados à fertilidade da terra e da mulher. " botao="Em breve" />
                <CaixaCursos img={Dançadesalão} titulo="Dança de salão" texto="Diversos tipos de danças em casal, que são executadas em salões com práticas técnicas e artísticas. " botao="Em breve" />
                <CaixaCursos img={Dançaderua} titulo="Dança de rua" texto="Dança de rua (também conhecida como street dance) é um estilo de dança que se desenvolveu (possivelmente nos Estados Unidos) a partir do dance studio." botao="Em breve" />
                <CaixaCursos img={Artesanato} titulo="Curso de artesanato" texto="Arte e técnica do trabalho manual não industrializado, realizado por artesão, e que escapa à produção em série; tem finalidade a um tempo utilitária e artística." botao="Em breve" />
                <CaixaCursos img={Canto} titulo="Canto e coral" texto="É o nome dado ao conjunto de atividades ligadas a um coro ou uma capela, o canto coral vai alem das questões musicais ..." botao="Em breve" />
                <CaixaCursos img={Sapateado} titulo="Sapateado" texto="Dança popular espanhola, em geral sem acompanhamento musical, caracterizada pelo martelar rítmico dos tacões dos sapatos no chão." botao="Em breve" />
            </div>

        </div>

    )
}

export default Cursos;