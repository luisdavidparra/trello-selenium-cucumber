@deleteOrganization @api
Feature: Organizations
  Organizations can be created, updated, deleted and is posible to add boards to them.

  @API-01 @smoke @functional
  Scenario: Verify that user can create an organization providing the name.
    Given I set the body of a new organization with:
      | name | Organization Test 001 |
    When I send a "post" request to "/organizations?displayName=[organization.name]" for an organization
    Then I verify that the response status should be "200"
    And I verify that the response body on the organization should contain:
      | displayName | Organization Test 001 |
    And I send a "get" request to "/organizations/[organization.id]" for an organization
    And I verify that the response status should be "200"
    And I verify that the response body on the organization should contain:
      | displayName | Organization Test 001 |
    And I verify that the body matches with "organizations" schema