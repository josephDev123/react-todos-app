
export  function saveState(state) {
        try{
            return  localStorage.setItem('state', JSON.stringify(state))
        }catch(err){
            
          console.log(err.message);
        }
      
}


export function loadState() {
   try{
       
       const persistState = localStorage.getItem('state');
       let finalPersist = persistState?JSON.parse(localStorage.getItem('state')):[]
     return finalPersist
   }catch(err){
       console.log(err.message);
   }
}



