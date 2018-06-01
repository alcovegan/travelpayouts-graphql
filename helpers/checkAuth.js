module.exports = (req, res, next) => {
	// console.log('Auth is checked!');
	// if(!req.headers.authorization) {
	// 	res.send({ ok: false, status: 500, message: "Auth is required!" })
	// } else {
	// 	next();
	// }
	next()
};