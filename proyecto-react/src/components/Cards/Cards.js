import React, {Component} from 'react'
import Card from '../Card/Card'
import Buscador from '../Buscador/Buscador'
import './cards.css'


class Cards extends Component {

    constructor(){
        super()
        this.state ={
            movies:[],
            moviesIniciales:[],
            isLoaded: false,
            nextUrl: '',
            valor: 1,
            columna: false,
            distribucion: true

        }
    }
    componentDidMount(){
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=6137a481959516e193831c9b950f5155&language=es&page=${this.state.valor}`
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            this.setState({
                movies: data.results,
                moviesIniciales: data.results,
                isLoaded: true,
               valor: data.page + 1,

                nextUrl:`https://api.themoviedb.org/3/movie/popular?api_key=6137a481959516e193831c9b950f5155&language=es&page=`

            })
            
        })
        .catch(error => console.log(error))
    }
addMore(){
    let url= this.state.nextUrl + this.state.valor
    fetch(url)
    .then (Response => Response.json())
    .then (data => {
        console.log(data)
        this.setState({
            movies: this.state.movies.concat(data.results),
            valor: data.page + 1,
            nextUrl: `https://api.themoviedb.org/3/movie/popular?api_key=6137a481959516e193831c9b950f5155&language=es&page=${this.state.valor}`

        })
    })
    .catch (error => console.log (error))
}


    buscarMovies(textoBuscador){
        let moviesBuscadas= this.state.moviesIniciales.filter(movie => movie.title.toLowerCase().includes(textoBuscador.toLowerCase()));
        this.setState({
            movies: moviesBuscadas
        })

    }

    deleteCard(peliculaABorrar){
        let peliculasQueQuedan = this.state.movies.filter( movie => movie.id !== peliculaABorrar);
        this.setState({
            movies: peliculasQueQuedan
        })
    }
    columnas(){
        if(this.state.columna){
            this.setState({
                columna: false,
                distribucion: true
            })

        }else{
            this.setState({
                columna: true,
                distribucion:false
            })
        }
       
    }
    render(){
        return(

        <main>
            <Buscador buscarMovies={(textoBuscador)=>this.buscarMovies(textoBuscador)} />
           <div className='boton'>
           <i  className="fas fa-th" onClick={()=>this.columnas()} ></i>
            <i className="fas fa-align-justify"></i>
           </div>
            
            
         {this.state.movies == "" ? <div className="noresults"><i class="fas fa-search icon"></i><p className="noresultsP">No hay Películas que coincidan con tu búsqueda</p></div> : <p></p> }
            
            <section className={` ${this.state.columna? 'columns' : 'card-container' }  `}>
                
                { 
                this.state.isLoaded === false ? <p> Cargando....</p> :

                this.state.movies.map((movie, idx) => <Card valor={this.state.distribucion} key={movie.title + idx} dataMovie={movie} remove={(peliculaABorrar) => this.deleteCard(peliculaABorrar)}/>)
                
                }
            </section>
            {this.state.movies == "" ? <p></p>: <button type="button" onClick ={()=> this.addMore()}> Cargar más películas </button>
          }
            
        </main>




        )
    }
}



export default Cards