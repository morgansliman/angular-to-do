const ToDo = require('../../models/ToDo');

module.exports = (app) => {

	app.post('/api/todo',
		(req, res) => {

			//	create a new to-do object in our db
			ToDo.create(
				{
					todo:       req.body.todo,
					completeBy: req.body.completeBy
				},
				(err, todo) => {
					if (err) {
						console.log(err);
						return res.status(500)
						          .end();
					}
					console.log('New toDo:', todo);
					res.end();
				}
			);
		}
	);
};