## JSON to use to call a Xenioo chatbot from within a Facebook Ads

Just replace "title", "image-url", "subtitle" and "payload" with the correct values and you're ready to go.

The **"payload"** must be the API Token you'll find in the Behavour settings of your Xenioo chatbot.

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
                                "payload": "**<PUT HERE THE BEHAVIOUR API TOKEN>**"
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
