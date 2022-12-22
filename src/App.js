import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultPage from './components/DefaultPage';
import Home from './pages/Home';
import MeusPets from './pages/MeusPets';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DefaultPage/>}>
        <Route index element={<Home/>}/>
        <Route path='meuspets' element={<MeusPets/>}/>
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
