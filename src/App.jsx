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
    </div>
  )
}

export default App
