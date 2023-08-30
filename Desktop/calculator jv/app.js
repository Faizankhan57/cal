
var inputValue = document.getElementById('inp');

function addVal(val){
    
    inputValue.value += val;

 
};

function del () {
    inputValue.value =   inputValue.value.slice(0.-1)
};

function ValClear(){
    inputValue.value = ""

};

function calculator(){
    inputValue.value = eval( inputValue.value)
};

// function operator(val){
//     var last =  inputValue.value.chart(inputValue.value.length -1 );
    
    
// }

function operator(val){
    var last = inputValue.value.charAt(inputValue.value.length - 1);
    if(last === "+" || last === "-" || last === "/" || last === "*" ){
        val = ""
    }
    else{
        inputValue.value += val
    }
    // console.log(last)
}
operator();






