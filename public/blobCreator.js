

function blobCreator(songObj,scale,type) {

  if (scale==undefined){
    scale = 1;
  }
  for (prop in songObj){
    if (prop == 0.0){
      prop = 0.001;
    }
  }

  song_id = songObj.id;
  energy = songObj.energy;
  valence = songObj.valence;

//Creates the div where the blob will be placed
  var newDiv = document.createElement("div");


var two = new Two({
    type: Two.Types.svg,
    fullscreen: false,
    width: 100*scale,
    height: 100*scale,
    id: "two-"+songObj.id,
    frameCount: 30
  }).appendTo(newDiv);
  newDiv.classList = "two";
  var mass = songObj.tempo;
  var radius = (two.height / 2)*scale;
  //var strength = 0.0625;

  //Sets speed of animation:
  var strength = songObj.tempo/150//Math.pow(songObj.tempo,0.01)
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

    var audioElem = document.getElementById(type+songObj.id);

    $(two.renderer.domElement).contextmenu(function(e) {
      e.preventDefault()
    });



   //Determine if a iPhone is used (and ipad mini)
    window.checkiPhone = function() {
      let check = false;
      check = (/iphone/).test
      (navigator.userAgent.toLowerCase());
      //(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

    if (window.checkiPhone()==false){
          // -----PLAY MUSIC ON HOVER---------
          $(two.renderer.domElement).mouseenter(function(e){
            e.preventDefault()
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
    }
    else {
        // -------PLAY MUSIC ON TOUCH FOR IPHONE ONLY (works best for force touch) -------
        var blobElement = two.renderer.domElement;

        Pressure.set(blobElement, {
       // $(two.renderer.domElement).pressure({
          start: function(event){
            // this is called on force start
            if (startMotion === false){
              two.bind('resize', resize).play();

              //So it doesn't try to play the music without user interaction (which gives error)
              if(audioElem.muted ===false)
              {audioElem.play()}
            }

          },
          end: function(){
            // this is called on force end
            audioElem.pause()
            two.bind('resize', resize).pause();
          },
          startDeepPress: function(event){
            // this is called on "force click" / "deep press", aka once the force is greater than 0.5
            var tooltip = document.getElementById("tooltip-"+songObj.id);
            let currentClass = tooltip.classList[1];
            tooltip.classList.remove(currentClass);
            tooltip.classList.add((currentClass === 'hidden'? 'visible' : 'hidden'));
          },
          endDeepPress: function(){
            // this is called when the "force click" / "deep press" end

          },
          change: function(force, event){
            // this is called every time there is a change in pressure
            // 'force' is a value ranging from 0 to 1
          },
          unsupported: function(){
            // NOTE: this is only called if the polyfill option is disabled!
            // this is called once there is a touch on the element and the device or browser does not support Force or 3D touch
          },

        },
        {only: 'touch'},
        {polyfillSpeedUp: 3000});

    }








  function resize() {
    background.translation.set(two.width / 2, two.height / 2);
    foreground.translation.copy(background.translation);
  }

  // CHARLES - FOURIER THEORY - 7 COLORS
  // function getColor() {
  //   if (songObj.key == 0 || songObj.key == 1) {
  //     hex = '#c24cf6'; //violet
  //   }
  //   else if (songObj.key == 2 || songObj.key == 3) {
  //     hex = '#7122fa'; //indigo
  //   }
  //   else if (songObj.key == 4) {
  //     hex = '#03dddc'; //azure
  //   }
  //   else if (songObj.key == 5 || songObj.key == 6) {
  //     hex = '#7fff00'; //green
  //   }
  //   else if (songObj.key == 7 || songObj.key == 8) {
  //     hex = '#fef900'; //yellow
  //   }
  //   else if (songObj.key == 9 || songObj.key == 10) {
  //     hex = '#ff5f01'; //orange
  //   }
  //   else {
  //     hex = '#f21a1d'; //red
  //   }

   // My own order
   function getColor() {
    if (songObj.key == 0) {
      hex = '#C031FF'; //C: violet
    }
    else if (songObj.key == 1) {
      hex = '#D983FF'; //C#: violet 60% opacity
    }
    else if (songObj.key == 2) {
      hex = '#6309FF'; //D: Indigo
    }
    else if (songObj.key == 3) {
      hex = '#A16BFF'; //D#: Indigo 60% opacity
    }
    else if (songObj.key == 4) {
      hex = '#03dddc'; //E: Azure
    }
    else if (songObj.key == 5) {
      hex = '#7fff00'; ///F: Green
    }
    else if ( songObj.key == 6) {
      hex = '#B2FF66'; //F#: indigo opacity
    }
    else if (songObj.key == 7) {
      hex = '#fef900'; //G: Yellow
    }
    else if (songObj.key == 8) {
      hex = '#FEFA9E'; //G#: Red
    }
    else if (songObj.key == 9) {
      hex = '#ff5f01'; //A: Orange
    }
    else if (songObj.key == 10) {
      hex = '#F4A580'; //A#: Orange
    }
    else if (songObj.key == 11) {
      hex = '#F21A1D'; //B: Red
    }
    else {
      hex = '#F21A1D'; //red
    }

  // The Rosicrucian Order 
  // function getColor() {
  //   if (songObj.key == 0) {
  //     hex = '#cdf506'; //C: yellow-green
  //   }
  //   else if (songObj.key == 1) {
  //     hex = '#00bb00'; //C#: green
  //   }
  //   else if (songObj.key == 2) {
  //     hex = '#00dfbe'; //D: Green-Blue
  //   }
  //   else if (songObj.key == 3) {
  //     hex = '#1300f2'; //D#: Blue
  //   }
  //   else if (songObj.key == 4) {
  //     hex = '#8220c5'; //E: Blue-Violet
  //   }
  //   else if (songObj.key == 5) {
  //     hex = '#c488c2'; //F: Violet
  //   }
  //   else if ( songObj.key == 6) {
  //     hex = '#c13f89'; //F#: Violet-Red
  //   }
  //   else if (songObj.key == 7) {
  //     hex = '#960104'; //G: Deep red
  //   }
  //   else if (songObj.key == 8) {
  //     hex = '#ff0000'; //G#: Red
  //   }
  //   else if (songObj.key == 9) {
  //     hex = '#ff5f01'; //A: Red-orange
  //   }
  //   else if (songObj.key == 10) {
  //     hex = '#ff8041'; //A#: Orange
  //   }
  //   else if (songObj.key == 11) {
  //     hex = '#feff00'; //B: Yellow
  //   }
  //   else {
  //     hex = '#f21a1d'; //red
  //   }

    // The Rosicrucian Order shades
  // function getColor() {
  //   if (songObj.key == 0) {
  //     hex = '#7fff00'; //C: yellow-green
  //   }
  //   else if (songObj.key == 1) {
  //     hex = '#07d950'; //C#: green
  //   }
  //   else if (songObj.key == 2) {
  //     hex = '#03dddc'; //D: Green-Blue
  //   }
  //   else if (songObj.key == 3) {
  //     hex = '#0a2df2'; //D#: Blue
  //   }
  //   else if (songObj.key == 4) {
  //     hex = '#7021BF'; //E: Blue-Violet
  //   }
  //   else if (songObj.key == 5) {
  //     hex = '#C488C2'; //F: Violet
  //   }
  //   else if ( songObj.key == 6) {
  //     hex = '#C13F89'; //F#: Violet-Red
  //   }
  //   else if (songObj.key == 7) {
  //     hex = '#941316'; //G: Deep red
  //   }
  //   else if (songObj.key == 8) {
  //     hex = '#ff0000'; //G#: Red
  //   }
  //   else if (songObj.key == 9) {
  //     hex = '#CC450B'; //A: Red-orange
  //   }
  //   else if (songObj.key == 10) {
  //     hex = '#FF8041'; //A#: Orange
  //   }
  //   else if (songObj.key == 11) {
  //     hex = '#feff00'; //B: Yellow
  //   }
  //   else {
  //     hex = '#ff0000'; //red
  //   }


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
