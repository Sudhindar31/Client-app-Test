Feature: Tickets raised
Scenario: Validate the list of already raised tickets 
Given User logedin successfully 	
When Ticket Raised link is clicked
Then Ticket list page opened with all details
