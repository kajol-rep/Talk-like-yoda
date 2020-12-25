var userInput = document.querySelector("#user-input");
var btnTranslation = document.querySelector("#btn-translation");
var outPut = document.querySelector("#output");

btnTranslation.addEventListener("click", btnHandler)

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function btnHandler(){
    var inputToProcess = userInput.value;

    fetch(getTranslationURL(inputToProcess))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outPut.innerText = translatedText;
    }
        )

}