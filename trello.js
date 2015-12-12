function assert(expect, result) {
  if (expect !== result) {
    throw "Expected '" + expect + "' did not equal output '" + result + "'";
  } else {
    console.log("Correct '" + expect + "' did equal output '" + result + "'");
  }
  return true;
}

function benchmark(name, callback, iterations) {
  var start = Date.now(), end;
  for (var i = 0; i < iterations; i++) {
    callback();
  }
  end = Date.now();
  console.log(name + ' Took: ' + (end - start));
}

function hash() {
  var letters = "acdegilmnoprstuw",
    minimumHash = 7,
    key = 37;

  function isWholeNumber(number) {
    return number % 1 === 0;
  }

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
    },
    brute: function(hash) {
      return hash;
    },
    brute: function(answer, maxLength, baseSet) {
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
          if (result = this.brute(answer, decLength, testSet)) {
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
assert('reload', h.decrypt(18728807114));
assert('loading', h.decrypt(680541702449));
assert('dialog', h.decrypt(18108152133));
assert('implode', h.decrypt(677856237601));
benchmark('decrypt', function() {
  h.decrypt(h.decrypt('reload'));
}, 999999);
console.log('answer: ', h.decrypt(930846109532517)); // lawnmower

// Got about 3 hours?
if (false) {
  console.log('---Brute Force---');
  console.log('answer: ', h.brute(930846109532517)); // lawnmower
}
