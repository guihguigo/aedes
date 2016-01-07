#!/bin/bash
docker build -t aedes/aedes-producao:$BUILD_TAG docker_tomcat
docker login -e $DOCKER_HUB_EMAIL -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD
docker push aedes/aedes-producao:$BUILD_TAG
# curl -X POST "http://187.33.39.86/hook/execute?token=teste&hook=aedes-producao&param=$BUILD_TAG"

export SSHPASS="aedes_key.pem" && sshpass -e ssh -tt ubuntu@ec2-54-201-125-213.us-west-2.compute.amazonaws.com "docker login -e infra@redspark.io -u redsparkinfra -p redsparkinfra && docker rm -f aedes-producao | true && docker pull aedes/aedes-producao:$1 && docker run -d --restart=always --name=seta -p 8090:8080 -v /home2/app-configs:/home2/app-configs aedes/aedes-producao:$1"

