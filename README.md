<h1>How Many Kittens? </h1>
<h2><i>The cutest way to visualise the amount of weight you have lost!</i></h2>

<small>(See demo <a href="https://oliviatatum.github.io/howmanykittens/" title="How Many Kittens?" target="_blank">here</a>)</small>


How Many Kittens? is a website for converting the amount of weight the user has lost into kittens!
It can be hard to visualise what it means to have lost 1lb, 2lb, 3lb... so How Many Kittens? provides a cute way to put the number on the scale into something easier (and cuter!) to picture.
The user has the option of inputting their weight loss in pounds or kilograms, and then they can see the "kittens-worth" appear in a basket one by one! 
And it's not just kittens... the more weight they lose, the more different cats they discover!


<h2><b>UX</b></h2>
Inspired by my own weight loss journey (and my four cats), I wanted to make a website which would help people visualise their weightloss. 
As such, <i>How Many Kittens?</i> is aimed at people who are trying to lose weight. <i>How Many Kittens?</i> is a cute way to envisage 
lbs or kgs, and serves as a good motivator to continue healthy weightloss - more weight lost towards your goal = more kittens!

<pre><h4>User Stories</h4>
<b><i>Claire</i></b>

Claire is a woman in her early thirties who is trying to lose weight for her health. 
She sees she has lost 7lb but doesn't really know what that actually <i>means</i>.
She tries <i>How Many Kittens?</i> and in just a couple of clicks she can see that she has lost 14 kittens worth of weight! 
Having seen and held kittens, she finds this puts her weight loss into a much better perspective in her mind. 
She feels proud and motivated. 'That's a lot of kittens! Lets see how many more I can get.'

<b><i>Max</i></b>

Max is nine years old, and his mum has been told by a doctor that he needs to lose weight. 
She is trying to keep things fun while making changes to help the family live a healthier life.
Once a week Max weighs himself, and they go on <i>How Many Kittens?</i> together to see just how
many kittens he has "won" this week. It's a fun activity that they both look forward to, and
his mum uses it as a motivator for him when he is complaining about eating a healthy meal:
"Are we going to get more kittens this week?". As he reaches different milestones, he
discovers different cats, and has fun learning about different breeds!


</pre>

<h4>Wire Frames</h4>

<li><a href="https://github.com/oliviatatum/howmanykittens/blob/53591a0208a98850a81a31eda638a279a6567213/wireframes/wireframe1.pdf"> Wireframe 1 </a></li>
When I first started planning my project, I thought about using an API to produce random cat facts at the bottom of the page when it loaded. After discussion with my mentor, I found out that the API I had found was written in Heroku, not Javascript, so would not work for my project. Having completed my project, I can see there wouldn't have been space for it anyway.
<li><a href="https://github.com/oliviatatum/howmanykittens/blob/53591a0208a98850a81a31eda638a279a6567213/wireframes/wireframe2.pdf"> Wireframe 2 </a></li>
Another factor I thought about was how to show the kitten figure visually. In this wireframe I wrote "kitten picture (changes depending on amount). I considered the idea of using photos from google of kittens, so having a picture of 1 kitten when the result was 1 kitten, 2 kittens for 2 kittens etc... however there is a big issue with this, and that is that there is a point of diminishing returns when it comes to searching for increasing quantities of kittens in one picture! In other words, it's easy to find a picture with one, two, or three kittens in it, but finding twenty-one, twenty-two, or twenty-three kittens in one photo is pretty much impossible. 
<li><a href="https://github.com/oliviatatum/howmanykittens/blob/53591a0208a98850a81a31eda638a279a6567213/wireframes/wireframe3.pdf"> Wireframe 3 </a></li>
I also considered using animation to display my kitten result, but the type of animation I could feasibly do using Javascript wasn't the sort of animation I was after. 
<li><a href="https://github.com/oliviatatum/howmanykittens/blob/53591a0208a98850a81a31eda638a279a6567213/wireframes/wireframe4.pdf"> Wireframe 4 </a></li>
In this wireframe I planned how I would present the site on mobile devices. 




----------------------------------------
<h2><b>Features</b></h2>

<h3><b>Existing Features</b></h3>

The main feature of <i>How Many Kittens?</i> is the <b>Catulator</b>- the calculator that converts weight lost into it's kitten equivalent. To perform this calculation it uses several JavaScript functions:

<pre><ol><li>A function to retrieve the unit (lb or kg) 
selected by the user via a drop down list</li>

<li>A function to retrieve the number 
entered into the data entry box by the user</li>

<li>A function to select both the weight and breed of the kitten 
based on the unit selected and amount entered by the user (calls on 
function 1 and 2).
So if the amount entered is between 1 and 10, "kittens" would be chosen, and
the weight would be either 0.5 if the unit was lbs, or 0.226796 if 
the unit was kg.</li>

<li>A function to perform the calculation, parsing 
in the unit chosen by the user, and returning 
<i>function2/function3(unit)</i> as an integer 
<small>(so as not to get decimal kittens!)</small></li>

</pre></ol>
After the calculation is performed, it is then displayed on the screen both in text and in images. Functions are also used to achieve this:<br>

<pre><ol><br><li>A function to display the result in text on the 
screen, using template literals and the getElementById() 
method to print the text inside a div in the html file.
A if/else function is used to choose what the content of the text says,
based on the previous function's outcome. </li>

<li>A function to produce the kitten pictures in the 
basket div in the html file, using the createElement(img)
method. The image is chosen using an if/else if/else function
and the weight of the cat in question (using the data from the third function).</li>

<li>A recursion to produce the image of a kitten one by
one in the basket at the bottom of the screen, until 
the result amount is reached. This also temporarily disables the Go! button
whilst the action is being performed, to prevent multiple clicks.</li> 

</pre>These functions now need to be called, so we also have:

<pre><li>A function to call all the other functions.</li>

<li>An Event Listener to listen for the event of a mouse
  click on the "Go!" button, and call the previous function,
  thus calling all the other functions up until now.</li>

</pre>

If the user wants to make a new entry in the entry box, the previous result needs to clear. So there is also a function that empties the kitten basket div when there are any of these following events in the entry box: <b>change keyup copy paste cut</b>


<h3><b>Future Features</b></h3>

A feature I would like to add in the future would be the ability to drag and drop the kittens, and have the kitten picture change in the process. So the kitten starts off sitting in the basket, but on mouseDown, it changes to a <i><b>dangling cat</b></i> image, like the cursor is holding it by its scruff. Then on mouseUp, it returns to its sitting position wherever it has been put on the screen. I think this would add an extra element of fun to the site, as the kittens would be more like virtual pets. 


<h3><b>Technologies Used</b></h3>
<ul>
<li><h4>html5</h4></li> I used html to write the content of the site.
<li><h4>css3</h4></li> I used css to format and style the header, footer, background, and all other elements on <i>How Many Kittens?</i>, as well as using css media queries to make the site responsive.
<li><h4>JavaScript</h4></li>JavaScript was used in <i>How Many Kittens?</i> to create the functionality of the Catulator, as well as powering a popover featured in the header.
<li><a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/" title="getbootstrap" target="_blank"><h4>Bootstrap 4.3.1</h4></a></li>I used Bootstrap to help with the layout of the site, and in particular Bootstrap's grid system. I also used bootstrap's Navbar elements as the basis of my header and footer.
<li><a href="https://jquery.com/" title="jQuery" target="_blank"><h4>jQuery 3.4.1</h4></a> jQuery is used on several occasions in my JavaScript code, such as to empty the kitten div, and to initiate the popover.
<li><a href="https://fontawesome.com/" title="FontAwesome" target="_blank"><h4>Font Awesome</h4></a>I used Font Awesome's icons in my project, specifically the cat paw, for my popover, and the Github and LinkedIn logos to link my pages in the footer.
</ul>


----------------------------------------

<h2><b>JQuery</b></h2>
The project uses JQuery to simplify DOM manipulation.


<h2><b>Testing</b></h2>
I used <a href="https://codebeautify.org/jsvalidate">CodeBeautify</a> and <a href="https://jshint.com"> jshint </a> to validate my JavaScript, <a href="https://validator.w3.org/"> W3C Markup Validation </a> 
to validate my HTML, and <a href="https://jigsaw.w3.org/css-validator/">W3C CSS Validation</a> to validate my CSS. 

<a href="https://github.com/oliviatatum/howmanykittens/blob/193a50d0dc729c51315beb5aacd8d4fa69f9f55c/manualTestingHowManyKittens.pdf">Manual testing documentation</a> 

<h2><b>Deployment</b></h2>
I used GitHub Pages to deploy my demo page, by going into the setting on my <i>HowManyKittens</i> page, scrolling down to GitHub Pages, selecting the master branch, and clicking deploy.
Throughout my project, I used git to add, commit, and push additions and alterations to GitHub. I used all these commands in the terminal. After initialising my repository using <b>git init</b>,
I would first check what was needing to be added by entering<b>git status</b>. Then I would add it but entering <b>git add .</b>, then commit it with a message <b>git commit -m "<i>description of change/addition that I am commiting</i>"</b>. Finally I would 
push it to my github repository. 

<h2><b>Credits</b></h2>

<b>Content</b><br>

All text content <i>How Many Kittens?</i> was written by me.<br><br>
The weights of the different types of cats were found on google, from various sources:
<ul>
<li><a href="http://members.petfinder.com/~PA16/kittenage.html">kitten weight </a></li>
<li><a href="https://www.animalfactsencyclopedia.com/Baby-leopard.html">leopard cub weight </a></li>
<li><a href="http://www.lairweb.org.nz/tiger/cubs3.html">tiger cub weight</a></li>
<li><a href="http://mammalfacts.com/lion-facts.html">lion cub weight</a></li>
<li><a href="https://g.co/kgs/gnGKvT">Pallas' cat weight</a></li>
<li><a href="https://www.worldatlas.com/articles/the-largest-big-cats-in-the-world.html">Marbled cat weight</a></li>
<li><a href="https://www.worldatlas.com/articles/the-largest-big-cats-in-the-world.html">Serval weight</a></li>
</ul>
<b>Media</b><br>

The paws background was created by my friend and artist, <a href="https://charliebryan.co.uk/">Charlie Bryan</a>.<br>
All other art was drawn by me, using <a href="https://huion.uk/">Huion Inspiroy h320m</a> drawing tablet and <a href="https://krita.org/en/">Krita</a> open source drawing program. <br>

<b>Acknowledgements</b><br>

Big thank you to all the tutoring team at Code Institute for their continuous patience and guidance in helping me get my head around JavaScript.<br>
Big thank you as well to my mentor Brian Macharia for his enthusiasm and support.


