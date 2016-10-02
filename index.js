module.exports = {
	defragment: function (inputarray, key) {
		if (!Array.isArray(inputarray)) {
         return;
       }
       var present = inputarray.filter(function (item) {
           return item[key];
         }),
         empty = inputarray.filter(function (item) {
           return !item[key];
         });
       return present.concat(empty);
	}
}