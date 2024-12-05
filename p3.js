function calculateBonus(salary, yearsOfExperience, performanceScore) {
    let bonusPercentage;

    if (yearsOfExperience > 5 && performanceScore > 8) {
        bonusPercentage = 20;
    } else if (yearsOfExperience > 3 && yearsOfExperience <= 5 && performanceScore > 7) {
        bonusPercentage = 10;
    } else if (yearsOfExperience <= 3) {
        bonusPercentage = 5;
    } else {
        bonusPercentage = 0;
    }
    const bonusAmount = (salary * bonusPercentage) / 100;
    console.log(`Bonus Percentage: ${bonusPercentage}%`);
    console.log(`Bonus Amount: $${bonusAmount}`);
    return bonusAmount;
}
const salary = 50000; 
const yearsOfExperience = 4;
const performanceScore = 9; 
calculateBonus(salary, yearsOfExperience, performanceScore);  
