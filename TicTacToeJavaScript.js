var currentPlyr = "X";
function assign1(){
    if(currentPlyr == "X"){
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        currentPlyr = "O";
    }
    else{
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        currentPlyr = "X";
    }
}
function assign2(){
    if(currentPlyr == "X"){
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        currentPlyr = "O";
    }
    else{
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        currentPlyr = "X";
    }
}
function assign3(){
    if(currentPlyr == "X"){
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        currentPlyr = "O";
    }
    else{
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        currentPlyr = "X";
    }
}
function assign4(){
    if(currentPlyr == "X"){
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        currentPlyr = "O";
    }
    else{
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        currentPlyr = "X";
    }
}
function assign5(){
    if(currentPlyr == "X"){
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        currentPlyr = "O";
    }
    else{
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        currentPlyr = "X";
    }
}
function assign6(){
    if(currentPlyr == "X"){
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        currentPlyr = "O";
    }
    else{
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        currentPlyr = "X";
    }
}
function assign7(){
    if(currentPlyr == "X"){
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        currentPlyr = "O";
    }
    else{
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        currentPlyr = "X";
    }
}
function assign8(){
    if(currentPlyr == "X"){
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        currentPlyr = "O";
    }
    else{
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        currentPlyr = "X";
    }
}
function assign9(){
    if(currentPlyr == "X"){
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        currentPlyr = "O";
    }
    else{
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        currentPlyr = "X";
    }
}

function reset(){
    location.reload();
}

function check(){

    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;

    if(b1 == b2 && b2 == b3){
        if(b1=="X"){
            document.getElementById("result").value = "X Won";
            endgame();
        }
        else if(b1 =="O"){
            document.getElementById("result").value = "O won";
            endgame();
        }
    }
    else if(b4 == b5 && b5 == b6){
        if(b4=="X"){
            document.getElementById("result").value = "X Won";
            endgame();
        }
        else if(b4 =="O"){
            document.getElementById("result").value = "O won";
            endgame();
        }
    }
    else if(b7 == b8 && b8 == b9){
        if(b7=="X"){
            document.getElementById("result").value = "X Won";
            endgame();
        }
        else  if(b7 =="O"){
            document.getElementById("result").value = "O won";
            endgame();
        }
    }
    else if(b1 == b4 && b4 == b7){
        if(b1=="X"){
            document.getElementById("result").value = "X Won";
            endgame();
        }
        else  if(b1 =="O"){
            document.getElementById("result").value = "O won";
            endgame();
        }
    }
    else if(b2 == b5 && b5 == b8){
        if(b2=="X"){
            document.getElementById("result").value = "X Won";
            endgame();
        }
        else if(b2 =="O"){
            document.getElementById("result").value = "O won";
            endgame();
        }
    }
    else if(b3 == b6 && b6 == b9){
        if(b3=="X"){
            document.getElementById("result").value = "X Won";
            endgame();
        }
        else if(b3 =="O"){
            document.getElementById("result").value = "O won";
            endgame();
        }
    }
    else if(b1 == b5 && b5 == b9){
        if(b1=="X"){
            document.getElementById("result").value = "X Won";
            endgame();
        }
        else if(b1 =="O"){
            document.getElementById("result").value = "O won";
            endgame();
        }
    }
    else if(b3 == b5 && b5 == b7){
        if(b3 =="X"){
            document.getElementById("result").value = "X Won";
            endgame();
        }
        else if(b3 =="O"){
            document.getElementById("result").value = "O won";
            endgame();
        }
    }
}

function endgame(){
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
}