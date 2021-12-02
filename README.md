# Engineer Tech Test

This coding test is a series of questions as outlined below. Please follow the instructions carefully.

It's recommended to use JavaScript ES6+ & React 16+ but you are free to implement your answers in any language you feel comfortable.

The time recommended is **1 - 1.5 hours**, try not to spend longer than that, we don't want you to waste a precious day of your life over this. You do not need to complete all the questions.

Please commit your code to Github and share the link with us.

## Instructions

-   Please use respective answers folder for the questions you are answering. For example, answer for question 3 will go to [answer03](https://github.com/enboarder/tech-test-junior-fullstack-engineer/tree/master/answers/answer03) folder.

## Questions

#### Question 1

Implement `Array.reduce()` or `Array.map()` in your own way.

#### Question 2

Implement Lodash’s `groupBy` in your own way

#### Question 3

Given two strings, write an algorithm to check if they are anagrams of each other. Return true if they pass the test and false if they don't. E.g

```JavaScript

isAnagram('silent', 'listen'); // should return true

isAnagram('hello', 'world'); // should return false

```

#### Question 4

Given a string of text, find and return the most recurring character. E.g

```JavaScript

maxRecurringChar('aabacada') // will return 'a'

```

#### Question 5

You have a large bunch of HTML. Inside that HTML are p tags, li tags, table tags, really any and all kinds of HTML tags. Most importantly there are anchor/link tags.

Write a program to find all of the URLs to which those link tags link and verify that the URLs return a 200 response. In a given chunk of this HTML, we could have anywhere from 0 to 100+ links, so your solution should handle the case where there are plenty of links.

**Requirements:**

-   First, you'll want to figure out a way to extract all of the URLs.

-   Second, you'll want to test the URLs and report back to the user which are valid and which are not.

-   Third, you'll want to make it really fast by checking the URLs concurrently or by parallelising the checks. You might want to think about caching as well.

#### Question 6

CSS test: Apply required CSS to produce the HTML as per the result image provided.

In [answer06](https://github.com/enboarder/tech-test-engineer/tree/master/answers/answer06) file in a browser. Apply required css in the [styles.css](https://github.com/enboarder/tech-test-junior-fullstack-engineer/blob/master/answers/answer06/styles.css) file. The end result should look like the image in [CSS_Result.png](https://github.com/enboarder/tech-test-junior-fullstack-engineer/blob/master/answers/answer06/CSS_Result.png) file.

#### Question 7

Simple react component to implement expandable <textarea  />. Very similar to this. Just basic requirements - not everything that material-ui does. Simple auto expand/contract feature.

[https://mui.com/components/textarea-autosize/](https://mui.com/components/textarea-autosize/)

Extend the package.json file to include your dependencies required. We expect it to be kept minimum - just required to render a React component.

#### Answer 6 View
Simply open the **index.html** file in the **answer06** folder

#### Answer 7 View
To view the answer to question 7, simply run **npm install** and then run **npm start** in terminal to view in web browser. # enboardertechtest
