import { HeroHeader } from 'Components/Common/Headers'
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
          bg-accent3
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
      <div
        className='
          flex
          flex-col
          space-y-6
          max-w-prose
        '
      >
        <HeroHeader>
          <span className='text-accent1'>founder, </span>
          <span className='text-accent4'>mentor, </span>
          <span className='text-accent3'>teacher, </span>
          <span className='text-accent2'>fullstack developer</span>
        </HeroHeader>
        <p
          className='
            font-body
            text-2xl
            lg:text-4xl
          '
        >
          I strive to help motivated founders and project teams using lean & minimal methodologies.
        </p>
      </div>
    </CommonSection>
  )
}

export default LandingHero
