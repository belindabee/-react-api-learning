import React from "react";
import PhotoList from "./components/PhotoList";

class App extends React.Component {
  state = {
    todos: [],
    url: "https://jsonplaceholder.typicode.com/photos"
  };
  getAllPhoto = async url => {
    try {
      let res = await fetch(`${url}?_limit=10`);
      let data = await res.json();
      this.setState({ todos: data });
    } catch (err) {
      console.log(err);
    }
  };

  deleteTodos = async id => {
    console.log(test);
    try {
      let res = await fetch(`${this.state.irl}/${id}`, { method: "DELETE" });
      let data = await res.json();
      this.setState({
        photos: this.state.photos.filter(photo => photo.id !== id)
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getAllPhoto(this.state.url);
  }
  render() {
    return <PhotoList list={this.state.todos} del={this.state.del} />;
  }
}

export default App;
