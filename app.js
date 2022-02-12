let clickUpgrades = {
    pickaxes: {
        price: 4,
        quantity: 0,
        multiplier: 1
    },
    knives: {
        price: 2,
        quantity: 0,
        multiplier: 2
    }
};

let automaticUpgrades = {
    rovers: {
        price: 5,
        quantity: 0,
        multiplier: 40
    },
    carts: {
        price: 2,
        quantity: 0,
        multiplier: 20
    }
};
let cheeseCount = 0

function draw() {

    //  cheese count update //
    let cheeseCountElem = document.getElementById('cheese-count')
    cheeseCountElem.innerText = cheeseCount

    // this is your inventory //
    let knifeElem = document.getElementById('knife-count')
    knifeElem.innerText = clickUpgrades.knives.quantity

    let pickElem = document.getElementById('pick-count')
    pickElem.innerText = clickUpgrades.pickaxes.quantity

    let cartElem = document.getElementById('cart-count')
    cartElem.innerText = automaticUpgrades.carts.quantity

    let roverElem = document.getElementById('rover-count')
    roverElem.innerText = automaticUpgrades.rovers.quantity

    // This is your store//
    let knifeCost = document.getElementById('knife-cost')
    knifeCost.innerText = clickUpgrades.knives.price

    let axeCost = document.getElementById('axe-cost')
    axeCost.innerText = clickUpgrades.pickaxes.price

    let cartCost = document.getElementById("cart-cost")
    cartCost.innerText = automaticUpgrades.carts.price

    let roverCost = document.getElementById('rover-cost')
    roverCost.innerText = automaticUpgrades.rovers.price
}

// click upgrades logic //
function buyClick(key) {
    let clickItem = clickUpgrades[key]
    if (cheeseCount < clickItem.price) { return }
    cheeseCount -= clickItem.price
    clickItem.quantity++
    clickItem.price = (clickItem.price * 2)
    draw()
}
//  auto upgrades logic//
function buyAuto(key) {
    let autoItem = automaticUpgrades[key]
    if (cheeseCount < autoItem.price) { return }
    cheeseCount -= autoItem.price
    autoItem.quantity++
    autoItem.price = (autoItem.price * 2)
    draw()
}

//  click upgrade adds to cheese//
function clickAdd() {
    for (let key in clickUpgrades) {
        let clickAdd = clickUpgrades[key]
        cheeseCount += (clickAdd.multiplier * clickAdd.quantity)
    }
}

//  auto upgrade adds to interval at bottom of JS //
function autoAdd() {
    for (let key in automaticUpgrades) {
        let autoAdd = automaticUpgrades[key]
        cheeseCount += (autoAdd.multiplier * autoAdd.quantity)
    }
    draw()
}


//  manual mining //
function mine() {
    cheeseCount += 1
    clickAdd()
    draw()
}

let autoInterval = setInterval(autoAdd, 3000)
