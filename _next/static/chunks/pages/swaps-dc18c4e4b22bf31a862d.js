_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"1ccL":function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),c=n("rVDa"),s=n("Dd6D"),i=n("R1LX"),o=n("oOpj"),d=n.n(o);t.a=function(e){var t=e.isOpen,n=e.onClose,o=e.onSubmit,l=e.t,u=Object(a.useState)(!0),h=u[0],m=u[1];return Object(r.jsxs)(c.a,{isOpen:t,className:d.a.itemCrossChain,onClose:function(){return n()},children:[Object(r.jsx)(c.a.Header,{onClose:function(){return n()}}),Object(r.jsxs)(c.a.Body,{className:d.a.itemCrossChainBody,children:[Object(r.jsxs)("div",{className:d.a.itemCrossChainBodyMsg,children:[Object(r.jsx)("img",{src:"/crosschain.svg",alt:"crosschain"}),Object(r.jsx)("div",{className:d.a.itemCrossChainBodyMsgTitle,children:l("crosschain.title")}),Object(r.jsxs)("div",{className:d.a.itemCrossChainBodyMsgDesc,children:[l("crosschain.body1"),Object(r.jsx)("br",{}),l("crosschain.body2")]})]}),Object(r.jsx)("div",{className:d.a.itemCrossChainBodyMsgUpdates,children:Object(r.jsx)(i.a,{checked:h,onChange:function(e){return m(e.target.checked)},children:l("crosschain.update")})}),Object(r.jsx)(s.a,{className:d.a.itemCrossChainBtn,onClick:function(){o(h),n()},children:l("crosschain.ok")})]})]})}},ZbIx:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return be}));var r=n("rePB"),a=n("nKUr"),c=n("/MKj"),s=n("CBTV"),i=n("KQm4"),o=n("o0o1"),d=n.n(o),l=n("HaE+"),u=n("1OyB"),h=n("vuIU"),m=n("Ji7U"),f=n("md7G"),b=n("foSv"),j=n("q1tI"),O=n.n(j),v=n("20a2"),p=n("g4pe"),C=n.n(p),g=(n("4peS"),n("LtDH")),I=n("AMxz"),x=n("Ff2n"),y=n("TSYQ"),T=n.n(y),k=n("Cz6E"),w=n("Dd6D"),S=n("Lela"),P=n("x95E"),R=n("GRpk"),N=n("Tkjx"),M=n("eJCX"),D=n("oOpj"),B=n.n(D);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.title,n=e.reverse,r=e.items,c=void 0===r?[]:r,s=e.removeItem,i=e.placeholder,o=e.isSelectedItemLoading,d=Object(x.a)(e,["title","reverse","items","removeItem","placeholder","isSelectedItemLoading"]);return Object(a.jsxs)(w.b,_(_({className:T()(B.a.selectedItemsContainer)},d),{},{children:[Object(a.jsx)(w.b.Header,{children:Object(a.jsxs)(k.b,{reverse:n,children:[Object(a.jsx)(k.a,{flex:!0,align:"center",justify:n?"right":"left",children:Object(a.jsxs)(w.b.Title,{icon:!0,reverse:n,children:[Object(a.jsx)(N.h,{flip:n}),Object(a.jsx)("div",{children:t})]})}),Object(a.jsx)(k.a,{flex:!0,align:"center",justify:n?"left":"right",children:Object(a.jsx)(w.b.Title,{icon:!0,reverse:n,justify:"end"})})]})}),Object(a.jsx)(w.b.Content,{children:c.length?Object(a.jsxs)(k.b,{className:T()(B.a.selectedItems),children:[o&&Object(a.jsx)(F,{}),c.map((function(e){return Object(a.jsx)(M.d,_(_({className:B.a.selectedItemsItem},e),{},{onClick:function(){return s(e)}}),e.id)}))]}):Object(a.jsx)(k.b,{children:o?Object(a.jsx)(F,{}):Object(a.jsxs)(k.a,{flex:!0,align:"center",justify:"center",fullHeight:!0,direction:"column",children:[i,Object(a.jsx)(N.d,{style:{marginTop:"10px"}})]})})})]}))};A.defaultProps={title:"",reverse:!1,placeholder:""};var F=function(){return Object(a.jsx)(R.a,{speed:2,height:75,width:150,style:{margin:"10px",borderRadius:"6px"},children:Object(a.jsx)("rect",{x:"0",y:"0",rx:"2",ry:"2",width:"150",height:"75"})})},E=A,V=n("T1bm"),U=n("CxlD"),H=n.n(U),X=n("xCAs"),q=function(e){var t=e.onConnect,n=e.removeItem,c=e.setUserTokenIds,s=e.toggleFilter,i=e.handleAddItemToTrade,o=e.t,d=e.trade,l=e.user,u=e.wallet,h=e.offeredItems,m=e.active,f=e.inTransaction,b=e.isSelectedItemLoading,j=e.address,O=e.chainId,v=Object(X.a)(O);return Object(a.jsxs)(k.a,{flex:!0,direction:"column",className:T()(H.a.offeredItemsCol,Object(r.a)({},H.a.hideOnMobile,!m)),children:[Object(a.jsx)(E,{title:o("trade.offeredItems.title"),placeholder:o("trade.offeredItems.placeholder"),items:h,removeItem:n,isSelectedItemLoading:b}),j&&v?Object(a.jsx)(V.a,{trade:d,address:j,selected:h,inTransaction:f,setUserTokenIds:c,chainId:O,toggleFilter:s,displayFilterIcon:!1,showCreateButton:!0,handleAddItemToTrade:function(e){e.owner={},e.owner.id=l.data.address,e.owner.username=l.data.username,e.owner.image=l.data.image,i(e)},user:l,t:o}):Object(a.jsx)(w.b,{className:H.a.searchItemsEmpty,children:Object(a.jsx)(w.b.Content,{className:H.a.connectButton,children:u.isLoading||l.isLoading?Object(a.jsx)(S.a,{}):Object(a.jsxs)(a.Fragment,{children:[j&&!v&&Object(a.jsx)(P.b,{}),Object(a.jsx)("div",{children:o(j?"trade.noTokens":"trade.connectWallet")}),!j&&Object(a.jsx)(P.a,{onConnect:function(){return t()}})]})})})]})};q.defaultProps={handleAddItemToTrade:function(){},chainId:null,address:""};var J=q,K=function(e){var t=e.removeItem,n=e.toggleFilter,c=e.clearReceivedItems,s=e.handleAddItemToTrade,i=e.trade,o=e.user,d=e.receivedItems,l=e.selectedContracts,u=e.selectedChains,h=e.priceRange,m=e.inTransaction,f=e.onSale,b=e.verified,j=e.active,O=e.isSelectedItemLoading,v=e.chainId,p=e.searchTermContext,C=e.selectedSortOptionContext,g=e.t;return Object(a.jsxs)(k.a,{flex:!0,direction:"column",className:T()(Object(r.a)({},H.a.hideOnMobile,!j),H.a.receivedItemsCol),children:[Object(a.jsx)(E,{title:g("trade.receivedItems.title"),placeholder:g("trade.receivedItems.placeholder"),items:d,removeItem:t,isSelectedItemLoading:O,reverse:!0}),Object(a.jsx)(V.a,{searchTermContext:p,selectedSortOptionContext:C,reverse:!0,trade:i,address:d.length?d[0].owner.id:null,selectedChainId:d.length?d[0].chainId:null,selectedContracts:l,selectedChains:u,onSale:f,verified:b,selected:d,user:o,inTransaction:m,chainId:d.length?d[0].chainId:v,toggleFilter:n,priceRange:h,clearReceivedItems:function(){return c()},handleAddItemToTrade:function(e){e.owner=d.length?d[0].owner:null,s(e)},t:g})]})};K.defaultProps={selectedChains:[],chainId:null,searchTermContext:"",selectedSortOptionContext:""};var Z=K,z=n("vm2M"),G=function(e){var t=e.offeredItems,n=e.receivedItems,c=e.selectedContracts,s=e.selectedChains,i=e.tradeCheckout,o=e.priceRange,d=e.onPriceRangeChange,l=e.onContractsChange,u=e.onChainsChange,h=e.onOnSale,m=e.onSale,f=e.verified,b=e.onVerified,j=e.toggleFilter,O=e.shown,v=e.t;return Object(a.jsx)(k.a,{className:T()(H.a.filterCol,Object(r.a)({},H.a.filterColShown,O)),children:Object(a.jsxs)(w.b,{className:T()(H.a.filterColContainer),children:[Object(a.jsxs)("div",{className:H.a.filterColTitle,children:["Filters",Object(a.jsx)(w.c,{onClick:j,children:Object(a.jsx)(N.j,{})})]}),Object(a.jsxs)(w.b.Content,{className:H.a.filterColContent,children:[Object(a.jsx)(w.a,{block:!0,onClick:function(){return i()},disabled:!n.length||!t.length,className:H.a.filterColContentButton,children:v("filterBar.tradeBtn")}),Object(a.jsx)("div",{className:H.a.filterColContentBottomButtonsContainer,children:Object(a.jsx)(w.a,{block:!0,onClick:j,children:v("filterBar.mobileButton")})}),Object(a.jsx)(z.a,{priceRange:o,selectedContracts:c,onContractsChange:l,selectedChains:s,onChainsChange:u,onPriceRangeChange:function(e){return d(e)},onOnSale:h,onSale:m,verified:f,onVerified:b,t:v})]})]})})};G.defaultProps={onSale:!1,selectedChains:[]};var Q=G,W=function(e){var t=e.receivedItems,n=e.offeredItems,c=e.t,s=e.tradeCheckout;return Object(a.jsxs)(w.c,{onClick:function(){return t.length&&n.length&&s()},className:T()(H.a.mobileSelectedItems,Object(r.a)({},H.a.activeTrade,t.length&&n.length)),children:[Object(a.jsx)(k.a,{flex:!0,direction:"column",align:"left",children:Object(a.jsxs)(k.b,{style:{margin:0},children:[c("trade.offeredItems.title")," ",n.length]})}),Object(a.jsx)(N.V,{inverted:t.length&&n.length}),Object(a.jsx)(k.a,{flex:!0,direction:"column",align:"right",children:Object(a.jsxs)(k.b,{style:{margin:0},children:[c("trade.receivedItems.title")," ",t.length]})})]})},Y=function(e){var t=e.tabs,n=e.setActiveMobileTab,c=e.activeMobileTab;return Object(a.jsx)("div",{className:H.a.mobileTabs,children:t.map((function(e){return Object(a.jsx)(w.c,{onClick:function(){n(e)},className:T()(H.a.mobileTab,Object(r.a)({},H.a.mobileTabActive,e.alias===c.alias)),children:Object(a.jsx)("div",{className:H.a.tabName,children:e.name})},e.alias)}))})},$=function(e){var t=e.user,n=e.selectedContracts,r=e.onContractsChange,c=e.selectedChains,s=e.onChainsChange,i=e.onSale,o=e.onOnSale,d=e.onVerified,l=e.verified,u=e.removeOfferedItem,h=e.removeReceivedItem,m=e.tradeCheckout,f=e.wallet,b=e.wallet.data,O=b.address,v=b.chainId,p=e.priceRange,C=e.onPriceRangeChange,g=e.onConnect,I=e.status,y=e.activeMobileTab,T=e.setActiveMobileTab,w=e.clearReceivedItems,S=e.tabs,P=e.handleAddItemToTrade,R=e.isSelectedItemLoading,N=e.context,M=N.search,D=N.sort,B=e.t,L=Object(x.a)(e,["user","selectedContracts","onContractsChange","selectedChains","onChainsChange","onSale","onOnSale","onVerified","verified","removeOfferedItem","removeReceivedItem","tradeCheckout","wallet","wallet","priceRange","onPriceRangeChange","onConnect","status","activeMobileTab","setActiveMobileTab","clearReceivedItems","tabs","handleAddItemToTrade","isSelectedItemLoading","context","t"]),_=Object(j.useState)([]),A=_[0],F=_[1],E=Object(j.useState)(!1),V=E[0],U=E[1],X=L.trade,q=X.offeredItems,K=X.receivedItems;return Object(a.jsxs)(k.b,{className:H.a.mainContainer,children:[Object(a.jsx)(W,{offeredItems:q,receivedItems:K,tradeCheckout:m,t:B}),Object(a.jsx)(Y,{tabs:S,setActiveMobileTab:function(e){T(e)},activeMobileTab:y}),Object(a.jsx)(J,{isSelectedItemLoading:R,trade:X,active:"user"===y.alias,user:t,offeredItems:q,wallet:f,address:O,setUserTokenIds:F,onConnect:g,inTransaction:!!I,removeItem:u,chainId:v,toggleFilter:function(){return U(!V)},handleAddItemToTrade:function(e){return P(e)},t:B}),Object(a.jsx)(Q,{shown:V,offeredItems:q,receivedItems:K,tradeCheckout:m,priceRange:p,onPriceRangeChange:C,onContractsChange:r,selectedContracts:n,selectedChains:c,onChainsChange:s,onOnSale:o,onSale:i,onVerified:d,verified:l,toggleFilter:function(){return U(!V)},t:B}),Object(a.jsx)(Z,{searchTermContext:M,selectedSortOptionContext:D,isSelectedItemLoading:R,trade:X,active:"market"===y.alias,user:t,receivedItems:K,clearReceivedItems:function(){return w()},selectedContracts:n,selectedChains:c,onSale:i,verified:l,userTokenIds:A,inTransaction:!!I,removeItem:h,chainId:v,toggleFilter:function(){return U(!V)},priceRange:p,handleAddItemToTrade:function(e){return P(e)},t:B})]})};$.defaultProps={offeredItems:[],receivedItems:[],onSale:!1,selectedChains:[]};var ee=$,te=n("1ES8"),ne=n("q01u"),re=n("va0g"),ae=n("rnIF"),ce=n("1ccL");function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(b.a)(e);if(t){var a=Object(b.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var de=function(e){Object(m.a)(n,e);var t=oe(n);function n(e){var r;Object(u.a)(this,n),r=t.call(this,e);var a=e.t;return r.state={tabs:[{name:a("trade.mobileTabs.user"),alias:"user"},{name:a("trade.mobileTabs.market"),alias:"market"}],isSelectedItemLoading:!1,flow:"",status:"",isBuyModalOpen:!1,isSellModalOpen:!1,isOfferModalOpen:!1,isTradeModalOpen:!1,isCancelModalOpen:!1,isCrossChainModalOpen:!1,priceRange:[ne.b,ne.a],selectedChains:[],selectedContracts:[],searchTerm:"",onSale:!1,verified:!0,activeMobileTab:{name:a("trade.mobileTabs.market"),alias:"market"}},r}return Object(h.a)(n,[{key:"handleAddItemToTrade",value:function(){var e=Object(l.a)(d.a.mark((function e(t){var n,r,a,c,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.contractAddress,r=t.tokenID,a=t.chainId,!(c=this.props.user).data.address){e.next=23;break}if(this.setState({isSelectedItemLoading:!0}),!t.owner){e.next=12;break}(s=t).owner.id=t.owner.id.toLowerCase(),s.owner.username=t.owner.username,s.owner.image=t.owner.image,t.owner.id.toLowerCase()===c.data.address.toLowerCase()?s.type="sell":s.type="buy",e.next=21;break;case 12:return e.next=14,g.a.tokens.get(n,r,{owner:!0,chainId:a});case 14:i=e.sent,(s=t).owner={},s.owner.id=i.data.owner.id.toLowerCase(),s.owner.username=i.data.owner.username,s.owner.image=i.data.owner.image,c.data.address.toLowerCase()===i.data.owner.id.toLowerCase()?s.type="sell":s.type="buy";case 21:this.addItem(s),this.setState({isSelectedItemLoading:!1});case 23:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onContractsChange",value:function(e,t){var n=this.state.selectedContracts,r=[];r=t?[].concat(Object(i.a)(n),[e]):n.filter((function(t){return t.id!==e.id})),this.setState({selectedContracts:r},(function(){}))}},{key:"onChainsChange",value:function(e,t){var n=this.state,r=n.selectedChains,a=n.selectedContracts,c=[];t?c=r.map((function(e){return e.chainId})).includes(e.chainId)?Object(i.a)(r):[].concat(Object(i.a)(r),[e]):c=r.filter((function(t){return t.chainId!==e.chainId}));var s={selectedChains:c},o=c.map((function(e){return e.chainId}));o.length&&(s.selectedContracts=a.filter((function(e){return o.includes(e.chainId)}))),this.setState(s)}},{key:"onPriceRangeChange",value:function(e){this.setState({priceRange:e})}},{key:"onOnSale",value:function(e){this.setState({onSale:e})}},{key:"onVerified",value:function(e){this.setState({verified:e})}},{key:"setActiveMobileTab",value:function(e){this.setState({activeMobileTab:e})}},{key:"setStatus",value:function(e){this.setState({status:e})}},{key:"addItemToOffered",value:function(e){var t=this.props,n=t.router;(0,t.addOfferedItem)(e),n.push({hash:""})}},{key:"removeOfferedItem",value:function(e){var t=this.props.removeOfferedItem;t(e)}},{key:"clearOfferedItems",value:function(){var e=this.props.clearOfferedItems;e()}},{key:"addItemToReceived",value:function(e){var t=this.props,n=t.router;(0,t.addReceivedItem)(e),n.push({hash:""})}},{key:"removeReceivedItem",value:function(e){var t=this.props.removeReceivedItem;t(e)}},{key:"clearReceivedItems",value:function(){var e=this.props.clearReceivedItems;e()}},{key:"addItem",value:function(e){"buy"===e.type?this.addItemToReceived(e):"sell"===e.type&&this.addItemToOffered(e)}},{key:"validateChains",value:function(e,t){return e===t||this.openCrossChainModal(!0),e===t}},{key:"startTransaction",value:function(e,t){this.setState({flow:e,status:I.h},(function(){setTimeout((function(){return t()}),0)}))}},{key:"offerTrade",value:function(){var e=this,t=this.props,n=t.wallet,r=t.trade,a=t.tradeResetCart,c=r.offeredItems,s=r.receivedItems;this.validateChains(n.data.chainId,s[0].chainId)&&this.startTransaction("trade",Object(l.a)(d.a.mark((function t(){var r,o,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.data,(o=new te.a(r)).setStatusListener((function(t){return e.setStatus(t)})),t.prev=3,t.next=6,o.trade(c,s);case 6:return(l=t.sent).type="TRADE",l.recipientAddress=s[0].owner.id,l.tokens=[].concat(Object(i.a)(c),Object(i.a)(s)),t.next=12,g.a.orders.create(l);case 12:setTimeout((function(){e.setState({status:"",flow:""}),a()}),2e3),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(3),console.error(t.t0),e.setState({status:"",flow:""});case 19:case"end":return t.stop()}}),t,null,[[3,15]])}))))}},{key:"openBuyModal",value:function(e){this.setState({isBuyModalOpen:e})}},{key:"openSellModal",value:function(e){this.setState({isSellModalOpen:e})}},{key:"openOfferModal",value:function(e){this.setState({isOfferModalOpen:e})}},{key:"openTradeModal",value:function(e){this.setState({isTradeModalOpen:e})}},{key:"openCancelModal",value:function(e){this.setState({isCancelModalOpen:e})}},{key:"openCrossChainModal",value:function(e){this.setState({isCrossChainModalOpen:e})}},{key:"callbacks",value:function(){var e=this;return{removeOfferedItem:this.removeOfferedItem.bind(this),removeReceivedItem:this.removeReceivedItem.bind(this),tradeCheckout:function(){return e.openTradeModal(!0)},onPriceRangeChange:this.onPriceRangeChange.bind(this),onContractsChange:this.onContractsChange.bind(this),onChainsChange:this.onChainsChange.bind(this),onOnSale:this.onOnSale.bind(this),setActiveMobileTab:this.setActiveMobileTab.bind(this),clearReceivedItems:this.clearReceivedItems.bind(this),handleAddItemToTrade:this.handleAddItemToTrade.bind(this),onVerified:this.onVerified.bind(this)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.user,r=t.wallet,c=t.openPreferences,s=r.data.chainId,i=this.state,o=i.status,d=i.flow,l=i.isTradeModalOpen,u=i.isCrossChainModalOpen,h=this.props,m=h.t,f=h.trade,b=f.offeredItems,j=f.receivedItems,O="",v=Object(X.a)(s).nativeCurrency;v&&v.symbol&&(O=v.symbol);var p="NFTrade | Swaps | Create, Buy, Sell, Swap and Farm NFTs",g="https://res.cloudinary.com/nftrade/image/upload/s--tV_aUXDa--/v1629391041/Screenshot_from_2021-08-19_19-37-09_vjtmmn.png",I="NFTrade is a multi-chain and cross-chain platform for NFT creation and trading. Seamlessly launch, mint, and swap non-fungible tokens. Earn digital collectibles. NFTrade places you at the heart of the NFT economy.";return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(C.a,{children:[Object(a.jsx)("title",{children:p}),Object(a.jsx)("meta",{property:"og:title",content:p}),Object(a.jsx)("meta",{property:"og:description",content:I}),Object(a.jsx)("meta",{name:"description",content:I}),Object(a.jsx)("meta",{property:"og:image",content:g}),Object(a.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(a.jsx)("meta",{name:"twitter:site",content:"@NFTradeOfficial"}),Object(a.jsx)("meta",{name:"twitter:title",content:p}),Object(a.jsx)("meta",{name:"twitter:description",content:I}),Object(a.jsx)("meta",{name:"twitter:image",content:g})]}),Object(a.jsx)(ee,ie(ie(ie({},this.props),this.state),this.callbacks())),"approved"!==o&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ae.a,{isOpen:l,onClose:function(){return e.openTradeModal(!1)},offeredItems:b,receivedItems:j,onSubmit:function(){return e.offerTrade()},removeOfferedItem:function(t){return e.removeOfferedItem(t)},removeReceivedItem:function(t){return e.removeReceivedItem(t)},t:m}),Object(a.jsx)(ce.a,{isOpen:u,onClose:function(){return e.openCrossChainModal(!1)},onSubmit:function(e){!e||n.data.email&&n.data.promotions||c()},t:m})]}),Object(a.jsx)(re.a,{type:d,status:o,isOpen:!!o,currencySymbol:O,t:m})]})}}]),n}(O.a.Component);de.defaultProps={orders:[],tokens:[]};var le=Object(v.withRouter)(de),ue=n("f983");function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=function(e){var t=Object(c.c)(),n={user:Object(c.d)((function(e){return e.user})),tokens:Object(c.d)((function(e){return e.tokens})),orders:Object(c.d)((function(e){return e.orders})),wallet:Object(c.d)((function(e){return e.wallet})),trade:Object(c.d)((function(e){return e.trade}))},r={addReceivedItem:function(e){return t(Object(ue.b)(e))},removeReceivedItem:function(e){return t(Object(ue.f)(e))},clearReceivedItems:function(){return t(Object(ue.d)())},addOfferedItem:function(e){return t(Object(ue.a)(e))},removeOfferedItem:function(e){return t(Object(ue.e)(e))},clearOfferedItems:function(){return t(Object(ue.c)())},tradeResetCart:function(){return t(Object(ue.h)())}};return Object(a.jsx)(le,me(me(me({},e),n),r))};fe.page="swaps";var be=!0;t.default=Object(s.b)(fe)},rnIF:function(e,t,n){"use strict";var r=n("nKUr"),a=n("rePB"),c=n("q1tI"),s=n("rVDa"),i=n("Dd6D"),o=n("Tkjx"),d=n("o7zH"),l=n("eJCX"),u=n("R1LX"),h=n("oOpj"),m=n.n(h);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.isOpen,n=e.onClose,a=e.onSubmit,h=e.offeredItems,f=e.receivedItems,j=e.removeOfferedItem,O=e.removeReceivedItem,v=e.t,p=Object(c.useState)(!1),C=p[0],g=p[1],I=Object(c.useState)(!1),x=I[0],y=I[1];return Object(c.useEffect)((function(){f.length&&h.length||n()}),[f.length,h.length]),Object(r.jsxs)(s.a,{isOpen:t,className:m.a.itemCheckoutTrade,onClose:function(){return n()},children:[Object(r.jsx)(s.a.Header,{onClose:function(){return n()},children:Object(r.jsx)("div",{children:v("checkout.trade.title")})}),Object(r.jsxs)(s.a.Body,{className:m.a.itemCheckoutTradeBody,children:[Object(r.jsxs)("div",{className:m.a.itemCheckoutTradeItems,children:[Object(r.jsxs)("div",{className:m.a.itemCheckoutTradeItemsPanel,children:[Object(r.jsx)("div",{className:m.a.itemCheckoutTradeItemsTitle,children:v("checkout.trade.offer")}),h.map((function(e){return Object(r.jsx)(l.c,b({removeItem:function(e){return j(e)}},e),"offeredItems_trade_".concat(e.id))}))]}),Object(r.jsx)("div",{className:m.a.itemCheckoutTradeItemsExchange,children:Object(r.jsx)(o.q,{})}),Object(r.jsxs)("div",{className:m.a.itemCheckoutTradeItemsPanel,children:[Object(r.jsx)("div",{className:m.a.itemCheckoutTradeItemsTitle,children:v("checkout.trade.get")}),f.map((function(e){return Object(r.jsx)(l.c,b({removeItem:function(e){return O(e)}},e),"receivedItems_trade__".concat(e.id))}))]})]}),Object(r.jsxs)("div",{className:m.a.itemMobileBottomBoxContainer,children:[Object(r.jsx)("div",{className:m.a.itemCheckoutTerms,children:Object(r.jsxs)(u.a,{checked:C,onChange:function(e){return g(e.target.checked)},error:x&&!C,children:[v("checkout.terms")," ",Object(r.jsx)(i.c,{className:m.a.itemCheckoutTermsLink,onClick:function(){return Object(d.a)("/terms.html")},children:v("checkout.terms_link")})]})}),Object(r.jsx)(i.a,{className:m.a.itemCheckoutBtn,onClick:function(){if(!C)return y(!0),!1;a(),n()},children:v("checkout.trade.submit")})]})]})]})};j.defaultProps={},t.a=j},xnVZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/swaps",function(){return n("ZbIx")}])}},[["xnVZ",0,2,4,12,13,1,3,5,6,8,7,9,10,15,11,19,20]]]);