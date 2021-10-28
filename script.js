/*clears text boxes*/
document.getElementById('textIn').value = '';
//--------------------------------------------------
function myFunc() {

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz .!@#$%^&*()";
    var rot = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm .!@#$%^&*()";
    //----------------------------------------------------------------
    var input = document.getElementById("textIn").value;
    var output = ""; //leave empty
    //----------------------------------------------------------------
    //iterate through 
    for (var i=0; i<input.length; i++) { //how it iterates though
        var j = alphabet.indexOf(input[i]); //picks the letters
        output += rot[j]; //assigns the output variable to the thingy 
    }
    //----------------------------------------------------------------

    document.getElementById('textIn').value = output; //sets the text box content to the output
}
