const delay = (time = 2000) => new Promise((resolve) => setTimeout(resolve, time));

module.exports = { delay };
