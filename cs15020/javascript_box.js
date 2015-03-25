		function showMessage(userInput){
			if(userInput.length > 0){
			var time = new Date();
			var hours = time.getHours();
				if(hours <= 12){
					alert("Good morning, " + userInput + "!");
				}
				else if( hours > 12 && hours <= 18){
					alert("Good afternoon, " + userInput + "!");
				}
				else if( hours > 18){
					alert("Good evning, " + userInput + "!");
				}
			}
		}