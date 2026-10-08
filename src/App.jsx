import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import CardCurso from "./components/CardCurso";
import Destaque from "./components/Destaque";
import Rodape from "./components/Rodape";
import "./App.css";

const cursos = [
  { id: 1, nome: "Desenvolvimento de Sistemas", duracao: "1200 horas", modalidade: "Presencial", nivel: "Técnico", vagas: 15 },
  { id: 2, nome: "Redes de Computadores", duracao: "1000 horas", modalidade: "Presencial", nivel: "Técnico", vagas: 0 },
  { id: 3, nome: "Manutenção de Computadores", duracao: "800 horas", modalidade: "EAD", nivel: "Qualificação", vagas: 8 },
  { id: 4, nome: "Programação Web", duracao: "600 horas", modalidade: "Semipresencial", nivel: "Aperfeiçoamento", vagas: 20 },
  { id: 5, nome: "Banco de Dados", duracao: "400 horas", modalidade: "EAD", nivel: "Aperfeiçoamento", vagas: 0 },
  { id: 6, nome: "Desenvolvimento Mobile", duracao: "500 horas", modalidade: "EAD", nivel: "Aperfeiçoamento", vagas: 12 },
];

function App() {
  const [selecionadoId, setSelecionadoId] = useState(null);

  function alternarSelecao(id) {
    setSelecionadoId((prevId) => (prevId === id ? null : id));
  }

  const cursoSelecionado = cursos.find((curso) => curso.id === selecionadoId);

  return (
    <div className="container-app">
      <Cabecalho />

      <main className="conteudo-principal">
        <section className="secao-destaques">
          <h2>Diferenciais do Nosso Catálogo</h2>
          <div className="grid-destaques">
            <Destaque titulo="Aprenda fazendo" texto="Desenvolva projetos práticos durante sua formação." />
            <Destaque titulo="Certificação reconhecida" texto="Conquiste certificados aceitos no mercado de trabalho." />
            <Destaque titulo="Instrutores qualificados" texto="Aulas ministradas por especialistas da área de tecnologia." />
          </div>
        </section>

        <section className="secao-cursos">
          <h2>Formações Disponíveis</h2>

          {cursoSelecionado && (
            <div className="faixa-selecao">
              <p>
                Turma selecionada: <strong>{cursoSelecionado.nome}</strong>
              </p>
              <button type="button" onClick={() => setSelecionadoId(null)}>
                Limpar
              </button>
            </div>
          )}

          <div className="grid-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.id}
                nome={curso.nome}
                duracao={curso.duracao}
                modalidade={curso.modalidade}
                nivel={curso.nivel}
                vagas={curso.vagas}
                selecionado={curso.id === selecionadoId}
                onSelecionar={() => alternarSelecao(curso.id)}
              />
            ))}
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

export default App;