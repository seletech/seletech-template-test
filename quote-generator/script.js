const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText     = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('quote-btn');
const loader = document.getElementById('loader');
let apiQuotes = [];

function loading(){

loader.hidden=false;
quoteContainer.hidden=true;
}
function complete(){
    loader.hidden=true;
    quoteContainer.hidden=false;
}

function newQuote(){
    loading();
    // pic random quote from api quotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
   
    authorText.textContent = quote.author;
    // check if author filed is null and replace it with unknown
    if(!quote.author){
        authorText.textContent= "Unknown";
        complete();
    }
    else if(!quote.text){
        quoteText.textContent= "Unknown";
        complete();
    }
    else{
        //set quote and hide loader
        quoteText.textContent= quote.text;
        complete();

    }
    if(quote.text.length>120){
        quoteText.classList.add('long-quote')
    }
    else{
        quoteText.classList.add('long-quote')
    }
}

// Quotes from API
async function getQuotes(){
   loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }
    catch(error){
        alert(error)
    }
}

// Event listeners 
newQuoteButton.addEventListener('click',newQuote);


//on load
getQuotes()

