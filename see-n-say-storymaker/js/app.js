// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';

let nounButton1 = document.getElementById('nounButton1');
let verbButton = document.getElementById('verbButton');
let adjectiveButton = document.getElementById('adjectiveButton');
let nounButton2 = document.getElementById('nounButton2');
let prepositionButton = document.getElementById('prepositionButton');
let resetButton = document.getElementById('resetButton');
var speakButton = document.getElementById('speakButton');
var randomButton = document.getElementById('randomButton');

const nounList1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
const verbList = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
const adjectiveList = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const nounList2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const prepositionList = ['on the moon.', 'on the chair.', 'in my spaghetti.', 'in my soup.', 'on the grass.', 'in my shoes.'];

verbButton.disabled = true;
adjectiveButton.disabled = true;
nounButton2.disabled = true;
prepositionButton.disabled = true;
speakButton.disabled = true;

let order = 0;

reset();




/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
	
	document.getElementById('stringOutput').innerText = textToSpeak;
	order = 0;
	textToSpeak = '';
}
document.getelements

function pickRandomString(listNum)
{
	switch(listNum)
	{
		case 0:
			if (order === 0)
			{
				let randomNum = Math.floor(Math.random() * 7);
				let words = document.querySelectorAll(".noun1List");
				textToSpeak = nounList1[randomNum];
				words[randomNum].style.color = "black";
				console.log(textToSpeak);
				verbButton.disabled = false;
				nounButton1.disabled = true;
				order++;
			}
			else
				throw new console.error("You must clear the string first");
				
			break;
		case 1:
			document.getElementById('stringOutput').innerText = '';
			if (order === 1)
			{	
				words = [];
				randomNum = Math.floor(Math.random() *6);
				words = document.querySelectorAll(".verbList");
				textToSpeak += ' ' + verbList[randomNum];
				words[randomNum].style.color = "black";
				console.log(textToSpeak);
				adjectiveButton.disabled = false;
				verbButton.disabled = true;
				order++;
			}
			else
				throw new console.error("You must clear the string first");
			break;
		case 2:
			document.getElementById('stringOutput').innerText = '';
			if (order === 2)
			{
				words = [];
				randomNum = Math.floor(Math.random() *6);
				words = document.querySelectorAll(".adjectiveList");
				textToSpeak += ' ' + adjectiveList[randomNum];
				words[randomNum].style.color = "black";
				console.log(textToSpeak);
				nounButton2.disabled = false;
				adjectiveButton.disabled = true;
				order++;
			}
			else
				throw new console.error("You must clear the string first");
			break;
		case 3:
			document.getElementById('stringOutput').innerText = '';
			if (order === 3)
			{
				words = [];
				randomNum = Math.floor(Math.random() *7);
				words = document.querySelectorAll(".noun2List");
				textToSpeak += ' ' + nounList2[randomNum];
				words[randomNum].style.color = "black";
				console.log(textToSpeak);
				prepositionButton.disabled = false;
				nounButton2.disabled = true;
				order++;
			}
			else
				throw new console.error("You must clear the string first");
			break;
		case 4:
			document.getElementById('stringOutput').innerText = '';
			if (order === 4)
			{
				words = [];
				randomNum = Math.floor(Math.random() *6)
				words = document.querySelectorAll(".prepositionList");
				textToSpeak += ' ' + prepositionList[randomNum];
				words[randomNum].style.color = "black";
				console.log(textToSpeak);
				speakButton.disabled = false;
				prepositionButton.disabled = true;
				order++;
			}
			else
				throw new console.error("You must clear the string first");
			break;
	}
}

function randomStory()
{
	reset();
	{
		switch(order)
		{
			case 0:
				if (order === 0)
				{
					let randomNum = Math.floor(Math.random() * 7);
					let words = document.querySelectorAll(".noun1List");
					textToSpeak = nounList1[randomNum];
					words[randomNum].style.color = "black";
					console.log(textToSpeak);
					verbButton.disabled = false;
					nounButton1.disabled = true;
					order++;
				}
				else
					throw new console.error("You must clear the string first");
			case 1:
				document.getElementById('stringOutput').innerText = '';
				if (order === 1)
				{	
					words = [];
					randomNum = Math.floor(Math.random() *6);
					words = document.querySelectorAll(".verbList");
					textToSpeak += ' ' + verbList[randomNum];
					words[randomNum].style.color = "black";
					console.log(textToSpeak);
					adjectiveButton.disabled = false;
					verbButton.disabled = true;
					order++;
				}
				else
					throw new console.error("You must clear the string first");
			case 2:
				document.getElementById('stringOutput').innerText = '';
				if (order === 2)
				{
					words = [];
					randomNum = Math.floor(Math.random() *6);
					words = document.querySelectorAll(".adjectiveList");
					textToSpeak += ' ' + adjectiveList[randomNum];
					words[randomNum].style.color = "black";
					console.log(textToSpeak);
					nounButton2.disabled = false;
					adjectiveButton.disabled = true;
					order++;
				}
				else
					throw new console.error("You must clear the string first");
			case 3:
				document.getElementById('stringOutput').innerText = '';
				if (order === 3)
				{
					words = [];
					randomNum = Math.floor(Math.random() *7);
					words = document.querySelectorAll(".noun2List");
					textToSpeak += ' ' + nounList2[randomNum];
					words[randomNum].style.color = "black";
					console.log(textToSpeak);
					prepositionButton.disabled = false;
					nounButton2.disabled = true;
					order++;
				}
				else
					throw new console.error("You must clear the string first");
			case 4:
				document.getElementById('stringOutput').innerText = '';
				if (order === 4)
				{
					words = [];
					randomNum = Math.floor(Math.random() *6)
					words = document.querySelectorAll(".prepositionList");
					textToSpeak += ' ' + prepositionList[randomNum];
					words[randomNum].style.color = "black";
					console.log(textToSpeak);
					speakButton.disabled = false;
					prepositionButton.disabled = true;
					speakNow(textToSpeak);
				}
				else
					throw new console.error("You must clear the string first");
				break;
		}
	}
}

function reset()
{
	document.getElementById('stringOutput').innerText = 'Either build your sentence or press on the Random Button.';
	nounButton1.disabled = false;
	verbButton.disabled = true;
	adjectiveButton.disabled = true;
	nounButton2.disabled = true;
	prepositionButton.disabled = true;
	speakButton.disabled = true;

	textToSpeak = '';
	order = 0;

	let words = document.querySelectorAll("li");
	for(let i = 0; i < words.length; i++)
	{
		words[i].style.color = "lightgrey";
	}
}
/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

nounButton1.addEventListener("click", function(){pickRandomString(0)});
verbButton.addEventListener("click", function(){pickRandomString(1)});
adjectiveButton.addEventListener("click", function(){pickRandomString(2)});
nounButton2.addEventListener("click", function(){pickRandomString(3)});
prepositionButton.addEventListener("click", function(){pickRandomString(4)});
randomButton.addEventListener("click", function(){randomStory()});
resetButton.addEventListener("click", function(){reset()});