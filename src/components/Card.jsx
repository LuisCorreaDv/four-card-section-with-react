import "../styles/card.css"

function Card({color, title, text, src}) {
  return (
    <article className="card-container">
      <div className="card-color" style={{ backgroundColor: color }}></div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <img src={src} alt="Card icon"/>
      </div>
    </article>
  );
}

export default Card;
