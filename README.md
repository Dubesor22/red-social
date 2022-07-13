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

### Explore view

[![imagen-feed.jpg](https://i.postimg.cc/25jdJCqG/imagen-feed.jpg)](https://postimg.cc/VJTb0QW0)

### Post view

![image](https://user-images.githubusercontent.com/76620777/170822055-ac686a28-7d5b-4d44-b8d3-a028521534d8.png)

### Nested comments

![image](https://user-images.githubusercontent.com/76620777/170822065-64622f43-5f70-48c2-9503-0e1b80575fd2.png)

### Profile view

![image](https://user-images.githubusercontent.com/76620777/170822076-18741eef-ba2b-4750-b468-e7e9561a6a71.png)

### Real-time private messenger

![image](https://user-images.githubusercontent.com/76620777/170822084-89a9d3ac-22ed-4a92-ab58-9b0af878e03e.png)

### Search view

![image](https://user-images.githubusercontent.com/76620777/170821986-49d2a93a-5486-47fc-885e-37c0d3f628f3.png)
