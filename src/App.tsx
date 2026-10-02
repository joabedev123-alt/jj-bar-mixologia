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
import BonusSection from './components/sections/BonusSection'
import GalleryAcademy from './components/sections/GalleryAcademy'
import HowAccessWorks from './components/sections/HowAccessWorks'
import Instructors from './components/sections/Instructors'
import ForWho from './components/sections/ForWho'
import Applications from './components/sections/Applications'
import ValueStack from './components/sections/ValueStack'
import SocialProof from './components/sections/SocialProof'
import Decision from './components/sections/Decision'
import Faq from './components/sections/Faq'
import FinalCta from './components/sections/FinalCta'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F3E8CF] pb-24 lg:pb-0 font-sans selection:bg-gold/30 selection:text-white">
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
        <BonusSection />
        <GalleryAcademy />
        <HowAccessWorks />
        <Instructors />
        <ForWho />
        <Applications />
        <ValueStack />
        <SocialProof />
        <Decision />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <StickyMobileCta />
    </div>
  )
}

export default App
