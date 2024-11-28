# School-Management
Node JS Assignment
Postman Collection:
To test the APIs, you can create a Postman collection with the following requests:

Add School API:

Method: POST
URL: http://localhost:7000/api/v1/addSchool
Body:
json
Copy code
{
  "name": "Greenwood School",
  "address": "123 Main St, City, Country",
  "latitude": 40.7128,
  "longitude": -74.0060
}
List Schools API:

Method: GET
URL: http://localhost:7000/api/v1/listSchools?latitude=40.7128&longitude=-74.0060
