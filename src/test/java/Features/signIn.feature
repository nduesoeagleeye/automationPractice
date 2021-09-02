Feature: Sign In feature

  Background:
    Given user navigates to the landing page on the automation practice page

  Scenario: User Create an account with valid credentials and check for error validations on the fields
    When User click on sign in button on the landing page
    # Authentication page
    When User click on sign in button on the landing page
    Then user should be able to see "Authentication" on the authentication page
    And User enter "ndueso.utuk" on the crete an account filed on the authentication page
    And user click on Create an account button on the authentication page
    # Create an Account
    And user select Mr for Title on the personal information page
    And user enter First Name "First Name" on the personal information page
    And user enter Last Name "Last Name" on the personal information page
    And user enter Password "Password" on the personal information page
    Then User should be able to see page heading "create an account" on the create an account page
    Then User should be ale to see sub Heading "your personal information" on the create an account page
    And user select DOB day "1" on the personal information page
    And user select DOB Month "1" on the personal information page
    And user select DOB Year "2020" on the personal information page
    #Your Address
    And user enter First Name "First Name" on the your address filed
    And user enter Last Name "Last Name" on the your address filed
    And user enter Company "Company" on the your address filed
    And user enter Address "Address" on the your address filed
    And user enter Address (Line 2) "Address (Line 2)" on the your address filed
    And user enter City "City" on the your address filed
    And user select State "1" on the your address filed
    And user enter Zip/Postal Code "00000" on the your address filed
    And user select Country "21" on the your address filed
    And user enter Additional information "Additional information" on the your address filed
    And user enter Home phone "Home phone" on the your address filed
    And user enter Mobile phone "Mobile phone" on the your address filed
    And user enter Assign an address "Assign an address alias for future reference" on the your address filed
    And User click on the Register Button on the your address filed
    Then User should be able to see alias error "alias is too long. Maximum length: 32" message displayed on the create an account page
    Then User should be able to see phone error "phone is invalid."message displayed on the create an account page
    Then User should be able to see phone mobile error "phone_mobile is invalid." message displayed on the create an account page
    And user enter Password "Password" on the personal information page
    And user enter Assign an address "address alias" on the your address filed
    And user enter Home phone "07429286755" on the your address filed
    And user enter Mobile phone "07429286755" on the your address filed
    And User click on the Register Button on the your address filed
    Then user should be able to see "My account" on the authentication page


  Scenario: User login to the account,find most expensive dress and add to the cart and user logout
    When User click on sign in button on the landing page
    Then User should be able to see test "Already registered?" on the authentication page
    And user enter email address on the authentication sign in page
    And user enter password on the authentication sign in page
    And user click on sign in button on the authentication sign in page
    Then user should be able to see "My account" on the authentication page
    And user click on dresses button on the my account page
    And user click on Evening dress on the my category page
    When User Click on add to cart on the dress
#    Then User should be able to see "Product successfully added to your shopping cart" on displayed
    When user click on the sign out button on the account page

  Scenario: User login to the account verify the item is still in the cart
    When User click on sign in button on the landing page
    Then User should be able to see test "Already registered?" on the authentication page
    And user enter email address on the authentication sign in page
    And user enter password on the authentication sign in page
    And user click on sign in button on the authentication sign in page
    Then user should be able to see "My account" on the authentication page
































