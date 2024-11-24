import './App.css'

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <div className='w-full'>
        <Header/>
        <Home />
        <Footer/>
      </div>
    </>
  );
}

export default App
