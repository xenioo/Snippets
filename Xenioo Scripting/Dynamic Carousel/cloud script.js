//Retrieves products data from conversation variable "products_data"
var prods = JSON.parse( conversation.GetVariableValue( "products_data" ) );

if( prods == null || prods.length == 0 ){
  //No products, just drop the variable.
  conversation.DropVariable( "carousel_data" );
} else {

  var result = {};
  result.items = [];

  //For each product, creates a card and a postback button
  for( var i=0; i < prods.length; i++ ){
      result.items[i] = {
        type:'buttonscard',
        title: prods[i].name,
        subtitle: prods[i].short_description,
        image_url:prods[i].images[0].src,
        buttons:[]
      };
      
      //Postback button attached to the card
      //the PAYLOAD parameter MUST be unique to the whole carousel
      //duplicated buttons payloads may lead to wrong buttons detected on the server
      result.items[i].buttons[0] = {
          type:'postback',
          payload: prods[ i ].id,
          text:'Buy Now'
      }
      
  }
  //Push back the JSON structure to a Xenioo Variable
  //This variable can be sent as parameter to a Dynamic Carousel Action
  conversation.SetVariable( "carousel_data", JSON.stringify( result ) );
}

