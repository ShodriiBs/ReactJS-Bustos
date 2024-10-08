import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludosTienda="¡Bienvenido a Game_Store!" />
    </div>
  );
}

export default App;
