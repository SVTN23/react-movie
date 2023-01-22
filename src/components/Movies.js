import Movie from "./Movie";

function Movies (props) {

const {movies = [] } = props; // props приходят из Main но присваиваем по умолчани пустой массив

   return ( // стандартный вывод массива с фильмами через метод map
      <div className="movies">
         {movies.length ?  movies.map(movie => (<Movie key={movie.imdbID} {...movie}/>)) :
         
         <h1>Not Found</h1>
      }
      </div>

   )

}

export default Movies