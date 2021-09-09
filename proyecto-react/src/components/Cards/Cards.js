import React, {Component} from 'react'
import Card from '../Card/Card'


class Cards extends Component {

    constructor(){
        super()
        this.state ={
            movies:[]
        }
    }
    componentDidMount(){
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=6137a481959516e193831c9b950f5155&language=es&page=1"
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            this.setState({
                movies: data.results

                
            })
            
        })
        .catch(error => console.log(error))
    }

    render(){
        return(

            <main>
            <button type="button">Cargar más tarjetas</button>
            <section className="card-container">
                {this.state.movies.map((movie, idx) => <Card key={movie.title + idx} dataMovie={movie}/>)}  
            </section>
        </main>




        )
    }
}



export default Cards