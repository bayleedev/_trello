var assert = require('./lib/assert.js'),
    benchmark = require('./lib/benchmark.js');

function hash() {
  var letters = "acdegilmnoprstuw",
    minimumHash = 7,
    key = 37;

  return {
    encrypt: function(str) {
      var hash = minimumHash;
      for (var i = 0; i < str.length; i++) {
        hash = ((hash * key) + letters.indexOf(str[i]));
      }
      return hash;
    },
    decrypt: function(hash) {
      var tempHash, result = '';
      while (hash > minimumHash) {
        var i = hash % 37;
        result = letters[i] + result;
        hash = (hash - i) / 37;
      }
      return result;
    }
  };
}

var h = new hash();

console.log('---Encrypt---');
assert(18728807114, h.encrypt('reload'));
assert(680541702449, h.encrypt('loading'));
assert(18108152133, h.encrypt('dialog'));
assert(677856237601, h.encrypt('implode'));

console.log('---Decrypt---');
assert('reload', h.decrypt(18728807114));
assert('loading', h.decrypt(680541702449));
assert('dialog', h.decrypt(18108152133));
assert('implode', h.decrypt(677856237601));

console.log('---Benchmark---');
benchmark('decrypt', function() {
  h.decrypt(h.encrypt('reload'));
}, 1000);

console.log('---Answer---');
console.log('answer: ', h.decrypt(930846109532517)); // lawnmower
