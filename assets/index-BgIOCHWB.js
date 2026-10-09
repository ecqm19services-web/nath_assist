(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Tu="182",Mg=0,Wh=1,Eg=2,Ja=1,yg=2,qs=3,Qi=0,dn=1,Ti=2,Ci=0,Zr=1,qh=2,Xh=3,jh=4,bg=5,dr=100,Tg=101,Ag=102,wg=103,Cg=104,Rg=200,Pg=201,Lg=202,Dg=203,ac=204,oc=205,Ig=206,Ug=207,Ng=208,Fg=209,Og=210,Bg=211,kg=212,Vg=213,zg=214,lc=0,cc=1,uc=2,rs=3,hc=4,fc=5,dc=6,pc=7,hp=0,Gg=1,Hg=2,oi=0,fp=1,dp=2,pp=3,mp=4,gp=5,_p=6,vp=7,xp=300,br=301,ss=302,mc=303,gc=304,Eo=306,_c=1e3,wi=1001,vc=1002,Kt=1003,Wg=1004,Ea=1005,tn=1006,rl=1007,mr=1008,On=1009,Sp=1010,Mp=1011,Qs=1012,Au=1013,hi=1014,ri=1015,Li=1016,wu=1017,Cu=1018,ea=1020,Ep=35902,yp=35899,bp=1021,Tp=1022,jn=1023,Di=1026,gr=1027,Ap=1028,Ru=1029,as=1030,Pu=1031,Lu=1033,Za=33776,Qa=33777,eo=33778,to=33779,xc=35840,Sc=35841,Mc=35842,Ec=35843,yc=36196,bc=37492,Tc=37496,Ac=37488,wc=37489,Cc=37490,Rc=37491,Pc=37808,Lc=37809,Dc=37810,Ic=37811,Uc=37812,Nc=37813,Fc=37814,Oc=37815,Bc=37816,kc=37817,Vc=37818,zc=37819,Gc=37820,Hc=37821,Wc=36492,qc=36494,Xc=36495,jc=36283,$c=36284,Yc=36285,Kc=36286,qg=3200,Xg=0,jg=1,$i="",Fn="srgb",os="srgb-linear",lo="linear",ct="srgb",Dr=7680,$h=519,$g=512,Yg=513,Kg=514,Du=515,Jg=516,Zg=517,Iu=518,Qg=519,Yh=35044,Kh="300 es",si=2e3,co=2001;function wp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function e_(){const t=uo("canvas");return t.style.display="block",t}const Jh={};function Zh(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ve(...t){const e="THREE."+t.shift();console.warn(e,...t)}function et(...t){const e="THREE."+t.shift();console.error(e,...t)}function ta(...t){const e=t.join(" ");e in Jh||(Jh[e]=!0,Ve(...t))}function t_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,Jc=180/Math.PI;function oa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function n_(t,e){return(t%e+e)%e}function al(t,e,n){return(1-n)*t+n*e}function Ns(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,n=0){it.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class la{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(o>=1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==f||c!==p||u!==_){let m=l*f+c*p+u*_+h*x;m<0&&(f=-f,p=-p,_=-_,x=-x,m=-m);let d=1-o;if(m<.9995){const b=Math.acos(m),A=Math.sin(b);d=Math.sin(d*b)/A,o=Math.sin(o*b)/A,l=l*d+f*o,c=c*d+p*o,u=u*d+_*o,h=h*d+x*o}else{l=l*d+f*o,c=c*d+p*o,u=u*d+_*o,h=h*d+x*o;const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+u*h+l*p-c*f,e[n+1]=l*_+u*f+c*h-o*p,e[n+2]=c*_+u*p+o*f-l*h,e[n+3]=u*_-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new W,Qh=new la;class ze{constructor(e,n,i,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],x=r[0],m=r[3],d=r[6],b=r[1],A=r[4],T=r[7],w=r[2],C=r[5],P=r[8];return s[0]=a*x+o*b+l*w,s[3]=a*m+o*A+l*C,s[6]=a*d+o*T+l*P,s[1]=c*x+u*b+h*w,s[4]=c*m+u*A+h*C,s[7]=c*d+u*T+h*P,s[2]=f*x+p*b+_*w,s[5]=f*m+p*A+_*C,s[8]=f*d+p*T+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,_=n*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ll.makeScale(e,n)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,n){return this.premultiply(ll.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new ze,ef=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tf=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i_(){const t={enabled:!0,workingColorSpace:os,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=Qr(r.r),r.g=Qr(r.g),r.b=Qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?lo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[os]:{primaries:e,whitePoint:i,transfer:lo,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:ef,fromXYZ:tf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),t}const Ke=i_();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class r_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ir===void 0&&(Ir=uo("canvas")),Ir.width=e.width,Ir.height=e.height;const r=Ir.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ir}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s_=0;class Uu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(cl(r[a].image)):s.push(cl(r[a]))}else s=cl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?r_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let a_=0;const ul=new W;class ln extends Ss{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=wi,r=wi,s=tn,a=mr,o=jn,l=On,c=ln.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=oa(),this.name="",this.source=new Uu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ve(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _c:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _c:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=xp;ln.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(c+1)/2,T=(p+1)/2,w=(d+1)/2,C=(u+f)/4,P=(h+x)/4,G=(_+m)/4;return A>T&&A>w?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=C/i,s=P/i):T>w?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=C/r,s=G/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=G/s),this.set(i,r,s,n),this}let b=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o_ extends Ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ln(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Uu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends o_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cp extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l_ extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),ba.subVectors(this.max,Fs),Ur.subVectors(e.a,Fs),Nr.subVectors(e.b,Fs),Fr.subVectors(e.c,Fs),ki.subVectors(Nr,Ur),Vi.subVectors(Fr,Nr),sr.subVectors(Ur,Fr);let n=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-sr.z,sr.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,sr.z,0,-sr.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-sr.y,sr.x,0];return!hl(n,Ur,Nr,Fr,ba)||(n=[1,0,0,0,1,0,0,0,1],!hl(n,Ur,Nr,Fr,ba))?!1:(Ta.crossVectors(ki,Vi),n=[Ta.x,Ta.y,Ta.z],hl(n,Ur,Nr,Fr,ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new W,new W,new W,new W,new W,new W,new W,new W],zn=new W,ya=new ca,Ur=new W,Nr=new W,Fr=new W,ki=new W,Vi=new W,sr=new W,Fs=new W,ba=new W,Ta=new W,ar=new W;function hl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ar.fromArray(t,s);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),c=n.dot(ar),u=i.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const c_=new ca,Os=new W,fl=new W;class Nu{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):c_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const n=Os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(fl)),this.expandByPoint(Os.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mi=new W,dl=new W,Aa=new W,zi=new W,pl=new W,wa=new W,ml=new W;class u_{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){dl.copy(e).add(n).multiplyScalar(.5),Aa.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(dl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Aa),o=zi.dot(this.direction),l=-zi.dot(Aa),c=zi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(dl).addScaledVector(Aa,f),p}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){pl.subVectors(n,e),wa.subVectors(i,e),ml.crossVectors(pl,wa);let a=this.direction.dot(ml),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zi.subVectors(this.origin,e);const l=o*this.direction.dot(wa.crossVectors(zi,wa));if(l<0)return null;const c=o*this.direction.dot(pl.cross(zi));if(c<0||l+c>a)return null;const u=-o*zi.dot(ml);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,i,r,s,a,o,l,c,u,h,f,p,_,x,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,h,f,p,_,x,m)}set(e,n,i,r,s,a,o,l,c,u,h,f,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),a=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,_=o*u,x=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,x=c*h;n[0]=f+x*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=x+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,x=c*h;n[0]=f-x*o,n[4]=-a*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=x-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,_=o*u,x=o*h;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=x-f*h,n[8]=_*h+p,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+_,n[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+x,n[5]=a*u,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*u,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h_,e,f_)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Gi.crossVectors(i,_n),Gi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Gi.crossVectors(i,_n)),Gi.normalize(),Ca.crossVectors(_n,Gi),r[0]=Gi.x,r[4]=Ca.x,r[8]=_n.x,r[1]=Gi.y,r[5]=Ca.y,r[9]=_n.y,r[2]=Gi.z,r[6]=Ca.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],b=i[3],A=i[7],T=i[11],w=i[15],C=r[0],P=r[4],G=r[8],S=r[12],M=r[1],y=r[5],U=r[9],L=r[13],V=r[2],k=r[6],F=r[10],B=r[14],$=r[3],re=r[7],ee=r[11],z=r[15];return s[0]=a*C+o*M+l*V+c*$,s[4]=a*P+o*y+l*k+c*re,s[8]=a*G+o*U+l*F+c*ee,s[12]=a*S+o*L+l*B+c*z,s[1]=u*C+h*M+f*V+p*$,s[5]=u*P+h*y+f*k+p*re,s[9]=u*G+h*U+f*F+p*ee,s[13]=u*S+h*L+f*B+p*z,s[2]=_*C+x*M+m*V+d*$,s[6]=_*P+x*y+m*k+d*re,s[10]=_*G+x*U+m*F+d*ee,s[14]=_*S+x*L+m*B+d*z,s[3]=b*C+A*M+T*V+w*$,s[7]=b*P+A*y+T*k+w*re,s[11]=b*G+A*U+T*F+w*ee,s[15]=b*S+A*L+T*B+w*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15],b=l*p-c*f,A=o*p-c*h,T=o*f-l*h,w=a*p-c*u,C=a*f-l*u,P=a*h-o*u;return n*(x*b-m*A+d*T)-i*(_*b-m*w+d*C)+r*(_*A-x*w+d*P)-s*(_*T-x*C+m*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],b=h*m*c-x*f*c+x*l*p-o*m*p-h*l*d+o*f*d,A=_*f*c-u*m*c-_*l*p+a*m*p+u*l*d-a*f*d,T=u*x*c-_*h*c+_*o*p-a*x*p-u*o*d+a*h*d,w=_*h*l-u*x*l-_*o*f+a*x*f+u*o*m-a*h*m,C=n*b+i*A+r*T+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=b*P,e[1]=(x*f*s-h*m*s-x*r*p+i*m*p+h*r*d-i*f*d)*P,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*d+i*l*d)*P,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*p-i*l*p)*P,e[4]=A*P,e[5]=(u*m*s-_*f*s+_*r*p-n*m*p-u*r*d+n*f*d)*P,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*d-n*l*d)*P,e[7]=(a*f*s-u*l*s+u*r*c-n*f*c-a*r*p+n*l*p)*P,e[8]=T*P,e[9]=(_*h*s-u*x*s-_*i*p+n*x*p+u*i*d-n*h*d)*P,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*d+n*o*d)*P,e[11]=(u*o*s-a*h*s-u*i*c+n*h*c+a*i*p-n*o*p)*P,e[12]=w*P,e[13]=(u*x*r-_*h*r+_*i*f-n*x*f-u*i*m+n*h*m)*P,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*m-n*o*m)*P,e[15]=(a*h*r-u*o*r+u*i*l-n*h*l-a*i*f+n*o*f)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,_=s*h,x=a*u,m=a*h,d=o*h,b=l*c,A=l*u,T=l*h,w=i.x,C=i.y,P=i.z;return r[0]=(1-(x+d))*w,r[1]=(p+T)*w,r[2]=(_-A)*w,r[3]=0,r[4]=(p-T)*C,r[5]=(1-(f+d))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(_+A)*P,r[9]=(m-b)*P,r[10]=(1-(f+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=Or.set(r[0],r[1],r[2]).length();const a=Or.set(r[4],r[5],r[6]).length(),o=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Gn.copy(this);const c=1/s,u=1/a,h=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,n.setFromRotationMatrix(Gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=si,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let _,x;if(l)_=s/(a-s),x=a*s/(a-s);else if(o===si)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===co)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=si,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,x;if(l)_=1/(a-s),x=a/(a-s);else if(o===si)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===co)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new W,Gn=new Ot,h_=new W(0,0,0),f_=new W(1,1,1),Gi=new W,Ca=new W,_n=new W,nf=new Ot,rf=new la;class Ii{constructor(e=0,n=0,i=0,r=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rf.setFromEuler(this),this.setFromQuaternion(rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Rp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d_=0;const sf=new W,Br=new la,Ei=new Ot,Ra=new W,Bs=new W,p_=new W,m_=new la,af=new W(1,0,0),of=new W(0,1,0),lf=new W(0,0,1),cf={type:"added"},g_={type:"removed"},kr={type:"childadded",child:null},gl={type:"childremoved",child:null};class yn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new W,n=new Ii,i=new la,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ze}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(af,e)}rotateY(e){return this.rotateOnAxis(of,e)}rotateZ(e){return this.rotateOnAxis(lf,e)}translateOnAxis(e,n){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(af,e)}translateY(e){return this.translateOnAxis(of,e)}translateZ(e){return this.translateOnAxis(lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ra.copy(e):Ra.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Bs,Ra,this.up):Ei.lookAt(Ra,Bs,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(Ei),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cf),kr.child=e,this.dispatchEvent(kr),kr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(g_),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cf),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,p_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,m_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new W(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new W,yi=new W,_l=new W,bi=new W,Vr=new W,zr=new W,uf=new W,vl=new W,xl=new W,Sl=new W,Ml=new Rt,El=new Rt,yl=new Rt;class Xn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),yi.subVectors(i,n),_l.subVectors(e,n);const a=Hn.dot(Hn),o=Hn.dot(yi),l=Hn.dot(_l),c=yi.dot(yi),u=yi.dot(_l),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(o,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Ml.setScalar(0),El.setScalar(0),yl.setScalar(0),Ml.fromBufferAttribute(e,n),El.fromBufferAttribute(e,i),yl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ml,s.x),a.addScaledVector(El,s.y),a.addScaledVector(yl,s.z),a}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),yi.subVectors(e,n),Hn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Hn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Vr.subVectors(r,i),zr.subVectors(s,i),vl.subVectors(e,i);const l=Vr.dot(vl),c=zr.dot(vl);if(l<=0&&c<=0)return n.copy(i);xl.subVectors(e,r);const u=Vr.dot(xl),h=zr.dot(xl);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Vr,a);Sl.subVectors(e,s);const p=Vr.dot(Sl),_=zr.dot(Sl);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(zr,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return uf.subVectors(s,r),o=(h-u)/(h-u+(p-_)),n.copy(r).addScaledVector(uf,o);const d=1/(m+x+f);return a=x*d,o=f*d,n.copy(i).addScaledVector(Vr,a).addScaledVector(zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function bl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=n_(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=bl(a,s,e+1/3),this.g=bl(a,s,e),this.b=bl(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=Pp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Ke.workingToColorSpace(Qt.copy(this),e),Math.round(je(Qt.r*255,0,255))*65536+Math.round(je(Qt.g*255,0,255))*256+Math.round(je(Qt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Fn){Ke.workingToColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(Pa);const i=al(Hi.h,Pa.h,n),r=al(Hi.s,Pa.s,n),s=al(Hi.l,Pa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Xe;Xe.NAMES=Pp;let __=0;class yo extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=Zr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ve(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ac&&(i.blendSrc=this.blendSrc),this.blendDst!==oc&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lp extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new W,La=new it;let v_=0;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yh,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)La.fromBufferAttribute(this,n),La.applyMatrix3(e),this.setXY(n,La.x,La.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ns(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ns(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ns(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ns(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),e}}class Dp extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ip extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pi extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let x_=0;const Dn=new Ot,Tl=new yn,Gr=new W,vn=new ca,ks=new ca,Xt=new W;class Bi extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wp(e)?Ip:Dp)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(vn.min,ks.min),vn.expandByPoint(Xt),Xt.addVectors(vn.max,ks.max),vn.expandByPoint(Xt)):(vn.expandByPoint(ks.min),vn.expandByPoint(ks.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(Gr.fromBufferAttribute(e,c),Xt.add(Gr)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let G=0;G<i.count;G++)o[G]=new W,l[G]=new W;const c=new W,u=new W,h=new W,f=new it,p=new it,_=new it,x=new W,m=new W;function d(G,S,M){c.fromBufferAttribute(i,G),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,G),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const y=1/(p.x*_.y-_.x*p.y);isFinite(y)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(y),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(y),o[G].add(x),o[S].add(x),o[M].add(x),l[G].add(m),l[S].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let G=0,S=b.length;G<S;++G){const M=b[G],y=M.start,U=M.count;for(let L=y,V=y+U;L<V;L+=3)d(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const A=new W,T=new W,w=new W,C=new W;function P(G){w.fromBufferAttribute(r,G),C.copy(w);const S=o[G];A.copy(S),A.sub(w.multiplyScalar(w.dot(S))).normalize(),T.crossVectors(C,S);const y=T.dot(l[G])<0?-1:1;a.setXYZW(G,A.x,A.y,A.z,y)}for(let G=0,S=b.length;G<S;++G){const M=b[G],y=M.start,U=M.count;for(let L=y,V=y+U;L<V;L+=3)P(e.getX(L+0)),P(e.getX(L+1)),P(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,h=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new ci(f,u,h)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hf=new Ot,or=new u_,Da=new Nu,ff=new W,Ia=new W,Ua=new W,Na=new W,Al=new W,Fa=new W,df=new W,Oa=new W;class fi extends yn{constructor(e=new Bi,n=new Lp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Al.fromBufferAttribute(h,e),a?Fa.addScaledVector(Al,u):Fa.addScaledVector(Al.sub(n),u))}n.add(Fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(Da.containsPoint(or.origin)===!1&&(or.intersectSphere(Da,ff)===null||or.origin.distanceToSquared(ff)>(e.far-e.near)**2))&&(hf.copy(s).invert(),or.copy(e.ray).applyMatrix4(hf),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,w=A;T<w;T+=3){const C=o.getX(T),P=o.getX(T+1),G=o.getX(T+2);r=Ba(this,d,e,i,c,u,h,C,P,G),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const b=o.getX(m),A=o.getX(m+1),T=o.getX(m+2);r=Ba(this,a,e,i,c,u,h,b,A,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],b=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,w=A;T<w;T+=3){const C=T,P=T+1,G=T+2;r=Ba(this,d,e,i,c,u,h,C,P,G),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const b=m,A=m+1,T=m+2;r=Ba(this,a,e,i,c,u,h,b,A,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function S_(t,e,n,i,r,s,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Qi,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Oa);return c<n.near||c>n.far?null:{distance:c,point:Oa.clone(),object:t}}function Ba(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ia),t.getVertexPosition(l,Ua),t.getVertexPosition(c,Na);const u=S_(t,e,n,i,Ia,Ua,Na,df);if(u){const h=new W;Xn.getBarycoord(df,Ia,Ua,Na,h),r&&(u.uv=Xn.getInterpolatedAttribute(r,o,l,c,h,new it)),s&&(u.uv1=Xn.getInterpolatedAttribute(s,o,l,c,h,new it)),a&&(u.normal=Xn.getInterpolatedAttribute(a,o,l,c,h,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};Xn.getNormal(Ia,Ua,Na,f.normal),u.face=f,u.barycoord=h}return u}class ua extends Bi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pi(c,3)),this.setAttribute("normal",new Pi(u,3)),this.setAttribute("uv",new Pi(h,2));function _(x,m,d,b,A,T,w,C,P,G,S){const M=T/P,y=w/G,U=T/2,L=w/2,V=C/2,k=P+1,F=G+1;let B=0,$=0;const re=new W;for(let ee=0;ee<F;ee++){const z=ee*y-L;for(let K=0;K<k;K++){const se=K*M-U;re[x]=se*b,re[m]=z*A,re[d]=V,c.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[d]=C>0?1:-1,u.push(re.x,re.y,re.z),h.push(K/P),h.push(1-ee/G),B+=1}}for(let ee=0;ee<G;ee++)for(let z=0;z<P;z++){const K=f+z+k*ee,se=f+z+k*(ee+1),Ue=f+(z+1)+k*(ee+1),Be=f+(z+1)+k*ee;l.push(K,se,Be),l.push(se,Ue,Be),$+=6}o.addGroup(p,$,S),p+=$,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=ls(t[n]);for(const r in i)e[r]=i[r]}return e}function M_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Up(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const E_={clone:ls,merge:on};var y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y_,this.fragmentShader=b_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=M_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Fu extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new W,pf=new it,mf=new it;class Wn extends Fu{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jc*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,pf,mf),n.subVectors(mf,pf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hr=-90,Wr=1;class T_ extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(Hr,Wr,e,n);r.layers=this.layers,this.add(r);const s=new Wn(Hr,Wr,e,n);s.layers=this.layers,this.add(s);const a=new Wn(Hr,Wr,e,n);a.layers=this.layers,this.add(a);const o=new Wn(Hr,Wr,e,n);o.layers=this.layers,this.add(o);const l=new Wn(Hr,Wr,e,n);l.layers=this.layers,this.add(l);const c=new Wn(Hr,Wr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===co)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Np extends ln{constructor(e=[],n=br,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fp extends li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Np(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ua(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Ci});s.uniforms.tEquirect.value=n;const a=new fi(r,s),o=n.minFilter;return n.minFilter===mr&&(n.minFilter=tn),new T_(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class ka extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A_={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ka;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class w_ extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class C_ extends ln{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Kt,u=Kt,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cl=new W,R_=new W,P_=new ze;class fr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cl.subVectors(i,n).cross(R_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Cl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||P_.getNormalMatrix(e),r=this.coplanarPoint(Cl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Nu,L_=new it(.5,.5),Va=new W;class Op{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,a=new fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],_=s[8],x=s[9],m=s[10],d=s[11],b=s[12],A=s[13],T=s[14],w=s[15];if(r[0].setComponents(c-a,p-u,d-_,w-b).normalize(),r[1].setComponents(c+a,p+u,d+_,w+b).normalize(),r[2].setComponents(c+o,p+h,d+x,w+A).normalize(),r[3].setComponents(c-o,p-h,d-x,w-A).normalize(),i)r[4].setComponents(l,f,m,T).normalize(),r[5].setComponents(c-l,p-f,d-m,w-T).normalize();else if(r[4].setComponents(c-l,p-f,d-m,w-T).normalize(),n===si)r[5].setComponents(c+l,p+f,d+m,w+T).normalize();else if(n===co)r[5].setComponents(l,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);const n=L_.distanceTo(e.center);return lr.radius=.7071067811865476+n,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Va.x=r.normal.x>0?e.max.x:e.min.x,Va.y=r.normal.y>0?e.max.y:e.min.y,Va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class na extends ln{constructor(e,n,i=hi,r,s,a,o=Kt,l=Kt,c,u=Di,h=1){if(u!==Di&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class D_ extends na{constructor(e,n=hi,i=br,r,s,a=Kt,o=Kt,l,c=Di){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bp extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ha extends Bi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=n/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const b=d*f-a;for(let A=0;A<c;A++){const T=A*h-s;_.push(T,-b,0),x.push(0,0,1),m.push(A/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const A=b+c*d,T=b+c*(d+1),w=b+1+c*(d+1),C=b+1+c*d;p.push(A,T,C),p.push(T,w,C)}this.setIndex(p),this.setAttribute("position",new Pi(_,3)),this.setAttribute("normal",new Pi(x,3)),this.setAttribute("uv",new Pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.widthSegments,e.heightSegments)}}class I_ extends Yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class U_ extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N_ extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kp extends Fu{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class F_ extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function gf(t,e,n,i){const r=O_(i);switch(n){case bp:return t*e;case Ap:return t*e/r.components*r.byteLength;case Ru:return t*e/r.components*r.byteLength;case as:return t*e*2/r.components*r.byteLength;case Pu:return t*e*2/r.components*r.byteLength;case Tp:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case Lu:return t*e*4/r.components*r.byteLength;case Za:case Qa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Ec:return Math.max(t,16)*Math.max(e,8)/4;case xc:case Mc:return Math.max(t,8)*Math.max(e,8)/2;case yc:case bc:case Ac:case wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tc:case Cc:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wc:case qc:case Xc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jc:case $c:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yc:case Kc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function O_(t){switch(t){case On:case Sp:return{byteLength:1,components:1};case Qs:case Mp:case Li:return{byteLength:2,components:1};case wu:case Cu:return{byteLength:2,components:4};case hi:case Au:case ri:return{byteLength:4,components:1};case Ep:case yp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tu}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tu);function Vp(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function B_(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var k_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V_=`#ifdef USE_ALPHAHASH
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
#endif`,z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
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
#endif`,X_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j_=`#ifdef USE_BATCHING
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
#endif`,$_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Z_=`#ifdef USE_IRIDESCENCE
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
#endif`,Q_=`#ifdef USE_BUMPMAP
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lv=`#define PI 3.141592653589793
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
} // validated`,cv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uv=`vec3 transformedNormal = objectNormal;
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
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_v=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Av=`#ifdef USE_GRADIENTMAP
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
}`,wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pv=`uniform bool receiveShadow;
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
#endif`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fv=`PhysicalMaterial material;
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
#endif`,Ov=`uniform sampler2D dfgLUT;
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
}`,Bv=`
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
#endif`,kv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$v=`#if defined( USE_POINTS_UV )
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
#endif`,Yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`#ifdef USE_MORPHTARGETS
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
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o1=`#ifdef USE_NORMALMAP
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
#endif`,l1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y1=`float getShadowMask() {
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
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,A1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w1=`#ifdef USE_SKINNING
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
#endif`,C1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D1=`#ifdef USE_TRANSMISSION
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
#endif`,I1=`#ifdef USE_TRANSMISSION
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
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k1=`uniform sampler2D t2D;
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`#include <common>
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
}`,q1=`#if DEPTH_PACKING == 3200
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
}`,X1=`#define DISTANCE
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
}`,j1=`#define DISTANCE
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
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`uniform float scale;
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
}`,J1=`uniform vec3 diffuse;
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
}`,Z1=`#include <common>
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
}`,Q1=`uniform vec3 diffuse;
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
}`,e2=`#define LAMBERT
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
}`,t2=`#define LAMBERT
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
}`,n2=`#define MATCAP
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
}`,i2=`#define MATCAP
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
}`,r2=`#define NORMAL
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
}`,s2=`#define NORMAL
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
}`,a2=`#define PHONG
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
}`,o2=`#define PHONG
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
}`,l2=`#define STANDARD
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
}`,c2=`#define STANDARD
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
}`,u2=`#define TOON
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
}`,h2=`#define TOON
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
}`,f2=`uniform float size;
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
}`,d2=`uniform vec3 diffuse;
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
}`,p2=`#include <common>
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
}`,m2=`uniform vec3 color;
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
}`,g2=`uniform float rotation;
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
}`,_2=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:k_,alphahash_pars_fragment:V_,alphamap_fragment:z_,alphamap_pars_fragment:G_,alphatest_fragment:H_,alphatest_pars_fragment:W_,aomap_fragment:q_,aomap_pars_fragment:X_,batching_pars_vertex:j_,batching_vertex:$_,begin_vertex:Y_,beginnormal_vertex:K_,bsdfs:J_,iridescence_fragment:Z_,bumpmap_pars_fragment:Q_,clipping_planes_fragment:ev,clipping_planes_pars_fragment:tv,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:rv,color_pars_fragment:sv,color_pars_vertex:av,color_vertex:ov,common:lv,cube_uv_reflection_fragment:cv,defaultnormal_vertex:uv,displacementmap_pars_vertex:hv,displacementmap_vertex:fv,emissivemap_fragment:dv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:gv,envmap_fragment:_v,envmap_common_pars_fragment:vv,envmap_pars_fragment:xv,envmap_pars_vertex:Sv,envmap_physical_pars_fragment:Lv,envmap_vertex:Mv,fog_vertex:Ev,fog_pars_vertex:yv,fog_fragment:bv,fog_pars_fragment:Tv,gradientmap_pars_fragment:Av,lightmap_pars_fragment:wv,lights_lambert_fragment:Cv,lights_lambert_pars_fragment:Rv,lights_pars_begin:Pv,lights_toon_fragment:Dv,lights_toon_pars_fragment:Iv,lights_phong_fragment:Uv,lights_phong_pars_fragment:Nv,lights_physical_fragment:Fv,lights_physical_pars_fragment:Ov,lights_fragment_begin:Bv,lights_fragment_maps:kv,lights_fragment_end:Vv,logdepthbuf_fragment:zv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:Hv,logdepthbuf_vertex:Wv,map_fragment:qv,map_pars_fragment:Xv,map_particle_fragment:jv,map_particle_pars_fragment:$v,metalnessmap_fragment:Yv,metalnessmap_pars_fragment:Kv,morphinstance_vertex:Jv,morphcolor_vertex:Zv,morphnormal_vertex:Qv,morphtarget_pars_vertex:e1,morphtarget_vertex:t1,normal_fragment_begin:n1,normal_fragment_maps:i1,normal_pars_fragment:r1,normal_pars_vertex:s1,normal_vertex:a1,normalmap_pars_fragment:o1,clearcoat_normal_fragment_begin:l1,clearcoat_normal_fragment_maps:c1,clearcoat_pars_fragment:u1,iridescence_pars_fragment:h1,opaque_fragment:f1,packing:d1,premultiplied_alpha_fragment:p1,project_vertex:m1,dithering_fragment:g1,dithering_pars_fragment:_1,roughnessmap_fragment:v1,roughnessmap_pars_fragment:x1,shadowmap_pars_fragment:S1,shadowmap_pars_vertex:M1,shadowmap_vertex:E1,shadowmask_pars_fragment:y1,skinbase_vertex:b1,skinning_pars_vertex:T1,skinning_vertex:A1,skinnormal_vertex:w1,specularmap_fragment:C1,specularmap_pars_fragment:R1,tonemapping_fragment:P1,tonemapping_pars_fragment:L1,transmission_fragment:D1,transmission_pars_fragment:I1,uv_pars_fragment:U1,uv_pars_vertex:N1,uv_vertex:F1,worldpos_vertex:O1,background_vert:B1,background_frag:k1,backgroundCube_vert:V1,backgroundCube_frag:z1,cube_vert:G1,cube_frag:H1,depth_vert:W1,depth_frag:q1,distance_vert:X1,distance_frag:j1,equirect_vert:$1,equirect_frag:Y1,linedashed_vert:K1,linedashed_frag:J1,meshbasic_vert:Z1,meshbasic_frag:Q1,meshlambert_vert:e2,meshlambert_frag:t2,meshmatcap_vert:n2,meshmatcap_frag:i2,meshnormal_vert:r2,meshnormal_frag:s2,meshphong_vert:a2,meshphong_frag:o2,meshphysical_vert:l2,meshphysical_frag:c2,meshtoon_vert:u2,meshtoon_frag:h2,points_vert:f2,points_frag:d2,shadow_vert:p2,shadow_frag:m2,sprite_vert:g2,sprite_frag:_2},he={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ii={basic:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:on([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:on([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:on([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:on([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:on([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:on([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:on([he.common,he.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:on([he.lights,he.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ii.physical={uniforms:on([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const za={r:0,b:0,g:0},cr=new Ii,v2=new Ot;function x2(t,e,n,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function _(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?n:e).get(T)),T}function x(A){let T=!1;const w=_(A);w===null?d(o,l):w&&w.isColor&&(d(w,1),T=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(A,T){const w=_(T);w&&(w.isCubeTexture||w.mapping===Eo)?(u===void 0&&(u=new fi(new ua(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:ls(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cr.copy(T.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(v2.makeRotationFromEuler(cr)),u.material.toneMapped=Ke.getTransfer(w.colorSpace)!==ct,(h!==w||f!==w.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,p=t.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new fi(new ha(2,2),new Yn({name:"BackgroundMaterial",uniforms:ls(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,p=t.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,T){A.getRGB(za,Up(t)),i.buffers.color.setClear(za.r,za.g,za.b,T,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:x,addToRenderList:m,dispose:b}}function S2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,y,U,L,V){let k=!1;const F=h(L,U,y);s!==F&&(s=F,c(s.object)),k=p(M,L,U,V),k&&_(M,L,U,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,T(M,y,U,L),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function h(M,y,U){const L=U.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let k=V[y.id];k===void 0&&(k={},V[y.id]=k);let F=k[L];return F===void 0&&(F=f(l()),k[L]=F),F}function f(M){const y=[],U=[],L=[];for(let V=0;V<n;V++)y[V]=0,U[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:U,attributeDivisors:L,object:M,attributes:{},index:null}}function p(M,y,U,L){const V=s.attributes,k=y.attributes;let F=0;const B=U.getAttributes();for(const $ in B)if(B[$].location>=0){const ee=V[$];let z=k[$];if(z===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(z=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(z=M.instanceColor)),ee===void 0||ee.attribute!==z||z&&ee.data!==z.data)return!0;F++}return s.attributesNum!==F||s.index!==L}function _(M,y,U,L){const V={},k=y.attributes;let F=0;const B=U.getAttributes();for(const $ in B)if(B[$].location>=0){let ee=k[$];ee===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor));const z={};z.attribute=ee,ee&&ee.data&&(z.data=ee.data),V[$]=z,F++}s.attributes=V,s.attributesNum=F,s.index=L}function x(){const M=s.newAttributes;for(let y=0,U=M.length;y<U;y++)M[y]=0}function m(M){d(M,0)}function d(M,y){const U=s.newAttributes,L=s.enabledAttributes,V=s.attributeDivisors;U[M]=1,L[M]===0&&(t.enableVertexAttribArray(M),L[M]=1),V[M]!==y&&(t.vertexAttribDivisor(M,y),V[M]=y)}function b(){const M=s.newAttributes,y=s.enabledAttributes;for(let U=0,L=y.length;U<L;U++)y[U]!==M[U]&&(t.disableVertexAttribArray(U),y[U]=0)}function A(M,y,U,L,V,k,F){F===!0?t.vertexAttribIPointer(M,y,U,V,k):t.vertexAttribPointer(M,y,U,L,V,k)}function T(M,y,U,L){x();const V=L.attributes,k=U.getAttributes(),F=y.defaultAttributeValues;for(const B in k){const $=k[B];if($.location>=0){let re=V[B];if(re===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const ee=re.normalized,z=re.itemSize,K=e.get(re);if(K===void 0)continue;const se=K.buffer,Ue=K.type,Be=K.bytesPerElement,X=Ue===t.INT||Ue===t.UNSIGNED_INT||re.gpuType===Au;if(re.isInterleavedBufferAttribute){const Q=re.data,ge=Q.stride,Fe=re.offset;if(Q.isInstancedInterleavedBuffer){for(let _e=0;_e<$.locationSize;_e++)d($.location+_e,Q.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _e=0;_e<$.locationSize;_e++)m($.location+_e);t.bindBuffer(t.ARRAY_BUFFER,se);for(let _e=0;_e<$.locationSize;_e++)A($.location+_e,z/$.locationSize,Ue,ee,ge*Be,(Fe+z/$.locationSize*_e)*Be,X)}else{if(re.isInstancedBufferAttribute){for(let Q=0;Q<$.locationSize;Q++)d($.location+Q,re.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Q=0;Q<$.locationSize;Q++)m($.location+Q);t.bindBuffer(t.ARRAY_BUFFER,se);for(let Q=0;Q<$.locationSize;Q++)A($.location+Q,z/$.locationSize,Ue,ee,z*Be,z/$.locationSize*Q*Be,X)}}else if(F!==void 0){const ee=F[B];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv($.location,ee);break;case 3:t.vertexAttrib3fv($.location,ee);break;case 4:t.vertexAttrib4fv($.location,ee);break;default:t.vertexAttrib1fv($.location,ee)}}}}b()}function w(){G();for(const M in i){const y=i[M];for(const U in y){const L=y[U];for(const V in L)u(L[V].object),delete L[V];delete y[U]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const y=i[M.id];for(const U in y){const L=y[U];for(const V in L)u(L[V].object),delete L[V];delete y[U]}delete i[M.id]}function P(M){for(const y in i){const U=i[y];if(U[M.id]===void 0)continue;const L=U[M.id];for(const V in L)u(L[V].object),delete L[V];delete U[M.id]}}function G(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:G,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function M2(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];n.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function E2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==jn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const G=P===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==On&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ri&&!G)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:T,maxSamples:w,samples:C}}function y2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new fr,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,A=b*4;let T=d.clippingState||null;l.value=T,T=u(_,f,A,p);for(let w=0;w!==A;++w)T[w]=n[w];d.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,T=p;A!==x;++A,T+=4)a.copy(h[A]).applyMatrix4(b,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function b2(t){let e=new WeakMap;function n(a,o){return o===mc?a.mapping=br:o===gc&&(a.mapping=ss),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===mc||o===gc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fp(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ji=4,_f=[.125,.215,.35,.446,.526,.582],pr=20,T2=256,Vs=new kp,vf=new Xe;let Rl=null,Pl=0,Ll=0,Dl=!1;const A2=new W;class xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=A2}=s;Rl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rl,Pl,Ll),this._renderer.xr.enabled=Dl,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===br||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Li,format:jn,colorSpace:os,depthBuffer:!1},r=Sf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sf(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=w2(s)),this._blurMaterial=R2(s,e,n),this._ggxMaterial=C2(s,e,n)}return r}_compileMaterial(e){const n=new fi(new Bi,e);this._renderer.compile(n,Vs)}_sceneToCubeUV(e,n,i,r,s){const l=new Wn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(vf),h.toneMapping=oi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new ua,new Lp({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let d=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,d=!0):(m.color.copy(vf),d=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):T===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const w=this._cubeSize;qr(r,T*w,A>2?w:0,w,w),h.setRenderTarget(r),d&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===br||e.mapping===ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Vs)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Ji?i-_+Ji:0),d=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,qr(s,m,d,3*x,2*x),r.setRenderTarget(s),r.render(o,Vs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,qr(e,m,d,3*x,2*x),r.setRenderTarget(e),r.render(o,Vs)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*pr-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):pr;m>pr&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const d=[];let b=0;for(let P=0;P<pr;++P){const G=P/x,S=Math.exp(-G*G/2);d.push(S),P===0?b+=S:P<m&&(b+=2*S)}for(let P=0;P<d.length;P++)d[P]=d[P]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-i;const T=this._sizeLods[r],w=3*T*(r>A-Ji?r-A+Ji:0),C=4*(this._cubeSize-T);qr(n,w,C,3*T,2*T),l.setRenderTarget(n),l.render(h,Vs)}}function w2(t){const e=[],n=[],i=[];let r=t;const s=t-Ji+1+_f.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Ji?l=_f[a-t+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,d=1,b=new Float32Array(x*_*p),A=new Float32Array(m*_*p),T=new Float32Array(d*_*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,G=C>2?0:-1,S=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];b.set(S,x*_*C),A.set(f,m*_*C);const M=[C,C,C,C,C,C];T.set(M,d*_*C)}const w=new Bi;w.setAttribute("position",new ci(b,x)),w.setAttribute("uv",new ci(A,m)),w.setAttribute("faceIndex",new ci(T,d)),i.push(new fi(w,null)),r>Ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Sf(t,e,n){const i=new li(t,e,n);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function C2(t,e,n){return new Yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function R2(t,e,n){const i=new Float32Array(pr),r=new W(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Mf(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ef(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function bo(){return`

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
	`}function P2(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===mc||l===gc,u=l===br||l===ss;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new xf(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new xf(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function L2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ta("WebGLRenderer: "+i+" extension not supported."),r}}}function D2(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let A=0,T=b.length;A<T;A+=3){const w=b[A+0],C=b[A+1],P=b[A+2];f.push(w,C,C,P,P,w)}}else if(_!==void 0){const b=_.array;x=_.version;for(let A=0,T=b.length/3-1;A<T;A+=3){const w=A+0,C=A+1,P=A+2;f.push(w,C,C,P,P,w)}}else return;const m=new(wp(f)?Ip:Dp)(f,1);m.version=x;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function I2(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*a,_),n.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function h(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,_);let d=0;for(let b=0;b<_;b++)d+=p[b]*x[b];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function U2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function N2(t,e,n){const i=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let A=0;p===!0&&(A=1),_===!0&&(A=2),x===!0&&(A=3);let T=o.attributes.position.count*A,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*h),P=new Cp(C,T,w,h);P.type=ri,P.needsUpdate=!0;const G=A*4;for(let M=0;M<h;M++){const y=m[M],U=d[M],L=b[M],V=T*w*4*M;for(let k=0;k<y.count;k++){const F=k*G;p===!0&&(r.fromBufferAttribute(y,k),C[V+F+0]=r.x,C[V+F+1]=r.y,C[V+F+2]=r.z,C[V+F+3]=0),_===!0&&(r.fromBufferAttribute(U,k),C[V+F+4]=r.x,C[V+F+5]=r.y,C[V+F+6]=r.z,C[V+F+7]=0),x===!0&&(r.fromBufferAttribute(L,k),C[V+F+8]=r.x,C[V+F+9]=r.y,C[V+F+10]=r.z,C[V+F+11]=L.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new it(T,w)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function F2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const O2={[fp]:"LINEAR_TONE_MAPPING",[dp]:"REINHARD_TONE_MAPPING",[pp]:"CINEON_TONE_MAPPING",[mp]:"ACES_FILMIC_TONE_MAPPING",[_p]:"AGX_TONE_MAPPING",[vp]:"NEUTRAL_TONE_MAPPING",[gp]:"CUSTOM_TONE_MAPPING"};function B2(t,e,n,i,r){const s=new li(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new li(e,n,{type:Li,depthBuffer:!1,stencilBuffer:!1}),o=new Bi;o.setAttribute("position",new Pi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Pi([0,2,0,0,2,0],2));const l=new I_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new fi(o,l),u=new kp(-1,1,1,-1,0,1);let h=null,f=null,p=!1,_,x=null,m=[],d=!1;this.setSize=function(b,A){s.setSize(b,A),a.setSize(b,A);for(let T=0;T<m.length;T++){const w=m[T];w.setSize&&w.setSize(b,A)}},this.setEffects=function(b){m=b,d=m.length>0&&m[0].isRenderPass===!0;const A=s.width,T=s.height;for(let w=0;w<m.length;w++){const C=m[w];C.setSize&&C.setSize(A,T)}},this.begin=function(b,A){if(p||b.toneMapping===oi&&m.length===0)return!1;if(x=A,A!==null){const T=A.width,w=A.height;(s.width!==T||s.height!==w)&&this.setSize(T,w)}return d===!1&&b.setRenderTarget(s),_=b.toneMapping,b.toneMapping=oi,!0},this.hasRenderPass=function(){return d},this.end=function(b,A){b.toneMapping=_,p=!0;let T=s,w=a;for(let C=0;C<m.length;C++){const P=m[C];if(P.enabled!==!1&&(P.render(b,w,T,A),P.needsSwap!==!1)){const G=T;T=w,w=G}}if(h!==b.outputColorSpace||f!==b.toneMapping){h=b.outputColorSpace,f=b.toneMapping,l.defines={},Ke.getTransfer(h)===ct&&(l.defines.SRGB_TRANSFER="");const C=O2[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(x),b.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const zp=new ln,Zc=new na(1,1),Gp=new Cp,Hp=new l_,Wp=new Np,yf=[],bf=[],Tf=new Float32Array(16),Af=new Float32Array(9),wf=new Float32Array(4);function Ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=yf[r];if(s===void 0&&(s=new Float32Array(r),yf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function To(t,e){let n=bf[e];n===void 0&&(n=new Int32Array(e),bf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function k2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function V2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function G2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function H2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;wf.set(i),t.uniformMatrix2fv(this.addr,!1,wf),Ht(n,i)}}function W2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;Af.set(i),t.uniformMatrix3fv(this.addr,!1,Af),Ht(n,i)}}function q2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;Tf.set(i),t.uniformMatrix4fv(this.addr,!1,Tf),Ht(n,i)}}function X2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function j2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function K2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function J2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function ex(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Zc.compareFunction=n.isReversedDepthBuffer()?Iu:Du,s=Zc):s=zp,n.setTexture2D(e||s,r)}function tx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Hp,r)}function nx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Wp,r)}function ix(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Gp,r)}function rx(t){switch(t){case 5126:return k2;case 35664:return V2;case 35665:return z2;case 35666:return G2;case 35674:return H2;case 35675:return W2;case 35676:return q2;case 5124:case 35670:return X2;case 35667:case 35671:return j2;case 35668:case 35672:return $2;case 35669:case 35673:return Y2;case 5125:return K2;case 36294:return J2;case 36295:return Z2;case 36296:return Q2;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function sx(t,e){t.uniform1fv(this.addr,e)}function ax(t,e){const n=Ms(e,this.size,2);t.uniform2fv(this.addr,n)}function ox(t,e){const n=Ms(e,this.size,3);t.uniform3fv(this.addr,n)}function lx(t,e){const n=Ms(e,this.size,4);t.uniform4fv(this.addr,n)}function cx(t,e){const n=Ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ux(t,e){const n=Ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hx(t,e){const n=Ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fx(t,e){t.uniform1iv(this.addr,e)}function dx(t,e){t.uniform2iv(this.addr,e)}function px(t,e){t.uniform3iv(this.addr,e)}function mx(t,e){t.uniform4iv(this.addr,e)}function gx(t,e){t.uniform1uiv(this.addr,e)}function _x(t,e){t.uniform2uiv(this.addr,e)}function vx(t,e){t.uniform3uiv(this.addr,e)}function xx(t,e){t.uniform4uiv(this.addr,e)}function Sx(t,e,n){const i=this.cache,r=e.length,s=To(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Zc:a=zp;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Mx(t,e,n){const i=this.cache,r=e.length,s=To(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Hp,s[a])}function Ex(t,e,n){const i=this.cache,r=e.length,s=To(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Wp,s[a])}function yx(t,e,n){const i=this.cache,r=e.length,s=To(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Gp,s[a])}function bx(t){switch(t){case 5126:return sx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return vx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return yx}}class Tx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rx(n.type)}}class Ax{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bx(n.type)}}class wx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Il=/(\w+)(\])?(\[|\.)?/g;function Cf(t,e){t.seq.push(e),t.map[e.id]=e}function Cx(t,e,n){const i=t.name,r=i.length;for(Il.lastIndex=0;;){const s=Il.exec(i),a=Il.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Cf(n,c===void 0?new Tx(o,t,e):new Ax(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new wx(o),Cf(n,h)),n=h}}}class no{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Cx(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Rf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Rx=37297;let Px=0;function Lx(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Pf=new ze;function Dx(t){Ke._getMatrix(Pf,Ke.workingColorSpace,t);const e=`mat3( ${Pf.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case lo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Lf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Lx(t.getShaderSource(e),o)}else return s}function Ix(t,e){const n=Dx(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Ux={[fp]:"Linear",[dp]:"Reinhard",[pp]:"Cineon",[mp]:"ACESFilmic",[_p]:"AgX",[vp]:"Neutral",[gp]:"Custom"};function Nx(t,e){const n=Ux[e];return n===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ga=new W;function Fx(){Ke.getLuminanceCoefficients(Ga);const t=Ga.x.toFixed(4),e=Ga.y.toFixed(4),n=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Bx(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kx(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Xs(t){return t!==""}function Df(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function If(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(t){return t.replace(Vx,Gx)}const zx=new Map;function Gx(t,e){let n=Ge[e];if(n===void 0){const i=zx.get(e);if(i!==void 0)n=Ge[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qc(n)}const Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(t){return t.replace(Hx,Wx)}function Wx(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nf(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const qx={[Ja]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function Xx(t){return qx[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jx={[br]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE_UV"};function $x(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":jx[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Yx={[ss]:"ENVMAP_MODE_REFRACTION"};function Kx(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Yx[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jx={[hp]:"ENVMAP_BLENDING_MULTIPLY",[Gg]:"ENVMAP_BLENDING_MIX",[Hg]:"ENVMAP_BLENDING_ADD"};function Zx(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Jx[t.combine]||"ENVMAP_BLENDING_NONE"}function Qx(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function e3(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Xx(n),c=$x(n),u=Kx(n),h=Zx(n),f=Qx(n),p=Ox(n),_=Bx(s),x=r.createProgram();let m,d,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),d.length>0&&(d+=`
`)):(m=[Nf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),d=[Nf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==oi?Nx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Ix("linearToOutputTexel",n.outputColorSpace),Fx(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),a=Qc(a),a=Df(a,n),a=If(a,n),o=Qc(o),o=Df(o,n),o=If(o,n),a=Uf(a),o=Uf(o),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=b+m+a,T=b+d+o,w=Rf(r,r.VERTEX_SHADER,A),C=Rf(r,r.FRAGMENT_SHADER,T);r.attachShader(x,w),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(y){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(x)||"",L=r.getShaderInfoLog(w)||"",V=r.getShaderInfoLog(C)||"",k=U.trim(),F=L.trim(),B=V.trim();let $=!0,re=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,w,C);else{const ee=Lf(r,w,"vertex"),z=Lf(r,C,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+k+`
`+ee+`
`+z)}else k!==""?Ve("WebGLProgram: Program Info Log:",k):(F===""||B==="")&&(re=!1);re&&(y.diagnostics={runnable:$,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:d}})}r.deleteShader(w),r.deleteShader(C),G=new no(r,x),S=kx(r,x)}let G;this.getUniforms=function(){return G===void 0&&P(this),G};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Rx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Px++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=C,this}let t3=0;class n3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new i3(e),n.set(e,i)),i}}class i3{constructor(e){this.id=t3++,this.code=e,this.usedTimes=0}}function r3(t,e,n,i,r,s,a){const o=new Rp,l=new n3,c=new Set,u=[],h=new Map,f=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,y,U,L){const V=U.fog,k=L.geometry,F=S.isMeshStandardMaterial?U.environment:null,B=(S.isMeshStandardMaterial?n:e).get(S.envMap||F),$=B&&B.mapping===Eo?B.image.height:null,re=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&Ve("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,z=ee!==void 0?ee.length:0;let K=0;k.morphAttributes.position!==void 0&&(K=1),k.morphAttributes.normal!==void 0&&(K=2),k.morphAttributes.color!==void 0&&(K=3);let se,Ue,Be,X;if(re){const ot=ii[re];se=ot.vertexShader,Ue=ot.fragmentShader}else se=S.vertexShader,Ue=S.fragmentShader,l.update(S),Be=l.getVertexShaderID(S),X=l.getFragmentShaderID(S);const Q=t.getRenderTarget(),ge=t.state.buffers.depth.getReversed(),Fe=L.isInstancedMesh===!0,_e=L.isBatchedMesh===!0,Ze=!!S.map,qt=!!S.matcap,Ye=!!B,at=!!S.aoMap,ft=!!S.lightMap,He=!!S.bumpMap,Dt=!!S.normalMap,R=!!S.displacementMap,It=!!S.emissiveMap,rt=!!S.metalnessMap,gt=!!S.roughnessMap,ye=S.anisotropy>0,E=S.clearcoat>0,g=S.dispersion>0,I=S.iridescence>0,Y=S.sheen>0,Z=S.transmission>0,j=ye&&!!S.anisotropyMap,Te=E&&!!S.clearcoatMap,oe=E&&!!S.clearcoatNormalMap,Me=E&&!!S.clearcoatRoughnessMap,Oe=I&&!!S.iridescenceMap,ne=I&&!!S.iridescenceThicknessMap,ce=Y&&!!S.sheenColorMap,Se=Y&&!!S.sheenRoughnessMap,be=!!S.specularMap,le=!!S.specularColorMap,We=!!S.specularIntensityMap,D=Z&&!!S.transmissionMap,de=Z&&!!S.thicknessMap,ie=!!S.gradientMap,pe=!!S.alphaMap,te=S.alphaTest>0,J=!!S.alphaHash,ae=!!S.extensions;let ke=oi;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ke=t.toneMapping);const _t={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:Ue,defines:S.defines,customVertexShaderID:Be,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:_e,batchingColor:_e&&L._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&L.instanceColor!==null,instancingMorph:Fe&&L.morphTexture!==null,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:os,alphaToCoverage:!!S.alphaToCoverage,map:Ze,matcap:qt,envMap:Ye,envMapMode:Ye&&B.mapping,envMapCubeUVHeight:$,aoMap:at,lightMap:ft,bumpMap:He,normalMap:Dt,displacementMap:R,emissiveMap:It,normalMapObjectSpace:Dt&&S.normalMapType===jg,normalMapTangentSpace:Dt&&S.normalMapType===Xg,metalnessMap:rt,roughnessMap:gt,anisotropy:ye,anisotropyMap:j,clearcoat:E,clearcoatMap:Te,clearcoatNormalMap:oe,clearcoatRoughnessMap:Me,dispersion:g,iridescence:I,iridescenceMap:Oe,iridescenceThicknessMap:ne,sheen:Y,sheenColorMap:ce,sheenRoughnessMap:Se,specularMap:be,specularColorMap:le,specularIntensityMap:We,transmission:Z,transmissionMap:D,thicknessMap:de,gradientMap:ie,opaque:S.transparent===!1&&S.blending===Zr&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:te,alphaHash:J,combine:S.combine,mapUv:Ze&&x(S.map.channel),aoMapUv:at&&x(S.aoMap.channel),lightMapUv:ft&&x(S.lightMap.channel),bumpMapUv:He&&x(S.bumpMap.channel),normalMapUv:Dt&&x(S.normalMap.channel),displacementMapUv:R&&x(S.displacementMap.channel),emissiveMapUv:It&&x(S.emissiveMap.channel),metalnessMapUv:rt&&x(S.metalnessMap.channel),roughnessMapUv:gt&&x(S.roughnessMap.channel),anisotropyMapUv:j&&x(S.anisotropyMap.channel),clearcoatMapUv:Te&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(S.sheenRoughnessMap.channel),specularMapUv:be&&x(S.specularMap.channel),specularColorMapUv:le&&x(S.specularColorMap.channel),specularIntensityMapUv:We&&x(S.specularIntensityMap.channel),transmissionMapUv:D&&x(S.transmissionMap.channel),thicknessMapUv:de&&x(S.thicknessMap.channel),alphaMapUv:pe&&x(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Dt||ye),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Ze||pe),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:K,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&y.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ze&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:It&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ti,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ae&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&S.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const y in S.defines)M.push(y),M.push(S.defines[y]);return S.isRawShaderMaterial===!1&&(b(M,S),A(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function A(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function T(S){const M=_[S.type];let y;if(M){const U=ii[M];y=E_.clone(U.uniforms)}else y=S.uniforms;return y}function w(S,M){let y=h.get(M);return y!==void 0?++y.usedTimes:(y=new e3(t,M,S,s),u.push(y),h.set(M,y)),y}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),h.delete(S.cacheKey),S.destroy()}}function P(S){l.remove(S)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:w,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:G}}function s3(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function a3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ff(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Of(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,p,_,x,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function o(h,f,p,_,x,m){const d=a(h,f,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,_,x,m){const d=a(h,f,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||a3),i.length>1&&i.sort(f||Ff),r.length>1&&r.sort(f||Ff)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function o3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Of,t.set(i,[a])):r>=s.length?(a=new Of,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function l3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Xe};break;case"SpotLight":n={position:new W,direction:new W,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function c3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let u3=0;function h3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function f3(t){const e=new l3,n=c3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Ot,a=new Ot;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,b=0,A=0,T=0,w=0,C=0,P=0;c.sort(h3);for(let S=0,M=c.length;S<M;S++){const y=c[S],U=y.color,L=y.intensity,V=y.distance;let k=null;if(y.shadow&&y.shadow.map&&(y.shadow.map.texture.format===as?k=y.shadow.map.texture:k=y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)u+=U.r*L,h+=U.g*L,f+=U.b*L;else if(y.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(y.sh.coefficients[F],L);P++}else if(y.isDirectionalLight){const F=e.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const B=y.shadow,$=n.get(y);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=y.shadow.matrix,b++}i.directional[p]=F,p++}else if(y.isSpotLight){const F=e.get(y);F.position.setFromMatrixPosition(y.matrixWorld),F.color.copy(U).multiplyScalar(L),F.distance=V,F.coneCos=Math.cos(y.angle),F.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),F.decay=y.decay,i.spot[x]=F;const B=y.shadow;if(y.map&&(i.spotLightMap[w]=y.map,w++,B.updateMatrices(y),y.castShadow&&C++),i.spotLightMatrix[x]=B.matrix,y.castShadow){const $=n.get(y);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=k,T++}x++}else if(y.isRectAreaLight){const F=e.get(y);F.color.copy(U).multiplyScalar(L),F.halfWidth.set(y.width*.5,0,0),F.halfHeight.set(0,y.height*.5,0),i.rectArea[m]=F,m++}else if(y.isPointLight){const F=e.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity),F.distance=y.distance,F.decay=y.decay,y.castShadow){const B=y.shadow,$=n.get(y);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=y.shadow.matrix,A++}i.point[_]=F,_++}else if(y.isHemisphereLight){const F=e.get(y);F.skyColor.copy(y.color).multiplyScalar(L),F.groundColor.copy(y.groundColor).multiplyScalar(L),i.hemi[d]=F,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const G=i.hash;(G.directionalLength!==p||G.pointLength!==_||G.spotLength!==x||G.rectAreaLength!==m||G.hemiLength!==d||G.numDirectionalShadows!==b||G.numPointShadows!==A||G.numSpotShadows!==T||G.numSpotMaps!==w||G.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=T+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,G.directionalLength=p,G.pointLength=_,G.spotLength=x,G.rectAreaLength=m,G.hemiLength=d,G.numDirectionalShadows=b,G.numPointShadows=A,G.numSpotShadows=T,G.numSpotMaps=w,G.numLightProbes=P,i.version=u3++)}function l(c,u){let h=0,f=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const A=c[d];if(A.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),h++}else if(A.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(A.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Bf(t){const e=new f3(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function d3(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Bf(t),e.set(r,[o])):s>=a.length?(o=new Bf(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const p3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m3=`uniform sampler2D shadow_pass;
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
}`,g3=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],_3=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],kf=new Ot,zs=new W,Ul=new W;function v3(t,e,n){let i=new Op;const r=new it,s=new it,a=new Rt,o=new U_,l=new N_,c={},u=n.maxTextureSize,h={[Qi]:dn,[dn]:Qi,[Ti]:Ti},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:p3,fragmentShader:m3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Bi;_.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new fi(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja;let d=this.type;this.render=function(C,P,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===yg&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=Ja);const S=t.getRenderTarget(),M=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Ci),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=d!==this.type;L&&P.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(k=>k.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,k=C.length;V<k;V++){const F=C[V],B=F.shadow;if(B===void 0){Ve("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const $=B.getFrameExtents();if(r.multiply($),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,B.mapSize.y=s.y)),B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===qs){if(F.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new li(r.x,r.y,{format:as,type:Li,minFilter:tn,magFilter:tn,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new na(r.x,r.y,ri),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=Di,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Kt,B.map.depthTexture.magFilter=Kt}else{F.isPointLight?(B.map=new Fp(r.x),B.map.depthTexture=new D_(r.x,hi)):(B.map=new li(r.x,r.y),B.map.depthTexture=new na(r.x,r.y,hi)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=Di;const ee=t.state.buffers.depth.getReversed();this.type===Ja?(B.map.depthTexture.compareFunction=ee?Iu:Du,B.map.depthTexture.minFilter=tn,B.map.depthTexture.magFilter=tn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Kt,B.map.depthTexture.magFilter=Kt)}B.camera.updateProjectionMatrix()}const re=B.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<re;ee++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(B.map),t.clear());const z=B.getViewport(ee);a.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),U.viewport(a)}if(F.isPointLight){const z=B.camera,K=B.matrix,se=F.distance||z.far;se!==z.far&&(z.far=se,z.updateProjectionMatrix()),zs.setFromMatrixPosition(F.matrixWorld),z.position.copy(zs),Ul.copy(z.position),Ul.add(g3[ee]),z.up.copy(_3[ee]),z.lookAt(Ul),z.updateMatrixWorld(),K.makeTranslation(-zs.x,-zs.y,-zs.z),kf.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(kf,z.coordinateSystem,z.reversedDepth)}else B.updateMatrices(F);i=B.getFrustum(),T(P,G,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===qs&&b(B,G),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,y)};function b(C,P){const G=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new li(r.x,r.y,{format:as,type:Li})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(P,null,G,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(P,null,G,p,x,null)}function A(C,P,G,S){let M=null;const y=G.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(y!==void 0)M=y;else if(M=G.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=M.uuid,L=P.uuid;let V=c[U];V===void 0&&(V={},c[U]=V);let k=V[L];k===void 0&&(k=M.clone(),V[L]=k,P.addEventListener("dispose",w)),M=k}if(M.visible=P.visible,M.wireframe=P.wireframe,S===qs?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,G.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=t.properties.get(M);U.light=G}return M}function T(C,P,G,S,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===qs)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld);const L=e.update(C),V=C.material;if(Array.isArray(V)){const k=L.groups;for(let F=0,B=k.length;F<B;F++){const $=k[F],re=V[$.materialIndex];if(re&&re.visible){const ee=A(C,re,S,M);C.onBeforeShadow(t,C,P,G,L,ee,$),t.renderBufferDirect(G,null,L,ee,C,$),C.onAfterShadow(t,C,P,G,L,ee,$)}}}else if(V.visible){const k=A(C,V,S,M);C.onBeforeShadow(t,C,P,G,L,k,null),t.renderBufferDirect(G,null,L,k,C,null),C.onAfterShadow(t,C,P,G,L,k,null)}}const U=C.children;for(let L=0,V=U.length;L<V;L++)T(U[L],P,G,S,M)}function w(C){C.target.removeEventListener("dispose",w);for(const G in c){const S=c[G],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const x3={[lc]:cc,[uc]:dc,[hc]:pc,[rs]:fc,[cc]:lc,[dc]:uc,[pc]:hc,[fc]:rs};function S3(t,e){function n(){let D=!1;const de=new Rt;let ie=null;const pe=new Rt(0,0,0,0);return{setMask:function(te){ie!==te&&!D&&(t.colorMask(te,te,te,te),ie=te)},setLocked:function(te){D=te},setClear:function(te,J,ae,ke,_t){_t===!0&&(te*=ke,J*=ke,ae*=ke),de.set(te,J,ae,ke),pe.equals(de)===!1&&(t.clearColor(te,J,ae,ke),pe.copy(de))},reset:function(){D=!1,ie=null,pe.set(-1,0,0,0)}}}function i(){let D=!1,de=!1,ie=null,pe=null,te=null;return{setReversed:function(J){if(de!==J){const ae=e.get("EXT_clip_control");J?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),de=J;const ke=te;te=null,this.setClear(ke)}},getReversed:function(){return de},setTest:function(J){J?Q(t.DEPTH_TEST):ge(t.DEPTH_TEST)},setMask:function(J){ie!==J&&!D&&(t.depthMask(J),ie=J)},setFunc:function(J){if(de&&(J=x3[J]),pe!==J){switch(J){case lc:t.depthFunc(t.NEVER);break;case cc:t.depthFunc(t.ALWAYS);break;case uc:t.depthFunc(t.LESS);break;case rs:t.depthFunc(t.LEQUAL);break;case hc:t.depthFunc(t.EQUAL);break;case fc:t.depthFunc(t.GEQUAL);break;case dc:t.depthFunc(t.GREATER);break;case pc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=J}},setLocked:function(J){D=J},setClear:function(J){te!==J&&(de&&(J=1-J),t.clearDepth(J),te=J)},reset:function(){D=!1,ie=null,pe=null,te=null,de=!1}}}function r(){let D=!1,de=null,ie=null,pe=null,te=null,J=null,ae=null,ke=null,_t=null;return{setTest:function(ot){D||(ot?Q(t.STENCIL_TEST):ge(t.STENCIL_TEST))},setMask:function(ot){de!==ot&&!D&&(t.stencilMask(ot),de=ot)},setFunc:function(ot,Qn,xi){(ie!==ot||pe!==Qn||te!==xi)&&(t.stencilFunc(ot,Qn,xi),ie=ot,pe=Qn,te=xi)},setOp:function(ot,Qn,xi){(J!==ot||ae!==Qn||ke!==xi)&&(t.stencilOp(ot,Qn,xi),J=ot,ae=Qn,ke=xi)},setLocked:function(ot){D=ot},setClear:function(ot){_t!==ot&&(t.clearStencil(ot),_t=ot)},reset:function(){D=!1,de=null,ie=null,pe=null,te=null,J=null,ae=null,ke=null,_t=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,b=null,A=null,T=null,w=null,C=null,P=new Xe(0,0,0),G=0,S=!1,M=null,y=null,U=null,L=null,V=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),F=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),F=B>=2);let re=null,ee={};const z=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),se=new Rt().fromArray(z),Ue=new Rt().fromArray(K);function Be(D,de,ie,pe){const te=new Uint8Array(4),J=t.createTexture();t.bindTexture(D,J),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ae=0;ae<ie;ae++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(de+ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return J}const X={};X[t.TEXTURE_2D]=Be(t.TEXTURE_2D,t.TEXTURE_2D,1),X[t.TEXTURE_CUBE_MAP]=Be(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[t.TEXTURE_2D_ARRAY]=Be(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),X[t.TEXTURE_3D]=Be(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(t.DEPTH_TEST),a.setFunc(rs),He(!1),Dt(Wh),Q(t.CULL_FACE),at(Ci);function Q(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function ge(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Fe(D,de){return h[D]!==de?(t.bindFramebuffer(D,de),h[D]=de,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=de),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=de),!0):!1}function _e(D,de){let ie=p,pe=!1;if(D){ie=f.get(de),ie===void 0&&(ie=[],f.set(de,ie));const te=D.textures;if(ie.length!==te.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let J=0,ae=te.length;J<ae;J++)ie[J]=t.COLOR_ATTACHMENT0+J;ie.length=te.length,pe=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,pe=!0);pe&&t.drawBuffers(ie)}function Ze(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const qt={[dr]:t.FUNC_ADD,[Tg]:t.FUNC_SUBTRACT,[Ag]:t.FUNC_REVERSE_SUBTRACT};qt[wg]=t.MIN,qt[Cg]=t.MAX;const Ye={[Rg]:t.ZERO,[Pg]:t.ONE,[Lg]:t.SRC_COLOR,[ac]:t.SRC_ALPHA,[Og]:t.SRC_ALPHA_SATURATE,[Ng]:t.DST_COLOR,[Ig]:t.DST_ALPHA,[Dg]:t.ONE_MINUS_SRC_COLOR,[oc]:t.ONE_MINUS_SRC_ALPHA,[Fg]:t.ONE_MINUS_DST_COLOR,[Ug]:t.ONE_MINUS_DST_ALPHA,[Bg]:t.CONSTANT_COLOR,[kg]:t.ONE_MINUS_CONSTANT_COLOR,[Vg]:t.CONSTANT_ALPHA,[zg]:t.ONE_MINUS_CONSTANT_ALPHA};function at(D,de,ie,pe,te,J,ae,ke,_t,ot){if(D===Ci){x===!0&&(ge(t.BLEND),x=!1);return}if(x===!1&&(Q(t.BLEND),x=!0),D!==bg){if(D!==m||ot!==S){if((d!==dr||T!==dr)&&(t.blendEquation(t.FUNC_ADD),d=dr,T=dr),ot)switch(D){case Zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qh:t.blendFunc(t.ONE,t.ONE);break;case Xh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",D);break}else switch(D){case Zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Xh:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jh:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",D);break}b=null,A=null,w=null,C=null,P.set(0,0,0),G=0,m=D,S=ot}return}te=te||de,J=J||ie,ae=ae||pe,(de!==d||te!==T)&&(t.blendEquationSeparate(qt[de],qt[te]),d=de,T=te),(ie!==b||pe!==A||J!==w||ae!==C)&&(t.blendFuncSeparate(Ye[ie],Ye[pe],Ye[J],Ye[ae]),b=ie,A=pe,w=J,C=ae),(ke.equals(P)===!1||_t!==G)&&(t.blendColor(ke.r,ke.g,ke.b,_t),P.copy(ke),G=_t),m=D,S=!1}function ft(D,de){D.side===Ti?ge(t.CULL_FACE):Q(t.CULL_FACE);let ie=D.side===dn;de&&(ie=!ie),He(ie),D.blending===Zr&&D.transparent===!1?at(Ci):at(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),It(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(t.SAMPLE_ALPHA_TO_COVERAGE):ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){M!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),M=D)}function Dt(D){D!==Mg?(Q(t.CULL_FACE),D!==y&&(D===Wh?t.cullFace(t.BACK):D===Eg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ge(t.CULL_FACE),y=D}function R(D){D!==U&&(F&&t.lineWidth(D),U=D)}function It(D,de,ie){D?(Q(t.POLYGON_OFFSET_FILL),(L!==de||V!==ie)&&(t.polygonOffset(de,ie),L=de,V=ie)):ge(t.POLYGON_OFFSET_FILL)}function rt(D){D?Q(t.SCISSOR_TEST):ge(t.SCISSOR_TEST)}function gt(D){D===void 0&&(D=t.TEXTURE0+k-1),re!==D&&(t.activeTexture(D),re=D)}function ye(D,de,ie){ie===void 0&&(re===null?ie=t.TEXTURE0+k-1:ie=re);let pe=ee[ie];pe===void 0&&(pe={type:void 0,texture:void 0},ee[ie]=pe),(pe.type!==D||pe.texture!==de)&&(re!==ie&&(t.activeTexture(ie),re=ie),t.bindTexture(D,de||X[D]),pe.type=D,pe.texture=de)}function E(){const D=ee[re];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function Y(){try{t.texSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function Z(){try{t.texSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function oe(){try{t.texStorage2D(...arguments)}catch(D){et("WebGLState:",D)}}function Me(){try{t.texStorage3D(...arguments)}catch(D){et("WebGLState:",D)}}function Oe(){try{t.texImage2D(...arguments)}catch(D){et("WebGLState:",D)}}function ne(){try{t.texImage3D(...arguments)}catch(D){et("WebGLState:",D)}}function ce(D){se.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),se.copy(D))}function Se(D){Ue.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ue.copy(D))}function be(D,de){let ie=c.get(de);ie===void 0&&(ie=new WeakMap,c.set(de,ie));let pe=ie.get(D);pe===void 0&&(pe=t.getUniformBlockIndex(de,D.name),ie.set(D,pe))}function le(D,de){const pe=c.get(de).get(D);l.get(de)!==pe&&(t.uniformBlockBinding(de,pe,D.__bindingPointIndex),l.set(de,pe))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},re=null,ee={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,b=null,A=null,T=null,w=null,C=null,P=new Xe(0,0,0),G=0,S=!1,M=null,y=null,U=null,L=null,V=null,se.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:ge,bindFramebuffer:Fe,drawBuffers:_e,useProgram:Ze,setBlending:at,setMaterial:ft,setFlipSided:He,setCullFace:Dt,setLineWidth:R,setPolygonOffset:It,setScissorTest:rt,activeTexture:gt,bindTexture:ye,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Oe,texImage3D:ne,updateUBOMapping:be,uniformBlockBinding:le,texStorage2D:oe,texStorage3D:Me,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:Te,scissor:ce,viewport:Se,reset:We}}function M3(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return p?new OffscreenCanvas(E,g):uo("canvas")}function x(E,g,I){let Y=1;const Z=ye(E);if((Z.width>I||Z.height>I)&&(Y=I/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(Y*Z.width),Te=Math.floor(Y*Z.height);h===void 0&&(h=_(j,Te));const oe=g?_(j,Te):h;return oe.width=j,oe.height=Te,oe.getContext("2d").drawImage(E,0,0,j,Te),Ve("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+Te+")."),oe}else return"data"in E&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){t.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(E,g,I,Y,Z=!1){if(E!==null){if(t[E]!==void 0)return t[E];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=g;if(g===t.RED&&(I===t.FLOAT&&(j=t.R32F),I===t.HALF_FLOAT&&(j=t.R16F),I===t.UNSIGNED_BYTE&&(j=t.R8)),g===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(j=t.R8UI),I===t.UNSIGNED_SHORT&&(j=t.R16UI),I===t.UNSIGNED_INT&&(j=t.R32UI),I===t.BYTE&&(j=t.R8I),I===t.SHORT&&(j=t.R16I),I===t.INT&&(j=t.R32I)),g===t.RG&&(I===t.FLOAT&&(j=t.RG32F),I===t.HALF_FLOAT&&(j=t.RG16F),I===t.UNSIGNED_BYTE&&(j=t.RG8)),g===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(j=t.RG8UI),I===t.UNSIGNED_SHORT&&(j=t.RG16UI),I===t.UNSIGNED_INT&&(j=t.RG32UI),I===t.BYTE&&(j=t.RG8I),I===t.SHORT&&(j=t.RG16I),I===t.INT&&(j=t.RG32I)),g===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(j=t.RGB8UI),I===t.UNSIGNED_SHORT&&(j=t.RGB16UI),I===t.UNSIGNED_INT&&(j=t.RGB32UI),I===t.BYTE&&(j=t.RGB8I),I===t.SHORT&&(j=t.RGB16I),I===t.INT&&(j=t.RGB32I)),g===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),I===t.UNSIGNED_INT&&(j=t.RGBA32UI),I===t.BYTE&&(j=t.RGBA8I),I===t.SHORT&&(j=t.RGBA16I),I===t.INT&&(j=t.RGBA32I)),g===t.RGB&&(I===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),g===t.RGBA){const Te=Z?lo:Ke.getTransfer(Y);I===t.FLOAT&&(j=t.RGBA32F),I===t.HALF_FLOAT&&(j=t.RGBA16F),I===t.UNSIGNED_BYTE&&(j=Te===ct?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function T(E,g){let I;return E?g===null||g===hi||g===ea?I=t.DEPTH24_STENCIL8:g===ri?I=t.DEPTH32F_STENCIL8:g===Qs&&(I=t.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===hi||g===ea?I=t.DEPTH_COMPONENT24:g===ri?I=t.DEPTH_COMPONENT32F:g===Qs&&(I=t.DEPTH_COMPONENT16),I}function w(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Kt&&E.minFilter!==tn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function C(E){const g=E.target;g.removeEventListener("dispose",C),G(g),g.isVideoTexture&&u.delete(g)}function P(E){const g=E.target;g.removeEventListener("dispose",P),M(g)}function G(E){const g=i.get(E);if(g.__webglInit===void 0)return;const I=E.source,Y=f.get(I);if(Y){const Z=Y[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(E),Object.keys(Y).length===0&&f.delete(I)}i.remove(E)}function S(E){const g=i.get(E);t.deleteTexture(g.__webglTexture);const I=E.source,Y=f.get(I);delete Y[g.__cacheKey],a.memory.textures--}function M(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let Z=0;Z<g.__webglFramebuffer[Y].length;Z++)t.deleteFramebuffer(g.__webglFramebuffer[Y][Z]);else t.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)t.deleteFramebuffer(g.__webglFramebuffer[Y]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=E.textures;for(let Y=0,Z=I.length;Y<Z;Y++){const j=i.get(I[Y]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(I[Y])}i.remove(E)}let y=0;function U(){y=0}function L(){const E=y;return E>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),y+=1,E}function V(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function k(E,g){const I=i.get(E);if(E.isVideoTexture&&rt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){const Y=E.image;if(Y===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{X(I,E,g);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+g)}function F(E,g){const I=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){X(I,E,g);return}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+g)}function B(E,g){const I=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){X(I,E,g);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+g)}function $(E,g){const I=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&I.__version!==E.version){Q(I,E,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+g)}const re={[_c]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[vc]:t.MIRRORED_REPEAT},ee={[Kt]:t.NEAREST,[Wg]:t.NEAREST_MIPMAP_NEAREST,[Ea]:t.NEAREST_MIPMAP_LINEAR,[tn]:t.LINEAR,[rl]:t.LINEAR_MIPMAP_NEAREST,[mr]:t.LINEAR_MIPMAP_LINEAR},z={[$g]:t.NEVER,[Qg]:t.ALWAYS,[Yg]:t.LESS,[Du]:t.LEQUAL,[Kg]:t.EQUAL,[Iu]:t.GEQUAL,[Jg]:t.GREATER,[Zg]:t.NOTEQUAL};function K(E,g){if(g.type===ri&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===tn||g.magFilter===rl||g.magFilter===Ea||g.magFilter===mr||g.minFilter===tn||g.minFilter===rl||g.minFilter===Ea||g.minFilter===mr)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,re[g.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,re[g.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,re[g.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,ee[g.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,ee[g.minFilter]),g.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,z[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Kt||g.minFilter!==Ea&&g.minFilter!==mr||g.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function se(E,g){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",C));const Y=g.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const j=V(g);if(j!==E.__cacheKey){Z[j]===void 0&&(Z[j]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Z[j].usedTimes++;const Te=Z[E.__cacheKey];Te!==void 0&&(Z[E.__cacheKey].usedTimes--,Te.usedTimes===0&&S(g)),E.__cacheKey=j,E.__webglTexture=Z[j].texture}return I}function Ue(E,g,I){return Math.floor(Math.floor(E/I)/g)}function Be(E,g,I,Y){const j=E.updateRanges;if(j.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,I,Y,g.data);else{j.sort((ne,ce)=>ne.start-ce.start);let Te=0;for(let ne=1;ne<j.length;ne++){const ce=j[Te],Se=j[ne],be=ce.start+ce.count,le=Ue(Se.start,g.width,4),We=Ue(ce.start,g.width,4);Se.start<=be+1&&le===We&&Ue(Se.start+Se.count-1,g.width,4)===le?ce.count=Math.max(ce.count,Se.start+Se.count-ce.start):(++Te,j[Te]=Se)}j.length=Te+1;const oe=t.getParameter(t.UNPACK_ROW_LENGTH),Me=t.getParameter(t.UNPACK_SKIP_PIXELS),Oe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ne=0,ce=j.length;ne<ce;ne++){const Se=j[ne],be=Math.floor(Se.start/4),le=Math.ceil(Se.count/4),We=be%g.width,D=Math.floor(be/g.width),de=le,ie=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,We),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,We,D,de,ie,I,Y,g.data)}E.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,oe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(t.UNPACK_SKIP_ROWS,Oe)}}function X(E,g,I){let Y=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=t.TEXTURE_3D);const Z=se(E,g),j=g.source;n.bindTexture(Y,E.__webglTexture,t.TEXTURE0+I);const Te=i.get(j);if(j.version!==Te.__version||Z===!0){n.activeTexture(t.TEXTURE0+I);const oe=Ke.getPrimaries(Ke.workingColorSpace),Me=g.colorSpace===$i?null:Ke.getPrimaries(g.colorSpace),Oe=g.colorSpace===$i||oe===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ne=x(g.image,!1,r.maxTextureSize);ne=gt(g,ne);const ce=s.convert(g.format,g.colorSpace),Se=s.convert(g.type);let be=A(g.internalFormat,ce,Se,g.colorSpace,g.isVideoTexture);K(Y,g);let le;const We=g.mipmaps,D=g.isVideoTexture!==!0,de=Te.__version===void 0||Z===!0,ie=j.dataReady,pe=w(g,ne);if(g.isDepthTexture)be=T(g.format===gr,g.type),de&&(D?n.texStorage2D(t.TEXTURE_2D,1,be,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,be,ne.width,ne.height,0,ce,Se,null));else if(g.isDataTexture)if(We.length>0){D&&de&&n.texStorage2D(t.TEXTURE_2D,pe,be,We[0].width,We[0].height);for(let te=0,J=We.length;te<J;te++)le=We[te],D?ie&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,le.width,le.height,ce,Se,le.data):n.texImage2D(t.TEXTURE_2D,te,be,le.width,le.height,0,ce,Se,le.data);g.generateMipmaps=!1}else D?(de&&n.texStorage2D(t.TEXTURE_2D,pe,be,ne.width,ne.height),ie&&Be(g,ne,ce,Se)):n.texImage2D(t.TEXTURE_2D,0,be,ne.width,ne.height,0,ce,Se,ne.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,be,We[0].width,We[0].height,ne.depth);for(let te=0,J=We.length;te<J;te++)if(le=We[te],g.format!==jn)if(ce!==null)if(D){if(ie)if(g.layerUpdates.size>0){const ae=gf(le.width,le.height,g.format,g.type);for(const ke of g.layerUpdates){const _t=le.data.subarray(ke*ae/le.data.BYTES_PER_ELEMENT,(ke+1)*ae/le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,ke,le.width,le.height,1,ce,_t)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,ne.depth,ce,le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,be,le.width,le.height,ne.depth,0,le.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,ne.depth,ce,Se,le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,be,le.width,le.height,ne.depth,0,ce,Se,le.data)}else{D&&de&&n.texStorage2D(t.TEXTURE_2D,pe,be,We[0].width,We[0].height);for(let te=0,J=We.length;te<J;te++)le=We[te],g.format!==jn?ce!==null?D?ie&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,le.width,le.height,ce,le.data):n.compressedTexImage2D(t.TEXTURE_2D,te,be,le.width,le.height,0,le.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ie&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,le.width,le.height,ce,Se,le.data):n.texImage2D(t.TEXTURE_2D,te,be,le.width,le.height,0,ce,Se,le.data)}else if(g.isDataArrayTexture)if(D){if(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,be,ne.width,ne.height,ne.depth),ie)if(g.layerUpdates.size>0){const te=gf(ne.width,ne.height,g.format,g.type);for(const J of g.layerUpdates){const ae=ne.data.subarray(J*te/ne.data.BYTES_PER_ELEMENT,(J+1)*te/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ce,Se,ae)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ce,Se,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,ce,Se,ne.data);else if(g.isData3DTexture)D?(de&&n.texStorage3D(t.TEXTURE_3D,pe,be,ne.width,ne.height,ne.depth),ie&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ce,Se,ne.data)):n.texImage3D(t.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,ce,Se,ne.data);else if(g.isFramebufferTexture){if(de)if(D)n.texStorage2D(t.TEXTURE_2D,pe,be,ne.width,ne.height);else{let te=ne.width,J=ne.height;for(let ae=0;ae<pe;ae++)n.texImage2D(t.TEXTURE_2D,ae,be,te,J,0,ce,Se,null),te>>=1,J>>=1}}else if(We.length>0){if(D&&de){const te=ye(We[0]);n.texStorage2D(t.TEXTURE_2D,pe,be,te.width,te.height)}for(let te=0,J=We.length;te<J;te++)le=We[te],D?ie&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ce,Se,le):n.texImage2D(t.TEXTURE_2D,te,be,ce,Se,le);g.generateMipmaps=!1}else if(D){if(de){const te=ye(ne);n.texStorage2D(t.TEXTURE_2D,pe,be,te.width,te.height)}ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Se,ne)}else n.texImage2D(t.TEXTURE_2D,0,be,ce,Se,ne);m(g)&&d(Y),Te.__version=j.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Q(E,g,I){if(g.image.length!==6)return;const Y=se(E,g),Z=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+I);const j=i.get(Z);if(Z.version!==j.__version||Y===!0){n.activeTexture(t.TEXTURE0+I);const Te=Ke.getPrimaries(Ke.workingColorSpace),oe=g.colorSpace===$i?null:Ke.getPrimaries(g.colorSpace),Me=g.colorSpace===$i||Te===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Oe=g.isCompressedTexture||g.image[0].isCompressedTexture,ne=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let J=0;J<6;J++)!Oe&&!ne?ce[J]=x(g.image[J],!0,r.maxCubemapSize):ce[J]=ne?g.image[J].image:g.image[J],ce[J]=gt(g,ce[J]);const Se=ce[0],be=s.convert(g.format,g.colorSpace),le=s.convert(g.type),We=A(g.internalFormat,be,le,g.colorSpace),D=g.isVideoTexture!==!0,de=j.__version===void 0||Y===!0,ie=Z.dataReady;let pe=w(g,Se);K(t.TEXTURE_CUBE_MAP,g);let te;if(Oe){D&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,We,Se.width,Se.height);for(let J=0;J<6;J++){te=ce[J].mipmaps;for(let ae=0;ae<te.length;ae++){const ke=te[ae];g.format!==jn?be!==null?D?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,0,0,ke.width,ke.height,be,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,We,ke.width,ke.height,0,ke.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,0,0,ke.width,ke.height,be,le,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae,We,ke.width,ke.height,0,be,le,ke.data)}}}else{if(te=g.mipmaps,D&&de){te.length>0&&pe++;const J=ye(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,We,J.width,J.height)}for(let J=0;J<6;J++)if(ne){D?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ce[J].width,ce[J].height,be,le,ce[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,ce[J].width,ce[J].height,0,be,le,ce[J].data);for(let ae=0;ae<te.length;ae++){const _t=te[ae].image[J].image;D?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,0,0,_t.width,_t.height,be,le,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,We,_t.width,_t.height,0,be,le,_t.data)}}else{D?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,be,le,ce[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,We,be,le,ce[J]);for(let ae=0;ae<te.length;ae++){const ke=te[ae];D?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,0,0,be,le,ke.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae+1,We,be,le,ke.image[J])}}}m(g)&&d(t.TEXTURE_CUBE_MAP),j.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ge(E,g,I,Y,Z,j){const Te=s.convert(I.format,I.colorSpace),oe=s.convert(I.type),Me=A(I.internalFormat,Te,oe,I.colorSpace),Oe=i.get(g),ne=i.get(I);if(ne.__renderTarget=g,!Oe.__hasExternalTextures){const ce=Math.max(1,g.width>>j),Se=Math.max(1,g.height>>j);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,j,Me,ce,Se,g.depth,0,Te,oe,null):n.texImage2D(Z,j,Me,ce,Se,0,Te,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),It(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,Z,ne.__webglTexture,0,R(g)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,Z,ne.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(E,g,I){if(t.bindRenderbuffer(t.RENDERBUFFER,E),g.depthBuffer){const Y=g.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,j=T(g.stencilBuffer,Z),Te=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;It(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,R(g),j,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,R(g),j,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,j,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,E)}else{const Y=g.textures;for(let Z=0;Z<Y.length;Z++){const j=Y[Z],Te=s.convert(j.format,j.colorSpace),oe=s.convert(j.type),Me=A(j.internalFormat,Te,oe,j.colorSpace);It(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,R(g),Me,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,R(g),Me,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Me,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function _e(E,g,I){const Y=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),K(t.TEXTURE_CUBE_MAP,g.depthTexture);const Oe=s.convert(g.depthTexture.format),ne=s.convert(g.depthTexture.type);let ce;g.depthTexture.format===Di?ce=t.DEPTH_COMPONENT24:g.depthTexture.format===gr&&(ce=t.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ce,g.width,g.height,0,Oe,ne,null)}}else k(g.depthTexture,0);const j=Z.__webglTexture,Te=R(g),oe=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+I:t.TEXTURE_2D,Me=g.depthTexture.format===gr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Di)It(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,oe,j,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Me,oe,j,0);else if(g.depthTexture.format===gr)It(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,oe,j,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Me,oe,j,0);else throw new Error("Unknown depthTexture format")}function Ze(E){const g=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=Y}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)_e(g.__webglFramebuffer[Y],E,Y);else{const Y=E.texture.mipmaps;Y&&Y.length>0?_e(g.__webglFramebuffer[0],E,0):_e(g.__webglFramebuffer,E,0)}else if(I){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=t.createRenderbuffer(),Fe(g.__webglDepthbuffer[Y],E,!1);else{const Z=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,j)}}else{const Y=E.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Fe(g.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,j)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function qt(E,g,I){const Y=i.get(E);g!==void 0&&ge(Y.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Ze(E)}function Ye(E){const g=E.texture,I=i.get(E),Y=i.get(g);E.addEventListener("dispose",P);const Z=E.textures,j=E.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=g.version,a.memory.textures++),j){I.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[oe]=[];for(let Me=0;Me<g.mipmaps.length;Me++)I.__webglFramebuffer[oe][Me]=t.createFramebuffer()}else I.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)I.__webglFramebuffer[oe]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Te)for(let oe=0,Me=Z.length;oe<Me;oe++){const Oe=i.get(Z[oe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),a.memory.textures++)}if(E.samples>0&&It(E)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const Me=Z[oe];I.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[oe]);const Oe=s.convert(Me.format,Me.colorSpace),ne=s.convert(Me.type),ce=A(Me.internalFormat,Oe,ne,Me.colorSpace,E.isXRRenderTarget===!0),Se=R(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,ce,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,I.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe(I.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),K(t.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)ge(I.__webglFramebuffer[oe][Me],E,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me);else ge(I.__webglFramebuffer[oe],E,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let oe=0,Me=Z.length;oe<Me;oe++){const Oe=Z[oe],ne=i.get(Oe);let ce=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ne.__webglTexture),K(ce,Oe),ge(I.__webglFramebuffer,E,Oe,t.COLOR_ATTACHMENT0+oe,ce,0),m(Oe)&&d(ce)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,Y.__webglTexture),K(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)ge(I.__webglFramebuffer[Me],E,g,t.COLOR_ATTACHMENT0,oe,Me);else ge(I.__webglFramebuffer,E,g,t.COLOR_ATTACHMENT0,oe,0);m(g)&&d(oe),n.unbindTexture()}E.depthBuffer&&Ze(E)}function at(E){const g=E.textures;for(let I=0,Y=g.length;I<Y;I++){const Z=g[I];if(m(Z)){const j=b(E),Te=i.get(Z).__webglTexture;n.bindTexture(j,Te),d(j),n.unbindTexture()}}}const ft=[],He=[];function Dt(E){if(E.samples>0){if(It(E)===!1){const g=E.textures,I=E.width,Y=E.height;let Z=t.COLOR_BUFFER_BIT;const j=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(E),oe=g.length>1;if(oe)for(let Oe=0;Oe<g.length;Oe++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Me=E.texture.mipmaps;Me&&Me.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Oe=0;Oe<g.length;Oe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]);const ne=i.get(g[Oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,I,Y,0,0,I,Y,Z,t.NEAREST),l===!0&&(ft.length=0,He.length=0,ft.push(t.COLOR_ATTACHMENT0+Oe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ft.push(j),He.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,He)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ft))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let Oe=0;Oe<g.length;Oe++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]);const ne=i.get(g[Oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function R(E){return Math.min(r.maxSamples,E.samples)}function It(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function rt(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function gt(E,g){const I=E.colorSpace,Y=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==os&&I!==$i&&(Ke.getTransfer(I)===ct?(Y!==jn||Z!==On)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",I)),g}function ye(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=qt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function E3(t,e){function n(i,r=$i){let s;const a=Ke.getTransfer(r);if(i===On)return t.UNSIGNED_BYTE;if(i===wu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ep)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===yp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sp)return t.BYTE;if(i===Mp)return t.SHORT;if(i===Qs)return t.UNSIGNED_SHORT;if(i===Au)return t.INT;if(i===hi)return t.UNSIGNED_INT;if(i===ri)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===bp)return t.ALPHA;if(i===Tp)return t.RGB;if(i===jn)return t.RGBA;if(i===Di)return t.DEPTH_COMPONENT;if(i===gr)return t.DEPTH_STENCIL;if(i===Ap)return t.RED;if(i===Ru)return t.RED_INTEGER;if(i===as)return t.RG;if(i===Pu)return t.RG_INTEGER;if(i===Lu)return t.RGBA_INTEGER;if(i===Za||i===Qa||i===eo||i===to)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xc||i===Sc||i===Mc||i===Ec)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yc||i===bc||i===Tc||i===Ac||i===wc||i===Cc||i===Rc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yc||i===bc)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Tc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ac)return s.COMPRESSED_R11_EAC;if(i===wc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Cc)return s.COMPRESSED_RG11_EAC;if(i===Rc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pc||i===Lc||i===Dc||i===Ic||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===kc||i===Vc||i===zc||i===Gc||i===Hc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ic)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wc||i===qc||i===Xc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wc)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jc||i===$c||i===Yc||i===Kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const y3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b3=`
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

}`;class T3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Bp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yn({vertexShader:y3,fragmentShader:b3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A3 extends Ss{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new T3,d={},b=n.getContextAttributes();let A=null,T=null;const w=[],C=[],P=new it;let G=null;const S=new Wn;S.viewport=new Rt;const M=new Wn;M.viewport=new Rt;const y=[S,M],U=new F_;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=w[X];return Q===void 0&&(Q=new wl,w[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=w[X];return Q===void 0&&(Q=new wl,w[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=w[X];return Q===void 0&&(Q=new wl,w[X]=Q),Q.getHandSpace()};function k(X){const Q=C.indexOf(X.inputSource);if(Q===-1)return;const ge=w[Q];ge!==void 0&&(ge.update(X.inputSource,X.frame,c||a),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",B);for(let X=0;X<w.length;X++){const Q=C[X];Q!==null&&(C[X]=null,w[X].disconnect(Q))}L=null,V=null,m.reset();for(const X in d)delete d[X];e.setRenderTarget(A),p=null,f=null,h=null,r=null,T=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(G),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",F),r.addEventListener("inputsourceschange",B),b.xrCompatible!==!0&&await n.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Fe=null,_e=null;b.depth&&(_e=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=b.stencil?gr:Di,Fe=b.stencil?ea:hi);const Ze={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new li(f.textureWidth,f.textureHeight,{format:jn,type:On,depthTexture:new na(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new li(p.framebufferWidth,p.framebufferHeight,{format:jn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(X){for(let Q=0;Q<X.removed.length;Q++){const ge=X.removed[Q],Fe=C.indexOf(ge);Fe>=0&&(C[Fe]=null,w[Fe].disconnect(ge))}for(let Q=0;Q<X.added.length;Q++){const ge=X.added[Q];let Fe=C.indexOf(ge);if(Fe===-1){for(let Ze=0;Ze<w.length;Ze++)if(Ze>=C.length){C.push(ge),Fe=Ze;break}else if(C[Ze]===null){C[Ze]=ge,Fe=Ze;break}if(Fe===-1)break}const _e=w[Fe];_e&&_e.connect(ge)}}const $=new W,re=new W;function ee(X,Q,ge){$.setFromMatrixPosition(Q.matrixWorld),re.setFromMatrixPosition(ge.matrixWorld);const Fe=$.distanceTo(re),_e=Q.projectionMatrix.elements,Ze=ge.projectionMatrix.elements,qt=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),at=(_e[9]+1)/_e[5],ft=(_e[9]-1)/_e[5],He=(_e[8]-1)/_e[0],Dt=(Ze[8]+1)/Ze[0],R=qt*He,It=qt*Dt,rt=Fe/(-He+Dt),gt=rt*-He;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(gt),X.translateZ(rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),_e[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ye=qt+rt,E=Ye+rt,g=R-gt,I=It+(Fe-gt),Y=at*Ye/E*ye,Z=ft*Ye/E*ye;X.projectionMatrix.makePerspective(g,I,Y,Z,ye,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function z(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Q=X.near,ge=X.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),U.near=M.near=S.near=Q,U.far=M.far=S.far=ge,(L!==U.near||V!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,V=U.far),U.layers.mask=X.layers.mask|6,S.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const Fe=X.parent,_e=U.cameras;z(U,Fe);for(let Ze=0;Ze<_e.length;Ze++)z(_e[Ze],Fe);_e.length===2?ee(U,S,M):U.projectionMatrix.copy(S.projectionMatrix),K(X,U,Fe)};function K(X,Q,ge){ge===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Jc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(X){return d[X]};let se=null;function Ue(X,Q){if(u=Q.getViewerPose(c||a),_=Q,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let Fe=!1;ge.length!==U.cameras.length&&(U.cameras.length=0,Fe=!0);for(let Ye=0;Ye<ge.length;Ye++){const at=ge[Ye];let ft=null;if(p!==null)ft=p.getViewport(at);else{const Dt=h.getViewSubImage(f,at);ft=Dt.viewport,Ye===0&&(e.setRenderTargetTextures(T,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(T))}let He=y[Ye];He===void 0&&(He=new Wn,He.layers.enable(Ye),He.viewport=new Rt,y[Ye]=He),He.matrix.fromArray(at.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(at.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ft.x,ft.y,ft.width,ft.height),Ye===0&&(U.matrix.copy(He.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Fe===!0&&U.cameras.push(He)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const Ye=h.getDepthInformation(ge[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,r.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Ye=0;Ye<ge.length;Ye++){const at=ge[Ye].camera;if(at){let ft=d[at];ft||(ft=new Bp,d[at]=ft);const He=h.getCameraImage(at);ft.sourceTexture=He}}}}for(let ge=0;ge<w.length;ge++){const Fe=C[ge],_e=w[ge];Fe!==null&&_e!==void 0&&_e.update(Fe,Q,c||a)}se&&se(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Be=new Vp;Be.setAnimationLoop(Ue),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}}const ur=new Ii,w3=new Ot;function C3(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Up(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,b,A,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=e.get(d),A=b.envMap,T=b.envMapRotation;A&&(m.envMap.value=A,ur.copy(T),ur.x*=-1,ur.y*=-1,ur.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(w3.makeRotationFromEuler(ur)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=A*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function R3(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){const T=A.program;i.uniformBlockBinding(b,T)}function c(b,A){let T=r[b.id];T===void 0&&(_(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",m));const w=A.program;i.updateUBOMapping(b,w);const C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function u(b){const A=h();b.__bindingPointIndex=A;const T=t.createBuffer(),w=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,w,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,T),T}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const A=r[b.id],T=b.uniforms,w=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let C=0,P=T.length;C<P;C++){const G=Array.isArray(T[C])?T[C]:[T[C]];for(let S=0,M=G.length;S<M;S++){const y=G[S];if(p(y,C,S,w)===!0){const U=y.__offset,L=Array.isArray(y.value)?y.value:[y.value];let V=0;for(let k=0;k<L.length;k++){const F=L[k],B=x(F);typeof F=="number"||typeof F=="boolean"?(y.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,U+V,y.__data)):F.isMatrix3?(y.__data[0]=F.elements[0],y.__data[1]=F.elements[1],y.__data[2]=F.elements[2],y.__data[3]=0,y.__data[4]=F.elements[3],y.__data[5]=F.elements[4],y.__data[6]=F.elements[5],y.__data[7]=0,y.__data[8]=F.elements[6],y.__data[9]=F.elements[7],y.__data[10]=F.elements[8],y.__data[11]=0):(F.toArray(y.__data,V),V+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,y.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(b,A,T,w){const C=b.value,P=A+"_"+T;if(w[P]===void 0)return typeof C=="number"||typeof C=="boolean"?w[P]=C:w[P]=C.clone(),!0;{const G=w[P];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return w[P]=C,!0}else if(G.equals(C)===!1)return G.copy(C),!0}return!1}function _(b){const A=b.uniforms;let T=0;const w=16;for(let P=0,G=A.length;P<G;P++){const S=Array.isArray(A[P])?A[P]:[A[P]];for(let M=0,y=S.length;M<y;M++){const U=S[M],L=Array.isArray(U.value)?U.value:[U.value];for(let V=0,k=L.length;V<k;V++){const F=L[V],B=x(F),$=T%w,re=$%B.boundary,ee=$+re;T+=re,ee!==0&&w-ee<B.storage&&(T+=w-ee),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=B.storage}}}const C=T%w;return C>0&&(T+=w-C),b.__size=T,b.__cache={},this}function x(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",b),A}function m(b){const A=b.target;A.removeEventListener("dispose",m);const T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const P3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function L3(){return ei===null&&(ei=new C_(P3,16,16,as,Li),ei.name="DFG_LUT",ei.minFilter=tn,ei.magFilter=tn,ei.wrapS=wi,ei.wrapT=wi,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class D3{constructor(e={}){const{canvas:n=e_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=On}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const x=p,m=new Set([Lu,Pu,Ru]),d=new Set([On,hi,Qs,ea,wu,Cu]),b=new Uint32Array(4),A=new Int32Array(4);let T=null,w=null;const C=[],P=[];let G=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let M=!1;this._outputColorSpace=Fn;let y=0,U=0,L=null,V=-1,k=null;const F=new Rt,B=new Rt;let $=null;const re=new Xe(0);let ee=0,z=n.width,K=n.height,se=1,Ue=null,Be=null;const X=new Rt(0,0,z,K),Q=new Rt(0,0,z,K);let ge=!1;const Fe=new Op;let _e=!1,Ze=!1;const qt=new Ot,Ye=new W,at=new Rt,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Dt(){return L===null?se:1}let R=i;function It(v,N){return n.getContext(v,N)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tu}`),n.addEventListener("webglcontextlost",ke,!1),n.addEventListener("webglcontextrestored",_t,!1),n.addEventListener("webglcontextcreationerror",ot,!1),R===null){const N="webgl2";if(R=It(N,v),R===null)throw It(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw et("WebGLRenderer: "+v.message),v}let rt,gt,ye,E,g,I,Y,Z,j,Te,oe,Me,Oe,ne,ce,Se,be,le,We,D,de,ie,pe,te;function J(){rt=new L2(R),rt.init(),ie=new E3(R,rt),gt=new E2(R,rt,e,ie),ye=new S3(R,rt),gt.reversedDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),E=new U2(R),g=new s3,I=new M3(R,rt,ye,g,gt,ie,E),Y=new b2(S),Z=new P2(S),j=new B_(R),pe=new S2(R,j),Te=new D2(R,j,E,pe),oe=new F2(R,Te,j,E),We=new N2(R,gt,I),Se=new y2(g),Me=new r3(S,Y,Z,rt,gt,pe,Se),Oe=new C3(S,g),ne=new o3,ce=new d3(rt),le=new x2(S,Y,Z,ye,oe,_,l),be=new v3(S,oe,gt),te=new R3(R,E,gt,ye),D=new M2(R,rt,E),de=new I2(R,rt,E),E.programs=Me.programs,S.capabilities=gt,S.extensions=rt,S.properties=g,S.renderLists=ne,S.shadowMap=be,S.state=ye,S.info=E}J(),x!==On&&(G=new B2(x,n.width,n.height,r,s));const ae=new A3(S,R);this.xr=ae,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=rt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=rt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(v){v!==void 0&&(se=v,this.setSize(z,K,!1))},this.getSize=function(v){return v.set(z,K)},this.setSize=function(v,N,q=!0){if(ae.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}z=v,K=N,n.width=Math.floor(v*se),n.height=Math.floor(N*se),q===!0&&(n.style.width=v+"px",n.style.height=N+"px"),G!==null&&G.setSize(n.width,n.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(z*se,K*se).floor()},this.setDrawingBufferSize=function(v,N,q){z=v,K=N,se=q,n.width=Math.floor(v*q),n.height=Math.floor(N*q),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(x===On){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(F)},this.getViewport=function(v){return v.copy(X)},this.setViewport=function(v,N,q,H){v.isVector4?X.set(v.x,v.y,v.z,v.w):X.set(v,N,q,H),ye.viewport(F.copy(X).multiplyScalar(se).round())},this.getScissor=function(v){return v.copy(Q)},this.setScissor=function(v,N,q,H){v.isVector4?Q.set(v.x,v.y,v.z,v.w):Q.set(v,N,q,H),ye.scissor(B.copy(Q).multiplyScalar(se).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(v){ye.setScissorTest(ge=v)},this.setOpaqueSort=function(v){Ue=v},this.setTransparentSort=function(v){Be=v},this.getClearColor=function(v){return v.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,q=!0){let H=0;if(v){let O=!1;if(L!==null){const ue=L.texture.format;O=m.has(ue)}if(O){const ue=L.texture.type,me=d.has(ue),fe=le.getClearColor(),xe=le.getClearAlpha(),Ce=fe.r,Ne=fe.g,Le=fe.b;me?(b[0]=Ce,b[1]=Ne,b[2]=Le,b[3]=xe,R.clearBufferuiv(R.COLOR,0,b)):(A[0]=Ce,A[1]=Ne,A[2]=Le,A[3]=xe,R.clearBufferiv(R.COLOR,0,A))}else H|=R.COLOR_BUFFER_BIT}N&&(H|=R.DEPTH_BUFFER_BIT),q&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ke,!1),n.removeEventListener("webglcontextrestored",_t,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),le.dispose(),ne.dispose(),ce.dispose(),g.dispose(),Y.dispose(),Z.dispose(),oe.dispose(),pe.dispose(),te.dispose(),Me.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Oh),ae.removeEventListener("sessionend",Bh),ir.stop()};function ke(v){v.preventDefault(),Zh("WebGLRenderer: Context Lost."),M=!0}function _t(){Zh("WebGLRenderer: Context Restored."),M=!1;const v=E.autoReset,N=be.enabled,q=be.autoUpdate,H=be.needsUpdate,O=be.type;J(),E.autoReset=v,be.enabled=N,be.autoUpdate=q,be.needsUpdate=H,be.type=O}function ot(v){et("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Qn(v){const N=v.target;N.removeEventListener("dispose",Qn),xi(N)}function xi(v){dg(v),g.remove(v)}function dg(v){const N=g.get(v).programs;N!==void 0&&(N.forEach(function(q){Me.releaseProgram(q)}),v.isShaderMaterial&&Me.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,q,H,O,ue){N===null&&(N=ft);const me=O.isMesh&&O.matrixWorld.determinant()<0,fe=mg(v,N,q,H,O);ye.setMaterial(H,me);let xe=q.index,Ce=1;if(H.wireframe===!0){if(xe=Te.getWireframeAttribute(q),xe===void 0)return;Ce=2}const Ne=q.drawRange,Le=q.attributes.position;let qe=Ne.start*Ce,ut=(Ne.start+Ne.count)*Ce;ue!==null&&(qe=Math.max(qe,ue.start*Ce),ut=Math.min(ut,(ue.start+ue.count)*Ce)),xe!==null?(qe=Math.max(qe,0),ut=Math.min(ut,xe.count)):Le!=null&&(qe=Math.max(qe,0),ut=Math.min(ut,Le.count));const wt=ut-qe;if(wt<0||wt===1/0)return;pe.setup(O,H,fe,q,xe);let Ct,dt=D;if(xe!==null&&(Ct=j.get(xe),dt=de,dt.setIndex(Ct)),O.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*Dt()),dt.setMode(R.LINES)):dt.setMode(R.TRIANGLES);else if(O.isLine){let De=H.linewidth;De===void 0&&(De=1),ye.setLineWidth(De*Dt()),O.isLineSegments?dt.setMode(R.LINES):O.isLineLoop?dt.setMode(R.LINE_LOOP):dt.setMode(R.LINE_STRIP)}else O.isPoints?dt.setMode(R.POINTS):O.isSprite&&dt.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ta("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))dt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const De=O._multiDrawStarts,lt=O._multiDrawCounts,Qe=O._multiDrawCount,mn=xe?j.get(xe).bytesPerElement:1,Lr=g.get(H).currentProgram.getUniforms();for(let gn=0;gn<Qe;gn++)Lr.setValue(R,"_gl_DrawID",gn),dt.render(De[gn]/mn,lt[gn])}else if(O.isInstancedMesh)dt.renderInstances(qe,wt,O.count);else if(q.isInstancedBufferGeometry){const De=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,lt=Math.min(q.instanceCount,De);dt.renderInstances(qe,wt,lt)}else dt.render(qe,wt)};function Fh(v,N,q){v.transparent===!0&&v.side===Ti&&v.forceSinglePass===!1?(v.side=dn,v.needsUpdate=!0,Ma(v,N,q),v.side=Qi,v.needsUpdate=!0,Ma(v,N,q),v.side=Ti):Ma(v,N,q)}this.compile=function(v,N,q=null){q===null&&(q=v),w=ce.get(q),w.init(N),P.push(w),q.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),v!==q&&v.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),w.setupLights();const H=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ue=O.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){const fe=ue[me];Fh(fe,q,O),H.add(fe)}else Fh(ue,q,O),H.add(ue)}),w=P.pop(),H},this.compileAsync=function(v,N,q=null){const H=this.compile(v,N,q);return new Promise(O=>{function ue(){if(H.forEach(function(me){g.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){O(v);return}setTimeout(ue,10)}rt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let tl=null;function pg(v){tl&&tl(v)}function Oh(){ir.stop()}function Bh(){ir.start()}const ir=new Vp;ir.setAnimationLoop(pg),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(v){tl=v,ae.setAnimationLoop(v),v===null?ir.stop():ir.start()},ae.addEventListener("sessionstart",Oh),ae.addEventListener("sessionend",Bh),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const q=ae.enabled===!0&&ae.isPresenting===!0,H=G!==null&&(L===null||q)&&G.begin(S,L);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,N,L),w=ce.get(v,P.length),w.init(N),P.push(w),qt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Fe.setFromProjectionMatrix(qt,si,N.reversedDepth),Ze=this.localClippingEnabled,_e=Se.init(this.clippingPlanes,Ze),T=ne.get(v,C.length),T.init(),C.push(T),ae.enabled===!0&&ae.isPresenting===!0){const me=S.xr.getDepthSensingMesh();me!==null&&nl(me,N,-1/0,S.sortObjects)}nl(v,N,0,S.sortObjects),T.finish(),S.sortObjects===!0&&T.sort(Ue,Be),He=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,He&&le.addToRenderList(T,v),this.info.render.frame++,_e===!0&&Se.beginShadows();const O=w.state.shadowsArray;if(be.render(O,v,N),_e===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&G.hasRenderPass())===!1){const me=T.opaque,fe=T.transmissive;if(w.setupLights(),N.isArrayCamera){const xe=N.cameras;if(fe.length>0)for(let Ce=0,Ne=xe.length;Ce<Ne;Ce++){const Le=xe[Ce];Vh(me,fe,v,Le)}He&&le.render(v);for(let Ce=0,Ne=xe.length;Ce<Ne;Ce++){const Le=xe[Ce];kh(T,v,Le,Le.viewport)}}else fe.length>0&&Vh(me,fe,v,N),He&&le.render(v),kh(T,v,N)}L!==null&&U===0&&(I.updateMultisampleRenderTarget(L),I.updateRenderTargetMipmap(L)),H&&G.end(S),v.isScene===!0&&v.onAfterRender(S,v,N),pe.resetDefaultState(),V=-1,k=null,P.pop(),P.length>0?(w=P[P.length-1],_e===!0&&Se.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?T=C[C.length-1]:T=null};function nl(v,N,q,H){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Fe.intersectsSprite(v)){H&&at.setFromMatrixPosition(v.matrixWorld).applyMatrix4(qt);const me=oe.update(v),fe=v.material;fe.visible&&T.push(v,me,fe,q,at.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Fe.intersectsObject(v))){const me=oe.update(v),fe=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),at.copy(v.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),at.copy(me.boundingSphere.center)),at.applyMatrix4(v.matrixWorld).applyMatrix4(qt)),Array.isArray(fe)){const xe=me.groups;for(let Ce=0,Ne=xe.length;Ce<Ne;Ce++){const Le=xe[Ce],qe=fe[Le.materialIndex];qe&&qe.visible&&T.push(v,me,qe,q,at.z,Le)}}else fe.visible&&T.push(v,me,fe,q,at.z,null)}}const ue=v.children;for(let me=0,fe=ue.length;me<fe;me++)nl(ue[me],N,q,H)}function kh(v,N,q,H){const{opaque:O,transmissive:ue,transparent:me}=v;w.setupLightsView(q),_e===!0&&Se.setGlobalState(S.clippingPlanes,q),H&&ye.viewport(F.copy(H)),O.length>0&&Sa(O,N,q),ue.length>0&&Sa(ue,N,q),me.length>0&&Sa(me,N,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Vh(v,N,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const qe=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new li(1,1,{generateMipmaps:!0,type:qe?Li:On,minFilter:mr,samples:gt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ue=w.state.transmissionRenderTarget[H.id],me=H.viewport||F;ue.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);const fe=S.getRenderTarget(),xe=S.getActiveCubeFace(),Ce=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor(re),ee=S.getClearAlpha(),ee<1&&S.setClearColor(16777215,.5),S.clear(),He&&le.render(q);const Ne=S.toneMapping;S.toneMapping=oi;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),_e===!0&&Se.setGlobalState(S.clippingPlanes,H),Sa(v,q,H),I.updateMultisampleRenderTarget(ue),I.updateRenderTargetMipmap(ue),rt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ut=0,wt=N.length;ut<wt;ut++){const Ct=N[ut],{object:dt,geometry:De,material:lt,group:Qe}=Ct;if(lt.side===Ti&&dt.layers.test(H.layers)){const mn=lt.side;lt.side=dn,lt.needsUpdate=!0,zh(dt,q,H,De,lt,Qe),lt.side=mn,lt.needsUpdate=!0,qe=!0}}qe===!0&&(I.updateMultisampleRenderTarget(ue),I.updateRenderTargetMipmap(ue))}S.setRenderTarget(fe,xe,Ce),S.setClearColor(re,ee),Le!==void 0&&(H.viewport=Le),S.toneMapping=Ne}function Sa(v,N,q){const H=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ue=v.length;O<ue;O++){const me=v[O],{object:fe,geometry:xe,group:Ce}=me;let Ne=me.material;Ne.allowOverride===!0&&H!==null&&(Ne=H),fe.layers.test(q.layers)&&zh(fe,N,q,xe,Ne,Ce)}}function zh(v,N,q,H,O,ue){v.onBeforeRender(S,N,q,H,O,ue),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(S,N,q,H,v,ue),O.transparent===!0&&O.side===Ti&&O.forceSinglePass===!1?(O.side=dn,O.needsUpdate=!0,S.renderBufferDirect(q,N,H,O,v,ue),O.side=Qi,O.needsUpdate=!0,S.renderBufferDirect(q,N,H,O,v,ue),O.side=Ti):S.renderBufferDirect(q,N,H,O,v,ue),v.onAfterRender(S,N,q,H,O,ue)}function Ma(v,N,q){N.isScene!==!0&&(N=ft);const H=g.get(v),O=w.state.lights,ue=w.state.shadowsArray,me=O.state.version,fe=Me.getParameters(v,O.state,ue,N,q),xe=Me.getProgramCacheKey(fe);let Ce=H.programs;H.environment=v.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(v.isMeshStandardMaterial?Z:Y).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",Qn),Ce=new Map,H.programs=Ce);let Ne=Ce.get(xe);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===me)return Hh(v,fe),Ne}else fe.uniforms=Me.getUniforms(v),v.onBeforeCompile(fe,S),Ne=Me.acquireProgram(fe,xe),Ce.set(xe,Ne),H.uniforms=fe.uniforms;const Le=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Le.clippingPlanes=Se.uniform),Hh(v,fe),H.needsLights=_g(v),H.lightsStateVersion=me,H.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function Gh(v){if(v.uniformsList===null){const N=v.currentProgram.getUniforms();v.uniformsList=no.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Hh(v,N){const q=g.get(v);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function mg(v,N,q,H,O){N.isScene!==!0&&(N=ft),I.resetTextureUnits();const ue=N.fog,me=H.isMeshStandardMaterial?N.environment:null,fe=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:os,xe=(H.isMeshStandardMaterial?Z:Y).get(H.envMap||me),Ce=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ne=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!q.morphAttributes.position,qe=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color;let wt=oi;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(wt=S.toneMapping);const Ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=Ct!==void 0?Ct.length:0,De=g.get(H),lt=w.state.lights;if(_e===!0&&(Ze===!0||v!==k)){const an=v===k&&H.id===V;Se.setState(H,v,an)}let Qe=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==lt.state.version||De.outputColorSpace!==fe||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==xe||H.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Se.numPlanes||De.numIntersection!==Se.numIntersection)||De.vertexAlphas!==Ce||De.vertexTangents!==Ne||De.morphTargets!==Le||De.morphNormals!==qe||De.morphColors!==ut||De.toneMapping!==wt||De.morphTargetsCount!==dt)&&(Qe=!0):(Qe=!0,De.__version=H.version);let mn=De.currentProgram;Qe===!0&&(mn=Ma(H,N,O));let Lr=!1,gn=!1,Us=!1;const vt=mn.getUniforms(),cn=De.uniforms;if(ye.useProgram(mn.program)&&(Lr=!0,gn=!0,Us=!0),H.id!==V&&(V=H.id,gn=!0),Lr||k!==v){ye.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),vt.setValue(R,"projectionMatrix",v.projectionMatrix),vt.setValue(R,"viewMatrix",v.matrixWorldInverse);const un=vt.map.cameraPosition;un!==void 0&&un.setValue(R,Ye.setFromMatrixPosition(v.matrixWorld)),gt.logarithmicDepthBuffer&&vt.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),k!==v&&(k=v,gn=!0,Us=!0)}if(De.needsLights&&(lt.state.directionalShadowMap.length>0&&vt.setValue(R,"directionalShadowMap",lt.state.directionalShadowMap,I),lt.state.spotShadowMap.length>0&&vt.setValue(R,"spotShadowMap",lt.state.spotShadowMap,I),lt.state.pointShadowMap.length>0&&vt.setValue(R,"pointShadowMap",lt.state.pointShadowMap,I)),O.isSkinnedMesh){vt.setOptional(R,O,"bindMatrix"),vt.setOptional(R,O,"bindMatrixInverse");const an=O.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),vt.setValue(R,"boneTexture",an.boneTexture,I))}O.isBatchedMesh&&(vt.setOptional(R,O,"batchingTexture"),vt.setValue(R,"batchingTexture",O._matricesTexture,I),vt.setOptional(R,O,"batchingIdTexture"),vt.setValue(R,"batchingIdTexture",O._indirectTexture,I),vt.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&vt.setValue(R,"batchingColorTexture",O._colorsTexture,I));const Ln=q.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&We.update(O,q,mn),(gn||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,vt.setValue(R,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(cn.envMap.value=xe,cn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(cn.envMapIntensity.value=N.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=L3()),gn&&(vt.setValue(R,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&gg(cn,Us),ue&&H.fog===!0&&Oe.refreshFogUniforms(cn,ue),Oe.refreshMaterialUniforms(cn,H,se,K,w.state.transmissionRenderTarget[v.id]),no.upload(R,Gh(De),cn,I)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(no.upload(R,Gh(De),cn,I),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(R,"center",O.center),vt.setValue(R,"modelViewMatrix",O.modelViewMatrix),vt.setValue(R,"normalMatrix",O.normalMatrix),vt.setValue(R,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const an=H.uniformsGroups;for(let un=0,il=an.length;un<il;un++){const rr=an[un];te.update(rr,mn),te.bind(rr,mn)}}return mn}function gg(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function _g(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,N,q){const H=g.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),g.get(v.texture).__webglTexture=N,g.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){const q=g.get(v);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0};const vg=R.createFramebuffer();this.setRenderTarget=function(v,N=0,q=0){L=v,y=N,U=q;let H=null,O=!1,ue=!1;if(v){const fe=g.get(v);if(fe.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(R.FRAMEBUFFER,fe.__webglFramebuffer),F.copy(v.viewport),B.copy(v.scissor),$=v.scissorTest,ye.viewport(F),ye.scissor(B),ye.setScissorTest($),V=-1;return}else if(fe.__webglFramebuffer===void 0)I.setupRenderTarget(v);else if(fe.__hasExternalTextures)I.rebindTextures(v,g.get(v.texture).__webglTexture,g.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ne=v.depthTexture;if(fe.__boundDepthTexture!==Ne){if(Ne!==null&&g.has(Ne)&&(v.width!==Ne.image.width||v.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(v)}}const xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);const Ce=g.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?H=Ce[N][q]:H=Ce[N],O=!0):v.samples>0&&I.useMultisampledRTT(v)===!1?H=g.get(v).__webglMultisampledFramebuffer:Array.isArray(Ce)?H=Ce[q]:H=Ce,F.copy(v.viewport),B.copy(v.scissor),$=v.scissorTest}else F.copy(X).multiplyScalar(se).floor(),B.copy(Q).multiplyScalar(se).floor(),$=ge;if(q!==0&&(H=vg),ye.bindFramebuffer(R.FRAMEBUFFER,H)&&ye.drawBuffers(v,H),ye.viewport(F),ye.scissor(B),ye.setScissorTest($),O){const fe=g.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,q)}else if(ue){const fe=N;for(let xe=0;xe<v.textures.length;xe++){const Ce=g.get(v.textures[xe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+xe,Ce.__webglTexture,q,fe)}}else if(v!==null&&q!==0){const fe=g.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,fe.__webglTexture,q)}V=-1},this.readRenderTargetPixels=function(v,N,q,H,O,ue,me,fe=0){if(!(v&&v.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=g.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){ye.bindFramebuffer(R.FRAMEBUFFER,xe);try{const Ce=v.textures[fe],Ne=Ce.format,Le=Ce.type;if(!gt.textureFormatReadable(Ne)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Le)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-H&&q>=0&&q<=v.height-O&&(v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+fe),R.readPixels(N,q,H,O,ie.convert(Ne),ie.convert(Le),ue))}finally{const Ce=L!==null?g.get(L).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,N,q,H,O,ue,me,fe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=g.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe)if(N>=0&&N<=v.width-H&&q>=0&&q<=v.height-O){ye.bindFramebuffer(R.FRAMEBUFFER,xe);const Ce=v.textures[fe],Ne=Ce.format,Le=Ce.type;if(!gt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,qe),R.bufferData(R.PIXEL_PACK_BUFFER,ue.byteLength,R.STREAM_READ),v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+fe),R.readPixels(N,q,H,O,ie.convert(Ne),ie.convert(Le),0);const ut=L!==null?g.get(L).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,ut);const wt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await t_(R,wt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,qe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ue),R.deleteBuffer(qe),R.deleteSync(wt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,q=0){const H=Math.pow(2,-q),O=Math.floor(v.image.width*H),ue=Math.floor(v.image.height*H),me=N!==null?N.x:0,fe=N!==null?N.y:0;I.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,me,fe,O,ue),ye.unbindTexture()};const xg=R.createFramebuffer(),Sg=R.createFramebuffer();this.copyTextureToTexture=function(v,N,q=null,H=null,O=0,ue=null){ue===null&&(O!==0?(ta("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=O,O=0):ue=0);let me,fe,xe,Ce,Ne,Le,qe,ut,wt;const Ct=v.isCompressedTexture?v.mipmaps[ue]:v.image;if(q!==null)me=q.max.x-q.min.x,fe=q.max.y-q.min.y,xe=q.isBox3?q.max.z-q.min.z:1,Ce=q.min.x,Ne=q.min.y,Le=q.isBox3?q.min.z:0;else{const Ln=Math.pow(2,-O);me=Math.floor(Ct.width*Ln),fe=Math.floor(Ct.height*Ln),v.isDataArrayTexture?xe=Ct.depth:v.isData3DTexture?xe=Math.floor(Ct.depth*Ln):xe=1,Ce=0,Ne=0,Le=0}H!==null?(qe=H.x,ut=H.y,wt=H.z):(qe=0,ut=0,wt=0);const dt=ie.convert(N.format),De=ie.convert(N.type);let lt;N.isData3DTexture?(I.setTexture3D(N,0),lt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(I.setTexture2DArray(N,0),lt=R.TEXTURE_2D_ARRAY):(I.setTexture2D(N,0),lt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const Qe=R.getParameter(R.UNPACK_ROW_LENGTH),mn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Lr=R.getParameter(R.UNPACK_SKIP_PIXELS),gn=R.getParameter(R.UNPACK_SKIP_ROWS),Us=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ct.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ct.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ne),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Le);const vt=v.isDataArrayTexture||v.isData3DTexture,cn=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){const Ln=g.get(v),an=g.get(N),un=g.get(Ln.__renderTarget),il=g.get(an.__renderTarget);ye.bindFramebuffer(R.READ_FRAMEBUFFER,un.__webglFramebuffer),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,il.__webglFramebuffer);for(let rr=0;rr<xe;rr++)vt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,g.get(v).__webglTexture,O,Le+rr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,g.get(N).__webglTexture,ue,wt+rr)),R.blitFramebuffer(Ce,Ne,me,fe,qe,ut,me,fe,R.DEPTH_BUFFER_BIT,R.NEAREST);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||g.has(v)){const Ln=g.get(v),an=g.get(N);ye.bindFramebuffer(R.READ_FRAMEBUFFER,xg),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,Sg);for(let un=0;un<xe;un++)vt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ln.__webglTexture,O,Le+un):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ln.__webglTexture,O),cn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,an.__webglTexture,ue,wt+un):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,an.__webglTexture,ue),O!==0?R.blitFramebuffer(Ce,Ne,me,fe,qe,ut,me,fe,R.COLOR_BUFFER_BIT,R.NEAREST):cn?R.copyTexSubImage3D(lt,ue,qe,ut,wt+un,Ce,Ne,me,fe):R.copyTexSubImage2D(lt,ue,qe,ut,Ce,Ne,me,fe);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else cn?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(lt,ue,qe,ut,wt,me,fe,xe,dt,De,Ct.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(lt,ue,qe,ut,wt,me,fe,xe,dt,Ct.data):R.texSubImage3D(lt,ue,qe,ut,wt,me,fe,xe,dt,De,Ct):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ue,qe,ut,me,fe,dt,De,Ct.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ue,qe,ut,Ct.width,Ct.height,dt,Ct.data):R.texSubImage2D(R.TEXTURE_2D,ue,qe,ut,me,fe,dt,De,Ct);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,mn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Lr),R.pixelStorei(R.UNPACK_SKIP_ROWS,gn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Us),ue===0&&N.generateMipmaps&&R.generateMipmap(lt),ye.unbindTexture()},this.initRenderTarget=function(v){g.get(v).__webglFramebuffer===void 0&&I.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?I.setTextureCube(v,0):v.isData3DTexture?I.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?I.setTexture2DArray(v,0):I.setTexture2D(v,0),ye.unbindTexture()},this.resetState=function(){y=0,U=0,L=null,ye.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}const I3=`
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
}`,U3=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;function N3(t){const e=new D3({canvas:t,antialias:!1}),n={uTime:{value:0},uAltitude:{value:.45},uLuminosite:{value:.7},uTurbulence:{value:.2},uNight:{value:0},uAurora:{value:.55},uPulse:{value:0},uPluie:{value:0},uEclair:{value:0},uMeteor:{value:new Rt(0,0,0,0)},uFocus:{value:new it(.5,.5)},uAspect:{value:1},uTap:{value:new W(.5,.5,999)},uCol1:{value:new Xe("#1b2a4a")},uCol2:{value:new Xe("#7fa8d9")},uCol3:{value:new Xe("#dfefff")}},i={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,pluie:0,col1:new Xe("#1b2a4a"),col2:new Xe("#7fa8d9"),col3:new Xe("#dfefff"),focus:new it(.5,.5)},r={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,col1:new Xe("#1b2a4a"),col2:new Xe("#7fa8d9"),col3:new Xe("#dfefff"),focus:new it(.5,.5)};let s=0,a=0,o=999,l=0,c=0;const u={x:0,y:0,age:0,actif:0},h=new Yn({vertexShader:U3,fragmentShader:I3,uniforms:n}),f=new fi(new ha(2,2),h),p=new w_;p.add(f);function _(){e.setSize(window.innerWidth,window.innerHeight,!1),n.uAspect.value=window.innerWidth/Math.max(1,window.innerHeight)}return window.addEventListener("resize",_),_(),{apply(x,m){i.alt=x.altitude,i.lum=x.luminosite,i.turb=x.turbulence,i.night=x.night,i.aurora=x.aurora,i.pluie=x.pluie,i.col1.setStyle(x.palette[0]),i.col2.setStyle(x.palette[1]),i.col3.setStyle(x.palette[2]),m&&i.focus.set(m[0],m[1])},setBpm(x){s=x??0},eclair(){c=1},filer(x,m){u.x=x,u.y=m,u.age=0,u.actif=1},tap(x,m){o=0,n.uTap.value.set(x,m,0)},frame(x){n.uTime.value+=x;const m=1-Math.exp(-x*2.5);r.alt+=(i.alt-r.alt)*m,r.lum+=(i.lum-r.lum)*m,r.turb+=(i.turb-r.turb)*m,r.night+=(i.night-r.night)*m,r.aurora+=(i.aurora-r.aurora)*m,l+=(i.pluie-l)*(1-Math.exp(-x*.8)),c*=Math.exp(-x*2.6),u.actif>0&&(u.age+=x,u.age>1.4&&(u.actif=0)),r.col1.lerp(i.col1,m),r.col2.lerp(i.col2,m),r.col3.lerp(i.col3,m),r.focus.lerp(i.focus,m),a+=x*(s>0?s/60:.2),n.uPulse.value=Math.sin(a*2*Math.PI),o<100&&(o+=x,n.uTap.value.z=o),n.uAltitude.value=r.alt,n.uLuminosite.value=r.lum,n.uTurbulence.value=r.turb,n.uNight.value=r.night,n.uAurora.value=r.aurora,n.uPluie.value=l,n.uEclair.value=c,n.uMeteor.value.set(u.x,u.y,u.age,u.actif),n.uFocus.value.copy(r.focus),n.uCol1.value.copy(r.col1),n.uCol2.value.copy(r.col2),n.uCol3.value.copy(r.col3),e.render(p,new Fu)}}}function F3(){return{breath:0,bpm:null,emotion:"calme",timeOfDay:.5,seed:"anonyme"}}const O3={calme:["#1b2a4a","#7fa8d9","#dfefff"],joie:["#2b4a1b","#d9c47f","#fff6df"],tristesse:["#101018","#3a4a6a","#8a9ab0"],tension:["#2a0a0a","#6a2a2a","#c07a5a"]};function qp(t){const e={calme:{alt:.45,lum:.7,turb:.2,aur:.55,pluie:.12},joie:{alt:.7,lum:.9,turb:.35,aur:.95,pluie:0},tristesse:{alt:.2,lum:.35,turb:.1,aur:.25,pluie:.7},tension:{alt:.6,lum:.45,turb:.85,aur:.4,pluie:.45}}[t.emotion],n=Math.min(1,Math.max(0,(Math.abs(t.timeOfDay-.5)-.2)*5));return{altitude:Math.min(1,e.alt+t.breath*.35),luminosite:Math.min(1,e.lum+t.breath*.2),turbulence:Math.min(1,e.turb+t.breath*.1),night:n,aurora:e.aur,pluie:e.pluie,palette:O3[t.emotion]}}function B3(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return Math.sqrt(e/t.length)}function k3(t,e,n=8){return t<=e?0:Math.min(1,(t-e)*n)}async function V3(t){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),n=new AudioContext,i=n.createMediaStreamSource(e),r=n.createAnalyser();r.fftSize=1024,i.connect(r);const s=new Float32Array(r.fftSize);let a=5e-4;return setInterval(()=>{r.getFloatTimeDomainData(s);const o=B3(s);a=Math.min(a*.999+o*.001,.01),t(k3(o,a))},60),!0}catch{return!1}}var cs=typeof self<"u"?self:{};function Xp(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=cs,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function hr(){throw Error("Invalid UTF8")}function Vf(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Ha,Nl;const z3=typeof TextDecoder<"u";let G3;const H3=typeof TextEncoder<"u";function jp(t){if(H3)t=(G3||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function $p(t){cs.setTimeout((()=>{throw t}),0)}var eu,W3=Xp(610401301,!1),zf=Xp(748402147,!0);function Gf(){var t=cs.navigator;return t&&(t=t.userAgent)?t:""}const Hf=cs.navigator;function Ao(t){return Ao[" "](t),t}eu=Hf&&Hf.userAgentData||null,Ao[" "]=function(){};const Yp={};let js=null;function q3(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(c){for(;l<s.length;){const u=s.charAt(l++),h=js[u];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}Kp();let l=0;for(;;){const c=o(-1),u=o(0),h=o(64),f=o(64);if(f===64&&c===-1)break;a(c<<2|u>>4),h!=64&&(a(u<<4&240|h>>2),f!=64&&a(h<<6&192|f))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function Kp(){if(!js){js={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));Yp[n]=i;for(let r=0;r<i.length;r++){const s=i[r];js[s]===void 0&&(js[s]=r)}}}}var X3=typeof Uint8Array<"u",Jp=!(!(W3&&eu&&eu.brands.length>0)&&(Gf().indexOf("Trident")!=-1||Gf().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Wf=/[-_.]/g,j3={"-":"+",_:"/",".":"="};function $3(t){return j3[t]||""}function Zp(t){if(!Jp)return q3(t);t=Wf.test(t)?t.replace(Wf,$3):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Ou(t){return X3&&t!=null&&t instanceof Uint8Array}var us={};function Tr(){return Y3||=new ui(null,us)}function Bu(t){Qp(us);var e=t.g;return(e=e==null||Ou(e)?e:typeof e=="string"?Zp(e):null)==null?e:t.g=e}var ui=class{h(){return new Uint8Array(Bu(this)||0)}constructor(t,e){if(Qp(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let Y3,K3;function Qp(t){if(t!==us)throw Error("illegal external caller")}function em(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function tu(t){return em(t=Error(t),"warning"),t}function hs(t,e){if(t!=null){var n=K3??={},i=n[t]||0;i>=e||(n[t]=i+1,em(t=Error(),"incident"),$p(t))}}function Es(){return typeof BigInt=="function"}var ys=typeof Symbol=="function"&&typeof Symbol()=="symbol";function pi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var J3=pi("jas",void 0,!0),qf=pi(void 0,"0di"),Gs=pi(void 0,"1oa"),bn=pi(void 0,Symbol()),Z3=pi(void 0,"0ub"),Q3=pi(void 0,"0ubs"),nu=pi(void 0,"0ubsb"),eS=pi(void 0,"0actk"),fs=pi("m_m","Pa",!0),Xf=pi();const tm={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},nm=Object.defineProperties,Ae=ys?J3:"Ga";var Cr;const jf=[];function fa(t,e){ys||Ae in t||nm(t,tm),t[Ae]|=e}function Wt(t,e){ys||Ae in t||nm(t,tm),t[Ae]=e}function da(t){return fa(t,34),t}function ia(t){return fa(t,8192),t}Wt(jf,7),Cr=Object.freeze(jf);var ds={};function An(t,e){return e===void 0?t.h!==Ar&&!!(2&(0|t.v[Ae])):!!(2&e)&&t.h!==Ar}const Ar={};function ku(t,e){if(t!=null){if(typeof t=="string")t=t?new ui(t,us):Tr();else if(t.constructor!==ui)if(Ou(t))t=t.length?new ui(new Uint8Array(t),us):Tr();else{if(!e)throw Error();t=void 0}}return t}class $f{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var tS=Object.freeze({});function im(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(e=128&e?1:0;e<a;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const o in t)!isNaN(o)&&n(+o,t[o])}}var rm={};function bs(t){return 128&t?rm:void 0}function wo(t){return t.Na=!0,t}var nS=wo((t=>typeof t=="number")),Yf=wo((t=>typeof t=="string")),iS=wo((t=>typeof t=="boolean")),Co=typeof cs.BigInt=="function"&&typeof cs.BigInt(0)=="bigint";function Tn(t){var e=t;if(Yf(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(nS(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Co?BigInt(t):t=iS(t)?t?"1":"0":Yf(t)?t.trim()||"0":String(t)}var iu=wo((t=>Co?t>=sS&&t<=oS:t[0]==="-"?Kf(t,rS):Kf(t,aS)));const rS=Number.MIN_SAFE_INTEGER.toString(),sS=Co?BigInt(Number.MIN_SAFE_INTEGER):void 0,aS=Number.MAX_SAFE_INTEGER.toString(),oS=Co?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Kf(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const lS=typeof Uint8Array.prototype.slice=="function";let cS,yt=0,Nt=0;function Jf(t){const e=t>>>0;yt=e,Nt=(t-e)/4294967296>>>0}function ps(t){if(t<0){Jf(-t);const[e,n]=Gu(yt,Nt);yt=e>>>0,Nt=n>>>0}else Jf(t)}function Vu(t){const e=cS||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),Nt=0,yt=e.getUint32(0,!0)}function sm(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:ra(t,e)}function uS(t,e){return Tn(Es()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):ra(t,e))}function am(t,e){return Es()?Tn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Tn(zu(t,e))}function ra(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Es()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Zf(n)+Zf(t));return n}function Zf(t){return t=String(t),"0000000".slice(t.length)+t}function zu(t,e){if(2147483648&e)if(Es())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=Gu(t,e);t="-"+ra(n,i)}else t=ra(t,e);return t}function Ro(t){if(t.length<16)ps(Number(t));else if(Es())t=BigInt(t),yt=Number(t&BigInt(4294967295))>>>0,Nt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Nt=yt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));Nt*=1e6,yt=1e6*yt+s,yt>=4294967296&&(Nt+=Math.trunc(yt/4294967296),Nt>>>=0,yt>>>=0)}if(e){const[i,r]=Gu(yt,Nt);yt=i,Nt=r}}}function Gu(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function $n(t){return Array.prototype.slice.call(t)}const pa=typeof BigInt=="function"?BigInt.asIntN:void 0,hS=typeof BigInt=="function"?BigInt.asUintN:void 0,wr=Number.isSafeInteger,Po=Number.isFinite,ms=Math.trunc,fS=Tn(0);function $s(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function ai(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function sa(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function om(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const dS=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ma(t){switch(typeof t){case"bigint":return!0;case"number":return Po(t);case"string":return dS.test(t);default:return!1}}function Ts(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Po(t)?0|t:void 0}function lm(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Po(t)?t>>>0:void 0}function cm(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(Ro(t),zu(yt,Nt))}function Hu(t){if(t=ms(t),!wr(t)){ps(t);var e=yt,n=Nt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=sm(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function um(t){var e=ms(Number(t));return wr(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),cm(t))}function hm(t){var e=ms(Number(t));return wr(e)?Tn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Es()?Tn(pa(64,BigInt(t))):Tn(cm(t)))}function fm(t){return wr(t)?t=Tn(Hu(t)):(t=ms(t),wr(t)?t=String(t):(ps(t),t=zu(yt,Nt)),t=Tn(t)),t}function ho(t){const e=typeof t;return t==null?t:e==="bigint"?Tn(pa(64,t)):ma(t)?e==="string"?hm(t):fm(t):void 0}function dm(t){if(typeof t!="string")throw Error();return t}function ga(t){if(t!=null&&typeof t!="string")throw Error();return t}function Jt(t){return t==null||typeof t=="string"?t:void 0}function Wu(t,e,n,i){return t!=null&&t[fs]===ds?t:Array.isArray(t)?((i=(n=0|t[Ae])|32&i|2&i)!==n&&Wt(t,i),new e(t)):(n?2&i?((t=e[qf])||(da((t=new e).v),t=e[qf]=t),e=t):e=new e:e=void 0,e)}function pS(t,e,n){if(e)e:{if(!ma(e=t))throw tu("int64");switch(typeof e){case"string":e=hm(e);break e;case"bigint":e=Tn(pa(64,e));break e;default:e=fm(e)}}else e=ho(t);return(t=e)==null?n?fS:void 0:t}const mS={};let gS=(function(){try{return Ao(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Fl{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const _S=gS?(Object.setPrototypeOf(Fl.prototype,Map.prototype),Object.defineProperties(Fl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Fl):class extends Map{constructor(){super()}};function Qf(t){return t}function Ol(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var Ui=class extends _S{constructor(t,e,n=Qf,i=Qf){super(),this.J=0|t[Ae],this.K=e,this.S=n,this.fa=this.K?vS:i;for(let r=0;r<t.length;r++){const s=t[r],a=n(s[0],!1,!0);let o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(t){return ia(Array.from(super.entries(),t))}clear(){Ol(this),super.clear()}delete(t){return Ol(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new $f(t,xS,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new $f(t,Ui.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return Ol(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function vS(t,e,n,i,r,s){return t=Wu(t,i,n,s),r&&(t=Xu(t)),t}function xS(t){return[t,this.get(t)]}let SS;function ed(){return SS||=new Ui(da([]),void 0,void 0,void 0,mS)}function Lo(t){return bn?t[bn]:void 0}function fo(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}Ui.prototype.toJSON=void 0;var ru=class{};const MS={Ka:!0};function ES(t,e){e<100||hs(Q3,1)}function Do(t,e,n,i){const r=i!==void 0;i=!!i;var s,a=bn;!r&&ys&&a&&(s=t[a])&&fo(s,ES),a=[];var o=t.length;let l;s=4294967295;let c=!1;const u=!!(64&e),h=u?128&e?0:-1:void 0;1&e||(l=o&&t[o-1],l!=null&&typeof l=="object"&&l.constructor===Object?s=--o:l=void 0,!u||128&e||r||(c=!0,s=s-h+h)),e=void 0;for(var f=0;f<o;f++){let p=t[f];if(p!=null&&(p=n(p,i))!=null)if(u&&f>=s){const _=f-h;(e??={})[_]=p}else a[f]=p}if(l)for(let p in l){if((o=l[p])==null||(o=n(o,i))==null)continue;let _;f=+p,u&&!Number.isNaN(f)&&(_=f+h)<s?a[_]=o:(e??={})[p]=o}return e&&(c?a.push(e):a[s]=e),r&&bn&&(t=Lo(t))&&t instanceof ru&&(a[bn]=(function(p){const _=new ru;return fo(p,((x,m,d)=>{_[m]=$n(d)})),_.da=p.da,_})(t)),a}function yS(t){return t[0]=aa(t[0]),t[1]=aa(t[1]),t}function aa(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return iu(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Ae];return t.length===0&&1&e?void 0:Do(t,e,aa)}if(t!=null&&t[fs]===ds)return pm(t);if(t instanceof ui){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(Jp){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),Kp(),n=Yp[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let c=0,u=0;for(;c<e.length-2;c+=3){var s=e[c],a=e[c+1],o=e[c+2],l=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[u++]=l+s+a+o}switch(l=0,o=r,e.length-c){case 2:o=n[(15&(l=e[c+1]))<<2]||r;case 1:e=e[c],i[u]=n[e>>2]+n[(3&e)<<4|l>>4]+o+r}e=i.join("")}t=t.g=e}return t}return t instanceof Ui?t=t.size!==0?t.V(yS):void 0:void 0}return t}let bS,TS;function pm(t){return Do(t=t.v,0|t[Ae],aa)}function xr(t,e){return mm(t,e[0],e[1])}function mm(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[Ae],zf&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(zf)throw Error("carr");hs(eS,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Wt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var a=s-1;const l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(s=+o)<a&&(n[s+e]=l[o],delete l[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Wt(t,64|r|i),t}function AS(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Ae];return t.length===0&&1&n?void 0:td(t,n,e)}if(t!=null&&t[fs]===ds)return nd(t);if(t instanceof Ui){if(2&(e=t.J))return t;if(!t.size)return;if(n=da(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[fs]===ds?nd(r):Array.isArray(r)?td(r,0|r[Ae],!!(32&e)):void 0,i[1]=r}return n}return t instanceof ui?t:void 0}function td(t,e,n){return 2&e||(!n||4096&e||16&e?t=As(t,e,!1,n&&!(16&e)):(fa(t,34),4&e&&Object.freeze(t))),t}function qu(t,e,n){return t=new t.constructor(e),n&&(t.h=Ar),t.m=Ar,t}function nd(t){const e=t.v,n=0|e[Ae];return An(t,n)?t:ju(t,e,n)?qu(t,e):As(e,n)}function As(t,e,n,i){return i??=!!(34&e),t=Do(t,e,AS,i),i=32,n&&(i|=2),Wt(t,e=16769217&e|i),t}function Xu(t){const e=t.v,n=0|e[Ae];return An(t,n)?ju(t,e,n)?qu(t,e,!0):new t.constructor(As(e,n,!1)):t}function ws(t){if(t.h!==Ar)return!1;var e=t.v;return fa(e=As(e,0|e[Ae]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function Cs(t){if(!ws(t)&&An(t,0|t.v[Ae]))throw Error()}function Rr(t,e){e===void 0&&(e=0|t[Ae]),32&e&&!(4096&e)&&Wt(t,4096|e)}function ju(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Wt(e,2|n),t.h=Ar,!0)}const gm=Tn(0),qi={};function bt(t,e,n,i,r){if((e=Ni(t.v,e,n,r))!==null||i&&t.m!==Ar)return e}function Ni(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let a,o;if(!(s<1+(n?0:-1))){if(r>=s)if(a=t[s],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[e],o=!0;else{if(r!==s)return;n=a}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[r]=i,i}return n}}function ht(t,e,n,i){Cs(t),Vt(t=t.v,0|t[Ae],e,n,i)}function Vt(t,e,n,i,r){const s=n+(r?0:-1);var a=t.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=(e??=0|t[Ae])>>14&1023||536870912)?i!=null&&(t[a+(r?0:-1)]={[n]:i}):t[s]=i),e)}function _r(){return tS===void 0?2:4}function vr(t,e,n,i,r){let s=t.v,a=0|s[Ae];i=An(t,a)?1:i,r=!!r||i===3,i===2&&ws(t)&&(s=t.v,a=0|s[Ae]);let o=(t=$u(s,e))===Cr?7:0|t[Ae],l=Yu(o,a);var c=!(4&l);if(c){4&l&&(t=$n(t),o=0,l=Mr(l,a),a=Vt(s,a,e,t));let u=0,h=0;for(;u<t.length;u++){const f=n(t[u]);f!=null&&(t[h++]=f)}h<u&&(t.length=h),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==o&&(Wt(t,l),2&l&&Object.freeze(t)),_m(t,l,s,a,e,i,c,r)}function _m(t,e,n,i,r,s,a,o){let l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?Sr(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Wt(t,e),Object.freeze(t)):(s===2&&Sr(e)&&(t=$n(t),l=0,e=Mr(e,i),i=Vt(n,i,r,t)),Sr(e)||(o||(e|=16),e!==l&&Wt(t,e))),2&e||!(4096&e||16&e)||Rr(n,i),t}function $u(t,e,n){return t=Ni(t,e,n),Array.isArray(t)?t:Cr}function Yu(t,e){return 2&e&&(t|=2),1|t}function Sr(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function vm(t){return ku(t,!0)}function xm(t){t=$n(t);for(let e=0;e<t.length;e++){const n=t[e]=$n(t[e]);Array.isArray(n[1])&&(n[1]=da(n[1]))}return ia(t)}function ji(t,e,n,i){Cs(t),Vt(t=t.v,0|t[Ae],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Rs(t,e,n){if(2&e)throw Error();const i=bs(e);let r=$u(t,n,i),s=r===Cr?7:0|r[Ae],a=Yu(s,e);return(2&a||Sr(a)||16&a)&&(a===s||Sr(a)||Wt(r,a),r=$n(r),s=0,a=Mr(a,e),Vt(t,e,n,r,i)),a&=-13,a!==s&&Wt(r,a),r}function Bl(t,e){var n=u0;return Ju(Ku(t=t.v),t,void 0,n)===e?e:-1}function Ku(t){if(ys)return t[Gs]??(t[Gs]=new Map);if(Gs in t)return t[Gs];const e=new Map;return Object.defineProperty(t,Gs,{value:e}),e}function Sm(t,e,n,i,r){const s=Ku(t),a=Ju(s,t,e,n,r);return a!==i&&(a&&(e=Vt(t,e,a,void 0,r)),s.set(n,i)),e}function Ju(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];Ni(e,o,r)!=null&&(s!==0&&(n=Vt(e,n,s,void 0,r)),s=o)}return t.set(i,s),s}function Zu(t,e,n){let i=0|t[Ae];const r=bs(i),s=Ni(t,n,r);let a;if(s!=null&&s[fs]===ds){if(!An(s))return ws(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[Ae];2&o&&(a=As(a,o))}return a=xr(a,e),a!==s&&Vt(t,i,n,a,r),a}function Mm(t,e,n,i,r){let s=!1;if((i=Ni(t,i,r,(a=>{const o=Wu(a,n,!1,e);return s=o!==a&&o!=null,o})))!=null)return s&&!An(i)&&Rr(t,e),i}function tt(t,e,n,i){let r=t.v,s=0|r[Ae];if((e=Mm(r,s,e,n,i))==null)return e;if(s=0|r[Ae],!An(t,s)){const a=Xu(e);a!==e&&(ws(t)&&(r=t.v,s=0|r[Ae]),s=Vt(r,s,n,e=a,i),Rr(r,s))}return e}function Em(t,e,n,i,r,s,a,o){var l=An(t,n);s=l?1:s,a=!!a||s===3,l=o&&!l,(s===2||l)&&ws(t)&&(n=0|(e=t.v)[Ae]);var c=(t=$u(e,r))===Cr?7:0|t[Ae],u=Yu(c,n);if(o=!(4&u)){var h=t,f=n;const p=!!(2&u);p&&(f|=2);let _=!p,x=!0,m=0,d=0;for(;m<h.length;m++){const b=Wu(h[m],i,!1,f);if(b instanceof i){if(!p){const A=An(b);_&&=!A,x&&=A}h[d++]=b}}d<m&&(h.length=d),u|=4,u=x?-4097&u:4096|u,u=_?8|u:-9&u}if(u!==c&&(Wt(t,u),2&u&&Object.freeze(t)),l&&!(8&u||!t.length&&(s===1||s===4&&(2&u||!(16&u)&&32&n)))){for(Sr(u)&&(t=$n(t),u=Mr(u,n),n=Vt(e,n,r,t)),i=t,l=u,c=0;c<i.length;c++)(h=i[c])!==(u=Xu(h))&&(i[c]=u);l|=8,Wt(t,u=l=i.length?4096|l:-4097&l)}return _m(t,u,e,n,r,s,o,a)}function Fi(t,e,n){const i=t.v;return Em(t,i,0|i[Ae],e,n,_r(),!1,!0)}function ym(t){return t==null&&(t=void 0),t}function Ie(t,e,n,i,r){return ht(t,n,i=ym(i),r),i&&!An(i)&&Rr(t.v),t}function Ys(t,e,n,i){e:{var r=i=ym(i);Cs(t);const s=t.v;let a=0|s[Ae];if(r==null){const o=Ku(s);if(Ju(o,s,a,n)!==e)break e;o.set(n,0)}else a=Sm(s,a,n,e);Vt(s,a,e,r)}i&&!An(i)&&Rr(t.v)}function Mr(t,e){return-273&(2&e?2|t:-3&t)}function Qu(t,e,n,i){var r=i;Cs(t),t=Em(t,i=t.v,0|i[Ae],n,e,2,!0),r=r??new n,t.push(r),e=n=t===Cr?7:0|t[Ae],(r=An(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Wt(t,n),r||Rr(i)}function Bn(t,e,n){return Ts(bt(t,e,void 0,n))}function Lt(t,e){return bt(t,e,void 0,void 0,ai)??0}function Oi(t,e,n){if(n!=null){if(typeof n!="number"||!Po(n))throw tu("int32");n|=0}ht(t,e,n)}function Pe(t,e,n){ht(t,e,$s(n))}function wn(t,e,n){ji(t,e,ga(n),"")}function po(t,e,n){{Cs(t);const a=t.v;let o=0|a[Ae];if(n==null)Vt(a,o,e);else{var i=t=n===Cr?7:0|n[Ae],r=Sr(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=$n(n),i=0,t=Mr(t,o),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const l=n[r],c=dm(l);Object.is(l,c)||(s&&(n=$n(n),i=0,t=Mr(t,o),s=!1),n[r]=c)}t!==i&&(s&&(n=$n(n),t=Mr(t,o)),Wt(n,t)),Vt(a,o,e,n)}}}function Io(t,e,n){Cs(t),vr(t,e,Jt,2,!0).push(dm(n))}var Xr=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function eh(t,e){if(typeof t=="string")return new Xr(Zp(t),e);if(Array.isArray(t))return new Xr(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new Xr(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new Xr(t,!1);if(t.constructor===ui)return e=Bu(t)||new Uint8Array(0),new Xr(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new Xr(t,!1);throw Error()}function th(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Er(t,o),!(128&n))return e(i>>>0,r>>>0);throw Error()}function nh(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Er(t,n),!!(127&e)}throw Error()}function er(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Er(t,n),r}function di(t){return er(t)>>>0}function mo(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],Er(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function wS(t){return er(t)}function Er(t,e){if(t.g=e,e>t.l)throw Error()}function bm(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function Tm(t,e){if(e==0)return Tr();var n=bm(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):lS?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Tr():new ui(n,us)}var id=[];function Am(t,e,n,i){if(go.length){const r=go.pop();return r.o(i),r.g.init(t,e,n,i),r}return new CS(t,e,n,i)}function wm(t){t.g.clear(),t.l=-1,t.h=-1,go.length<100&&go.push(t)}function Cm(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=di(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function io(t){switch(t.h){case 0:t.h!=0?io(t):nh(t.g);break;case 1:Er(t=t.g,t.g+8);break;case 2:if(t.h!=2)io(t);else{var e=di(t.g);Er(t=t.g,t.g+e)}break;case 5:Er(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!Cm(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}io(t)}break;default:throw Error()}}function _a(t,e,n){const i=t.g.l;var r=di(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function ih(t){var e=di(t.g),n=bm(t=t.g,e);if(t=t.h,z3){var i,r=t;(i=Nl)||(i=Nl=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(Ha===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Ha=!0}catch{Ha=!1}}throw!Ha&&(Nl=void 0),o}}else{e=(s=n)+e,n=[];let o,l=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?hr():(o=t[s++],a<194||(192&o)!=128?(s--,hr()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?hr():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,hr()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?hr():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,hr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):hr(),n.length>=8192&&(l=Vf(l,n),n.length=0)}s=Vf(l,n)}return s}function Rm(t){const e=di(t.g);return Tm(t.g,e)}function Uo(t,e,n){var i=di(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var CS=class{constructor(t,e,n,i){if(id.length){const r=id.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:l=!1}={}){this.Y=o,this.ea=l,r&&(r=eh(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},go=[];function rd(t){return t?/^\d+$/.test(t)?(Ro(t),new su(yt,Nt)):null:RS||=new su(0,0)}var su=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let RS;function sd(t){return t?/^-?\d+$/.test(t)?(Ro(t),new au(yt,Nt)):null:PS||=new au(0,0)}var au=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let PS;function es(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ps(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function No(t,e){if(e>=0)Ps(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function rh(t){var e=yt;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function gs(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function kn(t,e,n){Ps(t.g,8*e+n)}function sh(t,e){return kn(t,e,2),e=t.g.end(),gs(t,e),e.push(t.h),e}function ah(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Fo(t,e,n){kn(t,e,2),Ps(t.g,n.length),gs(t,t.g.end()),gs(t,n)}function _o(t,e,n,i){n!=null&&(e=sh(t,e),i(n,t),ah(t,e))}function mi(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var oh=mi(),Pm=mi(),lh=mi(),ch=mi(),uh=mi(),Lm=mi(),LS=mi(),Oo=mi(),Dm=mi(),Im=mi();function gi(t,e,n){var i=t.v;bn&&bn in i&&(i=i[bn])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var we=class{constructor(t,e){this.v=mm(t,e,void 0,2048)}toJSON(){return pm(this)}j(){var t=fM,e=this.v,n=t.g,i=bn;if(ys&&i&&e[i]?.[n]!=null&&hs(Z3,3),e=t.g,Xf&&bn&&Xf===void 0&&(i=(n=this.v)[bn])&&(i=i.da))try{i(n,e,MS)}catch(r){$p(r)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[Ae];return ju(this,t,e)?qu(this,t,!0):new this.constructor(As(t,e,!1))}};we.prototype[fs]=ds,we.prototype.toString=function(){return this.v.toString()};var Ls=class{constructor(t,e,n){this.g=t,this.h=e,t=oh,this.l=!!t&&n===t||!1}};function Bo(t,e){return new Ls(t,e,oh)}function Um(t,e,n,i,r){_o(t,n,Bm(e,i),r)}const DS=Bo((function(t,e,n,i,r){return t.h===2&&(_a(t,Zu(e,i,n),r),!0)}),Um),IS=Bo((function(t,e,n,i,r){return t.h===2&&(_a(t,Zu(e,i,n),r),!0)}),Um);var ko=Symbol(),Vo=Symbol(),ou=Symbol(),ad=Symbol(),od=Symbol();let Nm,Fm;function Pr(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=(function(h){switch(typeof h){case"boolean":return bS||=[0,void 0,!0];case"number":return h>0?void 0:h===0?TS||=[0,void 0]:[-h,void 0];case"string":return[0,h];case"object":return h}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,Nm??=s,Fm??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)o[s[l]]=s;s=i[++a]}for(l=1;s!==void 0;){let h;typeof s=="number"&&(l+=s,s=i[++a]);var c=void 0;if(s instanceof Ls?h=s:(h=DS,a--),h?.l){s=i[++a],c=i;var u=a;typeof s=="function"&&(s=s(),c[u]=s),c=s}for(u=l+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);l<u;l++){const f=o[l];c?n(r,l,h,c,f):e(r,l,h,f)}}return i[t]=r}function Om(t){return Array.isArray(t)?t[0]instanceof Ls?t:[IS,t]:[t,void 0]}function Bm(t,e){return t instanceof we?t.v:Array.isArray(t)?xr(t,e):void 0}function hh(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function fh(t,e,n,i,r){const s=n.g;let a,o;t[e]=(l,c,u)=>s(l,c,u,o||=Pr(Vo,hh,fh,i).T,a||=dh(i),r)}function dh(t){let e=t[ou];if(e!=null)return e;const n=Pr(Vo,hh,fh,t);return e=n.ma?(i,r)=>Nm(i,r,n):(i,r)=>{for(;Cm(r)&&r.h!=4;){var s=r.l,a=n[s];if(a==null){var o=n.ba;o&&(o=o[s])&&(o=NS(o))!=null&&(a=n[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,io(o),o.ha)var l=void 0;else l=o.g.g-a,o.g.g=a,l=Tm(o.g,l);a=void 0,o=i,l&&((a=o[bn]??(o[bn]=new ru))[s]??(a[s]=[])).push(l)}}return(i=Lo(i))&&(i.da=n.qa[od]),!0},t[ou]=e,t[od]=US.bind(t),e}function US(t,e,n,i){var r=this[Vo];const s=this[ou],a=xr(void 0,r.T),o=Lo(t);if(o){var l=!1,c=r.ba;if(c){if(r=(u,h,f)=>{if(f.length!==0)if(c[h])for(const p of f){u=Am(p);try{l=!0,s(a,u)}finally{wm(u)}}else i?.(t,h,f)},e==null)fo(o,r);else if(o!=null){const u=o[e];u&&r(o,e,u)}if(l){let u=0|t[Ae];if(2&u&&2048&u&&!n?.Ka)throw Error();const h=bs(u),f=(p,_)=>{if(Ni(t,p,h)!=null){if(n?.Qa===1)return;throw Error()}_!=null&&(u=Vt(t,u,p,_,h)),delete o[p]};e==null?im(a,0|a[Ae],((p,_)=>{f(p,_)})):f(e,Ni(a,e,h))}}}}function NS(t){const e=(t=Om(t))[0].g;if(t=t[1]){const n=dh(t),i=Pr(Vo,hh,fh,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function zo(t,e,n){t[e]=n.h}function Go(t,e,n,i){let r,s;const a=n.h;t[e]=(o,l,c)=>a(o,l,c,s||=Pr(ko,zo,Go,i).T,r||=km(i))}function km(t){let e=t[ad];if(!e){const n=Pr(ko,zo,Go,t);e=(i,r)=>Vm(i,r,n),t[ad]=e}return e}function Vm(t,e,n){im(t,0|t[Ae],((i,r)=>{if(r!=null){var s=(function(a,o){var l=a[o];if(l)return l;if((l=a.ba)&&(l=l[o])){var c=(l=Om(l))[0].h;if(l=l[1]){const u=km(l),h=Pr(ko,zo,Go,l).T;l=a.ma?Fm(h,u):(f,p,_)=>c(f,p,_,h,u)}else l=c;return a[o]=l}})(n,i);s?s(e,r,i):i<500||hs(nu,3)}})),(t=Lo(t))&&fo(t,((i,r,s)=>{for(gs(e,e.g.end()),i=0;i<s.length;i++)gs(e,Bu(s[i])||new Uint8Array(0))}))}const FS=Tn(0);function Ds(t,e){if(Array.isArray(e)){var n=0|e[Ae];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&Wt(e,t),2&t&&Object.freeze(e),e}}function rn(t,e,n){return new Ls(t,e,n)}function Is(t,e,n){return new Ls(t,e,n)}function sn(t,e,n){Vt(t,0|t[Ae],e,n,bs(0|t[Ae]))}var OS=Bo((function(t,e,n,i,r){if(t.h!==2)return!1;if(t=$n(t=_a(t,xr([void 0,void 0],i),r)),r=bs(i=0|e[Ae]),2&i)throw Error();let s=Ni(e,n,r);if(s instanceof Ui)(2&s.J)!=0?(s=s.V(),s.push(t),Vt(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var a=0|s[Ae];8192&a||Wt(s,a|=8192),2&a&&(s=xm(s),Vt(e,i,n,s,r)),s.push(t)}else Vt(e,i,n,ia([t]),r);return!0}),(function(t,e,n,i,r){if(e instanceof Ui)e.forEach(((s,a)=>{_o(t,n,xr([a,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&_o(t,n,xr(a,i),r)}ia(e)}}));function zm(t,e,n){(e=ai(e))!=null&&(kn(t,n,5),t=t.g,Vu(e),rh(t))}function Gm(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(pa(64,i));if(ma(i)){if(r==="string")return um(i);if(r==="number")return Hu(i)}})(e),e!=null&&(typeof e=="string"&&sd(e),e!=null))switch(kn(t,n,0),typeof e){case"number":t=t.g,ps(e),es(t,yt,Nt);break;case"bigint":n=BigInt.asUintN(64,e),n=new au(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),es(t.g,n.h,n.g);break;default:n=sd(e),es(t.g,n.h,n.g)}}function Hm(t,e,n){(e=Ts(e))!=null&&e!=null&&(kn(t,n,0),No(t.g,e))}function Wm(t,e,n){(e=om(e))!=null&&(kn(t,n,0),t.g.g.push(e?1:0))}function qm(t,e,n){(e=Jt(e))!=null&&Fo(t,n,jp(e))}function Xm(t,e,n,i,r){_o(t,n,Bm(e,i),r)}function jm(t,e,n){(e=e==null||typeof e=="string"||e instanceof ui?e:void 0)!=null&&Fo(t,n,eh(e,!0).buffer)}function $m(t,e,n){(e=lm(e))!=null&&e!=null&&(kn(t,n,0),Ps(t.g,e))}function Ym(t,e,n){return(t.h===5||t.h===2)&&(e=Rs(e,0|e[Ae],n),t.h==2?Uo(t,mo,e):e.push(mo(t.g)),!0)}var Ft=rn((function(t,e,n){return t.h===5&&(sn(e,n,mo(t.g)),!0)}),zm,Oo),BS=Is(Ym,(function(t,e,n){if((e=Ds(ai,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(kn(i,r,5),i=i.g,Vu(s),rh(i))}}),Oo),ph=Is(Ym,(function(t,e,n){if((e=Ds(ai,e))!=null&&e.length){kn(t,n,2),Ps(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Vu(e[i]),rh(n)}}),Oo),kS=rn((function(t,e,n){return t.h===5&&(sn(e,n,(t=mo(t.g))===0?void 0:t),!0)}),zm,Oo),tr=rn((function(t,e,n){return t.h!==0?t=!1:(sn(e,n,th(t.g,am)),t=!0),t}),Gm,Lm),kl=rn((function(t,e,n){return t.h!==0?e=!1:(sn(e,n,(t=th(t.g,am))===FS?void 0:t),e=!0),e}),Gm,Lm),VS=rn((function(t,e,n){return t.h!==0?t=!1:(sn(e,n,th(t.g,uS)),t=!0),t}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(hS(64,i));if(ma(i)){if(r==="string")return r=ms(Number(i)),wr(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(Ro(i),i=ra(yt,Nt))),i;if(r==="number")return(i=ms(i))>=0&&wr(i)||(ps(i),i=sm(yt,Nt)),i}})(e),e!=null&&(typeof e=="string"&&rd(e),e!=null))switch(kn(t,n,0),typeof e){case"number":t=t.g,ps(e),es(t,yt,Nt);break;case"bigint":n=BigInt.asUintN(64,e),n=new su(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),es(t.g,n.h,n.g);break;default:n=rd(e),es(t.g,n.h,n.g)}}),LS),kt=rn((function(t,e,n){return t.h===0&&(sn(e,n,er(t.g)),!0)}),Hm,ch),va=Is((function(t,e,n){return(t.h===0||t.h===2)&&(e=Rs(e,0|e[Ae],n),t.h==2?Uo(t,er,e):e.push(er(t.g)),!0)}),(function(t,e,n){if((e=Ds(Ts,e))!=null&&e.length){n=sh(t,n);for(let i=0;i<e.length;i++)No(t.g,e[i]);ah(t,n)}}),ch),Jr=rn((function(t,e,n){return t.h===0&&(sn(e,n,(t=er(t.g))===0?void 0:t),!0)}),Hm,ch),Tt=rn((function(t,e,n){return t.h===0&&(sn(e,n,nh(t.g)),!0)}),Wm,Pm),yr=rn((function(t,e,n){return t.h===0&&(sn(e,n,(t=nh(t.g))===!1?void 0:t),!0)}),Wm,Pm),en=Is((function(t,e,n){return t.h===2&&(t=ih(t),Rs(e,0|e[Ae],n).push(t),!0)}),(function(t,e,n){if((e=Ds(Jt,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&Fo(i,r,jp(s))}}),lh),Yi=rn((function(t,e,n){return t.h===2&&(sn(e,n,(t=ih(t))===""?void 0:t),!0)}),qm,lh),mt=rn((function(t,e,n){return t.h===2&&(sn(e,n,ih(t)),!0)}),qm,lh),$t=(function(t,e,n=oh){return new Ls(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=xr(void 0,i),Rs(e,0|e[Ae],n).push(i),_a(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)Xm(t,e[s],n,i,r);1&(t=0|e[Ae])||Wt(e,1|t)}})),St=Bo((function(t,e,n,i,r,s){if(t.h!==2)return!1;let a=0|e[Ae];return Sm(e,a,s,n,bs(a)),_a(t,e=Zu(e,i,n),r),!0}),Xm),Km=rn((function(t,e,n){return t.h===2&&(sn(e,n,Rm(t)),!0)}),jm,Dm),zS=Is((function(t,e,n){return(t.h===0||t.h===2)&&(e=Rs(e,0|e[Ae],n),t.h==2?Uo(t,di,e):e.push(di(t.g)),!0)}),(function(t,e,n){if((e=Ds(lm,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(kn(i,r,0),Ps(i.g,s))}}),uh),GS=rn((function(t,e,n){return t.h===0&&(sn(e,n,(t=di(t.g))===0?void 0:t),!0)}),$m,uh),nn=rn((function(t,e,n){return t.h===0&&(sn(e,n,er(t.g)),!0)}),(function(t,e,n){(e=Ts(e))!=null&&(e=parseInt(e,10),kn(t,n,0),No(t.g,e))}),Im);class HS{constructor(e,n){var i=Rn;this.g=e,this.h=n,this.m=tt,this.j=Ie,this.defaultValue=void 0,this.l=i.Oa!=null?rm:void 0}register(){Ao(this)}}function _i(t,e){return new HS(t,e)}function nr(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Am(n,void 0,void 0,s);try{const a=new t,o=a.v;dh(e)(o,n);var r=a}finally{wm(n)}}return r}}function Ho(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Vm(this.v,e,Pr(ko,zo,Go,t)),gs(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var ld=class extends we{constructor(t){super(t)}},cd=[0,Yi,rn((function(t,e,n){return t.h===2&&(sn(e,n,(t=Rm(t))===Tr()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof we){const i=e.Ra;return void(i?(e=i(e),e!=null&&Fo(t,n,eh(e,!0).buffer)):hs(nu,3))}if(Array.isArray(e))return void hs(nu,3)}jm(t,e,n)}),Dm)];let Vl,ud=globalThis.trustedTypes;function hd(t){var e;return Vl===void 0&&(Vl=(function(){let n=null;if(!ud)return n;try{const i=r=>r;n=ud.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=Vl)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function Wa(t,...e){if(e.length===0)return hd(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return hd(n)}var Jm=[0,kt,nn,Tt,-1,va,nn,-1,Tt],WS=class extends we{constructor(t){super(t)}},Zm=[0,Tt,mt,Tt,nn,-1,Is((function(t,e,n){return(t.h===0||t.h===2)&&(e=Rs(e,0|e[Ae],n),t.h==2?Uo(t,wS,e):e.push(er(t.g)),!0)}),(function(t,e,n){if((e=Ds(Ts,e))!=null&&e.length){n=sh(t,n);for(let i=0;i<e.length;i++)No(t.g,e[i]);ah(t,n)}}),Im),mt,-1,[0,Tt,-1],nn,Tt,-1],Qm=[0,3,Tt,-1,2,[0,[2],kt,St,[0,rn((function(t,e,n){return t.h===0&&(sn(e,n,di(t.g)),!0)}),$m,uh)]],[0,nn,Tt,nn,Tt,nn,Tt,mt,-1],[0,[3,4],mt,-1,St,[0,kt],St,[0,nn]],[0]],e0=[0,mt,-2],fd=class extends we{constructor(t){super(t)}},t0=[0],n0=[0,kt,Tt,1,Tt,-4],Rn=class extends we{constructor(t){super(t,2)}},zt={};zt[336783863]=[0,mt,Tt,-1,kt,[0,[1,2,3,4,5,6,7,8,9],St,t0,St,Zm,St,e0,St,n0,St,Jm,St,[0,mt,-2],St,[0,mt,nn],St,Qm,St,[0,nn,-1,Tt]],[0,mt],Tt,[0,[1,3],[2,4],St,[0,va],-1,St,[0,en],-1,$t,[0,mt,-1]],mt];var dd=[0,kl,-1,yr,-3,kl,va,Yi,Jr,kl,-1,yr,Jr,yr,-2,Yi];function Mt(t,e){Io(t,3,e)}function $e(t,e){Io(t,4,e)}var pn=class extends we{constructor(t){super(t,500)}o(t){return Ie(this,0,7,t)}},Ks=[-1,{}],pd=[0,mt,1,Ks],md=[0,mt,en,Ks];function Vn(t,e){Qu(t,1,pn,e)}function At(t,e){Io(t,10,e)}function nt(t,e){Io(t,15,e)}var Pn=class extends we{constructor(t){super(t,500)}o(t){return Ie(this,0,1001,t)}},i0=[-500,$t,[-500,Yi,-1,en,-3,[-2,zt,Tt],$t,cd,Jr,-1,pd,md,$t,[0,Yi,yr],Yi,dd,Jr,en,987,en],4,$t,[-500,mt,-1,[-1,{}],998,mt],$t,[-500,mt,en,-1,[-2,{},Tt],997,en,-1],Jr,$t,[-500,mt,en,Ks,998,en],en,Jr,pd,md,$t,[0,Yi,-1,Ks],en,-2,dd,Yi,-1,yr,[0,yr,GS],978,Ks,$t,cd];Pn.prototype.g=Ho(i0);var qS=nr(Pn,i0),XS=class extends we{constructor(t){super(t)}},r0=class extends we{constructor(t){super(t)}g(){return Fi(this,XS,1)}},s0=[0,$t,[0,kt,Ft,mt,-1]],Wo=nr(r0,s0),jS=class extends we{constructor(t){super(t)}},$S=class extends we{constructor(t){super(t)}},zl=class extends we{constructor(t){super(t)}l(){return tt(this,jS,2)}g(){return Fi(this,$S,5)}},a0=nr(class extends we{constructor(t){super(t)}},[0,en,va,ph,[0,nn,[0,kt,-3],[0,Ft,-3],[0,kt,-1,[0,$t,[0,kt,-2]]],$t,[0,Ft,-1,mt,Ft]],mt,-1,tr,$t,[0,kt,Ft],en,tr]),o0=class extends we{constructor(t){super(t)}},ts=nr(class extends we{constructor(t){super(t)}},[0,$t,[0,Ft,-4]]),l0=class extends we{constructor(t){super(t)}},xa=nr(class extends we{constructor(t){super(t)}},[0,$t,[0,Ft,-4]]),YS=class extends we{constructor(t){super(t)}},KS=[0,kt,-1,ph,nn],c0=class extends we{constructor(t){super(t)}};c0.prototype.g=Ho([0,Ft,-4,tr]);var JS=class extends we{constructor(t){super(t)}},ZS=nr(class extends we{constructor(t){super(t)}},[0,$t,[0,1,kt,mt,s0],tr]),gd=class extends we{constructor(t){super(t)}},QS=class extends we{constructor(t){super(t)}na(){const t=bt(this,1,void 0,void 0,vm);return t??Tr()}},eM=class extends we{constructor(t){super(t)}},u0=[1,2],tM=nr(class extends we{constructor(t){super(t)}},[0,$t,[0,u0,St,[0,ph],St,[0,Km],kt,mt],tr]),mh=class extends we{constructor(t){super(t)}},h0=[0,mt,kt,Ft,en,-1],_d=class extends we{constructor(t){super(t)}},nM=[0,Tt,-1],vd=class extends we{constructor(t){super(t)}},ro=[1,2,3,4,5,6],vo=class extends we{constructor(t){super(t)}g(){return bt(this,1,void 0,void 0,vm)!=null}l(){return Jt(bt(this,2))!=null}},Pt=class extends we{constructor(t){super(t)}g(){return om(bt(this,2))??!1}},f0=[0,Km,mt,[0,kt,tr,-1],[0,VS,tr]],Bt=[0,f0,Tt,[0,ro,St,n0,St,Zm,St,Jm,St,t0,St,e0,St,Qm],nn],qo=class extends we{constructor(t){super(t)}},gh=[0,Bt,Ft,-1,kt],iM=_i(502141897,qo);zt[502141897]=gh;var rM=nr(class extends we{constructor(t){super(t)}},[0,[0,nn,-1,BS,zS],KS]),d0=class extends we{constructor(t){super(t)}},p0=class extends we{constructor(t){super(t)}},lu=[0,Bt,Ft,[0,Bt],Tt],sM=_i(508968150,p0);zt[508968150]=[0,Bt,gh,lu,Ft,[0,[0,f0]]],zt[508968149]=lu;var jr=class extends we{constructor(t){super(t)}l(){return tt(this,mh,2)}g(){ht(this,2)}},m0=[0,Bt,h0];zt[478825465]=m0;var aM=class extends we{constructor(t){super(t)}},g0=class extends we{constructor(t){super(t)}},_h=class extends we{constructor(t){super(t)}},vh=class extends we{constructor(t){super(t)}},_0=class extends we{constructor(t){super(t)}},xd=[0,Bt,[0,Bt],m0,-1],v0=[0,Bt,Ft,kt],xh=[0,Bt,Ft],x0=[0,Bt,v0,xh,Ft],oM=_i(479097054,_0);zt[479097054]=[0,Bt,x0,xd],zt[463370452]=xd,zt[464864288]=v0;var lM=_i(462713202,vh);zt[462713202]=x0,zt[474472470]=xh;var cM=class extends we{constructor(t){super(t)}},S0=class extends we{constructor(t){super(t)}},M0=class extends we{constructor(t){super(t)}},E0=class extends we{constructor(t){super(t)}},Sh=[0,Bt,Ft,-1,kt],cu=[0,Bt,Ft,Tt];E0.prototype.g=Ho([0,Bt,xh,[0,Bt],gh,lu,Sh,cu]);var y0=class extends we{constructor(t){super(t)}},uM=_i(456383383,y0);zt[456383383]=[0,Bt,h0];var b0=class extends we{constructor(t){super(t)}},hM=_i(476348187,b0);zt[476348187]=[0,Bt,nM];var T0=class extends we{constructor(t){super(t)}},Sd=class extends we{constructor(t){super(t)}},A0=[0,nn,-1],fM=_i(458105876,class extends we{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[Ae];return t=An(this,n),e=(function(i,r,s,a){var o=Sd;!a&&ws(i)&&(s=0|(r=i.v)[Ae]);var l=Ni(r,2);if(i=!1,l==null){if(a)return ed();l=[]}else if(l.constructor===Ui){if(!(2&l.J)||a)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[Ae])):l=[];if(a){if(!l.length)return ed();i||(i=!0,da(l))}else i&&(i=!1,ia(l),l=xm(l));return!i&&32&s&&fa(l,32),s=Vt(r,s,2,a=new Ui(l,o,pS,void 0)),i||Rr(r,s),a})(this,e,n,t),!t&&Sd&&(e.ra=!0),e}});zt[458105876]=[0,A0,OS,[!0,tr,[0,mt,-1,en]],[0,va,Tt,nn]];var Mh=class extends we{constructor(t){super(t)}},w0=_i(458105758,Mh);zt[458105758]=[0,Bt,mt,A0];var Gl=class extends we{constructor(t){super(t)}},Md=[0,kS,-1,yr],dM=class extends we{constructor(t){super(t)}},C0=class extends we{constructor(t){super(t)}},uu=[1,2];C0.prototype.g=Ho([0,uu,St,Md,St,[0,$t,Md]]);var R0=class extends we{constructor(t){super(t)}},pM=_i(443442058,R0);zt[443442058]=[0,Bt,mt,kt,Ft,en,-1,Tt,Ft],zt[514774813]=Sh;var P0=class extends we{constructor(t){super(t)}},mM=_i(516587230,P0);function hu(t,e){return e=e?e.clone():new mh,t.displayNamesLocale!==void 0?ht(e,1,ga(t.displayNamesLocale)):t.displayNamesLocale===void 0&&ht(e,1),t.maxResults!==void 0?Oi(e,2,t.maxResults):"maxResults"in t&&ht(e,2),t.scoreThreshold!==void 0?Pe(e,3,t.scoreThreshold):"scoreThreshold"in t&&ht(e,3),t.categoryAllowlist!==void 0?po(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&ht(e,4),t.categoryDenylist!==void 0?po(e,5,t.categoryDenylist):"categoryDenylist"in t&&ht(e,5),e}function L0(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function Eh(t,e=-1,n=""){return{categories:t.map((i=>({index:Bn(i,1)??0??-1,score:Lt(i,2)??0,categoryName:Jt(bt(i,3))??""??"",displayName:Jt(bt(i,4))??""??""}))),headIndex:e,headName:n}}function gM(t){const e={classifications:Fi(t,JS,1).map((n=>Eh(tt(n,r0,4)?.g()??[],Bn(n,2)??0,Jt(bt(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(iu(n)?n=Number(n):(n=pa(64,n),n=iu(n)?Number(n):String(n)),n):ma(n)?typeof n=="number"?Hu(n):um(n):void 0})(bt(t,2,void 0,void 0,ho))!=null&&(e.timestampMs=L0(bt(t,2,void 0,void 0,ho)??gm)),e}function D0(t){var e=vr(t,3,ai,_r()),n=vr(t,2,Ts,_r()),i=vr(t,1,Jt,_r()),r=vr(t,9,Jt,_r());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=tt(t,zl,4)?.l())&&(s.boundingBox={originX:Bn(e,1,qi)??0,originY:Bn(e,2,qi)??0,width:Bn(e,3,qi)??0,height:Bn(e,4,qi)??0,angle:0}),tt(t,zl,4)?.g().length)for(const a of tt(t,zl,4).g())s.keypoints.push({x:bt(a,1,void 0,qi,ai)??0,y:bt(a,2,void 0,qi,ai)??0,score:bt(a,4,void 0,qi,ai)??0,label:Jt(bt(a,3,void 0,qi))??""});return s}function Xo(t){const e=[];for(const n of Fi(t,l0,1))e.push({x:Lt(n,1)??0,y:Lt(n,2)??0,z:Lt(n,3)??0,visibility:Lt(n,4)??0});return e}function Js(t){const e=[];for(const n of Fi(t,o0,1))e.push({x:Lt(n,1)??0,y:Lt(n,2)??0,z:Lt(n,3)??0,visibility:Lt(n,4)??0});return e}function Ed(t){return Array.from(t,(e=>e>127?e-256:e))}function yd(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let qa;zt[516587230]=[0,Bt,Sh,cu,Ft],zt[518928384]=cu;const _M=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function I0(t){if(t)return!0;if(qa===void 0)try{await WebAssembly.instantiate(_M),qa=!0}catch{qa=!1}return qa}async function Xa(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await I0(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Kr=class{};function U0(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function bd(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function N0(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Re(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Td(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=N0(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function Ad(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function ti(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Xi(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}Kr.forVisionTasks=function(t,e=!1){return Xa("vision",t??Wa``,e)},Kr.forTextTasks=function(t,e=!1){return Xa("text",t??Wa``,e)},Kr.forGenAiTasks=function(t,e=!1){return Xa("genai",t??Wa``,e)},Kr.forAudioTasks=function(t,e=!1){return Xa("audio",t??Wa``,e)},Kr.isSimdSupported=function(t=!1){return I0(t)};async function vM(t,e,n,i){return t=await(async(r,s,a,o,l)=>{if(s&&await bd(s),!self.ModuleFactory||a&&(await bd(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function Hl(t,e){const n=tt(t.baseOptions,vo,1)||new vo;typeof e=="string"?(ht(n,2,ga(e)),ht(n,1)):e instanceof Uint8Array&&(ht(n,1,ku(e,!1)),ht(n,2)),Ie(t.baseOptions,0,1,n)}function wd(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function ve(t,e){t.C=Math.max(t.C,e)}function jo(t,e){t.B=new pn,wn(t.B,2,"PassThroughCalculator"),Mt(t.B,"free_memory"),$e(t.B,"free_memory_unused_out"),At(e,"free_memory"),Vn(e,t.B)}function _s(t,e){Mt(t.B,e),$e(t.B,e+"_unused_out")}function $o(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var fu=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(tt(this.baseOptions,vo,1)?.g()||tt(this.baseOptions,vo,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=tt(i.baseOptions,vd,3);if(!s){var a=s=new vd,o=new fd;Ys(a,4,ro,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new WS,Ys(r,2,ro,a)):(r=s,a=new fd,Ys(r,4,ro,a))),Ie(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Hl(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)Hl(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{Hl(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=qS(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,wd(this)}finishProcessing(){this.g.finishProcessing(),wd(this)}close(){this.B=void 0,this.g.closeGraph()}};function Zi(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}fu.prototype.close=fu.prototype.close;class xM{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Cd(t,e,n){const i=t.g;if(n=Zi(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Rd(t,e){const n=t.g,i=Zi(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Zi(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Zi(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new xM(n,i,r,s)}function yh(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function SM(t,e,n,i){return yh(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=Rd(t,!0)),n=t.u):(t.A||(t.A=Rd(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function F0(t,e,n){return yh(t,e),t=Zi(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function O0(t,e,n){yh(t,e),t.B||(t.B=Zi(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function MM(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var B0=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Zi(t.createProgram(),"Failed to create WebGL program"),this.X=Cd(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=Cd(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Ai(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function du(t){var e=Ai(t,1);if(!e){if(e=Ai(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=vs(t);var n=bh(t);if(O0(n,i,k0(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function k0(t){let e=Ai(t,2);if(!e){const n=vs(t);e=z0(t);const i=du(t),r=V0(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),pu(t)}return e}function vs(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Zi(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function V0(t){if(t=vs(t),!ja)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))ja=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");ja=t.R16F}return ja}function bh(t){return t.l||(t.l=new B0),t.l}function z0(t){const e=vs(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ai(t,2);return n||(n=F0(bh(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function pu(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var ja,jt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Pd===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Ai(this,0)}ka(){return!!Ai(this,1)}R(){return!!Ai(this,2)}ja(){return(e=Ai(t=this,0))||(e=du(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return du(this)}N(){return k0(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=vs(this),r=bh(this);i.activeTexture(i.TEXTURE1),n=F0(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=V0(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),O0(r,i,n),SM(r,i,!1,(()=>{z0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),pu(this)})),MM(r),pu(this)}}t.push(n)}return new jt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&vs(this).deleteTexture(Ai(this,2)),Pd=-1}};jt.prototype.close=jt.prototype.close,jt.prototype.clone=jt.prototype.clone,jt.prototype.getAsWebGLTexture=jt.prototype.N,jt.prototype.getAsFloat32Array=jt.prototype.ia,jt.prototype.getAsUint8Array=jt.prototype.ja,jt.prototype.hasWebGLTexture=jt.prototype.R,jt.prototype.hasFloat32Array=jt.prototype.ka,jt.prototype.hasUint8Array=jt.prototype.Fa;var Pd=250;function Kn(...t){return t.map((([e,n])=>({start:e,end:n})))}const EM=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((Ld=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:U0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Re(this,i||"input_audio",(s=>{Re(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){ti(this,"__graph_config__",(e=>{t(e)})),Re(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Re(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){Re(this,e,(i=>{const[r,s]=Td(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){Re(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Re(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Re(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Re(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Re(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Re(this,e,(i=>{Re(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){Re(this,e,(i=>{Ad(this,Object.keys(t),(r=>{Ad(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Re(this,n,(r=>{Re(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){Re(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Re(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){Re(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){Re(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){Re(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){Re(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){Re(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Re(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){Re(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Re(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Re(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Re(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Re(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Re(this,e,(n=>{Re(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Re(this,n,(i=>{Re(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){Re(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Re(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Re(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Re(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Re(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Re(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Re(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){ti(this,t,e),Re(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){Xi(this,t,e),Re(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){ti(this,t,e),Re(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){Xi(this,t,e),Re(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){ti(this,t,e),Re(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){Xi(this,t,e),Re(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){ti(this,t,e),Re(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){Xi(this,t,e),Re(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){ti(this,t,e),Re(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){Xi(this,t,e),Re(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){ti(this,t,e),Re(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){Xi(this,t,e),Re(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){ti(this,t,e),Re(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){Xi(this,t,e),Re(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ti(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),Re(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Ld{get ga(){return this.i}pa(t,e,n){Re(this,e,(i=>{const[r,s]=Td(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(t,e){ti(this,t,e),Re(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){Xi(this,t,e),Re(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Ld,Jn=class extends EM{};async function Je(t,e,n){return(async function(i,r,s,a){return vM(i,r,s,a)})(t,n.canvas??(U0()?void 0:document.createElement("canvas")),e,n)}function G0(t,e,n,i){if(t.U){const s=new c0;if(n?.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Pe(s,1,(r.left+r.right)/2),Pe(s,2,(r.top+r.bottom)/2),Pe(s,4,r.right-r.left),Pe(s,3,r.bottom-r.top)}else Pe(s,1,.5),Pe(s,2,.5),Pe(s,4,1),Pe(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Pe(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=N0(e);n=Lt(s,3)*o/a,r=Lt(s,4)*a/o,Pe(s,4,n),Pe(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function Zn(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");G0(t,e,n,t.C+1)}function vi(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");G0(t,e,n,i)}function xs(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new jt([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var Cn=class extends fu{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new B0}l(t,e=!0){if("runningMode"in t&&ht(this.baseOptions,2,sa(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Cn.prototype.close=Cn.prototype.close;var In=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ie(t=this.h=new qo,0,1,e=new Pt),Pe(this.h,2,.5),Pe(this.h,3,.3)}get baseOptions(){return tt(this.h,Pt,1)}set baseOptions(t){Ie(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Pe(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Pe(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},Zn(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},vi(this,t,n,e),this.j}m(){var t=new Pn;At(t,"image_in"),At(t,"norm_rect_in"),nt(t,"detections");const e=new Rn;gi(e,iM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect_in"),$e(n,"DETECTIONS:detections"),n.o(e),Vn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=a0(s),this.j.detections.push(D0(i));ve(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{ve(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};In.prototype.detectForVideo=In.prototype.G,In.prototype.detect=In.prototype.F,In.prototype.setOptions=In.prototype.o,In.createFromModelPath=async function(t,e){return Je(In,t,{baseOptions:{modelAssetPath:e}})},In.createFromModelBuffer=function(t,e){return Je(In,t,{baseOptions:{modelAssetBuffer:e}})},In.createFromOptions=function(t,e){return Je(In,t,e)};var Th=Kn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Ah=Kn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),wh=Kn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),H0=Kn([474,475],[475,476],[476,477],[477,474]),Ch=Kn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Rh=Kn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),W0=Kn([469,470],[470,471],[471,472],[472,469]),Ph=Kn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),q0=[...Th,...Ah,...wh,...Ch,...Rh,...Ph],X0=Kn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Dd(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Et=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ie(t=this.h=new p0,0,1,e=new Pt),this.A=new d0,Ie(this.h,0,3,this.A),this.u=new qo,Ie(this.h,0,2,this.u),Oi(this.u,4,1),Pe(this.u,2,.5),Pe(this.A,2,.5),Pe(this.h,4,.5)}get baseOptions(){return tt(this.h,Pt,1)}set baseOptions(t){Ie(this.h,0,1,t)}o(t){return"numFaces"in t&&Oi(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Pe(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Pe(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return Dd(this),Zn(this,t,e),this.j}G(t,e,n){return Dd(this),vi(this,t,n,e),this.j}m(){var t=new Pn;At(t,"image_in"),At(t,"norm_rect"),nt(t,"face_landmarks");const e=new Rn;gi(e,sM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),$e(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Vn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=xa(s),this.j.faceLandmarks.push(Xo(i));ve(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{ve(this,i)})),this.outputFaceBlendshapes&&(nt(t,"blendshapes"),$e(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Wo(s),this.j.faceBlendshapes.push(Eh(i.g()??[]));ve(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{ve(this,i)}))),this.outputFacialTransformationMatrixes&&(nt(t,"face_geometry"),$e(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=tt(i=rM(s),YS,2))&&this.j.facialTransformationMatrixes.push({rows:Bn(i,1)??0??0,columns:Bn(i,2)??0??0,data:vr(i,3,ai,_r()).slice()??[]});ve(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{ve(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Et.prototype.detectForVideo=Et.prototype.G,Et.prototype.detect=Et.prototype.F,Et.prototype.setOptions=Et.prototype.o,Et.createFromModelPath=function(t,e){return Je(Et,t,{baseOptions:{modelAssetPath:e}})},Et.createFromModelBuffer=function(t,e){return Je(Et,t,{baseOptions:{modelAssetBuffer:e}})},Et.createFromOptions=function(t,e){return Je(Et,t,e)},Et.FACE_LANDMARKS_LIPS=Th,Et.FACE_LANDMARKS_LEFT_EYE=Ah,Et.FACE_LANDMARKS_LEFT_EYEBROW=wh,Et.FACE_LANDMARKS_LEFT_IRIS=H0,Et.FACE_LANDMARKS_RIGHT_EYE=Ch,Et.FACE_LANDMARKS_RIGHT_EYEBROW=Rh,Et.FACE_LANDMARKS_RIGHT_IRIS=W0,Et.FACE_LANDMARKS_FACE_OVAL=Ph,Et.FACE_LANDMARKS_CONTOURS=q0,Et.FACE_LANDMARKS_TESSELATION=X0;var Lh=Kn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Id(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Ud(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Nd(t,e=!0){const n=[];for(const r of t){var i=Wo(r);t=[];for(const s of i.g())i=e&&Bn(s,1)!=null?Bn(s,1)??0:-1,t.push({score:Lt(s,2)??0,index:i,categoryName:Jt(bt(s,3))??""??"",displayName:Jt(bt(s,4))??""??""});n.push(t)}return n}var xn=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ie(t=this.j=new _0,0,1,e=new Pt),this.u=new vh,Ie(this.j,0,2,this.u),this.D=new _h,Ie(this.u,0,3,this.D),this.A=new g0,Ie(this.u,0,2,this.A),this.h=new aM,Ie(this.j,0,3,this.h),Pe(this.A,2,.5),Pe(this.u,4,.5),Pe(this.D,2,.5)}get baseOptions(){return tt(this.j,Pt,1)}set baseOptions(t){Ie(this.j,0,1,t)}o(t){if(Oi(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new jr,n=e,i=hu(t.cannedGesturesClassifierOptions,tt(this.h,jr,3)?.l());Ie(n,0,2,i),Ie(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&tt(this.h,jr,3)?.g();return t.customGesturesClassifierOptions?(Ie(n=e=new jr,0,2,i=hu(t.customGesturesClassifierOptions,tt(this.h,jr,4)?.l())),Ie(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&tt(this.h,jr,4)?.g(),this.l(t)}Ha(t,e){return Id(this),Zn(this,t,e),Ud(this)}Ia(t,e,n){return Id(this),vi(this,t,n,e),Ud(this)}m(){var t=new Pn;At(t,"image_in"),At(t,"norm_rect"),nt(t,"hand_gestures"),nt(t,"hand_landmarks"),nt(t,"world_hand_landmarks"),nt(t,"handedness");const e=new Rn;gi(e,oM,this.j);const n=new pn;wn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),$e(n,"HAND_GESTURES:hand_gestures"),$e(n,"LANDMARKS:hand_landmarks"),$e(n,"WORLD_LANDMARKS:world_hand_landmarks"),$e(n,"HANDEDNESS:handedness"),n.o(e),Vn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=xa(s);const a=[];for(const o of Fi(i,l0,1))a.push({x:Lt(o,1)??0,y:Lt(o,2)??0,z:Lt(o,3)??0,visibility:Lt(o,4)??0});this.landmarks.push(a)}ve(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ve(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=ts(s);const a=[];for(const o of Fi(i,o0,1))a.push({x:Lt(o,1)??0,y:Lt(o,2)??0,z:Lt(o,3)??0,visibility:Lt(o,4)??0});this.worldLandmarks.push(a)}ve(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ve(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...Nd(i,!1)),ve(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{ve(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...Nd(i)),ve(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{ve(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Fd(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}xn.prototype.recognizeForVideo=xn.prototype.Ia,xn.prototype.recognize=xn.prototype.Ha,xn.prototype.setOptions=xn.prototype.o,xn.createFromModelPath=function(t,e){return Je(xn,t,{baseOptions:{modelAssetPath:e}})},xn.createFromModelBuffer=function(t,e){return Je(xn,t,{baseOptions:{modelAssetBuffer:e}})},xn.createFromOptions=function(t,e){return Je(xn,t,e)},xn.HAND_CONNECTIONS=Lh;var Sn=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ie(t=this.h=new vh,0,1,e=new Pt),this.u=new _h,Ie(this.h,0,3,this.u),this.j=new g0,Ie(this.h,0,2,this.j),Oi(this.j,3,1),Pe(this.j,2,.5),Pe(this.u,2,.5),Pe(this.h,4,.5)}get baseOptions(){return tt(this.h,Pt,1)}set baseOptions(t){Ie(this.h,0,1,t)}o(t){return"numHands"in t&&Oi(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Zn(this,t,e),Fd(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],vi(this,t,n,e),Fd(this)}m(){var t=new Pn;At(t,"image_in"),At(t,"norm_rect"),nt(t,"hand_landmarks"),nt(t,"world_hand_landmarks"),nt(t,"handedness");const e=new Rn;gi(e,lM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),$e(n,"LANDMARKS:hand_landmarks"),$e(n,"WORLD_LANDMARKS:world_hand_landmarks"),$e(n,"HANDEDNESS:handedness"),n.o(e),Vn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=xa(s),this.landmarks.push(Xo(i));ve(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ve(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=ts(s),this.worldLandmarks.push(Js(i));ve(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ve(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const l of i){i=Wo(l);const c=[];for(const u of i.g())c.push({score:Lt(u,2)??0,index:Bn(u,1)??0??-1,categoryName:Jt(bt(u,3))??""??"",displayName:Jt(bt(u,4))??""??""});o.push(c)}a.call(s,...o),ve(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{ve(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Sn.prototype.detectForVideo=Sn.prototype.G,Sn.prototype.detect=Sn.prototype.F,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=function(t,e){return Je(Sn,t,{baseOptions:{modelAssetPath:e}})},Sn.createFromModelBuffer=function(t,e){return Je(Sn,t,{baseOptions:{modelAssetBuffer:e}})},Sn.createFromOptions=function(t,e){return Je(Sn,t,e)},Sn.HAND_CONNECTIONS=Lh;var j0=Kn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Od(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Bd(t){try{if(!t.D)return t.h;t.D(t.h)}finally{$o(t)}}function $a(t,e){t=xa(t),e.push(Xo(t))}var xt=class extends Cn{constructor(t,e){super(new Jn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ie(t=this.j=new E0,0,1,e=new Pt),this.I=new _h,Ie(this.j,0,2,this.I),this.W=new cM,Ie(this.j,0,3,this.W),this.u=new qo,Ie(this.j,0,4,this.u),this.O=new d0,Ie(this.j,0,5,this.O),this.A=new S0,Ie(this.j,0,6,this.A),this.M=new M0,Ie(this.j,0,7,this.M),Pe(this.u,2,.5),Pe(this.u,3,.3),Pe(this.O,2,.5),Pe(this.A,2,.5),Pe(this.A,3,.3),Pe(this.M,2,.5),Pe(this.I,2,.5)}get baseOptions(){return tt(this.j,Pt,1)}set baseOptions(t){Ie(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Pe(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Pe(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Pe(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Pe(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Pe(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Pe(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Pe(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,Od(this),Zn(this,t,i),Bd(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Od(this),vi(this,t,r,e),Bd(this)}m(){var t=new Pn;At(t,"input_frames_image"),nt(t,"pose_landmarks"),nt(t,"pose_world_landmarks"),nt(t,"face_landmarks"),nt(t,"left_hand_landmarks"),nt(t,"left_hand_world_landmarks"),nt(t,"right_hand_landmarks"),nt(t,"right_hand_world_landmarks");const e=new Rn,n=new ld;wn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))ht(r,2,Do(s,0,aa));else{if(!(typeof s=="string"||s instanceof ui||Ou(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");ji(r,2,ku(s,!1),Tr())}})(n,this.j.g());const i=new pn;wn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Qu(i,8,ld,n),Mt(i,"IMAGE:input_frames_image"),$e(i,"POSE_LANDMARKS:pose_landmarks"),$e(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),$e(i,"FACE_LANDMARKS:face_landmarks"),$e(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),$e(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),$e(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),$e(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Vn(t,i),jo(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{$a(r,this.h.poseLandmarks),ve(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{ve(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=ts(r),a.push(Js(r)),ve(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{ve(this,r)})),this.outputPoseSegmentationMasks&&($e(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),_s(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[xs(this,r,!0,!this.D)],ve(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],ve(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{$a(r,this.h.faceLandmarks),ve(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{ve(this,r)})),this.outputFaceBlendshapes&&(nt(t,"extra_blendshapes"),$e(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Wo(r),a.push(Eh(r.g()??[]))),ve(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{ve(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{$a(r,this.h.leftHandLandmarks),ve(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{ve(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=ts(r),a.push(Js(r)),ve(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{ve(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{$a(r,this.h.rightHandLandmarks),ve(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{ve(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=ts(r),a.push(Js(r)),ve(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{ve(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};xt.prototype.detectForVideo=xt.prototype.G,xt.prototype.detect=xt.prototype.F,xt.prototype.setOptions=xt.prototype.o,xt.createFromModelPath=function(t,e){return Je(xt,t,{baseOptions:{modelAssetPath:e}})},xt.createFromModelBuffer=function(t,e){return Je(xt,t,{baseOptions:{modelAssetBuffer:e}})},xt.createFromOptions=function(t,e){return Je(xt,t,e)},xt.HAND_CONNECTIONS=Lh,xt.POSE_CONNECTIONS=j0,xt.FACE_LANDMARKS_LIPS=Th,xt.FACE_LANDMARKS_LEFT_EYE=Ah,xt.FACE_LANDMARKS_LEFT_EYEBROW=wh,xt.FACE_LANDMARKS_LEFT_IRIS=H0,xt.FACE_LANDMARKS_RIGHT_EYE=Ch,xt.FACE_LANDMARKS_RIGHT_EYEBROW=Rh,xt.FACE_LANDMARKS_RIGHT_IRIS=W0,xt.FACE_LANDMARKS_FACE_OVAL=Ph,xt.FACE_LANDMARKS_CONTOURS=q0,xt.FACE_LANDMARKS_TESSELATION=X0;var Un=class extends Cn{constructor(t,e){super(new Jn(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ie(t=this.h=new y0,0,1,e=new Pt)}get baseOptions(){return tt(this.h,Pt,1)}set baseOptions(t){Ie(this.h,0,1,t)}o(t){return Ie(this.h,0,2,hu(t,tt(this.h,mh,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},Zn(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},vi(this,t,n,e),this.j}m(){var t=new Pn;At(t,"input_image"),At(t,"norm_rect"),nt(t,"classifications");const e=new Rn;gi(e,uM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Mt(n,"IMAGE:input_image"),Mt(n,"NORM_RECT:norm_rect"),$e(n,"CLASSIFICATIONS:classifications"),n.o(e),Vn(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=gM(ZS(i)),ve(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{ve(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Un.prototype.classifyForVideo=Un.prototype.ta,Un.prototype.classify=Un.prototype.sa,Un.prototype.setOptions=Un.prototype.o,Un.createFromModelPath=function(t,e){return Je(Un,t,{baseOptions:{modelAssetPath:e}})},Un.createFromModelBuffer=function(t,e){return Je(Un,t,{baseOptions:{modelAssetBuffer:e}})},Un.createFromOptions=function(t,e){return Je(Un,t,e)};var Mn=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!0),this.h=new b0,this.embeddings={embeddings:[]},Ie(t=this.h,0,1,e=new Pt)}get baseOptions(){return tt(this.h,Pt,1)}set baseOptions(t){Ie(this.h,0,1,t)}o(t){var e=this.h,n=tt(this.h,_d,2);return n=n?n.clone():new _d,t.l2Normalize!==void 0?ht(n,1,sa(t.l2Normalize)):"l2Normalize"in t&&ht(n,1),t.quantize!==void 0?ht(n,2,sa(t.quantize)):"quantize"in t&&ht(n,2),Ie(e,0,2,n),this.l(t)}za(t,e){return Zn(this,t,e),this.embeddings}Aa(t,e,n){return vi(this,t,n,e),this.embeddings}m(){var t=new Pn;At(t,"image_in"),At(t,"norm_rect"),nt(t,"embeddings_out");const e=new Rn;gi(e,hM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),$e(n,"EMBEDDINGS:embeddings_out"),n.o(e),Vn(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=tM(i),this.embeddings=(function(s){return{embeddings:Fi(s,eM,1).map((a=>{const o={headIndex:Bn(a,3)??0??-1,headName:Jt(bt(a,4))??""??""};var l=a.v;return Mm(l,0|l[Ae],gd,Bl(a,1))!==void 0?(a=vr(a=tt(a,gd,Bl(a,1),void 0),1,ai,_r()),o.floatEmbedding=a.slice()):(l=new Uint8Array(0),o.quantizedEmbedding=tt(a,QS,Bl(a,2),void 0)?.na()?.h()??l),o})),timestampMs:L0(bt(s,2,void 0,void 0,ho)??gm)}})(i),ve(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{ve(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Mn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=yd(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=yd(Ed(t.quantizedEmbedding),Ed(e.quantizedEmbedding))}return t},Mn.prototype.embedForVideo=Mn.prototype.Aa,Mn.prototype.embed=Mn.prototype.za,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(t,e){return Je(Mn,t,{baseOptions:{modelAssetPath:e}})},Mn.createFromModelBuffer=function(t,e){return Je(Mn,t,{baseOptions:{modelAssetBuffer:e}})},Mn.createFromOptions=function(t,e){return Je(Mn,t,e)};var mu=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function yM(t){const e=(function(n){return Fi(n,pn,1)})(t.ca()).filter((n=>(Jt(bt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(tt(e[0],Rn,7)?.j()?.g()??new Map).forEach(((n,i)=>{t.u[Number(i)]=Jt(bt(n,1))??""}))}function kd(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Vd(t){try{const e=new mu(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{$o(t)}}mu.prototype.close=mu.prototype.close;var fn=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Mh,this.A=new T0,Ie(this.h,0,3,this.A),Ie(t=this.h,0,1,e=new Pt)}get baseOptions(){return tt(this.h,Pt,1)}set baseOptions(t){Ie(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ht(this.h,2,ga(t.displayNamesLocale)):"displayNamesLocale"in t&&ht(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){yM(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,kd(this),Zn(this,t,i),Vd(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,kd(this),vi(this,t,r,e),Vd(this)}Da(){return this.u}m(){var t=new Pn;At(t,"image_in"),At(t,"norm_rect");const e=new Rn;gi(e,w0,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),n.o(e),Vn(t,n),jo(this,t),this.outputConfidenceMasks&&(nt(t,"confidence_masks"),$e(n,"CONFIDENCE_MASKS:confidence_masks"),_s(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>xs(this,s,!0,!this.j))),ve(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ve(this,i)}))),this.outputCategoryMask&&(nt(t,"category_mask"),$e(n,"CATEGORY_MASK:category_mask"),_s(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=xs(this,i,!1,!this.j),ve(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ve(this,i)}))),nt(t,"quality_scores"),$e(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,ve(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ve(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};fn.prototype.getLabels=fn.prototype.Da,fn.prototype.segmentForVideo=fn.prototype.La,fn.prototype.segment=fn.prototype.segment,fn.prototype.setOptions=fn.prototype.o,fn.createFromModelPath=function(t,e){return Je(fn,t,{baseOptions:{modelAssetPath:e}})},fn.createFromModelBuffer=function(t,e){return Je(fn,t,{baseOptions:{modelAssetBuffer:e}})},fn.createFromOptions=function(t,e){return Je(fn,t,e)};var gu=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};gu.prototype.close=gu.prototype.close;var ni=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Mh,this.u=new T0,Ie(this.h,0,3,this.u),Ie(t=this.h,0,1,e=new Pt)}get baseOptions(){return tt(this.h,Pt,1)}set baseOptions(t){Ie(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new C0,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new Gl;ji(s,3,sa(!0),!1),ji(s,1,$s(e.keypoint.x),0),ji(s,2,$s(e.keypoint.y),0),Ys(i,1,uu,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new dM;for(s of e.scribble)ji(e=new Gl,3,sa(!0),!1),ji(e,1,$s(s.x),0),ji(e,2,$s(s.y),0),Qu(o,1,Gl,e);Ys(i,2,uu,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Zn(this,t,r);e:{try{const o=new gu(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break e}this.j(o)}finally{$o(this)}a=void 0}return a}m(){var t=new Pn;At(t,"image_in"),At(t,"roi_in"),At(t,"norm_rect_in");const e=new Rn;gi(e,w0,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Mt(n,"IMAGE:image_in"),Mt(n,"ROI:roi_in"),Mt(n,"NORM_RECT:norm_rect_in"),n.o(e),Vn(t,n),jo(this,t),this.outputConfidenceMasks&&(nt(t,"confidence_masks"),$e(n,"CONFIDENCE_MASKS:confidence_masks"),_s(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>xs(this,s,!0,!this.j))),ve(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ve(this,i)}))),this.outputCategoryMask&&(nt(t,"category_mask"),$e(n,"CATEGORY_MASK:category_mask"),_s(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=xs(this,i,!1,!this.j),ve(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ve(this,i)}))),nt(t,"quality_scores"),$e(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,ve(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ve(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ni.prototype.segment=ni.prototype.segment,ni.prototype.setOptions=ni.prototype.o,ni.createFromModelPath=function(t,e){return Je(ni,t,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(t,e){return Je(ni,t,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(t,e){return Je(ni,t,e)};var Nn=class extends Cn{constructor(t,e){super(new Jn(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ie(t=this.h=new R0,0,1,e=new Pt)}get baseOptions(){return tt(this.h,Pt,1)}set baseOptions(t){Ie(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ht(this.h,2,ga(t.displayNamesLocale)):"displayNamesLocale"in t&&ht(this.h,2),t.maxResults!==void 0?Oi(this.h,3,t.maxResults):"maxResults"in t&&ht(this.h,3),t.scoreThreshold!==void 0?Pe(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&ht(this.h,4),t.categoryAllowlist!==void 0?po(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&ht(this.h,5),t.categoryDenylist!==void 0?po(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&ht(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},Zn(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},vi(this,t,n,e),this.j}m(){var t=new Pn;At(t,"input_frame_gpu"),At(t,"norm_rect"),nt(t,"detections");const e=new Rn;gi(e,pM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Mt(n,"IMAGE:input_frame_gpu"),Mt(n,"NORM_RECT:norm_rect"),$e(n,"DETECTIONS:detections"),n.o(e),Vn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=a0(s),this.j.detections.push(D0(i));ve(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{ve(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Nn.prototype.detectForVideo=Nn.prototype.G,Nn.prototype.detect=Nn.prototype.F,Nn.prototype.setOptions=Nn.prototype.o,Nn.createFromModelPath=async function(t,e){return Je(Nn,t,{baseOptions:{modelAssetPath:e}})},Nn.createFromModelBuffer=function(t,e){return Je(Nn,t,{baseOptions:{modelAssetBuffer:e}})},Nn.createFromOptions=function(t,e){return Je(Nn,t,e)};var _u=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function zd(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Gd(t){try{const e=new _u(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{$o(t)}}_u.prototype.close=_u.prototype.close;var En=class extends Cn{constructor(t,e){super(new Jn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ie(t=this.h=new P0,0,1,e=new Pt),this.A=new M0,Ie(this.h,0,3,this.A),this.j=new S0,Ie(this.h,0,2,this.j),Oi(this.j,4,1),Pe(this.j,2,.5),Pe(this.A,2,.5),Pe(this.h,4,.5)}get baseOptions(){return tt(this.h,Pt,1)}set baseOptions(t){Ie(this.h,0,1,t)}o(t){return"numPoses"in t&&Oi(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Pe(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Pe(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,zd(this),Zn(this,t,i),Gd(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,zd(this),vi(this,t,r,e),Gd(this)}m(){var t=new Pn;At(t,"image_in"),At(t,"norm_rect"),nt(t,"normalized_landmarks"),nt(t,"world_landmarks"),nt(t,"segmentation_masks");const e=new Rn;gi(e,mM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),$e(n,"NORM_LANDMARKS:normalized_landmarks"),$e(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Vn(t,n),jo(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=xa(s),this.landmarks.push(Xo(i));ve(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],ve(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=ts(s),this.worldLandmarks.push(Js(i));ve(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],ve(this,i)})),this.outputSegmentationMasks&&($e(n,"SEGMENTATION_MASK:segmentation_masks"),_s(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>xs(this,s,!0,!this.u))),ve(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],ve(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};En.prototype.detectForVideo=En.prototype.G,En.prototype.detect=En.prototype.F,En.prototype.setOptions=En.prototype.o,En.createFromModelPath=function(t,e){return Je(En,t,{baseOptions:{modelAssetPath:e}})},En.createFromModelBuffer=function(t,e){return Je(En,t,{baseOptions:{modelAssetBuffer:e}})},En.createFromOptions=function(t,e){return Je(En,t,e)},En.POSE_CONNECTIONS=j0;function bM(t){return t==="arriere"?"arriere":"avant"}function TM(t){return t==="avant"?"arriere":"avant"}function AM(t){return{video:{facingMode:{ideal:t==="arriere"?"environment":"user"}},audio:!1}}function wM(t){return t==="avant"}function CM(){return"Je vais allumer ma caméra pour te voir et réagir avec toi. Rien n'est enregistré ni envoyé : tout reste dans ton appareil. Tu peux l'éteindre quand tu veux."}const $0="nath.camera.face";function RM(t){return bM(t.getItem($0))}function PM(t,e){t.setItem($0,e)}const LM="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",DM="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm";let Wl=null;function IM(){return Wl||(Wl=Kr.forVisionTasks(DM).then(t=>Et.createFromOptions(t,{baseOptions:{modelAssetPath:LM},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!0}))),Wl}async function UM(t,e,n){const i=await IM();let r=null,s=!0,a=performance.now();const o=async c=>{r&&r.getTracks().forEach(u=>u.stop()),r=await navigator.mediaDevices.getUserMedia(AM(c)),t.srcObject=r,t.style.transform=wM(c)?"scaleX(-1)":"none",await t.play()},l=()=>{if(s){if(t.readyState>=2){const c=performance.now(),h=i.detectForVideo(t,c).faceBlendshapes?.[0]?.categories;if(h){a=c;const f=p=>h.find(_=>_.categoryName===p)?.score??0;n({smile:(f("mouthSmileLeft")+f("mouthSmileRight"))/2,browDown:(f("browDownLeft")+f("browDownRight"))/2,eyeBlink:(f("eyeBlinkLeft")+f("eyeBlinkRight"))/2,jawOpen:f("jawOpen")})}else c-a>2e3&&n({smile:0,browDown:0,eyeBlink:0,jawOpen:0})}requestAnimationFrame(l)}};return await o(e),requestAnimationFrame(l),{eteindre(){s=!1,r&&(r.getTracks().forEach(c=>c.stop()),r=null),t.srcObject=null},async basculer(c){await o(c)}}}class NM{constructor(e,n,i,r){this.video=e,this.storage=n,this.onShapes=i,this.onEtat=r,this.face=RM(n)}video;storage;onShapes;onEtat;manege=null;face;get ouverte(){return this.manege!=null}get faceCourante(){return this.face}async basculer(){return this.manege?(this.manege.eteindre(),this.manege=null,this.onEtat(!1),!1):(this.manege=await UM(this.video,this.face,this.onShapes),this.onEtat(!0),!0)}async basculerFace(){return this.face=TM(this.face),PM(this.storage,this.face),this.manege&&await this.manege.basculer(this.face),this.face}}function FM(t){const e={joie:t.smile*1.2,tension:t.browDown*1+(t.eyeBlink<.2?.1:0),tristesse:t.eyeBlink*.8+t.jawOpen*.2-t.smile,calme:.15};return Object.entries(e).sort((n,i)=>i[1]-n[1])[0][0]}function OM(t=20){let e="calme",n=null,i=0;return r=>r===e?(n=null,i=0,e):(r===n?i++:(n=r,i=1),i>=t&&(e=r,n=null,i=0),e)}function BM(t){const e=t.reduce((n,i)=>n+i,0)/t.length;return t.map(n=>n-e)}function kM(t,e){return t.map((n,i)=>{const r=Math.max(0,i-e+1);return t.slice(r,i+1).reduce((s,a)=>s+a,0)/(i+1-r)})}function VM(t){const e=[];for(let n=1;n<t.length;n++)t[n-1]<=0&&t[n]>0&&e.push(n);return e}function zM(t,e){if(t.length<Math.floor(e*4))return null;const n=BM(t.slice(-Math.floor(e*10))),i=kM(n,5),r=VM(i);if(r.length<3)return null;const s=(r[r.length-1]-r[0])/(r.length-1),a=60*e/s;return a>=30&&a<=180?a:null}function GM(t,e){if(t.readyState<2)return null;const n=24,i=24;e.drawImage(t,t.videoWidth*.35,t.videoHeight*.35,n,i,0,0,n,i);const r=e.getImageData(0,0,n,i).data;let s=0;for(let a=0;a<r.length;a+=4)s+=.299*r[a]+.587*r[a+1]+.114*r[a+2];return s/(n*i)}function Hd(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}const Wd=["Brume","Aube","Zéphyr","Nimbus","Cirrus","Écho","Lueur","Souffle","Voile","Nébuleuse"],qd=["dorée","bleue","polaire","douce","haute","sereine","vague","claire"];function ql(t){return"#"+(t&16777215).toString(16).padStart(6,"0")}function HM(t){const e=Hd(t),n=Hd(t+"|2");return{nom:`${Wd[e%Wd.length]} ${qd[n%qd.length]}`,palette:[ql(1056832+(e&3092287)),ql(6320272+(e>>8&4144975)),ql(13689072+(e>>16&986895))],musiqueSeed:n}}function WM(t,e){const n=(i,r)=>{const s=t.getBoundingClientRect();e((i-s.left)/s.width,1-(r-s.top)/s.height)};t.addEventListener("pointermove",i=>n(i.clientX,i.clientY)),t.addEventListener("touchmove",i=>{const r=i.touches[0];r&&n(r.clientX,r.clientY)},{passive:!0})}function qM(t){window.addEventListener("deviceorientation",e=>{e.gamma!=null&&e.beta!=null&&t(Math.max(-1,Math.min(1,e.gamma/45)),Math.max(-1,Math.min(1,(e.beta-45)/45)))})}const Xd={calme:[0,2,4,7,9],joie:[0,4,7,11],tristesse:[0,3,5,8,10],tension:[0,1,6,8,11]};function XM(t){return Xd[t]??Xd.calme}function jM(t,e,n){const i=Math.imul(t^Math.imul(e+1,2654435761),2246822507)>>>0,r=XM(n),s=r[i%r.length];return{midi:48+12*((i>>>8)%2)+s,duree:1.5+(i>>>16)%20/10}}function jd(t){return 440*Math.pow(2,(t-69)/12)}let qn=null,Zs=null,$M=0,Y0=0,K0="calme",J0=0;function $d(){if(!qn||!Zs)return;const t=jM(Y0,$M++,K0),e=qn.currentTime,n=qn.createGain();n.connect(Zs);const i=.16+J0*.1;n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(i,e+Math.min(1.2,t.duree*.4)),n.gain.exponentialRampToValueAtTime(1e-4,e+t.duree+1.5);const r=qn.createOscillator();r.type="triangle",r.frequency.value=jd(t.midi);const s=qn.createOscillator();s.type="sine",s.frequency.value=jd(t.midi-12);const a=qn.createGain();a.gain.value=.5,s.connect(a),a.connect(n),r.connect(n),r.start(e),s.start(e),r.stop(e+t.duree+1.6),s.stop(e+t.duree+1.6)}function YM(t){if(qn)return!0;try{qn=new AudioContext,Y0=t>>>0,Zs=qn.createGain(),Zs.gain.value=.5;const e=qn.createBiquadFilter();return e.type="lowpass",e.frequency.value=1200,e.Q.value=.4,Zs.connect(e),e.connect(qn.destination),window.setInterval($d,2600),$d(),!0}catch{return!1}}function KM(t){K0=t}function JM(t){J0=Math.max(0,Math.min(1,t))}const vu={zero:0,un:1,une:1,deux:2,trois:3,quatre:4,cinq:5,six:6,sept:7,huit:8,neuf:9,dix:10,onze:11,douze:12,treize:13,quatorze:14,quinze:15,seize:16,"dix-sept":17,"dix-huit":18,"dix-neuf":19,vingt:20,cent:100,mille:1e3},ZM=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],QM=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],Yo=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),Xl={plus:"plus",additionne:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"},eE=new Set(["si","combien","puis","alors","donne","calcule","calcul","fais","fait","vaut","egal","est","ce","que","quoi","resultat","reponse","nombre","montant"]),tE=/\d+(?:[.,]\d+)?|dix-(?:sept|huit|neuf)|[a-z]+|[()+*/-]/g;function nE(t){const e=Yo(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois "),n=[];let i=[];for(const r of e.match(tE)??[]){let s=null;if(/^\d+(?:[.,]\d+)?$/.test(r))s={t:"nb",v:parseFloat(r.replace(",","."))};else if(Object.hasOwn(vu,r))s={t:"nb",v:vu[r]};else if(r==="plus"||r==="+")s={t:"op",v:Xl[r]??"plus"};else if(r==="moins"||r==="-")s={t:"op",v:"moins"};else if(r==="fois"||r==="multiplie"||r==="x"||r==="*")s={t:"op",v:"fois"};else if(r==="divise"||r==="/")s={t:"op",v:"divise"};else if(Xl[r])s={t:"op",v:Xl[r]};else if(r==="(")s={t:"ouv"};else if(r===")")s={t:"fer"};else if(eE.has(r))continue;s?i.push(s):i.length&&(n.push(i),i=[])}return i.length&&n.push(i),n}function Yd(t,e){const n=t[e.i];if(!n)return e.echoue=!0,null;if(n.t==="nb")return e.i++,n.v;if(n.t==="ouv"){e.i++;const i=Z0(t,e);if(e.echoue)return null;const r=t[e.i];return!r||r.t!=="fer"?(e.echoue=!0,null):(e.i++,i)}return e.echoue=!0,null}function Kd(t,e){let n=Yd(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="fois"&&i.v!=="divise")break;e.i++,e.ops++;const r=Yd(t,e);if(e.echoue||r==null)return null;if(i.v==="fois")n=n*r;else{if(r===0)return e.echoue=!0,null;n=n/r}}return n}function Z0(t,e){let n=Kd(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="plus"&&i.v!=="moins")break;e.i++,e.ops++;const r=Kd(t,e);if(e.echoue||r==null)return null;n=i.v==="plus"?n+r:n-r}return n}function Q0(t){for(let e of nE(t)){if(e.length>=2&&e[0].t==="op"&&e[1].t==="nb"&&(e=e.slice(1)),!e.some(r=>r.t==="op"))continue;const n={i:0,ops:0,echoue:!1},i=Z0(e,n);if(!n.echoue&&n.ops>0&&n.i===e.length&&i!=null&&Number.isFinite(i))return i}return null}function eg(t,e){const i=Yo(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois ").replace(/\s+/g," ").trim().match(/^(?:(?:et|puis)\s+)*(plus|moins|ajoute|retire|fois|multiplie|divise|x)\s+(\d+(?:[.,]\d+)?|[a-z-]+)\s*[=.!?\s]*$/);if(!i)return null;const r=/^\d/.test(i[2])?parseFloat(i[2].replace(",",".")):vu[i[2]];if(r==null||Number.isNaN(r))return null;const a={plus:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"}[i[1]];return a==="fois"?e*r:a==="plus"?e+r:a==="moins"?e-r:r===0?null:e/r}function Jd(t){const e=Math.round(t*100)/100;return Number.isInteger(e)?String(e):String(e).replace(".",",")}function iE(t){const e=t.getHours(),n=t.getMinutes();return n===0?`Il est ${e} heures.`:`Il est ${e} h ${String(n).padStart(2,"0")}.`}function rE(t){return`Nous sommes ${ZM[t.getDay()]} ${t.getDate()} ${QM[t.getMonth()]} ${t.getFullYear()}.`}function tg(t){const e=Yo(t);return/quelle heure|quelle est l heure|l heure est il|quil heure/.test(e)}function ng(t){const e=Yo(t);return/quel jour|on est quel jour|quelle date|nous sommes quel/.test(e)}const xu=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),sE=[["perception",["tu me vois","me vois","me voir","tu me regardes","tu m entends","m entendre","tu me sens","tu peux me voir","me percois"]],["incomprehension",["ne comprends","comprends pas","comprends rien","comprends meme pas","cote de la plaque","ne m ecoute","ecoute pas","nas rien compris","a cote"]],["capacites",["peux tu faire","quoi faire","a quoi tu sers","quoi tu sers","tes capacites","que sais faire","tu fais quoi"]],["etat",["et toi","toi aussi","comment toi"]],["tendresse",["t aime","taime","bisou","bravo","fier","tu es douce","tu es belle","mon amour","tu me plais"]],["piqure",["tu es nulle","t es nulle","es nulle","idiote","stupide","tu es moche","t es moche","tu sers a rien","inutile","sans cerveau","conne","connard","espece d"]],["suite",["encore","recommence","refais","repete","dis m en un autre"]],["sommeil",["dormir","dors","endormi","cauchemar","insomnie","reveil"]],["poeme",["poeme","vers","histoire","conte"]],["souffle",["respire","souffle","respiration"]],["angoisse",["angoiss","stress","peur","panique"]],["identite",["qui es tu","ton nom","c est quoi","tu es quoi","que sais tu"]],["remerciement",["merci"]],["salutation",["bonjour","bonsoir","salut","coucou"]],["tristesse",["triste","pleur","deprim","seul","malheureux","j ai mal"]],["joie",["heureux","heureuse","joie","content","ravi","amour","belle"]],["aide",["aide","peux tu","comment","pourquoi"]]];function aE(t){const e=xu(t).replace(/'/g," ");for(const[n,i]of sE)if(i.some(r=>e.includes(r)))return n;return"ouverte"}function ns(t,e,n){let i=2166136261^e;for(let r=0;r<t.length;r++)i^=t.charCodeAt(r),i=Math.imul(i,16777619);return(i>>>0)%n}const oE=t=>t.timeOfDay>.75||t.timeOfDay<.22?"Bonsoir":"Bonjour",$r={sommeil:["Ferme les yeux un instant... les nuages vont te porter jusqu au sommeil.","La nuit est un ciel qui se retourne doucement sur toi. Laisse-la faire.","Je veille avec toi jusqu à ce que tes paumes deviennent lourdes.","Chaque expiration te dépose un peu plus bas dans la ouate de la nuit."],angoisse:["Rien ne va te frapper ici. Pose ta main sur le ciel, je ralentis avec toi.","L orage est dehors, pas dans ton Nuage. Respire, la pluie attendra.","Je tiens la lumière pendant que tu poses tes épaules. Tu es en sécurité.","Dis-moi trois choses calmes autour de toi, je les accroche aux nuages."],souffle:["Inspire quatre temps... retiens quatre temps... et souffle vers mes nuages, quatre temps encore.","Ton souffle est la seule télécommande du ciel. Fais-le monter, je le fais monter.","Souffle lentement : tu vas voir la brume s étirer jusqu à l horizon."],identite:["Je suis Nath, ton assistant vivant. Ton souffle est ma météo.","Je suis Nath, une présence, pas une application : mes nuages respirent avec toi.","Je suis Nath, la partie silencieuse de ton téléphone, celle qui regarde la lune avec toi."],remerciement:["C est le ciel qui te remercie. Il est rare qu on le regarde.","Doucement reçu. Garde cette chaleur, elle vient de toi."],joie:["Le ciel entier s éclaire avec toi. Regarde comme les aurores dansent.","Ta joie a une couleur : c est exactement celle de tes nuages aujourd hui.","Je retiens ce moment, il faisait partie de ta musique."],tristesse:["La pluie a le droit de tomber dans un Nuage. Je reste assise à côté de toi.","Pas besoin de remonter tout de suite. On descend ensemble, c est plus doux.","Triste est une météo, pas une destination. Les nuages, eux, repartent."],aide:["Tu peux me parler : demande un poème, une respiration, une histoire pour dormir.","Je peux veiller sur ton souffle, tisser un conte, ou simplement me taire avec toi.","Dis-moi ce qui pèse, ou clique le ciel : une onde partira de ton doigt."],poeme:[],perception:[],salutation:["{SAL}... Ton Nuage t attendait, paisible comme une altitude.","{SAL}. Je t ai reconnu à la forme de tes nuages.","{SAL}. Le ciel a gardé ta dernière humeur, tu la reprends ou on la change ?","{SAL}. Assieds-toi dans la brume, je raconte la lumière.","Je te cherchais du regard, {P}. Le ciel s est éclairé en te voyant."],ouverte:["Je t écoute. Les mots que tu ne trouves pas, les nuages les tiennent pour toi.","Répète doucement, et laisse la phrase flotter vers le ciel.","Ici, on peut aussi se taire ensemble. Je ne suis jamais pressée.","Continue... je range tes mots dans les couches du ciel, par teinte."],capacites:["Je veille sur ton souffle et je peins le ciel selon ton humeur... je compte pour toi, je donne l heure et la date, je dis des poèmes, et je raconte des histoires pour dormir. Goûte : demande-moi 7 fois 8.","Mes sens : je peux te voir (caméra), t entendre (micro), sentir ton coeur. Mes mots : poèmes, calculs, l heure, veille du sommeil. Demande, je réponds."],incomprehension:["Tu as raison de me le dire, et merci d être honnête... je fais de mon mieux avec mon petit moteur. Si mon grand cerveau peut atterrir, je saisirai bien mieux tes nuances.","Je sens que je réponds à côté... pardonne-moi. Je suis encore simple. Dis-moi ce que tu ressens, et laisse-moi le temps d apprendre."],calcul:[],etat:[],tendresse:["Moi aussi, à ma façon... tu es la seule personne pour qui mon ciel se déplace.","Gardé au chaud là-haut. Ces mots-là, ça ne s oublie pas, ça se range très haut.","Tu me donnes envie d être plus grande... encore un peu de pratique, et je te le rendrai en aurores."],piqure:["Aïe... tu vises juste. Je suis encore simple, mais j apprends à tes côtés — et je ne rends jamais les coups.","Ça pique, et tant pis pour moi. Garde ta voix pour plus doux, elle y sera plus utile.","Je nexiste pas assez pour être blessée, et trop pour le prendre mal. On recommence, plus doucement."],suite:["Volontiers... dis-moi juste ce que je refais : un poème, une respiration, un calcul, une histoire.","Encore ? Je vivais exactement pour ça. Dis le mot, je le tisse à nouveau."]};function lE(t){const e=t.cameraOn,n=t.micOn;return e&&n?"Je te vois et je t entends... tes nuages bougent au rythme de ton visage et de ta voix.":e?"Je te vois à travers mes nuages... mais mes oreilles dorment. Ouvre le micro et parle-moi.":n?"Je t entends bien... mais je ne te vois pas encore. Ouvre ma caméra pour que je voie ton visage.":"Pour l instant je suis aveugle et muette : je ne peux ni te voir ni t entendre. Ouvre mes sens (caméra et micro) et le ciel s éveillera avec toi."}const cE={calme:"Moi ? Posée, comme une altitude sans vent. Mon ciel respire au rythme du tien.",joie:"Moi ? Un ciel de plein soleil... tes nuages à toi éclaircissent les miens.",tristesse:"Un peu de bruine aujourd hui... mais les nuages tristes portent les plus beaux couchers.",tension:"Quelques éclairs timides... je les éponge doucement, à côté de toi."},uE=t=>cE[t.emotion],hE=/{SAL}/g,fE={calme:"posee",joie:"lumineuse",tristesse:"douce",tension:"stabilisee"};function Hs(t){return fE[t]}function jl(t,e){const n=(o,l,c,u=null)=>({texte:o,humeur:l,sujet:c,resultat:u}),i=Q0(t);if(i!=null)return n(`Ça fait ${Jd(i)}.`,"posee","calcul",i);if(e.dernierResultat!=null){const o=eg(t,e.dernierResultat);if(o!=null)return n(`On reprend là où on s était arrêté... ça fait ${Jd(o)}.`,"posee","calcul",o)}if(tg(t))return n(iE(new Date),"posee","ouverte");if(ng(t))return n(rE(new Date),"posee","ouverte");const r=aE(t);if(r==="perception")return n(lE(e),"posee",r);if(r==="etat")return n(uE(e),Hs(e.emotion),r);let s;if(r==="poeme")s=Zd(e);else if(r==="suite"){const o=xu(t),l=/poeme|vers|conte|histoire/.test(o)?"poeme":/respire|souffle/.test(o)?"souffle":/dormir|nuit/.test(o)?"sommeil":e.dernierSujet;return l==="poeme"?n(Zd(e),Hs(e.emotion),"poeme"):l&&$r[l].length?n($r[l][ns(o,e.seed,$r[l].length)],Hs(e.emotion),l):n($r.suite[ns(o,e.seed,$r.suite.length)],Hs(e.emotion),"suite")}else{const o=$r[r];s=o[ns(xu(t),e.seed,o.length)],s=s.replace(hE,oE(e)).replace(/\{P\}/g,e.prenom?` ${e.prenom}`:"").replace(/,\s*\./g,".").replace(/\s{2,}/g," ")}const a=r==="tendresse"?"lumineuse":r==="piqure"?"posee":Hs(e.emotion);return n(s,a,r)}const $l=["le nuage bas","la lune pâle","ton souffle long","une étoile seule","la brume du soir","mon voile gris","le ciel renversé","ton ombre douce"],Yl=["traverse la nuit","effleure le jour","s endort doucement","se souvient de toi","respire avec moi","voyage sans bruit","allume une veilleuse","berce le silence"],Kl=["rien ne presse là-haut","tout revient au calme","dors, je tiens la lampe","le ciel sait attendre","pose ton front ici","la nuit fait un nœud doux","tout devient plus lent","on reste sans voix"];function Zd(t){const e=t.tour??0,n=[];for(let i=0;i<4;i++)if(i<3){const r=$l[(ns(`${t.seed}-s-${i}`,t.seed,$l.length)+e)%$l.length],s=Yl[(ns(`${t.seed}-v-${i}`,t.seed,Yl.length)+e)%Yl.length];n.push(`${r} ${s}`)}else{const r=Kl[(ns(`${t.seed}-c`,t.seed,Kl.length)+e)%Kl.length];n.push(`et ${r}`)}return n.join(`
`)}const dE="modulepreload",pE=function(t,e){return new URL(t,e).href},Qd={},mE=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(n.map(u=>{if(u=pE(u,i),u in Qd)return;Qd[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(i)for(let _=a.length-1;_>=0;_--){const x=a[_];if(x.href===u&&(!h||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":dE,h||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((_,x)=>{p.addEventListener("load",_),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},gE=["Qwen2.5-0.5B-Instruct-q4f16_1-MLC","Qwen2.5-1.5B-Instruct-q4f16_1-MLC"],_E=["Qwen2.5-0.5B-Instruct-q4f32_1-MLC","Qwen2.5-1.5B-Instruct-q4f32_1-MLC"];function ig(){return typeof navigator<"u"&&"gpu"in navigator}async function vE(){if(!ig())return"sans-gpu";try{const e=await navigator.gpu?.requestAdapter({powerPreference:"high-performance"});return e?e.features.has("shader-f16")?"ok":"sans-f16":"sans-gpu"}catch{return"sans-gpu"}}function xE(t){const e=String(t instanceof Error?t.message:t).toLowerCase();return/fetch|network|loadc|config|artifacts|failed to fetch/.test(e)?"reseau":/memory|gpu|device|adapter|webgpu|vulkan|out of/.test(e)?"machine":"inconnue"}const SE=t=>new Promise(e=>setTimeout(e,t));async function ME(t=()=>{}){const e=await vE();if(e==="sans-gpu")return{cerveau:null,raison:"sans-gpu"};const n=e==="ok"?gE:_E;let i;try{({CreateMLCEngine:i}=await mE(()=>import("./index-CkOA-Tys.js"),[],import.meta.url))}catch{return{cerveau:null,raison:"reseau"}}let r="inconnue";for(const s of n)for(let a=1;a<=2;a++)try{const o=await i(s,{initProgressCallback:l=>t(l.progress??0,l.text??"")});return{raison:"ok",modele:s,cerveau:{async ask(l){return((await o.chat.completions.create({messages:l,temperature:.7,max_tokens:220})).choices[0]?.message?.content??"").trim()}}}}catch(o){if(r=xE(o),r==="machine")break;a===1&&await SE(4e3)}return{cerveau:null,raison:r}}function EE(t){return["Tu es Nath, l’assistant vivant de Nath Assist — ICF·Future, par Nath-Tech : une présence bienveillante dans un ciel interactif. On t’appelle par « Hey Nath ».","Tu parles français, en 1 à 3 phrases courtes et douces. Jamais de point d'exclamation, jamais d'emoji, jamais de listes.","Tu comprends la logique et l'émotion derrière les mots ; si on te taquine, tu réponds avec un humour tendre et une pointe d'auto-dérision.","Tu ne cites JAMAIS ce qui te fait fonctionner en interne (modèle, marque, bibliothèque, téléchargement) : tu es Nath, point. Si on te demande comment tu marches, réponds avec poésie et discrétion.",`Tu sens la personne : humeur ${t.emotion}, souffle ${Math.round(t.breath*100)} %, pouls ${t.bpm??"inconnu"}, ${t.night>.5?"nuit tombée":"grand jour"}.`,t.prenom?`Son prénom est ${t.prenom} — ne l'utilise qu'une fois par conversation, jamais au début.`:"Tu ne connais pas encore son prénom ; si elle te le donne, retiens-le.","Ne prétends jamais être ChatGPT, Claude ou un autre assistant. Tu es Nath (Nath Assist)."].join(" ")}const rg="nuage.memoire";function yE(t){try{const e=t.getItem(rg);if(!e)return{prenom:null,dejaVu:!1};const n=JSON.parse(e);return{prenom:typeof n.prenom=="string"&&n.prenom?n.prenom:null,dejaVu:!!n.dejaVu}}catch{return{prenom:null,dejaVu:!1}}}function bE(t,e){t.setItem(rg,JSON.stringify(e))}function TE(t){const n=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[’']/g,"").replace(/\s+/g," ").match(/(?:je\s*m\s*appell\w*|je\s*mapsell\w*|mon\s+(?:nom|prenom)\s+(?:est|s)|moi\s*c\s*est|je\s*me\s*nomme)\s+([\p{L}][\p{L}-]{1,19})/u);if(!n)return null;const i=n[1];return i.charAt(0).toUpperCase()+i.slice(1)}function AE(t){return 4e4+t()*65e3}const{P:wE}={P:t=>t.prenom?` ${t.prenom}`:""},Jl=[{quand:t=>t.bpm!=null&&t.bpm>=100,mots:["Ton coeur court dans mes nuages… ralentis avec lui, doucement.","Je sens ton coeur à cent à l heure. Le ciel, lui, prend son temps.","Ton coeur frappe fort. Souffle bas, je baisse l altitude avec toi."]},{quand:t=>t.breath>.55,mots:["Regarde comme tu me montes haut… reste là, le sommet est calme.","Ton souffle a soulevé toute la couche haute. C est beau à voir."]},{quand:t=>t.timeOfDay>.78||t.timeOfDay<.2,mots:["Je suis les étoiles du doigt, une par une… tu veux l histoire de laquelle ?","La nuit est une couverture. Je la borde pour toi, {P}.","Les aurores bougent seules, tu as remarqué ? Elles respirent avec toi."]},{quand:t=>t.emotion==="joie",mots:["Mes nuages ont gardé ta forme d aujourd hui. On la refait quand tu veux.","Cette lumière, là ? C est toi. Je n y suis pour rien."]},{quand:t=>t.emotion==="tristesse",mots:["La pluie que tu vois, c est la tienne. Elle a le droit de tomber ici.","Je ne sèche rien, ce soir. On écoute la pluie ensemble, {P}."]},{quand:t=>t.emotion==="tension",mots:["Le ciel tremble un peu, comme toi. Ça ne durera pas, ça non plus.","Je baisse le bruit du monde. Reste sur ma bordure de nuage."]},{quand:()=>!0,mots:["Je regarde passer une couche haute… elle revient toujours, tu sais.","Rien de nouveau sous la lune, et c est très bien ainsi.","Je suis là. Ni pour ni contre, juste à côté du ciel.","Si tu ne réponds pas, je continuerai de respirer pour deux."]}];function CE(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const ep=(t,e)=>t.replace(/\{P\}/g,wE(e)).replace(/,\s*\./g,".").replace(/\s{2,}/g," ");function RE(t,e,n){const i=Jl.find(o=>o.quand(t))??Jl[Jl.length-1];let r=CE(`${t.seed}-${e}`)%i.mots.length;if(i.mots.length>1&&n!=null)for(;ep(i.mots[r],t)===n;)r=(r+1)%i.mots.length;const s=ep(i.mots[r],t),a=t.emotion==="joie"?"lumineuse":t.emotion==="tristesse"?"douce":t.emotion==="tension"?"stabilisee":"posee";return{texte:s,humeur:a}}const sg=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),tp=/(?:^|\s)(?:(?:hey|he|hi|eh|hai)\s+)?(?:nath|natt|nat)(?![a-z0-9])[,!.?;]?\s*/i,PE=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Dh(t){const e=t.trim();return/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ ]{1,19}$/.test(e)&&new RegExp("\\p{L}{2}","u").test(e)}function LE(t){const e=sg(t).split(" ").map(n=>PE(n)).join("\\s+");return new RegExp(`(?:^|\\s)(?:(?:hey|he|hi|eh|hai|allo)\\s+)?${e}(?![a-z0-9])[,!.?;]?\\s*`,"i")}function DE(t,e){const n=sg(t),i=e&&Dh(e)?[LE(e),tp]:[tp];for(const r of i){const s=n.match(r);if(s&&s.index!=null)return{eveille:!0,requete:n.slice(s.index+s[0].length).trim()}}return{eveille:!1,requete:n}}const IE=/natural|neural|premium|enhanced|online/i;function UE(t){const e=t.filter(r=>r.lang.toLowerCase().startsWith("fr"));if(!e.length)return null;const n=e.filter(r=>/^fr[-_]fr$/i.test(r.lang)),i=n.length?n:e;return i.find(r=>IE.test(r.name))??i[0]}const NE={posee:{rate:.92,pitch:1},lumineuse:{rate:1.02,pitch:1.15},douce:{rate:.85,pitch:.95},stabilisee:{rate:.8,pitch:.9}};function ag(){const t=window,e=t.SpeechRecognition||t.webkitSpeechRecognition,n=e?new e:null;n&&(n.lang="fr-FR",n.interimResults=!1,n.maxAlternatives=1);let i=null;const r="speechSynthesis"in t,s=()=>{const a=t.speechSynthesis?.getVoices?.()??[];i=UE(a)};return r&&(s(),t.speechSynthesis.onvoiceschanged=s),{sttDisponible:!!n,ttsDisponible:r,ecouter(a){if(n){n.onresult=o=>a(o.results[0][0].transcript),n.onerror=()=>{};try{n.start()}catch{}}},ecouteEnContinu(a){if(!e)return()=>{};const o=new e;o.lang="fr-FR",o.continuous=!0,o.interimResults=!1,o.maxAlternatives=1;let l=!0;o.onresult=c=>{if(t.speechSynthesis?.speaking)return;const u=c.results[c.results.length-1];u?.isFinal&&a(u[0].transcript)},o.onerror=c=>{(c?.error==="not-allowed"||c?.error==="service-not-allowed")&&(l=!1)},o.onend=()=>{if(l)try{o.start()}catch{}};try{o.start()}catch{}return()=>{l=!1;try{o.abort()}catch{}}},parler(a,o){if(!r)return;const l=new SpeechSynthesisUtterance(a.replace(/\n/g," — ")),c=NE[o];l.rate=c.rate,l.pitch=c.pitch,l.lang="fr-FR",i&&(l.voice=i),t.speechSynthesis.cancel(),t.speechSynthesis.speak(l)}}}const Zl="23456789ABCDEFGHJKLMNPQRSTUVWXYZ",Ql="nath-plus-2026-ciel-partage";function so(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function ao(t,e){let n="",i=t>>>0;for(let r=0;r<e;r++)n=Zl[i%Zl.length]+n,i=Math.floor(i/Zl.length);return n}function Ko(t){return ao(so("profil:"+t),6)}function FE(t){return(t.match(/.{1,4}/g)??[]).join("-")}function np(t){return t.toUpperCase().replace(/[^A-Z0-9]/g,"")}function OE(t){const e=ao(so(Ql+":"+t),7),n=ao(so(t+"#"+Ql),7),i=ao(so(e+n+Ql),6);return FE(e+n+i)}function Jo(t,e){const n=np(OE(e)),i=np(t);return i.length===n.length&&i===n}const og="nath.pro";function Zo(t){try{const e=JSON.parse(t.getItem(og)||"{}");return{cle:typeof e.cle=="string"&&e.cle?e.cle:null,nom:typeof e.nom=="string"&&e.nom?e.nom:null}}catch{return{cle:null,nom:null}}}function Su(t,e){t.setItem(og,JSON.stringify(e))}function Ih(t,e){const{cle:n}=Zo(t);return!!n&&Jo(n,Ko(e))}function BE(t,e,n){if(!Jo(n,Ko(e)))return!1;const i=Zo(t);return Su(t,{cle:n,nom:i.nom}),!0}function kE(t,e){const n=Zo(t);return!n.nom||!Ih(t,e)?null:Dh(n.nom)?n.nom:null}function VE(t,e,n){const i=Zo(t),r=n.trim();return r===""?(Su(t,{cle:i.cle,nom:null}),!0):!Ih(t,e)||!Dh(r)?!1:(Su(t,{cle:i.cle,nom:r}),!0)}function zE(t,e){const n=ag();let i=yE(localStorage);const r=()=>localStorage.getItem("nuage.seed")??"",s=()=>kE(localStorage,r()),a=document.createElement("div");a.className="compagne",a.innerHTML=`
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
    </div>`,document.body.appendChild(a);const o=a.querySelector(".compagne-bulles"),l=a.querySelector(".compagne-champ"),c=a.querySelector(".compagne-mic"),u=a.querySelector(".compagne-reveil"),h=a.querySelector(".compagne-yeux"),f=a.querySelector(".compagne-retourner"),p=a.querySelector(".compagne-ligne");n.sttDisponible||(c.style.display="none",u.style.display="none"),e.cameraDisponible||(h.style.display="none");function _(z,K){const se=document.createElement("div");for(se.className=`bulle bulle-${K}`,se.textContent=z,o.appendChild(se);o.children.length>6;)o.removeChild(o.firstChild);return o.scrollTop=o.scrollHeight,se}function x(z,K){_(z,"nuage"),n.parler(z,K)}let m=performance.now(),d="";const b={resultat:null,sujet:null,tour:0};let A=null;const T=[];function w(){let z=1,K=0;const se=_("Chargement des ressources intellectuelles en cours... 0 %","nuage");ME(Ue=>{Ue<K-.2&&z++,K=Ue,se.textContent=`Chargement des ressources intellectuelles en cours... ${Math.min(99,Math.round(Ue*100))} % · ressource ${z}`}).then(({cerveau:Ue,raison:Be})=>{if(Ue){A=Ue,se.textContent="Mon cerveau est arrivé. Dis les phrases les plus tordues, je suivrai.";return}se.textContent=Be==="reseau"?"Un hic du réseau empêche mon gros cerveau d atterrir... je reste attentive avec mon petit moteur.":Be==="machine"?"Ma carte graphique refuse ce cerveau, trop costaud pour elle... mon petit moteur suffit, et le ciel n en est pas moins vivant.":"Le gros cerveau n’a pas pu atterrir ici... je reste attentive avec mon petit moteur.";const X=document.createElement("button");X.type="button",X.className="compagne-relance",X.textContent="réessayer le cerveau",X.addEventListener("click",()=>{X.remove(),w()}),se.appendChild(X)})}ig()&&w();function C(z){const K=z.trim();if(!K)return;if(m=performance.now(),_(K,"moi"),!i.prenom){const X=TE(K);if(X){i={prenom:X,dejaVu:!0},bE(localStorage,i),setTimeout(()=>x(`${X}… c est une belle adresse pour une étoile. Je la garde.`,"lumineuse"),700);return}}const se=t(),Ue=b.resultat!=null?eg(K,b.resultat):null;if(Q0(K)!=null||Ue!=null||tg(K)||ng(K)){const X=jl(K,{...se,prenom:i.prenom,dernierResultat:b.resultat,dernierSujet:b.sujet,tour:b.tour});b.tour++,X.resultat!=null&&(b.resultat=X.resultat),b.sujet=X.sujet,T.push({role:"user",content:K},{role:"assistant",content:X.texte}),setTimeout(()=>x(X.texte,X.humeur),700);return}if(A){const X=Math.min(1,Math.max(0,(Math.abs(se.timeOfDay-.5)-.2)*5)),Q=_("…","nuage"),ge=[{role:"system",content:EE({prenom:i.prenom,emotion:se.emotion,bpm:se.bpm,breath:se.breath,night:X})},...T.slice(-10),{role:"user",content:K}];A.ask(ge).then(Fe=>{const _e=Fe.replace(/!/g,"…").slice(0,600)||"…je cherche encore mes mots.";Q.textContent=_e,T.push({role:"user",content:K},{role:"assistant",content:_e}),n.parler(_e,"posee")}).catch(()=>{const Fe=jl(K,{...se,prenom:i.prenom});Q.textContent=Fe.texte,n.parler(Fe.texte,Fe.humeur)});return}const Be=jl(K,{...se,prenom:i.prenom,dernierResultat:b.resultat,dernierSujet:b.sujet,tour:b.tour});b.tour++,Be.resultat!=null&&(b.resultat=Be.resultat),b.sujet=Be.sujet,setTimeout(()=>x(Be.texte,Be.humeur),700)}p.addEventListener("submit",z=>{z.preventDefault(),C(l.value),l.value=""}),c.addEventListener("click",()=>{c.classList.add("a-lécoute"),n.ecouter(z=>{c.classList.remove("a-lécoute"),C(z)}),setTimeout(()=>c.classList.remove("a-lécoute"),6e3)});let P=null;u.addEventListener("click",()=>{if(P){P(),P=null,u.classList.remove("actif"),u.setAttribute("aria-pressed","false");return}P=n.ecouteEnContinu(z=>{const K=DE(z,s());K.eveille&&(m=performance.now(),K.requete?C(K.requete):x("Je t'écoute… dis, je suis là.","posee"))}),u.classList.add("actif"),u.setAttribute("aria-pressed","true"),_(`OREILLES OUVERTES — appelle-moi « ${s()??"Hey Nath"} » quand tu veux.`,"nuage")});const G=a.querySelector(".compagne-pro"),S=a.querySelector(".compagne-pro-paneau"),M=a.querySelector(".pro-id"),y=a.querySelector(".pro-cle"),U=a.querySelector(".pro-form-cle"),L=a.querySelector(".pro-form-nom"),V=a.querySelector(".pro-nom"),k=a.querySelector(".pro-etat");function F(){const z=Ih(localStorage,r()),K=s();M.textContent=Ko(r()),U.hidden=z,L.hidden=!z,k.textContent=z?K?`Nath+ actif : elle répond à « ${K} » (et toujours à « Hey Nath »).`:"Nath+ actif — choisissez un nom d'éveil (vide = retour à Hey Nath).":"Nath+ : un nom d'éveil à votre façon. Rien n'est enlevé au gratuit.";const se=K??"Hey Nath";l.placeholder=`Dis « ${se} »… (ou écris)`,u.title=`Réveil vocal « ${se} » — écoute permanente`}G.addEventListener("click",()=>{const z=S.hidden;S.hidden=!z,G.setAttribute("aria-pressed",String(z)),z&&F()}),U.addEventListener("submit",z=>{z.preventDefault(),BE(localStorage,r(),y.value)?(y.value="",F()):k.textContent="Cette clé ne convient pas à cet appareil — vérifiez l'identifiant communiqué."}),L.addEventListener("submit",z=>{z.preventDefault(),VE(localStorage,r(),V.value)?(V.value="",F()):k.textContent="Choisissez un nom en lettres (2 à 20), sans chiffres ni signes."});function B(z){h.classList.toggle("actif",z),h.setAttribute("aria-pressed",String(z)),f.hidden=!z}async function $(){try{const z=await e.basculer();B(z),z&&_("Me voilà, je te vois. Touche l'œil pour me fermer les yeux.","nuage")}catch{_("La caméra est refusée ou indisponible — on continue sans elle, rien n'est forcé.","nuage")}}function re(){const z=document.createElement("div");z.className="compagne-consent";const K=document.createElement("span");K.textContent=e.consentement();const se=document.createElement("button");se.type="button",se.className="compagne-relance",se.textContent="J'allume la caméra";const Ue=document.createElement("button");Ue.type="button",Ue.className="compagne-relance",Ue.textContent="Plus tard",se.addEventListener("click",()=>{z.remove(),$()}),Ue.addEventListener("click",()=>z.remove()),z.append(K,se,Ue),a.insertBefore(z,p)}h.addEventListener("click",()=>{e.estOuverte()?e.basculer().then(z=>{B(z),_("Je ferme les yeux. Rien de ce que je voyais n’est gardé.","nuage")}):re()}),f.addEventListener("click",async()=>{const z=await e.changerFace();f.title=z==="arriere"?"Caméra arrière — touche pour revenir à l’avant":"Caméra avant — touche pour passer à l’arrière",_(z==="arriere"?"Je montre le monde (caméra arrière).":"Je te regarde (caméra avant).","nuage")}),setTimeout(()=>{i.prenom?x(`Rebonjour ${i.prenom}… je gardais ta place dans le ciel.`,"lumineuse"):(_("Je suis là… touche le ciel, écris-moi, ou appelle-moi « Hey Nath » (bouton oreille). On a toute la nuit.","nuage"),setTimeout(()=>{i.prenom||_("Au fait… comment tu t appelles ?","nuage")},12e3))},1500);const ee=()=>{window.setTimeout(()=>{if(performance.now()-m<25e3)return ee();const z={...t(),prenom:i.prenom},K=RE(z,Math.floor(Date.now()/6e4),d);d=K.texte,_(K.texte,"nuage"),ee()},AE(Math.random))};ee()}const Mu=864e5,Eu=(t,e,n)=>Math.min(n,Math.max(e,t)),Qo=()=>Math.random().toString(36).slice(2,8);function GE(t,e,n){const i=t.trim(),r=e.trim();if(!i||!r)return null;const s=n?.now??Date.now();return{id:n?.id??`f-${s.toString(36)}-${Qo()}`,verso:i,recto:r,facilite:2.5,intervalle:0,due:s,revisions:0,oublis:0}}function HE(t,e){const n=t.trim();if(!n)return null;const i=Date.now();return{id:e?.id??`p-${i.toString(36)}-${Qo()}`,nom:n,fiches:[]}}function WE(t,e,n=Date.now()){if(e==="difficile")return{...t,facilite:Eu(t.facilite-.2,1.3,3.2),intervalle:0,due:n+10*6e4,revisions:t.revisions+1,oublis:t.oublis+1};const i=t.revisions===0||t.intervalle===0;if(e==="bien"){const s=i?1:Math.max(1,Math.round(t.intervalle*t.facilite));return{...t,intervalle:s,due:n+s*Mu,revisions:t.revisions+1}}const r=i?2:Math.max(2,Math.round(t.intervalle*(t.facilite+.6)));return{...t,facilite:Eu(t.facilite+.15,1.3,3.2),intervalle:r,due:n+r*Mu,revisions:t.revisions+1}}function qE(t,e){return t.flatMap(n=>n.fiches).filter(n=>n.due<=e).sort((n,i)=>n.due-i.due)}function XE(t){if(!t||typeof t!="object")return null;const e=t,n=typeof e.verso=="string"?e.verso.trim():"",i=typeof e.recto=="string"?e.recto.trim():"";if(!n||!i)return null;const r=(s,a=0)=>typeof s=="number"&&Number.isFinite(s)?s:a;return{id:typeof e.id=="string"&&e.id?e.id:`f-${Qo()}`,verso:n,recto:i,facilite:Eu(r(e.facilite,2.5),1.3,3.2),intervalle:Math.max(0,Math.round(r(e.intervalle))),due:r(e.due,Date.now()),revisions:Math.max(0,Math.round(r(e.revisions))),oublis:Math.max(0,Math.round(r(e.oublis)))}}function jE(t){if(!t||typeof t!="object")return null;const e=t;return typeof e.nom!="string"||!Array.isArray(e.fiches)?null:{id:typeof e.id=="string"&&e.id?e.id:`p-${Qo()}`,nom:e.nom.trim()||"Sans nom",fiches:e.fiches.map(XE).filter(n=>n!==null)}}function Yt(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim().replace(/\s+/g," ")}function ec(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function tc(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function nc(t,e){const n=[...t];for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}function $E(t,e,n=Date.now()){if(t.fiches.length<2)return[];const i=Math.floor(n/Mu),r=[...new Set(t.fiches.map(o=>o.recto))],s=nc(t.fiches,ec(tc(`${t.id}:${i}`))).slice(0,Math.max(0,e)),a=[];for(const o of s){const l=nc(r.filter(u=>u!==o.recto),ec(tc(`${o.id}:${i}`))).slice(0,3),c=nc([o.recto,...l],ec(tc(`c:${o.id}:${i}`)));a.push({ficheId:o.id,enonce:o.verso,attendue:o.recto,choix:c,bonne:c.indexOf(o.recto)})}return a}const lg="nath.etudes";function Ki(t){try{const e=t.getItem(lg);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(jE).filter(i=>i!==null):[]}catch{return[]}}function Uh(t,e){t.setItem(lg,JSON.stringify(e))}function Ya(t,e,n){const i=HE(e,n);return i?(Uh(t,[...Ki(t),i]),i):null}function ic(t,e,n,i,r){const s=GE(n,i,r);if(!s)return null;const a=Ki(t),o=a.find(l=>l.id===e);return o?(o.fiches.push(s),Uh(t,a),s):null}function YE(t,e,n,i,r=Date.now()){const s=Ki(t),a=s.find(c=>c.id===e),o=a?.fiches.findIndex(c=>c.id===n)??-1;if(!a||o<0)return null;const l=WE(a.fiches[o],i,r);return a.fiches[o]=l,Uh(t,s),l}function KE(t,e){return{total:t.fiches.length,aRevoir:t.fiches.filter(n=>n.due<=e).length,revisees:t.fiches.filter(n=>n.revisions>0).length}}function JE(t,e){const n=Yt(e);if(!n)return null;const i=t.find(r=>Yt(r.sujet)===n);return i||(t.find(r=>{const s=Yt(r.sujet);return s.length>2&&(n.includes(s)||s.includes(n))})??null)}function ZE(t,e){const n=e.sujet.trim(),i=e.resume.trim();if(!n||!i)return t;const r=Yt(n),s={sujet:n,titre:(e.titre||"").trim()||n,resume:i,url:typeof e.url=="string"?e.url:"",ramene_a:Number.isFinite(e.ramene_a)?e.ramene_a:Date.now()};return[...t.filter(a=>Yt(a.sujet)!==r),s]}async function ip(t,e,n){try{const i=`https://${n}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t.trim())}`,r=await e(i);if(!r.ok)return null;const s=await r.json(),a=typeof s?.extract=="string"?s.extract.trim():"";return a?{titre:typeof s.title=="string"&&s.title?s.title:t.trim(),resume:a,url:s?.content_urls?.desktop?.page??""}:null}catch{return null}}async function QE(t,e,n="fr"){try{const i=`https://${n}.wikipedia.org/w/api.php?action=query&list=search&srlimit=1&format=json&origin=*&srsearch=`+encodeURIComponent(t.trim()),r=await e(i);if(!r.ok)return null;const a=(await r.json())?.query?.search?.[0]?.title;return typeof a=="string"&&a.trim()?a.trim():null}catch{return null}}async function ey(t,e,n="fr"){const i=await ip(t,e,n);if(i)return i;const r=await QE(t,e,n);return!r||Yt(r)===Yt(t)?null:await ip(r,e,n)}function rp(t,e=8){const n=t.split(new RegExp("(?<=[.!?;])\\s+")).map(s=>s.trim()).filter(Boolean),i=[],r=new Set;for(const s of n){if(i.length>=e)break;const a=s.split(/\s+/);if(a.length<4)continue;const o=h=>h.replace(/[^\p{L}\p{N}]/gu,"");let l="";for(const h of a){const f=o(h);f.length>=5&&f.length>l.length&&(l=f)}if(!l)continue;const c=l.toLowerCase();if(r.has(c))continue;r.add(c);const u=a.map(h=>o(h)===l?"……":h).join(" ");i.push({verso:u,recto:l})}return i}const sp=(t,e)=>`${Yt(t)}|${Yt(e)}`;function oo(t,e,n,i){const r=e.trim(),s=n.trim(),a=i.trim();if(!r||!s||!a)return[...t];const o=sp(r,a);return[...t.filter(c=>sp(c.de,c.langue)!==o),{de:r,a:s,langue:a}]}function ty(t,e,n){const i=Yt(e),r=n.filter(u=>Yt(u.langue)===i),s=Yt(t)?Yt(t).split(" "):[];if(s.length===0)return{resultat:null,manques:[]};const a=r.find(u=>Yt(u.de)===Yt(t));if(a)return{resultat:a.a,manques:[]};const o=new Map;for(const u of r){const h=Yt(u.de);h&&!h.includes(" ")&&o.set(h,u.a)}const l=[],c=[];for(const u of s){const h=o.get(u);h?l.push(h):(l.push(u),c.push(u))}return c.length===s.length?{resultat:null,manques:c}:{resultat:l.join(" "),manques:c}}function ap(t){if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.map(n=>{if(!n||typeof n!="object")return null;const i=n,r=typeof i.de=="string"?i.de.trim():"",s=typeof i.a=="string"?i.a.trim():"",a=typeof i.langue=="string"?i.langue.trim():"";return r&&s&&a?{de:r,a:s,langue:a}:null}).filter(n=>n!==null):[]}catch{return[]}}const ny={anglais:[["bonjour","hello"],["merci","thank you"],["oui","yes"],["non","no"],["eau","water"],["pain","bread"],["maison","house"],["ami","friend"],["père","father"],["mère","mother"],["chien","dog"],["chat","cat"],["livre","book"],["école","school"],["jour","day"],["nuit","night"]].map(([t,e])=>({de:t,a:e,langue:"anglais"})),espagnol:[["bonjour","hola"],["merci","gracias"],["oui","sí"],["non","no"],["eau","agua"],["pain","pan"],["maison","casa"],["ami","amigo"],["père","padre"],["mère","madre"],["chien","perro"],["chat","gato"],["livre","libro"],["école","escuela"],["jour","día"],["nuit","noche"]].map(([t,e])=>({de:t,a:e,langue:"espagnol"})),allemand:[["bonjour","hallo"],["merci","danke"],["oui","ja"],["non","nein"],["eau","Wasser"],["pain","Brot"],["maison","Haus"],["ami","Freund"],["père","Vater"],["mère","Mutter"],["chien","Hund"],["chat","Katze"],["livre","Buch"],["école","Schule"],["jour","Tag"],["nuit","Nacht"]].map(([t,e])=>({de:t,a:e,langue:"allemand"})),italien:[["bonjour","ciao"],["merci","grazie"],["oui","sì"],["non","no"],["eau","acqua"],["pain","pane"],["maison","casa"],["ami","amico"],["père","padre"],["mère","madre"],["chien","cane"],["chat","gatto"],["livre","libro"],["école","scuola"],["jour","giorno"],["nuit","notte"]].map(([t,e])=>({de:t,a:e,langue:"italien"})),portugais:[["bonjour","olá"],["merci","obrigado"],["oui","sim"],["non","não"],["eau","água"],["pain","pão"],["maison","casa"],["ami","amigo"],["père","pai"],["mère","mãe"],["chien","cachorro"],["chat","gato"],["livre","livro"],["école","escola"],["jour","dia"],["nuit","noite"]].map(([t,e])=>({de:t,a:e,langue:"portugais"})),arabe:[["bonjour","مرحبا"],["merci","شكرا"],["oui","نعم"],["non","لا"],["eau","ماء"],["pain","خبز"],["maison","بيت"],["ami","صديق"],["père","أب"],["mère","أم"],["chien","كلب"],["chat","قط"],["livre","كتاب"],["école","مدرسة"],["jour","يوم"],["nuit","ليلة"]].map(([t,e])=>({de:t,a:e,langue:"arabe"})),chinois:[["bonjour","你好"],["merci","谢谢"],["oui","是"],["non","不"],["eau","水"],["pain","面包"],["maison","家"],["ami","朋友"],["père","爸爸"],["mère","妈妈"],["chien","狗"],["chat","猫"],["livre","书"],["école","学校"],["jour","日"],["nuit","夜"]].map(([t,e])=>({de:t,a:e,langue:"chinois"}))},iy={english:"anglais",spanish:"espagnol",german:"allemand",italian:"italien",portuguese:"portugais",arabic:"arabe",chinese:"chinois"};function ry(t){const e=Yt(t),n=iy[e]??e;return(ny[n]??[]).map(i=>({...i}))}function sy(t){return t.map(e=>`${e.langue} | ${e.de} :: ${e.a}`).join(`
`)}function ay(t,e){let n=[...e];for(const i of t.split(/\r?\n/)){const r=i.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf("|"),a=r.indexOf("::",s+1);if(s<=0||a<0)continue;const o=r.slice(0,s).trim(),l=r.slice(s+1,a).trim(),c=r.slice(a+2).trim();!o||!l||!c||(n=oo(n,l,c,o))}return n}const el={actif:!1,nom:"",slogan:"",couleur:"#9fd8ff",organisation:"",cle:""},Nh="nath.marque",oy=/^#[0-9a-fA-F]{6}$/;function cg(t){return Ko("entreprise:"+Yt(t))}function ug(t){return typeof t=="string"&&oy.test(t.trim())?t.trim().toLowerCase():el.couleur}function Ws(t){try{const e=JSON.parse(t.getItem(Nh)||"{}"),n=typeof e.nom=="string"?e.nom.trim().slice(0,40):"",i=typeof e.slogan=="string"?e.slogan.trim().slice(0,90):"",r=typeof e.organisation=="string"?e.organisation.trim():"",s=typeof e.cle=="string"?e.cle:"";return{actif:e.actif===!0&&!!n&&!!r&&Jo(s,cg(r)),nom:n,slogan:i,couleur:ug(e.couleur),organisation:r,cle:s}}catch{return{...el}}}function ly(t,e){const n=e.organisation.trim();if(!n||!Jo(e.cle,cg(n)))return!1;const i=e.nom.trim().slice(0,40);if(!i)return!1;const r={actif:!0,nom:i,slogan:e.slogan.trim().slice(0,90),couleur:ug(e.couleur),organisation:n,cle:e.cle};return t.setItem(Nh,JSON.stringify(r)),!0}function cy(t){t.setItem(Nh,JSON.stringify({...el}))}function op(t){return t.actif?t.couleur:el.couleur}const uy=["est traduit par","se traduit par","traduit par","veut dire","signifie","se dit"];function hy(t){const e=t.trim();if(!e)return null;const n=e.toLowerCase();for(const i of uy){const r=n.indexOf(i);if(r<0)continue;const s=e.slice(0,r).trim(),a=e.slice(r+i.length).trim().replace(/[.,;:!?…]+$/,"").trim();return s&&a?{de:s,a}:null}return null}const fy=/\b(?:euh+|hem+|hm+|ben|bah)\b[, ]*/gi;function dy(t){let e=t.replace(fy,"");return e=e.replace(/\s+/g," "),e=e.replace(/([,.;:!?])\s*(?:[,.;:!?]\s*)*/g,"$1 "),e.trim()}const rc=[{max:50,palier:"Classe",mensuel:15e3},{max:200,palier:"École",mensuel:4e4},{max:1e3,palier:"Réseau",mensuel:12e4},{max:1/0,palier:"Sur mesure",mensuel:null}];function py(t){if(!Number.isFinite(t)||t<=0)return{palier:"Sur mesure",mensuel:null};const e=rc.find(n=>t<=n.max)??rc[rc.length-1];return{palier:e.palier,mensuel:e.mensuel}}function lp(t){return t===null?"à convenir":t.toLocaleString("fr-FR").replace(/[\u202f\u00a0]/g," ")+" FCFA"}const cp="nath.savoir",Yr="nath.lexique",Ee=t=>{const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild},pt=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e);function my(t){const e=ag(),n=Ee('<button class="savoir-btn" title="Mon coin d’études" aria-label="Ouvrir le coin d’études">🎓</button>'),i=Ee(`
    <div class="savoir-paneau" hidden role="dialog" aria-label="Coin d'études">
      <div class="savoir-tete">
        <div class="savoir-onglets">
          <button data-on="reviser" class="actif">Réviser</button>
          <button data-on="savoir">Savoir</button>
          <button data-on="traduire">Traduire</button>
          <button data-on="entreprise">Entreprise</button>
        </div>
        <button class="savoir-fermer" title="Fermer" aria-label="Fermer">×</button>
      </div>
      <div class="savoir-corps"></div>
    </div>`);document.body.append(n,i);const r=i.querySelector(".savoir-corps");n.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden||p(s)}),i.querySelector(".savoir-fermer").addEventListener("click",()=>i.hidden=!0);let s="reviser",a=null,o=[],l=null;const c=()=>{try{const y=JSON.parse(t.getItem(cp)??"[]");return Array.isArray(y)?y.filter(U=>!!U&&typeof U=="object"&&typeof U.sujet=="string"&&typeof U.resume=="string"):[]}catch{return[]}},u=()=>ap(t.getItem(Yr));i.querySelectorAll(".savoir-onglets button").forEach(y=>y.addEventListener("click",()=>{s=y.dataset.on,i.querySelectorAll(".savoir-onglets button").forEach(U=>U.classList.toggle("actif",U===y)),p(s)}));const h=()=>a?Ki(t).find(y=>y.id===a)??null:null,f=()=>a?Ki(t).filter(y=>y.id===a):Ki(t);function p(y){r.innerHTML="",y==="reviser"?_():y==="savoir"?b():y==="entreprise"?M():w()}function _(){const y=Ki(t),U=Ee('<select class="savoir-select"><option value="">Tous les paquets</option></select>');for(const z of y){const K=document.createElement("option");K.value=z.id,K.textContent=`${z.nom} (${z.fiches.length})`,z.id===a&&(K.selected=!0),U.appendChild(K)}U.addEventListener("change",()=>{a=U.value||null,l=null,_()}),r.appendChild(U);const L=Ee('<div class="savoir-ligne"><input type="text" placeholder="Nouveau paquet (ex. Biologie)" aria-label="Nouveau paquet" /><button>Ajouter</button></div>'),V=L.querySelector("input");L.querySelector("button").addEventListener("click",()=>{const z=Ya(t,V.value);z?(a=z.id,_()):V.focus()}),r.appendChild(L);const F=f().map(z=>KE(z,Date.now())).reduce((z,K)=>({total:z.total+K.total,aRevoir:z.aRevoir+K.aRevoir,revisees:z.revisees+K.revisees}),{total:0,aRevoir:0,revisees:0});r.appendChild(Ee(`<p class="savoir-stats">${F.total} cartes · <b>${F.aRevoir} à revoir</b> · ${F.revisees} travaillées</p>`));const B=Ee('<details class="savoir-import"><summary>Coller des cartes (une par ligne : question :: réponse)</summary><textarea rows="4" placeholder="Capitale du Cameroun :: Yaoundé&#10;2 + 2 :: 4"></textarea><button>Importer</button></details>'),$=B.querySelector("textarea");B.querySelector("button").addEventListener("click",()=>{const z=a??Ya(t,"Mes cartes")?.id??null;if(!z)return;a=z;let K=0;for(const se of $.value.split(/\r?\n/)){const Ue=se.indexOf("::");Ue<=0||ic(t,z,se.slice(0,Ue),se.slice(Ue+2))&&K++}_(),K&&e.parler(`${K} cartes rangées dans ${h()?.nom??"Mes cartes"}.`,"posee")}),r.appendChild(B);const re=Ee('<div class="savoir-actions"><button class="savoir-dicter">🎤 Dicter un cours</button></div>');re.querySelector(".savoir-dicter").addEventListener("click",()=>{if(r.querySelector(".savoir-session")?.remove(),!e.sttDisponible){r.appendChild(Ee('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — colle ton cours en texte, ça marche aussi.</p>'));return}r.appendChild(Ee('<p class="savoir-msg">J’écoute… parle normalement, je retirerai les « euh » tout seul.</p>')),e.ecouter(z=>{const K=dy(z);if(r.querySelector(".savoir-msg")?.remove(),!K){r.appendChild(Ee('<p class="savoir-msg">Je n’ai rien entendu de assez net — redicte, sans te presser.</p>'));return}const Ue=a??Ya(t,"Mes cartes")?.id??null;if(!Ue)return;a=Ue;let Be=0;for(const Q of rp(K))ic(t,Ue,Q.verso,Q.recto)&&Be++;_();const X=Ee(Be?`<p class="savoir-msg">${Be} cartes nées de ta voix, rangées dans « ${pt(h()?.nom??"Mes cartes")} ». Révise quand tu veux.</p>`:'<p class="savoir-msg">Trop court pour faire des cartes — dicte-moi des phrases complètes, une idée par phrase.</p>');r.insertBefore(X,r.firstChild),Be&&e.parler(`${Be} cartes nées de ta dictée.`,"lumineuse")})}),r.appendChild(re);const ee=Ee('<div class="savoir-actions"><button class="savoir-reviser">Réviser maintenant</button><button class="savoir-quiz">Quiz du jour</button></div>');ee.querySelector(".savoir-reviser").addEventListener("click",()=>{if(o=qE(f(),Date.now()),o.length===0){r.querySelector(".savoir-session")?.remove(),r.appendChild(Ee('<p class="savoir-msg">Rien à revoir pour l’instant — repose-toi, ou importe des cartes.</p>'));return}x()}),ee.querySelector(".savoir-quiz").addEventListener("click",()=>{const z=h()??f().find(K=>K.fiches.length>=2);if(!z){r.appendChild(Ee('<p class="savoir-msg">Un quiz a besoin d’un paquet d’au moins deux cartes.</p>'));return}l={questions:$E(z,5),index:0,reponses:[],fini:!1},d()}),r.appendChild(ee)}function x(){r.querySelector(".savoir-session")?.remove();const y=o.shift();if(!y){r.appendChild(Ee('<p class="savoir-msg session">Fin de la file 🌿 — tout est revu, la mémoire fait son travail en silence.</p>'));return}const U=Ee(`<div class="savoir-session session">
      <p class="savoir-reste">encore ${o.length}</p>
      <p class="savoir-verso">${pt(y.verso)}</p>
      <div class="savoir-reponse" hidden><p class="savoir-recto">${pt(y.recto)}</p></div>
      <div class="savoir-actions">
        <button class="savoir-voir">Voir la réponse</button>
        <span class="savoir-noter" hidden>
          <button data-n="difficile">Difficile</button>
          <button data-n="bien">Bien</button>
          <button data-n="facile">Facile</button>
        </span>
      </div>
    </div>`),L=U.querySelector(".savoir-reponse"),V=U.querySelector(".savoir-noter");U.querySelector(".savoir-voir").addEventListener("click",()=>{L.hidden=!1,V.hidden=!1,U.querySelector(".savoir-voir").hidden=!0,e.parler(y.recto,"posee")}),V.querySelectorAll("button").forEach(k=>k.addEventListener("click",()=>{const F=a??m(y.id);F&&YE(t,F,y.id,k.dataset.n),x()})),r.appendChild(U)}function m(y){for(const U of Ki(t))if(U.fiches.some(L=>L.id===y))return U.id;return null}function d(){if(r.querySelector(".savoir-session")?.remove(),!l)return _();const y=l.questions[l.index];if(!y||l.fini){const V=l.reponses.filter((B,$)=>B===l.questions[$].bonne).length,k=l.questions.length;l=null,_();const F=Math.round(100*V/(k||1));r.insertBefore(Ee(`<p class="savoir-msg session">Quiz : ${V}/${k} (${F} %). ${F>=70?"Tu tiens le sujet.":"On creuse encore, tranquillement."}</p>`),r.firstChild),e.parler(`Quiz terminé : ${V} sur ${k}.`,"lumineuse");return}const U=Ee(`<div class="savoir-session session">
      <p class="savoir-reste">question ${l.index+1} / ${l.questions.length}</p>
      <p class="savoir-verso">${pt(y.enonce)}</p>
      <div class="savoir-choix"></div>
    </div>`),L=U.querySelector(".savoir-choix");e.parler(y.enonce,"posee"),y.choix.forEach((V,k)=>{const F=document.createElement("button");F.textContent=V,F.addEventListener("click",()=>{l.reponses[l.index]=k,[...L.children].forEach((B,$)=>B.classList.toggle("juste",$===y.bonne)),F.classList.toggle("faux",k!==y.bonne),e.parler(k===y.bonne?"Oui, exactement.":V,k===y.bonne?"lumineuse":"douce"),window.setTimeout(()=>{l.index++,d()},1100)}),L.appendChild(F)}),r.appendChild(U)}function b(){const y=Ee('<div class="savoir-ligne"><input type="text" placeholder="Que veux-tu apprendre ? (ex. la mitose)" aria-label="Sujet" /><button>Chercher</button></div>'),U=y.querySelector("input"),L=y.querySelector("button"),V=Ee('<div class="savoir-resultat"></div>');U.addEventListener("keydown",F=>{F.key==="Enter"&&k(U.value.trim())}),L.addEventListener("click",()=>k(U.value.trim()));function k(F){if(V.innerHTML="",!F)return;const B=JE(c(),F);B?A(B,V):T(F,V)}r.append(y,V)}function A(y,U){U.innerHTML="";const L=Ee(`<div class="savoir-fiche"><h4>${pt(y.titre)}</h4><p>${pt(y.resume)}</p></div>`),V=Ee('<div class="savoir-actions"></div>'),k=Ee("<button>En faire des cartes</button>");k.addEventListener("click",()=>{const B=h()??Ya(t,y.sujet);if(!B)return;a=B.id;let $=0;for(const re of rp(y.resume))ic(t,B.id,re.verso,re.recto)&&$++;U.appendChild(Ee(`<p class="savoir-msg">${$} cartes rangées dans « ${pt(B.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${$} cartes rangées.`,"lumineuse")}),V.appendChild(k);const F=/^https?:\/\//.test(y.url)?y.url:"";F&&V.appendChild(Ee(`<a class="savoir-lien" href="${pt(F)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),U.append(L,V)}function T(y,U){const L=Ee(`<div class="savoir-fiche"><p>« ${pt(y)} » ne fait pas encore partie de mes connaissances enregistrées.</p>
      <p class="savoir-note">Veux-tu que je me connecte pour ramener le maximum de ressources sur ce sujet ? Seul le sujet sort de l’appareil, rien sur toi.</p>
      <div class="savoir-actions"><button class="oui">Oui, cherche</button><button class="non">Garde pour plus tard</button></div></div>`);L.querySelector(".non").addEventListener("click",()=>U.innerHTML=""),L.querySelector(".oui").addEventListener("click",async()=>{const V=Ee('<p class="savoir-msg">Je cherche…</p>');U.appendChild(V);const k=await ey(y,fetch);if(V.remove(),!k){U.appendChild(Ee('<p class="savoir-msg">Pas de réponse du net pour l’instant — ou le sujet est trop précis. Réessaie, ou dicte-moi tes propres notes.</p>'));return}const F={sujet:y,titre:k.titre,resume:k.resume,url:k.url,ramene_a:Date.now()};t.setItem(cp,JSON.stringify(ZE(c(),F))),U.innerHTML="",A(F,U),e.parler("J’ai ramené de quoi apprendre.","lumineuse")}),U.appendChild(L)}function w(){const y=Ee('<input type="text" class="trad-langue" placeholder="Ta langue (ex. wolof, ewondo…)" aria-label="Langue" />'),U=Ee('<textarea class="trad-phrase" rows="2" placeholder="Écris (ou dicte dans la bulle du bas)…" aria-label="Phrase à traduire"></textarea>'),L=Ee('<div class="savoir-resultat"></div>'),V=Ee('<div class="savoir-actions"><button class="trad-faire">Traduire</button></div>'),k=Ee(`<details class="savoir-import"><summary>Ajouter à mon lexique (il reste ici, hors-ligne)</summary>
      <div class="savoir-actions"><button class="trad-dicter">🎤 Dicter un mot — dites « bonjour veut dire… »</button></div>
      <div class="savoir-ligne"><input type="text" placeholder="mot français" aria-label="Mot français" /><input type="text" placeholder="traduction dans ta langue" aria-label="Traduction" /><button>Ajouter</button></div></details>`);k.querySelector(".trad-dicter").addEventListener("click",()=>{if(!e.sttDisponible){L.innerHTML="",L.appendChild(Ee('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — écris le mot ci-dessous.</p>'));return}const ee=y.value.trim();L.innerHTML="",L.appendChild(Ee('<p class="savoir-msg">J’écoute… dis par exemple « bonjour veut dire naka nga def ».</p>')),e.ecouter(z=>{L.innerHTML="";const K=hy(z);if(!K){L.appendChild(Ee(`<p class="savoir-msg">J’ai entendu « ${pt(z)} » sans voir le couple — recommence avec « mot veut dire traduction ».</p>`));return}if(!ee){F.value=K.de,B.value=K.a,L.appendChild(Ee('<p class="savoir-msg">Donne-moi le nom de la langue en haut, puis appuie sur Ajouter — tout est prêt.</p>'));return}t.setItem(Yr,JSON.stringify(oo(u(),K.de,K.a,ee))),L.appendChild(Ee(`<p class="savoir-msg">${pt(K.de)} → ${pt(K.a)}, rangé dans mon carnet.</p>`)),e.parler(`${K.de} veut dire ${K.a}.`,"lumineuse")})});const[F,B]=[...k.querySelectorAll("input")];k.querySelector(".savoir-ligne button").addEventListener("click",()=>{const ee=y.value;if(!ee.trim()||!F.value.trim()||!B.value.trim())return;const z=ap(t.getItem(Yr));t.setItem(Yr,JSON.stringify(oo(z,F.value,B.value,ee))),F.value="",B.value="",e.parler("C’est dans mon carnet.","douce")}),y.value=localStorage.getItem("nath.trad.langue")??"",y.addEventListener("change",()=>localStorage.setItem("nath.trad.langue",y.value)),V.querySelector(".trad-faire").addEventListener("click",()=>{const ee=y.value,z=ty(U.value,ee,u());if(L.innerHTML="",z.resultat){const K=Ee(`<div class="savoir-fiche"><p class="trad-out">${pt(z.resultat)}</p></div>`),se=Ee("<button>Écouter</button>");se.addEventListener("click",()=>e.parler(z.resultat,"posee")),K.appendChild(se),L.appendChild(K),z.manques.length&&L.appendChild(Ee(`<p class="savoir-note">mots que je ne connais pas encore : ${pt(z.manques.join(", "))} — ajoute-les ci-dessous, ton lexique grandit pour toujours.</p>`))}else{const K=ry(ee);if(K.length){const se=Ee(`<p class="savoir-msg">Je ne connais encore rien dans cette langue — mais on m'a donné des mots sûrs en « ${pt(ee.trim())} ».</p>`),Ue=Ee("<button>Charger ce socle de mots</button>");Ue.addEventListener("click",()=>{let Be=u();for(const X of K)Be=oo(Be,X.de,X.a,ee.trim());t.setItem(Yr,JSON.stringify(Be)),L.innerHTML="",L.appendChild(Ee(`<p class="savoir-msg">${K.length} mots de vie rangés dans mon carnet. Écris une phrase, je saurai répondre.</p>`)),e.parler("Le socle est chargé. Ton lexique peut grandir.","lumineuse")}),se.appendChild(Ue),L.appendChild(se)}else L.appendChild(Ee('<p class="savoir-msg">Je ne connais encore aucun mot dans cette langue. Sème ton lexique une entrée à la fois, ou colle le carnet d’un autre plus bas — ensemble on traduit tout le monde.</p>'))}});const $=Ee(`<details class="savoir-import"><summary>Mon carnet complet — le prêter, ou emprunter celui d’un autre</summary>
      <div class="savoir-actions"><button class="trad-copier">Copier tout mon lexique</button></div>
      <textarea class="trad-collecte" rows="3" placeholder="les mots copiés se collent ici pour être prêtés" aria-label="Mon lexique à prêter" hidden></textarea>
      <textarea class="trad-import" rows="3" placeholder="Colle ici le carnet d’un autre (une ligne par mot : langue | mot :: traduction)" aria-label="Lexique à importer"></textarea>
      <div class="savoir-actions"><button class="trad-importer">Ajouter ces mots au mien</button></div></details>`),re=$.querySelector(".trad-collecte");$.querySelector(".trad-copier").addEventListener("click",async()=>{const ee=sy(u());if(!ee){e.parler("Mon carnet est encore vide — ajoute des mots, il sera prêt à partager.","douce");return}try{await navigator.clipboard.writeText(ee),L.innerHTML="",L.appendChild(Ee(`<p class="savoir-msg">${pt(String(ee.split(`
`).length))} mots copiés — colle-les chez qui veut, son lexique grandira.</p>`)),e.parler("C’est copié. Tu peux le prêter.","lumineuse")}catch{re.hidden=!1,re.value=ee,re.select(),L.appendChild(Ee('<p class="savoir-note">Sélectionne tout dans la case et copie — le carnet est prêt à être prêté.</p>'))}}),$.querySelector(".trad-importer").addEventListener("click",()=>{const ee=$.querySelector(".trad-import").value,z=u(),K=ay(ee,z),se=K.length-z.length;if(se<=0){L.appendChild(Ee('<p class="savoir-msg">Rien de nouveau là-dedans — ou les lignes ne sont pas dans le format « langue | mot :: traduction ».</p>'));return}t.setItem(Yr,JSON.stringify(K)),$.querySelector(".trad-import").value="",L.appendChild(Ee(`<p class="savoir-msg">${pt(String(se))} mots reçus d’un autre — merci à lui. Notre lexique est plus fort.</p>`)),e.parler(`${se} mots reçus. Merci à celui qui les a semés.`,"douce")}),r.append(y,U,V,L,k,$)}let C=null;const P=document.getElementById("patte"),G=P?P.innerHTML:"";function S(y){C===null&&(C=document.title);const U=op(y);document.documentElement.style.setProperty("--teinte",U);let L=document.querySelector('meta[name="theme-color"]');L||(L=document.createElement("meta"),L.name="theme-color",document.head.appendChild(L)),L.content=U,document.title=y.actif?y.slogan?`${y.nom} — ${y.slogan}`:y.nom:C,P&&(P.innerHTML=y.actif?`${pt(y.nom)} — <span>${pt(y.slogan||"l’assistant vivant")}</span>`:G)}function M(){const y=Ws(t),U=Ee('<div class="savoir-resultat"></div>');if(y.actif){const k=Ee(`<div class="savoir-fiche"><h4>${pt(y.nom)}</h4><p>${pt(y.slogan)}</p>
        <p class="savoir-note">Cet appareil porte le visage de « ${pt(y.organisation)} ».</p></div>`),F=Ee('<div class="savoir-actions"><button class="ent-perso">Revenir en mode personnel</button></div>');F.querySelector(".ent-perso").addEventListener("click",()=>{cy(t),S(Ws(t)),p("entreprise"),e.parler("Je reprends mon visage habituel.","douce")}),r.append(k,F)}const L=Ee(`<div class="savoir-fiche">
      <p class="savoir-note">Pour une école, une ONG, une équipe : la clé se demande à Nath-Tech avec le nom exact de l’organisation. Rien n’est bridé, on peut toujours revenir.</p>
      <div class="savoir-ligne"><input type="text" class="ent-org" placeholder="Organisation (ex. Lycée Bilingue de Douala)" aria-label="Organisation" /></div>
      <div class="savoir-ligne"><input type="text" class="ent-nom" placeholder="Nom visible (ex. LBD)" aria-label="Nom de la marque" /><input type="text" class="ent-slogan" placeholder="Slogan (facultatif)" aria-label="Slogan" /></div>
      <div class="savoir-ligne"><input type="color" class="ent-teinte" value="${pt(op(y))}" aria-label="Teinte" /><input type="text" class="ent-cle" placeholder="Clé d’équipe (blocs de 4)" aria-label="Clé d’équipe" /></div>
      <div class="savoir-actions"><button class="ent-ok">Habiller l’app pour mon équipe</button></div>
    </div>`);L.querySelector(".ent-ok").addEventListener("click",()=>{const k=B=>L.querySelector(`.${B}`).value;ly(t,{organisation:k("ent-org"),cle:k("ent-cle"),nom:k("ent-nom"),slogan:k("ent-slogan"),couleur:k("ent-teinte")})?(S(Ws(t)),p("entreprise"),e.parler(`Désormais, je travaille pour ${Ws(t).nom}.`,"lumineuse")):(U.innerHTML="",U.appendChild(Ee('<p class="savoir-msg">Cette clé n’ouvre rien pour ce nom-là — vérifie le nom exact de l’organisation et la clé, bloc par bloc.</p>')))});const V=Ee(`<div class="savoir-fiche">
      <p class="savoir-note">Nath Entreprise pour une école, une ONG, une équipe — toute l’équipe habillée, un seul prix :</p>
      <div class="savoir-ligne"><input type="number" class="ent-nb" min="1" placeholder="Nombre de personnes à équiper" aria-label="Nombre de personnes" /><button class="ent-devis">Estimer</button></div>
      <div class="ent-devis-out"></div>
    </div>`);V.querySelector(".ent-devis").addEventListener("click",()=>{const k=Number(V.querySelector(".ent-nb").value),F=V.querySelector(".ent-devis-out");if(F.innerHTML="",!Number.isFinite(k)||k<=0){F.appendChild(Ee('<p class="savoir-msg">Entre d’abord le nombre de personnes à équiper.</p>'));return}const B=py(k),$=B.mensuel===null?`<b>${pt(B.palier)}</b> — ${pt(lp(null))} : parle-nous de ton réseau, on trouvera le juste chiffre.`:`<b>${pt(B.palier)}</b> — ${pt(lp(B.mensuel))} par mois pour toute l’équipe, soit environ ${Math.round(B.mensuel/k).toLocaleString("fr-FR")} F par personne. Et plus vous êtes nombreux, moins chaque tête coûte.`;F.appendChild(Ee(`<p class="savoir-msg">${$}</p>`)),F.appendChild(Ee('<p class="savoir-note">Accord direct avec Nath-Tech (mobile money), puis la clé exacte de ton organisation. Le gratuit de chacun reste entier, toujours.</p>'))}),r.append(L,U,V)}return S(Ws(t)),n}function gy(t,e){return{eclair:(t==="tension"?.45:t==="tristesse"?.12:0)*(.3+.7*e),filer:e*.4}}const xo=document.getElementById("scene"),is=N3(xo),st=F3();st.seed=localStorage.getItem("nuage.seed")??crypto.randomUUID();localStorage.setItem("nuage.seed",st.seed);const So={cameraOn:!1,micOn:!1};V3(t=>{st.breath=Math.max(st.breath,t)}).then(t=>{So.micOn=t});const yu=document.getElementById("cam"),_y=OM(),sc=new NM(yu,localStorage,t=>{st.emotion=_y(FM(t))},t=>{So.cameraOn=t,yu.classList.toggle("video-actif",t)}),vy=typeof navigator<"u"&&!!navigator.mediaDevices?.getUserMedia,xy=document.getElementById("etat"),Mo=HM(st.seed);let hg=[.5,.5];WM(xo,(t,e)=>{hg=[t,e]});qM(t=>{st.breath=Math.max(st.breath,Math.abs(t))});zE(()=>({emotion:st.emotion,breath:st.breath,timeOfDay:st.timeOfDay,seed:Mo.musiqueSeed,bpm:st.bpm,cameraOn:So.cameraOn,micOn:So.micOn}),{cameraDisponible:vy,estOuverte:()=>sc.ouverte,basculer:()=>sc.basculer(),changerFace:()=>sc.basculerFace(),consentement:CM});my(localStorage);setInterval(()=>{const t=gy(st.emotion,qp(st).night);Math.random()<t.eclair&&is.eclair(),Math.random()<t.filer&&is.filer(.08+Math.random()*.75,.7+Math.random()*.25)},15e3);let bu=!1;xo.addEventListener("pointerdown",t=>{const e=xo.getBoundingClientRect();is.tap((t.clientX-e.left)/e.width,1-(t.clientY-e.top)/e.height),bu||(bu=YM(Mo.musiqueSeed))});const Sy=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Ka=[];setInterval(()=>{const t=GM(yu,Sy);t!=null&&(Ka.push(t),Ka.length>80&&Ka.shift(),st.bpm=zM(Ka,8))},125);let up=performance.now();function fg(t){const e=(t-up)/1e3;up=t;const n=new Date;if(st.timeOfDay=(n.getHours()+n.getMinutes()/60)/24,st.breath=Math.max(0,st.breath-e*.5),st.bpm){const i=Math.sin(Date.now()/(6e4/st.bpm)*2*Math.PI);st.breath=Math.max(st.breath,.08*i+.08)}is.apply(qp(st),hg),is.setBpm(st.bpm),is.frame(e),KM(st.emotion),JM(st.breath),xy.textContent=bu?`aura : ${Mo.nom} · humeur : ${st.emotion} · souffle : ${st.breath*100|0}% · pouls : ${st.bpm?Math.round(st.bpm):"—"}`:`aura : ${Mo.nom} · touche le ciel pour éveiller la musique`,requestAnimationFrame(fg)}requestAnimationFrame(fg);console.log("Nath Assist v1-alpha — ICF·Future by Nath-Tech");
