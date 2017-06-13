$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Sample.feature");
formatter.feature({
  "line": 1,
  "name": "Test Demo Site",
  "description": "",
  "id": "test-demo-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test Login for demosite with valid/Invalid credentials in ChromeBrowser",
  "description": "",
  "id": "test-demo-site;test-login-for-demosite-with-valid/invalid-credentials-in-chromebrowser",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Chrome and start the application url \u003d\"http://newtours.demoaut.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter valid username \"\u003cusername\u003e\" and valid password \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-demo-site;test-login-for-demosite-with-valid/invalid-credentials-in-chromebrowser;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "test-demo-site;test-login-for-demosite-with-valid/invalid-credentials-in-chromebrowser;;1"
    },
    {
      "cells": [
        "academy",
        "academy"
      ],
      "line": 11,
      "id": "test-demo-site;test-login-for-demosite-with-valid/invalid-credentials-in-chromebrowser;;2"
    },
    {
      "cells": [
        "Demo",
        "Demo"
      ],
      "line": 12,
      "id": "test-demo-site;test-login-for-demosite-with-valid/invalid-credentials-in-chromebrowser;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test Login for demosite with valid/Invalid credentials in ChromeBrowser",
  "description": "",
  "id": "test-demo-site;test-login-for-demosite-with-valid/invalid-credentials-in-chromebrowser;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Chrome and start the application url \u003d\"http://newtours.demoaut.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter valid username \"academy\" and valid password \"password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 44
    }
  ],
  "location": "TestCase.open_Chrome_and_start_the_application_url(String)"
});
formatter.result({
  "duration": 42242140276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "academy",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 51
    }
  ],
  "location": "TestCase.enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 524850873,
  "status": "passed"
});
formatter.match({
  "location": "TestCase.user_should_able_to_login_successfully()"
});
formatter.result({
  "duration": 2027893437,
  "status": "passed"
});
formatter.match({
  "location": "TestCase.application_should_be_closed()"
});
formatter.result({
  "duration": 114497509,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test Login for demosite with valid/Invalid credentials in ChromeBrowser",
  "description": "",
  "id": "test-demo-site;test-login-for-demosite-with-valid/invalid-credentials-in-chromebrowser;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Chrome and start the application url \u003d\"http://newtours.demoaut.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter valid username \"Demo\" and valid password \"password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/",
      "offset": 44
    }
  ],
  "location": "TestCase.open_Chrome_and_start_the_application_url(String)"
});
formatter.result({
  "duration": 6915262271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Demo",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 48
    }
  ],
  "location": "TestCase.enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 181663754,
  "status": "passed"
});
formatter.match({
  "location": "TestCase.user_should_able_to_login_successfully()"
});
formatter.result({
  "duration": 1596966455,
  "status": "passed"
});
formatter.match({
  "location": "TestCase.application_should_be_closed()"
});
formatter.result({
  "duration": 105739602,
  "status": "passed"
});
});