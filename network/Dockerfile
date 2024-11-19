FROM nginx:alpine

RUN mkdir -p /etc/ssl/certs

ARG SSL_CERTIFICATE
ARG SSL_KEY
ARG SSL_TRUSTED_CERTIFICATE

ENV CLIENT_PORT=80
ENV CMS_PORT=80
ENV APP_DOMAIN=
ENV CLIENT=
ENV CMS=
ENV CERTIFICATES_FOLDER=/etc/ssl

RUN mkdir -p ${CERTIFICATES_FOLDER}

RUN echo "$SSL_CERTIFICATE" > ${CERTIFICATES_FOLDER}/certificate.crt \
  && echo "$SSL_KEY" > ${CERTIFICATES_FOLDER}/certificate.key \
  && echo "$SSL_TRUSTED_CERTIFICATE" > ${CERTIFICATES_FOLDER}/certificate.ca.crt

COPY ./nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]