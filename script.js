// Initialisation DOM
let quoteContainer=document.getElementById("quoteDisplay");
let authorDisplay = document.getElementById("authorDisplay");
let newQuoteBtn = document.getElementById("newQuoteBtn");
let cpyBtn = document.getElementById("copyBtn");

// la fonction asynchrone qui recup les données via l'API

async function getQuote(){
 try {
  newQuoteBtn.querySelector("i").classList.add("active");
  let randomQuote = await fetch("https://api.api-ninjas.com/v2/randomquotes",{ //fetch va chercher le quote dans le serveur de api Ninjas via l'API(lien)
   method:"GET",
   headers:{
    "X-Api-Key": "xFKAf3F0r6bsVFhn7BtHzQ==Mrg6IZKlh4CR3xDu" // la clé API 
    }
  })
  let randomQuoteJson = await randomQuote.json()//transformer en json la valeur obtenue
   let newQuote = randomQuoteJson[0]
  showQuote(newQuote.quote, newQuote.author);
  newQuoteBtn.querySelector("i").classList.remove("active");
  return randomQuoteJson[0].quote;
 }catch(e){console.log(e.message)}
}

//Quand on clique sur new Quote
newQuoteBtn.addEventListener("click", ()=>{
 getQuote();
})

// Quand on clique sur copier
cpyBtn.addEventListener("click", ()=>{
 cpy(`${quoteContainer.textContent} - ${authorDisplay.textContent}`);
  cpyBtn.querySelector("i").className = "fa-solid fa-check";
     setTimeout(()=>{
       cpyBtn.querySelector("i").className = "fa-solid fa-copy";
       console.log(cpyBtn.querySelector("i").clasnName);
      },1500);
})
// la fonction pour afficher le quote 
function showQuote(quote,author){
 quoteContainer.innerHTML= quote;
 authorDisplay.innerHTML=author;
}

// fonction copier 
function cpy(texte){
   navigator.clipboard.writeText(texte)
       .then(() => {
    })
    .catch(e => {
      console.console.log(e)
    });
    console.log(texte);
}


// Initialisation: 
getQuote();