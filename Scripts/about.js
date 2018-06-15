(function(content){
   

   

    function AboutContent() {
        console.log("%c About Content accessed...", "font-weight:bold; font-size: 20px;");
    

        let paragraph = document.getElementById("paragraph");
        let mySentence = "";

        paragraph.textContent = mySentence;

        
    }

    // properties
    content.AboutContent = AboutContent;

})(content || (content = {}));