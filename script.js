function clickbtn() {
    let str = "";
    const chords = document.selectchords.chords;

    for (let i = 0; i < chords.length; i++) {
      if (chords[i].checked) {
        selectedno = chords[i].value;
        break;
      }
    }

    var maxpagenum = 250
    if (selectedno === "0") {
      var query = "C G Am Em F C F G";
      var maxpagenum = 45
    } else if (selectedno === "1") {
      var query = "Am F G C";
    } else if (selectedno === "2") {
      var query = "F G Em Am"
    }

    callAPI(query, maxpagenum)

  }

function callAPI(query, maxpagenum){

    var pagenum = Math.floor(Math.random() * maxpagenum) + 1;

    fetch(`https://widget.songle.jp/api/v1/songs/search.json?q=${query}&page=${pagenum}`)

    .then(response => {
      if (!response.ok) {
        throw new Error('ネットワークエラー');
      }
      return response.json();
    })

    .then(data => {
      var songno = Math.floor(Math.random() * Object.keys(data).length) + 1;
      var url = data[songno].permalink;
      var title = data[songno].title;
      drawresult(url, title)
    })

    .catch(error => {
      console.error('エラー:', error);
    });

  }

function drawresult(url, title){
    document.getElementById("result").innerHTML = `<a href=${url}>${title}</a>`
  }
