FROM java:8

COPY aedes.properties /usr/share/config/
COPY aedes.jar /opt/aedes.jar

ENV JAVA_OPTS="-Dspring.profiles.active=PRODUCAO -Duser.timezone=America/Sao_Paulo"
ENV AEDES_CONFIG_LOCATION file:/usr/share/config/aedes.properties
