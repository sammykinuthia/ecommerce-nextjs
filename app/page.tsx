import Image from 'next/image'
import Hero from './components/Hero'
import SmartPhoneCategory from './components/SmartPhoneCategory'
import TopCategory from './components/TopCategory'
import ElectronicsBrand from './components/ElectronicsBrands'
import DailyEssentials from './components/DailyEssentials'

export default function Home() {
  return (
    <main className="mx-36">
      <Hero />
      <SmartPhoneCategory />
      <TopCategory />
      <ElectronicsBrand />
      <DailyEssentials/>
    </main>
  )
}
