import { useState } from 'react'
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

function App() {
  

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
