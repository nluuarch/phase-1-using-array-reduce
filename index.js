const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function addBatteries(totalBatteries, nextBattery){
    return totalBatteries + nextBattery;
} 


let totalBatteries = batteryBatches.reduce(addBatteries)

console.log(totalBatteries);