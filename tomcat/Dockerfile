FROM java:8

ADD aedes.properties /usr/share/config/
ADD ./server/target/aedes.jar /opt/aedes.jar
ENV JAVA_OPTS="-Dspring.profiles.active=PRODUCAO -Duser.timezone=America/Sao_Paulo"
ENV AEDES_CONFIG_LOCATION file:/usr/share/config/aedes.properties
ENV aedes.config.location file:/usr/share/config/aedes.properties
