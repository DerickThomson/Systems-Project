const mongo = require('mongodb').MongoClient;
var express = require('express');
var url = require('url');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
var value, l;

var query = function (value) {
    var i = 0;
    var list = [];
    while (i < 74) {
        if (parseInt(tv[i]["total time (min)"]) <= parseInt(value)) {
            list.push({ name: tv[i].show, pic: tv[i]["s no."] });
        }
        i++;
    }
    return list;
}

// Our first route
app.use(express.static('public'));

// Listen to port 4000
app.listen(4000, function () {
    console.log('Dev app listening on port 4000!');
});
mongo.connect('mongodb://127.0.0.1:27017/tvShows', function (err, db) {
    if (err) {
        throw err;
    }
    console.log('MongoDB connected!');
    const myDB = db.db('tvShows')
    let tvS = myDB.collection('shows');
    tvS.drop();
    tvS.insertMany(tv, function (err, res) {
        if (err) {
            throw err;
        }
        console.log('inserted');
    })
    app.post('/upload', function (req, res) {
        value = req.body.val;
        //l = query(value);
        tvS.find({"total time (min)": {$lt: parseInt(value)}}).toArray(function(err, res){
            l=res;
        });
        //res.send(l);
        res.sendFile(__dirname + '/public/tvshows.html');
    });

    app.get("/upload", function (req, res) {
        res.json(l);
    })
});

var tv = [
    {
        "": "",
        "s no.": "1",
        "show": "13 Reason Why",
        "length of episode": "50",
        "no. of episodes/season": "13",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": 650,
        "_id": "5aaa0cd693da2631e0c0e92f"
    },
    {
        "": "",
        "s no.": "2",
        "show": "Agents of SHIELD",
        "length of episode": "40",
        "no. of episodes/season": "22",
        "no. of seasons": "4",
        "total episodes": "88",
        "total time (min)": 3520,
        "_id": "5aaa0cd693da2631e0c0e930"
    },
    {
        "": "",
        "s no.": "3",
        "show": "Arrow",
        "length of episode": "40",
        "no. of episodes/season": "23",
        "no. of seasons": "6",
        "total episodes": "138",
        "total time (min)": 5520,
        "_id": "5aaa0cd693da2631e0c0e931"
    },
    {
        "": "",
        "s no.": "4",
        "show": "American Crime Story",
        "length of episode": "45",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": 450,
        "_id": "5aaa0cd693da2631e0c0e932"
    },
    {
        "": "",
        "s no.": "5",
        "show": "American Gods",
        "length of episode": "55",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": 440,
        "_id": "5aaa0cd693da2631e0c0e933"
    },
    {
        "": "",
        "s no.": "6",
        "show": "Another",
        "length of episode": "20",
        "no. of episodes/season": "12",
        "no. of seasons": "1",
        "total episodes": "12",
        "total time (min)": 240,
        "_id": "5aaa0cd693da2631e0c0e934"
    },
    {
        "": "",
        "s no.": "7",
        "show": "Altered Carbon",
        "length of episode": "60",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": 600,
        "_id": "5aaa0cd693da2631e0c0e935"
    },
    {
        "": "",
        "s no.": "8",
        "show": "Avatar: The Last Airbender",
        "length of episode": "20",
        "no. of episodes/season": "20",
        "no. of seasons": "3",
        "total episodes": "60",
        "total time (min)": 1200,
        "_id": "5aaa0cd693da2631e0c0e936"
    },
    {
        "": "",
        "s no.": "9",
        "show": "Attack on Titan",
        "length of episode": "20",
        "no. of episodes/season": "Varied",
        "no. of seasons": "1",
        "total episodes": "37",
        "total time (min)": 740,
        "_id": "5aaa0cd693da2631e0c0e937"
    },
    {
        "": "",
        "s no.": "10",
        "show": "A Series of Unfortunate Events",
        "length of episode": "50",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": 400,
        "_id": "5aaa0cd693da2631e0c0e938"
    },
    {
        "": "",
        "s no.": "11",
        "show": "Big Little Lies",
        "length of episode": "55",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": 440,
        "_id": "5aaa0cd693da2631e0c0e939"
    },
    {
        "": "",
        "s no.": "12",
        "show": "Brooklyn Nine Nine",
        "length of episode": "20",
        "no. of episodes/season": "23",
        "no. of seasons": "5",
        "total episodes": "115",
        "total time (min)": 2300,
        "_id": "5aaa0cd693da2631e0c0e93a"
    },
    {
        "": "*",
        "s no.": "13",
        "show": "Black Mirror",
        "length of episode": "50",
        "no. of episodes/season": "Varied",
        "no. of seasons": "4",
        "total episodes": "19",
        "total time (min)": 950,
        "_id": "5aaa0cd693da2631e0c0e93b"
    },
    {
        "": "",
        "s no.": "14",
        "show": "Better Call Saul",
        "length of episode": "45",
        "no. of episodes/season": "10",
        "no. of seasons": "3",
        "total episodes": "30",
        "total time (min)": 1350,
        "_id": "5aaa0cd693da2631e0c0e93c"
    },
    {
        "": "",
        "s no.": "15",
        "show": "Bojack Horseman",
        "length of episode": "25",
        "no. of episodes/season": "12",
        "no. of seasons": "4",
        "total episodes": "48",
        "total time (min)": 1200,
        "_id": "5aaa0cd693da2631e0c0e93d"
    },
    {
        "": "*",
        "s no.": "16",
        "show": "Breaking Bad",
        "length of episode": "55",
        "no. of episodes/season": "Varied",
        "no. of seasons": "5",
        "total episodes": "62",
        "total time (min)": 3410,
        "_id": "5aaa0cd693da2631e0c0e93e"
    },
    {
        "": "",
        "s no.": "17",
        "show": "Castlevania",
        "length of episode": "20",
        "no. of episodes/season": "4",
        "no. of seasons": "1",
        "total episodes": "4",
        "total time (min)": 80,
        "_id": "5aaa0cd693da2631e0c0e93f"
    },
    {
        "": "",
        "s no.": "18",
        "show": "Daredevil",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "2",
        "total episodes": "26",
        "total time (min)": 1430,
        "_id": "5aaa0cd693da2631e0c0e940"
    },
    {
        "": "",
        "s no.": "19",
        "show": "Devilman Crybaby",
        "length of episode": "25",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": 250,
        "_id": "5aaa0cd693da2631e0c0e941"
    },
    {
        "": "",
        "s no.": "20",
        "show": "Doctor Who",
        "length of episode": "40",
        "no. of episodes/season": "12",
        "no. of seasons": "10",
        "total episodes": "120",
        "total time (min)": 4800,
        "_id": "5aaa0cd693da2631e0c0e942"
    },
    {
        "": "",
        "s no.": "21",
        "show": "GLOW",
        "length of episode": "35",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": 280,
        "_id": "5aaa0cd693da2631e0c0e943"
    },
    {
        "": "*",
        "s no.": "22",
        "show": "Gravity Falls",
        "length of episode": "20",
        "no. of episodes/season": "20",
        "no. of seasons": "2",
        "total episodes": "40",
        "total time (min)": 800,
        "_id": "5aaa0cd693da2631e0c0e944"
    },
    {
        "": "",
        "s no.": "23",
        "show": "Fargo",
        "length of episode": "55",
        "no. of episodes/season": "10",
        "no. of seasons": "3",
        "total episodes": "30",
        "total time (min)": 1650,
        "_id": "5aaa0cd693da2631e0c0e945"
    },
    {
        "": "",
        "s no.": "24",
        "show": "Iron Fist",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": 715,
        "_id": "5aaa0cd693da2631e0c0e946"
    },
    {
        "": "",
        "s no.": "25",
        "show": "Inhumans",
        "length of episode": "50",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": 400,
        "_id": "5aaa0cd693da2631e0c0e947"
    },
    {
        "": "",
        "s no.": "26",
        "show": "Jessica Jones",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": 715,
        "_id": "5aaa0cd693da2631e0c0e948"
    },
    {
        "": "",
        "s no.": "27",
        "show": "Legion",
        "length of episode": "45",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": 360,
        "_id": "5aaa0cd693da2631e0c0e949"
    },
    {
        "": "",
        "s no.": "28",
        "show": "Luke Cage",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": 715,
        "_id": "5aaa0cd693da2631e0c0e94a"
    },
    {
        "": "",
        "s no.": "29",
        "show": "Legends of Tomorrow",
        "length of episode": "40",
        "no. of episodes/season": "13",
        "no. of seasons": "3",
        "total episodes": "39",
        "total time (min)": 1560,
        "_id": "5aaa0cd693da2631e0c0e94b"
    },
    {
        "": "",
        "s no.": "30",
        "show": "Mindhunter",
        "length of episode": "50",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": 500,
        "_id": "5aaa0cd693da2631e0c0e94c"
    },
    {
        "": "",
        "s no.": "31",
        "show": "Narcos",
        "length of episode": "55",
        "no. of episodes/season": "10",
        "no. of seasons": "2",
        "total episodes": "20",
        "total time (min)": 1100,
        "_id": "5aaa0cd693da2631e0c0e94d"
    },
    {
        "": "",
        "s no.": "32",
        "show": "One Punch Man",
        "length of episode": "20",
        "no. of episodes/season": "12",
        "no. of seasons": "1",
        "total episodes": "12",
        "total time (min)": 240,
        "_id": "5aaa0cd693da2631e0c0e94e"
    },
    {
        "": "*",
        "s no.": "33",
        "show": "Parks and Recreation",
        "length of episode": "20",
        "no. of episodes/season": "Varied",
        "no. of seasons": "7",
        "total episodes": "128",
        "total time (min)": 2560,
        "_id": "5aaa0cd693da2631e0c0e94f"
    },
    {
        "": "",
        "s no.": "34",
        "show": "Penny Dreadful",
        "length of episode": "50",
        "no. of episodes/season": "9",
        "no. of seasons": "3",
        "total episodes": "27",
        "total time (min)": 1350,
        "_id": "5aaa0cd693da2631e0c0e950"
    },
    {
        "": "",
        "s no.": "35",
        "show": "Fullmetal Alchemist: Brotherhood",
        "length of episode": "24",
        "no. of episodes/season": "64",
        "no. of seasons": "1",
        "total episodes": "64",
        "total time (min)": 1536,
        "_id": "5aaa0cd693da2631e0c0e951"
    },
    {
        "": "*",
        "s no.": "36",
        "show": "Rick and Morty",
        "length of episode": "20",
        "no. of episodes/season": "11",
        "no. of seasons": "3",
        "total episodes": "33",
        "total time (min)": 660,
        "_id": "5aaa0cd693da2631e0c0e952"
    },
    {
        "": "",
        "s no.": "37",
        "show": "Samurai Jack",
        "length of episode": "20",
        "no. of episodes/season": "13",
        "no. of seasons": "5",
        "total episodes": "62",
        "total time (min)": 1240,
        "_id": "5aaa0cd693da2631e0c0e953"
    },
    {
        "": "",
        "s no.": "38",
        "show": "Taboo",
        "length of episode": "50",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": 400,
        "_id": "5aaa0cd693da2631e0c0e954"
    },
    {
        "": "",
        "s no.": "39",
        "show": "True Detective",
        "length of episode": "55",
        "no. of episodes/season": "8",
        "no. of seasons": "2",
        "total episodes": "16",
        "total time (min)": 880,
        "_id": "5aaa0cd693da2631e0c0e955"
    },
    {
        "": "",
        "s no.": "40",
        "show": "The Night Manager",
        "length of episode": "55",
        "no. of episodes/season": "6",
        "no. of seasons": "1",
        "total episodes": "6",
        "total time (min)": 330,
        "_id": "5aaa0cd693da2631e0c0e956"
    },
    {
        "": "",
        "s no.": "41",
        "show": "Twin Peaks",
        "length of episode": "50",
        "no. of episodes/season": "Varied",
        "no. of seasons": "3",
        "total episodes": "35",
        "total time (min)": 1750,
        "_id": "5aaa0cd693da2631e0c0e957"
    },
    {
        "": "",
        "s no.": "42",
        "show": "Community",
        "length of episode": "20",
        "no. of episodes/season": "Varied",
        "no. of seasons": "6",
        "total episodes": "110",
        "total time (min)": 2200,
        "_id": "5aaa0cd693da2631e0c0e958"
    },
    {
        "": "",
        "s no.": "43",
        "show": "Parasyte: The Maxim",
        "length of episode": "20",
        "no. of episodes/season": "24",
        "no. of seasons": "1",
        "total episodes": "24",
        "total time (min)": 480,
        "_id": "5aaa0cd693da2631e0c0e959"
    },
    {
        "": "",
        "s no.": "44",
        "show": "Clannad",
        "length of episode": "20",
        "no. of episodes/season": "23",
        "no. of seasons": "2",
        "total episodes": "46",
        "total time (min)": 920,
        "_id": "5aaa0cd693da2631e0c0e95a"
    },
    {
        "": "",
        "s no.": "45",
        "show": "Monster",
        "length of episode": "20",
        "no. of episodes/season": "74",
        "no. of seasons": "1",
        "total episodes": "74",
        "total time (min)": 1480,
        "_id": "5aaa0cd693da2631e0c0e95b"
    },
    {
        "": "*",
        "s no.": "46",
        "show": "Stranger Things",
        "length of episode": "50",
        "no. of episodes/season": "8",
        "no. of seasons": "2",
        "total episodes": "16",
        "total time (min)": 800,
        "_id": "5aaa0cd693da2631e0c0e95c"
    },
    {
        "": "*",
        "s no.": "47",
        "show": "Sherlock",
        "length of episode": "90",
        "no. of episodes/season": "3",
        "no. of seasons": "4",
        "total episodes": "13",
        "total time (min)": 1170,
        "_id": "5aaa0cd693da2631e0c0e95d"
    },
    {
        "": "",
        "s no.": "48",
        "show": "The Crown",
        "length of episode": "60",
        "no. of episodes/season": "10",
        "no. of seasons": "2",
        "total episodes": "20",
        "total time (min)": 1200,
        "_id": "5aaa0cd693da2631e0c0e95e"
    },
    {
        "": "",
        "s no.": "49",
        "show": "The Defenders",
        "length of episode": "60",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": 480,
        "_id": "5aaa0cd693da2631e0c0e95f"
    },
    {
        "": "",
        "s no.": "50",
        "show": "The End of the F***ing World",
        "length of episode": "25",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": 200,
        "_id": "5aaa0cd693da2631e0c0e960"
    },
    {
        "": "",
        "s no.": "51",
        "show": "The Punisher",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": 715,
        "_id": "5aaa0cd693da2631e0c0e961"
    },
    {
        "": "",
        "s no.": "52",
        "show": "The Runaways",
        "length of episode": "50",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": 500,
        "_id": "5aaa0cd693da2631e0c0e962"
    },
    {
        "": "",
        "s no.": "53",
        "show": "The Tick",
        "length of episode": "25",
        "no. of episodes/season": "6",
        "no. of seasons": "1",
        "total episodes": "6",
        "total time (min)": 150,
        "_id": "5aaa0cd693da2631e0c0e963"
    },
    {
        "": "*",
        "s no.": "54",
        "show": "The Leftovers",
        "length of episode": "60",
        "no. of episodes/season": "10",
        "no. of seasons": "3",
        "total episodes": "28",
        "total time (min)": 1680,
        "_id": "5aaa0cd693da2631e0c0e964"
    },
    {
        "": "",
        "s no.": "55",
        "show": "The OA",
        "length of episode": "Varied",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": 430,
        "_id": "5aaa0cd693da2631e0c0e965"
    },
    {
        "": "",
        "s no.": "56",
        "show": "The Man in the High Castle",
        "length of episode": "60",
        "no. of episodes/season": "10",
        "no. of seasons": "2",
        "total episodes": "20",
        "total time (min)": 1200,
        "_id": "5aaa0cd693da2631e0c0e966"
    },
    {
        "": "",
        "s no.": "57",
        "show": "The Flash",
        "length of episode": "40",
        "no. of episodes/season": "23",
        "no. of seasons": "4",
        "total episodes": "92",
        "total time (min)": 3680,
        "_id": "5aaa0cd693da2631e0c0e967"
    },
    {
        "": "",
        "s no.": "58",
        "show": "Hannibal",
        "length of episode": "40",
        "no. of episodes/season": "13",
        "no. of seasons": "3",
        "total episodes": "39",
        "total time (min)": 1560,
        "_id": "5aaa0cd693da2631e0c0e968"
    },
    {
        "": "",
        "s no.": "59",
        "show": "Death Note",
        "length of episode": "20",
        "no. of episodes/season": "25",
        "no. of seasons": "1",
        "total episodes": "25",
        "total time (min)": 500,
        "_id": "5aaa0cd693da2631e0c0e969"
    },
    {
        "": "",
        "s no.": "60",
        "show": "The Big Bang Theory",
        "length of episode": "20",
        "no. of episodes/season": "24",
        "no. of seasons": "11",
        "total episodes": "264",
        "total time (min)": 5280,
        "_id": "5aaa0cd693da2631e0c0e96a"
    },
    {
        "": "",
        "s no.": "61",
        "show": "Luther",
        "length of episode": "55",
        "no. of episodes/season": "Varied",
        "no. of seasons": "4",
        "total episodes": "16",
        "total time (min)": 880,
        "_id": "5aaa0cd693da2631e0c0e96b"
    },
    {
        "": "",
        "s no.": "62",
        "show": "Mr. Robot",
        "length of episode": "55",
        "no. of episodes/season": "10",
        "no. of seasons": "3",
        "total episodes": "30",
        "total time (min)": 1650,
        "_id": "5aaa0cd693da2631e0c0e96c"
    },
    {
        "": "*",
        "s no.": "63",
        "show": "Westworld",
        "length of episode": "55",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": 550,
        "_id": "5aaa0cd693da2631e0c0e96d"
    },
    {
        "": "",
        "s no.": "64",
        "show": "Agent Carter",
        "length of episode": "40",
        "no. of episodes/season": "Varied",
        "no. of seasons": "2",
        "total episodes": "16",
        "total time (min)": 640,
        "_id": "5aaa0cd693da2631e0c0e96e"
    },
    {
        "": "*",
        "s no.": "65",
        "show": "Game of Thrones",
        "length of episode": "55",
        "no. of episodes/season": "10",
        "no. of seasons": "8",
        "total episodes": "73",
        "total time (min)": 4015,
        "_id": "5aaa0cd693da2631e0c0e96f"
    },
    {
        "": "",
        "s no.": "66",
        "show": "Unbreakable Kimmy Schmidt",
        "length of episode": "20",
        "no. of episodes/season": "13",
        "no. of seasons": "3",
        "total episodes": "39",
        "total time (min)": 780,
        "_id": "5aaa0cd693da2631e0c0e970"
    },
    {
        "": "",
        "s no.": "67",
        "show": "Code Geass",
        "length of episode": "20",
        "no. of episodes/season": "24",
        "no. of seasons": "2",
        "total episodes": "48",
        "total time (min)": 960,
        "_id": "5aaa0cd693da2631e0c0e971"
    },
    {
        "": "",
        "s no.": "68",
        "show": "Baccano!",
        "length of episode": "20",
        "no. of episodes/season": "16",
        "no. of seasons": "1",
        "total episodes": "16",
        "total time (min)": 320,
        "_id": "5aaa0cd693da2631e0c0e972"
    },
    {
        "": "",
        "s no.": "69",
        "show": "Boku dake ga Inai Machi (ERASED)",
        "length of episode": "20",
        "no. of episodes/season": "12",
        "no. of seasons": "1",
        "total episodes": "12",
        "total time (min)": 240,
        "_id": "5aaa0cd693da2631e0c0e973"
    },
    {
        "": "",
        "s no.": "70",
        "show": "11.22.63",
        "length of episode": "55",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": 440,
        "_id": "5aaa0cd693da2631e0c0e974"
    },
    {
        "": "",
        "s no.": "71",
        "show": "House of Cards",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "5",
        "total episodes": "65",
        "total time (min)": 3575,
        "_id": "5aaa0cd693da2631e0c0e975"
    },
    {
        "": "",
        "s no.": "72",
        "show": "How to Get Away with Murder",
        "length of episode": "40",
        "no. of episodes/season": "15",
        "no. of seasons": "4",
        "total episodes": "60",
        "total time (min)": 2400,
        "_id": "5aaa0cd693da2631e0c0e976"
    },
    {
        "": "",
        "s no.": "73",
        "show": "Preacher",
        "length of episode": "40",
        "no. of episodes/season": "10",
        "no. of seasons": "2",
        "total episodes": "23",
        "total time (min)": 920,
        "_id": "5aaa0cd693da2631e0c0e977"
    },
    {
        "": "",
        "s no.": "74",
        "show": "You, Me and the Apocalypse",
        "length of episode": "50",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": 650,
        "_id": "5aaa0cd693da2631e0c0e978"
    }
]


