# Nutrition Tracker

[badge1 for codecov]

[![codecov](https://codecov.io/gh/PEIWEI311/NutritionTracker/graph/badge.svg?token=Bv5Iq2VxNu)](https://codecov.io/gh/PEIWEI311/NutritionTracker)

[[badge2 for license]

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Nutrition Tracker is a web app where account holders can track their meals, nutrition details, calorie count, water intake, and weight.


## Team Information
* Team name: CAZAM
* Team members
  * Collin Cleary(Collin-Cleary)
  * Abdul Ahad Khan(abdulahadkhan-RIT)
  * Aitan Bachrach(AitanBachrach)
  * Muskan Shah(ms3660)
  * Zaige Shi(PEIWEI311)


## Documentation

In the design document we specify the Team Information,Executive Summary and Architecture&Design

[NutritionTracker-CAZAM/docs/DesignDoc.md at main · Collin-Cleary/NutritionTracker-CAZAM (github.com)](https://github.com/Collin-Cleary/NutritionTracker-CAZAM/blob/main/docs/DesignDoc.md)


## Minimum Requirements

- Express.js (`^4.18.3`): A web application framework for Node.js.
- Body-parser (`^1.20.2`): Middleware for handling JSON, Raw, Text, and URL-encoded form data.
- Jsonwebtoken (`^9.0.2`): JSON Web Token implementation for Node.js.
- Mongoose (`^8.2.2`): An Object Data Modeling (ODM) library for MongoDB and Node.js.
- Mocha (`^10.3.0`): A testing framework for Node.js.
- Supertest (`^6.3.4`): A library for testing HTTP servers.
- Assert (`^2.1.0`): An assertion library for Node.js.


## How to run it

In the terminal, enter: node server.js

![image-20240404203903827](https://github.com/PEIWEI311/NutritionTracker/blob/main/media/runProject.png)

## Testing

This is a set of API tests written in JavaScript using the Mocha testing framework along with Supertest for making HTTP requests to the API endpoints. Let's break down the structure and purpose of this test script:

1. **Dependencies Import**: The script starts by importing necessary modules including `fs` (File System), `path`, `assert`, `request` from Supertest, `app` (presumably the Express application), `mongoose` for MongoDB interactions, `Water`, `Calorie`, `Weight`, and `jwt` for JSON Web Token handling.
2. **Setup and Teardown**: The `before` hook sets up the test environment. It connects to the MongoDB database, inserts dummy data into collections, and starts the test server. The `after` hook cleans up the database by deleting the inserted data and disconnects from the database.
3. **Test Cases**: The script contains several test suites (`describe` blocks) for different APIs:
   - **Water API**: Tests the endpoints related to water data, including fetching water data and adding water data.
   - **Calorie API**: Tests the endpoints related to calorie data, including fetching calorie data and adding calorie data.
   - **Weight API**: Tests the endpoints related to weight data, including fetching weight data and adding weight data.
   - **Login API**: Tests the login functionality by sending requests with correct and incorrect credentials and verifies the JWT token returned upon successful login.
   - **Logout API**: Tests the logout functionality by sending a request to the logout endpoint and verifies the success message returned.
4. **Assertions**: Each test case contains assertions using the `assert` module to verify the expected behavior of the API endpoints. For example, checking the HTTP status codes, response body structure, and correctness of the returned data.

[Testing screenshot(s)]

![](https://github.com/PEIWEI311/NutritionTracker/blob/main/media/test_screenshot1.png)

![](https://github.com/PEIWEI311/NutritionTracker/blob/main/media/test_screenshot2.png)
