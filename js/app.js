'use strict';
let userName = '';
userName = prompt('what is your name?');
//console.log(userName);
alert('welcome  ' + userName);

alert('There are five questions answer it with yes or no  ');



let score = 0;
//Question one
let study = prompt('I was study computer information system?');
alert(q1(study));

function q1 (answer) {
    if (answer === 'yes' || answer === 'y' || answer === 'Y' || answer === 'YES') {
        score = score + 1;
        return ('That is right ' + userName);

    }
    else if (answer === 'no' || answer === 'n' || answer === 'N' || answer === 'NO') {
        return ('That is wrong ' + userName);

    } else {

        return ('wrong input');

    }
}

//console.log(study);

let message = '';


//Question two
let graduated = '';
graduated = prompt('I was graduated in 2019?');
//console.log(graduated);
if (graduated === 'no' || graduated === 'n' || graduated === 'N' || graduated === 'NO') {
    message = ('That is right ' + userName);
    score = score + 1;

}
else if (graduated === 'yes' || graduated === 'y' || graduated === 'Y' || graduated === 'YES') {
    message = ('That is wrong ' + userName);



} else {

    message = ('wrong input');

}
alert(message);





//Question three
let University = '';
University = prompt('I was study in the University of Jordan?');
//console.log(University);
if (University === 'yes' || University === 'y' || University === 'Y' || University === 'YES') {
    message = ('That is right   ' + userName);
    score = score + 1;

}
else if (University === 'no' || University === 'n' || University === 'N' || University === 'NO') {
    message = ('That is wrong   ' + userName);

} else {

    message = ('wrong input');


}
alert(message);

//Question four
let GPA = '';
GPA = prompt('my GPA was 3.38 from 4 in the university?');
//console.log(GPA);
if (GPA === 'yes' || GPA === 'y' || GPA === 'Y' || GPA === 'YES') {
    message = ('That is right   ' + userName);
    score = score + 1;
}
else if (GPA === 'no' || GPA === 'n' || GPA === 'N' || GPA === 'NO') {
    message = ('That is wrong   ' + userName);

} else {

    message = ('wrong input');


}
alert(message);


//Question five
let experience = '';
experience = prompt('I have one years experience?');
//console.log(experience);
if
(experience === 'no' || experience === 'n' || experience === 'N' || experience === 'NO') {

    message = ('That is right   ' + userName);
    score = score + 1;


}


else if

(experience === 'yes' || experience === 'YES' || experience === 'y' || experience === 'Y') {



    message = ('wrong input');

}
alert(message);



//Question six
let place = '';
place = prompt(' How many Top 10 strange place i mentionsed in my page?', ' The answer must be anumber');
//console.log(place);


let i = 0;
let answer = ' ';
for (i = 0; i < 3; i++) {
    if (place === 10) {
        answer = ('That is right');
        alert(answer);
        score = score + 1;
        break;
    } else if (place > 10) {

        answer = ('That is too high');
        alert(answer);
        place = prompt(' How many strange place i mentionsed in my page?', ' The answer must be anumber');



    } else {

        answer = ('That is too low');
        alert(answer);
        place = prompt(' How many strange place i mentionsed in my page?', ' The answer must be anumber');




    }

}

//console.log(score);


let fun = prompt('This question  for fun :Type the name of one of the governorates of Jordan?');
let governorates = ['irbid', 'ajloun', 'jerash', 'mafraq', 'balqa', 'amman', 'zarqa', 'madaba', 'karak', 'tafilah', 'maan', 'aqaba', 'Irbid', 'Ajloun', 'Jerash', 'Mafraq', 'Balqa', 'Amman', 'Zarqa', 'Madaba', 'Karak', 'Tafilah', 'Maan', 'Aqaba'];

//console.log(governorates);
let a = 0;

console.log(fun);
for (a = 0; a < 5; a++) {
    if (governorates.includes(fun)) {
        score = score + 1;
        break;
    }
    else {
        fun = prompt('Try again :Type the name of one of the governorates of Jordan?');
    }


}
alert('your score is ' + score);















