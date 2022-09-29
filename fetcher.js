const request = require('request');
const fs = require('fs');
const fetcher = function (url, filePath) {

  request(url, (error, response, body) => {
    console.log('error', error);
    console.log('response', response);
    console.log('body', body);

    fs.writeFile("/vagrant/test.txt", "test writing to file", error => {
      if (error) {
        console.log(error);
      }

    });


  })

} 

fetcher("http://www.example.edu/", "./index.html");