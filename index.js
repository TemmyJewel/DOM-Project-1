// .............defining variables...............

const quant1 = document.getElementById("quantity1");
const quant2 = document.getElementById("quantity2");
const quant3 = document.getElementById("quantity3");
const quant4 = document.getElementById("quantity4");
const quant5 = document.getElementById("quantity5");

const iBtn1 = document.getElementById("ibtn1");
const iBtn2 = document.getElementById("ibtn2");
const iBtn3 = document.getElementById("ibtn3");
const iBtn4 = document.getElementById("ibtn4");
const iBtn5 = document.getElementById("ibtn5");

const dBtn1 = document.getElementById("dbtn1");
const dBtn2 = document.getElementById("dbtn2");
const dBtn3 = document.getElementById("dbtn3");
const dBtn4 = document.getElementById("dbtn4");
const dBtn5 = document.getElementById("dbtn5");

const hrt1 = document.getElementById("heart1");
const hrt2 = document.getElementById("heart2");
const hrt3 = document.getElementById("heart3");
const hrt4 = document.getElementById("heart4");
const hrt5 = document.getElementById("heart5");

const subtotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const shipping = document.getElementById("shipping");
const total = document.getElementById("total");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

// Prices variables
let price1 = Number(document.getElementById("price1")?.textContent || 0);
let price2 = Number(document.getElementById("price2")?.textContent || 0);
let price3 = Number(document.getElementById("price3")?.textContent || 0);
let price4 = Number(document.getElementById("price4")?.textContent || 0);
let price5 = Number(document.getElementById("price5")?.textContent || 0);

// Function to calculate total
function updatesubtot() {
    let miniprice1 = price1 * count1;
    let miniprice2 = price2 * count2;
    let miniprice3 = price3 * count3;
    let miniprice4 = price4 * count4;
    let miniprice5 = price5 * count5;

    let stotal = miniprice1 + miniprice2 + miniprice3 + miniprice4 + miniprice5;
    let sta = stotal * 0.05;
    let ship = Number(shipping.textContent);
    let tots = stotal + sta + ship;
    total.textContent = tots.toFixed(2);
    tax.textContent = sta.toFixed(2);
    subtotal.textContent = stotal.toFixed(2); // Format to 2 decimal places
}

// .............Increases and decreases quantity...............
iBtn1.onclick = function() {
    count1++;
    quant1.textContent = count1;
    updatesubtot();
};

dBtn1.onclick = function() {
    if (count1 > 0) {
        count1--;
        quant1.textContent = count1;
        updatesubtot();
    }
};

iBtn2.onclick = function() {
    count2++;
    quant2.textContent = count2;
    updatesubtot();
};

dBtn2.onclick = function() {
    if (count2 > 0) {
        count2--;
        quant2.textContent = count2;
        updatesubtot();
    }
};

iBtn3.onclick = function() {
    count3++;
    quant3.textContent = count3;
    updatesubtot();
};

dBtn3.onclick = function() {
    if (count3 > 0) {
        count3--;
        quant3.textContent = count3;
        updatesubtot();
    }
};

iBtn4.onclick = function() {
    count4++;
    quant4.textContent = count4;
    updatesubtot();
};

dBtn4.onclick = function() {
    if (count4 > 0) {
        count4--;
        quant4.textContent = count4;
        updatesubtot();
    }
};

iBtn5.onclick = function() {
    count5++;
    quant5.textContent = count5;
    updatesubtot();
};

dBtn5.onclick = function() {
    if (count5 > 0) {
        count5--;
        quant5.textContent = count5;
        updatesubtot();
    }
};

// .............Like Heart...............
hrt1.onclick = function() {
    hrt1.style.color = hrt1.style.color === "red" ? "#5f5858" : "red";
};

hrt2.onclick = function() {
    hrt2.style.color = hrt2.style.color === "red" ? "#5f5858" : "red";
};

hrt3.onclick = function() {
    hrt3.style.color = hrt3.style.color === "red" ? "#5f5858" : "red";
};

hrt4.onclick = function() {
    hrt4.style.color = hrt4.style.color === "red" ? "#5f5858" : "red";
};

hrt5.onclick = function() {
    hrt5.style.color = hrt5.style.color === "red" ? "#5f5858" : "red";
};

// ................Remove buttons..............
document.getElementById("rmv1").onclick = function() {
    document.getElementById("box1").remove();
    count1 = 0;
    quant1.textContent = count1;
    updatesubtot();
};

document.getElementById("rmv2").onclick = function() {
    document.getElementById("box2").remove();
    count2 = 0;
    quant2.textContent = count2;
    updatesubtot();
};

document.getElementById("rmv3").onclick = function() {
    document.getElementById("box3").remove();
    count3 = 0;
    quant3.textContent = count3;
    updatesubtot();
};

document.getElementById("rmv4").onclick = function() {
    document.getElementById("box4").remove();
    count4 = 0;
    quant4.textContent = count4;
    updatesubtot();
};

document.getElementById("rmv5").onclick = function() {
    document.getElementById("box5").remove();
    count5 = 0;
    quant5.textContent = count5;
    updatesubtot();
};







    


