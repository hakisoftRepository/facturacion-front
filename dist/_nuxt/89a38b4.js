(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{345:function(t,e,r){"use strict";r.r(e);var l=r(32),o={name:"IndexPage",head:function(){return{title:"Index"}},data:function(){return{user:{}}},mounted:function(){var t=this;this.$nextTick((function(){var e,r,o=localStorage.getItem("userAuth");t.user=JSON.parse(o);var n=document.getElementById("chart-bars").getContext("2d");new Chart(n,{type:"bar",data:{labels:["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Sales",tension:.4,borderWidth:0,borderRadius:4,borderSkipped:!1,backgroundColor:"#fff",data:[450,200,100,220,500,100,400,230,500],maxBarThickness:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},interaction:{intersect:!1,mode:"index"},scales:{y:{grid:{drawBorder:!1,display:!1,drawOnChartArea:!1,drawTicks:!1},ticks:{suggestedMin:0,suggestedMax:500,beginAtZero:!0,padding:15,font:{size:14,family:"Open Sans",style:"normal",lineHeight:2},color:"#fff"}},x:{grid:{drawBorder:!1,display:!1,drawOnChartArea:!1,drawTicks:!1},ticks:{display:!1}}}}});var d=document.getElementById("chart-line").getContext("2d"),c=d.createLinearGradient(0,230,0,50);c.addColorStop(1,"rgba(203,12,159,0.2)"),c.addColorStop(.2,"rgba(72,72,176,0.0)"),c.addColorStop(0,"rgba(203,12,159,0)");var v=d.createLinearGradient(0,230,0,50);v.addColorStop(1,"rgba(20,23,39,0.2)"),v.addColorStop(.2,"rgba(72,72,176,0.0)"),v.addColorStop(0,"rgba(20,23,39,0)"),new Chart(d,{type:"line",data:{labels:["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[(e={label:"Mobile apps",tension:.4,borderWidth:0,pointRadius:0,borderColor:"#cb0c9f"},Object(l.a)(e,"borderWidth",3),Object(l.a)(e,"backgroundColor",c),Object(l.a)(e,"fill",!0),Object(l.a)(e,"data",[50,40,300,220,500,250,400,230,500]),Object(l.a)(e,"maxBarThickness",6),e),(r={label:"Websites",tension:.4,borderWidth:0,pointRadius:0,borderColor:"#3A416F"},Object(l.a)(r,"borderWidth",3),Object(l.a)(r,"backgroundColor",v),Object(l.a)(r,"fill",!0),Object(l.a)(r,"data",[30,90,40,140,290,290,340,230,400]),Object(l.a)(r,"maxBarThickness",6),r)]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},interaction:{intersect:!1,mode:"index"},scales:{y:{grid:{drawBorder:!1,display:!0,drawOnChartArea:!0,drawTicks:!1,borderDash:[5,5]},ticks:{display:!0,padding:10,color:"#b2b9bf",font:{size:11,family:"Open Sans",style:"normal",lineHeight:2}}},x:{grid:{drawBorder:!1,display:!1,drawOnChartArea:!1,drawTicks:!1,borderDash:[5,5]},ticks:{display:!0,color:"#b2b9bf",padding:20,font:{size:11,family:"Open Sans",style:"normal",lineHeight:2}}}}}})}))}},n=r(51),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("AdminTemplate",[e("div",{attrs:{slot:"body"},slot:"body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-sm-6 mb-xl-0 mb-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("div",{staticClass:"numbers"},[e("p",{staticClass:"text-sm mb-0 text-capitalize font-weight-bold"},[t._v("\n                       Today's Money\n                     ")]),t._v(" "),e("h5",{staticClass:"font-weight-bolder mb-0"},[t._v("\n                       $53,000\n                       "),e("span",{staticClass:"text-success text-sm font-weight-bolder"},[t._v("+55%")])])])]),t._v(" "),e("div",{staticClass:"col-4 text-end"},[e("div",{staticClass:"icon icon-shape bg-gradient-primary shadow text-center border-radius-md"},[e("i",{staticClass:"ni ni-money-coins text-lg opacity-10",attrs:{"aria-hidden":"true"}})])])])])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-sm-6 mb-xl-0 mb-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("div",{staticClass:"numbers"},[e("p",{staticClass:"text-sm mb-0 text-capitalize font-weight-bold"},[t._v("\n                       Today's Users\n                     ")]),t._v(" "),e("h5",{staticClass:"font-weight-bolder mb-0"},[t._v("\n                       2,300\n                       "),e("span",{staticClass:"text-success text-sm font-weight-bolder"},[t._v("+3%")])])])]),t._v(" "),e("div",{staticClass:"col-4 text-end"},[e("div",{staticClass:"icon icon-shape bg-gradient-primary shadow text-center border-radius-md"},[e("i",{staticClass:"ni ni-world text-lg opacity-10",attrs:{"aria-hidden":"true"}})])])])])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-sm-6 mb-xl-0 mb-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("div",{staticClass:"numbers"},[e("p",{staticClass:"text-sm mb-0 text-capitalize font-weight-bold"},[t._v("\n                       New Clients\n                     ")]),t._v(" "),e("h5",{staticClass:"font-weight-bolder mb-0"},[t._v("\n                       +3,462\n                       "),e("span",{staticClass:"text-danger text-sm font-weight-bolder"},[t._v("-2%")])])])]),t._v(" "),e("div",{staticClass:"col-4 text-end"},[e("div",{staticClass:"icon icon-shape bg-gradient-primary shadow text-center border-radius-md"},[e("i",{staticClass:"ni ni-paper-diploma text-lg opacity-10",attrs:{"aria-hidden":"true"}})])])])])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-sm-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("div",{staticClass:"numbers"},[e("p",{staticClass:"text-sm mb-0 text-capitalize font-weight-bold"},[t._v("\n                       Sales\n                     ")]),t._v(" "),e("h5",{staticClass:"font-weight-bolder mb-0"},[t._v("\n                       $103,430\n                       "),e("span",{staticClass:"text-success text-sm font-weight-bolder"},[t._v("+5%")])])])]),t._v(" "),e("div",{staticClass:"col-4 text-end"},[e("div",{staticClass:"icon icon-shape bg-gradient-primary shadow text-center border-radius-md"},[e("i",{staticClass:"ni ni-cart text-lg opacity-10",attrs:{"aria-hidden":"true"}})])])])])])])]),t._v(" "),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-lg-7 mb-lg-0 mb-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"d-flex flex-column h-100"},[e("p",{staticClass:"mb-1 pt-2 text-bold"},[t._v("Built by developers")]),t._v(" "),e("h5",{staticClass:"font-weight-bolder"},[t._v("Soft UI Dashboard")]),t._v(" "),e("p",{staticClass:"mb-5"},[t._v("\n                       From colors, cards, typography to complex elements, you\n                       will find the full documentation.\n                     ")]),t._v(" "),e("a",{staticClass:"text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto",attrs:{href:"javascript:;"}},[t._v("\n                       Read More\n                       "),e("i",{staticClass:"fas fa-arrow-right text-sm ms-1",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),e("div",{staticClass:"col-lg-5 ms-auto text-center mt-5 mt-lg-0"},[e("div",{staticClass:"bg-gradient-primary border-radius-lg h-100"},[e("img",{staticClass:"position-absolute h-100 w-50 top-0 d-lg-block d-none",attrs:{src:"/assets/img/shapes/waves-white.svg",alt:"waves"}}),t._v(" "),e("div",{staticClass:"position-relative d-flex align-items-center justify-content-center h-100"},[e("img",{staticClass:"w-100 position-relative z-index-2 pt-4",attrs:{src:"/assets/img/illustrations/rocket-white.png",alt:"rocket"}})])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"card h-100 p-3"},[e("div",{staticClass:"overflow-hidden position-relative border-radius-lg bg-cover h-100",staticStyle:{"background-image":"url('/assets/img/ivancik.jpg')"}},[e("span",{staticClass:"mask bg-gradient-dark"}),t._v(" "),e("div",{staticClass:"card-body position-relative z-index-1 d-flex flex-column h-100 p-3"},[e("h5",{staticClass:"text-white font-weight-bolder mb-4 pt-2"},[t._v("\n                   Work with the rockets\n                 ")]),t._v(" "),e("p",{staticClass:"text-white"},[t._v("\n                   Wealth creation is an evolutionarily recent positive-sum\n                   game. It is all about who take the opportunity first.\n                 ")]),t._v(" "),e("a",{staticClass:"text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto",attrs:{href:"javascript:;"}},[t._v("\n                   Read More\n                   "),e("i",{staticClass:"fas fa-arrow-right text-sm ms-1",attrs:{"aria-hidden":"true"}})])])])])])]),t._v(" "),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-lg-5 mb-lg-0 mb-4"},[e("div",{staticClass:"card z-index-2"},[e("div",{staticClass:"card-body p-3"},[e("div",{staticClass:"bg-gradient-dark border-radius-lg py-3 pe-1 mb-3"},[e("div",{staticClass:"chart"},[e("canvas",{staticClass:"chart-canvas",attrs:{id:"chart-bars",height:"170"}})])]),t._v(" "),e("h6",{staticClass:"ms-2 mt-4 mb-0"},[t._v("Active Users")]),t._v(" "),e("p",{staticClass:"text-sm ms-2"},[t._v("\n                 ("),e("span",{staticClass:"font-weight-bolder"},[t._v("+23%")]),t._v(") than last week\n               ")]),t._v(" "),e("div",{staticClass:"container border-radius-lg"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-3 py-3 ps-0"},[e("div",{staticClass:"d-flex mb-2"},[e("div",{staticClass:"icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center"},[e("svg",{attrs:{width:"10px",height:"10px",viewBox:"0 0 40 44",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("title",[t._v("document")]),t._v(" "),e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(-1870.000000, -591.000000)",fill:"#FFFFFF","fill-rule":"nonzero"}},[e("g",{attrs:{transform:"translate(1716.000000, 291.000000)"}},[e("g",{attrs:{transform:"translate(154.000000, 300.000000)"}},[e("path",{staticClass:"color-background",attrs:{d:"M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z",opacity:"0.603585379"}}),t._v(" "),e("path",{staticClass:"color-background",attrs:{d:"M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"}})])])])])])]),t._v(" "),e("p",{staticClass:"text-xs mt-1 mb-0 font-weight-bold"},[t._v("Users")])]),t._v(" "),e("h4",{staticClass:"font-weight-bolder"},[t._v("36K")]),t._v(" "),e("div",{staticClass:"progress w-75"},[e("div",{staticClass:"progress-bar bg-dark w-60",attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),e("div",{staticClass:"col-3 py-3 ps-0"},[e("div",{staticClass:"d-flex mb-2"},[e("div",{staticClass:"icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-info text-center me-2 d-flex align-items-center justify-content-center"},[e("svg",{attrs:{width:"10px",height:"10px",viewBox:"0 0 40 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("title",[t._v("spaceship")]),t._v(" "),e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(-1720.000000, -592.000000)",fill:"#FFFFFF","fill-rule":"nonzero"}},[e("g",{attrs:{transform:"translate(1716.000000, 291.000000)"}},[e("g",{attrs:{transform:"translate(4.000000, 301.000000)"}},[e("path",{staticClass:"color-background",attrs:{d:"M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"}}),t._v(" "),e("path",{staticClass:"color-background",attrs:{d:"M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"}}),t._v(" "),e("path",{staticClass:"color-background",attrs:{d:"M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z",opacity:"0.598539807"}}),t._v(" "),e("path",{staticClass:"color-background",attrs:{d:"M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z",opacity:"0.598539807"}})])])])])])]),t._v(" "),e("p",{staticClass:"text-xs mt-1 mb-0 font-weight-bold"},[t._v("Clicks")])]),t._v(" "),e("h4",{staticClass:"font-weight-bolder"},[t._v("2m")]),t._v(" "),e("div",{staticClass:"progress w-75"},[e("div",{staticClass:"progress-bar bg-dark w-90",attrs:{role:"progressbar","aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),e("div",{staticClass:"col-3 py-3 ps-0"},[e("div",{staticClass:"d-flex mb-2"},[e("div",{staticClass:"icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-warning text-center me-2 d-flex align-items-center justify-content-center"},[e("svg",{attrs:{width:"10px",height:"10px",viewBox:"0 0 43 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("title",[t._v("credit-card")]),t._v(" "),e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(-2169.000000, -745.000000)",fill:"#FFFFFF","fill-rule":"nonzero"}},[e("g",{attrs:{transform:"translate(1716.000000, 291.000000)"}},[e("g",{attrs:{transform:"translate(453.000000, 454.000000)"}},[e("path",{staticClass:"color-background",attrs:{d:"M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z",opacity:"0.593633743"}}),t._v(" "),e("path",{staticClass:"color-background",attrs:{d:"M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"}})])])])])])]),t._v(" "),e("p",{staticClass:"text-xs mt-1 mb-0 font-weight-bold"},[t._v("Sales")])]),t._v(" "),e("h4",{staticClass:"font-weight-bolder"},[t._v("435$")]),t._v(" "),e("div",{staticClass:"progress w-75"},[e("div",{staticClass:"progress-bar bg-dark w-30",attrs:{role:"progressbar","aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),e("div",{staticClass:"col-3 py-3 ps-0"},[e("div",{staticClass:"d-flex mb-2"},[e("div",{staticClass:"icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-danger text-center me-2 d-flex align-items-center justify-content-center"},[e("svg",{attrs:{width:"10px",height:"10px",viewBox:"0 0 40 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("title",[t._v("settings")]),t._v(" "),e("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(-2020.000000, -442.000000)",fill:"#FFFFFF","fill-rule":"nonzero"}},[e("g",{attrs:{transform:"translate(1716.000000, 291.000000)"}},[e("g",{attrs:{transform:"translate(304.000000, 151.000000)"}},[e("polygon",{staticClass:"color-background",attrs:{opacity:"0.596981957",points:"18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"}}),t._v(" "),e("path",{staticClass:"color-background",attrs:{d:"M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z",opacity:"0.596981957"}}),t._v(" "),e("path",{staticClass:"color-background",attrs:{d:"M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"}})])])])])])]),t._v(" "),e("p",{staticClass:"text-xs mt-1 mb-0 font-weight-bold"},[t._v("Items")])]),t._v(" "),e("h4",{staticClass:"font-weight-bolder"},[t._v("43")]),t._v(" "),e("div",{staticClass:"progress w-75"},[e("div",{staticClass:"progress-bar bg-dark w-50",attrs:{role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}})])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-7"},[e("div",{staticClass:"card z-index-2"},[e("div",{staticClass:"card-header pb-0"},[e("h6",[t._v("Sales overview")]),t._v(" "),e("p",{staticClass:"text-sm"},[e("i",{staticClass:"fa fa-arrow-up text-success"}),t._v(" "),e("span",{staticClass:"font-weight-bold"},[t._v("4% more")]),t._v(" in 2021\n               ")])]),t._v(" "),e("div",{staticClass:"card-body p-3"},[e("div",{staticClass:"chart"},[e("canvas",{staticClass:"chart-canvas",attrs:{id:"chart-line",height:"300"}})])])])])]),t._v(" "),e("div",{staticClass:"row my-4"},[e("div",{staticClass:"col-lg-8 col-md-6 mb-md-0 mb-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header pb-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",[t._v("Projects")]),t._v(" "),e("p",{staticClass:"text-sm mb-0"},[e("i",{staticClass:"fa fa-check text-info",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"font-weight-bold ms-1"},[t._v("30 done")]),t._v(" this\n                     month\n                   ")])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 my-auto text-end"},[e("div",{staticClass:"dropdown float-lg-end pe-4"},[e("a",{staticClass:"cursor-pointer",attrs:{id:"dropdownTable","data-bs-toggle":"dropdown","aria-expanded":"false"}},[e("i",{staticClass:"fa fa-ellipsis-v text-secondary"})]),t._v(" "),e("ul",{staticClass:"dropdown-menu px-2 py-3 ms-sm-n4 ms-n5",attrs:{"aria-labelledby":"dropdownTable"}},[e("li",[e("a",{staticClass:"dropdown-item border-radius-md",attrs:{href:"javascript:;"}},[t._v("Action")])]),t._v(" "),e("li",[e("a",{staticClass:"dropdown-item border-radius-md",attrs:{href:"javascript:;"}},[t._v("Another action")])]),t._v(" "),e("li",[e("a",{staticClass:"dropdown-item border-radius-md",attrs:{href:"javascript:;"}},[t._v("Something else here")])])])])])])]),t._v(" "),e("div",{staticClass:"card-body px-0 pb-2"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table align-items-center mb-0"},[e("thead",[e("tr",[e("th",{staticClass:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"},[t._v("\n                         Companies\n                       ")]),t._v(" "),e("th",{staticClass:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"},[t._v("\n                         Members\n                       ")]),t._v(" "),e("th",{staticClass:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"},[t._v("\n                         Budget\n                       ")]),t._v(" "),e("th",{staticClass:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"},[t._v("\n                         Completion\n                       ")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("div",{staticClass:"d-flex px-2 py-1"},[e("div",[e("img",{staticClass:"avatar avatar-sm me-3",attrs:{src:"/assets/img/small-logos/logo-xd.svg",alt:"xd"}})]),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-content-center"},[e("h6",{staticClass:"mb-0 text-sm"},[t._v("Soft UI XD Version")])])])]),t._v(" "),e("td",[e("div",{staticClass:"avatar-group mt-2"},[e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Ryan Tompson"}},[e("img",{attrs:{src:"/assets/img/team-1.jpg",alt:"team1"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Romina Hadid"}},[e("img",{attrs:{src:"/assets/img/team-2.jpg",alt:"team2"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Alexander Smith"}},[e("img",{attrs:{src:"/assets/img/team-3.jpg",alt:"team3"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Jessica Doe"}},[e("img",{attrs:{src:"/assets/img/team-4.jpg",alt:"team4"}})])])]),t._v(" "),e("td",{staticClass:"align-middle text-center text-sm"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v("\n                           $14,000\n                         ")])]),t._v(" "),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"progress-wrapper w-75 mx-auto"},[e("div",{staticClass:"progress-info"},[e("div",{staticClass:"progress-percentage"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v("60%")])])]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar bg-gradient-info w-60",attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100"}})])])])]),t._v(" "),e("tr",[e("td",[e("div",{staticClass:"d-flex px-2 py-1"},[e("div",[e("img",{staticClass:"avatar avatar-sm me-3",attrs:{src:"/assets/img/small-logos/logo-atlassian.svg",alt:"atlassian"}})]),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-content-center"},[e("h6",{staticClass:"mb-0 text-sm"},[t._v("Add Progress Track")])])])]),t._v(" "),e("td",[e("div",{staticClass:"avatar-group mt-2"},[e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Romina Hadid"}},[e("img",{attrs:{src:"/assets/img/team-2.jpg",alt:"team5"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Jessica Doe"}},[e("img",{attrs:{src:"/assets/img/team-4.jpg",alt:"team6"}})])])]),t._v(" "),e("td",{staticClass:"align-middle text-center text-sm"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v(" $3,000 ")])]),t._v(" "),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"progress-wrapper w-75 mx-auto"},[e("div",{staticClass:"progress-info"},[e("div",{staticClass:"progress-percentage"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v("10%")])])]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar bg-gradient-info w-10",attrs:{role:"progressbar","aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"}})])])])]),t._v(" "),e("tr",[e("td",[e("div",{staticClass:"d-flex px-2 py-1"},[e("div",[e("img",{staticClass:"avatar avatar-sm me-3",attrs:{src:"/assets/img/small-logos/logo-slack.svg",alt:"team7"}})]),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-content-center"},[e("h6",{staticClass:"mb-0 text-sm"},[t._v("Fix Platform Errors")])])])]),t._v(" "),e("td",[e("div",{staticClass:"avatar-group mt-2"},[e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Romina Hadid"}},[e("img",{attrs:{src:"/assets/img/team-3.jpg",alt:"team8"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Jessica Doe"}},[e("img",{attrs:{src:"/assets/img/team-1.jpg",alt:"team9"}})])])]),t._v(" "),e("td",{staticClass:"align-middle text-center text-sm"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v("\n                           Not set\n                         ")])]),t._v(" "),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"progress-wrapper w-75 mx-auto"},[e("div",{staticClass:"progress-info"},[e("div",{staticClass:"progress-percentage"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v("100%")])])]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar bg-gradient-success w-100",attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})])])])]),t._v(" "),e("tr",[e("td",[e("div",{staticClass:"d-flex px-2 py-1"},[e("div",[e("img",{staticClass:"avatar avatar-sm me-3",attrs:{src:"/assets/img/small-logos/logo-spotify.svg",alt:"spotify"}})]),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-content-center"},[e("h6",{staticClass:"mb-0 text-sm"},[t._v("\n                               Launch our Mobile App\n                             ")])])])]),t._v(" "),e("td",[e("div",{staticClass:"avatar-group mt-2"},[e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Ryan Tompson"}},[e("img",{attrs:{src:"/assets/img/team-4.jpg",alt:"user1"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Romina Hadid"}},[e("img",{attrs:{src:"/assets/img/team-3.jpg",alt:"user2"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Alexander Smith"}},[e("img",{attrs:{src:"/assets/img/team-4.jpg",alt:"user3"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Jessica Doe"}},[e("img",{attrs:{src:"/assets/img/team-1.jpg",alt:"user4"}})])])]),t._v(" "),e("td",{staticClass:"align-middle text-center text-sm"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v("\n                           $20,500\n                         ")])]),t._v(" "),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"progress-wrapper w-75 mx-auto"},[e("div",{staticClass:"progress-info"},[e("div",{staticClass:"progress-percentage"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v("100%")])])]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar bg-gradient-success w-100",attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})])])])]),t._v(" "),e("tr",[e("td",[e("div",{staticClass:"d-flex px-2 py-1"},[e("div",[e("img",{staticClass:"avatar avatar-sm me-3",attrs:{src:"/assets/img/small-logos/logo-jira.svg",alt:"jira"}})]),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-content-center"},[e("h6",{staticClass:"mb-0 text-sm"},[t._v("\n                               Add the New Pricing Page\n                             ")])])])]),t._v(" "),e("td",[e("div",{staticClass:"avatar-group mt-2"},[e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Ryan Tompson"}},[e("img",{attrs:{src:"/assets/img/team-4.jpg",alt:"user5"}})])])]),t._v(" "),e("td",{staticClass:"align-middle text-center text-sm"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v(" $500 ")])]),t._v(" "),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"progress-wrapper w-75 mx-auto"},[e("div",{staticClass:"progress-info"},[e("div",{staticClass:"progress-percentage"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v("25%")])])]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar bg-gradient-info w-25",attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"25"}})])])])]),t._v(" "),e("tr",[e("td",[e("div",{staticClass:"d-flex px-2 py-1"},[e("div",[e("img",{staticClass:"avatar avatar-sm me-3",attrs:{src:"/assets/img/small-logos/logo-invision.svg",alt:"invision"}})]),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-content-center"},[e("h6",{staticClass:"mb-0 text-sm"},[t._v("\n                               Redesign New Online Shop\n                             ")])])])]),t._v(" "),e("td",[e("div",{staticClass:"avatar-group mt-2"},[e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Ryan Tompson"}},[e("img",{attrs:{src:"/assets/img/team-1.jpg",alt:"user6"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-xs rounded-circle",attrs:{href:"javascript:;","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Jessica Doe"}},[e("img",{attrs:{src:"/assets/img/team-4.jpg",alt:"user7"}})])])]),t._v(" "),e("td",{staticClass:"align-middle text-center text-sm"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v(" $2,000 ")])]),t._v(" "),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"progress-wrapper w-75 mx-auto"},[e("div",{staticClass:"progress-info"},[e("div",{staticClass:"progress-percentage"},[e("span",{staticClass:"text-xs font-weight-bold"},[t._v("40%")])])]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar bg-gradient-info w-40",attrs:{role:"progressbar","aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"40"}})])])])])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"card h-100"},[e("div",{staticClass:"card-header pb-0"},[e("h6",[t._v("Orders overview")]),t._v(" "),e("p",{staticClass:"text-sm"},[e("i",{staticClass:"fa fa-arrow-up text-success",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",{staticClass:"font-weight-bold"},[t._v("24%")]),t._v(" this month\n               ")])]),t._v(" "),e("div",{staticClass:"card-body p-3"},[e("div",{staticClass:"timeline timeline-one-side"},[e("div",{staticClass:"timeline-block mb-3"},[e("span",{staticClass:"timeline-step"},[e("i",{staticClass:"ni ni-bell-55 text-success text-gradient"})]),t._v(" "),e("div",{staticClass:"timeline-content"},[e("h6",{staticClass:"text-dark text-sm font-weight-bold mb-0"},[t._v("\n                       $2400, Design changes\n                     ")]),t._v(" "),e("p",{staticClass:"text-secondary font-weight-bold text-xs mt-1 mb-0"},[t._v("\n                       22 DEC 7:20 PM\n                     ")])])]),t._v(" "),e("div",{staticClass:"timeline-block mb-3"},[e("span",{staticClass:"timeline-step"},[e("i",{staticClass:"ni ni-html5 text-danger text-gradient"})]),t._v(" "),e("div",{staticClass:"timeline-content"},[e("h6",{staticClass:"text-dark text-sm font-weight-bold mb-0"},[t._v("\n                       New order #1832412\n                     ")]),t._v(" "),e("p",{staticClass:"text-secondary font-weight-bold text-xs mt-1 mb-0"},[t._v("\n                       21 DEC 11 PM\n                     ")])])]),t._v(" "),e("div",{staticClass:"timeline-block mb-3"},[e("span",{staticClass:"timeline-step"},[e("i",{staticClass:"ni ni-cart text-info text-gradient"})]),t._v(" "),e("div",{staticClass:"timeline-content"},[e("h6",{staticClass:"text-dark text-sm font-weight-bold mb-0"},[t._v("\n                       Server payments for April\n                     ")]),t._v(" "),e("p",{staticClass:"text-secondary font-weight-bold text-xs mt-1 mb-0"},[t._v("\n                       21 DEC 9:34 PM\n                     ")])])]),t._v(" "),e("div",{staticClass:"timeline-block mb-3"},[e("span",{staticClass:"timeline-step"},[e("i",{staticClass:"ni ni-credit-card text-warning text-gradient"})]),t._v(" "),e("div",{staticClass:"timeline-content"},[e("h6",{staticClass:"text-dark text-sm font-weight-bold mb-0"},[t._v("\n                       New card added for order #4395133\n                     ")]),t._v(" "),e("p",{staticClass:"text-secondary font-weight-bold text-xs mt-1 mb-0"},[t._v("\n                       20 DEC 2:20 AM\n                     ")])])]),t._v(" "),e("div",{staticClass:"timeline-block mb-3"},[e("span",{staticClass:"timeline-step"},[e("i",{staticClass:"ni ni-key-25 text-primary text-gradient"})]),t._v(" "),e("div",{staticClass:"timeline-content"},[e("h6",{staticClass:"text-dark text-sm font-weight-bold mb-0"},[t._v("\n                       Unlock packages for development\n                     ")]),t._v(" "),e("p",{staticClass:"text-secondary font-weight-bold text-xs mt-1 mb-0"},[t._v("\n                       18 DEC 4:54 AM\n                     ")])])]),t._v(" "),e("div",{staticClass:"timeline-block"},[e("span",{staticClass:"timeline-step"},[e("i",{staticClass:"ni ni-money-coins text-dark text-gradient"})]),t._v(" "),e("div",{staticClass:"timeline-content"},[e("h6",{staticClass:"text-dark text-sm font-weight-bold mb-0"},[t._v("\n                       New order #9583120\n                     ")]),t._v(" "),e("p",{staticClass:"text-secondary font-weight-bold text-xs mt-1 mb-0"},[t._v("\n                       17 DEC\n                     ")])])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminTemplate:r(318).default})}}]);