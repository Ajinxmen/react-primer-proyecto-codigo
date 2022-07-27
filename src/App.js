// Cuando importemos algo de react procuremos siempre
// Ponerlo al principio
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  //vamos a crear una funcion que permita incrementar el contador
  const increment = () => {
    //setCounter: Es la funciona que cambia el valor de counter
    // y adentro indico que el nuevo valor es counter + 1
    setCounter(counter + 1);
  };

  const decrease = () => setCounter(counter - 1);
  return (
    <div className="App">
      <Header />
      <Counter
        contador={counter}
        incrementar={increment}
        decrementar={decrease}
      />
      <Footer />
    </div>
  );
}

export default App;
