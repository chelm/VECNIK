
//========================================
// Tile JSON data provider 
//========================================

(function(VECNIK) {

  function TileJSONAPI(opts) {
      this.opts = opts;
      this.base_url = opts.base_url;
  }

  TileJSONAPI.prototype._url = function(layer, path) {
      return this.base_url + layer + '/' + path;
  }

  TileJSONAPI.prototype.url = function(coordinates) {
      var url = this._url( this.opts.layer, [coordinates.zoom, coordinates.column, coordinates.row].join('/') + '.json' );
      return url;
  }
  
  VECNIK.TileJSON = VECNIK.TileJSON || {};
  VECNIK.TileJSON.API = TileJSONAPI;

})(VECNIK);
