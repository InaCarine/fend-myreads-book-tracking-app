# Front-end Developer Nanodegree MyReads Book Tracking app
This project was to create an application that keeps track of the books you have read, currently reading and want to read. Main purpose of this project was to learn of to setup an application by using react. I used [Create React App](https://github.com/facebookincubator/create-react-app) to set up the starting structure.

This was a project part of the [Front-end Web Developer nanodegree Scholarship](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001) with Udacity and Google. The original files for the project can be found at [Udacity's GitHub profile](https://github.com/udacity/reactnd-project-myreads-starter). Here's my other [projects for fend](https://inacarine.github.io/fend).

## Instructions
To setup the project locally on your machine:
1. **Using git:** You will need [git](https://git-scm.com/) installed on your computer. In the command line, run this command `$ git clone https://github.com/InaCarine/fend-myreads-book-tracking-app.git`, and the files will be cloned to your computer.

2. Then to run the project in your browser, enter the following in the command line:
```
# Install dependencies
npm install

# To run the app
npm start
```

You will know if the application started successfully when you see the following message:
```
Compiled successfully!

You can now view fend-myreads-book-tracking-app in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.70:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

There should already be a tab opened up in your browser with the app, if not go to the following url http://localhost:3000/.


## Searching
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](https://github.com/InaCarine/fend-myreads-book-tracking-app/blob/master/SEARCH_TERMS.md). That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
