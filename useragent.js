

(function ($) {

    /**
     * To get a list of classes that you can add to the <html> or <body>.
     * @param string user_agent
     *   Optional user agent string. Defaults to navigator's user agent.
     */
    function getUserAgentClasses(user_agent) {
      var classes = new Array,
          match = false,
          ua = (arguments.length == 1) ? user_agent : navigator.userAgent;
    
      // 1. Try to find the OS type.
      if ((match = ua.match(/\b(iPod|iPad|iPhone)\b/))) {
        classes.push(match[1].toLowerCase());
        classes.push('ios');
        if ((match = ua.match(/\bCPU(?: iPhone)? OS ((\d+)[_\d]*) like Mac OS X\b/))) {
          classes.push('ios-' + match[2],
                       'ios-' + match[1].replace(/[^\d]+/g, '-'));
        }
      }
      else if ((match = ua.match(/\bAndroid ((\d+)[\.\d]+);/i))) {
        classes.push('android',
                     'android-' + match[2],
                     'android-' + match[1].replace(/[^\d]+/g, '-'));
      }
      else if (ua.match(/\bIEMobile\b/)) {
        classes.push('ie-mobile');
      }
      else if ((match = ua.match(/\bMac OS X ([_\.\d]+)/))) {
        classes.push('mac-os-x',
                     'mac-os-x-' + match[1].replace(/[^\d]+/g, '-'));
      }
      else if ((match = ua.match(/\bWindows ((?:NT )?[\.\d]+)/))) {
        classes.push('windows',
                     'windows-' + match[1].toLowerCase().replace(/[^a-z\d]+/g, '-'));
      }
      else if (ua.match(/\bLinux /)) {
        classes.push('linux');
      }
    
      // 2. Then try to find the browser.
      if ((match = ua.match(/\bMozilla\b.*Firefox\/(\d+)/))) {
        classes.push('firefox',
                     'firefox-' + match[1]);
      }
      else if ((match = ua.match(/\bMozilla\b.*MSIE ((\d+)\.\d+\w*); (?:Windows|Macintosh)\b/i))) {
        classes.push('ie',
                     'ie-' + match[2],
                     'ie-' + match[1].replace(/[^a-z\d]+/g, '-'));
      }
      else if ((match = ua.match(/\bChrome\/(\d+)\./))) {
        classes.push('chrome',
                     'chrome-' + match[1]);
      }
      else if ((match = ua.match(/\bVersion\/((\d+)[\.\d]+) Safari\b/))) {
        classes.push('safari',
                     'safari-' + match[2],
                     'safari-' + match[1].replace(/[^\d]+/g, '-'));
      }
      else if ((match = ua.match(/\bVersion\/((\d+)[\.\d]+) Mobile Safari\b/))) {
        classes.push('mobile-safari',
                     'mobile-safari-' + match[2],
                     'mobile-safari-' + match[1].replace(/[^\d]+/g, '-'));
      }
    
      return classes;
    }
    
    $(document).ready(function () {
      var classes = getUserAgentClasses();
      console.log(classes);
      $('#user-agent').text(navigator.userAgent);
      $('html').attr('class', classes.join(' '));
      $('#classes').text(classes.join(', '));
    });
    
    })(jQuery);