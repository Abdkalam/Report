package org.reuse;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.reuse.BaseClass;

public class FlipKartPojo extends BaseClass {
	
	
	public FlipKartPojo() {
		
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy (id="email")
	private WebElement login;
	@FindBy (id="pass")
	private WebElement pass;
	@FindBy (xpath="//button[@type='submit']")
	private WebElement click;
	public WebElement getLogin() {
		return login;
	}
	public WebElement getPass() {
		return pass;
	}
	public WebElement getClick() {
		return click;
	}
	
	
	
}
