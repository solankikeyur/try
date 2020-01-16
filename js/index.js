var btnSubmit = document.getElementById("btnSubmit");
var studentDetails=[];
var id,rId=1;
var name,englishMarks,mathsMarks,averageMarks,passingYear,todayDate;
var Student = function(name,maths,english,average,passingYear){
    this.id=id;
    this.name = name;
    this.maths = maths;
    this.english = english;
    this.average = average;
    this.passingYear = passingYear;
};
var storedData = JSON.parse(localStorage.getItem("studentDetails"));

console.log(storedData);


btnSubmit.addEventListener("click",function(){

    checkId();
    name = document.getElementById("txtName").value;
    englishMarks = parseInt(document.getElementById("txtEnglish").value);
    mathsMarks = parseInt(document.getElementById("txtMaths").value);
    averageMarks = (englishMarks+mathsMarks)/2;
    passingYear = parseInt(document.getElementById("txtPassingYear").value);
    todayDate = new Date();

    if(name == ""){
        alert("Please Enter your name");
        return false;
    }
    if(englishMarks>=0 && englishMarks<=100){

    }else{
        alert("Marks should be in range of 0-100");
        return false;
    }

    if(mathsMarks>=0 && mathsMarks<=100){

    }else{
        alert("Marks should be in range of 0-100");
        return false;
    }

    if(passingYear>=2000 && passingYear<=2020){

    }else{
        alert("Passing year should be between 2000 - 2020");
        return false;
    }

    
   
    //studentDetails.push(new Student(name,mathsMarks,englishMarks,averageMarks,passingYear));
    

    
    var table = document.getElementById("detailTable");
    var row = table.insertRow(rId);
    var indexCol,nameCol,mathsCol,englishCol,averageCol,passingYearCol,dateCol;
     indexCol = row.insertCell(0);
     nameCol = row.insertCell(1);
     mathsCol = row.insertCell(2);
     englishCol = row.insertCell(3);
     averageCol = row.insertCell(4);
     passingYearCol = row.insertCell(5);
     dateCol = row.insertCell(6);



    indexCol.innerHTML = id;
    nameCol.innerHTML = name;
    mathsCol.innerHTML = mathsMarks;
    englishCol.innerHTML = englishMarks;
    averageCol.innerHTML = averageMarks;
    passingYearCol.innerHTML = passingYear;
    dateCol.innerHTML = todayDate.getFullYear()+"-"+todayDate.getMonth()+1+"-"+todayDate.getDate();
    pushLocal(); 
    id+=1;
    rId+=1;
    localStorage.setItem("id",id);
   

});

function checkLocal(){
    if(localStorage.getItem("studentDetails") == null){
        localStorage.setItem("studentDetails",JSON.stringify(studentDetails));
        console.log("Created Local Storage");
    }else{
        console.log("Localstorage is already there");
    }
}
function pushLocal(){
    studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
    studentDetails.push(new Student(name,mathsMarks,englishMarks,averageMarks,passingYear));
    localStorage.setItem("studentDetails",JSON.stringify(studentDetails));
    console.log("Pushed to local Storage");
}

function checkId(){
    if(localStorage.getItem("id") == null){
        id=1;
        localStorage.setItem("id",id);
    }else{
        id=parseInt(localStorage.getItem("id"));
    }
}
