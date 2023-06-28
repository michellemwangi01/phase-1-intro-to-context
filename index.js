// Your code here
function createEmployeeRecord([firstname, familyname, title, payPerHour]){
    let employeeRecord = {
        firstName: firstname,
        familyName: familyname,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

function createEmployeeRecords(employees){
    //console.log(employees);
    let employeeRecords = []
    for (let employee of employees){
        employeeRecords.push(createEmployeeRecord(employee))
    }
    return employeeRecords
}

let dataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
  ]
//console.log(createEmployeeRecords(dataEmployees));

function createTimeInEvent(employeeRecord, dateStampIn) {
    let dateStampInArr = dateStampIn.split(' ')
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStampInArr[1]),
        date: dateStampInArr[0]
    })
    return employeeRecord
    
}

let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400")
console.log(updatedBpRecord);

function createTimeOutEvent(employeeRecord, dateStampOut) {
     let dateStampOutArr = dateStampOut.split(' ')
       employeeRecord.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(dateStampOutArr[1]),
            date: dateStampOutArr[0]
    
        })
        return employeeRecord
        
    }


function hoursWorkedOnDate(employeeRecord, date){
    let timeIn, timeOut
    let timeInEvents = []
    let timeOutEvents = []
    timeInEvents = employeeRecord.timeInEvents
    timeOutEvents = employeeRecord.timeOutEvents

    timeIn = employeeRecord.timeInEvents.hour
    timeOut = employeeRecord.timeOutEvents.hour
    for (const timeInEvent of timeInEvents) {
        if(timeInEvent.date == date){
            timeIn = timeInEvent.hour
        }
        
    }
    for (const timeOutEvent of timeOutEvents) {
        if(timeOutEvent.date == date){
            timeOut = timeOutEvent.hour
        }
        
    }
    //hoursWorked = timeOut - timeIn
    let hoursWorked = Math.floor(timeOut - timeIn)/100
    return hoursWorked

}


function wagesEarnedOnDate(employeeRecord, date){
    let hoursWorked = hoursWorkedOnDate(employeeRecord, date)
    console.log("hoursWorked: "+ hoursWorked);
    console.log("payPerhour: "+ employeeRecord.payPerHour);
    let  payOwed = hoursWorked * employeeRecord.payPerHour

    return payOwed



}

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
console.log(wagesEarnedOnDate(cRecord, "0044-03-15"));


function allWagesFor(employeeRecord){
    let timeinEvents = employeeRecord.timeInEvents
    console.log(employeeRecord);
    let allDates = []
    for (const timeinEvent of timeinEvents){
        allDates.push(timeinEvent.date) 
    }
    
    let allwages = 0
    for(let date of allDates){
       let  dayWage = wagesEarnedOnDate(employeeRecord, date)
        console.log("daywage 1: "+ dayWage);
        allwages+= dayWage
    }
    return allwages;
}
    cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
    // Earns 324
    updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
    updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
    
    // Earns 54
    updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
    updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")

console.log(allWagesFor(cRecord));

function calculatePayroll(employeeRecords){
    let employeeWage, totalOwed = 0
    for(let employeeRecord of employeeRecords){
        employeeWage = allWagesFor(employeeRecord)
        totalOwed += employeeWage
    }
    return totalOwed    
}


//calculatePayroll(csvDataEmployees)


  