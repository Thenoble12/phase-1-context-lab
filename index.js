/* Your Code Here */
function createEmployeeRecord([firstName, familiyName, title, payPerHour]){
    let newEmployee = {
        firstName: firstName,
        familiyName: familiyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    };
    return newEmployee;
}


function createEmployeeRecords(records){
    return records.map(createEmployeeRecord);    
}

function createTimeInEvent(timeDateString){
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(timeDateString.substr(11)),
        date: timeDateString.substr(0,10),
    };
    this.timeInEvents.push(timeIn)
    return this;
}

function createTimeOutEvent(timeDateString){
    let timeOut = {
        type: "TimeOut",
        hour: parseInt(timeDateString.substr(11)),
        date: timeDateString.substr(0,10),
    }
    this.timeOutEvents.push(timeOut)
    return this;
}


function hoursWorkedOnDate(dateString) {
    const timeIn = this.timeInEvents.find(e => {
        return e.date === dateString
    }).hour

    const timeOut = this.timeOutEvents.find(e => {
        return e.date === dateString
    }).hour
    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(dateString) {
    let pay = hoursWorkedOnDate(dateString) * this.payPerHour
    console.log("PAY: " + pay)
    return pay;
}

// const allWagesFor = function () {
//     let totalPay = 0;
//     for (let i = 0; i < this.timeInEvents.length; i++) {
//         totalPay += wagesEarnedOnDate(this.timeInEvents[i])
//     }    
//     console.log("TOTALPAY: " + totalPay)
//     return totalPay;
// }

function calculatePayroll(array){
     let employees = []   
     for (employee of this) {
         employees.push(allWagesFor(obj))
     }
     return array.reduce((a,b) => a + b) 
}

function findEmployeeByFirstName(srcArray, firstName) {
    let employee = srcArray.find((rec) => rec.firstName === firstName);
    return employee;
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

