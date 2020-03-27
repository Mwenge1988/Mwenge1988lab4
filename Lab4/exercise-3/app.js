// NodeJs: USING THE EVENTS AND EMITTER

// Using require include the event module and use to the Event Emitter to trigger using the on() and emit() events.e:

var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an Event Handler to handle when the event is raised. Event handler written as a function expression has the following signature. It can be wired up with events in the following way:

var alarm = function () {
    console.log('Alarm has been triggered!');
};

var phone = function () {
    console.log('Call the police!');
};

eventEmitter.on('call', alarm);
eventEmitter.on('call2', phone);
eventEmitter.emit('call');
eventEmitter.emit('call2');

// Using require and the Event Emitter, create an Event Handler to raise an alarm and trigger it using the emit() keyword. The console output is below: