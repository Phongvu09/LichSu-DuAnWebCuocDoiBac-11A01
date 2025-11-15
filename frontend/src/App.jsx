import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./page/Home/Home.jsx";
import Timeline from "./page/Timeline/Timeline.jsx";
import Quotes from "./page/Quotes/Quotes.jsx";
import Quiz from "./page/Quiz/Quiz.jsx";
import Rewards from "./page/Rewards/Rewards.jsx";
import Contact from "./page/Contact/Contact.jsx";
import Biography from "./page/Biography/Biography.jsx";
import TimelineDetail from "./page/TimelineDetail/TimelineDetail.jsx";
import Legacy_TTHCM from "./page/Legacy/Legacy-TTHCM.jsx";
import LegacyWorld from "./page/Legacy/Legacy-World.jsx";
import Legacy_DSVVHDD from "./page/Legacy/Legacy-DSVVHDD.jsx";
import Factors from "./page/Factors/Factors.jsx";
import Contributions from "./page/Contrubutions/Contributions.jsx";
import Story from "./page/story/story.jsx";
import Learn from "./page/Learn/Learn.jsx";
import HCM1 from "./page/hcm/hcm1.jsx";
import HCM2 from "./page/hcm/hcm2.jsx";
import ScrollToTop from "./config/ScrollToTop.jsx";
import StoryPage1 from "./page/story/children/story1.jsx";
import StoryPage2 from "./page/story/children/story2.jsx";
import StoryPage3 from "./page/story/children/story3.jsx";
import StoryPage4 from "./page/story/children/story4.jsx";
import StoryPage5 from "./page/story/children/story5.jsx";
import StoryPage6 from "./page/story/children/story6.jsx";





import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/biography" element={<Biography />} />
          <Route path="/legacy-tthcm" element={<Legacy_TTHCM />} />
          <Route path="/legacy-world" element={<LegacyWorld />} />
          <Route path="/legacy-dsvvhdd" element={<Legacy_DSVVHDD />} />
          <Route path="/factors" element={<Factors />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/story" element={<Story />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/hcm1" element={<HCM1 />} />
          <Route path="/hcm2" element={<HCM2 />} />
          <Route path="/story1" element={<StoryPage1 />} />
          <Route path="/story2" element={<StoryPage2 />} />
          <Route path="/story3" element={<StoryPage3 />} />
          <Route path="/story4" element={<StoryPage4 />} />
          <Route path="/story5" element={<StoryPage5 />} />
          <Route path="/story6" element={<StoryPage6 />} />









        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
