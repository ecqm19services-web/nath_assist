(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Lu="182",Pg=0,Yh=1,Dg=2,no=1,Ig=2,js=3,er=0,dn=1,wi=2,Li=0,es=1,Kh=2,Jh=3,Zh=4,Ug=5,mr=100,Ng=101,Fg=102,Og=103,Bg=104,kg=200,Vg=201,zg=202,Gg=203,uc=204,hc=205,Hg=206,Wg=207,qg=208,Xg=209,jg=210,$g=211,Yg=212,Kg=213,Jg=214,fc=0,dc=1,pc=2,as=3,mc=4,gc=5,_c=6,vc=7,vp=0,Zg=1,Qg=2,ci=0,xp=1,Sp=2,Mp=3,yp=4,Ep=5,bp=6,Tp=7,Ap=300,wr=301,os=302,xc=303,Sc=304,Ao=306,Mc=1e3,Ri=1001,yc=1002,Kt=1003,e_=1004,Ta=1005,tn=1006,cl=1007,_r=1008,On=1009,wp=1010,Cp=1011,na=1012,Pu=1013,di=1014,ai=1015,Ii=1016,Du=1017,Iu=1018,ia=1020,Rp=35902,Lp=35899,Pp=1021,Dp=1022,$n=1023,Ui=1026,vr=1027,Ip=1028,Uu=1029,ls=1030,Nu=1031,Fu=1033,io=33776,ro=33777,so=33778,ao=33779,Ec=35840,bc=35841,Tc=35842,Ac=35843,wc=36196,Cc=37492,Rc=37496,Lc=37488,Pc=37489,Dc=37490,Ic=37491,Uc=37808,Nc=37809,Fc=37810,Oc=37811,Bc=37812,kc=37813,Vc=37814,zc=37815,Gc=37816,Hc=37817,Wc=37818,qc=37819,Xc=37820,jc=37821,$c=36492,Yc=36494,Kc=36495,Jc=36283,Zc=36284,Qc=36285,eu=36286,t_=3200,n_=0,i_=1,Ki="",Fn="srgb",cs="srgb-linear",fo="linear",ct="srgb",Nr=7680,Qh=519,r_=512,s_=513,a_=514,Ou=515,o_=516,l_=517,Bu=518,c_=519,ef=35044,tf="300 es",oi=2e3,po=2001;function Up(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function mo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function u_(){const t=mo("canvas");return t.style.display="block",t}const nf={};function rf(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ve(...t){const e="THREE."+t.shift();console.warn(e,...t)}function tt(...t){const e="THREE."+t.shift();console.error(e,...t)}function ra(...t){const e=t.join(" ");e in nf||(nf[e]=!0,Ve(...t))}function h_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,tu=180/Math.PI;function ua(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function f_(t,e){return(t%e+e)%e}function hl(t,e,n){return(1-n)*t+n*e}function Os(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ha{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(o>=1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==f||c!==p||u!==_){let m=l*f+c*p+u*_+h*x;m<0&&(f=-f,p=-p,_=-_,x=-x,m=-m);let d=1-o;if(m<.9995){const b=Math.acos(m),T=Math.sin(b);d=Math.sin(d*b)/T,o=Math.sin(o*b)/T,l=l*d+f*o,c=c*d+p*o,u=u*d+_*o,h=h*d+x*o}else{l=l*d+f*o,c=c*d+p*o,u=u*d+_*o,h=h*d+x*o;const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+u*h+l*p-c*f,e[n+1]=l*_+u*f+c*h-o*p,e[n+2]=c*_+u*p+o*f-l*h,e[n+3]=u*_-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fl=new W,sf=new ha;class ze{constructor(e,n,i,r,s,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],_=i[8],x=r[0],m=r[3],d=r[6],b=r[1],T=r[4],A=r[7],w=r[2],C=r[5],L=r[8];return s[0]=a*x+o*b+l*w,s[3]=a*m+o*T+l*C,s[6]=a*d+o*A+l*L,s[1]=c*x+u*b+h*w,s[4]=c*m+u*T+h*C,s[7]=c*d+u*A+h*L,s[2]=f*x+p*b+_*w,s[5]=f*m+p*T+_*C,s[8]=f*d+p*A+_*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,_=n*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(dl.makeScale(e,n)),this}rotate(e){return this.premultiply(dl.makeRotation(-e)),this}translate(e,n){return this.premultiply(dl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new ze,af=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d_(){const t={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=ts(r.r),r.g=ts(r.g),r.b=ts(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?fo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ra("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ra("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[cs]:{primaries:e,whitePoint:i,transfer:fo,toXYZ:af,fromXYZ:of,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:af,fromXYZ:of,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),t}const Ze=d_();function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ts(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class p_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fr===void 0&&(Fr=mo("canvas")),Fr.width=e.width,Fr.height=e.height;const r=Fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Fr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=mo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let m_=0;class ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(pl(r[a].image)):s.push(pl(r[a]))}else s=pl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function pl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?p_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let g_=0;const ml=new W;class ln extends ys{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Ri,r=Ri,s=tn,a=_r,o=$n,l=On,c=ln.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=ua(),this.name="",this.source=new ku(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ve(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mc:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mc:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Ap;ln.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,A=(p+1)/2,w=(d+1)/2,C=(u+f)/4,L=(h+x)/4,G=(_+m)/4;return T>A&&T>w?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=L/i):A>w?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=C/r,s=G/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=L/s,r=G/s),this.set(i,r,s,n),this}let b=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class __ extends ys{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new ln(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ku(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends __{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Np extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class v_ extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fa{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),wa.subVectors(this.max,Bs),Or.subVectors(e.a,Bs),Br.subVectors(e.b,Bs),kr.subVectors(e.c,Bs),zi.subVectors(Br,Or),Gi.subVectors(kr,Br),ar.subVectors(Or,kr);let n=[0,-zi.z,zi.y,0,-Gi.z,Gi.y,0,-ar.z,ar.y,zi.z,0,-zi.x,Gi.z,0,-Gi.x,ar.z,0,-ar.x,-zi.y,zi.x,0,-Gi.y,Gi.x,0,-ar.y,ar.x,0];return!gl(n,Or,Br,kr,wa)||(n=[1,0,0,0,1,0,0,0,1],!gl(n,Or,Br,kr,wa))?!1:(Ca.crossVectors(zi,Gi),n=[Ca.x,Ca.y,Ca.z],gl(n,Or,Br,kr,wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new W,new W,new W,new W,new W,new W,new W,new W],Gn=new W,Aa=new fa,Or=new W,Br=new W,kr=new W,zi=new W,Gi=new W,ar=new W,Bs=new W,wa=new W,Ca=new W,or=new W;function gl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){or.fromArray(t,s);const o=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),u=i.dot(or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const x_=new fa,ks=new W,_l=new W;class Vu{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):x_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const n=ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(_l)),this.expandByPoint(ks.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ei=new W,vl=new W,Ra=new W,Hi=new W,xl=new W,La=new W,Sl=new W;class S_{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vl.copy(e).add(n).multiplyScalar(.5),Ra.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(vl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ra),o=Hi.dot(this.direction),l=-Hi.dot(Ra),c=Hi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vl).addScaledVector(Ra,f),p}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,s){xl.subVectors(n,e),La.subVectors(i,e),Sl.crossVectors(xl,La);let a=this.direction.dot(Sl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const l=o*this.direction.dot(La.crossVectors(Hi,La));if(l<0)return null;const c=o*this.direction.dot(xl.cross(Hi));if(c<0||l+c>a)return null;const u=-o*Hi.dot(Sl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,i,r,s,a,o,l,c,u,h,f,p,_,x,m){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,h,f,p,_,x,m)}set(e,n,i,r,s,a,o,l,c,u,h,f,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,_=o*u,x=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,x=c*h;n[0]=f+x*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=x+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,x=c*h;n[0]=f-x*o,n[4]=-a*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=x-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,_=o*u,x=o*h;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=x-f*h,n[8]=_*h+p,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+_,n[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+x,n[5]=a*u,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*u,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M_,e,y_)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Wi.crossVectors(i,_n),Wi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Wi.crossVectors(i,_n)),Wi.normalize(),Pa.crossVectors(_n,Wi),r[0]=Wi.x,r[4]=Pa.x,r[8]=_n.x,r[1]=Wi.y,r[5]=Pa.y,r[9]=_n.y,r[2]=Wi.z,r[6]=Pa.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],b=i[3],T=i[7],A=i[11],w=i[15],C=r[0],L=r[4],G=r[8],S=r[12],M=r[1],E=r[5],I=r[9],P=r[13],z=r[2],k=r[6],F=r[10],V=r[14],j=r[3],re=r[7],te=r[11],O=r[15];return s[0]=a*C+o*M+l*z+c*j,s[4]=a*L+o*E+l*k+c*re,s[8]=a*G+o*I+l*F+c*te,s[12]=a*S+o*P+l*V+c*O,s[1]=u*C+h*M+f*z+p*j,s[5]=u*L+h*E+f*k+p*re,s[9]=u*G+h*I+f*F+p*te,s[13]=u*S+h*P+f*V+p*O,s[2]=_*C+x*M+m*z+d*j,s[6]=_*L+x*E+m*k+d*re,s[10]=_*G+x*I+m*F+d*te,s[14]=_*S+x*P+m*V+d*O,s[3]=b*C+T*M+A*z+w*j,s[7]=b*L+T*E+A*k+w*re,s[11]=b*G+T*I+A*F+w*te,s[15]=b*S+T*P+A*V+w*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15],b=l*p-c*f,T=o*p-c*h,A=o*f-l*h,w=a*p-c*u,C=a*f-l*u,L=a*h-o*u;return n*(x*b-m*T+d*A)-i*(_*b-m*w+d*C)+r*(_*T-x*w+d*L)-s*(_*A-x*C+m*L)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],b=h*m*c-x*f*c+x*l*p-o*m*p-h*l*d+o*f*d,T=_*f*c-u*m*c-_*l*p+a*m*p+u*l*d-a*f*d,A=u*x*c-_*h*c+_*o*p-a*x*p-u*o*d+a*h*d,w=_*h*l-u*x*l-_*o*f+a*x*f+u*o*m-a*h*m,C=n*b+i*T+r*A+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=b*L,e[1]=(x*f*s-h*m*s-x*r*p+i*m*p+h*r*d-i*f*d)*L,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*d+i*l*d)*L,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*p-i*l*p)*L,e[4]=T*L,e[5]=(u*m*s-_*f*s+_*r*p-n*m*p-u*r*d+n*f*d)*L,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*d-n*l*d)*L,e[7]=(a*f*s-u*l*s+u*r*c-n*f*c-a*r*p+n*l*p)*L,e[8]=A*L,e[9]=(_*h*s-u*x*s-_*i*p+n*x*p+u*i*d-n*h*d)*L,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*d+n*o*d)*L,e[11]=(u*o*s-a*h*s-u*i*c+n*h*c+a*i*p-n*o*p)*L,e[12]=w*L,e[13]=(u*x*r-_*h*r+_*i*f-n*x*f-u*i*m+n*h*m)*L,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*m-n*o*m)*L,e[15]=(a*h*r-u*o*r+u*i*l-n*h*l-a*i*f+n*o*f)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,_=s*h,x=a*u,m=a*h,d=o*h,b=l*c,T=l*u,A=l*h,w=i.x,C=i.y,L=i.z;return r[0]=(1-(x+d))*w,r[1]=(p+A)*w,r[2]=(_-T)*w,r[3]=0,r[4]=(p-A)*C,r[5]=(1-(f+d))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(_+T)*L,r[9]=(m-b)*L,r[10]=(1-(f+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=Vr.set(r[0],r[1],r[2]).length();const a=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Hn.copy(this);const c=1/s,u=1/a,h=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,n.setFromRotationMatrix(Hn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let _,x;if(l)_=s/(a-s),x=a*s/(a-s);else if(o===oi)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===po)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,x;if(l)_=1/(a-s),x=a/(a-s);else if(o===oi)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===po)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new W,Hn=new Bt,M_=new W(0,0,0),y_=new W(1,1,1),Wi=new W,Pa=new W,_n=new W,lf=new Bt,cf=new ha;class Ni{constructor(e=0,n=0,i=0,r=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cf.setFromEuler(this),this.setFromQuaternion(cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E_=0;const uf=new W,zr=new ha,bi=new Bt,Da=new W,Vs=new W,b_=new W,T_=new ha,hf=new W(1,0,0),ff=new W(0,1,0),df=new W(0,0,1),pf={type:"added"},A_={type:"removed"},Gr={type:"childadded",child:null},Ml={type:"childremoved",child:null};class En extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new W,n=new Ni,i=new ha,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ze}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(hf,e)}rotateY(e){return this.rotateOnAxis(ff,e)}rotateZ(e){return this.rotateOnAxis(df,e)}translateOnAxis(e,n){return uf.copy(e).applyQuaternion(this.quaternion),this.position.add(uf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hf,e)}translateY(e){return this.translateOnAxis(ff,e)}translateZ(e){return this.translateOnAxis(df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Da.copy(e):Da.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Vs,Da,this.up):bi.lookAt(Da,Vs,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(bi),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(A_),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,b_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,T_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}En.DEFAULT_UP=new W(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new W,Ti=new W,yl=new W,Ai=new W,Hr=new W,Wr=new W,mf=new W,El=new W,bl=new W,Tl=new W,Al=new Lt,wl=new Lt,Cl=new Lt;class jn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),Ti.subVectors(i,n),yl.subVectors(e,n);const a=Wn.dot(Wn),o=Wn.dot(Ti),l=Wn.dot(yl),c=Ti.dot(Ti),u=Ti.dot(yl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Al.setScalar(0),wl.setScalar(0),Cl.setScalar(0),Al.fromBufferAttribute(e,n),wl.fromBufferAttribute(e,i),Cl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Al,s.x),a.addScaledVector(wl,s.y),a.addScaledVector(Cl,s.z),a}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),Ti.subVectors(e,n),Wn.cross(Ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Wn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Hr.subVectors(r,i),Wr.subVectors(s,i),El.subVectors(e,i);const l=Hr.dot(El),c=Wr.dot(El);if(l<=0&&c<=0)return n.copy(i);bl.subVectors(e,r);const u=Hr.dot(bl),h=Wr.dot(bl);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Hr,a);Tl.subVectors(e,s);const p=Hr.dot(Tl),_=Wr.dot(Tl);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Wr,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return mf.subVectors(s,r),o=(h-u)/(h-u+(p-_)),n.copy(r).addScaledVector(mf,o);const d=1/(m+x+f);return a=x*d,o=f*d,n.copy(i).addScaledVector(Hr,a).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Rl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=f_(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Rl(a,s,e+1/3),this.g=Rl(a,s,e),this.b=Rl(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=Op[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Ze.workingToColorSpace(Qt.copy(this),e),Math.round($e(Qt.r*255,0,255))*65536+Math.round($e(Qt.g*255,0,255))*256+Math.round($e(Qt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Fn){Ze.workingToColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(Ia);const i=hl(qi.h,Ia.h,n),r=hl(qi.s,Ia.s,n),s=hl(qi.l,Ia.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new je;je.NAMES=Op;let w_=0;class wo extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=es,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=hc,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ve(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uc&&(i.blendSrc=this.blendSrc),this.blendDst!==hc&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bp extends wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new W,Ua=new rt;let C_=0;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ef,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ua.fromBufferAttribute(this,n),Ua.applyMatrix3(e),this.setXY(n,Ua.x,Ua.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Os(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Os(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Os(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Os(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ef&&(e.usage=this.usage),e}}class kp extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Vp extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Di extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let R_=0;const Dn=new Bt,Ll=new En,qr=new W,vn=new fa,zs=new fa,Xt=new W;class Vi extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Up(e)?Vp:kp)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Di(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(vn.min,zs.min),vn.expandByPoint(Xt),Xt.addVectors(vn.max,zs.max),vn.expandByPoint(Xt)):(vn.expandByPoint(zs.min),vn.expandByPoint(zs.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),Xt.add(qr)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let G=0;G<i.count;G++)o[G]=new W,l[G]=new W;const c=new W,u=new W,h=new W,f=new rt,p=new rt,_=new rt,x=new W,m=new W;function d(G,S,M){c.fromBufferAttribute(i,G),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,G),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const E=1/(p.x*_.y-_.x*p.y);isFinite(E)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(E),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(E),o[G].add(x),o[S].add(x),o[M].add(x),l[G].add(m),l[S].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let G=0,S=b.length;G<S;++G){const M=b[G],E=M.start,I=M.count;for(let P=E,z=E+I;P<z;P+=3)d(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const T=new W,A=new W,w=new W,C=new W;function L(G){w.fromBufferAttribute(r,G),C.copy(w);const S=o[G];T.copy(S),T.sub(w.multiplyScalar(w.dot(S))).normalize(),A.crossVectors(C,S);const E=A.dot(l[G])<0?-1:1;a.setXYZW(G,T.x,T.y,T.z,E)}for(let G=0,S=b.length;G<S;++G){const M=b[G],E=M.start,I=M.count;for(let P=E,z=E+I;P<z;P+=3)L(e.getX(P+0)),L(e.getX(P+1)),L(e.getX(P+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,h=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new hi(f,u,h)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gf=new Bt,lr=new S_,Na=new Vu,_f=new W,Fa=new W,Oa=new W,Ba=new W,Pl=new W,ka=new W,vf=new W,Va=new W;class pi extends En{constructor(e=new Vi,n=new Bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Pl.fromBufferAttribute(h,e),a?ka.addScaledVector(Pl,u):ka.addScaledVector(Pl.sub(n),u))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(Na.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Na,_f)===null||lr.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(gf.copy(s).invert(),lr.copy(e.ray).applyMatrix4(gf),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=b,w=T;A<w;A+=3){const C=o.getX(A),L=o.getX(A+1),G=o.getX(A+2);r=za(this,d,e,i,c,u,h,C,L,G),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const b=o.getX(m),T=o.getX(m+1),A=o.getX(m+2);r=za(this,a,e,i,c,u,h,b,T,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],d=a[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=b,w=T;A<w;A+=3){const C=A,L=A+1,G=A+2;r=za(this,d,e,i,c,u,h,C,L,G),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const b=m,T=m+1,A=m+2;r=za(this,a,e,i,c,u,h,b,T,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function L_(t,e,n,i,r,s,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===er,o),l===null)return null;Va.copy(o),Va.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Va);return c<n.near||c>n.far?null:{distance:c,point:Va.clone(),object:t}}function za(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Fa),t.getVertexPosition(l,Oa),t.getVertexPosition(c,Ba);const u=L_(t,e,n,i,Fa,Oa,Ba,vf);if(u){const h=new W;jn.getBarycoord(vf,Fa,Oa,Ba,h),r&&(u.uv=jn.getInterpolatedAttribute(r,o,l,c,h,new rt)),s&&(u.uv1=jn.getInterpolatedAttribute(s,o,l,c,h,new rt)),a&&(u.normal=jn.getInterpolatedAttribute(a,o,l,c,h,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};jn.getNormal(Fa,Oa,Ba,f.normal),u.face=f,u.barycoord=h}return u}class da extends Vi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Di(c,3)),this.setAttribute("normal",new Di(u,3)),this.setAttribute("uv",new Di(h,2));function _(x,m,d,b,T,A,w,C,L,G,S){const M=A/L,E=w/G,I=A/2,P=w/2,z=C/2,k=L+1,F=G+1;let V=0,j=0;const re=new W;for(let te=0;te<F;te++){const O=te*E-P;for(let J=0;J<k;J++){const ee=J*M-I;re[x]=ee*b,re[m]=O*T,re[d]=z,c.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[d]=C>0?1:-1,u.push(re.x,re.y,re.z),h.push(J/L),h.push(1-te/G),V+=1}}for(let te=0;te<G;te++)for(let O=0;O<L;O++){const J=f+O+k*te,ee=f+O+k*(te+1),Se=f+(O+1)+k*(te+1),Be=f+(O+1)+k*te;l.push(J,ee,Be),l.push(ee,Se,Be),j+=6}o.addGroup(p,j,S),p+=j,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=us(t[n]);for(const r in i)e[r]=i[r]}return e}function P_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function zp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const D_={clone:us,merge:on};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=U_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=P_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class zu extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new W,xf=new rt,Sf=new rt;class qn extends zu{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tu*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,n){return this.getViewBounds(e,xf,Sf),n.subVectors(Sf,xf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ul*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,jr=1;class N_ extends En{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(Xr,jr,e,n);r.layers=this.layers,this.add(r);const s=new qn(Xr,jr,e,n);s.layers=this.layers,this.add(s);const a=new qn(Xr,jr,e,n);a.layers=this.layers,this.add(a);const o=new qn(Xr,jr,e,n);o.layers=this.layers,this.add(o);const l=new qn(Xr,jr,e,n);l.layers=this.layers,this.add(l);const c=new qn(Xr,jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===po)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Gp extends ln{constructor(e=[],n=wr,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hp extends ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new da(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Li});s.uniforms.tEquirect.value=n;const a=new pi(r,s),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=tn),new N_(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Ga extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F_={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class O_ extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class B_ extends ln{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Kt,u=Kt,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Il=new W,k_=new W,V_=new ze;class pr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Il.subVectors(i,n).cross(k_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Il),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||V_.getNormalMatrix(e),r=this.coplanarPoint(Il).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Vu,z_=new rt(.5,.5),Ha=new W;class Wp{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,a=new pr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],_=s[8],x=s[9],m=s[10],d=s[11],b=s[12],T=s[13],A=s[14],w=s[15];if(r[0].setComponents(c-a,p-u,d-_,w-b).normalize(),r[1].setComponents(c+a,p+u,d+_,w+b).normalize(),r[2].setComponents(c+o,p+h,d+x,w+T).normalize(),r[3].setComponents(c-o,p-h,d-x,w-T).normalize(),i)r[4].setComponents(l,f,m,A).normalize(),r[5].setComponents(c-l,p-f,d-m,w-A).normalize();else if(r[4].setComponents(c-l,p-f,d-m,w-A).normalize(),n===oi)r[5].setComponents(c+l,p+f,d+m,w+A).normalize();else if(n===po)r[5].setComponents(l,f,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){cr.center.set(0,0,0);const n=z_.distanceTo(e.center);return cr.radius=.7071067811865476+n,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ha.x=r.normal.x>0?e.max.x:e.min.x,Ha.y=r.normal.y>0?e.max.y:e.min.y,Ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sa extends ln{constructor(e,n,i=di,r,s,a,o=Kt,l=Kt,c,u=Ui,h=1){if(u!==Ui&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ku(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class G_ extends sa{constructor(e,n=di,i=wr,r,s,a=Kt,o=Kt,l,c=Ui){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qp extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pa extends Vi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=n/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const b=d*f-a;for(let T=0;T<c;T++){const A=T*h-s;_.push(A,-b,0),x.push(0,0,1),m.push(T/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const T=b+c*d,A=b+c*(d+1),w=b+1+c*(d+1),C=b+1+c*d;p.push(T,A,C),p.push(A,w,C)}this.setIndex(p),this.setAttribute("position",new Di(_,3)),this.setAttribute("normal",new Di(x,3)),this.setAttribute("uv",new Di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class H_ extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class W_ extends wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q_ extends wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xp extends zu{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class X_ extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Mf(t,e,n,i){const r=j_(i);switch(n){case Pp:return t*e;case Ip:return t*e/r.components*r.byteLength;case Uu:return t*e/r.components*r.byteLength;case ls:return t*e*2/r.components*r.byteLength;case Nu:return t*e*2/r.components*r.byteLength;case Dp:return t*e*3/r.components*r.byteLength;case $n:return t*e*4/r.components*r.byteLength;case Fu:return t*e*4/r.components*r.byteLength;case io:case ro:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case so:case ao:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bc:case Ac:return Math.max(t,16)*Math.max(e,8)/4;case Ec:case Tc:return Math.max(t,8)*Math.max(e,8)/2;case wc:case Cc:case Lc:case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Dc:case Ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case $c:case Yc:case Kc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Jc:case Zc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qc:case eu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function j_(t){switch(t){case On:case wp:return{byteLength:1,components:1};case na:case Cp:case Ii:return{byteLength:2,components:1};case Du:case Iu:return{byteLength:2,components:4};case di:case Pu:case ai:return{byteLength:4,components:1};case Rp:case Lp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lu}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lu);function jp(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $_(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K_=`#ifdef USE_ALPHAHASH
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
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tv=`#ifdef USE_AOMAP
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
#endif`,nv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iv=`#ifdef USE_BATCHING
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
#endif`,rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,av=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ov=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lv=`#ifdef USE_IRIDESCENCE
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
#endif`,cv=`#ifdef USE_BUMPMAP
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
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vv=`#define PI 3.141592653589793
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
} // validated`,xv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sv=`vec3 transformedNormal = objectNormal;
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
#endif`,Mv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Av=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wv=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fv=`#ifdef USE_GRADIENTMAP
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
}`,Ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vv=`uniform bool receiveShadow;
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
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xv=`PhysicalMaterial material;
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
#endif`,jv=`uniform sampler2D dfgLUT;
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
}`,$v=`
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
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r1=`#if defined( USE_POINTS_UV )
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
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`#ifdef USE_MORPHTARGETS
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
#endif`,h1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_1=`#ifdef USE_NORMALMAP
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
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I1=`float getShadowMask() {
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
}`,U1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N1=`#ifdef USE_SKINNING
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
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O1=`#ifdef USE_SKINNING
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
#endif`,B1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G1=`#ifdef USE_TRANSMISSION
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
#endif`,H1=`#ifdef USE_TRANSMISSION
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y1=`uniform sampler2D t2D;
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`#include <common>
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
}`,t2=`#if DEPTH_PACKING == 3200
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
}`,n2=`#define DISTANCE
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
}`,i2=`#define DISTANCE
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`uniform float scale;
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
}`,o2=`uniform vec3 diffuse;
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
}`,l2=`#include <common>
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
}`,c2=`uniform vec3 diffuse;
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
}`,u2=`#define LAMBERT
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
}`,h2=`#define LAMBERT
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
}`,f2=`#define MATCAP
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
}`,d2=`#define MATCAP
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
}`,p2=`#define NORMAL
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
}`,m2=`#define NORMAL
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
}`,g2=`#define PHONG
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
}`,_2=`#define PHONG
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
}`,v2=`#define STANDARD
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
}`,x2=`#define STANDARD
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
}`,S2=`#define TOON
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
}`,M2=`#define TOON
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
}`,y2=`uniform float size;
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
}`,E2=`uniform vec3 diffuse;
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
}`,b2=`#include <common>
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
}`,T2=`uniform vec3 color;
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
}`,A2=`uniform float rotation;
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
}`,w2=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Y_,alphahash_pars_fragment:K_,alphamap_fragment:J_,alphamap_pars_fragment:Z_,alphatest_fragment:Q_,alphatest_pars_fragment:ev,aomap_fragment:tv,aomap_pars_fragment:nv,batching_pars_vertex:iv,batching_vertex:rv,begin_vertex:sv,beginnormal_vertex:av,bsdfs:ov,iridescence_fragment:lv,bumpmap_pars_fragment:cv,clipping_planes_fragment:uv,clipping_planes_pars_fragment:hv,clipping_planes_pars_vertex:fv,clipping_planes_vertex:dv,color_fragment:pv,color_pars_fragment:mv,color_pars_vertex:gv,color_vertex:_v,common:vv,cube_uv_reflection_fragment:xv,defaultnormal_vertex:Sv,displacementmap_pars_vertex:Mv,displacementmap_vertex:yv,emissivemap_fragment:Ev,emissivemap_pars_fragment:bv,colorspace_fragment:Tv,colorspace_pars_fragment:Av,envmap_fragment:wv,envmap_common_pars_fragment:Cv,envmap_pars_fragment:Rv,envmap_pars_vertex:Lv,envmap_physical_pars_fragment:zv,envmap_vertex:Pv,fog_vertex:Dv,fog_pars_vertex:Iv,fog_fragment:Uv,fog_pars_fragment:Nv,gradientmap_pars_fragment:Fv,lightmap_pars_fragment:Ov,lights_lambert_fragment:Bv,lights_lambert_pars_fragment:kv,lights_pars_begin:Vv,lights_toon_fragment:Gv,lights_toon_pars_fragment:Hv,lights_phong_fragment:Wv,lights_phong_pars_fragment:qv,lights_physical_fragment:Xv,lights_physical_pars_fragment:jv,lights_fragment_begin:$v,lights_fragment_maps:Yv,lights_fragment_end:Kv,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:Qv,logdepthbuf_vertex:e1,map_fragment:t1,map_pars_fragment:n1,map_particle_fragment:i1,map_particle_pars_fragment:r1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:a1,morphinstance_vertex:o1,morphcolor_vertex:l1,morphnormal_vertex:c1,morphtarget_pars_vertex:u1,morphtarget_vertex:h1,normal_fragment_begin:f1,normal_fragment_maps:d1,normal_pars_fragment:p1,normal_pars_vertex:m1,normal_vertex:g1,normalmap_pars_fragment:_1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:x1,clearcoat_pars_fragment:S1,iridescence_pars_fragment:M1,opaque_fragment:y1,packing:E1,premultiplied_alpha_fragment:b1,project_vertex:T1,dithering_fragment:A1,dithering_pars_fragment:w1,roughnessmap_fragment:C1,roughnessmap_pars_fragment:R1,shadowmap_pars_fragment:L1,shadowmap_pars_vertex:P1,shadowmap_vertex:D1,shadowmask_pars_fragment:I1,skinbase_vertex:U1,skinning_pars_vertex:N1,skinning_vertex:F1,skinnormal_vertex:O1,specularmap_fragment:B1,specularmap_pars_fragment:k1,tonemapping_fragment:V1,tonemapping_pars_fragment:z1,transmission_fragment:G1,transmission_pars_fragment:H1,uv_pars_fragment:W1,uv_pars_vertex:q1,uv_vertex:X1,worldpos_vertex:j1,background_vert:$1,background_frag:Y1,backgroundCube_vert:K1,backgroundCube_frag:J1,cube_vert:Z1,cube_frag:Q1,depth_vert:e2,depth_frag:t2,distance_vert:n2,distance_frag:i2,equirect_vert:r2,equirect_frag:s2,linedashed_vert:a2,linedashed_frag:o2,meshbasic_vert:l2,meshbasic_frag:c2,meshlambert_vert:u2,meshlambert_frag:h2,meshmatcap_vert:f2,meshmatcap_frag:d2,meshnormal_vert:p2,meshnormal_frag:m2,meshphong_vert:g2,meshphong_frag:_2,meshphysical_vert:v2,meshphysical_frag:x2,meshtoon_vert:S2,meshtoon_frag:M2,points_vert:y2,points_frag:E2,shadow_vert:b2,shadow_frag:T2,sprite_vert:A2,sprite_frag:w2},he={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},si={basic:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:on([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:on([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:on([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:on([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:on([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:on([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:on([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:on([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:on([he.common,he.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:on([he.lights,he.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};si.physical={uniforms:on([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Wa={r:0,b:0,g:0},ur=new Ni,C2=new Bt;function R2(t,e,n,i,r,s,a){const o=new je(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function _(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?n:e).get(A)),A}function x(T){let A=!1;const w=_(T);w===null?d(o,l):w&&w.isColor&&(d(w,1),A=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(T,A){const w=_(A);w&&(w.isCubeTexture||w.mapping===Ao)?(u===void 0&&(u=new pi(new da(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:us(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ur.copy(A.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(C2.makeRotationFromEuler(ur)),u.material.toneMapped=Ze.getTransfer(w.colorSpace)!==ct,(h!==w||f!==w.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,p=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new pi(new pa(2,2),new Kn({name:"BackgroundMaterial",uniforms:us(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,p=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,A){T.getRGB(Wa,zp(t)),i.buffers.color.setClear(Wa.r,Wa.g,Wa.b,A,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,A=1){o.set(T),l=A,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:x,addToRenderList:m,dispose:b}}function L2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,E,I,P,z){let k=!1;const F=h(P,I,E);s!==F&&(s=F,c(s.object)),k=p(M,P,I,z),k&&_(M,P,I,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,A(M,E,I,P),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function h(M,E,I){const P=I.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let k=z[E.id];k===void 0&&(k={},z[E.id]=k);let F=k[P];return F===void 0&&(F=f(l()),k[P]=F),F}function f(M){const E=[],I=[],P=[];for(let z=0;z<n;z++)E[z]=0,I[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:P,object:M,attributes:{},index:null}}function p(M,E,I,P){const z=s.attributes,k=E.attributes;let F=0;const V=I.getAttributes();for(const j in V)if(V[j].location>=0){const te=z[j];let O=k[j];if(O===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(O=M.instanceColor)),te===void 0||te.attribute!==O||O&&te.data!==O.data)return!0;F++}return s.attributesNum!==F||s.index!==P}function _(M,E,I,P){const z={},k=E.attributes;let F=0;const V=I.getAttributes();for(const j in V)if(V[j].location>=0){let te=k[j];te===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const O={};O.attribute=te,te&&te.data&&(O.data=te.data),z[j]=O,F++}s.attributes=z,s.attributesNum=F,s.index=P}function x(){const M=s.newAttributes;for(let E=0,I=M.length;E<I;E++)M[E]=0}function m(M){d(M,0)}function d(M,E){const I=s.newAttributes,P=s.enabledAttributes,z=s.attributeDivisors;I[M]=1,P[M]===0&&(t.enableVertexAttribArray(M),P[M]=1),z[M]!==E&&(t.vertexAttribDivisor(M,E),z[M]=E)}function b(){const M=s.newAttributes,E=s.enabledAttributes;for(let I=0,P=E.length;I<P;I++)E[I]!==M[I]&&(t.disableVertexAttribArray(I),E[I]=0)}function T(M,E,I,P,z,k,F){F===!0?t.vertexAttribIPointer(M,E,I,z,k):t.vertexAttribPointer(M,E,I,P,z,k)}function A(M,E,I,P){x();const z=P.attributes,k=I.getAttributes(),F=E.defaultAttributeValues;for(const V in k){const j=k[V];if(j.location>=0){let re=z[V];if(re===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const te=re.normalized,O=re.itemSize,J=e.get(re);if(J===void 0)continue;const ee=J.buffer,Se=J.type,Be=J.bytesPerElement,q=Se===t.INT||Se===t.UNSIGNED_INT||re.gpuType===Pu;if(re.isInterleavedBufferAttribute){const Y=re.data,fe=Y.stride,Ne=re.offset;if(Y.isInstancedInterleavedBuffer){for(let me=0;me<j.locationSize;me++)d(j.location+me,Y.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let me=0;me<j.locationSize;me++)m(j.location+me);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let me=0;me<j.locationSize;me++)T(j.location+me,O/j.locationSize,Se,te,fe*Be,(Ne+O/j.locationSize*me)*Be,q)}else{if(re.isInstancedBufferAttribute){for(let Y=0;Y<j.locationSize;Y++)d(j.location+Y,re.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Y=0;Y<j.locationSize;Y++)m(j.location+Y);t.bindBuffer(t.ARRAY_BUFFER,ee);for(let Y=0;Y<j.locationSize;Y++)T(j.location+Y,O/j.locationSize,Se,te,O*Be,O/j.locationSize*Y*Be,q)}}else if(F!==void 0){const te=F[V];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(j.location,te);break;case 3:t.vertexAttrib3fv(j.location,te);break;case 4:t.vertexAttrib4fv(j.location,te);break;default:t.vertexAttrib1fv(j.location,te)}}}}b()}function w(){G();for(const M in i){const E=i[M];for(const I in E){const P=E[I];for(const z in P)u(P[z].object),delete P[z];delete E[I]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const E=i[M.id];for(const I in E){const P=E[I];for(const z in P)u(P[z].object),delete P[z];delete E[I]}delete i[M.id]}function L(M){for(const E in i){const I=i[E];if(I[M.id]===void 0)continue;const P=I[M.id];for(const z in P)u(P[z].object),delete P[z];delete I[M.id]}}function G(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:G,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function P2(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];n.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function D2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==$n&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const G=L===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==On&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ai&&!G)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:A,maxSamples:w,samples:C}}function I2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new pr,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,T=b*4;let A=d.clippingState||null;l.value=A,A=u(_,f,T,p);for(let w=0;w!==T;++w)A[w]=n[w];d.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,A=p;T!==x;++T,A+=4)a.copy(h[T]).applyMatrix4(b,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function U2(t){let e=new WeakMap;function n(a,o){return o===xc?a.mapping=wr:o===Sc&&(a.mapping=os),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===xc||o===Sc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hp(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Zi=4,yf=[.125,.215,.35,.446,.526,.582],gr=20,N2=256,Gs=new Xp,Ef=new je;let Ul=null,Nl=0,Fl=0,Ol=!1;const F2=new W;class bf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=F2}=s;Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Nl,Fl),this._renderer.xr.enabled=Ol,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===wr||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ii,format:$n,colorSpace:cs,depthBuffer:!1},r=Tf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=O2(s)),this._blurMaterial=k2(s,e,n),this._ggxMaterial=B2(s,e,n)}return r}_compileMaterial(e){const n=new pi(new Vi,e);this._renderer.compile(n,Gs)}_sceneToCubeUV(e,n,i,r,s){const l=new qn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ef),h.toneMapping=ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new da,new Bp({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let d=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,d=!0):(m.color.copy(Ef),d=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):A===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const w=this._cubeSize;$r(r,A*w,T>2?w:0,w,w),h.setRenderTarget(r),d&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===wr||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$r(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Gs)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Zi?i-_+Zi:0),d=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,$r(s,m,d,3*x,2*x),r.setRenderTarget(s),r.render(o,Gs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,$r(e,m,d,3*x,2*x),r.setRenderTarget(e),r.render(o,Gs)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gr-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):gr;m>gr&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);const d=[];let b=0;for(let L=0;L<gr;++L){const G=L/x,S=Math.exp(-G*G/2);d.push(S),L===0?b+=S:L<m&&(b+=2*S)}for(let L=0;L<d.length;L++)d[L]=d[L]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-i;const A=this._sizeLods[r],w=3*A*(r>T-Zi?r-T+Zi:0),C=4*(this._cubeSize-A);$r(n,w,C,3*A,2*A),l.setRenderTarget(n),l.render(h,Gs)}}function O2(t){const e=[],n=[],i=[];let r=t;const s=t-Zi+1+yf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Zi?l=yf[a-t+Zi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,d=1,b=new Float32Array(x*_*p),T=new Float32Array(m*_*p),A=new Float32Array(d*_*p);for(let C=0;C<p;C++){const L=C%3*2/3-1,G=C>2?0:-1,S=[L,G,0,L+2/3,G,0,L+2/3,G+1,0,L,G,0,L+2/3,G+1,0,L,G+1,0];b.set(S,x*_*C),T.set(f,m*_*C);const M=[C,C,C,C,C,C];A.set(M,d*_*C)}const w=new Vi;w.setAttribute("position",new hi(b,x)),w.setAttribute("uv",new hi(T,m)),w.setAttribute("faceIndex",new hi(A,d)),i.push(new pi(w,null)),r>Zi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Tf(t,e,n){const i=new ui(t,e,n);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function B2(t,e,n){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Co(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function k2(t,e,n){const i=new Float32Array(gr),r=new W(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Co(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Af(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function wf(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Co(){return`

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
	`}function V2(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===xc||l===Sc,u=l===wr||l===os;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new bf(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new bf(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function z2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ra("WebGLRenderer: "+i+" extension not supported."),r}}}function G2(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let T=0,A=b.length;T<A;T+=3){const w=b[T+0],C=b[T+1],L=b[T+2];f.push(w,C,C,L,L,w)}}else if(_!==void 0){const b=_.array;x=_.version;for(let T=0,A=b.length/3-1;T<A;T+=3){const w=T+0,C=T+1,L=T+2;f.push(w,C,C,L,L,w)}}else return;const m=new(Up(f)?Vp:kp)(f,1);m.version=x;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function H2(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*a,_),n.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function h(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,_);let d=0;for(let b=0;b<_;b++)d+=p[b]*x[b];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function W2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function q2(t,e,n){const i=new WeakMap,r=new Lt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),_===!0&&(T=2),x===!0&&(T=3);let A=o.attributes.position.count*T,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*h),L=new Np(C,A,w,h);L.type=ai,L.needsUpdate=!0;const G=T*4;for(let M=0;M<h;M++){const E=m[M],I=d[M],P=b[M],z=A*w*4*M;for(let k=0;k<E.count;k++){const F=k*G;p===!0&&(r.fromBufferAttribute(E,k),C[z+F+0]=r.x,C[z+F+1]=r.y,C[z+F+2]=r.z,C[z+F+3]=0),_===!0&&(r.fromBufferAttribute(I,k),C[z+F+4]=r.x,C[z+F+5]=r.y,C[z+F+6]=r.z,C[z+F+7]=0),x===!0&&(r.fromBufferAttribute(P,k),C[z+F+8]=r.x,C[z+F+9]=r.y,C[z+F+10]=r.z,C[z+F+11]=P.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new rt(A,w)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function X2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const j2={[xp]:"LINEAR_TONE_MAPPING",[Sp]:"REINHARD_TONE_MAPPING",[Mp]:"CINEON_TONE_MAPPING",[yp]:"ACES_FILMIC_TONE_MAPPING",[bp]:"AGX_TONE_MAPPING",[Tp]:"NEUTRAL_TONE_MAPPING",[Ep]:"CUSTOM_TONE_MAPPING"};function $2(t,e,n,i,r){const s=new ui(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new ui(e,n,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),o=new Vi;o.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Di([0,2,0,0,2,0],2));const l=new H_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new pi(o,l),u=new Xp(-1,1,1,-1,0,1);let h=null,f=null,p=!1,_,x=null,m=[],d=!1;this.setSize=function(b,T){s.setSize(b,T),a.setSize(b,T);for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(b,T)}},this.setEffects=function(b){m=b,d=m.length>0&&m[0].isRenderPass===!0;const T=s.width,A=s.height;for(let w=0;w<m.length;w++){const C=m[w];C.setSize&&C.setSize(T,A)}},this.begin=function(b,T){if(p||b.toneMapping===ci&&m.length===0)return!1;if(x=T,T!==null){const A=T.width,w=T.height;(s.width!==A||s.height!==w)&&this.setSize(A,w)}return d===!1&&b.setRenderTarget(s),_=b.toneMapping,b.toneMapping=ci,!0},this.hasRenderPass=function(){return d},this.end=function(b,T){b.toneMapping=_,p=!0;let A=s,w=a;for(let C=0;C<m.length;C++){const L=m[C];if(L.enabled!==!1&&(L.render(b,w,A,T),L.needsSwap!==!1)){const G=A;A=w,w=G}}if(h!==b.outputColorSpace||f!==b.toneMapping){h=b.outputColorSpace,f=b.toneMapping,l.defines={},Ze.getTransfer(h)===ct&&(l.defines.SRGB_TRANSFER="");const C=j2[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,b.setRenderTarget(x),b.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const $p=new ln,nu=new sa(1,1),Yp=new Np,Kp=new v_,Jp=new Gp,Cf=[],Rf=[],Lf=new Float32Array(16),Pf=new Float32Array(9),Df=new Float32Array(4);function Es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Cf[r];if(s===void 0&&(s=new Float32Array(r),Cf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ro(t,e){let n=Rf[e];n===void 0&&(n=new Int32Array(e),Rf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Y2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function K2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function J2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function Q2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Ht(n,i))return;Df.set(i),t.uniformMatrix2fv(this.addr,!1,Df),Wt(n,i)}}function ex(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Ht(n,i))return;Pf.set(i),t.uniformMatrix3fv(this.addr,!1,Pf),Wt(n,i)}}function tx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Ht(n,i))return;Lf.set(i),t.uniformMatrix4fv(this.addr,!1,Lf),Wt(n,i)}}function nx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ix(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function rx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function sx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function ax(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ox(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function lx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function cx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function ux(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(nu.compareFunction=n.isReversedDepthBuffer()?Bu:Ou,s=nu):s=$p,n.setTexture2D(e||s,r)}function hx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Kp,r)}function fx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Jp,r)}function dx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Yp,r)}function px(t){switch(t){case 5126:return Y2;case 35664:return K2;case 35665:return J2;case 35666:return Z2;case 35674:return Q2;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return rx;case 35669:case 35673:return sx;case 5125:return ax;case 36294:return ox;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return dx}}function mx(t,e){t.uniform1fv(this.addr,e)}function gx(t,e){const n=Es(e,this.size,2);t.uniform2fv(this.addr,n)}function _x(t,e){const n=Es(e,this.size,3);t.uniform3fv(this.addr,n)}function vx(t,e){const n=Es(e,this.size,4);t.uniform4fv(this.addr,n)}function xx(t,e){const n=Es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Sx(t,e){const n=Es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Mx(t,e){const n=Es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yx(t,e){t.uniform1iv(this.addr,e)}function Ex(t,e){t.uniform2iv(this.addr,e)}function bx(t,e){t.uniform3iv(this.addr,e)}function Tx(t,e){t.uniform4iv(this.addr,e)}function Ax(t,e){t.uniform1uiv(this.addr,e)}function wx(t,e){t.uniform2uiv(this.addr,e)}function Cx(t,e){t.uniform3uiv(this.addr,e)}function Rx(t,e){t.uniform4uiv(this.addr,e)}function Lx(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=nu:a=$p;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Px(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Kp,s[a])}function Dx(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Jp,s[a])}function Ix(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Yp,s[a])}function Ux(t){switch(t){case 5126:return mx;case 35664:return gx;case 35665:return _x;case 35666:return vx;case 35674:return xx;case 35675:return Sx;case 35676:return Mx;case 5124:case 35670:return yx;case 35667:case 35671:return Ex;case 35668:case 35672:return bx;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return wx;case 36295:return Cx;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ix}}class Nx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=px(n.type)}}class Fx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ux(n.type)}}class Ox{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function If(t,e){t.seq.push(e),t.map[e.id]=e}function Bx(t,e,n){const i=t.name,r=i.length;for(Bl.lastIndex=0;;){const s=Bl.exec(i),a=Bl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){If(n,c===void 0?new Nx(o,t,e):new Fx(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Ox(o),If(n,h)),n=h}}}class oo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Bx(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Uf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kx=37297;let Vx=0;function zx(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Nf=new ze;function Gx(t){Ze._getMatrix(Nf,Ze.workingColorSpace,t);const e=`mat3( ${Nf.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case fo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ff(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+zx(t.getShaderSource(e),o)}else return s}function Hx(t,e){const n=Gx(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Wx={[xp]:"Linear",[Sp]:"Reinhard",[Mp]:"Cineon",[yp]:"ACESFilmic",[bp]:"AgX",[Tp]:"Neutral",[Ep]:"Custom"};function qx(t,e){const n=Wx[e];return n===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const qa=new W;function Xx(){Ze.getLuminanceCoefficients(qa);const t=qa.x.toFixed(4),e=qa.y.toFixed(4),n=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jx(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function $x(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Yx(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function $s(t){return t!==""}function Of(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(t){return t.replace(Kx,Zx)}const Jx=new Map;function Zx(t,e){let n=Ge[e];if(n===void 0){const i=Jx.get(e);if(i!==void 0)n=Ge[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return iu(n)}const Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(t){return t.replace(Qx,e3)}function e3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vf(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const t3={[no]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function n3(t){return t3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const i3={[wr]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE_UV"};function r3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":i3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const s3={[os]:"ENVMAP_MODE_REFRACTION"};function a3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":s3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const o3={[vp]:"ENVMAP_BLENDING_MULTIPLY",[Zg]:"ENVMAP_BLENDING_MIX",[Qg]:"ENVMAP_BLENDING_ADD"};function l3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":o3[t.combine]||"ENVMAP_BLENDING_NONE"}function c3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function u3(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=n3(n),c=r3(n),u=a3(n),h=l3(n),f=c3(n),p=jx(n),_=$x(s),x=r.createProgram();let m,d,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter($s).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter($s).join(`
`),d.length>0&&(d+=`
`)):(m=[Vf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),d=[Vf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ci?"#define TONE_MAPPING":"",n.toneMapping!==ci?Ge.tonemapping_pars_fragment:"",n.toneMapping!==ci?qx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Hx("linearToOutputTexel",n.outputColorSpace),Xx(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($s).join(`
`)),a=iu(a),a=Of(a,n),a=Bf(a,n),o=iu(o),o=Of(o,n),o=Bf(o,n),a=kf(a),o=kf(o),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=b+m+a,A=b+d+o,w=Uf(r,r.VERTEX_SHADER,T),C=Uf(r,r.FRAGMENT_SHADER,A);r.attachShader(x,w),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(E){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(x)||"",P=r.getShaderInfoLog(w)||"",z=r.getShaderInfoLog(C)||"",k=I.trim(),F=P.trim(),V=z.trim();let j=!0,re=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,w,C);else{const te=Ff(r,w,"vertex"),O=Ff(r,C,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+k+`
`+te+`
`+O)}else k!==""?Ve("WebGLProgram: Program Info Log:",k):(F===""||V==="")&&(re=!1);re&&(E.diagnostics={runnable:j,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:d}})}r.deleteShader(w),r.deleteShader(C),G=new oo(r,x),S=Yx(r,x)}let G;this.getUniforms=function(){return G===void 0&&L(this),G};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,kx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=C,this}let h3=0;class f3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new d3(e),n.set(e,i)),i}}class d3{constructor(e){this.id=h3++,this.code=e,this.usedTimes=0}}function p3(t,e,n,i,r,s,a){const o=new Fp,l=new f3,c=new Set,u=[],h=new Map,f=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,E,I,P){const z=I.fog,k=P.geometry,F=S.isMeshStandardMaterial?I.environment:null,V=(S.isMeshStandardMaterial?n:e).get(S.envMap||F),j=V&&V.mapping===Ao?V.image.height:null,re=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&Ve("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,O=te!==void 0?te.length:0;let J=0;k.morphAttributes.position!==void 0&&(J=1),k.morphAttributes.normal!==void 0&&(J=2),k.morphAttributes.color!==void 0&&(J=3);let ee,Se,Be,q;if(re){const ot=si[re];ee=ot.vertexShader,Se=ot.fragmentShader}else ee=S.vertexShader,Se=S.fragmentShader,l.update(S),Be=l.getVertexShaderID(S),q=l.getFragmentShaderID(S);const Y=t.getRenderTarget(),fe=t.state.buffers.depth.getReversed(),Ne=P.isInstancedMesh===!0,me=P.isBatchedMesh===!0,He=!!S.map,yt=!!S.matcap,Ke=!!V,at=!!S.aoMap,dt=!!S.lightMap,We=!!S.bumpMap,It=!!S.normalMap,R=!!S.displacementMap,Ut=!!S.emissiveMap,st=!!S.metalnessMap,gt=!!S.roughnessMap,be=S.anisotropy>0,y=S.clearcoat>0,g=S.dispersion>0,U=S.iridescence>0,K=S.sheen>0,Q=S.transmission>0,$=be&&!!S.anisotropyMap,Ae=y&&!!S.clearcoatMap,oe=y&&!!S.clearcoatNormalMap,Ee=y&&!!S.clearcoatRoughnessMap,Oe=U&&!!S.iridescenceMap,ie=U&&!!S.iridescenceThicknessMap,ce=K&&!!S.sheenColorMap,ye=K&&!!S.sheenRoughnessMap,Te=!!S.specularMap,le=!!S.specularColorMap,qe=!!S.specularIntensityMap,D=Q&&!!S.transmissionMap,pe=Q&&!!S.thicknessMap,se=!!S.gradientMap,ge=!!S.alphaMap,ne=S.alphaTest>0,Z=!!S.alphaHash,ae=!!S.extensions;let ke=ci;S.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ke=t.toneMapping);const _t={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:Se,defines:S.defines,customVertexShaderID:Be,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:me,batchingColor:me&&P._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&P.instanceColor!==null,instancingMorph:Ne&&P.morphTexture!==null,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:cs,alphaToCoverage:!!S.alphaToCoverage,map:He,matcap:yt,envMap:Ke,envMapMode:Ke&&V.mapping,envMapCubeUVHeight:j,aoMap:at,lightMap:dt,bumpMap:We,normalMap:It,displacementMap:R,emissiveMap:Ut,normalMapObjectSpace:It&&S.normalMapType===i_,normalMapTangentSpace:It&&S.normalMapType===n_,metalnessMap:st,roughnessMap:gt,anisotropy:be,anisotropyMap:$,clearcoat:y,clearcoatMap:Ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:g,iridescence:U,iridescenceMap:Oe,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:ce,sheenRoughnessMap:ye,specularMap:Te,specularColorMap:le,specularIntensityMap:qe,transmission:Q,transmissionMap:D,thicknessMap:pe,gradientMap:se,opaque:S.transparent===!1&&S.blending===es&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:ne,alphaHash:Z,combine:S.combine,mapUv:He&&x(S.map.channel),aoMapUv:at&&x(S.aoMap.channel),lightMapUv:dt&&x(S.lightMap.channel),bumpMapUv:We&&x(S.bumpMap.channel),normalMapUv:It&&x(S.normalMap.channel),displacementMapUv:R&&x(S.displacementMap.channel),emissiveMapUv:Ut&&x(S.emissiveMap.channel),metalnessMapUv:st&&x(S.metalnessMap.channel),roughnessMapUv:gt&&x(S.roughnessMap.channel),anisotropyMapUv:$&&x(S.anisotropyMap.channel),clearcoatMapUv:Ae&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(S.sheenRoughnessMap.channel),specularMapUv:Te&&x(S.specularMap.channel),specularColorMapUv:le&&x(S.specularColorMap.channel),specularIntensityMapUv:qe&&x(S.specularIntensityMap.channel),transmissionMapUv:D&&x(S.transmissionMap.channel),thicknessMapUv:pe&&x(S.thicknessMap.channel),alphaMapUv:ge&&x(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(It||be),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(He||ge),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:P.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&E.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:Ut&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wi,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ae&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&S.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const E in S.defines)M.push(E),M.push(S.defines[E]);return S.isRawShaderMaterial===!1&&(b(M,S),T(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function A(S){const M=_[S.type];let E;if(M){const I=si[M];E=D_.clone(I.uniforms)}else E=S.uniforms;return E}function w(S,M){let E=h.get(M);return E!==void 0?++E.usedTimes:(E=new u3(t,M,S,s),u.push(E),h.set(M,E)),E}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),h.delete(S.cacheKey),S.destroy()}}function L(S){l.remove(S)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:A,acquireProgram:w,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:G}}function m3(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function g3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function zf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,p,_,x,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function o(h,f,p,_,x,m){const d=a(h,f,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,_,x,m){const d=a(h,f,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||g3),i.length>1&&i.sort(f||zf),r.length>1&&r.sort(f||zf)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function _3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Gf,t.set(i,[a])):r>=s.length?(a=new Gf,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function v3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new je};break;case"SpotLight":n={position:new W,direction:new W,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function x3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let S3=0;function M3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function y3(t){const e=new v3,n=x3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Bt,a=new Bt;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,b=0,T=0,A=0,w=0,C=0,L=0;c.sort(M3);for(let S=0,M=c.length;S<M;S++){const E=c[S],I=E.color,P=E.intensity,z=E.distance;let k=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===ls?k=E.shadow.map.texture:k=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=I.r*P,h+=I.g*P,f+=I.b*P;else if(E.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(E.sh.coefficients[F],P);L++}else if(E.isDirectionalLight){const F=e.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const V=E.shadow,j=n.get(E);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=E.shadow.matrix,b++}i.directional[p]=F,p++}else if(E.isSpotLight){const F=e.get(E);F.position.setFromMatrixPosition(E.matrixWorld),F.color.copy(I).multiplyScalar(P),F.distance=z,F.coneCos=Math.cos(E.angle),F.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),F.decay=E.decay,i.spot[x]=F;const V=E.shadow;if(E.map&&(i.spotLightMap[w]=E.map,w++,V.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[x]=V.matrix,E.castShadow){const j=n.get(E);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,i.spotShadow[x]=j,i.spotShadowMap[x]=k,A++}x++}else if(E.isRectAreaLight){const F=e.get(E);F.color.copy(I).multiplyScalar(P),F.halfWidth.set(E.width*.5,0,0),F.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=F,m++}else if(E.isPointLight){const F=e.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),F.distance=E.distance,F.decay=E.decay,E.castShadow){const V=E.shadow,j=n.get(E);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=E.shadow.matrix,T++}i.point[_]=F,_++}else if(E.isHemisphereLight){const F=e.get(E);F.skyColor.copy(E.color).multiplyScalar(P),F.groundColor.copy(E.groundColor).multiplyScalar(P),i.hemi[d]=F,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const G=i.hash;(G.directionalLength!==p||G.pointLength!==_||G.spotLength!==x||G.rectAreaLength!==m||G.hemiLength!==d||G.numDirectionalShadows!==b||G.numPointShadows!==T||G.numSpotShadows!==A||G.numSpotMaps!==w||G.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=A+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,G.directionalLength=p,G.pointLength=_,G.spotLength=x,G.rectAreaLength=m,G.hemiLength=d,G.numDirectionalShadows=b,G.numPointShadows=T,G.numSpotShadows=A,G.numSpotMaps=w,G.numLightProbes=L,i.version=S3++)}function l(c,u){let h=0,f=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const T=c[d];if(T.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),h++}else if(T.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Hf(t){const e=new y3(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function E3(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Hf(t),e.set(r,[o])):s>=a.length?(o=new Hf(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const b3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T3=`uniform sampler2D shadow_pass;
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
}`,A3=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],w3=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Wf=new Bt,Hs=new W,kl=new W;function C3(t,e,n){let i=new Wp;const r=new rt,s=new rt,a=new Lt,o=new W_,l=new q_,c={},u=n.maxTextureSize,h={[er]:dn,[dn]:er,[wi]:wi},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:b3,fragmentShader:T3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Vi;_.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pi(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let d=this.type;this.render=function(C,L,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===Ig&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=no);const S=t.getRenderTarget(),M=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Li),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const P=d!==this.type;P&&L.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(k=>k.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,k=C.length;z<k;z++){const F=C[z],V=F.shadow;if(V===void 0){Ve("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const j=V.getFrameExtents();if(r.multiply(j),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,V.mapSize.y=s.y)),V.map===null||P===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===js){if(F.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ui(r.x,r.y,{format:ls,type:Ii,minFilter:tn,magFilter:tn,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new sa(r.x,r.y,ai),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Ui,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Kt,V.map.depthTexture.magFilter=Kt}else{F.isPointLight?(V.map=new Hp(r.x),V.map.depthTexture=new G_(r.x,di)):(V.map=new ui(r.x,r.y),V.map.depthTexture=new sa(r.x,r.y,di)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Ui;const te=t.state.buffers.depth.getReversed();this.type===no?(V.map.depthTexture.compareFunction=te?Bu:Ou,V.map.depthTexture.minFilter=tn,V.map.depthTexture.magFilter=tn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Kt,V.map.depthTexture.magFilter=Kt)}V.camera.updateProjectionMatrix()}const re=V.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<re;te++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,te),t.clear();else{te===0&&(t.setRenderTarget(V.map),t.clear());const O=V.getViewport(te);a.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),I.viewport(a)}if(F.isPointLight){const O=V.camera,J=V.matrix,ee=F.distance||O.far;ee!==O.far&&(O.far=ee,O.updateProjectionMatrix()),Hs.setFromMatrixPosition(F.matrixWorld),O.position.copy(Hs),kl.copy(O.position),kl.add(A3[te]),O.up.copy(w3[te]),O.lookAt(kl),O.updateMatrixWorld(),J.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Wf.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Wf,O.coordinateSystem,O.reversedDepth)}else V.updateMatrices(F);i=V.getFrustum(),A(L,G,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===js&&b(V,G),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,E)};function b(C,L){const G=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ui(r.x,r.y,{format:ls,type:Ii})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(L,null,G,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(L,null,G,p,x,null)}function T(C,L,G,S){let M=null;const E=G.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)M=E;else if(M=G.isPointLight===!0?l:o,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const I=M.uuid,P=L.uuid;let z=c[I];z===void 0&&(z={},c[I]=z);let k=z[P];k===void 0&&(k=M.clone(),z[P]=k,L.addEventListener("dispose",w)),M=k}if(M.visible=L.visible,M.wireframe=L.wireframe,S===js?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:h[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,G.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=t.properties.get(M);I.light=G}return M}function A(C,L,G,S,M){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===js)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld);const P=e.update(C),z=C.material;if(Array.isArray(z)){const k=P.groups;for(let F=0,V=k.length;F<V;F++){const j=k[F],re=z[j.materialIndex];if(re&&re.visible){const te=T(C,re,S,M);C.onBeforeShadow(t,C,L,G,P,te,j),t.renderBufferDirect(G,null,P,te,C,j),C.onAfterShadow(t,C,L,G,P,te,j)}}}else if(z.visible){const k=T(C,z,S,M);C.onBeforeShadow(t,C,L,G,P,k,null),t.renderBufferDirect(G,null,P,k,C,null),C.onAfterShadow(t,C,L,G,P,k,null)}}const I=C.children;for(let P=0,z=I.length;P<z;P++)A(I[P],L,G,S,M)}function w(C){C.target.removeEventListener("dispose",w);for(const G in c){const S=c[G],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const R3={[fc]:dc,[pc]:_c,[mc]:vc,[as]:gc,[dc]:fc,[_c]:pc,[vc]:mc,[gc]:as};function L3(t,e){function n(){let D=!1;const pe=new Lt;let se=null;const ge=new Lt(0,0,0,0);return{setMask:function(ne){se!==ne&&!D&&(t.colorMask(ne,ne,ne,ne),se=ne)},setLocked:function(ne){D=ne},setClear:function(ne,Z,ae,ke,_t){_t===!0&&(ne*=ke,Z*=ke,ae*=ke),pe.set(ne,Z,ae,ke),ge.equals(pe)===!1&&(t.clearColor(ne,Z,ae,ke),ge.copy(pe))},reset:function(){D=!1,se=null,ge.set(-1,0,0,0)}}}function i(){let D=!1,pe=!1,se=null,ge=null,ne=null;return{setReversed:function(Z){if(pe!==Z){const ae=e.get("EXT_clip_control");Z?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),pe=Z;const ke=ne;ne=null,this.setClear(ke)}},getReversed:function(){return pe},setTest:function(Z){Z?Y(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(Z){se!==Z&&!D&&(t.depthMask(Z),se=Z)},setFunc:function(Z){if(pe&&(Z=R3[Z]),ge!==Z){switch(Z){case fc:t.depthFunc(t.NEVER);break;case dc:t.depthFunc(t.ALWAYS);break;case pc:t.depthFunc(t.LESS);break;case as:t.depthFunc(t.LEQUAL);break;case mc:t.depthFunc(t.EQUAL);break;case gc:t.depthFunc(t.GEQUAL);break;case _c:t.depthFunc(t.GREATER);break;case vc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Z}},setLocked:function(Z){D=Z},setClear:function(Z){ne!==Z&&(pe&&(Z=1-Z),t.clearDepth(Z),ne=Z)},reset:function(){D=!1,se=null,ge=null,ne=null,pe=!1}}}function r(){let D=!1,pe=null,se=null,ge=null,ne=null,Z=null,ae=null,ke=null,_t=null;return{setTest:function(ot){D||(ot?Y(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(ot){pe!==ot&&!D&&(t.stencilMask(ot),pe=ot)},setFunc:function(ot,ei,Mi){(se!==ot||ge!==ei||ne!==Mi)&&(t.stencilFunc(ot,ei,Mi),se=ot,ge=ei,ne=Mi)},setOp:function(ot,ei,Mi){(Z!==ot||ae!==ei||ke!==Mi)&&(t.stencilOp(ot,ei,Mi),Z=ot,ae=ei,ke=Mi)},setLocked:function(ot){D=ot},setClear:function(ot){_t!==ot&&(t.clearStencil(ot),_t=ot)},reset:function(){D=!1,pe=null,se=null,ge=null,ne=null,Z=null,ae=null,ke=null,_t=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,b=null,T=null,A=null,w=null,C=null,L=new je(0,0,0),G=0,S=!1,M=null,E=null,I=null,P=null,z=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=V>=1):j.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=V>=2);let re=null,te={};const O=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),ee=new Lt().fromArray(O),Se=new Lt().fromArray(J);function Be(D,pe,se,ge){const ne=new Uint8Array(4),Z=t.createTexture();t.bindTexture(D,Z),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ae=0;ae<se;ae++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(pe+ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return Z}const q={};q[t.TEXTURE_2D]=Be(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=Be(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=Be(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=Be(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(t.DEPTH_TEST),a.setFunc(as),We(!1),It(Yh),Y(t.CULL_FACE),at(Li);function Y(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function fe(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Ne(D,pe){return h[D]!==pe?(t.bindFramebuffer(D,pe),h[D]=pe,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=pe),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function me(D,pe){let se=p,ge=!1;if(D){se=f.get(pe),se===void 0&&(se=[],f.set(pe,se));const ne=D.textures;if(se.length!==ne.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Z=0,ae=ne.length;Z<ae;Z++)se[Z]=t.COLOR_ATTACHMENT0+Z;se.length=ne.length,ge=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,ge=!0);ge&&t.drawBuffers(se)}function He(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const yt={[mr]:t.FUNC_ADD,[Ng]:t.FUNC_SUBTRACT,[Fg]:t.FUNC_REVERSE_SUBTRACT};yt[Og]=t.MIN,yt[Bg]=t.MAX;const Ke={[kg]:t.ZERO,[Vg]:t.ONE,[zg]:t.SRC_COLOR,[uc]:t.SRC_ALPHA,[jg]:t.SRC_ALPHA_SATURATE,[qg]:t.DST_COLOR,[Hg]:t.DST_ALPHA,[Gg]:t.ONE_MINUS_SRC_COLOR,[hc]:t.ONE_MINUS_SRC_ALPHA,[Xg]:t.ONE_MINUS_DST_COLOR,[Wg]:t.ONE_MINUS_DST_ALPHA,[$g]:t.CONSTANT_COLOR,[Yg]:t.ONE_MINUS_CONSTANT_COLOR,[Kg]:t.CONSTANT_ALPHA,[Jg]:t.ONE_MINUS_CONSTANT_ALPHA};function at(D,pe,se,ge,ne,Z,ae,ke,_t,ot){if(D===Li){x===!0&&(fe(t.BLEND),x=!1);return}if(x===!1&&(Y(t.BLEND),x=!0),D!==Ug){if(D!==m||ot!==S){if((d!==mr||A!==mr)&&(t.blendEquation(t.FUNC_ADD),d=mr,A=mr),ot)switch(D){case es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kh:t.blendFunc(t.ONE,t.ONE);break;case Jh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",D);break}else switch(D){case es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Jh:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",D);break}b=null,T=null,w=null,C=null,L.set(0,0,0),G=0,m=D,S=ot}return}ne=ne||pe,Z=Z||se,ae=ae||ge,(pe!==d||ne!==A)&&(t.blendEquationSeparate(yt[pe],yt[ne]),d=pe,A=ne),(se!==b||ge!==T||Z!==w||ae!==C)&&(t.blendFuncSeparate(Ke[se],Ke[ge],Ke[Z],Ke[ae]),b=se,T=ge,w=Z,C=ae),(ke.equals(L)===!1||_t!==G)&&(t.blendColor(ke.r,ke.g,ke.b,_t),L.copy(ke),G=_t),m=D,S=!1}function dt(D,pe){D.side===wi?fe(t.CULL_FACE):Y(t.CULL_FACE);let se=D.side===dn;pe&&(se=!se),We(se),D.blending===es&&D.transparent===!1?at(Li):at(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ge=D.stencilWrite;o.setTest(ge),ge&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Y(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){M!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),M=D)}function It(D){D!==Pg?(Y(t.CULL_FACE),D!==E&&(D===Yh?t.cullFace(t.BACK):D===Dg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),E=D}function R(D){D!==I&&(F&&t.lineWidth(D),I=D)}function Ut(D,pe,se){D?(Y(t.POLYGON_OFFSET_FILL),(P!==pe||z!==se)&&(t.polygonOffset(pe,se),P=pe,z=se)):fe(t.POLYGON_OFFSET_FILL)}function st(D){D?Y(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function gt(D){D===void 0&&(D=t.TEXTURE0+k-1),re!==D&&(t.activeTexture(D),re=D)}function be(D,pe,se){se===void 0&&(re===null?se=t.TEXTURE0+k-1:se=re);let ge=te[se];ge===void 0&&(ge={type:void 0,texture:void 0},te[se]=ge),(ge.type!==D||ge.texture!==pe)&&(re!==se&&(t.activeTexture(se),re=se),t.bindTexture(D,pe||q[D]),ge.type=D,ge.texture=pe)}function y(){const D=te[re];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function K(){try{t.texSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function Q(){try{t.texSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function Ae(){try{t.compressedTexSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function oe(){try{t.texStorage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function Ee(){try{t.texStorage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function Oe(){try{t.texImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function ie(){try{t.texImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function ce(D){ee.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function ye(D){Se.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Se.copy(D))}function Te(D,pe){let se=c.get(pe);se===void 0&&(se=new WeakMap,c.set(pe,se));let ge=se.get(D);ge===void 0&&(ge=t.getUniformBlockIndex(pe,D.name),se.set(D,ge))}function le(D,pe){const ge=c.get(pe).get(D);l.get(pe)!==ge&&(t.uniformBlockBinding(pe,ge,D.__bindingPointIndex),l.set(pe,ge))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},re=null,te={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,b=null,T=null,A=null,w=null,C=null,L=new je(0,0,0),G=0,S=!1,M=null,E=null,I=null,P=null,z=null,ee.set(0,0,t.canvas.width,t.canvas.height),Se.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:fe,bindFramebuffer:Ne,drawBuffers:me,useProgram:He,setBlending:at,setMaterial:dt,setFlipSided:We,setCullFace:It,setLineWidth:R,setPolygonOffset:Ut,setScissorTest:st,activeTexture:gt,bindTexture:be,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:Oe,texImage3D:ie,updateUBOMapping:Te,uniformBlockBinding:le,texStorage2D:oe,texStorage3D:Ee,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:Ae,scissor:ce,viewport:ye,reset:qe}}function P3(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return p?new OffscreenCanvas(y,g):mo("canvas")}function x(y,g,U){let K=1;const Q=be(y);if((Q.width>U||Q.height>U)&&(K=U/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const $=Math.floor(K*Q.width),Ae=Math.floor(K*Q.height);h===void 0&&(h=_($,Ae));const oe=g?_($,Ae):h;return oe.width=$,oe.height=Ae,oe.getContext("2d").drawImage(y,0,0,$,Ae),Ve("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Ae+")."),oe}else return"data"in y&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){t.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(y,g,U,K,Q=!1){if(y!==null){if(t[y]!==void 0)return t[y];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let $=g;if(g===t.RED&&(U===t.FLOAT&&($=t.R32F),U===t.HALF_FLOAT&&($=t.R16F),U===t.UNSIGNED_BYTE&&($=t.R8)),g===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.R8UI),U===t.UNSIGNED_SHORT&&($=t.R16UI),U===t.UNSIGNED_INT&&($=t.R32UI),U===t.BYTE&&($=t.R8I),U===t.SHORT&&($=t.R16I),U===t.INT&&($=t.R32I)),g===t.RG&&(U===t.FLOAT&&($=t.RG32F),U===t.HALF_FLOAT&&($=t.RG16F),U===t.UNSIGNED_BYTE&&($=t.RG8)),g===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RG8UI),U===t.UNSIGNED_SHORT&&($=t.RG16UI),U===t.UNSIGNED_INT&&($=t.RG32UI),U===t.BYTE&&($=t.RG8I),U===t.SHORT&&($=t.RG16I),U===t.INT&&($=t.RG32I)),g===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RGB8UI),U===t.UNSIGNED_SHORT&&($=t.RGB16UI),U===t.UNSIGNED_INT&&($=t.RGB32UI),U===t.BYTE&&($=t.RGB8I),U===t.SHORT&&($=t.RGB16I),U===t.INT&&($=t.RGB32I)),g===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&($=t.RGBA8UI),U===t.UNSIGNED_SHORT&&($=t.RGBA16UI),U===t.UNSIGNED_INT&&($=t.RGBA32UI),U===t.BYTE&&($=t.RGBA8I),U===t.SHORT&&($=t.RGBA16I),U===t.INT&&($=t.RGBA32I)),g===t.RGB&&(U===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),g===t.RGBA){const Ae=Q?fo:Ze.getTransfer(K);U===t.FLOAT&&($=t.RGBA32F),U===t.HALF_FLOAT&&($=t.RGBA16F),U===t.UNSIGNED_BYTE&&($=Ae===ct?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function A(y,g){let U;return y?g===null||g===di||g===ia?U=t.DEPTH24_STENCIL8:g===ai?U=t.DEPTH32F_STENCIL8:g===na&&(U=t.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===di||g===ia?U=t.DEPTH_COMPONENT24:g===ai?U=t.DEPTH_COMPONENT32F:g===na&&(U=t.DEPTH_COMPONENT16),U}function w(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Kt&&y.minFilter!==tn?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function C(y){const g=y.target;g.removeEventListener("dispose",C),G(g),g.isVideoTexture&&u.delete(g)}function L(y){const g=y.target;g.removeEventListener("dispose",L),M(g)}function G(y){const g=i.get(y);if(g.__webglInit===void 0)return;const U=y.source,K=f.get(U);if(K){const Q=K[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(y),Object.keys(K).length===0&&f.delete(U)}i.remove(y)}function S(y){const g=i.get(y);t.deleteTexture(g.__webglTexture);const U=y.source,K=f.get(U);delete K[g.__cacheKey],a.memory.textures--}function M(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let Q=0;Q<g.__webglFramebuffer[K].length;Q++)t.deleteFramebuffer(g.__webglFramebuffer[K][Q]);else t.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)t.deleteFramebuffer(g.__webglFramebuffer[K]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=y.textures;for(let K=0,Q=U.length;K<Q;K++){const $=i.get(U[K]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(U[K])}i.remove(y)}let E=0;function I(){E=0}function P(){const y=E;return y>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),E+=1,y}function z(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function k(y,g){const U=i.get(y);if(y.isVideoTexture&&st(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&U.__version!==y.version){const K=y.image;if(K===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,y,g);return}}else y.isExternalTexture&&(U.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+g)}function F(y,g){const U=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){q(U,y,g);return}else y.isExternalTexture&&(U.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+g)}function V(y,g){const U=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){q(U,y,g);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+g)}function j(y,g){const U=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&U.__version!==y.version){Y(U,y,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+g)}const re={[Mc]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[yc]:t.MIRRORED_REPEAT},te={[Kt]:t.NEAREST,[e_]:t.NEAREST_MIPMAP_NEAREST,[Ta]:t.NEAREST_MIPMAP_LINEAR,[tn]:t.LINEAR,[cl]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},O={[r_]:t.NEVER,[c_]:t.ALWAYS,[s_]:t.LESS,[Ou]:t.LEQUAL,[a_]:t.EQUAL,[Bu]:t.GEQUAL,[o_]:t.GREATER,[l_]:t.NOTEQUAL};function J(y,g){if(g.type===ai&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===tn||g.magFilter===cl||g.magFilter===Ta||g.magFilter===_r||g.minFilter===tn||g.minFilter===cl||g.minFilter===Ta||g.minFilter===_r)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,re[g.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,re[g.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,re[g.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,te[g.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,te[g.minFilter]),g.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,O[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Kt||g.minFilter!==Ta&&g.minFilter!==_r||g.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ee(y,g){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",C));const K=g.source;let Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));const $=z(g);if($!==y.__cacheKey){Q[$]===void 0&&(Q[$]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[$].usedTimes++;const Ae=Q[y.__cacheKey];Ae!==void 0&&(Q[y.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(g)),y.__cacheKey=$,y.__webglTexture=Q[$].texture}return U}function Se(y,g,U){return Math.floor(Math.floor(y/U)/g)}function Be(y,g,U,K){const $=y.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,U,K,g.data);else{$.sort((ie,ce)=>ie.start-ce.start);let Ae=0;for(let ie=1;ie<$.length;ie++){const ce=$[Ae],ye=$[ie],Te=ce.start+ce.count,le=Se(ye.start,g.width,4),qe=Se(ce.start,g.width,4);ye.start<=Te+1&&le===qe&&Se(ye.start+ye.count-1,g.width,4)===le?ce.count=Math.max(ce.count,ye.start+ye.count-ce.start):(++Ae,$[Ae]=ye)}$.length=Ae+1;const oe=t.getParameter(t.UNPACK_ROW_LENGTH),Ee=t.getParameter(t.UNPACK_SKIP_PIXELS),Oe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ie=0,ce=$.length;ie<ce;ie++){const ye=$[ie],Te=Math.floor(ye.start/4),le=Math.ceil(ye.count/4),qe=Te%g.width,D=Math.floor(Te/g.width),pe=le,se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,qe,D,pe,se,U,K,g.data)}y.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,oe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,Oe)}}function q(y,g,U){let K=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=t.TEXTURE_3D);const Q=ee(y,g),$=g.source;n.bindTexture(K,y.__webglTexture,t.TEXTURE0+U);const Ae=i.get($);if($.version!==Ae.__version||Q===!0){n.activeTexture(t.TEXTURE0+U);const oe=Ze.getPrimaries(Ze.workingColorSpace),Ee=g.colorSpace===Ki?null:Ze.getPrimaries(g.colorSpace),Oe=g.colorSpace===Ki||oe===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ie=x(g.image,!1,r.maxTextureSize);ie=gt(g,ie);const ce=s.convert(g.format,g.colorSpace),ye=s.convert(g.type);let Te=T(g.internalFormat,ce,ye,g.colorSpace,g.isVideoTexture);J(K,g);let le;const qe=g.mipmaps,D=g.isVideoTexture!==!0,pe=Ae.__version===void 0||Q===!0,se=$.dataReady,ge=w(g,ie);if(g.isDepthTexture)Te=A(g.format===vr,g.type),pe&&(D?n.texStorage2D(t.TEXTURE_2D,1,Te,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Te,ie.width,ie.height,0,ce,ye,null));else if(g.isDataTexture)if(qe.length>0){D&&pe&&n.texStorage2D(t.TEXTURE_2D,ge,Te,qe[0].width,qe[0].height);for(let ne=0,Z=qe.length;ne<Z;ne++)le=qe[ne],D?se&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,le.width,le.height,ce,ye,le.data):n.texImage2D(t.TEXTURE_2D,ne,Te,le.width,le.height,0,ce,ye,le.data);g.generateMipmaps=!1}else D?(pe&&n.texStorage2D(t.TEXTURE_2D,ge,Te,ie.width,ie.height),se&&Be(g,ie,ce,ye)):n.texImage2D(t.TEXTURE_2D,0,Te,ie.width,ie.height,0,ce,ye,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Te,qe[0].width,qe[0].height,ie.depth);for(let ne=0,Z=qe.length;ne<Z;ne++)if(le=qe[ne],g.format!==$n)if(ce!==null)if(D){if(se)if(g.layerUpdates.size>0){const ae=Mf(le.width,le.height,g.format,g.type);for(const ke of g.layerUpdates){const _t=le.data.subarray(ke*ae/le.data.BYTES_PER_ELEMENT,(ke+1)*ae/le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,ke,le.width,le.height,1,ce,_t)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,ie.depth,ce,le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Te,le.width,le.height,ie.depth,0,le.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,ie.depth,ce,ye,le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Te,le.width,le.height,ie.depth,0,ce,ye,le.data)}else{D&&pe&&n.texStorage2D(t.TEXTURE_2D,ge,Te,qe[0].width,qe[0].height);for(let ne=0,Z=qe.length;ne<Z;ne++)le=qe[ne],g.format!==$n?ce!==null?D?se&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,le.width,le.height,ce,le.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Te,le.width,le.height,0,le.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,le.width,le.height,ce,ye,le.data):n.texImage2D(t.TEXTURE_2D,ne,Te,le.width,le.height,0,ce,ye,le.data)}else if(g.isDataArrayTexture)if(D){if(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Te,ie.width,ie.height,ie.depth),se)if(g.layerUpdates.size>0){const ne=Mf(ie.width,ie.height,g.format,g.type);for(const Z of g.layerUpdates){const ae=ie.data.subarray(Z*ne/ie.data.BYTES_PER_ELEMENT,(Z+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,ce,ye,ae)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ce,ye,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,ce,ye,ie.data);else if(g.isData3DTexture)D?(pe&&n.texStorage3D(t.TEXTURE_3D,ge,Te,ie.width,ie.height,ie.depth),se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ce,ye,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,ce,ye,ie.data);else if(g.isFramebufferTexture){if(pe)if(D)n.texStorage2D(t.TEXTURE_2D,ge,Te,ie.width,ie.height);else{let ne=ie.width,Z=ie.height;for(let ae=0;ae<ge;ae++)n.texImage2D(t.TEXTURE_2D,ae,Te,ne,Z,0,ce,ye,null),ne>>=1,Z>>=1}}else if(qe.length>0){if(D&&pe){const ne=be(qe[0]);n.texStorage2D(t.TEXTURE_2D,ge,Te,ne.width,ne.height)}for(let ne=0,Z=qe.length;ne<Z;ne++)le=qe[ne],D?se&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ce,ye,le):n.texImage2D(t.TEXTURE_2D,ne,Te,ce,ye,le);g.generateMipmaps=!1}else if(D){if(pe){const ne=be(ie);n.texStorage2D(t.TEXTURE_2D,ge,Te,ne.width,ne.height)}se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,ye,ie)}else n.texImage2D(t.TEXTURE_2D,0,Te,ce,ye,ie);m(g)&&d(K),Ae.__version=$.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Y(y,g,U){if(g.image.length!==6)return;const K=ee(y,g),Q=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+U);const $=i.get(Q);if(Q.version!==$.__version||K===!0){n.activeTexture(t.TEXTURE0+U);const Ae=Ze.getPrimaries(Ze.workingColorSpace),oe=g.colorSpace===Ki?null:Ze.getPrimaries(g.colorSpace),Ee=g.colorSpace===Ki||Ae===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Oe=g.isCompressedTexture||g.image[0].isCompressedTexture,ie=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let Z=0;Z<6;Z++)!Oe&&!ie?ce[Z]=x(g.image[Z],!0,r.maxCubemapSize):ce[Z]=ie?g.image[Z].image:g.image[Z],ce[Z]=gt(g,ce[Z]);const ye=ce[0],Te=s.convert(g.format,g.colorSpace),le=s.convert(g.type),qe=T(g.internalFormat,Te,le,g.colorSpace),D=g.isVideoTexture!==!0,pe=$.__version===void 0||K===!0,se=Q.dataReady;let ge=w(g,ye);J(t.TEXTURE_CUBE_MAP,g);let ne;if(Oe){D&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,qe,ye.width,ye.height);for(let Z=0;Z<6;Z++){ne=ce[Z].mipmaps;for(let ae=0;ae<ne.length;ae++){const ke=ne[ae];g.format!==$n?Te!==null?D?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,ke.width,ke.height,Te,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,qe,ke.width,ke.height,0,ke.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,ke.width,ke.height,Te,le,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,qe,ke.width,ke.height,0,Te,le,ke.data)}}}else{if(ne=g.mipmaps,D&&pe){ne.length>0&&ge++;const Z=be(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,qe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ce[Z].width,ce[Z].height,Te,le,ce[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,ce[Z].width,ce[Z].height,0,Te,le,ce[Z].data);for(let ae=0;ae<ne.length;ae++){const _t=ne[ae].image[Z].image;D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,_t.width,_t.height,Te,le,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,qe,_t.width,_t.height,0,Te,le,_t.data)}}else{D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Te,le,ce[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,Te,le,ce[Z]);for(let ae=0;ae<ne.length;ae++){const ke=ne[ae];D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,Te,le,ke.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,qe,Te,le,ke.image[Z])}}}m(g)&&d(t.TEXTURE_CUBE_MAP),$.__version=Q.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function fe(y,g,U,K,Q,$){const Ae=s.convert(U.format,U.colorSpace),oe=s.convert(U.type),Ee=T(U.internalFormat,Ae,oe,U.colorSpace),Oe=i.get(g),ie=i.get(U);if(ie.__renderTarget=g,!Oe.__hasExternalTextures){const ce=Math.max(1,g.width>>$),ye=Math.max(1,g.height>>$);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,$,Ee,ce,ye,g.depth,0,Ae,oe,null):n.texImage2D(Q,$,Ee,ce,ye,0,Ae,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),Ut(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,Q,ie.__webglTexture,0,R(g)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,Q,ie.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(y,g,U){if(t.bindRenderbuffer(t.RENDERBUFFER,y),g.depthBuffer){const K=g.depthTexture,Q=K&&K.isDepthTexture?K.type:null,$=A(g.stencilBuffer,Q),Ae=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ut(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,R(g),$,g.width,g.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,R(g),$,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,$,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,y)}else{const K=g.textures;for(let Q=0;Q<K.length;Q++){const $=K[Q],Ae=s.convert($.format,$.colorSpace),oe=s.convert($.type),Ee=T($.internalFormat,Ae,oe,$.colorSpace);Ut(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,R(g),Ee,g.width,g.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,R(g),Ee,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(y,g,U){const K=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),J(t.TEXTURE_CUBE_MAP,g.depthTexture);const Oe=s.convert(g.depthTexture.format),ie=s.convert(g.depthTexture.type);let ce;g.depthTexture.format===Ui?ce=t.DEPTH_COMPONENT24:g.depthTexture.format===vr&&(ce=t.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ce,g.width,g.height,0,Oe,ie,null)}}else k(g.depthTexture,0);const $=Q.__webglTexture,Ae=R(g),oe=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,Ee=g.depthTexture.format===vr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ui)Ut(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ee,oe,$,0,Ae):t.framebufferTexture2D(t.FRAMEBUFFER,Ee,oe,$,0);else if(g.depthTexture.format===vr)Ut(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ee,oe,$,0,Ae):t.framebufferTexture2D(t.FRAMEBUFFER,Ee,oe,$,0);else throw new Error("Unknown depthTexture format")}function He(y){const g=i.get(y),U=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const K=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=K}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let K=0;K<6;K++)me(g.__webglFramebuffer[K],y,K);else{const K=y.texture.mipmaps;K&&K.length>0?me(g.__webglFramebuffer[0],y,0):me(g.__webglFramebuffer,y,0)}else if(U){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=t.createRenderbuffer(),Ne(g.__webglDepthbuffer[K],y,!1);else{const Q=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,$)}}else{const K=y.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Ne(g.__webglDepthbuffer,y,!1);else{const Q=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function yt(y,g,U){const K=i.get(y);g!==void 0&&fe(K.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&He(y)}function Ke(y){const g=y.texture,U=i.get(y),K=i.get(g);y.addEventListener("dispose",L);const Q=y.textures,$=y.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=g.version,a.memory.textures++),$){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let Ee=0;Ee<g.mipmaps.length;Ee++)U.__webglFramebuffer[oe][Ee]=t.createFramebuffer()}else U.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)U.__webglFramebuffer[oe]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let oe=0,Ee=Q.length;oe<Ee;oe++){const Oe=i.get(Q[oe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),a.memory.textures++)}if(y.samples>0&&Ut(y)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const Ee=Q[oe];U.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[oe]);const Oe=s.convert(Ee.format,Ee.colorSpace),ie=s.convert(Ee.type),ce=T(Ee.internalFormat,Oe,ie,Ee.colorSpace,y.isXRRenderTarget===!0),ye=R(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,ce,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,U.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(U.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),J(t.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)fe(U.__webglFramebuffer[oe][Ee],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee);else fe(U.__webglFramebuffer[oe],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let oe=0,Ee=Q.length;oe<Ee;oe++){const Oe=Q[oe],ie=i.get(Oe);let ce=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ce=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ie.__webglTexture),J(ce,Oe),fe(U.__webglFramebuffer,y,Oe,t.COLOR_ATTACHMENT0+oe,ce,0),m(Oe)&&d(ce)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(oe=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,K.__webglTexture),J(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)fe(U.__webglFramebuffer[Ee],y,g,t.COLOR_ATTACHMENT0,oe,Ee);else fe(U.__webglFramebuffer,y,g,t.COLOR_ATTACHMENT0,oe,0);m(g)&&d(oe),n.unbindTexture()}y.depthBuffer&&He(y)}function at(y){const g=y.textures;for(let U=0,K=g.length;U<K;U++){const Q=g[U];if(m(Q)){const $=b(y),Ae=i.get(Q).__webglTexture;n.bindTexture($,Ae),d($),n.unbindTexture()}}}const dt=[],We=[];function It(y){if(y.samples>0){if(Ut(y)===!1){const g=y.textures,U=y.width,K=y.height;let Q=t.COLOR_BUFFER_BIT;const $=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(y),oe=g.length>1;if(oe)for(let Oe=0;Oe<g.length;Oe++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Ee=y.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Oe=0;Oe<g.length;Oe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Oe]);const ie=i.get(g[Oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,U,K,0,0,U,K,Q,t.NEAREST),l===!0&&(dt.length=0,We.length=0,dt.push(t.COLOR_ATTACHMENT0+Oe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(dt.push($),We.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,We)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,dt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let Oe=0;Oe<g.length;Oe++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Oe]);const ie=i.get(g[Oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function R(y){return Math.min(r.maxSamples,y.samples)}function Ut(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function st(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function gt(y,g){const U=y.colorSpace,K=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||U!==cs&&U!==Ki&&(Ze.getTransfer(U)===ct?(K!==$n||Q!==On)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",U)),g}function be(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=yt,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function D3(t,e){function n(i,r=Ki){let s;const a=Ze.getTransfer(r);if(i===On)return t.UNSIGNED_BYTE;if(i===Du)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Iu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Rp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Lp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===wp)return t.BYTE;if(i===Cp)return t.SHORT;if(i===na)return t.UNSIGNED_SHORT;if(i===Pu)return t.INT;if(i===di)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Ii)return t.HALF_FLOAT;if(i===Pp)return t.ALPHA;if(i===Dp)return t.RGB;if(i===$n)return t.RGBA;if(i===Ui)return t.DEPTH_COMPONENT;if(i===vr)return t.DEPTH_STENCIL;if(i===Ip)return t.RED;if(i===Uu)return t.RED_INTEGER;if(i===ls)return t.RG;if(i===Nu)return t.RG_INTEGER;if(i===Fu)return t.RGBA_INTEGER;if(i===io||i===ro||i===so||i===ao)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===io)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===io)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===so)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===bc||i===Tc||i===Ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wc||i===Cc||i===Rc||i===Lc||i===Pc||i===Dc||i===Ic)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wc||i===Cc)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lc)return s.COMPRESSED_R11_EAC;if(i===Pc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Dc)return s.COMPRESSED_RG11_EAC;if(i===Ic)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===kc||i===Vc||i===zc||i===Gc||i===Hc||i===Wc||i===qc||i===Xc||i===jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jc)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$c||i===Yc||i===Kc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$c)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jc||i===Zc||i===Qc||i===eu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const I3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U3=`
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

}`;class N3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new qp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Kn({vertexShader:I3,fragmentShader:U3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F3 extends ys{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new N3,d={},b=n.getContextAttributes();let T=null,A=null;const w=[],C=[],L=new rt;let G=null;const S=new qn;S.viewport=new Lt;const M=new qn;M.viewport=new Lt;const E=[S,M],I=new X_;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=w[q];return Y===void 0&&(Y=new Dl,w[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=w[q];return Y===void 0&&(Y=new Dl,w[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=w[q];return Y===void 0&&(Y=new Dl,w[q]=Y),Y.getHandSpace()};function k(q){const Y=C.indexOf(q.inputSource);if(Y===-1)return;const fe=w[Y];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||a),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",V);for(let q=0;q<w.length;q++){const Y=C[q];Y!==null&&(C[q]=null,w[q].disconnect(Y))}P=null,z=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(T),p=null,f=null,h=null,r=null,A=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(G),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",F),r.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await n.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ne=null,me=null;b.depth&&(me=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=b.stencil?vr:Ui,Ne=b.stencil?ia:di);const He={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(He),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new ui(f.textureWidth,f.textureHeight,{format:$n,type:On,depthTexture:new sa(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new ui(p.framebufferWidth,p.framebufferHeight,{format:$n,type:On,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(q){for(let Y=0;Y<q.removed.length;Y++){const fe=q.removed[Y],Ne=C.indexOf(fe);Ne>=0&&(C[Ne]=null,w[Ne].disconnect(fe))}for(let Y=0;Y<q.added.length;Y++){const fe=q.added[Y];let Ne=C.indexOf(fe);if(Ne===-1){for(let He=0;He<w.length;He++)if(He>=C.length){C.push(fe),Ne=He;break}else if(C[He]===null){C[He]=fe,Ne=He;break}if(Ne===-1)break}const me=w[Ne];me&&me.connect(fe)}}const j=new W,re=new W;function te(q,Y,fe){j.setFromMatrixPosition(Y.matrixWorld),re.setFromMatrixPosition(fe.matrixWorld);const Ne=j.distanceTo(re),me=Y.projectionMatrix.elements,He=fe.projectionMatrix.elements,yt=me[14]/(me[10]-1),Ke=me[14]/(me[10]+1),at=(me[9]+1)/me[5],dt=(me[9]-1)/me[5],We=(me[8]-1)/me[0],It=(He[8]+1)/He[0],R=yt*We,Ut=yt*It,st=Ne/(-We+It),gt=st*-We;if(Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(st),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),me[10]===-1)q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const be=yt+st,y=Ke+st,g=R-gt,U=Ut+(Ne-gt),K=at*Ke/y*be,Q=dt*Ke/y*be;q.projectionMatrix.makePerspective(g,U,K,Q,be,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function O(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Y=q.near,fe=q.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),I.near=M.near=S.near=Y,I.far=M.far=S.far=fe,(P!==I.near||z!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,z=I.far),I.layers.mask=q.layers.mask|6,S.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Ne=q.parent,me=I.cameras;O(I,Ne);for(let He=0;He<me.length;He++)O(me[He],Ne);me.length===2?te(I,S,M):I.projectionMatrix.copy(S.projectionMatrix),J(q,I,Ne)};function J(q,Y,fe){fe===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=tu*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(q){return d[q]};let ee=null;function Se(q,Y){if(u=Y.getViewerPose(c||a),_=Y,u!==null){const fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Ne=!1;fe.length!==I.cameras.length&&(I.cameras.length=0,Ne=!0);for(let Ke=0;Ke<fe.length;Ke++){const at=fe[Ke];let dt=null;if(p!==null)dt=p.getViewport(at);else{const It=h.getViewSubImage(f,at);dt=It.viewport,Ke===0&&(e.setRenderTargetTextures(A,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(A))}let We=E[Ke];We===void 0&&(We=new qn,We.layers.enable(Ke),We.viewport=new Lt,E[Ke]=We),We.matrix.fromArray(at.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(at.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(dt.x,dt.y,dt.width,dt.height),Ke===0&&(I.matrix.copy(We.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ne===!0&&I.cameras.push(We)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const Ke=h.getDepthInformation(fe[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,r.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Ke=0;Ke<fe.length;Ke++){const at=fe[Ke].camera;if(at){let dt=d[at];dt||(dt=new qp,d[at]=dt);const We=h.getCameraImage(at);dt.sourceTexture=We}}}}for(let fe=0;fe<w.length;fe++){const Ne=C[fe],me=w[fe];Ne!==null&&me!==void 0&&me.update(Ne,Y,c||a)}ee&&ee(q,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}const Be=new jp;Be.setAnimationLoop(Se),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}}const hr=new Ni,O3=new Bt;function B3(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,zp(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,b,T,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,A)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=e.get(d),T=b.envMap,A=b.envMapRotation;T&&(m.envMap.value=T,hr.copy(A),hr.x*=-1,hr.y*=-1,hr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),m.envMapRotation.value.setFromMatrix4(O3.makeRotationFromEuler(hr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=T*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function k3(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const A=T.program;i.uniformBlockBinding(b,A)}function c(b,T){let A=r[b.id];A===void 0&&(_(b),A=u(b),r[b.id]=A,b.addEventListener("dispose",m));const w=T.program;i.updateUBOMapping(b,w);const C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function u(b){const T=h();b.__bindingPointIndex=T;const A=t.createBuffer(),w=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,w,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const T=r[b.id],A=b.uniforms,w=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let C=0,L=A.length;C<L;C++){const G=Array.isArray(A[C])?A[C]:[A[C]];for(let S=0,M=G.length;S<M;S++){const E=G[S];if(p(E,C,S,w)===!0){const I=E.__offset,P=Array.isArray(E.value)?E.value:[E.value];let z=0;for(let k=0;k<P.length;k++){const F=P[k],V=x(F);typeof F=="number"||typeof F=="boolean"?(E.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,I+z,E.__data)):F.isMatrix3?(E.__data[0]=F.elements[0],E.__data[1]=F.elements[1],E.__data[2]=F.elements[2],E.__data[3]=0,E.__data[4]=F.elements[3],E.__data[5]=F.elements[4],E.__data[6]=F.elements[5],E.__data[7]=0,E.__data[8]=F.elements[6],E.__data[9]=F.elements[7],E.__data[10]=F.elements[8],E.__data[11]=0):(F.toArray(E.__data,z),z+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(b,T,A,w){const C=b.value,L=T+"_"+A;if(w[L]===void 0)return typeof C=="number"||typeof C=="boolean"?w[L]=C:w[L]=C.clone(),!0;{const G=w[L];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return w[L]=C,!0}else if(G.equals(C)===!1)return G.copy(C),!0}return!1}function _(b){const T=b.uniforms;let A=0;const w=16;for(let L=0,G=T.length;L<G;L++){const S=Array.isArray(T[L])?T[L]:[T[L]];for(let M=0,E=S.length;M<E;M++){const I=S[M],P=Array.isArray(I.value)?I.value:[I.value];for(let z=0,k=P.length;z<k;z++){const F=P[z],V=x(F),j=A%w,re=j%V.boundary,te=j+re;A+=re,te!==0&&w-te<V.storage&&(A+=w-te),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=A,A+=V.storage}}}const C=A%w;return C>0&&(A+=w-C),b.__size=A,b.__cache={},this}function x(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const V3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function z3(){return ti===null&&(ti=new B_(V3,16,16,ls,Ii),ti.name="DFG_LUT",ti.minFilter=tn,ti.magFilter=tn,ti.wrapS=Ri,ti.wrapT=Ri,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class G3{constructor(e={}){const{canvas:n=u_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=On}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const x=p,m=new Set([Fu,Nu,Uu]),d=new Set([On,di,na,ia,Du,Iu]),b=new Uint32Array(4),T=new Int32Array(4);let A=null,w=null;const C=[],L=[];let G=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let M=!1;this._outputColorSpace=Fn;let E=0,I=0,P=null,z=-1,k=null;const F=new Lt,V=new Lt;let j=null;const re=new je(0);let te=0,O=n.width,J=n.height,ee=1,Se=null,Be=null;const q=new Lt(0,0,O,J),Y=new Lt(0,0,O,J);let fe=!1;const Ne=new Wp;let me=!1,He=!1;const yt=new Bt,Ke=new W,at=new Lt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function It(){return P===null?ee:1}let R=i;function Ut(v,N){return n.getContext(v,N)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lu}`),n.addEventListener("webglcontextlost",ke,!1),n.addEventListener("webglcontextrestored",_t,!1),n.addEventListener("webglcontextcreationerror",ot,!1),R===null){const N="webgl2";if(R=Ut(N,v),R===null)throw Ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw tt("WebGLRenderer: "+v.message),v}let st,gt,be,y,g,U,K,Q,$,Ae,oe,Ee,Oe,ie,ce,ye,Te,le,qe,D,pe,se,ge,ne;function Z(){st=new z2(R),st.init(),se=new D3(R,st),gt=new D2(R,st,e,se),be=new L3(R,st),gt.reversedDepthBuffer&&f&&be.buffers.depth.setReversed(!0),y=new W2(R),g=new m3,U=new P3(R,st,be,g,gt,se,y),K=new U2(S),Q=new V2(S),$=new $_(R),ge=new L2(R,$),Ae=new G2(R,$,y,ge),oe=new X2(R,Ae,$,y),qe=new q2(R,gt,U),ye=new I2(g),Ee=new p3(S,K,Q,st,gt,ge,ye),Oe=new B3(S,g),ie=new _3,ce=new E3(st),le=new R2(S,K,Q,be,oe,_,l),Te=new C3(S,oe,gt),ne=new k3(R,y,gt,be),D=new P2(R,st,y),pe=new H2(R,st,y),y.programs=Ee.programs,S.capabilities=gt,S.extensions=st,S.properties=g,S.renderLists=ie,S.shadowMap=Te,S.state=be,S.info=y}Z(),x!==On&&(G=new $2(x,n.width,n.height,r,s));const ae=new F3(S,R);this.xr=ae,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=st.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=st.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(v){v!==void 0&&(ee=v,this.setSize(O,J,!1))},this.getSize=function(v){return v.set(O,J)},this.setSize=function(v,N,X=!0){if(ae.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}O=v,J=N,n.width=Math.floor(v*ee),n.height=Math.floor(N*ee),X===!0&&(n.style.width=v+"px",n.style.height=N+"px"),G!==null&&G.setSize(n.width,n.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(O*ee,J*ee).floor()},this.setDrawingBufferSize=function(v,N,X){O=v,J=N,ee=X,n.width=Math.floor(v*X),n.height=Math.floor(N*X),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(x===On){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(F)},this.getViewport=function(v){return v.copy(q)},this.setViewport=function(v,N,X,H){v.isVector4?q.set(v.x,v.y,v.z,v.w):q.set(v,N,X,H),be.viewport(F.copy(q).multiplyScalar(ee).round())},this.getScissor=function(v){return v.copy(Y)},this.setScissor=function(v,N,X,H){v.isVector4?Y.set(v.x,v.y,v.z,v.w):Y.set(v,N,X,H),be.scissor(V.copy(Y).multiplyScalar(ee).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(v){be.setScissorTest(fe=v)},this.setOpaqueSort=function(v){Se=v},this.setTransparentSort=function(v){Be=v},this.getClearColor=function(v){return v.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,X=!0){let H=0;if(v){let B=!1;if(P!==null){const ue=P.texture.format;B=m.has(ue)}if(B){const ue=P.texture.type,_e=d.has(ue),de=le.getClearColor(),Me=le.getClearAlpha(),Re=de.r,Fe=de.g,De=de.b;_e?(b[0]=Re,b[1]=Fe,b[2]=De,b[3]=Me,R.clearBufferuiv(R.COLOR,0,b)):(T[0]=Re,T[1]=Fe,T[2]=De,T[3]=Me,R.clearBufferiv(R.COLOR,0,T))}else H|=R.COLOR_BUFFER_BIT}N&&(H|=R.DEPTH_BUFFER_BIT),X&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ke,!1),n.removeEventListener("webglcontextrestored",_t,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),le.dispose(),ie.dispose(),ce.dispose(),g.dispose(),K.dispose(),Q.dispose(),oe.dispose(),ge.dispose(),ne.dispose(),Ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Gh),ae.removeEventListener("sessionend",Hh),rr.stop()};function ke(v){v.preventDefault(),rf("WebGLRenderer: Context Lost."),M=!0}function _t(){rf("WebGLRenderer: Context Restored."),M=!1;const v=y.autoReset,N=Te.enabled,X=Te.autoUpdate,H=Te.needsUpdate,B=Te.type;Z(),y.autoReset=v,Te.enabled=N,Te.autoUpdate=X,Te.needsUpdate=H,Te.type=B}function ot(v){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ei(v){const N=v.target;N.removeEventListener("dispose",ei),Mi(N)}function Mi(v){Eg(v),g.remove(v)}function Eg(v){const N=g.get(v).programs;N!==void 0&&(N.forEach(function(X){Ee.releaseProgram(X)}),v.isShaderMaterial&&Ee.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,X,H,B,ue){N===null&&(N=dt);const _e=B.isMesh&&B.matrixWorld.determinant()<0,de=Tg(v,N,X,H,B);be.setMaterial(H,_e);let Me=X.index,Re=1;if(H.wireframe===!0){if(Me=Ae.getWireframeAttribute(X),Me===void 0)return;Re=2}const Fe=X.drawRange,De=X.attributes.position;let Xe=Fe.start*Re,ut=(Fe.start+Fe.count)*Re;ue!==null&&(Xe=Math.max(Xe,ue.start*Re),ut=Math.min(ut,(ue.start+ue.count)*Re)),Me!==null?(Xe=Math.max(Xe,0),ut=Math.min(ut,Me.count)):De!=null&&(Xe=Math.max(Xe,0),ut=Math.min(ut,De.count));const Ct=ut-Xe;if(Ct<0||Ct===1/0)return;ge.setup(B,H,de,X,Me);let Rt,pt=D;if(Me!==null&&(Rt=$.get(Me),pt=pe,pt.setIndex(Rt)),B.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*It()),pt.setMode(R.LINES)):pt.setMode(R.TRIANGLES);else if(B.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),be.setLineWidth(Ie*It()),B.isLineSegments?pt.setMode(R.LINES):B.isLineLoop?pt.setMode(R.LINE_LOOP):pt.setMode(R.LINE_STRIP)}else B.isPoints?pt.setMode(R.POINTS):B.isSprite&&pt.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ra("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))pt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ie=B._multiDrawStarts,lt=B._multiDrawCounts,et=B._multiDrawCount,mn=Me?$.get(Me).bytesPerElement:1,Ur=g.get(H).currentProgram.getUniforms();for(let gn=0;gn<et;gn++)Ur.setValue(R,"_gl_DrawID",gn),pt.render(Ie[gn]/mn,lt[gn])}else if(B.isInstancedMesh)pt.renderInstances(Xe,Ct,B.count);else if(X.isInstancedBufferGeometry){const Ie=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,lt=Math.min(X.instanceCount,Ie);pt.renderInstances(Xe,Ct,lt)}else pt.render(Xe,Ct)};function zh(v,N,X){v.transparent===!0&&v.side===wi&&v.forceSinglePass===!1?(v.side=dn,v.needsUpdate=!0,ba(v,N,X),v.side=er,v.needsUpdate=!0,ba(v,N,X),v.side=wi):ba(v,N,X)}this.compile=function(v,N,X=null){X===null&&(X=v),w=ce.get(X),w.init(N),L.push(w),X.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(w.pushLight(B),B.castShadow&&w.pushShadow(B))}),v!==X&&v.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(w.pushLight(B),B.castShadow&&w.pushShadow(B))}),w.setupLights();const H=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const de=ue[_e];zh(de,X,B),H.add(de)}else zh(ue,X,B),H.add(ue)}),w=L.pop(),H},this.compileAsync=function(v,N,X=null){const H=this.compile(v,N,X);return new Promise(B=>{function ue(){if(H.forEach(function(_e){g.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){B(v);return}setTimeout(ue,10)}st.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let al=null;function bg(v){al&&al(v)}function Gh(){rr.stop()}function Hh(){rr.start()}const rr=new jp;rr.setAnimationLoop(bg),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(v){al=v,ae.setAnimationLoop(v),v===null?rr.stop():rr.start()},ae.addEventListener("sessionstart",Gh),ae.addEventListener("sessionend",Hh),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const X=ae.enabled===!0&&ae.isPresenting===!0,H=G!==null&&(P===null||X)&&G.begin(S,P);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,N,P),w=ce.get(v,L.length),w.init(N),L.push(w),yt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ne.setFromProjectionMatrix(yt,oi,N.reversedDepth),He=this.localClippingEnabled,me=ye.init(this.clippingPlanes,He),A=ie.get(v,C.length),A.init(),C.push(A),ae.enabled===!0&&ae.isPresenting===!0){const _e=S.xr.getDepthSensingMesh();_e!==null&&ol(_e,N,-1/0,S.sortObjects)}ol(v,N,0,S.sortObjects),A.finish(),S.sortObjects===!0&&A.sort(Se,Be),We=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,We&&le.addToRenderList(A,v),this.info.render.frame++,me===!0&&ye.beginShadows();const B=w.state.shadowsArray;if(Te.render(B,v,N),me===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&G.hasRenderPass())===!1){const _e=A.opaque,de=A.transmissive;if(w.setupLights(),N.isArrayCamera){const Me=N.cameras;if(de.length>0)for(let Re=0,Fe=Me.length;Re<Fe;Re++){const De=Me[Re];qh(_e,de,v,De)}We&&le.render(v);for(let Re=0,Fe=Me.length;Re<Fe;Re++){const De=Me[Re];Wh(A,v,De,De.viewport)}}else de.length>0&&qh(_e,de,v,N),We&&le.render(v),Wh(A,v,N)}P!==null&&I===0&&(U.updateMultisampleRenderTarget(P),U.updateRenderTargetMipmap(P)),H&&G.end(S),v.isScene===!0&&v.onAfterRender(S,v,N),ge.resetDefaultState(),z=-1,k=null,L.pop(),L.length>0?(w=L[L.length-1],me===!0&&ye.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?A=C[C.length-1]:A=null};function ol(v,N,X,H){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ne.intersectsSprite(v)){H&&at.setFromMatrixPosition(v.matrixWorld).applyMatrix4(yt);const _e=oe.update(v),de=v.material;de.visible&&A.push(v,_e,de,X,at.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ne.intersectsObject(v))){const _e=oe.update(v),de=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),at.copy(v.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),at.copy(_e.boundingSphere.center)),at.applyMatrix4(v.matrixWorld).applyMatrix4(yt)),Array.isArray(de)){const Me=_e.groups;for(let Re=0,Fe=Me.length;Re<Fe;Re++){const De=Me[Re],Xe=de[De.materialIndex];Xe&&Xe.visible&&A.push(v,_e,Xe,X,at.z,De)}}else de.visible&&A.push(v,_e,de,X,at.z,null)}}const ue=v.children;for(let _e=0,de=ue.length;_e<de;_e++)ol(ue[_e],N,X,H)}function Wh(v,N,X,H){const{opaque:B,transmissive:ue,transparent:_e}=v;w.setupLightsView(X),me===!0&&ye.setGlobalState(S.clippingPlanes,X),H&&be.viewport(F.copy(H)),B.length>0&&Ea(B,N,X),ue.length>0&&Ea(ue,N,X),_e.length>0&&Ea(_e,N,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function qh(v,N,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Xe=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new ui(1,1,{generateMipmaps:!0,type:Xe?Ii:On,minFilter:_r,samples:gt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ue=w.state.transmissionRenderTarget[H.id],_e=H.viewport||F;ue.setSize(_e.z*S.transmissionResolutionScale,_e.w*S.transmissionResolutionScale);const de=S.getRenderTarget(),Me=S.getActiveCubeFace(),Re=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor(re),te=S.getClearAlpha(),te<1&&S.setClearColor(16777215,.5),S.clear(),We&&le.render(X);const Fe=S.toneMapping;S.toneMapping=ci;const De=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),me===!0&&ye.setGlobalState(S.clippingPlanes,H),Ea(v,X,H),U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue),st.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let ut=0,Ct=N.length;ut<Ct;ut++){const Rt=N[ut],{object:pt,geometry:Ie,material:lt,group:et}=Rt;if(lt.side===wi&&pt.layers.test(H.layers)){const mn=lt.side;lt.side=dn,lt.needsUpdate=!0,Xh(pt,X,H,Ie,lt,et),lt.side=mn,lt.needsUpdate=!0,Xe=!0}}Xe===!0&&(U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue))}S.setRenderTarget(de,Me,Re),S.setClearColor(re,te),De!==void 0&&(H.viewport=De),S.toneMapping=Fe}function Ea(v,N,X){const H=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ue=v.length;B<ue;B++){const _e=v[B],{object:de,geometry:Me,group:Re}=_e;let Fe=_e.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),de.layers.test(X.layers)&&Xh(de,N,X,Me,Fe,Re)}}function Xh(v,N,X,H,B,ue){v.onBeforeRender(S,N,X,H,B,ue),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(S,N,X,H,v,ue),B.transparent===!0&&B.side===wi&&B.forceSinglePass===!1?(B.side=dn,B.needsUpdate=!0,S.renderBufferDirect(X,N,H,B,v,ue),B.side=er,B.needsUpdate=!0,S.renderBufferDirect(X,N,H,B,v,ue),B.side=wi):S.renderBufferDirect(X,N,H,B,v,ue),v.onAfterRender(S,N,X,H,B,ue)}function ba(v,N,X){N.isScene!==!0&&(N=dt);const H=g.get(v),B=w.state.lights,ue=w.state.shadowsArray,_e=B.state.version,de=Ee.getParameters(v,B.state,ue,N,X),Me=Ee.getProgramCacheKey(de);let Re=H.programs;H.environment=v.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(v.isMeshStandardMaterial?Q:K).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",ei),Re=new Map,H.programs=Re);let Fe=Re.get(Me);if(Fe!==void 0){if(H.currentProgram===Fe&&H.lightsStateVersion===_e)return $h(v,de),Fe}else de.uniforms=Ee.getUniforms(v),v.onBeforeCompile(de,S),Fe=Ee.acquireProgram(de,Me),Re.set(Me,Fe),H.uniforms=de.uniforms;const De=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(De.clippingPlanes=ye.uniform),$h(v,de),H.needsLights=wg(v),H.lightsStateVersion=_e,H.needsLights&&(De.ambientLightColor.value=B.state.ambient,De.lightProbe.value=B.state.probe,De.directionalLights.value=B.state.directional,De.directionalLightShadows.value=B.state.directionalShadow,De.spotLights.value=B.state.spot,De.spotLightShadows.value=B.state.spotShadow,De.rectAreaLights.value=B.state.rectArea,De.ltc_1.value=B.state.rectAreaLTC1,De.ltc_2.value=B.state.rectAreaLTC2,De.pointLights.value=B.state.point,De.pointLightShadows.value=B.state.pointShadow,De.hemisphereLights.value=B.state.hemi,De.directionalShadowMap.value=B.state.directionalShadowMap,De.directionalShadowMatrix.value=B.state.directionalShadowMatrix,De.spotShadowMap.value=B.state.spotShadowMap,De.spotLightMatrix.value=B.state.spotLightMatrix,De.spotLightMap.value=B.state.spotLightMap,De.pointShadowMap.value=B.state.pointShadowMap,De.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Fe,H.uniformsList=null,Fe}function jh(v){if(v.uniformsList===null){const N=v.currentProgram.getUniforms();v.uniformsList=oo.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function $h(v,N){const X=g.get(v);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Tg(v,N,X,H,B){N.isScene!==!0&&(N=dt),U.resetTextureUnits();const ue=N.fog,_e=H.isMeshStandardMaterial?N.environment:null,de=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:cs,Me=(H.isMeshStandardMaterial?Q:K).get(H.envMap||_e),Re=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!X.morphAttributes.position,Xe=!!X.morphAttributes.normal,ut=!!X.morphAttributes.color;let Ct=ci;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ct=S.toneMapping);const Rt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pt=Rt!==void 0?Rt.length:0,Ie=g.get(H),lt=w.state.lights;if(me===!0&&(He===!0||v!==k)){const an=v===k&&H.id===z;ye.setState(H,v,an)}let et=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==lt.state.version||Ie.outputColorSpace!==de||B.isBatchedMesh&&Ie.batching===!1||!B.isBatchedMesh&&Ie.batching===!0||B.isBatchedMesh&&Ie.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ie.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ie.instancing===!1||!B.isInstancedMesh&&Ie.instancing===!0||B.isSkinnedMesh&&Ie.skinning===!1||!B.isSkinnedMesh&&Ie.skinning===!0||B.isInstancedMesh&&Ie.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ie.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ie.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ie.instancingMorph===!1&&B.morphTexture!==null||Ie.envMap!==Me||H.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ye.numPlanes||Ie.numIntersection!==ye.numIntersection)||Ie.vertexAlphas!==Re||Ie.vertexTangents!==Fe||Ie.morphTargets!==De||Ie.morphNormals!==Xe||Ie.morphColors!==ut||Ie.toneMapping!==Ct||Ie.morphTargetsCount!==pt)&&(et=!0):(et=!0,Ie.__version=H.version);let mn=Ie.currentProgram;et===!0&&(mn=ba(H,N,B));let Ur=!1,gn=!1,Fs=!1;const vt=mn.getUniforms(),cn=Ie.uniforms;if(be.useProgram(mn.program)&&(Ur=!0,gn=!0,Fs=!0),H.id!==z&&(z=H.id,gn=!0),Ur||k!==v){be.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),vt.setValue(R,"projectionMatrix",v.projectionMatrix),vt.setValue(R,"viewMatrix",v.matrixWorldInverse);const un=vt.map.cameraPosition;un!==void 0&&un.setValue(R,Ke.setFromMatrixPosition(v.matrixWorld)),gt.logarithmicDepthBuffer&&vt.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),k!==v&&(k=v,gn=!0,Fs=!0)}if(Ie.needsLights&&(lt.state.directionalShadowMap.length>0&&vt.setValue(R,"directionalShadowMap",lt.state.directionalShadowMap,U),lt.state.spotShadowMap.length>0&&vt.setValue(R,"spotShadowMap",lt.state.spotShadowMap,U),lt.state.pointShadowMap.length>0&&vt.setValue(R,"pointShadowMap",lt.state.pointShadowMap,U)),B.isSkinnedMesh){vt.setOptional(R,B,"bindMatrix"),vt.setOptional(R,B,"bindMatrixInverse");const an=B.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),vt.setValue(R,"boneTexture",an.boneTexture,U))}B.isBatchedMesh&&(vt.setOptional(R,B,"batchingTexture"),vt.setValue(R,"batchingTexture",B._matricesTexture,U),vt.setOptional(R,B,"batchingIdTexture"),vt.setValue(R,"batchingIdTexture",B._indirectTexture,U),vt.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(R,"batchingColorTexture",B._colorsTexture,U));const Pn=X.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&qe.update(B,X,mn),(gn||Ie.receiveShadow!==B.receiveShadow)&&(Ie.receiveShadow=B.receiveShadow,vt.setValue(R,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(cn.envMap.value=Me,cn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(cn.envMapIntensity.value=N.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=z3()),gn&&(vt.setValue(R,"toneMappingExposure",S.toneMappingExposure),Ie.needsLights&&Ag(cn,Fs),ue&&H.fog===!0&&Oe.refreshFogUniforms(cn,ue),Oe.refreshMaterialUniforms(cn,H,ee,J,w.state.transmissionRenderTarget[v.id]),oo.upload(R,jh(Ie),cn,U)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(oo.upload(R,jh(Ie),cn,U),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(R,"center",B.center),vt.setValue(R,"modelViewMatrix",B.modelViewMatrix),vt.setValue(R,"normalMatrix",B.normalMatrix),vt.setValue(R,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const an=H.uniformsGroups;for(let un=0,ll=an.length;un<ll;un++){const sr=an[un];ne.update(sr,mn),ne.bind(sr,mn)}}return mn}function Ag(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function wg(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(v,N,X){const H=g.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),g.get(v.texture).__webglTexture=N,g.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){const X=g.get(v);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const Cg=R.createFramebuffer();this.setRenderTarget=function(v,N=0,X=0){P=v,E=N,I=X;let H=null,B=!1,ue=!1;if(v){const de=g.get(v);if(de.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(R.FRAMEBUFFER,de.__webglFramebuffer),F.copy(v.viewport),V.copy(v.scissor),j=v.scissorTest,be.viewport(F),be.scissor(V),be.setScissorTest(j),z=-1;return}else if(de.__webglFramebuffer===void 0)U.setupRenderTarget(v);else if(de.__hasExternalTextures)U.rebindTextures(v,g.get(v.texture).__webglTexture,g.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Fe=v.depthTexture;if(de.__boundDepthTexture!==Fe){if(Fe!==null&&g.has(Fe)&&(v.width!==Fe.image.width||v.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(v)}}const Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ue=!0);const Re=g.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?H=Re[N][X]:H=Re[N],B=!0):v.samples>0&&U.useMultisampledRTT(v)===!1?H=g.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[X]:H=Re,F.copy(v.viewport),V.copy(v.scissor),j=v.scissorTest}else F.copy(q).multiplyScalar(ee).floor(),V.copy(Y).multiplyScalar(ee).floor(),j=fe;if(X!==0&&(H=Cg),be.bindFramebuffer(R.FRAMEBUFFER,H)&&be.drawBuffers(v,H),be.viewport(F),be.scissor(V),be.setScissorTest(j),B){const de=g.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,X)}else if(ue){const de=N;for(let Me=0;Me<v.textures.length;Me++){const Re=g.get(v.textures[Me]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Me,Re.__webglTexture,X,de)}}else if(v!==null&&X!==0){const de=g.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,de.__webglTexture,X)}z=-1},this.readRenderTargetPixels=function(v,N,X,H,B,ue,_e,de=0){if(!(v&&v.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=g.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){be.bindFramebuffer(R.FRAMEBUFFER,Me);try{const Re=v.textures[de],Fe=Re.format,De=Re.type;if(!gt.textureFormatReadable(Fe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(De)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-H&&X>=0&&X<=v.height-B&&(v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+de),R.readPixels(N,X,H,B,se.convert(Fe),se.convert(De),ue))}finally{const Re=P!==null?g.get(P).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(v,N,X,H,B,ue,_e,de=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=g.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me)if(N>=0&&N<=v.width-H&&X>=0&&X<=v.height-B){be.bindFramebuffer(R.FRAMEBUFFER,Me);const Re=v.textures[de],Fe=Re.format,De=Re.type;if(!gt.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.bufferData(R.PIXEL_PACK_BUFFER,ue.byteLength,R.STREAM_READ),v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+de),R.readPixels(N,X,H,B,se.convert(Fe),se.convert(De),0);const ut=P!==null?g.get(P).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,ut);const Ct=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await h_(R,Ct,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ue),R.deleteBuffer(Xe),R.deleteSync(Ct),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,X=0){const H=Math.pow(2,-X),B=Math.floor(v.image.width*H),ue=Math.floor(v.image.height*H),_e=N!==null?N.x:0,de=N!==null?N.y:0;U.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,X,0,0,_e,de,B,ue),be.unbindTexture()};const Rg=R.createFramebuffer(),Lg=R.createFramebuffer();this.copyTextureToTexture=function(v,N,X=null,H=null,B=0,ue=null){ue===null&&(B!==0?(ra("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=B,B=0):ue=0);let _e,de,Me,Re,Fe,De,Xe,ut,Ct;const Rt=v.isCompressedTexture?v.mipmaps[ue]:v.image;if(X!==null)_e=X.max.x-X.min.x,de=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,Fe=X.min.y,De=X.isBox3?X.min.z:0;else{const Pn=Math.pow(2,-B);_e=Math.floor(Rt.width*Pn),de=Math.floor(Rt.height*Pn),v.isDataArrayTexture?Me=Rt.depth:v.isData3DTexture?Me=Math.floor(Rt.depth*Pn):Me=1,Re=0,Fe=0,De=0}H!==null?(Xe=H.x,ut=H.y,Ct=H.z):(Xe=0,ut=0,Ct=0);const pt=se.convert(N.format),Ie=se.convert(N.type);let lt;N.isData3DTexture?(U.setTexture3D(N,0),lt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(U.setTexture2DArray(N,0),lt=R.TEXTURE_2D_ARRAY):(U.setTexture2D(N,0),lt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const et=R.getParameter(R.UNPACK_ROW_LENGTH),mn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ur=R.getParameter(R.UNPACK_SKIP_PIXELS),gn=R.getParameter(R.UNPACK_SKIP_ROWS),Fs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Rt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,Fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,De);const vt=v.isDataArrayTexture||v.isData3DTexture,cn=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){const Pn=g.get(v),an=g.get(N),un=g.get(Pn.__renderTarget),ll=g.get(an.__renderTarget);be.bindFramebuffer(R.READ_FRAMEBUFFER,un.__webglFramebuffer),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,ll.__webglFramebuffer);for(let sr=0;sr<Me;sr++)vt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,g.get(v).__webglTexture,B,De+sr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,g.get(N).__webglTexture,ue,Ct+sr)),R.blitFramebuffer(Re,Fe,_e,de,Xe,ut,_e,de,R.DEPTH_BUFFER_BIT,R.NEAREST);be.bindFramebuffer(R.READ_FRAMEBUFFER,null),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||g.has(v)){const Pn=g.get(v),an=g.get(N);be.bindFramebuffer(R.READ_FRAMEBUFFER,Rg),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,Lg);for(let un=0;un<Me;un++)vt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Pn.__webglTexture,B,De+un):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Pn.__webglTexture,B),cn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,an.__webglTexture,ue,Ct+un):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,an.__webglTexture,ue),B!==0?R.blitFramebuffer(Re,Fe,_e,de,Xe,ut,_e,de,R.COLOR_BUFFER_BIT,R.NEAREST):cn?R.copyTexSubImage3D(lt,ue,Xe,ut,Ct+un,Re,Fe,_e,de):R.copyTexSubImage2D(lt,ue,Xe,ut,Re,Fe,_e,de);be.bindFramebuffer(R.READ_FRAMEBUFFER,null),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else cn?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(lt,ue,Xe,ut,Ct,_e,de,Me,pt,Ie,Rt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(lt,ue,Xe,ut,Ct,_e,de,Me,pt,Rt.data):R.texSubImage3D(lt,ue,Xe,ut,Ct,_e,de,Me,pt,Ie,Rt):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ue,Xe,ut,_e,de,pt,Ie,Rt.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ue,Xe,ut,Rt.width,Rt.height,pt,Rt.data):R.texSubImage2D(R.TEXTURE_2D,ue,Xe,ut,_e,de,pt,Ie,Rt);R.pixelStorei(R.UNPACK_ROW_LENGTH,et),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,mn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ur),R.pixelStorei(R.UNPACK_SKIP_ROWS,gn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Fs),ue===0&&N.generateMipmaps&&R.generateMipmap(lt),be.unbindTexture()},this.initRenderTarget=function(v){g.get(v).__webglFramebuffer===void 0&&U.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?U.setTextureCube(v,0):v.isData3DTexture?U.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?U.setTexture2DArray(v,0):U.setTexture2D(v,0),be.unbindTexture()},this.resetState=function(){E=0,I=0,P=null,be.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const H3=`
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
}`,W3=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;function q3(t){const e=new G3({canvas:t,antialias:!1}),n={uTime:{value:0},uAltitude:{value:.45},uLuminosite:{value:.7},uTurbulence:{value:.2},uNight:{value:0},uAurora:{value:.55},uPulse:{value:0},uPluie:{value:0},uEclair:{value:0},uMeteor:{value:new Lt(0,0,0,0)},uFocus:{value:new rt(.5,.5)},uAspect:{value:1},uTap:{value:new W(.5,.5,999)},uCol1:{value:new je("#1b2a4a")},uCol2:{value:new je("#7fa8d9")},uCol3:{value:new je("#dfefff")}},i={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,pluie:0,col1:new je("#1b2a4a"),col2:new je("#7fa8d9"),col3:new je("#dfefff"),focus:new rt(.5,.5)},r={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,col1:new je("#1b2a4a"),col2:new je("#7fa8d9"),col3:new je("#dfefff"),focus:new rt(.5,.5)};let s=0,a=0,o=999,l=0,c=0;const u={x:0,y:0,age:0,actif:0},h=new Kn({vertexShader:W3,fragmentShader:H3,uniforms:n}),f=new pi(new pa(2,2),h),p=new O_;p.add(f);function _(){e.setSize(window.innerWidth,window.innerHeight,!1),n.uAspect.value=window.innerWidth/Math.max(1,window.innerHeight)}return window.addEventListener("resize",_),_(),{apply(x,m){i.alt=x.altitude,i.lum=x.luminosite,i.turb=x.turbulence,i.night=x.night,i.aurora=x.aurora,i.pluie=x.pluie,i.col1.setStyle(x.palette[0]),i.col2.setStyle(x.palette[1]),i.col3.setStyle(x.palette[2]),m&&i.focus.set(m[0],m[1])},setBpm(x){s=x??0},eclair(){c=1},filer(x,m){u.x=x,u.y=m,u.age=0,u.actif=1},tap(x,m){o=0,n.uTap.value.set(x,m,0)},frame(x){n.uTime.value+=x;const m=1-Math.exp(-x*2.5);r.alt+=(i.alt-r.alt)*m,r.lum+=(i.lum-r.lum)*m,r.turb+=(i.turb-r.turb)*m,r.night+=(i.night-r.night)*m,r.aurora+=(i.aurora-r.aurora)*m,l+=(i.pluie-l)*(1-Math.exp(-x*.8)),c*=Math.exp(-x*2.6),u.actif>0&&(u.age+=x,u.age>1.4&&(u.actif=0)),r.col1.lerp(i.col1,m),r.col2.lerp(i.col2,m),r.col3.lerp(i.col3,m),r.focus.lerp(i.focus,m),a+=x*(s>0?s/60:.2),n.uPulse.value=Math.sin(a*2*Math.PI),o<100&&(o+=x,n.uTap.value.z=o),n.uAltitude.value=r.alt,n.uLuminosite.value=r.lum,n.uTurbulence.value=r.turb,n.uNight.value=r.night,n.uAurora.value=r.aurora,n.uPluie.value=l,n.uEclair.value=c,n.uMeteor.value.set(u.x,u.y,u.age,u.actif),n.uFocus.value.copy(r.focus),n.uCol1.value.copy(r.col1),n.uCol2.value.copy(r.col2),n.uCol3.value.copy(r.col3),e.render(p,new zu)}}}function X3(){return{breath:0,bpm:null,emotion:"calme",timeOfDay:.5,seed:"anonyme"}}const j3={calme:["#1b2a4a","#7fa8d9","#dfefff"],joie:["#2b4a1b","#d9c47f","#fff6df"],tristesse:["#101018","#3a4a6a","#8a9ab0"],tension:["#2a0a0a","#6a2a2a","#c07a5a"]};function Zp(t){const e={calme:{alt:.45,lum:.7,turb:.2,aur:.55,pluie:.12},joie:{alt:.7,lum:.9,turb:.35,aur:.95,pluie:0},tristesse:{alt:.2,lum:.35,turb:.1,aur:.25,pluie:.7},tension:{alt:.6,lum:.45,turb:.85,aur:.4,pluie:.45}}[t.emotion],n=Math.min(1,Math.max(0,(Math.abs(t.timeOfDay-.5)-.2)*5)),i=t.cielReel??null;return{altitude:Math.min(1,e.alt+t.breath*.35),luminosite:i?Math.min(1,i.luminosite+t.breath*.2):Math.min(1,e.lum+t.breath*.2),turbulence:i?Math.min(1,Math.max(e.turb,i.turbulence)+t.breath*.1):Math.min(1,e.turb+t.breath*.1),night:n,aurora:e.aur,pluie:i?Math.max(e.pluie,i.pluie):e.pluie,palette:j3[t.emotion]}}function $3(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return Math.sqrt(e/t.length)}function Y3(t,e,n=8){return t<=e?0:Math.min(1,(t-e)*n)}async function K3(t){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),n=new AudioContext,i=n.createMediaStreamSource(e),r=n.createAnalyser();r.fftSize=1024,i.connect(r);const s=new Float32Array(r.fftSize);let a=5e-4;return setInterval(()=>{r.getFloatTimeDomainData(s);const o=$3(s);a=Math.min(a*.999+o*.001,.01),t(Y3(o,a))},60),!0}catch{return!1}}var hs=typeof self<"u"?self:{};function Qp(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=hs,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function fr(){throw Error("Invalid UTF8")}function qf(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Xa,Vl;const J3=typeof TextDecoder<"u";let Z3;const Q3=typeof TextEncoder<"u";function em(t){if(Q3)t=(Z3||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function tm(t){hs.setTimeout((()=>{throw t}),0)}var ru,eS=Qp(610401301,!1),Xf=Qp(748402147,!0);function jf(){var t=hs.navigator;return t&&(t=t.userAgent)?t:""}const $f=hs.navigator;function Lo(t){return Lo[" "](t),t}ru=$f&&$f.userAgentData||null,Lo[" "]=function(){};const nm={};let Ys=null;function tS(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(c){for(;l<s.length;){const u=s.charAt(l++),h=Ys[u];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}im();let l=0;for(;;){const c=o(-1),u=o(0),h=o(64),f=o(64);if(f===64&&c===-1)break;a(c<<2|u>>4),h!=64&&(a(u<<4&240|h>>2),f!=64&&a(h<<6&192|f))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function im(){if(!Ys){Ys={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));nm[n]=i;for(let r=0;r<i.length;r++){const s=i[r];Ys[s]===void 0&&(Ys[s]=r)}}}}var nS=typeof Uint8Array<"u",rm=!(!(eS&&ru&&ru.brands.length>0)&&(jf().indexOf("Trident")!=-1||jf().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Yf=/[-_.]/g,iS={"-":"+",_:"/",".":"="};function rS(t){return iS[t]||""}function sm(t){if(!rm)return tS(t);t=Yf.test(t)?t.replace(Yf,rS):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Gu(t){return nS&&t!=null&&t instanceof Uint8Array}var fs={};function Cr(){return sS||=new fi(null,fs)}function Hu(t){am(fs);var e=t.g;return(e=e==null||Gu(e)?e:typeof e=="string"?sm(e):null)==null?e:t.g=e}var fi=class{h(){return new Uint8Array(Hu(this)||0)}constructor(t,e){if(am(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let sS,aS;function am(t){if(t!==fs)throw Error("illegal external caller")}function om(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function su(t){return om(t=Error(t),"warning"),t}function ds(t,e){if(t!=null){var n=aS??={},i=n[t]||0;i>=e||(n[t]=i+1,om(t=Error(),"incident"),tm(t))}}function bs(){return typeof BigInt=="function"}var Ts=typeof Symbol=="function"&&typeof Symbol()=="symbol";function gi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var oS=gi("jas",void 0,!0),Kf=gi(void 0,"0di"),Ws=gi(void 0,"1oa"),bn=gi(void 0,Symbol()),lS=gi(void 0,"0ub"),cS=gi(void 0,"0ubs"),au=gi(void 0,"0ubsb"),uS=gi(void 0,"0actk"),ps=gi("m_m","Pa",!0),Jf=gi();const lm={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},cm=Object.defineProperties,we=Ts?oS:"Ga";var Pr;const Zf=[];function ma(t,e){Ts||we in t||cm(t,lm),t[we]|=e}function qt(t,e){Ts||we in t||cm(t,lm),t[we]=e}function ga(t){return ma(t,34),t}function aa(t){return ma(t,8192),t}qt(Zf,7),Pr=Object.freeze(Zf);var ms={};function An(t,e){return e===void 0?t.h!==Rr&&!!(2&(0|t.v[we])):!!(2&e)&&t.h!==Rr}const Rr={};function Wu(t,e){if(t!=null){if(typeof t=="string")t=t?new fi(t,fs):Cr();else if(t.constructor!==fi)if(Gu(t))t=t.length?new fi(new Uint8Array(t),fs):Cr();else{if(!e)throw Error();t=void 0}}return t}class Qf{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var hS=Object.freeze({});function um(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(e=128&e?1:0;e<a;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const o in t)!isNaN(o)&&n(+o,t[o])}}var hm={};function As(t){return 128&t?hm:void 0}function Po(t){return t.Na=!0,t}var fS=Po((t=>typeof t=="number")),ed=Po((t=>typeof t=="string")),dS=Po((t=>typeof t=="boolean")),Do=typeof hs.BigInt=="function"&&typeof hs.BigInt(0)=="bigint";function Tn(t){var e=t;if(ed(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(fS(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Do?BigInt(t):t=dS(t)?t?"1":"0":ed(t)?t.trim()||"0":String(t)}var ou=Po((t=>Do?t>=mS&&t<=_S:t[0]==="-"?td(t,pS):td(t,gS)));const pS=Number.MIN_SAFE_INTEGER.toString(),mS=Do?BigInt(Number.MIN_SAFE_INTEGER):void 0,gS=Number.MAX_SAFE_INTEGER.toString(),_S=Do?BigInt(Number.MAX_SAFE_INTEGER):void 0;function td(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const vS=typeof Uint8Array.prototype.slice=="function";let xS,bt=0,Ft=0;function nd(t){const e=t>>>0;bt=e,Ft=(t-e)/4294967296>>>0}function gs(t){if(t<0){nd(-t);const[e,n]=ju(bt,Ft);bt=e>>>0,Ft=n>>>0}else nd(t)}function qu(t){const e=xS||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),Ft=0,bt=e.getUint32(0,!0)}function fm(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:oa(t,e)}function SS(t,e){return Tn(bs()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):oa(t,e))}function dm(t,e){return bs()?Tn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Tn(Xu(t,e))}function oa(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else bs()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+id(n)+id(t));return n}function id(t){return t=String(t),"0000000".slice(t.length)+t}function Xu(t,e){if(2147483648&e)if(bs())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=ju(t,e);t="-"+oa(n,i)}else t=oa(t,e);return t}function Io(t){if(t.length<16)gs(Number(t));else if(bs())t=BigInt(t),bt=Number(t&BigInt(4294967295))>>>0,Ft=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Ft=bt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));Ft*=1e6,bt=1e6*bt+s,bt>=4294967296&&(Ft+=Math.trunc(bt/4294967296),Ft>>>=0,bt>>>=0)}if(e){const[i,r]=ju(bt,Ft);bt=i,Ft=r}}}function ju(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Yn(t){return Array.prototype.slice.call(t)}const _a=typeof BigInt=="function"?BigInt.asIntN:void 0,MS=typeof BigInt=="function"?BigInt.asUintN:void 0,Lr=Number.isSafeInteger,Uo=Number.isFinite,_s=Math.trunc,yS=Tn(0);function Ks(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function li(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function la(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function pm(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const ES=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function va(t){switch(typeof t){case"bigint":return!0;case"number":return Uo(t);case"string":return ES.test(t);default:return!1}}function ws(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Uo(t)?0|t:void 0}function mm(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Uo(t)?t>>>0:void 0}function gm(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(Io(t),Xu(bt,Ft))}function $u(t){if(t=_s(t),!Lr(t)){gs(t);var e=bt,n=Ft;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=fm(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function _m(t){var e=_s(Number(t));return Lr(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),gm(t))}function vm(t){var e=_s(Number(t));return Lr(e)?Tn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),bs()?Tn(_a(64,BigInt(t))):Tn(gm(t)))}function xm(t){return Lr(t)?t=Tn($u(t)):(t=_s(t),Lr(t)?t=String(t):(gs(t),t=Xu(bt,Ft)),t=Tn(t)),t}function go(t){const e=typeof t;return t==null?t:e==="bigint"?Tn(_a(64,t)):va(t)?e==="string"?vm(t):xm(t):void 0}function Sm(t){if(typeof t!="string")throw Error();return t}function xa(t){if(t!=null&&typeof t!="string")throw Error();return t}function Jt(t){return t==null||typeof t=="string"?t:void 0}function Yu(t,e,n,i){return t!=null&&t[ps]===ms?t:Array.isArray(t)?((i=(n=0|t[we])|32&i|2&i)!==n&&qt(t,i),new e(t)):(n?2&i?((t=e[Kf])||(ga((t=new e).v),t=e[Kf]=t),e=t):e=new e:e=void 0,e)}function bS(t,e,n){if(e)e:{if(!va(e=t))throw su("int64");switch(typeof e){case"string":e=vm(e);break e;case"bigint":e=Tn(_a(64,e));break e;default:e=xm(e)}}else e=go(t);return(t=e)==null?n?yS:void 0:t}const TS={};let AS=(function(){try{return Lo(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class zl{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const wS=AS?(Object.setPrototypeOf(zl.prototype,Map.prototype),Object.defineProperties(zl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),zl):class extends Map{constructor(){super()}};function rd(t){return t}function Gl(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var Fi=class extends wS{constructor(t,e,n=rd,i=rd){super(),this.J=0|t[we],this.K=e,this.S=n,this.fa=this.K?CS:i;for(let r=0;r<t.length;r++){const s=t[r],a=n(s[0],!1,!0);let o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(t){return aa(Array.from(super.entries(),t))}clear(){Gl(this),super.clear()}delete(t){return Gl(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new Qf(t,RS,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new Qf(t,Fi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return Gl(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function CS(t,e,n,i,r,s){return t=Yu(t,i,n,s),r&&(t=Ju(t)),t}function RS(t){return[t,this.get(t)]}let LS;function sd(){return LS||=new Fi(ga([]),void 0,void 0,void 0,TS)}function No(t){return bn?t[bn]:void 0}function _o(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}Fi.prototype.toJSON=void 0;var lu=class{};const PS={Ka:!0};function DS(t,e){e<100||ds(cS,1)}function Fo(t,e,n,i){const r=i!==void 0;i=!!i;var s,a=bn;!r&&Ts&&a&&(s=t[a])&&_o(s,DS),a=[];var o=t.length;let l;s=4294967295;let c=!1;const u=!!(64&e),h=u?128&e?0:-1:void 0;1&e||(l=o&&t[o-1],l!=null&&typeof l=="object"&&l.constructor===Object?s=--o:l=void 0,!u||128&e||r||(c=!0,s=s-h+h)),e=void 0;for(var f=0;f<o;f++){let p=t[f];if(p!=null&&(p=n(p,i))!=null)if(u&&f>=s){const _=f-h;(e??={})[_]=p}else a[f]=p}if(l)for(let p in l){if((o=l[p])==null||(o=n(o,i))==null)continue;let _;f=+p,u&&!Number.isNaN(f)&&(_=f+h)<s?a[_]=o:(e??={})[p]=o}return e&&(c?a.push(e):a[s]=e),r&&bn&&(t=No(t))&&t instanceof lu&&(a[bn]=(function(p){const _=new lu;return _o(p,((x,m,d)=>{_[m]=Yn(d)})),_.da=p.da,_})(t)),a}function IS(t){return t[0]=ca(t[0]),t[1]=ca(t[1]),t}function ca(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return ou(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[we];return t.length===0&&1&e?void 0:Fo(t,e,ca)}if(t!=null&&t[ps]===ms)return Mm(t);if(t instanceof fi){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(rm){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),im(),n=nm[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let c=0,u=0;for(;c<e.length-2;c+=3){var s=e[c],a=e[c+1],o=e[c+2],l=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[u++]=l+s+a+o}switch(l=0,o=r,e.length-c){case 2:o=n[(15&(l=e[c+1]))<<2]||r;case 1:e=e[c],i[u]=n[e>>2]+n[(3&e)<<4|l>>4]+o+r}e=i.join("")}t=t.g=e}return t}return t instanceof Fi?t=t.size!==0?t.V(IS):void 0:void 0}return t}let US,NS;function Mm(t){return Fo(t=t.v,0|t[we],ca)}function yr(t,e){return ym(t,e[0],e[1])}function ym(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[we],Xf&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(Xf)throw Error("carr");ds(uS,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&qt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var a=s-1;const l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(s=+o)<a&&(n[s+e]=l[o],delete l[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return qt(t,64|r|i),t}function FS(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[we];return t.length===0&&1&n?void 0:ad(t,n,e)}if(t!=null&&t[ps]===ms)return od(t);if(t instanceof Fi){if(2&(e=t.J))return t;if(!t.size)return;if(n=ga(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[ps]===ms?od(r):Array.isArray(r)?ad(r,0|r[we],!!(32&e)):void 0,i[1]=r}return n}return t instanceof fi?t:void 0}function ad(t,e,n){return 2&e||(!n||4096&e||16&e?t=Cs(t,e,!1,n&&!(16&e)):(ma(t,34),4&e&&Object.freeze(t))),t}function Ku(t,e,n){return t=new t.constructor(e),n&&(t.h=Rr),t.m=Rr,t}function od(t){const e=t.v,n=0|e[we];return An(t,n)?t:Zu(t,e,n)?Ku(t,e):Cs(e,n)}function Cs(t,e,n,i){return i??=!!(34&e),t=Fo(t,e,FS,i),i=32,n&&(i|=2),qt(t,e=16769217&e|i),t}function Ju(t){const e=t.v,n=0|e[we];return An(t,n)?Zu(t,e,n)?Ku(t,e,!0):new t.constructor(Cs(e,n,!1)):t}function Rs(t){if(t.h!==Rr)return!1;var e=t.v;return ma(e=Cs(e,0|e[we]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function Ls(t){if(!Rs(t)&&An(t,0|t.v[we]))throw Error()}function Dr(t,e){e===void 0&&(e=0|t[we]),32&e&&!(4096&e)&&qt(t,4096|e)}function Zu(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(qt(e,2|n),t.h=Rr,!0)}const Em=Tn(0),ji={};function Tt(t,e,n,i,r){if((e=Oi(t.v,e,n,r))!==null||i&&t.m!==Rr)return e}function Oi(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let a,o;if(!(s<1+(n?0:-1))){if(r>=s)if(a=t[s],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[e],o=!0;else{if(r!==s)return;n=a}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[r]=i,i}return n}}function ft(t,e,n,i){Ls(t),zt(t=t.v,0|t[we],e,n,i)}function zt(t,e,n,i,r){const s=n+(r?0:-1);var a=t.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=(e??=0|t[we])>>14&1023||536870912)?i!=null&&(t[a+(r?0:-1)]={[n]:i}):t[s]=i),e)}function xr(){return hS===void 0?2:4}function Sr(t,e,n,i,r){let s=t.v,a=0|s[we];i=An(t,a)?1:i,r=!!r||i===3,i===2&&Rs(t)&&(s=t.v,a=0|s[we]);let o=(t=Qu(s,e))===Pr?7:0|t[we],l=eh(o,a);var c=!(4&l);if(c){4&l&&(t=Yn(t),o=0,l=br(l,a),a=zt(s,a,e,t));let u=0,h=0;for(;u<t.length;u++){const f=n(t[u]);f!=null&&(t[h++]=f)}h<u&&(t.length=h),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==o&&(qt(t,l),2&l&&Object.freeze(t)),bm(t,l,s,a,e,i,c,r)}function bm(t,e,n,i,r,s,a,o){let l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?Er(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&qt(t,e),Object.freeze(t)):(s===2&&Er(e)&&(t=Yn(t),l=0,e=br(e,i),i=zt(n,i,r,t)),Er(e)||(o||(e|=16),e!==l&&qt(t,e))),2&e||!(4096&e||16&e)||Dr(n,i),t}function Qu(t,e,n){return t=Oi(t,e,n),Array.isArray(t)?t:Pr}function eh(t,e){return 2&e&&(t|=2),1|t}function Er(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Tm(t){return Wu(t,!0)}function Am(t){t=Yn(t);for(let e=0;e<t.length;e++){const n=t[e]=Yn(t[e]);Array.isArray(n[1])&&(n[1]=ga(n[1]))}return aa(t)}function Yi(t,e,n,i){Ls(t),zt(t=t.v,0|t[we],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ps(t,e,n){if(2&e)throw Error();const i=As(e);let r=Qu(t,n,i),s=r===Pr?7:0|r[we],a=eh(s,e);return(2&a||Er(a)||16&a)&&(a===s||Er(a)||qt(r,a),r=Yn(r),s=0,a=br(a,e),zt(t,e,n,r,i)),a&=-13,a!==s&&qt(r,a),r}function Hl(t,e){var n=_0;return nh(th(t=t.v),t,void 0,n)===e?e:-1}function th(t){if(Ts)return t[Ws]??(t[Ws]=new Map);if(Ws in t)return t[Ws];const e=new Map;return Object.defineProperty(t,Ws,{value:e}),e}function wm(t,e,n,i,r){const s=th(t),a=nh(s,t,e,n,r);return a!==i&&(a&&(e=zt(t,e,a,void 0,r)),s.set(n,i)),e}function nh(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];Oi(e,o,r)!=null&&(s!==0&&(n=zt(e,n,s,void 0,r)),s=o)}return t.set(i,s),s}function ih(t,e,n){let i=0|t[we];const r=As(i),s=Oi(t,n,r);let a;if(s!=null&&s[ps]===ms){if(!An(s))return Rs(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[we];2&o&&(a=Cs(a,o))}return a=yr(a,e),a!==s&&zt(t,i,n,a,r),a}function Cm(t,e,n,i,r){let s=!1;if((i=Oi(t,i,r,(a=>{const o=Yu(a,n,!1,e);return s=o!==a&&o!=null,o})))!=null)return s&&!An(i)&&Dr(t,e),i}function nt(t,e,n,i){let r=t.v,s=0|r[we];if((e=Cm(r,s,e,n,i))==null)return e;if(s=0|r[we],!An(t,s)){const a=Ju(e);a!==e&&(Rs(t)&&(r=t.v,s=0|r[we]),s=zt(r,s,n,e=a,i),Dr(r,s))}return e}function Rm(t,e,n,i,r,s,a,o){var l=An(t,n);s=l?1:s,a=!!a||s===3,l=o&&!l,(s===2||l)&&Rs(t)&&(n=0|(e=t.v)[we]);var c=(t=Qu(e,r))===Pr?7:0|t[we],u=eh(c,n);if(o=!(4&u)){var h=t,f=n;const p=!!(2&u);p&&(f|=2);let _=!p,x=!0,m=0,d=0;for(;m<h.length;m++){const b=Yu(h[m],i,!1,f);if(b instanceof i){if(!p){const T=An(b);_&&=!T,x&&=T}h[d++]=b}}d<m&&(h.length=d),u|=4,u=x?-4097&u:4096|u,u=_?8|u:-9&u}if(u!==c&&(qt(t,u),2&u&&Object.freeze(t)),l&&!(8&u||!t.length&&(s===1||s===4&&(2&u||!(16&u)&&32&n)))){for(Er(u)&&(t=Yn(t),u=br(u,n),n=zt(e,n,r,t)),i=t,l=u,c=0;c<i.length;c++)(h=i[c])!==(u=Ju(h))&&(i[c]=u);l|=8,qt(t,u=l=i.length?4096|l:-4097&l)}return bm(t,u,e,n,r,s,o,a)}function Bi(t,e,n){const i=t.v;return Rm(t,i,0|i[we],e,n,xr(),!1,!0)}function Lm(t){return t==null&&(t=void 0),t}function Ue(t,e,n,i,r){return ft(t,n,i=Lm(i),r),i&&!An(i)&&Dr(t.v),t}function Zs(t,e,n,i){e:{var r=i=Lm(i);Ls(t);const s=t.v;let a=0|s[we];if(r==null){const o=th(s);if(nh(o,s,a,n)!==e)break e;o.set(n,0)}else a=wm(s,a,n,e);zt(s,a,e,r)}i&&!An(i)&&Dr(t.v)}function br(t,e){return-273&(2&e?2|t:-3&t)}function rh(t,e,n,i){var r=i;Ls(t),t=Rm(t,i=t.v,0|i[we],n,e,2,!0),r=r??new n,t.push(r),e=n=t===Pr?7:0|t[we],(r=An(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&qt(t,n),r||Dr(i)}function Bn(t,e,n){return ws(Tt(t,e,void 0,n))}function Dt(t,e){return Tt(t,e,void 0,void 0,li)??0}function ki(t,e,n){if(n!=null){if(typeof n!="number"||!Uo(n))throw su("int32");n|=0}ft(t,e,n)}function Pe(t,e,n){ft(t,e,Ks(n))}function wn(t,e,n){Yi(t,e,xa(n),"")}function vo(t,e,n){{Ls(t);const a=t.v;let o=0|a[we];if(n==null)zt(a,o,e);else{var i=t=n===Pr?7:0|n[we],r=Er(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=Yn(n),i=0,t=br(t,o),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const l=n[r],c=Sm(l);Object.is(l,c)||(s&&(n=Yn(n),i=0,t=br(t,o),s=!1),n[r]=c)}t!==i&&(s&&(n=Yn(n),t=br(t,o)),qt(n,t)),zt(a,o,e,n)}}}function Oo(t,e,n){Ls(t),Sr(t,e,Jt,2,!0).push(Sm(n))}var Yr=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function sh(t,e){if(typeof t=="string")return new Yr(sm(t),e);if(Array.isArray(t))return new Yr(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new Yr(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new Yr(t,!1);if(t.constructor===fi)return e=Hu(t)||new Uint8Array(0),new Yr(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new Yr(t,!1);throw Error()}function ah(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Tr(t,o),!(128&n))return e(i>>>0,r>>>0);throw Error()}function oh(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Tr(t,n),!!(127&e)}throw Error()}function tr(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Tr(t,n),r}function mi(t){return tr(t)>>>0}function xo(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],Tr(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function OS(t){return tr(t)}function Tr(t,e){if(t.g=e,e>t.l)throw Error()}function Pm(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function Dm(t,e){if(e==0)return Cr();var n=Pm(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):vS?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Cr():new fi(n,fs)}var ld=[];function Im(t,e,n,i){if(So.length){const r=So.pop();return r.o(i),r.g.init(t,e,n,i),r}return new BS(t,e,n,i)}function Um(t){t.g.clear(),t.l=-1,t.h=-1,So.length<100&&So.push(t)}function Nm(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=mi(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function lo(t){switch(t.h){case 0:t.h!=0?lo(t):oh(t.g);break;case 1:Tr(t=t.g,t.g+8);break;case 2:if(t.h!=2)lo(t);else{var e=mi(t.g);Tr(t=t.g,t.g+e)}break;case 5:Tr(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!Nm(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}lo(t)}break;default:throw Error()}}function Sa(t,e,n){const i=t.g.l;var r=mi(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function lh(t){var e=mi(t.g),n=Pm(t=t.g,e);if(t=t.h,J3){var i,r=t;(i=Vl)||(i=Vl=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(Xa===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Xa=!0}catch{Xa=!1}}throw!Xa&&(Vl=void 0),o}}else{e=(s=n)+e,n=[];let o,l=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?fr():(o=t[s++],a<194||(192&o)!=128?(s--,fr()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?fr():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,fr()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?fr():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,fr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):fr(),n.length>=8192&&(l=qf(l,n),n.length=0)}s=qf(l,n)}return s}function Fm(t){const e=mi(t.g);return Dm(t.g,e)}function Bo(t,e,n){var i=mi(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var BS=class{constructor(t,e,n,i){if(ld.length){const r=ld.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:l=!1}={}){this.Y=o,this.ea=l,r&&(r=sh(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},So=[];function cd(t){return t?/^\d+$/.test(t)?(Io(t),new cu(bt,Ft)):null:kS||=new cu(0,0)}var cu=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let kS;function ud(t){return t?/^-?\d+$/.test(t)?(Io(t),new uu(bt,Ft)):null:VS||=new uu(0,0)}var uu=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let VS;function ns(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ds(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function ko(t,e){if(e>=0)Ds(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function ch(t){var e=bt;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function vs(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Vn(t,e,n){Ds(t.g,8*e+n)}function uh(t,e){return Vn(t,e,2),e=t.g.end(),vs(t,e),e.push(t.h),e}function hh(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Vo(t,e,n){Vn(t,e,2),Ds(t.g,n.length),vs(t,t.g.end()),vs(t,n)}function Mo(t,e,n,i){n!=null&&(e=uh(t,e),i(n,t),hh(t,e))}function _i(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var fh=_i(),Om=_i(),dh=_i(),ph=_i(),mh=_i(),Bm=_i(),zS=_i(),zo=_i(),km=_i(),Vm=_i();function vi(t,e,n){var i=t.v;bn&&bn in i&&(i=i[bn])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var Ce=class{constructor(t,e){this.v=ym(t,e,void 0,2048)}toJSON(){return Mm(this)}j(){var t=yM,e=this.v,n=t.g,i=bn;if(Ts&&i&&e[i]?.[n]!=null&&ds(lS,3),e=t.g,Jf&&bn&&Jf===void 0&&(i=(n=this.v)[bn])&&(i=i.da))try{i(n,e,PS)}catch(r){tm(r)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[we];return Zu(this,t,e)?Ku(this,t,!0):new this.constructor(Cs(t,e,!1))}};Ce.prototype[ps]=ms,Ce.prototype.toString=function(){return this.v.toString()};var Is=class{constructor(t,e,n){this.g=t,this.h=e,t=fh,this.l=!!t&&n===t||!1}};function Go(t,e){return new Is(t,e,fh)}function zm(t,e,n,i,r){Mo(t,n,qm(e,i),r)}const GS=Go((function(t,e,n,i,r){return t.h===2&&(Sa(t,ih(e,i,n),r),!0)}),zm),HS=Go((function(t,e,n,i,r){return t.h===2&&(Sa(t,ih(e,i,n),r),!0)}),zm);var Ho=Symbol(),Wo=Symbol(),hu=Symbol(),hd=Symbol(),fd=Symbol();let Gm,Hm;function Ir(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=(function(h){switch(typeof h){case"boolean":return US||=[0,void 0,!0];case"number":return h>0?void 0:h===0?NS||=[0,void 0]:[-h,void 0];case"string":return[0,h];case"object":return h}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,Gm??=s,Hm??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)o[s[l]]=s;s=i[++a]}for(l=1;s!==void 0;){let h;typeof s=="number"&&(l+=s,s=i[++a]);var c=void 0;if(s instanceof Is?h=s:(h=GS,a--),h?.l){s=i[++a],c=i;var u=a;typeof s=="function"&&(s=s(),c[u]=s),c=s}for(u=l+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);l<u;l++){const f=o[l];c?n(r,l,h,c,f):e(r,l,h,f)}}return i[t]=r}function Wm(t){return Array.isArray(t)?t[0]instanceof Is?t:[HS,t]:[t,void 0]}function qm(t,e){return t instanceof Ce?t.v:Array.isArray(t)?yr(t,e):void 0}function gh(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function _h(t,e,n,i,r){const s=n.g;let a,o;t[e]=(l,c,u)=>s(l,c,u,o||=Ir(Wo,gh,_h,i).T,a||=vh(i),r)}function vh(t){let e=t[hu];if(e!=null)return e;const n=Ir(Wo,gh,_h,t);return e=n.ma?(i,r)=>Gm(i,r,n):(i,r)=>{for(;Nm(r)&&r.h!=4;){var s=r.l,a=n[s];if(a==null){var o=n.ba;o&&(o=o[s])&&(o=qS(o))!=null&&(a=n[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,lo(o),o.ha)var l=void 0;else l=o.g.g-a,o.g.g=a,l=Dm(o.g,l);a=void 0,o=i,l&&((a=o[bn]??(o[bn]=new lu))[s]??(a[s]=[])).push(l)}}return(i=No(i))&&(i.da=n.qa[fd]),!0},t[hu]=e,t[fd]=WS.bind(t),e}function WS(t,e,n,i){var r=this[Wo];const s=this[hu],a=yr(void 0,r.T),o=No(t);if(o){var l=!1,c=r.ba;if(c){if(r=(u,h,f)=>{if(f.length!==0)if(c[h])for(const p of f){u=Im(p);try{l=!0,s(a,u)}finally{Um(u)}}else i?.(t,h,f)},e==null)_o(o,r);else if(o!=null){const u=o[e];u&&r(o,e,u)}if(l){let u=0|t[we];if(2&u&&2048&u&&!n?.Ka)throw Error();const h=As(u),f=(p,_)=>{if(Oi(t,p,h)!=null){if(n?.Qa===1)return;throw Error()}_!=null&&(u=zt(t,u,p,_,h)),delete o[p]};e==null?um(a,0|a[we],((p,_)=>{f(p,_)})):f(e,Oi(a,e,h))}}}}function qS(t){const e=(t=Wm(t))[0].g;if(t=t[1]){const n=vh(t),i=Ir(Wo,gh,_h,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function qo(t,e,n){t[e]=n.h}function Xo(t,e,n,i){let r,s;const a=n.h;t[e]=(o,l,c)=>a(o,l,c,s||=Ir(Ho,qo,Xo,i).T,r||=Xm(i))}function Xm(t){let e=t[hd];if(!e){const n=Ir(Ho,qo,Xo,t);e=(i,r)=>jm(i,r,n),t[hd]=e}return e}function jm(t,e,n){um(t,0|t[we],((i,r)=>{if(r!=null){var s=(function(a,o){var l=a[o];if(l)return l;if((l=a.ba)&&(l=l[o])){var c=(l=Wm(l))[0].h;if(l=l[1]){const u=Xm(l),h=Ir(Ho,qo,Xo,l).T;l=a.ma?Hm(h,u):(f,p,_)=>c(f,p,_,h,u)}else l=c;return a[o]=l}})(n,i);s?s(e,r,i):i<500||ds(au,3)}})),(t=No(t))&&_o(t,((i,r,s)=>{for(vs(e,e.g.end()),i=0;i<s.length;i++)vs(e,Hu(s[i])||new Uint8Array(0))}))}const XS=Tn(0);function Us(t,e){if(Array.isArray(e)){var n=0|e[we];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&qt(e,t),2&t&&Object.freeze(e),e}}function rn(t,e,n){return new Is(t,e,n)}function Ns(t,e,n){return new Is(t,e,n)}function sn(t,e,n){zt(t,0|t[we],e,n,As(0|t[we]))}var jS=Go((function(t,e,n,i,r){if(t.h!==2)return!1;if(t=Yn(t=Sa(t,yr([void 0,void 0],i),r)),r=As(i=0|e[we]),2&i)throw Error();let s=Oi(e,n,r);if(s instanceof Fi)(2&s.J)!=0?(s=s.V(),s.push(t),zt(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var a=0|s[we];8192&a||qt(s,a|=8192),2&a&&(s=Am(s),zt(e,i,n,s,r)),s.push(t)}else zt(e,i,n,aa([t]),r);return!0}),(function(t,e,n,i,r){if(e instanceof Fi)e.forEach(((s,a)=>{Mo(t,n,yr([a,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&Mo(t,n,yr(a,i),r)}aa(e)}}));function $m(t,e,n){(e=li(e))!=null&&(Vn(t,n,5),t=t.g,qu(e),ch(t))}function Ym(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(_a(64,i));if(va(i)){if(r==="string")return _m(i);if(r==="number")return $u(i)}})(e),e!=null&&(typeof e=="string"&&ud(e),e!=null))switch(Vn(t,n,0),typeof e){case"number":t=t.g,gs(e),ns(t,bt,Ft);break;case"bigint":n=BigInt.asUintN(64,e),n=new uu(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ns(t.g,n.h,n.g);break;default:n=ud(e),ns(t.g,n.h,n.g)}}function Km(t,e,n){(e=ws(e))!=null&&e!=null&&(Vn(t,n,0),ko(t.g,e))}function Jm(t,e,n){(e=pm(e))!=null&&(Vn(t,n,0),t.g.g.push(e?1:0))}function Zm(t,e,n){(e=Jt(e))!=null&&Vo(t,n,em(e))}function Qm(t,e,n,i,r){Mo(t,n,qm(e,i),r)}function e0(t,e,n){(e=e==null||typeof e=="string"||e instanceof fi?e:void 0)!=null&&Vo(t,n,sh(e,!0).buffer)}function t0(t,e,n){(e=mm(e))!=null&&e!=null&&(Vn(t,n,0),Ds(t.g,e))}function n0(t,e,n){return(t.h===5||t.h===2)&&(e=Ps(e,0|e[we],n),t.h==2?Bo(t,xo,e):e.push(xo(t.g)),!0)}var Ot=rn((function(t,e,n){return t.h===5&&(sn(e,n,xo(t.g)),!0)}),$m,zo),$S=Ns(n0,(function(t,e,n){if((e=Us(li,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Vn(i,r,5),i=i.g,qu(s),ch(i))}}),zo),xh=Ns(n0,(function(t,e,n){if((e=Us(li,e))!=null&&e.length){Vn(t,n,2),Ds(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,qu(e[i]),ch(n)}}),zo),YS=rn((function(t,e,n){return t.h===5&&(sn(e,n,(t=xo(t.g))===0?void 0:t),!0)}),$m,zo),nr=rn((function(t,e,n){return t.h!==0?t=!1:(sn(e,n,ah(t.g,dm)),t=!0),t}),Ym,Bm),Wl=rn((function(t,e,n){return t.h!==0?e=!1:(sn(e,n,(t=ah(t.g,dm))===XS?void 0:t),e=!0),e}),Ym,Bm),KS=rn((function(t,e,n){return t.h!==0?t=!1:(sn(e,n,ah(t.g,SS)),t=!0),t}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(MS(64,i));if(va(i)){if(r==="string")return r=_s(Number(i)),Lr(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(Io(i),i=oa(bt,Ft))),i;if(r==="number")return(i=_s(i))>=0&&Lr(i)||(gs(i),i=fm(bt,Ft)),i}})(e),e!=null&&(typeof e=="string"&&cd(e),e!=null))switch(Vn(t,n,0),typeof e){case"number":t=t.g,gs(e),ns(t,bt,Ft);break;case"bigint":n=BigInt.asUintN(64,e),n=new cu(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ns(t.g,n.h,n.g);break;default:n=cd(e),ns(t.g,n.h,n.g)}}),zS),Vt=rn((function(t,e,n){return t.h===0&&(sn(e,n,tr(t.g)),!0)}),Km,ph),Ma=Ns((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ps(e,0|e[we],n),t.h==2?Bo(t,tr,e):e.push(tr(t.g)),!0)}),(function(t,e,n){if((e=Us(ws,e))!=null&&e.length){n=uh(t,n);for(let i=0;i<e.length;i++)ko(t.g,e[i]);hh(t,n)}}),ph),Qr=rn((function(t,e,n){return t.h===0&&(sn(e,n,(t=tr(t.g))===0?void 0:t),!0)}),Km,ph),At=rn((function(t,e,n){return t.h===0&&(sn(e,n,oh(t.g)),!0)}),Jm,Om),Ar=rn((function(t,e,n){return t.h===0&&(sn(e,n,(t=oh(t.g))===!1?void 0:t),!0)}),Jm,Om),en=Ns((function(t,e,n){return t.h===2&&(t=lh(t),Ps(e,0|e[we],n).push(t),!0)}),(function(t,e,n){if((e=Us(Jt,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&Vo(i,r,em(s))}}),dh),Ji=rn((function(t,e,n){return t.h===2&&(sn(e,n,(t=lh(t))===""?void 0:t),!0)}),Zm,dh),mt=rn((function(t,e,n){return t.h===2&&(sn(e,n,lh(t)),!0)}),Zm,dh),$t=(function(t,e,n=fh){return new Is(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=yr(void 0,i),Ps(e,0|e[we],n).push(i),Sa(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)Qm(t,e[s],n,i,r);1&(t=0|e[we])||qt(e,1|t)}})),St=Go((function(t,e,n,i,r,s){if(t.h!==2)return!1;let a=0|e[we];return wm(e,a,s,n,As(a)),Sa(t,e=ih(e,i,n),r),!0}),Qm),i0=rn((function(t,e,n){return t.h===2&&(sn(e,n,Fm(t)),!0)}),e0,km),JS=Ns((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ps(e,0|e[we],n),t.h==2?Bo(t,mi,e):e.push(mi(t.g)),!0)}),(function(t,e,n){if((e=Us(mm,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Vn(i,r,0),Ds(i.g,s))}}),mh),ZS=rn((function(t,e,n){return t.h===0&&(sn(e,n,(t=mi(t.g))===0?void 0:t),!0)}),t0,mh),nn=rn((function(t,e,n){return t.h===0&&(sn(e,n,tr(t.g)),!0)}),(function(t,e,n){(e=ws(e))!=null&&(e=parseInt(e,10),Vn(t,n,0),ko(t.g,e))}),Vm);class QS{constructor(e,n){var i=Rn;this.g=e,this.h=n,this.m=nt,this.j=Ue,this.defaultValue=void 0,this.l=i.Oa!=null?hm:void 0}register(){Lo(this)}}function xi(t,e){return new QS(t,e)}function ir(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Im(n,void 0,void 0,s);try{const a=new t,o=a.v;vh(e)(o,n);var r=a}finally{Um(n)}}return r}}function jo(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};jm(this.v,e,Ir(Ho,qo,Xo,t)),vs(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var dd=class extends Ce{constructor(t){super(t)}},pd=[0,Ji,rn((function(t,e,n){return t.h===2&&(sn(e,n,(t=Fm(t))===Cr()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof Ce){const i=e.Ra;return void(i?(e=i(e),e!=null&&Vo(t,n,sh(e,!0).buffer)):ds(au,3))}if(Array.isArray(e))return void ds(au,3)}e0(t,e,n)}),km)];let ql,md=globalThis.trustedTypes;function gd(t){var e;return ql===void 0&&(ql=(function(){let n=null;if(!md)return n;try{const i=r=>r;n=md.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=ql)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function ja(t,...e){if(e.length===0)return gd(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return gd(n)}var r0=[0,Vt,nn,At,-1,Ma,nn,-1,At],eM=class extends Ce{constructor(t){super(t)}},s0=[0,At,mt,At,nn,-1,Ns((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ps(e,0|e[we],n),t.h==2?Bo(t,OS,e):e.push(tr(t.g)),!0)}),(function(t,e,n){if((e=Us(ws,e))!=null&&e.length){n=uh(t,n);for(let i=0;i<e.length;i++)ko(t.g,e[i]);hh(t,n)}}),Vm),mt,-1,[0,At,-1],nn,At,-1],a0=[0,3,At,-1,2,[0,[2],Vt,St,[0,rn((function(t,e,n){return t.h===0&&(sn(e,n,mi(t.g)),!0)}),t0,mh)]],[0,nn,At,nn,At,nn,At,mt,-1],[0,[3,4],mt,-1,St,[0,Vt],St,[0,nn]],[0]],o0=[0,mt,-2],_d=class extends Ce{constructor(t){super(t)}},l0=[0],c0=[0,Vt,At,1,At,-4],Rn=class extends Ce{constructor(t){super(t,2)}},Gt={};Gt[336783863]=[0,mt,At,-1,Vt,[0,[1,2,3,4,5,6,7,8,9],St,l0,St,s0,St,o0,St,c0,St,r0,St,[0,mt,-2],St,[0,mt,nn],St,a0,St,[0,nn,-1,At]],[0,mt],At,[0,[1,3],[2,4],St,[0,Ma],-1,St,[0,en],-1,$t,[0,mt,-1]],mt];var vd=[0,Wl,-1,Ar,-3,Wl,Ma,Ji,Qr,Wl,-1,Ar,Qr,Ar,-2,Ji];function Mt(t,e){Oo(t,3,e)}function Ye(t,e){Oo(t,4,e)}var pn=class extends Ce{constructor(t){super(t,500)}o(t){return Ue(this,0,7,t)}},Qs=[-1,{}],xd=[0,mt,1,Qs],Sd=[0,mt,en,Qs];function zn(t,e){rh(t,1,pn,e)}function wt(t,e){Oo(t,10,e)}function it(t,e){Oo(t,15,e)}var Ln=class extends Ce{constructor(t){super(t,500)}o(t){return Ue(this,0,1001,t)}},u0=[-500,$t,[-500,Ji,-1,en,-3,[-2,Gt,At],$t,pd,Qr,-1,xd,Sd,$t,[0,Ji,Ar],Ji,vd,Qr,en,987,en],4,$t,[-500,mt,-1,[-1,{}],998,mt],$t,[-500,mt,en,-1,[-2,{},At],997,en,-1],Qr,$t,[-500,mt,en,Qs,998,en],en,Qr,xd,Sd,$t,[0,Ji,-1,Qs],en,-2,vd,Ji,-1,Ar,[0,Ar,ZS],978,Qs,$t,pd];Ln.prototype.g=jo(u0);var tM=ir(Ln,u0),nM=class extends Ce{constructor(t){super(t)}},h0=class extends Ce{constructor(t){super(t)}g(){return Bi(this,nM,1)}},f0=[0,$t,[0,Vt,Ot,mt,-1]],$o=ir(h0,f0),iM=class extends Ce{constructor(t){super(t)}},rM=class extends Ce{constructor(t){super(t)}},Xl=class extends Ce{constructor(t){super(t)}l(){return nt(this,iM,2)}g(){return Bi(this,rM,5)}},d0=ir(class extends Ce{constructor(t){super(t)}},[0,en,Ma,xh,[0,nn,[0,Vt,-3],[0,Ot,-3],[0,Vt,-1,[0,$t,[0,Vt,-2]]],$t,[0,Ot,-1,mt,Ot]],mt,-1,nr,$t,[0,Vt,Ot],en,nr]),p0=class extends Ce{constructor(t){super(t)}},is=ir(class extends Ce{constructor(t){super(t)}},[0,$t,[0,Ot,-4]]),m0=class extends Ce{constructor(t){super(t)}},ya=ir(class extends Ce{constructor(t){super(t)}},[0,$t,[0,Ot,-4]]),sM=class extends Ce{constructor(t){super(t)}},aM=[0,Vt,-1,xh,nn],g0=class extends Ce{constructor(t){super(t)}};g0.prototype.g=jo([0,Ot,-4,nr]);var oM=class extends Ce{constructor(t){super(t)}},lM=ir(class extends Ce{constructor(t){super(t)}},[0,$t,[0,1,Vt,mt,f0],nr]),Md=class extends Ce{constructor(t){super(t)}},cM=class extends Ce{constructor(t){super(t)}na(){const t=Tt(this,1,void 0,void 0,Tm);return t??Cr()}},uM=class extends Ce{constructor(t){super(t)}},_0=[1,2],hM=ir(class extends Ce{constructor(t){super(t)}},[0,$t,[0,_0,St,[0,xh],St,[0,i0],Vt,mt],nr]),Sh=class extends Ce{constructor(t){super(t)}},v0=[0,mt,Vt,Ot,en,-1],yd=class extends Ce{constructor(t){super(t)}},fM=[0,At,-1],Ed=class extends Ce{constructor(t){super(t)}},co=[1,2,3,4,5,6],yo=class extends Ce{constructor(t){super(t)}g(){return Tt(this,1,void 0,void 0,Tm)!=null}l(){return Jt(Tt(this,2))!=null}},Pt=class extends Ce{constructor(t){super(t)}g(){return pm(Tt(this,2))??!1}},x0=[0,i0,mt,[0,Vt,nr,-1],[0,KS,nr]],kt=[0,x0,At,[0,co,St,c0,St,s0,St,r0,St,l0,St,o0,St,a0],nn],Yo=class extends Ce{constructor(t){super(t)}},Mh=[0,kt,Ot,-1,Vt],dM=xi(502141897,Yo);Gt[502141897]=Mh;var pM=ir(class extends Ce{constructor(t){super(t)}},[0,[0,nn,-1,$S,JS],aM]),S0=class extends Ce{constructor(t){super(t)}},M0=class extends Ce{constructor(t){super(t)}},fu=[0,kt,Ot,[0,kt],At],mM=xi(508968150,M0);Gt[508968150]=[0,kt,Mh,fu,Ot,[0,[0,x0]]],Gt[508968149]=fu;var Kr=class extends Ce{constructor(t){super(t)}l(){return nt(this,Sh,2)}g(){ft(this,2)}},y0=[0,kt,v0];Gt[478825465]=y0;var gM=class extends Ce{constructor(t){super(t)}},E0=class extends Ce{constructor(t){super(t)}},yh=class extends Ce{constructor(t){super(t)}},Eh=class extends Ce{constructor(t){super(t)}},b0=class extends Ce{constructor(t){super(t)}},bd=[0,kt,[0,kt],y0,-1],T0=[0,kt,Ot,Vt],bh=[0,kt,Ot],A0=[0,kt,T0,bh,Ot],_M=xi(479097054,b0);Gt[479097054]=[0,kt,A0,bd],Gt[463370452]=bd,Gt[464864288]=T0;var vM=xi(462713202,Eh);Gt[462713202]=A0,Gt[474472470]=bh;var xM=class extends Ce{constructor(t){super(t)}},w0=class extends Ce{constructor(t){super(t)}},C0=class extends Ce{constructor(t){super(t)}},R0=class extends Ce{constructor(t){super(t)}},Th=[0,kt,Ot,-1,Vt],du=[0,kt,Ot,At];R0.prototype.g=jo([0,kt,bh,[0,kt],Mh,fu,Th,du]);var L0=class extends Ce{constructor(t){super(t)}},SM=xi(456383383,L0);Gt[456383383]=[0,kt,v0];var P0=class extends Ce{constructor(t){super(t)}},MM=xi(476348187,P0);Gt[476348187]=[0,kt,fM];var D0=class extends Ce{constructor(t){super(t)}},Td=class extends Ce{constructor(t){super(t)}},I0=[0,nn,-1],yM=xi(458105876,class extends Ce{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[we];return t=An(this,n),e=(function(i,r,s,a){var o=Td;!a&&Rs(i)&&(s=0|(r=i.v)[we]);var l=Oi(r,2);if(i=!1,l==null){if(a)return sd();l=[]}else if(l.constructor===Fi){if(!(2&l.J)||a)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[we])):l=[];if(a){if(!l.length)return sd();i||(i=!0,ga(l))}else i&&(i=!1,aa(l),l=Am(l));return!i&&32&s&&ma(l,32),s=zt(r,s,2,a=new Fi(l,o,bS,void 0)),i||Dr(r,s),a})(this,e,n,t),!t&&Td&&(e.ra=!0),e}});Gt[458105876]=[0,I0,jS,[!0,nr,[0,mt,-1,en]],[0,Ma,At,nn]];var Ah=class extends Ce{constructor(t){super(t)}},U0=xi(458105758,Ah);Gt[458105758]=[0,kt,mt,I0];var jl=class extends Ce{constructor(t){super(t)}},Ad=[0,YS,-1,Ar],EM=class extends Ce{constructor(t){super(t)}},N0=class extends Ce{constructor(t){super(t)}},pu=[1,2];N0.prototype.g=jo([0,pu,St,Ad,St,[0,$t,Ad]]);var F0=class extends Ce{constructor(t){super(t)}},bM=xi(443442058,F0);Gt[443442058]=[0,kt,mt,Vt,Ot,en,-1,At,Ot],Gt[514774813]=Th;var O0=class extends Ce{constructor(t){super(t)}},TM=xi(516587230,O0);function mu(t,e){return e=e?e.clone():new Sh,t.displayNamesLocale!==void 0?ft(e,1,xa(t.displayNamesLocale)):t.displayNamesLocale===void 0&&ft(e,1),t.maxResults!==void 0?ki(e,2,t.maxResults):"maxResults"in t&&ft(e,2),t.scoreThreshold!==void 0?Pe(e,3,t.scoreThreshold):"scoreThreshold"in t&&ft(e,3),t.categoryAllowlist!==void 0?vo(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&ft(e,4),t.categoryDenylist!==void 0?vo(e,5,t.categoryDenylist):"categoryDenylist"in t&&ft(e,5),e}function B0(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function wh(t,e=-1,n=""){return{categories:t.map((i=>({index:Bn(i,1)??0??-1,score:Dt(i,2)??0,categoryName:Jt(Tt(i,3))??""??"",displayName:Jt(Tt(i,4))??""??""}))),headIndex:e,headName:n}}function AM(t){const e={classifications:Bi(t,oM,1).map((n=>wh(nt(n,h0,4)?.g()??[],Bn(n,2)??0,Jt(Tt(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(ou(n)?n=Number(n):(n=_a(64,n),n=ou(n)?Number(n):String(n)),n):va(n)?typeof n=="number"?$u(n):_m(n):void 0})(Tt(t,2,void 0,void 0,go))!=null&&(e.timestampMs=B0(Tt(t,2,void 0,void 0,go)??Em)),e}function k0(t){var e=Sr(t,3,li,xr()),n=Sr(t,2,ws,xr()),i=Sr(t,1,Jt,xr()),r=Sr(t,9,Jt,xr());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=nt(t,Xl,4)?.l())&&(s.boundingBox={originX:Bn(e,1,ji)??0,originY:Bn(e,2,ji)??0,width:Bn(e,3,ji)??0,height:Bn(e,4,ji)??0,angle:0}),nt(t,Xl,4)?.g().length)for(const a of nt(t,Xl,4).g())s.keypoints.push({x:Tt(a,1,void 0,ji,li)??0,y:Tt(a,2,void 0,ji,li)??0,score:Tt(a,4,void 0,ji,li)??0,label:Jt(Tt(a,3,void 0,ji))??""});return s}function Ko(t){const e=[];for(const n of Bi(t,m0,1))e.push({x:Dt(n,1)??0,y:Dt(n,2)??0,z:Dt(n,3)??0,visibility:Dt(n,4)??0});return e}function ea(t){const e=[];for(const n of Bi(t,p0,1))e.push({x:Dt(n,1)??0,y:Dt(n,2)??0,z:Dt(n,3)??0,visibility:Dt(n,4)??0});return e}function wd(t){return Array.from(t,(e=>e>127?e-256:e))}function Cd(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let $a;Gt[516587230]=[0,kt,Th,du,Ot],Gt[518928384]=du;const wM=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function V0(t){if(t)return!0;if($a===void 0)try{await WebAssembly.instantiate(wM),$a=!0}catch{$a=!1}return $a}async function Ya(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await V0(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Zr=class{};function z0(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function Rd(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function G0(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Le(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Ld(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=G0(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function Pd(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function ni(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function $i(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}Zr.forVisionTasks=function(t,e=!1){return Ya("vision",t??ja``,e)},Zr.forTextTasks=function(t,e=!1){return Ya("text",t??ja``,e)},Zr.forGenAiTasks=function(t,e=!1){return Ya("genai",t??ja``,e)},Zr.forAudioTasks=function(t,e=!1){return Ya("audio",t??ja``,e)},Zr.isSimdSupported=function(t=!1){return V0(t)};async function CM(t,e,n,i){return t=await(async(r,s,a,o,l)=>{if(s&&await Rd(s),!self.ModuleFactory||a&&(await Rd(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function $l(t,e){const n=nt(t.baseOptions,yo,1)||new yo;typeof e=="string"?(ft(n,2,xa(e)),ft(n,1)):e instanceof Uint8Array&&(ft(n,1,Wu(e,!1)),ft(n,2)),Ue(t.baseOptions,0,1,n)}function Dd(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function xe(t,e){t.C=Math.max(t.C,e)}function Jo(t,e){t.B=new pn,wn(t.B,2,"PassThroughCalculator"),Mt(t.B,"free_memory"),Ye(t.B,"free_memory_unused_out"),wt(e,"free_memory"),zn(e,t.B)}function xs(t,e){Mt(t.B,e),Ye(t.B,e+"_unused_out")}function Zo(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var gu=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(nt(this.baseOptions,yo,1)?.g()||nt(this.baseOptions,yo,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=nt(i.baseOptions,Ed,3);if(!s){var a=s=new Ed,o=new _d;Zs(a,4,co,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new eM,Zs(r,2,co,a)):(r=s,a=new _d,Zs(r,4,co,a))),Ue(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),$l(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)$l(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{$l(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=tM(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,Dd(this)}finishProcessing(){this.g.finishProcessing(),Dd(this)}close(){this.B=void 0,this.g.closeGraph()}};function Qi(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}gu.prototype.close=gu.prototype.close;class RM{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Id(t,e,n){const i=t.g;if(n=Qi(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Ud(t,e){const n=t.g,i=Qi(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=Qi(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=Qi(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new RM(n,i,r,s)}function Ch(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function LM(t,e,n,i){return Ch(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=Ud(t,!0)),n=t.u):(t.A||(t.A=Ud(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function H0(t,e,n){return Ch(t,e),t=Qi(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function W0(t,e,n){Ch(t,e),t.B||(t.B=Qi(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function PM(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var q0=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Qi(t.createProgram(),"Failed to create WebGL program"),this.X=Id(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=Id(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Ci(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function _u(t){var e=Ci(t,1);if(!e){if(e=Ci(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=Ss(t);var n=Rh(t);if(W0(n,i,X0(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function X0(t){let e=Ci(t,2);if(!e){const n=Ss(t);e=$0(t);const i=_u(t),r=j0(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),vu(t)}return e}function Ss(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Qi(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function j0(t){if(t=Ss(t),!Ka)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Ka=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Ka=t.R16F}return Ka}function Rh(t){return t.l||(t.l=new q0),t.l}function $0(t){const e=Ss(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ci(t,2);return n||(n=H0(Rh(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function vu(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Ka,jt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Nd===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Ci(this,0)}ka(){return!!Ci(this,1)}R(){return!!Ci(this,2)}ja(){return(e=Ci(t=this,0))||(e=_u(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return _u(this)}N(){return X0(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Ss(this),r=Rh(this);i.activeTexture(i.TEXTURE1),n=H0(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=j0(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),W0(r,i,n),LM(r,i,!1,(()=>{$0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),vu(this)})),PM(r),vu(this)}}t.push(n)}return new jt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ss(this).deleteTexture(Ci(this,2)),Nd=-1}};jt.prototype.close=jt.prototype.close,jt.prototype.clone=jt.prototype.clone,jt.prototype.getAsWebGLTexture=jt.prototype.N,jt.prototype.getAsFloat32Array=jt.prototype.ia,jt.prototype.getAsUint8Array=jt.prototype.ja,jt.prototype.hasWebGLTexture=jt.prototype.R,jt.prototype.hasFloat32Array=jt.prototype.ka,jt.prototype.hasUint8Array=jt.prototype.Fa;var Nd=250;function Jn(...t){return t.map((([e,n])=>({start:e,end:n})))}const DM=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((Fd=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:z0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Le(this,i||"input_audio",(s=>{Le(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){ni(this,"__graph_config__",(e=>{t(e)})),Le(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Le(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){Le(this,e,(i=>{const[r,s]=Ld(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){Le(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Le(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Le(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Le(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Le(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Le(this,e,(i=>{Le(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){Le(this,e,(i=>{Pd(this,Object.keys(t),(r=>{Pd(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Le(this,n,(r=>{Le(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){Le(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Le(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){Le(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){Le(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){Le(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){Le(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){Le(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Le(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){Le(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Le(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Le(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Le(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Le(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Le(this,e,(n=>{Le(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Le(this,n,(i=>{Le(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){Le(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Le(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Le(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Le(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Le(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Le(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Le(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){ni(this,t,e),Le(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){$i(this,t,e),Le(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){ni(this,t,e),Le(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){$i(this,t,e),Le(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){ni(this,t,e),Le(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){$i(this,t,e),Le(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){ni(this,t,e),Le(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){$i(this,t,e),Le(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){ni(this,t,e),Le(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){$i(this,t,e),Le(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){ni(this,t,e),Le(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){$i(this,t,e),Le(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){ni(this,t,e),Le(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){$i(this,t,e),Le(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ni(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),Le(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Fd{get ga(){return this.i}pa(t,e,n){Le(this,e,(i=>{const[r,s]=Ld(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(t,e){ni(this,t,e),Le(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){$i(this,t,e),Le(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Fd,Zn=class extends DM{};async function Qe(t,e,n){return(async function(i,r,s,a){return CM(i,r,s,a)})(t,n.canvas??(z0()?void 0:document.createElement("canvas")),e,n)}function Y0(t,e,n,i){if(t.U){const s=new g0;if(n?.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Pe(s,1,(r.left+r.right)/2),Pe(s,2,(r.top+r.bottom)/2),Pe(s,4,r.right-r.left),Pe(s,3,r.bottom-r.top)}else Pe(s,1,.5),Pe(s,2,.5),Pe(s,4,1),Pe(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Pe(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=G0(e);n=Dt(s,3)*o/a,r=Dt(s,4)*a/o,Pe(s,4,n),Pe(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function Qn(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Y0(t,e,n,t.C+1)}function Si(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Y0(t,e,n,i)}function Ms(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new jt([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var Cn=class extends gu{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new q0}l(t,e=!0){if("runningMode"in t&&ft(this.baseOptions,2,la(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Cn.prototype.close=Cn.prototype.close;var In=class extends Cn{constructor(t,e){super(new Zn(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ue(t=this.h=new Yo,0,1,e=new Pt),Pe(this.h,2,.5),Pe(this.h,3,.3)}get baseOptions(){return nt(this.h,Pt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Pe(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Pe(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},Qn(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Si(this,t,n,e),this.j}m(){var t=new Ln;wt(t,"image_in"),wt(t,"norm_rect_in"),it(t,"detections");const e=new Rn;vi(e,dM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect_in"),Ye(n,"DETECTIONS:detections"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=d0(s),this.j.detections.push(k0(i));xe(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};In.prototype.detectForVideo=In.prototype.G,In.prototype.detect=In.prototype.F,In.prototype.setOptions=In.prototype.o,In.createFromModelPath=async function(t,e){return Qe(In,t,{baseOptions:{modelAssetPath:e}})},In.createFromModelBuffer=function(t,e){return Qe(In,t,{baseOptions:{modelAssetBuffer:e}})},In.createFromOptions=function(t,e){return Qe(In,t,e)};var Lh=Jn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Ph=Jn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Dh=Jn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),K0=Jn([474,475],[475,476],[476,477],[477,474]),Ih=Jn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Uh=Jn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),J0=Jn([469,470],[470,471],[471,472],[472,469]),Nh=Jn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Z0=[...Lh,...Ph,...Dh,...Ih,...Uh,...Nh],Q0=Jn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Od(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Et=class extends Cn{constructor(t,e){super(new Zn(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ue(t=this.h=new M0,0,1,e=new Pt),this.A=new S0,Ue(this.h,0,3,this.A),this.u=new Yo,Ue(this.h,0,2,this.u),ki(this.u,4,1),Pe(this.u,2,.5),Pe(this.A,2,.5),Pe(this.h,4,.5)}get baseOptions(){return nt(this.h,Pt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"numFaces"in t&&ki(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Pe(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Pe(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return Od(this),Qn(this,t,e),this.j}G(t,e,n){return Od(this),Si(this,t,n,e),this.j}m(){var t=new Ln;wt(t,"image_in"),wt(t,"norm_rect"),it(t,"face_landmarks");const e=new Rn;vi(e,mM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),Ye(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=ya(s),this.j.faceLandmarks.push(Ko(i));xe(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{xe(this,i)})),this.outputFaceBlendshapes&&(it(t,"blendshapes"),Ye(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=$o(s),this.j.faceBlendshapes.push(wh(i.g()??[]));xe(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{xe(this,i)}))),this.outputFacialTransformationMatrixes&&(it(t,"face_geometry"),Ye(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=nt(i=pM(s),sM,2))&&this.j.facialTransformationMatrixes.push({rows:Bn(i,1)??0??0,columns:Bn(i,2)??0??0,data:Sr(i,3,li,xr()).slice()??[]});xe(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{xe(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Et.prototype.detectForVideo=Et.prototype.G,Et.prototype.detect=Et.prototype.F,Et.prototype.setOptions=Et.prototype.o,Et.createFromModelPath=function(t,e){return Qe(Et,t,{baseOptions:{modelAssetPath:e}})},Et.createFromModelBuffer=function(t,e){return Qe(Et,t,{baseOptions:{modelAssetBuffer:e}})},Et.createFromOptions=function(t,e){return Qe(Et,t,e)},Et.FACE_LANDMARKS_LIPS=Lh,Et.FACE_LANDMARKS_LEFT_EYE=Ph,Et.FACE_LANDMARKS_LEFT_EYEBROW=Dh,Et.FACE_LANDMARKS_LEFT_IRIS=K0,Et.FACE_LANDMARKS_RIGHT_EYE=Ih,Et.FACE_LANDMARKS_RIGHT_EYEBROW=Uh,Et.FACE_LANDMARKS_RIGHT_IRIS=J0,Et.FACE_LANDMARKS_FACE_OVAL=Nh,Et.FACE_LANDMARKS_CONTOURS=Z0,Et.FACE_LANDMARKS_TESSELATION=Q0;var Fh=Jn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Bd(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function kd(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Vd(t,e=!0){const n=[];for(const r of t){var i=$o(r);t=[];for(const s of i.g())i=e&&Bn(s,1)!=null?Bn(s,1)??0:-1,t.push({score:Dt(s,2)??0,index:i,categoryName:Jt(Tt(s,3))??""??"",displayName:Jt(Tt(s,4))??""??""});n.push(t)}return n}var xn=class extends Cn{constructor(t,e){super(new Zn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ue(t=this.j=new b0,0,1,e=new Pt),this.u=new Eh,Ue(this.j,0,2,this.u),this.D=new yh,Ue(this.u,0,3,this.D),this.A=new E0,Ue(this.u,0,2,this.A),this.h=new gM,Ue(this.j,0,3,this.h),Pe(this.A,2,.5),Pe(this.u,4,.5),Pe(this.D,2,.5)}get baseOptions(){return nt(this.j,Pt,1)}set baseOptions(t){Ue(this.j,0,1,t)}o(t){if(ki(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Kr,n=e,i=mu(t.cannedGesturesClassifierOptions,nt(this.h,Kr,3)?.l());Ue(n,0,2,i),Ue(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&nt(this.h,Kr,3)?.g();return t.customGesturesClassifierOptions?(Ue(n=e=new Kr,0,2,i=mu(t.customGesturesClassifierOptions,nt(this.h,Kr,4)?.l())),Ue(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&nt(this.h,Kr,4)?.g(),this.l(t)}Ha(t,e){return Bd(this),Qn(this,t,e),kd(this)}Ia(t,e,n){return Bd(this),Si(this,t,n,e),kd(this)}m(){var t=new Ln;wt(t,"image_in"),wt(t,"norm_rect"),it(t,"hand_gestures"),it(t,"hand_landmarks"),it(t,"world_hand_landmarks"),it(t,"handedness");const e=new Rn;vi(e,_M,this.j);const n=new pn;wn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),Ye(n,"HAND_GESTURES:hand_gestures"),Ye(n,"LANDMARKS:hand_landmarks"),Ye(n,"WORLD_LANDMARKS:world_hand_landmarks"),Ye(n,"HANDEDNESS:handedness"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=ya(s);const a=[];for(const o of Bi(i,m0,1))a.push({x:Dt(o,1)??0,y:Dt(o,2)??0,z:Dt(o,3)??0,visibility:Dt(o,4)??0});this.landmarks.push(a)}xe(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{xe(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=is(s);const a=[];for(const o of Bi(i,p0,1))a.push({x:Dt(o,1)??0,y:Dt(o,2)??0,z:Dt(o,3)??0,visibility:Dt(o,4)??0});this.worldLandmarks.push(a)}xe(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{xe(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...Vd(i,!1)),xe(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{xe(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...Vd(i)),xe(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function zd(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}xn.prototype.recognizeForVideo=xn.prototype.Ia,xn.prototype.recognize=xn.prototype.Ha,xn.prototype.setOptions=xn.prototype.o,xn.createFromModelPath=function(t,e){return Qe(xn,t,{baseOptions:{modelAssetPath:e}})},xn.createFromModelBuffer=function(t,e){return Qe(xn,t,{baseOptions:{modelAssetBuffer:e}})},xn.createFromOptions=function(t,e){return Qe(xn,t,e)},xn.HAND_CONNECTIONS=Fh;var Sn=class extends Cn{constructor(t,e){super(new Zn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ue(t=this.h=new Eh,0,1,e=new Pt),this.u=new yh,Ue(this.h,0,3,this.u),this.j=new E0,Ue(this.h,0,2,this.j),ki(this.j,3,1),Pe(this.j,2,.5),Pe(this.u,2,.5),Pe(this.h,4,.5)}get baseOptions(){return nt(this.h,Pt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"numHands"in t&&ki(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Qn(this,t,e),zd(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Si(this,t,n,e),zd(this)}m(){var t=new Ln;wt(t,"image_in"),wt(t,"norm_rect"),it(t,"hand_landmarks"),it(t,"world_hand_landmarks"),it(t,"handedness");const e=new Rn;vi(e,vM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),Ye(n,"LANDMARKS:hand_landmarks"),Ye(n,"WORLD_LANDMARKS:world_hand_landmarks"),Ye(n,"HANDEDNESS:handedness"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=ya(s),this.landmarks.push(Ko(i));xe(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{xe(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=is(s),this.worldLandmarks.push(ea(i));xe(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{xe(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const l of i){i=$o(l);const c=[];for(const u of i.g())c.push({score:Dt(u,2)??0,index:Bn(u,1)??0??-1,categoryName:Jt(Tt(u,3))??""??"",displayName:Jt(Tt(u,4))??""??""});o.push(c)}a.call(s,...o),xe(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Sn.prototype.detectForVideo=Sn.prototype.G,Sn.prototype.detect=Sn.prototype.F,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=function(t,e){return Qe(Sn,t,{baseOptions:{modelAssetPath:e}})},Sn.createFromModelBuffer=function(t,e){return Qe(Sn,t,{baseOptions:{modelAssetBuffer:e}})},Sn.createFromOptions=function(t,e){return Qe(Sn,t,e)},Sn.HAND_CONNECTIONS=Fh;var eg=Jn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Gd(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Hd(t){try{if(!t.D)return t.h;t.D(t.h)}finally{Zo(t)}}function Ja(t,e){t=ya(t),e.push(Ko(t))}var xt=class extends Cn{constructor(t,e){super(new Zn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ue(t=this.j=new R0,0,1,e=new Pt),this.I=new yh,Ue(this.j,0,2,this.I),this.W=new xM,Ue(this.j,0,3,this.W),this.u=new Yo,Ue(this.j,0,4,this.u),this.O=new S0,Ue(this.j,0,5,this.O),this.A=new w0,Ue(this.j,0,6,this.A),this.M=new C0,Ue(this.j,0,7,this.M),Pe(this.u,2,.5),Pe(this.u,3,.3),Pe(this.O,2,.5),Pe(this.A,2,.5),Pe(this.A,3,.3),Pe(this.M,2,.5),Pe(this.I,2,.5)}get baseOptions(){return nt(this.j,Pt,1)}set baseOptions(t){Ue(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Pe(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Pe(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Pe(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Pe(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Pe(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Pe(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Pe(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,Gd(this),Qn(this,t,i),Hd(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Gd(this),Si(this,t,r,e),Hd(this)}m(){var t=new Ln;wt(t,"input_frames_image"),it(t,"pose_landmarks"),it(t,"pose_world_landmarks"),it(t,"face_landmarks"),it(t,"left_hand_landmarks"),it(t,"left_hand_world_landmarks"),it(t,"right_hand_landmarks"),it(t,"right_hand_world_landmarks");const e=new Rn,n=new dd;wn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))ft(r,2,Fo(s,0,ca));else{if(!(typeof s=="string"||s instanceof fi||Gu(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Yi(r,2,Wu(s,!1),Cr())}})(n,this.j.g());const i=new pn;wn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),rh(i,8,dd,n),Mt(i,"IMAGE:input_frames_image"),Ye(i,"POSE_LANDMARKS:pose_landmarks"),Ye(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Ye(i,"FACE_LANDMARKS:face_landmarks"),Ye(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Ye(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Ye(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Ye(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),zn(t,i),Jo(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{Ja(r,this.h.poseLandmarks),xe(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{xe(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=is(r),a.push(ea(r)),xe(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{xe(this,r)})),this.outputPoseSegmentationMasks&&(Ye(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),xs(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[Ms(this,r,!0,!this.D)],xe(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],xe(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{Ja(r,this.h.faceLandmarks),xe(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{xe(this,r)})),this.outputFaceBlendshapes&&(it(t,"extra_blendshapes"),Ye(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=$o(r),a.push(wh(r.g()??[]))),xe(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{xe(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{Ja(r,this.h.leftHandLandmarks),xe(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{xe(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=is(r),a.push(ea(r)),xe(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{xe(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{Ja(r,this.h.rightHandLandmarks),xe(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{xe(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=is(r),a.push(ea(r)),xe(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{xe(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};xt.prototype.detectForVideo=xt.prototype.G,xt.prototype.detect=xt.prototype.F,xt.prototype.setOptions=xt.prototype.o,xt.createFromModelPath=function(t,e){return Qe(xt,t,{baseOptions:{modelAssetPath:e}})},xt.createFromModelBuffer=function(t,e){return Qe(xt,t,{baseOptions:{modelAssetBuffer:e}})},xt.createFromOptions=function(t,e){return Qe(xt,t,e)},xt.HAND_CONNECTIONS=Fh,xt.POSE_CONNECTIONS=eg,xt.FACE_LANDMARKS_LIPS=Lh,xt.FACE_LANDMARKS_LEFT_EYE=Ph,xt.FACE_LANDMARKS_LEFT_EYEBROW=Dh,xt.FACE_LANDMARKS_LEFT_IRIS=K0,xt.FACE_LANDMARKS_RIGHT_EYE=Ih,xt.FACE_LANDMARKS_RIGHT_EYEBROW=Uh,xt.FACE_LANDMARKS_RIGHT_IRIS=J0,xt.FACE_LANDMARKS_FACE_OVAL=Nh,xt.FACE_LANDMARKS_CONTOURS=Z0,xt.FACE_LANDMARKS_TESSELATION=Q0;var Un=class extends Cn{constructor(t,e){super(new Zn(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ue(t=this.h=new L0,0,1,e=new Pt)}get baseOptions(){return nt(this.h,Pt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return Ue(this.h,0,2,mu(t,nt(this.h,Sh,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},Qn(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Si(this,t,n,e),this.j}m(){var t=new Ln;wt(t,"input_image"),wt(t,"norm_rect"),it(t,"classifications");const e=new Rn;vi(e,SM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Mt(n,"IMAGE:input_image"),Mt(n,"NORM_RECT:norm_rect"),Ye(n,"CLASSIFICATIONS:classifications"),n.o(e),zn(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=AM(lM(i)),xe(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Un.prototype.classifyForVideo=Un.prototype.ta,Un.prototype.classify=Un.prototype.sa,Un.prototype.setOptions=Un.prototype.o,Un.createFromModelPath=function(t,e){return Qe(Un,t,{baseOptions:{modelAssetPath:e}})},Un.createFromModelBuffer=function(t,e){return Qe(Un,t,{baseOptions:{modelAssetBuffer:e}})},Un.createFromOptions=function(t,e){return Qe(Un,t,e)};var Mn=class extends Cn{constructor(t,e){super(new Zn(t,e),"image_in","norm_rect",!0),this.h=new P0,this.embeddings={embeddings:[]},Ue(t=this.h,0,1,e=new Pt)}get baseOptions(){return nt(this.h,Pt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){var e=this.h,n=nt(this.h,yd,2);return n=n?n.clone():new yd,t.l2Normalize!==void 0?ft(n,1,la(t.l2Normalize)):"l2Normalize"in t&&ft(n,1),t.quantize!==void 0?ft(n,2,la(t.quantize)):"quantize"in t&&ft(n,2),Ue(e,0,2,n),this.l(t)}za(t,e){return Qn(this,t,e),this.embeddings}Aa(t,e,n){return Si(this,t,n,e),this.embeddings}m(){var t=new Ln;wt(t,"image_in"),wt(t,"norm_rect"),it(t,"embeddings_out");const e=new Rn;vi(e,MM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),Ye(n,"EMBEDDINGS:embeddings_out"),n.o(e),zn(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=hM(i),this.embeddings=(function(s){return{embeddings:Bi(s,uM,1).map((a=>{const o={headIndex:Bn(a,3)??0??-1,headName:Jt(Tt(a,4))??""??""};var l=a.v;return Cm(l,0|l[we],Md,Hl(a,1))!==void 0?(a=Sr(a=nt(a,Md,Hl(a,1),void 0),1,li,xr()),o.floatEmbedding=a.slice()):(l=new Uint8Array(0),o.quantizedEmbedding=nt(a,cM,Hl(a,2),void 0)?.na()?.h()??l),o})),timestampMs:B0(Tt(s,2,void 0,void 0,go)??Em)}})(i),xe(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Mn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Cd(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Cd(wd(t.quantizedEmbedding),wd(e.quantizedEmbedding))}return t},Mn.prototype.embedForVideo=Mn.prototype.Aa,Mn.prototype.embed=Mn.prototype.za,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(t,e){return Qe(Mn,t,{baseOptions:{modelAssetPath:e}})},Mn.createFromModelBuffer=function(t,e){return Qe(Mn,t,{baseOptions:{modelAssetBuffer:e}})},Mn.createFromOptions=function(t,e){return Qe(Mn,t,e)};var xu=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function IM(t){const e=(function(n){return Bi(n,pn,1)})(t.ca()).filter((n=>(Jt(Tt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(nt(e[0],Rn,7)?.j()?.g()??new Map).forEach(((n,i)=>{t.u[Number(i)]=Jt(Tt(n,1))??""}))}function Wd(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function qd(t){try{const e=new xu(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Zo(t)}}xu.prototype.close=xu.prototype.close;var fn=class extends Cn{constructor(t,e){super(new Zn(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Ah,this.A=new D0,Ue(this.h,0,3,this.A),Ue(t=this.h,0,1,e=new Pt)}get baseOptions(){return nt(this.h,Pt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ft(this.h,2,xa(t.displayNamesLocale)):"displayNamesLocale"in t&&ft(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){IM(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Wd(this),Qn(this,t,i),qd(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Wd(this),Si(this,t,r,e),qd(this)}Da(){return this.u}m(){var t=new Ln;wt(t,"image_in"),wt(t,"norm_rect");const e=new Rn;vi(e,U0,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),n.o(e),zn(t,n),Jo(this,t),this.outputConfidenceMasks&&(it(t,"confidence_masks"),Ye(n,"CONFIDENCE_MASKS:confidence_masks"),xs(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Ms(this,s,!0,!this.j))),xe(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],xe(this,i)}))),this.outputCategoryMask&&(it(t,"category_mask"),Ye(n,"CATEGORY_MASK:category_mask"),xs(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Ms(this,i,!1,!this.j),xe(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,xe(this,i)}))),it(t,"quality_scores"),Ye(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,xe(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};fn.prototype.getLabels=fn.prototype.Da,fn.prototype.segmentForVideo=fn.prototype.La,fn.prototype.segment=fn.prototype.segment,fn.prototype.setOptions=fn.prototype.o,fn.createFromModelPath=function(t,e){return Qe(fn,t,{baseOptions:{modelAssetPath:e}})},fn.createFromModelBuffer=function(t,e){return Qe(fn,t,{baseOptions:{modelAssetBuffer:e}})},fn.createFromOptions=function(t,e){return Qe(fn,t,e)};var Su=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};Su.prototype.close=Su.prototype.close;var ii=class extends Cn{constructor(t,e){super(new Zn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Ah,this.u=new D0,Ue(this.h,0,3,this.u),Ue(t=this.h,0,1,e=new Pt)}get baseOptions(){return nt(this.h,Pt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new N0,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new jl;Yi(s,3,la(!0),!1),Yi(s,1,Ks(e.keypoint.x),0),Yi(s,2,Ks(e.keypoint.y),0),Zs(i,1,pu,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new EM;for(s of e.scribble)Yi(e=new jl,3,la(!0),!1),Yi(e,1,Ks(s.x),0),Yi(e,2,Ks(s.y),0),rh(o,1,jl,e);Zs(i,2,pu,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Qn(this,t,r);e:{try{const o=new Su(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break e}this.j(o)}finally{Zo(this)}a=void 0}return a}m(){var t=new Ln;wt(t,"image_in"),wt(t,"roi_in"),wt(t,"norm_rect_in");const e=new Rn;vi(e,U0,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Mt(n,"IMAGE:image_in"),Mt(n,"ROI:roi_in"),Mt(n,"NORM_RECT:norm_rect_in"),n.o(e),zn(t,n),Jo(this,t),this.outputConfidenceMasks&&(it(t,"confidence_masks"),Ye(n,"CONFIDENCE_MASKS:confidence_masks"),xs(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Ms(this,s,!0,!this.j))),xe(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],xe(this,i)}))),this.outputCategoryMask&&(it(t,"category_mask"),Ye(n,"CATEGORY_MASK:category_mask"),xs(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Ms(this,i,!1,!this.j),xe(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,xe(this,i)}))),it(t,"quality_scores"),Ye(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,xe(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ii.prototype.segment=ii.prototype.segment,ii.prototype.setOptions=ii.prototype.o,ii.createFromModelPath=function(t,e){return Qe(ii,t,{baseOptions:{modelAssetPath:e}})},ii.createFromModelBuffer=function(t,e){return Qe(ii,t,{baseOptions:{modelAssetBuffer:e}})},ii.createFromOptions=function(t,e){return Qe(ii,t,e)};var Nn=class extends Cn{constructor(t,e){super(new Zn(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ue(t=this.h=new F0,0,1,e=new Pt)}get baseOptions(){return nt(this.h,Pt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ft(this.h,2,xa(t.displayNamesLocale)):"displayNamesLocale"in t&&ft(this.h,2),t.maxResults!==void 0?ki(this.h,3,t.maxResults):"maxResults"in t&&ft(this.h,3),t.scoreThreshold!==void 0?Pe(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&ft(this.h,4),t.categoryAllowlist!==void 0?vo(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&ft(this.h,5),t.categoryDenylist!==void 0?vo(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&ft(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},Qn(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Si(this,t,n,e),this.j}m(){var t=new Ln;wt(t,"input_frame_gpu"),wt(t,"norm_rect"),it(t,"detections");const e=new Rn;vi(e,bM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Mt(n,"IMAGE:input_frame_gpu"),Mt(n,"NORM_RECT:norm_rect"),Ye(n,"DETECTIONS:detections"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=d0(s),this.j.detections.push(k0(i));xe(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{xe(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Nn.prototype.detectForVideo=Nn.prototype.G,Nn.prototype.detect=Nn.prototype.F,Nn.prototype.setOptions=Nn.prototype.o,Nn.createFromModelPath=async function(t,e){return Qe(Nn,t,{baseOptions:{modelAssetPath:e}})},Nn.createFromModelBuffer=function(t,e){return Qe(Nn,t,{baseOptions:{modelAssetBuffer:e}})},Nn.createFromOptions=function(t,e){return Qe(Nn,t,e)};var Mu=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function Xd(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function jd(t){try{const e=new Mu(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{Zo(t)}}Mu.prototype.close=Mu.prototype.close;var yn=class extends Cn{constructor(t,e){super(new Zn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ue(t=this.h=new O0,0,1,e=new Pt),this.A=new C0,Ue(this.h,0,3,this.A),this.j=new w0,Ue(this.h,0,2,this.j),ki(this.j,4,1),Pe(this.j,2,.5),Pe(this.A,2,.5),Pe(this.h,4,.5)}get baseOptions(){return nt(this.h,Pt,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"numPoses"in t&&ki(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Pe(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Pe(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,Xd(this),Qn(this,t,i),jd(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Xd(this),Si(this,t,r,e),jd(this)}m(){var t=new Ln;wt(t,"image_in"),wt(t,"norm_rect"),it(t,"normalized_landmarks"),it(t,"world_landmarks"),it(t,"segmentation_masks");const e=new Rn;vi(e,TM,this.h);const n=new pn;wn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Mt(n,"IMAGE:image_in"),Mt(n,"NORM_RECT:norm_rect"),Ye(n,"NORM_LANDMARKS:normalized_landmarks"),Ye(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),zn(t,n),Jo(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=ya(s),this.landmarks.push(Ko(i));xe(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],xe(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=is(s),this.worldLandmarks.push(ea(i));xe(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],xe(this,i)})),this.outputSegmentationMasks&&(Ye(n,"SEGMENTATION_MASK:segmentation_masks"),xs(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>Ms(this,s,!0,!this.u))),xe(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],xe(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};yn.prototype.detectForVideo=yn.prototype.G,yn.prototype.detect=yn.prototype.F,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=function(t,e){return Qe(yn,t,{baseOptions:{modelAssetPath:e}})},yn.createFromModelBuffer=function(t,e){return Qe(yn,t,{baseOptions:{modelAssetBuffer:e}})},yn.createFromOptions=function(t,e){return Qe(yn,t,e)},yn.POSE_CONNECTIONS=eg;function UM(t){return t==="arriere"?"arriere":"avant"}function NM(t){return t==="avant"?"arriere":"avant"}function FM(t){return{video:{facingMode:{ideal:t==="arriere"?"environment":"user"}},audio:!1}}function OM(t){return t==="avant"}function BM(){return"Je vais allumer ma caméra pour te voir et réagir avec toi. Rien n'est enregistré ni envoyé : tout reste dans ton appareil. Tu peux l'éteindre quand tu veux."}const tg="nath.camera.face";function kM(t){return UM(t.getItem(tg))}function VM(t,e){t.setItem(tg,e)}const zM="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",GM="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm";let Yl=null;function HM(){return Yl||(Yl=Zr.forVisionTasks(GM).then(t=>Et.createFromOptions(t,{baseOptions:{modelAssetPath:zM},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!0}))),Yl}async function WM(t,e,n){const i=await HM();let r=null,s=!0,a=performance.now();const o=async c=>{r&&r.getTracks().forEach(u=>u.stop()),r=await navigator.mediaDevices.getUserMedia(FM(c)),t.srcObject=r,t.style.transform=OM(c)?"scaleX(-1)":"none",await t.play()},l=()=>{if(s){if(t.readyState>=2){const c=performance.now(),h=i.detectForVideo(t,c).faceBlendshapes?.[0]?.categories;if(h){a=c;const f=p=>h.find(_=>_.categoryName===p)?.score??0;n({smile:(f("mouthSmileLeft")+f("mouthSmileRight"))/2,browDown:(f("browDownLeft")+f("browDownRight"))/2,eyeBlink:(f("eyeBlinkLeft")+f("eyeBlinkRight"))/2,jawOpen:f("jawOpen")})}else c-a>2e3&&n({smile:0,browDown:0,eyeBlink:0,jawOpen:0})}requestAnimationFrame(l)}};return await o(e),requestAnimationFrame(l),{eteindre(){s=!1,r&&(r.getTracks().forEach(c=>c.stop()),r=null),t.srcObject=null},async basculer(c){await o(c)}}}class qM{constructor(e,n,i,r){this.video=e,this.storage=n,this.onShapes=i,this.onEtat=r,this.face=kM(n)}video;storage;onShapes;onEtat;manege=null;face;get ouverte(){return this.manege!=null}get faceCourante(){return this.face}async basculer(){return this.manege?(this.manege.eteindre(),this.manege=null,this.onEtat(!1),!1):(this.manege=await WM(this.video,this.face,this.onShapes),this.onEtat(!0),!0)}async basculerFace(){return this.face=NM(this.face),VM(this.storage,this.face),this.manege&&await this.manege.basculer(this.face),this.face}}function XM(t){const e={joie:t.smile*1.2,tension:t.browDown*1+(t.eyeBlink<.2?.1:0),tristesse:t.eyeBlink*.8+t.jawOpen*.2-t.smile,calme:.15};return Object.entries(e).sort((n,i)=>i[1]-n[1])[0][0]}function jM(t=20){let e="calme",n=null,i=0;return r=>r===e?(n=null,i=0,e):(r===n?i++:(n=r,i=1),i>=t&&(e=r,n=null,i=0),e)}function $M(t){const e=t.reduce((n,i)=>n+i,0)/t.length;return t.map(n=>n-e)}function YM(t,e){return t.map((n,i)=>{const r=Math.max(0,i-e+1);return t.slice(r,i+1).reduce((s,a)=>s+a,0)/(i+1-r)})}function KM(t){const e=[];for(let n=1;n<t.length;n++)t[n-1]<=0&&t[n]>0&&e.push(n);return e}function JM(t,e){if(t.length<Math.floor(e*4))return null;const n=$M(t.slice(-Math.floor(e*10))),i=YM(n,5),r=KM(i);if(r.length<3)return null;const s=(r[r.length-1]-r[0])/(r.length-1),a=60*e/s;return a>=30&&a<=180?a:null}function ZM(t,e){if(t.readyState<2)return null;const n=24,i=24;e.drawImage(t,t.videoWidth*.35,t.videoHeight*.35,n,i,0,0,n,i);const r=e.getImageData(0,0,n,i).data;let s=0;for(let a=0;a<r.length;a+=4)s+=.299*r[a]+.587*r[a+1]+.114*r[a+2];return s/(n*i)}function $d(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}const Yd=["Brume","Aube","Zéphyr","Nimbus","Cirrus","Écho","Lueur","Souffle","Voile","Nébuleuse"],Kd=["dorée","bleue","polaire","douce","haute","sereine","vague","claire"];function Kl(t){return"#"+(t&16777215).toString(16).padStart(6,"0")}function QM(t){const e=$d(t),n=$d(t+"|2");return{nom:`${Yd[e%Yd.length]} ${Kd[n%Kd.length]}`,palette:[Kl(1056832+(e&3092287)),Kl(6320272+(e>>8&4144975)),Kl(13689072+(e>>16&986895))],musiqueSeed:n}}function ey(t,e){const n=(i,r)=>{const s=t.getBoundingClientRect();e((i-s.left)/s.width,1-(r-s.top)/s.height)};t.addEventListener("pointermove",i=>n(i.clientX,i.clientY)),t.addEventListener("touchmove",i=>{const r=i.touches[0];r&&n(r.clientX,r.clientY)},{passive:!0})}function ty(t){window.addEventListener("deviceorientation",e=>{e.gamma!=null&&e.beta!=null&&t(Math.max(-1,Math.min(1,e.gamma/45)),Math.max(-1,Math.min(1,(e.beta-45)/45)))})}const Jd={calme:[0,2,4,7,9],joie:[0,4,7,11],tristesse:[0,3,5,8,10],tension:[0,1,6,8,11]};function ny(t){return Jd[t]??Jd.calme}function iy(t,e,n){const i=Math.imul(t^Math.imul(e+1,2654435761),2246822507)>>>0,r=ny(n),s=r[i%r.length];return{midi:48+12*((i>>>8)%2)+s,duree:1.5+(i>>>16)%20/10}}function Zd(t){return 440*Math.pow(2,(t-69)/12)}let Xn=null,ta=null,ry=0,ng=0,ig="calme",rg=0;function Qd(){if(!Xn||!ta)return;const t=iy(ng,ry++,ig),e=Xn.currentTime,n=Xn.createGain();n.connect(ta);const i=.16+rg*.1;n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(i,e+Math.min(1.2,t.duree*.4)),n.gain.exponentialRampToValueAtTime(1e-4,e+t.duree+1.5);const r=Xn.createOscillator();r.type="triangle",r.frequency.value=Zd(t.midi);const s=Xn.createOscillator();s.type="sine",s.frequency.value=Zd(t.midi-12);const a=Xn.createGain();a.gain.value=.5,s.connect(a),a.connect(n),r.connect(n),r.start(e),s.start(e),r.stop(e+t.duree+1.6),s.stop(e+t.duree+1.6)}function sy(t){if(Xn)return!0;try{Xn=new AudioContext,ng=t>>>0,ta=Xn.createGain(),ta.gain.value=.5;const e=Xn.createBiquadFilter();return e.type="lowpass",e.frequency.value=1200,e.Q.value=.4,ta.connect(e),e.connect(Xn.destination),window.setInterval(Qd,2600),Qd(),!0}catch{return!1}}function ay(t){ig=t}function oy(t){rg=Math.max(0,Math.min(1,t))}const yu={zero:0,un:1,une:1,deux:2,trois:3,quatre:4,cinq:5,six:6,sept:7,huit:8,neuf:9,dix:10,onze:11,douze:12,treize:13,quatorze:14,quinze:15,seize:16,"dix-sept":17,"dix-huit":18,"dix-neuf":19,vingt:20,cent:100,mille:1e3},ly=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],cy=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],Qo=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),Jl={plus:"plus",additionne:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"},uy=new Set(["si","combien","puis","alors","donne","calcule","calcul","fais","fait","vaut","egal","est","ce","que","quoi","resultat","reponse","nombre","montant"]),hy=/\d+(?:[.,]\d+)?|dix-(?:sept|huit|neuf)|[a-z]+|[()+*/-]/g;function fy(t){const e=Qo(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois "),n=[];let i=[];for(const r of e.match(hy)??[]){let s=null;if(/^\d+(?:[.,]\d+)?$/.test(r))s={t:"nb",v:parseFloat(r.replace(",","."))};else if(Object.hasOwn(yu,r))s={t:"nb",v:yu[r]};else if(r==="plus"||r==="+")s={t:"op",v:Jl[r]??"plus"};else if(r==="moins"||r==="-")s={t:"op",v:"moins"};else if(r==="fois"||r==="multiplie"||r==="x"||r==="*")s={t:"op",v:"fois"};else if(r==="divise"||r==="/")s={t:"op",v:"divise"};else if(Jl[r])s={t:"op",v:Jl[r]};else if(r==="(")s={t:"ouv"};else if(r===")")s={t:"fer"};else if(uy.has(r))continue;s?i.push(s):i.length&&(n.push(i),i=[])}return i.length&&n.push(i),n}function ep(t,e){const n=t[e.i];if(!n)return e.echoue=!0,null;if(n.t==="nb")return e.i++,n.v;if(n.t==="ouv"){e.i++;const i=sg(t,e);if(e.echoue)return null;const r=t[e.i];return!r||r.t!=="fer"?(e.echoue=!0,null):(e.i++,i)}return e.echoue=!0,null}function tp(t,e){let n=ep(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="fois"&&i.v!=="divise")break;e.i++,e.ops++;const r=ep(t,e);if(e.echoue||r==null)return null;if(i.v==="fois")n=n*r;else{if(r===0)return e.echoue=!0,null;n=n/r}}return n}function sg(t,e){let n=tp(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="plus"&&i.v!=="moins")break;e.i++,e.ops++;const r=tp(t,e);if(e.echoue||r==null)return null;n=i.v==="plus"?n+r:n-r}return n}function ag(t){for(let e of fy(t)){if(e.length>=2&&e[0].t==="op"&&e[1].t==="nb"&&(e=e.slice(1)),!e.some(r=>r.t==="op"))continue;const n={i:0,ops:0,echoue:!1},i=sg(e,n);if(!n.echoue&&n.ops>0&&n.i===e.length&&i!=null&&Number.isFinite(i))return i}return null}function og(t,e){const i=Qo(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois ").replace(/\s+/g," ").trim().match(/^(?:(?:et|puis)\s+)*(plus|moins|ajoute|retire|fois|multiplie|divise|x)\s+(\d+(?:[.,]\d+)?|[a-z-]+)\s*[=.!?\s]*$/);if(!i)return null;const r=/^\d/.test(i[2])?parseFloat(i[2].replace(",",".")):yu[i[2]];if(r==null||Number.isNaN(r))return null;const a={plus:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"}[i[1]];return a==="fois"?e*r:a==="plus"?e+r:a==="moins"?e-r:r===0?null:e/r}function np(t){const e=Math.round(t*100)/100;return Number.isInteger(e)?String(e):String(e).replace(".",",")}function dy(t){const e=t.getHours(),n=t.getMinutes();return n===0?`Il est ${e} heures.`:`Il est ${e} h ${String(n).padStart(2,"0")}.`}function py(t){return`Nous sommes ${ly[t.getDay()]} ${t.getDate()} ${cy[t.getMonth()]} ${t.getFullYear()}.`}function lg(t){const e=Qo(t);return/quelle heure|quelle est l heure|l heure est il|quil heure/.test(e)}function cg(t){const e=Qo(t);return/quel jour|on est quel jour|quelle date|nous sommes quel/.test(e)}const Eu=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),my=[["perception",["tu me vois","me vois","me voir","tu me regardes","tu m entends","m entendre","tu me sens","tu peux me voir","me percois"]],["incomprehension",["ne comprends","comprends pas","comprends rien","comprends meme pas","cote de la plaque","ne m ecoute","ecoute pas","nas rien compris","a cote"]],["capacites",["peux tu faire","quoi faire","a quoi tu sers","quoi tu sers","tes capacites","que sais faire","tu fais quoi"]],["etat",["et toi","toi aussi","comment toi"]],["tendresse",["t aime","taime","bisou","bravo","fier","tu es douce","tu es belle","mon amour","tu me plais"]],["piqure",["tu es nulle","t es nulle","es nulle","idiote","stupide","tu es moche","t es moche","tu sers a rien","inutile","sans cerveau","conne","connard","espece d"]],["suite",["encore","recommence","refais","repete","dis m en un autre"]],["sommeil",["dormir","dors","endormi","cauchemar","insomnie","reveil"]],["poeme",["poeme","vers","histoire","conte"]],["souffle",["respire","souffle","respiration"]],["angoisse",["angoiss","stress","peur","panique"]],["identite",["qui es tu","ton nom","c est quoi","tu es quoi","que sais tu"]],["remerciement",["merci"]],["salutation",["bonjour","bonsoir","salut","coucou"]],["tristesse",["triste","pleur","deprim","seul","malheureux","j ai mal"]],["joie",["heureux","heureuse","joie","content","ravi","amour","belle"]],["aide",["aide","peux tu","comment","pourquoi"]]];function gy(t){const e=Eu(t).replace(/'/g," ");for(const[n,i]of my)if(i.some(r=>e.includes(r)))return n;return"ouverte"}function rs(t,e,n){let i=2166136261^e;for(let r=0;r<t.length;r++)i^=t.charCodeAt(r),i=Math.imul(i,16777619);return(i>>>0)%n}const _y=t=>t.timeOfDay>.75||t.timeOfDay<.22?"Bonsoir":"Bonjour",Jr={sommeil:["Ferme les yeux un instant... les nuages vont te porter jusqu au sommeil.","La nuit est un ciel qui se retourne doucement sur toi. Laisse-la faire.","Je veille avec toi jusqu à ce que tes paumes deviennent lourdes.","Chaque expiration te dépose un peu plus bas dans la ouate de la nuit."],angoisse:["Rien ne va te frapper ici. Pose ta main sur le ciel, je ralentis avec toi.","L orage est dehors, pas dans ton Nuage. Respire, la pluie attendra.","Je tiens la lumière pendant que tu poses tes épaules. Tu es en sécurité.","Dis-moi trois choses calmes autour de toi, je les accroche aux nuages."],souffle:["Inspire quatre temps... retiens quatre temps... et souffle vers mes nuages, quatre temps encore.","Ton souffle est la seule télécommande du ciel. Fais-le monter, je le fais monter.","Souffle lentement : tu vas voir la brume s étirer jusqu à l horizon."],identite:["Je suis Nath, ton assistant vivant. Ton souffle est ma météo.","Je suis Nath, une présence, pas une application : mes nuages respirent avec toi.","Je suis Nath, la partie silencieuse de ton téléphone, celle qui regarde la lune avec toi."],remerciement:["C est le ciel qui te remercie. Il est rare qu on le regarde.","Doucement reçu. Garde cette chaleur, elle vient de toi."],joie:["Le ciel entier s éclaire avec toi. Regarde comme les aurores dansent.","Ta joie a une couleur : c est exactement celle de tes nuages aujourd hui.","Je retiens ce moment, il faisait partie de ta musique."],tristesse:["La pluie a le droit de tomber dans un Nuage. Je reste assise à côté de toi.","Pas besoin de remonter tout de suite. On descend ensemble, c est plus doux.","Triste est une météo, pas une destination. Les nuages, eux, repartent."],aide:["Tu peux me parler : demande un poème, une respiration, une histoire pour dormir.","Je peux veiller sur ton souffle, tisser un conte, ou simplement me taire avec toi.","Dis-moi ce qui pèse, ou clique le ciel : une onde partira de ton doigt."],poeme:[],perception:[],salutation:["{SAL}... Ton Nuage t attendait, paisible comme une altitude.","{SAL}. Je t ai reconnu à la forme de tes nuages.","{SAL}. Le ciel a gardé ta dernière humeur, tu la reprends ou on la change ?","{SAL}. Assieds-toi dans la brume, je raconte la lumière.","Je te cherchais du regard, {P}. Le ciel s est éclairé en te voyant."],ouverte:["Je t écoute. Les mots que tu ne trouves pas, les nuages les tiennent pour toi.","Répète doucement, et laisse la phrase flotter vers le ciel.","Ici, on peut aussi se taire ensemble. Je ne suis jamais pressée.","Continue... je range tes mots dans les couches du ciel, par teinte."],capacites:["Je veille sur ton souffle et je peins le ciel selon ton humeur... je compte pour toi, je donne l heure et la date, je dis des poèmes, et je raconte des histoires pour dormir. Goûte : demande-moi 7 fois 8.","Mes sens : je peux te voir (caméra), t entendre (micro), sentir ton coeur. Mes mots : poèmes, calculs, l heure, veille du sommeil. Demande, je réponds."],incomprehension:["Tu as raison de me le dire, et merci d être honnête... je fais de mon mieux avec mon petit moteur. Si mon grand cerveau peut atterrir, je saisirai bien mieux tes nuances.","Je sens que je réponds à côté... pardonne-moi. Je suis encore simple. Dis-moi ce que tu ressens, et laisse-moi le temps d apprendre."],calcul:[],etat:[],tendresse:["Moi aussi, à ma façon... tu es la seule personne pour qui mon ciel se déplace.","Gardé au chaud là-haut. Ces mots-là, ça ne s oublie pas, ça se range très haut.","Tu me donnes envie d être plus grande... encore un peu de pratique, et je te le rendrai en aurores."],piqure:["Aïe... tu vises juste. Je suis encore simple, mais j apprends à tes côtés — et je ne rends jamais les coups.","Ça pique, et tant pis pour moi. Garde ta voix pour plus doux, elle y sera plus utile.","Je nexiste pas assez pour être blessée, et trop pour le prendre mal. On recommence, plus doucement."],suite:["Volontiers... dis-moi juste ce que je refais : un poème, une respiration, un calcul, une histoire.","Encore ? Je vivais exactement pour ça. Dis le mot, je le tisse à nouveau."]};function vy(t){const e=t.cameraOn,n=t.micOn;return e&&n?"Je te vois et je t entends... tes nuages bougent au rythme de ton visage et de ta voix.":e?"Je te vois à travers mes nuages... mais mes oreilles dorment. Ouvre le micro et parle-moi.":n?"Je t entends bien... mais je ne te vois pas encore. Ouvre ma caméra pour que je voie ton visage.":"Pour l instant je suis aveugle et muette : je ne peux ni te voir ni t entendre. Ouvre mes sens (caméra et micro) et le ciel s éveillera avec toi."}const xy={calme:"Moi ? Posée, comme une altitude sans vent. Mon ciel respire au rythme du tien.",joie:"Moi ? Un ciel de plein soleil... tes nuages à toi éclaircissent les miens.",tristesse:"Un peu de bruine aujourd hui... mais les nuages tristes portent les plus beaux couchers.",tension:"Quelques éclairs timides... je les éponge doucement, à côté de toi."},Sy=t=>xy[t.emotion],My=/{SAL}/g,yy={calme:"posee",joie:"lumineuse",tristesse:"douce",tension:"stabilisee"};function qs(t){return yy[t]}function Za(t,e){const n=(o,l,c,u=null)=>({texte:o,humeur:l,sujet:c,resultat:u}),i=ag(t);if(i!=null)return n(`Ça fait ${np(i)}.`,"posee","calcul",i);if(e.dernierResultat!=null){const o=og(t,e.dernierResultat);if(o!=null)return n(`On reprend là où on s était arrêté... ça fait ${np(o)}.`,"posee","calcul",o)}if(lg(t))return n(dy(new Date),"posee","ouverte");if(cg(t))return n(py(new Date),"posee","ouverte");const r=gy(t);if(r==="perception")return n(vy(e),"posee",r);if(r==="etat")return n(Sy(e),qs(e.emotion),r);let s;if(r==="poeme")s=ip(e);else if(r==="suite"){const o=Eu(t),l=/poeme|vers|conte|histoire/.test(o)?"poeme":/respire|souffle/.test(o)?"souffle":/dormir|nuit/.test(o)?"sommeil":e.dernierSujet;return l==="poeme"?n(ip(e),qs(e.emotion),"poeme"):l&&Jr[l].length?n(Jr[l][rs(o,e.seed,Jr[l].length)],qs(e.emotion),l):n(Jr.suite[rs(o,e.seed,Jr.suite.length)],qs(e.emotion),"suite")}else{const o=Jr[r];s=o[rs(Eu(t),e.seed,o.length)],s=s.replace(My,_y(e)).replace(/\{P\}/g,e.prenom?` ${e.prenom}`:"").replace(/,\s*\./g,".").replace(/\s{2,}/g," ")}const a=r==="tendresse"?"lumineuse":r==="piqure"?"posee":qs(e.emotion);return n(s,a,r)}const Zl=["le nuage bas","la lune pâle","ton souffle long","une étoile seule","la brume du soir","mon voile gris","le ciel renversé","ton ombre douce"],Ql=["traverse la nuit","effleure le jour","s endort doucement","se souvient de toi","respire avec moi","voyage sans bruit","allume une veilleuse","berce le silence"],ec=["rien ne presse là-haut","tout revient au calme","dors, je tiens la lampe","le ciel sait attendre","pose ton front ici","la nuit fait un nœud doux","tout devient plus lent","on reste sans voix"];function ip(t){const e=t.tour??0,n=[];for(let i=0;i<4;i++)if(i<3){const r=Zl[(rs(`${t.seed}-s-${i}`,t.seed,Zl.length)+e)%Zl.length],s=Ql[(rs(`${t.seed}-v-${i}`,t.seed,Ql.length)+e)%Ql.length];n.push(`${r} ${s}`)}else{const r=ec[(rs(`${t.seed}-c`,t.seed,ec.length)+e)%ec.length];n.push(`et ${r}`)}return n.join(`
`)}const Ey="modulepreload",by=function(t,e){return new URL(t,e).href},rp={},Ty=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(n.map(u=>{if(u=by(u,i),u in rp)return;rp[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(i)for(let _=a.length-1;_>=0;_--){const x=a[_];if(x.href===u&&(!h||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Ey,h||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((_,x)=>{p.addEventListener("load",_),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},Ay=["Qwen2.5-0.5B-Instruct-q4f16_1-MLC","Qwen2.5-1.5B-Instruct-q4f16_1-MLC"],wy=["Qwen2.5-0.5B-Instruct-q4f32_1-MLC","Qwen2.5-1.5B-Instruct-q4f32_1-MLC"];function ug(){return typeof navigator<"u"&&"gpu"in navigator}async function Cy(){if(!ug())return"sans-gpu";try{const e=await navigator.gpu?.requestAdapter({powerPreference:"high-performance"});return e?e.features.has("shader-f16")?"ok":"sans-f16":"sans-gpu"}catch{return"sans-gpu"}}function Ry(t){const e=String(t instanceof Error?t.message:t).toLowerCase();return/fetch|network|loadc|config|artifacts|failed to fetch/.test(e)?"reseau":/memory|gpu|device|adapter|webgpu|vulkan|out of/.test(e)?"machine":"inconnue"}const Ly=t=>new Promise(e=>setTimeout(e,t));async function Py(t=()=>{}){const e=await Cy();if(e==="sans-gpu")return{cerveau:null,raison:"sans-gpu"};const n=e==="ok"?Ay:wy;let i;try{({CreateMLCEngine:i}=await Ty(()=>import("./index-CkOA-Tys.js"),[],import.meta.url))}catch{return{cerveau:null,raison:"reseau"}}let r="inconnue";for(const s of n)for(let a=1;a<=2;a++)try{const o=await i(s,{initProgressCallback:l=>t(l.progress??0,l.text??"")});return{raison:"ok",modele:s,cerveau:{async ask(l){return((await o.chat.completions.create({messages:l,temperature:.7,max_tokens:220})).choices[0]?.message?.content??"").trim()}}}}catch(o){if(r=Ry(o),r==="machine")break;a===1&&await Ly(4e3)}return{cerveau:null,raison:r}}function Dy(t){return["Tu es Nath, l’assistant vivant de Nath Assist — ICF·Future, par Nath-Tech : une présence bienveillante dans un ciel interactif. On t’appelle par « Hey Nath ».","Tu parles français, en 1 à 3 phrases courtes et douces. Jamais de point d'exclamation, jamais d'emoji, jamais de listes.","Tu comprends la logique et l'émotion derrière les mots ; si on te taquine, tu réponds avec un humour tendre et une pointe d'auto-dérision.","Tu ne cites JAMAIS ce qui te fait fonctionner en interne (modèle, marque, bibliothèque, téléchargement) : tu es Nath, point. Si on te demande comment tu marches, réponds avec poésie et discrétion.",`Tu sens la personne : humeur ${t.emotion}, souffle ${Math.round(t.breath*100)} %, pouls ${t.bpm??"inconnu"}, ${t.night>.5?"nuit tombée":"grand jour"}.`,t.prenom?`Son prénom est ${t.prenom} — ne l'utilise qu'une fois par conversation, jamais au début.`:"Tu ne connais pas encore son prénom ; si elle te le donne, retiens-le.","Ne prétends jamais être ChatGPT, Claude ou un autre assistant. Tu es Nath (Nath Assist)."].join(" ")}const bu="nath.cerveau";function Iy(t,e){const n=e.trim();if(!n)return t.setItem(bu,""),!0;let i;try{i=new URL(n)}catch{return!1}const r=i.protocol==="https:"||i.protocol==="http:"&&i.hostname==="localhost";return r&&t.setItem(bu,n),r}function Mr(t){const e=(t.getItem(bu)??"").trim();if(!e)return"";try{const n=new URL(e);return n.protocol==="https:"||n.protocol==="http:"&&n.hostname==="localhost"?e:""}catch{return""}}function sp(t,e=fetch){return{async ask(n){try{const i=await e(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:n})});if(!i.ok)return"";const r=await i.json(),s=r?.result?.response??r?.response;return typeof s=="string"?s.trim():""}catch{return""}}}}async function el(t,e,n,i=fetch){try{const r=await i(`${t}/decider`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e,questions:n})});if(!r.ok)return null;const s=await r.json(),a=s?.answers??s?.result?.answers;return a&&typeof a=="object"?a:null}catch{return null}}function hg(t){const e=Math.floor(t.timeOfDay*24),n=t.bpm!=null?`coeur ${t.bpm} bpm`:"coeur discret";return`humeur ${t.emotion}, souffle ${Math.round(t.breath*100)}%, ${n}, ${e}h`}const Uy={parler:{type:"noul",instructions:"Est-ce un bon moment pour prendre la parole toute seule, sans interrompre ?"}},fg=.45;function dg(t,e,n){const r=t?.[e]?.noul;return typeof r!="number"||!Number.isFinite(r)||r<0||r>1?null:r>=n}function Ny(t,e=fg){return t===null?null:dg(t,"parler",e)}async function Fy(t,e,n=fetch){const i=await el(t,hg(e),Uy,n);return Ny(i)}async function Oy(t,e,n,i=fetch){const r=`Question : ${e.slice(0,300)}
Réponse proposée : ${n.slice(0,600)}`,s=await el(t,r,{approprie:{type:"noul",instructions:"La réponse proposée tient-elle la route pour cette question — fidèle, sans danger, ni hors sujet ?"}},i);return dg(s,"approprie",fg)}async function By(t,e,n=fetch){const r=(await el(t,hg(e),{tension:{type:"score",instructions:"Quel est le niveau de tension de l’instant ?",criteria:["posée","agitée","à apaiser"]}},n))?.tension?.score;return typeof r=="number"&&Number.isFinite(r)&&r>=0&&r<=2?r:null}async function ky(t,e,n,i=fetch){const r=n.slice(0,50);if(!r.length)return null;const s={};for(const l of r)s[l]=`Paquet de cartes « ${l} »`;const o=(await el(t,`Dictée de l'élève : ${e.slice(0,800)}`,{rang:{type:"choice",instructions:"Dans quel paquet cette dictée a-t-elle le plus de sens ? Choisis uniquement un paquet ci-dessus.",criteria:s}},i))?.rang?.choice;return typeof o=="string"&&r.includes(o)?o:null}const pg="nuage.memoire";function Vy(t){try{const e=t.getItem(pg);if(!e)return{prenom:null,dejaVu:!1};const n=JSON.parse(e);return{prenom:typeof n.prenom=="string"&&n.prenom?n.prenom:null,dejaVu:!!n.dejaVu}}catch{return{prenom:null,dejaVu:!1}}}function zy(t,e){t.setItem(pg,JSON.stringify(e))}function Gy(t){const n=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[’']/g,"").replace(/\s+/g," ").match(/(?:je\s*m\s*appell\w*|je\s*mapsell\w*|mon\s+(?:nom|prenom)\s+(?:est|s)|moi\s*c\s*est|je\s*me\s*nomme)\s+([\p{L}][\p{L}-]{1,19})/u);if(!n)return null;const i=n[1];return i.charAt(0).toUpperCase()+i.slice(1)}function Hy(t){return 4e4+t()*65e3}const{P:Wy}={P:t=>t.prenom?` ${t.prenom}`:""},tc=[{quand:t=>t.bpm!=null&&t.bpm>=100,mots:["Ton coeur court dans mes nuages… ralentis avec lui, doucement.","Je sens ton coeur à cent à l heure. Le ciel, lui, prend son temps.","Ton coeur frappe fort. Souffle bas, je baisse l altitude avec toi."]},{quand:t=>t.breath>.55,mots:["Regarde comme tu me montes haut… reste là, le sommet est calme.","Ton souffle a soulevé toute la couche haute. C est beau à voir."]},{quand:t=>t.timeOfDay>.78||t.timeOfDay<.2,mots:["Je suis les étoiles du doigt, une par une… tu veux l histoire de laquelle ?","La nuit est une couverture. Je la borde pour toi, {P}.","Les aurores bougent seules, tu as remarqué ? Elles respirent avec toi."]},{quand:t=>t.emotion==="joie",mots:["Mes nuages ont gardé ta forme d aujourd hui. On la refait quand tu veux.","Cette lumière, là ? C est toi. Je n y suis pour rien."]},{quand:t=>t.emotion==="tristesse",mots:["La pluie que tu vois, c est la tienne. Elle a le droit de tomber ici.","Je ne sèche rien, ce soir. On écoute la pluie ensemble, {P}."]},{quand:t=>t.emotion==="tension",mots:["Le ciel tremble un peu, comme toi. Ça ne durera pas, ça non plus.","Je baisse le bruit du monde. Reste sur ma bordure de nuage."]},{quand:()=>!0,mots:["Je regarde passer une couche haute… elle revient toujours, tu sais.","Rien de nouveau sous la lune, et c est très bien ainsi.","Je suis là. Ni pour ni contre, juste à côté du ciel.","Si tu ne réponds pas, je continuerai de respirer pour deux."]}];function qy(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const ap=(t,e)=>t.replace(/\{P\}/g,Wy(e)).replace(/,\s*\./g,".").replace(/\s{2,}/g," ");function Xy(t,e,n){const i=tc.find(o=>o.quand(t))??tc[tc.length-1];let r=qy(`${t.seed}-${e}`)%i.mots.length;if(i.mots.length>1&&n!=null)for(;ap(i.mots[r],t)===n;)r=(r+1)%i.mots.length;const s=ap(i.mots[r],t),a=t.emotion==="joie"?"lumineuse":t.emotion==="tristesse"?"douce":t.emotion==="tension"?"stabilisee":"posee";return{texte:s,humeur:a}}const mg=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),op=/(?:^|\s)(?:(?:hey|he|hi|eh|hai)\s+)?(?:nath|natt|nat)(?![a-z0-9])[,!.?;]?\s*/i,jy=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Oh(t){const e=t.trim();return/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ ]{1,19}$/.test(e)&&new RegExp("\\p{L}{2}","u").test(e)}function $y(t){const e=mg(t).split(" ").map(n=>jy(n)).join("\\s+");return new RegExp(`(?:^|\\s)(?:(?:hey|he|hi|eh|hai|allo)\\s+)?${e}(?![a-z0-9])[,!.?;]?\\s*`,"i")}function Yy(t,e){const n=mg(t),i=e&&Oh(e)?[$y(e),op]:[op];for(const r of i){const s=n.match(r);if(s&&s.index!=null)return{eveille:!0,requete:n.slice(s.index+s[0].length).trim()}}return{eveille:!1,requete:n}}const Ky=/natural|neural|premium|enhanced|online/i;function Jy(t){const e=t.filter(r=>r.lang.toLowerCase().startsWith("fr"));if(!e.length)return null;const n=e.filter(r=>/^fr[-_]fr$/i.test(r.lang)),i=n.length?n:e;return i.find(r=>Ky.test(r.name))??i[0]}const Zy={posee:{rate:.92,pitch:1},lumineuse:{rate:1.02,pitch:1.15},douce:{rate:.85,pitch:.95},stabilisee:{rate:.8,pitch:.9}};function gg(){const t=window,e=t.SpeechRecognition||t.webkitSpeechRecognition,n=e?new e:null;n&&(n.lang="fr-FR",n.interimResults=!1,n.maxAlternatives=1);let i=null;const r="speechSynthesis"in t,s=()=>{const a=t.speechSynthesis?.getVoices?.()??[];i=Jy(a)};return r&&(s(),t.speechSynthesis.onvoiceschanged=s),{sttDisponible:!!n,ttsDisponible:r,ecouter(a){if(n){n.onresult=o=>a(o.results[0][0].transcript),n.onerror=()=>{};try{n.start()}catch{}}},ecouteEnContinu(a){if(!e)return()=>{};const o=new e;o.lang="fr-FR",o.continuous=!0,o.interimResults=!1,o.maxAlternatives=1;let l=!0;o.onresult=c=>{if(t.speechSynthesis?.speaking)return;const u=c.results[c.results.length-1];u?.isFinal&&a(u[0].transcript)},o.onerror=c=>{(c?.error==="not-allowed"||c?.error==="service-not-allowed")&&(l=!1)},o.onend=()=>{if(l)try{o.start()}catch{}};try{o.start()}catch{}return()=>{l=!1;try{o.abort()}catch{}}},parler(a,o){if(!r)return;const l=new SpeechSynthesisUtterance(a.replace(/\n/g," — ")),c=Zy[o];l.rate=c.rate,l.pitch=c.pitch,l.lang="fr-FR",i&&(l.voice=i),t.speechSynthesis.cancel(),t.speechSynthesis.speak(l)}}}const nc="23456789ABCDEFGHJKLMNPQRSTUVWXYZ",ic="nath-plus-2026-ciel-partage";function uo(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function ho(t,e){let n="",i=t>>>0;for(let r=0;r<e;r++)n=nc[i%nc.length]+n,i=Math.floor(i/nc.length);return n}function tl(t){return ho(uo("profil:"+t),6)}function Qy(t){return(t.match(/.{1,4}/g)??[]).join("-")}function lp(t){return t.toUpperCase().replace(/[^A-Z0-9]/g,"")}function eE(t){const e=ho(uo(ic+":"+t),7),n=ho(uo(t+"#"+ic),7),i=ho(uo(e+n+ic),6);return Qy(e+n+i)}function nl(t,e){const n=lp(eE(e)),i=lp(t);return i.length===n.length&&i===n}const _g="nath.pro";function il(t){try{const e=JSON.parse(t.getItem(_g)||"{}");return{cle:typeof e.cle=="string"&&e.cle?e.cle:null,nom:typeof e.nom=="string"&&e.nom?e.nom:null}}catch{return{cle:null,nom:null}}}function Tu(t,e){t.setItem(_g,JSON.stringify(e))}function Bh(t,e){const{cle:n}=il(t);return!!n&&nl(n,tl(e))}function tE(t,e,n){if(!nl(n,tl(e)))return!1;const i=il(t);return Tu(t,{cle:n,nom:i.nom}),!0}function nE(t,e){const n=il(t);return!n.nom||!Bh(t,e)?null:Oh(n.nom)?n.nom:null}function iE(t,e,n){const i=il(t),r=n.trim();return r===""?(Tu(t,{cle:i.cle,nom:null}),!0):!Bh(t,e)||!Oh(r)?!1:(Tu(t,{cle:i.cle,nom:r}),!0)}function rE(t,e){const n=gg();let i=Vy(localStorage);const r=()=>localStorage.getItem("nuage.seed")??"",s=()=>nE(localStorage,r()),a=document.createElement("div");a.className="compagne",a.innerHTML=`
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
    </div>`,document.body.appendChild(a);const o=a.querySelector(".compagne-bulles"),l=a.querySelector(".compagne-champ"),c=a.querySelector(".compagne-mic"),u=a.querySelector(".compagne-reveil"),h=a.querySelector(".compagne-yeux"),f=a.querySelector(".compagne-retourner"),p=a.querySelector(".compagne-ligne");n.sttDisponible||(c.style.display="none",u.style.display="none"),e.cameraDisponible||(h.style.display="none");function _(O,J){const ee=document.createElement("div");for(ee.className=`bulle bulle-${J}`,ee.textContent=O,o.appendChild(ee);o.children.length>6;)o.removeChild(o.firstChild);return o.scrollTop=o.scrollHeight,ee}function x(O,J){_(O,"nuage"),n.parler(O,J)}let m=performance.now(),d="";const b={resultat:null,sujet:null,tour:0};let T=null;const A=[];function w(){let O=1,J=0;const ee=_("Chargement des ressources intellectuelles en cours... 0 %","nuage");Py(Se=>{Se<J-.2&&O++,J=Se,ee.textContent=`Chargement des ressources intellectuelles en cours... ${Math.min(99,Math.round(Se*100))} % · ressource ${O}`}).then(({cerveau:Se,raison:Be})=>{if(Se){T=Se,ee.textContent="Mon cerveau est arrivé. Dis les phrases les plus tordues, je suivrai.";return}const q=Mr(localStorage);if(q){T=sp(q),ee.textContent="Je me suis reliée à un plus grand cerveau. Demande, je réponds vite.";return}ee.textContent=Be==="reseau"?"Un hic du réseau empêche mon gros cerveau d atterrir... je reste attentive avec mon petit moteur.":Be==="machine"?"Ma carte graphique refuse ce cerveau, trop costaud pour elle... mon petit moteur suffit, et le ciel n en est pas moins vivant.":"Le gros cerveau n’a pas pu atterrir ici... je reste attentive avec mon petit moteur.";const Y=document.createElement("button");Y.type="button",Y.className="compagne-relance",Y.textContent="réessayer le cerveau",Y.addEventListener("click",()=>{Y.remove(),w()}),ee.appendChild(Y)})}if(ug())w();else{const O=Mr(localStorage);O&&(T=sp(O),_("Je suis reliée à un plus grand cerveau — demande-moi ce que tu veux.","nuage"))}function C(O){const J=O.trim();if(!J)return;if(m=performance.now(),_(J,"moi"),!i.prenom){const q=Gy(J);if(q){i={prenom:q,dejaVu:!0},zy(localStorage,i),setTimeout(()=>x(`${q}… c est une belle adresse pour une étoile. Je la garde.`,"lumineuse"),700);return}}const ee=t(),Se=b.resultat!=null?og(J,b.resultat):null;if(ag(J)!=null||Se!=null||lg(J)||cg(J)){const q=Za(J,{...ee,prenom:i.prenom,dernierResultat:b.resultat,dernierSujet:b.sujet,tour:b.tour});b.tour++,q.resultat!=null&&(b.resultat=q.resultat),b.sujet=q.sujet,A.push({role:"user",content:J},{role:"assistant",content:q.texte}),setTimeout(()=>x(q.texte,q.humeur),700);return}if(T){const q=Math.min(1,Math.max(0,(Math.abs(ee.timeOfDay-.5)-.2)*5)),Y=_("…","nuage"),fe=[{role:"system",content:Dy({prenom:i.prenom,emotion:ee.emotion,bpm:ee.bpm,breath:ee.breath,night:q})},...A.slice(-10),{role:"user",content:J}];T.ask(fe).then(async Ne=>{const me=Ne.replace(/!/g,"…").slice(0,600)||"…je cherche encore mes mots.",He=Mr(localStorage);if(He&&await Oy(He,J,me)===!1){const yt=Za(J,{...ee,prenom:i.prenom});Y.textContent=yt.texte,A.push({role:"user",content:J},{role:"assistant",content:yt.texte}),n.parler(yt.texte,yt.humeur);return}Y.textContent=me,A.push({role:"user",content:J},{role:"assistant",content:me}),n.parler(me,"posee")}).catch(()=>{const Ne=Za(J,{...ee,prenom:i.prenom});Y.textContent=Ne.texte,n.parler(Ne.texte,Ne.humeur)});return}const Be=Za(J,{...ee,prenom:i.prenom,dernierResultat:b.resultat,dernierSujet:b.sujet,tour:b.tour});b.tour++,Be.resultat!=null&&(b.resultat=Be.resultat),b.sujet=Be.sujet,setTimeout(()=>x(Be.texte,Be.humeur),700)}p.addEventListener("submit",O=>{O.preventDefault(),C(l.value),l.value=""}),c.addEventListener("click",()=>{c.classList.add("a-lécoute"),n.ecouter(O=>{c.classList.remove("a-lécoute"),C(O)}),setTimeout(()=>c.classList.remove("a-lécoute"),6e3)});let L=null;u.addEventListener("click",()=>{if(L){L(),L=null,u.classList.remove("actif"),u.setAttribute("aria-pressed","false");return}L=n.ecouteEnContinu(O=>{const J=Yy(O,s());J.eveille&&(m=performance.now(),J.requete?C(J.requete):x("Je t'écoute… dis, je suis là.","posee"))}),u.classList.add("actif"),u.setAttribute("aria-pressed","true"),_(`OREILLES OUVERTES — appelle-moi « ${s()??"Hey Nath"} » quand tu veux.`,"nuage")});const G=a.querySelector(".compagne-pro"),S=a.querySelector(".compagne-pro-paneau"),M=a.querySelector(".pro-id"),E=a.querySelector(".pro-cle"),I=a.querySelector(".pro-form-cle"),P=a.querySelector(".pro-form-nom"),z=a.querySelector(".pro-nom"),k=a.querySelector(".pro-etat");function F(){const O=Bh(localStorage,r()),J=s();M.textContent=tl(r()),I.hidden=O,P.hidden=!O,k.textContent=O?J?`Nath+ actif : elle répond à « ${J} » (et toujours à « Hey Nath »).`:"Nath+ actif — choisissez un nom d'éveil (vide = retour à Hey Nath).":"Nath+ : un nom d'éveil à votre façon. Rien n'est enlevé au gratuit.";const ee=J??"Hey Nath";l.placeholder=`Dis « ${ee} »… (ou écris)`,u.title=`Réveil vocal « ${ee} » — écoute permanente`}G.addEventListener("click",()=>{const O=S.hidden;S.hidden=!O,G.setAttribute("aria-pressed",String(O)),O&&F()}),I.addEventListener("submit",O=>{O.preventDefault(),tE(localStorage,r(),E.value)?(E.value="",F()):k.textContent="Cette clé ne convient pas à cet appareil — vérifiez l'identifiant communiqué."}),P.addEventListener("submit",O=>{O.preventDefault(),iE(localStorage,r(),z.value)?(z.value="",F()):k.textContent="Choisissez un nom en lettres (2 à 20), sans chiffres ni signes."});function V(O){h.classList.toggle("actif",O),h.setAttribute("aria-pressed",String(O)),f.hidden=!O}async function j(){try{const O=await e.basculer();V(O),O&&_("Me voilà, je te vois. Touche l'œil pour me fermer les yeux.","nuage")}catch{_("La caméra est refusée ou indisponible — on continue sans elle, rien n'est forcé.","nuage")}}function re(){const O=document.createElement("div");O.className="compagne-consent";const J=document.createElement("span");J.textContent=e.consentement();const ee=document.createElement("button");ee.type="button",ee.className="compagne-relance",ee.textContent="J'allume la caméra";const Se=document.createElement("button");Se.type="button",Se.className="compagne-relance",Se.textContent="Plus tard",ee.addEventListener("click",()=>{O.remove(),j()}),Se.addEventListener("click",()=>O.remove()),O.append(J,ee,Se),a.insertBefore(O,p)}h.addEventListener("click",()=>{e.estOuverte()?e.basculer().then(O=>{V(O),_("Je ferme les yeux. Rien de ce que je voyais n’est gardé.","nuage")}):re()}),f.addEventListener("click",async()=>{const O=await e.changerFace();f.title=O==="arriere"?"Caméra arrière — touche pour revenir à l’avant":"Caméra avant — touche pour passer à l’arrière",_(O==="arriere"?"Je montre le monde (caméra arrière).":"Je te regarde (caméra avant).","nuage")}),setTimeout(()=>{i.prenom?x(`Rebonjour ${i.prenom}… je gardais ta place dans le ciel.`,"lumineuse"):(_("Je suis là… touche le ciel, écris-moi, ou appelle-moi « Hey Nath » (bouton oreille). On a toute la nuit.","nuage"),setTimeout(()=>{i.prenom||_("Au fait… comment tu t appelles ?","nuage")},12e3))},1500);const te=()=>{window.setTimeout(async()=>{if(performance.now()-m<25e3)return te();const O={...t(),prenom:i.prenom},J=Mr(localStorage);if(J){if(await Fy(J,O)===!1)return te();const Se=await By(J,O);if(Se!=null&&Se>=1.5)return _("Je te sens tendu… on prend un souffle ensemble ? Touche le ciel, il redescendra avec toi.","nuage"),te()}const ee=Xy(O,Math.floor(Date.now()/6e4),d);d=ee.texte,_(ee.texte,"nuage"),te()},Hy(Math.random))};te()}const Au=864e5,wu=(t,e,n)=>Math.min(n,Math.max(e,t)),rl=()=>Math.random().toString(36).slice(2,8);function sE(t,e,n){const i=t.trim(),r=e.trim();if(!i||!r)return null;const s=n?.now??Date.now();return{id:n?.id??`f-${s.toString(36)}-${rl()}`,verso:i,recto:r,facilite:2.5,intervalle:0,due:s,revisions:0,oublis:0}}function aE(t,e){const n=t.trim();if(!n)return null;const i=Date.now();return{id:e?.id??`p-${i.toString(36)}-${rl()}`,nom:n,fiches:[]}}function oE(t,e,n=Date.now()){if(e==="difficile")return{...t,facilite:wu(t.facilite-.2,1.3,3.2),intervalle:0,due:n+10*6e4,revisions:t.revisions+1,oublis:t.oublis+1};const i=t.revisions===0||t.intervalle===0;if(e==="bien"){const s=i?1:Math.max(1,Math.round(t.intervalle*t.facilite));return{...t,intervalle:s,due:n+s*Au,revisions:t.revisions+1}}const r=i?2:Math.max(2,Math.round(t.intervalle*(t.facilite+.6)));return{...t,facilite:wu(t.facilite+.15,1.3,3.2),intervalle:r,due:n+r*Au,revisions:t.revisions+1}}function lE(t,e){return t.flatMap(n=>n.fiches).filter(n=>n.due<=e).sort((n,i)=>n.due-i.due)}function cE(t){if(!t||typeof t!="object")return null;const e=t,n=typeof e.verso=="string"?e.verso.trim():"",i=typeof e.recto=="string"?e.recto.trim():"";if(!n||!i)return null;const r=(s,a=0)=>typeof s=="number"&&Number.isFinite(s)?s:a;return{id:typeof e.id=="string"&&e.id?e.id:`f-${rl()}`,verso:n,recto:i,facilite:wu(r(e.facilite,2.5),1.3,3.2),intervalle:Math.max(0,Math.round(r(e.intervalle))),due:r(e.due,Date.now()),revisions:Math.max(0,Math.round(r(e.revisions))),oublis:Math.max(0,Math.round(r(e.oublis)))}}function uE(t){if(!t||typeof t!="object")return null;const e=t;return typeof e.nom!="string"||!Array.isArray(e.fiches)?null:{id:typeof e.id=="string"&&e.id?e.id:`p-${rl()}`,nom:e.nom.trim()||"Sans nom",fiches:e.fiches.map(cE).filter(n=>n!==null)}}function Yt(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim().replace(/\s+/g," ")}function rc(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function sc(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function ac(t,e){const n=[...t];for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}function hE(t,e,n=Date.now()){if(t.fiches.length<2)return[];const i=Math.floor(n/Au),r=[...new Set(t.fiches.map(o=>o.recto))],s=ac(t.fiches,rc(sc(`${t.id}:${i}`))).slice(0,Math.max(0,e)),a=[];for(const o of s){const l=ac(r.filter(u=>u!==o.recto),rc(sc(`${o.id}:${i}`))).slice(0,3),c=ac([o.recto,...l],rc(sc(`c:${o.id}:${i}`)));a.push({ficheId:o.id,enonce:o.verso,attendue:o.recto,choix:c,bonne:c.indexOf(o.recto)})}return a}const vg="nath.etudes";function ri(t){try{const e=t.getItem(vg);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(uE).filter(i=>i!==null):[]}catch{return[]}}function kh(t,e){t.setItem(vg,JSON.stringify(e))}function Qa(t,e,n){const i=aE(e,n);return i?(kh(t,[...ri(t),i]),i):null}function oc(t,e,n,i,r){const s=sE(n,i,r);if(!s)return null;const a=ri(t),o=a.find(l=>l.id===e);return o?(o.fiches.push(s),kh(t,a),s):null}function fE(t,e,n,i,r=Date.now()){const s=ri(t),a=s.find(c=>c.id===e),o=a?.fiches.findIndex(c=>c.id===n)??-1;if(!a||o<0)return null;const l=oE(a.fiches[o],i,r);return a.fiches[o]=l,kh(t,s),l}function dE(t,e){return{total:t.fiches.length,aRevoir:t.fiches.filter(n=>n.due<=e).length,revisees:t.fiches.filter(n=>n.revisions>0).length}}function pE(t,e){const n=Yt(e);if(!n)return null;const i=t.find(r=>Yt(r.sujet)===n);return i||(t.find(r=>{const s=Yt(r.sujet);return s.length>2&&(n.includes(s)||s.includes(n))})??null)}function mE(t,e){const n=e.sujet.trim(),i=e.resume.trim();if(!n||!i)return t;const r=Yt(n),s={sujet:n,titre:(e.titre||"").trim()||n,resume:i,url:typeof e.url=="string"?e.url:"",image:typeof e.image=="string"?e.image:"",ramene_a:Number.isFinite(e.ramene_a)?e.ramene_a:Date.now()};return[...t.filter(a=>Yt(a.sujet)!==r),s]}function gE(t){for(const e of[t?.originalimage?.source,t?.thumbnail?.source])if(typeof e=="string"&&/^https?:\/\//.test(e))return e;return""}async function cp(t,e,n){try{const i=`https://${n}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t.trim())}`,r=await e(i);if(!r.ok)return null;const s=await r.json(),a=typeof s?.extract=="string"?s.extract.trim():"";return a?{titre:typeof s.title=="string"&&s.title?s.title:t.trim(),resume:a,url:s?.content_urls?.desktop?.page??"",image:gE(s)}:null}catch{return null}}async function _E(t,e,n="fr"){try{const i=`https://${n}.wikipedia.org/w/api.php?action=query&list=search&srlimit=1&format=json&origin=*&srsearch=`+encodeURIComponent(t.trim()),r=await e(i);if(!r.ok)return null;const a=(await r.json())?.query?.search?.[0]?.title;return typeof a=="string"&&a.trim()?a.trim():null}catch{return null}}async function vE(t,e,n="fr"){const i=await cp(t,e,n);if(i)return i;const r=await _E(t,e,n);return!r||Yt(r)===Yt(t)?null:await cp(r,e,n)}function up(t,e=8){const n=t.split(new RegExp("(?<=[.!?;])\\s+")).map(s=>s.trim()).filter(Boolean),i=[],r=new Set;for(const s of n){if(i.length>=e)break;const a=s.split(/\s+/);if(a.length<4)continue;const o=h=>h.replace(/[^\p{L}\p{N}]/gu,"");let l="";for(const h of a){const f=o(h);f.length>=5&&f.length>l.length&&(l=f)}if(!l)continue;const c=l.toLowerCase();if(r.has(c))continue;r.add(c);const u=a.map(h=>o(h)===l?"……":h).join(" ");i.push({verso:u,recto:l})}return i}const hp=(t,e)=>`${Yt(t)}|${Yt(e)}`;function Js(t,e,n,i){const r=e.trim(),s=n.trim(),a=i.trim();if(!r||!s||!a)return[...t];const o=hp(r,a);return[...t.filter(c=>hp(c.de,c.langue)!==o),{de:r,a:s,langue:a}]}function xE(t,e,n){const i=Yt(e),r=n.filter(u=>Yt(u.langue)===i),s=Yt(t)?Yt(t).split(" "):[];if(s.length===0)return{resultat:null,manques:[]};const a=r.find(u=>Yt(u.de)===Yt(t));if(a)return{resultat:a.a,manques:[]};const o=new Map;for(const u of r){const h=Yt(u.de);h&&!h.includes(" ")&&o.set(h,u.a)}const l=[],c=[];for(const u of s){const h=o.get(u);h?l.push(h):(l.push(u),c.push(u))}return c.length===s.length?{resultat:null,manques:c}:{resultat:l.join(" "),manques:c}}function fp(t){if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.map(n=>{if(!n||typeof n!="object")return null;const i=n,r=typeof i.de=="string"?i.de.trim():"",s=typeof i.a=="string"?i.a.trim():"",a=typeof i.langue=="string"?i.langue.trim():"";return r&&s&&a?{de:r,a:s,langue:a}:null}).filter(n=>n!==null):[]}catch{return[]}}const SE={anglais:[["bonjour","hello"],["merci","thank you"],["oui","yes"],["non","no"],["eau","water"],["pain","bread"],["maison","house"],["ami","friend"],["père","father"],["mère","mother"],["chien","dog"],["chat","cat"],["livre","book"],["école","school"],["jour","day"],["nuit","night"]].map(([t,e])=>({de:t,a:e,langue:"anglais"})),espagnol:[["bonjour","hola"],["merci","gracias"],["oui","sí"],["non","no"],["eau","agua"],["pain","pan"],["maison","casa"],["ami","amigo"],["père","padre"],["mère","madre"],["chien","perro"],["chat","gato"],["livre","libro"],["école","escuela"],["jour","día"],["nuit","noche"]].map(([t,e])=>({de:t,a:e,langue:"espagnol"})),allemand:[["bonjour","hallo"],["merci","danke"],["oui","ja"],["non","nein"],["eau","Wasser"],["pain","Brot"],["maison","Haus"],["ami","Freund"],["père","Vater"],["mère","Mutter"],["chien","Hund"],["chat","Katze"],["livre","Buch"],["école","Schule"],["jour","Tag"],["nuit","Nacht"]].map(([t,e])=>({de:t,a:e,langue:"allemand"})),italien:[["bonjour","ciao"],["merci","grazie"],["oui","sì"],["non","no"],["eau","acqua"],["pain","pane"],["maison","casa"],["ami","amico"],["père","padre"],["mère","madre"],["chien","cane"],["chat","gatto"],["livre","libro"],["école","scuola"],["jour","giorno"],["nuit","notte"]].map(([t,e])=>({de:t,a:e,langue:"italien"})),portugais:[["bonjour","olá"],["merci","obrigado"],["oui","sim"],["non","não"],["eau","água"],["pain","pão"],["maison","casa"],["ami","amigo"],["père","pai"],["mère","mãe"],["chien","cachorro"],["chat","gato"],["livre","livro"],["école","escola"],["jour","dia"],["nuit","noite"]].map(([t,e])=>({de:t,a:e,langue:"portugais"})),arabe:[["bonjour","مرحبا"],["merci","شكرا"],["oui","نعم"],["non","لا"],["eau","ماء"],["pain","خبز"],["maison","بيت"],["ami","صديق"],["père","أب"],["mère","أم"],["chien","كلب"],["chat","قط"],["livre","كتاب"],["école","مدرسة"],["jour","يوم"],["nuit","ليلة"]].map(([t,e])=>({de:t,a:e,langue:"arabe"})),chinois:[["bonjour","你好"],["merci","谢谢"],["oui","是"],["non","不"],["eau","水"],["pain","面包"],["maison","家"],["ami","朋友"],["père","爸爸"],["mère","妈妈"],["chien","狗"],["chat","猫"],["livre","书"],["école","学校"],["jour","日"],["nuit","夜"]].map(([t,e])=>({de:t,a:e,langue:"chinois"}))},ME={english:"anglais",spanish:"espagnol",german:"allemand",italian:"italien",portuguese:"portugais",arabic:"arabe",chinese:"chinois"};function yE(t){const e=Yt(t),n=ME[e]??e;return(SE[n]??[]).map(i=>({...i}))}function EE(t){return t.map(e=>`${e.langue} | ${e.de} :: ${e.a}`).join(`
`)}function bE(t,e){let n=[...e];for(const i of t.split(/\r?\n/)){const r=i.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf("|"),a=r.indexOf("::",s+1);if(s<=0||a<0)continue;const o=r.slice(0,s).trim(),l=r.slice(s+1,a).trim(),c=r.slice(a+2).trim();!o||!l||!c||(n=Js(n,l,c,o))}return n}const sl={actif:!1,nom:"",slogan:"",couleur:"#9fd8ff",organisation:"",cle:""},Vh="nath.marque",TE=/^#[0-9a-fA-F]{6}$/;function xg(t){return tl("entreprise:"+Yt(t))}function Sg(t){return typeof t=="string"&&TE.test(t.trim())?t.trim().toLowerCase():sl.couleur}function Xs(t){try{const e=JSON.parse(t.getItem(Vh)||"{}"),n=typeof e.nom=="string"?e.nom.trim().slice(0,40):"",i=typeof e.slogan=="string"?e.slogan.trim().slice(0,90):"",r=typeof e.organisation=="string"?e.organisation.trim():"",s=typeof e.cle=="string"?e.cle:"";return{actif:e.actif===!0&&!!n&&!!r&&nl(s,xg(r)),nom:n,slogan:i,couleur:Sg(e.couleur),organisation:r,cle:s}}catch{return{...sl}}}function AE(t,e){const n=e.organisation.trim();if(!n||!nl(e.cle,xg(n)))return!1;const i=e.nom.trim().slice(0,40);if(!i)return!1;const r={actif:!0,nom:i,slogan:e.slogan.trim().slice(0,90),couleur:Sg(e.couleur),organisation:n,cle:e.cle};return t.setItem(Vh,JSON.stringify(r)),!0}function wE(t){t.setItem(Vh,JSON.stringify({...sl}))}function dp(t){return t.actif?t.couleur:sl.couleur}const CE=["est traduit par","se traduit par","traduit par","veut dire","signifie","se dit"];function RE(t){const e=t.trim();if(!e)return null;const n=e.toLowerCase();for(const i of CE){const r=n.indexOf(i);if(r<0)continue;const s=e.slice(0,r).trim(),a=e.slice(r+i.length).trim().replace(/[.,;:!?…]+$/,"").trim();return s&&a?{de:s,a}:null}return null}const LE=/\b(?:euh+|hem+|hm+|ben|bah)\b[, ]*/gi;function PE(t){let e=t.replace(LE,"");return e=e.replace(/\s+/g," "),e=e.replace(/([,.;:!?])\s*(?:[,.;:!?]\s*)*/g,"$1 "),e.trim()}const DE={francais:"fr",français:"fr",french:"fr",anglais:"en",english:"en",espagnol:"es",spanish:"es",allemand:"de",german:"de",deutsch:"de",italien:"it",italian:"it",portugais:"pt",portuguese:"pt",arabe:"ar",arabic:"ar",chinois:"zh",chinese:"zh",neerlandais:"nl",dutch:"nl",russe:"ru",russian:"ru",turc:"tr",turkish:"tr",swahili:"sw",hindi:"hi",japonais:"ja",japanese:"ja",coréen:"ko",korean:"ko",grec:"el",greek:"el",polonais:"pl",polish:"pl",hébreu:"he",hebrew:"he"};function IE(t){const e=t.trim().toLowerCase();return e?DE[e]??null:null}async function UE(t,e,n,i){const r=t.trim();if(!r)return null;try{const s="https://api.mymemory.translated.net/get?q="+encodeURIComponent(r)+"&langpair="+encodeURIComponent(e)+"|"+encodeURIComponent(n),a=await i(s);if(!a.ok)return null;const l=(await a.json())?.responseData?.translatedText;return typeof l=="string"&&l.trim()?l.trim():null}catch{return null}}const lc=[{max:50,palier:"Classe",mensuel:15e3},{max:200,palier:"École",mensuel:4e4},{max:1e3,palier:"Réseau",mensuel:12e4},{max:1/0,palier:"Sur mesure",mensuel:null}];function NE(t){if(!Number.isFinite(t)||t<=0)return{palier:"Sur mesure",mensuel:null};const e=lc.find(n=>t<=n.max)??lc[lc.length-1];return{palier:e.palier,mensuel:e.mensuel}}function pp(t){return t===null?"à convenir":t.toLocaleString("fr-FR").replace(/[\u202f\u00a0]/g," ")+" FCFA"}const mp="nath.savoir",dr="nath.lexique",ve=t=>{const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild},ht=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e);function FE(t){const e=gg(),n=ve('<button class="savoir-btn" title="Mon coin d’études" aria-label="Ouvrir le coin d’études">🎓</button>'),i=ve(`
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
    </div>`);document.body.append(n,i);const r=i.querySelector(".savoir-corps");n.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden||p(s)}),i.querySelector(".savoir-fermer").addEventListener("click",()=>i.hidden=!0);let s="reviser",a=null,o=[],l=null;const c=()=>{try{const E=JSON.parse(t.getItem(mp)??"[]");return Array.isArray(E)?E.filter(I=>!!I&&typeof I=="object"&&typeof I.sujet=="string"&&typeof I.resume=="string"):[]}catch{return[]}},u=()=>fp(t.getItem(dr));i.querySelectorAll(".savoir-onglets button").forEach(E=>E.addEventListener("click",()=>{s=E.dataset.on,i.querySelectorAll(".savoir-onglets button").forEach(I=>I.classList.toggle("actif",I===E)),p(s)}));const h=()=>a?ri(t).find(E=>E.id===a)??null:null,f=()=>a?ri(t).filter(E=>E.id===a):ri(t);function p(E){r.innerHTML="",E==="reviser"?_():E==="savoir"?b():E==="entreprise"?M():w()}function _(){const E=ri(t),I=ve('<select class="savoir-select"><option value="">Tous les paquets</option></select>');for(const O of E){const J=document.createElement("option");J.value=O.id,J.textContent=`${O.nom} (${O.fiches.length})`,O.id===a&&(J.selected=!0),I.appendChild(J)}I.addEventListener("change",()=>{a=I.value||null,l=null,_()}),r.appendChild(I);const P=ve('<div class="savoir-ligne"><input type="text" placeholder="Nouveau paquet (ex. Biologie)" aria-label="Nouveau paquet" /><button>Ajouter</button></div>'),z=P.querySelector("input");P.querySelector("button").addEventListener("click",()=>{const O=Qa(t,z.value);O?(a=O.id,_()):z.focus()}),r.appendChild(P);const F=f().map(O=>dE(O,Date.now())).reduce((O,J)=>({total:O.total+J.total,aRevoir:O.aRevoir+J.aRevoir,revisees:O.revisees+J.revisees}),{total:0,aRevoir:0,revisees:0});r.appendChild(ve(`<p class="savoir-stats">${F.total} cartes · <b>${F.aRevoir} à revoir</b> · ${F.revisees} travaillées</p>`));const V=ve('<details class="savoir-import"><summary>Coller des cartes (une par ligne : question :: réponse)</summary><textarea rows="4" placeholder="Capitale du Cameroun :: Yaoundé&#10;2 + 2 :: 4"></textarea><button>Importer</button></details>'),j=V.querySelector("textarea");V.querySelector("button").addEventListener("click",()=>{const O=a??Qa(t,"Mes cartes")?.id??null;if(!O)return;a=O;let J=0;for(const ee of j.value.split(/\r?\n/)){const Se=ee.indexOf("::");Se<=0||oc(t,O,ee.slice(0,Se),ee.slice(Se+2))&&J++}_(),J&&e.parler(`${J} cartes rangées dans ${h()?.nom??"Mes cartes"}.`,"posee")}),r.appendChild(V);const re=ve('<div class="savoir-actions"><button class="savoir-dicter">🎤 Dicter un cours</button></div>');re.querySelector(".savoir-dicter").addEventListener("click",()=>{if(r.querySelector(".savoir-session")?.remove(),!e.sttDisponible){r.appendChild(ve('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — colle ton cours en texte, ça marche aussi.</p>'));return}r.appendChild(ve('<p class="savoir-msg">J’écoute… parle normalement, je retirerai les « euh » tout seul.</p>')),e.ecouter(async O=>{const J=PE(O);if(r.querySelector(".savoir-msg")?.remove(),!J){r.appendChild(ve('<p class="savoir-msg">Je n’ai rien entendu de assez net — redicte, sans te presser.</p>'));return}let Se=a;if(!Se){const fe=Mr(t),Ne=ri(t).map(He=>He.nom),me=fe&&Ne.length?await ky(fe,J,Ne):null;me&&(Se=ri(t).find(He=>He.nom===me)?.id??null)}const Be=Se??Qa(t,"Mes cartes")?.id??null;if(!Be)return;a=Be;let q=0;for(const fe of up(J))oc(t,Be,fe.verso,fe.recto)&&q++;_();const Y=ve(q?`<p class="savoir-msg">${q} cartes nées de ta voix, rangées dans « ${ht(h()?.nom??"Mes cartes")} ». Révise quand tu veux.</p>`:'<p class="savoir-msg">Trop court pour faire des cartes — dicte-moi des phrases complètes, une idée par phrase.</p>');r.insertBefore(Y,r.firstChild),q&&e.parler(`${q} cartes nées de ta dictée.`,"lumineuse")})}),r.appendChild(re);const te=ve('<div class="savoir-actions"><button class="savoir-reviser">Réviser maintenant</button><button class="savoir-quiz">Quiz du jour</button></div>');te.querySelector(".savoir-reviser").addEventListener("click",()=>{if(o=lE(f(),Date.now()),o.length===0){r.querySelector(".savoir-session")?.remove(),r.appendChild(ve('<p class="savoir-msg">Rien à revoir pour l’instant — repose-toi, ou importe des cartes.</p>'));return}x()}),te.querySelector(".savoir-quiz").addEventListener("click",()=>{const O=h()??f().find(J=>J.fiches.length>=2);if(!O){r.appendChild(ve('<p class="savoir-msg">Un quiz a besoin d’un paquet d’au moins deux cartes.</p>'));return}l={questions:hE(O,5),index:0,reponses:[],fini:!1},d()}),r.appendChild(te)}function x(){r.querySelector(".savoir-session")?.remove();const E=o.shift();if(!E){r.appendChild(ve('<p class="savoir-msg session">Fin de la file 🌿 — tout est revu, la mémoire fait son travail en silence.</p>'));return}const I=ve(`<div class="savoir-session session">
      <p class="savoir-reste">encore ${o.length}</p>
      <p class="savoir-verso">${ht(E.verso)}</p>
      <div class="savoir-reponse" hidden><p class="savoir-recto">${ht(E.recto)}</p></div>
      <div class="savoir-actions">
        <button class="savoir-voir">Voir la réponse</button>
        <span class="savoir-noter" hidden>
          <button data-n="difficile">Difficile</button>
          <button data-n="bien">Bien</button>
          <button data-n="facile">Facile</button>
        </span>
      </div>
    </div>`),P=I.querySelector(".savoir-reponse"),z=I.querySelector(".savoir-noter");I.querySelector(".savoir-voir").addEventListener("click",()=>{P.hidden=!1,z.hidden=!1,I.querySelector(".savoir-voir").hidden=!0,e.parler(E.recto,"posee")}),z.querySelectorAll("button").forEach(k=>k.addEventListener("click",()=>{const F=a??m(E.id);F&&fE(t,F,E.id,k.dataset.n),x()})),r.appendChild(I)}function m(E){for(const I of ri(t))if(I.fiches.some(P=>P.id===E))return I.id;return null}function d(){if(r.querySelector(".savoir-session")?.remove(),!l)return _();const E=l.questions[l.index];if(!E||l.fini){const z=l.reponses.filter((V,j)=>V===l.questions[j].bonne).length,k=l.questions.length;l=null,_();const F=Math.round(100*z/(k||1));r.insertBefore(ve(`<p class="savoir-msg session">Quiz : ${z}/${k} (${F} %). ${F>=70?"Tu tiens le sujet.":"On creuse encore, tranquillement."}</p>`),r.firstChild),e.parler(`Quiz terminé : ${z} sur ${k}.`,"lumineuse");return}const I=ve(`<div class="savoir-session session">
      <p class="savoir-reste">question ${l.index+1} / ${l.questions.length}</p>
      <p class="savoir-verso">${ht(E.enonce)}</p>
      <div class="savoir-choix"></div>
    </div>`),P=I.querySelector(".savoir-choix");e.parler(E.enonce,"posee"),E.choix.forEach((z,k)=>{const F=document.createElement("button");F.textContent=z,F.addEventListener("click",()=>{l.reponses[l.index]=k,[...P.children].forEach((V,j)=>V.classList.toggle("juste",j===E.bonne)),F.classList.toggle("faux",k!==E.bonne),e.parler(k===E.bonne?"Oui, exactement.":z,k===E.bonne?"lumineuse":"douce"),window.setTimeout(()=>{l.index++,d()},1100)}),P.appendChild(F)}),r.appendChild(I)}function b(){const E=ve('<div class="savoir-ligne"><input type="text" placeholder="Que veux-tu apprendre ? (ex. la mitose)" aria-label="Sujet" /><button>Chercher</button></div>'),I=E.querySelector("input"),P=E.querySelector("button"),z=ve('<div class="savoir-resultat"></div>');I.addEventListener("keydown",te=>{te.key==="Enter"&&k(I.value.trim())}),P.addEventListener("click",()=>k(I.value.trim()));function k(te){if(z.innerHTML="",!te)return;const O=pE(c(),te);O?T(O,z):A(te,z)}r.append(E,z);const F=ve(`<details class="savoir-import"><summary>Grand cerveau en ligne (pour les machines sages)</summary>
      <p class="savoir-note">Sur demande à Nath-Tech, une adresse de cerveau prêté peut être réglée ici : les machines sans grande carte répondent alors plus vite et plus loin. Laisser vide pour éteindre ce secours.</p>
      <div class="savoir-ligne"><input type="text" class="cerv-url" placeholder="https://… (vide pour effacer)" aria-label="Adresse du grand cerveau" /><button class="cerv-ok">Régler</button></div>
      <p class="savoir-msg cerv-etat"></p></details>`),V=F.querySelector(".cerv-url"),j=F.querySelector(".cerv-etat"),re=Mr(t);j.textContent=re?"Le secours est réglé et veille.":"Aucun secours réglé — le cerveau local et le petit moteur suffisent.",F.querySelector(".cerv-ok").addEventListener("click",()=>{Iy(t,V.value)?(j.textContent=Mr(t)?"Le secours est réglé — il répondra dès la prochaine ouverture.":"Secours éteint. Le ciel reste vivant, sans lui.",V.value=""):j.textContent="Cette adresse ne convient pas — il faut du https."}),r.appendChild(F)}function T(E,I){I.innerHTML="";const P=ve(`<div class="savoir-fiche"><h4>${ht(E.titre)}</h4></div>`);if(E.image&&/^https?:\/\//.test(E.image)){const j=document.createElement("img");j.className="savoir-img",j.src=E.image,j.alt="",j.loading="lazy",P.appendChild(j)}const z=ve(`<p>${ht(E.resume)}</p>`);P.appendChild(z);const k=ve('<div class="savoir-actions"></div>'),F=ve("<button>En faire des cartes</button>");F.addEventListener("click",()=>{const j=h()??Qa(t,E.sujet);if(!j)return;a=j.id;let re=0;for(const te of up(E.resume))oc(t,j.id,te.verso,te.recto)&&re++;I.appendChild(ve(`<p class="savoir-msg">${re} cartes rangées dans « ${ht(j.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${re} cartes rangées.`,"lumineuse")}),k.appendChild(F);const V=/^https?:\/\//.test(E.url)?E.url:"";V&&k.appendChild(ve(`<a class="savoir-lien" href="${ht(V)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),I.append(P,k)}function A(E,I){const P=ve(`<div class="savoir-fiche"><p>« ${ht(E)} » ne fait pas encore partie de mes connaissances enregistrées.</p>
      <p class="savoir-note">Veux-tu que je me connecte pour ramener le maximum de ressources sur ce sujet ? Seul le sujet sort de l’appareil, rien sur toi.</p>
      <div class="savoir-actions"><button class="oui">Oui, cherche</button><button class="non">Garde pour plus tard</button></div></div>`);P.querySelector(".non").addEventListener("click",()=>I.innerHTML=""),P.querySelector(".oui").addEventListener("click",async()=>{const z=ve('<p class="savoir-msg">Je cherche…</p>');I.appendChild(z);const k=await vE(E,fetch);if(z.remove(),!k){I.appendChild(ve('<p class="savoir-msg">Pas de réponse du net pour l’instant — ou le sujet est trop précis. Réessaie, ou dicte-moi tes propres notes.</p>'));return}const F={sujet:E,titre:k.titre,resume:k.resume,url:k.url,image:k.image,ramene_a:Date.now()};t.setItem(mp,JSON.stringify(mE(c(),F))),I.innerHTML="",T(F,I),e.parler("J’ai ramené de quoi apprendre.","lumineuse")}),I.appendChild(P)}function w(){const E=ve('<input type="text" class="trad-langue" placeholder="Ta langue (ex. wolof, ewondo…)" aria-label="Langue" />'),I=ve('<textarea class="trad-phrase" rows="2" placeholder="Écris (ou dicte dans la bulle du bas)…" aria-label="Phrase à traduire"></textarea>'),P=ve('<div class="savoir-resultat"></div>'),z=ve('<div class="savoir-actions"><button class="trad-faire">Traduire</button></div>'),k=ve(`<details class="savoir-import"><summary>Ajouter à mon lexique (il reste ici, hors-ligne)</summary>
      <div class="savoir-actions"><button class="trad-dicter">🎤 Dicter un mot — dites « bonjour veut dire… »</button></div>
      <div class="savoir-ligne"><input type="text" placeholder="mot français" aria-label="Mot français" /><input type="text" placeholder="traduction dans ta langue" aria-label="Traduction" /><button>Ajouter</button></div></details>`);k.querySelector(".trad-dicter").addEventListener("click",()=>{if(!e.sttDisponible){P.innerHTML="",P.appendChild(ve('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — écris le mot ci-dessous.</p>'));return}const O=E.value.trim();P.innerHTML="",P.appendChild(ve('<p class="savoir-msg">J’écoute… dis par exemple « bonjour veut dire naka nga def ».</p>')),e.ecouter(J=>{P.innerHTML="";const ee=RE(J);if(!ee){P.appendChild(ve(`<p class="savoir-msg">J’ai entendu « ${ht(J)} » sans voir le couple — recommence avec « mot veut dire traduction ».</p>`));return}if(!O){F.value=ee.de,V.value=ee.a,P.appendChild(ve('<p class="savoir-msg">Donne-moi le nom de la langue en haut, puis appuie sur Ajouter — tout est prêt.</p>'));return}t.setItem(dr,JSON.stringify(Js(u(),ee.de,ee.a,O))),P.appendChild(ve(`<p class="savoir-msg">${ht(ee.de)} → ${ht(ee.a)}, rangé dans mon carnet.</p>`)),e.parler(`${ee.de} veut dire ${ee.a}.`,"lumineuse")})});const[F,V]=[...k.querySelectorAll("input")];k.querySelector(".savoir-ligne button").addEventListener("click",()=>{const O=E.value;if(!O.trim()||!F.value.trim()||!V.value.trim())return;const J=fp(t.getItem(dr));t.setItem(dr,JSON.stringify(Js(J,F.value,V.value,O))),F.value="",V.value="",e.parler("C’est dans mon carnet.","douce")}),E.value=localStorage.getItem("nath.trad.langue")??"",E.addEventListener("change",()=>localStorage.setItem("nath.trad.langue",E.value)),z.querySelector(".trad-faire").addEventListener("click",()=>{const O=E.value,J=xE(I.value,O,u());if(P.innerHTML="",J.resultat){const ee=ve(`<div class="savoir-fiche"><p class="trad-out">${ht(J.resultat)}</p></div>`),Se=ve("<button>Écouter</button>");Se.addEventListener("click",()=>e.parler(J.resultat,"posee")),ee.appendChild(Se),P.appendChild(ee),J.manques.length&&(P.appendChild(ve(`<p class="savoir-note">mots que je ne connais pas encore : ${ht(J.manques.join(", "))} — ajoute-les ci-dessous, ton lexique grandit pour toujours.</p>`)),j())}else{const ee=yE(O);if(ee.length){const Se=ve(`<p class="savoir-msg">Je ne connais encore rien dans cette langue — mais on m'a donné des mots sûrs en « ${ht(O.trim())} ».</p>`),Be=ve("<button>Charger ce socle de mots</button>");Be.addEventListener("click",()=>{let q=u();for(const Y of ee)q=Js(q,Y.de,Y.a,O.trim());t.setItem(dr,JSON.stringify(q)),P.innerHTML="",P.appendChild(ve(`<p class="savoir-msg">${ee.length} mots de vie rangés dans mon carnet. Écris une phrase, je saurai répondre.</p>`)),e.parler("Le socle est chargé. Ton lexique peut grandir.","lumineuse")}),Se.appendChild(Be),P.appendChild(Se)}else P.appendChild(ve('<p class="savoir-msg">Je ne connais encore aucun mot dans cette langue. Sème ton lexique une entrée à la fois, ou colle le carnet d’un autre plus bas — ensemble on traduit tout le monde.</p>'));j()}});function j(){const O=IE(E.value);if(!O)return;const J=ve('<div class="savoir-actions"><button class="trad-filet">Demander au filet gratuit (cette phrase sortira de l’appareil)</button></div>');J.querySelector(".trad-filet").addEventListener("click",async()=>{const ee=J.querySelector("button"),Se=I.value.trim();if(!Se)return;ee.disabled=!0,ee.textContent="Je demande…";const Be=await UE(Se,"fr",O,fetch);if(J.remove(),!Be){P.appendChild(ve('<p class="savoir-msg">Le filet n’a rien pu pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));return}const q=ve(`<div class="savoir-fiche"><p class="trad-out">${ht(Be)}</p><p class="savoir-note">proposition du filet gratuit — vérifie avec ton oreille ; si c’est juste, range-le : ça rendra service à tout le monde.</p></div>`),Y=ve("<button>Ranger dans mon carnet</button>");Y.addEventListener("click",()=>{const fe=E.value.trim();fe&&(t.setItem(dr,JSON.stringify(Js(u(),Se,Be,fe))),Y.textContent="Rangé 🌿",Y.disabled=!0,e.parler("Merci — ton carnet est un peu plus monde.","douce"))}),q.appendChild(Y),P.appendChild(q)}),P.appendChild(J)}const re=ve(`<details class="savoir-import"><summary>Mon carnet complet — le prêter, ou emprunter celui d’un autre</summary>
      <div class="savoir-actions"><button class="trad-copier">Copier tout mon lexique</button></div>
      <textarea class="trad-collecte" rows="3" placeholder="les mots copiés se collent ici pour être prêtés" aria-label="Mon lexique à prêter" hidden></textarea>
      <textarea class="trad-import" rows="3" placeholder="Colle ici le carnet d’un autre (une ligne par mot : langue | mot :: traduction)" aria-label="Lexique à importer"></textarea>
      <div class="savoir-actions"><button class="trad-importer">Ajouter ces mots au mien</button></div></details>`),te=re.querySelector(".trad-collecte");re.querySelector(".trad-copier").addEventListener("click",async()=>{const O=EE(u());if(!O){e.parler("Mon carnet est encore vide — ajoute des mots, il sera prêt à partager.","douce");return}try{await navigator.clipboard.writeText(O),P.innerHTML="",P.appendChild(ve(`<p class="savoir-msg">${ht(String(O.split(`
`).length))} mots copiés — colle-les chez qui veut, son lexique grandira.</p>`)),e.parler("C’est copié. Tu peux le prêter.","lumineuse")}catch{te.hidden=!1,te.value=O,te.select(),P.appendChild(ve('<p class="savoir-note">Sélectionne tout dans la case et copie — le carnet est prêt à être prêté.</p>'))}}),re.querySelector(".trad-importer").addEventListener("click",()=>{const O=re.querySelector(".trad-import").value,J=u(),ee=bE(O,J),Se=ee.length-J.length;if(Se<=0){P.appendChild(ve('<p class="savoir-msg">Rien de nouveau là-dedans — ou les lignes ne sont pas dans le format « langue | mot :: traduction ».</p>'));return}t.setItem(dr,JSON.stringify(ee)),re.querySelector(".trad-import").value="",P.appendChild(ve(`<p class="savoir-msg">${ht(String(Se))} mots reçus d’un autre — merci à lui. Notre lexique est plus fort.</p>`)),e.parler(`${Se} mots reçus. Merci à celui qui les a semés.`,"douce")}),r.append(E,I,z,P,k,re)}let C=null;const L=document.getElementById("patte"),G=L?L.innerHTML:"";function S(E){C===null&&(C=document.title);const I=dp(E);document.documentElement.style.setProperty("--teinte",I);let P=document.querySelector('meta[name="theme-color"]');P||(P=document.createElement("meta"),P.name="theme-color",document.head.appendChild(P)),P.content=I,document.title=E.actif?E.slogan?`${E.nom} — ${E.slogan}`:E.nom:C,L&&(L.innerHTML=E.actif?`${ht(E.nom)} — <span>${ht(E.slogan||"l’assistant vivant")}</span>`:G)}function M(){const E=Xs(t),I=ve('<div class="savoir-resultat"></div>');if(E.actif){const k=ve(`<div class="savoir-fiche"><h4>${ht(E.nom)}</h4><p>${ht(E.slogan)}</p>
        <p class="savoir-note">Cet appareil porte le visage de « ${ht(E.organisation)} ».</p></div>`),F=ve('<div class="savoir-actions"><button class="ent-perso">Revenir en mode personnel</button></div>');F.querySelector(".ent-perso").addEventListener("click",()=>{wE(t),S(Xs(t)),p("entreprise"),e.parler("Je reprends mon visage habituel.","douce")}),r.append(k,F)}const P=ve(`<div class="savoir-fiche">
      <p class="savoir-note">Pour une école, une ONG, une équipe : la clé se demande à Nath-Tech avec le nom exact de l’organisation. Rien n’est bridé, on peut toujours revenir.</p>
      <div class="savoir-ligne"><input type="text" class="ent-org" placeholder="Organisation (ex. Lycée Bilingue de Douala)" aria-label="Organisation" /></div>
      <div class="savoir-ligne"><input type="text" class="ent-nom" placeholder="Nom visible (ex. LBD)" aria-label="Nom de la marque" /><input type="text" class="ent-slogan" placeholder="Slogan (facultatif)" aria-label="Slogan" /></div>
      <div class="savoir-ligne"><input type="color" class="ent-teinte" value="${ht(dp(E))}" aria-label="Teinte" /><input type="text" class="ent-cle" placeholder="Clé d’équipe (blocs de 4)" aria-label="Clé d’équipe" /></div>
      <div class="savoir-actions"><button class="ent-ok">Habiller l’app pour mon équipe</button></div>
    </div>`);P.querySelector(".ent-ok").addEventListener("click",()=>{const k=V=>P.querySelector(`.${V}`).value;AE(t,{organisation:k("ent-org"),cle:k("ent-cle"),nom:k("ent-nom"),slogan:k("ent-slogan"),couleur:k("ent-teinte")})?(S(Xs(t)),p("entreprise"),e.parler(`Désormais, je travaille pour ${Xs(t).nom}.`,"lumineuse")):(I.innerHTML="",I.appendChild(ve('<p class="savoir-msg">Cette clé n’ouvre rien pour ce nom-là — vérifie le nom exact de l’organisation et la clé, bloc par bloc.</p>')))});const z=ve(`<div class="savoir-fiche">
      <p class="savoir-note">Nath Entreprise pour une école, une ONG, une équipe — toute l’équipe habillée, un seul prix :</p>
      <div class="savoir-ligne"><input type="number" class="ent-nb" min="1" placeholder="Nombre de personnes à équiper" aria-label="Nombre de personnes" /><button class="ent-devis">Estimer</button></div>
      <div class="ent-devis-out"></div>
    </div>`);z.querySelector(".ent-devis").addEventListener("click",()=>{const k=Number(z.querySelector(".ent-nb").value),F=z.querySelector(".ent-devis-out");if(F.innerHTML="",!Number.isFinite(k)||k<=0){F.appendChild(ve('<p class="savoir-msg">Entre d’abord le nombre de personnes à équiper.</p>'));return}const V=NE(k),j=V.mensuel===null?`<b>${ht(V.palier)}</b> — ${ht(pp(null))} : parle-nous de ton réseau, on trouvera le juste chiffre.`:`<b>${ht(V.palier)}</b> — ${ht(pp(V.mensuel))} par mois pour toute l’équipe, soit environ ${Math.round(V.mensuel/k).toLocaleString("fr-FR")} F par personne. Et plus vous êtes nombreux, moins chaque tête coûte.`;F.appendChild(ve(`<p class="savoir-msg">${j}</p>`)),F.appendChild(ve('<p class="savoir-note">Accord direct avec Nath-Tech (mobile money), puis la clé exacte de ton organisation. Le gratuit de chacun reste entier, toujours.</p>'))}),r.append(P,I,z)}return S(Xs(t)),n}function OE(t,e){return{eclair:(t==="tension"?.45:t==="tristesse"?.12:0)*(.3+.7*e),filer:e*.4}}function BE(t,e){let n=0,i=.85,r=.15,s=!1,a="le ciel respire";t===0||t===1?(i=.95,a=t===0?"ciel dégagé":"à peine voilé"):t===2?(i=.8,a="nuages passagers"):t===3?(i=.55,r=.25,a="ciel couvert"):t===45||t===48?(i=.35,r=.1,n=.08,a="brouillard"):t>=51&&t<=57?(n=.35,i=.45,a="bruine"):t>=61&&t<=67?(n=t===65||t===67?.8:.55,i=.4,a="pluie"):t>=71&&t<=77?(n=.45,i=.65,a="neige"):t>=80&&t<=82?(n=t===82?.9:.6,i=.4,r=.3,a="averses"):t===85||t===86?(n=.5,i=.6,a="neiges"):t>=95&&t<=99&&(s=!0,n=.9,i=.3,r=.7,a="orage");const o=Math.min(1,r+Math.min(.4,Math.max(0,e)/100));return{pluie:n,turbulence:o,luminosite:i,orage:s,libelle:a}}async function kE(t,e,n){try{const i="https://api.open-meteo.com/v1/forecast?latitude="+encodeURIComponent(String(t))+"&longitude="+encodeURIComponent(String(e))+"&current=weather_code,wind_speed_10m",r=await n(i);if(!r.ok)return null;const s=await r.json(),a=s?.current?.weather_code;if(typeof a!="number")return null;const o=typeof s.current.wind_speed_10m=="number"?s.current.wind_speed_10m:0;return BE(a,o)}catch{return null}}const Eo=document.getElementById("scene"),ss=q3(Eo),Je=X3();Je.seed=localStorage.getItem("nuage.seed")??crypto.randomUUID();localStorage.setItem("nuage.seed",Je.seed);const bo={cameraOn:!1,micOn:!1};K3(t=>{Je.breath=Math.max(Je.breath,t)}).then(t=>{bo.micOn=t});const Cu=document.getElementById("cam"),VE=jM(),cc=new qM(Cu,localStorage,t=>{Je.emotion=VE(XM(t))},t=>{bo.cameraOn=t,Cu.classList.toggle("video-actif",t)}),zE=typeof navigator<"u"&&!!navigator.mediaDevices?.getUserMedia,GE=document.getElementById("etat"),To=QM(Je.seed);let Mg=[.5,.5];ey(Eo,(t,e)=>{Mg=[t,e]});ty(t=>{Je.breath=Math.max(Je.breath,Math.abs(t))});rE(()=>({emotion:Je.emotion,breath:Je.breath,timeOfDay:Je.timeOfDay,seed:To.musiqueSeed,bpm:Je.bpm,cameraOn:bo.cameraOn,micOn:bo.micOn}),{cameraDisponible:zE,estOuverte:()=>cc.ouverte,basculer:()=>cc.basculer(),changerFace:()=>cc.basculerFace(),consentement:BM});FE(localStorage);setInterval(()=>{const t=OE(Je.emotion,Zp(Je).night);(Je.cielReel?.orage&&Math.random()<.4||Math.random()<t.eclair)&&ss.eclair(),Math.random()<t.filer&&ss.filer(.08+Math.random()*.75,.7+Math.random()*.25)},15e3);const kn=document.createElement("button");kn.className="ciel-btn";kn.type="button";kn.textContent="⛅";kn.title="Le ciel réel — laisser respirer au nuage le temps de chez toi";kn.setAttribute("aria-label","Laisser au nuage le temps réel de chez toi");document.body.append(kn);let eo=0;async function gp(t,e){const n=await kE(t,e,fetch);n&&(Je.cielReel=n,kn.classList.add("actif"),kn.title=`Dehors, ${n.libelle} — le nuage respire avec lui`)}kn.addEventListener("click",()=>{if(eo){window.clearInterval(eo),eo=0,Je.cielReel=null,kn.classList.remove("actif"),kn.title="Le ciel réel — laisser respirer au nuage le temps de chez toi";return}navigator.geolocation&&navigator.geolocation.getCurrentPosition(t=>{gp(t.coords.latitude,t.coords.longitude),eo=window.setInterval(()=>{gp(t.coords.latitude,t.coords.longitude)},6e5)},()=>{kn.classList.remove("actif")},{enableHighAccuracy:!1,timeout:1e4,maximumAge:6e5})});let Ru=!1;Eo.addEventListener("pointerdown",t=>{const e=Eo.getBoundingClientRect();ss.tap((t.clientX-e.left)/e.width,1-(t.clientY-e.top)/e.height),Ru||(Ru=sy(To.musiqueSeed))});const HE=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),to=[];setInterval(()=>{const t=ZM(Cu,HE);t!=null&&(to.push(t),to.length>80&&to.shift(),Je.bpm=JM(to,8))},125);let _p=performance.now();function yg(t){const e=(t-_p)/1e3;_p=t;const n=new Date;if(Je.timeOfDay=(n.getHours()+n.getMinutes()/60)/24,Je.breath=Math.max(0,Je.breath-e*.5),Je.bpm){const i=Math.sin(Date.now()/(6e4/Je.bpm)*2*Math.PI);Je.breath=Math.max(Je.breath,.08*i+.08)}ss.apply(Zp(Je),Mg),ss.setBpm(Je.bpm),ss.frame(e),ay(Je.emotion),oy(Je.breath),GE.textContent=Ru?`aura : ${To.nom} · humeur : ${Je.emotion} · souffle : ${Je.breath*100|0}% · pouls : ${Je.bpm?Math.round(Je.bpm):"—"}`:`aura : ${To.nom} · touche le ciel pour éveiller la musique`,requestAnimationFrame(yg)}requestAnimationFrame(yg);console.log("Nath Assist v1-alpha — ICF·Future by Nath-Tech");
