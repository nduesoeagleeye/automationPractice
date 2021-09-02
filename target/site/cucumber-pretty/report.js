$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Contact Us Feature",
  "description": "",
  "id": "contact-us-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2679110637,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user navigates to the landing page on the automation practice page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactUs.userNavigatesToTheLandingPageOnTheAutomationPracticePage()"
});
formatter.result({
  "duration": 9209775638,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Test the contact us page on the automation practice web application",
  "description": "",
  "id": "contact-us-feature;test-the-contact-us-page-on-the-automation-practice-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User click on the contact us button on the automation practice landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "\"Customer service - Contact us\" should be displayed on the auto Customer service - Contact us page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on send button on the Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Message validation error should display \"Invalid email address.\" on the Customer service - Contact us page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enter the user email address on as Email:\"ndueso.utukTest\" on the Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click on send button on the Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Message validation error should display \"The message cannot be blank.\" on the Customer service - Contact us page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enter Message on message field on Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on send button on the Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Message validation error should display \"Please select a subject from the list provided.\" on the Customer service - Contact us page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User select subject \"Customer service\" from the subject drop down on Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on send button on the Customer service - Contact us page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "form should be sent successfully with success message \"Your message has been successfully sent to our team.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click on the Home buttom on Customer service - Contact us page",
  "keyword": "And "
});
formatter.match({
  "location": "ContactUs.userClickOnTheContactUsButtonOnTheAutomationPracticeLandingPage()"
});
formatter.result({
  "duration": 5438517302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer service - Contact us",
      "offset": 1
    }
  ],
  "location": "ContactUs.shouldBeDisplayedOnTheAutoCustomerServiceContactUsPage(String)"
});
formatter.result({
  "duration": 51940038,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userClickOnSendButtonOnTheCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 6728745263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 41
    }
  ],
  "location": "ContactUs.messageValidationErrorShouldDisplayOnTheCustomerServiceContactUsPage(String)"
});
formatter.result({
  "duration": 24010643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ndueso.utukTest",
      "offset": 47
    }
  ],
  "location": "ContactUs.userEnterTheUserEmailAddressOnAsEmail(String)"
});
formatter.result({
  "duration": 96996043,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userClickOnSendButtonOnTheCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 6033552445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The message cannot be blank.",
      "offset": 41
    }
  ],
  "location": "ContactUs.messageValidationErrorShouldDisplayOnTheCustomerServiceContactUsPage(String)"
});
formatter.result({
  "duration": 30879504,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userEnterMessageOnMessageFieldOnCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 56938114,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userClickOnSendButtonOnTheCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 5259957149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select a subject from the list provided.",
      "offset": 41
    }
  ],
  "location": "ContactUs.messageValidationErrorShouldDisplayOnTheCustomerServiceContactUsPage(String)"
});
formatter.result({
  "duration": 23732337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer service",
      "offset": 21
    }
  ],
  "location": "ContactUs.userSelectSubjectCustomerServiceFromTheSubjectDropDownOnCustomerServiceContactUsPage(String)"
});
formatter.result({
  "duration": 89896308,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userClickOnSendButtonOnTheCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 57759342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your message has been successfully sent to our team.",
      "offset": 55
    }
  ],
  "location": "ContactUs.formShouldBeSentSuccessfullyWithSuccessMessage(String)"
});
formatter.result({
  "duration": 6661440985,
  "status": "passed"
});
formatter.match({
  "location": "ContactUs.userClickOnTheHomeButtomOnCustomerServiceContactUsPage()"
});
formatter.result({
  "duration": 13819083823,
  "status": "passed"
});
formatter.after({
  "duration": 70594139,
  "status": "passed"
});
formatter.uri("signIn.feature");
formatter.feature({
  "line": 1,
  "name": "Sign In feature",
  "description": "",
  "id": "sign-in-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2267098272,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user navigates to the landing page on the automation practice page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactUs.userNavigatesToTheLandingPageOnTheAutomationPracticePage()"
});
formatter.result({
  "duration": 10340939572,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User Create an account with valid credentials and check for error validations on the fields",
  "description": "",
  "id": "sign-in-feature;user-create-an-account-with-valid-credentials-and-check-for-error-validations-on-the-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User click on sign in button on the landing page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "# Authentication page"
    }
  ],
  "line": 9,
  "name": "User click on sign in button on the landing page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should be able to see \"Authentication\" on the authentication page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enter \"ndueso.utuk\" on the crete an account filed on the authentication page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click on Create an account button on the authentication page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "# Create an Account"
    }
  ],
  "line": 14,
  "name": "user select Mr for Title on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter First Name \"First Name\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter Last Name \"Last Name\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enter Password \"Password\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should be able to see page heading \"create an account\" on the create an account page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should be ale to see sub Heading \"your personal information\" on the create an account page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user select DOB day \"1\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user select DOB Month \"1\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user select DOB Year \"2020\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Your Address"
    }
  ],
  "line": 24,
  "name": "user enter First Name \"First Name\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user enter Last Name \"Last Name\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user enter Company \"Company\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enter Address \"Address\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user enter Address (Line 2) \"Address (Line 2)\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user enter City \"City\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user select State \"1\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user enter Zip/Postal Code \"00000\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user select Country \"21\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user enter Additional information \"Additional information\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enter Home phone \"Home phone\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user enter Mobile phone \"Mobile phone\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enter Assign an address \"Assign an address alias for future reference\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on the Register Button on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User should be able to see alias error \"alias is too long. Maximum length: 32\" message displayed on the create an account page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User should be able to see phone error \"phone is invalid.\"message displayed on the create an account page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User should be able to see phone mobile error \"phone_mobile is invalid.\" message displayed on the create an account page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user enter Password \"Password\" on the personal information page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user enter Assign an address \"address alias\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user enter Home phone \"07429286755\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user enter Mobile phone \"07429286755\" on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User click on the Register Button on the your address filed",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user should be able to see \"My account\" on the authentication page",
  "keyword": "Then "
});
formatter.match({
  "location": "Singin.userHoverOnTheFirstImageOnTheLandingPage()"
});
formatter.result({
  "duration": 11611044941,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userHoverOnTheFirstImageOnTheLandingPage()"
});
formatter.result({
  "duration": 11473740110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication",
      "offset": 28
    }
  ],
  "location": "Singin.userShouldBeAbleToSeeOnTheAuthenticationPage(String)"
});
formatter.result({
  "duration": 24628333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ndueso.utuk",
      "offset": 12
    }
  ],
  "location": "Singin.userEnterOnTheCreteAnAccountFiledOnTheAuthenticationPage(String)"
});
formatter.result({
  "duration": 157222694,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userClickOnCreateAnAccountButtonOnTheAuthenticationPage()"
});
formatter.result({
  "duration": 55329188,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userSelectMrForTitleOnThePersonalInformationPage()"
});
formatter.result({
  "duration": 5250428370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Name",
      "offset": 23
    }
  ],
  "location": "Singin.userEnterOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 112425635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last Name",
      "offset": 22
    }
  ],
  "location": "Singin.userEnterLastNameOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 101288403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 21
    }
  ],
  "location": "Singin.userEnterPasswordOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 153009621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create an account",
      "offset": 41
    }
  ],
  "location": "Singin.userShouldBeAleToSeeOnTheCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 28438626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "your personal information",
      "offset": 39
    }
  ],
  "location": "Singin.userShouldBeAbleToSeeOnTheCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 23389980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "Singin.userSelectDOBDayOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 85320181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "Singin.userSelectDOBMonthOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 126637947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 22
    }
  ],
  "location": "Singin.userSelectDOBYearOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 92244015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Name",
      "offset": 23
    }
  ],
  "location": "Singin.userEnterFirstNameOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 107589843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last Name",
      "offset": 22
    }
  ],
  "location": "Singin.userEnterLastNameOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 94101837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 20
    }
  ],
  "location": "Singin.userEnterCompanyOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 87474237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address",
      "offset": 20
    }
  ],
  "location": "Singin.userEnterAddressOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 86358032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    },
    {
      "val": "Address (Line 2)",
      "offset": 29
    }
  ],
  "location": "Singin.userEnterAddressLineOnTheYourAddressFiled(String,String)"
});
formatter.result({
  "duration": 60102062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 17
    }
  ],
  "location": "Singin.userEnterCityOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 72624361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "Singin.userSelectStateOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 76752692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00000",
      "offset": 28
    }
  ],
  "location": "Singin.userEnterZipPostalCodeOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 80731572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 21
    }
  ],
  "location": "Singin.userSelectCountryOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 52805153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Additional information",
      "offset": 35
    }
  ],
  "location": "Singin.userEnterAdditionalInformationOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 103592286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home phone",
      "offset": 23
    }
  ],
  "location": "Singin.userEnterHomePhoneOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 95540666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile phone",
      "offset": 25
    }
  ],
  "location": "Singin.userEnterMobilePhoneOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 101376558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Assign an address alias for future reference",
      "offset": 30
    }
  ],
  "location": "Singin.userEnterAssignAnAddressOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 219245947,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userClickOnTheRegisterButtonOnTheYourAddressFiled()"
});
formatter.result({
  "duration": 45755887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alias is too long. Maximum length: 32",
      "offset": 40
    }
  ],
  "location": "Singin.userShouldBeAbleToSeeAliasErrorMessageDisplayedOnTheCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 6205166544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone is invalid.",
      "offset": 40
    }
  ],
  "location": "Singin.userShouldNbeAbleToSeePhoneErrorMessageDisplayedOnTheCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 20832309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone_mobile is invalid.",
      "offset": 47
    }
  ],
  "location": "Singin.userShouldNbeAbleToSeePhoneMobileErrorMessageDisplayedOnTheCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 21313350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 21
    }
  ],
  "location": "Singin.userEnterPasswordOnThePersonalInformationPage(String)"
});
formatter.result({
  "duration": 146803493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address alias",
      "offset": 30
    }
  ],
  "location": "Singin.userEnterAssignAnAddressOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 111376748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07429286755",
      "offset": 23
    }
  ],
  "location": "Singin.userEnterHomePhoneOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 159063711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07429286755",
      "offset": 25
    }
  ],
  "location": "Singin.userEnterMobilePhoneOnTheYourAddressFiled(String)"
});
formatter.result({
  "duration": 126427152,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userClickOnTheRegisterButtonOnTheYourAddressFiled()"
});
formatter.result({
  "duration": 8545914307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My account",
      "offset": 28
    }
  ],
  "location": "Singin.userShouldBeAbleToSeeOnTheAuthenticationPage(String)"
});
formatter.result({
  "duration": 32938650,
  "status": "passed"
});
formatter.after({
  "duration": 72125716,
  "status": "passed"
});
formatter.before({
  "duration": 2226368525,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user navigates to the landing page on the automation practice page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactUs.userNavigatesToTheLandingPageOnTheAutomationPracticePage()"
});
formatter.result({
  "duration": 10557971210,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "User login to the account,find most expensive dress and add to the cart and user logout",
  "description": "",
  "id": "sign-in-feature;user-login-to-the-account,find-most-expensive-dress-and-add-to-the-cart-and-user-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "User click on sign in button on the landing page",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User should be able to see test \"Already registered?\" on the authentication page",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user enter email address on the authentication sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user enter password on the authentication sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user click on sign in button on the authentication sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user should be able to see \"My account\" on the authentication page",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "user click on dresses button on the my account page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user click on Evening dress on the my category page",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User Click on add to cart on the dress",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 59,
      "value": "#    Then User should be able to see \"Product successfully added to your shopping cart\" on displayed"
    }
  ],
  "line": 60,
  "name": "user click on the sign out button on the account page",
  "keyword": "When "
});
formatter.match({
  "location": "Singin.userHoverOnTheFirstImageOnTheLandingPage()"
});
formatter.result({
  "duration": 7919395228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Already registered?",
      "offset": 33
    }
  ],
  "location": "Singin.userShouldBeAbleToSeeTestOnTheAuthenticationPage(String)"
});
formatter.result({
  "duration": 30727870,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userEnterEmailAddressOnTheAuthenticationSignInPage()"
});
formatter.result({
  "duration": 196325949,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userEnterPasswordOnTheAuthenticationSignInPage()"
});
formatter.result({
  "duration": 111394105,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userClickOnSignInButtonOnTheAuthenticationSignInPage()"
});
formatter.result({
  "duration": 9125503314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My account",
      "offset": 28
    }
  ],
  "location": "Singin.userShouldBeAbleToSeeOnTheAuthenticationPage(String)"
});
formatter.result({
  "duration": 23994985,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userClickOnDressesButtonOnTheMyAccountPage()"
});
formatter.result({
  "duration": 8000101127,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userClickOnEveningDressOnTheMyCategoryPage()"
});
formatter.result({
  "duration": 7195381532,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userClickOnAddToCartOnTheDress()"
});
formatter.result({
  "duration": 126736106,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userClickOnTheSignOutButtonOnTheAccountPage()"
});
formatter.result({
  "duration": 11126823911,
  "status": "passed"
});
formatter.after({
  "duration": 72266457,
  "status": "passed"
});
formatter.before({
  "duration": 2259592920,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user navigates to the landing page on the automation practice page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactUs.userNavigatesToTheLandingPageOnTheAutomationPracticePage()"
});
formatter.result({
  "duration": 9092232649,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "User login to the account verify the item is still in the cart",
  "description": "",
  "id": "sign-in-feature;user-login-to-the-account-verify-the-item-is-still-in-the-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 63,
  "name": "User click on sign in button on the landing page",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "User should be able to see test \"Already registered?\" on the authentication page",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user enter email address on the authentication sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user enter password on the authentication sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user click on sign in button on the authentication sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user should be able to see \"My account\" on the authentication page",
  "keyword": "Then "
});
formatter.match({
  "location": "Singin.userHoverOnTheFirstImageOnTheLandingPage()"
});
formatter.result({
  "duration": 10598590439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Already registered?",
      "offset": 33
    }
  ],
  "location": "Singin.userShouldBeAbleToSeeTestOnTheAuthenticationPage(String)"
});
formatter.result({
  "duration": 26238358,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userEnterEmailAddressOnTheAuthenticationSignInPage()"
});
formatter.result({
  "duration": 147697863,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userEnterPasswordOnTheAuthenticationSignInPage()"
});
formatter.result({
  "duration": 115301767,
  "status": "passed"
});
formatter.match({
  "location": "Singin.userClickOnSignInButtonOnTheAuthenticationSignInPage()"
});
formatter.result({
  "duration": 10589010203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My account",
      "offset": 28
    }
  ],
  "location": "Singin.userShouldBeAbleToSeeOnTheAuthenticationPage(String)"
});
formatter.result({
  "duration": 23088096,
  "status": "passed"
});
formatter.after({
  "duration": 70494052,
  "status": "passed"
});
});