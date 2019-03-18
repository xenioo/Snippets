# Xenioo Scripting
Xenioo cloud scripting action uses Javascript as a server side scripting language to extend even further your chatbot functions. 
Here you can find some examples of how Xenioo Cloud scripting can be used to create higly dynamic chatbot contents.

In addition to standard JavaScript functions and objects, Xenioo's cloud scripting also provides the global conversation object, which supports the following methods.

**AddReplyPart**
This method will add a new reply part to the current conversation block. You can use this method to add new text or advanced controls to the current conversation. The added parts are volatile and will not become part of the runtime chatbot build design.
This method has multiple overloads that can be used to further define you action.

```javascript
conversation.AddReplyPart( "Hello there!" );

```
