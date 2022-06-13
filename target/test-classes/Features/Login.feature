@LoginPage @smoke
Feature: 
  To validate Login funvtionality pf fb

  Background: 
    Given User is in facebook login paeg

 
  Scenario: 
    To validate login by using invalid user and invalid pass

    When User have to enter valid username and invalid password
      | abdkalam | 12452 | 14584 | kalam |
    And User click the login button
    Then User should be in invalid credentials page

 
  Scenario: 
      To validate login by using val7id user and valid pass

    When User have to enter valid user and valid pass
      | amjsbu@gmail  | gkmil        |  25696 |
      | selinium      | greens@gmail | 123648 |
      | testing@gmail | automation   |  56978 |
    And User click the login button|
    Then User should be in invalid credentials page
