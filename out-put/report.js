$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/xworkz/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9404587000,
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
  "duration": 152235100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.a_valid_credentials_is_keyed_in()"
});
formatter.result({
  "duration": 297428400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_login_button_is_clicked()"
});
formatter.result({
  "duration": 1661192300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_Home_page_is_displayed()"
});
formatter.result({
  "duration": 448747200,
  "status": "passed"
});
formatter.after({
  "duration": 117884500,
  "status": "passed"
});
formatter.before({
  "duration": 8201783300,
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
  "duration": 6698100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.an_invalid_credentials_are_keyed_in()"
});
formatter.result({
  "duration": 192890500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_login_button_is_clicked()"
});
formatter.result({
  "duration": 60426808000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_Home_page_is_not_displayed()"
});
formatter.result({
  "duration": 76702083800,
  "status": "passed"
});
formatter.after({
  "duration": 105220800,
  "status": "passed"
});
formatter.before({
  "duration": 7773936700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "validate when the email id field is blank",
  "description": "",
  "id": "login;validate-when-the-email-id-field-is-blank",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "The login page is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "email id is blank",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "error message for email should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_login_page_is_displayed()"
});
formatter.result({
  "duration": 4241300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.email_id_is_blank()"
});
formatter.result({
  "duration": 151161600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.error_message_for_email_should_display()"
});
formatter.result({
  "duration": 590579300,
  "status": "passed"
});
formatter.after({
  "duration": 113610200,
  "status": "passed"
});
formatter.before({
  "duration": 7757360700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "validate when the email id field is blank",
  "description": "",
  "id": "login;validate-when-the-email-id-field-is-blank",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "The login page is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "password is blank",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "error message for password should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_login_page_is_displayed()"
});
formatter.result({
  "duration": 5742800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.password_is_blank()"
});
formatter.result({
  "duration": 162660400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.error_message_for_password_should_display()"
});
formatter.result({
  "duration": 730662500,
  "status": "passed"
});
formatter.after({
  "duration": 184365700,
  "status": "passed"
});
});