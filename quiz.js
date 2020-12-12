function back(){
    window.location = "index.html";
}
i = 0;
i = [0,1,2,3,4, 5,6];
accuracy = ["Peel P50", "Mercedes-AMG GT", "Lamborghini Hurucan Performante", "Tesla Roadster 2.0" , "Buggati LaVoiture Noire", "MG Hector Plus"]
qs = ["What is the slowest car in the world?", "What is the fastest road-legal car which has the fastest time around the Nurbergring?",  "Which of the following has once in their production set the lap around the Nurbergring for the fastest road-legal car in the world?: Lotus Evora, Lamborghini Hurucan Performante, Tesla Model S Plaid, Tesla Model X" ,"Which car is the fastest accelerating from 0 to 97kmh/60mph?", "Which is the most expensive car?", "Identify the car. <img class='car' src='mg hector plus.webp id='image'>"];
document.getElementById("question").innerHTML = qs[i];
function send(){
    answer = document.getElementById("answer").value.lowercase();
    accuracy.lowercase();
    if(accuracy = answer[i]){
    document.getElementById("accuracy").innerHTML = "Correct"; 
    }
    else{
        document.getElementById("accuracy").innerHTML = "Wrong";    
    }
   i++;
}