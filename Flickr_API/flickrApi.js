/*   <----------------  API Arguments Libery ------------------>  */

            /*Page of img gallery - Current page for turning*/
            let page = "page"
            let currentPage = 1;

            /* Per Page images: default = 100, Maximum cap: 500 */
            function TotalImgPerPage(amount){
                let perPage = `per_page=${amount}`
                return perPage;
            }

            /*JSON callback*/
            let jsonCallbackMethod = "format=json&nojsoncallback=1"


/* <--------------------    Libery Ends  ----------------------->   */

let imgURLArray = [];  //Img URL array, contains X urls depending on total image per page amount 
let searchFlag = 0;
let content = document.getElementById("main")
let jsonDataObject;
let searchResultOutput2;


let modal = document.getElementById("modal-bg")
function modalWindow(){
    modal.style.display = "block";
}

let modalBtn = document.getElementById("modal-btn")
function modalCloseBtn() {
    modal.style.display= "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 
async function getSearchResult()
{  
    let searchResultOutput = document.getElementById("section-searchInput")
    let textValue = document.getElementById("section-header__searchBar").value
    let searchResultPages = document.getElementById("section-btn__pages")
   if(searchFlag == 1){
        while(content.firstChild){
            content.removeChild(content.lastChild);
        }
        searchFlag = 0;
    }
   let dataSearchValue = await ImgSearch();
   GetImgURL(dataSearchValue,"thumbnail")
   for (let i = 0; i < imgURLArray.length; i++) {
        let imgTag = document.createElement("img");
        imgTag.setAttribute("src",imgURLArray[i])
        imgTag.setAttribute("id",i)
        content.appendChild(imgTag)
        imgTag.addEventListener("click", function() {
            let img = document.getElementById(i);
            let src = img.getAttribute("src")
            //let indexSuffixPos = src.charAt(src.length-5)
            src = src.substring(0,src.length-5) + "z.jpg" //medium size, cutting the suffix and jpg format in string
            let modalImg = document.getElementById("warning")
            modalImg.setAttribute("src",src)
            modalImg.style.height = "100%"
            modalImg.style.width = "100%"
            let modalText = document.getElementById("modal")
            modalText.getElementsByTagName("h1")[0].innerText =`${dataSearchValue.photos.photo[i].title}`
            modalText.getElementsByTagName("h1")[0].style.background = "rgba(128, 128, 128, 0.2)"
            modalWindow();
            //console.log(src)
            //console.log(indexSuffixPos)
            //console.log(document.getElementById("warning"))
        })
   }
   console.log(dataSearchValue)
   imgURLArray = [];
   searchFlag++;
   searchResultOutput.innerText = `Getting ${dataSearchValue.photos.total} search results of "${textValue}"`
   
   if(dataSearchValue.photos.pages == 0){
    searchResultPages.innerText = `0 of 0`
   }else{
    searchResultPages.innerText = `${currentPage} of ${dataSearchValue.photos.pages} `
   }

}

function searchBtn()
{
    currentPage = 1;
    getSearchResult();
}

async function NextPageBtn() {
    jsonData = await ImgSearch();
    if(jsonData.photos.pages === currentPage){
        currentPage = jsonData.photos.pages
        document.getElementById("modal").getElementsByTagName("h1")[0].innerText = "Cannot Enter Next Page"
        document.getElementById("warning").setAttribute("src","img/Warning.svg")
        document.getElementById("warning").style.width = "12rem"
        modalWindow()
    }else{
        currentPage++;
        getSearchResult();
    }
}
function PreviousPageBtn(){
    if(currentPage === 1){
        currentPage = 1;
        document.getElementById("warning").setAttribute("src","img/Warning.svg")
        document.getElementById("modal").getElementsByTagName("h1")[0].innerText = "Cannot Enter Previous Page"
        document.getElementById("warning").style.width = "12rem"
        modalWindow()
    }
    else{
        currentPage--;
    getSearchResult();
    }
}

 async function ImgSearch()
{
    let textValue = document.getElementById("section-header__searchBar").value
    if(textValue == ""){
        let showInput = document.getElementById("section-searchInput");
        showInput.innerText = "Please fill in the search textbox"
        searchResultPages.innerText = "0 of 0"
    }
    let searchImgString = `${GetBaseURLString()}&text=${textValue}&${TotalImgPerPage(24)}&${jsonCallbackMethod}&${page +"="+currentPage}&sort=relevance`
    let request = await fetch(searchImgString)
    let getData = await request.json()

    return await getData;
   // console.log(searchImgString)
   // console.log(getData)
   // console.log(textValue)

} 

function GetImgURL(JSONImgdata, imgSize){
    let sizeSuffix = "";
    let sizeArray = [
        {Class: "thumbnail", Suffix: "q"},
        {Class: "small", Suffix: "n"},
        {Class: "medium", Suffix: "z"},
        {Class: "large", Suffix: "h"},
        {Class: "extralarge", Suffix: "4k"}
    ]
    for (let i = 0; i < sizeArray.length; i++) {
        if(sizeArray[i].Class == imgSize){
           sizeSuffix = sizeArray[i].Suffix;
        }        
    }
    for(let URLfragment of JSONImgdata.photos.photo)
    {
        imgURLArray.push(`https://live.staticflickr.com/${URLfragment.server}/${URLfragment.id}_${URLfragment.secret}_${sizeSuffix}.jpg`)
    }
}

function GetBaseURLString() {
    let host = "api.flickr.com"
    let path = "services/rest"
    let apiKey = "api_key=5008f83a3d74f0c09567d87692c85610"
    let searchMethod = "method=flickr.photos.search" //query string
    let baseURL = `https://${host}/${path}?${searchMethod}&${apiKey}`

    return baseURL;
}





    /*
        USEFULL DOCUMENTATION LOGS AND WORK FLOW

        <----  IMG SEARCH ---->

        Search Value = pikatchu

        Looking into JSON DATA from getData
        from APIstring = https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=5008f83a3d74f0c09567d87692c85610&text=candy&per_page=20&format=json&nojsoncallback=1&page=1

        ROOT : photos
        pages: 13640 - Could tell the user Page 1 of 13640
        perpage: 20
        photo: Array(20) - Array lenght depending on TotalImgPerPage(input)
        total: "272791" - Could tell the user how many "image results"

        JSON array object
        farm: 66
        id: "51162004703"
        isfamily: 0
        isfriend: 0
        ispublic: 1
        owner: "146867907@N08"
        secret: "534355c3ce"
        server: "65535"
        title: "Candy-King-Vape-Juice"


        <--- GET BASE URL STRING ---->

        Created a function to return the baseURL
        for TWO reasons
        1. The variables will have locals scopes to protect the API-key for security reasons
        2. the base URL makes it much faster for reusing code to prevent DRY (Do Not Repeat Yourself)

        <----  CREATING IMG URL  ----> 

        KEYS: farm, server, id, secret and size(class,suffix)
        https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

        Concat string to: https://live.staticflickr.com/7372/12502775644_acfd415fa7_w.jpg

        1: get the JSON data from ImgSearch
        2: when getting the JSON data search for URL JSON keys

        JSON DATA overview

        JSON OBJECT
        farm: 66
        isfamily: 0
        isfriend: 0
        ispublic: 1
        owner: "146867907@N08"
        secret: "534355c3ce"
        server: "65535"
        title: "Candy-King-Vape-Juice"
        id: "51162004703"

        NOTES: Warning! photo owners can restrict all sizes above 1600, not recommend to use!  

        <------- GET SEARCH RESULT "MAIN LOGIC (DRY)"------->
    
        Algorithm flow:
        1: Check flag (could use bool) - Setting flag to clear the main content by removing childs
        2: await for image search method returning JSON DATA object
        3: Getting Image URL function pushes URL array values and takes in a size param for choosen size
        4: Creating child elements and URL src attribute to parent content.
        5: Clearing the array (so we dont get duplicated images)
        6: adding flag value that resets on the click.

        <---- MODAL WARNING WINDOW ---->

        Modal window insted of alert box,
        Manipulating css style display as the modal block is none as default in style.css

    */
