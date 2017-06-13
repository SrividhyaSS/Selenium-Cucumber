package stepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

import pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestCase 


{
WebDriver driver;
	
	@Given("^Open Chrome and start the application url =\"(.*?)\"$")
	public void open_Chrome_and_start_the_application_url(String URL) 
	{
	    
		   System.setProperty("webdriver.chrome.driver", "D:\\SeleniumChrome\\chromedriver.exe");
		    driver = new ChromeDriver();
		    driver.get(URL);
		
	}

	@When("^Enter valid username \"(.*?)\" and valid password \"(.*?)\"$")
	public void enter_valid_username_and_valid_password(String username, String password) 
	{
	    
		LoginPage login = PageFactory.initElements(driver,LoginPage.class);
		login.loginApplication (username,password);
		
	}

	@Then("^user should able to login successfully$")
	public void user_should_able_to_login_successfully() 
	{
		LoginPage login = PageFactory.initElements(driver,LoginPage.class);
		login.clicklogin();
		
	}

	@Then("^application should be closed$")
	public void application_should_be_closed() throws Throwable 
	{
	   
		driver.close();
	}
	
 /* @Test
  public void f() 
  {
  }*/
}
