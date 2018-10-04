# graphql-POC
A POC on graphql usage with server-side design using node and express.

### Prerequisites
You need to install node and npm - "https://nodejs.org/en/download"

Steps:
1. Clone the repository.
2. cd into "server" folder
```
"cd server"
```
3. Run command - "node app"
```
"node app"
```
4. Once the info comes up - 
```
    "now listening for requests on port 2020...
     connected to database..."
```     
5. Go to this url - "http://localhost:2020/graphql"
6. Execute a test query in the graphql UI (GraphiQL), for example: - 
     
```
      {
          author(id:"5ba6641740bc7f6bede7e93a"){
             name
             age
             book{
                 name
                 genre
             }
          }
       } 
```

