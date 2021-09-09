import React, {Component} from 'react'

class Card extends Component {

    constructor(props){
        super(props)
        this.state ={
            
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
                <img className="imagenes" src={`https://image.tmdb.org/t/p/w342${this.props.dataMovie.poster_path}`} alt=""/>
                <h3>{this.props.dataMovie.title}</h3>
                <p className="description">{this.props.dataMovie.overview}</p>
                <section className="aditional-info">
                    <p>{this.props.dataMovie.release_date}</p>
                    <p>{this.props.dataMovie.original_title}</p>
                    <p>{this.props.dataMovie.original_language}</p>
                    <p>{this.props.dataMovie.popularity}</p>
                   

                    <p></p>
                    <p></p>
                </section>
                <a href="">Ver más</a>
            </main>
        </article>



        )
    }
}



export default Card