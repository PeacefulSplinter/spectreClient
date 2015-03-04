var User = require('./userModel.js');

exports.save = function(req, res){

	var userID = ''; // replace with token value sent on request
	var dashTest = {
		title: 'Aww yes!!',
		dash: '<div></div>',
		whenCreated: '9:00pm',
		integrations: 'google, twitter, mailchimp'
	}; // replace with dashboard object from req.header? or maybe req.body. We'll see.

	User.findOne({'username': userID }, function(err, user){
		if (err) { return err; }
		if (!user){ return err; }
		user.savedDashboards.push(dashTest);
		user.save();
		res.status(200).send();
	});
};

exports.load = function(req, res) {

	var userID = ''; // replace with token value sent on request
	var dashTitle = "Aww yes!!"; // replace with title from req object sent on request

	User.findOne({'username': userID }, function(err, user){
		if (err || !user || user.savedDashboards.length === 0) { return err; }
		for (var i = 0; i < user.savedDashboards.length; i++) {
			if(user.savedDashboards[i].title === dashTitle){
				res.status(200).json(user.savedDashboards[i]);
			}
		};
	});
}

