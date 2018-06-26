import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
    
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        movies: [
          {
            title : "star war",
            poster : "http://t1.daumcdn.net/movie/526855c211c94b5b202bcc1edd75220aa151a7a3"
          },
          {
            title : "지웅",
            poster : "https://s-i.huffpost.com/gen/3839686/thumbs/o-POTATO-570.jpg?4"
          },
          {
            title : "윤재",
            poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dvDdz8cfojgr3Zc_9U5skitra9NfTZocQ9IQhj1x6BrSEUhhwA"
          },
          {
            title : "기강",
            poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWdQAOgXzI65lehGERs6Wp1jGqaTyHXQVYEZDgFLObiA-VYFui"
          },
          {
            title : "규준",
            poster : "http://pds.joins.com/news/component/htmlphoto_mmdata/201705/23/ec7a8507-b3f8-404d-a2b9-a2ecababd400.jpg"
          },
        ]
      })
    }, 3000)
  }

  _renderMovie = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key ={index} />
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovie() : "Loadding"}
      </div>
    );
  }
}

export default App;
