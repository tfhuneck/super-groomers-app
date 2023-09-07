import logo from './images/logo-name.png'
import Home from './components/Home'
import Selection from './components/Selection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 

function App() {
  return (
    <>
      <BrowserRouter>
        <img src={logo} className='logo' />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/select' element={ <Selection />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
