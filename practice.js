<!DOCTYPE html>
<html>
<body>

<h2>what can javascript do? </h2>
<p id="green"> JavaScript can change HTML content. </p>
<button type="button" onclick="document.getElementById('green').innerHTML = 'Hello World!'">Click Here!</button>


<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="green"></p>
p

//to show hidden block
<p id="demo" style="display:none">Hello JavaScript!</p>
<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>



</body>
</html>