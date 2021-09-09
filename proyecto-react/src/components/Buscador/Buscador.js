import React, {Component} from 'react'

class Buscador extends Component{
    constructor(){
        super()
        this.state = {
            valor: ''
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
            <form onSubmit={(event)=>this.evitarSubmit(event)} action="">
                <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} name="search" id="search" placeholder="Buscar Pelicula"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        )
    }
}

export default Buscador