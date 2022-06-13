package org.stepdefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.reuse.BaseClass;
import org.reuse.FlipKartPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class Stepdefine extends BaseClass {

	@Given("User is in facebook login paeg")
	public void user_is_in_facebook_login_page() {

		link("https://www.facebook.com/");

	}

	@When("User have to enter {string} and {string}")
	public void user_have_to_enter_and(String email, String pass) {

		FlipKartPojo fi = new FlipKartPojo();
		WebElement c = fi.getLogin();
		fill(c, email);
		String v = c.getAttribute("value");
		System.out.println(v);
		WebElement p = fi.getPass();
		fill(p, pass);
		System.out.println(p.getAttribute("value"));
		
	}

	@When("User have to enter valid user and valid pass")
	public void user_have_to_enter_valid_user_and_valid_pass(io.cucumber.datatable.DataTable d) {
		List<List<String>> c = d.asLists();
		String y = c.get(0).get(0);
		String s = c.get(0).get(1);
		
		FlipKartPojo fi = new FlipKartPojo();
		WebElement p = fi.getLogin();
		fill(fi.getLogin(), y);
		System.out.println(p.getAttribute("value"));
		WebElement p1 = fi.getPass();
		fill(fi.getPass(),s );
		System.out.println(p1.getAttribute("value"));
	}

	@When("User have to enter valid username and invalid password")
	public void user_have_to_enter_valid_username_and_invalid_password(io.cucumber.datatable.DataTable d) {

		List<String> a = d.asList();
		String email = a.get(0);
		String pass = a.get(1);
		FlipKartPojo fi = new FlipKartPojo();
		WebElement p = fi.getLogin();
		fill(fi.getLogin(), email);
		System.out.println(p.getAttribute("value"));
		WebElement p1 = fi.getPass();
		fill(fi.getPass(), pass);
		System.out.println(p1.getAttribute("value"));

	}

	@When("User click the login button")
	public void user_click_the_login_button1() {
		FlipKartPojo fi = new FlipKartPojo();
		clk(fi.getLogin());

	}

	@When("User click the login button|")
	public void user_click_the_login_button() {
		FlipKartPojo fi = new FlipKartPojo();
		clk(fi.getLogin());
	}

	@Given("User click forgotten password")
	public void user_click_forgotten_password() {
		WebElement f = driver.findElement(By.xpath("//a[text()='Forgotten password']"));
		f.click();

	}

	@When("User have to enter invalid mobile or invalid email")
	public void user_have_to_enter_invalid_mobile_or_invalid_email() {

		WebElement a = driver.findElement(By.id("identify_email"));
		a.sendKeys("546954");
	}

	@When("User click the search button")
	public void user_click_the_search_button() {

		WebElement c = driver.findElement(By.xpath("//button[text()='Search']"));
		c.click();
	}

	@Then("User should be in invalid credentials page")
	public void user_should_be_in_invalid_credentials_page() {

		String c = curretLink();
		if (c.contains("privacy_mutation")) {
			System.out.println("invalid one");

		} else {

			System.out.println("valid one");
		}

		// Assert.assertTrue("checking", c.contains("privacy_mutation"));
	}

}
