var one = $('.one'),
    target_1 = $('.target_1'),
    two = $('.two'),
    three = $('.three'),
    four = $('.four'),
    five = $('.five'),
    six = $('.six'),
    seven = $('.seven'),
    eight = $('.eight'),
    nine = $('.nine'),
    ten = $('.ten'),
    eleven = $('.eleven'),
    tweleve = $('.tweleve'),
    thirteen = $('.thirteen'),
    fourteen = $('.fourteen'),
    fifteen = $('.fifteen'),
    sixteen = $('.sixteen'),
    seventeen = $('.seventeen'),
    eighteen = $('.eighteen'),
    ninteen = $('.ninteen'),
    twenty = $('.twenty'),
    target_2 = $('.target_2'),
    target_3 = $('.target_3'),
    target_4 = $('.target_4'),
    target_5 = $('.target_5'),
    target_6 = $('.target_6'),
    target_7 = $('.target_7'),
    target_8 = $('.target_8'),
    target_9 = $('.target_9'),
    target_10 = $('.target_10'),
    target_11 = $('.target_11'),
    target_12 = $('.target_12'),
    target_13 = $('.target_13'),
    target_14 = $('.target_14'),
    target_15 = $('.target_15'),
    target_16 = $('.target_16'),
    target_17 = $('.target_17'),
    target_18 = $('.target_18'),
    target_19 = $('.target_19'),
    target_20 = $('.target_20');
$('body').css("background-color","#696969");

var one_start = 0,
    two_start = 0;


var one_css = {
        'left': 100 ,
        'top':0
    }
    one.css(one_css);
var two_css = {
        'left': 95 ,
        'top': -31
    }
    two.css(two_css);
var three_css = {
        'left': 81 ,
        'top': -59
    }
    three.css(three_css);
var four_css = {
        'left': 62 ,
        'top': -79
    }
    four.css(four_css);
var five_css = {
        'left': 34 ,
        'top': -94
    }
    five.css(five_css);
    
var six_css = {
        'left': 0 ,
        'top': -100
    }
    six.css(six_css);
var seven_css = {
        'left': -34 ,
        'top': -94
    }
    seven.css(seven_css);
var eight_css = {
        'left': -62 ,
        'top': -79
    }
    eight.css(eight_css);
var nine_css = {
        'left': -81 ,
        'top': -59
    }
    nine.css(nine_css);
var ten_css = {
        'left': -95 ,
        'top': -31
    }
    ten.css(ten_css);
    
var eleven_css = {
        'left': -100 ,
        'top': 0
    }
    eleven.css(eleven_css);
var tweleve_css = {
        'left': -95 ,
        'top': 31
    }
    tweleve.css(tweleve_css);
var thirteen_css = {
        'left': -81 ,
        'top': 59
    }
    thirteen.css(thirteen_css);
var fourteen_css = {
        'left': -62 ,
        'top': 79
    }
    fourteen.css(fourteen_css);
var fifteen_css = {
        'left': -34 ,
        'top': 94
    }
    fifteen.css(fifteen_css);
    
var sixteen_css = {
        'left':  0,
        'top': 100
    }
    sixteen.css(sixteen_css);
var seventeen_css = {
        'left': 34 ,
        'top': 94
    }
    seventeen.css(seventeen_css);
var eighteen_css = {
        'left': 62 ,
        'top': 79
    }
    eighteen.css(eighteen_css);
var ninteen_css = {
        'left': 81 ,
        'top': 59
    }
    ninteen.css(ninteen_css);
var twenty_css = {
        'left': 95 ,
        'top': 31
    }
    twenty.css(twenty_css);
    

function setto_zero(){
    for(var i=1; i < 21; i++) {
        tar3(i,0,0);
    }
    
}

function putto(l){
     var x;
     for (var j = 0; j < l .length; j ++ ){
         x=l[j];
         if (x==1) {
             tar_1(100,0);
         } else if (x==2) {
             tar_2(95,31);
         }
 }
}
function tar3(index, a, b){
     
    var offX, offY;

    $('.target_'+index).animate({  fake1: a, fake2: b }, {
        step: function(now,fx) {
      
          if (fx.prop === "fake1") {
            offX = now;
          } else if (fx.prop === "fake2") {
            offY = now;
            $(this).css('-webkit-transform','translate('+ offX      +'px,'+ offY +'px)');
          }
        },
        duration:1000
    },'linear');  

} 

function tar1(index){
     
    var offX, offY,a,b;
    if (index==1){
        a=100;
        b=0;
    } else if (index==2){
        a=95;
        b=-31;
    } else if (index==3){
        a=81;
        b=-59;
    } else if (index==4){
        a=62;
        b=-79;
    } else if (index==5){
        a=34;
        b=-94;
    } else if (index==6){
        a=0;
        b=-100;
    } else if (index==7){
        a=-34;
        b=-94;
    } else if (index==8){
        a=-62;
        b=-79;
    } else if (index==9){
        a=-81;
        b=-59;
    } else if (index==10){
        a=-95;
        b=-31;
    } else if (index==11){
        a=-100;
        b=0;
    } else if (index==12){
        a=-95;
        b=31;
    } else if (index==13){
        a=-81;
        b=59;
    } else if (index==14){
        a=-62;
        b=79;
    } else if (index==15){
        a=-34;
        b=94;
    } else if (index==16){
        a=0;
        b=100;
    } else if (index==17){
        a=34;
        b=94;
    } else if (index==18){
        a=62;
        b=79;
    } else if (index==19){
        a=81;
        b=59;
    } else if (index==20){
        a=95;
        b=31;
    } else {
        a=0;
        b=0;
    } 

    $('.target_'+index).animate({  fake1: a, fake2: b }, {
        step: function(now,fx) {
      
          if (fx.prop === "fake1") {
            offX = now;
          } else if (fx.prop === "fake2") {
            offY = now;
            $(this).css('-webkit-transform','translate('+ offX      +'px,'+ offY +'px)');
          }
        },
        duration:1000
    },'linear');  

}

function func(arr,arr1){
   
    for(var i=0; i < arr.length; i++) {
        tar1(arr[i]);
    }
    
}

var l=[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],[4,5,6],[1,1,2,3,5,6,9,19]];
var l1=[["01","01","2006"],["02","01","2006"],["03","01","2006"]];

    
var k = 0, howManyTimes = 4;
function f() {
    if (k<3){
        document.getElementById("d1").innerHTML = l1[k][0];
        document.getElementById("d2").innerHTML = l1[k][1];
        document.getElementById("d3").innerHTML = l1[k][2];
    }
    setTimeout(setto_zero(),2400);
    func(l[k],l1[k]);
    k++;
    if( k < howManyTimes ){
        setTimeout( f, 2400 );
         
    }
}
f();

