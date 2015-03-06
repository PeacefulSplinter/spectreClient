var User = require('./userModel.js');

exports.save = function(req, res){
	console.log(req.body);
	User.findOne({'username': req.user.username }, function(err, user){
		if (err) { return err; }
		if (!user){ return err; }
		console.log('before save', user.savedDashboards);
		req.body.token = null;
		user.savedDashboards.push(req.body);
		console.log('after save', user.savedDashboards);
		user.save();
		res.status(200).send();
	});
};

exports.load = function(req, res) {
	User.findOne({'username': req.user.username }, function(err, user){
		if (err || !user || user.savedDashboards.length === 0) { return err; }
		res.status(200).json(user.savedDashboards);
	});
}

exports.loadOne = function(req, res) {
	User.findOne({'username': req.user.username }, function(err, user){
		if (err || !user || user.savedDashboards.length === 0) { return err; }
		for (var i = 0; i < user.savedDashboards.length; i++) {
			if(user.savedDashboards[i].id === req.param(':id')){
				res.status(200).json(user.savedDashboards[i]);
			}
		};
		console.log('dashboard not found!');
		res.status(200).send('Dashboard not found!');
	});
}

