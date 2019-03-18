# Xenioo Scripting
Xenioo cloud scripting action uses Javascript as a server side scripting language to extend even further your chatbot functions. 
Here you can find some examples of how Xenioo Cloud scripting can be used to create higly dynamic chatbot contents.

In addition to standard JavaScript functions and objects, Xenioo's cloud scripting also provides the global conversation object, which supports the following methods.  

**GetVariableValue**  
This method will return the current value of a specified variable. If the variable does not exist, an empty string is returned.
```javascript
conversation.GetVariableValue( variablename );
```  
---
**GetVariable**  
This method will return the current variable object instance of a given variable name. If the variable does not exist, an empty instance is returned. The returned instance will expose a Value and a Name field, both strings.
```javascript
conversation.GetVariable( variablename );
```  
---
**SetVariable**  
This method will update the value of a variable with a given name. Multiple overloads are available for additional call details.
```javascript
conversation.SetVariable( variablename, variablevalue );
conversation.SetVariable( variablename, variablevalue, setmode );
conversation.SetVariable( variablename, variablevalue, replacewith, setmode );
```  

The **setmode** parameter defines the mode used to update the target variable. You can use the followin table as a reference for the parameter.
|value|mode|
|--|--|
|0|Default. The value will be overwritten|
|1|Append. The value wil be added to the end of the current value|
|2|Concatenate. The value wil be added to the end of the current value, separated by a comma|
|3|Add. Xenioo will attempt to sum the given value to the current value of the variable|
|4|Subtract. Xenioo will attempt to subtract the given value from the current value of the variable|
|5|Divide. Xenioo will attempt to divide current value of the variable by the given value|
|6|Multiply. Xenioo will attempt to multiply current value of the variable by the given value|
|7|ReplaceString. All occurences of the given value inside the current value will be replaced by replacewith value|
|8|RemoveString. The given value will be removed from the current variable value|
|9|ClearValue. The current value of the variable will be set to an empty string value|

---
**AddReplyPart**  
This method will add a new reply part to the current conversation block. You can use this method to add new text or advanced controls to the current conversation. The added parts are volatile and will not become part of the runtime chatbot build design.
This method has multiple overloads that can be used to further define you action.

```javascript
conversation.AddReplyPart( text );
conversation.AddReplyPart( type, text, command );
conversation.AddReplyPart( type, text, command, commandvariable );
conversation.AddReplyPart( type, text, command, commandvariable, targetbehaviour, targetinteraction );
```
---
