var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
!function(t){"use strict";const e=t.params,n=(document.querySelector.bind(document),(t,e)=>e.split(".").reduce((t,e)=>t&&t[e],t)),i=()=>null,s=t=>null===t||t===undefined?"":t,o="wc/store/checkout";function a(t){document.querySelectorAll("wc-order-attribution-inputs").forEach((t,e)=>{e>0&&t.remove()});for(const e of document.querySelectorAll("wc-order-attribution-inputs"))e.values=t}function r(t){window.wp&&window.wp.data&&window.wp.data.dispatch&&window.wc&&window.wc.wcBlocksData&&window.wp.data.dispatch(window.wc.wcBlocksData.CHECKOUT_STORE_KEY).setExtensionData("woocommerce/order-attribution",t,!0)}function c(){return"undefined"!=typeof sbjs}function d(){if(window.wp&&window.wp.data&&"function"==typeof window.wp.data.subscribe){const e=window.wp.data.subscribe(function(){e(),r(t.getAttributionData())},o)}}t.getAttributionData=function(){const s=e.allowTracking&&c()?n:i,o=c()?sbjs.get:{},a=Object.entries(t.fields).map(([t,e])=>[t,s(o,e)]);return Object.fromEntries(a)},t.setOrderTracking=function(n){if(e.allowTracking=n,n){if(!c())return;sbjs.init({lifetime:Number(e.lifetime),session_length:Number(e.session),base64:Boolean(e.base64),timezone_offset:"0"})}else!function(){const t=window.location.hostname;["sbjs_current","sbjs_current_add","sbjs_first","sbjs_first_add","sbjs_session","sbjs_udata","sbjs_migrations","sbjs_promo"].forEach(e=>{document.cookie=`${e}=; path=/; max-age=-999; domain=.${t};`})}();const i=t.getAttributionData();a(i),r(i)},t.setOrderTracking(e.allowTracking),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",d):d(),window.customElements.define("wc-order-attribution-inputs",class extends HTMLElement{constructor(){if(super(),this._fieldNames=Object.keys(t.fields),this.hasOwnProperty("_values")){let t=this.values;delete this.values,this.values=t||{}}}connectedCallback(){this.innerHTML="";const t=new DocumentFragment;for(const n of this._fieldNames){const i=document.createElement("input");i.type="hidden",i.name=`${e.prefix}${n}`,i.value=s(this.values&&this.values[n]||""),t.appendChild(i)}this.appendChild(t)}set values(t){if(this._values=t,this.isConnected)for(const t of this._fieldNames){const n=this.querySelector(`input[name="${e.prefix}${t}"]`);n?n.value=s(this.values[t]):console.warn(`Field "${t}" not found. `+"Most likely, the '<wc-order-attribution-inputs>' element was manipulated.")}}get values(){return this._values}})}(window.wc_order_attribution);
}

/*
     FILE ARCHIVED ON 10:42:02 May 14, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:48:27 May 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.365
  captures_list: 0.412
  exclusion.robots: 0.047
  exclusion.robots.policy: 0.039
  esindex: 0.007
  cdx.remote: 14.983
  LoadShardBlock: 187.208 (3)
  PetaboxLoader3.datanode: 65.182 (3)
  PetaboxLoader3.resolve: 27.175
  load_resource: 79.118
*/