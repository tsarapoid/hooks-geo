(this["webpackJsonphooks-geo"]=this["webpackJsonphooks-geo"]||[]).push([[0],{13:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(1),c=n.n(r),i=(n(13),n(5)),l=n.n(i),u=n(6),m=n.n(u),g=function(t,e,n){var a=String.fromCharCode(97+(t+e+n)%3);return"https://".concat(a,".tile.openstreetmap.org/").concat(n,"/").concat(t,"/").concat(e,".png")},s=function(t){var e=t.latitude,n=void 0===e?45.0428:e,a=t.longitude,r=void 0===a?41.9734:a;return(o.a.createElement(l.a,{provider:g,center:[n,r],width:1500,height:800,zoom:13,minZoom:1,maxZoom:18,zoomSnap:!0,animate:!0,animating:!1,metaWheelZoom:!1,twoFingerDrag:!1,mouseEvents:!0,touchEvents:!0},o.a.createElement(m.a,{anchor:[n,r],payload:1,onClick:function(t){t.event,t.anchor,t.payload}})))},d=n(7),h=n(2),v={enableHighAccuracy:!1,timeout:1/0,maximumAge:0},p=function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;console.log(t,e);var n=Object(a.useState)({}),o=Object(h.a)(n,2),r=o[0],c=o[1],i=Object(a.useState)(null),l=Object(h.a)(i,2),u=l[0],m=l[1],g=function(t){var e=t.coords,n=t.timestamp;c({latitude:e.latitude,longitude:e.longitude,accuracy:e.accuracy,timestamp:n})},s=function(t){m(t.message)};return Object(a.useEffect)((function(){if(navigator&&navigator.geolocation){var n=null;return t?n=navigator.geolocation.watchPosition(g,s,e):navigator.geolocation.getCurrentPosition(g,s,e),function(){return n&&navigator.geolocation.clearWatch(n)}}m("Geolocation is not supported")}),[t,e]),Object(d.a)({},r,{error:u})}(t.watch,t.settings),n=e.latitude,r=e.longitude,c=e.timestamp,i=e.accuracy,l=e.error,u=new Date(c),m=u.toTimeString();console.log(u.toLocaleString());var g=n||l?null:"Fetching location";return(o.a.createElement(o.a.Fragment,null,"latitude: ",n,o.a.createElement("br",null),"longitude: ",r,o.a.createElement("br",null),"timestamp: ",m,o.a.createElement("br",null),"accuracy: ",i&&"".concat(i," m"),o.a.createElement("br",null),"error: ",l," ",g,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(s,{latitude:n,longitude:r})))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,{watch:!0,settings:{enableHighAccuracy:!0,timeout:1/0,maximumAge:0}})),document.getElementById("root"))},8:function(t,e,n){t.exports=n(21)}},[[8,1,2]]]);
//# sourceMappingURL=main.1dbeee76.chunk.js.map