import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/themeContext";

export default function Content() {
  return (
    <div>
      <h1>This is a content</h1>
      <Counter>
        {(counter, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {({ theme }) => (
                <HoverCounter
                  count={counter}
                  incrementCount={incrementCount}
                  theme={theme || "default"}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </Counter>
    </div>
  );
}
