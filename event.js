var events = require ('events');
var eventEmitter = new events.EventEmitter ();
eventEmitter.on ('print', function (n1, n2) {
    console.log ('printing sum..........' + (n1+n2))
})


eventEmitter.emit('print' , 1 , 2 );