(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a(5304)}])},5304:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return m}});var n=a(5893),i=a(6626),r=JSON.parse('{"R":{"k":{"T":"Lato:wght@300;400;700"}}}'),o=a(9008),s=a.n(o),d=a(7294),c=a(1785),u=a.n(c);a(4280);let l=t=>{let{Component:e,pageProps:a}=t,o=r.R.k.T,c=r.R.k.secondary,[l,m]=(0,d.useState)();(0,d.useEffect)(()=>{fetch("https://fonts.googleapis.com/css2?family=".concat(o).concat(c?"&family="+c:"","&display=swap")).then(t=>t.text().then(t=>m(t)))},[o,c]);let f={gtmId:i.f.tag_manager_id};return(0,d.useEffect)(()=>{setTimeout(()=>{i.f.tag_manager_id&&u().initialize(f)},5e3)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:"".concat(l)}}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5"})]}),(0,n.jsx)(e,{...a})]})};var m=l},4280:function(){},9008:function(t,e,a){t.exports=a(3121)},6421:function(t,e,a){"use strict";var n,i=(n=a(6425))&&n.__esModule?n:{default:n};t.exports={tags:function(t){var e=t.id,a=t.events,n=t.dataLayer,r=t.dataLayerName,o=t.preview,s="&gtm_auth="+t.auth,d="&gtm_preview="+o;e||(0,i.default)("GTM Id is required");var c="\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(a).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+s+d+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+r+"','"+e+"');";return{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+e+s+d+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:c,dataLayerVar:this.dataLayer(n,r)}},dataLayer:function(t,e){return"\n      window."+e+" = window."+e+" || [];\n      window."+e+".push("+JSON.stringify(t)+")"}}},8676:function(t,e,a){"use strict";var n,i=(n=a(6421))&&n.__esModule?n:{default:n};t.exports={dataScript:function(t){var e=document.createElement("script");return e.innerHTML=t,e},gtm:function(t){var e=i.default.tags(t);return{noScript:function(){var t=document.createElement("noscript");return t.innerHTML=e.iframe,t},script:function(){var t=document.createElement("script");return t.innerHTML=e.script,t},dataScript:this.dataScript(e.dataLayerVar)}},initialize:function(t){var e=t.gtmId,a=t.events,n=t.dataLayer,i=t.dataLayerName,r=t.auth,o=t.preview,s=this.gtm({id:e,events:void 0===a?{}:a,dataLayer:n||void 0,dataLayerName:void 0===i?"dataLayer":i,auth:void 0===r?"":r,preview:void 0===o?"":o});n&&document.head.appendChild(s.dataScript),document.head.insertBefore(s.script(),document.head.childNodes[0]),document.body.insertBefore(s.noScript(),document.body.childNodes[0])},dataLayer:function(t){var e=t.dataLayer,a=t.dataLayerName,n=void 0===a?"dataLayer":a;if(window[n])return window[n].push(e);var r=i.default.dataLayer(e,n),o=this.dataScript(r);document.head.insertBefore(o,document.head.childNodes[0])}}},1785:function(t,e,a){"use strict";var n,i=(n=a(8676))&&n.__esModule?n:{default:n};t.exports=i.default},6425:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){console.warn("[react-gtm]",t)}},6626:function(t){"use strict";t.exports=JSON.parse('{"lz":{"title":"Bigspring Light Nextjs","base_url":"/","favicon":"/images/favicon.png","logo":"/images/logo.png","logo_width":"200","logo_height":"48","logo_text":"Bigspring Light"},"Xd":{"pagination":4,"summary_length":200,"blog_folder":"blogs"},"Hl":{"enable":true,"label":"Get Started","link":"/contact"},"f":{"contact_form_action":"","tag_manager_id":"","footer_content":"Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.","copyright":"Designed and Developed By [Themefisher](https://themefisher.com/)"},"Pu":{"meta_author":"Themefisher","meta_image":"","meta_description":"A SAAS template for nextjs"}}')}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(1118),e(880)}),_N_E=t.O()}]);