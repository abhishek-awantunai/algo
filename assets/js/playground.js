class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const push = (value) => {
  let newNode = new Node(value);
  if (!list) {
    list = newNode;
    return list;
  }
  let current = list;

  while (current) {
    if (!current.next) {
      current.next = newNode;
      return list;
    }
    current = current.next;
  }
};

const pop = () => {
  if (!list || !list.next) {
    list = null;
    return list;
  }
  let prev = list;
  let current = prev.next;

  while (current) {
    if (current.next === null) {
      prev.next = null;
      return list;
    }
    prev = current;
    current = prev.next;
  }
};

const shift = () => {
  if (!list || !list.next) {
    return null;
  }

  list = list.next;
  return list;
};

const unshift = (value) => {
  const newNode = new Node(value);
  if (!list) {
    list = newNode;
    return list;
  }

  newNode.next = list;
  list = newNode;
  return list;
};

const getAtIndex = (index) => {
  if (!list) {
    return null;
  }

  let current = list;

  let count = 0;
  while (current) {
    if (index === count) {
      return current;
    }
    count++;
    current = current.next;
  }
  return null;
};

const deleteAt = (index) => {
  if (!list || index < 0) {
    return false;
  }
  if (index === 0) {
    shift();
  }
  let prev = list;
  let current = prev.next;
  let count = 1;

  while (current) {
    if (count === index) {
      prev.next = current.next;
      return true;
    }
    count++;
    prev = current;
    current = prev.next;
  }
  return false;
};

const reverseList = () => {
  if (!list) {
    return null;
  }
  if (!list.next) {
    return list;
  }

  return list;
};

let list = null;
push(11);
push(12);
push(13);
push(14);
push(15);
push(16);
unshift(10);

const list1 = new Node(1);
list1.next = new Node(5);
list1.next.next = new Node(6);

const list2 = new Node(7);
list2.next = new Node(5);
list2.next.next = new Node(8);

const addTwoNumbersStoredInLinkedList = (list1, list2) => {
  let carryOver = 0;
  let result = new Node(0);
  let currentNode = result;

  while (list1 !== null || list2 !== null) {
    let val1 = 0;
    let val2 = 0;

    if (list1 !== null) {
      val1 = list1.value;
      list1 = list1.next;
    }

    if (list2 !== null) {
      val2 = list2.value;
      list2 = list2.next;
    }

    let sum = val1 + val2 + carryOver;
    carryOver = Math.floor(sum / 10);
    sum = sum % 10;

    currentNode.next = new Node(sum);
    currentNode = currentNode.next;
  }

  if (carryOver > 0) {
    currentNode.next = new Node(carryOver);
  }

  return result.next;
};

// 651 + 857 = 1508
console.log(addTwoNumbersStoredInLinkedList(list1, list2));
