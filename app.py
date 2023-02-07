from flask import Flask, render_template, url_for, request
import urllib.request,json


app = Flask(__name__)

@app.route('/')
def bases():
    return render_template("base.html")

@app.route('/reserva')
def reservas():
    return render_template("reserva.html")

@app.route('/eventos')
def eventoss():
    return render_template("calen.html")
    
if __name__=="__main__":
    app.run(debug=True)
    
    
