import React from "react";

export default class Form extends React.Component {
  state = {
    title: "javaScript",
    text: "JavaScript is Awesome",
    library: "React",
    isAwesome: true,
  };

  handleChange = (event) => {
    if (event.target.type === "text") {
      this.setState({
        title: event.target.value,
      });
    } else if (event.target.type === "textarea") {
      this.setState({
        text: event.target.value,
      });
    } else if (event.target.type === "select-one") {
      this.setState({
        library: event.target.value,
      });
    } else if (event.target.type === "checkbox") {
      this.setState({
        isAwesome: event.target.checked,
      });
    } else {
      console.log("Nothing type");
    }
  };

  submitHandler = (e) => {
    const { title, text, library, isAwesome } = this.state;
    e.preventDefault();
    console.log(title, text, library, isAwesome);
  };
  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter your title"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea name="text" value={text} onChange={this.handleChange}>
            JavaScript is Awesome
          </textarea>
          <br />
          <br />

          <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
