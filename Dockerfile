# Utiliza la imagen base httpd:2.4-alpine
FROM httpd:2.4-alpine

# Copia el contenido de la aplicación desde el directorio local './dist/domus/' al directorio del servidor web '/usr/local/apache2/htdocs/'
COPY ./dist/mashup-carta-oferta/ /usr/local/apache2/htdocs/

# Copia el archivo de configuración personalizado 'httpd.conf' al directorio de configuración del servidor web
#COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf

# Lista los archivos y directorios en '/usr/local/apache2/htdocs/' para verificar la copia
RUN ls -la /usr/local/apache2/htdocs/

# Habilita el módulo de reescritura del servidor Apache comentando la línea relevante en 'httpd.conf'
#RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf

# Agrega la configuración adicional para incluir archivos '*.conf' en el directorio 'conf.d/'
#RUN { echo 'IncludeOptional conf.d/*.conf'; } >> /usr/local/apache2/conf/httpd.conf && mkdir /usr/local/apache2/conf.d

# Ajusta los permisos de los archivos copiados para el servidor web
RUN chown -R www-data:www-data /usr/local/apache2/htdocs/

# Elimina archivos temporales y caché de la construcción para reducir el tamaño de la imagen final
RUN rm -rf /usr/local/apache2/htdocs/temporary-file

# Limpia el caché de paquetes APK para reducir el tamaño de la imagen
RUN rm -rf /var/cache/apk/*

