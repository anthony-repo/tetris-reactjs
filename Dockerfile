FROM node:18-alpine3.15
WORKDIR /tetris
ENV PATH="./ode_modules/.bin:$PATH"
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]