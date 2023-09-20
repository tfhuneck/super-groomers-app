import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import logo from './images/logo-name.png'
import Home from './components/Home'
import Selection from './components/Selection';
import Contact from './components/Contact';
import Time from './components/Time';
import VerifyPet from './components/VerifyPet';
import Confirm from './components/Confirm';
import Success from './components/Succes';

 
export const DataContext = createContext({});

function App() {

  const [ data, setData ] = useState({

  })

  return (
    <>
      <DataContext.Provider value={[ data, setData ]}>
        <BrowserRouter>
          <img src={logo} className='logo' />
          <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='/select' element={ <Selection />}/>
            <Route path='/verifypet' element={<VerifyPet />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/time' element={<Time />} />
            <Route path='/confirm' element={<Confirm />} />
            <Route path='/success' element={<Success />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
