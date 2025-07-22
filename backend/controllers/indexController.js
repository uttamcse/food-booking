const getHomeInfo = (req, res) => {
  const name = process.env.NAME || "CricBuzz!";
  res.json({ info: `Hello ${name}` });
};

module.exports = { getHomeInfo };