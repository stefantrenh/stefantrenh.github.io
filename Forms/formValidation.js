function validateForm() {
    let firstName = document.forms["signupForm"]["fname"].value;
    let lastName = document.forms["signupForm"]["lname"].value;
    let mr = document.getElementById("status1").checked; 
    let mrs = document.getElementById("status2").checked; 
    let ms = document.getElementById("status3").checked; 
    /* 
        First name and Last name cannot input an empty string or less chars than 2
    */
    if (firstName == "" || firstName.length < 2)    
    {
      alert("Name must be filled out");
      return false;
    }
    if (lastName == "" || lastName.length < 2)    
    {
      alert("Last name must be filled out");
      return false;
    }
    /*
        Cannot select multiply checkboxes
    */
    if(mr === true && mrs === true || mr === true && mrs === true && ms === true || mr === false && mrs === false && ms === false || mr === true && ms=== true){
        alert("Error! Pick one vaild status");
        return false;
    }

    let mail=document.getElementById("email").value
    let atpos=mail.indexOf("@");
    let dotpos=mail.lastIndexOf(".");

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length)
    {
    alert("Enter a vaild email adress");
    return false;
    /*
    Notes: get id from DOM 
           if atpos < 1 - User need to make an input before @
           dotpos<atpos+2 - User needs to make an input after @ with at least 2 chars
           dotpos+2 - User needs to make an input after the dot could be .se
    */  
    }
    /* 
    splitted date , i could also implement days,months validations.
    */
    let inputdate = document.forms["signupForm"]["date"].value;
    let insertedDate = inputdate.split('-');
    let years = insertedDate[0]; 
    if(years < 1900 || years > 2021){
        alert("Enter a vaild birthdate");
        return false;
    }
    
  }
