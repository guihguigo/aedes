FROM tomcat:8.0.30-jre8

ADD aedes.properties /usr/share/config/
ADD settings.xml /usr/local/tomcat/conf/
ADD tomcat-users.xml /usr/local/tomcat/conf/
ADD aedes.war /usr/local/tomcat/webapps/aedes.war
ENV JAVA_OPTS="-Dspring.profiles.active=PRODUCAO -Duser.timezone=America/Sao_Paulo"
ENV SPRING_CONFIG_PATH file:/app-config/aedes-prod.properties

CMD ["export", "CATALINA_OPTS=-Dspring.config.location=file:/app-config/aedes-prod.properties"]

ENTRYPOINT ["catalina.sh", "run"]
