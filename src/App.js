// // import "./App.css";

// // function App() {
// //   return (
// //     <div className="App">
// //       <Form />
// //     </div>
// //   );
// // }
// // export default App;
// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import nav from "./components/navbar";
import Form from "./components/form";
import Home from "./components/Home";
import "./App.css";
function App() {
  return (
    <div>
      {/* <Form /> */}

      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            {/* <Route path="/content-generate" element={<ContentGenerate />} />
            <Route path="/create-content" element={<CreateContent />} />
            <Route path="/add-image" element={<AddImage />} />
            <Route path="/schedule-content" element={<ScheduleContent />} /> */}
            {/* <Route
              path="/product-registeration"
              element={<ProductRegisteration />}
            /> */}
            {/* <Route path="/" element={<nav/>} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
