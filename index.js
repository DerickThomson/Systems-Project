var express = require('express');
var url = require('url');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
var value,l;

var query = function(value){
    var i = 0;
    var list = [];
    while(i<74){
        if(parseInt(tv[i]["total time (min)"])<=parseInt(value)){
            console.log(tv[i]["total time (min)"]+"  "+ tv[i].show+"   "+value);
            list.push({name: tv[i].show});
        }
        i++;
    }
    return list;
}

// Our first route
app.use(express.static('public'));

app.post('/upload', function (req, res) {
    value=req.body.val;
    console.log(value);
    l = query(value);
    //res.send(l);
    res.sendFile(__dirname + '/public/tvshows.html');
});

app.get("/upload",function(req,res){
    res.json(l);
})

// Listen to port 5000
app.listen(4000, function () {
    console.log('Dev app listening on port 4000!');
});

var tv = [
    {
        "": "",
        "show": "13 Reason Why",
        "length of episode": "50",
        "no. of episodes/season": "13",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": "650",
        "_id": "5aa0f826c7d94540689323fe"
    },
    {
        "": "",
        "show": "Agents of SHIELD",
        "length of episode": "40",
        "no. of episodes/season": "22",
        "no. of seasons": "4",
        "total episodes": "88",
        "total time (min)": "3520",
        "_id": "5aa0f826c7d94540689323ff"
    },
    {
        "": "",
        "show": "Arrow",
        "length of episode": "40",
        "no. of episodes/season": "23",
        "no. of seasons": "6",
        "total episodes": "138",
        "total time (min)": "5520",
        "_id": "5aa0f826c7d9454068932400"
    },
    {
        "": "",
        "show": "American Crime Story",
        "length of episode": "45",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": "450",
        "_id": "5aa0f826c7d9454068932401"
    },
    {
        "": "",
        "show": "American Gods",
        "length of episode": "55",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": "440",
        "_id": "5aa0f826c7d9454068932402"
    },
    {
        "": "",
        "show": "Another",
        "length of episode": "20",
        "no. of episodes/season": "12",
        "no. of seasons": "1",
        "total episodes": "12",
        "total time (min)": "240",
        "_id": "5aa0f826c7d9454068932403"
    },
    {
        "": "",
        "show": "Altered Carbon",
        "length of episode": "60",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": "600",
        "_id": "5aa0f826c7d9454068932404"
    },
    {
        "": "",
        "show": "Avatar: The Last Airbender",
        "length of episode": "20",
        "no. of episodes/season": "20",
        "no. of seasons": "3",
        "total episodes": "60",
        "total time (min)": "1200",
        "_id": "5aa0f826c7d9454068932405"
    },
    {
        "": "",
        "show": "Attack on Titan",
        "length of episode": "20",
        "no. of episodes/season": "Varied",
        "no. of seasons": "1",
        "total episodes": "37",
        "total time (min)": "740",
        "_id": "5aa0f826c7d9454068932406"
    },
    {
        "": "",
        "show": "A Series of Unfortunate Events",
        "length of episode": "50",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": "400",
        "_id": "5aa0f826c7d9454068932407"
    },
    {
        "": "",
        "show": "Big Little Lies",
        "length of episode": "55",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": "440",
        "_id": "5aa0f826c7d9454068932408"
    },
    {
        "": "",
        "show": "Brooklyn Nine Nine",
        "length of episode": "20",
        "no. of episodes/season": "23",
        "no. of seasons": "5",
        "total episodes": "115",
        "total time (min)": "2300",
        "_id": "5aa0f826c7d9454068932409"
    },
    {
        "": "*",
        "show": "Black Mirror",
        "length of episode": "50",
        "no. of episodes/season": "Varied",
        "no. of seasons": "4",
        "total episodes": "19",
        "total time (min)": "950",
        "_id": "5aa0f826c7d945406893240a"
    },
    {
        "": "",
        "show": "Better Call Saul",
        "length of episode": "45",
        "no. of episodes/season": "10",
        "no. of seasons": "3",
        "total episodes": "30",
        "total time (min)": "1350",
        "_id": "5aa0f826c7d945406893240b"
    },
    {
        "": "",
        "show": "Bojack Horseman",
        "length of episode": "25",
        "no. of episodes/season": "12",
        "no. of seasons": "4",
        "total episodes": "48",
        "total time (min)": "1200",
        "_id": "5aa0f826c7d945406893240c"
    },
    {
        "": "*",
        "show": "Breaking Bad",
        "length of episode": "55",
        "no. of episodes/season": "Varied",
        "no. of seasons": "5",
        "total episodes": "62",
        "total time (min)": "3410",
        "_id": "5aa0f826c7d945406893240d"
    },
    {
        "": "",
        "show": "Castlevania",
        "length of episode": "20",
        "no. of episodes/season": "4",
        "no. of seasons": "1",
        "total episodes": "4",
        "total time (min)": "80",
        "_id": "5aa0f826c7d945406893240e"
    },
    {
        "": "",
        "show": "Daredevil",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "2",
        "total episodes": "26",
        "total time (min)": "1430",
        "_id": "5aa0f826c7d945406893240f"
    },
    {
        "": "",
        "show": "Devilman Crybaby",
        "length of episode": "25",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": "250",
        "_id": "5aa0f826c7d9454068932410"
    },
    {
        "": "",
        "show": "Doctor Who",
        "length of episode": "40",
        "no. of episodes/season": "12",
        "no. of seasons": "10",
        "total episodes": "120",
        "total time (min)": "4800",
        "_id": "5aa0f826c7d9454068932411"
    },
    {
        "": "",
        "show": "GLOW",
        "length of episode": "35",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": "280",
        "_id": "5aa0f826c7d9454068932412"
    },
    {
        "": "*",
        "show": "Gravity Falls",
        "length of episode": "20",
        "no. of episodes/season": "20",
        "no. of seasons": "2",
        "total episodes": "40",
        "total time (min)": "800",
        "_id": "5aa0f826c7d9454068932413"
    },
    {
        "": "",
        "show": "Fargo",
        "length of episode": "55",
        "no. of episodes/season": "10",
        "no. of seasons": "3",
        "total episodes": "30",
        "total time (min)": "1650",
        "_id": "5aa0f826c7d9454068932414"
    },
    {
        "": "",
        "show": "Iron Fist",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": "715",
        "_id": "5aa0f826c7d9454068932415"
    },
    {
        "": "",
        "show": "Inhumans",
        "length of episode": "50",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": "400",
        "_id": "5aa0f826c7d9454068932416"
    },
    {
        "": "",
        "show": "Jessica Jones",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": "715",
        "_id": "5aa0f826c7d9454068932417"
    },
    {
        "": "",
        "show": "Legion",
        "length of episode": "45",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": "360",
        "_id": "5aa0f826c7d9454068932418"
    },
    {
        "": "",
        "show": "Luke Cage",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": "715",
        "_id": "5aa0f826c7d9454068932419"
    },
    {
        "": "",
        "show": "Legends of Tomorrow",
        "length of episode": "40",
        "no. of episodes/season": "13",
        "no. of seasons": "3",
        "total episodes": "39",
        "total time (min)": "1560",
        "_id": "5aa0f826c7d945406893241a"
    },
    {
        "": "",
        "show": "Mindhunter",
        "length of episode": "50",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": "500",
        "_id": "5aa0f826c7d945406893241b"
    },
    {
        "": "",
        "show": "Narcos",
        "length of episode": "55",
        "no. of episodes/season": "10",
        "no. of seasons": "2",
        "total episodes": "20",
        "total time (min)": "1100",
        "_id": "5aa0f826c7d945406893241c"
    },
    {
        "": "",
        "show": "One Punch Man",
        "length of episode": "20",
        "no. of episodes/season": "12",
        "no. of seasons": "1",
        "total episodes": "12",
        "total time (min)": "240",
        "_id": "5aa0f826c7d945406893241d"
    },
    {
        "": "*",
        "show": "Parks and Recreation",
        "length of episode": "20",
        "no. of episodes/season": "Varied",
        "no. of seasons": "7",
        "total episodes": "128",
        "total time (min)": "2560",
        "_id": "5aa0f826c7d945406893241e"
    },
    {
        "": "",
        "show": "Penny Dreadful",
        "length of episode": "50",
        "no. of episodes/season": "9",
        "no. of seasons": "3",
        "total episodes": "27",
        "total time (min)": "1350",
        "_id": "5aa0f826c7d945406893241f"
    },
    {
        "": "",
        "show": "Fullmetal Alchemist: Brotherhood",
        "length of episode": "24",
        "no. of episodes/season": "64",
        "no. of seasons": "1",
        "total episodes": "64",
        "total time (min)": "1536",
        "_id": "5aa0f826c7d9454068932420"
    },
    {
        "": "*",
        "show": "Rick and Morty",
        "length of episode": "20",
        "no. of episodes/season": "11",
        "no. of seasons": "3",
        "total episodes": "33",
        "total time (min)": "660",
        "_id": "5aa0f826c7d9454068932421"
    },
    {
        "": "",
        "show": "Samurai Jack",
        "length of episode": "20",
        "no. of episodes/season": "13",
        "no. of seasons": "5",
        "total episodes": "62",
        "total time (min)": "1240",
        "_id": "5aa0f826c7d9454068932422"
    },
    {
        "": "",
        "show": "Taboo",
        "length of episode": "50",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": "400",
        "_id": "5aa0f826c7d9454068932423"
    },
    {
        "": "",
        "show": "True Detective",
        "length of episode": "55",
        "no. of episodes/season": "8",
        "no. of seasons": "2",
        "total episodes": "16",
        "total time (min)": "880",
        "_id": "5aa0f826c7d9454068932424"
    },
    {
        "": "",
        "show": "The Night Manager",
        "length of episode": "55",
        "no. of episodes/season": "6",
        "no. of seasons": "1",
        "total episodes": "6",
        "total time (min)": "330",
        "_id": "5aa0f826c7d9454068932425"
    },
    {
        "": "",
        "show": "Twin Peaks",
        "length of episode": "50",
        "no. of episodes/season": "Varied",
        "no. of seasons": "3",
        "total episodes": "35",
        "total time (min)": "1750",
        "_id": "5aa0f826c7d9454068932426"
    },
    {
        "": "",
        "show": "Community",
        "length of episode": "20",
        "no. of episodes/season": "Varied",
        "no. of seasons": "6",
        "total episodes": "110",
        "total time (min)": "2200",
        "_id": "5aa0f826c7d9454068932427"
    },
    {
        "": "",
        "show": "Parasyte: The Maxim",
        "length of episode": "20",
        "no. of episodes/season": "24",
        "no. of seasons": "1",
        "total episodes": "24",
        "total time (min)": "480",
        "_id": "5aa0f826c7d9454068932428"
    },
    {
        "": "",
        "show": "Clannad",
        "length of episode": "20",
        "no. of episodes/season": "23",
        "no. of seasons": "2",
        "total episodes": "4",
        "total time (min)": "80",
        "_id": "5aa0f826c7d9454068932429"
    },
    {
        "": "",
        "show": "Monster",
        "length of episode": "20",
        "no. of episodes/season": "74",
        "no. of seasons": "1",
        "total episodes": "74",
        "total time (min)": "1480",
        "_id": "5aa0f826c7d945406893242a"
    },
    {
        "": "*",
        "show": "Stranger Things",
        "length of episode": "50",
        "no. of episodes/season": "8",
        "no. of seasons": "2",
        "total episodes": "16",
        "total time (min)": "800",
        "_id": "5aa0f826c7d945406893242b"
    },
    {
        "": "*",
        "show": "Sherlock",
        "length of episode": "90",
        "no. of episodes/season": "3",
        "no. of seasons": "4",
        "total episodes": "13",
        "total time (min)": "1170",
        "_id": "5aa0f826c7d945406893242c"
    },
    {
        "": "",
        "show": "The Crown",
        "length of episode": "60",
        "no. of episodes/season": "10",
        "no. of seasons": "2",
        "total episodes": "20",
        "total time (min)": "1200",
        "_id": "5aa0f826c7d945406893242d"
    },
    {
        "": "",
        "show": "The Defenders",
        "length of episode": "60",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": "480",
        "_id": "5aa0f826c7d945406893242e"
    },
    {
        "": "",
        "show": "The End of the F***ing World",
        "length of episode": "25",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": "200",
        "_id": "5aa0f826c7d945406893242f"
    },
    {
        "": "",
        "show": "The Punisher",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": "715",
        "_id": "5aa0f826c7d9454068932430"
    },
    {
        "": "",
        "show": "The Runaways",
        "length of episode": "50",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": "500",
        "_id": "5aa0f826c7d9454068932431"
    },
    {
        "": "",
        "show": "The Tick",
        "length of episode": "25",
        "no. of episodes/season": "6",
        "no. of seasons": "1",
        "total episodes": "6",
        "total time (min)": "150",
        "_id": "5aa0f826c7d9454068932432"
    },
    {
        "": "*",
        "show": "The Leftovers",
        "length of episode": "60",
        "no. of episodes/season": "10",
        "no. of seasons": "3",
        "total episodes": "28",
        "total time (min)": "1680",
        "_id": "5aa0f826c7d9454068932433"
    },
    {
        "": "",
        "show": "The OA",
        "length of episode": "Varied",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": "430",
        "_id": "5aa0f826c7d9454068932434"
    },
    {
        "": "",
        "show": "The Man in the High Castle",
        "length of episode": "60",
        "no. of episodes/season": "10",
        "no. of seasons": "2",
        "total episodes": "20",
        "total time (min)": "1200",
        "_id": "5aa0f826c7d9454068932435"
    },
    {
        "": "",
        "show": "The Flash",
        "length of episode": "40",
        "no. of episodes/season": "23",
        "no. of seasons": "4",
        "total episodes": "92",
        "total time (min)": "3680",
        "_id": "5aa0f826c7d9454068932436"
    },
    {
        "": "",
        "show": "Hannibal",
        "length of episode": "40",
        "no. of episodes/season": "13",
        "no. of seasons": "3",
        "total episodes": "39",
        "total time (min)": "1560",
        "_id": "5aa0f826c7d9454068932437"
    },
    {
        "": "",
        "show": "Death Note",
        "length of episode": "20",
        "no. of episodes/season": "25",
        "no. of seasons": "1",
        "total episodes": "25",
        "total time (min)": "500",
        "_id": "5aa0f826c7d9454068932438"
    },
    {
        "": "",
        "show": "The Big Bang Theory",
        "length of episode": "20",
        "no. of episodes/season": "24",
        "no. of seasons": "11",
        "total episodes": "264",
        "total time (min)": "5280",
        "_id": "5aa0f826c7d9454068932439"
    },
    {
        "": "",
        "show": "Luther",
        "length of episode": "55",
        "no. of episodes/season": "Varied",
        "no. of seasons": "4",
        "total episodes": "16",
        "total time (min)": "880",
        "_id": "5aa0f826c7d945406893243a"
    },
    {
        "": "",
        "show": "Mr. Robot",
        "length of episode": "55",
        "no. of episodes/season": "10",
        "no. of seasons": "3",
        "total episodes": "30",
        "total time (min)": "1650",
        "_id": "5aa0f826c7d945406893243b"
    },
    {
        "": "*",
        "show": "Westworld",
        "length of episode": "55",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "10",
        "total time (min)": "550",
        "_id": "5aa0f826c7d945406893243c"
    },
    {
        "": "",
        "show": "Agent Carter",
        "length of episode": "40",
        "no. of episodes/season": "Varied",
        "no. of seasons": "2",
        "total episodes": "16",
        "total time (min)": "640",
        "_id": "5aa0f826c7d945406893243d"
    },
    {
        "": "*",
        "show": "Game of Thrones",
        "length of episode": "55",
        "no. of episodes/season": "10",
        "no. of seasons": "8",
        "total episodes": "73",
        "total time (min)": "4015",
        "_id": "5aa0f826c7d945406893243e"
    },
    {
        "": "",
        "show": "Unbreakable Kimmy Schmidt",
        "length of episode": "20",
        "no. of episodes/season": "13",
        "no. of seasons": "3",
        "total episodes": "39",
        "total time (min)": "780",
        "_id": "5aa0f826c7d945406893243f"
    },
    {
        "": "",
        "show": "Code Geass",
        "length of episode": "20",
        "no. of episodes/season": "24",
        "no. of seasons": "2",
        "total episodes": "48",
        "total time (min)": "960",
        "_id": "5aa0f826c7d9454068932440"
    },
    {
        "": "",
        "show": "Baccano!",
        "length of episode": "20",
        "no. of episodes/season": "16",
        "no. of seasons": "1",
        "total episodes": "16",
        "total time (min)": "320",
        "_id": "5aa0f826c7d9454068932441"
    },
    {
        "": "",
        "show": "Boku dake ga Inai Machi (ERASED)",
        "length of episode": "20",
        "no. of episodes/season": "12",
        "no. of seasons": "1",
        "total episodes": "12",
        "total time (min)": "240",
        "_id": "5aa0f826c7d9454068932442"
    },
    {
        "": "",
        "show": "11.22.63",
        "length of episode": "55",
        "no. of episodes/season": "8",
        "no. of seasons": "1",
        "total episodes": "8",
        "total time (min)": "440",
        "_id": "5aa0f826c7d9454068932443"
    },
    {
        "": "",
        "show": "House of Cards",
        "length of episode": "55",
        "no. of episodes/season": "13",
        "no. of seasons": "5",
        "total episodes": "65",
        "total time (min)": "3575",
        "_id": "5aa0f826c7d9454068932444"
    },
    {
        "": "",
        "show": "How to Get Away with Murder",
        "length of episode": "40",
        "no. of episodes/season": "15",
        "no. of seasons": "4",
        "total episodes": "60",
        "total time (min)": "2400",
        "_id": "5aa0f826c7d9454068932445"
    },
    {
        "": "",
        "show": "Preacher",
        "length of episode": "40",
        "no. of episodes/season": "10",
        "no. of seasons": "2",
        "total episodes": "23",
        "total time (min)": "920",
        "_id": "5aa0f826c7d9454068932446"
    },
    {
        "": "",
        "show": "You, Me and the Apocalypse",
        "length of episode": "50",
        "no. of episodes/season": "10",
        "no. of seasons": "1",
        "total episodes": "13",
        "total time (min)": "650",
        "_id": "5aa0f826c7d9454068932447"
    },
    {
        "": "",
        "show": "",
        "length of episode": "",
        "no. of episodes/season": "",
        "no. of seasons": "Total hours:",
        "total episodes": "",
        "total time (min)": "1525.266667",
        "_id": "5aa0f826c7d9454068932448"
    },
    {
        "": "",
        "show": "",
        "length of episode": "",
        "no. of episodes/season": "",
        "no. of seasons": "Total days:",
        "total episodes": "",
        "total time (min)": "63.10138889",
        "_id": "5aa0f826c7d9454068932449"
    }
]


