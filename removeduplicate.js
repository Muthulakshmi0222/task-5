(function(){
    const array = [1,2,3,14,15,22,12,1,2,3,15,12];
    const set = new Set(array);
    const uniqueArray = [...set];
    console.log(uniqueArray);
    })();