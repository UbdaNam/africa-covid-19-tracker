import { Routes, Route } from "react-router-dom";
import CountryList from "./components/CountryList";
import CounteryDetails from "./components/CountryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route path="/:countryName" element={<CounteryDetails />} />
    </Routes>
  );
}

export default App;
