const Sentiment = require("sentiment");
const sentiment = new Sentiment();
const result = sentiment.analyze("Cats are Stupid");

console.log(result);
