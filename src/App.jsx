import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Hero from './sections/Hero'
import Cohort from './sections/Cohort'
import Features from './sections/Feature'
import KeyBenefit from './sections/KeyBenefit'
import Testimonials from './sections/Testimonials';

function App() {
  

  return (
    <div>
      <Header/>
      <Hero/>
      <h1>sourav</h1>

      <h1>Mohanta</h1>
      <Cohort/>
      <Testimonials/>
      <KeyBenefit/>
      <Features/>
    </div>
  )
}

export default App
