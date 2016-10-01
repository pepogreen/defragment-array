module.exports = {
	defragment: function (inputarray, key) {
		if (!angular.isArray(array)) {
         return;
       }
       var present = array.filter(function (item) {
           return item[key];
         }),
         empty = array.filter(function (item) {
           return !item[key];
         });
       return present.concat(empty);
	}
}