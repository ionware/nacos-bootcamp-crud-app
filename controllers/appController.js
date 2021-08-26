module.exports = {
  get: (req, res) => {
    res.send('Hello World')
  },

  about: (req, res) => {
    res.send('This is the about page.')
  }
}