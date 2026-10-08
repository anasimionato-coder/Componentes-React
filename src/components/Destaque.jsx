function Destaque({ titulo, texto }) {
  return (
    <div className="destaque">
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  );
}

export default Destaque;