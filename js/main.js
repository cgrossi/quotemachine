function updatePage(){
    // Update the page color, quote text, and author name

    const color = getRandomColor();
    changePrimaryColor(color);

    const newQuote = getNewQuote();
    document.getElementById('quote').innerText = newQuote.quote;
    document.getElementById('author').innerText = newQuote.author;
}


function getRandomColor() {
    // Return a random color from the array

    const colors = [
        'red',
        'blue',
        'green'
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}


function changePrimaryColor(color) {
    // Change the appropriate color attribute for each object

    document.getElementsByTagName('body')[0].style.backgroundColor = color;
    document.getElementById('quote').style.color = color;
    document.getElementById('author').style.color = color;
    document.getElementById('generate').style.color = color;
}


function getNewQuote() {
    // Return a random object from storage that has two properties: author and quote

    const quotes = [
        {
            author: "Princess Diana",
            quote: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you."
        },
        {
            author: "Ron Hall",
            quote: "Together we can change the world, just one random act of kindness at a time."
        },
        {
            author: "Richard Dawkins",
            quote: "Natural selection is anything but random."
        },
        {
            author: "Mihaly Csikszentmihalyi",
            quote: "Goals transform a random walk into a chase."
        },
        {
            author: "Michelle Ryan",
            quote: "Sometimes in life, random things can blind-side you."
        },
    ];

    return quotes[Math.floor(Math.random() * quotes.length)];
}


document.getElementById('generate').onclick = updatePage;


// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10));
