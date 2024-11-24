import './App.css'

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
function App() {

  return (
    <>
      <div className='w-full'>
        <Header/>
        {/* <Home /> */}
        <ContactUs/>
        <Footer/>
      </div>
    </>
  );
}

export default App
