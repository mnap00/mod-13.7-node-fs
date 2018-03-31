var fs = require('fs');
var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
    console.log('\n');
});

fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log(data);
});

fs.writeFile('./text.txt', 'Tekst, który zapiszemy w pliku\n', function(err) {
    if (err) throw err;
    console.log('Saved!');
});
