import React, {Component} from 'react'
import './card.css'

class Card extends Component {

    constructor(props){
        super(props)
        this.state ={
            text: 'Ver más',
            viewMore: false,
            sombra: false,
            zoom: false,
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
    sombreado(){
       this.setState({
           sombra: true
       })
       console.log(this.state.sombra)

    }
    normal(){
        this.setState({
            sombra: false
        })
    }
    zoom(){
        this.setState({
            zoom: true
        })
        
 
     }
     zoomOut(){
         this.setState({
             zoom: false
         })
     }

    render(){
        return(

            <article className={` ${this.state.sombra? 'sombraCard' : ' '} ${this.props.valor? 'card' : 'cardColumn'}  `} onMouseOver={()=>this.sombreado()} onMouseOut={()=>this.normal()} >
            <section className={` ${this.props.valor?'navigation' : 'navigationColumn'}`}>
                <div className='botonesArribaTarjeta'>
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                    <i className="far fa-window-close eliminarr" onClick={() => this.props.remove(this.props.dataMovie.id)}></i>
                </div>
                
            </section>
            <main className={` ${this.props.valor?'imagen-info' : 'imagenColumn'}`}>
                <div onMouseOut={()=>this.zoomOut()} onMouseOver={()=>this.zoom()} className={` ${this.props.valor?'contenedor-imagen' : 'contenedor-imagenColumn'} ${this.state.zoom ? 'zoomImage' : ''}`}>
                    <img className={` ${this.props.valor?'imagenes' : 'imagenesColumna'}`} src={`https://image.tmdb.org/t/p/w342${this.props.dataMovie.poster_path}`} alt=""/>
                </div>
                <div className={` ${this.props.valor?'contenedor-info' : 'contenedorInfoColumn'}`}>
                    <h3 className='titulo'>{this.props.dataMovie.title}</h3>
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