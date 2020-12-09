package com.xworkz.stepdefinitions;

import com.xworkz.base.TestBase;
import com.xworkz.page.HomePage;
import com.xworkz.page.LoginPage;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPage;
	HomePage homePage;
	
	public LoginStepDefinition() {
		
		super();
		System.out.println("Starting");
	}
	@Before
	public void setup() {
		System.out.println("Test is starting for feature Login");
		initialization();
		loginPage=new LoginPage();
	}
	@After
	public void tearDown() {
		System.out.println("Test is completed for feature Login");
	}
	@Given("^The login page is displayed$")
	public void the_login_page_is_displayed() throws Throwable {
	    if(loginPage.LoginPageTitle().equalsIgnoreCase("ClientApp")) {
				System.out.println("Login page displayed");
				System.out.println("Page title is correct");
			}
	    //throw new PendingException();
	}

	@When("^a valid credentials is keyed in$")
	public void a_valid_credentials_is_keyed_in() throws Throwable {
		
		loginPage.EnterDetails(prop.getProperty("username"), prop.getProperty("password"));
	   // throw new PendingException();
	}

	@When("^The login button is clicked$")
	public void the_login_button_is_clicked() throws Throwable {
	   loginPage.Login();
	    //throw new PendingException();
	}

	@Then("^The Home page is displayed$")
	public void the_Home_page_is_displayed() throws Throwable {
	    System.out.println("Home is displayed");
	   // throw new PendingException();
	}
	
}
