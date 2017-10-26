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
            if(i === inputVal.length -1) wordCount++;
        }
    }

    avgWords = wordCount / lineCount;

    document.getElementById("r1").innerHTML = "There are an average of " + avgWords.toString() + " words per sentence.";
    document.getElementById("r2").innerHTML = "There are " + spaceCount.toString() + " spaces in this text.";
    document.getElementById("r3").innerHTML = "There are " + wordCount.toString() + " words in this text.";
    document.getElementById("r4").innerHTML = "There are " + lineCount.toString() + " sentences in this text.";
}
