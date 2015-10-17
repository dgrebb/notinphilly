var NeighborhoodModel = require('./neighborhood.model');

exports.index = function(req, res) {
  NeighborhoodModel.find({}, function(err, neighborhoods) {
      if (err) return res.status(500).send(err);
      res.status(200).json(neighborhoods);
  });
};

exports.getAllGeojson = function(req, res) {
  NeighborhoodModel.find({}, function(err, neighborhoods) {
      if (err) return res.status(500).send(err);

      var geoList = new Array();
      for(var nIndex = 0, length = neighborhoods.length; nIndex < length; nIndex++)
      {
        var neighborhood = neighborhoods[nIndex];
        var geoItem = neighborhood.geodata;
        geoItem.properties = { id : neighborhood._id, name: neighborhood.name };
        geoList.push(geoItem);
      }

      res.status(200).json(geoList);
  });
};


exports.get = function(req, res) {
  var neighborhoodId = req.params.id;

  NeighborhoodModel.findById(neighborhoodId, function(err, neighborhood) {
      if (err) return next(err);
      if (!user) return res.status(401).send('Unauthorized');
      res.json(neighborhood);
  });
};