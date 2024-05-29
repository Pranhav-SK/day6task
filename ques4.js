class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance, time) {
        const fare = this.baseFare + (distance * this.costPerKm) + (time * this.costPerMinute);
        return fare;
    }
}

