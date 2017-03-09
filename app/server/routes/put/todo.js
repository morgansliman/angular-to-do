const ToDo = require('../../models/ToDo');

module.exports = (app) => {

	app.put('/api/todo',
		(req, res) => {

			//	update the requested to-do object in our db
			ToDo.update(
				{
					_id: req.body._id
				},
				{
					$set: req.body
				},
				(err, todo) => {
					if (err) {
						console.log(err);
						return res.status(500)
						          .end();
					}
					console.log('Updated toDo:', todo);
					res.end();
				}
			);
		}
	);
};