let clickUpgrades = {
    pickaxes: {
        price: 1000,
        quantity: 0,
        multiplier: 6
    },
    knives: {
        price: 100,
        quantity: 0,
        multiplier: 2
    }
};

let automaticUpgrades = {
    rovers: {
        price: 5000,
        quantity: 0,
        multiplier: 40
    },
    carts: {
        price: 10,
        quantity: 0,
        multiplier: 20
    }
};
let cheeseCount = 0
let cps = 0


function draw() {

    //  cheese count update  and CPS//
    let cheeseCountElem = document.getElementById('cheese-count')
    cheeseCountElem.innerText = cheeseCount
    let cpsElem = document.getElementById('cps')
    cpsElem.innerText = cps



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

    // this is your multiplier //
    let knifeMulti = document.getElementById('knife-multi')
    knifeMulti.innerText = clickUpgrades.knives.multiplier

    let axeMulti = document.getElementById('axe-multi')
    axeMulti.innerText = clickUpgrades.pickaxes.multiplier

    let cartMulti = document.getElementById('cart-multi')
    cartMulti.innerText = automaticUpgrades.carts.multiplier

    let roverMulti = document.getElementById('rover-multi')
    roverMulti.innerText = automaticUpgrades.rovers.multiplier
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
        cps = Math.round(((autoAdd.multiplier * autoAdd.quantity) / 3))
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

