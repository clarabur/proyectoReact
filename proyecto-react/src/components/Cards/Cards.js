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

        }
    }
    componentDidMount(){
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=6137a481959516e193831c9b950f5155&language=es&page=1"
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            this.setState({
                movies: data.results,
                moviesIniciales: data.results,
                isLoaded: true,

            })
            
        })
        .catch(error => console.log(error))
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
    render(){
        return(

        <main>
            <Buscador buscarMovies={(textoBuscador)=>this.buscarMovies(textoBuscador)} />
            <button type="button">Cargar más tarjetas</button>
            <section className="card-container">
                {

                this.state.isLoaded === false ? <p> Cargando....</p> :

                this.state.movies.map((movie, idx) => <Card key={movie.title + idx} dataMovie={movie} remove={(peliculaABorrar) => this.deleteCard(peliculaABorrar)}/>)
                
                }  
            </section>
        </main>




        )
    }
}



export default Cards