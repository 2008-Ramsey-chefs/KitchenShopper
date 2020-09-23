module.exports = (req, res, next) =>{
    const testId = req.params.userId;
    if(testId === req.sessions.userId || req.user.isAdmin){
        next()
    } else{
        const err = new Error('Unathorized action');
        next(err);
    }
}