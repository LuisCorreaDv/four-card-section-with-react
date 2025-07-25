import "./App.css";
import Card from "./components/Card";

function App() {
  const root = getComputedStyle(document.documentElement);

  const colors = {
    red: root.getPropertyValue("--red").trim(),
    cyan: root.getPropertyValue("--cyan").trim(),
    orange: root.getPropertyValue("--orange").trim(),
    blue: root.getPropertyValue("--blue").trim(),
  };

  const cards = [
    {
      color: colors.cyan,
      title: "Supervisor",
      text: "Monitors activity to identify project roadblocks",
      imgLink: "/images/icon-supervisor.svg",
      column: "left",
    },
    {
      color: colors.red,
      title: "Team builder",
      text: "Scans our talent network to create the optimal team for your project",
      imgLink: "/images/icon-team-builder.svg",
      column: "center",
    },
    {
      color: colors.orange,
      title: "Karma",
      text: "Regularly evaluates our talent to ensure quality",
      imgLink: "/images/icon-karma.svg",
      column: "center",
    },
    {
      color: colors.blue,
      title: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
      imgLink: "/images/icon-calculator.svg",
      column: "right",
    },
  ];

  return (
    <>
      <main>
        <section className="main-section">
          <div className="container">
            <h2 className="subtitle">Reliable, efficient delivery</h2>
            <h3 className="title">Powered by Technology</h3>
            <p className="description">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>
          </div>
        </section>
        <section className="cards-feature">
          {["left", "center", "right"].map((col) => (
            <div key={col} className={`card-col ${col}`}>
              {cards
                .filter((card) => card.column === col)
                .map((card, i) => (
                  <Card
                    key={i}
                    color={card.color}
                    title={card.title}
                    text={card.text}
                    src={card.imgLink}
                  />
                ))}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
