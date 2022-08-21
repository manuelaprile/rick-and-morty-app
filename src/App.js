import 'bootstrap/dist/css/bootstrap.min.css';
import CharactersList from './components/list'
import CharacterInfo from './components/detail'
import NotFound from './components/notfound';
import { Routes, Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<CharactersList />}></Route>
        <Route path='character/:id' element={<CharacterInfo />}></Route>
        <Route path='*' element={<NotFound/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
