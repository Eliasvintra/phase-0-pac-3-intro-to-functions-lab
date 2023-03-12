function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    const answer = "I can\'t hear you!";
    const answer1 = "YES INDEED!";
    const answer2 = "I would love to!";

    if (string === string.toLowerCase()) {
        return answer;
    } else if (string === string.toUpperCase()) {
        return answer1;
    } else {string === "Let's have dinner together!"
        return answer2;
    }
}








/* return;
    if (string.toLowerCase()) {
        string = 'I can\'t hear you!';}
      console.log("string.toLowerCase()", string)
        if (string.toUpperCase()) {
          string = 'YES INDEED!'}
          console.log("string.toUpperCase()", string)
          if (string = string) {
            'I would love to!'}
            console.log("string = string", string)*/
