#%%
from flask import Flask, render_template
#%%
app = Flask(__name__)
#%%
@app.route("/")
def home():
    return render_template('index.html')

@app.route("/corsExample")
def corsExample():
    return render_template('corsExample.html')

@app.route("/piApproximation")
def piApproximation():
    return render_template('piApproximation.html')

@app.route("/uniformApproximation")
def uniformApproximation():
    return render_template('uniformApproximation.html')