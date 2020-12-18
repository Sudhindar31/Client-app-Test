$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/xworkz/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12273193800,
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
  "duration": 476978400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.a_valid_credentials_is_keyed_in()"
});
formatter.result({
  "duration": 374189400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_login_button_is_clicked()"
});
formatter.result({
  "duration": 1704665600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_Home_page_is_displayed()"
});
formatter.result({
  "duration": 541462500,
  "status": "passed"
});
formatter.after({
  "duration": 99278100,
  "status": "passed"
});
formatter.before({
  "duration": 8221055000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "validate the login feature with invalid inputs",
  "description": "",
  "id": "login;validate-the-login-feature-with-invalid-inputs",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "The login page is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "an invalid credentials are keyed in",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The login button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The Home page is not displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_login_page_is_displayed()"
});
formatter.result({
  "duration": 11106600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.an_invalid_credentials_are_keyed_in()"
});
formatter.result({
  "duration": 320001100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_login_button_is_clicked()"
});
formatter.result({
  "duration": 60572243100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_Home_page_is_not_displayed()"
});
formatter.result({
  "duration": 76771878600,
  "status": "passed"
});
formatter.after({
  "duration": 112667700,
  "status": "passed"
});
formatter.before({
  "duration": 8209316700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "validate when the email id field is blank",
  "description": "",
  "id": "login;validate-when-the-email-id-field-is-blank",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "The login page is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "email id is blank",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "error message for email should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_login_page_is_displayed()"
});
formatter.result({
  "duration": 10967600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.email_id_is_blank()"
});
formatter.result({
  "duration": 227445900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.error_message_for_email_should_display()"
});
formatter.result({
  "duration": 798150300,
  "status": "passed"
});
formatter.after({
  "duration": 95306600,
  "status": "passed"
});
formatter.before({
  "duration": 8202313500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "validate when the password field is blank",
  "description": "",
  "id": "login;validate-when-the-password-field-is-blank",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "The login page is displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "password is blank",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "error message for password should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_login_page_is_displayed()"
});
formatter.result({
  "duration": 23608400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.password_is_blank()"
});
formatter.result({
  "duration": 310960700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.error_message_for_password_should_display()"
});
formatter.result({
  "duration": 936782000,
  "status": "passed"
});
formatter.after({
  "duration": 67230900,
  "status": "passed"
});
});