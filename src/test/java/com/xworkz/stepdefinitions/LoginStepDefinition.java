package com.xworkz.stepdefinitions;

import com.xworkz.base.TestBase;
import com.xworkz.page.HomePage;
import com.xworkz.page.LoginPage;
import com.xworkz.utils.TestUtil;

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
	TestUtil util=new TestUtil();
	
	public LoginStepDefinition() {
		
		super();
		System.out.println("Starting");
	}
	
	@Before
	public void setup() {
		System.out.println("Test is starting");
		initialization();
		loginPage=new LoginPage();
		homePage=new HomePage();
	}
	
	@After
	public void tearDown() {
		System.out.println("Closing the driver");
		driver.close();
	}
	
	// Login with valid credentials
	
	@Given("^The login page is displayed$")
	public void the_login_page_is_displayed() throws Throwable {
	    if(loginPage.LoginPageTitle().equalsIgnoreCase("ClientApp")) {
				System.out.println("Login page displayed");
				System.out.println("Page title is correct");
			}
	    
	}

	@When("^a valid credentials is keyed in$")
	public void a_valid_credentials_is_keyed_in() throws Throwable {
		
		loginPage.EnterDetails(prop.getProperty("username"), prop.getProperty("password"));
		System.out.println("Valid credentials are entered");
	 
	}

	@When("^The login button is clicked$")
	public void the_login_button_is_clicked() throws Throwable {
	   loginPage.Login();
	   
	}

	@Then("^The Home page is displayed$")
	public void the_Home_page_is_displayed() throws Throwable {
		if(homePage.cocubesLogo()!=null)
		System.out.println("Home is displayed");
		else
			System.out.println("Home is not displayed");
		    util.screenShot();
	  
	}
	
	// Login with invalid credentials
	
	@When("^an invalid credentials are keyed in$")
	public void an_invalid_credentials_are_keyed_in() throws Throwable {
	    loginPage.EnterDetails(prop.getProperty("username_invalid"), prop.getProperty("password_invalid"));
	    System.out.println("Invalid credentials are entered");
	}

	@Then("^The Home page is not displayed$")
	public void the_Home_page_is_not_displayed() throws Throwable {
		if(homePage.cocubesLogo()==null);
	    
	}
	
}
