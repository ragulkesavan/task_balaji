'''

source:
    https://gist.github.com/hugs/830011#file-selenium-examples-py
'''

# To install the Python client library:
# pip install -U selenium

# Import the Selenium 2 namespace (aka "webdriver")
from selenium import webdriver


def get_quora_links():
    f = open("quora_answers.txt")

    q_link_set = set()

    for line in f.readlines():
        print(line.strip())

        q_link_set.add(line.strip())

    return q_link_set


def get_answer(q_link, driver):
    # Go to codepad.org
    driver.get(q_link)

    elements = driver.find_elements_by_css_selector('div.pagedlist_item')

    for element in elements:

        links = element.find_elements_by_css_selector('div.feed_item_answer_user a')

        current_link = None

        for link in links:
            current_link = link.get_attribute("href")

        if (current_link != 'https://www.quora.com/profile/Balaji-Viswanathan-2'):
            continue

        print(current_link)
        ans = element.find_elements_by_css_selector('a.answer_permalink')
        ans2 = element.find_element_by_css_selector('span.name_text span.TopicName').get_attribute('innerHTML')
        print(ans2)
        htp = element.get_attribute('innerHTML')
        print("http")
        print(htp)

        for hi in ans2:
            fi = hi.text
            print(fi)
        for a in ans:
            con = a.text
            print(con)
        answers = element.find_elements_by_css_selector('span.ui_qtext_rendered_qtext')
        for answer in answers:
            content = answer.text
            print(content)

        print('----------------')


def startpy():
    # iPhone
    # driver = webdriver.Remote(browser_name="iphone", command_executor='http://172.24.101.36:3001/hub')

    # Android
    # driver = webdriver.Remote(browser_name="android", command_executor='http://127.0.0.1:8080/hub')

    # Google Chrome
    driver = webdriver.Chrome("/usr/lib/chromium-browser/chromedriver")

    # Firefox
    # driver = webdriver.Firefox()

    # ------------------------------
    # The actual test scenario: Test the codepad.org code execution service.

    q_link = "https://www.quora.com/Why-does-investment-banking-get-so-much-publicity-when-it-is-so-tiny-compared-to-commercial-banking"
    count = 1
    try:
        if count < 3:
            get_answer(q_link, driver)
            count = count + 1
        else:
            break
    except Exception as e:
        print(e)

    raise Exception("Test")

    # Close the browser!
    # driver.quit()


if __name__ == '__main__':
    startpy()

