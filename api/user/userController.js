var User = require('./userModel.js');

exports.save = function(req, res){
	// query for user

	// update saved dashboard
	User.findOne({username: 2773629894006}, function(err, user){

		if (err) {
			console.log('Error: ' + err);
		}

		if (user) {
			user.savedDashboards;
			user.save();
		}

	});

	res.send('hey');

};

exports.load = function(req, res) {
	// query DB

	// title of dashboard

	// find user with username
	User.findOne({username: 2773629894006/* result from jwt */  /*title of dashboard */ }, function(err, user){

		console.log(user.savedDashboards);
		// iterate through savedDashboards
		
		for (var i = 0; i < user.savedDashboards.length; i++) {
			// find a match with dashboard title
			//if (user.savedDashboards[i] === )

		}

		if (err) {
			console.log('Error is ' + err);
			throw err;
		}

		// if user's found
		if (user) {
			console.log('user exists!');
			console.log(user);
			// grab data object
			// console.log(req.body.dashboardObj);
			// serve it to client	
			// res.send(req.body.dashboardObj);	

		}

		if (!user) {
			console.log('dashboard does not exist!');
		}

		res.send('we are in here');

	});

}

