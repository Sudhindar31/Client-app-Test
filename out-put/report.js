$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/xworkz/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9460855700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "validate the login feature with valid inputs",
  "description": "",
  "id": "login;validate-the-login-feature-with-valid-inputs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "The login page is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "a valid credentials is keyed in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The login button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "The Home page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_login_page_is_displayed()"
});
formatter.result({
  "duration": 385810000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.a_valid_credentials_is_keyed_in()"
});
formatter.result({
  "duration": 431899400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_login_button_is_clicked()"
});
formatter.result({
  "duration": 2215234200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_Home_page_is_displayed()"
});
formatter.result({
  "duration": 115665200,
  "status": "passed"
});
formatter.after({
  "duration": 158217900,
  "status": "passed"
});
formatter.before({
  "duration": 8118580200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "validate the login feature with invalid inputs",
  "description": "",
  "id": "login;validate-the-login-feature-with-invalid-inputs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "The login page is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "an invalid credentials are keyed in",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The login button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The Home page is not displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_login_page_is_displayed()"
});
formatter.result({
  "duration": 14131600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.an_invalid_credentials_are_keyed_in()"
});
formatter.result({
  "duration": 353438200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_login_button_is_clicked()"
});
formatter.result({
  "duration": 60222039700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_Home_page_is_not_displayed()"
});
formatter.result({
  "duration": 72850706700,
  "status": "passed"
});
formatter.after({
  "duration": 148602100,
  "status": "passed"
});
});