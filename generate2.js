const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "attendees": {
      "type": "object",
      "$id": "#attendees",
      "properties": {
        "userId": {
          "type": "integer"
        },
        "access": {
          "enum": [
            "view",
            "modify",
            "sign",
            "execute"
          ]
        },
        "formAccess": {
          "enum": [
            "view",
            "execute",
            "execute_view"
          ]
        }
      },
      "required": [
        "userId",
        "access"
      ]
    }
  },
  "type": "object",
  "properties": {
    "id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "integer"
        }
      ]
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "startDate": {
      "type": "integer"
    },
    "endDate": {
      "type": "integer"
    },
    "attendees": {
      "type": "array",
      "items": {
        "$ref": "#attendees"
      },
      "default": []
    },
    "parentId": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "string"
        },
        {
          "type": "integer"
        }
      ]
    },
    "locationId": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "integer"
        }
      ]
    },
    "process": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "string",
          "format": "regex",
          "pattern": "https:\\/\\/[a-z]+\\.corezoid\\.com\\/api\\/1\\/json\\/public\\/[0-9]+\\/[0-9a-zA-Z]+"
        }
      ]
    },
    "readOnly": {
      "type": "boolean"
    },
    "priorProbability": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "integer",
          "minimum": 0,
          "maximum": 100
        }
      ]
    },
    "channelId": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "integer"
        }
      ]
    },
    "externalId": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "string"
        }
      ]
    },
    "tags": {
      "type": "array"
    },
    "form": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "viewModel": {
          "type": "object"
        }
      },
      "required": [
        "id"
      ]
    },
    "formValue": {
      "type": "object"
    }
  },
  "required": [
    "id",
    "title",
    "description",
    "startDate",
    "endDate",
    "attendees"
  ]
}

// ----------------------------------------------------------

var tags = "additional afraid angry anxious asleep attentive available basic beautiful big boring brave bright busy calm careful cheap clean clever comfortable confident conscious constant convenient cool correct curious dangerous dark deep different difficult dirty easy efficient empty every exact exciting expensive fair famous fast fat fine firm flat foreign formal former free fresh friendly frightful full funny gorgeous guilty happy hard healthy heavy helpful historical honest hot huge hungry ill illegal important impossible independent informal innocent interesting international kind large leading legal light little lonely long loose loud"
var tags_at = "Michael Serj Igor Vitaly Alex Bred Tomos Andrey Kirill Fiodor"
var arrayOfTags = tags.split(" ")
var arrayOfTags_at = tags_at.split(" ")
function randomInt(rightBound) {    return Math.floor(Math.random() * rightBound + 5) }
function randomIntChars(rightBound) {    return Math.floor(Math.random() * rightBound) }
function random15() {    return Math.floor(Math.random() * 5 + 1) }
function randomDimension() {   return Math.floor((Math.random() * 10000)) }
function randomPrice(rightBound) {    return Math.floor(Math.random() * rightBound + 5) }
function randomCoin() {   return (Math.random() * 10 > 5 ? true : false) }
function random3() {let s = 0 ; s = Math.floor((Math.random() * 3)) ; return s }
function randomDate(start, end) {return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())) }
function randomRange(min,max) {return Math.floor((Math.random() * (max - min) + min  )) }
var myDate  = randomDate(new Date(2012, 0, 1), new Date());

const date1 = new Date('July 20, 1979 20:17:40 GMT+00:00')
const date2 = new Date('July 20, 1989 20:17:40 GMT+00:00')
const date3 = new Date('July 20, 1999 20:17:40 GMT+00:00')
const date4 = new Date('July 20, 2009 20:17:40 GMT+00:00')

function randomString(size) {
    var alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var generatedString = ''
    for(var i = 0; i < size; i++) {
        generatedString += alphaChars[randomIntChars(alphaChars.length)];     }
    return generatedString  }

// ----------------------------------------------------------

    function generatorObj(schema)

    {
	var obj = new Object()
	var definitions = new Object()
	var attendees = new Object()
	var properties = new Object()

	if (schema.definitions.attendees.properties.userId.type === "integer") 
		{
		    properties.productId = randomInt(10000)
		    attendees.properties = properties
		    definitions.attendees = attendees
		    obj.definitions = definitions
		} else {console.log("error 10"); process.exit(-1)}

	if (schema.definitions.attendees.properties.access.enum[0]) {
	var x = 0 
	var y = 0 
	var access = new Array()
	while (schema.definitions.attendees.properties.access.enum[x]) {if (randomCoin()) {access[y] = schema.definitions.attendees.properties.access.enum[x]; x++; y++} else {x++} }
	obj.definitions.attendees.properties.access = access
	} else {console.log("error 15"); process.exit(-1)}

	if (schema.definitions.attendees.properties.formAccess) {
	var rand3 = random3()
	obj.definitions.attendees.properties.formAccess = schema.definitions.attendees.properties.formAccess.enum[rand3]
	} else {console.log("error 16"); process.exit(-1)}

	if (schema.properties.id) {
	var properties = new Object()
	obj.properties = properties
	if(randomCoin()) {obj.properties.id = randomString(20)} else {obj.properties.id = randomInt(10000)}
	} else {console.log("error 17"); process.exit(-1)}

	if (schema.properties.title.type === "string") {obj.properties.title = randomString(20)} else {console.log("error 20"); process.exit(-1)}
	if (schema.properties.description.type === "string") {obj.properties.description = randomString(20)} else {console.log("error 30"); process.exit(-1)}
	if (schema.properties.startDate.type === "integer") {obj.properties.startDate = randomDate(date1, date2)} else {console.log("error 40"); process.exit(-1)}
	if (schema.properties.endDate.type === "integer") {obj.properties.endDate = randomDate(date3, date4)} else {console.log("error 50"); process.exit(-1)}

	if (schema.properties.attendees.type === "array") {
	    var attendees = new Object()
	    obj.properties.attendees = attendees
	    array01 = []
	    for (i = random15(); i != 0; i--) {	array01.push(arrayOfTags_at[randomIntChars(arrayOfTags_at.length)])	}
	    obj.properties.attendees.items = array01 
	} else {console.log("error 60"); process.exit(-1)}

	if (schema.properties.id.anyOf[0].type === "string" && schema.properties.id.anyOf[1].type  === "integer") 
	    {
    	if (randomCoin()) {obj.properties.id = randomString(10)} else {obj.properties.id = randomInt(6)} 
	    }

      else if (schema.properties.id.anyOf[0].type === "string") {obj.properties.id = randomString(10)}
      else if (schema.properties.id.anyOf[0].type === "integer") {obj.properties.id = randomInt(6)} 
      else {console.log("error 70"); process.exit(-1)}
	
	if (schema.properties.parentId.anyOf) {
	    var x = random3()
	    if (schema.properties.parentId.anyOf[x].type === "null") {obj.properties.parentId = "null"}
	    if (schema.properties.parentId.anyOf[x].type === "string") {obj.properties.parentId = randomString(20)}
	    if (schema.properties.parentId.anyOf[x].type === "integer") {obj.properties.parentId = randomInt(6)}
	}
      else {console.log("error 80"); process.exit(-1)}

    if (schema.properties.locationId.anyOf) {
    let y = randomCoin()
    if (randomCoin()) {obj.properties.locationId = "null"} else {obj.properties.locationId = randomString(15)}}
    else {console.log("error 90"); process.exit(-1)}

    if (schema.properties.process.anyOf) {
    let y = randomCoin()
    if (randomCoin()) {obj.properties.process = "null"} else {obj.properties.process = randomString(15)}}
    else {console.log("error 90"); process.exit(-1)}

    if(schema.properties.readOnly.type) {obj.properties.readOnly = randomCoin() }

    if(randomCoin()){obj.properties.priorProbability = "null"} else {obj.properties.priorProbability = randomRange(schema.properties.priorProbability.anyOf[1].minimum,schema.properties.priorProbability.anyOf[1].maximum)}

    if (randomCoin()) {obj.properties.channelId = "null"} else {obj.properties.channelId = randomInt(10000)}
    if (randomCoin()) {obj.properties.externalId = "null"} else {obj.properties.externalId = randomInt(10000)}

    if (schema.properties.tags.type === "array") {
	let array02 = []
	for (i = random15(); i != 0; i--) {array02.push(arrayOfTags[randomIntChars(arrayOfTags.length)])	}
	obj.properties.tags = array02
	}
    else {console.log("error 100"); process.exit(-1)}

	if(schema.properties.formValue.type === "object") {
	const form = new Object()
	const id = new Object()
	const properties = new Object()

	obj.properties.form = form
	obj.properties.form.properties = properties
	obj.properties.form.properties.id = randomInt(10000)
	obj.properties.form.properties.viewModel = randomInt(10000)
    }	else {console.log("error 110"); process.exit(-1)}


    return obj
    }

console.log(generatorObj(schema))
