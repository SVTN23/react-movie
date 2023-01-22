import React, { Component } from 'react'

class Search extends Component {

   state= {
      search: '', // строка для поиска контента. оба state передаются в функцию searchMovies как аргументы
      type: 'all' // для фильтрации по типу контента
}

handleFilter = (event) => { // вызываем searchMovies только через call back функцию по завершению обновления state
   this.setState(
   () => ({type: event.target.dataset.type}), 
   () =>this.props.searchMovies(this.state.search, this.state.type)
   )}

handleKey = (event) => { // запуск функции searchMovies переданной из Main
   if(event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
   }
}

render() {

   return (// форма радио кнопок и инпута стандартные с https://materializecss.com/
      <div className="row"> 
      <div className="col s12">

         <input placeholder='Search'
            value={this.state.search}
            type="search" 
            className="validate"
            onChange={(e) => this.setState({search: e.target.value})} // обновление state на введенное в поле
            onKeyDown={this.handleKey}
         />
         <button className='btn search-btn' //вызывает функцию поиска используя оба state как аргументы
               onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
      </div>
      <div className='radio'>
      <label>
         <input className="with-gap" 
               name="type" 
               type="radio" 
               data-type='all' // дата-атрибуты для фильтрации 
               onChange={this.handleFilter} // вызфывется функция фильтрации контента
               checked={this.state.type === 'all'}/> {/* если флажок в позиции checked -state.type меняется на указанный */ }
         <span>All</span>
      </label>
      <label>
         <input className="with-gap" 
               name="type" 
               type="radio"  
               data-type='movie' // 
               onChange={this.handleFilter}
               checked={this.state.type === 'movie'}/>
         <span>Movie Only</span>
      </label>
      <label>
         <input className="with-gap" 
               name="type" 
               type="radio"  
               data-type='series' 
               onChange={this.handleFilter}
               checked={this.state.type === 'series'}/>
         <span>Serials Only</span>
      </label>
      </div>


    </div>
   )
}
}


export default Search