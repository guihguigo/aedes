FROM redspark/oracle-jdk:1.8

COPY aedes.properties /config/aedes.properties
ADD aedes.jar /opt/aedes.jar
ENV SPRING_CONFIG_NAME file:/app-config/aedes-prod.properties

EXPOSE 8080

CMD java -Xms256M -Xmx512M -Dspring.profiles.active=PRODUCAO -Duser.timezone=America/Sao_Paulo -jar /opt/aedes.jar --spring.config.location=classpath:producao.properties 
