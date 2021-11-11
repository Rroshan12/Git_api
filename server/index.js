const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');


const app = express();


const port = 5000
const uri = `https://api.github.com`;
const access_token = "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";

const config = {
    headers: {Authorization: `Bearer ${access_token}`}     
};

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.route("/getUserInfo").get(function(req,res) {
    try {
        axios.get(uri+'/users', null, config).then((responses) => {

           const  repos = responses.data;
        
           res.status(200).json(repos);
        
        
        }).catch(error => {
            console.log(`getrepos error: ${error}`)
        });
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


})
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })