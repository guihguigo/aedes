#!/bin/bash
docker build -t guihguigo/aedes:$BUILD_TAG docker_tomcat
docker login -e $DOCKER_HUB_EMAIL -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD
docker push guihguigo/aedes:$BUILD_TAG


docker build -t guihguigo/aedes:$BUILD_TAG nginx
docker push guihguigo/aedes-public:$BUILD_TAG

