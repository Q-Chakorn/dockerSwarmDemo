--VsCode shortkey 
- shift + option + ลูกศร  = copy row
- cmd + x = delete row
- option + ลูกศร = move row
- click + cmd + d = multi select


- create app.js
- npm init -y
- npm i express
- test "node app.js"

- create image ""
- docker build -t dockerswarmdemo:1.0 .
- docker run -d -p 91:91 --name demoswarm dockerswarmdemo:1.0
- curl http://localhost:91


#create docker swarm as cluster
- docker swarm init
- docker service create --replicas 2 --name nodeswarm --publish 91:91 dockerswarmdemo:1.0

help:
docker image
docker rmi <image_id>
docker ps
docker rm <contrainer_id>
docker service ls
docker service rm <service_id>

docker commit <container_id> chakorn/dockerswarmdemo:1.0

--github
- git init
- git add .
- git status
- git commit -m "..."
- git remote add origin http.....
- git push -u origin main