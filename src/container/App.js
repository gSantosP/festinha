import '../styles/App.css';
import '../styles/index.css'
import ClassComponent from '../components/ClassComponent.jsx';
import FunctionComponent from '../components/FunctionComponent.jsx';

function App() {
  return (
    <>
    <h3>Convidados:</h3>

    <ClassComponent nome="Nicolas" estaNaLista={true} />
    
    <ClassComponent nome="Pedro" estaNaLista={false} />
    
    <ClassComponent nome="Carolina" estaNaLista={true} />

    <h3>Tarefa: </h3>

    <FunctionComponent nome ="Nicolas" tarefa="batata-frita" />

    <FunctionComponent nome ="Nicolas" tarefa="pizza" />

    <FunctionComponent nome ="Nicolas" tarefa="bebidas" />

    </>
  );
}

export default App;
