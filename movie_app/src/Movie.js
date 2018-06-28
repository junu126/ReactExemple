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
 
import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className = "Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src ={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}) {
    return(
        <span className = "Movie__Genre">{genre}</span>
    )       
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie