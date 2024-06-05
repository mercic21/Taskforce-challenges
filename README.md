# My Coding Challenge and Photo Gallery Project

Welcome to my coding challenge and photo gallery project! This repository contains solutions to two coding challenges as well as a responsive photo gallery web application.


## Project Structure

The repository is organized as follows:


1. `challenges` directory which contains challenges:
`arrayMap.js`, `stringTransform.js`

2. `gallery` directory which contains the responsive photo gallery web application

### Running the Challenges
1. Navigate to the `TASKFORCE-CHALLENGES` directory:
     ```sh
    cd TASKFORCE-CHALLENGES
    ```
2. Navigate to the `challenges` directory:
    ```sh
    cd challenges
    ```
3. You can run the JavaScript files using Node.js. For example:
    ```sh
    node arrayMap.js
    node stringTransform.js
    ```

### Running the Photo Gallery
1. Navigate to the `TASKFORCE-CHALLENGES` directory:
     ```sh
    cd TASKFORCE-CHALLENGES
    ```
1. Navigate to the `gallery` directory:
    ```sh
    cd gallery
    ```
2. Open the `index.html` file in your web browser.

## Challenges

### Array Subarray Sum

**File:** `challenges/arrayMap.js`

This program determines if there exists a contiguous subarray within a given array that sums up to a specified target. If such a subarray exists, it returns `true`; otherwise, it returns `false`.

### String Transformation

**File:** `challenges/stringTransform.js`

This program transforms a given string based on its length:
- If the length is divisible by 3, the string is reversed.
- If the length is divisible by 5, each character is replaced with its ASCII code.
- If the length is divisible by both 3 and 5, both operations are performed in the specified order.

## Photo Gallery

**Directory:** `gallery`

This is a responsive photo gallery web application. It displays a series of animal cards with images and text. Clicking on an image opens it in a modal, allowing navigation between images using next and previous buttons.

## Approach

### Array Subarray Sum Approach

1. Setup: I started by making a hash table (seen) to remember sums we've seen and their positions. This helps us quickly check past sums.

2. Sum and Check: As I walked through the array, I kept a running total (currentSum). If this total hit the target, I knew we found the subarray and returned true.

3. Find Needed Sum: If not, I calculated what sum we needed (needed = currentSum - target). If this needed sum was in the hash table, it meant we found our subarray and returned true. If not, I updated the hash table with the current sum and kept going. If I finished the loop without finding the subarray, I returned false.
This approach ensures a time complexity of \(O(n)\) and a space complexity of \(O(1)\).

### String Transformation Approach

To solve the string transformation challenge:
- I calculated the length of the string.
- Applied transformations based on divisibility by 3, 5, and 15.

This approach is straightforward and efficient, with a time complexity of \(O(n)\) and space complexity of \(O(n)\).

### Photo Gallery Approach

For the photo gallery:
- HTML is used for structure.
- CSS for styling and responsiveness.
- JavaScript for functionality, including opening images in a modal and navigating between them.

This ensures a clean, responsive design that works well on various screen sizes.

