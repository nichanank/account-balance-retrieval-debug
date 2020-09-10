module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*', // Match any network id
      gasPrice: 30000000000,
      gas: 8000029,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.6.3',
      optimizer: {
        enabled: true,
        runs: 200,
      },
      // evmVersion: "petersburg"
    },
  },
}
