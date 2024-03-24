// Define a function to calculate points for exceeding the speed limit.
function speedCalculator(speed){
    // Define the speed limit.
    let speedLimit = 70
    // Declare a variable to store the points.
    let points
    // If the speed is less than the speed limit, return 'OK'.
    if(speed <=speedLimit){
        return 'OK'
    }else{
        // If the speed is greater than the speed limit calculate the difference.
        let speedDifference = speed - speedLimit;
        // Calculate points based on the speed difference 
        points = Math.floor(speedDifference/5);
        // If the calculated points is greater than 12, return 'licence suspended'.
        if(points>=12){
            return 'licence suspended';
        }
 // Return the calculated points.
    }
    return points;

}
console.log(speedCalculator(200));