<h1 align="center">Digidex</h1>
<br>

# Description
A responsive full stack digimon search application built on Next.js and Node.js.
<br>
<br>

# Development Stacks

<div>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-339933?style=for-the-badge&logo=typescript&color=black" />
  </a>
   <a href="https://pt-br.reactjs.org/docs/getting-started.html">
    <img src="https://img.shields.io/badge/React-339933?style=for-the-badge&logo=react&color=black" />
  </a>
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/next.js-339933?style=for-the-badge&logo=next.js&color=black" />
  </a>
    <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/tailwindcss-339933?style=for-the-badge&logo=tailwindcss&color=black" />
  </a>
    <a href="https://docs.npmjs.com/">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=black" />
  </a>
    <a href="https://www.fastify.io/">
    <img src="https://img.shields.io/badge/fastify-339933?style=for-the-badge&logo=fastify&color=black" /> 
  </a>
    <a href="https://mongoosejs.com/">
    <img src="https://img.shields.io/badge/mongoose-339933?style=for-the-badge&logo=mongoose&color=black" /> 
  </a>
    <a href="https://www.mongodb.com/docs/">
    <img src="https://img.shields.io/badge/mongodb-339933?style=for-the-badge&logo=mongodb&color=black" />
  </a>
  </a>
    <a href="https://www.mongodb.com/docs/">
    <img src="https://img.shields.io/badge/jest-339933?style=for-the-badge&logo=jest&color=black" />
  </a>
  </a>
    <a href="https://www.mongodb.com/docs/">
    <img src="https://img.shields.io/badge/cypress-339933?style=for-the-badge&logo=cypress&color=black" />
  </a>	
</div>
<br>

# Instructions

You can search for Digimon by name and/or level. 

The search button will not be accessible until you type something into the search bar or choose a level.

After a search you can also get all the digimons again by clicking the digimon logo.

You can browse the pages and choose how many digimon you want per page.

If you scroll too far down, you can quickly go back to the top by clicking the button that appears in the bottom right corner.


<br>

*IMPORTANT: Digimons may take a while to appear if you are on the deployed app. Just wait a litte!

This could happen because the server that the api is hosted disables it when its inactive for a few time.

<br>

# Deployed application

Access the app on Vercel clicking <a href="https://digidex.vercel.app/">here<a/>.

<br>

# Running the application locally
### Running Server

```bash

# Install dependencies
$ npm install

## Create env file

- DATABASE_URL=mongodb://USER:PASSWORD@HOST:PORT/DATABASE
- PORT="set a api port" (optional)

# Seed the tables 
$ npm run db:reset

# Run the application
$ npm run start

# the server app will run at port:3333 - access <http://localhost:3333>
```

### Running Web

```bash

# Install dependencies
$ npm install

## Create env.local file
- NEXT_PUBLIC_API_URL: http://localhost:3333
	
# Run the application
$ npm run start

# the web app will run at port:3000 - access <http://localhost:3000>
```

<br>

# Tests
### Running on Server

```bash
$ npm run test
```

### Running on Web

```bash
$ npm run dev
$ npm run cypress:run
Or
$ npm run cypress:open
```

<br>

## Server Application Funcionalities

<div align=right>
	<h4>V 1.0</h4>

</div>

Login Route (/digimon):
- [x] GET - all, by name and/or by level.

<br>
      
## WEB Application Funcionalities

<div align=right>
	<h4>V 1.0</h4>

</div>

Home Page (/):
- [x] Search Digimon.
- [x] Pagination.
- [x] Up button.

<br>

## Status

<h3> 
	🚧  Finished Project 🚧
</h3>
