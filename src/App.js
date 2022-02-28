import './App.css';
import HelloWorld from './componets/HelloWorld';

function App() {
  const name = "Gabriel"
  return (
    <div className="App">
        <h1>Olá,{name} !</h1>
        <HelloWorld/>
    </div>
  );
}

export default App;
