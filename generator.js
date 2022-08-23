const {readFileSync, promises: fsPromises} = require('fs');
// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {

  const contents = readFileSync("phrases", 'utf-8');

  this.sentences = contents.split(/\r?\n/);

  console.log(this.sentences); // ['One', 'Two', 'Three', 'Four']

  // Add property to the object
//   this.sentences =
//     ["These go to 11.",
//       "Maybe you know.",
//       "Wecome to the Jungle...Love, Axl.",
//       "2 minutes to midnight from Iron Maiden.",
//       "Metal rules and disco sucks.",
//       "Is it hard rock or heavy metal?",
//       "Metal till we die.",
//       "Where is Tommy Lee's MAYHEM tattoo?",
//       "Rob Halford of Judas Priest.",
//       "I am Iron Man.",
//       "Randy Rhoads or Jake E.Lee?",
//       "Your crime is time and it's 18 and life to go...",
//       "Take me down to the paradise city.",
//       "Master of puppets I'm pulling your strings.",
//       "Out on the streets, that's where we'll meet.",
//       "Ratt Out of the Cellar Album.",
//       "FTW.",
//       "Les Paul with a Marshall stack",
//       "Spandex and Aquanet",
//       "Acoustic power ballads rule.",
//       "Here I am, rock you like a hurricane.",
//       "Feed my Frankenstein, Hungry for love, and it's feeding time",
//       "She was a fast machine, she kept her motor clean, she was the best damn woman that I ever seen.",
//       "Where the grass is green and the girls are pretty",
//       "Love is like a bomb, baby, c'mon get it on, livin' like a lover with a radar phone.",
//       "Pantera's Dimebag Darrell.",
//       "Who doesn't love",
//       "Lemmy... Enough said.",
//       "Peace sells, but who's buying?",
//       "Bang your head, metal health will drive you mad.",
//       "A pledge pin? On your uniform?",
//       "Sam Kinison playing Wild Thing.",
//       "Vivian Campbell played in Dio, Last in Line, and Def Leppard.",
//       "Oh yeah, t-t-teacher stop that screamin', teacher don't you see, don't wanna be no uptown fool.",
//       "I wanna rock and roll all night and part of every day.",
//       "Operation Mindcrime, we're an underground revolution working overtime.",
//       "Tawny Kitaen in a Whitesnake video and on a Ratt album cover.",
//       "In the still of the night I hear the wolf howl, honey.Sniffing around your door.",
//       "I really had a blackout, baby.",
//       "Michael Schenker from UFO and his Flying V.",
//       "Cause baby we'll be at the drive-in and in the old man's Ford.",
//       "Taste so good make a grown man cry, sweet cherry pie!",
//       "Rob Zombie's Living Dead Girl.",
//       "In my dreams it's still the same, your love is strong, it still remains.",
//       "George Lynch or Eddie Van Halen or Tony Iommi?",
//       "Smoke on the water.",
//       "Shake Me by Cinderella.",
//       "Rock Me by Great White is one of the best long-form rock songs.",
//       "Mother tell your children not to hold my hand.",
//       "Can anyone possibly be Avenged Sevenfold?",
//       "Plug me in I'm alive tonight out on the streets again, turn me on, I'm too hot to stop.",
//       "Megadeth Slayer.",
//       "Anthrax.",
//       "Ozzy Osbourne's Diary of a Madman.",
//       "GWAR.",
//       "Sepultura.",
//       "Lamb of God.",
//       "Maynard of Tool.",
//       "Things ain't always what they seem.What a shame, what happend to Jayne.",
//       "Got your number off the bathroom wall, so I decided it was about time I made the call.",
//       "Backstage pass.",
//       "They call me Dr. Love.",
//       "Bullet Boys - Smooth up in ya.",
//       "And yes I'm all lit up again on the couch, in my bed.",
//       "Diamond David Lee Roth.",
//       "Buckcherry.",
//       "Tesla's Modern Day Cowboy.",
//       "I'm going off the rails on a crazy train.",
//       "Let's celebrate!",
//       "Studded leather pants.",
//       "KISS concert shirts.",
//       "Double bass drums.",
//       "Headbanger's Ball on MTV.",
//       "Vixen.",
//       "Joan Jett.",
//       "Doro.",
//       "Back of the tour bus.",
//       "Slaughter Fly to the Angels.",
//       "There's a lady who's sure all that glitters is gold.",
//       "Led Zeppelln.",
//       "Kingdom Come.",
//       "Greta Van Fleet.",
//       "Aerosmith Walk this Way.",
//       "Neil Peart drum solo.",
//       "I'm burning, I'm burning, I'm burning for you.",
//       "Man, when I tell you she was cool, she was red-hot.",
//       "Billy Squier Stoke Me.",
//       "Five Finger Death Punch.",
//       "Exit light. Enter night.",
//       "Take my hand. We're off to never-never land.",
//       "Lights out, lights out in London.",
//       "Ooooh, barracuda.",
//       "Oh mama, I'm in fear for my life from the long arm of the law.",
//       "She said look, what's your game baby?",
//       "Are you tryin' to put me in shame?",
//       "I'm the man on the silver mountain.",
//       "Stewart Stevenson from Beavis and Butt-head.",
//       "Dave Meniketti from Y&T - Mean Streak.",
//       "Won't you lay it on the line Triumph from Canada?",
//       "I'm young, I'm wild and I'm free, I got the magic power of the music in me.",
//       "'Wait, just a moment before our love will die', sings Mike Tramp of White Lion.",
//       "Teas'n, pleas'n, run for the door, Teas'n, pleas'n, she wants more.",
//       "Night Ranger, Don't tell me you love me.",
//       "Chip Z'nuff.",
//       "Savatage morphed into the Trans-Siberian Orchestra.",
//       "Judas Priest British Steel.",
//       "Jimi Hendrix.",
//       "Can you rock out to ",
//       "James Hetfield's wrist bands.",
//       "Jack Daniels on stage.",
//       "Catching a pick from Tracii Guns.",
//       "Bye bye baby bye bye and that was all she wrote!",
//       "Winger.Quiet Riot.Queensryche.",
//       "Sister Christian.",
//       "Black Sabbath.",
//       "Deep Purple.",
//       "AC/DC.",
//       "Guns N Roses.",
//       "Def Leppard.",
//       "You're bringing on the heartbreak.",
//       "Circus Magazine.",
//       "Kickstart my heart.",
//       "Home sweet home.",
//       "Dream Theater.",
//       "Mercyful Fate.",
//       "The Trooper by Iron Maiden.",
//       "Cowboys from hell.",
//       "Welcome to the jungle, we've got fun and games.",
//       "Black Dog.",
//       "Rock and Roll.",
//       "Stairway to Heaven.",
//       "Passion killer, you're too much.",
//       "You're the only one I wanna touch.",
//       "Let's listen to ",
//       "Jethro Tull Beat Out Metallica for a Grammy,",
//       "“Hello Seattle, goodbye Warrant.”",
//       "Metallica Vs. Napster",
//       "Joan Jett and the Blackhearts.",
//       "Lita Ford.",
//       "Ozzy Osbourne Bites the Head Off a Bat.",
//       "Decline of the Western Civilization Part II: The Metal Years.",
//       "KISS Put the Makeup Back On.",
//       "Anthrax Collaborate With Public Enemy.",
//       "Have you ever heard.",
//       "Ace of Spades.",
//       "Breakin' the law.",
//       "Stevie Ray Vaughan.",
//       "Purple Haze"];
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
