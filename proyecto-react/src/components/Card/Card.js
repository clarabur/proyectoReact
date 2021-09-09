import React, {Component} from 'react'
import './card.css'

class Card extends Component {

    constructor(props){
        super(props)
        this.state ={
            text: 'Ver más',
            viewMore: false
        }
    }
   
    viewMore(){
        if (this.state.viewMore) {
            this.setState({
                text: 'Ver más',
                viewMore: false
            })
        } else {
            this.setState({
                text: 'Ver menos',
                viewMore: true
            })
        }
    }

    render(){
        return(

            <article>
            <section className="navigation">
                <div>
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <i className="far fa-window-close"></i>
            </section>
            <main>
                <img className="imagenes" src={`https://image.tmdb.org/t/p/w500${this.props.dataMovie.poster_path}`} alt=""/>
                <h3>{this.props.dataMovie.title}</h3>
                <p className="description">{this.props.dataMovie.overview}</p>
                <section className="aditional-info">
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Fecha de lanzamiento: {this.props.dataMovie.release_date}</p>
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Título original: {this.props.dataMovie.original_title}</p>
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Lenguaje original: {this.props.dataMovie.original_language}</p>
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Popularidad: {this.props.dataMovie.popularity}</p>
                    <p className='more' onClick={() => this.viewMore()}>{this.state.text}</p>
                    <p className='more' onClick={() => this.props.remove(this.props.dataMovie.id)}>Borrar</p>
                </section>
            </main>
        </article>



        )
    }
}



export default Card