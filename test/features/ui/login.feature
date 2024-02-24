Feature: Login
    User can login into trello

    @01 @ui @openBrowser @closeBrowser
    Scenario: Verify that user can login into trello page
        Given I navigate to trello login page
        When I introduce the "admin" user credentials
        And I click on login button
        Then I verify that "admin" user is logged
