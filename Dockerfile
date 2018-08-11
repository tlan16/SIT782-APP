FROM node:8.11.3-stretch

# set work directory
WORKDIR /src

# copy project code over
ADD . .

# add os dependencies
RUN sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
	apt-get update && \
	apt-get install -y nasm make gcc-multilib && \
	rm -rf /var/lib/apt/lists/*

# install node packages
RUN npm install --quiet --loglevel=error

EXPOSE 8080

# build app
RUN ["npm", "run", "build"]

# entry point for docker
CMD ["npm", "run", "serve"]
