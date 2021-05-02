document.addEventListener('DOMContentLoaded', () => {
  /*Person Object Array*/
  const cardArray = [
    { 
      name: "Albin",
      img: "img/Albin.jpg"
    },
    { 
      name: "Andrea",
      img: "img/Andrea.jpg"
    },
    { 
      name: "Andreas",
      img: "img/Andreas.jpg"
    },
    { 
      name: "Carl",
      img: "img/Carl.jpg"
    },
    { 
      name: "David",
      img: "img/David.jpg"
    },
    { 
      name: "Einar",
      img: "img/Einar.jpg"
    },
    { 
      name: "Johan",
      img: "img/Johan.jpg"
    },
    { 
      name: "Julia",
      img: "img/Julia.jpg"
    },
    { 
      name: "Louis",
      img: "img/Louis.jpg"
    },
    { 
      name: "Ludvig",
      img: "img/Ludvig.jpg"
    },
    { 
      name: "Madelene",
      img: "img/Madelene.jpg"
    },
    { 
      name: "Mattis",
      img: "img/Mattis.jpg"
    },
    { 
      name: "Nestor",
      img: "img/Nestor.jpg"
    },
    { 
      name: "Nils",
      img: "img/Nils.jpg"
    },
    { 
      name: "Olof",
      img: "img/Olof.jpg"
    },
    { 
      name: "Robin",
      img: "img/Robin.jpg"
    },
    { 
      name: "Simon",
      img: "img/Simon.jpg"
    },
    { 
      name: "Stefan",
      img: "img/Stefan.jpg"
    },
    { 
      name: "Parkell",
      img: "img/Parkell.jpg"
    },
    { 
      name: "Albin",
      img: "img/Albin.jpg"
    },
    { 
      name: "Andrea",
      img: "img/Andrea.jpg"
    },
    { 
      name: "Andreas",
      img: "img/Andreas.jpg"
    },
    { 
      name: "Carl",
      img: "img/Carl.jpg"
    },
    { 
      name: "David",
      img: "img/David.jpg"
    },
    { 
      name: "Einar",
      img: "img/Einar.jpg"
    },
    { 
      name: "Johan",
      img: "img/Johan.jpg"
    },
    { 
      name: "Julia",
      img: "img/Julia.jpg"
    },
    { 
      name: "Louis",
      img: "img/Louis.jpg"
    },
    { 
      name: "Ludvig",
      img: "img/Ludvig.jpg"
    },
    { 
      name: "Madelene",
      img: "img/Madelene.jpg"
    },
    { 
      name: "Mattis",
      img: "img/Mattis.jpg"
    },
    { 
      name: "Nestor",
      img: "img/Nestor.jpg"
    },
    { 
      name: "Nils",
      img: "img/Nils.jpg"
    },
    { 
      name: "Olof",
      img: "img/Olof.jpg"
    },
    { 
      name: "Robin",
      img: "img/Robin.jpg"
    },
    { 
      name: "Simon",
      img: "img/Simon.jpg"
    },
    { 
      name: "Stefan",
      img: "img/Stefan.jpg"
    },
    { 
      name: "Parkell",
      img: "img/Parkell.jpg"
    }
  ]

  /*Shuffle Array*/
  cardArray.sort(() => 0.5 - Math.random())

  /*all selector from checkboxes into a dynmaic list*/
  let divCardPos = document.querySelectorAll(".memory-card");
  
  /*Getting result*/
  const pointsDisplay = document.querySelector('#result');

  /*
    2 empty array list to store selected cards and checkbox ID
  */
  let chosenCards = [];
  let cardsId =[];
  let points = 0;

  /*
    For loop with addEventlistener
    adding css with innerHTML to overrite background data
    pushing names from cardArray and id from variable num incremnented loop + 1
  */
  for (let i = 0; i < divCardPos.length; i++) 
  {
      let check = false;
      let num = i + 1;

      divCardPos[i].addEventListener('click', function() {
        if (!check) {
          divCardPos[i].innerHTML += "<style>#id" + num + "{  background-image: url(" + cardArray[i].img +");   background-repeat: no-repeat;   background-size: cover;}" 
          chosenCards.push(cardArray[i].name)
          cardsId.push('id' + num.toString());
          check = true;
        } 
        else 
        {
          divCardPos[i].innerHTML += "<style>#id" + num + "{  background-image: url(img/blank.jpg);   background-repeat: no-repeat;   background-size: cover;}" 
          check = false;
        } 
        checkCards();
      });
  }
      /*
        checkCards
        By getting the names of the cards from chosenCards array, i am now able to get the cards matches.
        if(same cards) - increment points variable and "clear" the array
        else - make css display to none , added also a setTimeout 
      */
    function checkCards () {
      if(chosenCards.length === 2)
      {
        if(chosenCards[0] === chosenCards[1])
        {
        points++;
        pointsDisplay.textContent = 'Score: ' + points;              
        chosenCards = [];
        cardsId = [];         
        }
        else
        {
          setTimeout(function(){
            document.getElementById(cardsId[0]).innerHTML += "<style>#" + cardsId[0] + "{  background-image: url(img/blank.jpg);   background-repeat: no-repeat;   background-size: cover;}" 
            document.getElementById(cardsId[1]).innerHTML += "<style>#" + cardsId[1] + "{  background-image: url(img/blank.jpg);   background-repeat: no-repeat;   background-size: cover;}"                          
            chosenCards = [];
            cardsId =[];  

            },800);

            setTimeout(function(){
              alert("Try again!");
            },300);
        } 

      } 
    }
  console.log("Hey Golden Fish! Stop Hack the System, I Challange you to be a shark ;)")
  console.log("Baby shark! doh doh doh!")

      /*
        Usefull logs for debuggning
        // console.log(getImg); 
        // console.log('id' + num); 
        // console.log(chosenCards[0])
        // console.log(chosenCards[1]) 
        // console.log(cardsId[0])
        // console.log(cardsId[1])
        // console.log("Checkbox is not checked..");
        // console.log("Checkbox is checked..");
        //console.log("<img src='"+cardArray[i].img+"' alt='"+cardArray[i].name+"'>")
      */
      
});