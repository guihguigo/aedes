FROM java:8

ADD aedes.properties /config/aedes.properties
ADD aedes.jar /opt/aedes.jar
ENV AEDES_CONFIG_PATH file:/home2/app-configs/aedes.properties

EXPOSE 8080

CMD java -Xms256M -Xmx512M -Duser.timezone=America/Sao_Paulo -jar /opt/aedes.jar
