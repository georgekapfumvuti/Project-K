Feature: Browsing around w3.org/standard/badpage Urls

  Scenario: Navigating to /badpage contaninig status code 404
    Given User navigate to "/badpage"
    Then Status code should be 404

  Scenario Outline: Navigating to links in /badpage which doesnot contain status code 404
    Given User navigate to "/badpage"
    When User navigate to "<links>" in /badpage page
    Then Status code should not be 404

    Examples: 
      | links             |
      | SiteMap           |
      | W3C_Webmaster_FAQ |
