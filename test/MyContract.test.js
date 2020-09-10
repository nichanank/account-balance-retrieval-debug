const MyContract = artifacts.require("./contracts/MyContract.sol");

contract('MyContract', async (accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  beforeEach('set up new instance of MyContract for each test', async () => {
    myContractInstance = await MyContract.new()
  });
  describe('owner check', async () => {
    it('should return the correct owner of the contract', async function () {
      const callOwner = await myContractInstance.owner.call();
      assert.equal(callOwner, owner);
    });
  });
  describe('balance', async () => {
    it('should return the correct balance', async function () {
      const callBalance = await myContractInstance.getBalance();
      console.log(callBalance);
    });
  });
});