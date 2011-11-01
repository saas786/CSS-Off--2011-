/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-iepp-cssclasses-teststyles-load
 */
;window.Modernizr=function(a,b,c){function y(a,b){return!!~(""+a).indexOf(b)}function x(a,b){return typeof a===b}function w(a,b){return v(prefixes.join(a+";")+(b||""))}function v(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=Object.prototype.toString,n={},o={},p={},q=[],r=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},s,t={}.hasOwnProperty,u;!x(t,c)&&!x(t.call,c)?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],c)};for(var z in n)u(n,z)&&(s=z.toLowerCase(),e[s]=n[z](),q.push((e[s]?"":"no-")+s));v(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e.testStyles=r,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+q.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
// Custom JS
(function (doc, win) {
  /**
   * Gets current scroll height of window
   * @returns {Integer} Scroll height of window
   */
  function getScrollTop() {
    var body = doc.body,
        docElt = document.documentElement;
    if (body && body.scrollTop) return body.scrollTop;
    if (docElt && docElt.scrollTop) return docElt.scrollTop;
    if (win.pageYOffset) return wind.pageYOffset;
    return 0;
  }
  var scrollSpeed = 10,
      lastScrollTimeout;

  /**
   * Helper method for my current scripting needs
   * @param {String} id Id of element to grab from the DOM
   * @returns {Object} Object with select DOM methods
   */
  var $ = function (id) {
    var elt = id;
    if( (typeof id).toLowerCase() === "string" ) {
      elt = doc.getElementById(id);
    }

    return {
      /**
       * Bind event to DOM Level 0 of element (there can only be one)
       * @param {String} evt Name of event to bind to
       * @param {Function} fn Function to bind to event
       */
      'bind': function (evt, fn) {
        elt[evt] = function (e) {
          var eObj;

          // Find the true event
          e = e || window.event;

          // Give our custom object a way to stop default
          eObj = {
            'info': e,
            'preventDefault': function () {
              // IE bindings
              e.cancelBubble = true;
              e.returnValue = false;

              // Everything else bindings
              if( e.preventDefault ) {
                e.preventDefault();
              }
              if( e.stopPropagation ) {
                e.stopPropagation();
              }
            }
          };

          fn(eObj);
        };
      },
      /**
       * Get text of element
       * @returns {String} str Text to set inside of element
       */
      'getText': function () {
        if (elt.textContent) {
          return elt.textContent;
        } else if (elt.innerText) {
          return elt.innerText;
        } else if (elt.text) {
          return elt.text;
        }
        return elt.innerHTML;
      },
      /**
       * Set text of element
       * @param {String} str Text to set inside of element
       */
      'setText': function (str) {
        if (elt.textContent) {
          elt.textContent = str;
        } else if (elt.innerText) {
          elt.innerText = str;
        } else if (elt.text) {
          elt.text = str;
        } else {
          elt.innerHTML = str;
        }
      },
      /**
       * Get child elements by their tag name
       * @param {String} tag Tag name of elements to find
       * @returns {HTMLCollection} Object with select DOM methods
       */
      'getChildrenByTagName': function (tag) {
        return elt.getElementsByTagName(tag);
      },
      /**
       * Get a property of elt
       * @param {String} prop Property to retrieve
       * @returns {Mixed} Value of property
       */
      'get': function (prop) {
        return elt[prop];
      },
      /**
       * Set a property of elt
       * @param {String} prop Property to set
       * @param {Mixed} val Value to set
       */
      'set': function (prop, val) {
        elt[prop] = val;
      },
      /**
       * Wrap a elt in a containing div
       * @returns {Object} $'d containing div
       */
      'wrap': function () {
        var div = doc.createElement('div');
        elt.parentNode.insertBefore(div, elt);
        div.appendChild(elt);
        div.id = elt.id + 'Container';
        return $(div);
      },
      /**
       * Append given element after element
       * @param {HTMLElement} appendElt Element to append
       * @returns {HTMLElement} The element that is objectified
       */
      'append': function (appendElt) {
        elt.appendChild(appendElt);
        return this;
      },
      /**
       * Create and append a new element to this containing element
       * @param {String} tag Tag of element to append
       * @returns {Object} Objectified new element
       */
      'appendNew': function (tag) {
        var newElt = document.createElement(tag);
        this.append(newElt);
        return $(newElt);
      },
      /**
       * Get the Y offset of this element [SCROLLING]
       * @returns {Integer} Y offset of element
       */
      'getYOffset': function () {
        // Get the offset of this element and all of its parents
        var offset = elt.offsetTop,
            offsetParent = elt;
        while ( offsetParent = offsetParent.offsetParent) {
          offset += offsetParent.offsetTop;
        }

        // Disabled to compensate for media queries
        // // Memoize for later
        // this.getYOffset = function () {
          // return offset;
        // };

        // Return the offset
        return offset;
      },
      /**
       * Smooth scrolls window to element via async callback loop
       */
      'smoothScrollTo': function () {
        // We must re-query in case of window resize
        var innerHeight = win.innerHeight || doc.documentElement.clientHeight,
            scrollBarHeight = doc.body.scrollHeight,
            scrollTop = getScrollTop(),
            eltOffset = this.getYOffset(),
            that = this;

        // Clear the last timeout in case there we quickly switch between scrolls
        if( lastScrollTimeout ) {
          clearTimeout(lastScrollTimeout);
        }

        // If the element is below our current offset
        if( eltOffset > scrollTop) {
          // And the element is not in view
          if( scrollBarHeight - eltOffset > innerHeight) {
            scrollTop += Math.ceil((eltOffset - scrollTop)/scrollSpeed);
          // And the element is in view
          } else {
            scrollTop += Math.ceil((eltOffset - scrollTop - (scrollBarHeight - eltOffset))/scrollSpeed);
          }
        } else {
          scrollTop += (eltOffset - scrollTop)/scrollSpeed;
        }

        win.scrollTo(0, scrollTop);

        // Asynchronously loop scroll
        if( scrollTop !== eltOffset ) {
          lastScrollTimeout = setTimeout( function () { that.smoothScrollTo(); }, 15);
        }
      }
    };
  };

  // Bindings for Obstacles (DRY)
  var obstacles = [{
        'elt': $('theTank'),
        'name': 'The Tank',
        'desc': 'A huge tank of balloons and peanuts!',
        'img': 'public/images/the_tank.png'
      }, {
        'elt': $('sundaeSlide'),
        'name': 'Sundae Slide',
        'desc': 'Chocolate and vanilla ice cream covered slide!',
        'img': 'public/images/sundae_slide.png'
      }, {
        'elt': $('humanHamsterWheel'),
        'name': 'Human Hamster Wheel',
        'desc': 'Spin the wheel!',
        'img': 'public/images/human_hamster_wheel.png'
      }, {
        'elt': $('downTheHatch'),
        'name': 'Down The Hatch',
        'desc': '6ft slide covered in gunk!',
        'img': 'public/images/down_the_hatch.png'
      }, {
        'elt': $('pickIt'),
        'name': 'Pick It!',
        'desc': 'A giant nose filled with gunk!',
        'img': 'public/images/pick_it.png'
      }, {
        'elt': $('theWringer'),
        'name': 'The Wringer',
        'desc': 'Giant rollers drenched in gunk!',
        'img': 'public/images/the_wringer.png'
      }],
      obstacle,
      i,
      featuredObstacle = obstacles[3].elt,
      obstacleDescription = $('obstaclesDescription'),
      nameElt = $(obstacleDescription.getChildrenByTagName('h3')[0]),
      descElt = $(obstacleDescription.getChildrenByTagName('h4')[0]),
      imgElt = $(obstacleDescription.getChildrenByTagName('img')[0]);

  for( i = obstacles.length; i--; ) {
    obstacle = obstacles[i];
    // Closure and bind
    obstacle.elt.bind('onclick', (function (obstacle) {
      return function () {
        // Change the obstacleDescription
        var name = obstacle.name;
        nameElt.setText( name );
        descElt.setText( obstacle.desc );
        imgElt.set('alt', name);
        imgElt.set('src', obstacle.img);

        // Display the new featured figure
        featuredObstacle.set('className', '');
        obstacle.elt.set('className', 'featuredObstacle');
        featuredObstacle = obstacle.elt;
      };
    }(obstacle)));
  }

  // Select box overlay
  // Credit to http://ryanfait.com/resources/custom-checkboxes-and-radio-buttons/
  var selectArr = [$('teamColor'), $('gender')],
      select,
      container,
      span,
      img,
      updateTextFn;

  /**
   * Takes in $(select) and returns current text
   * @param {Object} select Objectifieid select box
   * @returns {String|undefined} Text of select box
   */
  function getSelectText(select) {
    return $(select.get('options')[select.get('selectedIndex')]).getText();
  }

  for( i = selectArr.length; i--; ) {
    select = selectArr[i];
    // Wrap in a CSS'd container
    container = select.wrap();

    // Add opacity class
    select.set('className', 'styled');

    // Append span and img
    span = container.appendNew('span');
    img = container.appendNew('img');
    img.set('alt', getSelectText(select));
    img.set('src', 'public/images/green_texture.png');

    // Create text change function for onchange
    updateTextFn = (function (span, select) {
      return function () {
        span.setText( getSelectText(select) );
      };
    }(span, select));

    // Update the text and bind to onchange
    updateTextFn();
    select.bind('onchange', updateTextFn);
  }

  // Smooth scroller
  // Credit to http://www.dezinerfolio.com/2007/08/08/df-javascript-smooth-scroll
  var navLinkArr = $('navBar').getChildrenByTagName('a'),
      navLink,
      targetElt;

  for( i = navLinkArr.length; i--; ) {
    navLink = $(navLinkArr[i]);
    targetId = navLink.get('href').split('#')[1];
    targetElt = $( targetId );
    navLink.bind('onclick', (function (targetElt) {
      return function (e) {
        e.preventDefault();
        targetElt.smoothScrollTo();
      };
    }(targetElt)));
  }

  // TODO: Add :focus state for select boxes
  // TODO: Validation?
  // TODO: Timer
  // TODO: Opacity switch for navbar
  // TODO: Submit button hover state of yellow bg + orange font
}(document, window));