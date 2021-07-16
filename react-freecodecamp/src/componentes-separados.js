import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css' 

function BookList(){
  return (
    <section className='booklist'> 
        <Book/>
    </section>
  )
}

const Book = () =>{
    return (
        <article className="book">
            <Image/>
            <Title/>
            <Author/>
        </article>
    )
}

const Image = () => {
    return <img src="https://www.planetadelibros.com.ar/usuaris/libros/fotos/213/m_libros/212279_portada_cacho-de-buenos-aires_cacho-castana_201601251707.jpg" alt="" />
}

const Title = () => {
    return <h1>Cacho Castaña: vida de artista </h1>
}

const Author = () => {
    return <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25 rem'}}>Cacho Castaña</h4>
}

ReactDom.render(<BookList/>, document.getElementById('root'))