const csvtojson = require('csvtojson');
const stock = require('../models/stock');
module.exports = {
    async csvjsonFile(req, res) {
        
            csvtojson().fromFile('stocks.csv').then(csvData=>{
                console.log(csvData)
                stock.insertMany(csvData).then(function(){
                    console.log("Data Inserted ")
                    res.json({success:"sucess"});
                })
            }).catch(function(error){
                console.log(error)
            })
           
            
       
    },
}