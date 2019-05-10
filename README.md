# chrome version

chrome version
```
google-chrome --version
Google Chrome 74.0.3729.131 
```


# node version
```
node --version
v10.13.0
```

Also ran 10.15.3 and this worked to get the latest webdriver-manager when installing Protractor.

#### Potentially issues with node versions
Using 10.9.0 still downloaded webdriver-manager 12.0.6.


# webdriver-manager

Checking webdriver-manager version.
```
npx webdriver-manager version
[13:48:33] I/version - webdriver-manager 12.1.4
```

Updating to the latest browser binaries. This will download chromedriver 74.
```
npx webdriver-manager update 
[11:26:57] I/file_manager - creating folder /usr/local/google/home/cnishina/src/test_for_protractor/node_modules/protractor/node_modules/webdriver-manager/selenium
[11:26:57] I/config_source - curl -o/usr/local/google/home/cnishina/src/test_for_protractor/node_modules/protractor/node_modules/webdriver-manager/selenium/standalone-response.xml https://selenium-release.storage.googleapis.com/
[11:26:57] I/config_source - curl -o/usr/local/google/home/cnishina/src/test_for_protractor/node_modules/protractor/node_modules/webdriver-manager/selenium/chrome-response.xml https://chromedriver.storage.googleapis.com/
[11:26:57] I/config_source - curl -o/usr/local/google/home/cnishina/src/test_for_protractor/node_modules/protractor/node_modules/webdriver-manager/selenium/gecko-response.json https://api.github.com/repos/mozilla/geckodriver/releases
[11:26:58] I/downloader - curl -o/usr/local/google/home/cnishina/src/test_for_protractor/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar https://selenium-release.storage.googleapis.com/3.141/selenium-server-standalone-3.141.59.jar
[11:26:58] I/downloader - curl -o/usr/local/google/home/cnishina/src/test_for_protractor/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_74.0.3729.6.zip https://chromedriver.storage.googleapis.com/74.0.3729.6/chromedriver_linux64.zip
[11:26:58] I/update - chromedriver: unzipping chromedriver_74.0.3729.6.zip
[11:26:58] I/update - chromedriver: setting permissions to 0755 for /usr/local/google/home/cnishina/src/test_for_protractor/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_74.0.3729.6
[11:26:59] I/downloader - curl -o/usr/local/google/home/cnishina/src/test_for_protractor/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.24.0.tar.gz https://github.com/mozilla/geckodriver/releases/download/v0.24.0/geckodriver-v0.24.0-linux64.tar.gz
[11:27:00] I/update - geckodriver: unzipping geckodriver-v0.24.0.tar.gz
[11:27:00] I/update - geckodriver: setting permissions to 0755 for /usr/local/google/home/cnishina/src/test_for_protractor/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.24.0
```
A quick check that we do have the right version of chromedriver.
```
npx webdriver-manager status 
[13:40:12] I/status - selenium standalone version available: 3.141.59 [last]
[13:40:12] I/status - chromedriver version available: 74.0.3729.6 [last]
[13:40:12] I/status - geckodriver version available: v0.24.0 [last]
[13:40:12] I/status - android-sdk is not present
[13:40:12] I/status - appium is not present
```

# protractor test
Running with async / await with direct connect:

```
npx protractor conf.js                                                                                             ⏎
[13:07:14] I/launcher - Running 1 instances of WebDriver
[13:07:14] I/direct - Using ChromeDriver directly...
Started
Google
.


1 spec, 0 failures
Finished in 0.47 seconds

[13:07:16] I/launcher - 0 instance(s) of WebDriver still running
[13:07:16] I/launcher - chrome #01 passed
```
