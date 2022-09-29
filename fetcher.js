const request = require('request');
const fs = require('fs');
const fetcher = function (url, filePath) {
  request(url, (error, response, body) => {
    let dowloadSize = body.length;
    
    fs.writeFile(filePath, body, error => {
      if (error) {
        console.log(error);
      }

      console.log(`Downloaded and saved ${dowloadSize} bytes to ${filePath}`);

    });
  });

} 

fetcher("http://www.example.edu/", "./index.html");