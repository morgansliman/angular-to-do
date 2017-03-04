const ToDo = require('../../models/ToDo');

module.exports = (app) => {

	app.get('/api/todos',
		(req, res) => {

			//	retrieve all ToDos from mongodb
			ToDo
				.find({})
				.exec()
				.then(data => res.json(data));
		}
	);
};