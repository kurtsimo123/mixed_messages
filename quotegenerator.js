var quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
 "The way to get started is to quit talking and begin doing. -Walt Disney","Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover. -Mark Twain", "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking. -Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt","May the Force be with you. -Star Wars, 1977","My mama always said life was like a box of chocolates. You never know what you're gonna get. -Forrest Gump, 1994",
  "It's not who I am underneath, but what I do, that defines me. -Batman Begins,2005","Happiness is only real when shared. -Christopher McCandless"];
function randomQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

console.log(quotes);