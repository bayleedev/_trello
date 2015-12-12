function assert(expect, result) {
  if (expect !== result) {
    throw "Expected '" + expect + "' did not equal output '" + result + "'";
  } else {
    console.log("Correct '" + expect + "' did equal output '" + result + "'");
  }
  return true;
}

module.exports = assert;
