@smoke
Feature: 
  To validate forgot functionallity in fb

  Scenario: 
        To validate account by using invalid mobile or invalid email

    Given User is in facebook login paeg
    Given User click forgotten password
    When User have to enter invalid mobile or invalid email
    And User click the search button
    Then User should be in invalid credentials page
