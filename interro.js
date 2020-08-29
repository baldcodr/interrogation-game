

var quiz = [];
quiz[0] = new Question("What is your name?", "Lucky", "Lucy", "Lampard" , "Leye");
quiz[1] = new Question("How old are you?", "27", "73", "25", "16");
quiz[2] = new Question("Where do you live?", "England", "Nigeria", "Lagos" ,"Europe");
quiz[3] = new Question("Which weapon did you use?", "AK 47", "Knife", "Grenade", "None");
quiz[4] = new Question("Where were you born?", "Brazil", "England", "Hawaii", "USA");
quiz[5] = new Question("How many did you kill?", "75", "28", "0" ,"5");
quiz[6] = new Question("How many sisters do you have?", "6", "2", "10",  "9");
quiz[7] = new Question("Why did you click this code?" ,"I don't know"  , "Just curious" , "I like it", "Why not");
quiz[8] = new Question("What is the name of your best friend?" , "Raul", "Paul" ,"Saul" , "Gaul");
quiz[9] = new Question("Do you accept that you killed the cop?" , "Yes", "No" , "Probably", "I think so"); 
quiz[10] = new Question("Where were you at the time of robbery?" , "At home", "With my mum", "no-where" , "Do not know");

quiz[11] = new Question("Did you visit Yemi's house yesterday?" ,"Yes" , "No" , "Do not remember", "Can not tell");
quiz[12] = new Question("Where are you from?"  ,"Egypt" , "England" , "Ethiopia" , "Eustonia");
quiz[13] = new Question("Which is your favorite fruit?", "Apple" ,"Banana" , "Orange" ,"Grapes");
quiz[14] = new Question("Where did you hide the key?" ,"Under the bed" , "Inside my mouth" , "Inside a box" , "I do not know");
quiz[15] = new Question("Do you like this game?","Yes" , "No" , "Probably no" , "Probably yes");
quiz[16] = new Question("What was your motive?" ,"To kill the general", "To win the war","Not specific", "To escape from there");
quiz[17] = new Question("How much do you eat? ","little","very much","can't tell","i think 100%");
quiz[18] = new Question("How much do you fart?","little","loudly","slowly","smelly")
quiz[19] = new Question("Fart & perfume?","I choose fart","both","perfume","fart smells")
quiz[20] = new Question("What is 2+2?","2","3","4","6")


quiz[21] = new Question("Pizza or Banana","Pizza","Banana","Both","Pizza without Banana")
quiz[22] = new Question("Your fart is smelly or stinky","Stinky","Smelly","Both","Worse")
quiz[23] = new Question("Why did you kill your best friend?","To escape from him","He turned to be my enemy","Its my choice","To save my time")
quiz[24] = new Question("Beer or Vodka","Beer","Vodka","Both","Neither Beer nor Vodka")
quiz[25] = new Question("Your favorite artist","Wizkid","Davido","Burna Boy","Drake")
quiz[26] = new Question("How many siblings do you have?","0","5","10","3")
quiz[27] = new Question("How do you pray?","Standing","Kneeling","Lying down","Sitting")
quiz[28] = new Question("Favourite color","Blue","Green","White","Black")
quiz[29] = new Question("Best footballer","Puyol","Ronaldo","Messi","Mikel")
quiz[30] = new Question("Headphone or earphone","Headphone","Earphone","Both","Headphone without Earphone")

var userans = [];
var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) { 

  renew();
});

function Question(question,answer0,answer1,answer2,answer3) {
    this.question = question;
    this.answer0 = answer0;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
};

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function renew() { 
  
  
    var randomNumber = Math.floor(Math.random()*quiz.length);
    randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.answer0, randomQuestion.answer1, randomQuestion.answer2,randomQuestion.answer3];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
document.getElementById("answerD").value= answers[3];
  document.getElementById("answerD").innerHTML= answers[3];
}


function answerAC() {
resetTimer();

  var answerA = document.getElementById("answerA").value;
  
  var answerC = document.getElementById("answerC").value;
  
  var answerB = document.getElementById("answerC").value;
  
  
  var answerD = document.getElementById("answerD").value;
  
  
  
  
  var ques = document.getElementById("question").textContent;
  
  var  res = ques + answerA;
      
  if (userans.includes(res)) {
  currentScore++;
  $("#score").html("Score:  "+ currentScore);
  
  renew();
  
  } else {
  
  var secs = ques + answerB;
  var tans = ques + answerC;
  var coss = ques + answerD;
  
  if (userans.includes(secs)) {
  
  alertia("Aww, You lied us! ");
  
  document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerB ;
  
result();
  }else {
 if (userans.includes(tans)) {
 
     alertia("Aww, You lied us! "); 
     document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerC ;
  result();
 } else {
     
     if (userans.includes(coss)) { 
     
         alertia("Aww, You lied us! "); 
         document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerD ;
  result();
 } else {userans.push(res);
 currentScore++;
 $("#score").html("Score:  "+ currentScore);
  
 renew();
 }
 }
        }
}
 
 
 
}



function answerBC() {
resetTimer();
        var answerB = document.getElementById("answerB").value;
        var ques = document.getElementById("question").textContent;
  var answerC = document.getElementById("answerC").value;
  var answerD = document.getElementById("answerD").value;
  
  
  
  var answerA = document.getElementById("answerA").value;
  
  var  res = ques + answerB;
      
  if (userans.includes(res)) {
  currentScore++;
  $("#score").html("Score:  "+ currentScore);
  
  renew();
  } else {
  
  var secs = ques + answerA;
  var tans = ques + answerC;
  var coss = ques + answerD;
  
  if (userans.includes(secs)) {
  
  alertia("Ahh!! Liar Oshi ");
  
  document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerA ;
  result();
  }else {
 if (userans.includes(tans)) {
 
     alertia("Ahh!! Liar Oshi ");
     document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerC ;
   result();
 } else {
     
     if (userans.includes(coss)) {
     
     alertia("Ahh!! Liar Oshi "); 
     document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerD ;
  result();
 } else {
userans.push(res);
currentScore++;
$("#score").html("Score:  "+ currentScore);
  
 renew();
 }
          
 }
        }
}

}





function answerCC() {
resetTimer();
  var answerC = document.getElementById("answerC").value;
  var ques = document.getElementById("question").textContent;
  var answerA = document.getElementById("answerA").value;
  var answerB = document.getElementById("answerB").value;
  
  var answerD = document.getElementById("answerD").value;
  
  
  var  res = ques + answerC;
      
  if (userans.includes(res)) {
  currentScore++;
  $("#score").html("Score:  "+ currentScore);
  
  renew();
  } else {
  
  var secs = ques + answerB;
  var tans = ques + answerA;
  var coss = ques + answerD; 
  if (userans.includes(secs)) {
  alertia("Aww, You lied us! ");
  document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerB ;
  result();
  }else {
 if (userans.includes(tans)) {
     alertia("Aww, You lied us! "); 
     document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerA ;
  result();
 } else {
     if (userans.includes(coss)) {
         alertia("Aww, You lied us! "); 
         document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerD ;
  result();
 } else {
userans.push(res);
currentScore++;
$("#score").html("Score:  "+ currentScore);
  
 renew();
 }
 
 }
        }
}
}


function answerDC() {
resetTimer();
var answerB = document.getElementById("answerB").value;
        var ques = document.getElementById("question").textContent;
  var answerC = document.getElementById("answerC").value;
  var answerA = document.getElementById("answerA").value;
  
  
  
  var answerD = document.getElementById("answerD").value;
  
  var  res = ques + answerD;
      
if (userans.includes(res)) {
currentScore++;
$("#score").html("Score:  "+ currentScore);
  
  renew();
  } else {
  
  var secs = ques + answerB;
  var tans = ques + answerC;
 var coss = ques + answerA;
 
  if (userans.includes(secs)) {
  alertia("Aww, You lied us! ");
  document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerB ;
  result();
  }else {
 if (userans.includes(tans)) {
     alertia("Aww, You lied us! "); 
     document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerC ;
  result();
 } else {
     if (userans.includes(coss)) {
         alertia("Aww, You lied us! "); 
         document.getElementById("note").innerHTML = ques;
  document.getElementById("finans").innerHTML = answerA ;
  result();
 } else {
     userans.push(res);
     currentScore++;
     $("#score").html("Score:  "+ currentScore);
  
 renew();
 }
 }
        }
}
 
 }





function result() {
clear();
  document.getElementById("score").innerHTML = "SCORE: " + currentScore;

 
document.getElementById("quiz").style.display = "none";
document.getElementById("show").style.display = "block";


}


function over() {
   clear(); 
   alertia("Don't forget to share it with your Friends!")
   $("#score").html(" You took too long to answer , it seems you were hiding something! " + "SCORE: " + currentScore)

    $("#info").css({"display":"none"});
     $("#quiz").css({"display":"none"});
     $("#show").css({"display":"block"})
    
}

