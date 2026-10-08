function CardCurso({ nome, duracao, modalidade, nivel, vagas, selecionado, onSelecionar }) {
  const temVagas = vagas > 0;

  const handleClick = (e) => {
    e.stopPropagation(); // Impede duplo disparo do evento
    if (temVagas && typeof onSelecionar === "function") {
      onSelecionar();
    }
  };

  return (
    <article
      className={`card-curso ${temVagas ? "clicavel" : ""} ${selecionado ? "selecionado" : ""}`}
      onClick={handleClick}
    >
      <span className="card-nivel">{nivel}</span>
      <h3>{nome}</h3>

      <ul className="card-info">
        <li>
          <span>Duração</span>
          <strong>{duracao}</strong>
        </li>
        <li>
          <span>Modalidade</span>
          <strong>{modalidade}</strong>
        </li>
      </ul>

      <p className={temVagas ? "vagas disponivel" : "vagas completa"}>
        {temVagas ? `Vagas disponíveis: ${vagas}` : "Turma completa"}
      </p>

      <button
        type="button"
        className="botao-selecionar"
        disabled={!temVagas}
        onClick={handleClick}
      >
        {!temVagas
          ? "Indisponível"
          : selecionado
          ? "Selecionado ✓"
          : "Selecionar turma"}
      </button>
    </article>
  );
}

export default CardCurso;