Feature: Login

Scenario: validate the login feature with valid inputs
Given The login page is displayed
When a valid credentials is keyed in
And The login button is cliked 
Then The Home page is displayed

Scenario: validate the login feature with invalid inputs
Given The login page is displayed
When an invalid credentials is keyed in
And The login button is cliked 
Then The Home page is not displayed

Scenario: validate the forgot password link
Given The page is displayed
When the forgot password link is clicked
Then forgot password page is displayed