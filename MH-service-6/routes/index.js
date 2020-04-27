const express = require('express');
const router = express.Router();

const jsf = require('json-schema-faker');
const util = require('util')
const faker = require('faker')
jsf.extend('faker', () => faker);

var profile = {
	"type": "object",
	  "properties": {
	    "name": {
	      "type": "string",
	      "faker": "name.findName"
	    },
	    "healthStatus" : {
	    	"type": "boolean"
	    }
	},
	  "required": [
	    "name",
        "healthStatus"
	   ]
};

/* GET home page. */

router.get('/', (req, res) => {

  jsf.resolve(profile).then(sample => {
  	   console.log(util.inspect(sample, 
  	   	{showHidden: false, depth: null}));
	   
	   res.render('index', 
	  	{  profile:  sample });
  });

  
});

module.exports = router;
