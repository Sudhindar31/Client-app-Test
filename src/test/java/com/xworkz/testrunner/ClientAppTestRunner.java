package com.xworkz.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, dryRun = false, features = {
"src/test/java/com/xworkz/features/Login.feature" }, glue = "com/xworkz/stepdefinitions", plugin = { "pretty",
"html:out-put" })
public class ClientAppTestRunner {

}
