function blobCreator(songObj,scale) {
    if (scale==undefined){
      scale = 1;
    }
    for (prop in songObj){
      if (prop == 0.0){
        prop = 0.001;
      }
    }

  //  console.log("Two script running",songObj)
    song_id = songObj.id;
    energy = songObj.energy;
    valence = songObj.valence;

  //Creates the div where the blob will be placed
    var newDiv = document.createElement("div");


var two = new Two({
    type: Two.Types.svg,
    fullscreen: false,
    width: 300*scale, 
    height: 300*scale,
    id: "two-"+songObj.id,
    frameCount: 30
  }).appendTo(newDiv);
  newDiv.classList = "two";
  var mass = songObj.tempo;
  var radius = (two.height / 6)*scale;
  //var strength = 0.0625;

  //Sets speed of animation:
  var strength =Math.pow(songObj.tempo,0.1)
 // console.log(strength);
  var drag = 0.0;

  var background = two.makeGroup();
  var foreground = two.makeGroup();

  var physics = new Physics();
  var points = [];
  var i = 0;

  var n = 0;
  var peak = 0;
  var reverse = false;

  //Sets number of points
  Two.Resolution = songObj.energy*50+3

  for (i = 0; i < Two.Resolution; i++) {

    //To create the values for the peaks of the animation. for example -> 0   0.25   0.5   0.75   1   0.75   0.5 ...
    if (reverse === false){
      if (n+1/songObj.time_signature>1) {
        reverse = true;
        n=0;
      }
      else {
        n+=1/songObj.time_signature;
        peak = n;
      }
    }
    else {
      if (n+1/songObj.time_signature>1) {
        reverse = false;
        n=0;
      }
      else {
        n+=1/songObj.time_signature;
        peak = 1-n;
      }
    }
    //Changes the difference between the peaks
    peak = peak * 0.3 

    var pct = i / Two.Resolution;
    var theta = pct * Math.PI * 2;

    var ax = radius * Math.cos(theta);
    var ay = radius * Math.sin(theta);

    var variance = Math.pow(1-energy,0.2);
    var bx = variance * ax;
    var by = variance * ay;
    //console.log(beatsArray[i]);
    var origin = physics.makeParticle(mass, ax, ay)
    var particle = physics.makeParticle(peak * mass * 0.66 + mass * 0.33, bx, by);
    var spring = physics.makeSpring(particle, origin, strength, drag, 0);

    origin.makeFixed();

    particle.shape = two.makeCircle(particle.position.x, particle.position.y, 1*scale);
    particle.shape.noStroke().fill = '#000';
    particle.position = particle.shape.translation;

    foreground.add(particle.shape)
    points.push(particle.position);

  }

  var outer = new Two.Path(points, true, true);
  var color = getColor();
  outer.stroke = color.toString();
  outer.noStroke()
  outer.fill = color.toString(0.9);
  outer.scale = 1.75;
  outer.linewidth = 1*scale;

  background.add(outer);

  var inner = new Two.Path(points, true, true);
  inner.noStroke();
  inner.fill = getColor().toString();
  inner.scale = 1.25;

  background.add(inner);
  // newDiv.id = songObj.key;
  // console.log(two,two.id)
  //two.renderer.domElement.style.background = 'url(' + generateGrid() + ') center center';

  resize();

  

  two
    .bind('resize', resize)
    .bind('update', function() {
      physics.update();
    })
    .play();
    
    var startMotion = true;
    setInterval(function(){
      if (startMotion === true){
      two.bind('resize', resize).pause()
      startMotion = false;
      } 
    },3500);

    var audioElem = document.getElementById("audio"+songObj.id);

    $(two.renderer.domElement).contextmenu(function(e) {
      e.preventDefault()
     // console.log( "Handler for .contextmenu() called.", songObj);
    });
      
    $(window).keypress(function (e) {
        if (e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault()
          console.log('Space pressed')
          two.bind('resize', resize).play();
        }
      })
      $(window).keypress(function (e) {
        if (e.key === 'p' || e.key === 'P') {
          e.preventDefault()
          console.log('Space pressed')
          two.bind('resize', resize).pause();
        }
      })

 
  
        $(two.renderer.domElement).mouseenter(function(){
          if (startMotion === false){
            two.bind('resize', resize).play();

            //So it doesn't try to play the music without user interaction (which gives error)
            if(audioElem.muted ===false)
            {audioElem.play()}
          }
          
          
        })
        $(two.renderer.domElement).mouseleave(function(){
          audioElem.pause()
          two.bind('resize', resize).pause();
        })
  


  function resize() {
    background.translation.set(two.width / 2, two.height / 2);
    foreground.translation.copy(background.translation);
  }

  function getColor() {
    if (songObj.key == 0 || songObj.key == 1) {
      hex = '#c24cf6'; //violet
    }
    else if (songObj.key == 2 || songObj.key == 3) {
      hex = '#7122fa'; //indigo
    }
    else if (songObj.key == 4) {
      hex = '#03dddc'; //azure
    }
    else if (songObj.key == 5 || songObj.key == 6) {
      hex = '#7fff00'; //green
    }
    else if (songObj.key == 7 || songObj.key == 8) {
      hex = '#fef900'; //yellow
    }
    else if (songObj.key == 9 || songObj.key == 10) {
      hex = '#ff5f01'; //orange
    }
    else {
      hex = '#f21a1d'; //red
    }

    var color = {
      hex: hex,
      toString: function(a) {
        if (a) {
           return hex+(a*100)
        }
        return hex
 
      }
    };
    return color;
  }
  return newDiv;

}