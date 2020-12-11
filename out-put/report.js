$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/xworkz/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9243665000,
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
  "duration": 131781100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.a_valid_credentials_is_keyed_in()"
});
formatter.result({
  "duration": 270947700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_login_button_is_clicked()"
});
formatter.result({
  "duration": 27614197000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_Home_page_is_displayed()"
});
formatter.result({
  "duration": 494782100,
  "status": "passed"
});
formatter.after({
  "duration": 52404600,
  "status": "passed"
});
formatter.before({
  "duration": 7670575700,
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
  "duration": 6282900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.an_invalid_credentials_are_keyed_in()"
});
formatter.result({
  "duration": 166259400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_login_button_is_clicked()"
});
formatter.result({
  "duration": 60120048600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_Home_page_is_not_displayed()"
});
formatter.result({
  "duration": 72823400900,
  "status": "passed"
});
formatter.after({
  "duration": 51786000,
  "status": "passed"
});
});