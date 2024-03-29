(function (n, ka) {
  "function" === typeof define && define.amd
    ? define([], function () {
        return ka(n.Ovonts);
      })
    : "object" === typeof module && module.exports
    ? (module.exports = ka(n.Ovonts))
    : (n.Ovonts = ka(n.Ovonts));
})("undefined" !== typeof window ? window : this, function (n) {
  function ka(h) {
    var p = [];
    if ("undefined" !== typeof h.options)
      for (var u = 0; u < h.options.length; u++)
        h.options[u].selected && p.push(h.options[u].value);
    return p.join(", ");
  }
  function ab() {
    var h = new Date().getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (p) {
        var u = (h + 16 * Math.random()) % 16 | 0;
        h = Math.floor(h / 16);
        return ("x" === p ? u : (u & 3) | 8).toString(16);
      }
    );
  }
  function B() {
    return Math.floor(new Date().getTime() / 1e3);
  }
  function Ra() {
    var h = new Date().getTime();
    Ba >= h ? Ba++ : (Ba = h);
    return Ba;
  }
  function r(h, p, u) {
    if (p && Object.keys(p).length) {
      if ("undefined" !== typeof p[h]) return p[h];
    } else if ("undefined" !== typeof n[h]) return n[h];
    return u;
  }
  function Sa(h, p, u) {
    for (var C in n.i) n.i[C].tracking_crashes && n.i[C].recordError(h, p, u);
  }
  function bb(h) {
    var p = [],
      u;
    for (u in h) p.push(u + "=" + encodeURIComponent(h[u]));
    return p.join("&");
  }
  function la(h) {
    return "string" === typeof h && "/" === h.substring(h.length - 1)
      ? h.substring(0, h.length - 1)
      : h;
  }
  function oa(h, p) {
    for (var u = {}, C, K = 0, O = p.length; K < O; K++)
      (C = p[K]), "undefined" !== typeof h[C] && (u[C] = h[C]);
    return u;
  }
  function T(h, p, u, C, K, O) {
    var Y = {};
    if (h) {
      if (Object.keys(h).length > C) {
        var Z = {},
          pa = 0,
          ba;
        for (ba in h) pa < C && ((Z[ba] = h[ba]), pa++);
        h = Z;
      }
      for (var F in h) (C = w(F, p, K, O)), (Z = w(h[F], u, K, O)), (Y[C] = Z);
    }
    return Y;
  }
  function w(h, p, u, C) {
    var K = h;
    "number" === typeof h && (h = h.toString());
    "string" === typeof h &&
      h.length > p &&
      ((K = h.substring(0, p)),
      C(
        d.DEBUG,
        u +
          ", Key: [ " +
          h +
          " ] is longer than accepted length. It will be truncated."
      ));
    return K;
  }
  function qa(h) {
    if (h) return h;
    h = navigator.userAgent;
    !h &&
      navigator.userAgentData &&
      ((h = navigator.userAgentData.brands
        .map(function (p) {
          return p.brand + ":" + p.version;
        })
        .join()),
      (h += navigator.userAgentData.mobile ? " mobi " : " "),
      (h += navigator.userAgentData.platform));
    return h;
  }
  function cb(h) {
    if (!h) {
      if (navigator.userAgentData.mobile) return "phone";
      h = qa();
    }
    h = h.toLowerCase();
    var p = "desktop",
      u =
        /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/;
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      h
    )
      ? (p = "tablet")
      : u.test(h) && (p = "phone");
    return p;
  }
  function db(h) {
    return /(CountlySiteBot|nuhk|Googlebot|GoogleSecurityScanner|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver|bingbot|Google Web Preview|Mediapartners-Google|AdsBot-Google|Baiduspider|Ezooms|YahooSeeker|AltaVista|AVSearch|Mercator|Scooter|InfoSeek|Ultraseek|Lycos|Wget|YandexBot|Yandex|YaDirectFetcher|SiteBot|Exabot|AhrefsBot|MJ12bot|TurnitinBot|magpie-crawler|Nutch Crawler|CMS Crawler|rogerbot|Domnutch|ssearch_bot|XoviBot|netseer|digincore|fr-crawler|wesee|AliasIO|contxbot|PingdomBot|BingPreview|HeadlessChrome)/.test(
      h || qa()
    );
  }
  function Ta(h) {
    "undefined" === typeof h.pageY &&
      "number" === typeof h.clientX &&
      document.documentElement &&
      ((h.pageX =
        h.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft),
      (h.pageY =
        h.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop));
    return h;
  }
  function Ca() {
    var h = document;
    return Math.max(
      Math.max(h.body.scrollHeight, h.documentElement.scrollHeight),
      Math.max(h.body.offsetHeight, h.documentElement.offsetHeight),
      Math.max(h.body.clientHeight, h.documentElement.clientHeight)
    );
  }
  function Ua() {
    var h = document;
    return Math.max(
      Math.max(h.body.scrollWidth, h.documentElement.scrollWidth),
      Math.max(h.body.offsetWidth, h.documentElement.offsetWidth),
      Math.max(h.body.clientWidth, h.documentElement.clientWidth)
    );
  }
  function eb() {
    var h = document;
    return Math.min(
      Math.min(h.body.clientHeight, h.documentElement.clientHeight),
      Math.min(h.body.offsetHeight, h.documentElement.offsetHeight),
      window.innerHeight
    );
  }
  function fb(h, p, u, C, K, O) {
    h = document.createElement(h);
    var Y;
    h.setAttribute(p, u);
    h.setAttribute(C, K);
    p = function () {
      Y || O();
      Y = !0;
    };
    O && ((h.onreadystatechange = p), (h.onload = p));
    document.getElementsByTagName("head")[0].appendChild(h);
  }
  function gb(h, p) {
    fb("script", "type", "text/javascript", "src", h, p);
  }
  function Da(h, p) {
    fb("link", "rel", "stylesheet", "href", h, p);
  }
  function hb() {
    var h = document.getElementById("cly-loader");
    if (!h) {
      var p = document.head || document.getElementsByTagName("head")[0],
        u = document.createElement("style");
      u.type = "text/css";
      u.styleSheet
        ? (u.styleSheet.cssText =
            "#cly-loader {height: 4px; width: 100%; position: absolute; z-index: 99999; overflow: hidden; background-color: #fff; top:0px; left:0px;}#cly-loader:before{display: block; position: absolute; content: ''; left: -200px; width: 200px; height: 4px; background-color: #2EB52B; animation: cly-loading 2s linear infinite;}@keyframes cly-loading { from {left: -200px; width: 30%;} 50% {width: 30%;} 70% {width: 70%;} 80% { left: 50%;} 95% {left: 120%;} to {left: 100%;}}")
        : u.appendChild(
            document.createTextNode(
              "#cly-loader {height: 4px; width: 100%; position: absolute; z-index: 99999; overflow: hidden; background-color: #fff; top:0px; left:0px;}#cly-loader:before{display: block; position: absolute; content: ''; left: -200px; width: 200px; height: 4px; background-color: #2EB52B; animation: cly-loading 2s linear infinite;}@keyframes cly-loading { from {left: -200px; width: 30%;} 50% {width: 30%;} 70% {width: 70%;} 80% { left: 50%;} 95% {left: 120%;} to {left: 100%;}}"
            )
          );
      p.appendChild(u);
      h = document.createElement("div");
      h.setAttribute("id", "cly-loader");
      document.body.onload = function () {
        if (!n.showLoaderProtection)
          try {
            document.body.appendChild(h);
          } catch (C) {}
      };
    }
    h.style.display = "block";
  }
  function ib() {
    n.showLoaderProtection = !0;
    var h = document.getElementById("cly-loader");
    h && (h.style.display = "none");
  }
  if ("undefined" !== typeof window) {
    n = n || {};
    n.features =
      "sessions events views scrolls clicks forms crashes attribution users star-rating location apm feedback remote-config".split(
        " "
      );
    var d = {
      ERROR: "[ERROR] ",
      WARNING: "[WARNING] ",
      INFO: "[INFO] ",
      DEBUG: "[DEBUG] ",
      VERBOSE: "[VERBOSE] ",
    };
    n.q = n.q || [];
    n.onload = n.onload || [];
    var jb =
      /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?::([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?::([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/;
    n.CountlyClass = function (h) {
      function p(a) {
        if (g.ignore_visitor)
          b(d.ERROR, "Adding event failed. Possible bot or user opt out");
        else if (a.key) {
          a.count || (a.count = 1);
          a.key = w(a.key, g.maxKeyLength, "add_cly_event", b);
          a.segmentation = T(
            a.segmentation,
            g.maxKeyLength,
            g.maxValueSize,
            g.maxSegmentationValues,
            "add_cly_event",
            b
          );
          var c = oa(a, ["key", "count", "sum", "dur", "segmentation"]);
          c.timestamp = Ra();
          var e = new Date();
          c.hour = e.getHours();
          c.dow = e.getDay();
          G.push(c);
          v("cly_event", G);
          b(d.INFO, "Successfully adding event: ", a);
        } else
          b(d.ERROR, "Adding event failed. Event must have a key property");
      }
      function u(a, c, e, k, l) {
        b(d.INFO, "fetch_remote_config_explicit, Fetching sequence initiated");
        var f = { method: "rc" };
        Array.isArray(arguments[0]) &&
          0 < arguments[0].length &&
          (f.keys = JSON.stringify(arguments[0]));
        Array.isArray(arguments[1]) &&
          0 < arguments[1].length &&
          (f.omit_keys = JSON.stringify(arguments[1]));
        for (var m = arguments.length - 1, q; m--; )
          "legacy" === arguments[m] && (f.method = "fetch_remote_config"),
            0 === arguments[m] && (f.oi = 0),
            1 === arguments[m] && (f.oi = 1),
            "function" === typeof arguments[m] && (q = arguments[m]);
        g.check_consent("sessions") && (f.metrics = JSON.stringify(Ea()));
        g.check_consent("remote-config")
          ? (ba(f),
            aa(
              "fetch_remote_config_explicit",
              g.url + Fa,
              f,
              function (t, I, U) {
                if (t)
                  b(
                    d.ERROR,
                    "fetch_remote_config_explicit, An error occurred: " + t
                  );
                else {
                  try {
                    var J = JSON.parse(U);
                    if (f.keys || f.omit_keys) for (var ca in J) M[ca] = J[ca];
                    else M = J;
                    v("cly_remote_configs", M);
                  } catch (ra) {
                    b(
                      d.ERROR,
                      "fetch_remote_config_explicit, Had an issue while parsing the response: " +
                        ra
                    );
                  }
                  q &&
                    (b(
                      d.INFO,
                      "fetch_remote_config_explicit, Callback function is provided"
                    ),
                    q(t, M));
                }
              },
              !0
            ))
          : (b(
              d.ERROR,
              "fetch_remote_config_explicit, Remote config requires explicit consent"
            ),
            q && q(Error("Remote config requires explicit consent"), M));
      }
      function C() {
        g.ignore_prefetch &&
          "undefined" !== typeof document.visibilityState &&
          "prerender" === document.visibilityState &&
          (g.ignore_visitor = !0);
        g.ignore_bots && db() && (g.ignore_visitor = !0);
      }
      function K() {
        0 < G.length &&
          (F({ events: JSON.stringify(G) }), (G = []), v("cly_event", G));
      }
      function O(a, c) {
        if (document.getElementById("countly-feedback-sticker-" + a._id))
          b(d.ERROR, "Widget with same ID exists");
        else
          try {
            var e = document.createElement("div");
            e.className = "countly-iframe-wrapper";
            e.id = "countly-iframe-wrapper-" + a._id;
            var k = document.createElement("span");
            k.className = "countly-feedback-close-icon";
            k.id = "countly-feedback-close-icon-" + a._id;
            k.innerText = "x";
            var l = document.createElement("iframe");
            l.name = "countly-feedback-iframe";
            l.id = "countly-feedback-iframe";
            l.src =
              g.url +
              "/feedback?widget_id=" +
              a._id +
              "&app_key=" +
              g.app_key +
              "&device_id=" +
              g.device_id +
              "&sdk_version=22.06.2";
            document.body.appendChild(e);
            e.appendChild(k);
            e.appendChild(l);
            x(
              document.getElementById("countly-feedback-close-icon-" + a._id),
              "click",
              function () {
                document.getElementById(
                  "countly-iframe-wrapper-" + a._id
                ).style.display = "none";
                document.getElementById("cfbg").style.display = "none";
              }
            );
            if (c) {
              var f = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              );
              f.id = "feedback-sticker-svg";
              f.setAttribute("aria-hidden", "true");
              f.setAttribute("data-prefix", "far");
              f.setAttribute("data-icon", "grin");
              f.setAttribute("class", "svg-inline--fa fa-grin fa-w-16");
              f.setAttribute("role", "img");
              f.setAttribute("xmlns", "http://www.w3.org/2000/svg");
              f.setAttribute("viewBox", "0 0 496 512");
              var m = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              m.id = "smileyPathInStickerSvg";
              m.setAttribute("fill", "white");
              m.setAttribute(
                "d",
                "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.4-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
              );
              var q = document.createElement("span");
              q.innerText = a.trigger_button_text;
              var t = document.createElement("div");
              t.style.color =
                7 > a.trigger_font_color.length
                  ? "#" + a.trigger_font_color
                  : a.trigger_font_color;
              t.style.backgroundColor =
                7 > a.trigger_bg_color.length
                  ? "#" + a.trigger_bg_color
                  : a.trigger_bg_color;
              t.className =
                "countly-feedback-sticker  " +
                a.trigger_position +
                "-" +
                a.trigger_size;
              t.id = "countly-feedback-sticker-" + a._id;
              f.appendChild(m);
              t.appendChild(f);
              t.appendChild(q);
              document.body.appendChild(t);
              var I = document.getElementById("smileyPathInStickerSvg");
              I &&
                (I.style.fill =
                  7 > a.trigger_font_color.length
                    ? "#" + a.trigger_font_color
                    : a.trigger_font_color);
              x(
                document.getElementById("countly-feedback-sticker-" + a._id),
                "click",
                function () {
                  document.getElementById(
                    "countly-iframe-wrapper-" + a._id
                  ).style.display = "block";
                  document.getElementById("cfbg").style.display = "block";
                }
              );
            } else
              (document.getElementById(
                "countly-iframe-wrapper-" + a._id
              ).style.display = "block"),
                (document.getElementById("cfbg").style.display = "block");
          } catch (U) {
            b(
              d.ERROR,
              "Somethings went wrong while element injecting process: " + U
            );
          }
      }
      function Y() {
        var a;
        if ("undefined" !== typeof g.onload && 0 < g.onload.length) {
          for (a = 0; a < g.onload.length; a++)
            if ("function" === typeof g.onload[a]) g.onload[a](g);
          g.onload = [];
        }
      }
      function Z() {
        if (P) {
          var a = { name: P };
          g.check_consent("views") &&
            p({ key: "[CLY]_view", dur: da ? B() - sa : ta, segmentation: a });
          P = null;
        }
      }
      function pa() {
        if (ea) {
          var a = y("cly_session");
          if (!a || parseInt(a) <= B()) (V = !1), g.begin_session(!ua);
          v("cly_session", B() + 60 * va);
        }
      }
      function ba(a) {
        a.app_key = g.app_key;
        a.device_id = g.device_id;
        a.sdk_name = "javascript_native_web";
        a.sdk_version = "22.06.2";
        a.t = D;
        g.check_consent("location")
          ? (g.country_code && (a.country_code = g.country_code),
            g.city && (a.city = g.city),
            null !== g.ip_address && (a.ip_address = g.ip_address))
          : (a.location = "");
        a.timestamp = Ra();
        var c = new Date();
        a.hour = c.getHours();
        a.dow = c.getDay();
      }
      function F(a) {
        g.ignore_visitor
          ? b(d.WARNING, "User is opt_out will ignore the request: " + a)
          : g.app_key && g.device_id
          ? (ba(a),
            E.length > Ga && E.shift(),
            E.push(a),
            v("cly_queue", E, !0))
          : b(
              d.ERROR,
              "app_key or device_id is missing ",
              g.app_key,
              g.device_id
            );
      }
      function Ha() {
        Y();
        if (g.ignore_visitor)
          (Ia = !1), b(d.WARNING, "User opt_out, no heartbeat");
        else {
          Ia = !0;
          var a = 0;
          if (Ja && "undefined" !== typeof n.q && 0 < n.q.length) {
            var c = n.q;
            n.q = [];
            for (a = 0; a < c.length; a++) {
              var e = c[a];
              b(d.DEBUG, "Processing queued call", e);
              if ("function" === typeof e) e();
              else if (Array.isArray(e) && 0 < e.length) {
                var k = g,
                  l = 0;
                n.i[e[l]] && ((k = n.i[e[l]]), l++);
                if ("function" === typeof k[e[l]])
                  k[e[l]].apply(k, e.slice(l + 1));
                else if (0 === e[l].indexOf("userData.")) {
                  var f = e[l].replace("userData.", "");
                  "function" === typeof k.userData[f] &&
                    k.userData[f].apply(k, e.slice(l + 1));
                } else
                  "function" === typeof n[e[l]] &&
                    n[e[l]].apply(n, e.slice(l + 1));
              }
            }
          }
          V &&
            ua &&
            da &&
            ((a = B()), a - fa > Ka && (g.session_duration(a - fa), (fa = a)));
          0 < G.length &&
            (G.length <= wa
              ? (F({ events: JSON.stringify(G) }), (G = []))
              : ((a = G.splice(0, wa)), F({ events: JSON.stringify(a) })),
            v("cly_event", G));
          !H &&
            0 < E.length &&
            La &&
            B() > Va &&
            ((La = !1),
            (a = E[0]),
            b(d.DEBUG, "Processing request", a),
            v("cly_queue", E, !0),
            g.test_mode ||
              aa(
                "send_request_queue",
                g.url + kb,
                a,
                function (m, q) {
                  b(d.DEBUG, "Request Finished", q, m);
                  m
                    ? ((Va = B() + Ma), b(d.ERROR, "Request error: ", m))
                    : E.shift();
                  v("cly_queue", E, !0);
                  La = !0;
                },
                !1
              ));
          setTimeout(Ha, Na);
        }
      }
      function Wa() {
        var a = y("cly_id");
        return a ? ((D = y("cly_id_type")), a) : ab();
      }
      function Ea() {
        var a = JSON.parse(JSON.stringify(g.metrics || {}));
        a._app_version = a._app_version || g.app_version;
        a._ua = a._ua || qa();
        if (screen.width) {
          var c = screen.width ? parseInt(screen.width) : 0,
            e = screen.height ? parseInt(screen.height) : 0;
          if (0 !== c && 0 !== e) {
            if (
              navigator.platform &&
              /iPad|iPhone|iPod/.test(navigator.platform) &&
              window.devicePixelRatio
            )
              (c = Math.round(c * window.devicePixelRatio)),
                (e = Math.round(e * window.devicePixelRatio));
            else if (90 === Math.abs(window.orientation)) {
              var k = c;
              c = e;
              e = k;
            }
            a._resolution = a._resolution || "" + c + "x" + e;
          }
        }
        window.devicePixelRatio &&
          (a._density = a._density || window.devicePixelRatio);
        c =
          navigator.language ||
          navigator.browserLanguage ||
          navigator.systemLanguage ||
          navigator.userLanguage;
        "undefined" !== typeof c && (a._locale = a._locale || c);
        if (
          "undefined" !== typeof document.referrer &&
          document.referrer.length &&
          (c = jb.exec(document.referrer)) &&
          c[11] &&
          c[11] !== window.location.hostname
        ) {
          c = !1;
          if (Q && Q.length)
            for (e = 0; e < Q.length; e++)
              try {
                if (new RegExp(Q[e]).test(document.referrer)) {
                  b(d.DEBUG, "Ignored: " + document.referrer);
                  c = !0;
                  break;
                }
              } catch (l) {
                b(d.ERROR, "Problem with ignoring: " + Q[e], ", error: " + l);
              }
          c || (a._store = a._store || document.referrer);
        }
        b(d.DEBUG, "Got metrics", a);
        return a;
      }
      function b(a, c) {
        if (g.debug && "undefined" !== typeof console) {
          arguments[2] &&
            "object" === typeof arguments[2] &&
            (arguments[2] = JSON.stringify(arguments[2]));
          Ja || (c = "[" + g.app_key + "] " + c);
          a || (a = d.DEBUG);
          for (var e = "", k = 2; k < arguments.length; k++) e += arguments[k];
          e = a + c + e;
          a === d.ERROR
            ? console.error(e)
            : a === d.WARNING
            ? console.warn(e)
            : a === d.INFO
            ? console.info(e)
            : a === d.VERBOSE
            ? console.log(e)
            : console.debug(e);
        }
      }
      function aa(a, c, e, k, l) {
        l = l || !1;
        try {
          b(d.DEBUG, "Sending XML HTTP request");
          var f = null;
          window.XMLHttpRequest
            ? (f = new window.XMLHttpRequest())
            : window.ActiveXObject &&
              (f = new window.ActiveXObject("Microsoft.XMLHTTP"));
          e = e || {};
          var m = bb(e),
            q = "GET";
          if (g.force_post || 2e3 <= m.length) q = "POST";
          "GET" === q
            ? f.open("GET", c + "?" + m, !0)
            : (f.open("POST", c, !0),
              f.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
              ));
          for (var t in g.headers) f.setRequestHeader(t, g.headers[t]);
          f.onreadystatechange = function () {
            4 === this.readyState &&
              (b(
                d.DEBUG,
                a +
                  " HTTP request completed [" +
                  this.status +
                  "][" +
                  this.responseText +
                  "]"
              ),
              (
                l
                  ? lb(this.status, this.responseText)
                  : mb(this.status, this.responseText)
              )
                ? "function" === typeof k && k(!1, e, this.responseText)
                : (b(
                    d.ERROR,
                    a + " Failed Server XML HTTP request, ",
                    this.status
                  ),
                  "function" === typeof k && k(!0, e)));
          };
          "GET" === q ? f.send() : f.send(m);
        } catch (I) {
          b(d.ERROR, a + " Failed XML HTTP request: " + I),
            "function" === typeof k && k(!0, e);
        }
      }
      function mb(a, c) {
        if (!(200 <= a && 300 > a))
          return (
            b(
              d.ERROR,
              "Http response status code is not within the expected range:[" +
                a +
                "]"
            ),
            !1
          );
        try {
          var e = JSON.parse(c);
          return "[object Object]" !== Object.prototype.toString.call(e)
            ? (b(d.ERROR, "Http response is not JSON Object"), !1)
            : !!e.result;
        } catch (k) {
          return b(d.ERROR, "Http response is not JSON: " + k), !1;
        }
      }
      function lb(a, c) {
        if (!(200 <= a && 300 > a))
          return (
            b(
              d.ERROR,
              "Http response status code is not within the expected range: " + a
            ),
            !1
          );
        try {
          var e = JSON.parse(c);
          return "[object Object]" === Object.prototype.toString.call(e) ||
            Array.isArray(e)
            ? !0
            : (b(d.ERROR, "Http response is not JSON Object nor JSON Array"),
              !1);
        } catch (k) {
          return b(d.ERROR, "Http response is not JSON: " + k), !1;
        }
      }
      function nb() {
        xa = Math.max(
          xa,
          window.scrollY,
          document.body.scrollTop,
          document.documentElement.scrollTop
        );
      }
      function Xa() {
        if (ya) {
          ya = !1;
          var a = Ca(),
            c = Ua(),
            e = eb();
          g.check_consent("scrolls") &&
            ((a = {
              type: "scroll",
              y: xa + e,
              width: c,
              height: a,
              view: g.getViewUrl(),
            }),
            (a = T(
              a,
              g.maxKeyLength,
              g.maxValueSize,
              g.maxSegmentationValues,
              "processScrollView",
              b
            )),
            g.track_domains && (a.domain = window.location.hostname),
            p({ key: "[CLY]_action", segmentation: a }));
        }
      }
      function ob(a) {
        v("cly_token", a);
      }
      function pb(a, c, e) {
        var k = new Date();
        k.setTime(k.getTime() + 864e5 * e);
        e = "; expires=" + k.toGMTString();
        document.cookie = a + "=" + c + e + "; path=/";
      }
      function y(a, c, e) {
        if ("none" === g.storage)
          b(
            d.WARNING,
            "Storage is disabled. Value with key: " + a + " won't be retrieved"
          );
        else {
          e ||
            ((a = g.app_key + "/" + a),
            g.namespace && (a = la(g.namespace) + "/" + a));
          void 0 === c && (c = ha);
          if (c) var k = localStorage.getItem(a);
          else if ("localstorage" !== g.storage)
            a: {
              a += "=";
              c = document.cookie.split(";");
              e = 0;
              for (k = c.length; e < k; e++) {
                for (var l = c[e]; " " === l.charAt(0); )
                  l = l.substring(1, l.length);
                if (0 === l.indexOf(a)) {
                  k = l.substring(a.length, l.length);
                  break a;
                }
              }
              k = null;
            }
          return g.deserialize(k);
        }
      }
      function v(a, c, e, k) {
        "none" === g.storage
          ? b(
              d.WARNING,
              "Storage is disabled. Value with key: " + a + " won't be stored"
            )
          : (k ||
              ((a = g.app_key + "/" + a),
              g.namespace && (a = la(g.namespace) + "/" + a)),
            void 0 === e && (e = ha),
            "undefined" !== typeof c &&
              null !== c &&
              ((c = g.serialize(c)),
              e
                ? localStorage.setItem(a, c)
                : "localstorage" !== g.storage && pb(a, c, 30)));
      }
      function R(a, c, e) {
        "none" === g.storage
          ? b(
              d.WARNING,
              "Storage is disabled. Value with key: " + a + " won't be removed"
            )
          : (e ||
              ((a = g.app_key + "/" + a),
              g.namespace && (a = la(g.namespace) + "/" + a)),
            void 0 === c && (c = ha),
            c
              ? localStorage.removeItem(a)
              : "localstorage" !== g.storage && pb(a, "", -1));
      }
      function sb() {
        if (y(g.namespace + "cly_id", !1, !0)) {
          v("cly_id", y(g.namespace + "cly_id", !1, !0));
          v("cly_id_type", y(g.namespace + "cly_id_type", !1, !0));
          v("cly_event", y(g.namespace + "cly_event", !1, !0));
          v("cly_session", y(g.namespace + "cly_session", !1, !0));
          var a = y(g.namespace + "cly_queue", !1, !0);
          Array.isArray(a) &&
            ((a = a.filter(function (c) {
              return c.app_key === g.app_key;
            })),
            v("cly_queue", a));
          y(g.namespace + "cly_cmp_id", !1, !0) &&
            (v("cly_cmp_id", y(g.namespace + "cly_cmp_id", !1, !0)),
            v("cly_cmp_uid", y(g.namespace + "cly_cmp_uid", !1, !0)));
          y(g.namespace + "cly_ignore", !1, !0) &&
            v("cly_ignore", y(g.namespace + "cly_ignore", !1, !0));
          R("cly_id", !1, !0);
          R("cly_id_type", !1, !0);
          R("cly_event", !1, !0);
          R("cly_session", !1, !0);
          R("cly_queue", !1, !0);
          R("cly_cmp_id", !1, !0);
          R("cly_cmp_uid", !1, !0);
          R("cly_ignore", !1, !0);
        }
      }
      var g = this,
        Ja = !n.i,
        V = !1,
        kb = "/i",
        Fa = "/o/sdk",
        Na = r("interval", h, 500),
        Ga = r("queue_size", h, 1e3),
        E = [],
        G = [],
        M = {},
        ia = [],
        ja = {},
        Q = r("ignore_referrers", h, []),
        Ya = null,
        ua = !0,
        fa,
        Za = 0,
        P = null,
        sa = 0,
        ta = 0,
        Va = 0,
        Ma = r("fail_timeout", h, 60),
        za = r("inactivity_time", h, 20),
        Aa = 0,
        Ka = r("session_update", h, 60),
        wa = r("max_events", h, 100),
        ma = r("max_logs", h, null),
        ea = r("use_session_cookie", h, !0),
        va = r("session_cookie_timeout", h, 30),
        La = !0,
        Ia = !1,
        H = r("offline_mode", h, !1),
        W = {},
        da = !0,
        qb = B(),
        ha = !0,
        na = null,
        D = 1,
        ya = !1,
        xa = 0;
      try {
        localStorage.setItem("cly_testLocal", !0),
          localStorage.removeItem("cly_testLocal");
      } catch (a) {
        b(
          d.ERROR,
          "Local storage test failed, Halting local storage support: " + a
        ),
          (ha = !1);
      }
      for (var A = {}, $a = 0; $a < n.features.length; $a++)
        A[n.features[$a]] = {};
      this.initialize = function () {
        this.serialize = r("serialize", h, n.serialize);
        this.deserialize = r("deserialize", h, n.deserialize);
        this.getViewName = r("getViewName", h, n.getViewName);
        this.getViewUrl = r("getViewUrl", h, n.getViewUrl);
        this.getSearchQuery = r("getSearchQuery", h, n.getSearchQuery);
        this.DeviceIdType = n.DeviceIdType;
        this.namespace = r("namespace", h, "");
        this.clearStoredId = r("clear_stored_id", h, !1);
        this.app_key = r("app_key", h, null);
        this.onload = r("onload", h, []);
        this.utm = r("utm", h, {
          source: !0,
          medium: !0,
          campaign: !0,
          term: !0,
          content: !0,
        });
        this.ignore_prefetch = r("ignore_prefetch", h, !0);
        this.rcAutoOptinAb = r("rc_automatic_optin_for_ab", h, !0);
        this.useExplicitRcApi = r("use_explicit_rc_api", h, !1);
        this.debug = r("debug", h, !1);
        this.test_mode = r("test_mode", h, !1);
        this.metrics = r("metrics", h, {});
        this.headers = r("headers", h, {});
        this.url = la(r("url", h, ""));
        this.app_version = r("app_version", h, "0.0");
        this.country_code = r("country_code", h, null);
        this.city = r("city", h, null);
        this.ip_address = r("ip_address", h, null);
        this.ignore_bots = r("ignore_bots", h, !0);
        this.force_post = r("force_post", h, !1);
        this.remote_config = r("remote_config", h, !1);
        this.ignore_visitor = r("ignore_visitor", h, !1);
        this.require_consent = r("require_consent", h, !1);
        this.track_domains = r("track_domains", h, !0);
        this.storage = r("storage", h, "default");
        this.enableOrientationTracking = r(
          "enable_orientation_tracking",
          h,
          !0
        );
        this.maxKeyLength = r("max_key_length", h, 128);
        this.maxValueSize = r("max_value_size", h, 256);
        this.maxSegmentationValues = r("max_segmentation_values", h, 30);
        this.maxBreadcrumbCount = r("max_breadcrumb_count", h, null);
        this.maxStackTraceLinesPerThread = r(
          "max_stack_trace_lines_per_thread",
          h,
          30
        );
        this.maxStackTraceLineLength = r("max_stack_trace_line_length", h, 200);
        this.heatmapWhitelist = r("heatmap_whitelist", h, []);
        ma && !this.maxBreadcrumbCount
          ? ((this.maxBreadcrumbCount = ma),
            b(
              d.WARNING,
              "initialize, 'maxCrashLogs' is deprecated. Use 'maxBreadcrumbCount' instead!"
            ))
          : ma || this.maxBreadcrumbCount || (this.maxBreadcrumbCount = 100);
        "cookie" === this.storage && (ha = !1);
        this.rcAutoOptinAb ||
          this.useExplicitRcApi ||
          (b(
            d.WARNING,
            "initialize, Auto opting is disabled, switching to explicit RC API"
          ),
          (this.useExplicitRcApi = !0));
        Array.isArray(Q) || (Q = []);
        "" === this.url &&
          (b(d.ERROR, "initialize, Please provide server URL"),
          (this.ignore_visitor = !0));
        y("cly_ignore") && (this.ignore_visitor = !0);
        sb();
        this.clearStoredId &&
          (b(d.INFO, "initialize, Clearing the device ID storage"),
          localStorage.removeItem(this.app_key + "/cly_id"),
          localStorage.removeItem(this.app_key + "/cly_id_type"));
        E = y("cly_queue") || [];
        G = y("cly_event") || [];
        M = y("cly_remote_configs") || {};
        C();
        if (window.name && 0 === window.name.indexOf("cly:"))
          try {
            this.passed_data = JSON.parse(window.name.replace("cly:", ""));
          } catch (q) {
            b(
              d.ERROR,
              "initialize, Could not parse name: " +
                window.name +
                ", error: " +
                q
            );
          }
        else if (location.hash && 0 === location.hash.indexOf("#cly:"))
          try {
            this.passed_data = JSON.parse(location.hash.replace("#cly:", ""));
          } catch (q) {
            b(
              d.ERROR,
              "initialize, Could not parse hash: " +
                location.hash +
                ", error: " +
                q
            );
          }
        if (
          ((this.passed_data &&
            this.passed_data.app_key &&
            this.passed_data.app_key === this.app_key) ||
            (this.passed_data && !this.passed_data.app_key && Ja)) &&
          this.passed_data.token &&
          this.passed_data.purpose
        ) {
          this.passed_data.token !== y("cly_old_token") &&
            (ob(this.passed_data.token),
            v("cly_old_token", this.passed_data.token));
          var a = [];
          Array.isArray(this.heatmapWhitelist)
            ? (this.heatmapWhitelist.push(this.url),
              (a = this.heatmapWhitelist.map(function (q) {
                return la(q);
              })))
            : (a = [this.url]);
          a.includes(this.passed_data.url) &&
            "heatmap" === this.passed_data.purpose &&
            ((this.ignore_visitor = !0),
            hb(),
            gb(this.passed_data.url + "/views/heatmap.js", ib));
        }
        if (this.ignore_visitor)
          b(
            d.WARNING,
            "initialize, ignore_visitor:[" +
              this.ignore_visitor +
              "], this user will not be tracked"
          );
        else {
          b(
            d.DEBUG,
            "initialize, app_key:[" + this.app_key + "], url:[" + this.url + "]"
          );
          b(
            d.DEBUG,
            "initialize, device_id:[" + r("device_id", h, void 0) + "]"
          );
          b(
            d.DEBUG,
            "initialize, require_consent is enabled:[" +
              this.require_consent +
              "]"
          );
          try {
            b(
              d.DEBUG,
              "initialize, metric override:[" +
                JSON.stringify(this.metrics) +
                "]"
            ),
              b(
                d.DEBUG,
                "initialize, header override:[" +
                  JSON.stringify(this.headers) +
                  "]"
              ),
              b(
                d.DEBUG,
                "initialize, number of onload callbacks provided:[" +
                  this.onload.length +
                  "]"
              ),
              b(
                d.DEBUG,
                "initialize, utm tags:[" + JSON.stringify(this.utm) + "]"
              ),
              Q &&
                b(
                  d.DEBUG,
                  "initialize, referrers to ignore :[" + JSON.stringify(Q) + "]"
                );
          } catch (q) {
            b(
              d.ERROR,
              "initialize, Could not stringify some config object values"
            );
          }
          b(d.DEBUG, "initialize, app_version:[" + this.app_version + "]");
          b(
            d.DEBUG,
            "initialize, provided location info; country_code:[" +
              this.country_code +
              "], city:[" +
              this.city +
              "], ip_address:[" +
              this.ip_address +
              "]"
          );
          "" !== this.namespace &&
            b(d.DEBUG, "initialize, namespace given:[" + this.namespace + "]");
          this.clearStoredId &&
            b(
              d.DEBUG,
              "initialize, clearStoredId flag set to:[" +
                this.clearStoredId +
                "]"
            );
          this.ignore_prefetch &&
            b(
              d.DEBUG,
              "initialize, ignoring pre-fetching and pre-rendering from counting as real website visits :[" +
                this.ignore_prefetch +
                "]"
            );
          this.test_mode &&
            b(
              d.WARNING,
              "initialize, test_mode:[" +
                this.test_mode +
                "], queues won't be processed"
            );
          this.heatmapWhitelist &&
            b(
              d.DEBUG,
              "initialize, heatmap whitelist:[" +
                JSON.stringify(this.heatmapWhitelist) +
                "], these domains will be whitelisted"
            );
          "default" !== this.storage &&
            b(d.DEBUG, "initialize, storage is set to:[" + this.storage + "]");
          this.ignore_bots &&
            b(
              d.DEBUG,
              "initialize, ignore traffic from bots :[" + this.ignore_bots + "]"
            );
          this.force_post &&
            b(
              d.DEBUG,
              "initialize, forced post method for all requests:[" +
                this.force_post +
                "]"
            );
          this.remote_config &&
            b(
              d.DEBUG,
              "initialize, remote_config callback provided:[" +
                !!this.remote_config +
                "]"
            );
          "boolean" === typeof this.rcAutoOptinAb &&
            b(
              d.DEBUG,
              "initialize, automatic RC optin is enabled:[" +
                this.rcAutoOptinAb +
                "]"
            );
          this.useExplicitRcApi ||
            b(
              d.WARNING,
              "initialize, will use legacy RC API. Consider enabling new API during init with use_explicit_rc_api flag"
            );
          this.track_domains &&
            b(
              d.DEBUG,
              "initialize, tracking domain info:[" + this.track_domains + "]"
            );
          this.enableOrientationTracking &&
            b(
              d.DEBUG,
              "initialize, enableOrientationTracking:[" +
                this.enableOrientationTracking +
                "]"
            );
          ea ||
            b(
              d.WARNING,
              "initialize, use_session_cookie is enabled:[" + ea + "]"
            );
          H &&
            b(
              d.DEBUG,
              "initialize, offline_mode:[" +
                H +
                "], user info won't be send to the servers"
            );
          H &&
            b(
              d.DEBUG,
              "initialize, stored remote configs:[" + JSON.stringify(M) + "]"
            );
          b(
            d.DEBUG,
            "initialize, 'getViewName' callback override provided:[" +
              !!this.getViewName +
              "]"
          );
          b(
            d.DEBUG,
            "initialize, 'getSearchQuery' callback override provided:[" +
              !!this.getSearchQuery +
              "]"
          );
          128 !== this.maxKeyLength &&
            b(
              d.DEBUG,
              "initialize, maxKeyLength set to:[" +
                this.maxKeyLength +
                "] characters"
            );
          256 !== this.maxValueSize &&
            b(
              d.DEBUG,
              "initialize, maxValueSize set to:[" +
                this.maxValueSize +
                "] characters"
            );
          30 !== this.maxSegmentationValues &&
            b(
              d.DEBUG,
              "initialize, maxSegmentationValues set to:[" +
                this.maxSegmentationValues +
                "] key/value pairs"
            );
          100 !== this.maxBreadcrumbCount &&
            b(
              d.DEBUG,
              "initialize, maxBreadcrumbCount for custom logs set to:[" +
                this.maxBreadcrumbCount +
                "] entries"
            );
          30 !== this.maxStackTraceLinesPerThread &&
            b(
              d.DEBUG,
              "initialize, maxStackTraceLinesPerThread set to:[" +
                this.maxStackTraceLinesPerThread +
                "] lines"
            );
          200 !== this.maxStackTraceLineLength &&
            b(
              d.DEBUG,
              "initialize, maxStackTraceLineLength set to:[" +
                this.maxStackTraceLineLength +
                "] characters"
            );
          500 !== Na &&
            b(
              d.DEBUG,
              "initialize, interval for heartbeats set to:[" +
                Na +
                "] milliseconds"
            );
          1e3 !== Ga &&
            b(d.DEBUG, "initialize, queue_size set to:[" + Ga + "] items max");
          60 !== Ma &&
            b(
              d.DEBUG,
              "initialize, fail_timeout set to:[" +
                Ma +
                "] seconds of wait time after a failed connection to server"
            );
          20 !== za &&
            b(
              d.DEBUG,
              "initialize, inactivity_time set to:[" +
                za +
                "] minutes to consider a user as inactive after no observable action"
            );
          60 !== Ka &&
            b(
              d.DEBUG,
              "initialize, session_update set to:[" +
                Ka +
                "] seconds to check if extending a session is needed while the user is active"
            );
          100 !== wa &&
            b(
              d.DEBUG,
              "initialize, max_events set to:[" +
                wa +
                "] events to send in one batch"
            );
          ma &&
            b(
              d.WARNING,
              "initialize, max_logs set to:[" +
                ma +
                "] breadcrumbs to store for crash logs max, deprecated "
            );
          30 !== va &&
            b(
              d.DEBUG,
              "initialize, session_cookie_timeout set to:[" +
                va +
                "] minutes to expire a cookies session"
            );
          b(d.INFO, "initialize, Countly initialized");
          a = null;
          var c = g.getSearchQuery(),
            e = !1,
            k = {};
          if (c) {
            c = c.substring(1).split("&");
            for (var l = 0; l < c.length; l++) {
              var f = c[l].split("=");
              "cly_id" === f[0]
                ? v("cly_cmp_id", f[1])
                : "cly_uid" === f[0]
                ? v("cly_cmp_uid", f[1])
                : "cly_device_id" === f[0]
                ? (a = f[1])
                : 0 === (f[0] + "").indexOf("utm_") &&
                  this.utm[f[0].replace("utm_", "")] &&
                  ((k[f[0].replace("utm_", "")] = f[1]), (e = !0));
            }
          }
          c = "[CLY]_temp_id" === y("cly_id");
          l = r("device_id", h, void 0);
          y("cly_id") && !c
            ? ((this.device_id = y("cly_id")),
              b(d.INFO, "initialize, Set the stored device ID"),
              (D = y("cly_id_type")),
              D ||
                (b(
                  d.INFO,
                  "initialize, No device ID type info from the previous session, falling back to DEVELOPER_SUPPLIED"
                ),
                (D = 0)))
            : null !== a
            ? (b(d.INFO, "initialize, Device ID set by URL"),
              (this.device_id = a),
              (D = 3))
            : l
            ? (b(d.INFO, "initialize, Device ID set by developer"),
              (this.device_id = l),
              h && Object.keys(h).length
                ? void 0 !== h.device_id && (D = 0)
                : void 0 !== n.device_id && (D = 0))
            : H || c
            ? ((this.device_id = "[CLY]_temp_id"),
              (D = 2),
              H && c
                ? b(
                    d.INFO,
                    "initialize, Temp ID set, continuing offline mode from previous app session"
                  )
                : H && !c
                ? b(d.INFO, "initialize, Temp ID set, entering offline mode")
                : ((H = !0),
                  b(d.INFO, "initialize, Temp ID set, enabling offline mode")))
            : (b(d.INFO, "initialize, Generating the device ID"),
              (this.device_id = r("device_id", h, Wa())),
              h && Object.keys(h).length
                ? void 0 !== h.device_id && (D = 0)
                : void 0 !== n.device_id && (D = 0));
          v("cly_id", this.device_id);
          v("cly_id_type", D);
          if (e) {
            for (var m in this.utm)
              k[m]
                ? this.userData.set("utm_" + m, k[m])
                : this.userData.unset("utm_" + m);
            this.userData.save();
          }
          Y();
          setTimeout(function () {
            Ha();
            g.remote_config && g.fetch_remote_config(g.remote_config);
          }, 1);
          document.documentElement.setAttribute("data-countly-useragent", qa());
        }
      };
      this.halt = function () {
        b(d.WARNING, "halt, Resetting Countly");
        n.i = void 0;
        Ja = !n.i;
        V = !1;
        kb = "/i";
        Fa = "/o/sdk";
        Na = 500;
        Ga = 1e3;
        E = [];
        G = [];
        M = {};
        ia = [];
        ja = {};
        Q = [];
        Ya = null;
        ua = !0;
        Za = 0;
        P = null;
        Va = ta = sa = 0;
        Ma = 60;
        za = 20;
        Aa = 0;
        Ka = 60;
        wa = 100;
        ma = null;
        ea = !0;
        va = 30;
        La = !0;
        H = Ia = !1;
        W = {};
        da = !0;
        qb = B();
        ha = !0;
        na = null;
        D = 1;
        ya = !1;
        xa = 0;
        try {
          localStorage.setItem("cly_testLocal", !0),
            localStorage.removeItem("cly_testLocal");
        } catch (c) {
          b(
            d.ERROR,
            "halt, Local storage test failed, will fallback to cookies"
          ),
            (ha = !1);
        }
        n.features =
          "sessions events views scrolls clicks forms crashes attribution users star-rating location apm feedback remote-config".split(
            " "
          );
        A = {};
        for (var a = 0; a < n.features.length; a++) A[n.features[a]] = {};
        g.app_key = void 0;
        g.device_id = void 0;
        g.onload = void 0;
        g.utm = void 0;
        g.ignore_prefetch = void 0;
        g.debug = void 0;
        g.test_mode = void 0;
        g.metrics = void 0;
        g.headers = void 0;
        g.url = void 0;
        g.app_version = void 0;
        g.country_code = void 0;
        g.city = void 0;
        g.ip_address = void 0;
        g.ignore_bots = void 0;
        g.force_post = void 0;
        g.rcAutoOptinAb = void 0;
        g.useExplicitRcApi = void 0;
        g.remote_config = void 0;
        g.ignore_visitor = void 0;
        g.require_consent = void 0;
        g.track_domains = void 0;
        g.storage = void 0;
        g.enableOrientationTracking = void 0;
        g.maxKeyLength = void 0;
        g.maxValueSize = void 0;
        g.maxSegmentationValues = void 0;
        g.maxBreadcrumbCount = void 0;
        g.maxStackTraceLinesPerThread = void 0;
        g.maxStackTraceLineLength = void 0;
      };
      this.group_features = function (a) {
        b(d.INFO, "group_features, Grouping features");
        if (a)
          for (var c in a)
            A[c]
              ? b(
                  d.WARNING,
                  "group_features, Feature name [" + c + "] is already reserved"
                )
              : "string" === typeof a[c]
              ? (A[c] = { features: [a[c]] })
              : a[c] && Array.isArray(a[c]) && a[c].length
              ? (A[c] = { features: a[c] })
              : b(
                  d.ERROR,
                  "group_features, Incorrect feature list for [" +
                    c +
                    "] value: [" +
                    a[c] +
                    "]"
                );
        else b(d.ERROR, "group_features, Incorrect features:[" + a + "]");
      };
      this.check_consent = function (a) {
        b(
          d.INFO,
          "check_consent, Checking if consent is given for specific feature:[" +
            a +
            "]"
        );
        if (!this.require_consent)
          return (
            b(
              d.INFO,
              "check_consent, require_consent is off, no consent is necessary"
            ),
            !0
          );
        if (A[a]) return !(!A[a] || !A[a].optin);
        b(d.ERROR, "check_consent, No feature available for [" + a + "]");
        return !1;
      };
      this.get_device_id_type = function () {
        b(
          d.INFO,
          "check_device_id_type, Retrieving the current device id type.[" +
            D +
            "]"
        );
        switch (D) {
          case 1:
            var a = g.DeviceIdType.SDK_GENERATED;
            break;
          case 3:
          case 0:
            a = g.DeviceIdType.DEVELOPER_SUPPLIED;
            break;
          case 2:
            a = g.DeviceIdType.TEMPORARY_ID;
            break;
          default:
            a = -1;
        }
        return a;
      };
      this.get_device_id = function () {
        b(
          d.INFO,
          "get_device_id, Retrieving the device id: [" + this.device_id + "]"
        );
        return this.device_id;
      };
      this.check_any_consent = function () {
        b(d.INFO, "check_any_consent, Checking if any consent is given");
        if (!this.require_consent)
          return (
            b(
              d.INFO,
              "check_any_consent, require_consent is off, no consent is necessary"
            ),
            !0
          );
        for (var a in A) if (A[a] && A[a].optin) return !0;
        b(d.INFO, "check_any_consent, No consents given");
        return !1;
      };
      this.add_consent = function (a) {
        b(d.INFO, "add_consent, Adding consent for [" + a + "]");
        if (Array.isArray(a))
          for (var c = 0; c < a.length; c++) this.add_consent(a[c]);
        else
          A[a]
            ? A[a].features
              ? ((A[a].optin = !0), this.add_consent(A[a].features))
              : !0 !== A[a].optin &&
                ((A[a].optin = !0),
                rb(),
                setTimeout(function () {
                  "sessions" === a && W.begin_session
                    ? (g.begin_session.apply(g, W.begin_session),
                      (W.begin_session = null))
                    : "views" === a &&
                      W.track_pageview &&
                      ((P = null),
                      g.track_pageview.apply(g, W.track_pageview),
                      (W.track_pageview = null));
                }, 1))
            : b(d.ERROR, "add_consent, No feature available for [" + a + "]");
      };
      this.remove_consent = function (a) {
        b(d.INFO, "remove_consent, Removing consent for [" + a + "]");
        this.remove_consent_internal(a, !0);
      };
      this.remove_consent_internal = function (a, c) {
        c = c || !1;
        if (Array.isArray(a))
          for (var e = 0; e < a.length; e++)
            this.remove_consent_internal(a[e], c);
        else
          A[a]
            ? A[a].features
              ? this.remove_consent_internal(A[a].features, c)
              : ((A[a].optin = !1), c && !1 !== A[a].optin && rb())
            : b(
                d.ERROR,
                "remove_consent, No feature available for [" + a + "]"
              );
      };
      var Oa,
        rb = function () {
          Oa && (clearTimeout(Oa), (Oa = null));
          Oa = setTimeout(function () {
            for (var a = {}, c = 0; c < n.features.length; c++)
              a[n.features[c]] = !0 === A[n.features[c]].optin ? !0 : !1;
            F({ consent: JSON.stringify(a) });
            b(d.DEBUG, "Consent update request has been sent to the queue.");
          }, 1e3);
        };
      this.enable_offline_mode = function () {
        b(d.INFO, "enable_offline_mode, Enabling offline mode");
        this.remove_consent_internal(n.features, !1);
        H = !0;
        this.device_id = "[CLY]_temp_id";
        D = 2;
      };
      this.disable_offline_mode = function (a) {
        b(d.INFO, "disable_offline_mode, Disabling offline mode");
        H = !1;
        a && this.device_id !== a
          ? ((this.device_id = a),
            (D = 0),
            v("cly_id", this.device_id),
            v("cly_id_type", 0),
            b(
              d.INFO,
              "disable_offline_mode, Changing id to: " + this.device_id
            ))
          : ((this.device_id = Wa()),
            this.device_id !== y("cly_id") &&
              (v("cly_id", this.device_id), v("cly_id_type", 1)));
        a = !1;
        if (0 < E.length)
          for (var c = 0; c < E.length; c++)
            "[CLY]_temp_id" === E[c].device_id &&
              ((E[c].device_id = this.device_id), (a = !0));
        a && v("cly_queue", E, !0);
      };
      this.begin_session = function (a, c) {
        b(d.INFO, "begin_session, Starting the session");
        a && b(d.INFO, "begin_session, Heartbeats are disabled");
        c &&
          b(
            d.INFO,
            "begin_session, Session starts irrespective of session cookie"
          );
        if (this.check_consent("sessions")) {
          if (!V) {
            this.enableOrientationTracking &&
              (this.report_orientation(),
              x(window, "resize", function () {
                g.report_orientation();
              }));
            fa = B();
            V = !0;
            ua = !a;
            var e = y("cly_session");
            if (c || !ea || !e || parseInt(e) <= B())
              b(d.INFO, "begin_session, Session started"),
                null === na && (na = !0),
                (e = { begin_session: 1 }),
                (e.metrics = JSON.stringify(Ea())),
                F(e);
            v("cly_session", B() + 60 * va);
          }
        } else W.begin_session = arguments;
      };
      this.session_duration = function (a) {
        b(d.INFO, "session_duration, Reporting session duration");
        this.check_consent("sessions") &&
          V &&
          (b(d.INFO, "session_duration, Session extended: ", a),
          F({ session_duration: a }),
          pa());
      };
      this.end_session = function (a, c) {
        b(d.INFO, "end_session, Ending the current session");
        this.check_consent("sessions") &&
          V &&
          ((a = a || B() - fa),
          Z(),
          !ea || c
            ? (b(d.INFO, "end_session, Session ended"),
              F({ end_session: 1, session_duration: a }))
            : this.session_duration(a),
          (V = !1));
      };
      this.change_id = function (a, c) {
        b(d.INFO, "change_id, Changing the ID");
        c && b(d.INFO, "change_id, Will merge the IDs");
        if (!a || "string" !== typeof a || 0 === a.length)
          b(
            d.ERROR,
            "change_id, The provided ID: [" + a + "] is not a valid ID"
          );
        else if (H)
          b(
            d.WARNING,
            "change_id, Offline mode was on, initiating disabling sequence instead."
          ),
            this.disable_offline_mode(a);
        else if (this.device_id !== a) {
          c ||
            (K(),
            this.end_session(null, !0),
            (ja = {}),
            this.remove_consent_internal(n.features, !1));
          var e = this.device_id;
          this.device_id = a;
          D = 0;
          v("cly_id", this.device_id);
          v("cly_id_type", 0);
          b(d.INFO, "change_id, Changing ID from:[" + e + "] to [" + a + "]");
          c ? F({ old_device_id: e }) : this.begin_session(!ua, !0);
          this.remote_config &&
            ((M = {}),
            v("cly_remote_configs", M),
            this.fetch_remote_config(this.remote_config));
        }
      };
      this.add_event = function (a) {
        b(d.INFO, "add_event, Adding event: ", a);
        switch (a.key) {
          case "[CLY]_nps":
            var c = this.check_consent("feedback");
            break;
          case "[CLY]_survey":
            c = this.check_consent("feedback");
            break;
          case "[CLY]_star_rating":
            c = this.check_consent("star-rating");
            break;
          case "[CLY]_view":
            c = this.check_consent("views");
            break;
          case "[CLY]_orientation":
            c = this.check_consent("users");
            break;
          case "[CLY]_push_action":
            c = this.check_consent("push");
            break;
          case "[CLY]_action":
            c = this.check_consent("clicks") || this.check_consent("scroll");
            break;
          default:
            c = this.check_consent("events");
        }
        c && p(a);
      };
      this.start_event = function (a) {
        b(d.INFO, "start_event, Starting timed event with key: [" + a + "]");
        a = w(a, g.maxKeyLength, "start_event", b);
        ja[a]
          ? b(
              d.WARNING,
              "start_event, Timed event with key [" + a + "] already started"
            )
          : (ja[a] = B());
      };
      this.end_event = function (a) {
        b(d.INFO, "end_event, Ending timed event");
        "string" === typeof a && (a = { key: a });
        a.key
          ? ja[a.key]
            ? ((a.dur = B() - ja[a.key]), this.add_event(a), delete ja[a.key])
            : b(
                d.ERROR,
                "end_event, Timed event with key [" +
                  a.key +
                  "] was not started"
              )
          : b(d.ERROR, "end_event, Timed event must have a key property");
      };
      this.report_orientation = function (a) {
        b(d.INFO, "report_orientation, Reporting orientation");
        this.check_consent("users") &&
          p({
            key: "[CLY]_orientation",
            segmentation: {
              mode:
                a ||
                (window.innerWidth > window.innerHeight
                  ? "landscape"
                  : "portrait"),
            },
          });
      };
      this.report_conversion = function (a, c) {
        b(
          d.WARNING,
          "report_conversion, Deprecated function call! Use 'recordDirectAttribution' in place of this call. Call will be redirected now!"
        );
        this.recordDirectAttribution(a, c);
      };
      this.recordDirectAttribution = function (a, c) {
        b(
          d.INFO,
          "recordDirectAttribution, Recording the attribution for campaign ID: [" +
            a +
            "] and the user ID: [" +
            c +
            "]"
        );
        this.check_consent("attribution") &&
          ((a = a || y("cly_cmp_id") || "cly_organic"),
          (c = c || y("cly_cmp_uid"))
            ? F({ campaign_id: a, campaign_user: c })
            : F({ campaign_id: a }));
      };
      this.user_details = function (a) {
        b(d.INFO, "user_details, Trying to add user details: ", a);
        this.check_consent("users") &&
          ((a.name = w(a.name, g.maxValueSize, "user_details", b)),
          (a.username = w(a.username, g.maxValueSize, "user_details", b)),
          (a.email = w(a.email, g.maxValueSize, "user_details", b)),
          (a.organization = w(
            a.organization,
            g.maxValueSize,
            "user_details",
            b
          )),
          (a.phone = w(a.phone, g.maxValueSize, "user_details", b)),
          (a.picture = w(a.picture, 4096, "user_details", b)),
          (a.gender = w(a.gender, g.maxValueSize, "user_details", b)),
          (a.byear = w(a.byear, g.maxValueSize, "user_details", b)),
          (a.custom = T(
            a.custom,
            g.maxKeyLength,
            g.maxValueSize,
            g.maxSegmentationValues,
            "user_details",
            b
          )),
          F({
            user_details: JSON.stringify(
              oa(
                a,
                "name username email organization phone picture gender byear custom".split(
                  " "
                )
              )
            ),
          }));
      };
      var S = {},
        X = function (a, c, e) {
          g.check_consent("users") &&
            (S[a] || (S[a] = {}),
            "$push" === e || "$pull" === e || "$addToSet" === e
              ? (S[a][e] || (S[a][e] = []), S[a][e].push(c))
              : (S[a][e] = c));
        };
      this.userData = {
        set: function (a, c) {
          b(
            d.INFO,
            "set, Setting user's custom property value: [" +
              c +
              "] under the key: [" +
              a +
              "]"
          );
          a = w(a, g.maxKeyLength, "userData set", b);
          c = w(c, g.maxValueSize, "userData set", b);
          S[a] = c;
        },
        unset: function (a) {
          b(
            d.INFO,
            "unset, Resetting user's custom property with key: [" + a + "] "
          );
          S[a] = "";
        },
        set_once: function (a, c) {
          b(
            d.INFO,
            "set_once, Setting user's unique custom property value: [" +
              c +
              "] under the key: [" +
              a +
              "] "
          );
          a = w(a, g.maxKeyLength, "userData set_once", b);
          c = w(c, g.maxValueSize, "userData set_once", b);
          X(a, c, "$setOnce");
        },
        increment: function (a) {
          b(
            d.INFO,
            "increment, Increasing user's custom property value under the key: [" +
              a +
              "] by one"
          );
          a = w(a, g.maxKeyLength, "userData increment", b);
          X(a, 1, "$inc");
        },
        increment_by: function (a, c) {
          b(
            d.INFO,
            "increment_by, Increasing user's custom property value under the key: [" +
              a +
              "] by: [" +
              c +
              "]"
          );
          a = w(a, g.maxKeyLength, "userData increment_by", b);
          c = w(c, g.maxValueSize, "userData increment_by", b);
          X(a, c, "$inc");
        },
        multiply: function (a, c) {
          b(
            d.INFO,
            "multiply, Multiplying user's custom property value under the key: [" +
              a +
              "] by: [" +
              c +
              "]"
          );
          a = w(a, g.maxKeyLength, "userData multiply", b);
          c = w(c, g.maxValueSize, "userData multiply", b);
          X(a, c, "$mul");
        },
        max: function (a, c) {
          b(
            d.INFO,
            "max, Saving user's maximum custom property value compared to the value: [" +
              c +
              "] under the key: [" +
              a +
              "]"
          );
          a = w(a, g.maxKeyLength, "userData max", b);
          c = w(c, g.maxValueSize, "userData max", b);
          X(a, c, "$max");
        },
        min: function (a, c) {
          b(
            d.INFO,
            "min, Saving user's minimum custom property value compared to the value: [" +
              c +
              "] under the key: [" +
              a +
              "]"
          );
          a = w(a, g.maxKeyLength, "userData min", b);
          c = w(c, g.maxValueSize, "userData min", b);
          X(a, c, "$min");
        },
        push: function (a, c) {
          b(
            d.INFO,
            "push, Pushing a value: [" +
              c +
              "] under the key: [" +
              a +
              "] to user's custom property array"
          );
          a = w(a, g.maxKeyLength, "userData push", b);
          c = w(c, g.maxValueSize, "userData push", b);
          X(a, c, "$push");
        },
        push_unique: function (a, c) {
          b(
            d.INFO,
            "push_unique, Pushing a unique value: [" +
              c +
              "] under the key: [" +
              a +
              "] to user's custom property array"
          );
          a = w(a, g.maxKeyLength, "userData push_unique", b);
          c = w(c, g.maxValueSize, "userData push_unique", b);
          X(a, c, "$addToSet");
        },
        pull: function (a, c) {
          b(
            d.INFO,
            "pull, Removing the value: [" +
              c +
              "] under the key: [" +
              a +
              "] from user's custom property array"
          );
          X(a, c, "$pull");
        },
        save: function () {
          b(d.INFO, "save, Saving changes to user's custom property");
          g.check_consent("users") &&
            F({ user_details: JSON.stringify({ custom: S }) });
          S = {};
        },
      };
      this.report_trace = function (a) {
        b(d.INFO, "report_trace, Reporting performance trace");
        if (this.check_consent("apm")) {
          for (
            var c = "type name stz etz apm_metrics apm_attr".split(" "), e = 0;
            e < c.length;
            e++
          )
            if ("apm_attr" !== c[e] && "undefined" === typeof a[c[e]]) {
              b(
                d.WARNING,
                "report_trace, APM trace don't have the property: " + c[e]
              );
              return;
            }
          a.name = w(a.name, g.maxKeyLength, "report_trace", b);
          a.app_metrics = T(
            a.app_metrics,
            g.maxKeyLength,
            g.maxValueSize,
            g.maxSegmentationValues,
            "report_trace",
            b
          );
          c = oa(a, c);
          c.timestamp = a.stz;
          a = new Date();
          c.hour = a.getHours();
          c.dow = a.getDay();
          F({ apm: JSON.stringify(c) });
          b(d.INFO, "report_trace, Successfully adding APM trace: ", c);
        }
      };
      this.track_errors = function (a) {
        b(d.INFO, "track_errors, Started tracking errors");
        n.i[this.app_key].tracking_crashes = !0;
        window.cly_crashes ||
          ((window.cly_crashes = !0),
          (Ya = a),
          (window.onerror = function q(e, k, l, f, m) {
            if (void 0 !== m && null !== m) Sa(m, !1);
            else {
              f = f || (window.event && window.event.errorCharacter);
              m = "";
              "undefined" !== typeof e && (m += e + "\n");
              "undefined" !== typeof k && (m += "at " + k);
              "undefined" !== typeof l && (m += ":" + l);
              "undefined" !== typeof f && (m += ":" + f);
              m += "\n";
              try {
                e = [];
                for (var t = q.caller; t; ) e.push(t.name), (t = t.caller);
                m += e.join("\n");
              } catch (I) {
                b(
                  d.ERROR,
                  "track_errors, Call stack generation experienced a problem: " +
                    I
                );
              }
              Sa(m, !1);
            }
          }),
          window.addEventListener("unhandledrejection", function (e) {
            Sa(
              Error(
                "Unhandled rejection (reason: " +
                  (e.reason && e.reason.stack ? e.reason.stack : e.reason) +
                  ")."
              ),
              !0
            );
          }));
      };
      this.log_error = function (a, c) {
        b(d.INFO, "log_error, Logging errors");
        this.recordError(a, !0, c);
      };
      this.add_log = function (a) {
        b(d.INFO, "add_log, Adding a new log of breadcrumbs: [ " + a + " ]");
        if (this.check_consent("crashes")) {
          for (
            a = w(a, g.maxValueSize, "add_log", b);
            ia.length >= g.maxBreadcrumbCount;

          )
            ia.shift(),
              b(
                d.WARNING,
                "add_log, Reached maximum crashLogs size. Will erase the oldest one."
              );
          ia.push(a);
        }
      };
      this.fetch_remote_config = function (a, c, e) {
        this.useExplicitRcApi
          ? (b(d.INFO, "fetch_remote_config, Fetching remote config"),
            u(a, c, this.rcAutoOptinAb ? 1 : 0, e))
          : (b(
              d.WARNING,
              "fetch_remote_config, Fetching remote config, with legacy API"
            ),
            u(a, c, "legacy", e));
      };
      this.enrollUserToAb = function (a) {
        b(d.INFO, "enrollUserToAb, Providing AB test keys to opt in for");
        a && Array.isArray(a) && 0 !== a.length
          ? ((a = { method: "ab", keys: JSON.stringify(a) }),
            ba(a),
            aa(
              "enrollUserToAb",
              this.url + Fa,
              a,
              function (c, e, k) {
                if (c) b(d.ERROR, "enrollUserToAb, An error occurred: " + c);
                else
                  try {
                    var l = JSON.parse(k);
                    b(
                      d.DEBUG,
                      "enrollUserToAb, Parsed the response's result: [" +
                        l.result +
                        "]"
                    );
                  } catch (f) {
                    b(
                      d.ERROR,
                      "enrollUserToAb, Had an issue while parsing the response: " +
                        f
                    );
                  }
              },
              !0
            ))
          : b(d.ERROR, "enrollUserToAb, No keys provided");
      };
      this.get_remote_config = function (a) {
        b(d.INFO, "get_remote_config, Getting remote config from storage");
        return "undefined" !== typeof a ? M[a] : M;
      };
      this.stop_time = function () {
        b(d.INFO, "stop_time, Stopping tracking duration");
        da && ((da = !1), (Za = B() - fa), (ta = B() - sa));
      };
      this.start_time = function () {
        b(d.INFO, "start_time, Starting tracking duration");
        da || ((da = !0), (fa = B() - Za), (sa = B() - ta), (ta = 0), pa());
      };
      this.track_sessions = function () {
        function a() {
          document[e] || !document.hasFocus() ? g.stop_time() : g.start_time();
        }
        function c() {
          Aa >= za && g.start_time();
          Aa = 0;
        }
        b(d.INFO, "track_session, Starting tracking user session");
        this.begin_session();
        this.start_time();
        x(window, "beforeunload", function () {
          K();
          g.end_session();
        });
        var e = "hidden";
        x(window, "focus", a);
        x(window, "blur", a);
        x(window, "pageshow", a);
        x(window, "pagehide", a);
        "onfocusin" in document &&
          (x(window, "focusin", a), x(window, "focusout", a));
        e in document
          ? document.addEventListener("visibilitychange", a)
          : "mozHidden" in document
          ? ((e = "mozHidden"),
            document.addEventListener("mozvisibilitychange", a))
          : "webkitHidden" in document
          ? ((e = "webkitHidden"),
            document.addEventListener("webkitvisibilitychange", a))
          : "msHidden" in document &&
            ((e = "msHidden"),
            document.addEventListener("msvisibilitychange", a));
        x(window, "mousemove", c);
        x(window, "click", c);
        x(window, "keydown", c);
        x(window, "scroll", c);
        setInterval(function () {
          Aa++;
          Aa >= za && g.stop_time();
        }, 6e4);
      };
      this.track_pageview = function (a, c, e) {
        b(d.INFO, "track_pageview, Tracking page views");
        b(d.VERBOSE, "track_pageview, last view is:[" + P + "]");
        P &&
          (b(d.DEBUG, "track_pageview, Scroll registry triggered"),
          Xa(),
          (ya = !0),
          (xa = 0));
        Z();
        (a = w(a, g.maxKeyLength, "track_pageview", b)) &&
          Array.isArray(a) &&
          ((c = a), (a = null));
        a || (a = this.getViewName());
        if (void 0 === a || "" === a)
          b(
            d.ERROR,
            "track_pageview, No page name to track (it is either undefined or empty string). No page view can be tracked."
          );
        else if (null === a)
          b(
            d.ERROR,
            "track_pageview, View name returned as null. Page view will be ignored."
          );
        else {
          if (c && c.length)
            for (var k = 0; k < c.length; k++)
              try {
                if (new RegExp(c[k]).test(a)) {
                  b(d.INFO, "track_pageview, Ignoring the page: " + a);
                  return;
                }
              } catch (m) {
                b(
                  d.ERROR,
                  "track_pageview, Problem with finding ignore list item: " +
                    c[k] +
                    ", error: " +
                    m
                );
              }
          P = a;
          sa = B();
          b(d.VERBOSE, "track_pageview, last view is assigned:[" + P + "]");
          k = { name: a, visit: 1, view: g.getViewUrl() };
          k = T(
            k,
            g.maxKeyLength,
            g.maxValueSize,
            g.maxSegmentationValues,
            "track_pageview",
            b
          );
          this.track_domains && (k.domain = window.location.hostname);
          if (ea)
            if (V) na && ((na = !1), (k.start = 1));
            else {
              var l = y("cly_session");
              if (!l || parseInt(l) <= B()) (na = !1), (k.start = 1);
            }
          else
            "undefined" !== typeof document.referrer &&
              document.referrer.length &&
              (l = jb.exec(document.referrer)) &&
              l[11] &&
              l[11] !== window.location.hostname &&
              (k.start = 1);
          if (e) {
            e = T(
              e,
              g.maxKeyLength,
              g.maxValueSize,
              g.maxSegmentationValues,
              "track_pageview",
              b
            );
            for (var f in e) "undefined" === typeof k[f] && (k[f] = e[f]);
          }
          this.check_consent("views")
            ? p({ key: "[CLY]_view", segmentation: k })
            : (W.track_pageview = arguments);
        }
      };
      this.track_view = function (a, c, e) {
        b(d.INFO, "track_view, Initiating tracking page views");
        this.track_pageview(a, c, e);
      };
      this.track_clicks = function (a) {
        b(d.INFO, "track_clicks, Starting to track clicks");
        a &&
          b(
            d.INFO,
            "track_clicks, Tracking the specified children:[" + a + "]"
          );
        a = a || document;
        var c = !0;
        x(a, "click", function (e) {
          if (c) {
            c = !1;
            Ta(e);
            if (
              "undefined" !== typeof e.pageX &&
              "undefined" !== typeof e.pageY
            ) {
              var k = Ca(),
                l = Ua();
              g.check_consent("clicks") &&
                ((e = {
                  type: "click",
                  x: e.pageX,
                  y: e.pageY,
                  width: l,
                  height: k,
                  view: g.getViewUrl(),
                }),
                (e = T(
                  e,
                  g.maxKeyLength,
                  g.maxValueSize,
                  g.maxSegmentationValues,
                  "processClick",
                  b
                )),
                g.track_domains && (e.domain = window.location.hostname),
                p({ key: "[CLY]_action", segmentation: e }));
            }
            setTimeout(function () {
              c = !0;
            }, 1e3);
          }
        });
      };
      this.track_scrolls = function (a) {
        b(d.INFO, "track_scrolls, Starting to track scrolls");
        a && b(d.INFO, "track_scrolls, Tracking the specified children");
        a = a || window;
        ya = !0;
        x(a, "scroll", nb);
        x(a, "beforeunload", Xa);
      };
      this.track_links = function (a) {
        b(d.INFO, "track_links, Starting to track clicks to links");
        a && b(d.INFO, "track_links, Tracking the specified children");
        a = a || document;
        x(a, "click", function (c) {
          a: {
            var e = Pa(c);
            var k;
            for (k = "A"; e; ) {
              if (e.nodeName.toUpperCase() === k) break a;
              e = e.parentElement;
            }
            e = void 0;
          }
          e &&
            (Ta(c),
            g.check_consent("clicks") &&
              p({
                key: "linkClick",
                segmentation: {
                  href: e.href,
                  text: e.innerText,
                  id: e.id,
                  view: g.getViewUrl(),
                },
              }));
        });
      };
      this.track_forms = function (a, c) {
        function e(k) {
          return k.name || k.id || k.type || k.nodeName;
        }
        b(
          d.INFO,
          "track_forms, Starting to track form submissions. DOM object provided:[" +
            !!a +
            "] Tracking hidden inputs :[" +
            !!c +
            "]"
        );
        a = a || document;
        x(a, "submit", function (k) {
          k = Pa(k);
          var l = {
              id: k.attributes.id && k.attributes.id.nodeValue,
              name: k.attributes.name && k.attributes.name.nodeValue,
              action: k.attributes.action && k.attributes.action.nodeValue,
              method: k.attributes.method && k.attributes.method.nodeValue,
              view: g.getViewUrl(),
            },
            f;
          if ("undefined" !== typeof k.elements) {
            for (var m = 0; m < k.elements.length; m++)
              (f = k.elements[m]) &&
                "password" !== f.type &&
                -1 === f.className.indexOf("cly_user_ignore") &&
                ("undefined" === typeof l["input:" + e(f)] &&
                  (l["input:" + e(f)] = []),
                "select" === f.nodeName.toLowerCase()
                  ? "undefined" !== typeof f.multiple
                    ? l["input:" + e(f)].push(ka(f))
                    : l["input:" + e(f)].push(f.options[f.selectedIndex].value)
                  : "input" === f.nodeName.toLowerCase()
                  ? "undefined" !== typeof f.type
                    ? "checkbox" === f.type.toLowerCase() ||
                      "radio" === f.type.toLowerCase()
                      ? f.checked && l["input:" + e(f)].push(f.value)
                      : ("hidden" !== f.type.toLowerCase() || c) &&
                        l["input:" + e(f)].push(f.value)
                    : l["input:" + e(f)].push(f.value)
                  : "textarea" === f.nodeName.toLowerCase()
                  ? l["input:" + e(f)].push(f.value)
                  : "undefined" !== typeof f.value &&
                    l["input:" + e(f)].push(f.value));
            for (var q in l)
              l[q] &&
                "function" === typeof l[q].join &&
                (l[q] = l[q].join(", "));
          }
          g.check_consent("forms") && p({ key: "formSubmit", segmentation: l });
        });
      };
      this.collect_from_forms = function (a, c) {
        b(
          d.INFO,
          "collect_from_forms, Starting to collect possible user data. DOM object provided:[" +
            !!a +
            "] Submitting custom user property:[" +
            !!c +
            "]"
        );
        a = a || document;
        x(a, "submit", function (e) {
          e = Pa(e);
          var k = {},
            l = !1,
            f;
          if ("undefined" !== typeof e.elements) {
            var m = {},
              q = a.getElementsByTagName("LABEL"),
              t;
            for (t = 0; t < q.length; t++)
              q[t].htmlFor &&
                "" !== q[t].htmlFor &&
                (m[q[t].htmlFor] =
                  q[t].innerText || q[t].textContent || q[t].innerHTML);
            for (t = 0; t < e.elements.length; t++)
              if (
                (f = e.elements[t]) &&
                "password" !== f.type &&
                -1 === f.className.indexOf("cly_user_ignore")
              )
                if (
                  ((q = ""),
                  "select" === f.nodeName.toLowerCase()
                    ? (q =
                        "undefined" !== typeof f.multiple
                          ? ka(f)
                          : f.options[f.selectedIndex].value)
                    : "input" === f.nodeName.toLowerCase()
                    ? "undefined" !== typeof f.type
                      ? "checkbox" === f.type.toLowerCase() ||
                        "radio" === f.type.toLowerCase()
                        ? f.checked && (q = f.value)
                        : (q = f.value)
                      : (q = f.value)
                    : "textarea" === f.nodeName.toLowerCase()
                    ? (q = f.value)
                    : "undefined" !== typeof f.value && (q = f.value),
                  f.className && -1 !== f.className.indexOf("cly_user_"))
                ) {
                  var I = f.className.split(" ");
                  for (f = 0; f < I.length; f++)
                    if (0 === I[f].indexOf("cly_user_")) {
                      k[I[f].replace("cly_user_", "")] = q;
                      l = !0;
                      break;
                    }
                } else if (
                  (f.type && "email" === f.type.toLowerCase()) ||
                  (f.name && -1 !== f.name.toLowerCase().indexOf("email")) ||
                  (f.id && -1 !== f.id.toLowerCase().indexOf("email")) ||
                  (f.id &&
                    m[f.id] &&
                    -1 !== m[f.id].toLowerCase().indexOf("email")) ||
                  /[^@\s]+@[^@\s]+\.[^@\s]+/.test(q)
                )
                  k.email || (k.email = q), (l = !0);
                else if (
                  (f.name && -1 !== f.name.toLowerCase().indexOf("username")) ||
                  (f.id && -1 !== f.id.toLowerCase().indexOf("username")) ||
                  (f.id &&
                    m[f.id] &&
                    -1 !== m[f.id].toLowerCase().indexOf("username"))
                )
                  k.username || (k.username = q), (l = !0);
                else if (
                  (f.name &&
                    (-1 !== f.name.toLowerCase().indexOf("tel") ||
                      -1 !== f.name.toLowerCase().indexOf("phone") ||
                      -1 !== f.name.toLowerCase().indexOf("number"))) ||
                  (f.id &&
                    (-1 !== f.id.toLowerCase().indexOf("tel") ||
                      -1 !== f.id.toLowerCase().indexOf("phone") ||
                      -1 !== f.id.toLowerCase().indexOf("number"))) ||
                  (f.id &&
                    m[f.id] &&
                    (-1 !== m[f.id].toLowerCase().indexOf("tel") ||
                      -1 !== m[f.id].toLowerCase().indexOf("phone") ||
                      -1 !== m[f.id].toLowerCase().indexOf("number")))
                )
                  k.phone || (k.phone = q), (l = !0);
                else if (
                  (f.name &&
                    (-1 !== f.name.toLowerCase().indexOf("org") ||
                      -1 !== f.name.toLowerCase().indexOf("company"))) ||
                  (f.id &&
                    (-1 !== f.id.toLowerCase().indexOf("org") ||
                      -1 !== f.id.toLowerCase().indexOf("company"))) ||
                  (f.id &&
                    m[f.id] &&
                    (-1 !== m[f.id].toLowerCase().indexOf("org") ||
                      -1 !== m[f.id].toLowerCase().indexOf("company")))
                )
                  k.organization || (k.organization = q), (l = !0);
                else if (
                  (f.name && -1 !== f.name.toLowerCase().indexOf("name")) ||
                  (f.id && -1 !== f.id.toLowerCase().indexOf("name")) ||
                  (f.id &&
                    m[f.id] &&
                    -1 !== m[f.id].toLowerCase().indexOf("name"))
                )
                  k.name || (k.name = ""), (k.name += q + " "), (l = !0);
          }
          l &&
            (b(d.INFO, "collect_from_forms, Gathered user data", k),
            c ? g.user_details({ custom: k }) : g.user_details(k));
        });
      };
      this.collect_from_facebook = function (a) {
        b(
          d.INFO,
          "collect_from_facebook, Starting to collect possible user data"
        );
        FB &&
          FB.api &&
          FB.api("/me", function (c) {
            var e = {};
            c.name && (e.name = c.name);
            c.email && (e.email = c.email);
            "male" === c.gender
              ? (e.gender = "M")
              : "female" === c.gender && (e.gender = "F");
            if (c.birthday) {
              var k = c.birthday.split("/").pop();
              k && 4 === k.length && (e.byear = k);
            }
            c.work &&
              c.work[0] &&
              c.work[0].employer &&
              c.work[0].employer.name &&
              (e.organization = c.work[0].employer.name);
            if (a) {
              e.custom = {};
              for (var l in a) {
                k = a[l].split(".");
                for (
                  var f = c, m = 0;
                  m < k.length && ((f = f[k[m]]), "undefined" !== typeof f);
                  m++
                );
                "undefined" !== typeof f && (e.custom[l] = f);
              }
            }
            g.user_details(e);
          });
      };
      this.opt_out = function () {
        b(d.INFO, "opt_out, Opting out the user");
        this.ignore_visitor = !0;
        v("cly_ignore", !0);
      };
      this.opt_in = function () {
        b(d.INFO, "opt_in, Opting in the user");
        v("cly_ignore", !1);
        this.ignore_visitor = !1;
        C();
        this.ignore_visitor || Ia || Ha();
      };
      this.report_feedback = function (a) {
        b(
          d.WARNING,
          "report_feedback, Deprecated function call! Use 'recordRatingWidgetWithID' or 'reportFeedbackWidgetManually' in place of this call. Call will be redirected to 'recordRatingWidgetWithID' now!"
        );
        this.recordRatingWidgetWithID(a);
      };
      this.recordRatingWidgetWithID = function (a) {
        b(
          d.INFO,
          "recordRatingWidgetWithID, Providing information about user with ID: [ " +
            a.widget_id +
            " ]"
        );
        if (this.check_consent("star-rating"))
          if (a.widget_id)
            if (a.rating) {
              var c = { key: "[CLY]_star_rating", count: 1, segmentation: {} };
              c.segmentation = oa(
                a,
                "widget_id contactMe platform app_version rating email comment".split(
                  " "
                )
              );
              c.segmentation.app_version ||
                (c.segmentation.app_version =
                  this.metrics._app_version || this.app_version);
              5 < c.segmentation.rating
                ? (b(
                    d.WARNING,
                    "recordRatingWidgetWithID, You have entered a rating higher than 5. Changing it back to 5 now."
                  ),
                  (c.segmentation.rating = 5))
                : 1 > c.segmentation.rating &&
                  (b(
                    d.WARNING,
                    "recordRatingWidgetWithID, You have entered a rating lower than 1. Changing it back to 1 now."
                  ),
                  (c.segmentation.rating = 1));
              b(
                d.INFO,
                "recordRatingWidgetWithID, Reporting Rating Widget: ",
                c
              );
              p(c);
            } else
              b(
                d.ERROR,
                "recordRatingWidgetWithID, Rating Widget must contain rating property"
              );
          else
            b(
              d.ERROR,
              "recordRatingWidgetWithID, Rating Widget must contain widget_id property"
            );
      };
      this.reportFeedbackWidgetManually = function (a, c, e) {
        if (this.check_consent("feedback"))
          if (a && c)
            if (a._id)
              if (H)
                b(
                  d.ERROR,
                  "reportFeedbackWidgetManually, Feedback Widgets can not be reported in offline mode"
                );
              else {
                b(
                  d.INFO,
                  "reportFeedbackWidgetManually, Providing information about user with, provided result of the widget with  ID: [ " +
                    a._id +
                    " ] and type: [" +
                    a.type +
                    "]"
                );
                var k = [];
                c = a.type;
                if ("nps" === c) {
                  if (e) {
                    if (!e.rating) {
                      b(
                        d.ERROR,
                        "reportFeedbackWidgetManually, Widget must contain rating property"
                      );
                      return;
                    }
                    e.rating = Math.round(e.rating);
                    10 < e.rating
                      ? (b(
                          d.WARNING,
                          "reportFeedbackWidgetManually, You have entered a rating higher than 10. Changing it back to 10 now."
                        ),
                        (e.rating = 10))
                      : 0 > e.rating &&
                        (b(
                          d.WARNING,
                          "reportFeedbackWidgetManually, You have entered a rating lower than 0. Changing it back to 0 now."
                        ),
                        (e.rating = 0));
                    k = ["rating", "comment"];
                  }
                  var l = "[CLY]_nps";
                } else if ("survey" === c) {
                  if (e) {
                    if (1 > Object.keys(e).length) {
                      b(
                        d.ERROR,
                        "reportFeedbackWidgetManually, Widget should have answers to be reported"
                      );
                      return;
                    }
                    k = Object.keys(e);
                  }
                  l = "[CLY]_survey";
                } else if ("rating" === c) {
                  if (e) {
                    if (!e.rating) {
                      b(
                        d.ERROR,
                        "reportFeedbackWidgetManually, Widget must contain rating property"
                      );
                      return;
                    }
                    e.rating = Math.round(e.rating);
                    5 < e.rating
                      ? (b(
                          d.WARNING,
                          "reportFeedbackWidgetManually, You have entered a rating higher than 5. Changing it back to 5 now."
                        ),
                        (e.rating = 5))
                      : 1 > e.rating &&
                        (b(
                          d.WARNING,
                          "reportFeedbackWidgetManually, You have entered a rating lower than 1. Changing it back to 1 now."
                        ),
                        (e.rating = 1));
                    k = ["rating", "comment", "email", "contactMe"];
                  }
                  l = "[CLY]_star_rating";
                } else {
                  b(
                    d.ERROR,
                    "reportFeedbackWidgetManually, Widget has an unacceptable type"
                  );
                  return;
                }
                a = {
                  key: l,
                  count: 1,
                  segmentation: {
                    widget_id: a._id,
                    platform: this.platform,
                    app_version: this.metrics._app_version || this.app_version,
                  },
                };
                if (null === e) a.segmentation.closed = 1;
                else {
                  l = a.segmentation;
                  if (k) {
                    for (var f, m = 0, q = k.length; m < q; m++)
                      (f = k[m]), "undefined" !== typeof e[f] && (l[f] = e[f]);
                    e = l;
                  } else e = void 0;
                  a.segmentation = e;
                }
                b(
                  d.INFO,
                  "reportFeedbackWidgetManually, Reporting " + c + ": ",
                  a
                );
                p(a);
              }
            else
              b(
                d.ERROR,
                "reportFeedbackWidgetManually, Feedback Widgets must contain _id property"
              );
          else
            b(
              d.ERROR,
              "reportFeedbackWidgetManually, Widget data and/or Widget object not provided. Aborting."
            );
      };
      this.show_feedback_popup = function (a) {
        b(
          d.WARNING,
          "show_feedback_popup, Deprecated function call! Use 'presentRatingWidgetWithID' in place of this call. Call will be redirected now!"
        );
        this.presentRatingWidgetWithID(a);
      };
      this.presentRatingWidgetWithID = function (a) {
        b(
          d.INFO,
          "presentRatingWidgetWithID, Showing rating widget popup for the widget with ID: [ " +
            a +
            " ]"
        );
        this.check_consent("star-rating") &&
          (H
            ? b(
                d.ERROR,
                "presentRatingWidgetWithID, Cannot show ratingWidget popup in offline mode"
              )
            : aa(
                "presentRatingWidgetWithID",
                this.url + "/o/feedback/widget",
                { widget_id: a },
                function (c, e, k) {
                  if (c)
                    b(
                      d.ERROR,
                      "presentRatingWidgetWithID, An error occurred: " + c
                    );
                  else
                    try {
                      var l = JSON.parse(k);
                      O(l, !1);
                    } catch (f) {
                      b(
                        d.ERROR,
                        "presentRatingWidgetWithID, JSON parse failed: " + f
                      );
                    }
                },
                !0
              ));
      };
      this.initialize_feedback_popups = function (a) {
        b(
          d.WARNING,
          "initialize_feedback_popups, Deprecated function call! Use 'initializeRatingWidgets' in place of this call. Call will be redirected now!"
        );
        this.initializeRatingWidgets(a);
      };
      this.initializeRatingWidgets = function (a) {
        b(
          d.INFO,
          "initializeRatingWidgets, Initializing rating widget with provided widget IDs:[ " +
            a +
            "]"
        );
        if (this.check_consent("star-rating")) {
          a || (a = y("cly_fb_widgets"));
          for (
            var c = document.getElementsByClassName("countly-feedback-sticker");
            0 < c.length;

          )
            c[0].remove();
          aa(
            "initializeRatingWidgets",
            this.url + "/o/feedback/multiple-widgets-by-id",
            { widgets: JSON.stringify(a) },
            function (e, k, l) {
              if (e)
                b(d.ERROR, "initializeRatingWidgets, An error occurred: " + e);
              else
                try {
                  var f = JSON.parse(l);
                  for (e = 0; e < f.length; e++)
                    if ("true" === f[e].is_active) {
                      var m = f[e].target_devices,
                        q = cb();
                      if (m[q])
                        if (
                          ("string" === typeof f[e].hide_sticker &&
                            (f[e].hide_sticker = "true" === f[e].hide_sticker),
                          "all" !== f[e].target_page || f[e].hide_sticker)
                        ) {
                          var t = f[e].target_pages;
                          for (k = 0; k < t.length; k++) {
                            var I =
                                t[k].substr(0, t[k].length - 1) ===
                                window.location.pathname.substr(
                                  0,
                                  t[k].length - 1
                                ),
                              U = t[k] === window.location.pathname;
                            ((t[k].includes("*") && I) || U) &&
                              !f[e].hide_sticker &&
                              O(f[e], !0);
                          }
                        } else O(f[e], !0);
                    }
                } catch (J) {
                  b(d.ERROR, "initializeRatingWidgets, JSON parse error: " + J);
                }
            },
            !0
          );
        }
      };
      this.enable_feedback = function (a) {
        b(
          d.WARNING,
          "enable_feedback, Deprecated function call! Use 'enableRatingWidgets' in place of this call. Call will be redirected now!"
        );
        this.enableRatingWidgets(a);
      };
      this.enableRatingWidgets = function (a) {
        b(
          d.INFO,
          "enableRatingWidgets, Enabling rating widget with params:",
          a
        );
        this.check_consent("star-rating") &&
          (H
            ? b(
                d.ERROR,
                "enableRatingWidgets, Cannot enable rating widgets in offline mode"
              )
            : (v("cly_fb_widgets", a.popups || a.widgets),
              Da(
                this.url + "/star-rating/stylesheets/countly-feedback-web.css"
              ),
              (a = a.popups || a.widgets),
              0 < a.length
                ? (document.body.insertAdjacentHTML(
                    "beforeend",
                    '<div id="cfbg"></div>'
                  ),
                  this.initializeRatingWidgets(a))
                : b(
                    d.ERROR,
                    "enableRatingWidgets, You should provide at least one widget id as param. Read documentation for more detail. https://resources.count.ly/plugins/feedback"
                  )));
      };
      this.get_available_feedback_widgets = function (a) {
        b(
          d.INFO,
          "get_available_feedback_widgets, Getting the feedback list, callback function is provided:[" +
            !!a +
            "]"
        );
        this.check_consent("feedback")
          ? H
            ? b(
                d.ERROR,
                "get_available_feedback_widgets, Cannot enable feedback widgets in offline mode."
              )
            : aa(
                "get_available_feedback_widgets",
                this.url + Fa,
                {
                  method: "feedback",
                  device_id: this.device_id,
                  app_key: this.app_key,
                },
                function (c, e, k) {
                  if (c)
                    b(
                      d.ERROR,
                      "get_available_feedback_widgets, Error occurred while fetching feedbacks: " +
                        c
                    ),
                      a && a(null, c);
                  else
                    try {
                      var l = JSON.parse(k).result || [];
                      a && a(l, null);
                    } catch (f) {
                      b(
                        d.ERROR,
                        "get_available_feedback_widgets, Error while parsing feedback widgets list: " +
                          f
                      ),
                        a && a(null, f);
                    }
                },
                !1
              )
          : a && a(null, Error("Consent for feedback not provided."));
      };
      this.getFeedbackWidgetData = function (a, c) {
        if (a.type)
          if (
            (b(
              d.INFO,
              "getFeedbackWidgetData, Retrieving data for: [" +
                JSON.stringify(a) +
                "], callback function is provided:[" +
                !!c +
                "]"
            ),
            this.check_consent("feedback"))
          )
            if (H)
              b(
                d.ERROR,
                "getFeedbackWidgetData, Cannot enable feedback widgets in offline mode."
              );
            else {
              var e = this.url,
                k = {
                  widget_id: a._id,
                  shown: 1,
                  sdk_version: "22.06.2",
                  sdk_name: "javascript_native_web",
                  platform: this.platform,
                  app_version: this.app_version,
                };
              if ("nps" === a.type) e += "/o/surveys/nps/widget";
              else if ("survey" === a.type) e += "/o/surveys/survey/widget";
              else if ("rating" === a.type) e += "/o/surveys/rating/widget";
              else {
                b(
                  d.ERROR,
                  "getFeedbackWidgetData, Unknown type info: [" + a.type + "]"
                );
                return;
              }
              aa(
                "getFeedbackWidgetData",
                e,
                k,
                function (l, f, m) {
                  if (l)
                    b(
                      d.ERROR,
                      "getFeedbackWidgetData, Error occurred while fetching feedbacks: " +
                        l
                    ),
                      c && c(null, l);
                  else
                    try {
                      var q = JSON.parse(m);
                      c && c(q, null);
                    } catch (t) {
                      b(
                        d.ERROR,
                        "getFeedbackWidgetData, Error while parsing feedback widgets list: " +
                          t
                      ),
                        c && c(null, t);
                    }
                },
                !0
              );
            }
          else c && c(null, Error("Consent for feedback not provided."));
        else
          b(
            d.ERROR,
            "getFeedbackWidgetData, Expected the provided widget object to have a type but got: [" +
              JSON.stringify(a) +
              "], aborting."
          );
      };
      this.present_feedback_widget = function (a, c, e) {
        function k(z) {
          document.getElementById(
            "countly-surveys-wrapper-" + z._id
          ).style.display = "block";
          document.getElementById("csbg").style.display = "block";
        }
        function l(z) {
          if (!z.appearance.hideS) {
            b(
              d.DEBUG,
              "present_feedback_widget, handling the sticker as it was not set to hidden"
            );
            var N = document.createElement("div");
            N.innerText = z.appearance.text;
            N.style.color =
              7 > z.appearance.text_color.length
                ? "#" + z.appearance.text_color
                : z.appearance.text_color;
            N.style.backgroundColor =
              7 > z.appearance.bg_color.length
                ? "#" + z.appearance.bg_color
                : z.appearance.bg_color;
            N.className =
              "countly-feedback-sticker  " +
              z.appearance.position +
              "-" +
              z.appearance.size;
            N.id = "countly-feedback-sticker-" + z._id;
            document.body.appendChild(N);
            x(
              document.getElementById("countly-feedback-sticker-" + z._id),
              "click",
              function () {
                document.getElementById(
                  "countly-ratings-wrapper-" + z._id
                ).style.display = "flex";
                document.getElementById("csbg").style.display = "block";
              }
            );
          }
          x(
            document.getElementById("countly-feedback-close-icon-" + z._id),
            "click",
            function () {
              document.getElementById(
                "countly-ratings-wrapper-" + z._id
              ).style.display = "none";
              document.getElementById("csbg").style.display = "none";
            }
          );
        }
        b(
          d.INFO,
          "present_feedback_widget, Presenting the feedback widget by appending to the element with ID: [ " +
            c +
            " ] and className: [ " +
            e +
            " ]"
        );
        if (this.check_consent("feedback"))
          if (!a || "object" !== typeof a || Array.isArray(a))
            b(
              d.ERROR,
              "present_feedback_widget, Please provide at least one feedback widget object."
            );
          else
            try {
              var f = this.url;
              if ("nps" === a.type)
                b(d.DEBUG, "present_feedback_widget, Widget type: nps."),
                  (f += "/feedback/nps");
              else if ("survey" === a.type)
                b(d.DEBUG, "present_feedback_widget, Widget type: survey."),
                  (f += "/feedback/survey");
              else if ("rating" === a.type)
                b(d.DEBUG, "present_feedback_widget, Widget type: rating."),
                  (f += "/feedback/rating");
              else {
                b(
                  d.ERROR,
                  "present_feedback_widget, Feedback widget only accepts nps, rating and survey types."
                );
                return;
              }
              var m = window.origin || window.location.origin;
              if ("rating" === a.type) {
                b(
                  d.DEBUG,
                  "present_feedback_widget, Loading css for rating widget."
                );
                var q = "ratings";
                Da(
                  this.url + "/star-rating/stylesheets/countly-feedback-web.css"
                );
              } else
                b(
                  d.DEBUG,
                  "present_feedback_widget, Loading css for survey or nps."
                ),
                  Da(this.url + "/surveys/stylesheets/countly-surveys.css"),
                  (q = "surveys");
              f += "?widget_id=" + a._id;
              f += "&app_key=" + this.app_key;
              f += "&device_id=" + this.device_id;
              f += "&sdk_name=javascript_native_web";
              f += "&platform=" + this.platform;
              f += "&app_version=" + this.app_version;
              f += "&sdk_version=22.06.2";
              f += "&origin=" + m;
              f += "&widget_v=web";
              var t = document.createElement("iframe");
              t.src = f;
              t.name = "countly-" + q + "-iframe";
              t.id = "countly-" + q + "-iframe";
              var I = !1;
              t.onload = function () {
                I &&
                  ((document.getElementById(
                    "countly-" + q + "-wrapper-" + a._id
                  ).style.display = "none"),
                  (document.getElementById("csbg").style.display = "none"));
                I = !0;
                b(d.DEBUG, "present_feedback_widget, Loaded iframe.");
              };
              for (var U = document.getElementById("csbg"); U; )
                U.remove(),
                  (U = document.getElementById("csbg")),
                  b(d.DEBUG, "present_feedback_widget, Removing past overlay.");
              var J = document.getElementsByClassName(
                "countly-" + q + "-wrapper"
              );
              for (f = 0; f < J.length; f++)
                J[f].remove(),
                  b(d.DEBUG, "present_feedback_widget, Removed a wrapper.");
              J = document.createElement("div");
              J.className = "countly-" + q + "-wrapper";
              J.id = "countly-" + q + "-wrapper-" + a._id;
              "survey" === a.type &&
                (J.className = J.className + " " + a.appearance.position);
              var ca = document.body;
              f = !1;
              c &&
                (document.getElementById(c)
                  ? ((ca = document.getElementById(c)), (f = !0))
                  : b(
                      d.ERROR,
                      "present_feedback_widget, Provided ID not found."
                    ));
              f ||
                (e &&
                  (document.getElementsByClassName(e)[0]
                    ? (ca = document.getElementsByClassName(e)[0])
                    : b(
                        d.ERROR,
                        "present_feedback_widget, Provided class not found."
                      )));
              ca.insertAdjacentHTML("beforeend", '<div id="csbg"></div>');
              ca.appendChild(J);
              if ("rating" === a.type) {
                var ra = document.createElement("div");
                ra.className = "countly-ratings-overlay";
                ra.id = "countly-ratings-overlay-" + a._id;
                J.appendChild(ra);
                b(
                  d.DEBUG,
                  "present_feedback_widget, appended the rating overlay to wrapper"
                );
                x(
                  document.getElementById("countly-ratings-overlay-" + a._id),
                  "click",
                  function () {
                    document.getElementById(
                      "countly-ratings-wrapper-" + a._id
                    ).style.display = "none";
                  }
                );
              }
              J.appendChild(t);
              b(d.DEBUG, "present_feedback_widget, Appended the iframe");
              x(window, "message", function (z) {
                var N = {};
                try {
                  (N = JSON.parse(z.data)),
                    b(
                      d.DEBUG,
                      "present_feedback_widget, Parsed response message " + N
                    );
                } catch (tb) {
                  b(
                    d.ERROR,
                    "present_feedback_widget, Error while parsing message body " +
                      tb
                  );
                }
                N.close
                  ? ((document.getElementById(
                      "countly-" + q + "-wrapper-" + a._id
                    ).style.display = "none"),
                    (document.getElementById("csbg").style.display = "none"))
                  : b(
                      d.DEBUG,
                      "present_feedback_widget, Closing signal not sent yet"
                    );
              });
              if ("survey" === a.type) {
                var L = !1;
                switch (a.showPolicy) {
                  case "afterPageLoad":
                    "complete" === document.readyState
                      ? L || ((L = !0), k(a))
                      : x(document, "readystatechange", function (z) {
                          "complete" !== z.target.readyState ||
                            L ||
                            ((L = !0), k(a));
                        });
                    break;
                  case "afterConstantDelay":
                    setTimeout(function () {
                      L || ((L = !0), k(a));
                    }, 1e4);
                    break;
                  case "onAbandon":
                    "complete" === document.readyState
                      ? x(document, "mouseleave", function () {
                          L || ((L = !0), k(a));
                        })
                      : x(document, "readystatechange", function (z) {
                          "complete" === z.target.readyState &&
                            x(document, "mouseleave", function () {
                              L || ((L = !0), k(a));
                            });
                        });
                    break;
                  case "onScrollHalfwayDown":
                    x(window, "scroll", function () {
                      if (!L) {
                        var z = Math.max(
                            window.scrollY,
                            document.body.scrollTop,
                            document.documentElement.scrollTop
                          ),
                          N = Ca();
                        z >= N / 2 && ((L = !0), k(a));
                      }
                    });
                    break;
                  default:
                    L || ((L = !0), k(a));
                }
              } else if ("nps" === a.type)
                (document.getElementById(
                  "countly-" + q + "-wrapper-" + a._id
                ).style.display = "block"),
                  (document.getElementById("csbg").style.display = "block");
              else if ("rating" === a.type) {
                var Qa = !1;
                "complete" === document.readyState
                  ? Qa || ((Qa = !0), l(a))
                  : x(document, "readystatechange", function (z) {
                      "complete" !== z.target.readyState ||
                        Qa ||
                        ((Qa = !0), l(a));
                    });
              }
            } catch (z) {
              b(
                d.ERROR,
                "present_feedback_widget, Something went wrong while presenting the widget: " +
                  z
              );
            }
      };
      this.recordError = function (a, c, e) {
        b(d.INFO, "recordError, Recording error");
        if (this.check_consent("crashes") && a) {
          e = e || Ya;
          var k = "";
          "object" === typeof a
            ? "undefined" !== typeof a.stack
              ? (k = a.stack)
              : ("undefined" !== typeof a.name && (k += a.name + ":"),
                "undefined" !== typeof a.message && (k += a.message + "\n"),
                "undefined" !== typeof a.fileName &&
                  (k += "in " + a.fileName + "\n"),
                "undefined" !== typeof a.lineNumber &&
                  (k += "on " + a.lineNumber),
                "undefined" !== typeof a.columnNumber &&
                  (k += ":" + a.columnNumber))
            : (k = a + "");
          if (
            k.length >
            g.maxStackTraceLineLength * g.maxStackTraceLinesPerThread
          ) {
            b(
              d.DEBUG,
              "record_error, Error stack is too long will be truncated"
            );
            k = k.split("\n");
            k.length > g.maxStackTraceLinesPerThread &&
              (k = k.splice(0, g.maxStackTraceLinesPerThread));
            a = 0;
            for (var l = k.length; a < l; a++)
              k[a].length > g.maxStackTraceLineLength &&
                (k[a] = k[a].substring(0, g.maxStackTraceLineLength));
            k = k.join("\n");
          }
          c = !!c;
          a = Ea();
          k = {
            _resolution: a._resolution,
            _error: k,
            _app_version: a._app_version,
            _run: B() - qb,
            _not_os_specific: !0,
            _javascript: !0,
          };
          if (
            (a =
              navigator.battery ||
              navigator.webkitBattery ||
              navigator.mozBattery ||
              navigator.msBattery)
          )
            k._bat = Math.floor(100 * a.level);
          "undefined" !== typeof navigator.onLine &&
            (k._online = !!navigator.onLine);
          k._background = !document.hasFocus();
          0 < ia.length && (k._logs = ia.join("\n"));
          ia = [];
          k._nonfatal = c;
          k._view = this.getViewName();
          "undefined" !== typeof e &&
            ((e = T(
              e,
              g.maxKeyLength,
              g.maxValueSize,
              g.maxSegmentationValues,
              "record_error",
              b
            )),
            (k._custom = e));
          try {
            var f = document
              .createElement("canvas")
              .getContext("experimental-webgl");
            k._opengl = f.getParameter(f.VERSION);
          } catch (m) {
            b(d.ERROR, "Could not get the experimental-webgl context: " + m);
          }
          F({ crash: JSON.stringify(k) });
        }
      };
      this.onStorageChange = function (a, c) {
        b(d.INFO, "onStorageChange, Applying storage changes");
        switch (a) {
          case "cly_queue":
            E = g.deserialize(c || "[]");
            break;
          case "cly_event":
            G = g.deserialize(c || "[]");
            break;
          case "cly_remote_configs":
            M = g.deserialize(c || "{}");
            break;
          case "cly_ignore":
            g.ignore_visitor = g.deserialize(c);
            break;
          case "cly_id":
            g.device_id = g.deserialize(c);
            break;
          case "cly_id_type":
            D = g.deserialize(c);
        }
      };
      this._internals = {
        store: v,
        getDocWidth: Ua,
        getDocHeight: Ca,
        getViewportHeight: eb,
        get_page_coord: Ta,
        get_event_target: Pa,
        add_event: x,
        createNewObjectFromProperties: oa,
        truncateObject: T,
        truncateSingleValue: w,
        stripTrailingSlash: la,
        prepareParams: bb,
        sendXmlHttpRequest: aa,
        isResponseValid: mb,
        getInternalDeviceIdType: function () {
          return D;
        },
        getMsTimestamp: Ra,
        getTimestamp: B,
        isResponseValidBroad: lb,
        log: b,
        getMetrics: Ea,
        generateUUID: ab,
        sendEventsForced: K,
        isUUID: function (a) {
          return /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-4[0-9a-fA-F]{3}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/.test(
            a
          );
        },
        getId: Wa,
        heartBeat: Ha,
        toRequestQueue: F,
        reportViewDuration: Z,
        loadJS: gb,
        loadCSS: Da,
        getLastView: function () {
          return P;
        },
        setToken: ob,
        getToken: function () {
          var a = y("cly_token");
          R("cly_token");
          return a;
        },
        showLoader: hb,
        hideLoader: ib,
        setValueInStorage: v,
        getValueFromStorage: y,
        removeValueFromStorage: R,
        add_cly_events: p,
        processScrollView: Xa,
        processScroll: nb,
        currentUserAgentString: qa,
        userAgentDeviceDetection: cb,
        userAgentSearchBotDetection: db,
        getRequestQueue: function () {
          return E;
        },
        getEventQueue: function () {
          return G;
        },
        clearQueue: function () {
          E = [];
          v("cly_queue", []);
          G = [];
          v("cly_event", []);
        },
      };
      this.initialize();
    };
    n.init = function (h) {
      h = h || {};
      var p = h.app_key || n.app_key;
      if (!n.i || !n.i[p]) {
        h = new n.CountlyClass(h);
        if (!n.i) {
          n.i = {};
          for (var u in h) n[u] = h[u];
        }
        n.i[p] = h;
      }
      return n.i[p];
    };
    var Ba = 0,
      x = function (h, p, u) {
        "undefined" !== typeof h.addEventListener
          ? h.addEventListener(p, u, !1)
          : h.attachEvent("on" + p, u);
      },
      Pa = function (h) {
        return h
          ? "undefined" !== typeof h.target
            ? h.target
            : h.srcElement
          : window.event.srcElement;
      };
    window.addEventListener("storage", function (h) {
      var p = (h.key + "").split("/"),
        u = p.pop();
      p = p.pop();
      if (n.i && n.i[p]) n.i[p].onStorageChange(u, h.newValue);
    });
    n.serialize = function (h) {
      "object" === typeof h && (h = JSON.stringify(h));
      return h;
    };
    n.deserialize = function (h) {
      try {
        h = JSON.parse(h);
      } catch (p) {}
      return h;
    };
    n.getViewName = function () {
      return window.location.pathname;
    };
    n.getViewUrl = function () {
      return window.location.pathname;
    };
    n.getSearchQuery = function () {
      return window.location.search;
    };
    n.DeviceIdType = {
      DEVELOPER_SUPPLIED: 0,
      SDK_GENERATED: 1,
      TEMPORARY_ID: 2,
    };
    return n;
  }
});
