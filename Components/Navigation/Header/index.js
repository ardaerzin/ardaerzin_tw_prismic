import NavLink from 'Components/Navigation/Common/NavLink'
import NavLinks from '../Links'

const Header = (props) => {
  return (
    <header
      className='
        relative container
        max-w-screen-lg
        flex justify-between items-center
        mx-auto
        pt-8
        px-6 md:px-4 lg:px-10
        z-50
      '
    >
      <div className='flex flex-row items-center space-x-1'>
        <div
          className='
            flex items-center justify-center
            text-white
            font-black font-lg font-display
            w-10 h-10
            rounded-full
            bg-brand'
        >
          a
        </div>
        <span className='font-display font-lg'>
          <span className='font-bold'>arda</span> erzin
        </span>
      </div>
      <div className='hidden md:flex space-x-8 justify-center'>
        { NavLinks.map((nl, i) => <NavLink key={`header-link-${i}`} {...nl} />) }
      </div>
    </header>
  )
}

export default Header
