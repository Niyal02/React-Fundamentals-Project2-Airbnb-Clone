import reactinternproj2 from '../assets/react-intern-proj2.png'
import Card from './card'
import { reviews } from './data'
import classes from './main.module.css'

function Main() {
  const cards = reviews.map((item, index) => {
    return(
      <Card key={index}
        img={item.img}
        rating = {item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country = {item.country}
        title={item.title}
        price = {item.price}
      />
    )
  })
  return (
    <div className={classes.main}>
     <div  className={classes.image}>
        <img src={reactinternproj2} alt="" />
     </div>
     <div className={classes.content}>
      <h1>Online Experiences</h1>
      <p>Join a unique interactive activites led by one-of-a-kind hosts all without leaving home.</p>
      <section className={classes.card_components}>
     {cards}
     </section>
     </div>
    </div>
  )
}

export default Main
