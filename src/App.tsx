import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx"; // Import the Layout component
import Home from "./pages/Home.tsx";
import Team from "./pages/Team.tsx";
import Campaigns from "./pages/Campaigns.tsx";
import Contact from "./pages/Contact.tsx";
import DonationForm from "./components/Donation.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<DonationForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
