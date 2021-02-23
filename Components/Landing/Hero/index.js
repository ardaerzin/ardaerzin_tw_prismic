import { HeroHeader } from 'Components/Common/Headers'
import Image from 'next/image'

const LandingHero = props => {
  return (
    <section
      className='
        flex flex-col
        lg:flex-row
        lg:space-x-8
        lg:space-y-0
        space-y-8
        py-32
        max-w-screen-lg
        w-full
        justify-around
        mx-auto
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
          lg:w-64
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
    </section>
  )
}

export default LandingHero
