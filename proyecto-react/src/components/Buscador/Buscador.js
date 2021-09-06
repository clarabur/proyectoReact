import React, {Component} from 'react'

class Buscador extends Component{
    constructor(){
        super()
        this.state = {
            valor: ''
        }
    }
    render(){
        return(
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        )
    }
}

export default Buscador