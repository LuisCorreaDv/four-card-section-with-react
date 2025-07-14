import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <main>
        <section className="main-section">
          <div className="container">
            <h2 className="subtitle">Reliable, efficient delivery</h2>
            <h3 className="title">Powered by Technology</h3>
            <p className="description">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful.
            </p>
          </div>
        </section>
        <section className="cards-feature">
          <Card />
        </section> 
      </main>
    </>
  );
}

export default App;
