const butn = document.getElementById("butn")
const btn1 = document.getElementById("btn1")
const but =document.getElementById("but")
const btn2 = document.getElementById("btn2")
const bttn = document.getElementById("bttn")
const btn3 = document.getElementById("btn3")
const bto = document.getElementById("bto")
const btn4 = document.getElementById("btn4")
const press = document.getElementById("press")
const btn5 = document.getElementById("btn5")
const pres = document.getElementById("pres")
const btn6 = document.getElementById("btn6")
const pre = document.getElementById("pre")
const btn7 = document.getElementById("btn7")
const touch = document.getElementById("touch")
const btn8 = document.getElementById("btn8")
const touc = document.getElementById("touc")
const btn9 = document.getElementById("btn9")
const total = document.getElementById("total")
const waff = document.getElementById("waffle")
const neg = document.getElementById("neg")
const pos = document.getElementById("pos")
const zero = document.getElementById("zero")
const cart= document.getElementById("cart")
const brul = document.getElementById("brulee")
const zeero = document.getElementById("zeero")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const macar = document.getElementById("macaron")
const zeer = document.getElementById("zeer")
const deduc = document.getElementById("deduc")
const add = document.getElementById("add")
const tiram = document.getElementById("tiramisu")
const zee = document.getElementById("zee")
const subt = document.getElementById("subt")
const comb = document.getElementById("comb")
const bakla = document.getElementById("baklava")
const zer = document.getElementById("zer")
const reduce = document.getElementById("reduce")
const increase = document.getElementById("increase")
const merin = document.getElementById("meringue")
const empty = document.getElementById("empty")
const negati = document.getElementById("negati")
const posit = document.getElementById("posit")
const caker = document.getElementById("cake")
const cakezero = document.getElementById("cakezero")
const less = document.getElementById("less")
const more = document.getElementById("more")
const brown = document.getElementById("brownie")
const brownzero = document.getElementById("brownzero")
const debt = document.getElementById("debt")
const gain = document.getElementById("gain")
const pan = document.getElementById("panna")
const pannazero = document.getElementById("pannazero")
const low = document.getElementById("low")
const rise = document.getElementById("rise")
const box = document.getElementById("null")

// null.addEventListener("click",()=>{
//     null.style.visibility = "hidden";
//     console.log(null);
    
// })



let waffle = {
    price : 6.50
}



btn1.addEventListener("click",()=>{
    btn1.style.visibility = "hidden";
    // null.style.visibility = "hidden";
    cart.innerText = Number(cart.innerText) +1
    zero.innerText = Number (zero.innerText) + 1
    let answer =  Number(total.innerText)+ waffle.price
    total.innerText = Number (total.innerText ) + waffle.price
    box.style.visibility = "hidden";


 })
     pos.addEventListener("click", ()=>{
     zero.innerText = Number(zero.innerText) + 1 
     total.innerText = Number (total.innerText ) + waffle.price
      cart.innerText = Number(cart.innerText) +1



 })
     neg.addEventListener("click",()=>{
     zero.innerText =Number(zero.innerText) - 1
     total.innerText = Number (total.innerText - waffle.price)
     cart.innerText = Number (cart.innerText) - 1

 })

brulee = {
    price : 7.00
}

btn2.addEventListener("click",()=>{
    btn2.style.visibility = "hidden";

    cart.innerText=Number(cart.innerText) +1
    zeero.innerText = Number (zeero.innerText) + 1
    let answer = Number(total.innerText) + brulee.price
    total.innerText = Number(total.innerText) + brulee.price
    // console.log(answer);
    box.style.visibility = "hidden";

    
})

plus.addEventListener("click", ()=>{
    zeero.innerText = Number(zeero.innerText) + 1 
    total.innerText = Number (total.innerText ) + brulee.price
    cart.innerText = Number(cart.innerText) +1

 })

 minus.addEventListener("click",()=>{
    zeero.innerText =Number(zeero.innerText) - 1
    total.innerText = Number (total.innerText - brulee.price)
    cart.innerText = Number (cart.innerText) - 1

})

macaron = {
    price : 8.00
}

btn3.addEventListener("click", ()=>{
    btn3.style.visibility = "hidden"

    cart.innerText=Number(cart.innerText) +1
    zeer.innerText = Number (zeer.innerText) + 1
    let answer = Number(total.innerText) + macaron.price
    total.innerText = Number(total.innerText) + macaron.price
    // console.log(answer);
    box.style.visibility = "hidden";


})

add.addEventListener("click", ()=>{
    zeer.innerText = Number(zeer.innerText) + 1
    total.innerText = Number(total.innerText) + macaron.price
    cart.innerText = Number(cart.innerText) + 1
})
deduc.addEventListener("click",()=>{
    zeer.innerText = Number(zeer.innerText) -1
    total.innerText = Number(total.innerText - macaron.price)
    cart.innerText = Number (cart.innerText) - 1
})


tiramisu = {
    price: 5.50
}

btn4.addEventListener("click",()=>{
    btn4.style.visibility = "hidden"

    cart.innerText = Number(cart.innerText) + 1
    zee.innerText = Number(zee.innerText) + 1
    let answer = Number(total.innerText) + tiramisu.price
    total.innerText = Number(total.innerText) + tiramisu.price
    // console.log(answer);
    box.style.visibility = "hidden";

    

})
comb.addEventListener("click", ()=>{
    zee.innerText =Number(zee.innerText) + 1
    total.innerText = Number(total.innerText) + tiramisu.price
    cart.innerText = Number(cart.innerText) + 1
})
subt.addEventListener("click", ()=>{
    zee.innerText = Number(zee.innerText) - 1
    total.innerText = Number(total.innerText) - tiramisu.price
    cart.innerText = Number(cart.innerText) - 1

    
})

baklava ={
    price : 4.00
}

btn5.addEventListener("click",()=>{
    btn5.style.visibility = "hidden"

    cart.innerText = Number(cart.innerText) + 1
    zer.innerText = Number(zer.innerText) + 1
    let answer = Number(total.innerText) + baklava.price
    total.innerText = Number(total.innerText) + baklava.price
    // console.log(answer);
    box.style.visibility = "hidden";

    
})
increase.addEventListener("click", ()=>{
    zer.innerText =Number(zer.innerText) + 1
    total.innerText = Number(total.innerText) + baklava.price
    cart.innerText = Number(cart.innerText) + 1
})
reduce.addEventListener("click", ()=>{
    zer.innerText = Number(zer.innerText) - 1
    total.innerText = Number(total.innerText) - baklava.price
    cart.innerText = Number(cart.innerText) - 1

    
})

meringue = {
    price : 5.00
}


btn6.addEventListener("click",()=>{
    btn6.style.visibility = "hidden"

    cart.innerText = Number(cart.innerText) + 1
    empty.innerText = Number(empty.innerText) + 1
    let answer = Number(total.innerText) + meringue.price
    total.innerText = Number(total.innerText) + meringue.price
    // console.log(answer);
    box.style.visibility = "hidden";

})

posit.addEventListener("click", ()=>{
    empty.innerText =Number(empty.innerText) + 1
    total.innerText = Number(total.innerText) + meringue.price
    cart.innerText = Number(cart.innerText) + 1
})
negati.addEventListener("click", ()=>{
    empty.innerText = Number(empty.innerText) - 1
    total.innerText = Number(total.innerText) - meringue.price
    cart.innerText = Number(cart.innerText) - 1

    
})

cake = {
    price : 4.50
}
btn7.addEventListener("click",()=>{
    btn7.style.visibility = "hidden"

    cart.innerText = Number(cart.innerText) + 1
    cakezero.innerText = Number(cakezero.innerText) + 1
    let answer = Number(total.innerText) + cake.price
    total.innerText = Number(total.innerText) + cake.price
    // console.log(answer);
    box.style.visibility = "hidden";

})

more.addEventListener("click", ()=>{
    cakezero.innerText =Number(cakezero.innerText) + 1
    total.innerText = Number(total.innerText) + cake.price
    cart.innerText = Number(cart.innerText) + 1
})

less.addEventListener("click", ()=>{
    cakezero.innerText = Number(cakezero.innerText) - 1
    total.innerText = Number(total.innerText) - cake.price
    cart.innerText = Number(cart.innerText) - 1

    
})


brownie = {
    price : 5.50
}
btn8.addEventListener("click",()=>{
    btn8.style.visibility = "hidden"

    cart.innerText = Number(cart.innerText) + 1
    brownzero.innerText = Number(brownzero.innerText) + 1
    let answer = Number(total.innerText) + brownie.price
    total.innerText = Number(total.innerText) + brownie.price
    box.style.visibility = "hidden";

})

gain.addEventListener("click", ()=>{
    brownzero.innerText = Number(brownzero.innerText) + 1
    total.innerText = Number(total.innerText) + brownie.price
    cart.innerText = Number(cart.innerText) + 1
})

debt.addEventListener("click", ()=>{
    brownzero.innerText = Number(brownzero.innerText) - 1
    total.innerText = Number(total.innerText) - brownie.price
    cart.innerText = Number(cart.innerText) - 1

    
})


panna = {
    price : 6.50
}
btn9.addEventListener("click",()=>{
    btn9.style.visibility = "hidden"

    cart.innerText = Number(cart.innerText) + 1
    pannazero.innerText = Number(pannazero.innerText) + 1
    let answer = Number(total.innerText) + panna.price
    total.innerText = Number(total.innerText) + panna.price
    box.style.visibility = "hidden";

})

rise.addEventListener("click", ()=>{
    pannazero.innerText =Number(pannazero.innerText) + 1
    total.innerText = Number(total.innerText) + panna.price
    cart.innerText = Number(cart.innerText) + 1
})

low.addEventListener("click", ()=>{
    pannazero.innerText = Number(pannazero.innerText) - 1
    total.innerText = Number(total.innerText) + panna.price
    cart.innerText = Number(cart.innerText) - 1

    
})
