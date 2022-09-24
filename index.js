function shout(string) {
    return string.toUpperCase();
    // todo
  }
  
  function whisper(string) {
    return string.toLowerCase();
  }
  
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  function sayHiToHeadphoneRoommate(string) {
    if (string.toLowerCase()) {
        console.log("I can't hear you");
    } else if (string.toUpperCase()) {
        console.log("YES INDEED");
    } else if (string) {
        console.log("Iwould love it");
    }

  }