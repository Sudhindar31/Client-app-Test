package com.xworkz.page;

import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.xworkz.base.TestBase;

public class HomePage extends TestBase {

	//Object repo of login page ############################
	
	@FindBy(xpath="//h4[normalize-space()='Welcome cocubes']")
	WebElement cocubes;
	
	
	//Initiate the pagefactory using the constructor
	public HomePage() {
		PageFactory.initElements(driver, this);
	}
	public  WebElement cocubesLogo() {
		try {
		wait.until(ExpectedConditions.visibilityOf(cocubes));
		}
		catch(TimeoutException e)
		{
			System.out.println("Home page is not displayed");
		}
		return cocubes; 
	}
	
}
