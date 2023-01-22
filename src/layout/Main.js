import React, { Component } from 'react'
import Movies from '../components/Movies'
import Search from '../components/Search'
import Preloader from '../components/Preloader'

const API_KEY = process.env.REACT_APP_API_KEY // переменная окружения - хранится в .env.local
//process.env = метод объекта process по извлечению переменной из файла env

class Main extends Component {
   state = {
      movies: [],
      loading: true
   }
  
   componentDidMount () { // проблема двойного вызова решается удалением  </React.StrictMode> из index.js
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`). // fetch запрос на сервер
      then(response => response.json()).
      then(data => this.setState({movies: data.Search, loading: false})). // получаем мaссив с фильмами в state
      catch((err) => { // обработка ошибок
         console.error(err);
         this.setState({loading: false})
      })
   }

   searchMovies = (str, type ='all') => { // если type не равен all (а значит он либо movie, либо serias) присаиваем ему новое значение с доролнительным GET параметром (&type), если придет all добавляем пустую строку

      this.setState({loading: true})
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`).
      then(response => response.json()).
      //then(data => console.log(data))
      then(data => this.setState({movies: data.Search, loading: false}))
      
   }

   render() { // отображается с использованием grid-сетки см. CSS
      const {movies, loading} = this.state; // деструктцуризация объекта

      return (
            <main className="content container">  
               <Search searchMovies={this.searchMovies}/> {/*передаем функцию searchMovies вниз как props*/}

               {
                  loading ? 
                     <Preloader /> : 
                  <h5>
                     <Movies movies={movies}/>
                  </h5>
               }              
            </main>
         
      )
   }
}

export default Main