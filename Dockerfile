FROM ubuntu: latest

RUN aptitude update && aptitude install nodejs npm
RUN npm install -g yo grunt-cli gulp
RUN npm install -g generator-react-webpack
RUN 

