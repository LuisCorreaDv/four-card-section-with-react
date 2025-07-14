import "../styles/card.css"

function Card() {
  return (
    <article className="card-container">
      <div className="card-color"></div>
      <div className="card-content">
        <h3 className="card-title">Supervisor</h3>
        <p className="card-text">Monitors activity to identify project roadblocks</p>
        <img src="/images/icon-supervisor.svg" alt="Card icon"/>
      </div>
    </article>
  );
}

export default Card;
