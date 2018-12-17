/*
  The Xenioo variable colors_list holds a simple JSON built like this:
  
  [
    {
      "colorid": "A",
      "color": "Red"
    },
    {
      "colorid": "B",
      "color": "Blue"
    },
    {
      "colorid": "C",
      "color": "Yellow"
    }
  ]
  
  JSON.parse transform it into a full object that can be iterated to 
  create multiple chat buttons
  
*/

var colors = JSON.parse( conversation.GetVariableValue( "colors_list" ) );
for( var i=0; i < colors.length; i++ ){
  conversation.AddReplyPart( 
                              "1"                 /* part type. 1 is button */, 
                              colors[i].color,    /* part text. We're using color name */
                              colors[i].colorid,  /* command payload. Its the value we want in our postback. We are using ID */ 
                              "picked_color",     /* postback target variable name. we can use this later in our chatbot */
                              "",                 /* button target behaviour. We leave it empty: its the current one */
                              "Color Selected"    /* button target interaction. We go to "Selected Color" you see in the diagram */
                            );
  
}
