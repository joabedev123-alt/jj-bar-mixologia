import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import StickyMobileCta from './components/layout/StickyMobileCta'

import Hero from './components/sections/Hero'
import Pillars from './components/sections/Pillars'
import PainSection from './components/sections/PainSection'
import Transformation from './components/sections/Transformation'
import WhatIsMixology from './components/sections/WhatIsMixology'
import CocktailConstruction from './components/sections/CocktailConstruction'
import Curriculum from './components/sections/Curriculum'
import Instructors from './components/sections/Instructors'
import About from './components/sections/About'
import ForWho from './components/sections/ForWho'
import Applications from './components/sections/Applications'
import ValueStack from './components/sections/ValueStack'
import Decision from './components/sections/Decision'
import HowItWorks from './components/sections/HowItWorks'
import SocialProof from './components/sections/SocialProof'
import Faq from './components/sections/Faq'
import FinalCta from './components/sections/FinalCta'

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#111111] pb-20 lg:pb-0">
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <Pillars />
        <PainSection />
        <Transformation />
        <WhatIsMixology />
        <CocktailConstruction />
        <Curriculum />
        <Instructors />
        <About />
        <ForWho />
        <Applications />
        <ValueStack />
        <Decision />
        <HowItWorks />
        <SocialProof />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <StickyMobileCta />
    </div>
  )
}

export default App
