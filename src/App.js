import "./App.css";
import PaginationParent from "./components/01-pagination/PaginationParent";
import DigitalClock from "./components/02-digital-clock/DigitalClock";
import CountDownMain from "./components/03-countdown-timer/CountDownMain";

function App() {
  return (
    <div className="App">
      <PaginationParent />
      <DigitalClock />
      <CountDownMain />
    </div>
  );
}

export default App;
