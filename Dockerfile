FROM node:lts-bullseye

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .
# TODO: avoid using npm script
ENTRYPOINT ["npm", "run"]
CMD ["start"]