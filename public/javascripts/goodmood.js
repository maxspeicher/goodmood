(function() {

  var $w = $(window);
  var currentOffset;
  var waypoint;
  var waypoints = [];
  var windowHeight;

  $.loadCardImgAsync = function(cardCssClass, imgSrc) {
    var asyncImg = new Image();

    asyncImg.onload = function() {
      $('.' + cardCssClass + ' > .mdl-card__title').addClass('bg-img');
    };
    asyncImg.src = imgSrc;
  };

  $.registerWaypoint = function($element, func) {
    waypoints.push({
      t: $element.offset().top, // top
      b: $element.offset().top + $element.outerHeight(), // bottom
      func: func
    });
  };

  checkWaypoints = function() {
    var i = waypoints.length;

    while (i--) {
      waypoint = waypoints[i];

      if (waypoint.t < currentOffset + windowHeight && waypoint.t > currentOffset
        || waypoint.b > currentOffset && waypoint.b < currentOffset + windowHeight) {
        waypoint.func();
        waypoints.splice(i,1);
      }
    }
  };

  $(function() {
    currentOffset = $w.scrollTop();
    windowHeight = $w.height();
    checkWaypoints();

    $w.on('resize', function() {
      currentOffset = $w.scrollTop();
      windowHeight = $w.height();
    });

    $w.on('scroll', function() {
      currentOffset = $w.scrollTop();
      checkWaypoints();
    });
  });

})();
