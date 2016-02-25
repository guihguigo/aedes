FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/conf.d/example_ssl.conf

COPY default.conf /etc/nginx/conf.d/default.conf
COPY front /usr/share/nginx/html

EXPOSE 80
