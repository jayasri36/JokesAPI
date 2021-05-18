<script>
  function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;

    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  }
</script>
 <div class="main">
	<div class="laugh">
		<h1>WANT TO LAUGH?🤣
		</h1>
	</div>
	<div class="im">
		<img  alt="refresh" src="https://www.cbc.ca/kidscbc2/content/the_feed/LMTY_jokes_header.jpg" height=300px weight=300px>
	</div>
	<div class="dd">
		<h3>Why late?come on click once laugh out twice!!</h3>
	</div>
	<div class="container">
		<div class="joke">
			<p>How many seconds are in a year? 12. January 2nd, February 2nd, March 2nd, April 2nd.... etc</p>
		</div>
		<div>
			<button>Get a joke😜</button>
		</div>
	</div><div class="new">
  <h2> Want to listen to the joke?</h2>
		<div class="inp"><input type="text" id="text-to-speech" placeholder="copy the joke and paste it here"/></div>
    <div class="li"><button type="button" on:click={textToAudio}>listen😝</button></div>
    <div><h4><b>NOTE:</b>copy text and click on "listen" button.</h4></div>
    
</div> <h1>Hope you got the joke!!!😆</h1>
<h1>Don't laugh yourself 🚫share this with your friends too!!!👍</h1></div>


<style>
  .container {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    background-color: gray;
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  .container p {
    font-size: 25px;
    font-weight: 300;
    line-height: 3rem;
    text-align: justify;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  button {
    margin-top: 2rem;
    width: fit-content;
    padding: 1rem;
    font-size: 1rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    align-self: flex-end;
    display: flex;
    margin-left: 22rem;
  }
  .laugh {
    text-align: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(14, 13, 17);
  }
  .dd {
    text-align: center;
    padding: 1rem;
    margin: 1rem;
    border-color: rebeccapurple;
    background-color: black;
    border-radius: 10px;
    color: white;
  }
  .im {
    margin-left: 30px;
  }
  .main {
    border-style: dotted;
    background-color: rgb(111, 93, 128);
    margin: 30px;
  }
  h2 {
    text-align: center;
    color: black;
    padding: 15px;
    margin: 25px;
    border-radius: 10px;
    border-style: dotted;
  }
  .inp {
    margin-left: 200px;
  }
  .new {
    background-color: grey;
    margin: 20px;
    border-radius: 10px;
    padding: 20px;
  }
  h1 {
    text-align: center;
  }
</style>
