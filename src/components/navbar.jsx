import classes from './navbar.module.css'

function Navbar() {
  return (
    <div className={classes.navbar}>      
      <img  className={classes.logo_image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt=""/>
    </div>
  )
}

export default Navbar
