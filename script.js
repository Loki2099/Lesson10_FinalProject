function runInput()
{
    var avgWords = 0;
    var spaceCount = 0;
    var wordCount = 0;
    var lineCount = 0;

    var inputVal = document.getElementById("inputTXT").value;

    for (var i = 0; i < inputVal.length; i++) {
        var current = inputVal[i];

        if (current === " ") {
            spaceCount++;
            if (i > 0) wordCount++;
        }

        if (current === "." || current === "!" || current === "?"){
            lineCount++;
        }
    }

    avgWords = wordCount / lineCount;

    var r1 = document.createElement("p");
    r1.innerHTML("There are an average of " + avgWords.toString() + " words per sentence.");
    var r2 = document.createElement("p");
    r2.innerHTML("There are " + spaceCount.toString() + " spaces in this text.");
    var r3 = document.createElement("p");
    r3.innerHTML("There are " + wordCount.toString() + " words in this text.");
    var r4 = document.createElement("p");
    r4.innerHTML("There are " + lineCount.toString() + " sentences in this text.");
}
