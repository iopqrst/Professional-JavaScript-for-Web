var myArray = function() {
	
	function isArray(obj) {
		return Array.isArray(obj) || Object.prototype.toString.call(obj) === "[object Array]";
	}
	
	//创建一个新对象
	var arr = [];
	//获得某值的索引值
	arr.indexOf = function(item) {
		for (var i = 0, len = arr.length; i < len; i++) {
			if (arr[i] === item) {
				return i;
			}
		}
		return -1;
	};
	//检查某值是否在数组中
	arr.hasItem = function(item) {
		return arr.indexOf(item) !== -1;
	};
	//不允许插入数组中已有的值，这里也可以传入一个数组
	arr.append = function(aItem) {
		function _push(aItem) {
			var aExt = [];
			for (var i = 0, l = aItem.length; i < l; i++) {
				if (!arr.hasItem(aItem[i])) {
					arr.push(aItem[i]);
				} else {
					aExt.push(aItem[i]);
				}
			}

			if (aExt.length > 0) {
				alert(aExt.toString() + ' has in Array!');
				aExt = null;
			}
		};

		if (isArray(aItem)) {
			_push(aItem);
		} else {
			_push(arguments);
		}

		return arr;
	};
	//移除某值，或某个数组
	arr.remove = function(aItem) {
		function _splice(a) {
			for (var i = 0, l = a.length; i < l; i++) {
				var item = a[i];
				if (arr.hasItem(item)) {
					return arr.splice(arr.indexOf(item), 1);
				}
			}
		};

		if (isArray(aItem)) {
			_splice(aItem);
		} else {
			_splice(arguments);
		}

		return arr;
	};
	//清空数组
	arr.clearAll = function() {
		arr.length = 0;
		return arr;
	};
	//在某个索引处插入某值
	arr.insert = function(target, indexPos) {
		var len = arguments.length;
		if (len == 2) {
			var arg = arguments[0];

			if (!arr.hasItem(arg)) {
				arr.splice(arguments[1], 0, arg);
			} else {
				alert(arg + ' has in Array!');
			}
		} else {
			alert('insert args count error!');
		}

		return arr;
	};
	//去除重复项
	arr.removeRepeat = function() {
		var json = {},
			res = [],
			l = arr.length;
		if (l > 0) {
			json[arr[0]] = true;
			res.push(arr[0]);

			for (var i = 1; i < l; i++) {
				if (!json[arr[i]]) {
					json[arr[i]] = true;
					res.push(arr[i]);
				}
			}
		}

		return res;
	};

	//返回新对象，这个新对象重写调用构造函数时返回的值this
	return arr;
};