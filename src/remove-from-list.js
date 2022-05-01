const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
/*
  function removeAt(position)
  let length = l.length;
  let head = l[0];

    if(position<0 || position>=this.length){
      return null;
    } 

    let current = head;

    if(position===0){
      head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }

    this.length--;
    return current.value;

  }
  function remove(element) {
    this.removeAt( IndexOf(element) );
  }

  function indexOf(element){
    let current = l[0];
    let index = 0;

    while(current){
      if(current.value === element) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
    */
  }



module.exports = {
  removeKFromList
};
