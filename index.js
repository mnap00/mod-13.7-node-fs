var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
    console.log('\n');
});

fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log('Data before write:'.blue);
    console.log(data);
    fs.writeFile('./text.txt', 'This text will be saved\n', function(err) {
        if (err) throw err;
        console.log('Saved!'.blue);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Saved data:'.blue);
            console.log(data);
        });
    });
});
