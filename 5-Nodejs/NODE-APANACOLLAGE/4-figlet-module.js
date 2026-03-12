const figlet = require('../../node_modules/figlet');

figlet("Swaraj", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});