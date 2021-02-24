import { HeroHeader } from 'Components/Common/Headers'
import { HeroDescription, HeroTextSection } from 'Components/Common/HeroComponents'
import CommonSection from 'Components/Common/Section'
import Image from 'next/image'

const LandingHero = props => {
  return (
    <CommonSection
      className='
        md:space-x-8
        md:flex-row
        space-y-8 md:space-y-0
        justify-around
        md:mt-16 lg:mt-24
      '
    >
      <div
        className='
          flex
          bg-brand
          rounded-full
          flex-shrink-0
          self-start
          w-40
          lg:w-56
        '
      >
        <Image
          src='/images/arda2.png'
          quality={75}
          width={250}
          height={250}
          alt='arda'
          loading='eager'
        />
      </div>
      <HeroTextSection>
        <HeroHeader>
          <span className='text-accent3'>founder, </span>
          <span className='text-accent4'>mentor, </span>
          <span className='text-accent2'>fullstack dev</span>
        </HeroHeader>
        <HeroDescription>
          I strive to help motivated founders and project teams using lean & minimal methodologies.
        </HeroDescription>
      </HeroTextSection>
    </CommonSection>
  )
}

export default LandingHero
