function plan(){
var friend = this.getFriends();
var fieldPos= [0,1,2,3,4];
var fieldScale= [0,1,2,3,4];
var swapped = true;

for (var j = 0; j < friend.length; j++){
    fieldScale[j] = friend[j].scaleFactor;
}

while (swapped){
    swapped = false;
    for (var i = 1; i < fieldPos.length; i++){
        if (fieldScale[i-1] > fieldScale[i]){
            //swap
            var tmp = fieldScale[i-1];
            var tmpPos = fieldPos[i-1];
            fieldScale[i-1]=fieldScale[i];
            fieldScale[i] = tmp;
            fieldPos[i-1] = fieldPos[i];
            fieldPos[i] = tmpPos;
            
            this.say(fieldPos[i]+':'+fieldPos[(i-1)],
                    [friend[fieldPos[i]].id, 
                    friend[fieldPos[i-1]].id]);
            swapped = true;
        }//end if
    }//end for loop
}//end while loop
this.say("ATTACK");
}
