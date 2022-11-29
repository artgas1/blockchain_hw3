async function main() {

    const [deployer] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("GasparyanToken");
    const token = await Token.deploy();
    console.log("Address of contract:", token.address);
  }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      
      process.exit(1);
    });