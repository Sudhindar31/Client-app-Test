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
	
Scenario: validate when the email id field is blank 
	Given The login page is displayed 
	When email id is blank 
	Then error message for email should display 
	
Scenario: validate when the email id field is blank 
	Given The login page is displayed 
	When password is blank 
	Then error message for password should display 
