const routes = function(app){
	app.get('/admin', (req, res, next)=>{
		res.render('admin/index')
	})
}

module.exports = routes;
