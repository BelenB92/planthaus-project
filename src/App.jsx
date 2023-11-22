import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a Plant Jaus"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad', quantity)}/>
    </div>
    
  )
}

export default App
