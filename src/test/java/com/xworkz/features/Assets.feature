Feature: Assets

Scenario: Validate the assets page
Given User logedin successfully
When The Assets link is clicked
Then The gadgets list page is displayed
 
Scenario: Validate the details of assets page
Given User logedin successfully
When The Assets link is clicked
Then Validate the assets page is displated with all the details
 
Scenario: Validate report problem functionality 
Given User logedin successfully
When The Assets link is clicked
And  Report problem button is clicked
Then Report problem page is displayed