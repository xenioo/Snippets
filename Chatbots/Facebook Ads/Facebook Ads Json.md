## JSON to use to call a Xenioo chatbot from within a Facebook Ads

Just replace "title", "image-url", "subtitle" and "payload" with the correct values and you're ready to go.

It is important to put :: as the last characters of the "payload".

```javascript
{
    "message": {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "ANY TITLE",
                        "image_url": "ANY IMAGE URL>",
                        "subtitle": "ANY SUBTITLE",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "CALL TO ACTION",
                                "payload": "<PUT HERE THE BEHAVIOUR API TOKEN>::"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "user_edit": true
}
```

The **"payload"** must be the API Token you'll find in the Behavour settings of your Xenioo chatbot.

![alt text](https://github.com/xenioo/Snippets/blob/master/Chatbots/Facebook%20Ads/Xenioo%20Behaviour%20API%20Token.png)
