# Runturen_examensarbete

Description.
Runturen is an educational application for viewing information about rune stones that utilizes google maps,
Ionic framework and Flickr Api as well as marketcloud for the backend.
Open the app and find google markers to tap on and to get information regarding the runestone in question.

Installation.
1. Follow the guide to install ionic on your computer: https://ionicframework.com/getting-started/
2. To retrieve the temporarily api url from flickr navigate to: https://www.flickr.com/services/api/explore/flickr.people.getPhotos
then paste in the user id: 152375700@N05, at the top of the arguments list. Choose output as Json format and click the box
that says do not sign call. Then click the call method button and copy the then generated url link at the bottom of the page.
3. Navigate to the folder in the project that says providers and then open the flickr.ts file.
Paste the url link in the getApiUrl variable. Now you should be able to view the gallery page in the application.

Payment details.
In the checkout page you are required to add credit card details.
In this case use the dummy card details you are presented with.
credit card number: 4242 4242 4242 4242
cvv: 123
expiration date: 01/19
To control that payments have been registered go to https://www.marketcloud.it/applications/462454/dashboard#/orders/%7B%22per_page%22:20,%22page%22:1%7D
log in with email: johanjohan.lund@gmail.com and password: Bullethole12. Choose backoffice for the
runturen app and then navigate to orders