# Imagica

##### TODO - 
- Authentication
- MongoDB support - **Done**
- Express backend - **Done**
- Python based cron job (concurrent process) for sending out emails
- Elastic Search possibly replace with socketIO
- Redis

##### Getting Started -
1. ``` git clone https://github.com/rohitkeshav/pic-sy.git ```
2. ``` cd client ```
3. ``` npm install ```
4. ``` cd ../server ```
5. ``` npm install ```

###### Replace node with nodemon in root procfile to allow hot reloading
6. ```npm start```

##### Import Collections using mongoimport

1. mongoimport --db <DBname> --collection <CollectionName> --file <JSONFilePath>
    eg. mongoimport --db picsy --collection images --file images.json
