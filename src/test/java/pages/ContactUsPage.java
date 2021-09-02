package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.SearchContext;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import java.sql.Driver;

public class ContactUsPage {

    public ContactUsPage(WebDriver driver ){
        PageFactory.initElements(driver,this);
    }

    @FindBy (how = How.CSS, using = "#contact-link>a")
    public WebElement btnContactUs;

    @FindBy (how = How.CSS, using = "#center_column>h1")
    public WebElement txtCustomerService;

    @FindBy (how = How.ID, using = "submitMessage")
    public WebElement btnClickContactUsSummit;

    @FindBy (how = How.CSS, using = ".alert > ol:nth-child(2) > li:nth-child(1)")
    public WebElement txtValidateErrorMessage;

    @FindBy (how = How.ID, using = "email")
    public WebElement txtContactUsEmailAddress;

    @FindBy (how = How.ID, using = "message")
    public WebElement txtContactUsMessage;

    @FindBy (how = How.ID, using = "id_contact")
    public WebElement selSelectSubject;

    @FindBy (how = How.CSS, using = ".alert.alert-success")
    public WebElement txtContactUsSuccessMessage;

    @FindBy (how = How.XPATH, using = "//div[@id='center_column']//a")
    public WebElement btnContactUsHome;




    public void verifyPageMessage (String expectedValue, WebElement locator)
    {
        String actualValue = locator.getText();
        Assert.assertEquals(expectedValue, actualValue);
    }

    public void click(WebElement locator)
    {
        locator.click();
    }

    public void sendKeys(WebElement locator, String value)
    {
        locator.sendKeys( value);
    }

    public void selectByVisibleText(WebElement locator, String expectedValue)
    {
        Select subject = new Select(locator);
        subject.selectByVisibleText(expectedValue);

    }



}
