import { calculateCost } from '../libs/billing-lib';

test("Lower Tier", () => {
    const storgae = 10;
    const cost = 4000;
    const expectedCost = calculateCost(storgae);
    expect(cost).toEqual(expectedCost);
});

test("Middle Tier", () => {
    const storgae = 100;
    const cost = 20000;
    const expectedCost = calculateCost(storgae);
    expect(cost).toEqual(expectedCost);
});

test("Highest Tier", () => {
    const storgae = 101;
    const cost = 10100;
    const expectedCost = calculateCost(storgae);
    expect(cost).toEqual(expectedCost);
});