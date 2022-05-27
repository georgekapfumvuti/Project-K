Feature: Browsing around w3.org/standard/webofdevices/multimodal Urls

  Scenario: Navigating to /multimodal page contaninig status code 200
    Given User navigate to "/webofdevices/multimodal"
    Then Status code should be 200

  Scenario Outline: Navigating to links in /badpage which doesnot contain status code 404
    Given User navigate to "/webofdevices/multimodal"
    When User navigate to "<links>" in /multimodal page
    Then Status code should not be 404

    Examples: 
      | links                             |
      | What_is_Multimodal_Access         |
      | Capabilities_of_Multimodal_Access |
      | Examples                          |
      | Learn_More                        |
