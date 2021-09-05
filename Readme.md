# Demo server:

This is a `Readme` file, every repository will have one, it explains details about the repository, about the technologies used in it, as well as details about the service and the API it has to communicate with the outside world.

## To run the server:

- Clone the repo
```shell
git clone git@github.com:altooro/express-demo-server.git
```

- Run using docker compose

```shell
docker-compose up
```

## Quick explanation:

- The server has the following endpoints:
  - `GET`: `/` --> which returns the message _"Welcome to demo express server"_
  - `GET`: `/users` --> This returns a map with our fake users
  - `GET`: `/user/{id}` --> This returns a specific users from our map based on the `id`:
    To use it you need to send an `id` in the GET request: `users/1`
    If the `id` exists you will get their details:
    ```json
    {
      "name": "John Doe",
      "age": 25
    }
    ```
    
  - `POST`: `/users/{id}` --> This request adds a user to our map:
    To use it, you need to send an `id` in the URL like: `users/4`
    Then also send a request body in the following structure:
    ```json
    {
      "name": "Jane Doe",
      "age": 25
    }
    ```
 
- Our map initially when running the service starts with the following values:

```json
{
  "1": { "name": "John Doe", "age": 25 },
  "2": { "name": "Elizabeth Windsor", "age": 90 }
}
```
