function timegeneration(starttime,end,interval){
    
   // var x = [];
    var date = new Date(new Date('01/01/2015 ' + starttime).getTime() + interval * 60000);
  var tempTime = ((date.getHours().toString().length === 1) ? '0' + date.getHours() : date.getHours()) + ':' +
    ((date.getMinutes().toString().length === 1) ? '0' + date.getMinutes() : date.getMinutes()) + ':' +
    ((date.getSeconds().toString().length === 1) ? '0' + date.getSeconds() : date.getSeconds());
    //alert("inside"+Number(tempTime.toString().split(":")[0]));
    if (Number(tempTime.toString().split(":")[0])>=Number(end.toString().split(":")[0])){
        tempTime = "";
    }
  return tempTime;
   // return x; 
}
$(document).ready(function() {
var credithrperweek = 150;
var officialworkmins  = 540;
var strttime = "8:00:00";
var endtime = "17:00:00";
        var strttime1 = 8;
var endtime1 = 17;
var hrhand = 0;
var minhand = 0;
var timeslots = [];



//alert(timeslots);
//var y = timegeneration(starttime,endtime);
var days = ["Mon","Tues","Wed","TR","Fr"];
$("#show").click(function(){
    var noofdays = $("#NoOfDays").val();
    alert(noofdays);
   var teachinghrsperday = Math.floor((credithrperweek/noofdays));
   var iteration = Math.floor(officialworkmins/teachinghrsperday);
   //alert(iteration);
//alert(teachinghrsperday);
while (strttime1 <= endtime1) {
//alert("before"+strttime);
  strttime = timegeneration(strttime,endtime,teachinghrsperday);
  //alert(strttime);
  if (strttime=== ""){
      break;
  }
  else{
  //strttime1 = Number(strttime.toString().split(":")[0]);
  //alert((strttime.toString().split(":")[0])+"."+(strttime.toString().split(":")[1]));
  //alert("after"+strttime);
  //alert("check"+strttime !== endtime);
  timeslots.push(strttime);
  }
}
   var x = "<tr id='row' data-href='#'>";
   var y = "</tr>";
   var z = "";
   var i = 0;
   var res = "";
   var firstcol = "";
   var constIncrement = 0;
   var positiveInc = 0;
          // = (hrhand+(minhand/100)).toFixed(2);
   
   /*if (teachinghrsperday>60){
       hrhand = Math.floor(teachinghrsperday/60);
      // alert(hrhand);
       minhand = teachinghrsperday%60;
       //alert(minhand);
     constIncrement  = (hrhand+(minhand/100));
    // alert("constIncrement"+constIncrement);
   }
   else{
       constIncrement = teachinghrsperday/100;
   }*/
   
           //"<td>"+"baby"+"</td>";
           var outerloop = 0;
while (noofdays>0&&iteration>0){
   // z="";
   alert("iteration");
 /*alert(starttime);
   if (constIncrement<60&&isNaN(Number(starttime.toString().split(".")[1]))===false){
       alert("incrementcylce");
      positiveInc = Number(starttime.toString().split(".")[1])+ (constIncrement) ;
      alert(positiveInc);
      
   }
   /*if (isNaN(Number(starttime.toString().split(".")[1]))===false){
      // alert(Number(starttime.toString().split(".")[1]));
      alert("constIncrement"+constIncrement);
      positiveInc = Number(starttime.toString().split(".")[1])+ (constIncrement);
      alert("dddd"+positiveInc);
   }*/
   
   /*endtime = starttime + constIncrement;
   endtime = Number(endtime.toFixed(2));
   var decimalpart = Number(endtime.toString().split(".")[1]);
  // alert(decimalpart);
   if (decimalpart<10){
       decimalpart = decimalpart*10;
       if (decimalpart===60){
       
       endtime = Math.ceil(endtime);
   }
  else if (decimalpart>60){
      endtime = endtime + (decimalpart%60);
   }
   }
   /*if (decimalpart===6){
       
       endtime = Math.ceil(endtime);
   }
  else if (decimalpart>6){
      endtime = endtime + (decimalpart%6);
  }*/
       //alert(iteration);
      // alert(timeslots[outerloop]);
       if (outerloop < Math.floor(officialworkmins/teachinghrsperday)){
           alert("outerloop"+outerloop+"iteration"+iteration);
  var label1 = (timeslots[outerloop].toString().split(":")[0])+(timeslots[outerloop].toString().split(":")[1]);
  
       }
       alert("label1"+label1);
   firstcol = "<td>"+"<label>"+strttime1+"-"+label1+"</label>&nbsp;&nbsp;&nbsp;<input type='checkbox' name='timezone'>"+"</td>";
  while (i<=days.length-1){
      // alert("enter innerloop count");
z = z +"<td id="+days[i]+">"+"<a href='#' class='glyphicon glyphicon-ok use' aria-hidden='true'></span></div></a>"+"</td>";
        //"<a href='#'><div id='cell'><span id='click' class='glyphicon glyphicon-ok' aria-hidden='false'></span></div></a>"+"</td>";
        //"<button class='days' style='display: block; width: 100%;' id="+days[i]+"></button>"+"</td>"+y;
//alert(z);
//noofdays=noofdays-1;

i = i+1;
   }
   
   strttime1 = timeslots[outerloop];
   outerloop = outerloop + 1;
   z = firstcol+z;
   i = 0;
   //starttime = endtime;
   iteration = iteration - 1;
   //noofdays=noofdays-1;
   res = res+ x + z + y;
   //alert("res"+res);
   z="";
}  

$("#bid").html(res);
$("#bid td").addClass("disabled");
});
var increment = 0;
$(document).on("click","input:checkbox",function(){
   alert("checkbox"); 
   
});
  $(document).on("click", ".use", function(){
      increment = increment + 1;
    
        var clickCount = jQuery.data( this, 'clickCount');
        //alert("clickcount"+!clickCount);
        if (!clickCount){
            //alert("tt"+clickCount);
            clickCount=0;
        }        
        clickCount++;        
        jQuery.data( this, 'clickCount',clickCount);
        
      //alert($(this).closest("td").attr("id"));
    if (clickCount === 1){
    $(this).css("color","green");
    }

else {
    //alert("dd");
    $(this).css("color","#005c99");
}
//increment = 0;
//var j = $(this).
      return true;
});
});
