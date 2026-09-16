from flask import render_template, request
from ChordiggerApp import app
import requests
import random

@app.route('/')
def index():
    return render_template('ChordiggerApp/index.html')
@app.route('/ChordsSearch', methods=['GET', 'POST'])
def player():
    if request.method == 'GET':
        return render_template('ChordiggerApp/index.html')
    if request.method == 'POST':
        if int(request.form['chords']) == 0:
            query = "C G Am Em F C F G"
        elif int(request.form['chords']) == 1:
            query = "Am F G C"
        elif int(request.form['chords']) == 2:
            query = "F G Em Am"
        else:
            return "error"
        params = {
            "q": {query},
            "page": 1
        }
        response = requests.get("https://widget.songle.jp/api/v1/songs/search.json", params=params)
        data = response.json()
        num = random.randint(0, 39)
        itemURL = data[num]["permalink"]
    return render_template('ChordiggerApp/player.html', itemURL=itemURL)
