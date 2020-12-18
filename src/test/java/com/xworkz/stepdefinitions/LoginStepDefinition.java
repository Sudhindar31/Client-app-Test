package com.xworkz.stepdefinitions;

import java.io.IOException;

import com.xworkz.base.TestBase;
import com.xworkz.pages.HomePage;
import com.xworkz.pages.LoginPage;
import com.xworkz.utils.TestUtil;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPage;
	HomePage homePage;


	public LoginStepDefinition() {

		//super();
	}

	@Before
	public void setup() throws IOException {
		initialization();
		loginPage = new LoginPage();
		homePage = new HomePage();
	}

	@After
	public void tearDown() {

		driver.close();
	}

	// Login with valid credentials

	@Given("^The login page is displayed$")
	public void the_login_page_is_displayed() throws Throwable {
		if (loginPage.LoginPageTitle().equalsIgnoreCase("ClientApp")) {
			System.out.println("Login page displayed");
		}

	}

	@When("^a valid credentials is keyed in$")
	public void a_valid_credentials_is_keyed_in() throws Throwable {

		//loginPage.EnterDetails(prop.getProperty("username"), prop.getProperty("password"));
		loginPage.EnterDetails(TestUtil.readProperty("username"), TestUtil.readProperty("password"));
		System.out.println("Valid credentials are entered");

	}

	@When("^The login button is clicked$")
	public void the_login_button_is_clicked() throws Throwable {
		loginPage.Login();

	}

	@Then("^The Home page is displayed$")
	public void the_Home_page_is_displayed() throws Throwable {
		if (homePage.cocubesLogo() != null)
			System.out.println("Home is displayed");
		else
			System.out.println("Home is not displayed");
		TestUtil.screenShot("LogIn", "HomePage");

	}

	// Login with invalid credentials

	@When("^an invalid credentials are keyed in$")
	public void an_invalid_credentials_are_keyed_in() throws Throwable {
		loginPage.EnterDetails(TestUtil.readProperty("username_invalid"), TestUtil.readProperty("password_invalid"));
		System.out.println("Invalid credentials are entered");
	}

	@Then("^The Home page is not displayed$")
	public void the_Home_page_is_not_displayed() throws Throwable {
		if (homePage.cocubesLogo() == null)
			;

	}

	// Email id is blank
	@When("^email id is blank$")
	public void email_id_is_blank() throws IOException {
		loginPage.EnterDetails("", TestUtil.readProperty("password"));
	}

	@Then("^error message for email should display$")
	public void error_message_for_email_should_display() throws IOException {
		String errorMessage = "*EmailId is required";
		if (errorMessage.equals(loginPage.validateEmail())) {
			System.out.println("Email error message displayed and validated");
			TestUtil.screenShot("Login", "email_error_message");
		}
	}

	// Password is blank
	@When("^password is blank$")
	public void password_is_blank() throws IOException {
		loginPage.EnterDetails(TestUtil.readProperty("username"), "");
	}

	@Then("^error message for password should display$")
	public void error_message_for_password_should_display() throws IOException {
		String errorMessage = "*Password is required";
		if (errorMessage.equalsIgnoreCase(loginPage.validatePassword())) {
			TestUtil.screenShot("Login", "passowrd_error_message");
			System.out.println("Password error message displayed and validated");
		}
	}
}
