# Language App
This app is designed to help people to study foreign language.
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [How to use](#how-to-use)
* [Screencast](#screencast)
* [Screenshots](#screenshots)

## General info

Aim of the language is to help people learn vocabulary of a foreign language. User gets randomized words from a list and has to give the corresponding word in a chosen language. For example there's a word "dog" and the user has to input "koira".
User gets points for each correct word.

## Technologies
Technologies used in this project:
* React
* Express/Node.js
* MySQL Database

## How to use
To use this app just click the Heroku link below this section. 
Or if you want to try this on your own computer you'll need to create an SQL database and change the url variable in frontend/src/AdminView.js and frontend/src/UserView.js to: http://localhost:3010/vocabulary
Then just hit the basic node index.js in the root folder and npm run build npm start in the frontend folder in CMD

You'll also need to create .env file where you specify the following:
```
DB_HOST = 
DB_USER = 
DB_PASSWORD = 
DB_DB = 
```
After this you'll need to create the table and insert something into it. Here's a ready made template for it.
```
CREATE TABLE vocabulary(id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
finnishWord VARCHAR(100) NOT NULL, 
englishWord VARCHAR(100) NOT NULL, 
category VARCHAR(100) NOT NULL);
INSERT INTO vocabulary(finnishWord, englishWord, category) VALUES("kirja", "book", "object");
INSERT INTO vocabulary(finnishWord, englishWord, category) VALUES("ikkuna", "window", "object");
INSERT INTO vocabulary(finnishWord, englishWord, category) VALUES("auto", "car", "object");
INSERT INTO vocabulary(finnishWord, englishWord, category) VALUES("kahvi", "coffee", "beverage");
INSERT INTO vocabulary(finnishWord, englishWord, category) VALUES("tee", "tea", "beverage");
INSERT INTO vocabulary(finnishWord, englishWord, category) VALUES("omena", "apple", "fruit");
```

## Screencast
https://youtu.be/Fug_9iuMgTQ

## Screenshots

**User view**

![image](https://user-images.githubusercontent.com/72989851/149254964-aa821361-0b55-4944-83a2-7a348efbecae.png)

**Admin view**

![image](https://user-images.githubusercontent.com/72989851/149255005-2bc49641-5dfe-485d-834c-71d5a2be406e.png)
