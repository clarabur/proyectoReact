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

            <article className='card'>
            <section className="navigation">
                <div>
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <i className="far fa-window-close" onClick={() => this.props.remove(this.props.dataMovie.id)}></i>
            </section>
            <main className='imagen-info'>
                <div className='contenedor-imagen'>
                    <img className="imagenes" src={`https://image.tmdb.org/t/p/w342${this.props.dataMovie.poster_path}`} alt=""/>
                </div>
                <div className='contenedor-info'>
                    <h3>{this.props.dataMovie.title}</h3>
                    <p className="description">{this.props.dataMovie.overview}</p>
                    <section className="aditional-info">
                        <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Fecha de lanzamiento: {this.props.dataMovie.release_date}</p>
                        <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Título original: {this.props.dataMovie.original_title}</p>
                        <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Lenguaje original: {this.props.dataMovie.original_language}</p>
                        <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Popularidad: {this.props.dataMovie.popularity}</p>
                        <p className='more' onClick={() => this.viewMore()}>{this.state.text}</p>
                    </section>
                </div>
            </main>
        </article>



        )
    }
}



export default Card