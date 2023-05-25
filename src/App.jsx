import { Routes, Route } from "react-router-dom";
import CountryList from "./components/CountryList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route path="/id" element={<h1>ID</h1>} />
    </Routes>
  );
}

export default App;
