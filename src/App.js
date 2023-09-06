import Home from './components/Home'
import logo from './images/logo-name.png'
 

function App() {
  return (
    <>
      <Home />
      <img src={logo} className='logo' />
    </>
  );
}

export default App;
