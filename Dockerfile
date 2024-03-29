FROM    node:18-alpine
WORKDIR /news-aggregator/
COPY    public/ /news-aggregator/public
COPY    src/ /news-aggregator/src
COPY    package.json /news-aggregator/
RUN     npm install
CMD     ["npm", "start"]
