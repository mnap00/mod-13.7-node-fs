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
    fs.appendFile('./text.txt', '\nThis text will be saved', function(err) {
        if (err) throw err;
        console.log('Saved!'.blue);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Saved data:'.blue);
            console.log(data);
        });
    });
});

fs.readdir('./', function (err, files) {
    var dir = '';
    for (var i = 0; i < files.length; i++) {
        dir += files[i] + '\n';
    }
    fs.writeFile('./dir.txt', dir, function(err) {
        if (err) throw err;
    });
});
