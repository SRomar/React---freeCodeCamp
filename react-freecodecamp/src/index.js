import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css' 

import {books} from './books' //nombre especifico
import Book from './Book' //default export, cualquier nombre

    function BookList(){
    return (
        <section className='booklist'> 
            {books.map((book)=>{
                const {img, title, author} = book;
                return (
                    <Book key={book.id} {...book}></Book> //spread operator
                )
            })}
        </section>
  )
}

ReactDom.render(<BookList/>, document.getElementById('root'))