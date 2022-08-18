student_array=[];

function submit(){
    var name_1= document.getElementById("st1").value;
    var name_2= document.getElementById("st2").value;
    var name_3= document.getElementById("st3").value;
    var name_4= document.getElementById("st4").value;
    var name_5= document.getElementById("st5").value;

    student_array.push(name_1);
    student_array.push(name_2);
    student_array.push(name_3);
    student_array.push(name_4);
    student_array.push(name_5);
    
    console.log(student_array);
                                  
    document.getElementById("displayName").innerHTML=student_array;
    document.getElementById("submitName").style.display="none";

    document.getElementById("sortButton").style.display="inline-block";
}
function sorter(){

    student_array.sort();  
    console.log(student_array);
                                  
    document.getElementById("displayName").innerHTML=student_array;  
}