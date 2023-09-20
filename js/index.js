
async function emaiValidate(e){
    
    e.preventDefault();
    
    let key = "ema_live_0zgDdBGHY0PvjEfTofZXqIehxHbQU7rqzlDrxgoJ" ; 
    let email = document.getElementById("username").value;
    
    //   console.log("clicked");

    resultContent.innerHTML = `<img width="150px" src="img/loading.svg" alt="">`

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let res = await fetch(url);

    let result = await res.json();

    let str = ``
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            
        }
        str = str + `<div>${key}: ${result[key]}</div>`

    }
    
    // console.log(str);
    resultContent.innerHTML = str;
}




submitBtn.addEventListener("click",emaiValidate)




/*

Key Concepts Learn from this project :-

 -> for of Loop 
 -> DOM Manipulation 
 -> Event Listner
 -> Async Await Concept
 -> fetch request
 -> Web API

 

Resource Use :-
 
 -> emailvalidation API from app.emailvalidation.io
    100 free Email validations available.


 */










/*
 Example of Output format from Server - 
    "tag": "",
    "free": true,
    "role": false,
    "user": "moaz.shamim1575",
    "email": "moaz.shamim1575@outlook.com",
    "score": 0.48,
    "state": "unknown",
    "domain": "outlook.com",
    "reason": "no_connect",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
*/



