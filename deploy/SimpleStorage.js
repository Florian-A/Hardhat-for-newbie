const hre = require("hardhat");

async function main() {
    let simpleStorage;
    try {
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await SimpleStorage.deploy();
        console.log("Contract has been success deployed to :", simpleStorage.target);
    } catch (error) {
        console.error("Error during deployment:", error);
    }

    console.log("Contract verification is comming ...");
    await new Promise(resolve => setTimeout(resolve, 60000));

    try {
        await hre.run("verify:etherscan", {
            address: simpleStorage.target,
            constructorArguments: [],
            force: true
        });
        console.log("Contract verified on Etherscan successfully.");
    } catch (error) {
        console.error("Error during verification:", error);
        process.exit(1);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
