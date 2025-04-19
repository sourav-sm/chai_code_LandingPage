import { useState,useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Loading from './components/Loading'
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function App() {
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    const timer=setTimeout(()=>setIsLoading(false),1200);
    return()=>clearTimeout(timer);
  },[]);

  if(isLoading)return <Loading/>

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App