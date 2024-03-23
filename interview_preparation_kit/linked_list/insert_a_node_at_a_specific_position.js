/*
Given the pointer to the head node of a linked list and an integer to insert 
at a certain position, create a new node with the given integer as its data 
ttribute, insert this node at the desired position and return the head node.

A position of 0 indicates head, a position of 1 indicates one node away 
from the head and so on. The head pointer given may be null meaning that 
the initial list is empty.
*/

// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists

function insertNodeAtPosition(llist, data, position) {
  let p = 1;
  let curr = llist;
  while (curr && p < position) {
    curr = curr.next;
    p++;
  }
  let newNode = new SinglyLinkedListNode(data);
  newNode.next = curr.next;
  curr.next = newNode;
  return llist;
}
