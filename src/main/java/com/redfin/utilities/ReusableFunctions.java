package com.redfin.utilities;

import java.awt.AWTException;
import java.awt.Robot;
import java.util.Map;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.asserts.Assertion;

import com.redfin.base.Testbase;
import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.DataTable;


public class ReusableFunctions extends Testbase {
	
	
	// verify element is displayed
		public boolean isDisplayed(WebElement webelement, String elementName) {
			if (webelement.isDisplayed()) {
				logger.log(LogStatus.PASS, elementName + " is displayed");
				return true;
			} else {
				logger.log(LogStatus.FAIL, elementName + " is not displayed");
				return false;
			}
		}

		// verify element is present
		public boolean isPresent(WebElement webelement, String elementName) {

			if (webelement.isDisplayed() && webelement.isEnabled()) {
				logger.log(LogStatus.PASS, elementName + " is present");
				return true;
			} else {
				logger.log(LogStatus.FAIL, elementName + " is not displayed or enabled");
				return false;
			}
		}

		// click
		public boolean Click(WebElement webelement, String elementName) throws InterruptedException {

			if (isPresent(webelement,elementName)) {
				webelement.click();
				logger.log(LogStatus.PASS, elementName + " is clicked successfully");
				return true;
			} else {
				logger.log(LogStatus.FAIL, elementName + " is not clicked");
				return false;
			}
		}

		// enter text and validate
		public boolean enterText(WebElement webelement, String text, String TextboxName) {
			if (isPresent(webelement,TextboxName)) {
				
				webelement.clear();
				webelement.sendKeys(text);
				logger.log(LogStatus.INFO, "Text is entered in " + TextboxName );
				Assert.assertTrue(verify_Text( text, webelement.getAttribute("value"),TextboxName));
				logger.log(LogStatus.PASS, "Text is entered in " + TextboxName + " successfully and verified");
				return true;
			} else {
				logger.log(LogStatus.FAIL, "Text is not entered in " + TextboxName);
				return false;
			}
		}
		


	


		// verify expected text with actual text
		public boolean verify_Text( String actualText, String expectedText,String elementName) {
//			System.out.println(actualText +" "+expectedText);
			if (actualText.contains(expectedText)) {
				logger.log(LogStatus.PASS, elementName + " text is validated");
				return true;
			} else {
				logger.log(LogStatus.FAIL, elementName + " text is not validated");
				return false;

			}
		}


}
