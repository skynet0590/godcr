!function(u){function e(e){for(var t,n,r=e[0],a=e[1],s=e[2],o=0,i=[];o<r.length;o++)n=r[o],l[n]&&i.push(l[n][0]),l[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(u[t]=a[t]);for(h&&h(e);i.length;)i.shift()();return d.push.apply(d,s||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var n=d[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==l[s]&&(r=!1)}r&&(d.splice(t--,1),e=o(o.s=n[0]))}return e}var n={},l={0:0},d=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=u,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="../dist/";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var h=r;d.push([14,1]),c()}({14:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(13),s=(n(15),n(5)),o=n(12);s.b.add(o.faCopy),s.a.watch();var i=r.a.start(),u=n(22);i.load(Object(a.a)(u))},15:function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(18)(r,a);r.locals&&(e.exports=r.locals)},16:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,"body {\n  background-color: #f5f5f5;\n  font-size: 13px; }\n\n.header-top .inner {\n  padding: 15px 0;\n  color: #333; }\n\n.navbar {\n  background-color: #fff;\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.03), 1px 1px 2px 2px rgba(0, 0, 0, 0.03);\n  -webkit-box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.03), 1px 1px 2px 2px rgba(0, 0, 0, 0.03);\n  -moz-box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.03), 1px 1px 2px 2px rgba(0, 0, 0, 0.03); }\n\n.nav-link {\n  padding: 10px 22px !important; }\n\n.nav-link i,\n.nav-link span {\n  display: inline-block;\n  height: 100%;\n  font-size: 18px; }\n\n.content {\n  padding: 25px 0; }\n\ntable td {\n  white-space: nowrap; }\n\n.table td,\n.table th {\n  padding: 0.3rem; }\n\n.table.inverse tbody td {\n  background-color: #f5f5f5 !important;\n  border-color: #fff !important; }\n\n.card {\n  border-radius: 0;\n  -moz-border-radius: 0;\n  -webkit-border-radius: 0; }\n\n.card-body {\n  padding: 1.3rem 1.8rem !important; }\n\n.form-control {\n  border-radius: 0; }\n\n.error {\n  color: brown; }\n\n.btn {\n  border-radius: 0;\n  -moz-border-radius: 0;\n  -webkit-border-radius: 0;\n  padding: 0.375rem 1rem; }\n\n.btn i {\n  font-size: 12px; }\n\n.modal-content {\n  border-radius: 0;\n  -moz-border-radius: 0;\n  -webkit-border-radius: 0; }\n\n.breadcrumb {\n  background: none;\n  padding: 1rem 0 0;\n  margin: 0; }\n\n.breadcrumb-item {\n  font-size: 15px; }\n\n.collapsible .card-header {\n  padding: 0 !important; }\n\n.card-header .btn-link {\n  text-decoration: none;\n  display: block;\n  cursor: pointer; }\n\n.no-btm-pad {\n  padding-bottom: 0 !important; }\n\nselect#source-account[disabled] {\n  border: none !important;\n  background-color: transparent !important;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\n/* -------------slide down animation------------- */\n.slide-down,\n.slide-up {\n  max-height: 0;\n  overflow-y: hidden;\n  transition: max-height 0.5s ease-in-out; }\n\n.slide-down {\n  max-height: 10em; }\n\n/* Range slider */\n.slidecontainer {\n  width: 100%; }\n\n.slider {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  width: 100%;\n  height: 39px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity 0.2s; }\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 39px;\n  background: #007bff;\n  cursor: pointer; }\n\n.slider::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  background: #007bff;\n  cursor: pointer; }\n\n.slider:hover {\n  opacity: 1; }\n\n.balance-table {\n  border: none;\n  width: 250px;\n  font-size: 16px; }\n\n.table.sticky-table {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background: #f5f5f5; }\n\n/** loading indicator styles **/\n.lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 11px; }\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 0;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: #0c1e3e;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n\n.lds-ellipsis div:nth-child(1) {\n  left: 6px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(2) {\n  left: 6px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(3) {\n  left: 26px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(4) {\n  left: 45px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite; }\n\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n  100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n  100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0); } }\n\n.lead-text {\n  font-size: 30px;\n  line-height: 1.2;\n  color: gray;\n  font-weight: 100;\n  text-align: justify; }\n\n.btnCopy {\n  font-size: 14px;\n  padding: 3px;\n  background: none;\n  border: none; }\n",""])},22:function(e,t,n){var r={"./history_controller.js":23,"./receive_controller.js":44,"./send_controller.js":42,"./staking_controller.js":43};function a(e){var t=s(e);return n(t)}function s(e){var t=r[e];if(t+1)return t;var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}a.keys=function(){return Object.keys(r)},a.resolve=s,(e.exports=a).id=22},23:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var s=n(1),r=n(2),o=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,c(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,s["b"]),n=t,a=[{key:"targets",get:function(){return["stickyTableHeader","historyTable","txRowTemplate","nextPageButton","loadingIndicator","errorMessage"]}}],(r=[{key:"connect",value:function(){window.addEventListener("resize",this.alignTableHeaderWithStickyHeader.bind(this)),this.alignTableHeaderWithStickyHeader()}},{key:"alignTableHeaderWithStickyHeader",value:function(){this.stickyTableHeaderTarget.style.width="".concat(this.historyTableTarget.clientWidth,"px");var n=this.historyTableTarget.querySelector("tr").querySelectorAll("td");this.stickyTableHeaderTarget.querySelector("tr").querySelectorAll("th").forEach(function(e,t){e.style.width="".concat(n[t].clientWidth,"px")})}},{key:"initialize",value:function(){this.hide(this.nextPageButtonTarget),this.nextBlockHeight=this.nextPageButtonTarget.getAttribute("data-next-block-height"),this.checkScrollPos()}},{key:"checkScrollPos",value:function(){this.windowScrolled({target:document})}},{key:"windowScrolled",value:function(e){var t=e.target.scrollingElement,n=t.scrollTop;(this.makeTableHeaderSticky(n),!this.isLoading&&this.nextBlockHeight)&&(n+t.clientHeight>=.95*t.scrollHeight&&(this.isLoading=!0,this.fetchMoreTxs()))}},{key:"makeTableHeaderSticky",value:function(e){var t=this.historyTableTarget.parentElement.offsetTop;this.stickyTableHeaderTarget.classList.contains("d-none")&&t<=e?this.show(this.stickyTableHeaderTarget):e<t&&this.hide(this.stickyTableHeaderTarget)}},{key:"fetchMoreTxs",value:function(){this.show(this.loadingIndicatorTarget);var n=this;o.a.get("/next-history-page?start=".concat(this.nextBlockHeight)).then(function(e){var t=e.data;t.success?(n.hide(n.errorMessageTarget),n.nextBlockHeight=t.nextBlockHeight,n.displayTxs(t.txs),n.isLoading=!1,n.checkScrollPos()):n.setErrorMessage(t.message)}).catch(function(){n.setErrorMessage("A server error occurred")}).then(function(){n.isLoading=!1,n.hide(n.loadingIndicatorTarget)})}},{key:"displayTxs",value:function(e){var a=["Sent","Received","Transferred"],s=this.historyTableTarget.querySelectorAll("tr").length,o=this;e.forEach(function(e){var t,n=document.importNode(o.txRowTemplateTarget.content,!0),r=n.querySelectorAll("td");r[0].innerText=++s,r[1].innerText=e.formatted_time,r[2].innerText=0<=(t=e.direction)&&t<a.length?a[t]:"Unclear",r[3].innerText=e.amount,r[4].innerText=e.fee,r[5].innerText=e.type,r[6].innerHTML='<a href="/transaction-details/'.concat(e.hash,'">').concat(e.hash,"</a>"),o.historyTableTarget.appendChild(n)})}},{key:"setErrorMessage",value:function(e){this.errorMessageTarget.innerHTML=e,this.show(this.errorMessageTarget)}},{key:"hide",value:function(e){e.classList.add("d-none")}},{key:"show",value:function(e){e.classList.remove("d-none")}}])&&i(n.prototype,r),a&&i(n,a),t}()},42:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var s=n(1),r=n(2),o=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,c(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,s["b"]),n=t,a=[{key:"targets",get:function(){return["errorMessage","successMessage","form","sourceAccount","spendUnconfirmed","destinations","destinationTemplate","address","amount","removeDestinationButton","useCustom","fetchingUtxos","utxoSelectionProgressBar","customInputsTable","changeOutputs","numberOfChangeOutputs","useRandomChangeOutputs","generateOutputsButton","generatedChangeOutputs","changeOutputTemplate","changeOutputPercentage","changeOutputAmount","errors","nextButton","walletPassphrase","passwordError"]}}],(r=[{key:"initialize",value:function(){this.newDestination()}},{key:"newDestination",value:function(){if(this.destinationFieldsValid()){var e=document.importNode(this.destinationTemplateTarget.content,!0);this.destinationsTarget.appendChild(e),1<this.destinationCount()&&this.show(this.removeDestinationButtonTarget)}}},{key:"destinationFieldsValid",value:function(){this.clearMessages();var e=!0,t=!0,n=!1,r=void 0;try{for(var a,s=this.addressTargets[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){if(""===a.value.value){this.showError("Destination address should not be empty"),e=!1;break}}}catch(e){n=!0,r=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}var o=!0,i=!1,u=void 0;try{for(var c,l=this.amountTargets[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var d=c.value,h=parseFloat(d.value);if(isNaN(h)||h<=0){this.showError("Amount must be a non-zero positive number"),e=!1;break}}}catch(e){i=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw u}}return e}},{key:"destinationCount",value:function(){return this.destinationsTarget.querySelectorAll("div.destination").length}},{key:"removeDestination",value:function(){1<this.destinationCount()&&this.destinationsTarget.removeChild(this.destinationsTarget.querySelector("div.destination:last-child")),this.destinationCount()<=1&&this.hide(this.removeDestinationButtonTarget)}},{key:"toggleSpendUnconfirmed",value:function(){this.useCustomTarget.checked&&this.openCustomInputsAndChangeOutputsPanel()}},{key:"toggleUseCustom",value:function(){this.useCustomTarget.checked?this.destinationFieldsValid()?this.openCustomInputsAndChangeOutputsPanel():this.useCustomTarget.checked=!1:this.resetCustomInputsAndChangeOutputs()}},{key:"resetCustomInputsAndChangeOutputs",value:function(){this.show(this.fetchingUtxosTarget),$("#custom-inputs").slideUp(),this.customInputsTableTarget.innerHTML="",this.hide(this.changeOutputsTarget),this.useRandomChangeOutputsTarget.checked=!1,this.numberOfChangeOutputsTarget.value="",this.generatedChangeOutputsTarget.innerHTML=""}},{key:"openCustomInputsAndChangeOutputsPanel",value:function(){var n=this;this.resetCustomInputsAndChangeOutputs(),$("#custom-inputs").slideDown();var r=this,e=this.sourceAccountTarget.value;this.getUnspentOutputs(e,function(e){var t=e.map(function(e){var t=new Date(1e3*e.receive_time).toString().split(" ").slice(0,5).join(" "),n=e.amount/1e8;return"<tr>\n                  <td width='5%'>\n                    <input data-action='click->send#calculateCustomInputsPercentage' type='checkbox' class='custom-input' name='utxo' value='".concat(e.key,"' data-amount='").concat(n,"' />\n                  </td>\n                  <td width='40%'>").concat(e.address,"</td>\n                  <td width='15%'>").concat(n," DCR</td>\n                  <td width='25%'>").concat(t,"</td>\n                  <td width='15%'>").concat(e.confirmations," confirmation(s)</td>\n                </tr>")});r.customInputsTableTarget.innerHTML=t.join(""),r.hide(n.fetchingUtxosTarget),r.show(r.changeOutputsTarget)})}},{key:"getUnspentOutputs",value:function(e,n){this.nextButtonTarget.innerHTML="Loading...",this.nextButtonTarget.setAttribute("disabled","disabled");var t="/unspent-outputs/".concat(e);this.spendUnconfirmedTarget.checked&&(t+="?getUnconfirmed=true");var r=this;o.a.get(t).then(function(e){var t=e.data;t.success?n(t.message):r.setErrorMessage(t.message)}).catch(function(){r.setErrorMessage("A server error occurred")}).then(function(){r.nextButtonTarget.innerHTML="Next",r.nextButtonTarget.removeAttribute("disabled")})}},{key:"calculateCustomInputsPercentage",value:function(){if(this.useCustomTarget.checked){var e=this.getTotalSendAmount(),t=this.getSelectedInputsSum(),n=0;n=e<=t?100:t/e*100,this.utxoSelectionProgressBarTarget.style.width="".concat(n,"%")}}},{key:"getTotalSendAmount",value:function(){var t=0;return this.amountTargets.forEach(function(e){t+=parseFloat(e.value)}),t}},{key:"getSelectedInputsSum",value:function(){var t=0;return this.customInputsTableTarget.querySelectorAll("input.custom-input:checked").forEach(function(e){t+=parseFloat(e.dataset.amount)}),t}},{key:"toggleCustomChangeOutputsVisibility",value:function(){this.clearMessages(),this.useCustomChangeOutput=!this.useCustomChangeOutput,this.generatedChangeOutputsTarget.innerHTML="",this.numberOfChangeOutputsTarget.value=""}},{key:"generateChangeOutputs",value:function(){if(!this.generatingChangeOutputs&&this.useCustomChangeOutput){this.clearMessages();var e=parseFloat(this.numberOfChangeOutputsTarget.value);if(isNaN(e)||e<1)this.showError("Number of change outputs must be 1 or more");else if(this.validateSendForm()){var i=this;this.getRandomChangeOutputs(e,function(e){i.useCustomChangeOutput&&(i.totalChangeAmount=0,e.forEach(function(e){i.totalChangeAmount+=e.Amount}),e.forEach(function(e,t){var n=document.importNode(i.changeOutputTemplateTarget.content,!0),r=n.querySelector('input[name="change-output-address"]'),a=n.querySelector('input[name="change-output-amount-percentage"]'),s=n.querySelector('input[name="change-output-amount"]'),o=0;i.useRandomChangeOutputsTarget.checked&&(s.value=e.Amount,a.setAttribute("disabled","disabled"),o=e.Amount/i.totalChangeAmount*100),a.value=o,r.value=e.Address,r.setAttribute("data-index",t),a.setAttribute("data-index",t),s.setAttribute("data-index",t),i.generatedChangeOutputsTarget.appendChild(n)}),i.show(i.generatedChangeOutputsTarget))})}}}},{key:"getRandomChangeOutputs",value:function(e,n){this.generatingChangeOutputs=!0,this.generatedChangeOutputsTarget.innerHTML="",this.generateOutputsButtonTarget.setAttribute("disabled","disabled"),this.generateOutputsButtonTarget.innerHTML="Loading...",this.numberOfChangeOutputsTarget.setAttribute("disabled","disabled");var t=$("#send-form").serialize();t+="&totalSelectedInputAmountDcr=".concat(this.getSelectedInputsSum()),this.sourceAccountTarget.disabled&&(t+="&source-account=".concat(this.sourceAccountTarget.value)),t+="&nChangeOutput=".concat(e);var r=this;o.a.get("/random-change-outputs?"+t).then(function(e){var t=e.data;void 0!==t.error?r.setErrorMessage(t.error):n(t.message)}).catch(function(e){console.log(e),r.setErrorMessage("A server error occurred")}).then(function(){r.generateOutputsButtonTarget.removeAttribute("disabled"),r.generateOutputsButtonTarget.innerHTML="Generate Change Outputs",r.numberOfChangeOutputsTarget.removeAttribute("disabled"),r.generatingChangeOutputs=!1})}},{key:"changeOutputAmountPercentageChanged",value:function(e){var t=e.currentTarget,n=parseInt(t.getAttribute("data-index")),r=parseFloat(t.value),a=0;if(this.changeOutputPercentageTargets.forEach(function(e){a+=parseFloat(e.value)}),100<a){var s=100-(a-r);t.value=s,r=s}var o=this.totalChangeAmount;this.changeOutputAmountTargets.forEach(function(e){parseInt(e.getAttribute("data-index"))===n&&(e.value=o*r/100)})}},{key:"getWalletPassphraseAndSubmit",value:function(){this.clearMessages(),this.validateSendForm()&&this.validateChangeOutputAmount()&&$("#passphrase-modal").modal()}},{key:"validateSendForm",value:function(){this.errorsTarget.innerHTML="";var e=this.destinationFieldsValid();return""===this.sourceAccountTarget.value&&(this.showError("The source account is required"),e=!1),this.useCustomTarget.checked&&this.getSelectedInputsSum()<this.getTotalSendAmount()&&(this.showError("The sum of selected inputs is less than send amount"),e=!1),e}},{key:"validateChangeOutputAmount",value:function(){var n=this;this.clearMessages();var r=0;return this.changeOutputPercentageTargets.forEach(function(e){var t=parseFloat(e.value);if(isNaN(t)||t<=0)return n.showError("Change amount percentage must be greater than 0"),!1;r+=t}),!this.useCustomChangeOutput||100===r||(this.showError("Total change amount percentage must be equal to 100. Current total is ".concat(r)),!1)}},{key:"submitForm",value:function(){if(this.validatePassphrase()){$("#passphrase-modal").modal("hide"),this.nextButtonTarget.innerHTML="Sending...",this.nextButtonTarget.setAttribute("disabled","disabled");var e=$("#send-form").serialize();e+="&totalSelectedInputAmountDcr=".concat(this.getSelectedInputsSum()),this.walletPassphraseTarget.value="",this.sourceAccountTarget.disabled&&(e+="&source-account=".concat(this.sourceAccountTarget.value));var r=this;o.a.post("/send",e).then(function(e){var t=e.data;if(void 0!==t.error)r.setErrorMessage(t.error);else{r.resetSendForm();var n="The transaction was published successfully. Hash: <strong>".concat(t.txHash,"</strong>");r.setSuccessMessage(n)}}).catch(function(){r.setErrorMessage("A server error occurred")}).then(function(){r.nextButtonTarget.innerHTML="Next",r.nextButtonTarget.removeAttribute("disabled")})}}},{key:"validatePassphrase",value:function(){return""!==this.walletPassphraseTarget.value||!(this.passwordErrorTarget.innerHTML='<div class="error">Your wallet passphrase is required</div>')}},{key:"resetSendForm",value:function(){this.resetCustomInputsAndChangeOutputs();for(var e=this.destinationCount();1<e;)this.removeDestination(),e--;this.addressTargets.forEach(function(e){e.value=""}),this.amountTargets.forEach(function(e){e.value=""}),this.spendUnconfirmedTarget.checked=!1,this.useCustomTarget.checked=!1,this.clearMessages()}},{key:"setErrorMessage",value:function(e){this.errorMessageTarget.innerHTML=e,this.hide(this.successMessageTarget),this.show(this.errorMessageTarget)}},{key:"setSuccessMessage",value:function(e){this.successMessageTarget.innerHTML=e,this.hide(this.errorMessageTarget),this.show(this.successMessageTarget)}},{key:"clearMessages",value:function(){this.hide(this.errorMessageTarget),this.hide(this.successMessageTarget),this.errorsTarget.innerHTML=""}},{key:"hide",value:function(e){e.classList.add("d-none")}},{key:"show",value:function(e){e.classList.remove("d-none")}},{key:"showError",value:function(e){this.errorsTarget.innerHTML+='<div class="error">'.concat(e,"</div>")}}])&&i(n.prototype,r),a&&i(n,a),t}()},43:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var s=n(1),r=n(2),o=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,l(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,s["b"]),n=t,a=[{key:"targets",get:function(){return["errorMessage","successMessage","sourceAccount","numberOfTickets","spendUnconfirmed","errors","submitButton","walletPassphrase","passwordError"]}}],(r=[{key:"validateForm",value:function(){var e=!(this.errorsTarget.innerHTML="");return""===this.sourceAccountTarget.value&&(this.showError("The source account is required"),e=!1),""===this.numberOfTicketsTarget.value&&(this.showError("The number of tickets is required"),e=!1),e}},{key:"submitForm",value:function(){if(this.validatePassphrase()){$("#passphrase-modal").modal("hide"),this.submitButtonTarget.innerHTML="Purchasing...",this.submitButtonTarget.setAttribute("disabled","disabled");var e=$("#purchase-tickets-form").serialize();this.sourceAccountTarget.disabled&&(e+="&source-account="+this.sourceAccountTarget.value),this.walletPassphraseTarget.value="";var a=this;o.a.post("/purchase-tickets",e).then(function(e){var t=e.data;if(t.success){var n=["<p>You have purchased "+t.message.length+" ticket(s)</p>"],r=t.message.map(function(e){return"<p><strong>"+e+"</strong></p>"});n.push.apply(n,i(r)),a.setSuccessMessage(n.join("")),a.submitButtonTarget.innerHTML="Purchase again"}else a.setErrorMessage(t.message)}).catch(function(){a.submitButtonTarget.innerHTML="Purchase",a.setErrorMessage("A server error occurred")}).then(function(){a.submitButtonTarget.removeAttribute("disabled")})}}},{key:"validatePassphrase",value:function(){return""!==this.walletPassphraseTarget.value||!(this.passwordErrorTarget.innerHTML='<div class="error">Your wallet passphrase is required</div>')}},{key:"getWalletPassphraseAndSubmit",value:function(){this.clearMessages(),this.validateForm()&&$("#passphrase-modal").modal()}},{key:"setErrorMessage",value:function(e){this.hide(this.successMessageTarget),this.show(this.errorMessageTarget),this.errorMessageTarget.innerHTML=e}},{key:"setSuccessMessage",value:function(e){this.hide(this.errorMessageTarget),this.show(this.successMessageTarget),this.successMessageTarget.innerHTML=e}},{key:"clearMessages",value:function(){this.hide(this.errorMessageTarget),this.hide(this.successMessageTarget),this.hide(this.errorsTarget)}},{key:"hide",value:function(e){e.classList.add("d-none")}},{key:"show",value:function(e){e.classList.remove("d-none")}},{key:"showError",value:function(e){this.errorsTarget.innerHTML+='<div class="error">'.concat(e,"</div>"),this.show(this.errorsTarget)}}])&&u(n.prototype,r),a&&u(n,a),t}()},44:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(2),o=n.n(r),i=function(e,t){e.errorMessageTarget.innerHTML=t,a(e.successMessageTarget),u(e.errorMessageTarget)},a=function(e){e.classList.add("d-none")},u=function(e){e.classList.remove("d-none")};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return f});var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,h(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,s["b"]),n=t,a=[{key:"targets",get:function(){return["account","address","image"]}}],(r=[{key:"copyToClipboard",value:function(){!function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=0<document.getSelection().rangeCount&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))}(this.addressTarget.textContent)}},{key:"generate",value:function(){var n=this;n.clearMessages(),o.a.get("/generate-address/"+this.accountTarget.value).then(function(e){var t=e.data;t.success?(n.addressTarget.textContent=t.address,n.imageTarget.setAttribute("src",t.imageData)):i(t.message)}).catch(function(){i("Unable to generate address. Something went wrong.")})}}])&&l(n.prototype,r),a&&l(n,a),t}()}});
//# sourceMappingURL=app.bundle.js.map