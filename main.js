function foo(){
    console.log('Hello');
}

function sum (a,b){
    console.log(a+b);
}



var x = 21;
    var girl = function(){
        console.log(x);
        var x = 20;
    };
girl();

var x = 21;
    girl();
    console.log(x);
      function girl(){
        console.log(x);
        var x = 20;
    };

    var x = 21; 
    a(); b(); 
    function a() { 
        x = 20; 
        console.log(x);
     }; 
     function b()
      { 
        x = 40; 
        console.log(x);
     };


     function factorial (n){
        var a=1
        for(i=n; i>=1; i--){
            a=a*i;
        }
        console.log(a);
        
        }
        
        factorial(5)
