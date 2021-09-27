(function(){
      var str=["full" , "stack" , "web" , "development"];
      var str1="";
     //str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].toUpperCase(); 
        str1+=str[i]+ " ";
      }
      console.log(str1);
    })
    ();