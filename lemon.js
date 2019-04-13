global.fetch = require('node-fetch');
const tf = require('@tensorflow/tfjs');
const mobilenet = require('@tensorflow-models/mobilenet');
const fs = require('fs');

const {createCanvas, Image} = require('canvas');
const canvas = createCanvas(4000, 4000);
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Lemon-Whole-Split.jpg';
img.onload = () => {
  ctx.drawImage(img, 0, 0);
  const input = tf.browser.fromPixels(canvas);
  async function load() {
    const model = await mobilenet.load();
    // Classify the image.
    const predictions = await model.classify(input);
    
    console.log('Predictions: ');
    console.log(predictions);
  }
  load();
};
