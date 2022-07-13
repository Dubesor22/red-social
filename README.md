# Stratos (Social Network MERN stack)

Stratos is a fully-featured social media web application, built with the MERN stack.

[![Stratos.gif](https://i.postimg.cc/8zQ68NYW/Stratos.gif)](https://postimg.cc/LnDXLK26)

## Description

A proyect from the Bridge Tech Academy.

![link to the required topics](https://docs.google.com/document/d/1s5IuLkO-3MIiZgEr53JkeZJXWtbL4j2IHYmA1Q0gJmM/edit)

[mern.jpg](https://postimg.cc/vD9H865p)

## Deploy

Deployed at: https://stratos-backend.herokuapp.com/

## Features

- Create, read, update and delete posts
- Like and unlike posts
- Create, coments to, read.
- Sign up and login using JWT for authentication
- View profiles of users and browse through their posts, liked posts
- Infinite scrolling
- Comment count and date created
- Search for posts by their title
- Fully responsive layout
- Update bio which can be viewed by other users

## Installation and usage

1. Clone this repository

```
git clone https://github.com/Dubesor22/red-social
```

2. Install dependencies

```
npm install

```

3. clone the Backend

```
git clone https://github.com/Dubesor22/red-social-backend-mongo
```

4. Create .env in root directory

```

touch .env
```

5. Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/. The TOKEN_KEY is a secret key of your choosing, you can generate one at this site: https://randomkeygen.com/.

```
MONGO_URI=<YOUR_MONGO_URI>
TOKEN_KEY=<YOUR_TOKEN_KEY>
PORT=8080
```

6. Run the server

```
npm run server
```

7. Start a new terminal and run react's development server

```

npm start
```

## Screenshots

### Resgister / Login

![image](https://i.postimg.cc/9XqryVJg/register.jpg)
![image](https://i.postimg.cc/qMsqZwf8/login.jpg)

### Explore view

[![imagen-feed.jpg](https://i.postimg.cc/25jdJCqG/imagen-feed.jpg)](https://postimg.cc/VJTb0QW0)

### Post view

[![detail.jpg](https://i.postimg.cc/BZ892msZ/detail.jpg)](https://postimg.cc/nMtPJYCN)

### Profile view

[![profile.jpg](https://i.postimg.cc/BnkcVWvb/profile.jpg)](https://postimg.cc/RW1HWDKx)

### Testing

[![Test-Selenium.jpg](https://i.postimg.cc/FRY1WQmR/Test-Selenium.jpg)](https://postimg.cc/pht2r4mb)
