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

let count = -1;
let sliders = document.querySelectorAll(".slider");

getImg();

function getImg ()
{
    for (let i = 0; i < sliders.length; i++) {
        let imgElement = document.createElement("img");
        imgElement.setAttribute("src", imgArray[i].src);
        imgElement.setAttribute("alt", imgArray[i].image);
        sliders[i].appendChild(imgElement);
     }
}

     let imageCookie1 = sliders[0].getElementsByTagName('img')[0].getAttribute("src")
     let imageCookie2 = sliders[1].getElementsByTagName('img')[0].getAttribute("src")
     let imageCookie3 = sliders[2].getElementsByTagName('img')[0].getAttribute("src")
     let imageCookie4 = sliders[3].getElementsByTagName('img')[0].getAttribute("src")

    /*some GDPR confirm... windows.confirm much batter choice than alert, cuz i am lazy and dont want to design*/
    let answer = window.confirm("We are using cookies to store image data, do you wish to enable cookies");
    if (answer) {
        acceptCookies = true;
    }
    else {
        acceptCookies = false;
    }

slider();

function slider() {
    count++;
    /*Datetime now + set 24 hours, 1 day*/
    let now = new Date();
    now.setHours(now.getHours() + 24);   
    if (count == 1){
        if(acceptCookies){
            document.cookie = "name = " + imageCookie4 + ";" +   "expires = " + now.toUTCString() +";";
        }
        let parent = sliders[3];
        parent.removeChild(parent.firstChild);
    }
    else if (count == 2){
        if(acceptCookies){
        document.cookie = "name = " + imageCookie3 + ";" +  " expires = " + now.toUTCString() +";";
        }
        let parent = sliders[2];
        parent.removeChild(parent.firstChild);
    }
    else if  (count == 3){
        if(acceptCookies){
        document.cookie = "name = " + imageCookie2 + ";" + " expires = " + now.toUTCString() +";";
        }
        let parent = sliders[1];
        parent.removeChild(parent.firstChild);
    }
    else if  (count == 4){
        if(acceptCookies){
        document.cookie = "name = " + imageCookie1 + ";" + " expires = " + now.toUTCString() +";";
        let parent = sliders[0];
        parent.removeChild(parent.firstChild);
        getImg();
        count = 0;
        }
    }
    setTimeout(slider, 3000);
}
    
