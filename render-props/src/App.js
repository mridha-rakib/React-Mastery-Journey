import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import Counter from "./Components/Counter";
// import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Counter
        render={(isLoggedIn) => (isLoggedIn ? "Rakib Mahmud" : "guest")}
      /> */}

      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
