# URL Shortener (Backend)
- long url --> short url


## objective
- generate Short Url 
- onclick short url redirect to main url
- Get Analytics of number of times visited







- npm init
### packages
- npm i express  
- npm i mongoose   <!-- database connectivity -->
- npm i nodemon    <!-- auto re render when changes occur -->
- npm i shortid     <!-- to generate short ids -->



### nanoid
- **install:** npm i nanoid 
- to generate short ids
- const { nanoid } = require('nanoid');     <!-- requiring as object -->
- const shortId = nanoid(size)                  <!-- here u can keep size=8 -->