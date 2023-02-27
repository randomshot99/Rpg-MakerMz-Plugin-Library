
 //-----------------------------------------------------------------------------
/*:
 * @plugindesc Choose pet names from an Array.
 * @url
 * @target MZ
 * @author James Chadwick
 *
 * @param petNameArray
 * @text Pet Name Array
 * @type text[]
 * @desc array of pet names
 * @default ['example 1','example 2','example 3']
 * 
 * @param variableLocation
 * @text Variable Location
 * @type number
 * @desc Select which variable slot to store data to
 * @default 1
 * 
 * @param specificName
 * @text Specific Name
 * @type number
 * @desc Select specific Pet name index
 * @default 1
 * 
 *
 *--------------------------------------------------------------

 * @command RandomName
 * @text Random Name 
 * @desc Pick a random name from an array
 *
 * @arg nameArray
 * @type text[]
 * @default []
 * @text Input Array
 * @desc Array of names to choose from
 *
 * @arg variableLoc
 * @default 1
 * @text Variable Location
 * @desc Select witch variable slot to store data to
 * 
 * --------------------------------------------------------------------------
 * 
 * @command SpecificName
 * @text Specific Name 
 * @desc Pick a specific name from an array
 *
 * @arg nameArray
 * @type text[]
 * @default []
 * @text Input Array
 * @desc Array of names to choose from
 *
 * @arg variableLoc
 * @type number
 * @default 1
 * @text Variable Location
 * @desc Select which variable slot to store data to
 * 
 * @arg index
 * @type number
 * @default 1
 * @text  Array Index 
 * @desc Select which member of the array to use
 *
 * 
 */
 const pluginName = 'PetNameGenerator';
 const PetNameArray = PluginManager.parameters(pluginName)['petNameArray'];
 const variableNum = PluginManager.parameters(pluginName)['variableLocation'];
 const arrayIndex = PluginManager.parameters(pluginName)['specificName'];

PluginManager.registerCommand(pluginName, "RandomName", args => {
    const inputArray = JSON.parse(PetNameArray);
    RandomName(inputArray,variableNum);


});
PluginManager.registerCommand(pluginName, "SpecificName", args => {
    const inputArray = JSON.parse(PetNameArray);
    SpecificName(inputArray,arrayIndex,variableNum);
})



    function RandomName (inputArray=[],gameVarIndex){
        // generate a random number which legenth will be between 0 and the imput arry max entry.
        let rng = Math.floor(Math.random() * inputArray.length) ;
        //set a variable to the randomly selected entry
        let petName= inputArray[rng];
        // set game Variable with the radomly selected entry at the desired index.
        $gameVariables.setValue(gameVarIndex,petName); 
    }

     function SpecificName (inputArray=[], value,gameVarIndex){
         // check if the value given is within the size of the array
        if(value >=0 && value <=inputArray.length-1){
            // if the value is within the array set game variable with the selected entry from the array at the desired index
            let petName = inputArray[value];
                        $gameVariables.setValue(gameVarIndex,petName);
     
        }else{
            $gameVariables.setValue(gameVarIndex,'I am Broken');
            console.log("error value is out side the bounds of the array");
                } 
     }


