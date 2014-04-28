module.exports = {
  setUp : function(client, callback, ctx) {
    setTimeout(function() {
        console.dir(typeof ctx);
      client.globals.test.equals(typeof ctx, "object")
      client.globals.test.ok('setUp with ctx callback called.');
      callback();
    }, 100);
  },

  demoTestAsyncWithCtx : function (client) {
    client.url('http://localhost').end();
  },

  tearDown : function(callback) {
    var client = this.client;
    setTimeout(function() {
      client.globals.test.ok('tearDown callback called.');
      callback();
    }, 100);
  }
};