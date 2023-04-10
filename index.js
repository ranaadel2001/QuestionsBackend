const fs = require ('fs');
var user= require('./user');

//const folderPath = "C:\\Users\\Lenovo\\nodeFirst";
//fs.readdir (folderPath, (err,files)=> 
//{ // for printing files in loop keda with arrays
  //  console.log("files: " + files );
    //files.forEach((filename , index)=> {
      //  console.log("filename : " + filename);
        //var filePath ="C:\\Users\\Lenovo\\nodeFirst\\" + filename;
        //fs.readFile(filePath, "utf-8" , (err,content) => {
          //  console.log ("content : "  + content);
        //})
    //})
//}); 


console.log ("Print user name: "+ user.getUsername());