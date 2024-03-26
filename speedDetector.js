function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log('Ok');
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints >= 12) {
            console.log('License suspended');
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Uncomment the line below to run the function
// speedDetector(80);
