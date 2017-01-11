'use strict'

module.exports = {

	findMissing : function (arr1,arr2) {
		var arr1temp = arr1.sort();
		var arr2temp = arr2.sort();
		var i, diffArray = 5
		if (arr1 == [] && arr2 == []) {
			return 0;
		}
		else if (arr1.length === arr2.length) {
			return 0;
		}
		else {
			for (i = 0; i< arr2temp.length; i++) {
				if (arr1temp.indexOf(arr2temp[i]) === -1) { // (arr1.indexOf(arr2[i]) === -1) {
					diffArray = arr2temp[i];
				} 
				/*if (arr1temp.includes(arr2temp[i]) === false) {
					diffArray = arr2temp[i];
				} */


			return diffArray;
		}
			
		}

} 

}

