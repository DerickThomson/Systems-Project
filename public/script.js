var myList;
$.ajax({
    url: '/upload',
    complete: function (data) {
        myList = data.responseJSON;
        //console.log(myList);
        var cards = document.getElementById("shows");
        var noShow = document.getElementById("none");
        var i = 0;
        if (myList[i] != null) {
            noShow.style.display = "none";
            while (myList[i] != null) {
                cards.innerHTML += "<div class='card'><img src='pics/" + (myList[i]["s no."] - 1) + ".jpg'/><div class='cardName'><b>" + myList[i].show + "</b></div><div class='cardDesc'>"+myList[i].decription+"</div>";
                i++;
            }
        }
        else {
            noShow.innerHTML = "C'mon, you know you can give shows more time than that.";
        }
    }
})