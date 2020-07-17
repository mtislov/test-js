function humanReadable(seconds) {


    let result = 'HH:MM:SS';
    let hours = 00;
    let min = 00;
    let sec = 00;
  

    if (seconds < 60) {
        sec = seconds;
    } 
    
    if (seconds >= 60 && seconds < 3600) {
        min = seconds / 60;
        sec = seconds % 60;
    }

    if (seconds >= 3600) {
        hours = seconds / 3600;
        
        if (seconds % 3600 >= 60) {
            min = (seconds % 3600) / 60;
            sec = (min - Math.floor(min)) * 60;
            sec = sec.toFixed();
        } else {
            sec = seconds % 3600;
        }
    }


    result = result.replace( 'HH', Math.floor(hours).toString().padStart(2, '0') );
    result = result.replace( 'MM', Math.floor(min).toString().padStart(2, '0') );
    result = result.replace( 'SS', Math.floor(sec).toString().padStart(2, '0') );
    return result;
}





console.log( humanReadable(45296) );







/*
describe('examples', function() {
  it('should format correctly', function() {
    Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
    Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
    Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
    Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });
});*/



/* ДРУГОЙ ПРИМЕР

function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    
    return pad(parseInt(seconds / (60*60))) + ":" +
      pad(parseInt(seconds / 60 % 60)) + ":" +
      pad(seconds % 60)ж
}

*/