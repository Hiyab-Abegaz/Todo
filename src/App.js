import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layouts/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation>
        <Router>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} exact />
            <Route path="/new-meetup" element={<NewMeetupPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Router>
      </MainNavigation>
    </div>
  );
}

export default App;
