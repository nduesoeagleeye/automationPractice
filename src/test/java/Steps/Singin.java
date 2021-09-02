package Steps;

import Base.BaseUtil;
import Transformation.EmailTransform;
import cucumber.api.PendingException;
import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.fluttercode.datafactory.impl.DataFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pages.SignInPage;

public class Singin extends BaseUtil {

    private final BaseUtil base;

    public Singin(BaseUtil base) {
        this.base = base;
    }
    public static String email = null;
    public static String password = null;



    @When("^User click on sign in button on the landing page$")
    public void userHoverOnTheFirstImageOnTheLandingPage() {
        SignInPage page = new SignInPage(base.Driver);
        page.click(page.btn_signIn);
    }

    @Then("^user should be able to see \"([^\"]*)\" on the authentication page$")
    public void userShouldBeAbleToSeeOnTheAuthenticationPage(String expectedValue)  {
        SignInPage page = new SignInPage(base.Driver);
        page.assertEquals(expectedValue, SignInPage.txt_ShoppingCartAuthentication);
    }

    @And("^User enter \"([^\"]*)\" on the crete an account filed on the authentication page$")
    public void userEnterOnTheCreteAnAccountFiledOnTheAuthenticationPage(@Transform(EmailTransform.class) String value) {
       // DataFactory df = new DataFactory();

     //   String gen  = df.getRandomText(5);
        double random = Math.random() * 9 + 1;
        email =  random + value  ;
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(email,page.txt_ShoppingCartAuthenticationCreate_Email);

    }

    @And("^user click on Create an account button on the authentication page$")
    public void userClickOnCreateAnAccountButtonOnTheAuthenticationPage() {
        SignInPage page = new SignInPage(base.Driver);
        page.click(page.btn_ShoppingCartAuthenticationCreate_Create);
    }

    @Then("^User should be ale to see sub Heading \"([^\"]*)\" on the create an account page$")
    public void userShouldBeAbleToSeeOnTheCreateAnAccountPage(String expectedValue)  {
        SignInPage page = new SignInPage(base.Driver);
        page.assertEquals(expectedValue,page.txt_ShoppingCartCreateAccount_subHeading);
    }

    @Then("^User should be able to see page heading \"([^\"]*)\" on the create an account page$")
    public void userShouldBeAleToSeeOnTheCreateAnAccountPage(String expectedValue)  {
        SignInPage page = new SignInPage(base.Driver);
        page.assertEquals(expectedValue,page.txt_ShoppingCartCreateAccount_pageHeading);
    }

    @And("^user select Mr for Title on the personal information page$")
    public void userSelectMrForTitleOnThePersonalInformationPage() {
        SignInPage page = new SignInPage(base.Driver);
        page.click(page.cbx_ShoppingCartCreateAccount_Mr);
    }

    @And("^user enter First Name \"([^\"]*)\" on the personal information page$")
    public void userEnterOnThePersonalInformationPage(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.txt_ShoppingCartCreateAccount_firstName);
    }

    @And("^user enter Last Name \"([^\"]*)\" on the personal information page$")
    public void userEnterLastNameOnThePersonalInformationPage(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.txt_ShoppingCartCreateAccount_LastName);
    }

    @And("^user enter Email \"([^\"]*)\" on the personal information page$")
    public void userEnterEmailOnThePersonalInformationPage(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.txt_ShoppingCartCreateAccount_email);
    }

    @And("^user enter Password \"([^\"]*)\" on the personal information page$")
    public void userEnterPasswordOnThePersonalInformationPage(String value)  {
     //   DataFactory df = new DataFactory();
     //   String gen  = df.getRandomText(5);
        double random = Math.random() * 9 + 1;

        password =  random + value  ;
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(password,page.txt_ShoppingCartCreateAccount_password);
    }

    @And("^user select DOB day \"([^\"]*)\" on the personal information page$")
    public void userSelectDOBDayOnThePersonalInformationPage(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.selectByValue(value,page.sel_ShoppingCartCreateAccount_dobDays);
    }

    @And("^user select DOB Month \"([^\"]*)\" on the personal information page$")
    public void userSelectDOBMonthOnThePersonalInformationPage(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.selectByValue(value,page.sel_ShoppingCartCreateAccount_dobMonth);
    }

    @And("^user select DOB Year \"([^\"]*)\" on the personal information page$")
    public void userSelectDOBYearOnThePersonalInformationPage(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.selectByValue(value,page.sel_ShoppingCartCreateAccount_dobYear);
    }

    @And("^user enter First Name \"([^\"]*)\" on the your address filed$")
    public void userEnterFirstNameOnTheYourAddressFiled(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.txt_ShoppingCartCreateAccount_YourAddress_firstName);

    }

    @And("^user enter Last Name \"([^\"]*)\" on the your address filed$")
    public void userEnterLastNameOnTheYourAddressFiled(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.txt_ShoppingCartCreateAccount_YourAddress_lastName);
    }

    @And("^user enter Company \"([^\"]*)\" on the your address filed$")
    public void userEnterCompanyOnTheYourAddressFiled(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.txt_ShoppingCartCreateAccount_YourAddress_company);
    }

    @And("^user enter Address \"([^\"]*)\" on the your address filed$")
    public void userEnterAddressOnTheYourAddressFiled(String value) {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.txt_ShoppingCartCreateAccount_YourAddress_address);
    }

    @And("^user enter Address \\(Line (\\d+)\\) \"([^\"]*)\" on the your address filed$")
    public void userEnterAddressLineOnTheYourAddressFiled(String value, String arg1)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.txt_ShoppingCartCreateAccount_YourAddress_address2);
    }

    @And("^user enter City \"([^\"]*)\" on the your address filed$")
    public void userEnterCityOnTheYourAddressFiled(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.txt_ShoppingCartCreateAccount_YourAddress_city);
    }

    @And("^user select State \"([^\"]*)\" on the your address filed$")
    public void userSelectStateOnTheYourAddressFiled(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.selectByValue(value,page.sel_ShoppingCartCreateAccount_YourAddress_state);
    }

    @And("^user enter Zip/Postal Code \"([^\"]*)\" on the your address filed$")
    public void userEnterZipPostalCodeOnTheYourAddressFiled(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.txt_ShoppingCartCreateAccount_YourAddress_zipCode);
    }

    @And("^user select Country \"([^\"]*)\" on the your address filed$")
    public void userSelectCountryOnTheYourAddressFiled(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.selectByValue(value,page.sel_ShoppingCartCreateAccount_YourAddress_country);
    }

    @And("^user enter Additional information \"([^\"]*)\" on the your address filed$")
    public void userEnterAdditionalInformationOnTheYourAddressFiled(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.sel_ShoppingCartCreateAccount_YourAddress_message);
    }

    @And("^user enter Home phone \"([^\"]*)\" on the your address filed$")
    public void userEnterHomePhoneOnTheYourAddressFiled(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.sel_ShoppingCartCreateAccount_YourAddress_homePhone);
    }

    @And("^user enter Mobile phone \"([^\"]*)\" on the your address filed$")
    public void userEnterMobilePhoneOnTheYourAddressFiled(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.sel_ShoppingCartCreateAccount_YourAddress_mobilePhone);
    }

    @And("^user enter Assign an address \"([^\"]*)\" on the your address filed$")
    public void userEnterAssignAnAddressOnTheYourAddressFiled(String value)  {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(value,page.sel_ShoppingCartCreateAccount_YourAddress_addressAlias);
    }

    @And("^User click on the Register Button on the your address filed$")
    public void userClickOnTheRegisterButtonOnTheYourAddressFiled() {
        SignInPage page = new SignInPage(base.Driver);
        page.click(page.btn_ShoppingCartCreateAccount_YourAddress_register);
    }


    @Then("^User should be able to see phone error \"([^\"]*)\"message displayed on the create an account page$")
    public void userShouldNbeAbleToSeePhoneErrorMessageDisplayedOnTheCreateAnAccountPage(String expectedValue) {
        SignInPage page = new SignInPage(base.Driver);
        page.assertEquals(expectedValue,page.txt_accountCreateErrorMessage_phone);

    }

    @Then("^User should be able to see alias error \"([^\"]*)\" message displayed on the create an account page$")
    public void userShouldBeAbleToSeeAliasErrorMessageDisplayedOnTheCreateAnAccountPage(String expectedValue)  {
        SignInPage page = new SignInPage(base.Driver);
        page.assertEquals(expectedValue,page.txt_accountCreateErrorMessage_alias);
    }

    @Then("^User should be able to see phone mobile error \"([^\"]*)\" message displayed on the create an account page$")
    public void userShouldNbeAbleToSeePhoneMobileErrorMessageDisplayedOnTheCreateAnAccountPage(String expectedValue)  {
        SignInPage page = new SignInPage(base.Driver);
        page.assertEquals(expectedValue,page.txt_accountCreateErrorMessage_mobilePhone);
    }

    @Then("^User should be able to see test \"([^\"]*)\" on the authentication page$")
    public void userShouldBeAbleToSeeTestOnTheAuthenticationPage(String expectedValue)  {
        SignInPage page = new SignInPage(base.Driver);
        page.assertEquals(expectedValue,page.txt_accountSignInAlreadyRegistered);
    }

    @And("^user enter email address on the authentication sign in page$")
    public void userEnterEmailAddressOnTheAuthenticationSignInPage() {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(email,page.txt_accountSignInEmailAddress);
    }

    @And("^user enter password on the authentication sign in page$")
    public void userEnterPasswordOnTheAuthenticationSignInPage() {
        SignInPage page = new SignInPage(base.Driver);
        page.sendKeys(password,page.txt_accountSignInPassword);
    }

    @And("^user click on sign in button on the authentication sign in page$")
    public void userClickOnSignInButtonOnTheAuthenticationSignInPage() {
        SignInPage page = new SignInPage(base.Driver);
        page.click(page.btn_accountSignInButton);
    }

    @And("^user click on dresses button on the my account page$")
    public void userClickOnDressesButtonOnTheMyAccountPage() {
        SignInPage page = new SignInPage(base.Driver);
        page.click(page.btn_accountSignInDresses);
    }

    @And("^user click on Evening dress on the my category page$")
    public void userClickOnEveningDressOnTheMyCategoryPage() {
        SignInPage page = new SignInPage(base.Driver);
        page.click(page.btn_accountCategoryEveningDress);
    }

    @And("^User Click on add to cart on the dress$")
    public void userClickOnAddToCartOnTheDress() {
        SignInPage page = new SignInPage(base.Driver);
        Actions builder = new Actions(base.Driver);
        builder.moveToElement(page.btn_accountCateloguePrintedDress).perform();
        page.click(page.btn_accountCateloguePrintedDressAddToCart);
    }

    @Then("^User should be able to see \"([^\"]*)\" on displayed$")
    public void userShouldBeAbleToSeeOnDisplayed(String expectedValue)  {
        SignInPage page = new SignInPage(base.Driver);

        page.assertEquals(expectedValue,page.btn_accountProductMessage_successful);
    }

    @When("^user click on the sign out button on the account page$")
    public void userClickOnTheSignOutButtonOnTheAccountPage() {
        SignInPage page = new SignInPage(base.Driver);
        page.click(page.btn_accountLogout);
    }
}
