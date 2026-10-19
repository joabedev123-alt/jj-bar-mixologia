import NavbarOriginal from './components/original/NavbarOriginal'
import HeroOriginal from './components/original/HeroOriginal'
import DrinksOriginal from './components/original/DrinksOriginal'
import CurriculumOriginal from './components/original/CurriculumOriginal'
import AboutOriginal from './components/original/AboutOriginal'
import GalleryAcademy from './components/sections/GalleryAcademy'
import TestimonialsOriginal from './components/original/TestimonialsOriginal'
import InstructorOriginal from './components/original/InstructorOriginal'
import HowItWorksOriginal from './components/original/HowItWorksOriginal'
import ValueStack from './components/sections/ValueStack'
import FaqOriginal from './components/original/FaqOriginal'
import ContactOriginal from './components/original/ContactOriginal'
import FinalCtaOriginal from './components/original/FinalCtaOriginal'
import Footer from './components/layout/Footer'
import StickyMobileCta from './components/layout/StickyMobileCta'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased selection:bg-primary/30 selection:text-foreground pb-20 sm:pb-24 lg:pb-0">
      <NavbarOriginal />
      <main className="w-full">
        <HeroOriginal />
        <DrinksOriginal />
        <CurriculumOriginal />
        <AboutOriginal />
        <GalleryAcademy />
        <TestimonialsOriginal />
        <InstructorOriginal />
        <HowItWorksOriginal />
        <ValueStack />
        <FaqOriginal />
        <ContactOriginal />
        <FinalCtaOriginal />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  )
}
