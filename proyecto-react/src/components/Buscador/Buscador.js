import React, {Component} from 'react'
import "./buscador.css"

class Buscador extends Component{
    constructor(){
        super()
        this.state = {
            valor: '',
           
        }
    }
    evitarSubmit(event){
        event.preventDefault()
    }
    controlarCambios(event){
        this.setState({
            valor: event.target.value
            },
            ()=>this.props.buscarMovies(this.state.valor)

        )
       
    }
    
    render(){
        return(
            <section className="sectionBuscador">
            
       
   
            <form className="formContainer" onSubmit={(event)=>this.evitarSubmit(event)} action="">
                <div className="inputDiv"><input className="input" type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} name="search" id="search" placeholder="Buscar película popular por título"/></div>
                <div className="contenedorBoton"><button className="botons" type="submit"><i className="fas fa-search iconos"></i></button></div>
            </form>
            </section>
        )
    }
}

export default Buscador