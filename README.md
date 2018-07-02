Portfolio Site (Ongoing from April 2018 to Present)
=======================

Description
-----------------------
I wanted to create and deploy a portfolio site to display my works and use it as my own personalized page to do as I please.

This site is a Fullstack ReactJs application, using React-Router for routes and Node,Express, and Nodemailer for the backend. Does not
use Redux since I figure it would be overkill for how small this site will initially be but, upon adding the "/blog" route (see
Future Improvements section), I will add the state management package to my site.

This personal project had given me the chance to work with React and I have been immersed with the UI library since mid-April. It
seemed daunting at first but I currently am in love with it and how intuitive a component based approach is. Good job Facebook!

I, also, learned a lot about creating a web application from start to finish. Here is a short timeline of this sites creation:

1. Mid-April to Mid-May: 4 weeks of learning React and Redux fully. I spent an awfully long amount of time with Redux, to the point
where I cannot wait to implement this to my site or any project, but I had later decided my site did not need it at this moment.
I, also, took the time to learn Advance Javascript concepts (HOF and Asynchronous Javascript) to better understand the language
and add more tools to assist me in making this site.

2. Mid-May to End of May: 2 weeks of planning my site. I chose this time to design, crudely with paper, how my portfolio site
would look like. I'm not the best drawer and I wish I had the money for Photoshop, but I made do with what I had and was flexible
in creating a simple site that I would love. I, also, researched into NPM packages I could use to help with my site. What I found
included React-Router, Nodemailer, Concurrently, Formik, React-Social-Icons, Reactstrap, and React-bootstrap.

3. End of May - Now(July): Finally being out of collage, I went straight to work. Started with creating the file structure
to keep everything organized and logical, I then went to creating all the routes and making sure they worked properly. Once that
was clear, I added static JSX to all the routes and the components they possessed to get exactly what I wanted displayed. After, this,
I made them more dynamic and have the ability to pass and take states and props for scalability. Then I had worked on the "/contact"
part of the site which consisted of a form. I spent about a week or so on this portion and decided to just leave it presentable
and work on having it be functioning to later to not waste time. I spent a day setting up express and nodemailer so that when
the form was ready it could send the contact information of a user to my email address. Also set up concurrently and spent about a
week with styling with Reactstrap and react-bootstrap, as well as creating custom css stylings. Still working on that. You can
see what I have left for this site on the "Current Challenges" section of this README file.

Overall, despite the difficulties and long days, I have had an incredibly fun and transformatting time working on this site. This
project had sharpen my developer skills and helped me understand the creation of a site from start to finish and all the pitfalls
and flexibility experienced and needed to complete such a task.


Current Challenges
-----------------------
I have not deployed this site yet but I am working hard to get the site to my liking. These are the current obstacles I am
facing:

1. Laying out the site with CSS. Also, I am trying to get the site to be responsive and the problem seems to be with the images
and having them fit to screen and not effect the layout.

2. Fixing the "/contact" route. Currently using FormikJs to streamline the React form process but am facing problems with its
presentation on the site. Also need to have axios send a POST request to the backend of this site so that the form could be
properly submitted. I made a stack overflow question detailing this issue [here](https://stackoverflow.com/questions/51099439/reactjs-using-formik-to-write-a-form-with-axios)

3. With the "/about" and "/projects" tags, the images are not displaying. The source code does include a file with the images
so I have been trying to add a path to these images within the the components constructor method. The paths seem to be wrong,
whether I define them into the state object or defined them within a variable that is put into the state object.

4. Having the "Footer" component stick to the bottom of the page, whether the site was being seen on a desktop or on a mobile device.
Needs to not overlap any other component on the page. Looking into media queries with React.

5. Double check package.json. Specifically, making sure to set up a proxy from the client folder to communicate with the backend side as well
as other configurations with the help up ConcurrentlyJs and to make sure it is set up properly.


Future Improvements
-----------------------
After I deploy the first version of my site, I would like to work on improving on these issues or adding these features:

1. Add a "/blog" route that will direct user to a blog portion of the site. Will have to use Redux to manage state in this part
as well as add further styling to make this portion look good. I should also have a few blogs posts already posted onto the site.

2. Clean up CSS styling. Currently, before deployment, I have been hacking away with css, reactstrap, and react-bootstrap
to make the site look how I invisioned it and, most importantly, nice and presentable. I see that this could cause a problem for
maintaining the site in the future and the messiness does bother me so I plan to clean it.

3. Add Google Analytics and perhaps other analtyical tools so I could keep track of traffic on my site. I could, also, use this
data to change and improve my site to improve user retention the performance speed of my site.


Author/ Contributions
-----------------------

Edgar J San Martin


Copyright
-----------------------

Edgar J San Martin © 2018
