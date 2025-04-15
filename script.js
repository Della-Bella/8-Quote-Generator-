

const quote = document.getElementById("quote"); //p= quote

const author= document.getElementById("author"); //p= author

const btnQuote = document.getElementById("newQuote"); // btn = newquote

const twitter= document.getElementById("twitter"); //btn= twitter

const api_url = "https://api.quotable.io/random";

async function getQuote(url){
    const response= await fetch(url);
    var data= await response.json();
    quote.innerHTML= data.content;
    author.innerHTML= data.author;
    
}

getQuote(api_url);
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " - " + author.innerHTML,"Tweet window", "width=600,height=400" );
}

  