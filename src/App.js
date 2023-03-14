import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>

        </Route>
        <Route path='/home' element={<Home></Home>}>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
