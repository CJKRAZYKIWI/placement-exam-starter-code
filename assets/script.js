// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Cris James Galacgac" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0 //total
//add div
let GbaddDiv= document. querySelector('#add-gb');
let GBminusDiv = document. querySelector ('#minus-gb');
let CCaddDiv = document. querySelector(' #add-cc');
let CCminusDiv = document. querySelector('#minus-cc');
let SSaddDiv = document.querySelector('#add-sugar');
let SSminusDiv = document. querySelector ('#minus-sugar');


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

//create button for gingerbread add
let GBadd = document.createElement ("button");
GBadd.textContent = "Add Gingerbread";
console.log ('new button was added');
GbaddDiv.append (GBadd);

//isolate for vote counts
let GBCell = document.querySelector("#qty-gb");
let CcCell = document. querySelector("#qty-cc");
let SSCell = document.querySelector("#qty-sugar");
let TotalCell = document.querySelector("#qty-total");

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb = gb + 1;
    GBCell.textContent = gb;
    TotalCell.textContent = gb + cc + sugar;

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

//create butt for ginger bread minus
let GBminus = document.createElement ("button");
GBminus.textContent = "Subtract Gingerbread";
console.log ('new button was added');
GBminusDiv.append (GBminus);

//event listener for - on GB
document.getElementById('minus-gb').addEventListener('click', function() {
    gb = gb - 1;
    GBCell.textContent = gb;
    TotalCell.textContent = gb + cc + sugar;
})

//create button for CC add
let CCadd = document.createElement ("button");
CCadd.textContent = "Add Chocolate Chip";
console.log ('CC button was added');
CCaddDiv.append (CCadd);

//event listener for + CC
document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc + 1;
    CcCell.textContent = cc;
    TotalCell.textContent = gb + cc + sugar;
    
})
//create button for CC minus
let CCminus = document.createElement ("button");
CCminus.textContent = "Subtract Chocolate Chip";
console.log ('CC  subtract button was added');
CCminusDiv.append (CCminus);

//event lister for CC minus
document.getElementById('minus-cc').addEventListener('click', function() {
    cc = cc - 1;
    CcCell.textContent = cc;
    TotalCell.textContent = gb + cc + sugar;
})

//create button for SS add
let SSadd = document.createElement ("button");
CCadd.textContent = "Add Sugar Sprinkle";
console.log ('SS button was added');
SSaddDiv.append (SSadd);

//event listener for SS add
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar = sugar + 1;
    SSCell.textContent = sugar;
    TotalCell.textContent = gb + cc + sugar;
})
 //create button for SS minus
 let SSminus = document.createElement ("button");
CCadd.textContent = "Subtract Sugar Sprinkle";
console.log ('SS minus button was added');
SSminusDiv.append (SSminus);

//event listener for SS minus
document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar = sugar - 1;
    SSCell.textContent = sugar;
    TotalCell.textContent = gb + cc + sugar;
})
