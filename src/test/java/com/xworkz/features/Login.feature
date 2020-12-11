Feature: Login

Scenario: validate the login feature with valid inputs
Given The login page is displayed
When a valid credentials is keyed in
And The login button is clicked 
Then The Home page is displayed


 Scenario: validate the login feature with invalid inputs
Given The login page is displayed
When an invalid credentials are keyed in
And The login button is clicked 
Then The Home page is not displayed

