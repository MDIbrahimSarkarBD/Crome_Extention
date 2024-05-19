 timeCounting = {
    timeSet: 0,

    setSeconds(s){
        timeSet = s;
        const seconds_Milli_Seconds = 1000 * s

    },

    getTimes(){
        return timeSet;
    }
    
}

var tc = timeCounting;
timeCounting.setSeconds(15)
tc.setSeconds(354)
console.log(tc.getTimes());



