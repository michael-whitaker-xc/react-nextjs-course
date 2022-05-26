import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  //get the path after the domain
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/favorites" exact={true}>
          <FavoritesPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
