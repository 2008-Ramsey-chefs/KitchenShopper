module.exports = (req, res, next) => {
  const testId = req.params.userId
  if (testId === req.session.passport.user || req.user.isAdmin) {
    next()
  } else {
    const err = new Error('Unathorized action')
    next(err)
  }
}
