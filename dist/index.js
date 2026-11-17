"use strict";var f=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var y=f(function(z,q){
function T(a,e,t,r,s,o){var i,u,n,c,v;for(i=r.data,u=r.accessors[0],n=r.accessors[1],c=o,v=0;v<a;v++)u(i,c)>e&&n(i,c,t),c+=s;return r}q.exports=T
});var l=f(function(A,d){
var b=require('@stdlib/array-base-arraylike2object/dist'),h=y();function j(a,e,t,r,s,o){var i,u,n;if(a<=0)return r;if(u=b(r),u.accessorProtocol)return h(a,e,t,u,s,o),r;for(i=o,n=0;n<a;n++)r[i]>e&&(r[i]=t),i+=s;return r}d.exports=j
});var p=f(function(B,g){
var k=require('@stdlib/strided-base-stride2offset/dist'),O=l();function P(a,e,t,r,s){return O(a,e,t,r,s,k(a,s))}g.exports=P
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=p(),m=l();R(G,"ndarray",m);module.exports=G;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
