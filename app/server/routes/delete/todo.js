const ToDo = require('../../models/ToDo');

module.exports = (app) => {

	app.delete('/api/todo',
		(req, res) => {
		var body = JSON.parse(req.body);

			//	delete the requested to-do object in our db
			ToDo.remove(
				{
					_id: body._id
				},
				(err) => {
					if (err) {
						console.log(err);
						return res.status(500)
						          .end();
					}
					console.log('Deleted toDo:', req.body);
					res.end();
				}
			);
		}
	);
};