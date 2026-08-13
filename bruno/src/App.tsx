import './App.css';
import Headers from './components/Header/Headers';
import MainBody from './components/MainBody/MainBody';
import Footer from './components/Footer/Footer';
// import {browserRouter as Router } from 'react-router-dom';  
// import {Router as Routes } from './routes';

function App(){
  return(
    <div className='container'>
    <Headers />
    <MainBody />
    <Footer/>
</div>
  )
}
export default App; 