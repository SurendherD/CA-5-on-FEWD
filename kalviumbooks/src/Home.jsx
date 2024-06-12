import React, { useState,useEffect } from 'react';
import './App.css'
import {NavLink} from 'react-router-dom'

function Home() {
  const [books,setbooks]=useState([])
  const [searchquery,setsearchquery]=useState('');

useEffect(()=>{
  fetch('https://reactnd-books-api.udacity.com/books',{method:'GET',headers: {'Authorization': 'hello'}}).then(res=>res.json())
  .then(data=>setbooks(data.books))},[])

const handelchange=(e)=>{
  setsearchquery(e.target.value);
}

const filteredBooks=()=>{
  return(
     books.filter(book=> book.title.toLowerCase().includes(searchquery.toLowerCase())).map(book => (
      <div key={book.id}>
        <img src={book.imageLinks.thumbnail} alt={book.title} className='imgContainer' />
        <div className='title_cost'>
          <h2 className='imgTitle'>{book.title}</h2> <span style={{fontSize:'12px'}}>Free of Cost</span>
        </div>
      </div>
     ))
  )
}
  
return (
    <div>
      <div className='headerContainer'>
        <header className='header'>
          <NavLink to='/' style={{textDecoration:'none'}}><div className='logoContainer'>
           <img src="https://kalvium.community/favicon.ico" alt="" className='logo'/> <span>Kalvium Books</span></div>
          </NavLink>
          <div className='searchContainer'>
            <input type="search" placeholder='search'className='search' value={searchquery} onChange={handelchange} />
          </div>
          <NavLink to='/register'><button type='submit' className='registerbtn'>Register</button></NavLink>
        </header>
      </div>

      <div className='booksContainer'>
        <div className='booksSubContainer'>
          {filteredBooks()}
        </div>
      </div>
    </div>
  )
}

export default Home;