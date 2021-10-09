import './App.css';
import { Contador } from './components/Contador';
import { Eventos } from './components/Eventos';
import PrimerComponente from './components/PrimerComponente';
// import { Variables } from './components/Variables';

function App() {
  return (
    <div className="App">
      <PrimerComponente />
      {/* <Variables /> */}
      <Eventos />
      <Contador />
    </div>
  );
}

export default App;
