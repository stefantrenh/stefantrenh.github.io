
/*Getting slides object array of childrens*/
let slides = document.getElementById("slider").children;
let count = 0;

//console.log(slides[0].getElementsByTagName('img')[0])
let acceptCookies = false;

/*some GDPR shit confirm... windows.confirm much batter choice than alert, cuz i am lazy and dont want to design*/
let answer = window.confirm("We are using cookies to store image data, do you wish to enable cookies");
if (answer) {
    acceptCookies = true;
}
else {
    acceptCookies = false;
}
slider();

function slider() {

/*Getting Alt attributes from img as values */
let imageCookie1 = slides[0].getElementsByTagName('img')[0].getAttribute("alt")
let imageCookie2 = slides[1].getElementsByTagName('img')[0].getAttribute("alt")
let imageCookie3 = slides[2].getElementsByTagName('img')[0].getAttribute("alt")

/*Datetime now + set 24 hours, 1 day*/
let now = new Date();
now.setHours(now.getHours() + 24);

//console.log(imageCookie1)
//console.log(imageCookie2)
//console.log(imageCookie3)

/*
    Solution of slider
    Displayig all styles in CSS to display none in a loop
    Stores a cookie from the variables below + one day sessions
    added a counter to track the image flow
    reset counter on last
    calling the slider again on setTimeout to create a "While Loop"
*/
    for (let i = 0; i < slides.length; i++) {
      slides[i].getElementsByTagName('img')[0].style.display = "none";
    
    }
    if (count == 0){
        slides[0].getElementsByTagName('img')[0].style.display = "block";
        if(acceptCookies){
            document.cookie = "name = " + imageCookie1 + ";" +   "expires = " + now.toUTCString() +";";
        }

        count++;
    }
    else if (count == 1){
        slides[0].getElementsByTagName('img')[0].style.display = "none";
        slides[1].getElementsByTagName('img')[0].style.display = "block";
        if(acceptCookies){
        document.cookie = "name = " + imageCookie2 + ";" +  " expires = " + now.toUTCString() +";";
        }
        count++;
    }
    else if  (count == 2){
        slides[1].getElementsByTagName('img')[0].style.display = "none";
        slides[2].getElementsByTagName('img')[0].style.display = "block";
        if(acceptCookies){
        document.cookie = "name = " + imageCookie3 + ";" + " expires = " + now.toUTCString() +";";
        }
        count = 0;
    }
    setTimeout(slider, 3000);
}


//slideImages[0].getElementsByTagName('img')[0].style.display = "none";







