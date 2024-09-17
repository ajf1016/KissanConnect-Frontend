 # The whole url path of the server  to chek in the postman 
 1. Authentication & OTP
  - Login (Send OTP)

  - URL: `http://localhost:5000/auth/otp`
    Method: POST
    Body:
    json
{
  "phoneNumber": "1234567890"
}
Validate OTP and Login

URL: http://localhost:5000/auth/
Method: POST
Body:
json
Copy code
{
  "phoneNumber": "1234567890",
  "otp": "1234"
}
Logout

URL: http://localhost:5000/auth/logout
Method: GET
2. User Management
Get Current User Info

URL: http://localhost:5000/auth/user
Method: GET
Create/Update User Profile

URL: http://localhost:5000/auth/add
Method: POST
Body:
json
Copy code
{
  "name": "John Doe",
  "isWholesaler": true,
  "isFarmer": false
}
3. Farmer's Product Management
Get Farmer's Products

URL: http://localhost:5000/farmer/products
Method: GET
Add Product (Farmer)

URL: http://localhost:5000/farmer/product/add
Method: POST
Body:
json
Copy code
{
  "item": "Wheat",
  "quantity": 100,
  "price": 500
}
Delete Product (Farmer)

URL: http://localhost:5000/farmer/product
Method: DELETE
Body:
json
Copy code
{
  "item": "Wheat"
}
4. Order Management (For Wholesalers and Farmers)
Place Order (Wholesaler)

URL: http://localhost:5000/wholesaler/orders
Method: POST
Body:
json
Copy code
{
  "wholesalerId": "1234567890",
  "farmerId": "0987654321",
  "product": {
    "item": "Wheat",
    "quantity": 100
  },
  "date": "2024-09-17T10:00:00Z",
  "quantity": 100
}
Get Orders (For Farmer or Wholesaler)

URL: http://localhost:5000/wholesaler/orders
Method: GET
Complete Order

URL: http://localhost:5000/wholesaler/orders/complete
Method: PATCH
Body:
json
Copy code
{
  "_id": "orderId"
}
5. Get Farmers (For Wholesalers)
Get All Farmers
URL: http://localhost:5000/wholesaler/farmers
Method: GET