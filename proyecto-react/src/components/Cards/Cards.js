import React, {Component} from 'react'
import Card from '../Card/Card'


class Cards extends Component {

    constructor(){
        super()
        this.state ={
            valor:''
        }
    }

    render(){
        return(

            <main>
            <button type="button">Cargar más tarjetas</button>
            <section class="card-container">
                      <Card/>
            </section>
        </main>




        )
    }
}



export default Cards