const express = require('express');
const router = express.Router();

const jsf = require('json-schema-faker');
const util = require('util')
const faker = require('faker')
jsf.extend('faker', () => faker);

var med = {
  "type": "array",
  "minItems": 1,
  "maxItems": 5,
  "items": {
	  "type": "object",
	  "properties": {
	    "name": {
	      "type": "string",
	      "faker": "lorem.word"
	    },
	    "amount": {
	      "type": "integer",
	      "minimum": 1,
          "maximum": 3
	    },
	    "hours" : {
	      "type": "integer", 
	       "minimum": 5,
  		   "maximum": 22
	    },
	    "minutes" : {
	      "type": "integer", 
	       "minimum": 0,
  		   "maximum": 59
	    },
	    "status" : {
	    	"type": "boolean"
	    }
	},
	  "required": [
	    "name",
	    "amount", 
	    "hours",
	    "minutes",
	    "inutes",
	    "status"
	   ]
	  }
};

/* GET home page. */
router.get('/', (req, res) => {

  jsf.resolve(med).then(sample => {
  	   console.log(util.inspect(sample, 
  	   	{showHidden: false, depth: null}));
	   
	   res.render('medicaments', 
	  	{  med:  sample });
  });

  
});

module.exports = router;
