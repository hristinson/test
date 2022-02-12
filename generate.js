const schema = 
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/product.schema.json",
  "title": "Product",
  "description": "A product from Acme's catalog",
  "type": "object",
  "properties": {
    "productId": {
      "description": "The unique identifier for a product",
      "type": "integer"
    },
    "productName": {
      "description": "Name of the product",
      "type": "string"
    },
    "price": {
      "description": "The price of the product",
      "type": "number",
      "exclusiveMinimum": 0
    },
    "tags": {
      "description": "Tags for the product",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "uniqueItems": true
    },
    "dimensions": {
      "type": "object",
      "properties": {
        "length": {
          "type": "number"
        },
        "width": {
          "type": "number"
        },
        "height": {
          "type": "number"
        }
      },
      "required": [ "length", "width", "height" ]
    }
  },
  "required": [ "productId", "productName", "price" ]
}


// ----------------------------------------------------------

var tags = "additional afraid angry anxious asleep attentive available basic beautiful big boring brave bright busy calm careful cheap clean clever comfortable confident conscious constant convenient cool correct curious dangerous dark deep different difficult dirty easy efficient empty every exact exciting expensive fair famous fast fat fine firm flat foreign formal former free fresh friendly frightful full funny gorgeous guilty happy hard healthy heavy helpful historical honest hot huge hungry ill illegal important impossible independent informal innocent interesting international kind large leading legal light little lonely long loose loud"
var arrayOfTags = tags.split(" ")
function randomInt(rightBound) {    return Math.floor(Math.random() * rightBound + 5); }
function randomIntChars(rightBound) {    return Math.floor(Math.random() * rightBound); }
function random15() {    return Math.floor(Math.random() * 5 + 1); }
function randomDimension() {   return Math.floor((Math.random() * 10000)); }
function randomPrice(rightBound) {    return Math.floor(Math.random() * rightBound + 5); }

function randomString(size) {
    var alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var generatedString = '';
    for(var i = 0; i < size; i++) {
        generatedString += alphaChars[randomIntChars(alphaChars.length)];     }
    return generatedString;  }

// ----------------------------------------------------------

function generatorObj(schema)
    {
	var obj = new Object()

	if (schema.properties.productId.type === "integer") 
		{
		    obj.productId = randomInt(10000)
		} else {console.log("error 1"); process.exit(-1)}

	if (schema.properties.productName.type === "string") 
		{
		obj.productName = randomString(randomInt(10))
		} else {console.log("error 2"); process.exit(-1)}

	if (schema.properties.price.type === "number") 
		{
		obj.price = randomPrice(1000) /10
		} else {console.log("error 3"); process.exit(-1)}

	if (schema.properties.tags.type === "array") 
		{
		array01 = []
		for (i = random15(); i != 0; i--) {
		array01.push(arrayOfTags[randomIntChars(arrayOfTags.length)])
		}
		obj.tags = array01

		} else {console.log("error 4"); process.exit(-1)}

	if (schema.properties.dimensions.properties.length.type ===  "number" && schema.properties.dimensions.properties.length.type ===  "number" && schema.properties.dimensions.properties.length.type  ===  "number")
		{
		var objTMP = new Object ()
		objTMP.length = randomDimension() / 10
		objTMP.width = randomDimension() / 10
		objTMP.heigth = randomDimension() / 10
		obj.dimensions = objTMP
		} else {console.log("error 5"); process.exit(-1)}

	return obj
    }

console.log(generatorObj(schema))
