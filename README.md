# haddock-test

Hello! Here is my proposal taking into account the info of the test. I made an API with several endpoints that try to make the functionalities requested.
Things to take into account:
- It has as well a postman collection with the endpoints to test them.
- There are tests for some of the endpoints.

## Endpoints
The endpoints are the following:

### GET
/get-products - to get all the products
<br />
/get-promotions - to get all the promotions

### POST
/order-products - send the items ordered and then receive as a response the total price
<br />
/create-new-products - create new products (can be one or more)
<br />
/add-promotions - create new promotions (can be one or more)

### PUT
/modify-promotion - modify a promotion

### DELETE
/delete-products - deletes one or more products
<br />
/delete-promotions - deletes one or more promotions

## Installation
You need to download the repo and do a `npm install` in the root folder
If you want to use the postman collection you just need to take that json with the name 'haddock-API.postman_collection' and export it to postman

## Notes & features that need to be done in the future
Due to the limited time I had I had to prioritize which elements should be quick wins to have it in the API. However, there are several things I have recorded to improve it in the future.
- Improve error handling - give more information when there is an error
- Add more unit testing
- Improve control of the body requests (control which parameters are not allowed and send that info to the response)
