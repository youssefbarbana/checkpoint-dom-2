
    var plus=document.getElementById("plus"),
        minus =document.getElementById("minus"),
        aff=document.getElementById("affiche"),
        finalPric=document.getElementById("finalprice"),
        price =1379000,
        submit=document.getElementById("sub")
        number=0,
        min=0,
        max=12,
        delete1 =document.getElementById("delete"),
        item=document.getElementById("item1"),
quantity=document.getElementById("quantity1");
minus.onclick = function(){
    if(number>min){
        number = number - 1;
        aff.innerText = number;
        
    }
}
plus.onclick  =function(){
    if(number<max){
        number=number + 1;
        aff.innerText = number;
        
    }
}
delete1.onclick=function(){
    item.innerText=quantity.remove;
}

    
    

var bt = document.getElementById("like1");
    
    bt.addEventListener("click",function(){
        if(bt.style.color=='black'){
            bt.style.color='red'
        }
    else{
        bt.style.color='black'
    }
    
    })



    var btt = document.getElementById("like2");
    
    btt.addEventListener("click",function(){
        if(btt.style.color=='black'){
            btt.style.color='red'
        }
    else{
        btt.style.color='black'
    }
    
    })

   
        var plus1=document.getElementById("plus1"),
            minus1 =document.getElementById("minus1"),
            aff1=document.getElementById("affichage1"),
            finalPric=document.getElementById("finalprice"),
            price1 =176.80,
            submit=document.getElementById("sub"),
            delete2 =document.getElementById("delete2"),
            item2=document.getElementById("item2"),
    quantity2=document.getElementById("quantity2"),
            
            
            number1=0,
            min1=0,
            max1=12;
    
    minus1.onclick = function(){
        if(number1>min1){
            number1 = number1 - 1;
            aff1.innerText = number1;
            
        }
    }
    plus1.onclick  =function(){
        if(number1<max1){
            number1=number1 + 1;
            aff1.innerText = number1;
            
        }
    }
delete2.onclick=function(){
item2.innerText=quantity2.remove;
}
    


var bt3 = document.getElementById("like3");
    
bt3.addEventListener("click",function(){
if(bt3.style.color=='black'){
bt3.style.color='red'
        }
    else{
        bt3.style.color='black'
    }
    
    })

var minus3 =document.getElementById("minus3"),
   plus3=document.getElementById("plus3"),
   aff3=document.getElementById("aff3"),
   number3=0,
   min3=0,
   max3=30,
   price3=249.00,
   finalPric=document.getElementById("finalprice"),
   submit=document.getElementById("sub"),
   delete3 =document.getElementById("delete3"),
            item3=document.getElementById("item3"),
    quantity3=document.getElementById("quantity3");


minus3.addEventListener("click",function(){
    if(number3>min3){
        number3=number3 - 1;
        aff3.innerText=number3;
    }
})
plus3.addEventListener("click",function(){
if(number3<max3){
    number3=number3 + 1;
    aff3.innerText=number3;
}




})
submit.onclick=function(){
    finalPric.innerText=number3 * price3 + number * price +number1 * price1;
}
delete3.onclick=function(){
    item3.innerText=quantity3.remove;
}












    
      