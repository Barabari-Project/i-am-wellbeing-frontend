import './App.css'

import { lazy , Suspense } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Tic from './pages/Tic';
// import Training from './pages/Training';
// import Ticp from './pages/Ticp';
// import ShortTraining from './pages/ShortTraining';
// import Media from './pages/Media';
// import ContactUs from './pages/ContactUs';
// import Programe from './pages/Programe';

const About = lazy(() => import('./pages/About'));
const Tic = lazy(() => import('./pages/Tic'));
const Training = lazy(() => import('./pages/Training'));
const Ticp = lazy(() => import('./pages/Ticp'));
const ShortTraining = lazy(() => import('./pages/ShortTraining'));
const Media = lazy(() => import('./pages/Media'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Programe = lazy(() => import('./pages/Programe'));

function App() {

  return (
    <BrowserRouter>
      <div className='w-full'>
        <Header/>
          <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/tic' element={<Tic/>}/>
            <Route path='/training' element={<Training/>}/>
            <Route path='/ticp' element={<Ticp/>}/>
            <Route path='/short-training' element={<ShortTraining/>}/>
            <Route path='/media' element={<Media/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
            <Route path='/programs' element={<Programe/>}/>
        </Routes> 
          </Suspense>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App
