
const User = require('../../database/users');

exports.login = async (req, res) => {
	let username= req.body.username;
	let password = req.body.password
	let success
	let err
	await User.findOne({ username })
		.then((user)=>{
			if (user.password == password && user.username == username){
				success=true
			}
			else{
				success=false
				err="invalid credentials"
			}
		})
		.catch((err)=>{
			console.log(err)
		})
	return res.json({success,err})
}
exports.register = async (req, res) => {
	let data={
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		adhar: req.body.adhar,
		vno: req.body.vno,
		username: req.body.username,
		vtype : req.body.vtype
	}
	
	let existing_user = User.findOne({email : data.email});
	if (existing_user){
		let newuser = new User(data)
		await newuser.save();
	}
	else{
		return res.json({"err" : " user already exists","success" : "false"});
	}
	return res.json({"success" : "true"})
}

