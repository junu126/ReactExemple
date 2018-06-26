/* 업데이트 과정
    componentWillReceiveProps(){
        console.log('첫번째 실행');
    }

    shouldComponentUpdate(){
        console.log('두번째 실행');
    }

    componentWillUpdate(){
        console.log('세번재 실행');
    }

    render(){
        console.log('네번째 실행');
    }
    
    componentDidUpdate(){
        console.log('다섯번째 실행');
    }
*/

// 컴포넌트의 과정(순서)
/*
    componentWillMount(){
        console.log('첫번째 실행 - request를 요청.(api요청)');
    }

    componentDidMount(){
        console.log('세번째 실행 - response');
    }

    render(){
        console.log('두번째 실행 - 데이터 관련된 작업');
    }
*/
 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {

static propTypes = {
    poster : PropTypes.string.isRequired
}

    render(){
        return(
            <img src={this.props.poster} />
        )
    }
}

export default Movie;