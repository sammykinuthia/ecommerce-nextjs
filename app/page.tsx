import Hero from './components/Hero'
import SmartPhoneCategory from './components/SmartPhoneCategory'
import TopCategory from './components/TopCategory'
import ElectronicsBrand from './components/ElectronicsBrands'
import DailyEssentials from './components/DailyEssentials'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    <NavBar/>
    <main className="flex flex-col mx-10 xl:mx-36 justify-center align-middle content-center">
      <Hero />
      <SmartPhoneCategory />
      <TopCategory />
      <ElectronicsBrand />
      <DailyEssentials />
    </main>
    <Footer/>
    </>

  )
}
