
const express = require("express");
const app = express();
const port = 8008;
const TIMEOUT = 500;

app.get("/numbers", async (req, res) => {
  const urls = req.query.url;
  console.log(urls);
  var numbers = [];
  for (const url of urls) {
    const response = await fetch(url, { timeout: TIMEOUT });
    if (response.status === 200) {
      const data = await response.json();
      console.log(data.numbers);
      data.numbers.forEach(element => 
        numbers.includes(element) ? console.log() : numbers.push(element)
      );
      
    }
  }
  numbers.sort((a, b) => a - b);
  console.log(numbers);
  res.json({ numbers });
});

app.listen(port, () => {
  console.log(`Number Management HTTP Microservice:`);
  console.log(`Listening on port: ${port}`);
});