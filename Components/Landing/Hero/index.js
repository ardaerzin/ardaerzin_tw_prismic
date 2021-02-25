import { HeroHeader } from 'Components/Common/Headers'
import { HeroDescription, HeroTextSection } from 'Components/Common/HeroComponents'
import CommonSection from 'Components/Common/Section'
import Image from 'next/image'

const LandingHero = props => {
  return (
    <CommonSection
      className='
        md:space-x-8 lg:space-x-12
        md:flex-row
        space-y-8 md:space-y-0
        justify-center
        md:mt-16 lg:mt-24
      '
    >
      <div
        className='
          flex
          bg-brand
          rounded-full
          flex-shrink-0
          self-center
          md:self-start
          w-40
          lg:w-56
          ring-4 ring-inset ring-accent4
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
        <HeroHeader
          className='text-center md:text-left'
        >
          <span className='text-accent3'>founder, </span>
          <span className='text-accent4'>mentor, </span>
          <span className='text-accent2'>fullstack dev</span>
        </HeroHeader>
        <HeroDescription
          className='text-center md:text-left'
        >
          I strive to help motivated founders and project teams using lean & minimal methodologies.
        </HeroDescription>
      </HeroTextSection>
    </CommonSection>
  )
}

export default LandingHero
