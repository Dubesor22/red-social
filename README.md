# Stratos (Social Network MERN stack)

Stratos is a fully-featured social media web application, built with the MERN stack.

Deployed at: https://stratos-backend.herokuapp.com/

[![Stratos.gif](https://i.postimg.cc/8zQ68NYW/Stratos.gif)](https://postimg.cc/LnDXLK26)

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

### Nested comments

![image](https://user-images.githubusercontent.com/76620777/170822065-64622f43-5f70-48c2-9503-0e1b80575fd2.png)

### Profile view

![image](https://user-images.githubusercontent.com/76620777/170822076-18741eef-ba2b-4750-b468-e7e9561a6a71.png)

### Search view

![image](https://user-images.githubusercontent.com/76620777/170821986-49d2a93a-5486-47fc-885e-37c0d3f628f3.png)

### Testing

[![Test-Selenium.jpg](https://i.postimg.cc/FRY1WQmR/Test-Selenium.jpg)](https://postimg.cc/pht2r4mb)
