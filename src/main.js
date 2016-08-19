import preset_data from './data/data_index.js'
// Fields will have been imported via rollup

function testFunction(){
    return "The Name value is " + JSON.stringify(preset_data.fields.name) + " and the address is " + JSON.stringify(preset_data.fields.address);
}
// Reference the function to avoid it being removed as it appears unused
console.log(testFunction());