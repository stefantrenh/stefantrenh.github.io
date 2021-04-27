let currentURL = new URL(window.location.href); //new url instance, insted of splitting the URL string

let searchParams = new URLSearchParams(currentURL.searchParams);

/*
    insted of splitting the URL string, using the URLSearchParam class enable us to get the
    propertys and functions easily to access the user data from form input.
*/

let fname = searchParams.get("fname");
let lname = searchParams.get("lname");
let status ="";
let status1 = searchParams.get("Mr.");
let status2 = searchParams.get("Ms.");
let status3 = searchParams.get("Mrs.");
let email = searchParams.get("email").toLowerCase();


if (status1 != null){
    status = "Mr.";
}
else if (status2 != null)
{
    status = "Ms.";
}
else if (status3 != null)
{
    status = "Mrs.";
}

document.write(
    "<section>" + "<h2>Thank you for registration </h2> <h3> " + status + fname +" "+ lname+ "</h3> </header>" + "<main><p>" +"An email has been sent to "+ email + "</p></main> </section>"
)