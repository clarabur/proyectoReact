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
                <img src={this.props.dataMovie.backdrop_path} alt=""/>
                <h3>{this.props.dataMovie.title}</h3>
                <p className="description">{this.props.dataMovie.overview}</p>
                <section className="aditional-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                </section>
                <a href="">Ver más</a>
            </main>
        </article>



        )
    }
}



export default Card