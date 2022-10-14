export const trackingOvonts = () => {};

trackingOvonts.init = (apiKey) => {
  const Ovonts = Ovonts || {};
  Ovonts.q = Ovonts.q || [];
  Ovonts.app_key = apiKey;
  Ovonts.url = "https://analytics.ovonts.com";

  !(function () {
    const o = document.createElement("script");
    (o.type = "text/javascript"),
      (o.async = !0),
      (o.src = "a.js"),
      (o.onload = function () {
        Ovonts.init();
      });
    const e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(o, e);
  })();
  return Ovonts;
};

trackingOvonts.track = (
  eventName,
  eventData,
) => {
  try {
    Ovonts.q.push([
      "add_event",
      {
        key: eventName,
        segmentation: {
          eventData,
        },
      },
    ]);
  } catch (e) {
    console.log(e);
  }
};
