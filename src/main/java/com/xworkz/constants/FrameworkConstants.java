package com.xworkz.constants;

public final class FrameworkConstants {

	private FrameworkConstants() {
		
	}
	public static String getChromedriverpath() {
		return CHROMEDRIVERPATH;
	}
	public static String getFirefoxdriver() {
		return FIREFOXDRIVER;
	}
	public static int getPageLoadTimeOut() {
		return PAGE_LOAD_TIME_OUT;
	}
	public static int getImplicitlyWaitTimeOut() {
		return IMPLICITLY_WAIT_TIME_OUT;
	}
	public static int getWebdriverWaitTimeOut() {
		return WEBDRIVER_WAIT_TIME_OUT;
	}
	private static final String CHROMEDRIVERPATH=System.getProperty("user.dir")+"/src/test/resources/executables/drivers/chromedriver_win32/chromedriver.exe";
	private static final String FIREFOXDRIVER=System.getProperty("user.dir")+"/src/test/resources/executables/drivers/geckodriver-v0.28.0-win64/geckodriver.exe";
	private static final int PAGE_LOAD_TIME_OUT = 15;
	private static final int IMPLICITLY_WAIT_TIME_OUT = 15;
	private static final int WEBDRIVER_WAIT_TIME_OUT=60;
}
