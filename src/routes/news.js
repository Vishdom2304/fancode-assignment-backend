const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news/createNews').post(async (req, res, next) => {
        try {
            const data = req.body
            return res.json(await News.createNews(data));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/getNewsByMatchId').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByMatchId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
    app.route('/news/getNewsByTourId').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByTourId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
    app.route('/news/getNewsBySportId').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsBySportId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}