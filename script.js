import data from './data.json' assert { type: 'json' };
console.log(data);
const dailyCurrent = []
const weeklyCurrent = []
const monthlyCurrent = []
const dailyPrev = []
const weeklyPrev = []
const monthlyPrev = []

for (const property of data) {
  dailyCurrent.push(property.timeframes.daily.current);
  weeklyCurrent.push(property.timeframes.weekly.current);
  monthlyCurrent.push(property.timeframes.monthly.current);
  dailyPrev.push(property.timeframes.daily.previous);
  weeklyPrev.push(property.timeframes.weekly.previous);
  monthlyPrev.push(property.timeframes.monthly.previous);

}

const cur = document.getElementsByClassName("cur-time");
const prev = document.getElementsByClassName("last-time")

const buttons = document.getElementsByTagName("button");
console.log(buttons);


$("button").on("click", function(){
  for (let button of buttons){
    button.setAttribute("check","");
  }
  $(this).attr("check", "checked");
  
  if($(this).html() == "Daily"){
    for(let i = 0; i<6 ;i++){
      cur[i].innerHTML = dailyCurrent[i] +"hrs";
      prev[i].innerHTML = "Last day - " + dailyPrev[i] +"hrs";
    }
  }
  if($(this).html() == "Monthly"){
    for(let i = 0; i<6 ;i++){
      cur[i].innerHTML = monthlyCurrent[i] +"hrs";
      prev[i].innerHTML = "Last month - " + monthlyPrev[i] +"hrs";
    }
  }
  if($(this).html() == "Weekly"){
    for(let i = 0; i<6 ;i++){
      cur[i].innerHTML = weeklyCurrent[i] +"hrs";
      prev[i].innerHTML = "Last day - " + weeklyPrev[i] +"hrs";
    }
  }

});

