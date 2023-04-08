var buttonsClicked=[];

$(".numbutton").on('click',function(){
    var input1=$(".inp1");
    input1.val(input1.val()+$(this).text());
    buttonsClicked.push($(this).text());  
    //console.log(buttonsClicked);
});


$(".cancelbutton").on('click',function(){
    var input1=$(".inp1");
    buttonsClicked=[];
    input1.val("");
});

$(".eqbutton").on('click',function(){
    var input1=$(".inp1");

    if(buttonsClicked.includes('+'))
    {
        var num1=Number(input1.val().split('+')[0]);
        var num2=Number(input1.val().split('+')[1]);
        input1.val(num1+num2);
        buttonsClicked=[];
        buttonsClicked.push(num1+num2);
    }
    else if(buttonsClicked.includes('-'))
    {
        var num1=Number(input1.val().split('-')[0]);
        var num2=Number(input1.val().split('-')[1]);
        input1.val(num1-num2);
        buttonsClicked=[];
        buttonsClicked.push(num1-num2);
    }
    else if(buttonsClicked.includes('x'))
    {
        var num1=Number(input1.val().split('x')[0]);
        var num2=Number(input1.val().split('x')[1]);
        input1.val(num1*num2);
        buttonsClicked=[];
        buttonsClicked.push(num1*num2);
    }
    else if(buttonsClicked.includes('÷'))
    {
        var num1=Number(input1.val().split('÷')[0]);
        var num2=Number(input1.val().split('÷')[1]);
        input1.val(num1/num2);
        buttonsClicked=[];
        buttonsClicked.push(num1/num2);
    }
});


//$(".inp1").keydown(function(event){
//    var input1=$(".inp1");
//    var inpkey=input1.val().split(event.key[0]);
//    console.log(inpkey);
//    input1.val(input1.val().split(0)+event.key);
//    buttonsClicked.push(event.key);  
//    //console.log(buttonsClicked);
//});