function AllDone({ allDone }){
      
      function handleAlert(){
            allDone(false);
            console.log("I'm done!")
      }
      return (  
      <div className="alert alert-primary alert-dismissible fade show" role="alert">
         All Done for Now!
         <button type="button" className="close" data-dismiss="alert" onClick={handleAlert} aria-label="Close" >
               <span aria-hidden="true">&times;</span>
         </button>
      </div>
      )


}

export default AllDone;