function runInput() {
    var avgWords = 0;
    var spaceCount = 0;
    var wordCount = 0;
    var lineCount = 0;

    var inputVal = document.getElementById("inputTXT").value; //sets the user's input into varable.

    for (var i = 0; i < inputVal.length; i++) {
        var tv = inputVal[i]; //places the current test value into a convenient varable

        if (tv === " ") {
            spaceCount++;
            if (i > 0 && inputVal[i - 1] !== " ") wordCount++; // checks for a whitespace at the start of the string or double whitespace.
        }
        else if (tv === "." || tv === "!" || tv === "?") {
            lineCount++;
            if (i === inputVal.length - 1) wordCount++; //checks for end of string and adds last word to total count.
        }
    }

    avgWords = parseFloat((wordCount / lineCount).toFixed(2)); //sets the average words per sentence and rounds to 2 dec. places.

    document.getElementById("r1").innerHTML = "There are an average of " + avgWords.toString() + " words per sentence.";
    document.getElementById("r2").innerHTML = "There are " + spaceCount.toString() + " spaces in this text.";
    document.getElementById("r3").innerHTML = "There are " + wordCount.toString() + " words in this text.";
    document.getElementById("r4").innerHTML = "There are " + lineCount.toString() + " sentences in this text.";