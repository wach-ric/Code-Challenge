let netSalary=0
let capitalpayee = 0
let nhifDeductions = 0
let nssfDeductions = 0
let grossSalary = 0

//create a function to calculate the nhif amount to be paid according to the gross salary
function nhif(grossSalary) {

//using if and else if statements to determine the actual nhif amount to be paid
    if (grossSalary <= 5999) {
        nhifDeductions = 150
        return nhifDeductions
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
         nhifDeductions = 300
         return nhifDeductions
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
        nhifDeductions = 400
        return nhifDeductions
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
         nhifDeductions = 500
         return nhifDeductions
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
         nhifDeductions = 600
         return nhifDeductions
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
         nhifDeductions = 750
         return nhifDeductions
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
         nhifDeductions = 850
         return nhifDeductions
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
         nhifDeductions = 900;
         return nhifDeductions
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
        nhifDeductions = 950;
        return nhifDeductions
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
         nhifDeductions = 1000;
         return nhifDeductions
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
         nhifDeductions = 1100;
         return nhifDeductions
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
         nhifDeductions = 1200;
         return nhifDeductions
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
         nhifDeductions = 1300;
         return nhifDeductions
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
         nhifDeductions = 1400;
         return nhifDeductions
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
         nhifDeductions = 1500;
         return nhifDeductions
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
         nhifDeductions = 1600;
         return nhifDeductions
    } else if (grossSalary >= 100000) {
         nhifDeductions = 1700;
         return nhifDeductions
    }
}
//create a function that will calculate the net salary if you input the basic salary and benefits
function netSalaryCalculator(basicSalary,benefits) {
    if (basicSalary <= 24000) {
        grossSalary = basicSalary + benefits
        nssfDeductions = 0.06 * basicSalary
        nhifDeductions = nhif(grossSalary)
        capitalpayee = 0.1 * basicSalary

        netSalary = grossSalary - (nssfDeductions + nhifDeductions + capitalpayee)
        console.log(netSalary)
    }
    else if (basicSalary >= 24001 && basicSalary <= 32333){
        grossSalary = basicSalary + benefits
        nssfDeductions = 0.06 * basicSalary
        nhifDeductions = nhif(grossSalary)
        capitalpayee = 0.25 * basicSalary

        netSalary = grossSalary - (nssfDeductions + nhifDeductions + capitalpayee)
        console.log(netSalary)
    }
    else if (basicSalary >= 32334 && basicSalary <= 500000){
        grossSalary = basicSalary + benefits
        nssfDeductions = 0.06 * basicSalary
        nhifDeductions = nhif(grossSalary)
        capitalpayee = 0.3 * basicSalary

        netSalary = grossSalary - (nssfDeductions + nhifDeductions + capitalpayee)
        console.log(netSalary)
    }
    else if (basicSalary >= 500001 && basicSalary <= 800000){
        grossSalary = basicSalary + benefits
        nssfDeductions = 0.06 * basicSalary
        nhifDeductions = nhif(grossSalary)
        capitalpayee = 0.325 * basicSalary

        netSalary = grossSalary - (nssfDeductions + nhifDeductions + capitalpayee)
        console.log(netSalary)
    }
    else if (basicSalary >= 800001){
        grossSalary = basicSalary + benefits
        nssfDeductions = 0.06 * basicSalary
        nhifDeductions = nhif(grossSalary)
        capitalpayee = 0.35 * basicSalary

        netSalary = grossSalary - (nssfDeductions + nhifDeductions +capitalpayee)
        console.log(netSalary)
    }
}