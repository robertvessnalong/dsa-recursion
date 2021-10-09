/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) {
    return 1;
  }
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWord = 0) {
  if (idx === words.length) {
    return longestWord;
  }
  longestWord = Math.max(words[idx].length, longestWord);
  return longest(words, idx + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, updatedStr = '') {
  if (idx >= str.length) {
    return updatedStr;
  }
  updatedStr += str[idx];
  return everyOther(str, idx + 2, updatedStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  // Right Index
  const right = str.length - idx - 1;
  // Left Index
  const left = idx;
  // If isPalindrome
  if (left >= right) {
    return true;
  }
  // Not Palindrome
  if (str[left] !== str[right]) {
    return false;
  }
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) {
    return -1;
  }
  if (arr[idx] === val) {
    return idx;
  }
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, updatedStr = '') {
  updatedStr += str[str.length - 1 - idx];
  if (updatedStr.length === str.length) {
    return updatedStr;
  }
  return revString(str, idx + 1, updatedStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const arr = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    }
    if (typeof obj[key] === 'object') {
      arr.push(...gatherStrings(obj[key]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let center = Math.floor((right + left) / 2);
  if (arr[center] === val) {
    return center;
  }
  if (arr[center] > val) {
    return binarySearch(arr, val, left, center - 1);
  }
  return binarySearch(arr, val, center + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
