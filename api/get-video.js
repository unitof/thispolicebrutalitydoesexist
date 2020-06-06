const vids = require('../data/videos.json')

module.exports = (req, res) => {
  res.status(303) // See Other
  res.setHeader('Location', `/videos/${vids[Math.floor(Math.random() * vids.length)]}`)
  res.send()
}
