 
 
 var RandomShot = RandomShot || {};          
 RandomShot.PNG = RandomShot.PNG || {};    
 RandomShot.PNG.pluginName = "PetNameGenerator";
 
 //-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.0) Choose pet names from an Array.
 * @target MZ
 * @author James Chadwick
 *
 * @param PetNames:struct
 * @text Pet Names Arrays
 * @type struct<PetNames>[] 
 *  
 * 
 * 
 * @command RandomName
 * @text Random Name 
 * @desc Pick a random name from an array
 * 
 * @arg ListTitle
 * @text List Title
 * @type text
 * @default Name of List
 * @desc Select which pet name list to use
 * 
 * @arg VariableNum
 * @text Variable Number
 * @type number
 * @default 1
 * @desc Select where to save data
 * --------------------------------------------------------------------------
 * 
 * @command SpecificName
 * @text Specific Name 
 * @desc Pick a specific name from an array
 * 
 * @arg ListTitle
 * @text List Title
 * @type text
 * @default Name of List
 * @desc Select which pet name list to use
 * 
 * @arg VariableNum
 * @text Variable Number
 * @type number
 * @default 1
 * @desc Select where to save data
 * 
 * @arg NameIndex
 * @text Name Index
 * @type number
 * @default 0
 * @desc Select which name to call. Array starts at 0
 * 
 * 
 * 
 */
/*~struct~PetNames:
 *
 * @param Names
 * @text Names
 * @type text[]
 * 
 * @param VariableLocation
 * @text Variable Number
 * @type number
 * @min 1
 * @default 1
 * @desc Select which variable slot to store data to
 * 
 * @param ListTitle
 * @text List Title
 * @type text
 * @desc Title of List use for recall. Must be Unique
 *
*/

// generat an array filled with JSON objects
RandomShot.PNG.Settings= JSON.parse(PluginManager.parameters(RandomShot.PNG.pluginName)['PetNames:struct']);


RandomShot.PNG.ParseArray= function(){
    let values=[];
    for(let obj in RandomShot.PNG.Settings ){
        
        let key = JSON.parse(RandomShot.PNG.Settings[obj]);
        console.log(RandomShot.PNG.Settings[obj])
        values[key.ListTitle] = JSON.parse(key.Names);
        console.log(key.ListTitle);
        
    }
    return values;

}
RandomShot.PNG.Lists=RandomShot.PNG.ParseArray();

PluginManager.registerCommand(RandomShot.PNG.pluginName, "RandomName", args => {
    const listTitle = args.ListTitle;
    const variableNum =args.VariableNum;
    $gameVariables.setValue(variableNum, RandomShot.PNG.RandomName(listTitle)); 
})
PluginManager.registerCommand(RandomShot.PNG.pluginName, "SpecificName", args => {
    $gameVariables.setValue (args.VariableNum, RandomShot.PNG.SpecificName(args.ListTitle, parseInt(args.NameIndex)));
    
})

  
    RandomShot.PNG.RandomName = function (listTitle){
        // generate a random number which legenth will be between 0 and the imput arry max entry.
        let rng = Math.floor(Math.random() * RandomShot.PNG.Lists[listTitle].length) ;
        //set a variable to the randomly selected entry
        return  RandomShot.PNG.Lists[listTitle][rng];
    }

    RandomShot.PNG.SpecificName= function (listTitle,value){
            return RandomShot.PNG.Lists[listTitle][value];
     }

     RandomShot.PNG.DejsonFunction = function(jsonInput){
        // take in an json structure and out put an js object
        let jsArray = JSON.parse(jsonInput);
        return jsArray;
     }


