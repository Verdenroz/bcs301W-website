import React, { useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DropdownMenu } from "./components/DropdownMenu";
import { TopBar, BottomBar } from "./components/NavBar";
import ManageAppointments from "./components/ManageAppointments";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import PastActivity from "./components/PastActivity";

function App() {
  const [selectedName, setSelectedName] = useState("");

  const handleSelectChange = (event) => {
    setSelectedName(event.target.value);
  };

  return (
    <Router>
      <div className="App">
        <section>
          <header>
            <TopBar />
          </header>
          <main>
            <Routes>
              <Route path="/manage-appointments" element={<ManageAppointments />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/past-activity" element={<PastActivity />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={
                <>
                  <img src="/images/calendar.png" alt="calendar" />
                  <div className="main-container">
                    <div className="main-header">
                      <h2>Select Mentor</h2>
                      <DropdownMenu
                        selectedName={selectedName}
                        handleSelectChange={handleSelectChange}
                      />
                    </div>
                  </div>
                </>
              } />
            </Routes>
          </main>
          <footer>
            <BottomBar />
          </footer>
        </section>
      </div>
    </Router>
  );
}

export default App;