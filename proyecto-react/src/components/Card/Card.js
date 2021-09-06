import React, {Component} from 'react'

class Card extends Component {

    constructor(){
        super()
        this.state ={
            movies:''
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

            <article>
            <section className="navigation">
                <div>
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <i className="far fa-window-close"></i>
            </section>
            <main>
                <img src="./img/image-default.png" alt=""/>
                <h3>Título/ Nombre</h3>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
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