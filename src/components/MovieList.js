import React , {useState}from 'react'
import Card from './Card'
import data from '../Moviesdata'
import AddModal from './AddModal'
const MovieList = () => {

const[movies , setMovies] =  useState(data)
const [isOpen , setisOpen] = useState(false)

const [inputFilter , setfilter]=  useState('')
const [ratingFilter , setRating] =  useState(0)


const closeModal = () => setisOpen(false)

const openModal =() => setisOpen(true)

const addmovie = (newmovie) => setMovies([...movies, newmovie])

const filterdList = movies.filter ( el=> ratingFilter !==0 ? el.name.toLowerCase().includes(inputFilter.toLowerCase()):el)

    return (


<div>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" onChange={(e) => setfilter(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    

<div>
{[1,2,3,4,5].map(el =>

<i  key={el}class="fas fa-star" style={{color : el<= ratingFilter ? "yellow" : "black" , cursor:"pointer"}}   onClick={()=> ratingFilter==el ? setRating(el-1) :     setRating(el)}              ></i>)

}
</div>



  </div>
</nav>




    <button onClick={()=> setisOpen(true)}  >Add Movie</button>
    <AddModal isOpen={isOpen} closeModal={closeModal} openModal={openModal} addmovie={addmovie} />
        <div style={{display:"flex" , flexWrap:"wrap", justifyContent:"space-around"}}>
     {filterdList.map((el,i) => (
         <Card key={i} movie={el}/>




    ))}
    
    
    
        </div>
        </div>
     )
}



export default MovieList 
