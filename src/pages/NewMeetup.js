import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    const dbUrl =
      "https://react-meetup-tutorial-940ff-default-rtdb.firebaseio.com";
    fetch(`${dbUrl}/meetups.json`, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      }
    }); //vanilla js
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
