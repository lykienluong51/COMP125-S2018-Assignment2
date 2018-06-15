/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app;
 (function (app) {
    "use strict"

    function AboutContent() {
        console.log("%c About Content accessed...", "font-weight:bold; font-size: 20px;");
    
       // document.getElementById("para").textContent = 
        
       let paragraph = document.getElementById("para");

       let mySentence = "My name is KIEN-LUONG LY, my friends call me Paul. I am currently enroll in Health Informatics Technology programme and this is my second semester. I’ve selected to participate in this course because I am interesting in working with computer data analysis and health care. I find it is a challenge and an opportunity for me as I am completely a beginner of computer science. I set a daily target of coding and practicing programming five (5) hours a day to enhance my skills. My goal is to become a senior programmer or a data analysis expert in next 5 years.";

       paragraph.textContent = mySentence;

    }
    
   

   function ProjectContent()
{
let ProjectPara1 = document.getElementById("ProjectPara1");

   let myPro1= "";
   ProjectPara1.textContent = myPro1;

let project2 = document.getElementById("ProjectPara2");

let myPro2 = "";
project2.textContent = myPro2;

let project3 = document.getElementById("ProjectPara3");

let myPro3 = "";
project3.textContent = myPro3;
    
}

function Start() {
    // local variable
    let title = document.title;

    console.log("%c App Started!", "font-weight:bold; font-size: 20px;");
    console.log("%c ----------------------------", "font-weight:bold; font-size: 20px;");
    console.log("Title: " + title);

    try {
        

        switch (title) {
            case "COMP125 - Home":

                content.HomeContent();
                break;

            case "COMP125 - About":
                content.AboutContent();
                break;

            case "COMP125 - Contact":
                content.ContactContent();
                break;

            default:
                throw ("Title not Defined");
                break;
        }
    }
    catch(err) {
        console.log(err);
        console.warn("Something went wrong when switching pages");
    }
}


//window.onload = Start;

window.addEventListener("load", Start);


// these are all app properties
app.Title = document.title;

    
})(app || (app = {}));

