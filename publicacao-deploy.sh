#!/bin/bash
docker login -e $DOCKER_HUB_EMAIL -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD

docker build -t guihguigo/aedes-server:$BUILD_TAG tomcat
docker push guihguigo/aedes-server:$BUILD_TAG

docker build -t guihguigo/aedes-web:$BUILD_TAG nginx
docker push guihguigo/aedes-web:$BUILD_TAG

