import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import Counter from "./Components/Counter";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;
