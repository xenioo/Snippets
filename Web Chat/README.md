# Web Chat Samples

This folder contains various javascript examples related to the Xenioo Web Chat Channel initialization, configuration and interaction with your page. Check the list below for a brief explanation of each example

# initialize_with_variables
This simple initialization file contains a small variation of the standard script that will initialize your chatbot conversation by injecting a variable. As the new conversation starts, the variable is automatically valued and can be used right away. If the injected variable does not exist, it will be created.  
By injecting variables from the page, you can for example tell your chatbot the currently logged username, the contents of the current shopping cart or the current page info so that it can give meaningful and contextual information.

# referrer_activation
You can use this example if your chatbot needs to activate only when the page is coming from a specific link. If you need to activate your chatbot only on specific pages, you can use alter the script to use window.location.href instead of document.referrer.

# reset_user_conversation
Each Xenioo chatbot use local cookie to track users and recognize them every time they land on the site. If you need to reset the user conversation, you can simply delete the local cookie associated with the bot. Keep in mind that resetting that cookie means that the next time the user will reload the page it will be counted as a new user in the conversation history.

# user_ip_informations
In this example page we're using <a href='http://geobytes.com/iplocator/'>GeoBytes</a> free service to detect the current user ip and pass to our chatbot the detected country and location. The chatbot will be activated automatically as the ip check is done.
