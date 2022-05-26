import Card from "../ui/Card";

import classes from "../../styles/MeetupItem.module.css";

function MeetupItem(props) {
  const meetup = props.meetup;
  const image = meetup.image;
  const title = meetup.title;
  const address = meetup.address;
  const description = meetup.description;
  const id = meetup.id;

  return (
    <li className={classes.item}>
      <Card>
        {/* content gets passed as props.chilrden automatically */}
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button>To favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
