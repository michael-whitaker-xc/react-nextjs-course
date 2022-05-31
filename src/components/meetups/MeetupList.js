import MeetupItem from "./MeetupItem";
import classes from "../../styles/MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          // key={meetup.id}
          // id={meetup.id}
          // image={meetup.image}
          // title={meetup.title}
          // address={meetup.address}
          // description={meetup.description}
          meetup={meetup} //alternative to sending each property separately
        />
      ))}
    </ul>
  );
}

export default MeetupList;
