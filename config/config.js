const config = {
    development: {
        PORT: 5000,
    },
    production: {
        PORT: 80,
    },
};


// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`Selected Config: ${JSON.stringify(config[process.env.NODE_ENV])}`);

module.exports = config[process.env.NODE_ENV.trim()] || config['development'];
