/**
 * Created by Burak on 18.12.2018.
 */

const colors = ['blue','green','red'];

const randomColor = () =>{
  return colors[Math.floor(Math.random()* colors.length)];
};

module.exports = randomColor;