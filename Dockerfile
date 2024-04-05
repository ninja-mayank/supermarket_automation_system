FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN npx prisma generate
RUN npm run build
CMD ["npm","run","dev"]