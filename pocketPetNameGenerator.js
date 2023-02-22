

(function(){

    function pocketPetNamesRNGenerator (inputArray=[],gameVarIndex){
        // generate a random number which legenth will be between 0 and the imput arry max entry.
        let rng = Math.floor(Math.random() * inputArray.length) 
        //set a variable to the randomly selected entry
        let petName= inputArray[rng]
        // set game Variable with the radomly selected entry at the desired index.
        $gameVariables.setValue(gameVarIndex,petName); 
    }

     function pocketPetNamesGenerator (inputArray=[], value,gameVarIndex){
         // check if the value given is within the size of the array
        if(value >=0 && value <=inputArray.length-1){
            let petName = inputArray[value]
                        $gameVariables.setValue(gameVarIndex,petName);

               
        }else{
            return 'error with value'
                } 
     }







})();



/*
function pocketPetNamesRNGenerator (inputArray=[]){
    // generate a random number which legenth will be between 0 and the imput arry max entry.
    let rng = Math.floor(Math.random() * inputArray.length) 
    //set a variable to the randomly selected entry
    let petName= inputArray[rng]
    // return the randomly selected entry
    return petName

}

function pocketPetNamesGenerator (inputArray=[], value){
// check if the value given is within the size of the array
if(value >=0 && value <=inputArray.length-1){
    let petName = inputArray[value]
    return petName
}else{
    return 'error with value'
} 
} */

