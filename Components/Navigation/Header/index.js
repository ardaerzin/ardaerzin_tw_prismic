import NavLink from 'Components/Navigation/Common/NavLink'
import NavLinks from '../Links'

const Header = (props) => {
  return (
    <header className='flex relative container h-16 pt-8 justify-center items-center mx-auto z-50'>
      <div className='hidden md:flex space-x-8 justify-center'>
        { NavLinks.map((nl, i) => <NavLink key={`header-link-${i}`} {...nl} />) }
      </div>
    </header>
  )
}

export default Header
