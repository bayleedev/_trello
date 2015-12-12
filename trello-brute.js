var assert = require('./lib/assert.js');

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
    decrypt: function(answer, maxLength, baseSet) {
      var end = maxLength === 1,
      decLength = maxLength - 1,
      testSet;
      baseSet = baseSet || '';
      for (var charIndex = 0;charIndex < letters.length; charIndex++) {
        testSet = baseSet + letters[charIndex];
        if (h.encrypt(testSet) === answer) {
          return testSet;
        }
        if (!end) {
          if (result = this.decrypt(answer, decLength, testSet)) {
            return result;
          }
        }
      }
      return false;
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
assert('aacd', h.decrypt(13119166, 4));
