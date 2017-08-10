var time=0;
var running=0;
var mins, secs, tenths;
//localStorage.setItem("time");
//localStorage.setItem("days");

function startPause(){
  console.log(secs);
  if(running==0){
    running = 1;
    increment();
    document.getElementById("startPause").innerHTML="Pause";
    //var JSONoutput = JSON.stringify(time);
    //localStorage.setItem("time", JSONoutput);
  }else{
    running = 0;
    document.getElementById("startPause").innerHTML="Resume";
  }
}

function reset(){
  running=0;
  time=0;
  document.getElementById("startPause").innerHTML="Start";
  document.getElementById("output").innerHTML= "00:00:00";
}

function increment(){
  if(running ==1){
    setTimeout(function(){
      time++;
      mins = Math.floor(time/10/60);
      secs = Math.floor(time/10 % 60);
      tenths = time % 10;

      //var mins = Math.floor(time/10/60);
    //  var secs = Math.floor(time/10 % 60);
    //  var tenths = time % 10;

      if(mins < 10){
        mins= "0" + mins;
      }
      if(secs < 10){
        secs = "0" + secs;
      }

      document.getElementById("output").innerHTML = mins + ":" + secs + ":" + "0" + tenths;
      //savedMinutes = min;

      if(mins > 5 && mins < 10 ){
        document.getElementById("output").style.backgroundColor = "yellow";
      }
      if(mins > 10){
        document.getElementById("output").style.backgroundColor = "red";
      }
      increment();
    },100);
  }
}

//function record() {
  //timee.push(mins, secs, tenths);
  //document.getElementById("recordd").innerHTML = timee;;
//}


var timee = [];
var usage = [1];
var usageNum = 1;

//what is the x variable? number of times used? Days? how do i measure that?
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: usage,
    datasets: [
      {
        data: timee,
        label: "Shower Time",
        borderColor: "blue",
        fill: false
      }
    ]
  }
});

function addData() {
  //takes the timer data and puts it on a graph
  timee.push(mins);
  usageNum = usageNum + 1;
  myChart.data.labels.push("");
  myChart.data.labels.push(usageNum);

  myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(timee);
  });
  myChart.update(0);
}
