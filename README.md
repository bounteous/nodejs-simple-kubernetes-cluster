# nodejs-simple-kubernetes-cluster

#### Setup

NodeJS version must be **>=v10.x**
Docker Compose version must be **>=1.25**

```
docker-compose up
```

```
npm install
```

```
npm run start:watch
```

#### Usage examples

```
curl -i -X POST -H "Content-Type: application/json" -d "{\"email\":\"alex@gmail.com\"}" http://localhost:2424/user
```

```
curl -X GET -H "Content-Type: application/json" http://localhost:2424/user\?email\=alex@gmail.com
```