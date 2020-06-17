var btn = document.querySelector(".talk");
var content = document.querySelector(".content");
var bot = document.querySelector(".bot");
var body = document.querySelector("body");

window.SpeechRecognition = window.webkitSpeechRecognition || window.mozSpeechRecognition;

const recognition =  new SpeechRecognition();

if ('SpeechRecognition' in window) {
  console.log("supported!")
} else {
	alert("Your browser is not compatible to our technology.")	
}

recognition.onstart = function(){
console.log("Listening for your command !!!");
};

recognition.onresult = function(event){
const current = event.resultIndex;
const transcript = event.results[current][0].transcript;
content.textContent = transcript;
console.log(transcript);
	if (transcript == "hello" || transcript == "hi") {
		var msg = new SpeechSynthesisUtterance('Hey   There!');
		window.speechSynthesis.speak(msg);
		bot.textContent = 'Hey there';
	} else if (transcript == "bye"){
		var msg = new SpeechSynthesisUtterance('Good Bye');
		window.speechSynthesis.speak(msg);
		window.opener = self;
    	window.close();
	}else if (transcript == "show me picture of a cat" || transcript == "show me picture of cat"){
		window.open("https://www.google.com/search?q=cat");
		bot.textContent = "Searching for picture of a cat";
		var msg = new SpeechSynthesisUtterance('Searching for picture of a cat');
		window.speechSynthesis.speak(msg);
	}else if (transcript == "open Google"){
		window.open("https://www.google.com/");
		var msg = new SpeechSynthesisUtterance('Opening google');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Opening Google";
	}else if (transcript == "open Facebook"){
		window.open("https://www.facebook.com/");
		var msg = new SpeechSynthesisUtterance('redirecting you to facebook page!!!');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Redirecting you to Facebook page";
	}else if (transcript == "open Instagram"){
		window.open("https://www.instagram.com/");
		var msg = new SpeechSynthesisUtterance('Opening Instagram');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Opening Instagram";
	}else if (transcript == "open WhatsApp"){
		window.open("https://web.whatsapp.com/");
		bot.textContent = "Opening whatsapp";
		var msg = new SpeechSynthesisUtterance('Opening WhatsApp');
		window.speechSynthesis.speak(msg);
	}else if (transcript == "time to study"){
		window.open("https://www.coursera.org/");
		var msg = new SpeechSynthesisUtterance('Sounds great');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Sounds great";
	}else if (transcript == "Search website"){
		var msg = new SpeechSynthesisUtterance('Enter the URL which you would like to visit');
		window.speechSynthesis.speak(msg);
		const web = prompt("Enter the URL which you would like to visit");
		window.open(web);
	}else if (transcript == "play music"){
		window.open("https://www.youtube.com/");
		var msg = new SpeechSynthesisUtterance('Opening youtube');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Opening Youtube";
	}else if(transcript == "what is my IP"){
		window.open("https://www.google.com/search?q=what+is+my+ip")
	}else if (transcript == "open email"){
		window.open("https://www.gmail.com/");
		var msg = new SpeechSynthesisUtterance('Opening gmail');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Opening Gmail";
	}else if (transcript == "open map" || transcript == "open maps"){
		window.open("https://www.google.com/maps");
		var msg = new SpeechSynthesisUtterance('redirecting you to google maps');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Redirecting you to Google Maps";
	}else if (transcript == "movie time"){
		window.open("https://www.netflix.com/");
		var msg = new SpeechSynthesisUtterance('Opening netflix');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Opening Netflix";
	}else if (transcript == "who are you"){
		var msg = new SpeechSynthesisUtterance('i am your virtual buddy and i am here to assist you.  and i was programmed by imamdin salimi');
		window.speechSynthesis.speak(msg);
		bot.textContent = "I am your virtual buddy and I am here to assist you, and I was programmed by Imamdin Salimi";
	}else if (transcript == "I am hungry"){
		var msg = new SpeechSynthesisUtterance('you can order delicious foods from swiggy online.');
		window.speechSynthesis.speak(msg);
		window.open("https://www.swiggy.com/");
		bot.textContent = "you can order delicious foods from swiggy online.";
	}else if (transcript == "dark mode on"){
		var msg = new SpeechSynthesisUtterance('switching to dark mode');
		window.speechSynthesis.speak(msg);
		body.style.backgroundColor = "black";
		body.style.color = "white";
		btn.classList.add("btn-outline-light");
		btn.classList.remove("btn-outline-dark");
		btn.classList.add("dark");
		btn.classList.remove("light");
		bot.textContent = "Switching to dark mode";
	}else if (transcript == "back to light mode"){
		var msg = new SpeechSynthesisUtterance('switching to light mode');
		window.speechSynthesis.speak(msg);
		body.style.backgroundColor = "white";
		body.style.color = "black";
		btn.classList.add("btn-outline-dark");
		btn.classList.remove("btn-outline-light");
		btn.classList.add("light");
		btn.classList.remove("dark");
		bot.textContent = "Switching to dark mode";
	}else if (transcript == "goodbye"){
		var msg = new SpeechSynthesisUtterance('Bye');
		window.speechSynthesis.speak(msg);
		window.opener = self;
    	window.close();
    	bot.textContent = "Bye"; 
	}else if (transcript == "thank you" || transcript == "thanks" || transcript == "thanks a lot"){
		var msg = new SpeechSynthesisUtterance('My pleasure, I am always happy to assist');
		window.speechSynthesis.speak(msg);
		bot.textContent = "My pleasure :) I am always happy to assist.";
	}else if (transcript == "can you Beatbox"){
		var msg = new SpeechSynthesisUtterance('yeah,     boots n cats and boots n cats');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Yeah, Boots and cats and boots and cats";
	}else if (transcript == "how is the weather today"){
		var msg = new SpeechSynthesisUtterance('Scalding');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Scalding";
		window.open("https://www.google.com/search?q=weather");
	}else if (transcript == "open Pinterest"){
		var msg = new SpeechSynthesisUtterance('Redirecting you to Pinterest page');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Redirecting you to Pinterest page";
		window.open("https://in.pinterest.com/");
	}else if (transcript == "I need wallpaper" || transcript == "I need a wallpaper"){
		var msg = new SpeechSynthesisUtterance('Pixels.com is The best free stock photos & videos shared by talented creators.');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Pexels.com is The best free stock photos & videos shared by talented creators.";
		window.open("https://www.pexels.com/");
	}else if (transcript == "how old are you"){
		var msg = new SpeechSynthesisUtterance('Age is just a number.   i am as old as western wind and  as young as a newborn caterpillar');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Age is just a number. I am as old as western wind and as young as a newborn caterpillar";
	}else if (transcript == "what is your name"){
		var msg = new SpeechSynthesisUtterance('I am your virtual buddy');
		window.speechSynthesis.speak(msg);
		bot.textContent = "I am your virtual buddy";
	}else {
		var msg = new SpeechSynthesisUtterance('Sorry i was not able to catch you');
		window.speechSynthesis.speak(msg);
		bot.textContent = "Sorry i was not able to catch you";
	}
};

btn.addEventListener('click', () => {
recognition.start();
});