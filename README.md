This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Configuring Proxy

* Here used a Docker Nginx reverse proxy server to expose the application
* Initially configure the Nginx proxy file 
```
server {
  listen 80;
  listen [::]:80;
  server_name localhost;

  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
  }

  location / {
    proxy_pass http://x.x.x.x:xxxx/api;
  }

  error_page 500 502 503 504 /50x.html;
  location = /50x.html {
    root /usr/share/nginx/html;
  }
}
```
## How to run this app using Docker
```
git clone https://github.com/RatulMaharaj/react-flask-app.git

cd react-flask-app

docker build -t <image_name> .

docker run -d -it --name <container_name> -p <forward_portnumber>:<application_port_number> <image_name>

```

## How to run this app using Docker Compose

```
docker compose up -d
```

## How to run this app using Docker Swarm

### Step 1:
* Initializing a cluster of Docker Engines in swarm mode

```
docker swarm init --advertise-addr <manager-node-IP>
```
 Example: docker swarm init --advertise-addr x.x.x.x

### Step 2:
* Now, add a worker node by copying the command of the “swarm init” and paste the output onto the worker node:

```
docker swarm --token xxxx-xxxxx-xxxxxx-xxxxx
````
### Step 3:
* Deploy the application using the docker stack
```
docker stack deploy -c docker.stack.yml <stack-name>
```
### Step 4:
* List the tasks in the stack
```
docker stack ps <stack_name>
```
* To inactivate the swarm
```
docker swarm leave
```
