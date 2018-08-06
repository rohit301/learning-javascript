function() {
  for() {

  }
}

function maxArray(arr){
    var len=arr.length;
    var max= -Infinity;
    while (len--){
        if(arr[len]>max){
            max=arr[len];
        }
    }
    return max;
    }
    
    function minArray(arr){
    var len=arr.length;
    var min= Infinity;
    while (len--){
    if(arr[len]<min){
    min=arr[len];
    }
    }
    return min;
    }
    
    var points=[21,90,89,18,0,-2];
    points.push(10,20,900);
    points.pop();
    console.log(points.sort(function(a,b){return a-b}));
    // console.log(points[0]);
    // console.log(points[points.length-1]);
    console.log(maxArray(points));
    console.log(minArray(points));
    

    

