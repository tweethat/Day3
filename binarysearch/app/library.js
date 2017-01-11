'use strict'
//var binarySearch = [];

module.exports =  function binarySearch() {
		Array.prototype.toTwenty = function () {
			for (var x = 1; x <= 20; x++ ) {
				this.push(x);
		}
			return this;
		};

		Array.prototype.toForty = function () {
			for (var x = 2; x <= 40; x+=2) {
				this.push(x);
			}
				
			return this;
		} 

		Array.prototype.toOneThousand = function () {
			for (var x = 10; x <= 1000; x += 10) {
				this.push(x);
			}
				
			return this;
		}

		Array.prototype.search = function binarySearch(num) {
			
		
			var arr_length = this.length;
			var start = 0;
			var end = arr_length -1;
			var ans = {count : 0, index : null, length : arr_length};
			
		

			//searchArray = this.sort();
			while (start <= end) {
				var mid = Math.floor((start + end) /2);
				if (this[start] === num) {
					ans.index = start;
					return ans;

				}
				else {
					start = start + 1;
				}
				if (this[end] === num) {
					ans.index = end;
					return ans;
				}
				else {
					end = end - 1;
				}

				if (this[mid] === num) {
					ans.index = mid;
					return ans;				
					
				}
				else if (this[mid] > num) {
					end = mid - 1;
					ans.count += 1;
				
				}
				else if (this[mid] < num) {
					start = mid + 1;
					ans.count += 1;
					
				}
	
			}
						
			ans.index = -1;
			return ans;			

		}
	}
	