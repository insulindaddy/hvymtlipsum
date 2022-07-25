
// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "These go to 11.",
  "maybe you know ",
  "Wecome to the Jungle...Love, Axl.",
  "2 minutes to midnight from Iron Maiden.",
  "Metal rules and disco sucks and",
  "Is it hard rock or heavy metal? ",
  "metal till we die",
  "Where is Tommy Lee's MAYHEM tattoo? ",
  "Rob Halford of Judas Priest.",
  "I am Iron Man",
  "Randy Rhoads or Jake E. Lee? ",
  "Your crime is time and it's 18 and life to go...",
  "Take me down to the paradise city.",
  "Master of puppets I'm pulling your strings.",
  "Out on the streets, that's where we'll meet.",
  "Ratt Out of the Cellar Album",
  "FTW",
  "Les Paul with a Marshall stack",
  "Spandex and Aquanet",
  "Acoustic power ballads rule.",
  "Here I am, rock you like a hurricane. ",
  "Feed my Frankenstein, Hungry for love, and it's feeding time",
  "She was a fast machine, she kept her motor clean, she was the best damn woman that I ever seen.
  ",
  "Where the grass is green and the girls are pretty",
  "Love is like a bomb, baby, c'mon get it on, livin' like a lover with a radar phone.",
  "Pantera's Dimebag Darrell.",
  "Who doesn't love",
  "Lemmy - Enough said. ",
  "Peace sells, but who's buying",
  "Bang your head, metal health will drive you mad. ",
  "A pledge pin? On your uniform? ",
  "Sam Kinison playing Wild Thing",
  "Vivian Campbell played in Dio, Last in Line, and Def Leppard.",
  "Oh yeah, t-t-teacher stop that screamin', teacher don't you see, don't wanna be no uptown fool.",
  "I wanna rock and roll all night and part of every day.",
  "Operation Mindcrime, we're an underground revolution working overtime.
  ",
  "Tawny Kitaen in a Whitesnake video and on a Ratt album cover. ",
  "In the still of the night I hear the wolf howl, honey. Sniffing around your door.",
  "I really had a blackout, baby. ",
  "Michael Schenker from UFO and his Flying V.",
  "Cause baby we'll be at the drive-in and in the old man's Ford. ",
  "Taste so good make a grown man cry, sweet cherry pie!",
  "Rob Zombie's Living Dead Girl. ",
  "In my dreams it's still the same, your love is strong, it still remains",
  "George Lynch or Eddie Van Halen or Tony Iommi? ",
  "Smoke on the water. A fire in the sky. ",
  "Shake Me by Cinderella. ",
  "Rock Me by Great White is one of the best long-form rock songs. ",
  "Mother tell your children not to hold my hand. ",
  "Can anyone possibly be Avenged Sevenfold?",
  "Plug me in I'm alive tonight out on the streets again, turn me on, I'm too hot to stop.",
  "Megadeth Slayer Anthrax.",
  "Ozzy Osbourne's Diary of a Madman.",
  "GWAR Sepultura Lamb of God ",
  "Maynard of Tool",
  "Now it all seems funny, kinda like a dream, things ain't always what they seem. What a shame, what happend to Jayne.",
  "Got your number off the bathroom wall, so I decided it was about time I made the call. ",
  "Backstage pass.  ",
  "They call me Dr. Love. ",
  "Smooth up in ya. ",
  "And yes I'm all lit up again on the couch, in my bed. And, yes, I'm all lit up again, flyin'."
  ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;
