'use strict';

const Alexa = require('alexa-sdk');

const handlers = {
    'get_address': function () {
        this.response.speak('Sure, my address is 123 Peak Road, Hong Kong.');
        this.emit(':responseReady');
    },
    'get_email': function () {
        this.response.speak('You can write to me at: anton at ivanov dot HK.');
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = 'Just ask me about address or email. ';
        const reprompt = 'Just ask me about our email or address!';

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('ok sorry');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('okay');
        this.emit(':responseReady');
    },
    'Unhandled': function() {
        this.response.speak('Dude, I have no idea what you are talking about. Seriously.');
        this.emit(':responseReady');
    }
};

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
