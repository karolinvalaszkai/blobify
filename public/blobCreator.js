function blobCreator(songObj) {
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
    width: 300, 
    height: 300,
    id: "two-"+songObj.id,
    frameCount: 32
  }).appendTo(newDiv);

  var mass = songObj.tempo;
  var radius = two.height / 6;
  //var strength = 0.0625;

  //Sets speed of animation:
  var strength = energy;
  var drag = 0.0;

  var background = two.makeGroup();
  var foreground = two.makeGroup();

  var physics = new Physics();
  var points = [];
  var i = 0;

  //Sets number of points
  Two.Resolution = songObj.energy*50+3
  //var tempoArray = [...Array(parseInt(songObj.tempo)).keys()]

  for (i = 0; i < Two.Resolution; i++) {
    var pct = i / Two.Resolution;
    var theta = pct * Math.PI * 2;

    var ax = radius * Math.cos(theta);
    var ay = radius * Math.sin(theta);

    var variance = Math.pow(1-energy,0.2);
    var bx = variance * ax;
    var by = variance * ay;

    var origin = physics.makeParticle(mass, ax, ay)
    var particle = physics.makeParticle(Math.random() * mass * 0.66 + mass * 0.33, bx, by);
    var spring = physics.makeSpring(particle, origin, strength, drag, 0);

    origin.makeFixed();

    particle.shape = two.makeCircle(particle.position.x, particle.position.y, 1);
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
  outer.linewidth = 1;

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
    },3000);

    var audioElem = document.getElementById("audio"+songObj.id);

    $(two.renderer.domElement).contextmenu(function(e) {
     // e.preventDefault()
      console.log( "Handler for .contextmenu() called.", songObj);
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