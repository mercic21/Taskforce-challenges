# My Coding Challenge and Photo Gallery Project

Welcome to my coding challenge and photo gallery project! This repository contains solutions to two coding challenges as well as a responsive photo gallery web application.


## Project Structure

The repository is organized as follows:


1. `challenges` directory which contains challenges:
`arrayMap.js`, `stringTransform.js`

2. `gallery` directory which contains the responsive photo gallery web application

### Running the Challenges

1. Navigate to the `challenges` directory:
    ```sh
    cd challenges
    ```
2. You can run the JavaScript files using Node.js. For example:
    ```sh
    node arrayMap.js
    node stringTransform.js
    ```

### Running the Photo Gallery

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

To solve the subarray sum challenge, I used a sliding window approach:
- Maintain a running sum of the current window.
- Expand and contract the window while checking if the running sum matches the target.

This approach ensures a time complexity of \(O(n)\) and a space complexity of \(O(1)\).

### String Transformation Approach

To solve the string transformation challenge:
- Calculate the length of the string.
- Apply transformations based on divisibility by 3, 5, and 15.

This approach is straightforward and efficient, with a time complexity of \(O(n)\) and space complexity of \(O(n)\).

### Photo Gallery Approach

For the photo gallery:
- HTML is used for structure.
- CSS for styling and responsiveness.
- JavaScript for functionality, including opening images in a modal and navigating between them.

This ensures a clean, responsive design that works well on various screen sizes.

