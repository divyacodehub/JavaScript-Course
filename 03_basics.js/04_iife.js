/// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai() {
    //named iife
    console.log(`DB connected`);   
})();

// ()()----() this is for function defintion   () this is for execution

(() => {
    console.log(`DB connected Two`);    
})();

((name) => {
    console.log(`DB connected Two ${name}`);    
})("divya")