import requests
from bs4 import BeautifulSoup
"""have to use the conda distro of python for it to import requests properly"""


# page = requests.get(
#     "https://www.monster.com/jobs/search?q=software+engineer&where=remote&so=m.h.s")
# soup = BeautifulSoup(page.content, 'html.parser')
# all_jobs = soup.select("div", {"class": "sc-cbPlza fmZqNQ"})[0]
# print(all_jobs)
# page_body = soup.body
# print(page_body)

# the element closest to the job link itself is the class sc-cbPlza fmZqNQ; i have no idea what that stands for, but if i search for all occurrences of that, then search for the closest href to it, and store that in a variable, (trimming href="" from the string), that should be the link i need.  As long as that doesn't change, I should be able to scrape monster.com

# so that didn't work; let's try the div one level up; sc-bizigk iowMws
# that doesn't seem to be working either; i'm just getting empty arrays
# jackpot; soup.select("div", {"class": "sc-bizigk iowMws"}) gives a big old pile of stuff.
# that gives way too much; the terminal cuts it off after a whole bee movie script's worth.

# let's try this on some other pages and see if we encounter similar hurdles

# page = requests.get("https://finalfantasy.fandom.com/wiki/Final_Fantasy_Tactics_random_names")
# soup = BeautifulSoup(page.content, 'html.parser')
# all_names = soup.select("table")
# print(all_names)
# print(soup.table.get_text())

# doesn't do it perfectly, but gets all the names in the table for final fantasy tactics random names. ...also gets some other stuff.

# page = requests.get("https://rabbitpedia.com/rabbit-breeds/")
# soup = BeautifulSoup(page.content, "html.parser")
# all_bunnies = soup.select('ol')
# print(all_bunnies)
# print(soup.ol.get_text())

# okay that works about as expected.  I can get all the text needed.  I'm starting to think more and more that monster doesn't work due to some deliberate ambiguation on their backend.