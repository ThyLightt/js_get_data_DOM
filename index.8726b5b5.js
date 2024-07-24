var t=document.querySelectorAll("span.population"),e=0,n=0;t.forEach(function(t){var o=parseInt(t.textContent.split(",").join(""));!isNaN(o)&&(e+=o,n++)});var o=e/n,a=function(t){return t.toLocaleString("en-US")};document.querySelector("span.total-population").textContent=a(e),document.querySelector("span.average-population").textContent=a(o);
//# sourceMappingURL=index.8726b5b5.js.map
