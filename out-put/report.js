$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/xworkz/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8360047400,
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
  "duration": 142814700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.a_valid_credentials_is_keyed_in()"
});
formatter.result({
  "duration": 268321900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.the_login_button_is_clicked()"
});
formatter.result({
  "duration": 97474500,
  "error_message": "org.openqa.selenium.NoAlertPresentException: no such alert\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027IN-5CD024GKPM\u0027, ip: \u002710.83.36.198\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ACHOUD~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53733}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 26aa6dfa21eb9883d0e4b0608cb63e73\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:932)\r\n\tat com.xworkz.page.LoginPage.Login(LoginPage.java:47)\r\n\tat com.xworkz.stepdefinitions.LoginStepDefinition.the_login_button_is_clicked(LoginStepDefinition.java:52)\r\n\tat ✽.And The login button is clicked(src/test/java/com/xworkz/features/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.the_Home_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 69000,
  "status": "passed"
});
});