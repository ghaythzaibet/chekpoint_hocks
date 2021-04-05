import React from 'react'

const Card = ({movie}) => {
    return (
        <div>
            <div class="card" style={{width: '18rem' , height:"550px" , marginTop:"100px"}}>
  <img src={movie.Image} class="card-img-top" alt="..." style={{minheight:"400px"}}/>
  <div class="card-body">
    <h5 class="card-title">{movie.name}({movie.year})</h5>
    <p class="card-text">{movie.story}</p>
<div>
 {
[1,2,3,4,5].map (el => (

el<=movie.rating?




    <i key={el} style={{color:"yellow"}} class="fas fa-star"></i> : <i key={el} class="fas fa-star"></i>))


    }</div> <br/>


    <a href="#" class="btn btn-primary">more details</a>
  </div>
</div>






            
        </div>
    )
}

export default Card
