# Fullstack React, Node Website Boilerplate

This is a very basic fullstack react, node boilerplate setup, since I could not find any good ones. Really made this for myself to save me some time when starting new projects, setup should be pretty straight forward. I should also probably turn this into a docker, but don't really see it being worth the effort.
Uses fastify for the backend API.

## Deployment

```
  client/
    npm run build
     -> copy build files into nginx build folder
         sudo systemctl restart nginx

  server/
    -> copy entire folder into VPS (ex: ~/server)
        npm i
            pm2 start index.js (you need to install pm2 on VPS for this)

  nginx: // (make your own webserver setup beforehand),
    proxy_pass /api/ -> http://localhost:port
```

### Comes with a very basic UI, which tells you whether everything is properly configured or not

![App Screenshot](https://i.imgur.com/QIWexrz.png)
