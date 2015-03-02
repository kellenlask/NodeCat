//----------------------------------------------------------------------------------------------------------
//
//	Main Script
//
//----------------------------------------------------------------------------------------------------------

chrome.extension.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

window.onload = onWindowLoad();

//----------------------------------------------------------------------------------------------------------
//
//	Function Definitions
//
//----------------------------------------------------------------------------------------------------------


function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, { file: "getPagesSource.js" }, function() {
    
	  
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.extension.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
    }
  });
  
  getClassification();
  
  getAnswer();
  
  recalibrateNetwork();
  
  saveNetwork();

}

function getClassification() {
	
}

function getAnswer() {
	
}

function recalibrateNetwork(correctAnswer, guessedAnswer) {
	
}

function saveNetwork() {
	
}





























