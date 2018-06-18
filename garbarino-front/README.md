# Garbarino Challenge

This is a simple app to list a json of products and be able to add products to database. It's powered by React.js in front-end and Node.js in the back-end.


## Description

The UI of this app counts with a custome made .css for each small .jsx component. I went ahead and made a little change in the original design and decided to add icons instead of category names to make the interface easier to read. The back is an Express server with a Mongo data base to keep track of all new products added. In future additions, I'll use react-router to handle the routes from page to pages.

### Installation

#### Setting up back-end

1. Go ahead and clone the repo
2. Navigate to the directory 'garbarino-back'
3. Run the command `npm install`
4. Open a new terminal window on the same directory and run `mongod`
5. Then go back to the other terminal and insert `node app.js` and wait for confirmation.
Leave both commands running.

#### Setting up front-end
1. Navigate to the directory 'garbarino-front'
2. Run command `npm install`
3. Run command `npm start` and open 'localhost:3000' in your browser.
Enjoy!



### Future Features

* When clicked on a product, you'll be redirected to a detail page with all the info of said product.
* Be able to show a real picture of the product.
* Have a functioning search-bar and filters by category.

