import logo from '../images/title.png'

function Header() {
  return (
    <div className="header">  
        <img className="header__img" src={logo} alt="Logo Rick and Morty" />
    </div>
  )
}

export default Header