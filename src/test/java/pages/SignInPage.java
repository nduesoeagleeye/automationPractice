package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class SignInPage {


    public SignInPage(WebDriver driver ){
        PageFactory.initElements(driver,this);
    }

    @FindBy(how = How.CSS, using = ".login")
    public WebElement btn_signIn;

    @FindBy(how = How.CSS, using = "#center_column>h1")
    public static WebElement txt_ShoppingCartAuthentication;

    @FindBy(how = How.ID, using = "email_create")
    public  WebElement txt_ShoppingCartAuthenticationCreate_Email;

    @FindBy(how = How.ID, using = "SubmitCreate")
    public WebElement btn_ShoppingCartAuthenticationCreate_Create;

    @FindBy(how = How.CSS, using = "#create_account_error > ol:nth-child(1) > li:nth-child(1)")
    public WebElement txt_ShoppingCartAuthenticationCreate_errorMessage;

    @FindBy(how = How.CSS, using = ".page-subheading")
    public WebElement txt_ShoppingCartCreateAccount_subHeading;

    @FindBy(how = How.CSS, using = ".page-heading")
    public WebElement txt_ShoppingCartCreateAccount_pageHeading;

    @FindBy(how = How.ID, using = "id_gender1")
    public WebElement cbx_ShoppingCartCreateAccount_Mr;

    @FindBy(how = How.ID, using = "customer_firstname")
    public WebElement txt_ShoppingCartCreateAccount_firstName;

    @FindBy(how = How.ID, using = "customer_lastname")
    public WebElement txt_ShoppingCartCreateAccount_LastName;

    @FindBy(how = How.ID, using = "email")
    public WebElement txt_ShoppingCartCreateAccount_email;

    @FindBy(how = How.ID, using = "passwd")
    public WebElement txt_ShoppingCartCreateAccount_password;

    @FindBy(how = How.ID, using = "days")
    public WebElement sel_ShoppingCartCreateAccount_dobDays;

    @FindBy(how = How.ID, using = "months")
    public WebElement sel_ShoppingCartCreateAccount_dobMonth;

    @FindBy(how = How.ID, using = "years")
    public WebElement sel_ShoppingCartCreateAccount_dobYear;

    @FindBy(how = How.ID, using = "firstname")
    public WebElement txt_ShoppingCartCreateAccount_YourAddress_firstName;

    @FindBy(how = How.ID, using = "lastname")
    public WebElement txt_ShoppingCartCreateAccount_YourAddress_lastName;

    @FindBy(how = How.ID, using = "company")
    public WebElement txt_ShoppingCartCreateAccount_YourAddress_company;

    @FindBy(how = How.ID, using = "address1")
    public WebElement txt_ShoppingCartCreateAccount_YourAddress_address;

    @FindBy(how = How.ID, using = "address2")
    public WebElement txt_ShoppingCartCreateAccount_YourAddress_address2;

    @FindBy(how = How.ID, using = "city")
    public WebElement txt_ShoppingCartCreateAccount_YourAddress_city;

    @FindBy(how = How.ID, using = "id_state")
    public WebElement sel_ShoppingCartCreateAccount_YourAddress_state;

    @FindBy(how = How.ID, using = "postcode")
    public WebElement txt_ShoppingCartCreateAccount_YourAddress_zipCode;

    @FindBy(how = How.ID, using = "id_country")
    public WebElement sel_ShoppingCartCreateAccount_YourAddress_country;

    @FindBy(how = How.ID, using = "other")
    public WebElement sel_ShoppingCartCreateAccount_YourAddress_message;

    @FindBy(how = How.ID, using = "phone")
    public WebElement sel_ShoppingCartCreateAccount_YourAddress_homePhone;

    @FindBy(how = How.ID, using = "phone_mobile")
    public WebElement sel_ShoppingCartCreateAccount_YourAddress_mobilePhone;

    @FindBy(how = How.ID, using = "alias")
    public WebElement sel_ShoppingCartCreateAccount_YourAddress_addressAlias;

    @FindBy(how = How.ID, using = "submitAccount")
    public WebElement btn_ShoppingCartCreateAccount_YourAddress_register;

    @FindBy(how = How.CSS, using = "#center_column > div > ol > li:nth-child(1)")
    public WebElement txt_accountCreateErrorMessage_alias;

    @FindBy(how = How.CSS, using = "#center_column > div > ol > li:nth-child(2)")
    public WebElement txt_accountCreateErrorMessage_phone;

    @FindBy(how = How.CSS, using = "#center_column > div > ol > li:nth-child(3)")
    public WebElement txt_accountCreateErrorMessage_mobilePhone;

    public void click(WebElement locator)
    {
        locator.click();
    }

    public void assertEquals(String expectedValue, WebElement locator)
    {
        String actualValue = locator.getText();
        Assert.assertEquals(expectedValue.toLowerCase(), actualValue.toLowerCase());
    }

    public void sendKeys(String value, WebElement locator)
    {
        locator.sendKeys(value);
    }

    public void selectByValue(String value, WebElement locator)
    {
        Select subject = new Select(locator);
        subject.selectByValue(value);
    }











}
