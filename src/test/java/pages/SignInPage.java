package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
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

    @FindBy(how = How.CSS, using = "#login_form>h3")
    public WebElement txt_accountSignInAlreadyRegistered;

    @FindBy(how = How.CSS, using = "#email")
    public WebElement txt_accountSignInEmailAddress;

    @FindBy(how = How.CSS, using = "#passwd")
    public WebElement txt_accountSignInPassword;

    @FindBy(how = How.CSS, using = "#SubmitLogin")
    public WebElement btn_accountSignInButton;

    @FindBy(how = How.CSS, using = ".sf-menu > li:nth-child(2) > a:nth-child(1)")
    public WebElement btn_accountSignInDresses;

    @FindBy(how = How.XPATH, using = "//div[@id=\"categories_block_left\"]//a[contains(text(),'Evening Dresses')]")
    public WebElement btn_accountCategoryEveningDress;

    @FindBy(how = How.XPATH, using = "//div[@class=\"product-image-container\"]//a[@title='Printed Dress']")
    public WebElement btn_accountCateloguePrintedDress;

    @FindBy(how = How.XPATH, using = "//div[@class=\"right-block\"]//span[contains(text(),'Add to cart')]")
    public WebElement btn_accountCateloguePrintedDressAddToCart;

    @FindBy(how = How.CSS, using = ".layer_cart_product > h2:nth-child(2)")
    public WebElement btn_accountProductMessage_successful;

    @FindBy(how = How.CSS, using = ".logout")
    public WebElement btn_accountLogout;

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
        locator.clear();
        locator.sendKeys(value);

    }

    public void selectByValue(String value, WebElement locator)
    {
        Select subject = new Select(locator);
        subject.selectByValue(value);
    }

}
