Feature: Logout
    User can logout from trello

    @02 @ui @openBrowser @closeBrowser
    Scenario: Verify that user can logout from trello page
        Given I login into trello page with "admin" user credentials
        When I logout from trello page
        Then I verify that user is loged out
