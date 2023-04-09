// import Faq from '@/components/Faq'
// import HeroSection from '@/components/HeroSection'
// import HomeSwiper from '@/components/HomeSwiper'
// import HowSection from '@/components/HowSection'
// import ReadySection from '@/components/ReadySection'
// import SectionHeader from '@/components/SectionHeader'
// import WhoSection from '@/components/WhoSection'
// import WhySubSection from '@/components/WhySubSection'
import dynamic from 'next/dynamic'
// const inter = Inter({ subsets: ['latin'] })
const HeroSection=dynamic(()=>import('@/components/HeroSection'))
const SectionHeader=dynamic(()=>import('@/components/SectionHeader'))
const HomeSwiper=dynamic(()=>import('@/components/HomeSwiper'))
const HowSection=dynamic(()=>import('@/components/HowSection'))
const ReadySection=dynamic(()=>import('@/components/ReadySection'))
const WhoSection=dynamic(()=>import('@/components/WhoSection'))
const WhySubSection=dynamic(()=>import('@/components/WhySubSection'))
const Faq=dynamic(()=>import('@/components/Faq'))

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionHeader bgText={'what'} foreText={'we invest'} />
      <HomeSwiper />
      <SectionHeader bgText={'why'} foreText={'we invest'} />
      <WhySubSection/>
      <SectionHeader bgText={'who'} foreText={'we invest'} />
      <WhoSection/>
      <SectionHeader bgText={'how'} foreText={'we work'} />
      <HowSection/>
      <ReadySection/>
      <SectionHeader bgText={'faq'} foreText={'need help?'} />
      <Faq/>
    </>                                 
  )
}