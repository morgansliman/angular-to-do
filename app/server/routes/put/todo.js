const ToDo = require('../../models/ToDo');

module.exports = (app) => {

	app.put('/api/toDo',
		(req, res) => {

			//	update the requested to-do object in our db
			ToDo.update(
				{
					_id: req.body.id
				},
				{
					$set: {
						todo:       req.body.todo,
						completeBy: req.body.completeBy,
						completed:  req.body.completed
					}
				},
				(err, todo) => {
					if (err) {
						console.log(err);
						return res.status(500)
						          .end();
					}
					console.log('New toDo:', todo);
				}
			);
		}
	);
};