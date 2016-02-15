FROM tomcat:8.0.30-jre8

ADD aedes.properties /usr/share/config/
ADD settings.xml /usr/local/tomcat/conf/
ADD tomcat-users.xml /usr/local/tomcat/conf/
ADD aedes.war /usr/local/tomcat/webapps/aedes.war
ENV JAVA_OPTS="-Dspring.profiles.active=PRODUCAO -Duser.timezone=America/Sao_Paulo"
ENV AEDES_CONFIG_LOCATION file:/usr/share/config/aedes.properties
ENV aedes.config.location file:/usr/share/config/aedes.properties

ENTRYPOINT ["catalina.sh", "run"]
