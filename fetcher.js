const request = require('request');
const fs = require('fs');
const fetcher = function (url, filePath) {
  let downloadSize;

  request(url, (error, response, body) => {
    console.log('error', error);
    console.log('response', response);
    console.log('body', body);
    let bodySize = body.length;

    fs.writeFile(filePath, body, error => {
      if (error) {
        console.log(error);
      }

      console.log(bodySize);
      downloadSize = bodySize;

    });
  });

} 

fetcher("http://www.example.edu/", "./index.html");