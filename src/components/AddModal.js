import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 

 
function AddModal({isOpen , closeModal ,openModal, addmovie}){

  
  const [name , setName] =  useState('')

  const [Story , setStory] =  useState('')

  const [year , setYear] =  useState(null)

  const [image, setimage] =  useState('')

  const [rating , setrating] =  useState(0)
  
 
 
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={isOpen}
         
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={(e)=>{
            e.preventDefault();
            addmovie({name,Story,image,rating,year})

            closeModal()
            setrating(0) ; setStory('') ; setYear('') ; setimage('') ;
            
           }} >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Movie title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=> setName(e.target.value)} aria-describedby="emailHelp"required/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Story</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=> setStory(e.target.value)} aria-describedby="emailHelp"required/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">year</label>
    <input type="number" class="form-control" id="exampleInputEmail1" onChange={(e)=> setYear(e.target.value)} aria-describedby="emailHelp" required/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">poste url</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=> setimage(e.target.value)} aria-describedby="emailHelp" required/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">rating</label>
    <input type="number" min="1" max="5" class="form-control" id="exampleInputEmail1" onChange={(e)=> setrating(e.target.value)} aria-describedby="emailHelp" required/>
   
  </div>


  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
         
       <button onClick={closeModal}>close</button>


        </Modal>
      </div>
    );
}

export default AddModal