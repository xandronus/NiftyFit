.env
```
DB_CONN="{mongo connection string}"
API_KEY="{INSERT_API_KEY_HERE}"
```

## TODO
* components/redeemhistory.js -> put api key into react env file

## Build and Run

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

To run SSL version:
```bash
npm run https
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/health](http://localhost:3000/api/health). 

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.