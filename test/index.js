var should = require('chai').should(),
    defragmentedArray = require('../index'),
    defragmented = defragmentedArray.defragment,
    arrayList = ["Saab", "", "BMW"],
    defragmentedArrayList = ["Saab", "Volvo", "BMW"];
    
describe('#defragmentArray', function() {
  it('return defragmented array', function() {
    defragmented(arrayList, 1).should.equal(defragmentedArrayList);
  });
});