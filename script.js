function updateClock() {
    var now = new Date();
    var hour = formatTime(now.getHours());
    var minute = formatTime(now.getMinutes());
    var second = formatTime(now.getSeconds());
  
    document.getElementById("hour").textContent = hour;
    document.getElementById("minute").textContent = minute;
    document.getElementById("second").textContent = second;
  }
  
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
  
  setInterval(updateClock, 1000);
  
  let channel = document.getElementById("one");
  
  let img1 = document.getElementById("img");
  
  channel.addEventListener("click", function() {
      img1.src="https://7xo9.github.io/WatchStoreHW/black.png";
      
  });
  
  let channe2 = document.getElementById("to");
  
  let img2 = document.getElementById("img");
  
  channel.addEventListener("click", function() {
      img2.src="https://7xo9.github.io/WatchStoreHW/rose.png";
      
  });
  
  let channe3 = document.getElementById("three");
  
  let img3 = document.getElementById("img");
  
  channel.addEventListener("click", function() {
      img3.src="https://7xo9.github.io/WatchStoreHW/pur.png";
      
  });