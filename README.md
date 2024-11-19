# File Metadata Microservice

This is a simple backend microservice that allows the user to upload a file which returns a JSON object containing the file name, size and type. 

## Features
- ==multer== used to receive a req.file response when user makes POST request - req.file contains the file's metadata.

## Example response

POST /api/fileanalyse ->

```
{
    "name":"Screenshot 2024-11-19 at 9.14.14 AM.png",
    "type":"image/png",
    "size":229286
}

```