// const HOURHAND = document.querySelector("#hour");
// const MINUTEHAND = document.querySelector("#minute");
// const SECONDHAND = document.querySelector("#second");


// function run_the_clock(){
//   var date = new Date();
//   let hr = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();
//   console.log("Hour: "+hr+ " Minute: "+ min + " Second: "+ sec);

//   let hrPosition = hr*360/12 + ((min * 360/60)/12) ;
//   let minPosition = (min * 360/60) + (sec* 360/60)/60;
//   let secPosition = sec * 360/60;

//   //Then we need to apply these numbers as degrees in the inline styles for transform on each of the objects.
//   HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
//   MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
//   SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
// }

setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min +0.1*sec;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);