import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./page/Home/Home.jsx";
import Timeline from "./page/Timeline/Timeline.jsx";
import Quotes from "./page/Quotes/Quotes.jsx";
import Quiz from "./page/Quiz/Quiz.jsx";
import Rewards from "./page/Rewards/Rewards.jsx";
import Contact from "./page/Contact/Contact.jsx";
import TimelineDetail from "./page/TimelineDetail/TimelineDetail.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/timeline/:id" element={<TimelineDetail />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
