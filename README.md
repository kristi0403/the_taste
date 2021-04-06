# The taste / Cookbook App

The brief was to create a web application that allows users to store and easily access cooking recipes.
The recipes are to be stored in a database which can be filtered by a user on the website using the categories.

As first the page is loaded you are introduced to the home page which shows the navbar at the top,
consisting of 3 elements Home , Log in, Register. On the top-right is the title of the page.
After that a big title is shown to make the view of the home page more worm.
At the home page a card system show the the recipes that are stored into the database and are done
from different users. Each recipe consist of :

* Recipes Name
* An image
* Recipes description
* Preparation time
* Cooking time
 and 3 buttons :
    * view
    * edit
    * delete
The users that are visitors do not have an acount or are not loged int can access only the view button 
and by pressing it can open the recipe page where are shown the ingredients and the preparation steps.
The users that have an acount and are logged in can view all the recipes but can only delete and edit
the recipes done by them.
After the card grid system is the footer which includes a quote and media link that at the moment just 
point to the home page of the media links when pressed as no media links for the app still exist.
After seeing the homepage there is the log in and the register button.
By pressing the log in you will be redirected to the log in page where you have to options log in or register.
If you have an acount just press the log in instead button at the bottom of the log in form.
If you don't have an acount just go for register and you can create a new acount witht the username and password criterias.
When you log in you are redirected to the profile page, where it shows you the user profile name, profile picture and the 
recipes made by the user, you in this case.Than you have new recipes that you can press to create new recipes.
The create new recipe template comes with text filds of ingredients , recipes description, recipe name, preparation steps,
cooking time and preparation time.
Everytime you pressed the edit buton you are redirected to the edit recipe page where you have the elements for the curent 
recipe from the database and you chose what you what to change. after presing edit a message flashes telling changes recipe updated 
than you can press done to be redirecter to the recipes homepage.
You also have the delete option which you can use to delete the recipe that will be deleted from database as well.
Users can use even the search bar to write text to find in the matching recipes name and description.

## UX
  The app is in general for avery audience because it does not contain any harmful content or adult content .
  If i would take int consideration four different users and how they may behave when they inconter the app or is it useful to them.
1) So first we have a person who is interested to try learning how to cook. 
   The app itself consent of recipes made by everyday people so most of the recipes are not really hard to try to learn them.
2)The second user might be a person that likes to learn new recipes and store them somewhere.
    The app has the profile with the collection of recipes that are made by the user.
3)A person that wants to it someting but cant make up hist mind.
    With only on writing "pasta" on the search and all the pasta recipes will show up to you.
    More easily to chose when you have more than 1 to look for.
4)The users can edit their recipes without needing to delete the entire recipe only changing particular components .
5)A person that is entusiastic for cooking and want to shere their love and ideas with the rest of the world.


 ## Design process
 Above are the first ideas of the webpage shown in wireframes
![New Wireframe 1 (1)](https://user-images.githubusercontent.com/63249988/113645217-62a5a280-967e-11eb-8241-d1d4a498cb20.png)
![New Wireframe 1 (2)](https://user-images.githubusercontent.com/63249988/113645221-646f6600-967e-11eb-9e08-1deabab6ea18.png)
![New Wireframe 1 (3)](https://user-images.githubusercontent.com/63249988/113645223-646f6600-967e-11eb-9bba-8fea5cfe7360.png)
![New Wireframe 1](https://user-images.githubusercontent.com/63249988/113645227-6507fc80-967e-11eb-9828-ee41ec5a3067.png)
![New Wireframe 2 (1)](https://user-images.githubusercontent.com/63249988/113645229-65a09300-967e-11eb-846a-9f975ee72521.png)
![New Wireframe 2 (2)](https://user-images.githubusercontent.com/63249988/113645231-65a09300-967e-11eb-93cc-3e1cf83d945e.png)
![New Wireframe 2 (3)](https://user-images.githubusercontent.com/63249988/113645233-66392980-967e-11eb-93f4-928ced236b75.png)
![New Wireframe 2 (4)](https://user-images.githubusercontent.com/63249988/113645234-66392980-967e-11eb-8279-8f1c3f8e9630.png)
![New Wireframe 2](https://user-images.githubusercontent.com/63249988/113645235-66d1c000-967e-11eb-9121-a0e1fa7cde8f.png)
![New Wireframe 3](https://user-images.githubusercontent.com/63249988/113645236-66d1c000-967e-11eb-8552-a4245e0dcc5c.png)
![New Wireframe 4](https://user-images.githubusercontent.com/63249988/113645238-676a5680-967e-11eb-9996-a53096a73051.png)

how the actual app was finished

![Screenshot 2021-04-05 at 23 54 40](https://user-images.githubusercontent.com/63249988/113645708-4fdf9d80-967f-11eb-8b55-9876a3bd0b03.png)
![Screenshot 2021-04-05 at 23 55 00](https://user-images.githubusercontent.com/63249988/113645713-51a96100-967f-11eb-9be5-f0f7c1b49049.png)
![Screenshot 2021-04-05 at 23 54 37](https://user-images.githubusercontent.com/63249988/113645716-5241f780-967f-11eb-876a-0dbc36b0029b.png)
![Screenshot 2021-04-05 at 23 54 48](https://user-images.githubusercontent.com/63249988/113645720-52da8e00-967f-11eb-843f-41e7ed5ec719.png)
![Screenshot 2021-04-05 at 23 55 05](https://user-images.githubusercontent.com/63249988/113645723-540bbb00-967f-11eb-9454-8df510ca4ca2.png)
![Screenshot 2021-04-05 at 23 55 48](https://user-images.githubusercontent.com/63249988/113645727-54a45180-967f-11eb-8fd7-38e89ef7d9bb.png)
![Screenshot 2021-04-05 at 23 54 45](https://user-images.githubusercontent.com/63249988/113645730-55d57e80-967f-11eb-9a3d-931c12fcd9e5.png)

The images dispaly the app on pc screen tablet and phone both landscape and portrait


Colour Scheme

I through to use more the background image to look more like the citchen with the marble and the ingredients.
Also the main color used for the page is orange but in different shades using the lighten atribute.


Typography

The main font family used is "Roboto" for the buttons and  'Gloria Hallelujah' for the titles.

## Features
The page is been programed to work in 3 different screen sizes.
1)PC
2)Tablet
3)Smartphone
The elements are responsible designed to suit the changes made to the screen.

1. Navbar - Consist of the name which returns the user to home page everytime pressed.There are also links to home, profile, new recipe,
   log in, log out.
2. Home - The homepage consist of 4 sample recipes.
   Shows the user "All Recipes" from ALL users which have been entered on the site.
   The user can then filter or browse through the recipes.
    The can view more information on each recipe by selectign the "View" link which delivers the user to the "View recipe" page.
3.  My Recipes - kocated on the profile,  provides the user with the recipes that they have added themselves.
    The user's recipes can be edited and deleted by using the buttons displayed under the recipes.
4.  Login/profile - When first selected the user will be prompted to create a username to login to the application so that they can add recipes to the database.
    Once logged in the user will be presented with their Profile which provides all of their recipes,
    along with 3 data charts depicting the number of base ingredients, meal types and food flavours associated with the recipes which have been added.


 //Features to add//