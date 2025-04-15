import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Hero from './sections/Hero'
import Cohort from './sections/Cohort'
import Features from './sections/Feature'
import KeyBenefit from './sections/KeyBenefit'
import Testimonials from './sections/Testimonials';
import TweetSection from './sections/TweetSection'
import TopicsCloud from  './sections/Tag';
import Community from './sections/Community';
import FreeApi from "./sections/FreeApi"
import Footer from "./sections/Footer";
import AppDownload from "./sections/Appdownload";
import Loading from './components/Loading'

function App() {
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    const timer=setTimeout(()=>setIsLoading(false),1800);
    return()=>clearTimeout(timer);
  },[]);

  if(isLoading)return <Loading/>

  return (
    <div>
      <Header/>
      <Hero/>
      <TweetSection/>
      <Cohort/>
      <Testimonials/>
      <KeyBenefit/>
      <Features/>
      <TopicsCloud/>
      <Community/>
      <FreeApi/>
      <AppDownload/>
      <Footer/>
    </div>
  )
}

export default App
