# Dynamic Carousel Example
The example you find here can help you understand how to use a Cloud Scripting action to build a Dynamic Carousel Variable to be used in a dynamic chat.

The **cloud script.js** file contains a script that can be used directly in a Xenioo Cloud Scripting block while the **output_example.json** file contains an example of fully functional Dynamic Carousel JSON input.

|button type|description|
|-|-|
|postback|A standard post-back button. A postback button will send back the payload value to Xenioo and ultimately to your chatbot. The payload value can be used in you flow to redirect and manage conversation based on user choice.|
|web_url|This button will redirect the user to the url specified in the payload value. This type of button also support different "webview_height_ratio" values, as shown in the tabel below|
|element_share|This button will display a fixed share icon that will let you user share the card contents outside of the chatbot. This is currently only supported by the Facebook channel|

When using web_url type button in Facebook channel, you can assign to the webview_height_ratio property the following values:

|value|description
|-|-|
|compact|Will open the url in a small frame, aproximately half the size of the available mobile screen.|
|tall|Will use about the full size of the available scren to display the url content.|
|full|A full page, using the whole mobile screen, will be used.|

The webview_height_ratio has no effect on the desktop version of Facebook Messenger.
Please note that platform restrictions apply here just like any with other standard Carousel Action.
