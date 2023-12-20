import React, { Component } from "react";
import ClickCounter from "./Components/ClickCounter";
import Section from "./Components/Section";
import Counter from "./Components/Counter";
import ThemeContext from "./contexts/themeContext";

class App extends Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={{ theme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
