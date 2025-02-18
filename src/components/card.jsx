import classes from "./card.module.css";
import star from "../assets/star.png";

function Card(props) {
  return (
    <div className={classes.card_container}>
      <div>
        <div style={{ width: "100%" }}>
          <img src={props.img} className={classes.images} alt="" />
        </div>
        <p className={classes.availability}>Sold Out</p> {/* z index use where position absolute and relative is used*/}
        <div className={classes.card_stats}>
          <img src={star} className={classes.card_star} alt="" />
          <span>{props.rating}</span>
          <span className={classes.gray}>({props.reviewCount}) . </span>
          <span className={classes.gray}> {props.country}</span>
        </div>
        <p>{props.title}</p>
        <p className={classes.bold}>From ${props.price}</p>
      </div>
    </div>
  );
}

export default Card;
