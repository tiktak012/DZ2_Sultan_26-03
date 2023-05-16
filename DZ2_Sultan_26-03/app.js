var Starbucks = {
    coffee: {
        latte:'латте из какосового молока ',
        americano:'с мускатным орехом',
        cappuccino: 'сладкая молочная пенка',
    },
    tea:{
        green:'из листьев кеннийского дерева',
        black:'индийский чай',
        bergamot:'прекрансый чай с бергамотом в панкетиках'
    },
}
var order = prompt('Выберите напиток coffee :latte,americano,cappuccino;tea:green,black,bergamot')
if (order in Starbucks.coffee || order in Starbucks.tea ){
    alert('Ваш заказ принят')
}
else {
    alert('Данный напиток не содержится в меню')
}