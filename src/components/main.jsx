import reactinternproj2 from '../assets/react-intern-proj2.png'
import Card from './card'
import classes from './main.module.css'

function Main() {
  return (
    <div className={classes.main}>
     <div  className={classes.image}>
        <img src={reactinternproj2} alt="" />
     </div>
     <div className={classes.content}>
      <h1>Online Experiences</h1>
      <p>Join a unique interactive activites led by one-of-a-kind hosts all without leaving home.</p>
     <Card />
     </div>
     

    </div>
  )
}

export default Main
