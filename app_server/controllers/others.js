/**
 * Created by traciarms on 9/13/16.
 */
/* GET home page */
module.exports.about = function(req, res){
    res.render('generic-text', { title: 'About' });
};