import classes from './card.module.css'
import reactinternproj2katie from '../assets/reactintern-proj2-katie.png'
import star from '../assets/star.png'

function Card() {
  return (
    <div className={classes.card}>
      <img src={reactinternproj2katie} className={classes.katie} alt="" />
      <div className={classes.card_stats}>
        <img src={star} className={classes.card_star} alt="" />
        <span >4.8</span>
        <span className={classes.gray}>(6) . </span>
        <span className={classes.gray}> USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p className={classes.bold}>From $125 / person</p>
    </div>
  )
}

export default Card
