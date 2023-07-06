const markBMI = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        return this.mass / (this.height ** 2);
    }
}
const johnBMI = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return this.mass / (this.height ** 2);
    }
}
console.log(markBMI.calcBMI() < johnBMI.calcBMI() ? `${johnBMI.fullName}'s BMI (${johnBMI.calcBMI()}) is higher than ${markBMI.fullName}'s (${markBMI.calcBMI()})` : `${markBMI.fullName}'s BMI (${markBMI.calcBMI()}) is higher than ${johnBMI.fullName}'s (${johnBMI.calcBMI()})`);