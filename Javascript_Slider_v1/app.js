let imgArray = [
    {image: "Picture of Sea"
    , src: "img/sea.jpg"},
    {image: "Picture of Coding"
    , src: "img/code.png"},
    {image: "Picture of Computer"
    , src: "img/computer.jpg"},
    {image: "Picture of Link"
    , src: "https://live.staticflickr.com/122/316423477_6cbdb14722_h.jpg"}
]

let elemSlide = document.getElementById("slider");
let counter = -1;
    /*some GDPR confirm... windows.confirm much batter choice than alert, cuz i am lazy and dont want to design*/
    let answer = window.confirm("We are using cookies to store image data, do you wish to enable cookies");
    if (answer) {
        acceptCookies = true;
    }
    else {
        acceptCookies = false;
    }
slider();

function slider(){

    /*Datetime now + set 24 hours, 1 day*/
    let now = new Date();

    now.setHours(now.getHours() + 24);  

    if(counter == 0)
    {
        if(acceptCookies){
            let imageCookie1 = elemSlide.getElementsByTagName('img')[0].getAttribute("src", imgArray[0].src)
            document.cookie = "name = " + imageCookie1 + ";" +   "expires = " + now.toUTCString() +";";
        }
        elemSlide.getElementsByTagName('img')[0].setAttribute("src", imgArray[counter].src)
    }
    if(counter == 1)
    {
        if(acceptCookies){
            let imageCookie2 = elemSlide.getElementsByTagName('img')[0].getAttribute("src", imgArray[1].src)
            document.cookie = "name = " + imageCookie2 + ";" +   "expires = " + now.toUTCString() +";";
        }
        elemSlide.getElementsByTagName('img')[0].setAttribute("src", imgArray[counter].src)
    }
    if(counter == 2)
    {
        if(acceptCookies){
            let imageCookie3 = elemSlide.getElementsByTagName('img')[0].getAttribute("src", imgArray[2].src)
            document.cookie = "name = " + imageCookie3 + ";" +   "expires = " + now.toUTCString() +";";
        }
        elemSlide.getElementsByTagName('img')[0].setAttribute("src", imgArray[counter].src)
    }
    if(counter == 3)
    {
        if(acceptCookies){            
        let imageCookie4 = elemSlide.getElementsByTagName('img')[0].getAttribute("src", imgArray[3].src)    
            document.cookie = "name = " + imageCookie4 + ";" +   "expires = " + now.toUTCString() +";";
        }
        elemSlide.getElementsByTagName('img')[0].setAttribute("src", imgArray[counter].src)
        counter = -1;
    }
    counter++;
    setTimeout(slider,3000)
}




    
  








