package com.xworkz.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.xworkz.base.TestBase;

public class AssetsPage extends TestBase{
	
	// Object repo of login page ############################
	@FindBy(xpath="//a[normalize-space()='Assets']")
	private WebElement assetsLink;
	
	@FindBy(xpath="//h1[normalize-space()='Gadgets List']")
	private WebElement pageName;
	
	@FindBy(xpath="//div[@id='DataTables_Table_0_length']//label")
	private WebElement counterLabel;
	
	@FindBy(xpath="//select[@name='DataTables_Table_0_length']")
	private WebElement countDropdown;
	
	@FindBy(xpath="//div[@id='DataTables_Table_0_filter']//label")
	private WebElement searchLabel;
	
	@FindBy(xpath="//div[@id='DataTables_Table_0_filter']//label//input")
	private WebElement searchBox;
	
	@FindBy(xpath="//div[@class='dataTables_wrapper no-footer']//div[4]")
	private WebElement pageFooter;
	
	
	private List<WebElement> tableHeader;
	//driver.findElements(By.xpath("//thead[@class='thead-light']//tr[@role='row']//th"));
	

}
