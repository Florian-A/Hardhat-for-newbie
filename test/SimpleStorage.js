const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
    let SimpleStorage;
    let simpleStorage;
    let owner;

    beforeEach(async function () {
        SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        [owner] = await ethers.getSigners();
        simpleStorage = await SimpleStorage.deploy();
    });

    it("Should return the new stored value once it's set", async function () {
        await simpleStorage.set(42);
        expect(await simpleStorage.get()).to.equal(42);
    });

    it("Should add correctly", async function () {
        await simpleStorage.set(10);
        await simpleStorage.add(15);
        expect(await simpleStorage.get()).to.equal(25);
    });
});
