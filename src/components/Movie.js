function Movie (props) {

   const {Title: title,
         Year: year, //  переимнование для удобства использования элементоы из props (объекта полуучаемого по fetch)
         imdbID: id,
         Type: type,
         Poster: poster,
   } = props; // props получают из fetch

   return ( // карточка внешнего вида каждого фильма (стандартная карта с  https://materializecss.com/)
      <div id={id} className="card movie">
         <div className="card-image waves-effect waves-block waves-light">
            {
                     // если постер отсутствует - в карточку вместо фото фильма выдается элемент по ссылке внизу
               poster === 'N/A' ? <img className="activator" src={`https://via.placeholder.com/300x450?text=${title}`} /> : <img className="activator" src={poster} />

            }           
         </div>
         <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year}<span className="right">{type}</span></p>
         </div>
      </div>
   )

}
export default Movie