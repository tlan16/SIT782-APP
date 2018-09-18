# SIT782-app
This is for SIT737 assignment 2 at Deakin University for Trimaster 1, 2018

## Documentation
[Via Postman](https://documenter.getpostman.com/view/90962/RW89JTyQ)

## Run
### Docker
**Make sure port `8080` is *not* occupied**. Otherwise, you'll need to update `docker-compose.yml`

Make sure no active container(s)
```
docker-compose down
```
Build
```
docker-compose build --no-cache
```
Run
```
docker-compose up
```

### Node
Install Dependencies
```
yarn
```
Run
```
yarn start
```
