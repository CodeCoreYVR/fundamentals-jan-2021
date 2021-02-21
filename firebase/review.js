// Change circle colours to the value of the input using jQuery
// https://s3.amazonaws.com/codecore/jquery-lab/index.html
$('#form-1').on('submit', function(e) {
  const colour = $('input:first-child').val()
  $('.circle').css('background-color', colour)
})

// Frequency of Letters



// sentence.splice(letter);
function check_letter() {
  var sentence = prompt("type a sentence"); // "test"
  const output = {}

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]

    // const val = ++this._nextId[letter];
    // //this needs to check the value of each letter, add a new variable if one dosent already exsist
    if (output[letter]) { 
      // if the letter was previously added, increment count by 1
      output[letter]++
    } else {
      output[letter] = 1
    }
  }

  return output
}





// ask user for a sentence

// check each letter for what it is
//start a counter for that letter if one isn't already set up
//if there is a counter for that letter, increase it's value by one