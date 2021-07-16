import React from 'react'

const Book = ({img, title, author}) => {
    const clickHandler = () =>{
        alert('Hello world')
    }
     const complexExample = (author) =>{
        alert(author)
    }
    return (
        <article className="book">
                <img src={img} alt="" />
                <h1>{title}</h1>
                <h4>{author}</h4>
                <button type="button" onClick={clickHandler}>Rederence example</button>
                <button type="button" onClick={() => complexExample(author)}>Rederence example</button> {/*Si hay que pasar args tiene q ser de esta forma, sino se invoca sola*/}
        </article>
    )
}

export default Book