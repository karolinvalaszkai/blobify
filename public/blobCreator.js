
//let blobCreator = window.blobCreator
function blobCreator(songObj) {
    for (prop in songObj){
      if (prop == 0.0){
        prop = 0.001;
      }
    }

    //console.log("Two script running",songObj)
    song_id = songObj.id;
    //pitches = songObj.pitches;
    energy = songObj.energy;
    valence = songObj.valence;
    //pitches.push.apply(pitches,pitches);
    //pitches.push.apply(pitches,pitches);




  //Creates the div where the blob will be placed
    //var elem = document.getElementById(songObj.id)
    var newDiv = document.createElement("div");

    //elem.appendChild(newDiv);

var two = new Two({
    type: Two.Types.svg,
    fullscreen: false,
    width: 300, 
    height: 300
  }).appendTo(newDiv);

  var mass = 100*Math.sqrt(energy);
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
  Two.Resolution = Math.round(35*energy)+3;


  for (i = 0; i < Two.Resolution; i++) {
    //console.log(Two.Resolution)
    var pct = i / Two.Resolution;
    var theta = pct * Math.PI * 2;

    var ax = radius * Math.cos(theta);
    var ay = radius * Math.sin(theta);

    var variance = Math.random() * (1-energy) + 0.6;
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
  var color = getRandomColor();
  outer.stroke = color.toString();
  outer.fill = color.toString(0.5);
  outer.scale = 1.75;
  outer.linewidth = 1;

  background.add(outer);

  var inner = new Two.Path(points, true, true);
  inner.noStroke();
  inner.fill = getRandomColor().toString();
  inner.scale = 1.25;

  background.add(inner);

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
    },2000);

    var audioElem = document.getElementById("audio"+songObj.id);
    
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

  function getRandomColor() {
    if (energy<0.70 && energy>0.65){
      r= Math.floor(1 * 255)
      g = Math.floor(1 * 255)
      b = Math.floor((1-energy)* 255)

    }

    else if (energy<0.65 && energy>0.55){
      r= Math.floor(0 * 255)
      g = Math.floor(energy * 255)
      b = Math.floor((1-energy)* 255)

    }
    else {
      r = Math.floor(energy * 255)
      g = Math.floor(0.3 * 255)
      b = Math.floor((1-energy) * 255)
    }

    var color = {
      r: r,
      g: g,
      b: b,
      toString: function(a) {
        if (a) {
          return 'rgba('
            + color.r + ','
            + color.g + ','
            + color.b + ','
            + a + ')';
        }
        return 'rgb('
          + color.r + ','
          + color.g + ','
          + color.b + ')';
      }
    };
    return color;
  }
  return newDiv;

}