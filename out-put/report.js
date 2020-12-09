$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/xworkz/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9313622900,
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
  "duration": 484791900,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.xworkz.stepdefinitions.LoginStepDefinition.the_login_page_is_displayed(LoginStepDefinition.java:40)\r\n\tat ✽.Given The login page is displayed(src/test/java/com/xworkz/features/Login.feature:4)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginStepDefinition.a_valid_credentials_is_keyed_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.the_login_button_is_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.the_Home_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 68500,
  "status": "passed"
});
});