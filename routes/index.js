
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'chenxiblog' });
};

exports.about = function(req, res){
    res.render('about2', { title: 'about' });
};

exports.material = function(req, res){
    res.render('material', { title: 'material' });
}