const News = require('../models/news');
const Match = require('../models/match');
const Tour = require('../models/tour');

const createNews = async body => {
    let {title, description, matchId, tourId} = body;

    if (!title) throw new Error('Missing required parameter: title');
    if (!description) throw new Error('Missing required parameter: description');
    if (!matchId && !tourId) throw new Error('Missing required parameter: matchId or tourId');

    let sportId = null;
    
    if(matchId){
        tourId = await Match.getTourId(matchId);
        tourId = tourId[0]["tourId"];
    }
    else if(tourId){
        sportId  = await Tour.getSportId(tourId);
        sportId = sportId[0]["sportId"];
    }

    return await News.createNews(title, description, matchId, tourId, sportId);
}

const getNewsByMatchId = async params => {   

    const {matchId} = params;
    if(matchId) return await News.getNewsByMatchId(matchId);
    else throw new Error("'Missing required parameter: matchId");
}

const getNewsByTourId = async params => {   

    const {tourId} = params;
    if(tourId) return await News.getNewsByTourId(tourId);
    else throw new Error("'Missing required parameter: tourId");
}

const getNewsBySportId = async params => {   

    const {sportId} = params;
    if(sportId) return await News.getNewsBySportId(sportId);
    else throw new Error("'Missing required parameter: sportId");
}
module.exports = {
    createNews: createNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
}