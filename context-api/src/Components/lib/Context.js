class Context {
  constructor(value) {
    this._value = value;
    console.log(value);
  }

  // provider
  Provider = ({ children, value }) => {
    this._value = value;
    console.log(value);
    return children;
  };

  // consumer
  Consumer = ({ children }) => children(this._value);
}

function createContext(value = null) {
  const context = new Context(value);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
}

export default createContext;
