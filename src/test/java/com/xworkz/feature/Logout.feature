Feature: Logout
Scenario: Validate if logout option is clicked the user singed out from the application
Given User loggedin successfully 
When Logout link is clicked
Then Login page is displayed