package com.xworkz.utils;

import java.io.File;
import java.io.IOException;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.xworkz.base.TestBase;

public class TestUtil extends TestBase {

	public void screenShot() throws IOException {
		Date currentDate=new Date();
		String fileName=currentDate.toString().replace(" ", "-").replace(":", "-");
		File screenshot=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(screenshot, new File(System.getProperty("user.dir")+"//screnshots//"+fileName+".png"));
	}
	
}
