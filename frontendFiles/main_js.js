var mode=1;
// 0-10 angry, 11-19 happy, 20-29 sad, 30-38 neutral
const songs = [
    {
        path: "songs\\ban ja rani.mp3",
        name: "Ban Ja Tu Meri Rani",
        artists: "Guru Randhawa",
        icon: "images\\\\1.jpg",
        moodEmoji: "angry.png",
        tag:"Angry"
    },
    {
        path: "songs\\Banduk meri laila.mp3",
        name: "Banduk Meri Laila",
        artists: "Ash King, Jigar Saraiya, Sidharth Malhotra, Raftaar",
        icon: "images\\\\2.jpg",
        moodEmoji: "angry.png",
        tag:"Angry"
    },
    {
        path: "songs\\barish.mp3",
        name: "Barish",
        artists: "Ash King, Shashaa Tirupati",
        icon: "images\\\\3.jpg",
        moodEmoji: "angry.png",
        tag:"Angry"
    },
    {
        path: "sngs\\Songs\\Angry\\Apna Time Aayega _ Gully Boy _ Ranveer Singh _ Alia Bhatt _ DIVINE _ Dub Sharma _ Zoya Akhtar(MP3_160K).mp3",
        name: "Apna Time Aayega",
        artists: "Ranveer Singh, Divine",
        icon: "Song_Poster\\Song_Poster\\Angry_Poster\\Apna Time Aayega.png",
        moodEmoji: "angry.png",
        tag:"Angry"
    },
    {
        path: "sngs\\Songs\\Angry\\Get Ready To Fight Full Video Song _ BAAGHI _ Tiger Shroff_ Grandmaster Shifuji _ Benny Dayal(MP3_160K).mp3",
        name: "Get Ready To Fight",
        artists: "Pranaay, Siddharth Basrur, Benny Dayal",
        icon: "Song_Poster\\Song_Poster\\Angry_Poster\\Get Ready To Fight.jpeg",
        moodEmoji: "angry.png",
        tag:"Angry"
    },
    {
        path: "sngs\\Songs\\Angry\\Padmaavat_ Khalibali - Ranveer Singh _ Deepika Padukone _ Shahid Kapoor _ Shivam Pathak(MP3_160K).mp3",
        name: "Khalibali",
        artists: "Shivam Pathak, Shail Hada",
        icon: "Song_Poster\\Song_Poster\\Angry_Poster\\Khalibali.jpeg",
        moodEmoji: "angry.png",
        tag:"Angry"
    },
    {
        path: "sngs\\Songs\\Angry\\Sanju_ KAR HAR MAIDAAN FATEH Full Video Song _ Ranbir Kapoor _ Rajkumar Hirani(MP3_160K).mp3",
        name: "Kar Har Maidaan Fateh",
        artists: "Shreya Ghoshal, Sukhwinder Singh",
        icon: "Song_Poster\\Song_Poster\\Angry_Poster\\kar har maidan fateh.jpeg",
        moodEmoji: "angry.png",
        tag:"Angry"
    },
    {
        path: "sngs\\Songs\\Angry\\Shoorveer(MP3_160K).mp3",
        name: "Shoorveer",
        artists: "Rapperiya Baalam",
        icon: "Song_Poster\\Song_Poster\\Angry_Poster\\Shoorveer.webp",
        moodEmoji: "angry.png",
        tag:"Angry"
    },
    {
        path: "sngs\\Songs\\Angry\\YALGAAR - CARRYMINATI X Wily Frenzy(MP3_160K).mp3",
        name: "chak Lein De",
        artists: "Kailash Kher",
        icon: "Song_Poster\\Song_Poster\\Angry_Poster\\Yalgaar.jpg",
        moodEmoji: "angry.png",
        tag:"Angry"
    },
    {
        path: "sngs\\Songs\\Angry\\YALGAAR - CARRYMINATI X Wily Frenzy(MP3_160K).mp3",
        name: "Yalgaar",
        artists: "Ajey Nagar(Carryminati)",
        icon: "Song_Poster\\Song_Poster\\Angry_Poster\\Yalgaar.jpg",
        moodEmoji: "angry.png",
        tag:"Angry"
    },
    {
        path: "sngs\\Songs\\Angry\\Zinda Full Video - Bhaag Milkha Bhaag_Farhan Akhtar_Siddharth Mahadevan_Prasoon Joshi(MP3_160K).mp3",
        name: "Zinda",
        artists: "Siddharth Mahadevan",
        icon: "Song_Poster\\Song_Poster\\Angry_Poster\\Zinda.jpeg",
        moodEmoji: "angry.png",
        tag:"Angry"
    },
    {
        path: "songs\\haareya.mp3",
        name: "Haareya",
        artists: "Arijit Singh",
        icon: "images\\\\4.jpg",
        moodEmoji: "happy.png",
        tag:"Happy"
    },
    {
        path: "sngs\\Songs\\Happy\\Badshah - Jugnu (Official Video) _ Nikhita Gandhi _ Akanksha Sharma(MP3_160K).mp3",
        name: "jugnu",
        artists: "Nikhita Gandhi, Badshah",
        icon: "Song_Poster\\Song_Poster\\Happy_Poster\\jugnu.jpg",
        moodEmoji: "happy.png",
        tag:"Happy"
    },
    {
        path: "sngs\\Songs\\Happy\\Bum Bum Bole (Full Song) Film - Taare Zameen Par _  Shaan_ Aamir Khan(MP3_160K).mp3",
        name: "Bumm Bumm Bole",
        artists: "Aamir Khan, Armaan Malik, and Shaan",
        icon: "Song_Poster\\Song_Poster\\Happy_Poster\\Bumm Bumm Bole.jpeg",
        moodEmoji: "happy.png",
        tag:"Happy"
    },
    {
        path: "sngs\\Songs\\Happy\\Dance Ka Bhoot - Brahmāstra _ Ranbir Kapoor _ Alia Bhatt _ Pritam _ Arijit Singh _ Amitabh B(MP3_160K).mp3",
        name: "Dance Ka Bhoot",
        artists: "Arijit Singh, Pritam Chakraborty",
        icon: "Song_Poster\\Song_Poster\\Happy_Poster\\Dance Ka Bhoot.jpeg",
        moodEmoji: "happy.png",
        tag:"Happy"
    },
    {
        path: "sngs\\Songs\\Happy\\Doobey - Official Video _ Gehraiyaan _ Deepika Padukone_ Siddhant_ Ananya_ Dhairya _ OAFF_ Savera(MP3_160K).mp3",
        name: "Doobey",
        artists: "Lothika, OAFF, Savera Mehta, Kausar Munir",
        icon: "Song_Poster\\Song_Poster\\Happy_Poster\\Doobey.jpeg",
        moodEmoji: "happy.png",
        tag:"Happy"
    },
    {
        path: "sngs\\Songs\\Happy\\Jiya Re Song _ Jab Tak Hai Jaan _ Shah Rukh Khan_ Anushka Sharma _ A R Rahman _ Gulzar _ Neeti Mohan(MP3_160K).mp3",
        name: "Jiya Re",
        artists: "Neeti Mohan",
        icon: "Song_Poster\\Song_Poster\\Happy_Poster\\Jiya Re.jpeg",
        moodEmoji: "happy.png",
        tag:"Happy"
    },
    {
        path: "sngs\\Songs\\Happy\\Sau Aasmaan - Full Video _ Baar Baar Dekho _ Sidharth Malhotra _ Katrina Kaif _Armaan_Amaal _ Neeti(MP3_160K).mp3",
        name: "sau aasmaan ",
        artists: "Armaan Malik, Neeti Mohan",
        icon: "Song_Poster\\Song_Poster\\Happy_Poster\\sau aasmaan .jpeg",
        moodEmoji: "happy.png",
        tag:"Happy"
    },
    {
        path: "sngs\\Songs\\Happy\\Tumse Milke Dilka Jo Haal [Full Song] _ Main Hoon Na _ Shahrukh Khan(MP3_160K).mp3",
        name: "Tumse Milke Dil Ka",
        artists: "Altaf Sabri, Sonu Nigam, Anu Malik",
        icon: "Song_Poster\\Song_Poster\\Happy_Poster\\Tumse Milke Dil Ka.jpeg",
        moodEmoji: "happy.png",
        tag:"Happy"
    },
    
    {
        path: "songs\\ik vari aa.mp3",
        name: "Ik Vari Aa",
        artists: "Arijit Singh",
        icon: "images\\\\5.jpg",
        moodEmoji: "happy.png",
        tag:"Happy"
    },
    {
        path: "songs\\main tera.mp3",
        name: "Main Tera Boyfriend",
        artists: "Arijit Singh, Neha Kakkar, Meet Bros",
        icon: "images\\\\6.jpg",
        moodEmoji: "sad.png",
        tag:"Sad"
    },
    {
        path: "songs\\mercy.mp3",
        name: "Mercy",
        artists: "Badshah",
        icon: "images\\\\7.jpg",
        moodEmoji: "sad.png",
        tag:"Sad"
    },
    {
        path: "songs\\musafir.mp3",
        name: "Musafir",
        artists: "KK",
        icon: "images\\\\8.jpg",
        moodEmoji: "sad.png",
        tag:"Sad"
    },
    {
        path: "sngs\\Songs\\Sad\\Ae Dil Hai Mushkil Title Track Full Video - Ranbir_ Anushka_ Aishwarya_Arijit_Pritam(MP3_160K).mp3",
        name: "Ae Dil Hai Mushkil",
        artists: "Pritam Chakraborty, Arijit Singh",
        icon: "Song_Poster\\Song_Poster\\Sad_Poster\\Ae Dil Hai Mushkil.jpg",
        moodEmoji: "sad.png",
        tag:"Sad"
    },
    {
        path: "sngs\\Songs\\Sad\\Full Video_ Galliyan Song _ Ek Villain _ Ankit Tiwari _ Sidharth Malhotra _ Shraddha Kapoor(MP3_160K).mp3",
        name: "Galliyan",
        artists: "Ankit Tiwari",
        icon: "Song_Poster\\Song_Poster\\Sad_Poster\\Galliyan.jpeg",
        moodEmoji: "sad.png",
        tag:"Sad"
    },
    {
        path: "sngs\\Songs\\Sad\\Humdard Full Video Song _ Ek Villain _ Arijit Singh _ Mithoon(MP3_160K).mp3",
        name: "Humdard",
        artists: "Arijit Singh",
        icon: "Song_Poster\\Song_Poster\\Sad_Poster\\Humdard.jpeg",
        moodEmoji: "sad.png",
        tag:"Sad"
    },
    {
        path: "sngs\\Songs\\Sad\\Kaifi Khalil - Kahani Suno 2.0 [Official Music Video](MP3_160K).mp3",
        name: "Kahani Suno",
        artists: "Kaifi Khalil",
        icon: "Song_Poster\\Song_Poster\\Sad_Poster\\Kahani Suno.jpeg",
        moodEmoji: "sad.png",
        tag:"Sad"
    },
    {
        path: "sngs\\Songs\\Sad\\PHIR KABHI Full Video Song _ M.S. DHONI -THE UNTOLD STORY _Arijit Singh_ Sushant Singh Disha Patani(MP3_160K).mp3",
        name: "PHIR KABHI",
        artists: "Arijit Singh, Amaal Mallik",
        icon: "Song_Poster\\Song_Poster\\Sad_Poster\\PHIR KABHI.jpeg",
        moodEmoji: "sad.png",
        tag:"Sad"
    },
    {
        path: "sngs\\Songs\\Sad\\Sunn Raha Hai Na Tu Aashiqui 2 Full Video Song _ Aditya Roy Kapur_ Shraddha Kapoor(MP3_160K).mp3",
        name: "Sunn Raha Hai",
        artists: "Raxstar, Shreya Ghoshal",
        icon: "Song_Poster\\Song_Poster\\Sad_Poster\\Sunn Raha Hai.jpeg",
        moodEmoji: "sad.png",
        tag:"Sad"
    },
    {
        path: "sngs\\Songs\\Sad\\Yeh Dooriyan - Official Music Video _ Love Aaj Kal _ Sara _ Kartik _ Pritam _ Mohit Chouhan(MP3_160K).mp3",
        name: "Yeh Dooriyan",
        artists: "Mohit Chauhan, Pritam Chakraborty",
        icon: "Song_Poster\\Song_Poster\\Sad_Poster\\Yeh Dooriyan.jpeg",
        moodEmoji: "sad.png",
        tag:"Sad"
    },
    {
        path: "songs\\o sathi.mp3",
        name: "O Sathi",
        artists: "Arijit Singh",
        icon: "images\\\\9.jpg",
        moodEmoji: "neutral.png",
        tag:"Neutral"
    },
    {
        path: "sngs\\Songs\\Neutral\\Aaj dil Shaayraana - Arijit Singh _ Holiday _ Akshay Kumar _ Sonakshi Sinha _ Pritam _ Irshad K(MP3_160K).mp3",
        name: "Shaayraana",
        artists: "Arijit Singh",
        icon: "Song_Poster\\Song_Poster\\Neutral_Poster\\Shaayraana.jpeg",
        moodEmoji: "neutral.png",
        tag:"Neutral"
    },
    {
        path: "sngs\\Songs\\Neutral\\Aasman Ko Chukar Dekha I Return Of Hanuman (Animation)(MP3_160K).mp3",
        name: "Aasman Ko Chukar Dekha",
        artists: "Daler Mehndi, Shaznine, Francois Castellino, Neuman Pinto, Samantha, and Sunayana Mukherjee",
        icon: "Song_Poster\\Song_Poster\\Neutral_Poster\\Aasman Ko Chukar Dekha.jpeg",
        moodEmoji: "neutral.png",
        tag:"Neutral"
    },
    {
        path: "sngs\\Songs\\Neutral\\Blue Eyes Full Video Song Yo Yo Honey Singh _ Blockbuster Song Of 2013(MP3_160K).mp3",
        name: "Blue eyes",
        artists: "Yo Yo Honey Singh",
        icon: "Song_Poster\\Song_Poster\\Neutral_Poster\\Blue eyes.jpeg",
        moodEmoji: "neutral.png",
        tag:"Neutral"
    },
    {
        path: "sngs\\Songs\\Neutral\\Deva Deva - Brahmāstra _ Amitabh B _ Ranbir Kapoor _ Alia Bhatt _ Pritam _ Arijit _ Amitabh _ Jonita(MP3_160K).mp3",
        name: "Deva Deva",
        artists: "Arijit Singh, Jonita Gandhi, and Pritam Chakraborty",
        icon: "Song_Poster\\Song_Poster\\Neutral_Poster\\Deva Deva.jpeg",
        moodEmoji: "neutral.png",
        tag:"Neutral"
    },
    {
        path: "sngs\\Songs\\Neutral\\Naagar Nandji Na Laal _ Aditya Gadhvi _ Ft. Kinjal Rajpriya(MP3_160K).mp3",
        name: "Naagar Nandji Na Laal",
        artists: "Aditya Gadhvi",
        icon: "Song_Poster\\Song_Poster\\Neutral_Poster\\Naagar Nandji Na Laal.jpg",
        moodEmoji: "neutral.png",
        tag:"Neutral"
    },
    {
        path: "sngs\\Songs\\Neutral\\OFFICIAL_ Abhi Toh Party Shuru Hui Hai VIDEO Song _ Khoobsurat _ Badshah _ Aastha _ Sonam Kapoor(MP3_160K).mp3",
        name: "Abhi Toh Party Shuru Hui Hai",
        artists: "Aastha Gill and Badshah",
        icon: "Song_Poster\\Song_Poster\\Neutral_Poster\\Abhi Toh Party Shuru Hui Hai.jpeg",
        moodEmoji: "neutral.png",
        tag:"Neutral"
    },
    {
        path: "sngs\\Songs\\Neutral\\Yun Hi Chala Chal Lyrical Video _ Swades _ A.R. Rahman _ Javed Akhtar _ Udit Narayan _ Shahrukh Khan(MP3_160K).mp3",
        name: "Yun Hi Chala Chal",
        artists: "Hariharan, Kailash Kher, and Udit Narayan",
        icon: "Song_Poster\\Song_Poster\\Neutral_Poster\\Yun Hi Chala Chal.jpeg",
        moodEmoji: "neutral.png",
        tag:"Neutral"
    },
    {
        path: "songs\\phir bhi.mp3",
        name: "Phir Bhi",
        artists: "Arijit Singh, Shashaa Tirupati",
        icon: "images\\\\10.jpg",
        moodEmoji: "neutral.png",
        tag:"Neutral"
    }
    
];

var songQueue=[];


var songAddedToQueue = [];
for (var i = 0; i < songs.length; i++) {
    songAddedToQueue[i] = false;
}
function createSongElements() {
    const artistLimit = 20; // Set the character limit for the artists
    const randomized_songs= songs.sort(() => Math.random() - 0.5);
    for (let i = 0; i < randomized_songs.length; i++) {
        const song = randomized_songs[i];
        const truncatedArtists = song.artists.length > 25 ? `${song.artists.slice(0, artistLimit)}...` : song.artists;
        const songElement = document.createElement("div");
        songElement.classList.add("song");
        songElement.innerHTML = `
            <div class="pic">
                <img class="image" src="${song.icon}" alt="">
                <input type="button" class="play" onclick="playSong(${i})">
                <input type="button" class="add" onclick="addToQueue(${i})">
            </div>
            <div class="data">
                <h5>${song.name}</h5>
                <p>${truncatedArtists}</p>
            </div>
            <p class="tag">${song.tag}</p>
        `;
        document.getElementsByClassName("content")[0].appendChild(songElement);
    }
}

createSongElements();


function setMode(elem){
    console.log("Set mode called");
    let newmode=elem.value;
    if(newmode<1){
        return;
    }
    else if(newmode==2){
        mode=2;
        getEmotionAndPlaySong();
        console.log("Mode set to emotion");
    }
    else if(newmode==3){
        playRandomSong();
        mode=3;
    }
    else if(newmode==1){
        playNextSong();
        mode=1;
    }
}



function playSong(index) {
    const song = songs[index];

    console.log(song);
    document.getElementById("sname").innerHTML = song.name;
    document.getElementById("songSource").src = song.path;
    document.getElementById("main_slider").load();
    document.getElementById("main_slider").play();
    document.getElementById("emotion").innerHTML = song.tag;
    
}

// Function to add a song to the queue
function addToQueue(index) {
    if ( !songAddedToQueue[index]) {
        const song = songs[index];
        const label = document.createElement("label");
        label.classList.add("queueElement");
        label.innerHTML = `${song.name}<br><hr>`;
        document.getElementsByClassName("queue")[0].appendChild(label);
        songAddedToQueue[index] = true;
        songQueue.push(song);
    } else {
        alert("Song is already in the queue.");
    }
}
// Function to play the next song in the queue
function playNextSong() {
    if (songQueue.length > 0) {
        const song = songQueue.shift();
        playSong(songs.indexOf(song));
        // remove song from queue after playing
        document.getElementsByClassName("queue")[0].removeChild(document.getElementsByClassName("queue")[0].firstChild);
        songAddedToQueue[songs.indexOf(song)] = false;
    } else {
        alert("Queue is empty.");
    }
}

// Function to play a song based on mood
function playSongByMood(moodIndex) {
    console.log(moodIndex)
    if(moodIndex < 0 || moodIndex > 3) {
        alert("Invalid mood index.");
        return;
    }
    else if(moodIndex == 0){
 
        var randomIndex = Math.floor(Math.random() *(10)+0);
        console.log(randomIndex)
       
        playSong(randomIndex);
    }
    else if(moodIndex == 1){
     
        var randomIndex = Math.floor(Math.random() *(8)+11);
        console.log(randomIndex)
  
        playSong(randomIndex);
    }
    else if(moodIndex == 2){
     
        var randomIndex = Math.floor(Math.random() *(9)+20);
        console.log(randomIndex)
        
        playSong(randomIndex);
    }
    else {

        var randomIndex = Math.floor(Math.random() *(8)+30);
        console.log(randomIndex)

        playSong(randomIndex);
    }

}


function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    playSong(randomIndex);
}


async function getEmotionAndPlaySong() {
    console.log("THE FUNCTION CALLED");
    try {
        let emotion = await eel.getEmotion()();
        switch (emotion) {
            case "angry":
                playSongByMood(0);
                break;
            case "happy":
                playSongByMood(1);
                break;
            case "sad":
                playSongByMood(2);
                
                break;
            default:
                playSongByMood(3);
                break;
        }
    } catch (error) {
        console.error("Error in getEmotionAndPlaySong:", error);
       
    }
}

