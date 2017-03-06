const ToDo = require('../../models/ToDo');

module.exports = (app) => {

	app.delete('/api/clear',
		(req, res) => {

			//	delete all completed todos
			ToDo.remove(
				{
					completed: true
				},
				(err) => {
					if (err) {
						console.log(err);
						return res.status(500)
						          .end();
					}
					console.log('Deleted all completed todo\'s');
					res.end();
				}
			);
		}
	);
};