/*
	Big Picture by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

document.addEventListener("DOMContentLoaded", function () {
  const socialBar = document.getElementById("socialBar");
  let lastScrollTop = 0;

  window.addEventListener(
    "scroll",
    function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scroll down
        socialBar.classList.add("hidden");
      } else {
        // Scroll up
        socialBar.classList.remove("hidden");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    },
    false
  );
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  const leftLine = document.querySelector(".line.left");
  const rightLine = document.querySelector(".line.right");

  if (scrollPosition > windowHeight / 2) {
    leftLine.style.transform = "translateX(100px)";
    rightLine.style.transform = "translateX(-100px)";
  } else {
    leftLine.style.transform = "translateX(0)";
    rightLine.style.transform = "translateX(0)";
  }

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    socialBar.classList.add("hidden");
  } else {
    // Scroll up
    socialBar.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $all = $body.add($header);

  // Breakpoints.
  breakpoints({
    xxlarge: ["1681px", "1920px"],
    xlarge: ["1281px", "1680px"],
    large: ["1001px", "1280px"],
    medium: ["737px", "1000px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  //Greeting cycler

  const greetings = [
    "Hello.", // English
    "Hola.", // Spanish
    "Bonjour.", // French
    "Hallo.", // German
    "Ciao.", // Italian
    "こんにちは。", // Japanese
    "안녕하세요.", // Korean
    "你好。", // Chinese
    "Привет.", // Russian
    "Olá.", // Portuguese
    "Hej.", // Swedish (Scandinavian)
    "Hei.", // Norwegian
    "Salve.", // Latin
    "Merhaba.", // Turkish
    "Γειά σου.", // Greek
    "שלום.", // Hebrew
    "مرحبا.", // Arabic
    "नमस्ते।", // Hindi
    "สวัสดี.", // Thai
    "Xin chào.", // Vietnamese
  ];

  function changeGreeting() {
    if (!$("body").hasClass("is-preload")) {
      setTimeout(() => {
        const greetingElement = document.getElementById("greeting");
        const randomGreeting =
          greetings[Math.floor(Math.random() * greetings.length)];
        greetingElement.textContent = randomGreeting;
      }, 3000);
    }
  }

  setInterval(changeGreeting, 3000); // Change every 3 seconds

  // Touch mode.
  if (browser.mobile) $body.addClass("is-touch");
  else {
    breakpoints.on("<=small", function () {
      $body.addClass("is-touch");
    });

    breakpoints.on(">small", function () {
      $body.removeClass("is-touch");
    });
  }

  // Fix: IE flexbox fix.
  if (browser.name == "ie") {
    var $main = $(".main.fullscreen"),
      IEResizeTimeout;

    $window
      .on("resize.ie-flexbox-fix", function () {
        clearTimeout(IEResizeTimeout);

        IEResizeTimeout = setTimeout(function () {
          var wh = $window.height();

          $main.each(function () {
            var $this = $(this);

            $this.css("height", "");

            if ($this.height() <= wh) $this.css("height", wh - 50 + "px");
          });
        });
      })
      .triggerHandler("resize.ie-flexbox-fix");
  }

  // Gallery.
  $window.on("load", function () {
    // var $gallery = $(".gallery");

    // $gallery.poptrox({
    //   baseZIndex: 10001,
    //   useBodyOverflow: false,
    //   usePopupEasyClose: false,
    //   overlayColor: "#1f2328",
    //   overlayOpacity: 0.65,
    //   usePopupDefaultStyling: false,
    //   usePopupCaption: true,
    //   popupLoaderText: "",
    //   windowMargin: 50,
    //   usePopupNav: true,
    // });

    // Hack: Adjust margins when 'small' activates.
    breakpoints.on(">small", function () {
      $gallery.each(function () {
        $(this)[0]._poptrox.windowMargin = 50;
      });
    });

    breakpoints.on("<=small", function () {
      $gallery.each(function () {
        $(this)[0]._poptrox.windowMargin = 5;
      });
    });
  });

  // Section transitions.
  if (browser.canUse("transition")) {
    var on = function () {
      // Galleries.
      $(".gallery").scrollex({
        top: "30vh",
        bottom: "30vh",
        delay: 50,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });

      // Generic sections.
      $(".main.style1").scrollex({
        mode: "middle",
        delay: 100,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });

      $(".main.style2").scrollex({
        mode: "middle",
        delay: 100,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });

      // Contact.
      $("#contact").scrollex({
        top: "50%",
        delay: 50,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });
    };

    var off = function () {
      // Galleries.
      $(".gallery").unscrollex();

      // Generic sections.
      $(".main.style1").unscrollex();

      $(".main.style2").unscrollex();

      // Contact.
      $("#contact").unscrollex();
    };

    breakpoints.on("<=small", off);
    breakpoints.on(">small", on);
  }

  // Events.
  var resizeTimeout, resizeScrollTimeout;

  $window
    .on("resize", function () {
      // Disable animations/transitions.
      $body.addClass("is-resizing");

      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(function () {
        // Update scrolly links.
        $('a[href^="#"]').scrolly({
          speed: 1500,
          offset: $header.outerHeight() - 1,
        });

        // Re-enable animations/transitions.
        setTimeout(function () {
          $body.removeClass("is-resizing");
          $window.trigger("scroll");
        }, 0);
      }, 100);
    })
    .on("load", function () {
      $window.trigger("resize");
    });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  // Lazy-load animated GIFs when near the viewport
  const lazyGifs = document.querySelectorAll("img.lazy-gif[data-src]");

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            img.classList.remove("lazy-gif");
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    lazyGifs.forEach((img) => io.observe(img));
  } else {
    // Fallback: just load them
    lazyGifs.forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      img.classList.remove("lazy-gif");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("#two");
  const video = document.querySelector("#hero-video");
  if (!section || !video) return;

  // Ensure video is paused initially
  try {
    video.pause();
  } catch (_) {}

  // Helper to play/pause safely
  const ensurePlayState = (shouldPlay) => {
    if (shouldPlay) {
      if (video.paused) {
        const p = video.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {
            /* ignore autoplay rejections; video is muted */
          });
        }
      }
    } else {
      if (!video.paused) video.pause();
    }
  };

  // Pause video when tab is hidden; resume (subject to visibility threshold) when visible
  const handleVisibility = () => {
    if (document.hidden) {
      ensurePlayState(false);
    } else {
      // Re-evaluate intersection immediately on visibility return
      if (lastRatio >= 0.5) ensurePlayState(true);
    }
  };
  document.addEventListener("visibilitychange", handleVisibility);

  let lastRatio = 0;

  // Play only when >= 50% of the section is visible
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target !== section) return;
        lastRatio = entry.intersectionRatio;
        if (entry.intersectionRatio >= 0.5) {
          ensurePlayState(true);
        } else {
          ensurePlayState(false);
        }
      });
    },
    {
      root: null,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  );

  io.observe(section);

  // If user jumps directly to #two on load, IO will still fire an initial entry.
});
