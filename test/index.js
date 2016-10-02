var should = require('chai').should(),
    defragmentedArray = require('../index'),
    defragmented = defragmentedArray.defragment,
    arrayList = ['Audi', '', 'BMW', 'Audi', '', 'BMW', 'Audi', '', 'BMW'],
    defragmentedArrayList = ['Saab', 'BMW', ''];
    
describe('#defragmentArrayTest', function() {
  it('return defragmented array', function() {
  	console.log(defragmented(arrayList, 1));
  });
});