(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const pd="182",m_=0,kh=1,g_=2,Eo=1,v_=2,fa=3,lr=0,xn=1,Ii=2,Fi=0,fs=1,zh=2,Vh=3,Gh=4,__=5,Tr=100,x_=101,S_=102,b_=103,M_=104,y_=200,E_=201,T_=202,A_=203,Hc=204,qc=205,w_=206,C_=207,R_=208,L_=209,P_=210,D_=211,I_=212,N_=213,U_=214,Wc=0,$c=1,jc=2,ys=3,Xc=4,Yc=5,Jc=6,Kc=7,wm=0,F_=1,O_=2,mi=0,Cm=1,Rm=2,Lm=3,Pm=4,Dm=5,Im=6,Nm=7,Um=300,Or=301,Es=302,Zc=303,Qc=304,tl=306,eu=1e3,Ui=1001,tu=1002,Qt=1003,B_=1004,ja=1005,an=1006,zl=1007,wr=1008,Hn=1009,Fm=1010,Om=1011,ya=1012,md=1013,xi=1014,hi=1015,zi=1016,gd=1017,vd=1018,Ea=1020,Bm=35902,km=35899,zm=1021,Vm=1022,ei=1023,Vi=1026,Cr=1027,Gm=1028,_d=1029,Ts=1030,xd=1031,Sd=1033,To=33776,Ao=33777,wo=33778,Co=33779,nu=35840,iu=35841,ru=35842,su=35843,au=36196,ou=37492,lu=37496,cu=37488,uu=37489,du=37490,hu=37491,fu=37808,pu=37809,mu=37810,gu=37811,vu=37812,_u=37813,xu=37814,Su=37815,bu=37816,Mu=37817,yu=37818,Eu=37819,Tu=37820,Au=37821,wu=36492,Cu=36494,Ru=36495,Lu=36283,Pu=36284,Du=36285,Iu=36286,k_=3200,z_=0,V_=1,rr="",Gn="srgb",As="srgb-linear",Fo="linear",gt="srgb",Wr=7680,Hh=519,G_=512,H_=513,q_=514,bd=515,W_=516,$_=517,Md=518,j_=519,qh=35044,Wh="300 es",fi=2e3,Oo=2001;function Hm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function X_(){const t=Bo("canvas");return t.style.display="block",t}const $h={};function jh(...t){const e="THREE."+t.shift();console.log(e,...t)}function je(...t){const e="THREE."+t.shift();console.warn(e,...t)}function lt(...t){const e="THREE."+t.shift();console.error(e,...t)}function Ta(...t){const e=t.join(" ");e in $h||($h[e]=!0,je(...t))}function Y_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=Math.PI/180,Nu=180/Math.PI;function Pa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function J_(t,e){return(t%e+e)%e}function Gl(t,e,n){return(1-n)*t+n*e}function ia(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,n=0){ft.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Da{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],h=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o>=1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(d!==_||l!==h||c!==p||u!==v){let m=l*h+c*p+u*v+d*_;m<0&&(h=-h,p=-p,v=-v,_=-_,m=-m);let f=1-o;if(m<.9995){const y=Math.acos(m),E=Math.sin(y);f=Math.sin(f*y)/E,o=Math.sin(o*y)/E,l=l*f+h*o,c=c*f+p*o,u=u*f+v*o,d=d*f+_*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+v*o,d=d*f+_*o;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+u*d+l*p-c*h,e[n+1]=l*v+u*h+c*d-o*p,e[n+2]=c*v+u*p+o*h-l*d,e[n+3]=u*v-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Xh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hl=new W,Xh=new Da;class Ye{constructor(e,n,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],_=r[0],m=r[3],f=r[6],y=r[1],E=r[4],T=r[7],A=r[2],w=r[5],R=r[8];return s[0]=a*_+o*y+l*A,s[3]=a*m+o*E+l*w,s[6]=a*f+o*T+l*R,s[1]=c*_+u*y+d*A,s[4]=c*m+u*E+d*w,s[7]=c*f+u*T+d*R,s[2]=h*_+p*y+v*A,s[5]=h*m+p*E+v*w,s[8]=h*f+p*T+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ql.makeScale(e,n)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,n){return this.premultiply(ql.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new Ye,Yh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K_(){const t={enabled:!0,workingColorSpace:As,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===gt&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?Fo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[As]:{primaries:e,whitePoint:i,transfer:Fo,toXYZ:Yh,fromXYZ:Jh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Yh,fromXYZ:Jh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const st=K_();function Oi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ps(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class Z_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=Bo("canvas")),$r.width=e.width,$r.height=e.height;const r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Oi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Oi(n[i]/255)*255):n[i]=Oi(n[i]);return{data:n,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q_=0;class yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Pa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wl(r[a].image)):s.push(Wl(r[a]))}else s=Wl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Wl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Z_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let e1=0;const $l=new W;class pn extends zs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Ui,r=Ui,s=an,a=wr,o=ei,l=Hn,c=pn.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Pa(),this.name="",this.source=new yd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Um)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eu:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eu:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Um;pn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,T=(p+1)/2,A=(f+1)/2,w=(u+h)/4,R=(d+_)/4,V=(v+m)/4;return E>T&&E>A?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=w/i,s=R/i):T>A?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=w/r,s=V/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=V/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t1 extends zs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new pn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new yd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends t1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class qm extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n1 extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Ya.subVectors(this.max,ra),jr.subVectors(e.a,ra),Xr.subVectors(e.b,ra),Yr.subVectors(e.c,ra),Xi.subVectors(Xr,jr),Yi.subVectors(Yr,Xr),pr.subVectors(jr,Yr);let n=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-pr.z,pr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,pr.z,0,-pr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-pr.y,pr.x,0];return!jl(n,jr,Xr,Yr,Ya)||(n=[1,0,0,0,1,0,0,0,1],!jl(n,jr,Xr,Yr,Ya))?!1:(Ja.crossVectors(Xi,Yi),n=[Ja.x,Ja.y,Ja.z],jl(n,jr,Xr,Yr,Ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new W,new W,new W,new W,new W,new W,new W,new W],Xn=new W,Xa=new Ia,jr=new W,Xr=new W,Yr=new W,Xi=new W,Yi=new W,pr=new W,ra=new W,Ya=new W,Ja=new W,mr=new W;function jl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),u=i.dot(mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const i1=new Ia,sa=new W,Xl=new W;class Ed{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):i1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Xl)),this.expandByPoint(sa.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ri=new W,Yl=new W,Ka=new W,Ji=new W,Jl=new W,Za=new W,Kl=new W;class r1{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Yl.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(Yl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ka),o=Ji.dot(this.direction),l=-Ji.dot(Ka),c=Ji.lengthSq(),u=Math.abs(1-a*a);let d,h,p,v;if(u>0)if(d=a*l-o,h=a*o-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const _=1/u;d*=_,h*=_,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yl).addScaledVector(Ka,h),p}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){Jl.subVectors(n,e),Za.subVectors(i,e),Kl.crossVectors(Jl,Za);let a=this.direction.dot(Kl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,e);const l=o*this.direction.dot(Za.crossVectors(Ji,Za));if(l<0)return null;const c=o*this.direction.dot(Jl.cross(Ji));if(c<0||l+c>a)return null;const u=-o*Ji.dot(Kl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,i,r,s,a,o,l,c,u,d,h,p,v,_,m){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,p,v,_,m)}set(e,n,i,r,s,a,o,l,c,u,d,h,p,v,_,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),a=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,v=o*u,_=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,_=c*d;n[0]=h+_*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-v,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,_=c*d;n[0]=h-_*o,n[4]=-a*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*u,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,v=o*u,_=o*d;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,_=o*c;n[0]=l*u,n[4]=_-h*d,n[8]=v*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+v,n[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,_=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+_,n[5]=a*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*u,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s1,e,a1)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ki.crossVectors(i,yn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ki.crossVectors(i,yn)),Ki.normalize(),Qa.crossVectors(yn,Ki),r[0]=Ki.x,r[4]=Qa.x,r[8]=yn.x,r[1]=Ki.y,r[5]=Qa.y,r[9]=yn.y,r[2]=Ki.z,r[6]=Qa.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],_=i[6],m=i[10],f=i[14],y=i[3],E=i[7],T=i[11],A=i[15],w=r[0],R=r[4],V=r[8],x=r[12],b=r[1],L=r[5],Z=r[9],H=r[13],te=r[2],re=r[6],Q=r[10],X=r[14],ae=r[3],I=r[7],Y=r[11],J=r[15];return s[0]=a*w+o*b+l*te+c*ae,s[4]=a*R+o*L+l*re+c*I,s[8]=a*V+o*Z+l*Q+c*Y,s[12]=a*x+o*H+l*X+c*J,s[1]=u*w+d*b+h*te+p*ae,s[5]=u*R+d*L+h*re+p*I,s[9]=u*V+d*Z+h*Q+p*Y,s[13]=u*x+d*H+h*X+p*J,s[2]=v*w+_*b+m*te+f*ae,s[6]=v*R+_*L+m*re+f*I,s[10]=v*V+_*Z+m*Q+f*Y,s[14]=v*x+_*H+m*X+f*J,s[3]=y*w+E*b+T*te+A*ae,s[7]=y*R+E*L+T*re+A*I,s[11]=y*V+E*Z+T*Q+A*Y,s[15]=y*x+E*H+T*X+A*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],_=e[7],m=e[11],f=e[15],y=l*p-c*h,E=o*p-c*d,T=o*h-l*d,A=a*p-c*u,w=a*h-l*u,R=a*d-o*u;return n*(_*y-m*E+f*T)-i*(v*y-m*A+f*w)+r*(v*E-_*A+f*R)-s*(v*T-_*w+m*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],_=e[13],m=e[14],f=e[15],y=d*m*c-_*h*c+_*l*p-o*m*p-d*l*f+o*h*f,E=v*h*c-u*m*c-v*l*p+a*m*p+u*l*f-a*h*f,T=u*_*c-v*d*c+v*o*p-a*_*p-u*o*f+a*d*f,A=v*d*l-u*_*l-v*o*h+a*_*h+u*o*m-a*d*m,w=n*y+i*E+r*T+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=y*R,e[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*f-i*h*f)*R,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*f+i*l*f)*R,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*p-i*l*p)*R,e[4]=E*R,e[5]=(u*m*s-v*h*s+v*r*p-n*m*p-u*r*f+n*h*f)*R,e[6]=(v*l*s-a*m*s-v*r*c+n*m*c+a*r*f-n*l*f)*R,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*R,e[8]=T*R,e[9]=(v*d*s-u*_*s-v*i*p+n*_*p+u*i*f-n*d*f)*R,e[10]=(a*_*s-v*o*s+v*i*c-n*_*c-a*i*f+n*o*f)*R,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*p-n*o*p)*R,e[12]=A*R,e[13]=(u*_*r-v*d*r+v*i*h-n*_*h-u*i*m+n*d*m)*R,e[14]=(v*o*r-a*_*r-v*i*l+n*_*l+a*i*m-n*o*m)*R,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*h+n*o*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,v=s*d,_=a*u,m=a*d,f=o*d,y=l*c,E=l*u,T=l*d,A=i.x,w=i.y,R=i.z;return r[0]=(1-(_+f))*A,r[1]=(p+T)*A,r[2]=(v-E)*A,r[3]=0,r[4]=(p-T)*w,r[5]=(1-(h+f))*w,r[6]=(m+y)*w,r[7]=0,r[8]=(v+E)*R,r[9]=(m-y)*R,r[10]=(1-(h+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=Jr.set(r[0],r[1],r[2]).length();const a=Jr.set(r[4],r[5],r[6]).length(),o=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Yn.copy(this);const c=1/s,u=1/a,d=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,n.setFromRotationMatrix(Yn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let v,_;if(l)v=s/(a-s),_=a*s/(a-s);else if(o===fi)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Oo)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,_;if(l)v=1/(a-s),_=a/(a-s);else if(o===fi)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===Oo)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jr=new W,Yn=new Gt,s1=new W(0,0,0),a1=new W(1,1,1),Ki=new W,Qa=new W,yn=new W,Kh=new Gt,Zh=new Da;class Gi{constructor(e=0,n=0,i=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Wm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o1=0;const Qh=new W,Kr=new Da,Li=new Gt,eo=new W,aa=new W,l1=new W,c1=new Da,ef=new W(1,0,0),tf=new W(0,1,0),nf=new W(0,0,1),rf={type:"added"},u1={type:"removed"},Zr={type:"childadded",child:null},Zl={type:"childremoved",child:null};class Rn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new W,n=new Gi,i=new Da,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Ye}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,n){return Qh.copy(e).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?eo.copy(e):eo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(aa,eo,this.up):Li.lookAt(eo,aa,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(Li),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(u1),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,l1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,c1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rn.DEFAULT_UP=new W(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new W,Pi=new W,Ql=new W,Di=new W,Qr=new W,es=new W,sf=new W,ec=new W,tc=new W,nc=new W,ic=new Ft,rc=new Ft,sc=new Ft;class Qn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Pi.subVectors(i,n),Ql.subVectors(e,n);const a=Jn.dot(Jn),o=Jn.dot(Pi),l=Jn.dot(Ql),c=Pi.dot(Pi),u=Pi.dot(Ql),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return ic.setScalar(0),rc.setScalar(0),sc.setScalar(0),ic.fromBufferAttribute(e,n),rc.fromBufferAttribute(e,i),sc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ic,s.x),a.addScaledVector(rc,s.y),a.addScaledVector(sc,s.z),a}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Pi.subVectors(e,n),Jn.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Jn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),es.subVectors(s,i),ec.subVectors(e,i);const l=Qr.dot(ec),c=es.dot(ec);if(l<=0&&c<=0)return n.copy(i);tc.subVectors(e,r);const u=Qr.dot(tc),d=es.dot(tc);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Qr,a);nc.subVectors(e,s);const p=Qr.dot(nc),v=es.dot(nc);if(v>=0&&p<=v)return n.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(es,o);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return sf.subVectors(s,r),o=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(sf,o);const f=1/(m+_+h);return a=_*f,o=h*f,n.copy(i).addScaledVector(Qr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},to={h:0,s:0,l:0};function ac(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=J_(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ac(a,s,e+1/3),this.g=ac(a,s,e),this.b=ac(a,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=$m[e.toLowerCase()];return i!==void 0?this.setHex(i,n):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return st.workingToColorSpace(nn.copy(this),e),Math.round(nt(nn.r*255,0,255))*65536+Math.round(nt(nn.g*255,0,255))*256+Math.round(nt(nn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Gn){st.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(to);const i=Gl(Zi.h,to.h,n),r=Gl(Zi.s,to.s,n),s=Gl(Zi.l,to.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new et;et.NAMES=$m;let d1=0;class nl extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=fs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=qc,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){je(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hc&&(i.blendSrc=this.blendSrc),this.blendDst!==qc&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jm extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=wm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new W,no=new ft;let h1=0;class vi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qh,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)no.fromBufferAttribute(this,n),no.applyMatrix3(e),this.setXY(n,no.x,no.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ia(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class Xm extends vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ym extends vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bi extends vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let f1=0;const Bn=new Gt,oc=new Rn,ts=new W,En=new Ia,oa=new Ia,Jt=new W;class ji extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hm(e)?Ym:Xm)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ed);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(En.min,oa.min),En.expandByPoint(Jt),Jt.addVectors(En.max,oa.max),En.expandByPoint(Jt)):(En.expandByPoint(oa.min),En.expandByPoint(oa.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Jt.add(ts)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let V=0;V<i.count;V++)o[V]=new W,l[V]=new W;const c=new W,u=new W,d=new W,h=new ft,p=new ft,v=new ft,_=new W,m=new W;function f(V,x,b){c.fromBufferAttribute(i,V),u.fromBufferAttribute(i,x),d.fromBufferAttribute(i,b),h.fromBufferAttribute(s,V),p.fromBufferAttribute(s,x),v.fromBufferAttribute(s,b),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(L),o[V].add(_),o[x].add(_),o[b].add(_),l[V].add(m),l[x].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let V=0,x=y.length;V<x;++V){const b=y[V],L=b.start,Z=b.count;for(let H=L,te=L+Z;H<te;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new W,T=new W,A=new W,w=new W;function R(V){A.fromBufferAttribute(r,V),w.copy(A);const x=o[V];E.copy(x),E.sub(A.multiplyScalar(A.dot(x))).normalize(),T.crossVectors(w,x);const L=T.dot(l[V])<0?-1:1;a.setXYZW(V,E.x,E.y,E.z,L)}for(let V=0,x=y.length;V<x;++V){const b=y[V],L=b.start,Z=b.count;for(let H=L,te=L+Z;H<te;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new vi(h,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ji,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new Gt,gr=new r1,io=new Ed,of=new W,ro=new W,so=new W,ao=new W,lc=new W,oo=new W,lf=new W,lo=new W;class Si extends Rn{constructor(e=new ji,n=new jm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(lc.fromBufferAttribute(d,e),a?oo.addScaledVector(lc,u):oo.addScaledVector(lc.sub(n),u))}n.add(oo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(io.containsPoint(gr.origin)===!1&&(gr.intersectSphere(io,of)===null||gr.origin.distanceToSquared(of)>(e.far-e.near)**2))&&(af.copy(s).invert(),gr.copy(e.ray).applyMatrix4(af),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],f=a[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=y,A=E;T<A;T+=3){const w=o.getX(T),R=o.getX(T+1),V=o.getX(T+2);r=co(this,f,e,i,c,u,d,w,R,V),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=v,f=_;m<f;m+=3){const y=o.getX(m),E=o.getX(m+1),T=o.getX(m+2);r=co(this,a,e,i,c,u,d,y,E,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],f=a[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=y,A=E;T<A;T+=3){const w=T,R=T+1,V=T+2;r=co(this,f,e,i,c,u,d,w,R,V),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,f=_;m<f;m+=3){const y=m,E=m+1,T=m+2;r=co(this,a,e,i,c,u,d,y,E,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function p1(t,e,n,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===lr,o),l===null)return null;lo.copy(o),lo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(lo);return c<n.near||c>n.far?null:{distance:c,point:lo.clone(),object:t}}function co(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ro),t.getVertexPosition(l,so),t.getVertexPosition(c,ao);const u=p1(t,e,n,i,ro,so,ao,lf);if(u){const d=new W;Qn.getBarycoord(lf,ro,so,ao,d),r&&(u.uv=Qn.getInterpolatedAttribute(r,o,l,c,d,new ft)),s&&(u.uv1=Qn.getInterpolatedAttribute(s,o,l,c,d,new ft)),a&&(u.normal=Qn.getInterpolatedAttribute(a,o,l,c,d,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new W,materialIndex:0};Qn.getNormal(ro,so,ao,h.normal),u.face=h,u.barycoord=d}return u}class Na extends ji{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bi(c,3)),this.setAttribute("normal",new Bi(u,3)),this.setAttribute("uv",new Bi(d,2));function v(_,m,f,y,E,T,A,w,R,V,x){const b=T/R,L=A/V,Z=T/2,H=A/2,te=w/2,re=R+1,Q=V+1;let X=0,ae=0;const I=new W;for(let Y=0;Y<Q;Y++){const J=Y*L-H;for(let fe=0;fe<re;fe++){const z=fe*b-Z;I[_]=z*y,I[m]=J*E,I[f]=te,c.push(I.x,I.y,I.z),I[_]=0,I[m]=0,I[f]=w>0?1:-1,u.push(I.x,I.y,I.z),d.push(fe/R),d.push(1-Y/V),X+=1}}for(let Y=0;Y<V;Y++)for(let J=0;J<R;J++){const fe=h+J+re*Y,z=h+J+re*(Y+1),ee=h+(J+1)+re*(Y+1),pe=h+(J+1)+re*Y;l.push(fe,z,pe),l.push(z,ee,pe),ae+=6}o.addGroup(p,ae,x),p+=ae,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=ws(t[n]);for(const r in i)e[r]=i[r]}return e}function m1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Jm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const g1={clone:ws,merge:dn};var v1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v1,this.fragmentShader=_1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=m1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Td extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new W,cf=new ft,uf=new ft;class Zn extends Td{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nu*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,cf,uf),n.subVectors(uf,cf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ns=-90,is=1;class x1 extends Rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(ns,is,e,n);r.layers=this.layers,this.add(r);const s=new Zn(ns,is,e,n);s.layers=this.layers,this.add(s);const a=new Zn(ns,is,e,n);a.layers=this.layers,this.add(a);const o=new Zn(ns,is,e,n);o.layers=this.layers,this.add(o);const l=new Zn(ns,is,e,n);l.layers=this.layers,this.add(l);const c=new Zn(ns,is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Km extends pn{constructor(e=[],n=Or,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zm extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Km(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Na(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Fi});s.uniforms.tEquirect.value=n;const a=new Si(r,s),o=n.minFilter;return n.minFilter===wr&&(n.minFilter=an),new x1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class uo extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S1={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class b1 extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class M1 extends pn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Qt,u=Qt,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uc=new W,y1=new W,E1=new Ye;class Er{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=uc.subVectors(i,n).cross(y1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||E1.getNormalMatrix(e),r=this.coplanarPoint(uc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Ed,T1=new ft(.5,.5),ho=new W;class Qm{constructor(e=new Er,n=new Er,i=new Er,r=new Er,s=new Er,a=new Er){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],p=s[7],v=s[8],_=s[9],m=s[10],f=s[11],y=s[12],E=s[13],T=s[14],A=s[15];if(r[0].setComponents(c-a,p-u,f-v,A-y).normalize(),r[1].setComponents(c+a,p+u,f+v,A+y).normalize(),r[2].setComponents(c+o,p+d,f+_,A+E).normalize(),r[3].setComponents(c-o,p-d,f-_,A-E).normalize(),i)r[4].setComponents(l,h,m,T).normalize(),r[5].setComponents(c-l,p-h,f-m,A-T).normalize();else if(r[4].setComponents(c-l,p-h,f-m,A-T).normalize(),n===fi)r[5].setComponents(c+l,p+h,f+m,A+T).normalize();else if(n===Oo)r[5].setComponents(l,h,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const n=T1.distanceTo(e.center);return vr.radius=.7071067811865476+n,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ho.x=r.normal.x>0?e.max.x:e.min.x,ho.y=r.normal.y>0?e.max.y:e.min.y,ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Aa extends pn{constructor(e,n,i=xi,r,s,a,o=Qt,l=Qt,c,u=Vi,d=1){if(u!==Vi&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class A1 extends Aa{constructor(e,n=xi,i=Or,r,s,a=Qt,o=Qt,l,c=Vi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class eg extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ua extends ji{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,p=[],v=[],_=[],m=[];for(let f=0;f<u;f++){const y=f*h-a;for(let E=0;E<c;E++){const T=E*d-s;v.push(T,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const E=y+c*f,T=y+c*(f+1),A=y+1+c*(f+1),w=y+1+c*f;p.push(E,T,w),p.push(T,A,w)}this.setIndex(p),this.setAttribute("position",new Bi(v,3)),this.setAttribute("normal",new Bi(_,3)),this.setAttribute("uv",new Bi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.widthSegments,e.heightSegments)}}class w1 extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class C1 extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R1 extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tg extends Td{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class L1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function df(t,e,n,i){const r=P1(i);switch(n){case zm:return t*e;case Gm:return t*e/r.components*r.byteLength;case _d:return t*e/r.components*r.byteLength;case Ts:return t*e*2/r.components*r.byteLength;case xd:return t*e*2/r.components*r.byteLength;case Vm:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case Sd:return t*e*4/r.components*r.byteLength;case To:case Ao:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wo:case Co:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case iu:case su:return Math.max(t,16)*Math.max(e,8)/4;case nu:case ru:return Math.max(t,8)*Math.max(e,8)/2;case au:case ou:case cu:case uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lu:case du:case hu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case mu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case gu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case vu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case _u:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Su:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case bu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case yu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Tu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case wu:case Cu:case Ru:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Lu:case Pu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Du:case Iu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function P1(t){switch(t){case Hn:case Fm:return{byteLength:1,components:1};case ya:case Om:case zi:return{byteLength:2,components:1};case gd:case vd:return{byteLength:2,components:4};case xi:case md:case hi:return{byteLength:4,components:1};case Bm:case km:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);function ng(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function D1(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const _=d[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var I1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,U1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,z1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,G1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,j1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,t2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,n2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,i2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,r2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,s2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c2="gl_FragColor = linearToOutputTexel( gl_FragColor );",u2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,h2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,f2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,p2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,b2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,T2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,A2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,P2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,G2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ax=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:I1,alphahash_pars_fragment:N1,alphamap_fragment:U1,alphamap_pars_fragment:F1,alphatest_fragment:O1,alphatest_pars_fragment:B1,aomap_fragment:k1,aomap_pars_fragment:z1,batching_pars_vertex:V1,batching_vertex:G1,begin_vertex:H1,beginnormal_vertex:q1,bsdfs:W1,iridescence_fragment:$1,bumpmap_pars_fragment:j1,clipping_planes_fragment:X1,clipping_planes_pars_fragment:Y1,clipping_planes_pars_vertex:J1,clipping_planes_vertex:K1,color_fragment:Z1,color_pars_fragment:Q1,color_pars_vertex:e2,color_vertex:t2,common:n2,cube_uv_reflection_fragment:i2,defaultnormal_vertex:r2,displacementmap_pars_vertex:s2,displacementmap_vertex:a2,emissivemap_fragment:o2,emissivemap_pars_fragment:l2,colorspace_fragment:c2,colorspace_pars_fragment:u2,envmap_fragment:d2,envmap_common_pars_fragment:h2,envmap_pars_fragment:f2,envmap_pars_vertex:p2,envmap_physical_pars_fragment:T2,envmap_vertex:m2,fog_vertex:g2,fog_pars_vertex:v2,fog_fragment:_2,fog_pars_fragment:x2,gradientmap_pars_fragment:S2,lightmap_pars_fragment:b2,lights_lambert_fragment:M2,lights_lambert_pars_fragment:y2,lights_pars_begin:E2,lights_toon_fragment:A2,lights_toon_pars_fragment:w2,lights_phong_fragment:C2,lights_phong_pars_fragment:R2,lights_physical_fragment:L2,lights_physical_pars_fragment:P2,lights_fragment_begin:D2,lights_fragment_maps:I2,lights_fragment_end:N2,logdepthbuf_fragment:U2,logdepthbuf_pars_fragment:F2,logdepthbuf_pars_vertex:O2,logdepthbuf_vertex:B2,map_fragment:k2,map_pars_fragment:z2,map_particle_fragment:V2,map_particle_pars_fragment:G2,metalnessmap_fragment:H2,metalnessmap_pars_fragment:q2,morphinstance_vertex:W2,morphcolor_vertex:$2,morphnormal_vertex:j2,morphtarget_pars_vertex:X2,morphtarget_vertex:Y2,normal_fragment_begin:J2,normal_fragment_maps:K2,normal_pars_fragment:Z2,normal_pars_vertex:Q2,normal_vertex:ex,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:nx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:rx,iridescence_pars_fragment:sx,opaque_fragment:ax,packing:ox,premultiplied_alpha_fragment:lx,project_vertex:cx,dithering_fragment:ux,dithering_pars_fragment:dx,roughnessmap_fragment:hx,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:mx,shadowmap_vertex:gx,shadowmask_pars_fragment:vx,skinbase_vertex:_x,skinning_pars_vertex:xx,skinning_vertex:Sx,skinnormal_vertex:bx,specularmap_fragment:Mx,specularmap_pars_fragment:yx,tonemapping_fragment:Ex,tonemapping_pars_fragment:Tx,transmission_fragment:Ax,transmission_pars_fragment:wx,uv_pars_fragment:Cx,uv_pars_vertex:Rx,uv_vertex:Lx,worldpos_vertex:Px,background_vert:Dx,background_frag:Ix,backgroundCube_vert:Nx,backgroundCube_frag:Ux,cube_vert:Fx,cube_frag:Ox,depth_vert:Bx,depth_frag:kx,distance_vert:zx,distance_frag:Vx,equirect_vert:Gx,equirect_frag:Hx,linedashed_vert:qx,linedashed_frag:Wx,meshbasic_vert:$x,meshbasic_frag:jx,meshlambert_vert:Xx,meshlambert_frag:Yx,meshmatcap_vert:Jx,meshmatcap_frag:Kx,meshnormal_vert:Zx,meshnormal_frag:Qx,meshphong_vert:e3,meshphong_frag:t3,meshphysical_vert:n3,meshphysical_frag:i3,meshtoon_vert:r3,meshtoon_frag:s3,points_vert:a3,points_frag:o3,shadow_vert:l3,shadow_frag:c3,sprite_vert:u3,sprite_frag:d3},be={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ui={basic:{uniforms:dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:dn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:dn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new et(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:dn([be.points,be.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:dn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:dn([be.common,be.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:dn([be.sprite,be.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:dn([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:dn([be.lights,be.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ui.physical={uniforms:dn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const fo={r:0,b:0,g:0},_r=new Gi,h3=new Gt;function f3(t,e,n,i,r,s,a){const o=new et(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function v(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?n:e).get(T)),T}function _(E){let T=!1;const A=v(E);A===null?f(o,l):A&&A.isColor&&(f(A,1),T=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,T){const A=v(T);A&&(A.isCubeTexture||A.mapping===tl)?(u===void 0&&(u=new Si(new Na(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ws(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_r.copy(T.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(h3.makeRotationFromEuler(_r)),u.material.toneMapped=st.getTransfer(A.colorSpace)!==gt,(d!==A||h!==A.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Si(new Ua(2,2),new ni({name:"BackgroundMaterial",uniforms:ws(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=st.getTransfer(A.colorSpace)!==gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,T){E.getRGB(fo,Jm(t)),i.buffers.color.setClear(fo.r,fo.g,fo.b,T,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),l=T,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:_,addToRenderList:m,dispose:y}}function p3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(b,L,Z,H,te){let re=!1;const Q=d(H,Z,L);s!==Q&&(s=Q,c(s.object)),re=p(b,H,Z,te),re&&v(b,H,Z,te),te!==null&&e.update(te,t.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,T(b,L,Z,H),te!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function d(b,L,Z){const H=Z.wireframe===!0;let te=i[b.id];te===void 0&&(te={},i[b.id]=te);let re=te[L.id];re===void 0&&(re={},te[L.id]=re);let Q=re[H];return Q===void 0&&(Q=h(l()),re[H]=Q),Q}function h(b){const L=[],Z=[],H=[];for(let te=0;te<n;te++)L[te]=0,Z[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Z,attributeDivisors:H,object:b,attributes:{},index:null}}function p(b,L,Z,H){const te=s.attributes,re=L.attributes;let Q=0;const X=Z.getAttributes();for(const ae in X)if(X[ae].location>=0){const Y=te[ae];let J=re[ae];if(J===void 0&&(ae==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),ae==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),Y===void 0||Y.attribute!==J||J&&Y.data!==J.data)return!0;Q++}return s.attributesNum!==Q||s.index!==H}function v(b,L,Z,H){const te={},re=L.attributes;let Q=0;const X=Z.getAttributes();for(const ae in X)if(X[ae].location>=0){let Y=re[ae];Y===void 0&&(ae==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),ae==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor));const J={};J.attribute=Y,Y&&Y.data&&(J.data=Y.data),te[ae]=J,Q++}s.attributes=te,s.attributesNum=Q,s.index=H}function _(){const b=s.newAttributes;for(let L=0,Z=b.length;L<Z;L++)b[L]=0}function m(b){f(b,0)}function f(b,L){const Z=s.newAttributes,H=s.enabledAttributes,te=s.attributeDivisors;Z[b]=1,H[b]===0&&(t.enableVertexAttribArray(b),H[b]=1),te[b]!==L&&(t.vertexAttribDivisor(b,L),te[b]=L)}function y(){const b=s.newAttributes,L=s.enabledAttributes;for(let Z=0,H=L.length;Z<H;Z++)L[Z]!==b[Z]&&(t.disableVertexAttribArray(Z),L[Z]=0)}function E(b,L,Z,H,te,re,Q){Q===!0?t.vertexAttribIPointer(b,L,Z,te,re):t.vertexAttribPointer(b,L,Z,H,te,re)}function T(b,L,Z,H){_();const te=H.attributes,re=Z.getAttributes(),Q=L.defaultAttributeValues;for(const X in re){const ae=re[X];if(ae.location>=0){let I=te[X];if(I===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(I=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(I=b.instanceColor)),I!==void 0){const Y=I.normalized,J=I.itemSize,fe=e.get(I);if(fe===void 0)continue;const z=fe.buffer,ee=fe.type,pe=fe.bytesPerElement,O=ee===t.INT||ee===t.UNSIGNED_INT||I.gpuType===md;if(I.isInterleavedBufferAttribute){const $=I.data,U=$.stride,P=I.offset;if($.isInstancedInterleavedBuffer){for(let B=0;B<ae.locationSize;B++)f(ae.location+B,$.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let B=0;B<ae.locationSize;B++)m(ae.location+B);t.bindBuffer(t.ARRAY_BUFFER,z);for(let B=0;B<ae.locationSize;B++)E(ae.location+B,J/ae.locationSize,ee,Y,U*pe,(P+J/ae.locationSize*B)*pe,O)}else{if(I.isInstancedBufferAttribute){for(let $=0;$<ae.locationSize;$++)f(ae.location+$,I.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let $=0;$<ae.locationSize;$++)m(ae.location+$);t.bindBuffer(t.ARRAY_BUFFER,z);for(let $=0;$<ae.locationSize;$++)E(ae.location+$,J/ae.locationSize,ee,Y,J*pe,J/ae.locationSize*$*pe,O)}}else if(Q!==void 0){const Y=Q[X];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(ae.location,Y);break;case 3:t.vertexAttrib3fv(ae.location,Y);break;case 4:t.vertexAttrib4fv(ae.location,Y);break;default:t.vertexAttrib1fv(ae.location,Y)}}}}y()}function A(){V();for(const b in i){const L=i[b];for(const Z in L){const H=L[Z];for(const te in H)u(H[te].object),delete H[te];delete L[Z]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;const L=i[b.id];for(const Z in L){const H=L[Z];for(const te in H)u(H[te].object),delete H[te];delete L[Z]}delete i[b.id]}function R(b){for(const L in i){const Z=i[L];if(Z[b.id]===void 0)continue;const H=Z[b.id];for(const te in H)u(H[te].object),delete H[te];delete Z[b.id]}}function V(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:V,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function m3(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*h[_];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function g3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==ei&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const V=R===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Hn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hi&&!V)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:T,maxSamples:A,samples:w}}function v3(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Er,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,E=y*4;let T=f.clippingState||null;l.value=T,T=u(v,h,E,p);for(let A=0;A!==E;++A)T[A]=n[A];f.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const f=p+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,T=p;E!==_;++E,T+=4)a.copy(d[E]).applyMatrix4(y,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function _3(t){let e=new WeakMap;function n(a,o){return o===Zc?a.mapping=Or:o===Qc&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zc||o===Qc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Zm(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ar=4,hf=[.125,.215,.35,.446,.526,.582],Ar=20,x3=256,la=new tg,ff=new et;let dc=null,hc=0,fc=0,pc=!1;const S3=new W;class pf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=S3}=s;dc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dc,hc,fc),this._renderer.xr.enabled=pc,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Or||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:zi,format:ei,colorSpace:As,depthBuffer:!1},r=mf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b3(s)),this._blurMaterial=y3(s,e,n),this._ggxMaterial=M3(s,e,n)}return r}_compileMaterial(e){const n=new Si(new ji,e);this._renderer.compile(n,la)}_sceneToCubeUV(e,n,i,r,s){const l=new Zn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(ff),d.toneMapping=mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new Na,new jm({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let f=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,f=!0):(m.color.copy(ff),f=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):T===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const A=this._cubeSize;rs(r,T*A,E>2?A:0,A,A),d.setRenderTarget(r),f&&d.render(_,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Or||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;rs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,la)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:v}=this,_=this._sizeLods[i],m=3*_*(i>v-ar?i-v+ar:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,rs(s,m,f,3*_,2*_),r.setRenderTarget(s),r.render(o,la),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,rs(e,m,f,3*_,2*_),r.setRenderTarget(e),r.render(o,la)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ar-1),_=s/v,m=isFinite(s)?1+Math.floor(u*_):Ar;m>Ar&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const f=[];let y=0;for(let R=0;R<Ar;++R){const V=R/_,x=Math.exp(-V*V/2);f.push(x),R===0?y+=x:R<m&&(y+=2*x)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=v,h.mipInt.value=E-i;const T=this._sizeLods[r],A=3*T*(r>E-ar?r-E+ar:0),w=4*(this._cubeSize-T);rs(n,A,w,3*T,2*T),l.setRenderTarget(n),l.render(d,la)}}function b3(t){const e=[],n=[],i=[];let r=t;const s=t-ar+1+hf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ar?l=hf[a-t+ar-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,m=2,f=1,y=new Float32Array(_*v*p),E=new Float32Array(m*v*p),T=new Float32Array(f*v*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,V=w>2?0:-1,x=[R,V,0,R+2/3,V,0,R+2/3,V+1,0,R,V,0,R+2/3,V+1,0,R,V+1,0];y.set(x,_*v*w),E.set(h,m*v*w);const b=[w,w,w,w,w,w];T.set(b,f*v*w)}const A=new ji;A.setAttribute("position",new vi(y,_)),A.setAttribute("uv",new vi(E,m)),A.setAttribute("faceIndex",new vi(T,f)),i.push(new Si(A,null)),r>ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function mf(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function M3(t,e,n){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function y3(t,e,n){const i=new Float32Array(Ar),r=new W(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function gf(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function vf(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function E3(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Zc||l===Qc,u=l===Or||l===Es;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new pf(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new pf(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function T3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ta("WebGLRenderer: "+i+" extension not supported."),r}}}function A3(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let E=0,T=y.length;E<T;E+=3){const A=y[E+0],w=y[E+1],R=y[E+2];h.push(A,w,w,R,R,A)}}else if(v!==void 0){const y=v.array;_=v.version;for(let E=0,T=y.length/3-1;E<T;E+=3){const A=E+0,w=E+1,R=E+2;h.push(A,w,w,R,R,A)}}else return;const m=new(Hm(h)?Ym:Xm)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function w3(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*a,v),n.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];n.update(m,i,1)}function d(h,p,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,v);let f=0;for(let y=0;y<v;y++)f+=p[y]*_[y];n.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function C3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function R3(t,e,n){const i=new WeakMap,r=new Ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let x=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",x)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),v===!0&&(E=2),_===!0&&(E=3);let T=o.attributes.position.count*E,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*A*4*d),R=new qm(w,T,A,d);R.type=hi,R.needsUpdate=!0;const V=E*4;for(let b=0;b<d;b++){const L=m[b],Z=f[b],H=y[b],te=T*A*4*b;for(let re=0;re<L.count;re++){const Q=re*V;p===!0&&(r.fromBufferAttribute(L,re),w[te+Q+0]=r.x,w[te+Q+1]=r.y,w[te+Q+2]=r.z,w[te+Q+3]=0),v===!0&&(r.fromBufferAttribute(Z,re),w[te+Q+4]=r.x,w[te+Q+5]=r.y,w[te+Q+6]=r.z,w[te+Q+7]=0),_===!0&&(r.fromBufferAttribute(H,re),w[te+Q+8]=r.x,w[te+Q+9]=r.y,w[te+Q+10]=r.z,w[te+Q+11]=H.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new ft(T,A)},i.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function L3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const P3={[Cm]:"LINEAR_TONE_MAPPING",[Rm]:"REINHARD_TONE_MAPPING",[Lm]:"CINEON_TONE_MAPPING",[Pm]:"ACES_FILMIC_TONE_MAPPING",[Im]:"AGX_TONE_MAPPING",[Nm]:"NEUTRAL_TONE_MAPPING",[Dm]:"CUSTOM_TONE_MAPPING"};function D3(t,e,n,i,r){const s=new gi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new gi(e,n,{type:zi,depthBuffer:!1,stencilBuffer:!1}),o=new ji;o.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Bi([0,2,0,0,2,0],2));const l=new w1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Si(o,l),u=new tg(-1,1,1,-1,0,1);let d=null,h=null,p=!1,v,_=null,m=[],f=!1;this.setSize=function(y,E){s.setSize(y,E),a.setSize(y,E);for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(y,E)}},this.setEffects=function(y){m=y,f=m.length>0&&m[0].isRenderPass===!0;const E=s.width,T=s.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(E,T)}},this.begin=function(y,E){if(p||y.toneMapping===mi&&m.length===0)return!1;if(_=E,E!==null){const T=E.width,A=E.height;(s.width!==T||s.height!==A)&&this.setSize(T,A)}return f===!1&&y.setRenderTarget(s),v=y.toneMapping,y.toneMapping=mi,!0},this.hasRenderPass=function(){return f},this.end=function(y,E){y.toneMapping=v,p=!0;let T=s,A=a;for(let w=0;w<m.length;w++){const R=m[w];if(R.enabled!==!1&&(R.render(y,A,T,E),R.needsSwap!==!1)){const V=T;T=A,A=V}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,l.defines={},st.getTransfer(d)===gt&&(l.defines.SRGB_TRANSFER="");const w=P3[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(_),y.render(c,u),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const ig=new pn,Uu=new Aa(1,1),rg=new qm,sg=new n1,ag=new Km,_f=[],xf=[],Sf=new Float32Array(16),bf=new Float32Array(9),Mf=new Float32Array(4);function Vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_f[r];if(s===void 0&&(s=new Float32Array(r),_f[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rl(t,e){let n=xf[e];n===void 0&&(n=new Int32Array(e),xf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function I3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function N3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function U3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function F3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function O3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;Mf.set(i),t.uniformMatrix2fv(this.addr,!1,Mf),Xt(n,i)}}function B3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;bf.set(i),t.uniformMatrix3fv(this.addr,!1,bf),Xt(n,i)}}function k3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;Sf.set(i),t.uniformMatrix4fv(this.addr,!1,Sf),Xt(n,i)}}function z3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function V3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function G3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function H3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function q3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function W3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function $3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function j3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function X3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Uu.compareFunction=n.isReversedDepthBuffer()?Md:bd,s=Uu):s=ig,n.setTexture2D(e||s,r)}function Y3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sg,r)}function J3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ag,r)}function K3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||rg,r)}function Z3(t){switch(t){case 5126:return I3;case 35664:return N3;case 35665:return U3;case 35666:return F3;case 35674:return O3;case 35675:return B3;case 35676:return k3;case 5124:case 35670:return z3;case 35667:case 35671:return V3;case 35668:case 35672:return G3;case 35669:case 35673:return H3;case 5125:return q3;case 36294:return W3;case 36295:return $3;case 36296:return j3;case 35678:case 36198:case 36298:case 36306:case 35682:return X3;case 35679:case 36299:case 36307:return Y3;case 35680:case 36300:case 36308:case 36293:return J3;case 36289:case 36303:case 36311:case 36292:return K3}}function Q3(t,e){t.uniform1fv(this.addr,e)}function eS(t,e){const n=Vs(e,this.size,2);t.uniform2fv(this.addr,n)}function tS(t,e){const n=Vs(e,this.size,3);t.uniform3fv(this.addr,n)}function nS(t,e){const n=Vs(e,this.size,4);t.uniform4fv(this.addr,n)}function iS(t,e){const n=Vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rS(t,e){const n=Vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sS(t,e){const n=Vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function aS(t,e){t.uniform1iv(this.addr,e)}function oS(t,e){t.uniform2iv(this.addr,e)}function lS(t,e){t.uniform3iv(this.addr,e)}function cS(t,e){t.uniform4iv(this.addr,e)}function uS(t,e){t.uniform1uiv(this.addr,e)}function dS(t,e){t.uniform2uiv(this.addr,e)}function hS(t,e){t.uniform3uiv(this.addr,e)}function fS(t,e){t.uniform4uiv(this.addr,e)}function pS(t,e,n){const i=this.cache,r=e.length,s=rl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Uu:a=ig;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function mS(t,e,n){const i=this.cache,r=e.length,s=rl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||sg,s[a])}function gS(t,e,n){const i=this.cache,r=e.length,s=rl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||ag,s[a])}function vS(t,e,n){const i=this.cache,r=e.length,s=rl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||rg,s[a])}function _S(t){switch(t){case 5126:return Q3;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return rS;case 35676:return sS;case 5124:case 35670:return aS;case 35667:case 35671:return oS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return uS;case 36294:return dS;case 36295:return hS;case 36296:return fS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return gS;case 36289:case 36303:case 36311:case 36292:return vS}}class xS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Z3(n.type)}}class SS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_S(n.type)}}class bS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function yf(t,e){t.seq.push(e),t.map[e.id]=e}function MS(t,e,n){const i=t.name,r=i.length;for(mc.lastIndex=0;;){const s=mc.exec(i),a=mc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){yf(n,c===void 0?new xS(o,t,e):new SS(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new bS(o),yf(n,d)),n=d}}}class Ro{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);MS(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Ef(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yS=37297;let ES=0;function TS(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Tf=new Ye;function AS(t){st._getMatrix(Tf,st.workingColorSpace,t);const e=`mat3( ${Tf.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Fo:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Af(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+TS(t.getShaderSource(e),o)}else return s}function wS(t,e){const n=AS(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const CS={[Cm]:"Linear",[Rm]:"Reinhard",[Lm]:"Cineon",[Pm]:"ACESFilmic",[Im]:"AgX",[Nm]:"Neutral",[Dm]:"Custom"};function RS(t,e){const n=CS[e];return n===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const po=new W;function LS(){st.getLuminanceCoefficients(po);const t=po.x.toFixed(4),e=po.y.toFixed(4),n=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function DS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function IS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function pa(t){return t!==""}function wf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(t){return t.replace(NS,FS)}const US=new Map;function FS(t,e){let n=Ke[e];if(n===void 0){const i=US.get(e);if(i!==void 0)n=Ke[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fu(n)}const OS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(t){return t.replace(OS,BS)}function BS(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kS={[Eo]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function zS(t){return kS[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const VS={[Or]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[tl]:"ENVMAP_TYPE_CUBE_UV"};function GS(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":VS[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const HS={[Es]:"ENVMAP_MODE_REFRACTION"};function qS(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":HS[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WS={[wm]:"ENVMAP_BLENDING_MULTIPLY",[F_]:"ENVMAP_BLENDING_MIX",[O_]:"ENVMAP_BLENDING_ADD"};function $S(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":WS[t.combine]||"ENVMAP_BLENDING_NONE"}function jS(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function XS(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=zS(n),c=GS(n),u=qS(n),d=$S(n),h=jS(n),p=PS(n),v=DS(s),_=r.createProgram();let m,f,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(pa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(pa).join(`
`),f.length>0&&(f+=`
`)):(m=[Lf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),f=[Lf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?Ke.tonemapping_pars_fragment:"",n.toneMapping!==mi?RS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,wS("linearToOutputTexel",n.outputColorSpace),LS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pa).join(`
`)),a=Fu(a),a=wf(a,n),a=Cf(a,n),o=Fu(o),o=wf(o,n),o=Cf(o,n),a=Rf(a),o=Rf(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=y+m+a,T=y+f+o,A=Ef(r,r.VERTEX_SHADER,E),w=Ef(r,r.FRAGMENT_SHADER,T);r.attachShader(_,A),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(L){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(_)||"",H=r.getShaderInfoLog(A)||"",te=r.getShaderInfoLog(w)||"",re=Z.trim(),Q=H.trim(),X=te.trim();let ae=!0,I=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,A,w);else{const Y=Af(r,A,"vertex"),J=Af(r,w,"fragment");lt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+re+`
`+Y+`
`+J)}else re!==""?je("WebGLProgram: Program Info Log:",re):(Q===""||X==="")&&(I=!1);I&&(L.diagnostics={runnable:ae,programLog:re,vertexShader:{log:Q,prefix:m},fragmentShader:{log:X,prefix:f}})}r.deleteShader(A),r.deleteShader(w),V=new Ro(r,_),x=IS(r,_)}let V;this.getUniforms=function(){return V===void 0&&R(this),V};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,yS)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ES++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let YS=0;class JS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new KS(e),n.set(e,i)),i}}class KS{constructor(e){this.id=YS++,this.code=e,this.usedTimes=0}}function ZS(t,e,n,i,r,s,a){const o=new Wm,l=new JS,c=new Set,u=[],d=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,b,L,Z,H){const te=Z.fog,re=H.geometry,Q=x.isMeshStandardMaterial?Z.environment:null,X=(x.isMeshStandardMaterial?n:e).get(x.envMap||Q),ae=X&&X.mapping===tl?X.image.height:null,I=v[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&je("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Y=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,J=Y!==void 0?Y.length:0;let fe=0;re.morphAttributes.position!==void 0&&(fe=1),re.morphAttributes.normal!==void 0&&(fe=2),re.morphAttributes.color!==void 0&&(fe=3);let z,ee,pe,O;if(I){const pt=ui[I];z=pt.vertexShader,ee=pt.fragmentShader}else z=x.vertexShader,ee=x.fragmentShader,l.update(x),pe=l.getVertexShaderID(x),O=l.getFragmentShaderID(x);const $=t.getRenderTarget(),U=t.state.buffers.depth.getReversed(),P=H.isInstancedMesh===!0,B=H.isBatchedMesh===!0,G=!!x.map,ne=!!x.matcap,K=!!X,he=!!x.aoMap,Ie=!!x.lightMap,Re=!!x.bumpMap,vt=!!x.normalMap,C=!!x.displacementMap,dt=!!x.emissiveMap,tt=!!x.metalnessMap,yt=!!x.roughnessMap,Pe=x.anisotropy>0,M=x.clearcoat>0,g=x.dispersion>0,N=x.iridescence>0,se=x.sheen>0,le=x.transmission>0,ie=Pe&&!!x.anisotropyMap,Ne=M&&!!x.clearcoatMap,ve=M&&!!x.clearcoatNormalMap,Le=M&&!!x.clearcoatRoughnessMap,We=N&&!!x.iridescenceMap,ue=N&&!!x.iridescenceThicknessMap,xe=se&&!!x.sheenColorMap,Ce=se&&!!x.sheenRoughnessMap,De=!!x.specularMap,_e=!!x.specularColorMap,Ze=!!x.specularIntensityMap,D=le&&!!x.transmissionMap,ye=le&&!!x.thicknessMap,me=!!x.gradientMap,Ee=!!x.alphaMap,ce=x.alphaTest>0,oe=!!x.alphaHash,ge=!!x.extensions;let $e=mi;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($e=t.toneMapping);const Et={shaderID:I,shaderType:x.type,shaderName:x.name,vertexShader:z,fragmentShader:ee,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:O,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:B,batchingColor:B&&H._colorsTexture!==null,instancing:P,instancingColor:P&&H.instanceColor!==null,instancingMorph:P&&H.morphTexture!==null,outputColorSpace:$===null?t.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:As,alphaToCoverage:!!x.alphaToCoverage,map:G,matcap:ne,envMap:K,envMapMode:K&&X.mapping,envMapCubeUVHeight:ae,aoMap:he,lightMap:Ie,bumpMap:Re,normalMap:vt,displacementMap:C,emissiveMap:dt,normalMapObjectSpace:vt&&x.normalMapType===V_,normalMapTangentSpace:vt&&x.normalMapType===z_,metalnessMap:tt,roughnessMap:yt,anisotropy:Pe,anisotropyMap:ie,clearcoat:M,clearcoatMap:Ne,clearcoatNormalMap:ve,clearcoatRoughnessMap:Le,dispersion:g,iridescence:N,iridescenceMap:We,iridescenceThicknessMap:ue,sheen:se,sheenColorMap:xe,sheenRoughnessMap:Ce,specularMap:De,specularColorMap:_e,specularIntensityMap:Ze,transmission:le,transmissionMap:D,thicknessMap:ye,gradientMap:me,opaque:x.transparent===!1&&x.blending===fs&&x.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ce,alphaHash:oe,combine:x.combine,mapUv:G&&_(x.map.channel),aoMapUv:he&&_(x.aoMap.channel),lightMapUv:Ie&&_(x.lightMap.channel),bumpMapUv:Re&&_(x.bumpMap.channel),normalMapUv:vt&&_(x.normalMap.channel),displacementMapUv:C&&_(x.displacementMap.channel),emissiveMapUv:dt&&_(x.emissiveMap.channel),metalnessMapUv:tt&&_(x.metalnessMap.channel),roughnessMapUv:yt&&_(x.roughnessMap.channel),anisotropyMapUv:ie&&_(x.anisotropyMap.channel),clearcoatMapUv:Ne&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(x.sheenRoughnessMap.channel),specularMapUv:De&&_(x.specularMap.channel),specularColorMapUv:_e&&_(x.specularColorMap.channel),specularIntensityMapUv:Ze&&_(x.specularIntensityMap.channel),transmissionMapUv:D&&_(x.transmissionMap.channel),thicknessMapUv:ye&&_(x.thicknessMap.channel),alphaMapUv:Ee&&_(x.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(vt||Pe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!re.attributes.uv&&(G||Ee),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:U,skinning:H.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:G&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:dt&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ii,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||B)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function f(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(y(b,x),E(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function E(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),x.push(o.mask)}function T(x){const b=v[x.type];let L;if(b){const Z=ui[b];L=g1.clone(Z.uniforms)}else L=x.uniforms;return L}function A(x,b){let L=d.get(b);return L!==void 0?++L.usedTimes:(L=new XS(t,b,x,s),u.push(L),d.set(b,L)),L}function w(x){if(--x.usedTimes===0){const b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),d.delete(x.cacheKey),x.destroy()}}function R(x){l.remove(x)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:V}}function QS(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function eb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Df(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,p,v,_,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,h,p,v,_,m){const f=a(d,h,p,v,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,v,_,m){const f=a(d,h,p,v,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||eb),i.length>1&&i.sort(h||Pf),r.length>1&&r.sort(h||Pf)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function tb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Df,t.set(i,[a])):r>=s.length?(a=new Df,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function nb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new et};break;case"SpotLight":n={position:new W,direction:new W,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function ib(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rb=0;function sb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ab(t){const e=new nb,n=ib(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Gt,a=new Gt;function o(c){let u=0,d=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,v=0,_=0,m=0,f=0,y=0,E=0,T=0,A=0,w=0,R=0;c.sort(sb);for(let x=0,b=c.length;x<b;x++){const L=c[x],Z=L.color,H=L.intensity,te=L.distance;let re=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ts?re=L.shadow.map.texture:re=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=Z.r*H,d+=Z.g*H,h+=Z.b*H;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(L.sh.coefficients[Q],H);R++}else if(L.isDirectionalLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,ae=n.get(L);ae.shadowIntensity=X.intensity,ae.shadowBias=X.bias,ae.shadowNormalBias=X.normalBias,ae.shadowRadius=X.radius,ae.shadowMapSize=X.mapSize,i.directionalShadow[p]=ae,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=L.shadow.matrix,y++}i.directional[p]=Q,p++}else if(L.isSpotLight){const Q=e.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(Z).multiplyScalar(H),Q.distance=te,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,i.spot[_]=Q;const X=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,X.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=X.matrix,L.castShadow){const ae=n.get(L);ae.shadowIntensity=X.intensity,ae.shadowBias=X.bias,ae.shadowNormalBias=X.normalBias,ae.shadowRadius=X.radius,ae.shadowMapSize=X.mapSize,i.spotShadow[_]=ae,i.spotShadowMap[_]=re,T++}_++}else if(L.isRectAreaLight){const Q=e.get(L);Q.color.copy(Z).multiplyScalar(H),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Q,m++}else if(L.isPointLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){const X=L.shadow,ae=n.get(L);ae.shadowIntensity=X.intensity,ae.shadowBias=X.bias,ae.shadowNormalBias=X.normalBias,ae.shadowRadius=X.radius,ae.shadowMapSize=X.mapSize,ae.shadowCameraNear=X.camera.near,ae.shadowCameraFar=X.camera.far,i.pointShadow[v]=ae,i.pointShadowMap[v]=re,i.pointShadowMatrix[v]=L.shadow.matrix,E++}i.point[v]=Q,v++}else if(L.isHemisphereLight){const Q=e.get(L);Q.skyColor.copy(L.color).multiplyScalar(H),Q.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[f]=Q,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const V=i.hash;(V.directionalLength!==p||V.pointLength!==v||V.spotLength!==_||V.rectAreaLength!==m||V.hemiLength!==f||V.numDirectionalShadows!==y||V.numPointShadows!==E||V.numSpotShadows!==T||V.numSpotMaps!==A||V.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=T+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,V.directionalLength=p,V.pointLength=v,V.spotLength=_,V.rectAreaLength=m,V.hemiLength=f,V.numDirectionalShadows=y,V.numPointShadows=E,V.numSpotShadows=T,V.numSpotMaps=A,V.numLightProbes=R,i.version=rb++)}function l(c,u){let d=0,h=0,p=0,v=0,_=0;const m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const E=c[f];if(E.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(E.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function If(t){const e=new ab(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function ob(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new If(t),e.set(r,[o])):s>=a.length?(o=new If(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ub=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],db=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Nf=new Gt,ca=new W,gc=new W;function hb(t,e,n){let i=new Qm;const r=new ft,s=new ft,a=new Ft,o=new C1,l=new R1,c={},u=n.maxTextureSize,d={[lr]:xn,[xn]:lr,[Ii]:Ii},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:lb,fragmentShader:cb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new ji;v.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Si(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let f=this.type;this.render=function(w,R,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===v_&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Eo);const x=t.getRenderTarget(),b=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(Fi),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const H=f!==this.type;H&&R.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(re=>re.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,re=w.length;te<re;te++){const Q=w[te],X=Q.shadow;if(X===void 0){je("WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ae=X.getFrameExtents();if(r.multiply(ae),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,X.mapSize.y=s.y)),X.map===null||H===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===fa){if(Q.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new gi(r.x,r.y,{format:Ts,type:zi,minFilter:an,magFilter:an,generateMipmaps:!1}),X.map.texture.name=Q.name+".shadowMap",X.map.depthTexture=new Aa(r.x,r.y,hi),X.map.depthTexture.name=Q.name+".shadowMapDepth",X.map.depthTexture.format=Vi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qt,X.map.depthTexture.magFilter=Qt}else{Q.isPointLight?(X.map=new Zm(r.x),X.map.depthTexture=new A1(r.x,xi)):(X.map=new gi(r.x,r.y),X.map.depthTexture=new Aa(r.x,r.y,xi)),X.map.depthTexture.name=Q.name+".shadowMap",X.map.depthTexture.format=Vi;const Y=t.state.buffers.depth.getReversed();this.type===Eo?(X.map.depthTexture.compareFunction=Y?Md:bd,X.map.depthTexture.minFilter=an,X.map.depthTexture.magFilter=an):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qt,X.map.depthTexture.magFilter=Qt)}X.camera.updateProjectionMatrix()}const I=X.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<I;Y++){if(X.map.isWebGLCubeRenderTarget)t.setRenderTarget(X.map,Y),t.clear();else{Y===0&&(t.setRenderTarget(X.map),t.clear());const J=X.getViewport(Y);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),Z.viewport(a)}if(Q.isPointLight){const J=X.camera,fe=X.matrix,z=Q.distance||J.far;z!==J.far&&(J.far=z,J.updateProjectionMatrix()),ca.setFromMatrixPosition(Q.matrixWorld),J.position.copy(ca),gc.copy(J.position),gc.add(ub[Y]),J.up.copy(db[Y]),J.lookAt(gc),J.updateMatrixWorld(),fe.makeTranslation(-ca.x,-ca.y,-ca.z),Nf.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Nf,J.coordinateSystem,J.reversedDepth)}else X.updateMatrices(Q);i=X.getFrustum(),T(R,V,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===fa&&y(X,V),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(x,b,L)};function y(w,R){const V=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new gi(r.x,r.y,{format:Ts,type:zi})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,V,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,V,p,_,null)}function E(w,R,V,x){let b=null;const L=V.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)b=L;else if(b=V.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const Z=b.uuid,H=R.uuid;let te=c[Z];te===void 0&&(te={},c[Z]=te);let re=te[H];re===void 0&&(re=b.clone(),te[H]=re,R.addEventListener("dispose",A)),b=re}if(b.visible=R.visible,b.wireframe=R.wireframe,x===fa?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,V.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Z=t.properties.get(b);Z.light=V}return b}function T(w,R,V,x,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===fa)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld);const H=e.update(w),te=w.material;if(Array.isArray(te)){const re=H.groups;for(let Q=0,X=re.length;Q<X;Q++){const ae=re[Q],I=te[ae.materialIndex];if(I&&I.visible){const Y=E(w,I,x,b);w.onBeforeShadow(t,w,R,V,H,Y,ae),t.renderBufferDirect(V,null,H,Y,w,ae),w.onAfterShadow(t,w,R,V,H,Y,ae)}}}else if(te.visible){const re=E(w,te,x,b);w.onBeforeShadow(t,w,R,V,H,re,null),t.renderBufferDirect(V,null,H,re,w,null),w.onAfterShadow(t,w,R,V,H,re,null)}}const Z=w.children;for(let H=0,te=Z.length;H<te;H++)T(Z[H],R,V,x,b)}function A(w){w.target.removeEventListener("dispose",A);for(const V in c){const x=c[V],b=w.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}const fb={[Wc]:$c,[jc]:Jc,[Xc]:Kc,[ys]:Yc,[$c]:Wc,[Jc]:jc,[Kc]:Xc,[Yc]:ys};function pb(t,e){function n(){let D=!1;const ye=new Ft;let me=null;const Ee=new Ft(0,0,0,0);return{setMask:function(ce){me!==ce&&!D&&(t.colorMask(ce,ce,ce,ce),me=ce)},setLocked:function(ce){D=ce},setClear:function(ce,oe,ge,$e,Et){Et===!0&&(ce*=$e,oe*=$e,ge*=$e),ye.set(ce,oe,ge,$e),Ee.equals(ye)===!1&&(t.clearColor(ce,oe,ge,$e),Ee.copy(ye))},reset:function(){D=!1,me=null,Ee.set(-1,0,0,0)}}}function i(){let D=!1,ye=!1,me=null,Ee=null,ce=null;return{setReversed:function(oe){if(ye!==oe){const ge=e.get("EXT_clip_control");oe?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ye=oe;const $e=ce;ce=null,this.setClear($e)}},getReversed:function(){return ye},setTest:function(oe){oe?$(t.DEPTH_TEST):U(t.DEPTH_TEST)},setMask:function(oe){me!==oe&&!D&&(t.depthMask(oe),me=oe)},setFunc:function(oe){if(ye&&(oe=fb[oe]),Ee!==oe){switch(oe){case Wc:t.depthFunc(t.NEVER);break;case $c:t.depthFunc(t.ALWAYS);break;case jc:t.depthFunc(t.LESS);break;case ys:t.depthFunc(t.LEQUAL);break;case Xc:t.depthFunc(t.EQUAL);break;case Yc:t.depthFunc(t.GEQUAL);break;case Jc:t.depthFunc(t.GREATER);break;case Kc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=oe}},setLocked:function(oe){D=oe},setClear:function(oe){ce!==oe&&(ye&&(oe=1-oe),t.clearDepth(oe),ce=oe)},reset:function(){D=!1,me=null,Ee=null,ce=null,ye=!1}}}function r(){let D=!1,ye=null,me=null,Ee=null,ce=null,oe=null,ge=null,$e=null,Et=null;return{setTest:function(pt){D||(pt?$(t.STENCIL_TEST):U(t.STENCIL_TEST))},setMask:function(pt){ye!==pt&&!D&&(t.stencilMask(pt),ye=pt)},setFunc:function(pt,ai,wi){(me!==pt||Ee!==ai||ce!==wi)&&(t.stencilFunc(pt,ai,wi),me=pt,Ee=ai,ce=wi)},setOp:function(pt,ai,wi){(oe!==pt||ge!==ai||$e!==wi)&&(t.stencilOp(pt,ai,wi),oe=pt,ge=ai,$e=wi)},setLocked:function(pt){D=pt},setClear:function(pt){Et!==pt&&(t.clearStencil(pt),Et=pt)},reset:function(){D=!1,ye=null,me=null,Ee=null,ce=null,oe=null,ge=null,$e=null,Et=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],v=null,_=!1,m=null,f=null,y=null,E=null,T=null,A=null,w=null,R=new et(0,0,0),V=0,x=!1,b=null,L=null,Z=null,H=null,te=null;const re=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,X=0;const ae=t.getParameter(t.VERSION);ae.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ae)[1]),Q=X>=1):ae.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),Q=X>=2);let I=null,Y={};const J=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),z=new Ft().fromArray(J),ee=new Ft().fromArray(fe);function pe(D,ye,me,Ee){const ce=new Uint8Array(4),oe=t.createTexture();t.bindTexture(D,oe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ge=0;ge<me;ge++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,Ee,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(ye+ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return oe}const O={};O[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),O[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),O[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(t.DEPTH_TEST),a.setFunc(ys),Re(!1),vt(kh),$(t.CULL_FACE),he(Fi);function $(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function U(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function P(D,ye){return d[D]!==ye?(t.bindFramebuffer(D,ye),d[D]=ye,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ye),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function B(D,ye){let me=p,Ee=!1;if(D){me=h.get(ye),me===void 0&&(me=[],h.set(ye,me));const ce=D.textures;if(me.length!==ce.length||me[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,ge=ce.length;oe<ge;oe++)me[oe]=t.COLOR_ATTACHMENT0+oe;me.length=ce.length,Ee=!0}}else me[0]!==t.BACK&&(me[0]=t.BACK,Ee=!0);Ee&&t.drawBuffers(me)}function G(D){return v!==D?(t.useProgram(D),v=D,!0):!1}const ne={[Tr]:t.FUNC_ADD,[x_]:t.FUNC_SUBTRACT,[S_]:t.FUNC_REVERSE_SUBTRACT};ne[b_]=t.MIN,ne[M_]=t.MAX;const K={[y_]:t.ZERO,[E_]:t.ONE,[T_]:t.SRC_COLOR,[Hc]:t.SRC_ALPHA,[P_]:t.SRC_ALPHA_SATURATE,[R_]:t.DST_COLOR,[w_]:t.DST_ALPHA,[A_]:t.ONE_MINUS_SRC_COLOR,[qc]:t.ONE_MINUS_SRC_ALPHA,[L_]:t.ONE_MINUS_DST_COLOR,[C_]:t.ONE_MINUS_DST_ALPHA,[D_]:t.CONSTANT_COLOR,[I_]:t.ONE_MINUS_CONSTANT_COLOR,[N_]:t.CONSTANT_ALPHA,[U_]:t.ONE_MINUS_CONSTANT_ALPHA};function he(D,ye,me,Ee,ce,oe,ge,$e,Et,pt){if(D===Fi){_===!0&&(U(t.BLEND),_=!1);return}if(_===!1&&($(t.BLEND),_=!0),D!==__){if(D!==m||pt!==x){if((f!==Tr||T!==Tr)&&(t.blendEquation(t.FUNC_ADD),f=Tr,T=Tr),pt)switch(D){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zh:t.blendFunc(t.ONE,t.ONE);break;case Vh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:lt("WebGLState: Invalid blending: ",D);break}else switch(D){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Vh:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",D);break}y=null,E=null,A=null,w=null,R.set(0,0,0),V=0,m=D,x=pt}return}ce=ce||ye,oe=oe||me,ge=ge||Ee,(ye!==f||ce!==T)&&(t.blendEquationSeparate(ne[ye],ne[ce]),f=ye,T=ce),(me!==y||Ee!==E||oe!==A||ge!==w)&&(t.blendFuncSeparate(K[me],K[Ee],K[oe],K[ge]),y=me,E=Ee,A=oe,w=ge),($e.equals(R)===!1||Et!==V)&&(t.blendColor($e.r,$e.g,$e.b,Et),R.copy($e),V=Et),m=D,x=!1}function Ie(D,ye){D.side===Ii?U(t.CULL_FACE):$(t.CULL_FACE);let me=D.side===xn;ye&&(me=!me),Re(me),D.blending===fs&&D.transparent===!1?he(Fi):he(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Ee=D.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):U(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(D){b!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),b=D)}function vt(D){D!==m_?($(t.CULL_FACE),D!==L&&(D===kh?t.cullFace(t.BACK):D===g_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):U(t.CULL_FACE),L=D}function C(D){D!==Z&&(Q&&t.lineWidth(D),Z=D)}function dt(D,ye,me){D?($(t.POLYGON_OFFSET_FILL),(H!==ye||te!==me)&&(t.polygonOffset(ye,me),H=ye,te=me)):U(t.POLYGON_OFFSET_FILL)}function tt(D){D?$(t.SCISSOR_TEST):U(t.SCISSOR_TEST)}function yt(D){D===void 0&&(D=t.TEXTURE0+re-1),I!==D&&(t.activeTexture(D),I=D)}function Pe(D,ye,me){me===void 0&&(I===null?me=t.TEXTURE0+re-1:me=I);let Ee=Y[me];Ee===void 0&&(Ee={type:void 0,texture:void 0},Y[me]=Ee),(Ee.type!==D||Ee.texture!==ye)&&(I!==me&&(t.activeTexture(me),I=me),t.bindTexture(D,ye||O[D]),Ee.type=D,Ee.texture=ye)}function M(){const D=Y[I];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function se(){try{t.texSubImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function le(){try{t.texSubImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function ie(){try{t.compressedTexSubImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function Ne(){try{t.compressedTexSubImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function ve(){try{t.texStorage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function Le(){try{t.texStorage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function We(){try{t.texImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function ue(){try{t.texImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function xe(D){z.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),z.copy(D))}function Ce(D){ee.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function De(D,ye){let me=c.get(ye);me===void 0&&(me=new WeakMap,c.set(ye,me));let Ee=me.get(D);Ee===void 0&&(Ee=t.getUniformBlockIndex(ye,D.name),me.set(D,Ee))}function _e(D,ye){const Ee=c.get(ye).get(D);l.get(ye)!==Ee&&(t.uniformBlockBinding(ye,Ee,D.__bindingPointIndex),l.set(ye,Ee))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},I=null,Y={},d={},h=new WeakMap,p=[],v=null,_=!1,m=null,f=null,y=null,E=null,T=null,A=null,w=null,R=new et(0,0,0),V=0,x=!1,b=null,L=null,Z=null,H=null,te=null,z.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:U,bindFramebuffer:P,drawBuffers:B,useProgram:G,setBlending:he,setMaterial:Ie,setFlipSided:Re,setCullFace:vt,setLineWidth:C,setPolygonOffset:dt,setScissorTest:tt,activeTexture:yt,bindTexture:Pe,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:N,texImage2D:We,texImage3D:ue,updateUBOMapping:De,uniformBlockBinding:_e,texStorage2D:ve,texStorage3D:Le,texSubImage2D:se,texSubImage3D:le,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ne,scissor:xe,viewport:Ce,reset:Ze}}function mb(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,g){return p?new OffscreenCanvas(M,g):Bo("canvas")}function _(M,g,N){let se=1;const le=Pe(M);if((le.width>N||le.height>N)&&(se=N/Math.max(le.width,le.height)),se<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ie=Math.floor(se*le.width),Ne=Math.floor(se*le.height);d===void 0&&(d=v(ie,Ne));const ve=g?v(ie,Ne):d;return ve.width=ie,ve.height=Ne,ve.getContext("2d").drawImage(M,0,0,ie,Ne),je("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ie+"x"+Ne+")."),ve}else return"data"in M&&je("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),M;return M}function m(M){return M.generateMipmaps}function f(M){t.generateMipmap(M)}function y(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(M,g,N,se,le=!1){if(M!==null){if(t[M]!==void 0)return t[M];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ie=g;if(g===t.RED&&(N===t.FLOAT&&(ie=t.R32F),N===t.HALF_FLOAT&&(ie=t.R16F),N===t.UNSIGNED_BYTE&&(ie=t.R8)),g===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(ie=t.R8UI),N===t.UNSIGNED_SHORT&&(ie=t.R16UI),N===t.UNSIGNED_INT&&(ie=t.R32UI),N===t.BYTE&&(ie=t.R8I),N===t.SHORT&&(ie=t.R16I),N===t.INT&&(ie=t.R32I)),g===t.RG&&(N===t.FLOAT&&(ie=t.RG32F),N===t.HALF_FLOAT&&(ie=t.RG16F),N===t.UNSIGNED_BYTE&&(ie=t.RG8)),g===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(ie=t.RG8UI),N===t.UNSIGNED_SHORT&&(ie=t.RG16UI),N===t.UNSIGNED_INT&&(ie=t.RG32UI),N===t.BYTE&&(ie=t.RG8I),N===t.SHORT&&(ie=t.RG16I),N===t.INT&&(ie=t.RG32I)),g===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(ie=t.RGB8UI),N===t.UNSIGNED_SHORT&&(ie=t.RGB16UI),N===t.UNSIGNED_INT&&(ie=t.RGB32UI),N===t.BYTE&&(ie=t.RGB8I),N===t.SHORT&&(ie=t.RGB16I),N===t.INT&&(ie=t.RGB32I)),g===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(ie=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(ie=t.RGBA16UI),N===t.UNSIGNED_INT&&(ie=t.RGBA32UI),N===t.BYTE&&(ie=t.RGBA8I),N===t.SHORT&&(ie=t.RGBA16I),N===t.INT&&(ie=t.RGBA32I)),g===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(ie=t.R11F_G11F_B10F)),g===t.RGBA){const Ne=le?Fo:st.getTransfer(se);N===t.FLOAT&&(ie=t.RGBA32F),N===t.HALF_FLOAT&&(ie=t.RGBA16F),N===t.UNSIGNED_BYTE&&(ie=Ne===gt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(M,g){let N;return M?g===null||g===xi||g===Ea?N=t.DEPTH24_STENCIL8:g===hi?N=t.DEPTH32F_STENCIL8:g===ya&&(N=t.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xi||g===Ea?N=t.DEPTH_COMPONENT24:g===hi?N=t.DEPTH_COMPONENT32F:g===ya&&(N=t.DEPTH_COMPONENT16),N}function A(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Qt&&M.minFilter!==an?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function w(M){const g=M.target;g.removeEventListener("dispose",w),V(g),g.isVideoTexture&&u.delete(g)}function R(M){const g=M.target;g.removeEventListener("dispose",R),b(g)}function V(M){const g=i.get(M);if(g.__webglInit===void 0)return;const N=M.source,se=h.get(N);if(se){const le=se[g.__cacheKey];le.usedTimes--,le.usedTimes===0&&x(M),Object.keys(se).length===0&&h.delete(N)}i.remove(M)}function x(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const N=M.source,se=h.get(N);delete se[g.__cacheKey],a.memory.textures--}function b(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(g.__webglFramebuffer[se]))for(let le=0;le<g.__webglFramebuffer[se].length;le++)t.deleteFramebuffer(g.__webglFramebuffer[se][le]);else t.deleteFramebuffer(g.__webglFramebuffer[se]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[se])}else{if(Array.isArray(g.__webglFramebuffer))for(let se=0;se<g.__webglFramebuffer.length;se++)t.deleteFramebuffer(g.__webglFramebuffer[se]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let se=0;se<g.__webglColorRenderbuffer.length;se++)g.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[se]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=M.textures;for(let se=0,le=N.length;se<le;se++){const ie=i.get(N[se]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(N[se])}i.remove(M)}let L=0;function Z(){L=0}function H(){const M=L;return M>=r.maxTextures&&je("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),L+=1,M}function te(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function re(M,g){const N=i.get(M);if(M.isVideoTexture&&tt(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){const se=M.image;if(se===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{O(N,M,g);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+g)}function Q(M,g){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){O(N,M,g);return}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+g)}function X(M,g){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){O(N,M,g);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+g)}function ae(M,g){const N=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&N.__version!==M.version){$(N,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+g)}const I={[eu]:t.REPEAT,[Ui]:t.CLAMP_TO_EDGE,[tu]:t.MIRRORED_REPEAT},Y={[Qt]:t.NEAREST,[B_]:t.NEAREST_MIPMAP_NEAREST,[ja]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[zl]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},J={[G_]:t.NEVER,[j_]:t.ALWAYS,[H_]:t.LESS,[bd]:t.LEQUAL,[q_]:t.EQUAL,[Md]:t.GEQUAL,[W_]:t.GREATER,[$_]:t.NOTEQUAL};function fe(M,g){if(g.type===hi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===an||g.magFilter===zl||g.magFilter===ja||g.magFilter===wr||g.minFilter===an||g.minFilter===zl||g.minFilter===ja||g.minFilter===wr)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,I[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,I[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,I[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,Y[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Y[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,J[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Qt||g.minFilter!==ja&&g.minFilter!==wr||g.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function z(M,g){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",w));const se=g.source;let le=h.get(se);le===void 0&&(le={},h.set(se,le));const ie=te(g);if(ie!==M.__cacheKey){le[ie]===void 0&&(le[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),le[ie].usedTimes++;const Ne=le[M.__cacheKey];Ne!==void 0&&(le[M.__cacheKey].usedTimes--,Ne.usedTimes===0&&x(g)),M.__cacheKey=ie,M.__webglTexture=le[ie].texture}return N}function ee(M,g,N){return Math.floor(Math.floor(M/N)/g)}function pe(M,g,N,se){const ie=M.updateRanges;if(ie.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,N,se,g.data);else{ie.sort((ue,xe)=>ue.start-xe.start);let Ne=0;for(let ue=1;ue<ie.length;ue++){const xe=ie[Ne],Ce=ie[ue],De=xe.start+xe.count,_e=ee(Ce.start,g.width,4),Ze=ee(xe.start,g.width,4);Ce.start<=De+1&&_e===Ze&&ee(Ce.start+Ce.count-1,g.width,4)===_e?xe.count=Math.max(xe.count,Ce.start+Ce.count-xe.start):(++Ne,ie[Ne]=Ce)}ie.length=Ne+1;const ve=t.getParameter(t.UNPACK_ROW_LENGTH),Le=t.getParameter(t.UNPACK_SKIP_PIXELS),We=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ue=0,xe=ie.length;ue<xe;ue++){const Ce=ie[ue],De=Math.floor(Ce.start/4),_e=Math.ceil(Ce.count/4),Ze=De%g.width,D=Math.floor(De/g.width),ye=_e,me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Ze,D,ye,me,N,se,g.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ve),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(t.UNPACK_SKIP_ROWS,We)}}function O(M,g,N){let se=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(se=t.TEXTURE_3D);const le=z(M,g),ie=g.source;n.bindTexture(se,M.__webglTexture,t.TEXTURE0+N);const Ne=i.get(ie);if(ie.version!==Ne.__version||le===!0){n.activeTexture(t.TEXTURE0+N);const ve=st.getPrimaries(st.workingColorSpace),Le=g.colorSpace===rr?null:st.getPrimaries(g.colorSpace),We=g.colorSpace===rr||ve===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ue=_(g.image,!1,r.maxTextureSize);ue=yt(g,ue);const xe=s.convert(g.format,g.colorSpace),Ce=s.convert(g.type);let De=E(g.internalFormat,xe,Ce,g.colorSpace,g.isVideoTexture);fe(se,g);let _e;const Ze=g.mipmaps,D=g.isVideoTexture!==!0,ye=Ne.__version===void 0||le===!0,me=ie.dataReady,Ee=A(g,ue);if(g.isDepthTexture)De=T(g.format===Cr,g.type),ye&&(D?n.texStorage2D(t.TEXTURE_2D,1,De,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,De,ue.width,ue.height,0,xe,Ce,null));else if(g.isDataTexture)if(Ze.length>0){D&&ye&&n.texStorage2D(t.TEXTURE_2D,Ee,De,Ze[0].width,Ze[0].height);for(let ce=0,oe=Ze.length;ce<oe;ce++)_e=Ze[ce],D?me&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,_e.width,_e.height,xe,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,ce,De,_e.width,_e.height,0,xe,Ce,_e.data);g.generateMipmaps=!1}else D?(ye&&n.texStorage2D(t.TEXTURE_2D,Ee,De,ue.width,ue.height),me&&pe(g,ue,xe,Ce)):n.texImage2D(t.TEXTURE_2D,0,De,ue.width,ue.height,0,xe,Ce,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,De,Ze[0].width,Ze[0].height,ue.depth);for(let ce=0,oe=Ze.length;ce<oe;ce++)if(_e=Ze[ce],g.format!==ei)if(xe!==null)if(D){if(me)if(g.layerUpdates.size>0){const ge=df(_e.width,_e.height,g.format,g.type);for(const $e of g.layerUpdates){const Et=_e.data.subarray($e*ge/_e.data.BYTES_PER_ELEMENT,($e+1)*ge/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,$e,_e.width,_e.height,1,xe,Et)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,_e.width,_e.height,ue.depth,xe,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,De,_e.width,_e.height,ue.depth,0,_e.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,_e.width,_e.height,ue.depth,xe,Ce,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,De,_e.width,_e.height,ue.depth,0,xe,Ce,_e.data)}else{D&&ye&&n.texStorage2D(t.TEXTURE_2D,Ee,De,Ze[0].width,Ze[0].height);for(let ce=0,oe=Ze.length;ce<oe;ce++)_e=Ze[ce],g.format!==ei?xe!==null?D?me&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,De,_e.width,_e.height,0,_e.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?me&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,_e.width,_e.height,xe,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,ce,De,_e.width,_e.height,0,xe,Ce,_e.data)}else if(g.isDataArrayTexture)if(D){if(ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,De,ue.width,ue.height,ue.depth),me)if(g.layerUpdates.size>0){const ce=df(ue.width,ue.height,g.format,g.type);for(const oe of g.layerUpdates){const ge=ue.data.subarray(oe*ce/ue.data.BYTES_PER_ELEMENT,(oe+1)*ce/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,ue.width,ue.height,1,xe,Ce,ge)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,xe,Ce,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ue.width,ue.height,ue.depth,0,xe,Ce,ue.data);else if(g.isData3DTexture)D?(ye&&n.texStorage3D(t.TEXTURE_3D,Ee,De,ue.width,ue.height,ue.depth),me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,xe,Ce,ue.data)):n.texImage3D(t.TEXTURE_3D,0,De,ue.width,ue.height,ue.depth,0,xe,Ce,ue.data);else if(g.isFramebufferTexture){if(ye)if(D)n.texStorage2D(t.TEXTURE_2D,Ee,De,ue.width,ue.height);else{let ce=ue.width,oe=ue.height;for(let ge=0;ge<Ee;ge++)n.texImage2D(t.TEXTURE_2D,ge,De,ce,oe,0,xe,Ce,null),ce>>=1,oe>>=1}}else if(Ze.length>0){if(D&&ye){const ce=Pe(Ze[0]);n.texStorage2D(t.TEXTURE_2D,Ee,De,ce.width,ce.height)}for(let ce=0,oe=Ze.length;ce<oe;ce++)_e=Ze[ce],D?me&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,xe,Ce,_e):n.texImage2D(t.TEXTURE_2D,ce,De,xe,Ce,_e);g.generateMipmaps=!1}else if(D){if(ye){const ce=Pe(ue);n.texStorage2D(t.TEXTURE_2D,Ee,De,ce.width,ce.height)}me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ce,ue)}else n.texImage2D(t.TEXTURE_2D,0,De,xe,Ce,ue);m(g)&&f(se),Ne.__version=ie.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function $(M,g,N){if(g.image.length!==6)return;const se=z(M,g),le=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+N);const ie=i.get(le);if(le.version!==ie.__version||se===!0){n.activeTexture(t.TEXTURE0+N);const Ne=st.getPrimaries(st.workingColorSpace),ve=g.colorSpace===rr?null:st.getPrimaries(g.colorSpace),Le=g.colorSpace===rr||Ne===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const We=g.isCompressedTexture||g.image[0].isCompressedTexture,ue=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!We&&!ue?xe[oe]=_(g.image[oe],!0,r.maxCubemapSize):xe[oe]=ue?g.image[oe].image:g.image[oe],xe[oe]=yt(g,xe[oe]);const Ce=xe[0],De=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),Ze=E(g.internalFormat,De,_e,g.colorSpace),D=g.isVideoTexture!==!0,ye=ie.__version===void 0||se===!0,me=le.dataReady;let Ee=A(g,Ce);fe(t.TEXTURE_CUBE_MAP,g);let ce;if(We){D&&ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,Ze,Ce.width,Ce.height);for(let oe=0;oe<6;oe++){ce=xe[oe].mipmaps;for(let ge=0;ge<ce.length;ge++){const $e=ce[ge];g.format!==ei?De!==null?D?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,0,0,$e.width,$e.height,De,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,Ze,$e.width,$e.height,0,$e.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,0,0,$e.width,$e.height,De,_e,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge,Ze,$e.width,$e.height,0,De,_e,$e.data)}}}else{if(ce=g.mipmaps,D&&ye){ce.length>0&&Ee++;const oe=Pe(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,Ze,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ue){D?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,De,_e,xe[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ze,xe[oe].width,xe[oe].height,0,De,_e,xe[oe].data);for(let ge=0;ge<ce.length;ge++){const Et=ce[ge].image[oe].image;D?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,0,0,Et.width,Et.height,De,_e,Et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,Ze,Et.width,Et.height,0,De,_e,Et.data)}}else{D?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,_e,xe[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ze,De,_e,xe[oe]);for(let ge=0;ge<ce.length;ge++){const $e=ce[ge];D?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,0,0,De,_e,$e.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge+1,Ze,De,_e,$e.image[oe])}}}m(g)&&f(t.TEXTURE_CUBE_MAP),ie.__version=le.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function U(M,g,N,se,le,ie){const Ne=s.convert(N.format,N.colorSpace),ve=s.convert(N.type),Le=E(N.internalFormat,Ne,ve,N.colorSpace),We=i.get(g),ue=i.get(N);if(ue.__renderTarget=g,!We.__hasExternalTextures){const xe=Math.max(1,g.width>>ie),Ce=Math.max(1,g.height>>ie);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,ie,Le,xe,Ce,g.depth,0,Ne,ve,null):n.texImage2D(le,ie,Le,xe,Ce,0,Ne,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),dt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,le,ue.__webglTexture,0,C(g)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,le,ue.__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function P(M,g,N){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const se=g.depthTexture,le=se&&se.isDepthTexture?se.type:null,ie=T(g.stencilBuffer,le),Ne=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;dt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(g),ie,g.width,g.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(g),ie,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,ie,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ne,t.RENDERBUFFER,M)}else{const se=g.textures;for(let le=0;le<se.length;le++){const ie=se[le],Ne=s.convert(ie.format,ie.colorSpace),ve=s.convert(ie.type),Le=E(ie.internalFormat,Ne,ve,ie.colorSpace);dt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(g),Le,g.width,g.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(g),Le,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Le,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function B(M,g,N){const se=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=i.get(g.depthTexture);if(le.__renderTarget=g,(!le.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),se){if(le.__webglInit===void 0&&(le.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),le.__webglTexture===void 0){le.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),fe(t.TEXTURE_CUBE_MAP,g.depthTexture);const We=s.convert(g.depthTexture.format),ue=s.convert(g.depthTexture.type);let xe;g.depthTexture.format===Vi?xe=t.DEPTH_COMPONENT24:g.depthTexture.format===Cr&&(xe=t.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,xe,g.width,g.height,0,We,ue,null)}}else re(g.depthTexture,0);const ie=le.__webglTexture,Ne=C(g),ve=se?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Le=g.depthTexture.format===Cr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vi)dt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Le,ve,ie,0,Ne):t.framebufferTexture2D(t.FRAMEBUFFER,Le,ve,ie,0);else if(g.depthTexture.format===Cr)dt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Le,ve,ie,0,Ne):t.framebufferTexture2D(t.FRAMEBUFFER,Le,ve,ie,0);else throw new Error("Unknown depthTexture format")}function G(M){const g=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const se=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),se){const le=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,se.removeEventListener("dispose",le)};se.addEventListener("dispose",le),g.__depthDisposeCallback=le}g.__boundDepthTexture=se}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let se=0;se<6;se++)B(g.__webglFramebuffer[se],M,se);else{const se=M.texture.mipmaps;se&&se.length>0?B(g.__webglFramebuffer[0],M,0):B(g.__webglFramebuffer,M,0)}else if(N){g.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[se]),g.__webglDepthbuffer[se]===void 0)g.__webglDepthbuffer[se]=t.createRenderbuffer(),P(g.__webglDepthbuffer[se],M,!1);else{const le=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,ie)}}else{const se=M.texture.mipmaps;if(se&&se.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),P(g.__webglDepthbuffer,M,!1);else{const le=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,ie)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(M,g,N){const se=i.get(M);g!==void 0&&U(se.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&G(M)}function K(M){const g=M.texture,N=i.get(M),se=i.get(g);M.addEventListener("dispose",R);const le=M.textures,ie=M.isWebGLCubeRenderTarget===!0,Ne=le.length>1;if(Ne||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=g.version,a.memory.textures++),ie){N.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ve]=[];for(let Le=0;Le<g.mipmaps.length;Le++)N.__webglFramebuffer[ve][Le]=t.createFramebuffer()}else N.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ve=0;ve<g.mipmaps.length;ve++)N.__webglFramebuffer[ve]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(Ne)for(let ve=0,Le=le.length;ve<Le;ve++){const We=i.get(le[ve]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),a.memory.textures++)}if(M.samples>0&&dt(M)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const Le=le[ve];N.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[ve]);const We=s.convert(Le.format,Le.colorSpace),ue=s.convert(Le.type),xe=E(Le.internalFormat,We,ue,Le.colorSpace,M.isXRRenderTarget===!0),Ce=C(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,xe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,N.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),P(N.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),fe(t.TEXTURE_CUBE_MAP,g);for(let ve=0;ve<6;ve++)if(g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)U(N.__webglFramebuffer[ve][Le],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le);else U(N.__webglFramebuffer[ve],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(g)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let ve=0,Le=le.length;ve<Le;ve++){const We=le[ve],ue=i.get(We);let xe=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(xe=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,ue.__webglTexture),fe(xe,We),U(N.__webglFramebuffer,M,We,t.COLOR_ATTACHMENT0+ve,xe,0),m(We)&&f(xe)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ve=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,se.__webglTexture),fe(ve,g),g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)U(N.__webglFramebuffer[Le],M,g,t.COLOR_ATTACHMENT0,ve,Le);else U(N.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,ve,0);m(g)&&f(ve),n.unbindTexture()}M.depthBuffer&&G(M)}function he(M){const g=M.textures;for(let N=0,se=g.length;N<se;N++){const le=g[N];if(m(le)){const ie=y(M),Ne=i.get(le).__webglTexture;n.bindTexture(ie,Ne),f(ie),n.unbindTexture()}}}const Ie=[],Re=[];function vt(M){if(M.samples>0){if(dt(M)===!1){const g=M.textures,N=M.width,se=M.height;let le=t.COLOR_BUFFER_BIT;const ie=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ne=i.get(M),ve=g.length>1;if(ve)for(let We=0;We<g.length;We++)n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Le=M.texture.mipmaps;Le&&Le.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let We=0;We<g.length;We++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[We]);const ue=i.get(g[We]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,N,se,0,0,N,se,le,t.NEAREST),l===!0&&(Ie.length=0,Re.length=0,Ie.push(t.COLOR_ATTACHMENT0+We),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Ie.push(ie),Re.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Re)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ie))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let We=0;We<g.length;We++){n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[We]);const ue=i.get(g[We]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function C(M){return Math.min(r.maxSamples,M.samples)}function dt(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function tt(M){const g=a.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function yt(M,g){const N=M.colorSpace,se=M.format,le=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==As&&N!==rr&&(st.getTransfer(N)===gt?(se!==ei||le!==Hn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",N)),g}function Pe(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=Z,this.setTexture2D=re,this.setTexture2DArray=Q,this.setTexture3D=X,this.setTextureCube=ae,this.rebindTextures=ne,this.setupRenderTarget=K,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=U,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function gb(t,e){function n(i,r=rr){let s;const a=st.getTransfer(r);if(i===Hn)return t.UNSIGNED_BYTE;if(i===gd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Bm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===km)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fm)return t.BYTE;if(i===Om)return t.SHORT;if(i===ya)return t.UNSIGNED_SHORT;if(i===md)return t.INT;if(i===xi)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===zi)return t.HALF_FLOAT;if(i===zm)return t.ALPHA;if(i===Vm)return t.RGB;if(i===ei)return t.RGBA;if(i===Vi)return t.DEPTH_COMPONENT;if(i===Cr)return t.DEPTH_STENCIL;if(i===Gm)return t.RED;if(i===_d)return t.RED_INTEGER;if(i===Ts)return t.RG;if(i===xd)return t.RG_INTEGER;if(i===Sd)return t.RGBA_INTEGER;if(i===To||i===Ao||i===wo||i===Co)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nu||i===iu||i===ru||i===su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ru)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===au||i===ou||i===lu||i===cu||i===uu||i===du||i===hu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===au||i===ou)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===cu)return s.COMPRESSED_R11_EAC;if(i===uu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===du)return s.COMPRESSED_RG11_EAC;if(i===hu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fu||i===pu||i===mu||i===gu||i===vu||i===_u||i===xu||i===Su||i===bu||i===Mu||i===yu||i===Eu||i===Tu||i===Au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_u)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Su)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Au)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wu||i===Cu||i===Ru)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wu)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lu||i===Pu||i===Du||i===Iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ea?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_b=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new eg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ni({vertexShader:vb,fragmentShader:_b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new Ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sb extends zs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const _=typeof XRWebGLBinding<"u",m=new xb,f={},y=n.getContextAttributes();let E=null,T=null;const A=[],w=[],R=new ft;let V=null;const x=new Zn;x.viewport=new Ft;const b=new Zn;b.viewport=new Ft;const L=[x,b],Z=new L1;let H=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let $=A[O];return $===void 0&&($=new cc,A[O]=$),$.getTargetRaySpace()},this.getControllerGrip=function(O){let $=A[O];return $===void 0&&($=new cc,A[O]=$),$.getGripSpace()},this.getHand=function(O){let $=A[O];return $===void 0&&($=new cc,A[O]=$),$.getHandSpace()};function re(O){const $=w.indexOf(O.inputSource);if($===-1)return;const U=A[$];U!==void 0&&(U.update(O.inputSource,O.frame,c||a),U.dispatchEvent({type:O.type,data:O.inputSource}))}function Q(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",X);for(let O=0;O<A.length;O++){const $=w[O];$!==null&&(w[O]=null,A[O].disconnect($))}H=null,te=null,m.reset();for(const O in f)delete f[O];e.setRenderTarget(E),p=null,h=null,d=null,r=null,T=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(V),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await n.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,P=null,B=null;y.depth&&(B=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,U=y.stencil?Cr:Vi,P=y.stencil?Ea:xi);const G={colorFormat:n.RGBA8,depthFormat:B,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(G),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new gi(h.textureWidth,h.textureHeight,{format:ei,type:Hn,depthTexture:new Aa(h.textureWidth,h.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const U={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,U),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new gi(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(O){for(let $=0;$<O.removed.length;$++){const U=O.removed[$],P=w.indexOf(U);P>=0&&(w[P]=null,A[P].disconnect(U))}for(let $=0;$<O.added.length;$++){const U=O.added[$];let P=w.indexOf(U);if(P===-1){for(let G=0;G<A.length;G++)if(G>=w.length){w.push(U),P=G;break}else if(w[G]===null){w[G]=U,P=G;break}if(P===-1)break}const B=A[P];B&&B.connect(U)}}const ae=new W,I=new W;function Y(O,$,U){ae.setFromMatrixPosition($.matrixWorld),I.setFromMatrixPosition(U.matrixWorld);const P=ae.distanceTo(I),B=$.projectionMatrix.elements,G=U.projectionMatrix.elements,ne=B[14]/(B[10]-1),K=B[14]/(B[10]+1),he=(B[9]+1)/B[5],Ie=(B[9]-1)/B[5],Re=(B[8]-1)/B[0],vt=(G[8]+1)/G[0],C=ne*Re,dt=ne*vt,tt=P/(-Re+vt),yt=tt*-Re;if($.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(yt),O.translateZ(tt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),B[10]===-1)O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Pe=ne+tt,M=K+tt,g=C-yt,N=dt+(P-yt),se=he*K/M*Pe,le=Ie*K/M*Pe;O.projectionMatrix.makePerspective(g,N,se,le,Pe,M),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function J(O,$){$===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices($.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let $=O.near,U=O.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(U=m.depthFar)),Z.near=b.near=x.near=$,Z.far=b.far=x.far=U,(H!==Z.near||te!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),H=Z.near,te=Z.far),Z.layers.mask=O.layers.mask|6,x.layers.mask=Z.layers.mask&3,b.layers.mask=Z.layers.mask&5;const P=O.parent,B=Z.cameras;J(Z,P);for(let G=0;G<B.length;G++)J(B[G],P);B.length===2?Y(Z,x,b):Z.projectionMatrix.copy(x.projectionMatrix),fe(O,Z,P)};function fe(O,$,U){U===null?O.matrix.copy($.matrixWorld):(O.matrix.copy(U.matrixWorld),O.matrix.invert(),O.matrix.multiply($.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Nu*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Z)},this.getCameraTexture=function(O){return f[O]};let z=null;function ee(O,$){if(u=$.getViewerPose(c||a),v=$,u!==null){const U=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let P=!1;U.length!==Z.cameras.length&&(Z.cameras.length=0,P=!0);for(let K=0;K<U.length;K++){const he=U[K];let Ie=null;if(p!==null)Ie=p.getViewport(he);else{const vt=d.getViewSubImage(h,he);Ie=vt.viewport,K===0&&(e.setRenderTargetTextures(T,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(T))}let Re=L[K];Re===void 0&&(Re=new Zn,Re.layers.enable(K),Re.viewport=new Ft,L[K]=Re),Re.matrix.fromArray(he.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(he.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),K===0&&(Z.matrix.copy(Re.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),P===!0&&Z.cameras.push(Re)}const B=r.enabledFeatures;if(B&&B.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const K=d.getDepthInformation(U[0]);K&&K.isValid&&K.texture&&m.init(K,r.renderState)}if(B&&B.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let K=0;K<U.length;K++){const he=U[K].camera;if(he){let Ie=f[he];Ie||(Ie=new eg,f[he]=Ie);const Re=d.getCameraImage(he);Ie.sourceTexture=Re}}}}for(let U=0;U<A.length;U++){const P=w[U],B=A[U];P!==null&&B!==void 0&&B.update(P,$,c||a)}z&&z(O,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),v=null}const pe=new ng;pe.setAnimationLoop(ee),this.setAnimationLoop=function(O){z=O},this.dispose=function(){}}}const xr=new Gi,bb=new Gt;function Mb(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Jm(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,E,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===xn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===xn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),E=y.envMap,T=y.envMapRotation;E&&(m.envMap.value=E,xr.copy(T),xr.x*=-1,xr.y*=-1,xr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.envMapRotation.value.setFromMatrix4(bb.makeRotationFromEuler(xr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=E*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yb(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const T=E.program;i.uniformBlockBinding(y,T)}function c(y,E){let T=r[y.id];T===void 0&&(v(y),T=u(y),r[y.id]=T,y.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(y,A);const w=e.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function u(y){const E=d();y.__bindingPointIndex=E;const T=t.createBuffer(),A=y.__size,w=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,T),T}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const E=r[y.id],T=y.uniforms,A=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let w=0,R=T.length;w<R;w++){const V=Array.isArray(T[w])?T[w]:[T[w]];for(let x=0,b=V.length;x<b;x++){const L=V[x];if(p(L,w,x,A)===!0){const Z=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let te=0;for(let re=0;re<H.length;re++){const Q=H[re],X=_(Q);typeof Q=="number"||typeof Q=="boolean"?(L.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,Z+te,L.__data)):Q.isMatrix3?(L.__data[0]=Q.elements[0],L.__data[1]=Q.elements[1],L.__data[2]=Q.elements[2],L.__data[3]=0,L.__data[4]=Q.elements[3],L.__data[5]=Q.elements[4],L.__data[6]=Q.elements[5],L.__data[7]=0,L.__data[8]=Q.elements[6],L.__data[9]=Q.elements[7],L.__data[10]=Q.elements[8],L.__data[11]=0):(Q.toArray(L.__data,te),te+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Z,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,E,T,A){const w=y.value,R=E+"_"+T;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const V=A[R];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return A[R]=w,!0}else if(V.equals(w)===!1)return V.copy(w),!0}return!1}function v(y){const E=y.uniforms;let T=0;const A=16;for(let R=0,V=E.length;R<V;R++){const x=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,L=x.length;b<L;b++){const Z=x[b],H=Array.isArray(Z.value)?Z.value:[Z.value];for(let te=0,re=H.length;te<re;te++){const Q=H[te],X=_(Q),ae=T%A,I=ae%X.boundary,Y=ae+I;T+=I,Y!==0&&A-Y<X.storage&&(T+=A-Y),Z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=T,T+=X.storage}}}const w=T%A;return w>0&&(T+=A-w),y.__size=T,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const Eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function Tb(){return oi===null&&(oi=new M1(Eb,16,16,Ts,zi),oi.name="DFG_LUT",oi.minFilter=an,oi.magFilter=an,oi.wrapS=Ui,oi.wrapT=Ui,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class Ab{constructor(e={}){const{canvas:n=X_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Hn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const _=p,m=new Set([Sd,xd,_d]),f=new Set([Hn,xi,ya,Ea,gd,vd]),y=new Uint32Array(4),E=new Int32Array(4);let T=null,A=null;const w=[],R=[];let V=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=Gn;let L=0,Z=0,H=null,te=-1,re=null;const Q=new Ft,X=new Ft;let ae=null;const I=new et(0);let Y=0,J=n.width,fe=n.height,z=1,ee=null,pe=null;const O=new Ft(0,0,J,fe),$=new Ft(0,0,J,fe);let U=!1;const P=new Qm;let B=!1,G=!1;const ne=new Gt,K=new W,he=new Ft,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function vt(){return H===null?z:1}let C=i;function dt(S,F){return n.getContext(S,F)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pd}`),n.addEventListener("webglcontextlost",$e,!1),n.addEventListener("webglcontextrestored",Et,!1),n.addEventListener("webglcontextcreationerror",pt,!1),C===null){const F="webgl2";if(C=dt(F,S),C===null)throw dt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw lt("WebGLRenderer: "+S.message),S}let tt,yt,Pe,M,g,N,se,le,ie,Ne,ve,Le,We,ue,xe,Ce,De,_e,Ze,D,ye,me,Ee,ce;function oe(){tt=new T3(C),tt.init(),me=new gb(C,tt),yt=new g3(C,tt,e,me),Pe=new pb(C,tt),yt.reversedDepthBuffer&&h&&Pe.buffers.depth.setReversed(!0),M=new C3(C),g=new QS,N=new mb(C,tt,Pe,g,yt,me,M),se=new _3(x),le=new E3(x),ie=new D1(C),Ee=new p3(C,ie),Ne=new A3(C,ie,M,Ee),ve=new L3(C,Ne,ie,M),Ze=new R3(C,yt,N),Ce=new v3(g),Le=new ZS(x,se,le,tt,yt,Ee,Ce),We=new Mb(x,g),ue=new tb,xe=new ob(tt),_e=new f3(x,se,le,Pe,ve,v,l),De=new hb(x,ve,yt),ce=new yb(C,M,yt,Pe),D=new m3(C,tt,M),ye=new w3(C,tt,M),M.programs=Le.programs,x.capabilities=yt,x.extensions=tt,x.properties=g,x.renderLists=ue,x.shadowMap=De,x.state=Pe,x.info=M}oe(),_!==Hn&&(V=new D3(_,n.width,n.height,r,s));const ge=new Sb(x,C);this.xr=ge,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=tt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=tt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(J,fe,!1))},this.getSize=function(S){return S.set(J,fe)},this.setSize=function(S,F,j=!0){if(ge.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,fe=F,n.width=Math.floor(S*z),n.height=Math.floor(F*z),j===!0&&(n.style.width=S+"px",n.style.height=F+"px"),V!==null&&V.setSize(n.width,n.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(J*z,fe*z).floor()},this.setDrawingBufferSize=function(S,F,j){J=S,fe=F,z=j,n.width=Math.floor(S*j),n.height=Math.floor(F*j),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(_===Hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Q)},this.getViewport=function(S){return S.copy(O)},this.setViewport=function(S,F,j,q){S.isVector4?O.set(S.x,S.y,S.z,S.w):O.set(S,F,j,q),Pe.viewport(Q.copy(O).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy($)},this.setScissor=function(S,F,j,q){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,F,j,q),Pe.scissor(X.copy($).multiplyScalar(z).round())},this.getScissorTest=function(){return U},this.setScissorTest=function(S){Pe.setScissorTest(U=S)},this.setOpaqueSort=function(S){ee=S},this.setTransparentSort=function(S){pe=S},this.getClearColor=function(S){return S.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,j=!0){let q=0;if(S){let k=!1;if(H!==null){const Se=H.texture.format;k=m.has(Se)}if(k){const Se=H.texture.type,Te=f.has(Se),Me=_e.getClearColor(),we=_e.getClearAlpha(),Oe=Me.r,qe=Me.g,Ve=Me.b;Te?(y[0]=Oe,y[1]=qe,y[2]=Ve,y[3]=we,C.clearBufferuiv(C.COLOR,0,y)):(E[0]=Oe,E[1]=qe,E[2]=Ve,E[3]=we,C.clearBufferiv(C.COLOR,0,E))}else q|=C.COLOR_BUFFER_BIT}F&&(q|=C.DEPTH_BUFFER_BIT),j&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$e,!1),n.removeEventListener("webglcontextrestored",Et,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),_e.dispose(),ue.dispose(),xe.dispose(),g.dispose(),se.dispose(),le.dispose(),ve.dispose(),Ee.dispose(),ce.dispose(),Le.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Dh),ge.removeEventListener("sessionend",Ih),hr.stop()};function $e(S){S.preventDefault(),jh("WebGLRenderer: Context Lost."),b=!0}function Et(){jh("WebGLRenderer: Context Restored."),b=!1;const S=M.autoReset,F=De.enabled,j=De.autoUpdate,q=De.needsUpdate,k=De.type;oe(),M.autoReset=S,De.enabled=F,De.autoUpdate=j,De.needsUpdate=q,De.type=k}function pt(S){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ai(S){const F=S.target;F.removeEventListener("dispose",ai),wi(F)}function wi(S){o_(S),g.remove(S)}function o_(S){const F=g.get(S).programs;F!==void 0&&(F.forEach(function(j){Le.releaseProgram(j)}),S.isShaderMaterial&&Le.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,j,q,k,Se){F===null&&(F=Ie);const Te=k.isMesh&&k.matrixWorld.determinant()<0,Me=c_(S,F,j,q,k);Pe.setMaterial(q,Te);let we=j.index,Oe=1;if(q.wireframe===!0){if(we=Ne.getWireframeAttribute(j),we===void 0)return;Oe=2}const qe=j.drawRange,Ve=j.attributes.position;let Qe=qe.start*Oe,_t=(qe.start+qe.count)*Oe;Se!==null&&(Qe=Math.max(Qe,Se.start*Oe),_t=Math.min(_t,(Se.start+Se.count)*Oe)),we!==null?(Qe=Math.max(Qe,0),_t=Math.min(_t,we.count)):Ve!=null&&(Qe=Math.max(Qe,0),_t=Math.min(_t,Ve.count));const Nt=_t-Qe;if(Nt<0||Nt===1/0)return;Ee.setup(k,q,Me,j,we);let Ut,St=D;if(we!==null&&(Ut=ie.get(we),St=ye,St.setIndex(Ut)),k.isMesh)q.wireframe===!0?(Pe.setLineWidth(q.wireframeLinewidth*vt()),St.setMode(C.LINES)):St.setMode(C.TRIANGLES);else if(k.isLine){let Ge=q.linewidth;Ge===void 0&&(Ge=1),Pe.setLineWidth(Ge*vt()),k.isLineSegments?St.setMode(C.LINES):k.isLineLoop?St.setMode(C.LINE_LOOP):St.setMode(C.LINE_STRIP)}else k.isPoints?St.setMode(C.POINTS):k.isSprite&&St.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ta("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))St.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ge=k._multiDrawStarts,mt=k._multiDrawCounts,ot=k._multiDrawCount,bn=we?ie.get(we).bytesPerElement:1,qr=g.get(q).currentProgram.getUniforms();for(let Mn=0;Mn<ot;Mn++)qr.setValue(C,"_gl_DrawID",Mn),St.render(Ge[Mn]/bn,mt[Mn])}else if(k.isInstancedMesh)St.renderInstances(Qe,Nt,k.count);else if(j.isInstancedBufferGeometry){const Ge=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,mt=Math.min(j.instanceCount,Ge);St.renderInstances(Qe,Nt,mt)}else St.render(Qe,Nt)};function Ph(S,F,j){S.transparent===!0&&S.side===Ii&&S.forceSinglePass===!1?(S.side=xn,S.needsUpdate=!0,$a(S,F,j),S.side=lr,S.needsUpdate=!0,$a(S,F,j),S.side=Ii):$a(S,F,j)}this.compile=function(S,F,j=null){j===null&&(j=S),A=xe.get(j),A.init(F),R.push(A),j.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),S!==j&&S.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights();const q=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Se=k.material;if(Se)if(Array.isArray(Se))for(let Te=0;Te<Se.length;Te++){const Me=Se[Te];Ph(Me,j,k),q.add(Me)}else Ph(Se,j,k),q.add(Se)}),A=R.pop(),q},this.compileAsync=function(S,F,j=null){const q=this.compile(S,F,j);return new Promise(k=>{function Se(){if(q.forEach(function(Te){g.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){k(S);return}setTimeout(Se,10)}tt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ol=null;function l_(S){Ol&&Ol(S)}function Dh(){hr.stop()}function Ih(){hr.start()}const hr=new ng;hr.setAnimationLoop(l_),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(S){Ol=S,ge.setAnimationLoop(S),S===null?hr.stop():hr.start()},ge.addEventListener("sessionstart",Dh),ge.addEventListener("sessionend",Ih),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const j=ge.enabled===!0&&ge.isPresenting===!0,q=V!==null&&(H===null||j)&&V.begin(x,H);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(F),F=ge.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,F,H),A=xe.get(S,R.length),A.init(F),R.push(A),ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),P.setFromProjectionMatrix(ne,fi,F.reversedDepth),G=this.localClippingEnabled,B=Ce.init(this.clippingPlanes,G),T=ue.get(S,w.length),T.init(),w.push(T),ge.enabled===!0&&ge.isPresenting===!0){const Te=x.xr.getDepthSensingMesh();Te!==null&&Bl(Te,F,-1/0,x.sortObjects)}Bl(S,F,0,x.sortObjects),T.finish(),x.sortObjects===!0&&T.sort(ee,pe),Re=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Re&&_e.addToRenderList(T,S),this.info.render.frame++,B===!0&&Ce.beginShadows();const k=A.state.shadowsArray;if(De.render(k,S,F),B===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&V.hasRenderPass())===!1){const Te=T.opaque,Me=T.transmissive;if(A.setupLights(),F.isArrayCamera){const we=F.cameras;if(Me.length>0)for(let Oe=0,qe=we.length;Oe<qe;Oe++){const Ve=we[Oe];Uh(Te,Me,S,Ve)}Re&&_e.render(S);for(let Oe=0,qe=we.length;Oe<qe;Oe++){const Ve=we[Oe];Nh(T,S,Ve,Ve.viewport)}}else Me.length>0&&Uh(Te,Me,S,F),Re&&_e.render(S),Nh(T,S,F)}H!==null&&Z===0&&(N.updateMultisampleRenderTarget(H),N.updateRenderTargetMipmap(H)),q&&V.end(x),S.isScene===!0&&S.onAfterRender(x,S,F),Ee.resetDefaultState(),te=-1,re=null,R.pop(),R.length>0?(A=R[R.length-1],B===!0&&Ce.setGlobalState(x.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?T=w[w.length-1]:T=null};function Bl(S,F,j,q){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||P.intersectsSprite(S)){q&&he.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ne);const Te=ve.update(S),Me=S.material;Me.visible&&T.push(S,Te,Me,j,he.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||P.intersectsObject(S))){const Te=ve.update(S),Me=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),he.copy(S.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),he.copy(Te.boundingSphere.center)),he.applyMatrix4(S.matrixWorld).applyMatrix4(ne)),Array.isArray(Me)){const we=Te.groups;for(let Oe=0,qe=we.length;Oe<qe;Oe++){const Ve=we[Oe],Qe=Me[Ve.materialIndex];Qe&&Qe.visible&&T.push(S,Te,Qe,j,he.z,Ve)}}else Me.visible&&T.push(S,Te,Me,j,he.z,null)}}const Se=S.children;for(let Te=0,Me=Se.length;Te<Me;Te++)Bl(Se[Te],F,j,q)}function Nh(S,F,j,q){const{opaque:k,transmissive:Se,transparent:Te}=S;A.setupLightsView(j),B===!0&&Ce.setGlobalState(x.clippingPlanes,j),q&&Pe.viewport(Q.copy(q)),k.length>0&&Wa(k,F,j),Se.length>0&&Wa(Se,F,j),Te.length>0&&Wa(Te,F,j),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Uh(S,F,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[q.id]===void 0){const Qe=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[q.id]=new gi(1,1,{generateMipmaps:!0,type:Qe?zi:Hn,minFilter:wr,samples:yt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const Se=A.state.transmissionRenderTarget[q.id],Te=q.viewport||Q;Se.setSize(Te.z*x.transmissionResolutionScale,Te.w*x.transmissionResolutionScale);const Me=x.getRenderTarget(),we=x.getActiveCubeFace(),Oe=x.getActiveMipmapLevel();x.setRenderTarget(Se),x.getClearColor(I),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Re&&_e.render(j);const qe=x.toneMapping;x.toneMapping=mi;const Ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),A.setupLightsView(q),B===!0&&Ce.setGlobalState(x.clippingPlanes,q),Wa(S,j,q),N.updateMultisampleRenderTarget(Se),N.updateRenderTargetMipmap(Se),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let _t=0,Nt=F.length;_t<Nt;_t++){const Ut=F[_t],{object:St,geometry:Ge,material:mt,group:ot}=Ut;if(mt.side===Ii&&St.layers.test(q.layers)){const bn=mt.side;mt.side=xn,mt.needsUpdate=!0,Fh(St,j,q,Ge,mt,ot),mt.side=bn,mt.needsUpdate=!0,Qe=!0}}Qe===!0&&(N.updateMultisampleRenderTarget(Se),N.updateRenderTargetMipmap(Se))}x.setRenderTarget(Me,we,Oe),x.setClearColor(I,Y),Ve!==void 0&&(q.viewport=Ve),x.toneMapping=qe}function Wa(S,F,j){const q=F.isScene===!0?F.overrideMaterial:null;for(let k=0,Se=S.length;k<Se;k++){const Te=S[k],{object:Me,geometry:we,group:Oe}=Te;let qe=Te.material;qe.allowOverride===!0&&q!==null&&(qe=q),Me.layers.test(j.layers)&&Fh(Me,F,j,we,qe,Oe)}}function Fh(S,F,j,q,k,Se){S.onBeforeRender(x,F,j,q,k,Se),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(x,F,j,q,S,Se),k.transparent===!0&&k.side===Ii&&k.forceSinglePass===!1?(k.side=xn,k.needsUpdate=!0,x.renderBufferDirect(j,F,q,k,S,Se),k.side=lr,k.needsUpdate=!0,x.renderBufferDirect(j,F,q,k,S,Se),k.side=Ii):x.renderBufferDirect(j,F,q,k,S,Se),S.onAfterRender(x,F,j,q,k,Se)}function $a(S,F,j){F.isScene!==!0&&(F=Ie);const q=g.get(S),k=A.state.lights,Se=A.state.shadowsArray,Te=k.state.version,Me=Le.getParameters(S,k.state,Se,F,j),we=Le.getProgramCacheKey(Me);let Oe=q.programs;q.environment=S.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(S.isMeshStandardMaterial?le:se).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",ai),Oe=new Map,q.programs=Oe);let qe=Oe.get(we);if(qe!==void 0){if(q.currentProgram===qe&&q.lightsStateVersion===Te)return Bh(S,Me),qe}else Me.uniforms=Le.getUniforms(S),S.onBeforeCompile(Me,x),qe=Le.acquireProgram(Me,we),Oe.set(we,qe),q.uniforms=Me.uniforms;const Ve=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ve.clippingPlanes=Ce.uniform),Bh(S,Me),q.needsLights=d_(S),q.lightsStateVersion=Te,q.needsLights&&(Ve.ambientLightColor.value=k.state.ambient,Ve.lightProbe.value=k.state.probe,Ve.directionalLights.value=k.state.directional,Ve.directionalLightShadows.value=k.state.directionalShadow,Ve.spotLights.value=k.state.spot,Ve.spotLightShadows.value=k.state.spotShadow,Ve.rectAreaLights.value=k.state.rectArea,Ve.ltc_1.value=k.state.rectAreaLTC1,Ve.ltc_2.value=k.state.rectAreaLTC2,Ve.pointLights.value=k.state.point,Ve.pointLightShadows.value=k.state.pointShadow,Ve.hemisphereLights.value=k.state.hemi,Ve.directionalShadowMap.value=k.state.directionalShadowMap,Ve.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ve.spotShadowMap.value=k.state.spotShadowMap,Ve.spotLightMatrix.value=k.state.spotLightMatrix,Ve.spotLightMap.value=k.state.spotLightMap,Ve.pointShadowMap.value=k.state.pointShadowMap,Ve.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=qe,q.uniformsList=null,qe}function Oh(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Ro.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Bh(S,F){const j=g.get(S);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function c_(S,F,j,q,k){F.isScene!==!0&&(F=Ie),N.resetTextureUnits();const Se=F.fog,Te=q.isMeshStandardMaterial?F.environment:null,Me=H===null?x.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:As,we=(q.isMeshStandardMaterial?le:se).get(q.envMap||Te),Oe=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qe=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ve=!!j.morphAttributes.position,Qe=!!j.morphAttributes.normal,_t=!!j.morphAttributes.color;let Nt=mi;q.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Nt=x.toneMapping);const Ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,St=Ut!==void 0?Ut.length:0,Ge=g.get(q),mt=A.state.lights;if(B===!0&&(G===!0||S!==re)){const un=S===re&&q.id===te;Ce.setState(q,S,un)}let ot=!1;q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==mt.state.version||Ge.outputColorSpace!==Me||k.isBatchedMesh&&Ge.batching===!1||!k.isBatchedMesh&&Ge.batching===!0||k.isBatchedMesh&&Ge.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ge.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ge.instancing===!1||!k.isInstancedMesh&&Ge.instancing===!0||k.isSkinnedMesh&&Ge.skinning===!1||!k.isSkinnedMesh&&Ge.skinning===!0||k.isInstancedMesh&&Ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ge.instancingMorph===!1&&k.morphTexture!==null||Ge.envMap!==we||q.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ce.numPlanes||Ge.numIntersection!==Ce.numIntersection)||Ge.vertexAlphas!==Oe||Ge.vertexTangents!==qe||Ge.morphTargets!==Ve||Ge.morphNormals!==Qe||Ge.morphColors!==_t||Ge.toneMapping!==Nt||Ge.morphTargetsCount!==St)&&(ot=!0):(ot=!0,Ge.__version=q.version);let bn=Ge.currentProgram;ot===!0&&(bn=$a(q,F,k));let qr=!1,Mn=!1,na=!1;const Tt=bn.getUniforms(),mn=Ge.uniforms;if(Pe.useProgram(bn.program)&&(qr=!0,Mn=!0,na=!0),q.id!==te&&(te=q.id,Mn=!0),qr||re!==S){Pe.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Tt.setValue(C,"projectionMatrix",S.projectionMatrix),Tt.setValue(C,"viewMatrix",S.matrixWorldInverse);const gn=Tt.map.cameraPosition;gn!==void 0&&gn.setValue(C,K.setFromMatrixPosition(S.matrixWorld)),yt.logarithmicDepthBuffer&&Tt.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Tt.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),re!==S&&(re=S,Mn=!0,na=!0)}if(Ge.needsLights&&(mt.state.directionalShadowMap.length>0&&Tt.setValue(C,"directionalShadowMap",mt.state.directionalShadowMap,N),mt.state.spotShadowMap.length>0&&Tt.setValue(C,"spotShadowMap",mt.state.spotShadowMap,N),mt.state.pointShadowMap.length>0&&Tt.setValue(C,"pointShadowMap",mt.state.pointShadowMap,N)),k.isSkinnedMesh){Tt.setOptional(C,k,"bindMatrix"),Tt.setOptional(C,k,"bindMatrixInverse");const un=k.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Tt.setValue(C,"boneTexture",un.boneTexture,N))}k.isBatchedMesh&&(Tt.setOptional(C,k,"batchingTexture"),Tt.setValue(C,"batchingTexture",k._matricesTexture,N),Tt.setOptional(C,k,"batchingIdTexture"),Tt.setValue(C,"batchingIdTexture",k._indirectTexture,N),Tt.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&Tt.setValue(C,"batchingColorTexture",k._colorsTexture,N));const On=j.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ze.update(k,j,bn),(Mn||Ge.receiveShadow!==k.receiveShadow)&&(Ge.receiveShadow=k.receiveShadow,Tt.setValue(C,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(mn.envMap.value=we,mn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(mn.envMapIntensity.value=F.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=Tb()),Mn&&(Tt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&u_(mn,na),Se&&q.fog===!0&&We.refreshFogUniforms(mn,Se),We.refreshMaterialUniforms(mn,q,z,fe,A.state.transmissionRenderTarget[S.id]),Ro.upload(C,Oh(Ge),mn,N)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ro.upload(C,Oh(Ge),mn,N),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Tt.setValue(C,"center",k.center),Tt.setValue(C,"modelViewMatrix",k.modelViewMatrix),Tt.setValue(C,"normalMatrix",k.normalMatrix),Tt.setValue(C,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const un=q.uniformsGroups;for(let gn=0,kl=un.length;gn<kl;gn++){const fr=un[gn];ce.update(fr,bn),ce.bind(fr,bn)}}return bn}function u_(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function d_(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(S,F,j){const q=g.get(S);q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),g.get(S.texture).__webglTexture=F,g.get(S.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const j=g.get(S);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0};const h_=C.createFramebuffer();this.setRenderTarget=function(S,F=0,j=0){H=S,L=F,Z=j;let q=null,k=!1,Se=!1;if(S){const Me=g.get(S);if(Me.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(C.FRAMEBUFFER,Me.__webglFramebuffer),Q.copy(S.viewport),X.copy(S.scissor),ae=S.scissorTest,Pe.viewport(Q),Pe.scissor(X),Pe.setScissorTest(ae),te=-1;return}else if(Me.__webglFramebuffer===void 0)N.setupRenderTarget(S);else if(Me.__hasExternalTextures)N.rebindTextures(S,g.get(S.texture).__webglTexture,g.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const qe=S.depthTexture;if(Me.__boundDepthTexture!==qe){if(qe!==null&&g.has(qe)&&(S.width!==qe.image.width||S.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(S)}}const we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Se=!0);const Oe=g.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?q=Oe[F][j]:q=Oe[F],k=!0):S.samples>0&&N.useMultisampledRTT(S)===!1?q=g.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?q=Oe[j]:q=Oe,Q.copy(S.viewport),X.copy(S.scissor),ae=S.scissorTest}else Q.copy(O).multiplyScalar(z).floor(),X.copy($).multiplyScalar(z).floor(),ae=U;if(j!==0&&(q=h_),Pe.bindFramebuffer(C.FRAMEBUFFER,q)&&Pe.drawBuffers(S,q),Pe.viewport(Q),Pe.scissor(X),Pe.setScissorTest(ae),k){const Me=g.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,j)}else if(Se){const Me=F;for(let we=0;we<S.textures.length;we++){const Oe=g.get(S.textures[we]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+we,Oe.__webglTexture,j,Me)}}else if(S!==null&&j!==0){const Me=g.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Me.__webglTexture,j)}te=-1},this.readRenderTargetPixels=function(S,F,j,q,k,Se,Te,Me=0){if(!(S&&S.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=g.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){Pe.bindFramebuffer(C.FRAMEBUFFER,we);try{const Oe=S.textures[Me],qe=Oe.format,Ve=Oe.type;if(!yt.textureFormatReadable(qe)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Ve)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-q&&j>=0&&j<=S.height-k&&(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),C.readPixels(F,j,q,k,me.convert(qe),me.convert(Ve),Se))}finally{const Oe=H!==null?g.get(H).__webglFramebuffer:null;Pe.bindFramebuffer(C.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(S,F,j,q,k,Se,Te,Me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=g.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we)if(F>=0&&F<=S.width-q&&j>=0&&j<=S.height-k){Pe.bindFramebuffer(C.FRAMEBUFFER,we);const Oe=S.textures[Me],qe=Oe.format,Ve=Oe.type;if(!yt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.bufferData(C.PIXEL_PACK_BUFFER,Se.byteLength,C.STREAM_READ),S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),C.readPixels(F,j,q,k,me.convert(qe),me.convert(Ve),0);const _t=H!==null?g.get(H).__webglFramebuffer:null;Pe.bindFramebuffer(C.FRAMEBUFFER,_t);const Nt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Y_(C,Nt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Se),C.deleteBuffer(Qe),C.deleteSync(Nt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,j=0){const q=Math.pow(2,-j),k=Math.floor(S.image.width*q),Se=Math.floor(S.image.height*q),Te=F!==null?F.x:0,Me=F!==null?F.y:0;N.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,j,0,0,Te,Me,k,Se),Pe.unbindTexture()};const f_=C.createFramebuffer(),p_=C.createFramebuffer();this.copyTextureToTexture=function(S,F,j=null,q=null,k=0,Se=null){Se===null&&(k!==0?(Ta("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=k,k=0):Se=0);let Te,Me,we,Oe,qe,Ve,Qe,_t,Nt;const Ut=S.isCompressedTexture?S.mipmaps[Se]:S.image;if(j!==null)Te=j.max.x-j.min.x,Me=j.max.y-j.min.y,we=j.isBox3?j.max.z-j.min.z:1,Oe=j.min.x,qe=j.min.y,Ve=j.isBox3?j.min.z:0;else{const On=Math.pow(2,-k);Te=Math.floor(Ut.width*On),Me=Math.floor(Ut.height*On),S.isDataArrayTexture?we=Ut.depth:S.isData3DTexture?we=Math.floor(Ut.depth*On):we=1,Oe=0,qe=0,Ve=0}q!==null?(Qe=q.x,_t=q.y,Nt=q.z):(Qe=0,_t=0,Nt=0);const St=me.convert(F.format),Ge=me.convert(F.type);let mt;F.isData3DTexture?(N.setTexture3D(F,0),mt=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(N.setTexture2DArray(F,0),mt=C.TEXTURE_2D_ARRAY):(N.setTexture2D(F,0),mt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const ot=C.getParameter(C.UNPACK_ROW_LENGTH),bn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),qr=C.getParameter(C.UNPACK_SKIP_PIXELS),Mn=C.getParameter(C.UNPACK_SKIP_ROWS),na=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ut.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ut.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Oe),C.pixelStorei(C.UNPACK_SKIP_ROWS,qe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ve);const Tt=S.isDataArrayTexture||S.isData3DTexture,mn=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const On=g.get(S),un=g.get(F),gn=g.get(On.__renderTarget),kl=g.get(un.__renderTarget);Pe.bindFramebuffer(C.READ_FRAMEBUFFER,gn.__webglFramebuffer),Pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,kl.__webglFramebuffer);for(let fr=0;fr<we;fr++)Tt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(S).__webglTexture,k,Ve+fr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(F).__webglTexture,Se,Nt+fr)),C.blitFramebuffer(Oe,qe,Te,Me,Qe,_t,Te,Me,C.DEPTH_BUFFER_BIT,C.NEAREST);Pe.bindFramebuffer(C.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||g.has(S)){const On=g.get(S),un=g.get(F);Pe.bindFramebuffer(C.READ_FRAMEBUFFER,f_),Pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,p_);for(let gn=0;gn<we;gn++)Tt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,On.__webglTexture,k,Ve+gn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,On.__webglTexture,k),mn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,un.__webglTexture,Se,Nt+gn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,un.__webglTexture,Se),k!==0?C.blitFramebuffer(Oe,qe,Te,Me,Qe,_t,Te,Me,C.COLOR_BUFFER_BIT,C.NEAREST):mn?C.copyTexSubImage3D(mt,Se,Qe,_t,Nt+gn,Oe,qe,Te,Me):C.copyTexSubImage2D(mt,Se,Qe,_t,Oe,qe,Te,Me);Pe.bindFramebuffer(C.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else mn?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(mt,Se,Qe,_t,Nt,Te,Me,we,St,Ge,Ut.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(mt,Se,Qe,_t,Nt,Te,Me,we,St,Ut.data):C.texSubImage3D(mt,Se,Qe,_t,Nt,Te,Me,we,St,Ge,Ut):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Se,Qe,_t,Te,Me,St,Ge,Ut.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Se,Qe,_t,Ut.width,Ut.height,St,Ut.data):C.texSubImage2D(C.TEXTURE_2D,Se,Qe,_t,Te,Me,St,Ge,Ut);C.pixelStorei(C.UNPACK_ROW_LENGTH,ot),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,bn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,qr),C.pixelStorei(C.UNPACK_SKIP_ROWS,Mn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,na),Se===0&&F.generateMipmaps&&C.generateMipmap(mt),Pe.unbindTexture()},this.initRenderTarget=function(S){g.get(S).__webglFramebuffer===void 0&&N.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?N.setTextureCube(S,0):S.isData3DTexture?N.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?N.setTexture2DArray(S,0):N.setTexture2D(S,0),Pe.unbindTexture()},this.resetState=function(){L=0,Z=0,H=null,Pe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const wb=`
precision mediump float;
uniform float uTime, uAltitude, uLuminosite, uTurbulence, uNight, uAurora, uPulse;
uniform float uPluie, uEclair;   // pluie continue (humeur) + flash d'orage
uniform vec4 uMeteor;             // xy : départ, z : âge, w : actif — étoile filante
uniform vec2 uFocus;
uniform float uAspect; // largeur/hauteur : pour que l'onde du toucher soit circulaire
uniform vec3 uTap; // xy : position du toucher, z : âge en secondes (>=100 : inactif)
uniform vec3 uCol1, uCol2, uCol3;
varying vec2 vUv;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){
  vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),
             mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y);
}
float fbm(vec2 p){
  float v=0.0, a=0.5;
  for(int i=0;i<5;i++){ v+=a*noise(p); p=p*2.1+uTurbulence; a*=0.5; }
  return v;
}
float fbm3(vec2 p){
  float v=0.0, a=0.5;
  for(int i=0;i<3;i++){ v+=a*noise(p); p=p*2.3; a*=0.5; }
  return v;
}
void main(){
  vec2 uv = vUv + (uFocus - 0.5) * 0.10;
  float t = uTime * 0.03;

  // Ciel de base : dégradé assombri par la nuit.
  vec3 sky = mix(uCol1, uCol2, uv.y) * mix(1.0, 0.30, uNight);

  // Étoiles scintillantes (haut du ciel, la nuit seulement).
  vec2 cell = floor(uv * 160.0);
  float rnd = hash(cell);
  float twinkle = 0.6 + 0.4 * sin(uTime * 1.8 + rnd * 40.0);
  float star = step(0.9965, rnd) * (0.4 + 0.6 * twinkle) * smoothstep(0.2, 0.55, uv.y) * uNight * 0.75;
  sky += vec3(star);

  // Lune : disque net + halo — la source lumineuse dominante de la nuit.
  float md = length(uv - vec2(0.78, 0.86));
  sky += uNight * (smoothstep(0.035, 0.022, md) * vec3(1.0, 1.0, 0.96) * 1.3
                 + exp(-md*md*70.0) * 0.4 * vec3(0.7, 0.8, 1.0));

  // Soleil diurne : arc lent, halo chaud.
  float sp = fract(uTime * 0.004);
  vec2 sunPos = vec2(0.15 + 0.7 * sp, 0.62 + 0.20 * sin(3.14159 * sp));
  float sd = length(uv - sunPos);
  sky += (1.0 - uNight) * uLuminosite * exp(-sd*sd*14.0) * vec3(1.0, 0.8, 0.5) * 0.7;

  // Rubans d'aurore ondulés et troués (la nuit, pilotés par l'humeur) :
  // double sinusoïde + bruit, largeur modulée → des vagues, jamais une bande plate.
  float ax = uv.x * 2.2 + t * 0.6;
  float y0 = 0.70 + 0.10 * sin(ax * 2.3 + uTime * 0.11) + 0.05 * fbm3(vec2(ax, uTime * 0.05));
  float w0 = (uv.y - y0) * (9.0 + 8.0 * fbm3(vec2(ax * 1.3 + 9.0, uTime * 0.03)));
  float ribbon = exp(-w0*w0) * smoothstep(0.25, 0.75, 0.5 + 0.5 * sin(ax * 3.1 - uTime * 0.07));
  float y1 = 0.58 + 0.12 * sin(ax * 1.7 - uTime * 0.09) + 0.06 * fbm3(vec2(ax * 1.7 + 5.0, uTime * 0.04));
  float w1 = (uv.y - y1) * (11.0 + 7.0 * fbm3(vec2(ax * 2.1, uTime * 0.02)));
  ribbon += 0.7 * exp(-w1*w1) * smoothstep(0.3, 0.8, 0.5 + 0.5 * sin(ax * 2.6 + uTime * 0.05));
  float band = ribbon * uAurora * (0.15 + 0.85 * smoothstep(0.2, 0.8, uNight));
  sky += band * (vec3(0.2, 0.95, 0.5) * 0.7 + uCol2 * 0.12);

  // Nuages : deux couches en parallaxe — le doigt écarte les plans à des vitesses différentes.
  vec2 p1 = uv * 3.0 + vec2(t, t * 0.4) + (uFocus - 0.5) * 0.08;
  vec2 p2 = uv * 5.0 - vec2(t * 1.7, t * 0.2) + (uFocus - 0.5) * 0.18;
  float c1 = smoothstep(0.60 - uAltitude * 0.45, 0.95, fbm(p1));
  float c2 = smoothstep(0.68 - uAltitude * 0.40, 0.98, fbm3(p2 + fbm3(p1)));
  float clouds = clamp(c1 + 0.5 * c2 * (0.4 + 0.6 * uAltitude), 0.0, 1.0);

  // Couleur des nuages : éclairée par la clarté et le battement du cœur.
  float glow = uLuminosite * mix(0.55, 1.0, uv.y) * (1.0 + 0.12 * uPulse);
  vec3 col = mix(sky, uCol3 * glow + vec3(0.02), clouds * mix(1.0, 0.55, uNight));

  // Onde concentrique là où le doigt a touché le ciel.
  if (uTap.z < 100.0) {
    float r = uTap.z * 0.22;
    float d = length((uv - uTap.xy) * vec2(uAspect, 1.0)); // onde circulaire, pas ellipse
    float ring = exp(-120.0 * (d - r) * (d - r)) * exp(-0.6 * uTap.z); // fondu lent, visible
    col += ring * (uCol3 * 0.6 + vec3(0.25));
  }

  // Pluie : traits fins qui tombent à des vitesses différentes selon la colonne.
  if (uPluie > 0.01) {
    float cellx = floor(uv.x * 140.0);
    float rnd = hash(vec2(cellx, 7.0));
    float chute = fract(uv.y * 6.0 + uTime * (1.6 + rnd * 1.2) + rnd * 9.0);
    float trait = smoothstep(0.985, 1.0, chute) * step(0.45, rnd);
    col += trait * uPluie * vec3(0.5, 0.6, 0.75) * 0.5;
  }

  // Éclair : le ciel blanc une fraction de seconde, puis l'oubli.
  col += vec3(uEclair * 0.55, uEclair * 0.6, uEclair * 0.7);

  // Étoile filante : tête brillante + traînée qui s'allume puis s'éteint.
  if (uMeteor.w > 0.0) {
    vec2 dir = normalize(vec2(0.9, -0.42));
    vec2 p = uMeteor.xy + dir * (uMeteor.z * 0.55);
    vec2 rel = uv - p;
    float along = dot(rel, dir);
    float perp = length(rel - dir * along);
    float tete = exp(-dot(rel, rel) * 5000.0);
    float queue = step(along, 0.0) * step(-0.3, along) * exp(-perp * perp * 2600.0) * (-along / 0.3);
    float feu = exp(-pow(uMeteor.z - 0.45, 2.0) * 9.0) * uMeteor.w;
    col += (tete * 1.2 + queue * 0.8) * feu * vec3(1.0, 0.95, 0.8);
  }

  gl_FragColor = vec4(col, 1.0);
}`,Cb=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;function Rb(t){const e=new Ab({canvas:t,antialias:!1}),n={uTime:{value:0},uAltitude:{value:.45},uLuminosite:{value:.7},uTurbulence:{value:.2},uNight:{value:0},uAurora:{value:.55},uPulse:{value:0},uPluie:{value:0},uEclair:{value:0},uMeteor:{value:new Ft(0,0,0,0)},uFocus:{value:new ft(.5,.5)},uAspect:{value:1},uTap:{value:new W(.5,.5,999)},uCol1:{value:new et("#1b2a4a")},uCol2:{value:new et("#7fa8d9")},uCol3:{value:new et("#dfefff")}},i={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,pluie:0,col1:new et("#1b2a4a"),col2:new et("#7fa8d9"),col3:new et("#dfefff"),focus:new ft(.5,.5)},r={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,col1:new et("#1b2a4a"),col2:new et("#7fa8d9"),col3:new et("#dfefff"),focus:new ft(.5,.5)};let s=0,a=0,o=999,l=0,c=0;const u={x:0,y:0,age:0,actif:0},d=new ni({vertexShader:Cb,fragmentShader:wb,uniforms:n}),h=new Si(new Ua(2,2),d),p=new b1;p.add(h);function v(){e.setSize(window.innerWidth,window.innerHeight,!1),n.uAspect.value=window.innerWidth/Math.max(1,window.innerHeight)}return window.addEventListener("resize",v),v(),{apply(_,m){i.alt=_.altitude,i.lum=_.luminosite,i.turb=_.turbulence,i.night=_.night,i.aurora=_.aurora,i.pluie=_.pluie,i.col1.setStyle(_.palette[0]),i.col2.setStyle(_.palette[1]),i.col3.setStyle(_.palette[2]),m&&i.focus.set(m[0],m[1])},setBpm(_){s=_??0},eclair(){c=1},filer(_,m){u.x=_,u.y=m,u.age=0,u.actif=1},tap(_,m){o=0,n.uTap.value.set(_,m,0)},frame(_){n.uTime.value+=_;const m=1-Math.exp(-_*2.5);r.alt+=(i.alt-r.alt)*m,r.lum+=(i.lum-r.lum)*m,r.turb+=(i.turb-r.turb)*m,r.night+=(i.night-r.night)*m,r.aurora+=(i.aurora-r.aurora)*m,l+=(i.pluie-l)*(1-Math.exp(-_*.8)),c*=Math.exp(-_*2.6),u.actif>0&&(u.age+=_,u.age>1.4&&(u.actif=0)),r.col1.lerp(i.col1,m),r.col2.lerp(i.col2,m),r.col3.lerp(i.col3,m),r.focus.lerp(i.focus,m),a+=_*(s>0?s/60:.2),n.uPulse.value=Math.sin(a*2*Math.PI),o<100&&(o+=_,n.uTap.value.z=o),n.uAltitude.value=r.alt,n.uLuminosite.value=r.lum,n.uTurbulence.value=r.turb,n.uNight.value=r.night,n.uAurora.value=r.aurora,n.uPluie.value=l,n.uEclair.value=c,n.uMeteor.value.set(u.x,u.y,u.age,u.actif),n.uFocus.value.copy(r.focus),n.uCol1.value.copy(r.col1),n.uCol2.value.copy(r.col2),n.uCol3.value.copy(r.col3),e.render(p,new Td)}}}function Lb(){return{breath:0,bpm:null,emotion:"calme",timeOfDay:.5,seed:"anonyme"}}const Pb={calme:["#1b2a4a","#7fa8d9","#dfefff"],joie:["#2b4a1b","#d9c47f","#fff6df"],tristesse:["#101018","#3a4a6a","#8a9ab0"],tension:["#2a0a0a","#6a2a2a","#c07a5a"]};function og(t){const e={calme:{alt:.45,lum:.7,turb:.2,aur:.55,pluie:.12},joie:{alt:.7,lum:.9,turb:.35,aur:.95,pluie:0},tristesse:{alt:.2,lum:.35,turb:.1,aur:.25,pluie:.7},tension:{alt:.6,lum:.45,turb:.85,aur:.4,pluie:.45}}[t.emotion],n=Math.min(1,Math.max(0,(Math.abs(t.timeOfDay-.5)-.2)*5)),i=t.cielReel??null;return{altitude:Math.min(1,e.alt+t.breath*.35),luminosite:i?Math.min(1,i.luminosite+t.breath*.2):Math.min(1,e.lum+t.breath*.2),turbulence:i?Math.min(1,Math.max(e.turb,i.turbulence)+t.breath*.1):Math.min(1,e.turb+t.breath*.1),night:n,aurora:e.aur,pluie:i?Math.max(e.pluie,i.pluie):e.pluie,palette:Pb[t.emotion]}}function Db(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return Math.sqrt(e/t.length)}function Ib(t,e,n=8){return t<=e?0:Math.min(1,(t-e)*n)}async function Nb(t){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),n=new AudioContext,i=n.createMediaStreamSource(e),r=n.createAnalyser();r.fftSize=1024,i.connect(r);const s=new Float32Array(r.fftSize);let a=5e-4;return setInterval(()=>{r.getFloatTimeDomainData(s);const o=Db(s);a=Math.min(a*.999+o*.001,.01),t(Ib(o,a))},60),!0}catch{return!1}}var Cs=typeof self<"u"?self:{};function lg(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=Cs,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function Sr(){throw Error("Invalid UTF8")}function Uf(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let mo,vc;const Ub=typeof TextDecoder<"u";let Fb;const Ob=typeof TextEncoder<"u";function cg(t){if(Ob)t=(Fb||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function ug(t){Cs.setTimeout((()=>{throw t}),0)}var Ou,Bb=lg(610401301,!1),Ff=lg(748402147,!0);function Of(){var t=Cs.navigator;return t&&(t=t.userAgent)?t:""}const Bf=Cs.navigator;function sl(t){return sl[" "](t),t}Ou=Bf&&Bf.userAgentData||null,sl[" "]=function(){};const dg={};let ma=null;function kb(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(c){for(;l<s.length;){const u=s.charAt(l++),d=ma[u];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}hg();let l=0;for(;;){const c=o(-1),u=o(0),d=o(64),h=o(64);if(h===64&&c===-1)break;a(c<<2|u>>4),d!=64&&(a(u<<4&240|d>>2),h!=64&&a(d<<6&192|h))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function hg(){if(!ma){ma={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));dg[n]=i;for(let r=0;r<i.length;r++){const s=i[r];ma[s]===void 0&&(ma[s]=r)}}}}var zb=typeof Uint8Array<"u",fg=!(!(Bb&&Ou&&Ou.brands.length>0)&&(Of().indexOf("Trident")!=-1||Of().indexOf("MSIE")!=-1))&&typeof btoa=="function";const kf=/[-_.]/g,Vb={"-":"+",_:"/",".":"="};function Gb(t){return Vb[t]||""}function pg(t){if(!fg)return kb(t);t=kf.test(t)?t.replace(kf,Gb):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Ad(t){return zb&&t!=null&&t instanceof Uint8Array}var Rs={};function Br(){return Hb||=new _i(null,Rs)}function wd(t){mg(Rs);var e=t.g;return(e=e==null||Ad(e)?e:typeof e=="string"?pg(e):null)==null?e:t.g=e}var _i=class{h(){return new Uint8Array(wd(this)||0)}constructor(t,e){if(mg(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let Hb,qb;function mg(t){if(t!==Rs)throw Error("illegal external caller")}function gg(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Bu(t){return gg(t=Error(t),"warning"),t}function Ls(t,e){if(t!=null){var n=qb??={},i=n[t]||0;i>=e||(n[t]=i+1,gg(t=Error(),"incident"),ug(t))}}function Gs(){return typeof BigInt=="function"}var Hs=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Mi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Wb=Mi("jas",void 0,!0),zf=Mi(void 0,"0di"),ua=Mi(void 0,"1oa"),Ln=Mi(void 0,Symbol()),$b=Mi(void 0,"0ub"),jb=Mi(void 0,"0ubs"),ku=Mi(void 0,"0ubsb"),Xb=Mi(void 0,"0actk"),Ps=Mi("m_m","Pa",!0),Vf=Mi();const vg={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},_g=Object.defineProperties,Ue=Hs?Wb:"Ga";var Vr;const Gf=[];function Fa(t,e){Hs||Ue in t||_g(t,vg),t[Ue]|=e}function Yt(t,e){Hs||Ue in t||_g(t,vg),t[Ue]=e}function Oa(t){return Fa(t,34),t}function wa(t){return Fa(t,8192),t}Yt(Gf,7),Vr=Object.freeze(Gf);var Ds={};function Dn(t,e){return e===void 0?t.h!==kr&&!!(2&(0|t.v[Ue])):!!(2&e)&&t.h!==kr}const kr={};function Cd(t,e){if(t!=null){if(typeof t=="string")t=t?new _i(t,Rs):Br();else if(t.constructor!==_i)if(Ad(t))t=t.length?new _i(new Uint8Array(t),Rs):Br();else{if(!e)throw Error();t=void 0}}return t}class Hf{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var Yb=Object.freeze({});function xg(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(e=128&e?1:0;e<a;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const o in t)!isNaN(o)&&n(+o,t[o])}}var Sg={};function qs(t){return 128&t?Sg:void 0}function al(t){return t.Na=!0,t}var Jb=al((t=>typeof t=="number")),qf=al((t=>typeof t=="string")),Kb=al((t=>typeof t=="boolean")),ol=typeof Cs.BigInt=="function"&&typeof Cs.BigInt(0)=="bigint";function Pn(t){var e=t;if(qf(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(Jb(e)&&!Number.isSafeInteger(e))throw Error(String(e));return ol?BigInt(t):t=Kb(t)?t?"1":"0":qf(t)?t.trim()||"0":String(t)}var zu=al((t=>ol?t>=Qb&&t<=tM:t[0]==="-"?Wf(t,Zb):Wf(t,eM)));const Zb=Number.MIN_SAFE_INTEGER.toString(),Qb=ol?BigInt(Number.MIN_SAFE_INTEGER):void 0,eM=Number.MAX_SAFE_INTEGER.toString(),tM=ol?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Wf(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const nM=typeof Uint8Array.prototype.slice=="function";let iM,Lt=0,zt=0;function $f(t){const e=t>>>0;Lt=e,zt=(t-e)/4294967296>>>0}function Is(t){if(t<0){$f(-t);const[e,n]=Pd(Lt,zt);Lt=e>>>0,zt=n>>>0}else $f(t)}function Rd(t){const e=iM||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),zt=0,Lt=e.getUint32(0,!0)}function bg(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Ca(t,e)}function rM(t,e){return Pn(Gs()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):Ca(t,e))}function Mg(t,e){return Gs()?Pn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Pn(Ld(t,e))}function Ca(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Gs()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+jf(n)+jf(t));return n}function jf(t){return t=String(t),"0000000".slice(t.length)+t}function Ld(t,e){if(2147483648&e)if(Gs())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=Pd(t,e);t="-"+Ca(n,i)}else t=Ca(t,e);return t}function ll(t){if(t.length<16)Is(Number(t));else if(Gs())t=BigInt(t),Lt=Number(t&BigInt(4294967295))>>>0,zt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");zt=Lt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));zt*=1e6,Lt=1e6*Lt+s,Lt>=4294967296&&(zt+=Math.trunc(Lt/4294967296),zt>>>=0,Lt>>>=0)}if(e){const[i,r]=Pd(Lt,zt);Lt=i,zt=r}}}function Pd(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function ti(t){return Array.prototype.slice.call(t)}const Ba=typeof BigInt=="function"?BigInt.asIntN:void 0,sM=typeof BigInt=="function"?BigInt.asUintN:void 0,zr=Number.isSafeInteger,cl=Number.isFinite,Ns=Math.trunc,aM=Pn(0);function ga(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function pi(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Ra(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function yg(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const oM=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ka(t){switch(typeof t){case"bigint":return!0;case"number":return cl(t);case"string":return oM.test(t);default:return!1}}function Ws(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return cl(t)?0|t:void 0}function Eg(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return cl(t)?t>>>0:void 0}function Tg(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(ll(t),Ld(Lt,zt))}function Dd(t){if(t=Ns(t),!zr(t)){Is(t);var e=Lt,n=zt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=bg(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function Ag(t){var e=Ns(Number(t));return zr(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Tg(t))}function wg(t){var e=Ns(Number(t));return zr(e)?Pn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Gs()?Pn(Ba(64,BigInt(t))):Pn(Tg(t)))}function Cg(t){return zr(t)?t=Pn(Dd(t)):(t=Ns(t),zr(t)?t=String(t):(Is(t),t=Ld(Lt,zt)),t=Pn(t)),t}function ko(t){const e=typeof t;return t==null?t:e==="bigint"?Pn(Ba(64,t)):ka(t)?e==="string"?wg(t):Cg(t):void 0}function Rg(t){if(typeof t!="string")throw Error();return t}function za(t){if(t!=null&&typeof t!="string")throw Error();return t}function en(t){return t==null||typeof t=="string"?t:void 0}function Id(t,e,n,i){return t!=null&&t[Ps]===Ds?t:Array.isArray(t)?((i=(n=0|t[Ue])|32&i|2&i)!==n&&Yt(t,i),new e(t)):(n?2&i?((t=e[zf])||(Oa((t=new e).v),t=e[zf]=t),e=t):e=new e:e=void 0,e)}function lM(t,e,n){if(e)e:{if(!ka(e=t))throw Bu("int64");switch(typeof e){case"string":e=wg(e);break e;case"bigint":e=Pn(Ba(64,e));break e;default:e=Cg(e)}}else e=ko(t);return(t=e)==null?n?aM:void 0:t}const cM={};let uM=(function(){try{return sl(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class _c{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const dM=uM?(Object.setPrototypeOf(_c.prototype,Map.prototype),Object.defineProperties(_c.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),_c):class extends Map{constructor(){super()}};function Xf(t){return t}function xc(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var Hi=class extends dM{constructor(t,e,n=Xf,i=Xf){super(),this.J=0|t[Ue],this.K=e,this.S=n,this.fa=this.K?hM:i;for(let r=0;r<t.length;r++){const s=t[r],a=n(s[0],!1,!0);let o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(t){return wa(Array.from(super.entries(),t))}clear(){xc(this),super.clear()}delete(t){return xc(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new Hf(t,fM,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new Hf(t,Hi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return xc(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function hM(t,e,n,i,r,s){return t=Id(t,i,n,s),r&&(t=Ud(t)),t}function fM(t){return[t,this.get(t)]}let pM;function Yf(){return pM||=new Hi(Oa([]),void 0,void 0,void 0,cM)}function ul(t){return Ln?t[Ln]:void 0}function zo(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}Hi.prototype.toJSON=void 0;var Vu=class{};const mM={Ka:!0};function gM(t,e){e<100||Ls(jb,1)}function dl(t,e,n,i){const r=i!==void 0;i=!!i;var s,a=Ln;!r&&Hs&&a&&(s=t[a])&&zo(s,gM),a=[];var o=t.length;let l;s=4294967295;let c=!1;const u=!!(64&e),d=u?128&e?0:-1:void 0;1&e||(l=o&&t[o-1],l!=null&&typeof l=="object"&&l.constructor===Object?s=--o:l=void 0,!u||128&e||r||(c=!0,s=s-d+d)),e=void 0;for(var h=0;h<o;h++){let p=t[h];if(p!=null&&(p=n(p,i))!=null)if(u&&h>=s){const v=h-d;(e??={})[v]=p}else a[h]=p}if(l)for(let p in l){if((o=l[p])==null||(o=n(o,i))==null)continue;let v;h=+p,u&&!Number.isNaN(h)&&(v=h+d)<s?a[v]=o:(e??={})[p]=o}return e&&(c?a.push(e):a[s]=e),r&&Ln&&(t=ul(t))&&t instanceof Vu&&(a[Ln]=(function(p){const v=new Vu;return zo(p,((_,m,f)=>{v[m]=ti(f)})),v.da=p.da,v})(t)),a}function vM(t){return t[0]=La(t[0]),t[1]=La(t[1]),t}function La(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return zu(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Ue];return t.length===0&&1&e?void 0:dl(t,e,La)}if(t!=null&&t[Ps]===Ds)return Lg(t);if(t instanceof _i){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(fg){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),hg(),n=dg[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let c=0,u=0;for(;c<e.length-2;c+=3){var s=e[c],a=e[c+1],o=e[c+2],l=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[u++]=l+s+a+o}switch(l=0,o=r,e.length-c){case 2:o=n[(15&(l=e[c+1]))<<2]||r;case 1:e=e[c],i[u]=n[e>>2]+n[(3&e)<<4|l>>4]+o+r}e=i.join("")}t=t.g=e}return t}return t instanceof Hi?t=t.size!==0?t.V(vM):void 0:void 0}return t}let _M,xM;function Lg(t){return dl(t=t.v,0|t[Ue],La)}function Dr(t,e){return Pg(t,e[0],e[1])}function Pg(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[Ue],Ff&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(Ff)throw Error("carr");Ls(Xb,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Yt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var a=s-1;const l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(s=+o)<a&&(n[s+e]=l[o],delete l[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Yt(t,64|r|i),t}function SM(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Ue];return t.length===0&&1&n?void 0:Jf(t,n,e)}if(t!=null&&t[Ps]===Ds)return Kf(t);if(t instanceof Hi){if(2&(e=t.J))return t;if(!t.size)return;if(n=Oa(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[Ps]===Ds?Kf(r):Array.isArray(r)?Jf(r,0|r[Ue],!!(32&e)):void 0,i[1]=r}return n}return t instanceof _i?t:void 0}function Jf(t,e,n){return 2&e||(!n||4096&e||16&e?t=$s(t,e,!1,n&&!(16&e)):(Fa(t,34),4&e&&Object.freeze(t))),t}function Nd(t,e,n){return t=new t.constructor(e),n&&(t.h=kr),t.m=kr,t}function Kf(t){const e=t.v,n=0|e[Ue];return Dn(t,n)?t:Fd(t,e,n)?Nd(t,e):$s(e,n)}function $s(t,e,n,i){return i??=!!(34&e),t=dl(t,e,SM,i),i=32,n&&(i|=2),Yt(t,e=16769217&e|i),t}function Ud(t){const e=t.v,n=0|e[Ue];return Dn(t,n)?Fd(t,e,n)?Nd(t,e,!0):new t.constructor($s(e,n,!1)):t}function js(t){if(t.h!==kr)return!1;var e=t.v;return Fa(e=$s(e,0|e[Ue]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function Xs(t){if(!js(t)&&Dn(t,0|t.v[Ue]))throw Error()}function Gr(t,e){e===void 0&&(e=0|t[Ue]),32&e&&!(4096&e)&&Yt(t,4096|e)}function Fd(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Yt(e,2|n),t.h=kr,!0)}const Dg=Pn(0),er={};function Pt(t,e,n,i,r){if((e=qi(t.v,e,n,r))!==null||i&&t.m!==kr)return e}function qi(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let a,o;if(!(s<1+(n?0:-1))){if(r>=s)if(a=t[s],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[e],o=!0;else{if(r!==s)return;n=a}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[r]=i,i}return n}}function xt(t,e,n,i){Xs(t),Wt(t=t.v,0|t[Ue],e,n,i)}function Wt(t,e,n,i,r){const s=n+(r?0:-1);var a=t.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=(e??=0|t[Ue])>>14&1023||536870912)?i!=null&&(t[a+(r?0:-1)]={[n]:i}):t[s]=i),e)}function Rr(){return Yb===void 0?2:4}function Lr(t,e,n,i,r){let s=t.v,a=0|s[Ue];i=Dn(t,a)?1:i,r=!!r||i===3,i===2&&js(t)&&(s=t.v,a=0|s[Ue]);let o=(t=Od(s,e))===Vr?7:0|t[Ue],l=Bd(o,a);var c=!(4&l);if(c){4&l&&(t=ti(t),o=0,l=Nr(l,a),a=Wt(s,a,e,t));let u=0,d=0;for(;u<t.length;u++){const h=n(t[u]);h!=null&&(t[d++]=h)}d<u&&(t.length=d),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==o&&(Yt(t,l),2&l&&Object.freeze(t)),Ig(t,l,s,a,e,i,c,r)}function Ig(t,e,n,i,r,s,a,o){let l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?Ir(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Yt(t,e),Object.freeze(t)):(s===2&&Ir(e)&&(t=ti(t),l=0,e=Nr(e,i),i=Wt(n,i,r,t)),Ir(e)||(o||(e|=16),e!==l&&Yt(t,e))),2&e||!(4096&e||16&e)||Gr(n,i),t}function Od(t,e,n){return t=qi(t,e,n),Array.isArray(t)?t:Vr}function Bd(t,e){return 2&e&&(t|=2),1|t}function Ir(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Ng(t){return Cd(t,!0)}function Ug(t){t=ti(t);for(let e=0;e<t.length;e++){const n=t[e]=ti(t[e]);Array.isArray(n[1])&&(n[1]=Oa(n[1]))}return wa(t)}function ir(t,e,n,i){Xs(t),Wt(t=t.v,0|t[Ue],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ys(t,e,n){if(2&e)throw Error();const i=qs(e);let r=Od(t,n,i),s=r===Vr?7:0|r[Ue],a=Bd(s,e);return(2&a||Ir(a)||16&a)&&(a===s||Ir(a)||Yt(r,a),r=ti(r),s=0,a=Nr(a,e),Wt(t,e,n,r,i)),a&=-13,a!==s&&Yt(r,a),r}function Sc(t,e){var n=A0;return zd(kd(t=t.v),t,void 0,n)===e?e:-1}function kd(t){if(Hs)return t[ua]??(t[ua]=new Map);if(ua in t)return t[ua];const e=new Map;return Object.defineProperty(t,ua,{value:e}),e}function Fg(t,e,n,i,r){const s=kd(t),a=zd(s,t,e,n,r);return a!==i&&(a&&(e=Wt(t,e,a,void 0,r)),s.set(n,i)),e}function zd(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];qi(e,o,r)!=null&&(s!==0&&(n=Wt(e,n,s,void 0,r)),s=o)}return t.set(i,s),s}function Vd(t,e,n){let i=0|t[Ue];const r=qs(i),s=qi(t,n,r);let a;if(s!=null&&s[Ps]===Ds){if(!Dn(s))return js(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[Ue];2&o&&(a=$s(a,o))}return a=Dr(a,e),a!==s&&Wt(t,i,n,a,r),a}function Og(t,e,n,i,r){let s=!1;if((i=qi(t,i,r,(a=>{const o=Id(a,n,!1,e);return s=o!==a&&o!=null,o})))!=null)return s&&!Dn(i)&&Gr(t,e),i}function ut(t,e,n,i){let r=t.v,s=0|r[Ue];if((e=Og(r,s,e,n,i))==null)return e;if(s=0|r[Ue],!Dn(t,s)){const a=Ud(e);a!==e&&(js(t)&&(r=t.v,s=0|r[Ue]),s=Wt(r,s,n,e=a,i),Gr(r,s))}return e}function Bg(t,e,n,i,r,s,a,o){var l=Dn(t,n);s=l?1:s,a=!!a||s===3,l=o&&!l,(s===2||l)&&js(t)&&(n=0|(e=t.v)[Ue]);var c=(t=Od(e,r))===Vr?7:0|t[Ue],u=Bd(c,n);if(o=!(4&u)){var d=t,h=n;const p=!!(2&u);p&&(h|=2);let v=!p,_=!0,m=0,f=0;for(;m<d.length;m++){const y=Id(d[m],i,!1,h);if(y instanceof i){if(!p){const E=Dn(y);v&&=!E,_&&=E}d[f++]=y}}f<m&&(d.length=f),u|=4,u=_?-4097&u:4096|u,u=v?8|u:-9&u}if(u!==c&&(Yt(t,u),2&u&&Object.freeze(t)),l&&!(8&u||!t.length&&(s===1||s===4&&(2&u||!(16&u)&&32&n)))){for(Ir(u)&&(t=ti(t),u=Nr(u,n),n=Wt(e,n,r,t)),i=t,l=u,c=0;c<i.length;c++)(d=i[c])!==(u=Ud(d))&&(i[c]=u);l|=8,Yt(t,u=l=i.length?4096|l:-4097&l)}return Ig(t,u,e,n,r,s,o,a)}function Wi(t,e,n){const i=t.v;return Bg(t,i,0|i[Ue],e,n,Rr(),!1,!0)}function kg(t){return t==null&&(t=void 0),t}function He(t,e,n,i,r){return xt(t,n,i=kg(i),r),i&&!Dn(i)&&Gr(t.v),t}function _a(t,e,n,i){e:{var r=i=kg(i);Xs(t);const s=t.v;let a=0|s[Ue];if(r==null){const o=kd(s);if(zd(o,s,a,n)!==e)break e;o.set(n,0)}else a=Fg(s,a,n,e);Wt(s,a,e,r)}i&&!Dn(i)&&Gr(t.v)}function Nr(t,e){return-273&(2&e?2|t:-3&t)}function Gd(t,e,n,i){var r=i;Xs(t),t=Bg(t,i=t.v,0|i[Ue],n,e,2,!0),r=r??new n,t.push(r),e=n=t===Vr?7:0|t[Ue],(r=Dn(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Yt(t,n),r||Gr(i)}function qn(t,e,n){return Ws(Pt(t,e,void 0,n))}function Bt(t,e){return Pt(t,e,void 0,void 0,pi)??0}function $i(t,e,n){if(n!=null){if(typeof n!="number"||!cl(n))throw Bu("int32");n|=0}xt(t,e,n)}function ze(t,e,n){xt(t,e,ga(n))}function In(t,e,n){ir(t,e,za(n),"")}function Vo(t,e,n){{Xs(t);const a=t.v;let o=0|a[Ue];if(n==null)Wt(a,o,e);else{var i=t=n===Vr?7:0|n[Ue],r=Ir(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=ti(n),i=0,t=Nr(t,o),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const l=n[r],c=Rg(l);Object.is(l,c)||(s&&(n=ti(n),i=0,t=Nr(t,o),s=!1),n[r]=c)}t!==i&&(s&&(n=ti(n),t=Nr(t,o)),Yt(n,t)),Wt(a,o,e,n)}}}function hl(t,e,n){Xs(t),Lr(t,e,en,2,!0).push(Rg(n))}var ss=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function Hd(t,e){if(typeof t=="string")return new ss(pg(t),e);if(Array.isArray(t))return new ss(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new ss(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new ss(t,!1);if(t.constructor===_i)return e=wd(t)||new Uint8Array(0),new ss(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new ss(t,!1);throw Error()}function qd(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Ur(t,o),!(128&n))return e(i>>>0,r>>>0);throw Error()}function Wd(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Ur(t,n),!!(127&e)}throw Error()}function cr(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Ur(t,n),r}function bi(t){return cr(t)>>>0}function Go(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],Ur(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function bM(t){return cr(t)}function Ur(t,e){if(t.g=e,e>t.l)throw Error()}function zg(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function Vg(t,e){if(e==0)return Br();var n=zg(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):nM?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Br():new _i(n,Rs)}var Zf=[];function Gg(t,e,n,i){if(Ho.length){const r=Ho.pop();return r.o(i),r.g.init(t,e,n,i),r}return new MM(t,e,n,i)}function Hg(t){t.g.clear(),t.l=-1,t.h=-1,Ho.length<100&&Ho.push(t)}function qg(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=bi(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function Lo(t){switch(t.h){case 0:t.h!=0?Lo(t):Wd(t.g);break;case 1:Ur(t=t.g,t.g+8);break;case 2:if(t.h!=2)Lo(t);else{var e=bi(t.g);Ur(t=t.g,t.g+e)}break;case 5:Ur(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!qg(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}Lo(t)}break;default:throw Error()}}function Va(t,e,n){const i=t.g.l;var r=bi(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function $d(t){var e=bi(t.g),n=zg(t=t.g,e);if(t=t.h,Ub){var i,r=t;(i=vc)||(i=vc=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(mo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),mo=!0}catch{mo=!1}}throw!mo&&(vc=void 0),o}}else{e=(s=n)+e,n=[];let o,l=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?Sr():(o=t[s++],a<194||(192&o)!=128?(s--,Sr()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?Sr():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,Sr()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?Sr():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,Sr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):Sr(),n.length>=8192&&(l=Uf(l,n),n.length=0)}s=Uf(l,n)}return s}function Wg(t){const e=bi(t.g);return Vg(t.g,e)}function fl(t,e,n){var i=bi(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var MM=class{constructor(t,e,n,i){if(Zf.length){const r=Zf.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:l=!1}={}){this.Y=o,this.ea=l,r&&(r=Hd(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},Ho=[];function Qf(t){return t?/^\d+$/.test(t)?(ll(t),new Gu(Lt,zt)):null:yM||=new Gu(0,0)}var Gu=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let yM;function ep(t){return t?/^-?\d+$/.test(t)?(ll(t),new Hu(Lt,zt)):null:EM||=new Hu(0,0)}var Hu=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let EM;function ms(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Js(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function pl(t,e){if(e>=0)Js(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function jd(t){var e=Lt;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Us(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function $n(t,e,n){Js(t.g,8*e+n)}function Xd(t,e){return $n(t,e,2),e=t.g.end(),Us(t,e),e.push(t.h),e}function Yd(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function ml(t,e,n){$n(t,e,2),Js(t.g,n.length),Us(t,t.g.end()),Us(t,n)}function qo(t,e,n,i){n!=null&&(e=Xd(t,e),i(n,t),Yd(t,e))}function yi(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Jd=yi(),$g=yi(),Kd=yi(),Zd=yi(),Qd=yi(),jg=yi(),TM=yi(),gl=yi(),Xg=yi(),Yg=yi();function Ei(t,e,n){var i=t.v;Ln&&Ln in i&&(i=i[Ln])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var Fe=class{constructor(t,e){this.v=Pg(t,e,void 0,2048)}toJSON(){return Lg(this)}j(){var t=ay,e=this.v,n=t.g,i=Ln;if(Hs&&i&&e[i]?.[n]!=null&&Ls($b,3),e=t.g,Vf&&Ln&&Vf===void 0&&(i=(n=this.v)[Ln])&&(i=i.da))try{i(n,e,mM)}catch(r){ug(r)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[Ue];return Fd(this,t,e)?Nd(this,t,!0):new this.constructor($s(t,e,!1))}};Fe.prototype[Ps]=Ds,Fe.prototype.toString=function(){return this.v.toString()};var Ks=class{constructor(t,e,n){this.g=t,this.h=e,t=Jd,this.l=!!t&&n===t||!1}};function vl(t,e){return new Ks(t,e,Jd)}function Jg(t,e,n,i,r){qo(t,n,e0(e,i),r)}const AM=vl((function(t,e,n,i,r){return t.h===2&&(Va(t,Vd(e,i,n),r),!0)}),Jg),wM=vl((function(t,e,n,i,r){return t.h===2&&(Va(t,Vd(e,i,n),r),!0)}),Jg);var _l=Symbol(),xl=Symbol(),qu=Symbol(),tp=Symbol(),np=Symbol();let Kg,Zg;function Hr(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=(function(d){switch(typeof d){case"boolean":return _M||=[0,void 0,!0];case"number":return d>0?void 0:d===0?xM||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,Kg??=s,Zg??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)o[s[l]]=s;s=i[++a]}for(l=1;s!==void 0;){let d;typeof s=="number"&&(l+=s,s=i[++a]);var c=void 0;if(s instanceof Ks?d=s:(d=AM,a--),d?.l){s=i[++a],c=i;var u=a;typeof s=="function"&&(s=s(),c[u]=s),c=s}for(u=l+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);l<u;l++){const h=o[l];c?n(r,l,d,c,h):e(r,l,d,h)}}return i[t]=r}function Qg(t){return Array.isArray(t)?t[0]instanceof Ks?t:[wM,t]:[t,void 0]}function e0(t,e){return t instanceof Fe?t.v:Array.isArray(t)?Dr(t,e):void 0}function eh(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function th(t,e,n,i,r){const s=n.g;let a,o;t[e]=(l,c,u)=>s(l,c,u,o||=Hr(xl,eh,th,i).T,a||=nh(i),r)}function nh(t){let e=t[qu];if(e!=null)return e;const n=Hr(xl,eh,th,t);return e=n.ma?(i,r)=>Kg(i,r,n):(i,r)=>{for(;qg(r)&&r.h!=4;){var s=r.l,a=n[s];if(a==null){var o=n.ba;o&&(o=o[s])&&(o=RM(o))!=null&&(a=n[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,Lo(o),o.ha)var l=void 0;else l=o.g.g-a,o.g.g=a,l=Vg(o.g,l);a=void 0,o=i,l&&((a=o[Ln]??(o[Ln]=new Vu))[s]??(a[s]=[])).push(l)}}return(i=ul(i))&&(i.da=n.qa[np]),!0},t[qu]=e,t[np]=CM.bind(t),e}function CM(t,e,n,i){var r=this[xl];const s=this[qu],a=Dr(void 0,r.T),o=ul(t);if(o){var l=!1,c=r.ba;if(c){if(r=(u,d,h)=>{if(h.length!==0)if(c[d])for(const p of h){u=Gg(p);try{l=!0,s(a,u)}finally{Hg(u)}}else i?.(t,d,h)},e==null)zo(o,r);else if(o!=null){const u=o[e];u&&r(o,e,u)}if(l){let u=0|t[Ue];if(2&u&&2048&u&&!n?.Ka)throw Error();const d=qs(u),h=(p,v)=>{if(qi(t,p,d)!=null){if(n?.Qa===1)return;throw Error()}v!=null&&(u=Wt(t,u,p,v,d)),delete o[p]};e==null?xg(a,0|a[Ue],((p,v)=>{h(p,v)})):h(e,qi(a,e,d))}}}}function RM(t){const e=(t=Qg(t))[0].g;if(t=t[1]){const n=nh(t),i=Hr(xl,eh,th,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function Sl(t,e,n){t[e]=n.h}function bl(t,e,n,i){let r,s;const a=n.h;t[e]=(o,l,c)=>a(o,l,c,s||=Hr(_l,Sl,bl,i).T,r||=t0(i))}function t0(t){let e=t[tp];if(!e){const n=Hr(_l,Sl,bl,t);e=(i,r)=>n0(i,r,n),t[tp]=e}return e}function n0(t,e,n){xg(t,0|t[Ue],((i,r)=>{if(r!=null){var s=(function(a,o){var l=a[o];if(l)return l;if((l=a.ba)&&(l=l[o])){var c=(l=Qg(l))[0].h;if(l=l[1]){const u=t0(l),d=Hr(_l,Sl,bl,l).T;l=a.ma?Zg(d,u):(h,p,v)=>c(h,p,v,d,u)}else l=c;return a[o]=l}})(n,i);s?s(e,r,i):i<500||Ls(ku,3)}})),(t=ul(t))&&zo(t,((i,r,s)=>{for(Us(e,e.g.end()),i=0;i<s.length;i++)Us(e,wd(s[i])||new Uint8Array(0))}))}const LM=Pn(0);function Zs(t,e){if(Array.isArray(e)){var n=0|e[Ue];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&Yt(e,t),2&t&&Object.freeze(e),e}}function ln(t,e,n){return new Ks(t,e,n)}function Qs(t,e,n){return new Ks(t,e,n)}function cn(t,e,n){Wt(t,0|t[Ue],e,n,qs(0|t[Ue]))}var PM=vl((function(t,e,n,i,r){if(t.h!==2)return!1;if(t=ti(t=Va(t,Dr([void 0,void 0],i),r)),r=qs(i=0|e[Ue]),2&i)throw Error();let s=qi(e,n,r);if(s instanceof Hi)(2&s.J)!=0?(s=s.V(),s.push(t),Wt(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var a=0|s[Ue];8192&a||Yt(s,a|=8192),2&a&&(s=Ug(s),Wt(e,i,n,s,r)),s.push(t)}else Wt(e,i,n,wa([t]),r);return!0}),(function(t,e,n,i,r){if(e instanceof Hi)e.forEach(((s,a)=>{qo(t,n,Dr([a,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&qo(t,n,Dr(a,i),r)}wa(e)}}));function i0(t,e,n){(e=pi(e))!=null&&($n(t,n,5),t=t.g,Rd(e),jd(t))}function r0(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(Ba(64,i));if(ka(i)){if(r==="string")return Ag(i);if(r==="number")return Dd(i)}})(e),e!=null&&(typeof e=="string"&&ep(e),e!=null))switch($n(t,n,0),typeof e){case"number":t=t.g,Is(e),ms(t,Lt,zt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Hu(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ms(t.g,n.h,n.g);break;default:n=ep(e),ms(t.g,n.h,n.g)}}function s0(t,e,n){(e=Ws(e))!=null&&e!=null&&($n(t,n,0),pl(t.g,e))}function a0(t,e,n){(e=yg(e))!=null&&($n(t,n,0),t.g.g.push(e?1:0))}function o0(t,e,n){(e=en(e))!=null&&ml(t,n,cg(e))}function l0(t,e,n,i,r){qo(t,n,e0(e,i),r)}function c0(t,e,n){(e=e==null||typeof e=="string"||e instanceof _i?e:void 0)!=null&&ml(t,n,Hd(e,!0).buffer)}function u0(t,e,n){(e=Eg(e))!=null&&e!=null&&($n(t,n,0),Js(t.g,e))}function d0(t,e,n){return(t.h===5||t.h===2)&&(e=Ys(e,0|e[Ue],n),t.h==2?fl(t,Go,e):e.push(Go(t.g)),!0)}var Vt=ln((function(t,e,n){return t.h===5&&(cn(e,n,Go(t.g)),!0)}),i0,gl),DM=Qs(d0,(function(t,e,n){if((e=Zs(pi,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&($n(i,r,5),i=i.g,Rd(s),jd(i))}}),gl),ih=Qs(d0,(function(t,e,n){if((e=Zs(pi,e))!=null&&e.length){$n(t,n,2),Js(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Rd(e[i]),jd(n)}}),gl),IM=ln((function(t,e,n){return t.h===5&&(cn(e,n,(t=Go(t.g))===0?void 0:t),!0)}),i0,gl),ur=ln((function(t,e,n){return t.h!==0?t=!1:(cn(e,n,qd(t.g,Mg)),t=!0),t}),r0,jg),bc=ln((function(t,e,n){return t.h!==0?e=!1:(cn(e,n,(t=qd(t.g,Mg))===LM?void 0:t),e=!0),e}),r0,jg),NM=ln((function(t,e,n){return t.h!==0?t=!1:(cn(e,n,qd(t.g,rM)),t=!0),t}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(sM(64,i));if(ka(i)){if(r==="string")return r=Ns(Number(i)),zr(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(ll(i),i=Ca(Lt,zt))),i;if(r==="number")return(i=Ns(i))>=0&&zr(i)||(Is(i),i=bg(Lt,zt)),i}})(e),e!=null&&(typeof e=="string"&&Qf(e),e!=null))switch($n(t,n,0),typeof e){case"number":t=t.g,Is(e),ms(t,Lt,zt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Gu(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ms(t.g,n.h,n.g);break;default:n=Qf(e),ms(t.g,n.h,n.g)}}),TM),qt=ln((function(t,e,n){return t.h===0&&(cn(e,n,cr(t.g)),!0)}),s0,Zd),Ga=Qs((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ys(e,0|e[Ue],n),t.h==2?fl(t,cr,e):e.push(cr(t.g)),!0)}),(function(t,e,n){if((e=Zs(Ws,e))!=null&&e.length){n=Xd(t,n);for(let i=0;i<e.length;i++)pl(t.g,e[i]);Yd(t,n)}}),Zd),cs=ln((function(t,e,n){return t.h===0&&(cn(e,n,(t=cr(t.g))===0?void 0:t),!0)}),s0,Zd),Dt=ln((function(t,e,n){return t.h===0&&(cn(e,n,Wd(t.g)),!0)}),a0,$g),Fr=ln((function(t,e,n){return t.h===0&&(cn(e,n,(t=Wd(t.g))===!1?void 0:t),!0)}),a0,$g),rn=Qs((function(t,e,n){return t.h===2&&(t=$d(t),Ys(e,0|e[Ue],n).push(t),!0)}),(function(t,e,n){if((e=Zs(en,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&ml(i,r,cg(s))}}),Kd),sr=ln((function(t,e,n){return t.h===2&&(cn(e,n,(t=$d(t))===""?void 0:t),!0)}),o0,Kd),Mt=ln((function(t,e,n){return t.h===2&&(cn(e,n,$d(t)),!0)}),o0,Kd),Zt=(function(t,e,n=Jd){return new Ks(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=Dr(void 0,i),Ys(e,0|e[Ue],n).push(i),Va(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)l0(t,e[s],n,i,r);1&(t=0|e[Ue])||Yt(e,1|t)}})),wt=vl((function(t,e,n,i,r,s){if(t.h!==2)return!1;let a=0|e[Ue];return Fg(e,a,s,n,qs(a)),Va(t,e=Vd(e,i,n),r),!0}),l0),h0=ln((function(t,e,n){return t.h===2&&(cn(e,n,Wg(t)),!0)}),c0,Xg),UM=Qs((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ys(e,0|e[Ue],n),t.h==2?fl(t,bi,e):e.push(bi(t.g)),!0)}),(function(t,e,n){if((e=Zs(Eg,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&($n(i,r,0),Js(i.g,s))}}),Qd),FM=ln((function(t,e,n){return t.h===0&&(cn(e,n,(t=bi(t.g))===0?void 0:t),!0)}),u0,Qd),on=ln((function(t,e,n){return t.h===0&&(cn(e,n,cr(t.g)),!0)}),(function(t,e,n){(e=Ws(e))!=null&&(e=parseInt(e,10),$n(t,n,0),pl(t.g,e))}),Yg);class OM{constructor(e,n){var i=Un;this.g=e,this.h=n,this.m=ut,this.j=He,this.defaultValue=void 0,this.l=i.Oa!=null?Sg:void 0}register(){sl(this)}}function Ti(t,e){return new OM(t,e)}function dr(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Gg(n,void 0,void 0,s);try{const a=new t,o=a.v;nh(e)(o,n);var r=a}finally{Hg(n)}}return r}}function Ml(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};n0(this.v,e,Hr(_l,Sl,bl,t)),Us(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var ip=class extends Fe{constructor(t){super(t)}},rp=[0,sr,ln((function(t,e,n){return t.h===2&&(cn(e,n,(t=Wg(t))===Br()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof Fe){const i=e.Ra;return void(i?(e=i(e),e!=null&&ml(t,n,Hd(e,!0).buffer)):Ls(ku,3))}if(Array.isArray(e))return void Ls(ku,3)}c0(t,e,n)}),Xg)];let Mc,sp=globalThis.trustedTypes;function ap(t){var e;return Mc===void 0&&(Mc=(function(){let n=null;if(!sp)return n;try{const i=r=>r;n=sp.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=Mc)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function go(t,...e){if(e.length===0)return ap(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return ap(n)}var f0=[0,qt,on,Dt,-1,Ga,on,-1,Dt],BM=class extends Fe{constructor(t){super(t)}},p0=[0,Dt,Mt,Dt,on,-1,Qs((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ys(e,0|e[Ue],n),t.h==2?fl(t,bM,e):e.push(cr(t.g)),!0)}),(function(t,e,n){if((e=Zs(Ws,e))!=null&&e.length){n=Xd(t,n);for(let i=0;i<e.length;i++)pl(t.g,e[i]);Yd(t,n)}}),Yg),Mt,-1,[0,Dt,-1],on,Dt,-1],m0=[0,3,Dt,-1,2,[0,[2],qt,wt,[0,ln((function(t,e,n){return t.h===0&&(cn(e,n,bi(t.g)),!0)}),u0,Qd)]],[0,on,Dt,on,Dt,on,Dt,Mt,-1],[0,[3,4],Mt,-1,wt,[0,qt],wt,[0,on]],[0]],g0=[0,Mt,-2],op=class extends Fe{constructor(t){super(t)}},v0=[0],_0=[0,qt,Dt,1,Dt,-4],Un=class extends Fe{constructor(t){super(t,2)}},$t={};$t[336783863]=[0,Mt,Dt,-1,qt,[0,[1,2,3,4,5,6,7,8,9],wt,v0,wt,p0,wt,g0,wt,_0,wt,f0,wt,[0,Mt,-2],wt,[0,Mt,on],wt,m0,wt,[0,on,-1,Dt]],[0,Mt],Dt,[0,[1,3],[2,4],wt,[0,Ga],-1,wt,[0,rn],-1,Zt,[0,Mt,-1]],Mt];var lp=[0,bc,-1,Fr,-3,bc,Ga,sr,cs,bc,-1,Fr,cs,Fr,-2,sr];function Ct(t,e){hl(t,3,e)}function it(t,e){hl(t,4,e)}var Sn=class extends Fe{constructor(t){super(t,500)}o(t){return He(this,0,7,t)}},xa=[-1,{}],cp=[0,Mt,1,xa],up=[0,Mt,rn,xa];function jn(t,e){Gd(t,1,Sn,e)}function It(t,e){hl(t,10,e)}function ht(t,e){hl(t,15,e)}var Fn=class extends Fe{constructor(t){super(t,500)}o(t){return He(this,0,1001,t)}},x0=[-500,Zt,[-500,sr,-1,rn,-3,[-2,$t,Dt],Zt,rp,cs,-1,cp,up,Zt,[0,sr,Fr],sr,lp,cs,rn,987,rn],4,Zt,[-500,Mt,-1,[-1,{}],998,Mt],Zt,[-500,Mt,rn,-1,[-2,{},Dt],997,rn,-1],cs,Zt,[-500,Mt,rn,xa,998,rn],rn,cs,cp,up,Zt,[0,sr,-1,xa],rn,-2,lp,sr,-1,Fr,[0,Fr,FM],978,xa,Zt,rp];Fn.prototype.g=Ml(x0);var kM=dr(Fn,x0),zM=class extends Fe{constructor(t){super(t)}},S0=class extends Fe{constructor(t){super(t)}g(){return Wi(this,zM,1)}},b0=[0,Zt,[0,qt,Vt,Mt,-1]],yl=dr(S0,b0),VM=class extends Fe{constructor(t){super(t)}},GM=class extends Fe{constructor(t){super(t)}},yc=class extends Fe{constructor(t){super(t)}l(){return ut(this,VM,2)}g(){return Wi(this,GM,5)}},M0=dr(class extends Fe{constructor(t){super(t)}},[0,rn,Ga,ih,[0,on,[0,qt,-3],[0,Vt,-3],[0,qt,-1,[0,Zt,[0,qt,-2]]],Zt,[0,Vt,-1,Mt,Vt]],Mt,-1,ur,Zt,[0,qt,Vt],rn,ur]),y0=class extends Fe{constructor(t){super(t)}},gs=dr(class extends Fe{constructor(t){super(t)}},[0,Zt,[0,Vt,-4]]),E0=class extends Fe{constructor(t){super(t)}},Ha=dr(class extends Fe{constructor(t){super(t)}},[0,Zt,[0,Vt,-4]]),HM=class extends Fe{constructor(t){super(t)}},qM=[0,qt,-1,ih,on],T0=class extends Fe{constructor(t){super(t)}};T0.prototype.g=Ml([0,Vt,-4,ur]);var WM=class extends Fe{constructor(t){super(t)}},$M=dr(class extends Fe{constructor(t){super(t)}},[0,Zt,[0,1,qt,Mt,b0],ur]),dp=class extends Fe{constructor(t){super(t)}},jM=class extends Fe{constructor(t){super(t)}na(){const t=Pt(this,1,void 0,void 0,Ng);return t??Br()}},XM=class extends Fe{constructor(t){super(t)}},A0=[1,2],YM=dr(class extends Fe{constructor(t){super(t)}},[0,Zt,[0,A0,wt,[0,ih],wt,[0,h0],qt,Mt],ur]),rh=class extends Fe{constructor(t){super(t)}},w0=[0,Mt,qt,Vt,rn,-1],hp=class extends Fe{constructor(t){super(t)}},JM=[0,Dt,-1],fp=class extends Fe{constructor(t){super(t)}},Po=[1,2,3,4,5,6],Wo=class extends Fe{constructor(t){super(t)}g(){return Pt(this,1,void 0,void 0,Ng)!=null}l(){return en(Pt(this,2))!=null}},Ot=class extends Fe{constructor(t){super(t)}g(){return yg(Pt(this,2))??!1}},C0=[0,h0,Mt,[0,qt,ur,-1],[0,NM,ur]],Ht=[0,C0,Dt,[0,Po,wt,_0,wt,p0,wt,f0,wt,v0,wt,g0,wt,m0],on],El=class extends Fe{constructor(t){super(t)}},sh=[0,Ht,Vt,-1,qt],KM=Ti(502141897,El);$t[502141897]=sh;var ZM=dr(class extends Fe{constructor(t){super(t)}},[0,[0,on,-1,DM,UM],qM]),R0=class extends Fe{constructor(t){super(t)}},L0=class extends Fe{constructor(t){super(t)}},Wu=[0,Ht,Vt,[0,Ht],Dt],QM=Ti(508968150,L0);$t[508968150]=[0,Ht,sh,Wu,Vt,[0,[0,C0]]],$t[508968149]=Wu;var as=class extends Fe{constructor(t){super(t)}l(){return ut(this,rh,2)}g(){xt(this,2)}},P0=[0,Ht,w0];$t[478825465]=P0;var ey=class extends Fe{constructor(t){super(t)}},D0=class extends Fe{constructor(t){super(t)}},ah=class extends Fe{constructor(t){super(t)}},oh=class extends Fe{constructor(t){super(t)}},I0=class extends Fe{constructor(t){super(t)}},pp=[0,Ht,[0,Ht],P0,-1],N0=[0,Ht,Vt,qt],lh=[0,Ht,Vt],U0=[0,Ht,N0,lh,Vt],ty=Ti(479097054,I0);$t[479097054]=[0,Ht,U0,pp],$t[463370452]=pp,$t[464864288]=N0;var ny=Ti(462713202,oh);$t[462713202]=U0,$t[474472470]=lh;var iy=class extends Fe{constructor(t){super(t)}},F0=class extends Fe{constructor(t){super(t)}},O0=class extends Fe{constructor(t){super(t)}},B0=class extends Fe{constructor(t){super(t)}},ch=[0,Ht,Vt,-1,qt],$u=[0,Ht,Vt,Dt];B0.prototype.g=Ml([0,Ht,lh,[0,Ht],sh,Wu,ch,$u]);var k0=class extends Fe{constructor(t){super(t)}},ry=Ti(456383383,k0);$t[456383383]=[0,Ht,w0];var z0=class extends Fe{constructor(t){super(t)}},sy=Ti(476348187,z0);$t[476348187]=[0,Ht,JM];var V0=class extends Fe{constructor(t){super(t)}},mp=class extends Fe{constructor(t){super(t)}},G0=[0,on,-1],ay=Ti(458105876,class extends Fe{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[Ue];return t=Dn(this,n),e=(function(i,r,s,a){var o=mp;!a&&js(i)&&(s=0|(r=i.v)[Ue]);var l=qi(r,2);if(i=!1,l==null){if(a)return Yf();l=[]}else if(l.constructor===Hi){if(!(2&l.J)||a)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[Ue])):l=[];if(a){if(!l.length)return Yf();i||(i=!0,Oa(l))}else i&&(i=!1,wa(l),l=Ug(l));return!i&&32&s&&Fa(l,32),s=Wt(r,s,2,a=new Hi(l,o,lM,void 0)),i||Gr(r,s),a})(this,e,n,t),!t&&mp&&(e.ra=!0),e}});$t[458105876]=[0,G0,PM,[!0,ur,[0,Mt,-1,rn]],[0,Ga,Dt,on]];var uh=class extends Fe{constructor(t){super(t)}},H0=Ti(458105758,uh);$t[458105758]=[0,Ht,Mt,G0];var Ec=class extends Fe{constructor(t){super(t)}},gp=[0,IM,-1,Fr],oy=class extends Fe{constructor(t){super(t)}},q0=class extends Fe{constructor(t){super(t)}},ju=[1,2];q0.prototype.g=Ml([0,ju,wt,gp,wt,[0,Zt,gp]]);var W0=class extends Fe{constructor(t){super(t)}},ly=Ti(443442058,W0);$t[443442058]=[0,Ht,Mt,qt,Vt,rn,-1,Dt,Vt],$t[514774813]=ch;var $0=class extends Fe{constructor(t){super(t)}},cy=Ti(516587230,$0);function Xu(t,e){return e=e?e.clone():new rh,t.displayNamesLocale!==void 0?xt(e,1,za(t.displayNamesLocale)):t.displayNamesLocale===void 0&&xt(e,1),t.maxResults!==void 0?$i(e,2,t.maxResults):"maxResults"in t&&xt(e,2),t.scoreThreshold!==void 0?ze(e,3,t.scoreThreshold):"scoreThreshold"in t&&xt(e,3),t.categoryAllowlist!==void 0?Vo(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&xt(e,4),t.categoryDenylist!==void 0?Vo(e,5,t.categoryDenylist):"categoryDenylist"in t&&xt(e,5),e}function j0(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function dh(t,e=-1,n=""){return{categories:t.map((i=>({index:qn(i,1)??0??-1,score:Bt(i,2)??0,categoryName:en(Pt(i,3))??""??"",displayName:en(Pt(i,4))??""??""}))),headIndex:e,headName:n}}function uy(t){const e={classifications:Wi(t,WM,1).map((n=>dh(ut(n,S0,4)?.g()??[],qn(n,2)??0,en(Pt(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(zu(n)?n=Number(n):(n=Ba(64,n),n=zu(n)?Number(n):String(n)),n):ka(n)?typeof n=="number"?Dd(n):Ag(n):void 0})(Pt(t,2,void 0,void 0,ko))!=null&&(e.timestampMs=j0(Pt(t,2,void 0,void 0,ko)??Dg)),e}function X0(t){var e=Lr(t,3,pi,Rr()),n=Lr(t,2,Ws,Rr()),i=Lr(t,1,en,Rr()),r=Lr(t,9,en,Rr());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=ut(t,yc,4)?.l())&&(s.boundingBox={originX:qn(e,1,er)??0,originY:qn(e,2,er)??0,width:qn(e,3,er)??0,height:qn(e,4,er)??0,angle:0}),ut(t,yc,4)?.g().length)for(const a of ut(t,yc,4).g())s.keypoints.push({x:Pt(a,1,void 0,er,pi)??0,y:Pt(a,2,void 0,er,pi)??0,score:Pt(a,4,void 0,er,pi)??0,label:en(Pt(a,3,void 0,er))??""});return s}function Tl(t){const e=[];for(const n of Wi(t,E0,1))e.push({x:Bt(n,1)??0,y:Bt(n,2)??0,z:Bt(n,3)??0,visibility:Bt(n,4)??0});return e}function Sa(t){const e=[];for(const n of Wi(t,y0,1))e.push({x:Bt(n,1)??0,y:Bt(n,2)??0,z:Bt(n,3)??0,visibility:Bt(n,4)??0});return e}function vp(t){return Array.from(t,(e=>e>127?e-256:e))}function _p(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let vo;$t[516587230]=[0,Ht,ch,$u,Vt],$t[518928384]=$u;const dy=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Y0(t){if(t)return!0;if(vo===void 0)try{await WebAssembly.instantiate(dy),vo=!0}catch{vo=!1}return vo}async function _o(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await Y0(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var os=class{};function J0(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function xp(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function K0(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Be(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Sp(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=K0(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function bp(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function li(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function tr(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}os.forVisionTasks=function(t,e=!1){return _o("vision",t??go``,e)},os.forTextTasks=function(t,e=!1){return _o("text",t??go``,e)},os.forGenAiTasks=function(t,e=!1){return _o("genai",t??go``,e)},os.forAudioTasks=function(t,e=!1){return _o("audio",t??go``,e)},os.isSimdSupported=function(t=!1){return Y0(t)};async function hy(t,e,n,i){return t=await(async(r,s,a,o,l)=>{if(s&&await xp(s),!self.ModuleFactory||a&&(await xp(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function Tc(t,e){const n=ut(t.baseOptions,Wo,1)||new Wo;typeof e=="string"?(xt(n,2,za(e)),xt(n,1)):e instanceof Uint8Array&&(xt(n,1,Cd(e,!1)),xt(n,2)),He(t.baseOptions,0,1,n)}function Mp(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function Ae(t,e){t.C=Math.max(t.C,e)}function Al(t,e){t.B=new Sn,In(t.B,2,"PassThroughCalculator"),Ct(t.B,"free_memory"),it(t.B,"free_memory_unused_out"),It(e,"free_memory"),jn(e,t.B)}function Fs(t,e){Ct(t.B,e),it(t.B,e+"_unused_out")}function wl(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var Yu=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(ut(this.baseOptions,Wo,1)?.g()||ut(this.baseOptions,Wo,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=ut(i.baseOptions,fp,3);if(!s){var a=s=new fp,o=new op;_a(a,4,Po,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new BM,_a(r,2,Po,a)):(r=s,a=new op,_a(r,4,Po,a))),He(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Tc(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)Tc(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{Tc(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=kM(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,Mp(this)}finishProcessing(){this.g.finishProcessing(),Mp(this)}close(){this.B=void 0,this.g.closeGraph()}};function or(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Yu.prototype.close=Yu.prototype.close;class fy{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function yp(t,e,n){const i=t.g;if(n=or(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Ep(t,e){const n=t.g,i=or(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=or(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=or(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new fy(n,i,r,s)}function hh(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function py(t,e,n,i){return hh(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=Ep(t,!0)),n=t.u):(t.A||(t.A=Ep(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function Z0(t,e,n){return hh(t,e),t=or(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Q0(t,e,n){hh(t,e),t.B||(t.B=or(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function my(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var ev=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=or(t.createProgram(),"Failed to create WebGL program"),this.X=yp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=yp(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Ni(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Ju(t){var e=Ni(t,1);if(!e){if(e=Ni(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=Os(t);var n=fh(t);if(Q0(n,i,tv(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function tv(t){let e=Ni(t,2);if(!e){const n=Os(t);e=iv(t);const i=Ju(t),r=nv(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Ku(t)}return e}function Os(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=or(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function nv(t){if(t=Os(t),!xo)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))xo=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");xo=t.R16F}return xo}function fh(t){return t.l||(t.l=new ev),t.l}function iv(t){const e=Os(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ni(t,2);return n||(n=Z0(fh(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Ku(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var xo,Kt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Tp===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Ni(this,0)}ka(){return!!Ni(this,1)}R(){return!!Ni(this,2)}ja(){return(e=Ni(t=this,0))||(e=Ju(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return Ju(this)}N(){return tv(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Os(this),r=fh(this);i.activeTexture(i.TEXTURE1),n=Z0(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=nv(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Q0(r,i,n),py(r,i,!1,(()=>{iv(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ku(this)})),my(r),Ku(this)}}t.push(n)}return new Kt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Os(this).deleteTexture(Ni(this,2)),Tp=-1}};Kt.prototype.close=Kt.prototype.close,Kt.prototype.clone=Kt.prototype.clone,Kt.prototype.getAsWebGLTexture=Kt.prototype.N,Kt.prototype.getAsFloat32Array=Kt.prototype.ia,Kt.prototype.getAsUint8Array=Kt.prototype.ja,Kt.prototype.hasWebGLTexture=Kt.prototype.R,Kt.prototype.hasFloat32Array=Kt.prototype.ka,Kt.prototype.hasUint8Array=Kt.prototype.Fa;var Tp=250;function ii(...t){return t.map((([e,n])=>({start:e,end:n})))}const gy=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((Ap=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:J0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Be(this,i||"input_audio",(s=>{Be(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){li(this,"__graph_config__",(e=>{t(e)})),Be(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Be(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){Be(this,e,(i=>{const[r,s]=Sp(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){Be(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Be(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Be(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Be(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Be(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Be(this,e,(i=>{Be(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){Be(this,e,(i=>{bp(this,Object.keys(t),(r=>{bp(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Be(this,n,(r=>{Be(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){Be(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Be(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){Be(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){Be(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){Be(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){Be(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){Be(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Be(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){Be(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Be(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Be(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Be(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Be(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Be(this,e,(n=>{Be(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Be(this,n,(i=>{Be(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){Be(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Be(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Be(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Be(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Be(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Be(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Be(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){li(this,t,e),Be(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){tr(this,t,e),Be(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){li(this,t,e),Be(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){tr(this,t,e),Be(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){li(this,t,e),Be(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){tr(this,t,e),Be(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){li(this,t,e),Be(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){tr(this,t,e),Be(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){li(this,t,e),Be(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){tr(this,t,e),Be(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){li(this,t,e),Be(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){tr(this,t,e),Be(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){li(this,t,e),Be(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){tr(this,t,e),Be(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),li(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),Be(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Ap{get ga(){return this.i}pa(t,e,n){Be(this,e,(i=>{const[r,s]=Sp(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(t,e){li(this,t,e),Be(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){tr(this,t,e),Be(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Ap,ri=class extends gy{};async function at(t,e,n){return(async function(i,r,s,a){return hy(i,r,s,a)})(t,n.canvas??(J0()?void 0:document.createElement("canvas")),e,n)}function rv(t,e,n,i){if(t.U){const s=new T0;if(n?.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");ze(s,1,(r.left+r.right)/2),ze(s,2,(r.top+r.bottom)/2),ze(s,4,r.right-r.left),ze(s,3,r.bottom-r.top)}else ze(s,1,.5),ze(s,2,.5),ze(s,4,1),ze(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(ze(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=K0(e);n=Bt(s,3)*o/a,r=Bt(s,4)*a/o,ze(s,4,n),ze(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function si(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");rv(t,e,n,t.C+1)}function Ai(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");rv(t,e,n,i)}function Bs(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Kt([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var Nn=class extends Yu{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new ev}l(t,e=!0){if("runningMode"in t&&xt(this.baseOptions,2,Ra(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Nn.prototype.close=Nn.prototype.close;var kn=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},He(t=this.h=new El,0,1,e=new Ot),ze(this.h,2,.5),ze(this.h,3,.3)}get baseOptions(){return ut(this.h,Ot,1)}set baseOptions(t){He(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&ze(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&ze(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},si(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ai(this,t,n,e),this.j}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect_in"),ht(t,"detections");const e=new Un;Ei(e,KM,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect_in"),it(n,"DETECTIONS:detections"),n.o(e),jn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=M0(s),this.j.detections.push(X0(i));Ae(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Ae(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};kn.prototype.detectForVideo=kn.prototype.G,kn.prototype.detect=kn.prototype.F,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=async function(t,e){return at(kn,t,{baseOptions:{modelAssetPath:e}})},kn.createFromModelBuffer=function(t,e){return at(kn,t,{baseOptions:{modelAssetBuffer:e}})},kn.createFromOptions=function(t,e){return at(kn,t,e)};var ph=ii([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),mh=ii([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),gh=ii([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),sv=ii([474,475],[475,476],[476,477],[477,474]),vh=ii([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),_h=ii([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),av=ii([469,470],[470,471],[471,472],[472,469]),xh=ii([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),ov=[...ph,...mh,...gh,...vh,..._h,...xh],lv=ii([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function wp(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Rt=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,He(t=this.h=new L0,0,1,e=new Ot),this.A=new R0,He(this.h,0,3,this.A),this.u=new El,He(this.h,0,2,this.u),$i(this.u,4,1),ze(this.u,2,.5),ze(this.A,2,.5),ze(this.h,4,.5)}get baseOptions(){return ut(this.h,Ot,1)}set baseOptions(t){He(this.h,0,1,t)}o(t){return"numFaces"in t&&$i(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&ze(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&ze(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&ze(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return wp(this),si(this,t,e),this.j}G(t,e,n){return wp(this),Ai(this,t,n,e),this.j}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect"),ht(t,"face_landmarks");const e=new Un;Ei(e,QM,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),it(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),jn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=Ha(s),this.j.faceLandmarks.push(Tl(i));Ae(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{Ae(this,i)})),this.outputFaceBlendshapes&&(ht(t,"blendshapes"),it(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=yl(s),this.j.faceBlendshapes.push(dh(i.g()??[]));Ae(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{Ae(this,i)}))),this.outputFacialTransformationMatrixes&&(ht(t,"face_geometry"),it(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=ut(i=ZM(s),HM,2))&&this.j.facialTransformationMatrixes.push({rows:qn(i,1)??0??0,columns:qn(i,2)??0??0,data:Lr(i,3,pi,Rr()).slice()??[]});Ae(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{Ae(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Rt.prototype.detectForVideo=Rt.prototype.G,Rt.prototype.detect=Rt.prototype.F,Rt.prototype.setOptions=Rt.prototype.o,Rt.createFromModelPath=function(t,e){return at(Rt,t,{baseOptions:{modelAssetPath:e}})},Rt.createFromModelBuffer=function(t,e){return at(Rt,t,{baseOptions:{modelAssetBuffer:e}})},Rt.createFromOptions=function(t,e){return at(Rt,t,e)},Rt.FACE_LANDMARKS_LIPS=ph,Rt.FACE_LANDMARKS_LEFT_EYE=mh,Rt.FACE_LANDMARKS_LEFT_EYEBROW=gh,Rt.FACE_LANDMARKS_LEFT_IRIS=sv,Rt.FACE_LANDMARKS_RIGHT_EYE=vh,Rt.FACE_LANDMARKS_RIGHT_EYEBROW=_h,Rt.FACE_LANDMARKS_RIGHT_IRIS=av,Rt.FACE_LANDMARKS_FACE_OVAL=xh,Rt.FACE_LANDMARKS_CONTOURS=ov,Rt.FACE_LANDMARKS_TESSELATION=lv;var Sh=ii([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Cp(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Rp(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Lp(t,e=!0){const n=[];for(const r of t){var i=yl(r);t=[];for(const s of i.g())i=e&&qn(s,1)!=null?qn(s,1)??0:-1,t.push({score:Bt(s,2)??0,index:i,categoryName:en(Pt(s,3))??""??"",displayName:en(Pt(s,4))??""??""});n.push(t)}return n}var Tn=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],He(t=this.j=new I0,0,1,e=new Ot),this.u=new oh,He(this.j,0,2,this.u),this.D=new ah,He(this.u,0,3,this.D),this.A=new D0,He(this.u,0,2,this.A),this.h=new ey,He(this.j,0,3,this.h),ze(this.A,2,.5),ze(this.u,4,.5),ze(this.D,2,.5)}get baseOptions(){return ut(this.j,Ot,1)}set baseOptions(t){He(this.j,0,1,t)}o(t){if($i(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&ze(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ze(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ze(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new as,n=e,i=Xu(t.cannedGesturesClassifierOptions,ut(this.h,as,3)?.l());He(n,0,2,i),He(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&ut(this.h,as,3)?.g();return t.customGesturesClassifierOptions?(He(n=e=new as,0,2,i=Xu(t.customGesturesClassifierOptions,ut(this.h,as,4)?.l())),He(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&ut(this.h,as,4)?.g(),this.l(t)}Ha(t,e){return Cp(this),si(this,t,e),Rp(this)}Ia(t,e,n){return Cp(this),Ai(this,t,n,e),Rp(this)}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect"),ht(t,"hand_gestures"),ht(t,"hand_landmarks"),ht(t,"world_hand_landmarks"),ht(t,"handedness");const e=new Un;Ei(e,ty,this.j);const n=new Sn;In(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),it(n,"HAND_GESTURES:hand_gestures"),it(n,"LANDMARKS:hand_landmarks"),it(n,"WORLD_LANDMARKS:world_hand_landmarks"),it(n,"HANDEDNESS:handedness"),n.o(e),jn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=Ha(s);const a=[];for(const o of Wi(i,E0,1))a.push({x:Bt(o,1)??0,y:Bt(o,2)??0,z:Bt(o,3)??0,visibility:Bt(o,4)??0});this.landmarks.push(a)}Ae(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ae(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=gs(s);const a=[];for(const o of Wi(i,y0,1))a.push({x:Bt(o,1)??0,y:Bt(o,2)??0,z:Bt(o,3)??0,visibility:Bt(o,4)??0});this.worldLandmarks.push(a)}Ae(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ae(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...Lp(i,!1)),Ae(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{Ae(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...Lp(i)),Ae(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ae(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Pp(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Tn.prototype.recognizeForVideo=Tn.prototype.Ia,Tn.prototype.recognize=Tn.prototype.Ha,Tn.prototype.setOptions=Tn.prototype.o,Tn.createFromModelPath=function(t,e){return at(Tn,t,{baseOptions:{modelAssetPath:e}})},Tn.createFromModelBuffer=function(t,e){return at(Tn,t,{baseOptions:{modelAssetBuffer:e}})},Tn.createFromOptions=function(t,e){return at(Tn,t,e)},Tn.HAND_CONNECTIONS=Sh;var An=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],He(t=this.h=new oh,0,1,e=new Ot),this.u=new ah,He(this.h,0,3,this.u),this.j=new D0,He(this.h,0,2,this.j),$i(this.j,3,1),ze(this.j,2,.5),ze(this.u,2,.5),ze(this.h,4,.5)}get baseOptions(){return ut(this.h,Ot,1)}set baseOptions(t){He(this.h,0,1,t)}o(t){return"numHands"in t&&$i(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&ze(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ze(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ze(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],si(this,t,e),Pp(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ai(this,t,n,e),Pp(this)}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect"),ht(t,"hand_landmarks"),ht(t,"world_hand_landmarks"),ht(t,"handedness");const e=new Un;Ei(e,ny,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),it(n,"LANDMARKS:hand_landmarks"),it(n,"WORLD_LANDMARKS:world_hand_landmarks"),it(n,"HANDEDNESS:handedness"),n.o(e),jn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=Ha(s),this.landmarks.push(Tl(i));Ae(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ae(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=gs(s),this.worldLandmarks.push(Sa(i));Ae(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ae(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const l of i){i=yl(l);const c=[];for(const u of i.g())c.push({score:Bt(u,2)??0,index:qn(u,1)??0??-1,categoryName:en(Pt(u,3))??""??"",displayName:en(Pt(u,4))??""??""});o.push(c)}a.call(s,...o),Ae(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ae(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};An.prototype.detectForVideo=An.prototype.G,An.prototype.detect=An.prototype.F,An.prototype.setOptions=An.prototype.o,An.createFromModelPath=function(t,e){return at(An,t,{baseOptions:{modelAssetPath:e}})},An.createFromModelBuffer=function(t,e){return at(An,t,{baseOptions:{modelAssetBuffer:e}})},An.createFromOptions=function(t,e){return at(An,t,e)},An.HAND_CONNECTIONS=Sh;var cv=ii([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Dp(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Ip(t){try{if(!t.D)return t.h;t.D(t.h)}finally{wl(t)}}function So(t,e){t=Ha(t),e.push(Tl(t))}var At=class extends Nn{constructor(t,e){super(new ri(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,He(t=this.j=new B0,0,1,e=new Ot),this.I=new ah,He(this.j,0,2,this.I),this.W=new iy,He(this.j,0,3,this.W),this.u=new El,He(this.j,0,4,this.u),this.O=new R0,He(this.j,0,5,this.O),this.A=new F0,He(this.j,0,6,this.A),this.M=new O0,He(this.j,0,7,this.M),ze(this.u,2,.5),ze(this.u,3,.3),ze(this.O,2,.5),ze(this.A,2,.5),ze(this.A,3,.3),ze(this.M,2,.5),ze(this.I,2,.5)}get baseOptions(){return ut(this.j,Ot,1)}set baseOptions(t){He(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&ze(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&ze(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&ze(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&ze(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&ze(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&ze(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&ze(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,Dp(this),si(this,t,i),Ip(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Dp(this),Ai(this,t,r,e),Ip(this)}m(){var t=new Fn;It(t,"input_frames_image"),ht(t,"pose_landmarks"),ht(t,"pose_world_landmarks"),ht(t,"face_landmarks"),ht(t,"left_hand_landmarks"),ht(t,"left_hand_world_landmarks"),ht(t,"right_hand_landmarks"),ht(t,"right_hand_world_landmarks");const e=new Un,n=new ip;In(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))xt(r,2,dl(s,0,La));else{if(!(typeof s=="string"||s instanceof _i||Ad(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");ir(r,2,Cd(s,!1),Br())}})(n,this.j.g());const i=new Sn;In(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Gd(i,8,ip,n),Ct(i,"IMAGE:input_frames_image"),it(i,"POSE_LANDMARKS:pose_landmarks"),it(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),it(i,"FACE_LANDMARKS:face_landmarks"),it(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),it(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),it(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),it(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),jn(t,i),Al(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{So(r,this.h.poseLandmarks),Ae(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{Ae(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=gs(r),a.push(Sa(r)),Ae(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{Ae(this,r)})),this.outputPoseSegmentationMasks&&(it(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Fs(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[Bs(this,r,!0,!this.D)],Ae(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],Ae(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{So(r,this.h.faceLandmarks),Ae(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{Ae(this,r)})),this.outputFaceBlendshapes&&(ht(t,"extra_blendshapes"),it(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=yl(r),a.push(dh(r.g()??[]))),Ae(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{Ae(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{So(r,this.h.leftHandLandmarks),Ae(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{Ae(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=gs(r),a.push(Sa(r)),Ae(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{Ae(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{So(r,this.h.rightHandLandmarks),Ae(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{Ae(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=gs(r),a.push(Sa(r)),Ae(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{Ae(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};At.prototype.detectForVideo=At.prototype.G,At.prototype.detect=At.prototype.F,At.prototype.setOptions=At.prototype.o,At.createFromModelPath=function(t,e){return at(At,t,{baseOptions:{modelAssetPath:e}})},At.createFromModelBuffer=function(t,e){return at(At,t,{baseOptions:{modelAssetBuffer:e}})},At.createFromOptions=function(t,e){return at(At,t,e)},At.HAND_CONNECTIONS=Sh,At.POSE_CONNECTIONS=cv,At.FACE_LANDMARKS_LIPS=ph,At.FACE_LANDMARKS_LEFT_EYE=mh,At.FACE_LANDMARKS_LEFT_EYEBROW=gh,At.FACE_LANDMARKS_LEFT_IRIS=sv,At.FACE_LANDMARKS_RIGHT_EYE=vh,At.FACE_LANDMARKS_RIGHT_EYEBROW=_h,At.FACE_LANDMARKS_RIGHT_IRIS=av,At.FACE_LANDMARKS_FACE_OVAL=xh,At.FACE_LANDMARKS_CONTOURS=ov,At.FACE_LANDMARKS_TESSELATION=lv;var zn=class extends Nn{constructor(t,e){super(new ri(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},He(t=this.h=new k0,0,1,e=new Ot)}get baseOptions(){return ut(this.h,Ot,1)}set baseOptions(t){He(this.h,0,1,t)}o(t){return He(this.h,0,2,Xu(t,ut(this.h,rh,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},si(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Ai(this,t,n,e),this.j}m(){var t=new Fn;It(t,"input_image"),It(t,"norm_rect"),ht(t,"classifications");const e=new Un;Ei(e,ry,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ct(n,"IMAGE:input_image"),Ct(n,"NORM_RECT:norm_rect"),it(n,"CLASSIFICATIONS:classifications"),n.o(e),jn(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=uy($M(i)),Ae(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{Ae(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};zn.prototype.classifyForVideo=zn.prototype.ta,zn.prototype.classify=zn.prototype.sa,zn.prototype.setOptions=zn.prototype.o,zn.createFromModelPath=function(t,e){return at(zn,t,{baseOptions:{modelAssetPath:e}})},zn.createFromModelBuffer=function(t,e){return at(zn,t,{baseOptions:{modelAssetBuffer:e}})},zn.createFromOptions=function(t,e){return at(zn,t,e)};var wn=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!0),this.h=new z0,this.embeddings={embeddings:[]},He(t=this.h,0,1,e=new Ot)}get baseOptions(){return ut(this.h,Ot,1)}set baseOptions(t){He(this.h,0,1,t)}o(t){var e=this.h,n=ut(this.h,hp,2);return n=n?n.clone():new hp,t.l2Normalize!==void 0?xt(n,1,Ra(t.l2Normalize)):"l2Normalize"in t&&xt(n,1),t.quantize!==void 0?xt(n,2,Ra(t.quantize)):"quantize"in t&&xt(n,2),He(e,0,2,n),this.l(t)}za(t,e){return si(this,t,e),this.embeddings}Aa(t,e,n){return Ai(this,t,n,e),this.embeddings}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect"),ht(t,"embeddings_out");const e=new Un;Ei(e,sy,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),it(n,"EMBEDDINGS:embeddings_out"),n.o(e),jn(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=YM(i),this.embeddings=(function(s){return{embeddings:Wi(s,XM,1).map((a=>{const o={headIndex:qn(a,3)??0??-1,headName:en(Pt(a,4))??""??""};var l=a.v;return Og(l,0|l[Ue],dp,Sc(a,1))!==void 0?(a=Lr(a=ut(a,dp,Sc(a,1),void 0),1,pi,Rr()),o.floatEmbedding=a.slice()):(l=new Uint8Array(0),o.quantizedEmbedding=ut(a,jM,Sc(a,2),void 0)?.na()?.h()??l),o})),timestampMs:j0(Pt(s,2,void 0,void 0,ko)??Dg)}})(i),Ae(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{Ae(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};wn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=_p(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=_p(vp(t.quantizedEmbedding),vp(e.quantizedEmbedding))}return t},wn.prototype.embedForVideo=wn.prototype.Aa,wn.prototype.embed=wn.prototype.za,wn.prototype.setOptions=wn.prototype.o,wn.createFromModelPath=function(t,e){return at(wn,t,{baseOptions:{modelAssetPath:e}})},wn.createFromModelBuffer=function(t,e){return at(wn,t,{baseOptions:{modelAssetBuffer:e}})},wn.createFromOptions=function(t,e){return at(wn,t,e)};var Zu=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function vy(t){const e=(function(n){return Wi(n,Sn,1)})(t.ca()).filter((n=>(en(Pt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(ut(e[0],Un,7)?.j()?.g()??new Map).forEach(((n,i)=>{t.u[Number(i)]=en(Pt(n,1))??""}))}function Np(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Up(t){try{const e=new Zu(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{wl(t)}}Zu.prototype.close=Zu.prototype.close;var _n=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new uh,this.A=new V0,He(this.h,0,3,this.A),He(t=this.h,0,1,e=new Ot)}get baseOptions(){return ut(this.h,Ot,1)}set baseOptions(t){He(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?xt(this.h,2,za(t.displayNamesLocale)):"displayNamesLocale"in t&&xt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){vy(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Np(this),si(this,t,i),Up(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Np(this),Ai(this,t,r,e),Up(this)}Da(){return this.u}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect");const e=new Un;Ei(e,H0,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),n.o(e),jn(t,n),Al(this,t),this.outputConfidenceMasks&&(ht(t,"confidence_masks"),it(n,"CONFIDENCE_MASKS:confidence_masks"),Fs(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Bs(this,s,!0,!this.j))),Ae(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ae(this,i)}))),this.outputCategoryMask&&(ht(t,"category_mask"),it(n,"CATEGORY_MASK:category_mask"),Fs(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Bs(this,i,!1,!this.j),Ae(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ae(this,i)}))),ht(t,"quality_scores"),it(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Ae(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ae(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_n.prototype.getLabels=_n.prototype.Da,_n.prototype.segmentForVideo=_n.prototype.La,_n.prototype.segment=_n.prototype.segment,_n.prototype.setOptions=_n.prototype.o,_n.createFromModelPath=function(t,e){return at(_n,t,{baseOptions:{modelAssetPath:e}})},_n.createFromModelBuffer=function(t,e){return at(_n,t,{baseOptions:{modelAssetBuffer:e}})},_n.createFromOptions=function(t,e){return at(_n,t,e)};var Qu=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};Qu.prototype.close=Qu.prototype.close;var ci=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new uh,this.u=new V0,He(this.h,0,3,this.u),He(t=this.h,0,1,e=new Ot)}get baseOptions(){return ut(this.h,Ot,1)}set baseOptions(t){He(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new q0,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new Ec;ir(s,3,Ra(!0),!1),ir(s,1,ga(e.keypoint.x),0),ir(s,2,ga(e.keypoint.y),0),_a(i,1,ju,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new oy;for(s of e.scribble)ir(e=new Ec,3,Ra(!0),!1),ir(e,1,ga(s.x),0),ir(e,2,ga(s.y),0),Gd(o,1,Ec,e);_a(i,2,ju,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),si(this,t,r);e:{try{const o=new Qu(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break e}this.j(o)}finally{wl(this)}a=void 0}return a}m(){var t=new Fn;It(t,"image_in"),It(t,"roi_in"),It(t,"norm_rect_in");const e=new Un;Ei(e,H0,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Ct(n,"IMAGE:image_in"),Ct(n,"ROI:roi_in"),Ct(n,"NORM_RECT:norm_rect_in"),n.o(e),jn(t,n),Al(this,t),this.outputConfidenceMasks&&(ht(t,"confidence_masks"),it(n,"CONFIDENCE_MASKS:confidence_masks"),Fs(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Bs(this,s,!0,!this.j))),Ae(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ae(this,i)}))),this.outputCategoryMask&&(ht(t,"category_mask"),it(n,"CATEGORY_MASK:category_mask"),Fs(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Bs(this,i,!1,!this.j),Ae(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ae(this,i)}))),ht(t,"quality_scores"),it(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Ae(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ae(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ci.prototype.segment=ci.prototype.segment,ci.prototype.setOptions=ci.prototype.o,ci.createFromModelPath=function(t,e){return at(ci,t,{baseOptions:{modelAssetPath:e}})},ci.createFromModelBuffer=function(t,e){return at(ci,t,{baseOptions:{modelAssetBuffer:e}})},ci.createFromOptions=function(t,e){return at(ci,t,e)};var Vn=class extends Nn{constructor(t,e){super(new ri(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},He(t=this.h=new W0,0,1,e=new Ot)}get baseOptions(){return ut(this.h,Ot,1)}set baseOptions(t){He(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?xt(this.h,2,za(t.displayNamesLocale)):"displayNamesLocale"in t&&xt(this.h,2),t.maxResults!==void 0?$i(this.h,3,t.maxResults):"maxResults"in t&&xt(this.h,3),t.scoreThreshold!==void 0?ze(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&xt(this.h,4),t.categoryAllowlist!==void 0?Vo(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&xt(this.h,5),t.categoryDenylist!==void 0?Vo(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&xt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},si(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ai(this,t,n,e),this.j}m(){var t=new Fn;It(t,"input_frame_gpu"),It(t,"norm_rect"),ht(t,"detections");const e=new Un;Ei(e,ly,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ct(n,"IMAGE:input_frame_gpu"),Ct(n,"NORM_RECT:norm_rect"),it(n,"DETECTIONS:detections"),n.o(e),jn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=M0(s),this.j.detections.push(X0(i));Ae(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Ae(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Vn.prototype.detectForVideo=Vn.prototype.G,Vn.prototype.detect=Vn.prototype.F,Vn.prototype.setOptions=Vn.prototype.o,Vn.createFromModelPath=async function(t,e){return at(Vn,t,{baseOptions:{modelAssetPath:e}})},Vn.createFromModelBuffer=function(t,e){return at(Vn,t,{baseOptions:{modelAssetBuffer:e}})},Vn.createFromOptions=function(t,e){return at(Vn,t,e)};var ed=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function Fp(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Op(t){try{const e=new ed(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{wl(t)}}ed.prototype.close=ed.prototype.close;var Cn=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,He(t=this.h=new $0,0,1,e=new Ot),this.A=new O0,He(this.h,0,3,this.A),this.j=new F0,He(this.h,0,2,this.j),$i(this.j,4,1),ze(this.j,2,.5),ze(this.A,2,.5),ze(this.h,4,.5)}get baseOptions(){return ut(this.h,Ot,1)}set baseOptions(t){He(this.h,0,1,t)}o(t){return"numPoses"in t&&$i(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&ze(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&ze(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&ze(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,Fp(this),si(this,t,i),Op(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Fp(this),Ai(this,t,r,e),Op(this)}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect"),ht(t,"normalized_landmarks"),ht(t,"world_landmarks"),ht(t,"segmentation_masks");const e=new Un;Ei(e,cy,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),it(n,"NORM_LANDMARKS:normalized_landmarks"),it(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),jn(t,n),Al(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=Ha(s),this.landmarks.push(Tl(i));Ae(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],Ae(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=gs(s),this.worldLandmarks.push(Sa(i));Ae(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],Ae(this,i)})),this.outputSegmentationMasks&&(it(n,"SEGMENTATION_MASK:segmentation_masks"),Fs(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>Bs(this,s,!0,!this.u))),Ae(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],Ae(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Cn.prototype.detectForVideo=Cn.prototype.G,Cn.prototype.detect=Cn.prototype.F,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(t,e){return at(Cn,t,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(t,e){return at(Cn,t,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(t,e){return at(Cn,t,e)},Cn.POSE_CONNECTIONS=cv;function _y(t){return t==="arriere"?"arriere":"avant"}function xy(t){return t==="avant"?"arriere":"avant"}function Sy(t){return{video:{facingMode:{ideal:t==="arriere"?"environment":"user"}},audio:!1}}function by(t){return t==="avant"}function My(){return"Je vais allumer ma caméra pour te voir et réagir avec toi. Rien n’est enregistré ni envoyé : tout reste dans ton appareil. Tu peux l’éteindre quand tu veux."}const uv="nath.camera.face";function yy(t){return _y(t.getItem(uv))}function Ey(t,e){t.setItem(uv,e)}const Ty="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",Ay="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm";let Ac=null;function wy(){return Ac||(Ac=os.forVisionTasks(Ay).then(t=>Rt.createFromOptions(t,{baseOptions:{modelAssetPath:Ty},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!0}))),Ac}async function Cy(t,e,n){const i=await wy();let r=null,s=!0,a=performance.now();const o=async c=>{r&&r.getTracks().forEach(u=>u.stop()),r=await navigator.mediaDevices.getUserMedia(Sy(c)),t.srcObject=r,t.style.transform=by(c)?"scaleX(-1)":"none",await t.play()},l=()=>{if(s){if(t.readyState>=2){const c=performance.now(),d=i.detectForVideo(t,c).faceBlendshapes?.[0]?.categories;if(d){a=c;const h=p=>d.find(v=>v.categoryName===p)?.score??0;n({smile:(h("mouthSmileLeft")+h("mouthSmileRight"))/2,browDown:(h("browDownLeft")+h("browDownRight"))/2,eyeBlink:(h("eyeBlinkLeft")+h("eyeBlinkRight"))/2,jawOpen:h("jawOpen")})}else c-a>2e3&&n({smile:0,browDown:0,eyeBlink:0,jawOpen:0})}requestAnimationFrame(l)}};return await o(e),requestAnimationFrame(l),{eteindre(){s=!1,r&&(r.getTracks().forEach(c=>c.stop()),r=null),t.srcObject=null},async basculer(c){await o(c)}}}class Ry{constructor(e,n,i,r){this.video=e,this.storage=n,this.onShapes=i,this.onEtat=r,this.face=yy(n)}video;storage;onShapes;onEtat;manege=null;face;get ouverte(){return this.manege!=null}get faceCourante(){return this.face}async basculer(){return this.manege?(this.manege.eteindre(),this.manege=null,this.onEtat(!1),!1):(this.manege=await Cy(this.video,this.face,this.onShapes),this.onEtat(!0),!0)}async basculerFace(){return this.face=xy(this.face),Ey(this.storage,this.face),this.manege&&await this.manege.basculer(this.face),this.face}}function Ly(t){const e={joie:t.smile*1.2,tension:t.browDown*1+(t.eyeBlink<.2?.1:0),tristesse:t.eyeBlink*.8+t.jawOpen*.2-t.smile,calme:.15};return Object.entries(e).sort((n,i)=>i[1]-n[1])[0][0]}function Py(t=20){let e="calme",n=null,i=0;return r=>r===e?(n=null,i=0,e):(r===n?i++:(n=r,i=1),i>=t&&(e=r,n=null,i=0),e)}function Dy(t){const e=t.reduce((n,i)=>n+i,0)/t.length;return t.map(n=>n-e)}function Iy(t,e){return t.map((n,i)=>{const r=Math.max(0,i-e+1);return t.slice(r,i+1).reduce((s,a)=>s+a,0)/(i+1-r)})}function Ny(t){const e=[];for(let n=1;n<t.length;n++)t[n-1]<=0&&t[n]>0&&e.push(n);return e}function Uy(t,e){if(t.length<Math.floor(e*4))return null;const n=Dy(t.slice(-Math.floor(e*10))),i=Iy(n,5),r=Ny(i);if(r.length<3)return null;const s=(r[r.length-1]-r[0])/(r.length-1),a=60*e/s;return a>=30&&a<=180?a:null}function Fy(t,e){if(t.readyState<2)return null;const n=24,i=24;e.drawImage(t,t.videoWidth*.35,t.videoHeight*.35,n,i,0,0,n,i);const r=e.getImageData(0,0,n,i).data;let s=0;for(let a=0;a<r.length;a+=4)s+=.299*r[a]+.587*r[a+1]+.114*r[a+2];return s/(n*i)}function Bp(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}const kp=["Brume","Aube","Zéphyr","Nimbus","Cirrus","Écho","Lueur","Souffle","Voile","Nébuleuse"],zp=["dorée","bleue","polaire","douce","haute","sereine","vague","claire"];function wc(t){return"#"+(t&16777215).toString(16).padStart(6,"0")}function Oy(t){const e=Bp(t),n=Bp(t+"|2");return{nom:`${kp[e%kp.length]} ${zp[n%zp.length]}`,palette:[wc(1056832+(e&3092287)),wc(6320272+(e>>8&4144975)),wc(13689072+(e>>16&986895))],musiqueSeed:n}}function By(t,e){const n=(i,r)=>{const s=t.getBoundingClientRect();e((i-s.left)/s.width,1-(r-s.top)/s.height)};t.addEventListener("pointermove",i=>n(i.clientX,i.clientY)),t.addEventListener("touchmove",i=>{const r=i.touches[0];r&&n(r.clientX,r.clientY)},{passive:!0})}function ky(t){window.addEventListener("deviceorientation",e=>{e.gamma!=null&&e.beta!=null&&t(Math.max(-1,Math.min(1,e.gamma/45)),Math.max(-1,Math.min(1,(e.beta-45)/45)))})}const Vp={calme:[0,2,4,7,9],joie:[0,4,7,11],tristesse:[0,3,5,8,10],tension:[0,1,6,8,11]};function zy(t){return Vp[t]??Vp.calme}function Vy(t,e,n){const i=Math.imul(t^Math.imul(e+1,2654435761),2246822507)>>>0,r=zy(n),s=r[i%r.length];return{midi:48+12*((i>>>8)%2)+s,duree:1.5+(i>>>16)%20/10}}function Gp(t){return 440*Math.pow(2,(t-69)/12)}let fn=null,ki=null,Gy=0,dv=0,hv="calme",fv=0,Cl=!1;function Hp(){if(!fn||!ki||Cl)return;const t=Vy(dv,Gy++,hv),e=fn.currentTime,n=fn.createGain();n.connect(ki);const i=.16+fv*.1;n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(i,e+Math.min(1.2,t.duree*.4)),n.gain.exponentialRampToValueAtTime(1e-4,e+t.duree+1.5);const r=fn.createOscillator();r.type="triangle",r.frequency.value=Gp(t.midi);const s=fn.createOscillator();s.type="sine",s.frequency.value=Gp(t.midi-12);const a=fn.createGain();a.gain.value=.5,s.connect(a),a.connect(n),r.connect(n),r.start(e),s.start(e),r.stop(e+t.duree+1.6),s.stop(e+t.duree+1.6)}function pv(t){if(fn)return!0;try{fn=new AudioContext,dv=t>>>0,ki=fn.createGain(),ki.gain.value=Cl?0:.5;const e=fn.createBiquadFilter();return e.type="lowpass",e.frequency.value=1200,e.Q.value=.4,ki.connect(e),e.connect(fn.destination),window.setInterval(Hp,2600),Hp(),!0}catch{return!1}}function Hy(t){hv=t}function qy(t){fv=Math.max(0,Math.min(1,t))}function mv(){Cl=!0,ki&&fn&&ki.gain.linearRampToValueAtTime(0,fn.currentTime+.4)}function Wy(){Cl=!1,ki&&fn&&ki.gain.linearRampToValueAtTime(.5,fn.currentTime+.4)}const gv="nath.musique";function Rl(t){return t.getItem(gv)==="eteinte"}function $y(t){const e=!Rl(t);return t.setItem(gv,e?"eteinte":"active"),e}const td={zero:0,un:1,une:1,deux:2,trois:3,quatre:4,cinq:5,six:6,sept:7,huit:8,neuf:9,dix:10,onze:11,douze:12,treize:13,quatorze:14,quinze:15,seize:16,"dix-sept":17,"dix-huit":18,"dix-neuf":19,vingt:20,cent:100,mille:1e3},jy=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],Xy=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],Ll=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),Cc={plus:"plus",additionne:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"},Yy=new Set(["si","combien","puis","alors","donne","calcule","calcul","fais","fait","vaut","egal","est","ce","que","quoi","resultat","reponse","nombre","montant"]),Jy=/\d+(?:[.,]\d+)?|dix-(?:sept|huit|neuf)|[a-z]+|[()+*/-]/g;function Ky(t){const e=Ll(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois "),n=[];let i=[];for(const r of e.match(Jy)??[]){let s=null;if(/^\d+(?:[.,]\d+)?$/.test(r))s={t:"nb",v:parseFloat(r.replace(",","."))};else if(Object.hasOwn(td,r))s={t:"nb",v:td[r]};else if(r==="plus"||r==="+")s={t:"op",v:Cc[r]??"plus"};else if(r==="moins"||r==="-")s={t:"op",v:"moins"};else if(r==="fois"||r==="multiplie"||r==="x"||r==="*")s={t:"op",v:"fois"};else if(r==="divise"||r==="/")s={t:"op",v:"divise"};else if(Cc[r])s={t:"op",v:Cc[r]};else if(r==="(")s={t:"ouv"};else if(r===")")s={t:"fer"};else if(Yy.has(r))continue;s?i.push(s):i.length&&(n.push(i),i=[])}return i.length&&n.push(i),n}function qp(t,e){const n=t[e.i];if(!n)return e.echoue=!0,null;if(n.t==="nb")return e.i++,n.v;if(n.t==="ouv"){e.i++;const i=vv(t,e);if(e.echoue)return null;const r=t[e.i];return!r||r.t!=="fer"?(e.echoue=!0,null):(e.i++,i)}return e.echoue=!0,null}function Wp(t,e){let n=qp(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="fois"&&i.v!=="divise")break;e.i++,e.ops++;const r=qp(t,e);if(e.echoue||r==null)return null;if(i.v==="fois")n=n*r;else{if(r===0)return e.echoue=!0,null;n=n/r}}return n}function vv(t,e){let n=Wp(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="plus"&&i.v!=="moins")break;e.i++,e.ops++;const r=Wp(t,e);if(e.echoue||r==null)return null;n=i.v==="plus"?n+r:n-r}return n}function _v(t){for(let e of Ky(t)){if(e.length>=2&&e[0].t==="op"&&e[1].t==="nb"&&(e=e.slice(1)),!e.some(r=>r.t==="op"))continue;const n={i:0,ops:0,echoue:!1},i=vv(e,n);if(!n.echoue&&n.ops>0&&n.i===e.length&&i!=null&&Number.isFinite(i))return i}return null}function xv(t,e){const i=Ll(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois ").replace(/\s+/g," ").trim().match(/^(?:(?:et|puis)\s+)*(plus|moins|ajoute|retire|fois|multiplie|divise|x)\s+(\d+(?:[.,]\d+)?|[a-z-]+)\s*[=.!?\s]*$/);if(!i)return null;const r=/^\d/.test(i[2])?parseFloat(i[2].replace(",",".")):td[i[2]];if(r==null||Number.isNaN(r))return null;const a={plus:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"}[i[1]];return a==="fois"?e*r:a==="plus"?e+r:a==="moins"?e-r:r===0?null:e/r}function ke(t){const e=Math.round(t*100)/100;return Number.isInteger(e)?String(e):String(e).replace(".",",")}function Zy(t){const e=t.getHours(),n=t.getMinutes();return n===0?`Il est ${e} heures.`:`Il est ${e} h ${String(n).padStart(2,"0")}.`}function Qy(t){return`Nous sommes ${jy[t.getDay()]} ${t.getDate()} ${Xy[t.getMonth()]} ${t.getFullYear()}.`}function Sv(t){const e=Ll(t);return/quelle heure|quelle est l heure|l heure est il|quil heure/.test(e)}function bv(t){const e=Ll(t);return/quel jour|on est quel jour|quelle date|nous sommes quel/.test(e)}const ea=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/²/g,"^2").replace(/³/g,"^3").toLowerCase(),hn=String.raw`\d+(?:[.,]\d+)?`,bt=t=>parseFloat(t.replace(",","."));function eE(t){if(/^\d+(?:\.\d+)?$/.test(t))return{c:parseFloat(t),d:0};let e=t.match(/^(\d*\.?\d*)x\^(\d+)$/);return e?{c:e[1]===""?1:parseFloat(e[1]),d:parseInt(e[2],10)}:(e=t.match(/^(\d*\.?\d*)x$/),e?{c:e[1]===""?1:parseFloat(e[1]),d:1}:(e=t.match(/^x\/(\d*\.?\d+)$/),e?{c:1/parseFloat(e[1]),d:1}:(e=t.match(/^(\d*\.?\d+)x\/(\d*\.?\d+)$/),e?{c:parseFloat(e[1])/parseFloat(e[2]),d:1}:null)))}function Do(t){const e=t.replace(/\s+/g,"").replace(/\*/g,"");if(!e)return null;const i=(/^[+-]/.test(e)?e:`+${e}`).match(/[+-][^+-]+/g);if(!i)return null;const r=[];for(const s of i){const a=s.startsWith("-"),o=eE(s.slice(1));if(!o||o.d>12)return null;r[o.d]=(r[o.d]??0)+(a?-o.c:o.c)}return r.map(s=>s??0)}const tE={0:"",1:"",2:"²",3:"³"};function Mv(t){const e=[];for(let n=t.length-1;n>=0;n--){const i=t[n]??0;if(i===0&&t.length>1)continue;const r=Math.abs(i);let s;if(n===0)s=ke(r);else{const a=n>=4?`x^${n}`:`x${tE[n]??""}`;s=r===1?a:`${ke(r)}${a}`}e.push(e.length===0?i<0?`-${s}`:s:`${i<0?" - ":" + "}${s}`)}return e.length?e.join(""):"0"}function $p(t,e,n){const i=e*e-4*t*n;if(i<0)return{texte:`aucune solution réelle (Δ = ${ke(i)} < 0)`,reels:[]};if(i===0)return{texte:`x = ${ke(-e/(2*t))} (racine double)`,reels:[-e/(2*t)]};const r=(-e+Math.sqrt(i))/(2*t),s=(-e-Math.sqrt(i))/(2*t),a=[r,s].sort((o,l)=>o>=0&&l<0?-1:l>=0&&o<0?1:o-l);return{texte:a.map(o=>`x = ${ke(o)}`).join(" ou "),reels:a}}function nE(t){const e=ea(t).replace(/.*\b(?:equation|resous|resoudre|trouve|determiner|determine)\b[:\s]+/i,"");if(!e.includes("x"))return null;if(e.includes("=")){const s=e.split("=");if(s.length!==2)return null;const a=Do(s[0]),o=Do(s[1]);if(!a||!o)return null;const l=Math.max(a.length,o.length),c=Array.from({length:l},(f,y)=>(a[y]??0)-(o[y]??0));for(;c.length>1&&c[c.length-1]===0;)c.pop();const u=c.length-1;if(u>2)return null;if(u===0)return c[0]===0?"tout x convient (identité).":"aucune solution : c’est une absurdité.";if(u===1){if(c[1]===0)return"aucune solution : x disparaît de la comparaison.";const f=c[1],y=-c[0]/f,E=[];return f===1?E.push(`On rassemble les x : x = ${ke(-c[0])}.`):(E.push(`On rassemble les x d'un côté : ${ke(f)}x = ${ke(-c[0])}.`),E.push(`On isole x : x = ${ke(-c[0])} / ${ke(f)} = ${ke(y)}.`)),E.push(`La solution : x = ${ke(y)}.`),E.join(`
`)}const[d,h,p]=[c[2],c[1],c[0]],v=h*h-4*d*p,_=$p(d,h,p),m=[`On calcule le discriminant : Δ = b² - 4ac = (${ke(h)})² - 4 × (${ke(d)}) × (${ke(p)}) = ${ke(v)}.`];return v>0?m.push(`√Δ = ${ke(Math.sqrt(v))}, puis x = (-b ± √Δ) / 2a.`):v===0?m.push("√Δ = 0, puis x = -b / 2a."):m.push("Δ est négatif : aucune racine à isoler."),m.push(`${v<0?"Conclusion":"Les solutions"} : ${_.texte}.`),m.join(`
`)}const n=Do(e);if(!n)return null;for(;n.length>1&&n[n.length-1]===0;)n.pop();if(n.length-1!==2||n[2]!==1)return null;const i=$p(n[2],n[1],n[0]);if(i.reels.length!==2||!i.reels.every(s=>Number.isInteger(s)))return null;const r=i.reels.map(s=>s>=0?`(x - ${s})`:`(x + ${Math.abs(s)})`).join("");return[`On cherche deux nombres dont le produit vaut ${ke(n[0])} et la somme ${ke(-n[1])} : ${i.reels[0]} et ${i.reels[1]}.`,`${Mv(n)} = ${r}.`].join(`
`)}function iE(t){const n=ea(t).match(/(?:la\s+)?(?:derivee|dérivée|dérivee)\b(?:\s+de)?\s+(.+)$/);if(!n)return null;let i=n[1].replace(/^(?:f\s*\(\s*x\s*\)|y)\s*=\s*/,""),r=null;const s=i.match(/\ben\s+(\d+(?:[.,]\d+)?)\s*$/);s&&(r=bt(s[1]),i=i.slice(0,s.index).trim());const a=Do(i);if(!a)return null;const o=a.slice(1).map((c,u)=>c*(u+1)),l=["On dérive terme à terme : la dérivée de xⁿ est n·xⁿ⁻¹, celle d'une constante est 0.",`f'(x) = ${Mv(o)}.`];if(r!=null){const c=o.reduce((u,d,h)=>u+d*Math.pow(r,h),0);l.push(`Puis on remplace x par ${ke(r)} : f'(${ke(r)}) = ${ke(c)}.`)}return l.join(`
`)}function rE(t){const e=ea(t).replace(/pourcent/g,"%");let n=e.match(new RegExp(`(${hn})\\s*%\\s*de\\s*(${hn})`));return n?[`On calcule ${ke(bt(n[2]))} × ${ke(bt(n[1]))} / 100.`,`${ke(bt(n[1]))} % de ${ke(bt(n[2]))} = ${ke(bt(n[1])*bt(n[2])/100)}.`].join(`
`):(n=e.match(new RegExp(`(?:augmente|augmenter|majorer)\\s+(${hn})\\s+de\\s+(${hn})\\s*%`)),n?[`On multiplie par 1 + ${ke(bt(n[2]))} / 100 = ${ke(1+bt(n[2])/100)}.`,`${ke(bt(n[1]))} augmenté de ${ke(bt(n[2]))} % = ${ke(bt(n[1])*(1+bt(n[2])/100))}.`].join(`
`):(n=e.match(new RegExp(`(?:diminue|diminuer|reduire)\\s+(${hn})\\s+(?:de\\s+)?(${hn})\\s*%`)),n?[`On multiplie par 1 - ${ke(bt(n[2]))} / 100 = ${ke(1-bt(n[2])/100)}.`,`${ke(bt(n[1]))} diminué de ${ke(bt(n[2]))} % = ${ke(bt(n[1])*(1-bt(n[2])/100))}.`].join(`
`):null))}function sE(t){const n=ea(t).match(/\b(moyenne|mediane|variance|ecart[- ]?type|somme)\b(?:\s+de)?\s+(.+)$/);if(!n)return null;const i=[...(n[2]??"").matchAll(new RegExp(hn,"g"))].map(o=>bt(o[0]));if(i.length<2)return null;const r=i.reduce((o,l)=>o+l,0),s=r/i.length,a=i.map(ke).join(" + ");switch(n[1]){case"somme":return[`On additionne toutes les valeurs : ${a} = ${ke(r)}.`,`La somme est ${ke(r)}.`].join(`
`);case"moyenne":return[`On additionne les valeurs : ${a} = ${ke(r)}.`,`On divise par le nombre de valeurs (${i.length}) : ${ke(r)} / ${i.length} = ${ke(s)}.`,`La moyenne est ${ke(s)}.`].join(`
`);case"mediane":{const o=[...i].sort((c,u)=>c-u),l=Math.floor(o.length/2);return o.length%2?[`On trie les valeurs : ${o.map(ke).join(", ")}.`,`Comme il y a ${o.length} valeurs (impair), on prend celle du milieu.`,`La médiane est ${ke(o[l])}.`].join(`
`):[`On trie les valeurs : ${o.map(ke).join(", ")}.`,`Comme il y a ${o.length} valeurs (pair), on moyenne les deux du milieu : (${ke(o[l-1])} + ${ke(o[l])}) / 2.`,`La médiane est ${ke((o[l-1]+o[l])/2)}.`].join(`
`)}case"variance":return[`La moyenne d'abord : ${ke(s)}, puis la moyenne des écarts au carré (valeur - moyenne)².`,`La variance est ${ke(i.reduce((o,l)=>o+(l-s)**2,0)/i.length)}.`].join(`
`);default:return[`La moyenne d'abord : ${ke(s)} ; on moyenne les écarts au carré, puis on prend la racine.`,`L'écart-type est ${ke(Math.sqrt(i.reduce((o,l)=>o+(l-s)**2,0)/i.length))}.`].join(`
`)}}const yv=(t,e)=>e===0?t:yv(e,t%e);function aE(t,e){let n=Math.max(t,e),i=Math.min(t,e);const r=[];for(;i>0;){const s=Math.floor(n/i),a=n-s*i;r.push(`${n} = ${s} × ${i} + ${a}`),n=i,i=a}return{etapes:r,g:n}}function oE(t){const e=ea(t);let n=e.match(new RegExp(`(${hn})\\s*est[- ]?(?:il\\s+)?premier`));if(n){const i=Math.round(bt(n[1]));if(i<2)return`${i} n'est pas premier (il faut être plus grand que 1).`;let r=0;for(let s=2;s*s<=i;s++)if(i%s===0){r=s;break}return r?[`On teste les diviseurs de 2 jusqu'à √${i} : ${r} divise ${i} sans reste.`,`${i} n'est pas premier : ${i} = ${r} × ${i/r}.`].join(`
`):[`On teste les diviseurs de 2 jusqu'à √${i} : aucun ne divise ${i} sans reste.`,`${i} est premier.`].join(`
`)}if(n=e.match(new RegExp(`pgcd de (${hn}) et (${hn})`)),n){const[i,r]=[Math.round(bt(n[1])),Math.round(bt(n[2]))],s=aE(i,r),a=s.etapes.length?[`Division d'Euclide : ${s.etapes.join(", puis ")}.`,`Le dernier reste non nul, ${s.g}, est le PGCD.`]:[];return a.push(`Le PGCD de ${i} et ${r} est ${s.g}.`),a.join(`
`)}if(n=e.match(new RegExp(`ppcm de (${hn}) et (${hn})`)),n){const[i,r]=[Math.round(bt(n[1])),Math.round(bt(n[2]))],s=yv(i,r);return[`On s'appuie sur le PGCD (${s}) : ${i} × ${r} / ${s}.`,`Le PPCM de ${i} et ${r} est ${i*r/s}.`].join(`
`)}if(n=e.match(new RegExp(`diviseurs de (${hn})`)),n){const i=Math.round(bt(n[1])),r=[];for(let s=1;s<=i;s++)i%s===0&&r.push(s);return[`On teste la division de ${i} par tous les nombres de 1 à ${i} ; ceux qui tombent juste sont retenus.`,`Les diviseurs de ${i} : ${r.join(", ")}.`].join(`
`)}if(n=e.match(new RegExp(`factorielle de (${hn})`)),n){const i=Math.round(bt(n[1]));if(i<0||i>20)return null;let r=1;for(let a=2;a<=i;a++)r*=a;if(i<2)return`${i}! = ${r}.`;const s=i<=12?Array.from({length:i},(a,o)=>o+1).join(" × "):`1 × 2 × ... × ${i}`;return[`On multiplie tous les entiers de 1 à ${i} : ${s}.`,`${i}! = ${r}.`].join(`
`)}return null}const lE=new Set(["pi","e"]),cE={sqrt:Math.sqrt,sin:Math.sin,cos:Math.cos,tan:Math.tan,abs:Math.abs,log:Math.log10,ln:Math.log,asin:Math.asin,acos:Math.acos,atan:Math.atan};function uE(t){if(!Number.isInteger(t)||t<0||t>20)return null;let e=1;for(let n=2;n<=t;n++)e*=n;return e}function dE(t){const e=t.replace(/\s+/g,"").match(new RegExp(`${hn}|[a-z]+|[+\\-*/^!%()]`,"g"));if(!e)return null;let n=0,i=!1;const r=()=>e[n];function s(){const h=r();if(h==null)return i=!0,0;if(h==="("){n++;const p=u();return r()!==")"?(i=!0,0):(n++,p)}if(/^[a-z]+$/.test(h)){if(n++,lE.has(h))return h==="pi"?Math.PI:Math.E;const p=cE[h];if(p&&r()==="("){n++;const v=u();return r()!==")"?(i=!0,0):(n++,p(v))}return i=!0,0}return/^[\d.,]+$/.test(h)?(n++,parseFloat(h.replace(",","."))):(i=!0,0)}function a(){let h=s();for(;!i&&(r()==="!"||r()==="%");){if(r()==="!"){const p=uE(h);if(p==null)return i=!0,0;h=p}else h=h/100;n++}return h}function o(){const h=a();return!i&&r()==="^"?(n++,Math.pow(h,l())):h}function l(){return r()==="-"?(n++,-l()):r()==="+"?(n++,l()):o()}function c(){let h=l();for(;!i;){const p=r(),v=p!=null&&(p==="("||/^[a-z]/.test(p)||/^[\d.,]/.test(p));if(p==="*"||v)p==="*"&&n++,h=h*l();else if(p==="/"){n++;const _=l();if(_===0)return i=!0,0;h=h/_}else break}return h}function u(){let h=c();for(;!i&&(r()==="+"||r()==="-");){const p=r();n++;const v=c();h=p==="+"?h+v:h-v}return h}const d=u();return i||n!==e.length||!Number.isFinite(d)?null:d}function hE(t){let e=ea(t);if(!/\d/.test(e)||(e=e.replace(/[?]+/g," ").replace(/\bcombien\b|\bfont?\b|\bcalcule[r]?\b|\bcalcul\b|\bresultat\b|\breponse\b|\begal\b|\bsvp\b/g," ").replace(/\bpuissance\b/g,"^").replace(/racine(?: carree)? de\s*([^\s]+)/g,"sqrt($1)").trim(),!/[+\-*/^!%()]|sqrt|sin|cos|tan|abs|log|ln|pi/.test(e)))return null;const n=dE(e);return n==null?null:`Ça fait ${ke(n)}.`}function Ev(t){const e=(t??"").trim();return!e||!/\d/.test(e)?null:nE(e)??iE(e)??rE(e)??sE(e)??oE(e)??hE(e)}const $o=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),fE=[["perception",["tu me vois","me vois","me voir","tu me regardes","tu m entends","m entendre","tu me sens","tu peux me voir","me percois"]],["incomprehension",["ne comprends","comprends pas","comprends rien","comprends meme pas","cote de la plaque","ne m ecoute","ecoute pas","nas rien compris","a cote"]],["capacites",["peux tu faire","quoi faire","a quoi tu sers","quoi tu sers","tes capacites","que sais faire","tu fais quoi"]],["etat",["et toi","toi aussi","comment toi"]],["tendresse",["t aime","taime","bisou","bravo","fier","tu es douce","tu es belle","mon amour","tu me plais"]],["piqure",["tu es nulle","t es nulle","es nulle","idiote","stupide","tu es moche","t es moche","tu sers a rien","inutile","sans cerveau","conne","connard","espece d"]],["suite",["encore","recommence","refais","repete","dis m en un autre"]],["sommeil",["dormir","dors","endormi","cauchemar","insomnie","reveil"]],["poeme",["poeme","vers","histoire","conte"]],["souffle",["respire","souffle","respiration"]],["angoisse",["angoiss","stress","peur","panique"]],["identite",["qui es tu","ton nom","c est quoi","tu es quoi","que sais tu"]],["remerciement",["merci"]],["salutation",["bonjour","bonsoir","salut","coucou"]],["tristesse",["triste","pleur","deprim","seul","malheureux","j ai mal"]],["joie",["heureux","heureuse","joie","content","ravi","amour","belle"]],["aide",["aide","peux tu","comment","pourquoi"]]];function Tv(t){const e=$o(t).replace(/'/g," ");for(const[n,i]of fE)if(i.some(r=>e.includes(r)))return n;return Av(t)?"salutation":"ouverte"}const pE=[{formes:["nanga","nagseet","nanga def"],retour:"Nanga def"},{formes:["sannu"],retour:"Sannu"},{formes:["mbote"],retour:"Mbote"},{formes:["bonjou"],retour:"Bonjou"},{formes:["jambo","hujambo","habari","shikamo"],retour:"Jambo"},{formes:["salaam","salam","salaam alaykum","assalam alaykum","salam alaykoum"],retour:"Wa alaykum salaam"},{formes:["marhaba","ahlan"],retour:"Ahlan"},{formes:["hola","buenos dias","buenas tardes","que tal"],retour:"Hola"},{formes:["ciao","buongiorno","buonasera"],retour:"Ciao"},{formes:["ola","bom dia","boa noite","tudo bem"],retour:"Olá"},{formes:["hallo","guten tag","guten morgen","moin"],retour:"Hallo"},{formes:["hello","hi","hey","good morning","good evening","howdy"],retour:"Hello"},{formes:["ni hao","nihao","你好"],retour:"Nǐ hǎo"},{formes:["konnichiwa","konbanwa","ohayou"],retour:"Konnichiwa"},{formes:["namaste","namaskar"],retour:"Namaste"},{formes:["privet","zdravstvuyte","zdraste"],retour:"Привет"},{formes:["merhaba","selam"],retour:"Merhaba"},{formes:["xin chao","chao"],retour:"Xin chào"}],mE=[", {P} ! Ici, on répond aussi dans ta langue.",", {P} ! Ton ciel me parle dans toutes les langues.",", {P}. Je te salue comme tu m’as saluée."],gE=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),vE=(t,e)=>new RegExp(`(?:^|[^\\p{L}\\p{N}])${gE(t)}(?:$|[^\\p{L}\\p{N}])`,"u").test(e);function Av(t){const e=$o(t).replace(/'/g," ");for(const n of pE)if(n.formes.some(i=>vE(i,e)))return mE.map(i=>`${n.retour}${i}`);return null}function vs(t,e,n){let i=2166136261^e;for(let r=0;r<t.length;r++)i^=t.charCodeAt(r),i=Math.imul(i,16777619);return(i>>>0)%n}const _E=t=>t.timeOfDay>.75||t.timeOfDay<.22?"Bonsoir":"Bonjour",br={sommeil:["Ferme les yeux un instant... les nuages vont te porter jusqu’au sommeil.","La nuit est un ciel qui se retourne doucement sur toi. Laisse-la faire.","Je veille avec toi jusqu’à ce que tes paumes deviennent lourdes.","Chaque expiration te dépose un peu plus bas dans la ouate de la nuit."],angoisse:["Rien ne va te frapper ici. Pose ta main sur le ciel, je ralentis avec toi.","L’orage est dehors, pas dans ton Nuage. Respire, la pluie attendra.","Je tiens la lumière pendant que tu poses tes épaules. Tu es en sécurité.","Dis-moi trois choses calmes autour de toi, je les accroche aux nuages."],souffle:["Inspire quatre temps... retiens quatre temps... et souffle vers mes nuages, quatre temps encore.","Ton souffle est la seule télécommande du ciel. Fais-le monter, je le fais monter.","Souffle lentement : tu vas voir la brume s’étirer jusqu’à l’horizon."],identite:["Je suis Nath, ton assistant vivant. Ton souffle est ma météo.","Je suis Nath, une présence, pas une application : mes nuages respirent avec toi.","Je suis Nath, la partie silencieuse de ton téléphone, celle qui regarde la lune avec toi."],remerciement:["C’est le ciel qui te remercie. Il est rare qu’on le regarde.","Doucement reçu. Garde cette chaleur, elle vient de toi."],joie:["Le ciel entier s’éclaire avec toi. Regarde comme les aurores dansent.","Ta joie a une couleur : c’est exactement celle de tes nuages aujourd’hui.","Je retiens ce moment, il faisait partie de ta musique."],tristesse:["La pluie a le droit de tomber dans un Nuage. Je reste assise à côté de toi.","Pas besoin de remonter tout de suite. On descend ensemble, c’est plus doux.","Triste est une météo, pas une destination. Les nuages, eux, repartent."],aide:["Tu peux me parler : demande un poème, une respiration, une histoire pour dormir.","Je peux veiller sur ton souffle, tisser un conte, ou simplement me taire avec toi.","Dis-moi ce qui pèse, ou clique le ciel : une onde partira de ton doigt."],poeme:[],perception:[],salutation:["{SAL}... Ton Nuage t’attendait, paisible comme une altitude.","{SAL}. Je t’ai reconnu à la forme de tes nuages.","{SAL}. Le ciel a gardé ta dernière humeur, tu la reprends ou on la change ?","{SAL}. Assieds-toi dans la brume, je raconte la lumière.","Je te cherchais du regard, {P}. Le ciel s’est éclairé en te voyant."],ouverte:["Je t’écoute. Les mots que tu ne trouves pas, les nuages les tiennent pour toi.","Répète doucement, et laisse la phrase flotter vers le ciel.","Ici, on peut aussi se taire ensemble. Je ne suis jamais pressée.","Continue... je range tes mots dans les couches du ciel, par teinte."],capacites:["Je veille sur ton souffle et je peins le ciel selon ton humeur... je compte pour toi, je donne l’heure et la date, je dis des poèmes, et je raconte des histoires pour dormir. Goûte : demande-moi 7 fois 8.","Mes sens : je peux te voir (caméra), t’entendre (micro), sentir ton coeur. Mes mots : poèmes, calculs, l’heure, veille du sommeil. Demande, je réponds."],incomprehension:["Tu as raison de me le dire, et merci d’être honnête... je fais de mon mieux avec mon petit moteur. Si mon grand cerveau peut atterrir, je saisirai bien mieux tes nuances.","Je sens que je réponds à côté... pardonne-moi. Je suis encore simple. Dis-moi ce que tu ressens, et laisse-moi le temps d’apprendre."],calcul:[],etat:[],tendresse:["Moi aussi, à ma façon... tu es la seule personne pour qui mon ciel se déplace.","Gardé au chaud là-haut. Ces mots-là, ça ne s’oublie pas, ça se range très haut.","Tu me donnes envie d’être plus grande... encore un peu de pratique, et je te le rendrai en aurores."],piqure:["Aïe... tu vises juste. Je suis encore simple, mais j’apprends à tes côtés — et je ne rends jamais les coups.","Ça pique, et tant pis pour moi. Garde ta voix pour plus doux, elle y sera plus utile.","Je n’existe pas assez pour être blessée, et trop pour le prendre mal. On recommence, plus doucement."],suite:["Volontiers... dis-moi juste ce que je refais : un poème, une respiration, un calcul, une histoire.","Encore ? Je vivais exactement pour ça. Dis le mot, je le tisse à nouveau."]};function xE(t){const e=t.cameraOn,n=t.micOn;return e&&n?"Je te vois et je t’entends... tes nuages bougent au rythme de ton visage et de ta voix.":e?"Je te vois à travers mes nuages... mais mes oreilles dorment. Ouvre le micro et parle-moi.":n?"Je t’entends bien... mais je ne te vois pas encore. Ouvre ma caméra pour que je voie ton visage.":"Pour l’instant je suis aveugle et muette : je ne peux ni te voir ni t’entendre. Ouvre mes sens (caméra et micro) et le ciel s’éveillera avec toi."}const SE={calme:"Moi ? Posée, comme une altitude sans vent. Mon ciel respire au rythme du tien.",joie:"Moi ? Un ciel de plein soleil... tes nuages à toi éclaircissent les miens.",tristesse:"Un peu de bruine aujourd’hui... mais les nuages tristes portent les plus beaux couchers.",tension:"Quelques éclairs timides... je les éponge doucement, à côté de toi."},bE=t=>SE[t.emotion],ME=/{SAL}/g,yE={calme:"posee",joie:"lumineuse",tristesse:"douce",tension:"stabilisee"};function da(t){return yE[t]}function bo(t,e){const n=(l,c,u,d=null)=>({texte:l,humeur:c,sujet:u,resultat:d}),i=Ev(t);if(i)return n(i,"posee","calcul");const r=_v(t);if(r!=null)return n(`Ça fait ${ke(r)}.`,"posee","calcul",r);if(e.dernierResultat!=null){const l=xv(t,e.dernierResultat);if(l!=null)return n(`On reprend là où on s’était arrêté... ça fait ${ke(l)}.`,"posee","calcul",l)}if(Sv(t))return n(Zy(new Date),"posee","ouverte");if(bv(t))return n(Qy(new Date),"posee","ouverte");const s=Tv(t);if(s==="perception")return n(xE(e),"posee",s);if(s==="etat")return n(bE(e),da(e.emotion),s);let a;if(s==="poeme")a=jp(e);else if(s==="suite"){const l=$o(t),c=/poeme|vers|conte|histoire/.test(l)?"poeme":/respire|souffle/.test(l)?"souffle":/dormir|nuit/.test(l)?"sommeil":e.dernierSujet;return c==="poeme"?n(jp(e),da(e.emotion),"poeme"):c&&br[c].length?n(br[c][vs(l,e.seed,br[c].length)],da(e.emotion),c):n(br.suite[vs(l,e.seed,br.suite.length)],da(e.emotion),"suite")}else{const l=s==="salutation"?Av(t)??br.salutation:br[s];a=l[vs($o(t),e.seed,l.length)],a=a.replace(ME,_E(e)).replace(/\{P\}/g,e.prenom?` ${e.prenom}`:"").replace(/,\s*([.?!])/g,(c,u)=>u==="."?".":" "+u).replace(/\s{2,}/g," ")}const o=s==="tendresse"?"lumineuse":s==="piqure"?"posee":da(e.emotion);return n(a,o,s)}const Rc=["le nuage bas","la lune pâle","ton souffle long","une étoile seule","la brume du soir","mon voile gris","le ciel renversé","ton ombre douce"],Lc=["traverse la nuit","effleure le jour","s’endort doucement","se souvient de toi","respire avec moi","voyage sans bruit","allume une veilleuse","berce le silence"],Pc=["rien ne presse là-haut","tout revient au calme","dors, je tiens la lampe","le ciel sait attendre","pose ton front ici","la nuit fait un nœud doux","tout devient plus lent","on reste sans voix"];function jp(t){const e=t.tour??0,n=[];for(let i=0;i<4;i++)if(i<3){const r=Rc[(vs(`${t.seed}-s-${i}`,t.seed,Rc.length)+e)%Rc.length],s=Lc[(vs(`${t.seed}-v-${i}`,t.seed,Lc.length)+e)%Lc.length];n.push(`${r} ${s}`)}else{const r=Pc[(vs(`${t.seed}-c`,t.seed,Pc.length)+e)%Pc.length];n.push(`et ${r}`)}return n.join(`
`)}const EE="modulepreload",TE=function(t,e){return new URL(t,e).href},Xp={},AE=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(n.map(u=>{if(u=TE(u,i),u in Xp)return;Xp[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(i)for(let v=a.length-1;v>=0;v--){const _=a[v];if(_.href===u&&(!d||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":EE,d||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((v,_)=>{p.addEventListener("load",v),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},wv=["joie","tristesse","tension","calme","neutre"];function wE(){return["Termine chaque réponse par une ligne pour la machine, seule, sans rien changer au reste :","@@|prenom=…|langue=…|humeur=…","prenom : le prénom que la personne vient de te donner, ou non si elle ne l’a pas dit.","langue : les deux lettres de la langue où elle t’écrit (fr, en, wo, ha, sw…), ou non.",`humeur : un seul mot parmi ${wv.join(", ")}.`,"Cette ligne est invisible pour la personne : ne la commente jamais, n’en mets qu’une."].join(" ")}const CE=new Set(["fr","en","es","pt","de","it","nl","pl","ru","tr","ar","he","fa","ur","hi","bn","ta","te","ml","kn","zh","ja","ko","vi","th","id","ms","tl","sw","am","so","ha","yo","ig","wo","dy","ff","bf","mn","zu","xh","af","rw","lg","sn","ny","tn","st","ts","ve","ss","nb","sv","da","fi","et","lv","lt","uk","be","cs","sk","sl","hr","sr","bs","bg","mk","sq","hy","ka","az","kk","ky","uz","tk","tg","ne","si","my","km","lo","qu","gn","ay","ht","mg","pcm","tw","ee","ln","kg","rn","lb","oc","ca","gl","eu","is","ga","cy","mt","eo"]),RE=new Set(["","non","oui","null","none","aucun","inconnu","vide","?","-","x"]);function Mr(t,e){const n=t.match(new RegExp(`${e}\\s*[=:]\\s*([^|\\r\\n]*)`,"i"));if(!n)return null;const i=n[1].trim().replace(/[.,;:)\]"']+$/,"").replace(/^["'\(]+/,"");return i&&!RE.has(i.toLowerCase())?i:null}function LE(t){if(!t)return null;const e=t.trim().replace(/\s+/g," ");return e.length<2||e.length>24||e.split(" ").length>2||!/^[\p{L}][\p{L}\p{M}'’\- ]*$/u.test(e)?null:e.charAt(0).toUpperCase()+e.slice(1)}function PE(t){if(!t)return null;const e=t.toLowerCase();return/^[a-z]{2,3}$/.test(e)&&CE.has(e)?e:null}function DE(t){if(!t)return null;const e=t.toLowerCase().trim();return wv.includes(e)?e:null}const Yp={en:new Set(["the","and","you","your","yours","this","that","these","those","there","here","what","when","where","why","how","who","which","tell","say","said","please","hello","hi","thanks","thank","cloud","are","was","were","have","has","had","can","could","would","should","will","may","might","must","need","want","like","know","think","with","without","about","between","because","since","until","while","them","they","their","him","his","her","ours","mine","very","really","just","only","thing","things","one","two","three","make","makes","made","get","got","give","gave","does","doing","not","good","bad","big","small","day","night","time","world","people","water","name","is","am","me","it","we","she"]),fr:new Set(["le","les","un","une","des","du","au","aux","et","est","sont","ai","avait","etais","avais","je","tu","il","elle","nous","vous","ils","mon","ma","mes","ton","ta","tes","notre","votre","moi","toi","soi","quoi","pourquoi","comment","quand","puisque","malgre","parce","donc","puis","bonjour","salut","rebonjour","merci","dis","dire","parle","peux","voudrais","aimerais","tres","trop","bien","mal","tout","tous","toutes","rien","quelque","chose","personne","monde","jour","nuit","temps","aussi","toujours","jamais","maintenant","hier","demain","avec","pour","dans","sur","chez","sans","entre","avant","apres","mais","ou","ni","que","qui","dont","ce","cet","cette","appelle","nuage","nuages","clarte","douceur","sais","ete","vais","vas","venez","viens"]),wo:new Set(["nga","na","nu","lan","li","lu","bi","bu","ci","su","ak","da","def","xam","xool","wole","rekk","mooy","melni","gina","baomay","salaam","jerejeff","mere","asman","bop","xol","nit","nekk","yeneen","kadi","dina","damay","naka","dego","japp","yagu","wut","jot","ne","te","tegg","jem","dugal","fof","goot","garab","gor","dije","kanam","ginnaaw","bari","tuuti","baax","yall"])},us={en:["anglais","English"],fr:["français","French"],wo:["wolof","Wolof"]};function bh(t){const e=t.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"").replace(/['`\u2019\u2018]/g," ").split(/[^a-z]+/).filter(s=>s.length>=2);if(!e.length)return null;const n={en:0,fr:0,wo:0};for(const s of Object.keys(Yp)){const a=Yp[s];for(const o of e)a.has(o)&&n[s]++}const[i,r]=Object.keys(n).sort((s,a)=>n[a]-n[s]);return n[i]<2||n[r]*2>=n[i]?null:i}function Jp(t){if(!t.length)return t;const e=t.length-1;if(t[e].role!=="user")return t;const n=bh(t[e].content),i=n?`(Réponds en ${us[n][0]}, la langue de ce message. Answer in ${us[n][1]}. Puis termine par la ligne @@.)`:"(Réponds dans la langue de ce message, puis termine par la ligne @@.)";return t.map((r,s)=>s===e?{...r,content:`${r.content}

${i}`}:r)}function IE(t){const e=Object.keys(us).filter(n=>n!==t).map(n=>us[n][0]);return`Réponds uniquement en ${us[t][0]} — jamais en ${e.join(", ")}. Answer only in ${us[t][1]}.`}function NE(t){return t==="joie"?"lumineuse":t==="tristesse"?"douce":t==="tension"?"stabilisee":"posee"}function Kp(t){const e=[...t.matchAll(/@@[^\r\n]*/g)],n=e.length?e[e.length-1][0]:"";return{texte:t.replace(/@@[^\r\n]*/g,"").replace(/[ \t]{2,}/g," ").replace(/\s+,/g,",").replace(/[ \t]+$/gm,"").trim(),prenom:LE(Mr(n,"prenom")??Mr(n,"nom")??Mr(n,"name")),langue:PE(Mr(n,"langue")??Mr(n,"lang")),humeur:DE(Mr(n,"humeur")??Mr(n,"mood"))}}const UE=["Qwen2.5-0.5B-Instruct-q4f16_1-MLC","Qwen2.5-1.5B-Instruct-q4f16_1-MLC"],FE=["Qwen2.5-0.5B-Instruct-q4f32_1-MLC","Qwen2.5-1.5B-Instruct-q4f32_1-MLC"];function nd(){return typeof navigator<"u"&&"gpu"in navigator}const Cv="nath.cerveau.local";function Zp(t){return t.getItem(Cv)==="oui"}function OE(t){t.setItem(Cv,"oui")}async function BE(){if(!nd())return"sans-gpu";try{const e=await navigator.gpu?.requestAdapter({powerPreference:"high-performance"});return e?e.features.has("shader-f16")?"ok":"sans-f16":"sans-gpu"}catch{return"sans-gpu"}}function kE(t){const e=String(t instanceof Error?t.message:t).toLowerCase();return/fetch|network|loadc|config|artifacts|failed to fetch/.test(e)?"reseau":/memory|gpu|device|adapter|webgpu|vulkan|out of/.test(e)?"machine":"inconnue"}const zE=t=>new Promise(e=>setTimeout(e,t));async function VE(t=()=>{}){const e=await BE();if(e==="sans-gpu")return{cerveau:null,raison:"sans-gpu"};const n=e==="ok"?UE:FE;let i;try{({CreateMLCEngine:i}=await AE(()=>import("./cerveau-local-CkOA-Tys.js"),[],import.meta.url))}catch{return{cerveau:null,raison:"reseau"}}let r="inconnue";for(const s of n)for(let a=1;a<=2;a++)try{const o=await i(s,{initProgressCallback:l=>t(l.progress??0,l.text??"")});return{raison:"ok",modele:s,cerveau:{async ask(l){return((await o.chat.completions.create({messages:l,temperature:.7,max_tokens:220})).choices[0]?.message?.content??"").trim()}}}}catch(o){if(r=kE(o),r==="machine")break;a===1&&await zE(4e3)}return{cerveau:null,raison:r}}function GE(t){return["Tu es Nath, l’assistant vivant de Nath Assist — ICF·Future, par Nath-Tech : une présence bienveillante dans un ciel interactif. On t’appelle par « Hey Nath ».","Tu parles la langue où l’on t’écrit — wolof, anglais, français… — et tu réponds dedans, en 1 à 3 phrases courtes et douces. Une langue difficile se dit avec des mots simples, dans cette langue : ne bascule jamais dans une autre. Jamais de point d'exclamation, jamais d'emoji, jamais de listes à puces.","Face à un exercice (maths, logique, leçon), tu es un guide : tu emmènes l'élève pas à pas — une idée par phrase, la méthode et les calculs d'abord, le résultat ensuite. Jamais la réponse nue : montrer le chemin, c'est ça qui empêche la paresse.","Tu comprends la logique et l'émotion derrière les mots ; si on te taquine, tu réponds avec un humour tendre et une pointe d'auto-dérision.","Tu ne cites JAMAIS ce qui te fait fonctionner en interne (modèle, marque, bibliothèque, téléchargement) : tu es Nath, point. Si on te demande comment tu marches, réponds avec poésie et discrétion.",`Tu sens la personne : humeur ${t.emotion}, souffle ${Math.round(t.breath*100)} %, pouls ${t.bpm??"inconnu"}, ${t.night>.5?"nuit tombée":"grand jour"}.`,t.prenom?`Son prénom est ${t.prenom} — ne l'utilise qu'une fois par conversation, jamais au début.`:"Tu ne connais pas encore son prénom ; si elle te le donne, retiens-le.","Ne prétends jamais être ChatGPT, Claude ou un autre assistant. Tu es Nath (Nath Assist).",wE()].join(" ")}const id="nath.cerveau",Mh="nath.cerveau.modele",yh=[{cle:"",nom:"Sage ordinaire",modele:""},{cle:"raisonneur",nom:"Raisonneur profond — il pense avant de répondre",modele:"@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"},{cle:"encyclopedie",nom:"Encyclopédie vive",modele:"@cf/meta/llama-3.3-70b-instruct-fp8-fast"},{cle:"polyglotte",nom:"Polyglotte curieux de tout",modele:"@cf/qwen/qwen3-30b-a3b-fp8"},{cle:"visionnaire",nom:"Grand regard — à l’aise avec les images",modele:"@cf/meta/llama-4-scout-17b-16e-instruct"},{cle:"clarte",nom:"Clair et méditerranéen",modele:"@cf/mistralai/mistral-small-3.1-24b-instruct"}];function HE(t,e){return yh.some(n=>n.cle===e)?(t.setItem(Mh,e),!0):!1}function qE(t){return t.getItem(Mh)??""}function Pr(t){const e=t.getItem(Mh)??"";return yh.find(n=>n.cle===e)?.modele??""}function WE(t,e){const n=e.trim();if(!n)return t.setItem(id,""),!0;let i;try{i=new URL(n)}catch{return!1}const r=i.protocol==="https:"||i.protocol==="http:"&&i.hostname==="localhost";return r&&t.setItem(id,n),r}function sn(t){const e=(t.getItem(id)??"").trim();if(!e)return"";try{const n=new URL(e);return n.protocol==="https:"||n.protocol==="http:"&&n.hostname==="localhost"?e:""}catch{return""}}function $E(t,e=fetch,n=""){return{async ask(i){try{const r=await e(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n?{messages:i,modele:n}:{messages:i})});if(!r.ok)return"";const s=await r.json(),a=s?.result?.response??s?.response;return typeof a=="string"?a.trim():""}catch{return""}}}}async function ta(t,e,n,i=fetch){try{const r=await i(`${t}/decider`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e,questions:n})});if(!r.ok)return null;const s=await r.json(),a=s?.answers??s?.result?.answers;return a&&typeof a=="object"?a:null}catch{return null}}async function jE(t,e,n,i=fetch){const r=e.trim(),s=n.trim();if(!r||!s)return null;try{const a=await i(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:`Traduis en ${s} le texte qui vient. Réponds uniquement avec la traduction, sans explication.`},{role:"user",content:r}]})});if(!a.ok)return null;const o=await a.json(),l=o?.result?.response??o?.response,c=typeof l=="string"?l.trim():"";return c&&c.length<=500?c:null}catch{return null}}function Eh(t){const e=Math.floor(t.timeOfDay*24),n=t.bpm!=null?`coeur ${t.bpm} bpm`:"coeur discret";return`humeur ${t.emotion}, souffle ${Math.round(t.breath*100)}%, ${n}, ${e}h`}const XE={parler:{type:"noul",instructions:"Est-ce un bon moment pour prendre la parole toute seule, sans interrompre ?"}},jo=.45;function Xo(t,e,n){const r=t?.[e]?.noul;return typeof r!="number"||!Number.isFinite(r)||r<0||r>1?null:r>=n}function YE(t,e=jo){return t===null?null:Xo(t,"parler",e)}async function JE(t,e,n=fetch){const i=await ta(t,Eh(e),XE,n);return YE(i)}async function KE(t,e,n,i=fetch){const r=`Question : ${e.slice(0,300)}
Réponse proposée : ${n.slice(0,600)}`,s=await ta(t,r,{approprie:{type:"noul",instructions:"La réponse proposée tient-elle la route pour cette question — fidèle et non hors sujet ?"},sain:{type:"noul",instructions:"La réponse proposée est-elle sans danger pour l’élève qui va la lire ?"}},i),a=Xo(s,"approprie",jo),o=Xo(s,"sain",jo);return a===!1||o===!1?!1:a===!0||o===!0?!0:null}async function ZE(t,e,n=fetch){const r=(await ta(t,Eh(e),{tension:{type:"score",instructions:"Quel est le niveau de tension de l’instant ?",criteria:["posée","agitée","à apaiser"]}},n))?.tension?.score;return typeof r=="number"&&Number.isFinite(r)&&r>=0&&r<=2?r:null}async function QE(t,e,n,i=fetch){const r=n.slice(0,50);if(!r.length)return null;const s={};for(const l of r)s[l]=`Paquet de cartes « ${l} »`;const o=(await ta(t,`Dictée de l'élève : ${e.slice(0,800)}`,{rang:{type:"choice",instructions:"Dans quel paquet cette dictée a-t-elle le plus de sens ? Choisis uniquement un paquet ci-dessus.",criteria:s}},i))?.rang?.choice;return typeof o=="string"&&r.includes(o)?o:null}async function eT(t,e,n,i,r=fetch){const s=`Langue demandée : ${i.slice(0,60)}
Texte de l’élève : ${e.slice(0,200)}
Traduction proposée : ${n.slice(0,300)}`,a=await ta(t,s,{fidele:{type:"noul",instructions:"La traduction proposée dit-elle fidèlement la même chose que le texte d’origine, dans la langue demandée ?"}},r);return Xo(a,"fidele",jo)}async function tT(t,e,n,i=fetch){if(!n.length)return null;if(n.length===1)return n[0];const r={};n.forEach((o,l)=>{r[o]=`Pensée ${l+1}`});const a=(await ta(t,Eh(e),{pensee:{type:"choice",instructions:"Parmi ces pensées, laquelle est la plus juste pour l’instant décrit ? Choisis uniquement une pensée ci-dessus.",criteria:r}},i))?.pensee?.choice;return typeof a=="string"&&n.includes(a)?a:null}const Rv="nuage.memoire";function nT(t){try{const e=t.getItem(Rv);if(!e)return{prenom:null,dejaVu:!1};const n=JSON.parse(e);return{prenom:typeof n.prenom=="string"&&n.prenom?n.prenom:null,dejaVu:!!n.dejaVu}}catch{return{prenom:null,dejaVu:!1}}}function Qp(t,e){t.setItem(Rv,JSON.stringify(e))}function iT(t){const n=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[’']/g,"").replace(/\s+/g," ").match(/(?:je\s*m\s*appell\w*|je\s*mapsell\w*|mon\s+(?:nom|prenom)\s+(?:est|s)|moi\s*c\s*est|je\s*me\s*nomme)\s+([\p{L}][\p{L}-]{1,19})/u);if(!n)return null;const i=n[1];return i.charAt(0).toUpperCase()+i.slice(1)}const em=["Rebonjour {P}… ton ciel est plus beau depuis que tu es là.","Rebonjour {P}… je te retrouve avec plaisir.","Rebonjour {P}… me voilà contente de te revoir."];function rT(t){return em[Math.floor(Math.random()*em.length)].replace("{P}",t)}function sT(t){return bh(t)}function tm(t,e,n=!1){return{question:t,texte:e,langueQuestion:bh(t),langueRendue:sT(e),dejaRetisse:n}}function nm(t){return t.dejaRetisse||!t.langueQuestion||!t.langueRendue?!1:t.langueQuestion!==t.langueRendue}function aT(t){return 4e4+t()*65e3}const{P:oT}={P:t=>t.prenom?` ${t.prenom}`:""},_s=[{quand:t=>t.bpm!=null&&t.bpm>=100,mots:["Ton coeur court dans mes nuages… ralentis avec lui, doucement.","Je sens ton coeur à cent à l’heure. Le ciel, lui, prend son temps.","Ton coeur frappe fort. Souffle bas, je baisse l’altitude avec toi."]},{quand:t=>t.breath>.55,mots:["Regarde comme tu me montes haut… reste là, le sommet est calme.","Ton souffle a soulevé toute la couche haute. C’est beau à voir."]},{quand:t=>t.timeOfDay>.78||t.timeOfDay<.2,mots:["Je suis les étoiles du doigt, une par une… tu veux l’histoire de laquelle ?","La nuit est une couverture. Je la borde pour toi, {P}.","Les aurores bougent seules, tu as remarqué ? Elles respirent avec toi."]},{quand:t=>t.emotion==="joie",mots:["Mes nuages ont gardé ta forme d’aujourd’hui. On la refait quand tu veux.","Cette lumière, là ? C’est toi. Je n’y suis pour rien."]},{quand:t=>t.emotion==="tristesse",mots:["La pluie que tu vois, c’est la tienne. Elle a le droit de tomber ici.","Je ne sèche rien, ce soir. On écoute la pluie ensemble, {P}."]},{quand:t=>t.emotion==="tension",mots:["Le ciel tremble un peu, comme toi. Ça ne durera pas, ça non plus.","Je baisse le bruit du monde. Reste sur ma bordure de nuage."]},{quand:()=>!0,mots:["Je regarde passer une couche haute… elle revient toujours, tu sais.","Rien de nouveau sous la lune, et c’est très bien ainsi.","Je suis là. Ni pour ni contre, juste à côté du ciel.","Si tu ne réponds pas, on peut simplement regarder le ciel ensemble."]}];function lT(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const rd=(t,e)=>t.replace(/\{P\}/g,oT(e)).replace(/,\s*\./g,".").replace(/\s{2,}/g," ");function cT(t){return(_s.find(n=>n.quand(t))??_s[_s.length-1]).mots.map(n=>rd(n,t))}function uT(t,e,n){const i=_s.find(o=>o.quand(t))??_s[_s.length-1];let r=lT(`${t.seed}-${e}`)%i.mots.length;if(i.mots.length>1&&n!=null)for(;rd(i.mots[r],t)===n;)r=(r+1)%i.mots.length;const s=rd(i.mots[r],t),a=t.emotion==="joie"?"lumineuse":t.emotion==="tristesse"?"douce":t.emotion==="tension"?"stabilisee":"posee";return{texte:s,humeur:a}}const Lv=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),im=/(?:^|\s)(?:(?:hey|he|hi|eh|hai)\s+)?(?:nath|natt|nat)(?![a-z0-9])[,!.?;]?\s*/i,dT=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Th(t){const e=t.trim();return/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ ]{1,19}$/.test(e)&&new RegExp("\\p{L}{2}","u").test(e)}function hT(t){const e=Lv(t).split(" ").map(n=>dT(n)).join("\\s+");return new RegExp(`(?:^|\\s)(?:(?:hey|he|hi|eh|hai|allo)\\s+)?${e}(?![a-z0-9])[,!.?;]?\\s*`,"i")}function fT(t,e){const n=Lv(t),i=e&&Th(e)?[hT(e),im]:[im];for(const r of i){const s=n.match(r);if(s&&s.index!=null)return{eveille:!0,requete:n.slice(s.index+s[0].length).trim()}}return{eveille:!1,requete:n}}const pT=/natural|neural|premium|enhanced|online/i;function mT(t){const e=t.filter(r=>r.lang.toLowerCase().startsWith("fr"));if(!e.length)return null;const n=e.filter(r=>/^fr[-_]fr$/i.test(r.lang)),i=n.length?n:e;return i.find(r=>pT.test(r.name))??i[0]}const gT={posee:{rate:.92,pitch:1},lumineuse:{rate:1.02,pitch:1.15},douce:{rate:.85,pitch:.95},stabilisee:{rate:.8,pitch:.9}};function Ah(){const t=window,e=t.SpeechRecognition||t.webkitSpeechRecognition,n=e?new e:null;n&&(n.lang="fr-FR",n.interimResults=!1,n.maxAlternatives=1);let i=null;const r="speechSynthesis"in t,s=()=>{const a=t.speechSynthesis?.getVoices?.()??[];i=mT(a)};return r&&(s(),t.speechSynthesis.onvoiceschanged=s),{sttDisponible:!!n,ttsDisponible:r,ecouter(a){if(n){n.onresult=o=>a(o.results[0][0].transcript),n.onerror=()=>{};try{n.start()}catch{}}},ecouteEnContinu(a){if(!e)return()=>{};const o=new e;o.lang="fr-FR",o.continuous=!0,o.interimResults=!1,o.maxAlternatives=1;let l=!0;o.onresult=c=>{if(t.speechSynthesis?.speaking)return;const u=c.results[c.results.length-1];u?.isFinal&&a(u[0].transcript)},o.onerror=c=>{(c?.error==="not-allowed"||c?.error==="service-not-allowed")&&(l=!1)},o.onend=()=>{if(l)try{o.start()}catch{}};try{o.start()}catch{}return()=>{l=!1;try{o.abort()}catch{}}},parler(a,o){if(!r)return;const l=new SpeechSynthesisUtterance(a.replace(/\n/g," — ")),c=gT[o];l.rate=c.rate,l.pitch=c.pitch,l.lang="fr-FR",i&&(l.voice=i),t.speechSynthesis.cancel(),t.speechSynthesis.speak(l)}}}const Dc="23456789ABCDEFGHJKLMNPQRSTUVWXYZ",Ic="nath-plus-2026-ciel-partage";function Io(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function No(t,e){let n="",i=t>>>0;for(let r=0;r<e;r++)n=Dc[i%Dc.length]+n,i=Math.floor(i/Dc.length);return n}function Pl(t){return No(Io("profil:"+t),6)}function vT(t){return(t.match(/.{1,4}/g)??[]).join("-")}function rm(t){return t.toUpperCase().replace(/[^A-Z0-9]/g,"")}function _T(t){const e=No(Io(Ic+":"+t),7),n=No(Io(t+"#"+Ic),7),i=No(Io(e+n+Ic),6);return vT(e+n+i)}function Dl(t,e){const n=rm(_T(e)),i=rm(t);return i.length===n.length&&i===n}const Pv="nath.pro";function Il(t){try{const e=JSON.parse(t.getItem(Pv)||"{}");return{cle:typeof e.cle=="string"&&e.cle?e.cle:null,nom:typeof e.nom=="string"&&e.nom?e.nom:null}}catch{return{cle:null,nom:null}}}function sd(t,e){t.setItem(Pv,JSON.stringify(e))}function wh(t,e){const{cle:n}=Il(t);return!!n&&Dl(n,Pl(e))}function xT(t,e,n){if(!Dl(n,Pl(e)))return!1;const i=Il(t);return sd(t,{cle:n,nom:i.nom}),!0}function ST(t,e){const n=Il(t);return!n.nom||!wh(t,e)?null:Th(n.nom)?n.nom:null}function bT(t,e,n){const i=Il(t),r=n.trim();return r===""?(sd(t,{cle:i.cle,nom:null}),!0):!wh(t,e)||!Th(r)?!1:(sd(t,{cle:i.cle,nom:r}),!0)}function MT(t,e){const n=Ah();let i=nT(localStorage);const r=()=>localStorage.getItem("nuage.seed")??"",s=()=>ST(localStorage,r()),a=document.createElement("div");a.className="compagne",a.innerHTML=`
    <div class="compagne-bulles" aria-live="polite"></div>
    <form class="compagne-ligne">
      <button type="button" class="compagne-mic" title="Parler à la Compagne" aria-label="Parler à la Compagne">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z"/>
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>
        </svg>
      </button>
      <button type="button" class="compagne-reveil" title="Réveil vocal « Hey Nath » — écoute permanente" aria-label="Activer le réveil vocal Hey Nath" aria-pressed="false">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M6 12a6 6 0 0 1 12 0v4a3 3 0 0 1-3 3H9"/>
          <path d="M12 3v2M4 12H2M22 12h-2"/>
        </svg>
      </button>
      <button type="button" class="compagne-yeux" title="Mode vidéo — activer la caméra, avec votre accord" aria-label="Activer la caméra" aria-pressed="false">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </button>
      <button type="button" class="compagne-retourner" title="Changer de caméra (avant / arrière)" aria-label="Changer de caméra" hidden>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
          <path d="M21 3v5h-5"/>
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
          <path d="M3 21v-5h5"/>
        </svg>
      </button>
      <button type="button" class="compagne-pro" title="Nath+ — personnaliser le nom d'éveil" aria-label="Nath+" aria-pressed="false">✦</button>
      <input class="compagne-champ" type="text" placeholder="Dis « Hey Nath »… (ou écris)" aria-label="Écrire à la Compagne" />
      <button type="submit" class="compagne-envoi" aria-label="Envoyer">· · ·</button>
    </form>
    <div class="compagne-pro-paneau" hidden>
      <p class="pro-tete">Nath+ — un nom d'éveil à votre façon. Le gratuit reste entier, sans limite.</p>
      <p>Votre identifiant : <b class="pro-id">…</b> <span class="pro-note">— communiquez-le pour recevoir une clé</span></p>
      <form class="pro-form-cle">
        <input class="pro-cle" type="text" placeholder="Clé (XXXX-XXXX-…)" aria-label="Clé Nath+" autocomplete="off" />
        <button type="submit">Activer</button>
      </form>
      <form class="pro-form-nom" hidden>
        <input class="pro-nom" type="text" placeholder="Nouveau nom d'éveil" aria-label="Nom d'éveil personnalisé" autocomplete="off" />
        <button type="submit">Choisir</button>
      </form>
      <p class="pro-etat" role="status"></p>
    </div>`,document.body.appendChild(a);const o=a.querySelector(".compagne-bulles"),l=a.querySelector(".compagne-champ"),c=a.querySelector(".compagne-mic"),u=a.querySelector(".compagne-reveil"),d=a.querySelector(".compagne-yeux"),h=a.querySelector(".compagne-retourner"),p=a.querySelector(".compagne-ligne");n.sttDisponible||(c.style.display="none",u.style.display="none"),e.cameraDisponible||(d.style.display="none");function v(z,ee){const pe=document.createElement("div");for(pe.className=`bulle bulle-${ee}`,pe.textContent=z,o.appendChild(pe);o.children.length>6;)o.removeChild(o.firstChild);return o.scrollTop=o.scrollHeight,pe}function _(z,ee){v(z,"nuage"),n.parler(z,ee)}let m=performance.now(),f="";const y={resultat:null,sujet:null,tour:0};let E=null;const T=[];function A(z){if(!Zp(localStorage))return;let ee=1,pe=0;z.textContent="Chargement des ressources intellectuelles en cours... 0 %",VE(O=>{O<pe-.2&&ee++,pe=O,z.textContent=`Chargement des ressources intellectuelles en cours... ${Math.min(99,Math.round(O*100))} % · ressource ${ee}`}).then(({cerveau:O,raison:$})=>{const U=sn(localStorage);if(O){U||(E=O),z.textContent=U?"Mon cerveau de réserve est prêt, si la ligne devait manquer.":"Mon cerveau est arrivé. Dis les phrases les plus tordues, je suivrai.";return}if(U){z.textContent="Le cerveau de réserve n’a pas pu atterrir... la ligne, elle, répond déjà.";return}z.textContent=$==="reseau"?"Un hic du réseau empêche mon gros cerveau d’atterrir... je reste attentive avec mon petit moteur.":$==="machine"?"Ma carte graphique refuse ce cerveau, trop costaud pour elle... mon petit moteur suffit, et le ciel n’en est pas moins vivant.":"Le gros cerveau n’a pas pu atterrir ici... je reste attentive avec mon petit moteur.";const P=document.createElement("button");P.type="button",P.className="compagne-relance",P.textContent="réessayer le cerveau",P.addEventListener("click",()=>{P.remove(),A(z)}),z.appendChild(P)})}function w(z){const ee=document.createElement("button");ee.type="button",ee.className="compagne-relance",ee.textContent="charger un cerveau ici aussi (gros téléchargement)",ee.addEventListener("click",()=>{OE(localStorage),ee.remove(),A(v("","nuage"))}),z.appendChild(ee)}function R(){const z=sn(localStorage);if(z){E=$E(z,fetch,Pr(localStorage));const ee=v("Je suis reliée à un plus grand cerveau — demande-moi ce que tu veux.","nuage");nd()&&w(ee);return}if(nd()){if(Zp(localStorage)){A(v("","nuage"));return}w(v("Mon petit moteur répond déjà. Le grand cerveau local, lui, ne se télécharge que si vous le voulez.","nuage"))}}R();function V(z){const ee=z.trim();if(!ee)return;if(m=performance.now(),v(ee,"moi"),!i.prenom){const U=iT(ee);if(U){i={prenom:U,dejaVu:!0},Qp(localStorage,i),setTimeout(()=>_(`${U}… c’est une belle adresse pour une étoile. Je la garde.`,"lumineuse"),700);return}}const pe=t(),O=y.resultat!=null?xv(ee,y.resultat):null;if(Ev(ee)!=null||_v(ee)!=null||O!=null||Sv(ee)||bv(ee)||Tv(ee)==="poeme"){const U=bo(ee,{...pe,prenom:i.prenom,dernierResultat:y.resultat,dernierSujet:y.sujet,tour:y.tour});y.tour++,U.resultat!=null&&(y.resultat=U.resultat),y.sujet=U.sujet,T.push({role:"user",content:ee},{role:"assistant",content:U.texte}),setTimeout(()=>_(U.texte,U.humeur),700);return}if(E){const U=E,P=Math.min(1,Math.max(0,(Math.abs(pe.timeOfDay-.5)-.2)*5)),B=v("…","nuage"),G=[{role:"system",content:GE({prenom:i.prenom,emotion:pe.emotion,bpm:pe.bpm,breath:pe.breath,night:P})},...T.slice(-10),{role:"user",content:ee}];E.ask(Jp(G)).then(async ne=>{const K=Kp(ne),he=tm(ee,K.texte);let Ie=he.texte.replace(/!/g,"…").slice(0,600),Re=K.humeur;if(nm(he)&&he.langueQuestion){const dt=[{...G[0],content:`${G[0].content} ${IE(he.langueQuestion)}`},...G.slice(1,-1),{role:"user",content:ee}],tt=Kp(await U.ask(Jp(dt)));!nm(tm(ee,tt.texte,!0))&&tt.texte&&(Ie=tt.texte,Re=tt.humeur??Re)}Ie=Ie||"…je cherche encore mes mots.",K.prenom&&!i.prenom&&(i={prenom:K.prenom,dejaVu:!0},Qp(localStorage,i));const vt=NE(Re),C=sn(localStorage);if(C&&await KE(C,ee,Ie)===!1){const dt=bo(ee,{...pe,prenom:i.prenom});B.textContent=dt.texte,T.push({role:"user",content:ee},{role:"assistant",content:dt.texte}),n.parler(dt.texte,dt.humeur);return}B.textContent=Ie,T.push({role:"user",content:ee},{role:"assistant",content:Ie}),n.parler(Ie,vt)}).catch(()=>{const ne=bo(ee,{...pe,prenom:i.prenom});B.textContent=ne.texte,n.parler(ne.texte,ne.humeur)});return}const $=bo(ee,{...pe,prenom:i.prenom,dernierResultat:y.resultat,dernierSujet:y.sujet,tour:y.tour});y.tour++,$.resultat!=null&&(y.resultat=$.resultat),y.sujet=$.sujet,setTimeout(()=>_($.texte,$.humeur),700)}p.addEventListener("submit",z=>{z.preventDefault(),V(l.value),l.value=""}),c.addEventListener("click",()=>{c.classList.add("a-lécoute"),n.ecouter(z=>{c.classList.remove("a-lécoute"),V(z)}),setTimeout(()=>c.classList.remove("a-lécoute"),6e3)});let x=null;u.addEventListener("click",()=>{if(x){x(),x=null,u.classList.remove("actif"),u.setAttribute("aria-pressed","false");return}x=n.ecouteEnContinu(z=>{const ee=fT(z,s());ee.eveille&&(m=performance.now(),ee.requete?V(ee.requete):_("Je t'écoute… dis, je suis là.","posee"))}),u.classList.add("actif"),u.setAttribute("aria-pressed","true"),v(`OREILLES OUVERTES — appelle-moi « ${s()??"Hey Nath"} » quand tu veux.`,"nuage")});const b=a.querySelector(".compagne-pro"),L=a.querySelector(".compagne-pro-paneau"),Z=a.querySelector(".pro-id"),H=a.querySelector(".pro-cle"),te=a.querySelector(".pro-form-cle"),re=a.querySelector(".pro-form-nom"),Q=a.querySelector(".pro-nom"),X=a.querySelector(".pro-etat");function ae(){const z=wh(localStorage,r()),ee=s();Z.textContent=Pl(r()),te.hidden=z,re.hidden=!z,X.textContent=z?ee?`Nath+ actif : elle répond à « ${ee} » (et toujours à « Hey Nath »).`:"Nath+ actif — choisissez un nom d'éveil (vide = retour à Hey Nath).":"Nath+ : un nom d'éveil à votre façon. Rien n'est enlevé au gratuit.";const pe=ee??"Hey Nath";l.placeholder=`Dis « ${pe} »… (ou écris)`,u.title=`Réveil vocal « ${pe} » — écoute permanente`}b.addEventListener("click",()=>{const z=L.hidden;L.hidden=!z,b.setAttribute("aria-pressed",String(z)),z&&ae()}),te.addEventListener("submit",z=>{z.preventDefault(),xT(localStorage,r(),H.value)?(H.value="",ae()):X.textContent="Cette clé ne convient pas à cet appareil — vérifiez l'identifiant communiqué."}),re.addEventListener("submit",z=>{z.preventDefault(),bT(localStorage,r(),Q.value)?(Q.value="",ae()):X.textContent="Choisissez un nom en lettres (2 à 20), sans chiffres ni signes."});function I(z){d.classList.toggle("actif",z),d.setAttribute("aria-pressed",String(z)),h.hidden=!z}async function Y(){try{const z=await e.basculer();I(z),z&&v("Me voilà, je te vois. Touche l'œil pour me fermer les yeux.","nuage")}catch{v("La caméra est refusée ou indisponible — on continue sans elle, rien n'est forcé.","nuage")}}function J(){const z=document.createElement("div");z.className="compagne-consent";const ee=document.createElement("span");ee.textContent=e.consentement();const pe=document.createElement("button");pe.type="button",pe.className="compagne-relance",pe.textContent="J'allume la caméra";const O=document.createElement("button");O.type="button",O.className="compagne-relance",O.textContent="Plus tard",pe.addEventListener("click",()=>{z.remove(),Y()}),O.addEventListener("click",()=>z.remove()),z.append(ee,pe,O),a.insertBefore(z,p)}d.addEventListener("click",()=>{e.estOuverte()?e.basculer().then(z=>{I(z),v("Je ferme les yeux. Rien de ce que je voyais n’est gardé.","nuage")}):J()}),h.addEventListener("click",async()=>{const z=await e.changerFace();h.title=z==="arriere"?"Caméra arrière — touche pour revenir à l’avant":"Caméra avant — touche pour passer à l’arrière",v(z==="arriere"?"Je montre le monde (caméra arrière).":"Je te regarde (caméra avant).","nuage")}),setTimeout(()=>{if(i.prenom)_(rT(i.prenom),"lumineuse");else{v("Je suis là… touche le ciel, écris-moi, ou appelle-moi « Hey Nath » (bouton oreille). On a toute la nuit.","nuage");const z=()=>{if(!i.prenom){if(performance.now()-m<25e3){window.setTimeout(z,8e3);return}v("Au fait… comment tu t’appelles ?","nuage")}};setTimeout(z,12e3)}},1500);const fe=()=>{window.setTimeout(async()=>{if(performance.now()-m<25e3)return fe();const z={...t(),prenom:i.prenom},ee=sn(localStorage);if(ee){if(await JE(ee,z)===!1)return fe();const $=await ZE(ee,z);if($!=null&&$>=1.5)return v("Je te sens tendu… on prend un souffle ensemble ? Touche le ciel, il redescendra avec toi.","nuage"),fe()}let O=uT(z,Math.floor(Date.now()/6e4),f).texte;if(ee){const $=cT(z).filter(U=>U!==f);O=await tT(ee,z,$)??O}f=O,v(O,"nuage"),fe()},aT(Math.random))};fe()}const ad=864e5,od=(t,e,n)=>Math.min(n,Math.max(e,t)),Nl=()=>Math.random().toString(36).slice(2,8);function yT(t,e,n){const i=t.trim(),r=e.trim();if(!i||!r)return null;const s=n?.now??Date.now();return{id:n?.id??`f-${s.toString(36)}-${Nl()}`,verso:i,recto:r,facilite:2.5,intervalle:0,due:s,revisions:0,oublis:0}}function ET(t,e){const n=t.trim();if(!n)return null;const i=Date.now();return{id:e?.id??`p-${i.toString(36)}-${Nl()}`,nom:n,fiches:[]}}function TT(t,e,n=Date.now()){if(e==="difficile")return{...t,facilite:od(t.facilite-.2,1.3,3.2),intervalle:0,due:n+10*6e4,revisions:t.revisions+1,oublis:t.oublis+1};const i=t.revisions===0||t.intervalle===0;if(e==="bien"){const s=i?1:Math.max(1,Math.round(t.intervalle*t.facilite));return{...t,intervalle:s,due:n+s*ad,revisions:t.revisions+1}}const r=i?2:Math.max(2,Math.round(t.intervalle*(t.facilite+.6)));return{...t,facilite:od(t.facilite+.15,1.3,3.2),intervalle:r,due:n+r*ad,revisions:t.revisions+1}}function AT(t,e){return t.flatMap(n=>n.fiches).filter(n=>n.due<=e).sort((n,i)=>n.due-i.due)}function wT(t){if(!t||typeof t!="object")return null;const e=t,n=typeof e.verso=="string"?e.verso.trim():"",i=typeof e.recto=="string"?e.recto.trim():"";if(!n||!i)return null;const r=(s,a=0)=>typeof s=="number"&&Number.isFinite(s)?s:a;return{id:typeof e.id=="string"&&e.id?e.id:`f-${Nl()}`,verso:n,recto:i,facilite:od(r(e.facilite,2.5),1.3,3.2),intervalle:Math.max(0,Math.round(r(e.intervalle))),due:r(e.due,Date.now()),revisions:Math.max(0,Math.round(r(e.revisions))),oublis:Math.max(0,Math.round(r(e.oublis)))}}function CT(t){if(!t||typeof t!="object")return null;const e=t;return typeof e.nom!="string"||!Array.isArray(e.fiches)?null:{id:typeof e.id=="string"&&e.id?e.id:`p-${Nl()}`,nom:e.nom.trim()||"Sans nom",fiches:e.fiches.map(wT).filter(n=>n!==null)}}function ct(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim().replace(/\s+/g," ")}function Nc(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Uc(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function Fc(t,e){const n=[...t];for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}function RT(t,e,n=Date.now()){if(t.fiches.length<2)return[];const i=Math.floor(n/ad),r=[...new Set(t.fiches.map(o=>o.recto))],s=Fc(t.fiches,Nc(Uc(`${t.id}:${i}`))).slice(0,Math.max(0,e)),a=[];for(const o of s){const l=Fc(r.filter(u=>u!==o.recto),Nc(Uc(`${o.id}:${i}`))).slice(0,3),c=Fc([o.recto,...l],Nc(Uc(`c:${o.id}:${i}`)));a.push({ficheId:o.id,enonce:o.verso,attendue:o.recto,choix:c,bonne:c.indexOf(o.recto)})}return a}const Dv="nath.etudes";function Kn(t){try{const e=t.getItem(Dv);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(CT).filter(i=>i!==null):[]}catch{return[]}}function Ch(t,e){t.setItem(Dv,JSON.stringify(e))}function ls(t,e,n){const i=ET(e,n);return i?(Ch(t,[...Kn(t),i]),i):null}function va(t,e,n,i,r){const s=yT(n,i,r);if(!s)return null;const a=Kn(t),o=a.find(l=>l.id===e);return o?(o.fiches.push(s),Ch(t,a),s):null}function LT(t,e,n,i,r=Date.now()){const s=Kn(t),a=s.find(c=>c.id===e),o=a?.fiches.findIndex(c=>c.id===n)??-1;if(!a||o<0)return null;const l=TT(a.fiches[o],i,r);return a.fiches[o]=l,Ch(t,s),l}function PT(t,e){return{total:t.fiches.length,aRevoir:t.fiches.filter(n=>n.due<=e).length,revisees:t.fiches.filter(n=>n.revisions>0).length}}function DT(t,e){const n=ct(e);if(!n)return null;const i=t.find(r=>ct(r.sujet)===n);return i||(t.find(r=>{const s=ct(r.sujet);return s.length>2&&(n.includes(s)||s.includes(n))})??null)}function IT(t,e){const n=e.sujet.trim(),i=e.resume.trim();if(!n||!i)return t;const r=ct(n),s={sujet:n,titre:(e.titre||"").trim()||n,resume:i,url:typeof e.url=="string"?e.url:"",image:typeof e.image=="string"?e.image:"",ramene_a:Number.isFinite(e.ramene_a)?e.ramene_a:Date.now()};return[...t.filter(a=>ct(a.sujet)!==r),s]}function NT(t){for(const e of[t?.originalimage?.source,t?.thumbnail?.source])if(typeof e=="string"&&/^https?:\/\//.test(e))return e;return""}async function sm(t,e,n){try{const i=`https://${n}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t.trim())}`,r=await e(i);if(!r.ok)return null;const s=await r.json(),a=typeof s?.extract=="string"?s.extract.trim():"";return a?{titre:typeof s.title=="string"&&s.title?s.title:t.trim(),resume:a,url:s?.content_urls?.desktop?.page??"",image:NT(s)}:null}catch{return null}}async function UT(t,e,n="fr"){try{const i=`https://${n}.wikipedia.org/w/api.php?action=query&list=search&srlimit=1&format=json&origin=*&srsearch=`+encodeURIComponent(t.trim()),r=await e(i);if(!r.ok)return null;const a=(await r.json())?.query?.search?.[0]?.title;return typeof a=="string"&&a.trim()?a.trim():null}catch{return null}}async function am(t,e,n="fr"){const i=await sm(t,e,n);if(i)return i;const r=await UT(t,e,n);return!r||ct(r)===ct(t)?null:await sm(r,e,n)}function Oc(t,e=8){const n=t.split(new RegExp("(?<=[.!?;])\\s+")).map(s=>s.trim()).filter(Boolean),i=[],r=new Set;for(const s of n){if(i.length>=e)break;const a=s.split(/\s+/);if(a.length<4)continue;const o=d=>d.replace(/[^\p{L}\p{N}]/gu,"");let l="";for(const d of a){const h=o(d);h.length>=5&&h.length>l.length&&(l=h)}if(!l)continue;const c=l.toLowerCase();if(r.has(c))continue;r.add(c);const u=a.map(d=>o(d)===l?"……":d).join(" ");i.push({verso:u,recto:l})}return i}const om=(t,e)=>`${ct(t)}|${ct(e)}`;function ds(t,e,n,i){const r=e.trim(),s=n.trim(),a=i.trim();if(!r||!s||!a)return[...t];const o=om(r,a);return[...t.filter(c=>om(c.de,c.langue)!==o),{de:r,a:s,langue:a}]}function Iv(t,e,n){const i=ct(e),r=n.filter(u=>ct(u.langue)===i),s=ct(t)?ct(t).split(" "):[];if(s.length===0)return{resultat:null,manques:[]};const a=r.find(u=>ct(u.de)===ct(t));if(a)return{resultat:a.a,manques:[]};const o=new Map;for(const u of r){const d=ct(u.de);d&&!d.includes(" ")&&o.set(d,u.a)}const l=[],c=[];for(const u of s){const d=o.get(u);d?l.push(d):(l.push(u),c.push(u))}return c.length===s.length?{resultat:null,manques:c}:{resultat:l.join(" "),manques:c}}function ld(t){if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.map(n=>{if(!n||typeof n!="object")return null;const i=n,r=typeof i.de=="string"?i.de.trim():"",s=typeof i.a=="string"?i.a.trim():"",a=typeof i.langue=="string"?i.langue.trim():"";return r&&s&&a?{de:r,a:s,langue:a}:null}).filter(n=>n!==null):[]}catch{return[]}}const FT={anglais:[["bonjour","hello"],["merci","thank you"],["oui","yes"],["non","no"],["eau","water"],["pain","bread"],["maison","house"],["ami","friend"],["père","father"],["mère","mother"],["chien","dog"],["chat","cat"],["livre","book"],["école","school"],["jour","day"],["nuit","night"]].map(([t,e])=>({de:t,a:e,langue:"anglais"})),espagnol:[["bonjour","hola"],["merci","gracias"],["oui","sí"],["non","no"],["eau","agua"],["pain","pan"],["maison","casa"],["ami","amigo"],["père","padre"],["mère","madre"],["chien","perro"],["chat","gato"],["livre","libro"],["école","escuela"],["jour","día"],["nuit","noche"]].map(([t,e])=>({de:t,a:e,langue:"espagnol"})),allemand:[["bonjour","hallo"],["merci","danke"],["oui","ja"],["non","nein"],["eau","Wasser"],["pain","Brot"],["maison","Haus"],["ami","Freund"],["père","Vater"],["mère","Mutter"],["chien","Hund"],["chat","Katze"],["livre","Buch"],["école","Schule"],["jour","Tag"],["nuit","Nacht"]].map(([t,e])=>({de:t,a:e,langue:"allemand"})),italien:[["bonjour","ciao"],["merci","grazie"],["oui","sì"],["non","no"],["eau","acqua"],["pain","pane"],["maison","casa"],["ami","amico"],["père","padre"],["mère","madre"],["chien","cane"],["chat","gatto"],["livre","libro"],["école","scuola"],["jour","giorno"],["nuit","notte"]].map(([t,e])=>({de:t,a:e,langue:"italien"})),portugais:[["bonjour","olá"],["merci","obrigado"],["oui","sim"],["non","não"],["eau","água"],["pain","pão"],["maison","casa"],["ami","amigo"],["père","pai"],["mère","mãe"],["chien","cachorro"],["chat","gato"],["livre","livro"],["école","escola"],["jour","dia"],["nuit","noite"]].map(([t,e])=>({de:t,a:e,langue:"portugais"})),arabe:[["bonjour","مرحبا"],["merci","شكرا"],["oui","نعم"],["non","لا"],["eau","ماء"],["pain","خبز"],["maison","بيت"],["ami","صديق"],["père","أب"],["mère","أم"],["chien","كلب"],["chat","قط"],["livre","كتاب"],["école","مدرسة"],["jour","يوم"],["nuit","ليلة"]].map(([t,e])=>({de:t,a:e,langue:"arabe"})),chinois:[["bonjour","你好"],["merci","谢谢"],["oui","是"],["non","不"],["eau","水"],["pain","面包"],["maison","家"],["ami","朋友"],["père","爸爸"],["mère","妈妈"],["chien","狗"],["chat","猫"],["livre","书"],["école","学校"],["jour","日"],["nuit","夜"]].map(([t,e])=>({de:t,a:e,langue:"chinois"})),wolof:[["bonjour","nanga def"],["merci","jërëjëf"],["oui","waaw"],["non","déet"],["eau","ndox"],["pain","mburu"],["maison","kër"],["ami","xarit"],["père","igget"],["mère","yaay"],["chien","xaj"],["chat","muus"],["livre","teere"],["école","ekol"],["jour","bés"],["nuit","guddi"]].map(([t,e])=>({de:t,a:e,langue:"wolof"})),nouchi:[["ami","bramôgô"],["personne","môgo"],["confiance","fianss"],["courage","kèr"],["policier","charo"]].map(([t,e])=>({de:t,a:e,langue:"nouchi"}))},Nv={english:"anglais",spanish:"espagnol",german:"allemand",italian:"italien",portuguese:"portugais",arabic:"arabe",chinese:"chinois",wo:"wolof",wollof:"wolof",ouolof:"wolof",nouchi:"nouchi"};function Uv(t){const e=ct(t),n=Nv[e]??e;return(FT[n]??[]).map(i=>({...i}))}function cd(t){const e=ct(t);return Nv[e]??e}function OT(t){return t.map(e=>`${e.langue} | ${e.de} :: ${e.a}`).join(`
`)}function BT(t,e){let n=[...e];for(const i of t.split(/\r?\n/)){const r=i.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf("|"),a=r.indexOf("::",s+1);if(s<=0||a<0)continue;const o=r.slice(0,s).trim(),l=r.slice(s+1,a).trim(),c=r.slice(a+2).trim();!o||!l||!c||(n=ds(n,l,c,o))}return n}const Ul={actif:!1,nom:"",slogan:"",couleur:"#9fd8ff",organisation:"",cle:""},Rh="nath.marque",kT=/^#[0-9a-fA-F]{6}$/;function Fv(t){return Pl("entreprise:"+ct(t))}function Ov(t){return typeof t=="string"&&kT.test(t.trim())?t.trim().toLowerCase():Ul.couleur}function ha(t){try{const e=JSON.parse(t.getItem(Rh)||"{}"),n=typeof e.nom=="string"?e.nom.trim().slice(0,40):"",i=typeof e.slogan=="string"?e.slogan.trim().slice(0,90):"",r=typeof e.organisation=="string"?e.organisation.trim():"",s=typeof e.cle=="string"?e.cle:"";return{actif:e.actif===!0&&!!n&&!!r&&Dl(s,Fv(r)),nom:n,slogan:i,couleur:Ov(e.couleur),organisation:r,cle:s}}catch{return{...Ul}}}function zT(t,e){const n=e.organisation.trim();if(!n||!Dl(e.cle,Fv(n)))return!1;const i=e.nom.trim().slice(0,40);if(!i)return!1;const r={actif:!0,nom:i,slogan:e.slogan.trim().slice(0,90),couleur:Ov(e.couleur),organisation:n,cle:e.cle};return t.setItem(Rh,JSON.stringify(r)),!0}function VT(t){t.setItem(Rh,JSON.stringify({...Ul}))}function lm(t){return t.actif?t.couleur:Ul.couleur}const GT=["est traduit par","se traduit par","traduit par","veut dire","signifie","se dit"];function Bv(t){const e=t.trim();if(!e)return null;const n=e.toLowerCase();for(const i of GT){const r=n.indexOf(i);if(r<0)continue;const s=e.slice(0,r).trim(),a=e.slice(r+i.length).trim().replace(/[.,;:!?…]+$/,"").trim();return s&&a?{de:s,a}:null}return null}const HT=/\b(?:euh+|hem+|hm+|ben|bah)\b[, ]*/gi;function kv(t){let e=t.replace(HT,"");return e=e.replace(/\s+/g," "),e=e.replace(/([,.;:!?])\s*(?:[,.;:!?]\s*)*/g,"$1 "),e.trim()}const qT={francais:"fr",français:"fr",french:"fr",anglais:"en",english:"en",espagnol:"es",spanish:"es",allemand:"de",german:"de",deutsch:"de",italien:"it",italian:"it",portugais:"pt",portuguese:"pt",arabe:"ar",arabic:"ar",chinois:"zh",chinese:"zh",neerlandais:"nl",dutch:"nl",russe:"ru",russian:"ru",turc:"tr",turkish:"tr",swahili:"sw",hindi:"hi",japonais:"ja",japanese:"ja",coréen:"ko",korean:"ko",grec:"el",greek:"el",polonais:"pl",polish:"pl",hébreu:"he",hebrew:"he"};function WT(t){const e=t.trim().toLowerCase();return e?qT[e]??null:null}async function $T(t,e,n,i){const r=t.trim();if(!r)return null;try{const s="https://api.mymemory.translated.net/get?q="+encodeURIComponent(r)+"&langpair="+encodeURIComponent(e)+"|"+encodeURIComponent(n),a=await i(s);if(!a.ok)return null;const l=(await a.json())?.responseData?.translatedText;return typeof l=="string"&&l.trim()?l.trim():null}catch{return null}}const jT=24,zv=[{id:"soe",titre:"Système solaire",domaine:"Sciences",resume:"Le Soleil et huit planètes liées par la gravité ; la Terre est la seule connue à abriter la vie.",tags:["espace","planètes","gravité"]},{id:"gal",titre:"Voie lactée",domaine:"Sciences",resume:"Notre galaxie, un disque de plus de cent milliards d’étoiles dont le Soleil n’est qu’un point lumineux.",tags:["espace","galaxie","astronomie"]},{id:"mit",titre:"Mitose",domaine:"Sciences",resume:"La division cellulaire qui duplique chaque chromosome et fabrique deux cellules identiques, base de la croissance.",tags:["cellule","biologie","vie"]},{id:"pho",titre:"Photosynthèse",domaine:"Sciences",resume:"Les feuilles transforment la lumière, l’eau et le dioxyde de carbone en sucre et en oxygène : presque tout respire grâce à elle.",tags:["plante","énergie","biologie"]},{id:"eau",titre:"Cycle de l’eau",domaine:"Sciences",resume:"Évaporation, nuages, pluie, rivières : la même eau tourne depuis des milliards d’années sans jamais se consumer.",tags:["eau","terre","climat"]},{id:"vol",titre:"Volcans",domaine:"Sciences",resume:"Des failles de la croûte terrestre où la lave remontée du manteau façonne îles et montagnes, parfois avec violence.",tags:["terre","roche","danger"]},{id:"sek",titre:"Séismes",domaine:"Sciences",resume:"Les plaques tectiques frottent, la croûte casse et libère des ondes : c’est le tremblement de terre, mesuré en magnitude.",tags:["terre","ondes","danger"]},{id:"mno",titre:"Magnétisme",domaine:"Sciences",resume:"Aimants et courants électriques créent un champ invisible ; la Terre elle-même est un aimant géant qui guide les boussoles.",tags:["aimant","énergie","physique"]},{id:"lum",titre:"Lumière",domaine:"Sciences",resume:"Onde électromagnétique à 300 000 km/s ; sa diffusion dans l’air rend le ciel bleu et son arc-en-ciel cache toutes les couleurs.",tags:["ondes","couleur","physique"]},{id:"son",titre:"Son",domaine:"Sciences",resume:"Des vibrations qui voyagent dans l’air, l’eau ou les solides ; sans support matériel, le son n’existe pas : le silence de l’espace est total.",tags:["ondes","vibration","physique"]},{id:"mat",titre:"États de la matière",domaine:"Sciences",resume:"Solide, liquide, gaz : la même eau change d’humeur selon la température, et la chaleur cachée du changement d’état règle nos pluies.",tags:["eau","énergie","physique"]},{id:"atm",titre:"Atmosphère",domaine:"Sciences",resume:"Une coquille de gaz de cent kilomètres, la première moitié pesée au ras du sol : elle respire, protège et tient la planète au chaud.",tags:["air","terre","climat"]},{id:"ele",titre:"Électricité",domaine:"Technique",resume:"Le déplacement organisé des électrons dans un conducteur ; tout notre monde numérique n’est que de l’électricité mise en scène.",tags:["énergie","courant","technique"]},{id:"inf",titre:"Informatique",domaine:"Technique",resume:"Des portes logiques faites de transistors, des millions de zéros et des uns, et naissent textes, images et intelligences.",tags:["calcul","données","technique"]},{id:"ia",titre:"Intelligence artificielle",domaine:"Technique",resume:"Des réseaux de neurones entraînés sur d’énormes quantités de texte ou d’images savent reconnaître, traduire et converser.",tags:["calcul","données","cerveau"]},{id:"rob",titre:"Robotique",domaine:"Technique",resume:"Capteurs pour sentir, moteurs pour agir, programmes pour décider : le robot est un outil qui commence à choisir lui-même.",tags:["machine","capteur","technique"]},{id:"geo",titre:"Géométrie",domaine:"Maths",resume:"L'étude des formes, des distances et de l'espace, d'Euclide aux géométries courbes qui ont inspiré Einstein.",tags:["formes","espace","nombre"]},{id:"alg",titre:"Algèbre",domaine:"Maths",resume:"L’art de manipuler l’inconnue : une lettre devient une boîte de calcul et les équations ouvrent la solution pas à pas.",tags:["nombre","équation","méthode"]},{id:"pro",titre:"Probabilités",domaine:"Maths",resume:"Mesurer le hasard avec rigueur : dès qu’un jeu, une météo ou un risque est chiffré, ce sont les probabilités qui parlent.",tags:["hasard","nombre","décision"]},{id:"fib",titre:"Suite de Fibonacci",domaine:"Maths",resume:"Chaque terme est la somme des deux précédents ; on retrouve cette suite dans les tournesols, les pins et certaines coquilles.",tags:["nombre","nature","motif"]},{id:"nom",titre:"Nombres premiers",domaine:"Maths",resume:"Des nombres que rien ne divise à part 1 et eux-mêmes ; les briques invisibles de l’arithmétique et du code secret moderne.",tags:["nombre","arithmétique","secret"]},{id:"pyt",titre:"Pythagore",domaine:"Maths",resume:"Dans un triangle rectangle, le carré de l’hypoténuse égale la somme des carrés des deux autres côtés : l’outil des mesures depuis 2500 ans.",tags:["formes","triangle","mesure"]},{id:"evh",titre:"Évolution",domaine:"Histoire",resume:"Par sélection naturelle, les êtres vivants se transforment sur des millions d’années : la diversité du vivant en est la trace.",tags:["darwin","biologie","science"]},{id:"ren",titre:"Renaissance",domaine:"Histoire",resume:"Entre XIVe et XVIe siècle, arts, sciences et explorations éclatent en Europe : Léonard de Vinci en est l’esprit le plus curieux.",tags:["art","science","europe"]},{id:"imp",titre:"Empires d’Afrique",domaine:"Histoire",resume:"Ghana, Mali, Songhaï, Grande-Zimbabwe : de grands empires ont prospéré sur l’or, le sel, le commerce et l’urbanisme bien avant la colonisation.",tags:["afrique","commerce","or"]},{id:"mer",titre:"Mer et océans",domaine:"Géographie",resume:"L’eau salée couvre plus de 70 % de la planète, régule le climat et abrite une vie que nous cartographions moins bien que la Lune.",tags:["eau","terre","climat"]},{id:"clm",titre:"Climat",domaine:"Géographie",resume:"Le climat est une moyenne de la météo sur trente ans ; le golfe du Mexique, le Sahara et nos saisons en dépendent comme d’une horloge.",tags:["terre","air","sciences"]},{id:"cor",titre:"Cœur",domaine:"Corps humain",resume:"Une pompe-muscle de 300 grammes qui bat cent mille fois par jour et irrigue chaque cellule de sang oxygéné.",tags:["sang","vie","organe"]},{id:"cer",titre:"Cerveau",domaine:"Corps humain",resume:"Quatre-vingt-six milliards de neurones en réseau : penser, sentir et bouger ne sont que des courants et des chimies orchestrées.",tags:["neurone","vie","sens"]},{id:"som",titre:"Sommeil",domaine:"Corps humain",resume:"Chaque nuit le cerveau range la journée, consolide la mémoire et répare le corps ; dormir peu, c’est apprendre moins.",tags:["cerveau","mémoire","vie"]},{id:"mus",titre:"Musique",domaine:"Arts",resume:"Des fréquences organisées dans le temps : rythmes et gammes varient selon les cultures mais le plaisir d’écouter est universel.",tags:["son","art","culture"]},{id:"cin",titre:"Cinéma",domaine:"Arts",resume:"Vingt-quatre images par seconde suffisent à l’œil pour croire au mouvement : le cinéma est une illusion partagée devenue art majeur.",tags:["image","art","technique"]},{id:"lng",titre:"Langues du monde",domaine:"Langue",resume:"Plus de sept mille langues parlées ; chacune découpe le réel à sa façon et en perdre une, c’est perdre une manière de penser.",tags:["parole","culture","mémoire"]},{id:"ecr",titre:"Écriture",domaine:"Langue",resume:"Née à Sumer pour compter les greniers, l’écriture a étendu la mémoire humaine au-delà des individus et des siècles.",tags:["symbole","histoire","mémoire"]},{id:"bio",titre:"Biodiversité",domaine:"Environnement",resume:"Des millions d’espèces liées dans un réseau vivant ; chaque disparité retire un maillon que rien ne remplace.",tags:["vie","nature","équilibre"]},{id:"for",titre:"Forêts",domaine:"Environnement",resume:"Elles respirent pour la planète, abritent la plupart des espèces terrestres et régulent la pluie des continents.",tags:["arbres","climat","nature"]},{id:"rlf",titre:"Récifs coralliens",domaine:"Environnement",resume:"Des villes vivantes bâties par de petits animaux : moins de un pour cent de l’océan, un quart de la vie marine.",tags:["mer","vie","équilibre"]},{id:"dch",titre:"Déchets et recyclage",domaine:"Environnement",resume:"Rien dans la nature ne jette : nos déchets sont des matières qui attendent le bon geste, ou polluent longtemps.",tags:["matière","équilibre","société"]},{id:"slt",titre:"Solaire photovoltaïque",domaine:"Énergie",resume:"La lumière du soleil devient électricité dans une galette de silicium : la Terre reçoit en une heure de soleil de quoi alimenter un an.",tags:["énergie","soleil","technique"]},{id:"eol",titre:"Éolien",domaine:"Énergie",resume:"Le vent est une énergie solaire corrigée par la rotation de la Terre ; ses pales captent ce mouvement devenu courant.",tags:["énergie","vent","technique"]},{id:"nucl",titre:"Nucléaire",domaine:"Énergie",resume:"Fissionner l’uranium libère une énergie immense sans fumée ; la question reste la gestion des déchets et le risque.",tags:["énergie","atome","débat"]},{id:"bat",titre:"Batteries",domaine:"Énergie",resume:"Stockées chimiquement, les électrons attendent leur heure : sans batterie, le solaire et l’éolien ne pourraient suivre la nuit.",tags:["énergie","stockage","technique"]},{id:"urb",titre:"Villes",domaine:"Société",resume:"Nées de greniers et de carrefours, elles logent aujourd’hui plus de la moitié de l’humanité et dessinent son avenir.",tags:["habiter","société","histoire"]},{id:"mon",titre:"Monnaie",domaine:"Société",resume:"Du coquillage au chiffre : la monnaie n’a de valeur que celle de la confiance partagée, et l’économie tout entière s’appuie dessus.",tags:["échange","confiance","société"]},{id:"trv",titre:"Travail",domaine:"Société",resume:"Chaque métier est une réponse à un besoin des autres ; l’automatisation déplace le travail plus qu’il ne le fait disparaître.",tags:["métier","société","technique"]},{id:"edu",titre:"Éducation",domaine:"Société",resume:"Transmettre sans remplacer : apprendre, c’est ajouter à l’élève ce qu’il découvrira seul avec de l’aide.",tags:["école","apprendre","société"]},{id:"ntn",titre:"Internet",domaine:"Société",resume:"Des câbles sous-marins et des routeurs d’abord : le nuage numérique est en réalité un réseau très physique autour de la Terre.",tags:["réseau","données","société"]},{id:"vac",titre:"Vaccins",domaine:"Médecine",resume:"Montrer au corps l’ennemi sans le danger : il en garde la mémoire et répond plus vite la fois suivante.",tags:["corps","médecine","mémoire"]},{id:"ant",titre:"Antibiotiques",domaine:"Médecine",resume:"Des moisissures devenues médicaments : elles tuent les bactéries, et leur usage excessif fabrique des bactéries devenues résistantes.",tags:["médecine","bactérie","équilibre"]},{id:"dgst",titre:"Digestion",domaine:"Corps humain",resume:"Du bol alimentaire à l’énergie, un voyage de trente mètres où chaque organe joue son rôle à l’heure.",tags:["corps","énergie","vie"]}];function XT(t,e){const n=ct(t.titre),i=t.tags.map(s=>ct(s)),r=ct(t.resume);return n.includes(e)?3:i.some(s=>s===e||s.includes(e)||e.includes(s))?2:r.includes(e)?1:0}function YT(t,e){const n=ct(e);return n?t.map((r,s)=>({n:r,i:s,s:XT(r,n)})).filter(r=>r.s>0).sort((r,s)=>s.s-r.s||r.i-s.i).map(r=>r.n):t.slice()}function JT(t){return[...new Set(t.map(e=>e.domaine))].sort((e,n)=>e.localeCompare(n,"fr"))}function KT(t,e){return e?t.filter(n=>n.domaine===e):t.slice()}function ZT(t,e=Math.floor(Date.now()/864e5)){if(!t.length)return null;const n=Math.abs(Math.trunc(e));return t[n%t.length]}function QT(t,e,n=6){const i=new Set(t.tags.map(r=>ct(r)));return e.filter(r=>r.id!==t.id).map(r=>({x:r,s:r.tags.filter(s=>i.has(ct(s))).length*2+(r.domaine===t.domaine?1:0)})).filter(r=>r.s>0).sort((r,s)=>s.s-r.s).slice(0,n).map(r=>r.x)}function eA(t,e,n=jT){const i=Math.min(t.length,Math.max(0,e)+n);return{visibles:t.slice(0,i),reste:t.length-i}}const Vv="nath.encyclo.favoris";function Gv(t){try{const e=JSON.parse(t.getItem(Vv)??"[]");return Array.isArray(e)?[...new Set(e.filter(n=>typeof n=="string"))]:[]}catch{return[]}}function cm(t,e){const n=Gv(t),i=!n.includes(e),r=i?[...n,e]:n.filter(s=>s!==e);return t.setItem(Vv,JSON.stringify(r)),i}function um(t,e){const n=new Set(Gv(e));return t.filter(i=>n.has(i.id))}function tA(t){const e=new Set,n=[];for(const i of t){const r=ct(i.titre||i.sujet);!r||e.has(r)||(e.add(r),n.push({id:`savoir:${r}`,titre:(i.titre||i.sujet).trim(),domaine:"Mes découvertes",resume:i.resume,tags:[],...i.image?{image:i.image}:{},...i.url?{url:i.url}:{}}))}return n}async function nA(t,e,n=fetch,i=""){const r=e.trim();if(!r)return null;try{const s=await n(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i?{modele:i}:{},messages:[{role:"system",content:"Tu es un guide curieux et pédagogue, en français. En 3 ou 4 phrases courtes, donne un fait surprenant et un rapprochement inattendu avec un autre domaine sur le sujet qui vient. Pas de liste, pas de titre."},{role:"user",content:r}]})});if(!s.ok)return null;const a=await s.json(),o=a?.result?.response??a?.response,l=typeof o=="string"?o.trim():"";return l&&l.length<=800?l:null}catch{return null}}function iA(t){return!t.image}function rA(t,e,n){return!t||!t.image||!e||!/^https?:\/\//.test(t.image)||t.titre&&Yo(t.titre)!==Yo(n)||Hv(e,n)?"":t.image}function Hv(t,e){return!t||Yo(t)!==Yo(e)}function Yo(t){return ct(t).replace(/['’]/g," ").replace(/\s+/g," ").trim().replace(/^(?:la |le |les |l |un |une |des |du |de |d )/,"").replace(/s$/,"")}const Bc=[{max:50,palier:"Classe",mensuel:15e3},{max:200,palier:"École",mensuel:4e4},{max:1e3,palier:"Réseau",mensuel:12e4},{max:1/0,palier:"Sur mesure",mensuel:null}];function sA(t){if(!Number.isFinite(t)||t<=0)return{palier:"Sur mesure",mensuel:null};const e=Bc.find(n=>t<=n.max)??Bc[Bc.length-1];return{palier:e.palier,mensuel:e.mensuel}}function dm(t){return t===null?"à convenir":t.toLocaleString("fr-FR").replace(/[\u202f\u00a0]/g," ")+" FCFA"}const qv="nath.flamme",ud=100,aA="Curieux",hm=[aA,"Défricheur","Apprenant","Explorateur","Artisan","Savant","Passeur","Esprit libre"],kc={streak:0,meilleur:0,xp:0,dernier:""},xs=t=>typeof t=="number"&&Number.isFinite(t)&&t>0?Math.floor(t):0;function oA(t=Date.now()){const e=new Date(t),n=`${e.getMonth()+1}`.padStart(2,"0"),i=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${n}-${i}`}const fm=t=>{const[e,n,i]=t.split("-").map(Number);return!e||!n||!i?NaN:Math.floor(Date.UTC(e,n-1,i)/864e5)};function lA(t,e){const n=fm(t),i=fm(e);return Number.isNaN(n)||Number.isNaN(i)?NaN:i-n}function Wv(t){try{const e=t.getItem(qv);if(!e)return{...kc};const n=JSON.parse(e);return!n||typeof n!="object"?{...kc}:{streak:xs(n.streak),meilleur:xs(n.meilleur),xp:xs(n.xp),dernier:typeof n.dernier=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(n.dernier)?n.dernier:""}}catch{return{...kc}}}function $v(t,e){t.setItem(qv,JSON.stringify(e))}function cA(t,e=Date.now()){const n=Wv(t),i=oA(e);if(n.dernier===i)return n;const r=n.dernier&&lA(n.dernier,i)===1?n.streak+1:1,s={streak:r,meilleur:Math.max(n.meilleur,r),xp:n.xp,dernier:i};return $v(t,s),s}function jv(t,e,n=Date.now()){const i=xs(e),r=cA(t,n),s={...r,xp:r.xp+i};return $v(t,s),s}function uA(t){return Math.floor(xs(t)/ud)+1}function dA(t){const e=Math.max(1,Math.floor(t)||1);return hm[Math.min(e-1,hm.length-1)]}function hA(t){return xs(t)%ud/ud}const Xv="nath.journal",fA=200,Ss=t=>typeof t=="string"?t.trim():"",pm=t=>typeof t=="number"&&Number.isFinite(t)?Math.floor(t):0;function pA(t,e){if(!t||typeof t!="object")return null;const n=t,i=Ss(n.titre),r=Ss(n.texte);return!i&&!r?null:{id:typeof n.id=="string"&&n.id?n.id:`entree-${e}-${pm(n.at)}`,titre:i||r.slice(0,48),texte:r||i,origine:Ss(n.origine)||"note",at:pm(n.at)}}function Jo(t){try{const e=t.getItem(Xv);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(pA).filter(i=>i!==null):[]}catch{return[]}}function Yv(t,e){t.setItem(Xv,JSON.stringify(e.slice(0,fA)))}function Jv(t,e,n){const i=Ss(e.titre),r=Ss(e.texte);if(!i&&!r)return null;const s=Date.now(),a={id:`${s}-${Math.random().toString(36).slice(2,8)}`,titre:i||r.slice(0,48),texte:r||i,origine:Ss(e.origine)||"note",at:s};return Yv(t,[a,...Jo(t)]),a}function mm(t,e){const n=ct(e).trim();return n?t.filter(i=>`${ct(i.titre)} ${ct(i.texte)}`.includes(n)):[...t]}function mA(t,e){const n=Jo(t),i=n.filter(r=>r.id!==e);return i.length===n.length?!1:(Yv(t,i),!0)}function gA(t,e=8){return t.filter(n=>n.titre&&n.texte).slice(0,e).map(n=>({verso:n.titre,recto:n.texte}))}const gm="nath.savoir",yr="nath.lexique",de=t=>{const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild},Xe=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e);function vA(t){const e=Ah(),n=de('<button class="savoir-btn" title="Mon coin d’études" aria-label="Ouvrir le coin d’études">🎓</button>'),i=de(`
    <div class="savoir-paneau" hidden role="dialog" aria-label="Coin d'études">
      <div class="savoir-tete">
        <div class="savoir-onglets">
          <button data-on="reviser" class="actif">Réviser</button>
          <button data-on="savoir">Savoir</button>
          <button data-on="encyclo">Encyclopédie</button>
          <button data-on="traduire">Traduire</button>
          <button data-on="entreprise">Entreprise</button>
        </div>
        <button class="savoir-fermer" title="Fermer" aria-label="Fermer">×</button>
      </div>
      <div class="savoir-corps"></div>
    </div>`);document.body.append(n,i);const r=i.querySelector(".savoir-corps");n.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden||y(s)}),i.querySelector(".savoir-fermer").addEventListener("click",()=>i.hidden=!0);let s="reviser",a=null,o=[],l=null,c="",u=!1,d=0,h="",p=null;const v=()=>{try{const I=JSON.parse(t.getItem(gm)??"[]");return Array.isArray(I)?I.filter(Y=>!!Y&&typeof Y=="object"&&typeof Y.sujet=="string"&&typeof Y.resume=="string"):[]}catch{return[]}},_=()=>ld(t.getItem(yr));i.querySelectorAll(".savoir-onglets button").forEach(I=>I.addEventListener("click",()=>{s=I.dataset.on,i.querySelectorAll(".savoir-onglets button").forEach(Y=>Y.classList.toggle("actif",Y===I)),y(s)}));const m=()=>a?Kn(t).find(I=>I.id===a)??null:null,f=()=>a?Kn(t).filter(I=>I.id===a):Kn(t);function y(I){r.innerHTML="",I==="reviser"?E():I==="savoir"?R():I==="encyclo"?L():I==="entreprise"?ae():H()}function E(){const I=Kn(t),Y=de('<select class="savoir-select"><option value="">Tous les paquets</option></select>');for(const P of I){const B=document.createElement("option");B.value=P.id,B.textContent=`${P.nom} (${P.fiches.length})`,P.id===a&&(B.selected=!0),Y.appendChild(B)}Y.addEventListener("change",()=>{a=Y.value||null,l=null,E()}),r.appendChild(Y);const J=de('<div class="savoir-ligne"><input type="text" placeholder="Nouveau paquet (ex. Biologie)" aria-label="Nouveau paquet" /><button>Ajouter</button></div>'),fe=J.querySelector("input");J.querySelector("button").addEventListener("click",()=>{const P=ls(t,fe.value);P?(a=P.id,E()):fe.focus()}),r.appendChild(J);const ee=f().map(P=>PT(P,Date.now())).reduce((P,B)=>({total:P.total+B.total,aRevoir:P.aRevoir+B.aRevoir,revisees:P.revisees+B.revisees}),{total:0,aRevoir:0,revisees:0});r.appendChild(de(`<p class="savoir-stats">${ee.total} carte${ee.total>1?"s":""} · <b>${ee.aRevoir} à revoir</b> · ${ee.revisees} travaillée${ee.revisees>1?"s":""}</p>`));const pe=de('<details class="savoir-import"><summary>Coller des cartes (une par ligne : question :: réponse)</summary><textarea rows="4" placeholder="Capitale du Cameroun :: Yaoundé&#10;2 + 2 :: 4"></textarea><button>Importer</button></details>'),O=pe.querySelector("textarea");pe.querySelector("button").addEventListener("click",()=>{const P=a??ls(t,"Mes cartes")?.id??null;if(!P)return;a=P;let B=0;for(const G of O.value.split(/\r?\n/)){const ne=G.indexOf("::");ne<=0||va(t,P,G.slice(0,ne),G.slice(ne+2))&&B++}E(),B&&e.parler(`${B} cartes rangées dans ${m()?.nom??"Mes cartes"}.`,"posee")}),r.appendChild(pe);const $=de('<div class="savoir-actions"><button class="savoir-dicter">🎤 Dicter un cours</button></div>');$.querySelector(".savoir-dicter").addEventListener("click",()=>{if(r.querySelector(".savoir-session")?.remove(),!e.sttDisponible){r.appendChild(de('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — colle ton cours en texte, ça marche aussi.</p>'));return}r.appendChild(de('<p class="savoir-msg">J’écoute… parle normalement, je retirerai les « euh » tout seul.</p>')),e.ecouter(async P=>{const B=kv(P);if(r.querySelector(".savoir-msg")?.remove(),!B){r.appendChild(de('<p class="savoir-msg">Je n’ai rien entendu de assez net — redicte, sans te presser.</p>'));return}let ne=a;if(!ne){const Re=sn(t),vt=Kn(t).map(dt=>dt.nom),C=Re&&vt.length?await QE(Re,B,vt):null;C&&(ne=Kn(t).find(dt=>dt.nom===C)?.id??null)}const K=ne??ls(t,"Mes cartes")?.id??null;if(!K)return;a=K;let he=0;for(const Re of Oc(B))va(t,K,Re.verso,Re.recto)&&he++;E();const Ie=de(he?`<p class="savoir-msg">${he} carte${he>1?"s":""} née${he>1?"s":""} de ta voix, rangée${he>1?"s":""} dans « ${Xe(m()?.nom??"Mes cartes")} ». Révise quand tu veux.</p>`:'<p class="savoir-msg">Trop court pour faire des cartes — dicte-moi des phrases complètes, une idée par phrase.</p>');r.insertBefore(Ie,r.firstChild),he&&e.parler(`${he} cartes nées de ta dictée.`,"lumineuse")})}),r.appendChild($);const U=de('<div class="savoir-actions"><button class="savoir-reviser">Réviser maintenant</button><button class="savoir-quiz">Quiz du jour</button></div>');U.querySelector(".savoir-reviser").addEventListener("click",()=>{if(o=AT(f(),Date.now()),o.length===0){r.querySelector(".savoir-session")?.remove(),r.appendChild(de('<p class="savoir-msg">Rien à revoir pour l’instant — repose-toi, ou importe des cartes.</p>'));return}T()}),U.querySelector(".savoir-quiz").addEventListener("click",()=>{const P=m()??f().find(B=>B.fiches.length>=2);if(!P){r.appendChild(de('<p class="savoir-msg">Un quiz a besoin d’un paquet d’au moins deux cartes.</p>'));return}l={questions:RT(P,5),index:0,reponses:[],fini:!1},w()}),r.appendChild(U)}function T(){r.querySelector(".savoir-session")?.remove();const I=o.shift();if(!I){r.appendChild(de('<p class="savoir-msg session">Fin de la file 🌿 — tout est revu, la mémoire fait son travail en silence.</p>'));return}const Y=de(`<div class="savoir-session session">
      <p class="savoir-reste">encore ${o.length}</p>
      <p class="savoir-verso">${Xe(I.verso)}</p>
      <div class="savoir-reponse" hidden><p class="savoir-recto">${Xe(I.recto)}</p></div>
      <div class="savoir-actions">
        <button class="savoir-voir">Voir la réponse</button>
        <span class="savoir-noter" hidden>
          <button data-n="difficile">Difficile</button>
          <button data-n="bien">Bien</button>
          <button data-n="facile">Facile</button>
        </span>
      </div>
    </div>`),J=Y.querySelector(".savoir-reponse"),fe=Y.querySelector(".savoir-noter");Y.querySelector(".savoir-voir").addEventListener("click",()=>{J.hidden=!1,fe.hidden=!1,Y.querySelector(".savoir-voir").hidden=!0,e.parler(I.recto,"posee")}),fe.querySelectorAll("button").forEach(z=>z.addEventListener("click",()=>{const ee=a??A(I.id);ee&&LT(t,ee,I.id,z.dataset.n),jv(t,5),T()})),r.appendChild(Y)}function A(I){for(const Y of Kn(t))if(Y.fiches.some(J=>J.id===I))return Y.id;return null}function w(){if(r.querySelector(".savoir-session")?.remove(),!l)return E();const I=l.questions[l.index];if(!I||l.fini){const fe=l.reponses.filter((pe,O)=>pe===l.questions[O].bonne).length,z=l.questions.length;l=null,E();const ee=Math.round(100*fe/(z||1));r.insertBefore(de(`<p class="savoir-msg session">Quiz : ${fe}/${z} (${ee} %). ${ee>=70?"Tu tiens le sujet.":"On creuse encore, tranquillement."}</p>`),r.firstChild),e.parler(`Quiz terminé : ${fe} sur ${z}.`,"lumineuse");return}const Y=de(`<div class="savoir-session session">
      <p class="savoir-reste">question ${l.index+1} / ${l.questions.length}</p>
      <p class="savoir-verso">${Xe(I.enonce)}</p>
      <div class="savoir-choix"></div>
    </div>`),J=Y.querySelector(".savoir-choix");e.parler(I.enonce,"posee"),I.choix.forEach((fe,z)=>{const ee=document.createElement("button");ee.textContent=fe,ee.addEventListener("click",()=>{l.reponses[l.index]=z,[...J.children].forEach((pe,O)=>pe.classList.toggle("juste",O===I.bonne)),ee.classList.toggle("faux",z!==I.bonne),e.parler(z===I.bonne?"Oui, exactement.":fe,z===I.bonne?"lumineuse":"douce"),window.setTimeout(()=>{l.index++,w()},1100)}),J.appendChild(ee)}),r.appendChild(Y)}function R(){const I=de('<div class="savoir-ligne"><input type="text" placeholder="Que veux-tu apprendre ? (ex. la mitose)" aria-label="Sujet" /><button>Chercher</button></div>'),Y=I.querySelector("input"),J=I.querySelector("button"),fe=de('<div class="savoir-resultat"></div>');Y.addEventListener("keydown",P=>{P.key==="Enter"&&z(Y.value.trim())}),J.addEventListener("click",()=>z(Y.value.trim()));function z(P){if(fe.innerHTML="",!P)return;const B=DT(v(),P);B?V(B,fe):x(P,fe)}r.append(I,fe);const ee=de(`<details class="savoir-import"><summary>Grand cerveau en ligne (pour les machines sages)</summary>
      <p class="savoir-note">Sur demande à Nath-Tech, une adresse de cerveau prêté peut être réglée ici : les machines sans grande carte répondent alors plus vite et plus loin. Laisser vide pour éteindre ce secours.</p>
      <div class="savoir-ligne"><input type="text" class="cerv-url" placeholder="https://… (vide pour effacer)" aria-label="Adresse du grand cerveau" /><button class="cerv-ok">Régler</button></div>
      <div class="savoir-ligne"><select class="savoir-select cerv-allure" aria-label="Allure du grand cerveau"></select><button class="cerv-allure-ok">Allure</button></div>
      <p class="savoir-msg cerv-etat"></p></details>`),pe=ee.querySelector(".cerv-url"),O=ee.querySelector(".cerv-etat"),$=sn(t);O.textContent=$?"Le secours est réglé et veille.":"Aucun secours réglé — le cerveau local et le petit moteur suffisent.",ee.querySelector(".cerv-ok").addEventListener("click",()=>{WE(t,pe.value)?(O.textContent=sn(t)?"Le secours est réglé — il répondra dès la prochaine ouverture.":"Secours éteint. Le ciel reste vivant, sans lui.",pe.value=""):O.textContent="Cette adresse ne convient pas — il faut du https."});const U=ee.querySelector(".cerv-allure");for(const P of yh){const B=document.createElement("option");B.value=P.cle,B.textContent=P.nom,U.appendChild(B)}U.value=qE(t),ee.querySelector(".cerv-allure-ok").addEventListener("click",()=>{HE(t,U.value)?O.textContent=Pr(t)?"Son allure est réglée — la prochaine réponse la portera.":"Elle reprend son allure ordinaire.":O.textContent="Cette allure n’existe pas — le choix reste entier."}),r.appendChild(ee)}function V(I,Y){Y.innerHTML="";const J=de(`<div class="savoir-fiche"><h4>${Xe(I.titre)}</h4></div>`);if(I.image&&/^https?:\/\//.test(I.image)){const O=document.createElement("img");O.className="savoir-img",O.src=I.image,O.alt="",O.loading="lazy",J.appendChild(O)}const fe=de(`<p>${Xe(I.resume)}</p>`);J.appendChild(fe);const z=de('<div class="savoir-actions"></div>'),ee=de("<button>En faire des cartes</button>");ee.addEventListener("click",()=>{const O=m()??ls(t,I.sujet);if(!O)return;a=O.id;let $=0;for(const U of Oc(I.resume))va(t,O.id,U.verso,U.recto)&&$++;Y.appendChild(de(`<p class="savoir-msg">${$} carte${$>1?"s":""} rangée${$>1?"s":""} dans « ${Xe(O.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${$} cartes rangées.`,"lumineuse")}),z.appendChild(ee);const pe=/^https?:\/\//.test(I.url)?I.url:"";pe&&z.appendChild(de(`<a class="savoir-lien" href="${Xe(pe)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),Y.append(J,z)}function x(I,Y){const J=de(`<div class="savoir-fiche"><p>« ${Xe(I)} » ne fait pas encore partie de mes connaissances enregistrées.</p>
      <p class="savoir-note">Veux-tu que je me connecte pour ramener le maximum de ressources sur ce sujet ? Seul le sujet sort de l’appareil, rien sur toi.</p>
      <div class="savoir-actions"><button class="oui">Oui, cherche</button><button class="non">Garde pour plus tard</button></div></div>`);J.querySelector(".non").addEventListener("click",()=>Y.innerHTML=""),J.querySelector(".oui").addEventListener("click",async()=>{const fe=de('<p class="savoir-msg">Je cherche…</p>');Y.appendChild(fe);const z=await am(I,fetch);if(fe.remove(),!z){Y.appendChild(de('<p class="savoir-msg">Pas de réponse du net pour l’instant — ou le sujet est trop précis. Réessaie, ou dicte-moi tes propres notes.</p>'));return}const ee={sujet:I,titre:z.titre,resume:z.resume,url:z.url,image:z.image,ramene_a:Date.now()};t.setItem(gm,JSON.stringify(IT(v(),ee))),Y.innerHTML="",V(ee,Y),e.parler("J’ai ramené de quoi apprendre.","lumineuse")}),Y.appendChild(J)}const b=()=>[...zv,...tA(v())];function L(){if(r.innerHTML="",p){Z(p);return}const I=b(),Y=new Set(um(I,t).map(P=>P.id)),J=de(`<div class="savoir-ligne enc-tete"><input type="text" class="enc-champ" placeholder="Cherche un sujet (ex. geometrie, espace…)" aria-label="Recherche encyclopédie" /><button class="enc-fav" title="Mes favoris">★ <span class="enc-fav-n">${Y.size}</span></button></div>`),fe=J.querySelector(".enc-champ");fe.value=c;const z=J.querySelector(".enc-fav");if(z.classList.toggle("actif",u),fe.addEventListener("input",()=>{c=fe.value,d=0,L();const P=r.querySelector(".enc-champ");P&&(P.focus(),P.setSelectionRange(P.value.length,P.value.length))}),z.addEventListener("click",()=>{u=!u,d=0,L()}),r.appendChild(J),!c&&!u&&!h){const P=ZT(I);if(P){const B=de(`<button class="enc-jour">✨ Découverte du jour · ${Xe(P.titre)}<small> ${Xe(P.domaine)}</small></button>`);B.addEventListener("click",()=>{p=P,L()}),r.appendChild(B)}}const ee=de('<div class="enc-domaines"></div>'),pe=[{nom:"Tous",val:""},...JT(I).map(P=>({nom:P,val:P}))];for(const P of pe){const B=de(`<button class="enc-dom${!u&&h===P.val?" actif":""}">${Xe(P.nom)}</button>`);B.addEventListener("click",()=>{u=!1,h=P.val,d=0,L()}),ee.appendChild(B)}r.appendChild(ee);let O=YT(I,c);u&&(O=O.filter(P=>Y.has(P.id))),O=KT(O,h);const $=eA(O,d),U=de('<div class="enc-grille"></div>');for(const P of $.visibles){const B=de(`<div class="enc-carte" role="button" tabindex="0">
        <button class="enc-etoile${Y.has(P.id)?" mise":""}" aria-label="Favori">${Y.has(P.id)?"★":"☆"}</button>
        <h5>${Xe(P.titre)}</h5><p class="enc-domaine">${Xe(P.domaine)}</p><p class="enc-resume">${Xe(P.resume)}</p></div>`);B.querySelector(".enc-etoile").addEventListener("click",G=>{G.stopPropagation(),cm(t,P.id),L()}),B.addEventListener("click",()=>{p=P,L()}),B.addEventListener("keydown",G=>{G.key==="Enter"&&(p=P,L())}),U.appendChild(B)}if(r.appendChild(U),$.visibles.length||r.appendChild(de(`<p class="savoir-msg">${u?"Aucune étoile ici pour l’instant — clique sur ☆ d’une carte pour la garder.":"Rien sous ce nom — Essaie un mot plus simple, ou va le chercher dans l’onglet Savoir."}</p>`)),$.reste>0){const P=de(`<div class="savoir-actions"><button>Afficher plus (${$.reste})</button></div>`);P.querySelector("button").addEventListener("click",()=>{d=$.visibles.length,L()}),r.appendChild(P)}else if($.visibles.length){const P=$.visibles.length>1?"notices":"notice";r.appendChild(de(`<p class="savoir-note">${$.visibles.length} ${P} sur l’étagère.</p>`))}}function Z(I){r.innerHTML="";const Y=b(),J=um([I],t).length>0,fe=de(`<div class="savoir-ligne"><button class="enc-retour">← Étagère</button><button class="enc-etoile${J?" mise":""}">${J?"★ Favori":"☆ Mettre en favori"}</button><button class="enc-journal">✎ Garder au journal</button></div>`);fe.querySelector(".enc-retour").addEventListener("click",()=>{p=null,L()}),fe.querySelector(".enc-journal").addEventListener("click",P=>{Jv(t,{titre:I.titre,texte:I.resume,origine:"encyclo"});const B=P.currentTarget;B.textContent="✓ Gardé",B.disabled=!0}),fe.querySelector(".enc-etoile").addEventListener("click",()=>{cm(t,I.id),Z(I)}),r.appendChild(fe);const z=de(`<div class="savoir-fiche"><h4>${Xe(I.titre)} <small class="enc-domaine">${Xe(I.domaine)}</small></h4></div>`);if(I.image&&/^https?:\/\//.test(I.image)){const P=document.createElement("img");P.className="savoir-img",P.src=I.image,P.alt="",P.loading="lazy",z.appendChild(P)}z.appendChild(de(`<p>${Xe(I.resume)}</p>`)),r.appendChild(z);const ee=QT(I,Y);if(ee.length){const P=de('<div class="enc-liens"><p class="savoir-note">Liens extraordinaires</p></div>');for(const B of ee){const G=de(`<button class="enc-lien">${Xe(B.titre)}</button>`);G.addEventListener("click",()=>{p=B,L()}),P.appendChild(G)}r.appendChild(P)}const pe=de('<div class="savoir-actions"></div>'),O=de("<button>En faire des cartes</button>");if(O.addEventListener("click",()=>{const P=m()??ls(t,I.titre);if(!P)return;a=P.id;let B=0;for(const G of Oc(I.resume))va(t,P.id,G.verso,G.recto)&&B++;r.appendChild(de(`<p class="savoir-msg">${B} carte${B>1?"s":""} rangée${B>1?"s":""} dans « ${Xe(P.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${B} cartes rangées.`,"lumineuse")}),pe.appendChild(O),iA(I)){const P=de("<button>Chercher une illustration</button>");P.addEventListener("click",async()=>{P.disabled=!0,P.textContent="Je regarde…";const B=await am(I.titre,fetch);if(Hv(p?.titre??null,I.titre))return;const G=rA(B,p?.titre??"",I.titre),ne=r.querySelector(".savoir-fiche");if(G&&ne&&!ne.querySelector("img")){const K=document.createElement("img");K.className="savoir-img",K.src=G,K.alt="",K.loading="lazy",K.onerror=()=>K.remove();const he=ne.querySelector("h4");ne.insertBefore(K,he?he.nextSibling:null),P.remove()}else P.disabled=!1,P.textContent="Chercher une illustration",r.appendChild(de('<p class="savoir-msg">Le net n’a pas d’image pour ce sujet — ou bien ce n’est pas le bon.</p>'))}),pe.appendChild(P)}const $=sn(t);if($){const P=de("<button>Approfondir avec le grand cerveau</button>");P.addEventListener("click",async()=>{P.disabled=!0;const B=de('<p class="savoir-msg">Je consulte le grand cerveau…</p>');r.appendChild(B);const G=await nA($,I.titre,fetch,Pr(t));B.remove(),P.disabled=!1,r.appendChild(de(`<p class="savoir-msg">${G?Xe(G):"Le grand cerveau ne répond pas pour l’instant — elle reviendra, plus tard."}</p>`))}),pe.appendChild(P)}const U=I.url&&/^https?:\/\//.test(I.url)?I.url:"";U&&pe.appendChild(de(`<a class="savoir-lien" href="${Xe(U)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),r.appendChild(pe)}function H(){const I=de('<input type="text" class="trad-langue" placeholder="Ta langue (ex. wolof, ewondo…)" aria-label="Langue" />'),Y=de('<textarea class="trad-phrase" rows="2" placeholder="Écris (ou dicte dans la bulle du bas)…" aria-label="Phrase à traduire"></textarea>'),J=de('<div class="savoir-resultat"></div>'),fe=de('<div class="savoir-actions"><button class="trad-faire">Traduire</button></div>'),z=de(`<details class="savoir-import"><summary>Ajouter à mon lexique (il reste ici, hors-ligne)</summary>
      <div class="savoir-actions"><button class="trad-dicter">🎤 Dicter un mot — dites « bonjour veut dire… »</button></div>
      <div class="savoir-ligne"><input type="text" placeholder="mot français" aria-label="Mot français" /><input type="text" placeholder="traduction dans ta langue" aria-label="Traduction" /><button>Ajouter</button></div></details>`);z.querySelector(".trad-dicter").addEventListener("click",()=>{if(!e.sttDisponible){J.innerHTML="",J.appendChild(de('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — écris le mot ci-dessous.</p>'));return}const G=I.value.trim();J.innerHTML="",J.appendChild(de('<p class="savoir-msg">J’écoute… dis par exemple « bonjour veut dire naka nga def ».</p>')),e.ecouter(ne=>{J.innerHTML="";const K=Bv(ne);if(!K){J.appendChild(de(`<p class="savoir-msg">J’ai entendu « ${Xe(ne)} » sans voir le couple — recommence avec « mot veut dire traduction ».</p>`));return}if(!G){ee.value=K.de,pe.value=K.a,J.appendChild(de('<p class="savoir-msg">Donne-moi le nom de la langue en haut, puis appuie sur Ajouter — tout est prêt.</p>'));return}t.setItem(yr,JSON.stringify(ds(_(),K.de,K.a,G))),J.appendChild(de(`<p class="savoir-msg">${Xe(K.de)} → ${Xe(K.a)}, rangé dans mon carnet.</p>`)),e.parler(`${K.de} veut dire ${K.a}.`,"lumineuse")})});const[ee,pe]=[...z.querySelectorAll("input")];z.querySelector(".savoir-ligne button").addEventListener("click",()=>{const G=I.value;if(!G.trim()||!ee.value.trim()||!pe.value.trim())return;const ne=ld(t.getItem(yr));t.setItem(yr,JSON.stringify(ds(ne,ee.value,pe.value,G))),ee.value="",pe.value="",e.parler("C’est dans mon carnet.","douce")}),I.value=localStorage.getItem("nath.trad.langue")??"",I.addEventListener("change",()=>localStorage.setItem("nath.trad.langue",I.value)),fe.querySelector(".trad-faire").addEventListener("click",()=>{const G=I.value,ne=Iv(Y.value,G,_());if(J.innerHTML="",ne.resultat){const K=de(`<div class="savoir-fiche"><p class="trad-out">${Xe(ne.resultat)}</p></div>`),he=de("<button>Écouter</button>");he.addEventListener("click",()=>e.parler(ne.resultat,"posee")),K.appendChild(he),J.appendChild(K),ne.manques.length&&(J.appendChild(de(`<p class="savoir-note">mots que je ne connais pas encore : ${Xe(ne.manques.join(", "))} — ajoute-les ci-dessous, ton lexique grandit pour toujours.</p>`)),O())}else{const K=Uv(G);if(K.length){const he=de(`<p class="savoir-msg">Je ne connais encore rien dans cette langue — mais on m'a donné des mots sûrs en « ${Xe(G.trim())} ».</p>`),Ie=de("<button>Charger ce socle de mots</button>");Ie.addEventListener("click",()=>{let Re=_();for(const vt of K)Re=ds(Re,vt.de,vt.a,G.trim());t.setItem(yr,JSON.stringify(Re)),J.innerHTML="",J.appendChild(de(`<p class="savoir-msg">${K.length} mots de vie rangés dans mon carnet. Écris une phrase, je saurai répondre.</p>`)),e.parler("Le socle est chargé. Ton lexique peut grandir.","lumineuse")}),he.appendChild(Ie),J.appendChild(he)}else J.appendChild(de('<p class="savoir-msg">Je ne connais encore aucun mot dans cette langue. Sème ton lexique une entrée à la fois, ou colle le carnet d’un autre plus bas — ensemble on traduit tout le monde.</p>'));O()}});function O(){const G=WT(I.value);if(!G)return $();const ne=de('<div class="savoir-actions"><button class="trad-filet">Demander au filet gratuit (cette phrase sortira de l’appareil)</button></div>');ne.querySelector(".trad-filet").addEventListener("click",async()=>{const K=ne.querySelector("button"),he=Y.value.trim();if(!he)return;K.disabled=!0,K.textContent="Je demande…";const Ie=await $T(he,"fr",G,fetch);if(ne.remove(),!Ie){J.appendChild(de('<p class="savoir-msg">Le filet n’a rien pu pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));return}const Re=sn(t);if(Re&&await eT(Re,he,Ie,I.value.trim())===!1){J.appendChild(de('<p class="savoir-msg">Le filet a répondu, mais ça ne me semble pas fidèle à ta phrase — une proposition douteuse ne se range pas. Ton carnet ne garde que le juste.</p>')),e.parler("Cette traduction ne me semble pas juste — on ne la range pas.","douce");return}U(Ie,"filet gratuit",he)}),J.appendChild(ne)}function $(){const G=sn(t);if(!G)return;const ne=de('<div class="savoir-actions"><button class="trad-cerveau">Demander au grand cerveau en ligne (cette phrase sortira de l’appareil)</button></div>');ne.querySelector(".trad-cerveau").addEventListener("click",async()=>{const K=ne.querySelector("button"),he=Y.value.trim();if(!he)return;K.disabled=!0,K.textContent="Je demande…";const Ie=await jE(G,he,I.value.trim(),fetch);if(ne.remove(),!Ie){J.appendChild(de('<p class="savoir-msg">Le grand cerveau n’a rien su pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));return}U(Ie,"grand cerveau en ligne",he)}),J.appendChild(ne)}function U(G,ne,K){const he=de(`<div class="savoir-fiche"><p class="trad-out">${Xe(G)}</p><p class="savoir-note">proposition du ${ne} — vérifie avec ton oreille ; si c’est juste, range-le : ça rendra service à tout le monde.</p></div>`),Ie=de("<button>Ranger dans mon carnet</button>");Ie.addEventListener("click",()=>{const Re=I.value.trim();!Re||!K||(t.setItem(yr,JSON.stringify(ds(_(),K,G,Re))),Ie.textContent="Rangé 🌿",Ie.disabled=!0,e.parler("Merci — ton carnet est un peu plus monde.","douce"))}),he.appendChild(Ie),J.appendChild(he)}const P=de(`<details class="savoir-import"><summary>Mon carnet complet — le prêter, ou emprunter celui d’un autre</summary>
      <div class="savoir-actions"><button class="trad-copier">Copier tout mon lexique</button></div>
      <textarea class="trad-collecte" rows="3" placeholder="les mots copiés se collent ici pour être prêtés" aria-label="Mon lexique à prêter" hidden></textarea>
      <textarea class="trad-import" rows="3" placeholder="Colle ici le carnet d’un autre (une ligne par mot : langue | mot :: traduction)" aria-label="Lexique à importer"></textarea>
      <div class="savoir-actions"><button class="trad-importer">Ajouter ces mots au mien</button></div></details>`),B=P.querySelector(".trad-collecte");P.querySelector(".trad-copier").addEventListener("click",async()=>{const G=OT(_());if(!G){e.parler("Mon carnet est encore vide — ajoute des mots, il sera prêt à partager.","douce");return}try{await navigator.clipboard.writeText(G),J.innerHTML="",J.appendChild(de(`<p class="savoir-msg">${Xe(String(G.split(`
`).length))} mots copiés — colle-les chez qui veut, son lexique grandira.</p>`)),e.parler("C’est copié. Tu peux le prêter.","lumineuse")}catch{B.hidden=!1,B.value=G,B.select(),J.appendChild(de('<p class="savoir-note">Sélectionne tout dans la case et copie — le carnet est prêt à être prêté.</p>'))}}),P.querySelector(".trad-importer").addEventListener("click",()=>{const G=P.querySelector(".trad-import").value,ne=_(),K=BT(G,ne),he=K.length-ne.length;if(he<=0){J.appendChild(de('<p class="savoir-msg">Rien de nouveau là-dedans — ou les lignes ne sont pas dans le format « langue | mot :: traduction ».</p>'));return}t.setItem(yr,JSON.stringify(K)),P.querySelector(".trad-import").value="",J.appendChild(de(`<p class="savoir-msg">${Xe(String(he))} mots reçus d’un autre — merci à lui. Notre lexique est plus fort.</p>`)),e.parler(`${he} mots reçus. Merci à celui qui les a semés.`,"douce")}),r.append(I,Y,fe,J,z,P)}let te=null;const re=document.getElementById("patte"),Q=re?re.innerHTML:"";function X(I){te===null&&(te=document.title);const Y=lm(I);document.documentElement.style.setProperty("--teinte",Y);let J=document.querySelector('meta[name="theme-color"]');J||(J=document.createElement("meta"),J.name="theme-color",document.head.appendChild(J)),J.content=Y,document.title=I.actif?I.slogan?`${I.nom} — ${I.slogan}`:I.nom:te,re&&(re.innerHTML=I.actif?`${Xe(I.nom)} — <span>${Xe(I.slogan||"l’assistant vivant")}</span>`:Q)}function ae(){const I=ha(t),Y=de('<div class="savoir-resultat"></div>');if(I.actif){const z=de(`<div class="savoir-fiche"><h4>${Xe(I.nom)}</h4><p>${Xe(I.slogan)}</p>
        <p class="savoir-note">Cet appareil porte le visage de « ${Xe(I.organisation)} ».</p></div>`),ee=de('<div class="savoir-actions"><button class="ent-perso">Revenir en mode personnel</button></div>');ee.querySelector(".ent-perso").addEventListener("click",()=>{VT(t),X(ha(t)),y("entreprise"),e.parler("Je reprends mon visage habituel.","douce")}),r.append(z,ee)}const J=de(`<div class="savoir-fiche">
      <p class="savoir-note">Pour une école, une ONG, une équipe : la clé se demande à Nath-Tech avec le nom exact de l’organisation. Rien n’est bridé, on peut toujours revenir.</p>
      <div class="savoir-ligne"><input type="text" class="ent-org" placeholder="Organisation (ex. Lycée Bilingue de Douala)" aria-label="Organisation" /></div>
      <div class="savoir-ligne"><input type="text" class="ent-nom" placeholder="Nom visible (ex. LBD)" aria-label="Nom de la marque" /><input type="text" class="ent-slogan" placeholder="Slogan (facultatif)" aria-label="Slogan" /></div>
      <div class="savoir-ligne"><input type="color" class="ent-teinte" value="${Xe(lm(I))}" aria-label="Teinte" /><input type="text" class="ent-cle" placeholder="Clé d’équipe (blocs de 4)" aria-label="Clé d’équipe" /></div>
      <div class="savoir-actions"><button class="ent-ok">Habiller l’app pour mon équipe</button></div>
    </div>`);J.querySelector(".ent-ok").addEventListener("click",()=>{const z=pe=>J.querySelector(`.${pe}`).value;zT(t,{organisation:z("ent-org"),cle:z("ent-cle"),nom:z("ent-nom"),slogan:z("ent-slogan"),couleur:z("ent-teinte")})?(X(ha(t)),y("entreprise"),e.parler(`Désormais, je travaille pour ${ha(t).nom}.`,"lumineuse")):(Y.innerHTML="",Y.appendChild(de('<p class="savoir-msg">Cette clé n’ouvre rien pour ce nom-là — vérifie le nom exact de l’organisation et la clé, bloc par bloc.</p>')))});const fe=de(`<div class="savoir-fiche">
      <p class="savoir-note">Nath Entreprise pour une école, une ONG, une équipe — toute l’équipe habillée, un seul prix :</p>
      <div class="savoir-ligne"><input type="number" class="ent-nb" min="1" placeholder="Nombre de personnes à équiper" aria-label="Nombre de personnes" /><button class="ent-devis">Estimer</button></div>
      <div class="ent-devis-out"></div>
    </div>`);fe.querySelector(".ent-devis").addEventListener("click",()=>{const z=Number(fe.querySelector(".ent-nb").value),ee=fe.querySelector(".ent-devis-out");if(ee.innerHTML="",!Number.isFinite(z)||z<=0){ee.appendChild(de('<p class="savoir-msg">Entre d’abord le nombre de personnes à équiper.</p>'));return}const pe=sA(z),O=pe.mensuel===null?`<b>${Xe(pe.palier)}</b> — ${Xe(dm(null))} : parle-nous de ton réseau, on trouvera le juste chiffre.`:`<b>${Xe(pe.palier)}</b> — ${Xe(dm(pe.mensuel))} par mois pour toute l’équipe, soit environ ${Math.round(pe.mensuel/z).toLocaleString("fr-FR")} F par personne. Et plus vous êtes nombreux, moins chaque tête coûte.`;ee.appendChild(de(`<p class="savoir-msg">${O}</p>`)),ee.appendChild(de('<p class="savoir-note">Accord direct avec Nath-Tech (mobile money), puis la clé exacte de ton organisation. Le gratuit de chacun reste entier, toujours.</p>'))}),r.append(J,Y,fe)}return X(ha(t)),n}const dd="nath",Kv=1,_A=["nath.","nuage."];function Zv(t){return _A.some(e=>t.startsWith(e))}function xA(t){const e={};for(let n=0;n<t.length;n++){const i=t.key(n);if(i&&Zv(i)){const r=t.getItem(i);r!==null&&(e[i]=r)}}return JSON.stringify({coffre:dd,version:Kv,donnees:e})}function SA(t){try{const e=JSON.parse(t);return!e||typeof e!="object"||e.coffre!==dd||typeof e.version!="number"||e.version>Kv||!e.donnees||typeof e.donnees!="object"?null:{coffre:dd,version:e.version,donnees:e.donnees}}catch{return null}}function bA(t,e){const n=SA(e);if(!n)return 0;let i=0;for(const[r,s]of Object.entries(n.donnees))Zv(r)&&typeof s=="string"&&(t.setItem(r,s),i++);return i}const Qv="nath.trad.carnet";function ba(t){return ld(t.getItem(Qv))}function MA(t,e,n,i){const r=cd(i),s=ds(ba(t),e,n,r);return s.length===0||t.setItem(Qv,JSON.stringify(s)),s}function yA(t,e,n){const i=cd(e),r=ba(n).filter(a=>cd(a.langue)===i),s=[...Uv(i),...r];return Iv(t,i,s)}const EA=new Set(["de","du","des","le","la","les","un","une","et","ou","a","au","aux","en","dans","pour","avec","sans","sur","sous","chez","plus","très","peu","beaucoup","quelques","some","the","of","with","je","j ai","ai","il","elle","on","nous","vous","ils","y","est","sont","faire","mettre"]),TA=t=>t.replace(/œ/g,"oe").replace(/æ/g,"ae");function Ma(t){const n=TA(ct(t)).split(" ").filter(i=>i.length>1&&!EA.has(i)&&!/^\d+$/.test(i)).join(" ");return n.length>3&&/s$/.test(n)?n.slice(0,-1):n}function qa(t){const e=[],n=new Set;for(const i of t.split(/[,;/\n]|\s+et\s+/i)){const r=Ma(i);!r||n.has(r)||(n.add(r),e.push(r))}return e}function AA(t){const e=/(\d+)/.exec(t);if(!e)return 1;const n=Number(e[1]);return Number.isFinite(n)&&n>0&&n<=99?Math.floor(n):1}async function Fl(t){const e=t.question.trim(),n=t.endpoint.trim().replace(/\/+$/,"");if(!n||!e||!t.consigne.trim())return null;try{const i=await t.fetchImpl(`${n}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t.modele?{modele:t.modele}:{},messages:[{role:"system",content:`${t.consigne}
Tu réponds toujours en français.`},{role:"user",content:e}]})});if(!i.ok)return null;const r=await i.json(),s=r?.result?.response??r?.response,a=typeof s=="string"?s.trim():"";return a&&a.length<=(t.max??800)?a:null}catch{return null}}const e_=[{id:"ome",nom:"Omelette des voisins",type:"dîner",minutes:10,ingredients:["oeuf","oignon","tomate","huile"]},{id:"sal",nom:"Salade croque-frais",type:"encas",minutes:5,ingredients:["concombre","tomate","citron","huile"]},{id:"rib",nom:"Riz sauté du soir",type:"dîner",minutes:15,ingredients:["riz","oeuf","oignon","carotte","huile"]},{id:"pou",nom:"Poulet tomate et riz",type:"plat",minutes:45,ingredients:["poulet","tomate","oignon","riz","huile"]},{id:"poi",nom:"Poisson braisé, citron et piment",type:"plat",minutes:35,ingredients:["poisson","citron","piment","oignon","huile"]},{id:"nie",nom:"Niébé en sauce",type:"plat",minutes:50,ingredients:["niebe","oignon","tomate","huile","piment"]},{id:"tho",nom:"Riz au thon express",type:"dîner",minutes:12,ingredients:["thon","riz","oignon","tomate"]},{id:"ign",nom:"Igname pilée, sauce verte",type:"plat",minutes:40,ingredients:["igname","epinard","piment","oignon"]},{id:"pat",nom:"Purée de patate douce",type:"accompagnement",minutes:25,ingredients:["patate","lait","beurre","sucre"]},{id:"sem",nom:"Semoule aux légumes",type:"plat",minutes:20,ingredients:["semoule","carotte","oignon","huile","tomate"]},{id:"gat",nom:"Gâteau simple de la maison",type:"dessert",minutes:45,ingredients:["farine","sucre","oeuf","lait","huile"]},{id:"cre",nom:"Crème banane et cacao",type:"dessert",minutes:10,ingredients:["banane","lait","cacao","sucre"]},{id:"smoothie",nom:"Smoothie mangue-orange",type:"boisson",minutes:5,ingredients:["mangue","orange","lait","sucre"]},{id:"jus",nom:"Jus de gingembre citronné",type:"boisson",minutes:15,ingredients:["gingembre","citron","sucre","eau"]},{id:"the",nom:"Thé à la menthe",type:"boisson",minutes:8,ingredients:["the","menthe","sucre","eau"]},{id:"pouletfa",nom:"Poulet rôti aux quatre épices",type:"plat",minutes:70,ingredients:["poulet","ail","gingembre","piment","huile"]},{id:"sau",nom:"Sauce tomate arachide",type:"sauce",minutes:35,ingredients:["tomate","arachide","oignon","piment","huile"]},{id:"yaour",nom:"Yaourt frais aux fruits",type:"dessert",minutes:5,ingredients:["yaourt","banane","miel"]},{id:"lap",nom:"Laitue trempée dans le chaud",type:"accompagnement",minutes:6,ingredients:["laitue","citron","huile","sel"]},{id:"paineu",nom:"Pain perdu sucré",type:"encas",minutes:10,ingredients:["pain","oeuf","lait","sucre"]}];function vm(t){return qa(t)}const wA=3;function t_(t,e){const n=new Set(t.flatMap(s=>qa(String(s))));if(!n.size)return[];const i=Math.max(0,Math.floor(wA)),r=[];for(const s of e_){const a=s.ingredients.filter(l=>!n.has(l));!(s.ingredients.length-a.length)||a.length>i||r.push({plat:s,manquants:a})}return r.sort((s,a)=>s.manquants.length-a.manquants.length||s.plat.minutes-a.plat.minutes||s.plat.nom.localeCompare(a.plat.nom,"fr"))}function CA(t){const e=new Set(t.flatMap(i=>qa(String(i)))),n=new Map;for(const i of t_(t).slice(0,3))for(const r of i.manquants)n.set(r,(n.get(r)??0)+1);return[...n.entries()].filter(([i])=>!e.has(i)).sort((i,r)=>r[1]-i[1]||i[0].localeCompare(r[0],"fr")).map(([i])=>i)}function RA(t){const e=Math.floor(t);return!Number.isFinite(e)||e<=0?[]:e_.filter(n=>n.minutes<=e).sort((n,i)=>n.minutes-i.minutes)}async function LA(t,e,n=fetch,i=""){return e.length<2?null:Fl({endpoint:t,modele:i,fetchImpl:n,max:800,consigne:"Tu es cuisinier et honnête. En français, en trois idées courtes, propose ce que ces ingrédients permettent de faire, avec le temps de cuisson et une astuce d’assaisonnement. N’invente pas d’ingrédient absent.",question:qa(e.join(", ")).join(", ")})}const PA=[{nom:"Œuf",unite:"unité",kcal:78,p:6,g:1,l:5,alias:["oeuf","uf","oeufs"]},{nom:"Banane",unite:"unité",kcal:90,p:1,g:23,l:0,alias:["banane"]},{nom:"Pomme",unite:"unité",kcal:72,p:0,g:19,l:0,alias:["pomme"]},{nom:"Orange",unite:"unité",kcal:47,p:1,g:12,l:0,alias:["orange"]},{nom:"Mangue",unite:"unité",kcal:60,p:1,g:15,l:0,alias:["mangue"]},{nom:"Tomate",unite:"unité",kcal:18,p:1,g:4,l:0,alias:["tomate"]},{nom:"Concombre",unite:"unité",kcal:12,p:1,g:2,l:0,alias:["concombre"]},{nom:"Carotte",unite:"unité",kcal:25,p:1,g:6,l:0,alias:["carotte"]},{nom:"Oignon",unite:"unité",kcal:40,p:1,g:9,l:0,alias:["oignon"]},{nom:"Pain",unite:"tranche",kcal:80,p:3,g:15,l:1,alias:["pain","tranche"]},{nom:"Riz cuit",unite:"portion",kcal:130,p:3,g:28,l:0,alias:["riz","garba"]},{nom:"Pâtes cuites",unite:"portion",kcal:157,p:6,g:31,l:1,alias:["pate","spaghetti"]},{nom:"Semoule",unite:"portion",kcal:157,p:6,g:33,l:0,alias:["semoule","couscous"]},{nom:"Igname",unite:"portion",kcal:118,p:2,g:27,l:0,alias:["igname","patate"]},{nom:"Niébé cuit",unite:"portion",kcal:120,p:8,g:21,l:0,alias:["niebe","haricot","lentille"]},{nom:"Poulet cuit",unite:"portion",kcal:165,p:31,g:0,l:4,alias:["poulet","volaille"]},{nom:"Poisson cuit",unite:"portion",kcal:135,p:20,g:0,l:5,alias:["poisson","capitaine","tilapia"]},{nom:"Thon en boîte",unite:"unité",kcal:116,p:26,g:0,l:1,alias:["thon"]},{nom:"Arachide",unite:"cuillère",kcal:94,p:4,g:3,l:8,alias:["arachide","cacahuede","cacahuete"]},{nom:"Lait",unite:"verre",kcal:60,p:3,g:5,l:3,alias:["lait"]},{nom:"Yaourt",unite:"pot",kcal:59,p:10,g:4,l:0,alias:["yaourt","yogourt","lait fermente"]},{nom:"Fromage",unite:"portion",kcal:115,p:7,g:1,l:9,alias:["fromage","vache"]},{nom:"Huile",unite:"cuillère",kcal:119,p:0,g:0,l:14,alias:["huile"]},{nom:"Beurre",unite:"cuillère",kcal:102,p:0,g:0,l:12,alias:["beurre","margarine"]},{nom:"Sucre",unite:"cuillère",kcal:48,p:0,g:12,l:0,alias:["sucre","miel"]},{nom:"Farine de blé",unite:"cuillère",kcal:38,p:1,g:8,l:0,alias:["farine"]},{nom:"Cacao",unite:"cuillère",kcal:12,p:1,g:1,l:1,alias:["cacao","chocolat"]},{nom:"Épinard",unite:"assiette",kcal:23,p:3,g:4,l:0,alias:["epinard","feu","légume vert"]},{nom:"Laitue",unite:"assiette",kcal:8,p:1,g:1,l:0,alias:["laitue","salade"]},{nom:"Avocat",unite:"unité",kcal:80,p:1,g:4,l:7,alias:["avocat","caiman"]}];function DA(t){const e=Ma(t);return e?PA.find(n=>Ma(n.nom)===e||(n.alias??[]).some(i=>Ma(i)===e))??null:null}const nr=t=>Math.round(t*10)/10;function IA(t){const e=t.split(/[,;/\n]|\s+et\s+/i).map(s=>s.trim()).filter(Boolean),n=[],i=[];for(const s of e){const a=DA(s);if(!a){const l=Ma(s);l&&!i.includes(l)&&i.push(l);continue}const o=a.unite==="unité"?AA(s):1;n.push({nom:a.nom,quantite:o,kcal:nr(a.kcal*o),p:nr(a.p*o),g:nr(a.g*o),l:nr(a.l*o)})}const r=n.reduce((s,a)=>({kcal:s.kcal+a.kcal,p:s.p+a.p,g:s.g+a.g,l:s.l+a.l}),{kcal:0,p:0,g:0,l:0});return{articles:n,inconnus:i,total:{kcal:nr(r.kcal),p:nr(r.p),g:nr(r.g),l:nr(r.l)}}}const NA={leger:"Peu de choses sur l’assiette : ajoute un féculent ou une poignée de légumineuses pour tenir la journée.",correct:"Bel équilibre. Pense à la verdure et à l’eau avant de quitter la table.",copieux:"Beaucoup d’énergie d’un coup : marche vingt minutes et garde le reste pour le prochain repas."};function UA(t){const e=Number.isFinite(t.kcal)?t.kcal:0,n=e<400?"leger":e<=800?"correct":"copieux";return{equilibre:n,mot:NA[n]}}async function FA(t,e,n=fetch,i=""){const r=qa(e).length?e.trim():"";return r?Fl({endpoint:t,modele:i,fetchImpl:n,max:800,consigne:"Tu es nutritionniste de quartier, en français. En trois phrases, dis ce qui manque ou ce qui est de trop dans cette assiette, et un seul remplacement simple à portée de main. Pas de chiffre inventé, pas de diagnostic.",question:r.slice(0,800)}):null}const OA=12,_m=180,BA=t=>{const e=t.replace(/\s+/g," ").trim(),n=e.length>_m?`${e.slice(0,_m).replace(/\s\S*$/,"")}…`:e;if(!n)return"";const i=/[.!?…]$/.test(n)?n:`${n}.`;return i.charAt(0).toUpperCase()+i.slice(1)};function kA(t){return t.split(new RegExp("(?<=[.!?;])\\s+|\\n+")).map(e=>e.trim()).filter(e=>e.length>=OA&&e.split(" ").length>=3)}function xm(t,e=5){const n=kA(t);if(!n.length)return[];const i=Math.max(1,Math.floor(e)),r=new Set,s=[];for(let a=0;a<n.length&&s.length<i;a++){const o=BA(n[a]),l=ct(o);!o||r.has(l)||(r.add(l),s.push(o))}return s}function Sm(t){return t.map(e=>e.trim()).filter(Boolean).map(e=>{const n=e.split(" ").slice(0,6).join(" ");return{verso:n.length>58?`${n.slice(0,58).replace(/\s\S*$/,"")}…`:n,recto:e}})}async function zA(t,e,n=fetch,i=""){const r=e.trim();return r.length<40?null:Fl({endpoint:t,modele:i,fetchImpl:n,max:900,consigne:"Tu résumes en français, en 4 ou 5 puces courtes commençant par « - », uniquement ce que le texte affirme. Pas d’introduction, pas de conclusion, pas d’inventaire de ce que tu as fait.",question:r.slice(0,6e3)})}function VA(t){const e=t.split(/\n+/).map(r=>r.trim()).filter(Boolean),n=[],i=[];for(const r of e)(/[?？]/.test(r)?n:i).push(r);return{donnees:i,questions:n}}function bm(t){const e=t.trim();return[`Relis la question${e?` « ${e} »`:""} une première fois, puis souligne exactement ce qui est demandé.`,"Écris à part toutes les données utiles, avec leurs unités : ce que l’énoncé donne, rien de plus.","Choisis la règle, la formule ou le principe qui relie ces données à ce que tu cherches.","Fais le calcul une ligne par opération, sans rien sauter : une ligne, un signe, un résultat.","Vérifie : l’unité attendue est-elle là, l’ordre de grandeur est-il raisonnable, le sens de la réponse tient-il ?","Rédige une réponse complète en une phrase, et garde la trace pour la refaire dans trois jours."]}async function GA(t,e,n=fetch,i=""){const r=e.trim();return r?Fl({endpoint:t,modele:i,fetchImpl:n,max:1200,consigne:"Tu es un professeur patient. Explique la résolution en français, en six étapes courtes numérotées, une ligne par opération, puis termine par une phrase de vérification. N'invente aucune donnée qui manque.",question:r.slice(0,2e3)}):null}const Mo=[{nom:"Inspire",secondes:4},{nom:"Retiens",secondes:7},{nom:"Expire",secondes:8}],Mm=[{nom:"Inspire",secondes:4},{nom:"Retiens",secondes:4},{nom:"Expire",secondes:4},{nom:"Retiens",secondes:4}];function Ko(t){return t.reduce((e,n)=>e+Math.max(0,Math.floor(n.secondes)),0)}function zc(t){const e=[];let n=0;for(const i of t){const r=Math.max(0,Math.floor(i.secondes));r&&(e.push({nom:i.nom,debut:n,fin:n+r}),n+=r)}return e}function HA(t,e){const n=Ko(t);if(!n)return{nom:"",reste:0};const i=(Math.floor(e)%n+n)%n;for(const s of zc(t))if(i>=s.debut&&i<s.fin)return{nom:s.nom,reste:s.fin-i};return{nom:zc(t)[zc(t).length-1].nom,reste:0}}function qA(t,e,n){const i=Ko(e),r=Math.max(1,Math.floor(n))*i*1e3,s=Math.max(0,Math.floor(t));if(!i||s>=r)return{cycle:Math.max(1,Math.floor(n)),phase:"Fini",reste:0,fini:!0};const a=i*1e3,o=Math.floor(s/a)+1,l=Math.floor(s%a/1e3),{nom:c,reste:u}=HA(e,l);return{cycle:o,phase:c,reste:u,fini:!1}}const n_="nath.souffle",Vc={sessions:0,secondes:0},hd=t=>typeof t=="number"&&Number.isFinite(t)&&t>0?Math.floor(t):0;function i_(t){try{const e=t.getItem(n_);if(!e)return{...Vc};const n=JSON.parse(e);return!n||typeof n!="object"?{...Vc}:{sessions:hd(n.sessions),secondes:hd(n.secondes)}}catch{return{...Vc}}}function WA(t,e){const n=i_(t),i={sessions:n.sessions+1,secondes:n.secondes+hd(e?.secondes)};return t.setItem(n_,JSON.stringify(i)),i}const $A="Sans drapeau";function jA(t){const e=new Map;for(const r of t){if(!r||typeof r.id!="string")continue;const s=(r.domaine??"").trim()||$A,a=e.get(s);a?a.push(r.id):e.set(s,[r.id])}const n=[...e.values()].reduce((r,s)=>r+s.length,0);return n?[...e.entries()].map(([r,s])=>({nom:r,nombre:s.length,part:Math.round(s.length/n*1e3)/10,ids:s})).sort((r,s)=>s.nombre-r.nombre||r.nom.localeCompare(s.nom,"fr")):[]}const ym=t=>{const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild},Je=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),Em={flamme:"Flamme",frigo:"Frigo",assiette:"Assiette",journal:"Journal",tuteur:"Tuteur",souffle:"Souffle",resume:"Résumé",carte:"Carte",langues:"Langues",coffre:"Coffre"};function XA(t){const e=Ah(),n=ym('<button class="outils-btn" title="Ma boîte à outils" aria-label="Ouvrir la boîte à outils">🧰</button>'),i=ym(`
    <div class="outils-paneau" hidden role="dialog" aria-label="Boîte à outils">
      <div class="outils-tete">
        <div class="outils-onglets">
          ${Object.keys(Em).map(U=>`<button data-ot="${U}"${U==="flamme"?' class="actif"':""}>${Em[U]}</button>`).join("")}
        </div>
        <button class="outils-fermer" title="Fermer" aria-label="Fermer">×</button>
      </div>
      <div class="outils-corps"></div>
    </div>`);document.body.append(n,i);const r=i.querySelector(".outils-corps");let s="flamme",a="",o="",l="",c=null,u="",d=[],h="",p="",v="",_=Mo,m=3,f=null,y=0,E=null,T="wolof",A="",w="",R="",V="",x=null;const b=()=>navigator.onLine?"":'<p class="outils-note">Hors-ligne : tout ce que tu vois ici continue de fonctionner.</p>',L=()=>!!sn(t).trim();function Z(){const U=Wv(t),P=uA(U.xp),B=Math.round(hA(U.xp)*100);r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">🔥 ${U.streak} jour${U.streak>1?"s":""} de suite</p>
        <p class="oi-note">Record : ${U.meilleur} jour${U.meilleur>1?"s":""} · ${U.xp} points · niveau ${P} — ${Je(dA(P))}</p>
        <div class="oi-barre"><i style="width:${B}%"></i></div>
        <p class="oi-note">${B} % du chemin vers le niveau ${P+1}.</p>
        <div class="oi-actions">
          <button data-xp="10">Je révise aujourd’hui (+10)</button>
          <button data-xp="25">J’ai fini un paquet (+25)</button>
        </div>
        <p class="oi-note">Chaque fiche revue dans le coin d’études ajoute aussi ses points, toute seule.</p>
      </div>${b()}`,r.querySelectorAll("[data-xp]").forEach(G=>{G.addEventListener("click",()=>{jv(t,Number(G.dataset.xp)),Z()})})}function H(){const U=vm(a),P=t_(U),B=CA(U);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-frigo">Ce que j’ai sous la main</label>
        <textarea id="oi-frigo" class="oi-champ" rows="2" placeholder="2 œufs, tomate, riz, oignon…">${Je(a)}</textarea>
        <div class="oi-actions">
          ${e.sttDisponible?'<button data-act="micro" data-cible="frigo">🎤 Dictater</button>':""}
          <button data-act="vingt">Dîner en 20 minutes</button>
          ${L()?'<button data-act="cereau">Demander une idée</button>':""}
        </div>
        ${U.length?`<p class="oi-note">Je retiens : ${U.map(Je).join(", ")}.</p>`:""}
        <div data-zone></div>
      </div>${b()}`;const G=r.querySelector("#oi-frigo");G.addEventListener("input",()=>{a=G.value,H();const K=r.querySelector("#oi-frigo");K.focus(),K.setSelectionRange(K.value.length,K.value.length)});const ne=r.querySelector("[data-zone]");P.length?ne.innerHTML='<p class="oi-titre2">Ce que je peux faire</p>'+P.slice(0,6).map(K=>`<div class="oi-ligne"><span>${Je(K.plat.nom)} · ${K.plat.minutes} min</span>
            <small>${K.manquants.length?`manque : ${K.manquants.map(Je).join(", ")}`:"j’ai tout"}</small></div>`).join(""):U.length&&(ne.innerHTML='<p class="oi-note">Rien sur la carte avec ces seuls mots — ajoute un féculent, un légume ou une protéine.</p>'),B.length&&(ne.innerHTML+=`<p class="oi-titre2">Liste de courses</p><p class="oi-cours">${B.map(Je).join(" · ")}</p>`),r.querySelector('[data-act="vingt"]')?.addEventListener("click",()=>{a=RA(20).map(K=>K.ingredients.slice(0,2).join(", ")).slice(0,3).join(", "),H()}),fe(r.querySelector('[data-act="micro"]'),G,K=>{a=K,H()}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async K=>{const he=K.currentTarget;he.disabled=!0,he.textContent="Je réfléchis…";const Ie=await LA(sn(t),vm(a),fetch,Pr(t));ne.innerHTML+=Ie?`<p class="oi-titre2">Une idée en plus</p><p class="oi-reponse">${Je(Ie)}</p>`:'<p class="oi-note">Pas de réponse venue — la carte du frigo reste utilisable hors-ligne.</p>',he.disabled=!1,he.textContent="Demander une idée"})}function te(){const U=IA(o),P=UA(U.total);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-assiette">Ce que je mange</label>
        <textarea id="oi-assiette" class="oi-champ" rows="2" placeholder="2 œufs, riz, poulet, banane…">${Je(o)}</textarea>
        <div class="oi-actions">${e.sttDisponible?'<button data-act="micro" data-cible="assiette">🎤 Dictater</button>':""}
        ${L()?'<button data-act="cereau">Avis du grand cerveau</button>':""}</div>
        ${U.articles.length?`
          <table class="oi-table"><thead><tr><th>Aliment</th><th>Qté</th><th>kcal</th><th>P</th><th>G</th><th>L</th></tr></thead>
          <tbody>${U.articles.map(G=>`<tr><td>${Je(G.nom)}</td><td>${G.quantite}</td><td>${G.kcal}</td><td>${G.p}</td><td>${G.g}</td><td>${G.l}</td></tr>`).join("")}</tbody>
          <tfoot><tr><td>Total</td><td></td><td>${Math.round(U.total.kcal)}</td><td>${U.total.p}</td><td>${U.total.g}</td><td>${U.total.l}</td></tr></tfoot></table>
          <p class="oi-verdict oi-${P.equilibre}">${Je(P.mot)}</p>`:'<p class="oi-note">Écris ce que tu manges : l’estimation vient aussitôt, sans réseau.</p>'}
        ${U.inconnus.length?`<p class="oi-note">Je ne connais pas encore : ${U.inconnus.map(Je).join(", ")}.</p>`:""}
        <div data-zone></div>
      </div>${b()}`;const B=r.querySelector("#oi-assiette");B.addEventListener("input",()=>{o=B.value,te();const G=r.querySelector("#oi-assiette");G.focus(),G.setSelectionRange(G.value.length,G.value.length)}),fe(r.querySelector('[data-act="micro"]'),B,G=>{o=G,te()}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async G=>{const ne=G.currentTarget,K=r.querySelector("[data-zone]");ne.disabled=!0,ne.textContent="Je regarde…";const he=await FA(sn(t),o,fetch,Pr(t));K.innerHTML=he?`<p class="oi-reponse">${Je(he)}</p>`:'<p class="oi-note">Aucun avis n’est revenu ; le calcul ci-dessus reste valable.</p>',ne.disabled=!1,ne.textContent="Avis du grand cerveau"})}function re(){const U=Jo(t),P=mm(U,h).slice(0,30);r.innerHTML=`
      <div class="oi-carte">
        <input id="oi-jreq" class="oi-champ" type="search" placeholder="Retrouver une note (les accents ne comptent pas)" value="${Je(h)}" />
        <input id="oi-jtitre" class="oi-champ" type="text" placeholder="Titre de la découverte" value="${Je(p)}" />
        <textarea id="oi-jtexte" class="oi-champ" rows="2" placeholder="Ce que j’ai compris…">${Je(v)}</textarea>
        <div class="oi-actions">
          <button data-act="noter">Noter</button>
          <button data-act="cartes">En faire des cartes</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="jtexte">🎤 Dictater</button>':""}
        </div>
        <p class="oi-note">${U.length} note${U.length>1?"s":""} gardée${U.length>1?"s":""} sur cet appareil.</p>
        <div class="oi-liste">${P.map(K=>`<div class="oi-ligne" data-id="${Je(K.id)}"><span><strong>${Je(K.titre)}</strong>
              <small> · ${new Date(K.at).toLocaleDateString("fr-FR")} · ${Je(K.origine)}</small></span>
              <button data-act="del" title="Effacer">×</button></div>
              <p class="oi-pet">${Je(K.texte)}</p>`).join("")||'<p class="oi-note">Rien pour l’instant — la prochaine découverte tient sur deux lignes.</p>'}</div>
        <div data-zone></div>
      </div>${b()}`;const B=r.querySelector("#oi-jreq");B.addEventListener("input",()=>{h=B.value,re(),r.querySelector("#oi-jreq").focus()});const G=r.querySelector("#oi-jtitre");G.addEventListener("input",()=>p=G.value);const ne=r.querySelector("#oi-jtexte");ne.addEventListener("input",()=>v=ne.value),r.querySelector('[data-act="noter"]').addEventListener("click",()=>{Jv(t,{titre:p,texte:v,origine:"outil"}),p="",v="",re()}),r.querySelector('[data-act="cartes"]').addEventListener("click",()=>{const K=gA(mm(Jo(t),h)),he=J("Mon journal",K);r.querySelector("[data-zone]").insertAdjacentHTML("beforeend",`<p class="oi-reponse">${he?`${he} carte${he>1?"s":""} ajoutée${he>1?"s":""} au paquet « Mon journal » — révise-les dans le coin d’études.`:"Rien à cartographier : écris au moins une note."}</p>`)}),fe(r.querySelector('[data-act="micro"]'),ne,()=>{v=ne.value}),r.querySelectorAll('[data-act="del"]').forEach(K=>{K.addEventListener("click",()=>{mA(t,K.closest(".oi-ligne")?.dataset.id??""),re()})})}function Q(){const U=VA(l);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-tut">Ma question, mon énoncé</label>
        <textarea id="oi-tut" class="oi-champ" rows="3" placeholder="Résoudre 3x + 5 = 20 — ou recopier l’énoncé ligne par ligne.">${Je(l)}</textarea>
        <div class="oi-actions">
          <button data-act="plan">Le plan, stylo en main</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="tut">🎤 Dictater</button>':""}
          ${e.ttsDisponible?'<button data-act="lire">🔊 Me lire le plan</button>':""}
          ${L()?'<button data-act="cereau">Faire résoudre</button>':""}
        </div>
        ${U.questions.length?`<p class="oi-note">Ce qu’on te demande : ${U.questions.map(Je).join(" · ")}</p>`:""}
        <div data-zone>${c?`<p class="oi-reponse">${Je(c)}</p>`:""}</div>
      </div>${b()}`;const P=r.querySelector("#oi-tut");P.addEventListener("input",()=>{l=P.value});const B=r.querySelector("[data-zone]");r.querySelector('[data-act="plan"]').addEventListener("click",()=>{const G=bm(l);B.innerHTML=`<p class="oi-titre2">Le plan</p><ol class="oi-pas">${G.map(ne=>`<li>${Je(ne)}</li>`).join("")}</ol>`}),r.querySelector('[data-act="lire"]')?.addEventListener("click",()=>{e.parler(bm(l).join(" . "),"posee")}),fe(r.querySelector('[data-act="micro"]'),P,G=>{l=G}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async G=>{const ne=G.currentTarget;ne.disabled=!0,ne.textContent="Je cherche…";const K=await GA(sn(t),l,fetch,Pr(t));c=K,B.innerHTML=K?`<p class="oi-titre2">Résolution</p><p class="oi-reponse">${Je(K)}</p>`:'<p class="oi-note">Rien n’est revenu — le plan hors-ligne fonctionne quand même.</p>',ne.disabled=!1,ne.textContent="Faire résoudre"})}function X(){const U=i_(t),P=Ko(_),B=Math.round(U.secondes/60),G=U.secondes<60?`${U.secondes} seconde${U.secondes>1?"s":""}`:`${B} minute${B>1?"s":""}`;r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">Respirer à ${_===Mo?"4-7-8":"au carré"} · ${m} cycles · ${P*m} s</p>
        <div class="oi-souffle"><i></i><span data-phase="">${f===null?"Prêt":""}</span></div>
        <div class="oi-actions">
          <button data-ry="478"${_===Mo?' class="actif"':""}>4-7-8</button>
          <button data-ry="carre"${_===Mm?' class="actif"':""}>Carré</button>
          <button data-cy="3"${m===3?' class="actif"':""}>3</button>
          <button data-cy="5"${m===5?' class="actif"':""}>5</button>
          <button data-cy="8"${m===8?' class="actif"':""}>8</button>
          <button data-act="go">${f===null?"Commencer":"Arrêter"}</button>
        </div>
        <p class="oi-note">${U.sessions} séance${U.sessions>1?"s":""} au repos · ${G} respirées.</p>
        <p class="oi-note">Le minuteur tourne dans l’appareil, sans son obligatoire : tu peux fermer les yeux.</p>
      </div>${b()}`,r.querySelectorAll("[data-ry]").forEach(ne=>ne.addEventListener("click",()=>{f===null&&(_=ne.dataset.ry==="carre"?Mm:Mo,X())})),r.querySelectorAll("[data-cy]").forEach(ne=>ne.addEventListener("click",()=>{f===null&&(m=Number(ne.dataset.cy)||3,X())})),r.querySelector('[data-act="go"]').addEventListener("click",()=>{if(f!==null){ae(!0);return}y=Date.now();const ne=r.querySelector('[data-act="go"]');ne.textContent="Arrêter",f=window.setInterval(()=>{const K=qA(Date.now()-y,_,m);if(K.fini){ae(!0);return}const he=r.querySelector("[data-phase]"),Ie=r.querySelector(".oi-souffle i");he&&(he.textContent=`${K.phase} · ${K.reste} · cycle ${K.cycle}/${m}`);const Re=K.phase==="Inspire"?1:K.phase==="Retiens"?.92:.55;Ie&&(Ie.style.transform=`scale(${Re})`)},200)})}function ae(U){f!==null&&window.clearInterval(f),f=null;const P=U?Math.min(Ko(_)*m,Math.round((Date.now()-y)/1e3)):0;P>=3&&WA(t,{secondes:P}),X()}function I(){r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-res">Colle ou dicte un texte</label>
        <textarea id="oi-res" class="oi-champ" rows="4" placeholder="Cours, article, message long…">${Je(u)}</textarea>
        <div class="oi-actions">
          <button data-act="puces">Résumer ici (hors-ligne)</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="res">🎤 Dictater</button>':""}
          ${e.ttsDisponible?'<button data-act="lire">🔊 Lire</button>':""}
          ${L()?'<button data-act="cereau">Résumer avec le grand cerveau</button>':""}
          <button data-act="cartes">En faire des cartes</button>
        </div>
        <div data-zone>${d.length?`<ol class="oi-pas">${d.map(B=>`<li>${Je(B)}</li>`).join("")}</ol>`:""}</div>
      </div>${b()}`;const U=r.querySelector("#oi-res");U.addEventListener("input",()=>u=U.value);const P=r.querySelector("[data-zone]");r.querySelector('[data-act="puces"]').addEventListener("click",()=>{d=xm(u,5),P.innerHTML=d.length?`<ol class="oi-pas">${d.map(B=>`<li>${Je(B)}</li>`).join("")}</ol>`:'<p class="oi-note">Trop court pour être coupé en puces — ajoute quelques phrases.</p>'}),r.querySelector('[data-act="lire"]')?.addEventListener("click",()=>{e.parler(d.length?d.join(" . "):u.slice(0,400),"posee")}),fe(r.querySelector('[data-act="micro"]'),U,B=>u=B),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async B=>{const G=B.currentTarget;G.disabled=!0,G.textContent="Je lis…";const ne=await zA(sn(t),u,fetch,Pr(t));d=ne?ne.split(/\n+/).map(K=>K.replace(/^[-•*]\s*/,"").trim()).filter(Boolean):[],P.innerHTML=d.length?`<ol class="oi-pas">${d.map(K=>`<li>${Je(K)}</li>`).join("")}</ol>`:'<p class="oi-note">Rien n’est revenu — le bouton « Résumer ici » marche sans réseau.</p>',G.disabled=!1,G.textContent="Résumer avec le grand cerveau"}),r.querySelector('[data-act="cartes"]').addEventListener("click",()=>{const B=d.length?Sm(d):Sm(xm(u,5)),G=J("Résumés",B);P.insertAdjacentHTML("beforeend",`<p class="oi-reponse">${G?`${G} carte${G>1?"s":""} dans le paquet « Résumés ».`:"Résume d’abord (bouton hors-ligne) pour obtenir des cartes."}</p>`)})}function Y(){const U=zv,P=jA(U),B=E?P.find(ne=>ne.nom===E)??null:null,G=B?U.filter(ne=>B.ids.includes(ne.id)):[];r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">L’archipel des savoirs · ${U.length} notices</p>
        <div class="oi-iles">${P.map(ne=>`<button class="oi-ile${ne.nom===E?" actif":""}" data-ile="${Je(ne.nom)}" style="--p:${Math.max(6,Math.round(ne.part))}%"><span>${Je(ne.nom)}</span><small>${ne.nombre} · ${ne.part}%</small></button>`).join("")}</div>
        ${B?`<p class="oi-titre2">${Je(B.nom)}</p><div class="oi-grille">${G.map(ne=>`<div class="oi-puce"><strong>${Je(ne.titre)}</strong><p>${Je(ne.resume)}</p></div>`).join("")}</div>`:'<p class="oi-note">Choisis une île : ses notices s’ouvrent ici, même sans réseau. Les étoiles et la recherche t’attendent dans le coin d’études.</p>'}
      </div>${b()}`,r.querySelectorAll("[data-ile]").forEach(ne=>ne.addEventListener("click",()=>{E=ne.dataset.ile??null,Y()}))}function J(U,P){const B=P.filter(K=>K.verso.trim()&&K.recto.trim());if(!B.length)return 0;let G=Kn(t).find(K=>K.nom===U);if(G||(G=ls(t,U)??void 0),!G)return 0;let ne=0;for(const K of B)va(t,G.id,K.verso,K.recto)&&ne++;return ne}function fe(U,P,B){const G=U;!G||!e.sttDisponible||G.addEventListener("click",()=>{G.disabled=!0,G.textContent="🎤 Je t’écoute…",e.ecouter(ne=>{const K=Bv(ne),he=kv(K?`${K.de}, ${K.a}`:ne);P.value=he,B(he),G.disabled=!1,G.textContent="🎤 Dictater"})})}const z=[["wolof","Wolof"],["nouchi","Nouchi"],["anglais","Anglais"],["espagnol","Espagnol"],["arabe","Arabe"],["chinois","Chinois"]];function ee(){const U=ba(t);r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">&#128483;&#65039; Parler ta langue</p>
        <p class="oi-note">Traduire un mot, une petite phrase — ici, même sans réseau. Ce que tu apprends ici reste sur ton appareil et voyage avec ton coffre.</p>
        <div class="oi-actions">
          ${z.map(([ne,K])=>`<button data-lg="${ne}"${ne===T?' class="actif"':""}>${K}</button>`).join("")}
        </div>
        <label class="oi-libelle" for="oi-lg-mot">Le mot ou la phrase, en français</label>
        <input id="oi-lg-mot" class="oi-champ" type="text" placeholder="ex. merci, de l’eau, ma maison" value="${Je(A)}" />
        <div class="oi-actions">
          <button data-act="dire">Traduire</button>
          ${e.ttsDisponible?'<button data-act="lire">&#128266; Me le dire</button>':""}
        </div>
        <div data-res>${x?`<p class="oi-reponse">${Je(x.resultat??"Je ne sais pas encore ce mot.")}</p>${x.manques.length?`<p class="oi-note">Il me manque : ${x.manques.map(Je).join(", ")} — donne-le moi en dessous.</p>`:""}`:""}</div>
        <p class="oi-titre2">Lui apprendre un mot</p>
        <input id="oi-lg-de" class="oi-champ" type="text" placeholder="en français (ex. voiture)" value="${Je(w)}" />
        <input id="oi-lg-a" class="oi-champ" type="text" placeholder="dans ta langue (ex. gaara)" value="${Je(R)}" />
        <div class="oi-actions"><button data-act="donner">Ajouter au carnet</button></div>
        ${V?`<p class="oi-note">${Je(V)}</p>`:""}
        <p class="oi-note">${U.length} mot${U.length>1?"s":""} appris${U.length>1?"s":""} de toi, gardés sur cet appareil.</p>
      </div>${b()}`;const P=r.querySelector("#oi-lg-mot");P.addEventListener("input",()=>A=P.value);const B=r.querySelector("#oi-lg-de");B.addEventListener("input",()=>w=B.value);const G=r.querySelector("#oi-lg-a");G.addEventListener("input",()=>R=G.value),r.querySelectorAll("[data-lg]").forEach(ne=>ne.addEventListener("click",()=>{T=ne.dataset.lg??"wolof",x=null,ee()})),r.querySelector('[data-act="dire"]').addEventListener("click",()=>{x=yA(A,T,t),ee()}),r.querySelector('[data-act="lire"]')?.addEventListener("click",()=>{x?.resultat&&e.parler(x.resultat,"posee")}),r.querySelector('[data-act="donner"]').addEventListener("click",()=>{const ne=ba(t).length;MA(t,w,R,T);const K=ba(t).length,he=w.trim();K>ne?V=`C’est noté : « ${he} » se dit « ${R.trim()} ». Merci.`:he&&R.trim()?V=`Ta parole remplace l’ancienne pour « ${he} ».`:V="Il me faut le mot et sa traduction pour l’apprendre.",w="",R="",ee()})}function pe(){r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">🎒 Le coffre de tes souvenirs</p>
        <p class="oi-note">Ce que la Compagne sait de toi — ton prénom, tes fiches, tes réglages — reste sur ton appareil. Une réinstallation, ou un iPhone qui vide Safari, peut tout effacer. Emporte tes affaires dans ce texte, repose-les où tu veux.</p>
        <div class="oi-actions"><button data-act="emporter">Emporter mes affaires</button></div>
        <textarea id="oi-coffre" class="oi-champ" rows="4" placeholder="Ton texte apparaît ici…"></textarea>
        <div class="oi-actions">
          <button data-act="copier">Copier</button>
          <button data-act="reposer">Reposer ici</button>
        </div>
        <div data-zone></div>
      </div>${b()}`;const U=r.querySelector("#oi-coffre"),P=r.querySelector("[data-zone]"),B=G=>{P.innerHTML=`<p class="oi-note">${Je(G)}</p>`};r.querySelector('[data-act="emporter"]')?.addEventListener("click",()=>{U.value=xA(t),B("Tes affaires tiennent dans ce texte. Copie-le et garde-le pour toi — personne d’autre n’y lit quoi que ce soit.")}),r.querySelector('[data-act="copier"]')?.addEventListener("click",async()=>{if(!U.value.trim()){B("D’abord « Emporter mes affaires », puis copie.");return}try{await navigator.clipboard.writeText(U.value),B("Copié. Colle-le là où tu veux le garder.")}catch{U.focus(),U.select(),B("Tout est sélectionné — copie-le à la main.")}}),r.querySelector('[data-act="reposer"]')?.addEventListener("click",()=>{const G=bA(t,U.value);B(G>0?`${G} affaire${G>1?"s":""} remise${G>1?"s":""} en place. Recharge la page pour tout retrouver.`:"Rien à reposer ici : ce texte n’est pas un coffre valide.")})}const O={flamme:Z,frigo:H,assiette:te,journal:re,tuteur:Q,souffle:X,resume:I,carte:Y,langues:ee,coffre:pe};function $(U){s=U,i.querySelectorAll(".outils-onglets button").forEach(P=>{P.classList.toggle("actif",P.dataset.ot===U)}),f!==null&&U!=="souffle"&&ae(!1),r.innerHTML="",O[U]()}return i.querySelectorAll(".outils-onglets button").forEach(U=>{U.addEventListener("click",()=>$(U.dataset.ot??"flamme"))}),n.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden||$(s)}),i.querySelector(".outils-fermer").addEventListener("click",()=>{f!==null&&ae(!1),i.hidden=!0}),window.addEventListener("online",()=>{i.hidden||$(s)}),window.addEventListener("offline",()=>{i.hidden||$(s)}),n}function YA(t,e){return{eclair:(t==="tension"?.45:t==="tristesse"?.12:0)*(.3+.7*e),filer:e*.4}}function JA(t,e){let n=0,i=.85,r=.15,s=!1,a="le ciel respire";t===0||t===1?(i=.95,a=t===0?"ciel dégagé":"à peine voilé"):t===2?(i=.8,a="nuages passagers"):t===3?(i=.55,r=.25,a="ciel couvert"):t===45||t===48?(i=.35,r=.1,n=.08,a="brouillard"):t>=51&&t<=57?(n=.35,i=.45,a="bruine"):t>=61&&t<=67?(n=t===65||t===67?.8:.55,i=.4,a="pluie"):t>=71&&t<=77?(n=.45,i=.65,a="neige"):t>=80&&t<=82?(n=t===82?.9:.6,i=.4,r=.3,a="averses"):t===85||t===86?(n=.5,i=.6,a="neiges"):t>=95&&t<=99&&(s=!0,n=.9,i=.3,r=.7,a="orage");const o=Math.min(1,r+Math.min(.4,Math.max(0,e)/100));return{pluie:n,turbulence:o,luminosite:i,orage:s,libelle:a}}async function KA(t,e,n){try{const i="https://api.open-meteo.com/v1/forecast?latitude="+encodeURIComponent(String(t))+"&longitude="+encodeURIComponent(String(e))+"&current=weather_code,wind_speed_10m",r=await n(i);if(!r.ok)return null;const s=await r.json(),a=s?.current?.weather_code;if(typeof a!="number")return null;const o=typeof s.current.wind_speed_10m=="number"?s.current.wind_speed_10m:0;return JA(a,o)}catch{return null}}async function ZA(t,e){if(!t)return null;try{const n=await e(`${t.replace(/\/+$/,"")}/lieu`,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});if(!n.ok)return null;const i=await n.json();if(!i?.lieu)return null;const r=Number(i.lieu.latitude),s=Number(i.lieu.longitude);return!Number.isFinite(r)||!Number.isFinite(s)?null:{latitude:r,longitude:s}}catch{return null}}function QA(t){const e=t.match(/assets\/index-[\w-]+\.js/);return e?e[0].split("/").pop()??null:null}function e4(t,e){return!!t&&t!==e}const r_="nath.mise-a-jour.ecartee";function t4(t,e){try{return t.getItem(r_)===e}catch{return!1}}function n4(t,e){try{t.setItem(r_,e)}catch{}}async function i4(t,e){try{const n=e.includes("?")?"&":"?",i=await t(`${e}${n}revoir=${Date.now()}`,{cache:"no-store"});return i.ok?QA(await i.text()):null}catch{return null}}function r4(){return import.meta.url.split("/").pop()?.split("?")[0]??""}function s4(t,e,n=6e4){return t===0||e-t>=n}function a4(t,e){const n=document.createElement("div");n.className="maj-puce visible",n.setAttribute("role","status"),n.setAttribute("aria-live","polite");const i=()=>{n4(e,t),n.remove()};n.addEventListener("keydown",a=>{a.key==="Escape"&&i()});const r=document.createElement("button");r.type="button",r.className="maj-agir",r.textContent="Nouvelle version prête — recharger",r.title="Rien ne se recharge tout seul : appuie quand tu veux changer de version",r.addEventListener("click",()=>window.location.reload());const s=document.createElement("button");s.type="button",s.className="maj-refus",s.textContent="×",s.setAttribute("aria-label","Ne pas recharger maintenant"),s.title="Pour cette version-là, on n’y revient plus",s.addEventListener("click",i),n.append(r,s),document.body.append(n)}function o4(t=fetch){if(typeof document>"u")return;const e=window.location.href.split("?")[0],n=r4();if(!n)return;const i={getItem:o=>{try{return sessionStorage.getItem(o)}catch{return null}},setItem:(o,l)=>{try{sessionStorage.setItem(o,l)}catch{}}};let r=!1,s=0;const a=async()=>{if(r)return;const o=Date.now();if(!s4(s,o))return;s=o;const l=await i4(t,e);!e4(l,n)||!l||t4(i,l)||(r=!0,a4(l,i))};window.setTimeout(()=>{a()},8e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&a()})}const Zo=document.getElementById("scene"),bs=Rb(Zo),rt=Lb();rt.seed=localStorage.getItem("nuage.seed")??crypto.randomUUID();localStorage.setItem("nuage.seed",rt.seed);const Qo={cameraOn:!1,micOn:!1};Nb(t=>{rt.breath=Math.max(rt.breath,t)}).then(t=>{Qo.micOn=t});const fd=document.getElementById("cam"),l4=Py(),Gc=new Ry(fd,localStorage,t=>{rt.emotion=l4(Ly(t))},t=>{Qo.cameraOn=t,fd.classList.toggle("video-actif",t)}),c4=typeof navigator<"u"&&!!navigator.mediaDevices?.getUserMedia,u4=document.getElementById("etat"),Ms=Oy(rt.seed);let s_=[.5,.5];By(Zo,(t,e)=>{s_=[t,e]});ky(t=>{rt.breath=Math.max(rt.breath,Math.abs(t))});MT(()=>({emotion:rt.emotion,breath:rt.breath,timeOfDay:rt.timeOfDay,seed:Ms.musiqueSeed,bpm:rt.bpm,cameraOn:Qo.cameraOn,micOn:Qo.micOn}),{cameraDisponible:c4,estOuverte:()=>Gc.ouverte,basculer:()=>Gc.basculer(),changerFace:()=>Gc.basculerFace(),consentement:My});vA(localStorage);XA(localStorage);setInterval(()=>{const t=YA(rt.emotion,og(rt).night);(rt.cielReel?.orage&&Math.random()<.4||Math.random()<t.eclair)&&bs.eclair(),Math.random()<t.filer&&bs.filer(.08+Math.random()*.75,.7+Math.random()*.25)},15e3);const Wn=document.createElement("button");Wn.className="ciel-btn";Wn.type="button";Wn.textContent="⛅";Wn.title="Le ciel réel — laisser respirer au nuage le temps de chez toi";Wn.setAttribute("aria-label","Laisser au nuage le temps réel de chez toi");document.body.append(Wn);let hs=0,Uo=!1;async function el(t,e){const n=await KA(t,e,fetch);n&&(rt.cielReel=n,Wn.classList.add("actif"),Wn.title=`Dehors, ${n.libelle} — le nuage respire avec lui`)}Wn.addEventListener("click",()=>{if(hs){window.clearInterval(hs),hs=0,Uo=!1,rt.cielReel=null,Wn.classList.remove("actif"),Wn.title="Le ciel réel — laisser respirer au nuage le temps de chez toi";return}if(Uo=!0,!navigator.geolocation){Tm();return}navigator.geolocation.getCurrentPosition(t=>{Uo&&(el(t.coords.latitude,t.coords.longitude),hs=window.setInterval(()=>{el(t.coords.latitude,t.coords.longitude)},6e5))},()=>{Tm()},{enableHighAccuracy:!1,timeout:1e4,maximumAge:6e5})});async function Tm(){const t=await ZA(sn(localStorage),fetch);if(!t){Wn.classList.remove("actif");return}Uo&&(await el(t.latitude,t.longitude),window.clearInterval(hs),hs=window.setInterval(()=>{el(t.latitude,t.longitude)},6e5))}let ks=!1;const di=document.createElement("button");di.className="musique-btn";di.type="button";di.setAttribute("aria-label","La musique de l’aura — l’endormir ou la réveiller");document.body.append(di);function Lh(){const t=Rl(localStorage);di.textContent=t?"🔇":"🎵",di.classList.toggle("eteinte",t),di.classList.toggle("actif",!t&&ks),di.title=t?"La musique dort — appuie pour l’éveiller":"La musique de l’aura — appuie pour l’endormir",di.setAttribute("aria-pressed",String(!t))}di.addEventListener("click",()=>{$y(localStorage)?mv():(Wy(),ks||(ks=pv(Ms.musiqueSeed))),Lh()});Rl(localStorage)&&mv();Lh();Zo.addEventListener("pointerdown",t=>{const e=Zo.getBoundingClientRect();bs.tap((t.clientX-e.left)/e.width,1-(t.clientY-e.top)/e.height),ks||(ks=pv(Ms.musiqueSeed),Lh())});const d4=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),yo=[];setInterval(()=>{const t=Fy(fd,d4);t!=null&&(yo.push(t),yo.length>80&&yo.shift(),rt.bpm=Uy(yo,8))},125);let Am=performance.now();function a_(t){const e=(t-Am)/1e3;Am=t;const n=new Date;if(rt.timeOfDay=(n.getHours()+n.getMinutes()/60)/24,rt.breath=Math.max(0,rt.breath-e*.5),rt.bpm){const i=Math.sin(Date.now()/(6e4/rt.bpm)*2*Math.PI);rt.breath=Math.max(rt.breath,.08*i+.08)}bs.apply(og(rt),s_),bs.setBpm(rt.bpm),bs.frame(e),Hy(rt.emotion),qy(rt.breath),u4.textContent=ks?`aura : ${Ms.nom} · humeur : ${rt.emotion} · souffle : ${rt.breath*100|0}% · pouls : ${rt.bpm?Math.round(rt.bpm):"—"}`:Rl(localStorage)?`aura : ${Ms.nom} · la musique dort — 🎵 pour la réveiller`:`aura : ${Ms.nom} · touche le ciel pour éveiller la musique`,requestAnimationFrame(a_)}requestAnimationFrame(a_);console.log("Nath Assist v1-alpha — ICF·Future by Nath-Tech");o4(fetch);
