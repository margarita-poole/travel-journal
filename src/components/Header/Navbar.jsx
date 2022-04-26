import navIcon from '../../assets/travel-icon.png'

const Navbar = () => {
  return (
    <nav className='relative bg-red-400 flex h-16 rounded-t-lg'>
      <div className='m-auto'>
        <img
          src={navIcon}
          alt='nav icon'
          height='24px'
          width='24px'
          className='fixed top-8'
        />
        <p className='text-lg text-white ml-8'>
          my travel journal.
        </p>
      </div>
    </nav>
  )
}
export default Navbar
