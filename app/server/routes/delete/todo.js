const ToDo = require('../../models/ToDo');

module.exports = (app) => {

	app.delete('/api/todo',
		(req, res) => {

			//	delete the requested to-do object in our db
			ToDo.remove(
				{
					_id: req.body.id
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