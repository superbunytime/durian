1. What tech stack will you use for your final project? We recommend that you use
React and Node for this project, however if you are extremely interested in
becoming a Python developer you are welcome to use Python/Flask for this
project.

This project will use react and node, as well as various job-search APIs.

2. Is the front-end UI or the back-end going to be the focus of your project? Or are
you going to make an evenly focused full-stack application?

I strongly favor the backend. That being said, it's vital to try to be well-rounded and I don't want to fall into the stereotype of CSS-avoidant backend developer. I think the backend is going to have, by necessity, much more depth than the front end, but user experience is vital for any public-facing application or website. So if I had to guess at this point, I would give it an 80/20 split between backend and frontend focus, but that 20% frontend needs to be immaculate.

3. Will this be a website? A mobile app? Something else?

At the time of writing it's slated to be a website, but a mobile app would be a really cool thing to build now that the question is posed. Time allowing, I would love to build a mobile app out of the project as well as a website.

4. What goal will your project be designed to achieve?

The project's goal is to help job seekers by pulling results from multiple job boards and aggregating them in a single place.

5. What kind of users will visit your app? In other words, what is the demographic of
your users?

Job seekers; anyone looking for a new job or career change.

1. What data do you plan on using? How are you planning on collecting your data?
You may have not picked your actual API yet, which is fine, just outline what kind
of data you would like it to contain. You are welcome to create your own API and
populate it with data. If you are using a Python/Flask stack are required to create
your own API.

Any relevant job site's API; so far both USA Jobs and glassdoor's API are public, free, and potentially have the data I'm looking for.  I would really like to include indeed and a few others as indeed is one of the premiere job listing sites, but have had difficulty scraping it thusfar.

Ultimately, considering the supposed simplicity of the idea, I feel that at least 3 job site APIs would make for a good showing.

1. In brief, outline your approach to creating your project (knowing that you may not
know everything in advance and that these details might change later). Answer
questions like the ones below, but feel free to add more information:
a. What does your database schema look like?

The schema is detailed in the durianschema.PNG file in this github repo.

b. What kinds of issues might you run into with your API? This is especially
important if you are creating your own API, web scraping produces
notoriously messy data.

Difficulties include dealing with site scraping for job sites that don't have APIs, and dealing with duplicate job postings across multiple job sites.

c. Is there any sensitive information you need to secure?

User login information. I can see a need if the project were to scale beyond capstone status to protect job search/application data, but currently none of that is slated to be exposed at public endpoints anyway.

d. What functionality will your app include?

Multi site job searches, job site exclusion/inclusion, saved jobs, saved companies, and (if possible as a stretch feature) easy apply buttons where applicable.

e. What will the user flow look like?

Users can access the search functionality without logging in, but logging in gains access to saved jobs, saved companies, and a more curated job list.

Users can enter a job title, and/or a location, and check/uncheck which job sites to search. They will then be presented with a list of say, 10 different job postings, which they can explore from there.

f. What features make your site more than a CRUD app? What are your
stretch goals?

Stretch goals are
- Every API I integrate past the initial 3
- Leetcode integration (for software engineer/programming searches, if the company they search for has known leetcode questions they ask)
- Easy apply: allow users to upload their resume, and apply to jobs in one click. This is a very complicated stretch goal and I'm uncertain if I'll be able to implement it with the time constraints presented.