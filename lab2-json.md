# Lab 2: Session Storage and Local Storage

In this lab, you will extend your local storage lesson by exploring the concept of session storage.

Definition of Session Storage:
Session Storage is a web storage object that stores data for the duration of a page session. The data persists only while the browser tab is open, and it is cleared when the tab or window is closed. It allows web applications to store data temporarily in a key-value format, similar to local storage, but with a shorter lifespan.

Differences between Session Storage and Local Storage
| Feature                    | **Session Storage**                          | **Local Storage**                             |
|----------------------------|----------------------------------------------|----------------------------------------------|
| **Lifespan**                | Data is available for the duration of the page session (until the tab or window is closed). | Data persists indefinitely until manually cleared by the user or the application. |
| **Scope**                   | Tab-specific. Data is not shared between tabs or windows, even from the same origin. | Shared across all tabs and windows from the same origin. |
| **Capacity**                | Generally up to 5MB, depending on the browser. | Generally up to 5MB, depending on the browser. |
| **Expiration**              | Data is automatically cleared when the tab or window is closed. | Data does not expire automatically and persists even after closing the browser or restarting the computer. |
| **Use Case**                | Best for temporary data that only needs to be available while the page is active, such as form data during a session. | Best for long-term data storage, like user preferences, authentication tokens, or shopping cart items. |
| **Accessibility**           | Only available in the tab/window where it was set. | Available across all tabs and windows from the same origin. |
| **Storage Type**            | Stores data as key-value pairs in string format. | Stores data as key-value pairs in string format. |

## Lab Setup
1. Create a repo named storage-practice and clone it down to your machine.
2. Read through each task and create an issue ticket with a markdown checklist.
3. Start by creating and moving to a branch named `task-1`. You will follow this same naming convention for Task #2.


## Task 1

1. Create a boilerplate html file and add the `states.json` file to your repository. It is perfectly fine, for this lab, if the `.json` file lives directly at the root of your project.
2. Using array methods, split the array in half.
3. You will save the first half of the array in your `local storage` (read below)
4. Each state will be its own entry into storage.
5. The key will be the state name.
6. The value will be the remainder of the state object `minus the state name key and value`.
7. When complete, push up your branch and create a PR to main.
8. Merge the PR.
9. In your terminal, checkout back to main and do a fresh pull.
10. Continue with your second task and second branch.



## Task 2
1. Take the second half of the array and place it in `session storage` (see below).
2. The key will be the `capital` and the  value will be the remainder of the state object, minus the capital key and value.
3. All strings must be converted to lowercase before being placed in storage.
4. When complete, push up your branch, make a PR, and merge to main.



## Stretch Goals
- Convert all strings to uppercase for Task #1
