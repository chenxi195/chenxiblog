/**
 * Created by chenxi on 14-7-28.
 */
'use strict';


function indexView(req, res, next) {
    res.render('index', { title: 'chenxiblog'});
}

exports.indexView = indexView;