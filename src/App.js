import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './components/detail';
import CharactersList from './components/list'
import './App.css';

function App() {
  return (
    <div>
      <h1 className='text-center py-5 text-light'>Rick and Morty</h1>
      <CharactersList />
    </div>
  );
}

export default App;
