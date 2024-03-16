const cowsay = require("cowsay");
let info = require("./information.js");

console.log(cowsay.say({
    text : `Hello I'm ${info.name} from ${info.campus}`,
    e : "oO",
    T : "U "
}));

// or cowsay.think()