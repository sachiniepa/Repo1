const fs = require('fs');
fs.readFile('./File1.csv', (err, internFile) => {
    fs.readFile('./File2.csv', (err, externFile) => {
      var internLines = internFile.toString().split('\n');
      var externLines = externFile.toString().split('\n');
      internLines.forEach(function(iLine){
        var internCells = iLine.split(',');
        externLines.forEach(function(eLine){
            var externCells = eLine.split(',');
            if(internCells[0].indexOf(externCells[0])!=-1){
                console.log(internCells[0] + ' ' + internCells[1] + ' ' + internCells[2] + '\n');
            }
        })
        /*
        if(externLines.indexOf(internCells[0]) > -1){
         // fs.appendFileSync('public/md5-data/blacklist.csv', internCells[1] + '\n');
         console.log(internCells[1] + '\n');
        }*/
      })
    })
  })