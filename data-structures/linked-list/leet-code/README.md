# 🔄 Doubly Linked Lists: Swap Nodes in Pairs

> 🎓 This exercise was included in a Udemy course I took: **[JavaScript Data Structures & Algorithms + LEETCODE Exercises](https://www.udemy.com/course/data-structures-algorithms-javascript/)** by **Scott Barrett**.

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-orange?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Doubly%20Linked%20List-blueviolet?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript)

---

## 📋 Problem Statement

Implement a member function called **`swapPairs()`** that swaps every two adjacent nodes of a **doubly linked list**.

> 💡 **Note:** This `DoublyLinkedList` does **not** have a `tail` pointer — which makes the implementation easier.

---

## 🎯 Objective

| Requirement | Description |
| :--- | :--- |
| 🛠️ **Output** | The function should modify the doubly linked list **in-place**, swapping every two adjacent nodes. |
| 🚧 **Constraint** | You can only traverse the doubly linked list **once**. |

---

## 🧪 Examples

### ✅ Example 1

**Given** a `DoublyLinkedList` object `list` with the following values:

```text
1 <-> 2 <-> 3 <-> 4 <-> 5
```

**Call:**

```js
list.swapPairs();
```

**After the call, the list should be:**

```text
2 <-> 1 <-> 4 <-> 3 <-> 5
```

---

### ✅ Example 2

**Given** a `DoublyLinkedList` object `list` with the following values:

```text
3 <-> 1 <-> 2 <-> 4
```

**Call:**

```js
list.swapPairs();
```

**After the call, the list should be:**

```text
1 <-> 3 <-> 4 <-> 2
```

---

## 🧠 Approach I Used

> 🧭 A single-pass pointer-rewiring strategy.

1. 🧩 Create **4 pointers**:
   - `pointerStart`
   - `pointerEnd`
   - `pointerPreviousBlock`
   - `pointerNextBlock`
2. 🚩 Set the `head` of the linked list to start at `head.next`.
3. 🔁 Set up the iteration:
   - **Total iterations** = `length / 2`
4. 🔗 Update pointer links inside the iteration:
   - ➕ Add conditional logic to handle **odd-length** lists.

---

## 📊 Complexity

| Metric | Value | Why |
| :--- | :---: | :--- |
| ⏱️ **Time** | `O(n)` | Single traversal of the list |
| 💾 **Space** | `O(1)` | In-place pointer rewiring, no extra structures |

---

## 🏷️ Tags

`#doubly-linked-list` `#pointers` `#in-place` `#swap-nodes` `#leetcode` `#javascript` `#udemy` `#scott-barrett`

---

<div align="center">

✨ **Happy Coding!** ✨

</div>