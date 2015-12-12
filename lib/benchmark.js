function benchmark(name, callback, iterations) {
  var start = Date.now(), end;
  for (var i = 0; i < iterations; i++) {
    callback();
  }
  end = Date.now();
  console.log(name + ' Took: ' + (end - start));
}

module.exports = benchmark;
