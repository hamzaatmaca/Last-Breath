//IN-PUT VARIABLES
let getClock = document.getElementById('getDate');
//let getSmoke = document.getElementById('getSmoke');
//let getSpor = document.getElementById('getSpor');
//let getCity = document.getElementById('getCity');
let perBreath = 20000;
let perHeartBeat = 70;
let maxLife = 72

//IN-PUT VARIABLES

//OUT-PUT VARIABLES
let totalYear = document.getElementById('totalYear');
let totalHour = document.getElementById('totalHour');
let breath = document.getElementById('breath');
let hearth = document.getElementById('hearth');
let kyear = document.getElementById('kyear');
let khour = document.getElementById('khour');
let kbreath = document.getElementById('kbreath');
let khearth = document.getElementById('khearth');
let spAge = document.getElementById('spaceAge');
//OUT-PUT VARIABLES

/**************** FILTER *********************/


/**************** FILTER *********************/

/*****************DATE PROPERTİES*************/
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let time = date.getTime();
/****************DATE PROPERTİES***********/

/************** SEPERATE GET DATE **************/
console.log('clock : '+getClock.value)
let seperateDate = getClock.value.split('-')
let pYear = Number(seperateDate[0]);
let pMonth = Number(seperateDate[1]) - 1;
let pDay = Number(seperateDate[2]);
/************** SEPERATE GET DATE *************/

/****************** PAST RESULTS ***********************/
let resultYear = year - pYear ;
let resultMonth = month - pMonth;
let resultDay =  day - pDay;

if(month < pMonth){
	resultMonth = resultMonth * -1;
}					

if(day < pDay){
	resultDay = resultDay * -1;
}
const resultHour = resultYear * 365 * 24;
const resultMinute = resultHour * 60;
const resultSecond = resultMinute * 60;

const result = resultYear + " Yıl " +  resultMonth + " Ay " +  resultDay + " Gün";
const result2 = resultHour+ "/ " +  resultMinute + "/ " +  resultSecond;
const resultBreath = resultHour / 24 * perBreath;
const resultHearth = resultMinute * perHeartBeat;
/******************** PAST RESULTS **********************/

/******************* MODULUS RESULTS ***************/
let maxYear = pYear + 71;
let modulusYear = maxYear - year;
let totalModulusMonth = 12 - resultMonth;
let totalModulusDay = 31- resultDay;
let totalModulusYear = modulusYear+" Yıl "+totalModulusMonth+" Ay "+totalModulusDay+" Gün"

let totalModulusHours = modulusYear * 365 * 24
let totalModulusMinute = modulusYear * 365 * 24 * 60
let totalModulusSecond = modulusYear * 365 * 24 * 60 * 60;
let totalModulusBreath = totalModulusHours / 24 * perBreath;
let totalModulusHearth = totalModulusMinute * perHeartBeat;
/******************* MODULUS RESULTS ***************/

/*****************  SPACE AGE  *******************/
let spaceAge = 14000000000 * 365 * 24 * 60 * 60
let humanAge = ((resultYear * 365) + (resultMonth * 30) + resultDay) * 24 * 60 * 60
console.log(spaceAge)
console.log(humanAge)
let oran = spaceAge / humanAge;
console.log(oran)
/*****************  SPACE AGE  *******************/


/********************LAST RESULT********************/
totalYear.value = result;
totalHour.value = result2;
breath.value = resultBreath;
hearth.value = resultHearth;
kyear.value = totalModulusYear;
khour.value = totalModulusHours + " / " +totalModulusMinute+" / "+totalModulusSecond;
kbreath.value = totalModulusBreath;
khearth.value = totalModulusHearth;
spAge.innerHTML = "Evrenin Ömrü :<br> "+spaceAge+" sn "+"<br>Senin Ömrün :<br>" + humanAge+" sn "+"<br>Aradaki oran :<br>" + oran
/********************LAST RESULT********************/

/***** Alerts *****/

if(modulusYear < 0){
	alert('Ölmeyi mi Unuttun ?')
}
/***** Alerts *****/

