const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const assetsFolder = path.resolve(__dirname, '..', 'assets', 'videos');

const files = fs.readdirSync(assetsFolder);

class Assets {
   constructor(category) {
      this.category = category;
   }

   getCapturar() {
      return files;
   }
   
   getIdentificar() {
      return files;
   }
   
   getCompartilhar() {
      return files;
   }
}

app.listen(3333);

module.exports = Assets;