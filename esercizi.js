/** Array - esercizio 1
 * 
 * aggiungere un elemento all'inizio dell'array
 * 
 * 1° "hello" 
 * 2° 100
 * 
 * const myArray = [true,null] 
 */

 console.log("Array - esercizio 1\n");

 const myArray =[];

 myArray.unshift('hello');
 myArray.unshift(180);


 console.log(myArray);

 console.log("\n****\n");
 //fine es 1

 /** Array - esercizio 2
  * 
  * const array = [1,2]
  * 
  * aggiungere un elemento ad una specifica index
  * elemento "abc" -> index 10
  * 
  * calcolare la lunghezza finale // 11
  * 
  */
 
 console.log("Array - esercizio 2\n");
 
 const array = [1,2];

//rray.splice(10, 0, "abc");
array[10] = "abc";

let dim = array.length;

console.log(array);

console.log("array di dim "+dim);

console.log("\n****\n");

// fine es 2

/** Array - esercizio 3
 * 
 * 
 * creare un array di 4 oggetti
 * 
 * Ogni oggetto deve avere almeno una marca, un prezzo e un colore
 * 
 * Infine aggiungi un ulteriore oggetto
 * 
 */
console.log("Array - esercizio 3\n");

 const objArray = [
     {
        marca: "Fiat",
        prezzo: 18000,
        colore: "Bianco"
     },
     {
        marca: "Nissan",
        prezzo: 24500,
        colore: "Blu"
     },
     {
        marca: "Renault",
        prezzo: 15000,
        colore: "Rosso"
     },
     {
        marca: "Toyota",
        prezzo: 13600,
        colore: "Verde"
     },
 ];

 let newProd = {
    marca: "Audi",
    prezzo: 130600,
    colore: "Bianco"
 }

 objArray.push(newProd);

 console.log(objArray);

 console.log("\n****\n");

// fine es 3

// Loop 
/* Loop esercizio 1
* generate 4 cifre random, il range è da 1000 a 9999.
* Assicuratevi che questo numero random non si accoppi con alcuno dei numeri nell'array
* se trovare un match hai bisogno di generare 4 nuove cifre
* se non trovi un match, il numero è unico, allora aggiungi nell'array.
*
*
*
* 
const myNumb = [2345, 3245, 7925, 5234, 4532]

*/

console.log("Loop esercizio 1\n");

const myNumb = [2345, 3245, 7925, 5234, 4532];

let  randomNum = Math.floor(Math.random() * (9999 - 1000 +1)) + 1000;

    for (const key in myNumb) {
        if(!myNumb.includes(randomNum)) myNumb.push(randomNum);
        else randomNum = Math.floor(Math.random() * (9999 - 1000 +1)) + 1000;
        }

console.log(myNumb);

console.log("\n****\n");

// fine loop es 1

// Array methods

/** forEach() - esercizio 1 
 *  calcola la somma degli elementi di un array
 * 
 * const numbers = [1,2,3,4,5,6,20,15,30];
 */

console.log("forEach() - esercizio 1\n");

const numbers = [1,2,3,4,5,6,20,15,30];
let sum=0;
const sumfunc = (acc, val) => acc + val;


sum = numbers.reduce(sumfunc);

console.log("la somma e' ",sum);

console.log("\n****\n");

// fine foreach es 1

/**  - esercizio 
 * 
 * realizzare un oggetto che tenga traccia del numero di lettere presente nell'array
 * 
 */

console.log("traccia oggetti\n");
const lettere = ['a','b','a','b','c','d','a','a','b','a','b','c','d','a'];

let tracciaObj = {};


lettere.map( elem =>{
    let current =elem;
    const partial = lettere.filter(elm => elm === current);
    if(tracciaObj.elem == undefined){
        tracciaObj[elem] = partial.length;
    }
})

console.log(tracciaObj);

console.log("\n****\n");

// fine es traccia oggetti

/** - esercizio 
 * da un array di elementi JSON crea un array "posts"
 * 
 
 * 
 */
console.log("json\n");
 const postsJSON = [
          '{ "idPost": 1222, "commenti":1 }',
          '{ "idPost": 6143, "commenti":32}',
          '{ "idPost": 7281, "commenti":12}' 
     ]
 const posts = [];

const post = postsJSON.map(JSON.parse);

console.log(post);

console.log("\n****\n");

// fine array Json

/** esercizio 2

 * 
 * esempio 
 * 
 * (allons y!) => ALLONS Y
 * 
 * (geronimo) => geronimo
 * 
 */
console.log("esercizio 2\n");

let str = "allons y", str2="geronimo";

console.log(str.toUpperCase()+"\n"+ str2.toUpperCase());

console.log("\n****\n");

// fine es 2

/** esercizio 3
 * 
 * partendo da un Array di prodotti genera un array contenente il valore totale dei prodotti presenti
 
 */

 console.log("esercizio 3\n");

 const prodotti = [
          {
             nomeProdotto:"mac book pro",
             prezzo:3000,
             quantita:15
          },
          {
             nomeProdotto:"samsung 9plus",
             prezzo:935,
             quantita:5
          },
          {
             nomeProdotto:"synology",
             prezzo:900,
             quantita:3
          },
     ]

     const res = [];

     for (const key in prodotti) {
        res[key] = {
            nome: prodotti[key].nomeProdotto,
            valoreTotale: prodotti[key].prezzo * prodotti[key].quantita
        }
     }

     console.log(res);

 console.log("\n****\n");

// fine es 3

/** map() - esercizio 4 
 * trasforma un array di stringhe in un array di numeri
*/

 console.log("map() - esercizio 4 \n");

 const stringhe = ['1','2','3','4','5'];
 const intero = [];

 stringhe.map( elemento => {
     intero.push((parseInt(elemento)));
     
 })

 intero.map( k => {
     console.log(k);
 })

 console.log("\n****\n");

// fine es 4

/**  esercizio 1
 * verificare quali utenti anno la maggiore età  
 * 
 */

console.log("maggiorenni - esercizio 1 \n");

const persone = [{name:"Brad",eta:15},{name:"Marika",eta:25},{name:"Roby",eta:17},{name:"Sarah",eta:19}]

const maggiorenni = persone.filter((elem) => elem.eta >= 18)

console.log(maggiorenni);

console.log("\n****\n");

// fine es 1

/** challenge 
   La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola
  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".
  */

  console.log(" challenge tombola magica\n");
  
  const randomInt =[], myInt =[1,14,27,34,41,57,63,79,82,90];
  const msg = [
      { val: 2,
        msg:"ambo" }, 
      { val: 3,
        msg:"terna"},
      { val: 4,
        msg:"quaterna" },
      { val: 5,
        msg:"cinquina"},
      { val: 10,
        msg:"tombola" }
    ];

  let indx= randomInt.length =10, rand = Math.floor(Math.random() * 90) + 1, score = latestscore =0;

  const checkWin = (num) => { 
      if(myInt.includes(num)) 
        return 1;
     return 0;  
    }

    const checkScore = (sc) => { 
        msg.map( ele => {
            if(ele.val == sc)
            console.log("Hai fatto " + ele.msg);
        })
    }

  const playGame = () => {
      latestscore= score=0;
      console.log("*** Giochiamo a Tombola! ***\n\nI tuoi numeri sono: ",myInt,"\n\nEstraimo i numeri...");
      while (indx>0) {
        if(!randomInt.includes(rand,0)){
            randomInt.push(rand);
            console.log("## ",rand," ##");
            score+=checkWin(rand);
            if(score > latestscore){
                checkScore(score);
                latestscore=score;
            }
            indx--;
        }
       
        rand = Math.floor(Math.random() * 90) + 1;
      }
      (score < 2) ? console.log("Mi dispiace. Hai perso!"):0;
    }
  

  playGame();



 console.log("\n****\n");

 // fine challenge

  /** reduce() - esercizio 
   * crea una funzione "popularPostsId" con due parametri "allPosts" e "minimalCommentsQuantity"
   * Questa funzione dovrà ritornare un array di postIds dei posts che hanno una quantità di "commenti" almeno della quantità
   * minima
   */

   console.log("esercizio reduce()");

  const allPosts = [
        {
            title:"Come trovare lavoro come js developer?",
            postId:321,
            comments:25
        },
        {
            title:"È complicato Es6",
            postId:213,
            comments:5
        },
        {
            title:"React o Angular?",
            postId:123,
            comments:12
        },
    ];

    const minimalCommentsQuantity = 10;

    let results = [];


    const popularPostsId = (p, min) => p.reduce((acc, item) => {
            if (item.comments >= min){
                results.push(item.postId);
            }
        },{});
    
    popularPostsId(allPosts, minimalCommentsQuantity);

    console.log(results);

  console.log("\n****\n");

 // fine reduce()  es 1


     /** reduce() - esercizio 2
    * 
    * Create una funzione "quantityByCateg" con un parametro "products"
    * 
    * Questa funzione dovrà ritornare un oggetto con chiavi uguali di categorie e valori uguali alla somma di tutte le quantita
    * in ogni categoria 
    */

   const products = [
    {
        title:"Phone case",
        price:30,
        quantity:2,
        category:"Accessory"
    },
    {
        title:"Samsung 8plus",
        price:800,
        quantity:1,
        category:"Phone"
    },
    {
        title:"Headphones",
        price:70,
        quantity:1,
        category:"Accessory"
    },
    {
        title:"Sport Watch",
        price:100,
        quantity:2,
        category:"Watches"
    },
]

   console.log("reduce() - esercizio 2");

   const quantityByCateg = (products) => {
       console.log("Non ho ben chiara la consegna");
   }

   console.log("\n****\n");
   // fine reduce()  es 2

