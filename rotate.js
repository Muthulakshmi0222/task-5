(function(){
      var array = [4, 7, 3, 6, 9];
        k = 5;
    
    while (k--) {
        console.log(array.join(' '));
        array.unshift(array.pop());
    }
    console.log(array.join(' '));
    
    })
    ();