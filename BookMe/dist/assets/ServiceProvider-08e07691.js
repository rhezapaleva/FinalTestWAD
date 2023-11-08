import{_ as S,r as o,o as l,g as I,w as c,d as t,b as i,t as f,c as w,F as b,h as k,p as T,f as D,i as A,j as N,k as U,u as L,l as F,e as R,m as q,q as E,n as B,s as J}from"./index-5dc48de1.js";import{N as z,F as O}from"./navbar-493894d0.js";import"./BookMeLogo-removebg-preview-9d729c3d.js";import"./_commonjsHelpers-23102255.js";const H={props:{name:String,username:String,profileImage:String,serviceTitle:String}},W={class:"name"},M={class:"username"};function G(n,s,r,a,e,u){const p=o("v-img"),v=o("v-avatar"),_=o("v-col"),m=o("v-row"),g=o("v-container");return l(),I(g,{class:"first-container pt-0 ps-5"},{default:c(()=>[t(g,{class:"gig-overview p-0"},{default:c(()=>[i("h1",null,f(r.serviceTitle),1),t(g,null,{default:c(()=>[t(m,null,{default:c(()=>[t(_,{cols:"2",class:"profileimage"},{default:c(()=>[t(v,{size:"80"},{default:c(()=>[t(p,{src:"/src/assets/Images/Tirsa/"+r.profileImage},null,8,["src"])]),_:1})]),_:1}),t(_,{cols:"10",class:"align-text-bottom"},{default:c(()=>[i("div",W,f(r.name),1),i("div",M,"@"+f(r.username),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const K=S(H,[["render",G],["__scopeId","data-v-8c9f393c"]]);const Q={props:{serviceImage:Array,longDescription:String},data(){return{activeIndex:0}}},X=n=>(T("data-v-b322978c"),n=n(),D(),n),Y={class:"services ps-5"},Z=X(()=>i("h2",{class:"aboutgig"},"About this gig",-1));function ee(n,s,r,a,e,u){const p=o("v-carousel-item"),v=o("v-carousel");return l(),w("div",Y,[t(v,{"show-arrows":"hover",modelValue:e.activeIndex,"onUpdate:modelValue":s[0]||(s[0]=_=>e.activeIndex=_)},{default:c(()=>[(l(!0),w(b,null,k(r.serviceImage,(_,m)=>(l(),I(p,{key:m,src:"/src/assets/Images/Tirsa/"+_,cover:""},null,8,["src"]))),128))]),_:1},8,["modelValue"]),Z,i("p",null,f(r.longDescription),1)])}const te=S(Q,[["render",ee],["__scopeId","data-v-b322978c"]]);const ne=A.currentUser,oe={data(){return{newReview:"",newRating:0}},methods:{async addReview(){const n=ne.email.split("@")[0],s=N(U,"usersForProj",this.docId);if(console.log(this.docId),this.newReview.trim()!==""&&this.newRating>0)try{const r={reviewerName:n,rating:this.newRating,review:this.newReview};await L(s,{reviews:F(r)}),this.newRating=0,this.newReview=""}catch(r){console.error("Error adding review:",r)}}},props:{reviews:Array,docId:String}},V=n=>(T("data-v-1ecf80c1"),n=n(),D(),n),se=V(()=>i("h2",null,"Write a Review",-1)),re=V(()=>i("h2",{class:"existing-reviews-header"},"Reviews",-1)),ce={class:"review-text"};function ae(n,s,r,a,e,u){const p=o("v-rating"),v=o("v-textarea"),_=o("v-btn"),m=o("v-col"),g=o("v-card-title"),x=o("v-card-text"),$=o("v-card"),d=o("v-row"),y=o("v-container");return l(),I(y,null,{default:c(()=>[t(d,null,{default:c(()=>[t(m,{cols:"12",class:"ps-5"},{default:c(()=>[se,t(p,{"half-increments":"",hover:"",length:5,size:32,modelValue:e.newRating,"onUpdate:modelValue":s[0]||(s[0]=h=>e.newRating=h),"active-color":"primary"},null,8,["modelValue"]),t(v,{modelValue:e.newReview,"onUpdate:modelValue":s[1]||(s[1]=h=>e.newReview=h),label:"Write your review",rows:"4"},null,8,["modelValue"]),t(_,{onClick:u.addReview,color:"#194759"},{default:c(()=>[R("Submit")]),_:1},8,["onClick"])]),_:1}),t(m,{cols:"12",class:"ps-5"},{default:c(()=>[re,(l(!0),w(b,null,k(r.reviews,(h,j)=>(l(),I($,{class:"existing-reviews-card align-middle",key:j+1},{default:c(()=>[t(g,{class:"pt-0 pb-3"},{default:c(()=>[R(f(h.reviewerName)+" ",1),t(p,{"half-increments":"",readonly:"",length:5,size:30,"model-value":h.rating,color:"warning","active-color":"warning"},null,8,["model-value"])]),_:2},1024),t(x,null,{default:c(()=>[i("div",ce,f(h.review),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}const ie=S(oe,[["render",ae],["__scopeId","data-v-1ecf80c1"]]);const le={props:{calendlyurl:String},mounted(){setTimeout(()=>{Calendly.initInlineWidget({url:this.calendlyurl+"/event-with-myself",parentElement:document.getElementById("calendar")}),console.log("Component is mounted and Calendly widget is initialized")},1e3)}},C=n=>(T("data-v-978fb587"),n=n(),D(),n),_e=C(()=>i("h2",{class:"calender-heading text-center"},"Schedule an Appointment",-1)),de=C(()=>i("div",{class:"m-4",style:{"background-color":"#4f7369","border-radius":"20px"}},[i("div",{id:"calendar",style:{"min-width":"320px",height:"910px",padding:"10px"}})],-1));function ue(n,s,r,a,e,u){return l(),w(b,null,[_e,de],64)}const pe=S(le,[["render",ue],["__scopeId","data-v-978fb587"]]);const me={data(){return{tab:0}},methods:{async redirectToStripe(n){console.log(n);const s=new URLSearchParams;s.append("stripePriceId",n.stripePriceId);const r=`/api/create-checkout-session?${s.toString()}`,a=await fetch(r,{method:"POST"}),{url:e}=await a.json();window.location.href=e}},props:{productArray:Array}},ve={class:"price-label"},he=i("br",null,null,-1),fe={class:"price"};function ge(n,s,r,a,e,u){const p=o("v-tab"),v=o("v-tabs"),_=o("v-btn"),m=o("v-window-item"),g=o("v-window"),x=o("v-card-text"),$=o("v-card");return l(),I($,{class:"payment-tab m-4"},{default:c(()=>[t(v,{modelValue:e.tab,"onUpdate:modelValue":s[0]||(s[0]=d=>e.tab=d),"bg-color":"#4F7369"},{default:c(()=>[(l(!0),w(b,null,k(r.productArray,(d,y)=>(l(),I(p,{value:y},{default:c(()=>[R(f(d.product_name)+" ",1),i("span",ve,"$"+f(d.pricing),1)]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"]),t(x,null,{default:c(()=>[t(g,{modelValue:e.tab,"onUpdate:modelValue":s[1]||(s[1]=d=>e.tab=d)},{default:c(()=>[(l(!0),w(b,null,k(r.productArray,(d,y)=>(l(),I(m,{value:y},{default:c(()=>[R(f(d.product_description),1),he,i("span",fe,"Price: $ "+f(d.pricing),1),t(_,{onClick:h=>u.redirectToStripe(d),color:"#194759",class:"m-3"},{default:c(()=>[R("Pay Now!")]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1})}const we=S(me,[["render",ge]]);if(typeof window>"u")throw new Error("[TalkJS] The TalkJS JavaScript SDK only works in browsers (and not, for example, in Node.js)");(function(n,s,r,a,e,u){u=s.createElement("script"),u.async=1,u.src="https://cdn.talkjs.com/talk.js",s.head.appendChild(u),a=n.Promise,n.Talk={v:3,ready:{then:function(p){if(a)return new a(function(v,_){r.push([p,v,_])});r.push([p])},catch:function(){return a&&new a},c:r}}})(window,document,[]);var P=window.Talk;const ye={name:"Chatbox",props:{name:String,profileImage:String},data(){return{currentUser:{id:"123456",name:"John Doe",email:"john@example.com"}}},async mounted(){await P.ready;const n=new P.User({id:this.currentUser.id,name:this.currentUser.name,email:this.currentUser.email,photoUrl:"./profilepicture.jpg",welcomeMessage:"Hey there! How are you? :-)",role:"booker"}),s=new P.Session({appId:"tjfjGqJk",me:n}),r=new P.User({id:"654321",name:this.name,email:"Sebastian@example.com",photoUrl:"/src/assets/Images/Tirsa/"+this.profileImage,welcomeMessage:"Hey, how can I help?",role:"default"}),a=s.getOrCreateConversation(P.oneOnOneId(n,r));a.setParticipant(n),a.setParticipant(r);const e=s.createPopup();e.select(a),e.mount(this.$refs.talkjs)}},Ie={ref:"talkjs",style:{width:"1000px",margin:"30px",height:"500px"}},Se=i("i",null,"Loading chat...",-1),xe=[Se];function be(n,s,r,a,e,u){return l(),w("div",Ie,xe,512)}const $e=S(ye,[["render",be]]);const Pe={data(){return{serviceId:0,serviceDetails:{},name:"",username:"",profileImage:"",serviceImage:[],serviceDescription:"",calendlyurl:"",productArray:[],reviews:[],docId:"",longDescription:""}},async created(){const n=q(U,"usersForProj"),s=E(n,B("serviceList.serviceId","==",this.$route.params.id));(await J(s)).forEach(a=>{console.log(a.id," => ",a.data());const e=a.data();this.serviceDescription=e.serviceList.serviceDescription,this.name=e.name,this.username=e.username,this.serviceTitle=e.serviceList.serviceTitle,this.calendlyurl=e.calendlyURL,console.log(this.calendlyurl),this.productArray=e.serviceList.productArray,this.reviews=e.reviews,this.serviceImage=e.serviceList.serviceImage,this.docId=a.id,this.profileImage=e.profileImage,this.longDescription=e.serviceList.longDescription,console.log(e.name)})},components:{Navbar:z,ServiceProviderProfile:K,Services:te,Reviews:ie,Scheduling:pe,Payment:we,Footer:O,Chatbox:$e}};function Re(n,s,r,a,e,u){const p=o("Navbar"),v=o("ServiceProviderProfile"),_=o("Services"),m=o("v-col"),g=o("Scheduling"),x=o("v-row"),$=o("Reviews"),d=o("Payment"),y=o("Chatbox"),h=o("Footer");return l(),w(b,null,[t(p),i("div",null,[t(x,null,{default:c(()=>[t(m,{cols:"12",md:"6"},{default:c(()=>[t(v,{name:e.name,username:e.username,profileImage:e.profileImage,serviceTitle:n.serviceTitle},null,8,["name","username","profileImage","serviceTitle"]),t(_,{longDescription:e.longDescription,serviceImage:e.serviceImage},null,8,["longDescription","serviceImage"])]),_:1}),t(m,{cols:"12",md:"6"},{default:c(()=>[t(g,{calendlyurl:e.calendlyurl},null,8,["calendlyurl"])]),_:1})]),_:1}),t(x,null,{default:c(()=>[t(m,{cols:"12",md:"6"},{default:c(()=>[t($,{reviews:e.reviews,docId:e.docId},null,8,["reviews","docId"])]),_:1}),t(m,{cols:"12",md:"6"},{default:c(()=>[t(d,{productArray:e.productArray},null,8,["productArray"])]),_:1})]),_:1})]),t(y,{name:e.name,profileImage:e.profileImage},null,8,["name","profileImage"]),t(h)],64)}const Ve=S(Pe,[["render",Re],["__scopeId","data-v-a85f3a6c"]]);export{Ve as default};
