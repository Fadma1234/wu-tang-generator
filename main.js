//pseudo code
//Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. 
//The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator)
//I will need five options tags for each question
//the each  question will contain five prefixes each one will be displayed as an array of five indexes 
//we will need a function to randomize the answers using math random method
//a second funntion to run the fisrt one inside of it and the generate the name using the random arr from first function 
//create our event listener to be able grab user input and run our function to generate the name based on that
//used amp help in this project


//declaring variables for the first question
const prefixes = {
    ghost: ['Phantom', 'Ghostly', 'Shadow', 'Spectral', 'Mystic'],
    killer: ['Deadly', 'Savage', 'Vicious', 'Ruthless', 'Crimson'],
    master: ['Ancient', 'Grand', 'Wise', 'Eternal', 'Supreme'],
    rebel: ['Reckless', 'Wild', 'Untamed', 'Chaotic', 'Mad'],
    divine: ['Sacred', 'Holy', 'Divine', 'Blessed', 'Celestial']
};
//declaring variables for the second question
const middles = {
    sword: ['Blade', 'Slayer', 'Warrior', 'Samurai', 'Swordsman'],
    staff: ['Monk', 'Wanderer', 'Striker', 'Master', 'Sage'],
    fist: ['Crusher', 'Brawler', 'Destroyer', 'Fist', 'Fighter'],
    blade: ['Assassin', 'Shadow', 'Ninja', 'Phantom', 'Reaper'],
    mind: ['Genius', 'Prophet', 'Mystic', 'Shaman', 'Oracle']
};
//declaring variables for the third question
const elements = {
    fire: ['Inferno', 'Flame', 'Blaze', 'Phoenix', 'Ember'],
    water: ['Tsunami', 'Tempest', 'Tide', 'Storm', 'Ocean'],
    earth: ['Stone', 'Titan', 'Boulder', 'Quake', 'Mountain'],
    air: ['Wind', 'Cyclone', 'Breeze', 'Tornado', 'Gust'],
    metal: ['Iron', 'Steel', 'Chrome', 'Bronze', 'Titanium']
};
//declaring variables for the fourth question
const suffixes = {
    shadow: ['of Darkness', 'from the Void', 'of the Night', 'the Unseen', 'the Hidden'],
    mountain: ['of the Peak', 'the Elevated', 'of High Places', 'the Ascending', 'of the Summit'],
    street: ['the Street King', 'of the Block', 'the Urban', 'the Concrete', 'of the Pavement'],
    temple: ['the Enlightened', 'of the Temple', 'the Sacred', 'of the Shrine', 'the Holy'],
    chamber: ['the Secret', 'of Mystery', 'the Concealed', 'of the Vault', 'the Cryptic']
};
//declaring variables for the fifth question
const titles = {
    immortal: ['Immortal', 'Everlasting', 'Undying', 'Timeless', 'Forever'],
    supreme: ['Supreme', 'Ultimate', 'Absolute', 'Maximum', 'Prime'],
    legendary: ['Legendary', 'Mythical', 'Fabled', 'Epic', 'Heroic'],
    cursed: ['Cursed', 'Damned', 'Doomed', 'Hexed', 'Haunted'],
    infinite: ['Infinite', 'Boundless', 'Limitless', 'Endless', 'Eternal']
};
//making a function to get a random answer 
function getRandom(arr) {
    //returning a random array
    return arr[Math.floor(Math.random() * arr.length)];
}
//creating a function to generate the name taking our 5 questions as params
function generateWuTangName(q1, q2, q3, q4, q5) {
    //diploying our first function to grab a random answer from each question array and return it using literal notation
    const formats = [
        () => `${getRandom(titles[q5])} ${getRandom(prefixes[q1])} ${getRandom(middles[q2])}`,
        () => `${getRandom(prefixes[q1])} ${getRandom(elements[q3])} ${getRandom(middles[q2])}`,
        () => `The ${getRandom(prefixes[q1])} ${getRandom(middles[q2])} ${getRandom(suffixes[q4])}`,
        () => `${getRandom(middles[q2])} ${getRandom(elements[q3])} the ${getRandom(titles[q5])}`,
        () => `${getRandom(titles[q5])} ${getRandom(elements[q3])}-${getRandom(middles[q2])}`,
        () => `${getRandom(prefixes[q1])} ${getRandom(middles[q2])} ${getRandom(suffixes[q4])}`
    ];
    
    return getRandom(formats)();
}
//create an event listener to get the user selection of options and run our function on click
document.getElementById('generateBtn').addEventListener('click', () => {
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;
    const q5 = document.getElementById('q5').value;
//using a conditional to make sure all questions are answered 
    if (!q1 || !q2 || !q3 || !q4 || !q5) {
        alert('Please answer all questions!');
        return;
    }
//if all questions get answered our event listener will run our function and display the name
    const wuName = generateWuTangName(q1, q2, q3, q4, q5);
    
    document.getElementById('wuName').textContent = wuName;
    document.getElementById('survey').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
});
//this is reset button allows user to reset the game and generate a diffrent wu thang name
document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('survey').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    document.querySelectorAll('select').forEach(select => select.value = '');
});
