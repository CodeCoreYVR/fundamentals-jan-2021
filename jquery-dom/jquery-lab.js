// jQuery Lab: http://bit.ly/jquery-lab

// ==== SELECTION ====

// Select all shapes
$('.shape') // returns jquery wrapped set
document.querySelectorAll('.shape') // querySelectorAll returns a Node List (includes Text/Comment Nodes) that match the selector
document.getElementsByClassName('shape') // getElementsByClassName returns an HTML collection that matches the class name (no "." prepending the name)

// Select all black shapes
$('.shape.black') 
document.querySelectorAll('.shape.black')

// returns the count of all the shapes
$('.shape').length 
document.querySelectorAll('.shape').length 
document.getElementsByClassName('shape').length

$('.shape.black').length // returns the count of all the black shapes

// Get the count of all black and blue shapes
document.querySelectorAll('.shape.black, .shape.blue').length
$('.shape.black, .shape.blue').length
$('.shape.black').length + $('.shape.blue').length

// Select all h1 tags
$('h1')
document.getElementsByTagName('h1')

// Select all small circles
$('.small.circle') 
document.querySelectorAll('.small.circle')

$('h1')[0] // returns the element node itself (which can call DOM methods for elements)
$('h1').eq(0) // returns the element wrapped in a set at that index, so we can chain jQuery methods on it like this:
$('h1').eq(0).hide()

// ==== Attributes ====

// Get the "href" attribute of the first link on the page
$('a').eq(0).attr('href')
document.querySelectorAll('a')[0].getAttribute('href')

// Set the "href" attribute of all the links to "http://www.codecore.ca"
$('a').attr('href') // If you read an attribute on an entire set, it will read the first one only
$('a').attr('href', 'http://www.codecore.ca') // When you set, it sets for everything in the set

const links = document.querySelectorAll('a')
for (let i = 0; i < links.length; i++) {
  links[i].setAttribute('href', 'http://www.codecore.ca')
}

// Set the class of all links to "highlight"
$('a').attr('class', 'highlight') 

// Set the class of all shapes to "highlight"
// If we do the following, it will replace all existing classes
$('.shape').attr('class', 'highlight') 

// Add or remove a class
$('.shape').addClass('highlight')
$('.shape').removeClass('highlight')
$('.shape').toggleClass('highlight')

// note .forEach is a NodeList method, can't be called on HTMLCollections
// which are returned from getElementsByTagName, getElementsByClassName, etc.
// If you have an HTMLCollection, use a for loop
const shapes = document.querySelectorAll('.shape')
shapes.forEach(node => {
  node.classList.add('highlight')
  node.classList.remove('highlight')
  node.classList.toggle('highlight')
})

// ==== Manipulation ====

// Remove all blue shapes 
$('.shape.blue').remove()
document
  .querySelectorAll('.shape.blue')
  .forEach(blueShape => blueShape.remove())

// Remove all shapes in the orange container
$('#orange-container .shape').remove()
document
  .querySelectorAll('#orange-container .shape')
  .forEach(shape => shape.remove())
  
// Remove all small red circles
$('.circle.red.small').remove()
document
  .querySelectorAll('.circle.red.small')
  .forEach(shape => shape.remove())

// Get the html contents of the reset button
$('#reset').html()
document.getElementById('reset').innerHTML
document.querySelector('#reset').innerHTML

// Get the html contents of all links
$('a').html() // This only returns the first element (of the wrapped set) html contents

// One way to read all the contents 
// each() is a jQuery method
// The callback in each() takes in the index
$('a').each(function(index) {
  console.log($('a').eq(index).html())
})

// Change the reset button to say "Launch Missiles!"
$('#reset').html('Launch Missiles!')
document.getElementById('reset').innerHTML = 'Launch Missiles!'

// Change all the h1 tags to say "[Your Name] is Cool!"
const name = prompt('What is your name?')
$('h1').html(`${name} is cool!`)

document.querySelectorAll('h1').forEach(h1 => {
  h1.innerHTML = `${name} is cool!`
})

// ==== TRAVERSAL ====

// Select all shapes in the purple container
$('#purple-container').children()
document.querySelector('#purple-container').children // returns HTMLCollection of child elements
document.querySelector('#purple-container').childNodes // returns Node List including text nodes

// Select the green container using "parent()"
$('.medium.diamond.red.shape').parent()
document.querySelector('.medium.diamond.red.shape').parentElement

// Select <li> tags that have anchor tags nested
$('li a') // selects all <a> that are descendants of <li>
  .closest('li') // selects the closest ancestor that matches the selector 

const liWithAnchors = []
document.querySelectorAll('li a').forEach(a => {
  liWithAnchors.push(a.closest('li'))
})

// ==== EFFECTS ====

// Hides the purple container
// sets display: none (still in the DOM)
// remove() (not in the DOM anymore)
$('#purple-container').hide() 
document
  .querySelector('#purple-container')
  .style
  .display = 'none'

// Show the purple container
$('#purple-container').show()
document
  .querySelector('#purple-container')
  .style
  .display = 'block'

// Hide all links
$('a').hide()
document.querySelectorAll('a').forEach(a => {
  a.style.display = 'none'
})

// Show all links
$('a').show()
document.querySelectorAll('a').forEach(a => {
  a.style.display = 'inline'
})

// ==== EVENTS ====

// When any shape is clicked, log "shape clicked" to the console
// "click" is the name of the event
// The second argument is a callback, also known as the event handler
// It will be invoked when the event fires
$('.shape').on('click', function() {
  console.log('shape clicked')
})

document.querySelectorAll('.shape').forEach(shape => {
  shape.addEventListener('click', function() {
    console.log('shape clicked')
  })
})

// When our mouse enters a blue circle, log "blue circle: go away!"
$('.blue.circle').on('mouseenter', function() {
  console.log('blue circle: go away!')
})

document.querySelectorAll('.blue.circle').forEach(blueCircle => {
  blueCircle.addEventListener('mouseenter', function() {
    console.log('blue circle: go away!')
  })
})

// When our mouse leaves a blue circle, log "blue circle: goodbye!"
$('.blue.circle').on('mouseleave', function() {
  console.log('blue circle: goodbye!')
})

document.querySelectorAll('.blue.circle').forEach(blueCircle => {
  blueCircle.addEventListener('mouseleave', function() {
    console.log('blue circle: goodbye!')
  })
})

// When a mouse enters any <tr>, set its class to "highlight"
// "this" in the event handler refers to the element that the event 
// listener was attached to
$('tr').on('mouseenter', function() {
  console.log(this) // DOM element
  console.log($(this)) // DOM element wrapped in a jQuery set
})

$('tr').on('mouseenter', function() {
  $(this).attr('class', 'highlight')
})

document.querySelectorAll('tr').forEach(tr => {
  tr.addEventListener('mouseenter', function() {
    console.log('The element that the event was attached:', tr)
    console.log(tr === this)
    tr.setAttribute('class', 'highlight')
  })
})

// When a mouse leaves any <tr>, set its class to ""
$('tr').on('mouseleave', function() {
  $(this).attr('class', '')
})

document.querySelectorAll('tr').forEach(tr => {
  tr.addEventListener('mouseleave', function() {
    tr.setAttribute('class', '')
  })
})

// When a shape is clicked, log its "class" attribute to the console
$('.shape').on('click', function() {
  console.log($(this).attr('class'))
})

document.querySelectorAll('.shape').forEach(shape => {
  shape.addEventListener('click', function() {
    console.log(shape.getAttribute('class'))
  })
}) 

// When a shape is clicked, hide it
$('.shape').on('click', function() {
  $(this).hide()
})

document.querySelectorAll('.shape').forEach(shape => {
  shape.addEventListener('click', function() {
    shape.style.display = 'none'
  })
}) 

// When any shape is clicked, remove its container
$('.shape').on('click', function() {
  $(this).closest('.container').remove()
})

document.querySelectorAll('.shape').forEach(shape => {
  shape.addEventListener('click', function() {
    shape.closest('.container').remove()
  })
}) 