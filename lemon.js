global.fetch = require('node-fetch');
const tf = require('@tensorflow/tfjs');
const mobilenet = require('@tensorflow-models/mobilenet');
const fs = require('fs');

const {createCanvas, Image} = require('canvas');
const canvas = createCanvas(500, 500);
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'https://thevegan8.com/wp-content/uploads/2019/04/vegan-lemon-cookies3.jpg';
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
