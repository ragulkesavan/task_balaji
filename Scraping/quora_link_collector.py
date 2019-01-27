#!/usr/bin/env python
# -*- coding: utf-8 -*-
# the above line is to avoid 'SyntaxError: Non-UTF-8 code starting with' error

'''
Created on 

Course work: 

@author: raja

Source:
    
'''

# Import necessary modules
from selenium import webdriver
import time
 

def startpy():
    
    # iPhone
    #driver = webdriver.Remote(browser_name="iphone", command_executor='http://172.24.101.36:3001/hub')
    
    # Android
    #driver = webdriver.Remote(browser_name="android", command_executor='http://127.0.0.1:8080/hub')
    
    # Google Chrome 
    driver = webdriver.Chrome("/usr/lib/chromium-browser/chromedriver")
    
    # Firefox 
    #driver = webdriver.Firefox()
    
    # ------------------------------
    # The actual test scenario: Test the codepad.org code execution service.
    
    # Go to codepad.org
    driver.get('https://www.quora.com/profile/Balaji-Viswanathan-2')
    
    SCROLL_PAUSE_TIME = 0.5

    # Get scroll height
    last_height = driver.execute_script("return document.body.scrollHeight")
    
    counter = 0
    while True:
        # Scroll down to bottom
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    
        # Wait to load page
        time.sleep(SCROLL_PAUSE_TIME)
    
        # Calculate new scroll height and compare with last scroll height
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            pass
            #print('new height : ', new_height, ', last_height : ', last_height)
            #break
        last_height = new_height
        
        counter = counter + 1
        print(counter)
        if(counter > 4623):
            break
    
    elements = driver.find_elements_by_css_selector('a.question_link')
        
    myfile = open("quora_answers.txt", "a")
        
    for element in elements:        
        current_link = element.get_attribute("href")
        
        print(current_link)        
        
        myfile.write(current_link)
        myfile.write('\n')
            
    
    #raise Exception("Test")
    
    # Close the browser!
    #driver.quit()


if __name__ == '__main__':
    startpy()