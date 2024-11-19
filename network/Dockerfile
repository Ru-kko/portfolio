FROM nginx:alpine

ENV APP_DOMAIN=
ENV CLIENT=
ENV CMS=


COPY ./nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]