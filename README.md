# demo-site-01
This is actually one of my freelance project site, built for an artiste. However, it can also be used for any sort of campaign promotions or any others that you may think of. It is written with basic HTML, CSS and JS with jQuery library. The template, however, is build with PHP utilising the **include** function, hence the .php extensions. 

Note 1: I did use 2 3rd-party jQuery plugins to speed up my development, mainly for responsive slider controls and popup modals.
Note 2: All the photograph images used in this site (not counting the site faux logo) are sourced from [Pexels.com - Best free stock photos in one place](http://www.pexels.com/).

## Preview

You can view the site running at this link; http://tendouji.ezyro.com/parallax-demo/.

## Concept

The site is intended to have a full screen segment by segment scrolling behaviour. With each segment's, on enter, it will run some form of animation depending on the segment's content layout.

## Features

There is a photo gallery page which is specifically only to show a collection of images. For ease of update, I used PHP scandir to scan for only image files uploaded, return the list via JSON, which will be called from the JS to do inject the necessary HTML codes.

There is a contact us page which displays a basic form for viewer to keep in touch with the site owner. It utilises the functionality of **Google Form**, as well as **Google Sheet** for data tracking. One plus point of using this method is that I can set an action trigger via Codes in **Google Sheet** for any new entry.

## Feedbacks

I still have more to learn (such is life for a developer), so feel free to check my codes and drop me some comments at tendoujir@gmail.com.
