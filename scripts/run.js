const main = async () => {
    // HRE = hardhat runtime environment
   // Tell Hardhat to go into the directory called WavePortal and compile it
   const waveContractFactory = await hre.ethers.getContractFactory(
      "WavePortal"
   );

   // After deploy contract, we need to tell miners to pick up this contract
   const waveContract = await waveContractFactory.deploy();

   // Wait for the contract to be mined
   await waveContract.deployed();

   // Print local address
   console.log("Contract deployed to --", waveContract.address);
};

const runMain = async () => {
   try {
      await main();
      process.exit(0);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};

runMain();
