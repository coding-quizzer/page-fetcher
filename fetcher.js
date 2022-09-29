const request = require('request');
const fs = require('fs');
const fetcher = function (url, filePath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
    }

    let downloadSize = body.length;
    
    fs.writeFile(filePath, body, error => {
      if (error) {
        console.log(error);
      }

      console.log(`Downloaded and saved ${downloadSize} bytes to ${filePath}`);

    });
  });

} 

const args = process.argv.slice(2);
let urlIn = args[0];
let filePathIn = args[1];
fetcher(urlIn, filePathIn);