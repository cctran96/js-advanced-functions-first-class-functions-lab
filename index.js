const returnFirstTwoDrivers = a => a.slice(0,2)

const returnLastTwoDrivers = a => a.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function fareMultiplier(fare) {
        return fare * int
    }
}

const fareDoubler = fare => createFareMultiplier(2)(fare)

const fareTripler = fare => createFareMultiplier(3)(fare)

function selectDifferentDrivers(drivers, twoDrivers) {
    return twoDrivers(drivers)
}