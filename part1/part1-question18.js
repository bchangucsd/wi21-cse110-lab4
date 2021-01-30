let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for (carType in statistics) {
    if (carType.charAt(0) == 'r' || carType.charAt(0) == 'R') {
        console.log(statistics[carType]);
    }
    else if ((statistics[carType] % 2) != 0) {
        console.log(statistics[carType]);
    }
}