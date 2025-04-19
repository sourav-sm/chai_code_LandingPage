import Header from '../components/Header'
import Hero from '../sections/Hero'
import Cohort from '../sections/Cohort'
import Features from '../sections/Feature'
import KeyBenefit from '../sections/KeyBenefit'
import Testimonials from '../sections/Testimonials';
import TweetSection from '../sections/TweetSection'
import Udemy from '../sections/Udemy'
import TopicsCloud from  '../sections/Tag';
import Community from '../sections/Community';
import FreeApi from "../sections/FreeApi"
import Footer from "../sections/Footer";
import AppDownload from "../sections/Appdownload";


function Home() {

  return (
    <div>
      <Header/>
      <Hero/>
      <TweetSection/>
      <Cohort/>
      <Testimonials/>
      <Udemy/>
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

export default Home