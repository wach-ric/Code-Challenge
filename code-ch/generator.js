function studentGrade(score) {
    if(score>=79 && score <=100){
        return "A";
    }else if (score >=60 && score <79){
        return "B";
    }else if (score >=50 && score <59){
        return "C";
    }else if (score >=40 && score <49){
        return "D";
    }else{
        return "E";
    }
}
console.log(studentGrade(95));
console.log(studentGrade(82));
console.log(studentGrade(70));
console.log(studentGrade(63));
console.log(studentGrade(10));