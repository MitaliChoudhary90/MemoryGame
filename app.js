document.addEventListener('DOMContentLoaded',()=>{
    //card options

    const cardArray=[
        {
            name:'pie',
            img:'./images/pie.jpg'
        },
        {
            name:'momo',
            img:'./images/momo.jpg'
        },
        {
            name:'juice',
            img:'./images/juice.jpg'
        },
        {
            name:'icecream',
            img:'./images/icecream.jpg'
        },
        {
            name:'egg',
            img:'./images/eggs.jpg'
        },
        {
            name:'burger',
            img:'./images/burger.jpg'
        },{
            name:'pie',
            img:'./images/pie.jpg'
        },
        {
            name:'momo',
            img:'./images/momo.jpg'
        },
        {
            name:'juice',
            img:'./images/juice.jpg'
        },
        {
            name:'icecream',
            img:'./images/icecream.jpg'
        },
        {
            name:'egg',
            img:'./images/eggs.jpg'
        },
        {
            name:'burger',
            img:'./images/burger.jpg'
        }

    ]

    cardArray.sort(()=>0.5-Math.random())

    const grid=document.querySelector('.grid');
    const resultDisplay=document.querySelector('#result');
    //create your board
    
    var cardsChosen=[];
    var cardsChosenId=[];
    var cardsWon=[];
    function createBoard(){
        for(let i=0; i<cardArray.length; i++){
            var card= document.createElement('img');
            card.setAttribute('src', './images/blank.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }


    //check for match
    function checkForMatch(){
        var cards=document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0]===cardsChosen[1]){
            alert('You found a match!!!');
            cards[optionOneId].setAttribute('src','./images/white.jpg');
            cards[optionTwoId].setAttribute('src','./images/white.jpg');
            cardsWon.push(cardsChosen);
        }else{
            cards[optionOneId].setAttribute('src','./images/blank.jpg');
            cards[optionTwoId].setAttribute('src','./images/blank.jpg');
            alert('Sorry, Try Again');
        }
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.textContent=cardsWon.length;
        if(cardsWon.length===cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all !!!'
        }
    }

    //flip your card
    function flipCard(){
        var cardId= this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);
        if (cardsChosen.length ===2){
            setTimeout(checkForMatch,500)
        }

    }

    createBoard()
})