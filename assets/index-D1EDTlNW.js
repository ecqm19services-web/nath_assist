(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Hu="182",e_=0,hh=1,t_=2,fo=1,n_=2,ra=3,ar=0,_n=1,Di=2,Ui=0,ss=1,fh=2,ph=3,mh=4,i_=5,Mr=100,r_=101,s_=102,a_=103,o_=104,l_=200,c_=201,u_=202,d_=203,bc=204,Ec=205,h_=206,f_=207,p_=208,m_=209,g_=210,__=211,v_=212,x_=213,S_=214,Tc=0,Ac=1,wc=2,fs=3,Cc=4,Rc=5,Lc=6,Pc=7,Up=0,M_=1,y_=2,pi=0,Fp=1,Op=2,Bp=3,kp=4,Vp=5,zp=6,Gp=7,Hp=300,Dr=301,ps=302,Dc=303,Ic=304,ko=306,Nc=1e3,Ni=1001,Uc=1002,Zt=1003,b_=1004,Ua=1005,rn=1006,bl=1007,br=1008,zn=1009,Wp=1010,qp=1011,ha=1012,Wu=1013,vi=1014,di=1015,ki=1016,qu=1017,Xu=1018,fa=1020,Xp=35902,$p=35899,jp=1021,Yp=1022,Jn=1023,Vi=1026,Er=1027,Kp=1028,$u=1029,ms=1030,ju=1031,Yu=1033,po=33776,mo=33777,go=33778,_o=33779,Fc=35840,Oc=35841,Bc=35842,kc=35843,Vc=36196,zc=37492,Gc=37496,Hc=37488,Wc=37489,qc=37490,Xc=37491,$c=37808,jc=37809,Yc=37810,Kc=37811,Jc=37812,Zc=37813,Qc=37814,eu=37815,tu=37816,nu=37817,iu=37818,ru=37819,su=37820,au=37821,ou=36492,lu=36494,cu=36495,uu=36283,du=36284,hu=36285,fu=36286,E_=3200,T_=0,A_=1,nr="",Vn="srgb",gs="srgb-linear",Eo="linear",ft="srgb",Vr=7680,gh=519,w_=512,C_=513,R_=514,Ku=515,L_=516,P_=517,Ju=518,D_=519,_h=35044,vh="300 es",hi=2e3,To=2001;function Jp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ao(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function I_(){const t=Ao("canvas");return t.style.display="block",t}const xh={};function Sh(...t){const e="THREE."+t.shift();console.log(e,...t)}function $e(...t){const e="THREE."+t.shift();console.warn(e,...t)}function at(...t){const e="THREE."+t.shift();console.error(e,...t)}function pa(...t){const e=t.join(" ");e in xh||(xh[e]=!0,$e(...t))}function N_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],El=Math.PI/180,pu=180/Math.PI;function Sa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function U_(t,e){return(t%e+e)%e}function Tl(t,e,n){return(1-n)*t+n*e}function $s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ma{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],h=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o>=1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(d!==v||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+d*v;m<0&&(h=-h,p=-p,_=-_,v=-v,m=-m);let f=1-o;if(m<.9995){const b=Math.acos(m),E=Math.sin(b);f=Math.sin(f*b)/E,o=Math.sin(o*b)/E,l=l*f+h*o,c=c*f+p*o,u=u*f+_*o,d=d*f+v*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+_*o,d=d*f+v*o;const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+u*d+l*p-c*h,e[n+1]=l*_+u*h+c*d-o*p,e[n+2]=c*_+u*p+o*h-l*d,e[n+3]=u*_-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new V,Mh=new Ma;class Ye{constructor(e,n,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],_=i[8],v=r[0],m=r[3],f=r[6],b=r[1],E=r[4],T=r[7],A=r[2],w=r[5],R=r[8];return s[0]=a*v+o*b+l*A,s[3]=a*m+o*E+l*w,s[6]=a*f+o*T+l*R,s[1]=c*v+u*b+d*A,s[4]=c*m+u*E+d*w,s[7]=c*f+u*T+d*R,s[2]=h*v+p*b+_*A,s[5]=h*m+p*E+_*w,s[8]=h*f+p*T+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(wl.makeScale(e,n)),this}rotate(e){return this.premultiply(wl.makeRotation(-e)),this}translate(e,n){return this.premultiply(wl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wl=new Ye,yh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F_(){const t={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=Fi(r.r),r.g=Fi(r.g),r.b=Fi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=as(r.r),r.g=as(r.g),r.b=as(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===nr?Eo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[gs]:{primaries:e,whitePoint:i,transfer:Eo,toXYZ:yh,fromXYZ:bh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:yh,fromXYZ:bh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),t}const it=F_();function Fi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function as(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class O_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zr===void 0&&(zr=Ao("canvas")),zr.width=e.width,zr.height=e.height;const r=zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ao("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Fi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fi(n[i]/255)*255):n[i]=Fi(n[i]);return{data:n,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B_=0;class Zu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Sa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Cl(r[a].image)):s.push(Cl(r[a]))}else s=Cl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Cl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?O_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let k_=0;const Rl=new V;class hn extends Ls{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Ni,r=Ni,s=rn,a=br,o=Jn,l=zn,c=hn.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Sa(),this.name="",this.source=new Zu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){$e(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){$e(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nc:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nc:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Hp;hn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,T=(p+1)/2,A=(f+1)/2,w=(u+h)/4,R=(d+v)/4,B=(_+m)/4;return E>T&&E>A?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=w/i,s=R/i):T>A?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=w/r,s=B/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=B/s),this.set(i,r,s,n),this}let b=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-v)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V_ extends Ls{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new hn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Zu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends V_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zp extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z_ extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),Oa.subVectors(this.max,js),Gr.subVectors(e.a,js),Hr.subVectors(e.b,js),Wr.subVectors(e.c,js),$i.subVectors(Hr,Gr),ji.subVectors(Wr,Hr),hr.subVectors(Gr,Wr);let n=[0,-$i.z,$i.y,0,-ji.z,ji.y,0,-hr.z,hr.y,$i.z,0,-$i.x,ji.z,0,-ji.x,hr.z,0,-hr.x,-$i.y,$i.x,0,-ji.y,ji.x,0,-hr.y,hr.x,0];return!Ll(n,Gr,Hr,Wr,Oa)||(n=[1,0,0,0,1,0,0,0,1],!Ll(n,Gr,Hr,Wr,Oa))?!1:(Ba.crossVectors($i,ji),n=[Ba.x,Ba.y,Ba.z],Ll(n,Gr,Hr,Wr,Oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new V,new V,new V,new V,new V,new V,new V,new V],Xn=new V,Fa=new ya,Gr=new V,Hr=new V,Wr=new V,$i=new V,ji=new V,hr=new V,js=new V,Oa=new V,Ba=new V,fr=new V;function Ll(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){fr.fromArray(t,s);const o=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=n.dot(fr),u=i.dot(fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const G_=new ya,Ys=new V,Pl=new V;class Qu{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):G_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Pl)),this.expandByPoint(Ys.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ci=new V,Dl=new V,ka=new V,Yi=new V,Il=new V,Va=new V,Nl=new V;class H_{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Dl.copy(e).add(n).multiplyScalar(.5),ka.copy(n).sub(e).normalize(),Yi.copy(this.origin).sub(Dl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ka),o=Yi.dot(this.direction),l=-Yi.dot(ka),c=Yi.lengthSq(),u=Math.abs(1-a*a);let d,h,p,_;if(u>0)if(d=a*l-o,h=a*o-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const v=1/u;d*=v,h*=v,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Dl).addScaledVector(ka,h),p}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){Il.subVectors(n,e),Va.subVectors(i,e),Nl.crossVectors(Il,Va);let a=this.direction.dot(Nl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yi.subVectors(this.origin,e);const l=o*this.direction.dot(Va.crossVectors(Yi,Va));if(l<0)return null;const c=o*this.direction.dot(Il.cross(Yi));if(c<0||l+c>a)return null;const u=-o*Yi.dot(Nl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,i,r,s,a,o,l,c,u,d,h,p,_,v,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,p,_,v,m)}set(e,n,i,r,s,a,o,l,c,u,d,h,p,_,v,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),a=1/qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,_=o*u,v=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-v*c,n[9]=-o*l,n[2]=v-h*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,_=c*u,v=c*d;n[0]=h+v*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=v+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,_=c*u,v=c*d;n[0]=h-v*o,n[4]=-a*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=v-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,_=o*u,v=o*d;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+v,n[1]=l*d,n[5]=v*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,v=o*c;n[0]=l*u,n[4]=v-h*d,n[8]=_*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+_,n[10]=h-v*d}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,v=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+v,n[5]=a*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*u,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,q_)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ki.crossVectors(i,Mn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ki.crossVectors(i,Mn)),Ki.normalize(),za.crossVectors(Mn,Ki),r[0]=Ki.x,r[4]=za.x,r[8]=Mn.x,r[1]=Ki.y,r[5]=za.y,r[9]=Mn.y,r[2]=Ki.z,r[6]=za.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],f=i[14],b=i[3],E=i[7],T=i[11],A=i[15],w=r[0],R=r[4],B=r[8],S=r[12],M=r[1],L=r[5],q=r[9],z=r[13],K=r[2],Q=r[6],X=r[10],$=r[14],re=r[3],U=r[7],H=r[11],D=r[15];return s[0]=a*w+o*M+l*K+c*re,s[4]=a*R+o*L+l*Q+c*U,s[8]=a*B+o*q+l*X+c*H,s[12]=a*S+o*z+l*$+c*D,s[1]=u*w+d*M+h*K+p*re,s[5]=u*R+d*L+h*Q+p*U,s[9]=u*B+d*q+h*X+p*H,s[13]=u*S+d*z+h*$+p*D,s[2]=_*w+v*M+m*K+f*re,s[6]=_*R+v*L+m*Q+f*U,s[10]=_*B+v*q+m*X+f*H,s[14]=_*S+v*z+m*$+f*D,s[3]=b*w+E*M+T*K+A*re,s[7]=b*R+E*L+T*Q+A*U,s[11]=b*B+E*q+T*X+A*H,s[15]=b*S+E*z+T*$+A*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],f=e[15],b=l*p-c*h,E=o*p-c*d,T=o*h-l*d,A=a*p-c*u,w=a*h-l*u,R=a*d-o*u;return n*(v*b-m*E+f*T)-i*(_*b-m*A+f*w)+r*(_*E-v*A+f*R)-s*(_*T-v*w+m*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],f=e[15],b=d*m*c-v*h*c+v*l*p-o*m*p-d*l*f+o*h*f,E=_*h*c-u*m*c-_*l*p+a*m*p+u*l*f-a*h*f,T=u*v*c-_*d*c+_*o*p-a*v*p-u*o*f+a*d*f,A=_*d*l-u*v*l-_*o*h+a*v*h+u*o*m-a*d*m,w=n*b+i*E+r*T+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=b*R,e[1]=(v*h*s-d*m*s-v*r*p+i*m*p+d*r*f-i*h*f)*R,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*f+i*l*f)*R,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*p-i*l*p)*R,e[4]=E*R,e[5]=(u*m*s-_*h*s+_*r*p-n*m*p-u*r*f+n*h*f)*R,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*f-n*l*f)*R,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*R,e[8]=T*R,e[9]=(_*d*s-u*v*s-_*i*p+n*v*p+u*i*f-n*d*f)*R,e[10]=(a*v*s-_*o*s+_*i*c-n*v*c-a*i*f+n*o*f)*R,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*p-n*o*p)*R,e[12]=A*R,e[13]=(u*v*r-_*d*r+_*i*h-n*v*h-u*i*m+n*d*m)*R,e[14]=(_*o*r-a*v*r-_*i*l+n*v*l+a*i*m-n*o*m)*R,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*h+n*o*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,_=s*d,v=a*u,m=a*d,f=o*d,b=l*c,E=l*u,T=l*d,A=i.x,w=i.y,R=i.z;return r[0]=(1-(v+f))*A,r[1]=(p+T)*A,r[2]=(_-E)*A,r[3]=0,r[4]=(p-T)*w,r[5]=(1-(h+f))*w,r[6]=(m+b)*w,r[7]=0,r[8]=(_+E)*R,r[9]=(m-b)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=qr.set(r[0],r[1],r[2]).length();const a=qr.set(r[4],r[5],r[6]).length(),o=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),$n.copy(this);const c=1/s,u=1/a,d=1/o;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,n.setFromRotationMatrix($n),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=hi,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,v;if(l)_=s/(a-s),v=a*s/(a-s);else if(o===hi)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===To)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,v;if(l)_=1/(a-s),v=a/(a-s);else if(o===hi)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===To)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qr=new V,$n=new zt,W_=new V(0,0,0),q_=new V(1,1,1),Ki=new V,za=new V,Mn=new V,Eh=new zt,Th=new Ma;class zi{constructor(e=0,n=0,i=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Qp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const Ah=new V,Xr=new Ma,Ri=new zt,Ga=new V,Ks=new V,$_=new V,j_=new Ma,wh=new V(1,0,0),Ch=new V(0,1,0),Rh=new V(0,0,1),Lh={type:"added"},Y_={type:"removed"},$r={type:"childadded",child:null},Ul={type:"childremoved",child:null};class wn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new V,n=new zi,i=new Ma,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new Ye}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,n){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ga.copy(e):Ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ks,Ga,this.up):Ri.lookAt(Ga,Ks,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(Ri),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),$r.child=e,this.dispatchEvent($r),$r.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Y_),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,j_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wn.DEFAULT_UP=new V(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new V,Li=new V,Fl=new V,Pi=new V,jr=new V,Yr=new V,Ph=new V,Ol=new V,Bl=new V,kl=new V,Vl=new Ut,zl=new Ut,Gl=new Ut;class Kn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),Li.subVectors(i,n),Fl.subVectors(e,n);const a=jn.dot(jn),o=jn.dot(Li),l=jn.dot(Fl),c=Li.dot(Li),u=Li.dot(Fl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Vl.setScalar(0),zl.setScalar(0),Gl.setScalar(0),Vl.fromBufferAttribute(e,n),zl.fromBufferAttribute(e,i),Gl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vl,s.x),a.addScaledVector(zl,s.y),a.addScaledVector(Gl,s.z),a}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),Li.subVectors(e,n),jn.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),jn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Yr.subVectors(s,i),Ol.subVectors(e,i);const l=jr.dot(Ol),c=Yr.dot(Ol);if(l<=0&&c<=0)return n.copy(i);Bl.subVectors(e,r);const u=jr.dot(Bl),d=Yr.dot(Bl);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(jr,a);kl.subVectors(e,s);const p=jr.dot(kl),_=Yr.dot(kl);if(_>=0&&p<=_)return n.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Yr,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Ph.subVectors(s,r),o=(d-u)/(d-u+(p-_)),n.copy(r).addScaledVector(Ph,o);const f=1/(m+v+h);return a=v*f,o=h*f,n.copy(i).addScaledVector(jr,a).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Hl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=U_(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Hl(a,s,e+1/3),this.g=Hl(a,s,e),this.b=Hl(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=em[e.toLowerCase()];return i!==void 0?this.setHex(i,n):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return it.workingToColorSpace(tn.copy(this),e),Math.round(et(tn.r*255,0,255))*65536+Math.round(et(tn.g*255,0,255))*256+Math.round(et(tn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Vn){it.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+n,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ji),e.getHSL(Ha);const i=Tl(Ji.h,Ha.h,n),r=Tl(Ji.s,Ha.s,n),s=Tl(Ji.l,Ha.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Qe;Qe.NAMES=em;let K_=0;class Vo extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=ss,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Ec,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){$e(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){$e(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ec&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tm extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new V,Wa=new ct;let J_=0;class gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wa.fromBufferAttribute(this,n),Wa.applyMatrix3(e),this.setXY(n,Wa.x,Wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$s(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$s(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$s(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}}class nm extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class im extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Oi extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Z_=0;const Fn=new zt,Wl=new wn,Kr=new V,yn=new ya,Js=new ya,Yt=new V;class Xi extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jp(e)?im:nm)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return Wl.lookAt(e),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(yn.min,Js.min),yn.expandByPoint(Yt),Yt.addVectors(yn.max,Js.max),yn.expandByPoint(Yt)):(yn.expandByPoint(Js.min),yn.expandByPoint(Js.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Yt.fromBufferAttribute(o,c),l&&(Kr.fromBufferAttribute(e,c),Yt.add(Kr)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<i.count;B++)o[B]=new V,l[B]=new V;const c=new V,u=new V,d=new V,h=new ct,p=new ct,_=new ct,v=new V,m=new V;function f(B,S,M){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,B),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),u.sub(c),d.sub(c),p.sub(h),_.sub(h);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),o[B].add(v),o[S].add(v),o[M].add(v),l[B].add(m),l[S].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let B=0,S=b.length;B<S;++B){const M=b[B],L=M.start,q=M.count;for(let z=L,K=L+q;z<K;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new V,T=new V,A=new V,w=new V;function R(B){A.fromBufferAttribute(r,B),w.copy(A);const S=o[B];E.copy(S),E.sub(A.multiplyScalar(A.dot(S))).normalize(),T.crossVectors(w,S);const L=T.dot(l[B])<0?-1:1;a.setXYZW(B,E.x,E.y,E.z,L)}for(let B=0,S=b.length;B<S;++B){const M=b[B],L=M.start,q=M.count;for(let z=L,K=L+q;z<K;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new gi(h,u,d)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dh=new zt,pr=new H_,qa=new Qu,Ih=new V,Xa=new V,$a=new V,ja=new V,ql=new V,Ya=new V,Nh=new V,Ka=new V;class xi extends wn{constructor(e=new Xi,n=new tm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ql.fromBufferAttribute(d,e),a?Ya.addScaledVector(ql,u):Ya.addScaledVector(ql.sub(n),u))}n.add(Ya)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(qa.containsPoint(pr.origin)===!1&&(pr.intersectSphere(qa,Ih)===null||pr.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Dh.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const m=h[_],f=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,A=E;T<A;T+=3){const w=o.getX(T),R=o.getX(T+1),B=o.getX(T+2);r=Ja(this,f,e,i,c,u,d,w,R,B),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const b=o.getX(m),E=o.getX(m+1),T=o.getX(m+2);r=Ja(this,a,e,i,c,u,d,b,E,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const m=h[_],f=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=b,A=E;T<A;T+=3){const w=T,R=T+1,B=T+2;r=Ja(this,f,e,i,c,u,d,w,R,B),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const b=m,E=m+1,T=m+2;r=Ja(this,a,e,i,c,u,d,b,E,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Q_(t,e,n,i,r,s,a,o){let l;if(e.side===_n?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ar,o),l===null)return null;Ka.copy(o),Ka.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ka);return c<n.near||c>n.far?null:{distance:c,point:Ka.clone(),object:t}}function Ja(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Xa),t.getVertexPosition(l,$a),t.getVertexPosition(c,ja);const u=Q_(t,e,n,i,Xa,$a,ja,Nh);if(u){const d=new V;Kn.getBarycoord(Nh,Xa,$a,ja,d),r&&(u.uv=Kn.getInterpolatedAttribute(r,o,l,c,d,new ct)),s&&(u.uv1=Kn.getInterpolatedAttribute(s,o,l,c,d,new ct)),a&&(u.normal=Kn.getInterpolatedAttribute(a,o,l,c,d,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new V,materialIndex:0};Kn.getNormal(Xa,$a,ja,h.normal),u.face=h,u.barycoord=d}return u}class ba extends Xi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Oi(c,3)),this.setAttribute("normal",new Oi(u,3)),this.setAttribute("uv",new Oi(d,2));function _(v,m,f,b,E,T,A,w,R,B,S){const M=T/R,L=A/B,q=T/2,z=A/2,K=w/2,Q=R+1,X=B+1;let $=0,re=0;const U=new V;for(let H=0;H<X;H++){const D=H*L-z;for(let J=0;J<Q;J++){const Z=J*M-q;U[v]=Z*b,U[m]=D*E,U[f]=K,c.push(U.x,U.y,U.z),U[v]=0,U[m]=0,U[f]=w>0?1:-1,u.push(U.x,U.y,U.z),d.push(J/R),d.push(1-H/B),$+=1}}for(let H=0;H<B;H++)for(let D=0;D<R;D++){const J=h+D+Q*H,Z=h+D+Q*(H+1),oe=h+(D+1)+Q*(H+1),ve=h+(D+1)+Q*H;l.push(J,Z,ve),l.push(Z,oe,ve),re+=6}o.addGroup(p,re,S),p+=re,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function ev(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const tv={clone:_s,merge:cn};var nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ed extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new V,Uh=new ct,Fh=new ct;class Yn extends ed{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pu*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,n){return this.getViewBounds(e,Uh,Fh),n.subVectors(Fh,Uh)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(El*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Jr=-90,Zr=1;class rv extends wn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn(Jr,Zr,e,n);r.layers=this.layers,this.add(r);const s=new Yn(Jr,Zr,e,n);s.layers=this.layers,this.add(s);const a=new Yn(Jr,Zr,e,n);a.layers=this.layers,this.add(a);const o=new Yn(Jr,Zr,e,n);o.layers=this.layers,this.add(o);const l=new Yn(Jr,Zr,e,n);l.layers=this.layers,this.add(l);const c=new Yn(Jr,Zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class sm extends hn{constructor(e=[],n=Dr,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class am extends mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sm(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ba(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ui});s.uniforms.tEquirect.value=n;const a=new xi(r,s),o=n.minFilter;return n.minFilter===br&&(n.minFilter=rn),new rv(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Za extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sv={type:"move"};class Xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Za;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class av extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ov extends hn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Zt,u=Zt,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $l=new V,lv=new V,cv=new Ye;class Sr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=$l.subVectors(i,n).cross(lv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta($l),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cv.getNormalMatrix(e),r=this.coplanarPoint($l).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Qu,uv=new ct(.5,.5),Qa=new V;class om{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr,a=new Sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],p=s[7],_=s[8],v=s[9],m=s[10],f=s[11],b=s[12],E=s[13],T=s[14],A=s[15];if(r[0].setComponents(c-a,p-u,f-_,A-b).normalize(),r[1].setComponents(c+a,p+u,f+_,A+b).normalize(),r[2].setComponents(c+o,p+d,f+v,A+E).normalize(),r[3].setComponents(c-o,p-d,f-v,A-E).normalize(),i)r[4].setComponents(l,h,m,T).normalize(),r[5].setComponents(c-l,p-h,f-m,A-T).normalize();else if(r[4].setComponents(c-l,p-h,f-m,A-T).normalize(),n===hi)r[5].setComponents(c+l,p+h,f+m,A+T).normalize();else if(n===To)r[5].setComponents(l,h,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const n=uv.distanceTo(e.center);return mr.radius=.7071067811865476+n,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ma extends hn{constructor(e,n,i=vi,r,s,a,o=Zt,l=Zt,c,u=Vi,d=1){if(u!==Vi&&u!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class dv extends ma{constructor(e,n=vi,i=Dr,r,s,a=Zt,o=Zt,l,c=Vi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lm extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ea extends Xi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,p=[],_=[],v=[],m=[];for(let f=0;f<u;f++){const b=f*h-a;for(let E=0;E<c;E++){const T=E*d-s;_.push(T,-b,0),v.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const E=b+c*f,T=b+c*(f+1),A=b+1+c*(f+1),w=b+1+c*f;p.push(E,T,w),p.push(T,A,w)}this.setIndex(p),this.setAttribute("position",new Oi(_,3)),this.setAttribute("normal",new Oi(v,3)),this.setAttribute("uv",new Oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.widthSegments,e.heightSegments)}}class hv extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fv extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pv extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cm extends ed{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class mv extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Oh(t,e,n,i){const r=gv(i);switch(n){case jp:return t*e;case Kp:return t*e/r.components*r.byteLength;case $u:return t*e/r.components*r.byteLength;case ms:return t*e*2/r.components*r.byteLength;case ju:return t*e*2/r.components*r.byteLength;case Yp:return t*e*3/r.components*r.byteLength;case Jn:return t*e*4/r.components*r.byteLength;case Yu:return t*e*4/r.components*r.byteLength;case po:case mo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case go:case _o:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Oc:case kc:return Math.max(t,16)*Math.max(e,8)/4;case Fc:case Bc:return Math.max(t,8)*Math.max(e,8)/2;case Vc:case zc:case Hc:case Wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gc:case qc:case Xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case eu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case tu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case nu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case iu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ru:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case su:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ou:case lu:case cu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case uu:case du:return Math.ceil(t/4)*Math.ceil(e/4)*8;case hu:case fu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function gv(t){switch(t){case zn:case Wp:return{byteLength:1,components:1};case ha:case qp:case ki:return{byteLength:2,components:1};case qu:case Xu:return{byteLength:2,components:4};case vi:case Wu:case di:return{byteLength:4,components:1};case Xp:case $p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hu}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hu);function um(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _v(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xv=`#ifdef USE_ALPHAHASH
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
#endif`,Sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ev=`#ifdef USE_AOMAP
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
#endif`,Tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
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
#endif`,wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pv=`#ifdef USE_IRIDESCENCE
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
#endif`,Dv=`#ifdef USE_BUMPMAP
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
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zv=`#define PI 3.141592653589793
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
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hv=`vec3 transformedNormal = objectNormal;
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
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s1=`#ifdef USE_GRADIENTMAP
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
}`,a1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c1=`uniform bool receiveShadow;
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
#endif`,u1=`#ifdef USE_ENVMAP
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
#endif`,d1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m1=`PhysicalMaterial material;
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
#endif`,g1=`uniform sampler2D dfgLUT;
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
}`,_1=`
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
#endif`,v1=`#if defined( RE_IndirectDiffuse )
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
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w1=`#if defined( USE_POINTS_UV )
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
#endif`,C1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`#ifdef USE_MORPHTARGETS
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
#endif`,N1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
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
#endif`,z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n2=`float getShadowMask() {
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
}`,i2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r2=`#ifdef USE_SKINNING
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
#endif`,s2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a2=`#ifdef USE_SKINNING
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
#endif`,o2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d2=`#ifdef USE_TRANSMISSION
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
#endif`,h2=`#ifdef USE_TRANSMISSION
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
#endif`,f2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v2=`uniform sampler2D t2D;
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
}`,x2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b2=`#include <common>
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
}`,E2=`#if DEPTH_PACKING == 3200
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
}`,T2=`#define DISTANCE
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
}`,A2=`#define DISTANCE
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
}`,w2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`uniform float scale;
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
}`,L2=`uniform vec3 diffuse;
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
}`,P2=`#include <common>
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
}`,D2=`uniform vec3 diffuse;
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
}`,I2=`#define LAMBERT
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
}`,N2=`#define LAMBERT
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
}`,U2=`#define MATCAP
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
}`,F2=`#define MATCAP
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
}`,O2=`#define NORMAL
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
}`,B2=`#define NORMAL
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
}`,k2=`#define PHONG
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
}`,V2=`#define PHONG
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
}`,z2=`#define STANDARD
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
}`,G2=`#define STANDARD
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
}`,H2=`#define TOON
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
}`,W2=`#define TOON
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
}`,q2=`uniform float size;
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
}`,X2=`uniform vec3 diffuse;
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
}`,$2=`#include <common>
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
}`,j2=`uniform vec3 color;
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
}`,Y2=`uniform float rotation;
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
}`,K2=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:vv,alphahash_pars_fragment:xv,alphamap_fragment:Sv,alphamap_pars_fragment:Mv,alphatest_fragment:yv,alphatest_pars_fragment:bv,aomap_fragment:Ev,aomap_pars_fragment:Tv,batching_pars_vertex:Av,batching_vertex:wv,begin_vertex:Cv,beginnormal_vertex:Rv,bsdfs:Lv,iridescence_fragment:Pv,bumpmap_pars_fragment:Dv,clipping_planes_fragment:Iv,clipping_planes_pars_fragment:Nv,clipping_planes_pars_vertex:Uv,clipping_planes_vertex:Fv,color_fragment:Ov,color_pars_fragment:Bv,color_pars_vertex:kv,color_vertex:Vv,common:zv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Hv,displacementmap_pars_vertex:Wv,displacementmap_vertex:qv,emissivemap_fragment:Xv,emissivemap_pars_fragment:$v,colorspace_fragment:jv,colorspace_pars_fragment:Yv,envmap_fragment:Kv,envmap_common_pars_fragment:Jv,envmap_pars_fragment:Zv,envmap_pars_vertex:Qv,envmap_physical_pars_fragment:u1,envmap_vertex:e1,fog_vertex:t1,fog_pars_vertex:n1,fog_fragment:i1,fog_pars_fragment:r1,gradientmap_pars_fragment:s1,lightmap_pars_fragment:a1,lights_lambert_fragment:o1,lights_lambert_pars_fragment:l1,lights_pars_begin:c1,lights_toon_fragment:d1,lights_toon_pars_fragment:h1,lights_phong_fragment:f1,lights_phong_pars_fragment:p1,lights_physical_fragment:m1,lights_physical_pars_fragment:g1,lights_fragment_begin:_1,lights_fragment_maps:v1,lights_fragment_end:x1,logdepthbuf_fragment:S1,logdepthbuf_pars_fragment:M1,logdepthbuf_pars_vertex:y1,logdepthbuf_vertex:b1,map_fragment:E1,map_pars_fragment:T1,map_particle_fragment:A1,map_particle_pars_fragment:w1,metalnessmap_fragment:C1,metalnessmap_pars_fragment:R1,morphinstance_vertex:L1,morphcolor_vertex:P1,morphnormal_vertex:D1,morphtarget_pars_vertex:I1,morphtarget_vertex:N1,normal_fragment_begin:U1,normal_fragment_maps:F1,normal_pars_fragment:O1,normal_pars_vertex:B1,normal_vertex:k1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:z1,clearcoat_normal_fragment_maps:G1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:W1,opaque_fragment:q1,packing:X1,premultiplied_alpha_fragment:$1,project_vertex:j1,dithering_fragment:Y1,dithering_pars_fragment:K1,roughnessmap_fragment:J1,roughnessmap_pars_fragment:Z1,shadowmap_pars_fragment:Q1,shadowmap_pars_vertex:e2,shadowmap_vertex:t2,shadowmask_pars_fragment:n2,skinbase_vertex:i2,skinning_pars_vertex:r2,skinning_vertex:s2,skinnormal_vertex:a2,specularmap_fragment:o2,specularmap_pars_fragment:l2,tonemapping_fragment:c2,tonemapping_pars_fragment:u2,transmission_fragment:d2,transmission_pars_fragment:h2,uv_pars_fragment:f2,uv_pars_vertex:p2,uv_vertex:m2,worldpos_vertex:g2,background_vert:_2,background_frag:v2,backgroundCube_vert:x2,backgroundCube_frag:S2,cube_vert:M2,cube_frag:y2,depth_vert:b2,depth_frag:E2,distance_vert:T2,distance_frag:A2,equirect_vert:w2,equirect_frag:C2,linedashed_vert:R2,linedashed_frag:L2,meshbasic_vert:P2,meshbasic_frag:D2,meshlambert_vert:I2,meshlambert_frag:N2,meshmatcap_vert:U2,meshmatcap_frag:F2,meshnormal_vert:O2,meshnormal_frag:B2,meshphong_vert:k2,meshphong_frag:V2,meshphysical_vert:z2,meshphysical_frag:G2,meshtoon_vert:H2,meshtoon_frag:W2,points_vert:q2,points_frag:X2,shadow_vert:$2,shadow_frag:j2,sprite_vert:Y2,sprite_frag:K2},_e={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},li={basic:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:cn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:cn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:cn([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:cn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:cn([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:cn([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:cn([_e.common,_e.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:cn([_e.lights,_e.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};li.physical={uniforms:cn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const eo={r:0,b:0,g:0},gr=new zi,J2=new zt;function Z2(t,e,n,i,r,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function _(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?n:e).get(T)),T}function v(E){let T=!1;const A=_(E);A===null?f(o,l):A&&A.isColor&&(f(A,1),T=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,T){const A=_(T);A&&(A.isCubeTexture||A.mapping===ko)?(u===void 0&&(u=new xi(new ba(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:_s(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gr.copy(T.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(J2.makeRotationFromEuler(gr)),u.material.toneMapped=it.getTransfer(A.colorSpace)!==ft,(d!==A||h!==A.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new xi(new Ea(2,2),new Qn({name:"BackgroundMaterial",uniforms:_s(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=it.getTransfer(A.colorSpace)!==ft,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,T){E.getRGB(eo,rm(t)),i.buffers.color.setClear(eo.r,eo.g,eo.b,T,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),l=T,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:v,addToRenderList:m,dispose:b}}function Q2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(M,L,q,z,K){let Q=!1;const X=d(z,q,L);s!==X&&(s=X,c(s.object)),Q=p(M,z,q,K),Q&&_(M,z,q,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,T(M,L,q,z),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,L,q){const z=q.wireframe===!0;let K=i[M.id];K===void 0&&(K={},i[M.id]=K);let Q=K[L.id];Q===void 0&&(Q={},K[L.id]=Q);let X=Q[z];return X===void 0&&(X=h(l()),Q[z]=X),X}function h(M){const L=[],q=[],z=[];for(let K=0;K<n;K++)L[K]=0,q[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:q,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,L,q,z){const K=s.attributes,Q=L.attributes;let X=0;const $=q.getAttributes();for(const re in $)if($[re].location>=0){const H=K[re];let D=Q[re];if(D===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(D=M.instanceColor)),H===void 0||H.attribute!==D||D&&H.data!==D.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function _(M,L,q,z){const K={},Q=L.attributes;let X=0;const $=q.getAttributes();for(const re in $)if($[re].location>=0){let H=Q[re];H===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(H=M.instanceColor));const D={};D.attribute=H,H&&H.data&&(D.data=H.data),K[re]=D,X++}s.attributes=K,s.attributesNum=X,s.index=z}function v(){const M=s.newAttributes;for(let L=0,q=M.length;L<q;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const q=s.newAttributes,z=s.enabledAttributes,K=s.attributeDivisors;q[M]=1,z[M]===0&&(t.enableVertexAttribArray(M),z[M]=1),K[M]!==L&&(t.vertexAttribDivisor(M,L),K[M]=L)}function b(){const M=s.newAttributes,L=s.enabledAttributes;for(let q=0,z=L.length;q<z;q++)L[q]!==M[q]&&(t.disableVertexAttribArray(q),L[q]=0)}function E(M,L,q,z,K,Q,X){X===!0?t.vertexAttribIPointer(M,L,q,K,Q):t.vertexAttribPointer(M,L,q,z,K,Q)}function T(M,L,q,z){v();const K=z.attributes,Q=q.getAttributes(),X=L.defaultAttributeValues;for(const $ in Q){const re=Q[$];if(re.location>=0){let U=K[$];if(U===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(U=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(U=M.instanceColor)),U!==void 0){const H=U.normalized,D=U.itemSize,J=e.get(U);if(J===void 0)continue;const Z=J.buffer,oe=J.type,ve=J.bytesPerElement,F=oe===t.INT||oe===t.UNSIGNED_INT||U.gpuType===Wu;if(U.isInterleavedBufferAttribute){const j=U.data,ue=j.stride,G=U.offset;if(j.isInstancedInterleavedBuffer){for(let te=0;te<re.locationSize;te++)f(re.location+te,j.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let te=0;te<re.locationSize;te++)m(re.location+te);t.bindBuffer(t.ARRAY_BUFFER,Z);for(let te=0;te<re.locationSize;te++)E(re.location+te,D/re.locationSize,oe,H,ue*ve,(G+D/re.locationSize*te)*ve,F)}else{if(U.isInstancedBufferAttribute){for(let j=0;j<re.locationSize;j++)f(re.location+j,U.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let j=0;j<re.locationSize;j++)m(re.location+j);t.bindBuffer(t.ARRAY_BUFFER,Z);for(let j=0;j<re.locationSize;j++)E(re.location+j,D/re.locationSize,oe,H,D*ve,D/re.locationSize*j*ve,F)}}else if(X!==void 0){const H=X[$];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(re.location,H);break;case 3:t.vertexAttrib3fv(re.location,H);break;case 4:t.vertexAttrib4fv(re.location,H);break;default:t.vertexAttrib1fv(re.location,H)}}}}b()}function A(){B();for(const M in i){const L=i[M];for(const q in L){const z=L[q];for(const K in z)u(z[K].object),delete z[K];delete L[q]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const q in L){const z=L[q];for(const K in z)u(z[K].object),delete z[K];delete L[q]}delete i[M.id]}function R(M){for(const L in i){const q=i[L];if(q[M.id]===void 0)continue;const z=q[M.id];for(const K in z)u(z[K].object),delete z[K];delete q[M.id]}}function B(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:B,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function ex(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v]*h[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tx(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Jn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const B=R===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==zn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==di&&!B)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:T,maxSamples:A,samples:w}}function nx(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Sr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,E=b*4;let T=f.clippingState||null;l.value=T,T=u(_,h,E,p);for(let A=0;A!==E;++A)T[A]=n[A];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const f=p+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,T=p;E!==v;++E,T+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ix(t){let e=new WeakMap;function n(a,o){return o===Dc?a.mapping=Dr:o===Ic&&(a.mapping=ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Dc||o===Ic)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new am(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const rr=4,Bh=[.125,.215,.35,.446,.526,.582],yr=20,rx=256,Zs=new cm,kh=new Qe;let jl=null,Yl=0,Kl=0,Jl=!1;const sx=new V;class Vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=sx}=s;jl=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,Yl,Kl),this._renderer.xr.enabled=Jl,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Dr||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:ki,format:Jn,colorSpace:gs,depthBuffer:!1},r=zh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ax(s)),this._blurMaterial=lx(s,e,n),this._ggxMaterial=ox(s,e,n)}return r}_compileMaterial(e){const n=new xi(new Xi,e);this._renderer.compile(n,Zs)}_sceneToCubeUV(e,n,i,r,s){const l=new Yn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(kh),d.toneMapping=pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xi(new ba,new tm({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let f=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,f=!0):(m.color.copy(kh),f=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):T===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const A=this._cubeSize;Qr(r,T*A,E>2?A:0,A,A),d.setRenderTarget(r),f&&d.render(v,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Dr||e.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Zs)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-rr?i-_+rr:0),f=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,Qr(s,m,f,3*v,2*v),r.setRenderTarget(s),r.render(o,Zs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Qr(e,m,f,3*v,2*v),r.setRenderTarget(e),r.render(o,Zs)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yr-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):yr;m>yr&&$e(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const f=[];let b=0;for(let R=0;R<yr;++R){const B=R/v,S=Math.exp(-B*B/2);f.push(S),R===0?b+=S:R<m&&(b+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-i;const T=this._sizeLods[r],A=3*T*(r>E-rr?r-E+rr:0),w=4*(this._cubeSize-T);Qr(n,A,w,3*T,2*T),l.setRenderTarget(n),l.render(d,Zs)}}function ax(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+Bh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-rr?l=Bh[a-t+rr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,m=2,f=1,b=new Float32Array(v*_*p),E=new Float32Array(m*_*p),T=new Float32Array(f*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,B=w>2?0:-1,S=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];b.set(S,v*_*w),E.set(h,m*_*w);const M=[w,w,w,w,w,w];T.set(M,f*_*w)}const A=new Xi;A.setAttribute("position",new gi(b,v)),A.setAttribute("uv",new gi(E,m)),A.setAttribute("faceIndex",new gi(T,f)),i.push(new xi(A,null)),r>rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function zh(t,e,n){const i=new mi(t,e,n);return i.texture.mapping=ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ox(t,e,n){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function lx(t,e,n){const i=new Float32Array(yr),r=new V(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Gh(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Hh(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function cx(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Dc||l===Ic,u=l===Dr||l===ps;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Vh(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Vh(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function ux(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&pa("WebGLRenderer: "+i+" extension not supported."),r}}}function dx(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let E=0,T=b.length;E<T;E+=3){const A=b[E+0],w=b[E+1],R=b[E+2];h.push(A,w,w,R,R,A)}}else if(_!==void 0){const b=_.array;v=_.version;for(let E=0,T=b.length/3-1;E<T;E+=3){const A=E+0,w=E+1,R=E+2;h.push(A,w,w,R,R,A)}}else return;const m=new(Jp(h)?im:nm)(h,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function hx(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*a,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];n.update(m,i,1)}function d(h,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,_);let f=0;for(let b=0;b<_;b++)f+=p[b]*v[b];n.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fx(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function px(t,e,n){const i=new WeakMap,r=new Ut;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),_===!0&&(E=2),v===!0&&(E=3);let T=o.attributes.position.count*E,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*A*4*d),R=new Zp(w,T,A,d);R.type=di,R.needsUpdate=!0;const B=E*4;for(let M=0;M<d;M++){const L=m[M],q=f[M],z=b[M],K=T*A*4*M;for(let Q=0;Q<L.count;Q++){const X=Q*B;p===!0&&(r.fromBufferAttribute(L,Q),w[K+X+0]=r.x,w[K+X+1]=r.y,w[K+X+2]=r.z,w[K+X+3]=0),_===!0&&(r.fromBufferAttribute(q,Q),w[K+X+4]=r.x,w[K+X+5]=r.y,w[K+X+6]=r.z,w[K+X+7]=0),v===!0&&(r.fromBufferAttribute(z,Q),w[K+X+8]=r.x,w[K+X+9]=r.y,w[K+X+10]=r.z,w[K+X+11]=z.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new ct(T,A)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function mx(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const gx={[Fp]:"LINEAR_TONE_MAPPING",[Op]:"REINHARD_TONE_MAPPING",[Bp]:"CINEON_TONE_MAPPING",[kp]:"ACES_FILMIC_TONE_MAPPING",[zp]:"AGX_TONE_MAPPING",[Gp]:"NEUTRAL_TONE_MAPPING",[Vp]:"CUSTOM_TONE_MAPPING"};function _x(t,e,n,i,r){const s=new mi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new mi(e,n,{type:ki,depthBuffer:!1,stencilBuffer:!1}),o=new Xi;o.setAttribute("position",new Oi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Oi([0,2,0,0,2,0],2));const l=new hv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new xi(o,l),u=new cm(-1,1,1,-1,0,1);let d=null,h=null,p=!1,_,v=null,m=[],f=!1;this.setSize=function(b,E){s.setSize(b,E),a.setSize(b,E);for(let T=0;T<m.length;T++){const A=m[T];A.setSize&&A.setSize(b,E)}},this.setEffects=function(b){m=b,f=m.length>0&&m[0].isRenderPass===!0;const E=s.width,T=s.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(E,T)}},this.begin=function(b,E){if(p||b.toneMapping===pi&&m.length===0)return!1;if(v=E,E!==null){const T=E.width,A=E.height;(s.width!==T||s.height!==A)&&this.setSize(T,A)}return f===!1&&b.setRenderTarget(s),_=b.toneMapping,b.toneMapping=pi,!0},this.hasRenderPass=function(){return f},this.end=function(b,E){b.toneMapping=_,p=!0;let T=s,A=a;for(let w=0;w<m.length;w++){const R=m[w];if(R.enabled!==!1&&(R.render(b,A,T,E),R.needsSwap!==!1)){const B=T;T=A,A=B}}if(d!==b.outputColorSpace||h!==b.toneMapping){d=b.outputColorSpace,h=b.toneMapping,l.defines={},it.getTransfer(d)===ft&&(l.defines.SRGB_TRANSFER="");const w=gx[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(v),b.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const dm=new hn,mu=new ma(1,1),hm=new Zp,fm=new z_,pm=new sm,Wh=[],qh=[],Xh=new Float32Array(16),$h=new Float32Array(9),jh=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wh[r];if(s===void 0&&(s=new Float32Array(r),Wh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Go(t,e){let n=qh[e];n===void 0&&(n=new Int32Array(e),qh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function Sx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function Mx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function yx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;jh.set(i),t.uniformMatrix2fv(this.addr,!1,jh),$t(n,i)}}function bx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;$h.set(i),t.uniformMatrix3fv(this.addr,!1,$h),$t(n,i)}}function Ex(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Xh.set(i),t.uniformMatrix4fv(this.addr,!1,Xh),$t(n,i)}}function Tx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ax(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function wx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function Cx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function Rx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Lx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function Px(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function Dx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function Ix(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(mu.compareFunction=n.isReversedDepthBuffer()?Ju:Ku,s=mu):s=dm,n.setTexture2D(e||s,r)}function Nx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fm,r)}function Ux(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||pm,r)}function Fx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hm,r)}function Ox(t){switch(t){case 5126:return vx;case 35664:return xx;case 35665:return Sx;case 35666:return Mx;case 35674:return yx;case 35675:return bx;case 35676:return Ex;case 5124:case 35670:return Tx;case 35667:case 35671:return Ax;case 35668:case 35672:return wx;case 35669:case 35673:return Cx;case 5125:return Rx;case 36294:return Lx;case 36295:return Px;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Fx}}function Bx(t,e){t.uniform1fv(this.addr,e)}function kx(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function Vx(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function zx(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function Gx(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Hx(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Wx(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qx(t,e){t.uniform1iv(this.addr,e)}function Xx(t,e){t.uniform2iv(this.addr,e)}function $x(t,e){t.uniform3iv(this.addr,e)}function jx(t,e){t.uniform4iv(this.addr,e)}function Yx(t,e){t.uniform1uiv(this.addr,e)}function Kx(t,e){t.uniform2uiv(this.addr,e)}function Jx(t,e){t.uniform3uiv(this.addr,e)}function Zx(t,e){t.uniform4uiv(this.addr,e)}function Qx(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=mu:a=dm;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function e3(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||fm,s[a])}function t3(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||pm,s[a])}function n3(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||hm,s[a])}function i3(t){switch(t){case 5126:return Bx;case 35664:return kx;case 35665:return Vx;case 35666:return zx;case 35674:return Gx;case 35675:return Hx;case 35676:return Wx;case 5124:case 35670:return qx;case 35667:case 35671:return Xx;case 35668:case 35672:return $x;case 35669:case 35673:return jx;case 5125:return Yx;case 36294:return Kx;case 36295:return Jx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return t3;case 36289:case 36303:case 36311:case 36292:return n3}}class r3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ox(n.type)}}class s3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=i3(n.type)}}class a3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function Yh(t,e){t.seq.push(e),t.map[e.id]=e}function o3(t,e,n){const i=t.name,r=i.length;for(Zl.lastIndex=0;;){const s=Zl.exec(i),a=Zl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yh(n,c===void 0?new r3(o,t,e):new s3(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new a3(o),Yh(n,d)),n=d}}}class vo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);o3(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Kh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const l3=37297;let c3=0;function u3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Jh=new Ye;function d3(t){it._getMatrix(Jh,it.workingColorSpace,t);const e=`mat3( ${Jh.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case Eo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Zh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+u3(t.getShaderSource(e),o)}else return s}function h3(t,e){const n=d3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const f3={[Fp]:"Linear",[Op]:"Reinhard",[Bp]:"Cineon",[kp]:"ACESFilmic",[zp]:"AgX",[Gp]:"Neutral",[Vp]:"Custom"};function p3(t,e){const n=f3[e];return n===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const to=new V;function m3(){it.getLuminanceCoefficients(to);const t=to.x.toFixed(4),e=to.y.toFixed(4),n=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function _3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function v3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function sa(t){return t!==""}function Qh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ef(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x3=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(t){return t.replace(x3,M3)}const S3=new Map;function M3(t,e){let n=Ke[e];if(n===void 0){const i=S3.get(e);if(i!==void 0)n=Ke[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gu(n)}const y3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(t){return t.replace(y3,b3)}function b3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nf(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const E3={[fo]:"SHADOWMAP_TYPE_PCF",[ra]:"SHADOWMAP_TYPE_VSM"};function T3(t){return E3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const A3={[Dr]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE_UV"};function w3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":A3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const C3={[ps]:"ENVMAP_MODE_REFRACTION"};function R3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":C3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L3={[Up]:"ENVMAP_BLENDING_MULTIPLY",[M_]:"ENVMAP_BLENDING_MIX",[y_]:"ENVMAP_BLENDING_ADD"};function P3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":L3[t.combine]||"ENVMAP_BLENDING_NONE"}function D3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function I3(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=T3(n),c=w3(n),u=R3(n),d=P3(n),h=D3(n),p=g3(n),_=_3(s),v=r.createProgram();let m,f,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(sa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(sa).join(`
`),f.length>0&&(f+=`
`)):(m=[nf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),f=[nf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?Ke.tonemapping_pars_fragment:"",n.toneMapping!==pi?p3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,h3("linearToOutputTexel",n.outputColorSpace),m3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),a=gu(a),a=Qh(a,n),a=ef(a,n),o=gu(o),o=Qh(o,n),o=ef(o,n),a=tf(a),o=tf(o),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=b+m+a,T=b+f+o,A=Kh(r,r.VERTEX_SHADER,E),w=Kh(r,r.FRAGMENT_SHADER,T);r.attachShader(v,A),r.attachShader(v,w),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(L){if(t.debug.checkShaderErrors){const q=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(A)||"",K=r.getShaderInfoLog(w)||"",Q=q.trim(),X=z.trim(),$=K.trim();let re=!0,U=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(re=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,A,w);else{const H=Zh(r,A,"vertex"),D=Zh(r,w,"fragment");at("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Q+`
`+H+`
`+D)}else Q!==""?$e("WebGLProgram: Program Info Log:",Q):(X===""||$==="")&&(U=!1);U&&(L.diagnostics={runnable:re,programLog:Q,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:f}})}r.deleteShader(A),r.deleteShader(w),B=new vo(r,v),S=v3(r,v)}let B;this.getUniforms=function(){return B===void 0&&R(this),B};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,l3)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=c3++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let N3=0;class U3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new F3(e),n.set(e,i)),i}}class F3{constructor(e){this.id=N3++,this.code=e,this.usedTimes=0}}function O3(t,e,n,i,r,s,a){const o=new Qp,l=new U3,c=new Set,u=[],d=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,q,z){const K=q.fog,Q=z.geometry,X=S.isMeshStandardMaterial?q.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||X),re=$&&$.mapping===ko?$.image.height:null,U=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&$e("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const H=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,D=H!==void 0?H.length:0;let J=0;Q.morphAttributes.position!==void 0&&(J=1),Q.morphAttributes.normal!==void 0&&(J=2),Q.morphAttributes.color!==void 0&&(J=3);let Z,oe,ve,F;if(U){const dt=li[U];Z=dt.vertexShader,oe=dt.fragmentShader}else Z=S.vertexShader,oe=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),F=l.getFragmentShaderID(S);const j=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),G=z.isInstancedMesh===!0,te=z.isBatchedMesh===!0,de=!!S.map,Ie=!!S.matcap,ye=!!$,Ne=!!S.aoMap,qe=!!S.lightMap,Be=!!S.bumpMap,xt=!!S.normalMap,C=!!S.displacementMap,Et=!!S.emissiveMap,ut=!!S.metalnessMap,St=!!S.roughnessMap,Ce=S.anisotropy>0,y=S.clearcoat>0,g=S.dispersion>0,I=S.iridescence>0,ee=S.sheen>0,ie=S.transmission>0,Y=Ce&&!!S.anisotropyMap,Le=y&&!!S.clearcoatMap,fe=y&&!!S.clearcoatNormalMap,we=y&&!!S.clearcoatRoughnessMap,We=I&&!!S.iridescenceMap,ae=I&&!!S.iridescenceThicknessMap,me=ee&&!!S.sheenColorMap,Ae=ee&&!!S.sheenRoughnessMap,Re=!!S.specularMap,pe=!!S.specularColorMap,Je=!!S.specularIntensityMap,P=ie&&!!S.transmissionMap,Se=ie&&!!S.thicknessMap,ce=!!S.gradientMap,Me=!!S.alphaMap,se=S.alphaTest>0,ne=!!S.alphaHash,he=!!S.extensions;let Xe=pi;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xe=t.toneMapping);const Mt={shaderID:U,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:oe,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:F,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:te,batchingColor:te&&z._colorsTexture!==null,instancing:G,instancingColor:G&&z.instanceColor!==null,instancingMorph:G&&z.morphTexture!==null,outputColorSpace:j===null?t.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:gs,alphaToCoverage:!!S.alphaToCoverage,map:de,matcap:Ie,envMap:ye,envMapMode:ye&&$.mapping,envMapCubeUVHeight:re,aoMap:Ne,lightMap:qe,bumpMap:Be,normalMap:xt,displacementMap:C,emissiveMap:Et,normalMapObjectSpace:xt&&S.normalMapType===A_,normalMapTangentSpace:xt&&S.normalMapType===T_,metalnessMap:ut,roughnessMap:St,anisotropy:Ce,anisotropyMap:Y,clearcoat:y,clearcoatMap:Le,clearcoatNormalMap:fe,clearcoatRoughnessMap:we,dispersion:g,iridescence:I,iridescenceMap:We,iridescenceThicknessMap:ae,sheen:ee,sheenColorMap:me,sheenRoughnessMap:Ae,specularMap:Re,specularColorMap:pe,specularIntensityMap:Je,transmission:ie,transmissionMap:P,thicknessMap:Se,gradientMap:ce,opaque:S.transparent===!1&&S.blending===ss&&S.alphaToCoverage===!1,alphaMap:Me,alphaTest:se,alphaHash:ne,combine:S.combine,mapUv:de&&v(S.map.channel),aoMapUv:Ne&&v(S.aoMap.channel),lightMapUv:qe&&v(S.lightMap.channel),bumpMapUv:Be&&v(S.bumpMap.channel),normalMapUv:xt&&v(S.normalMap.channel),displacementMapUv:C&&v(S.displacementMap.channel),emissiveMapUv:Et&&v(S.emissiveMap.channel),metalnessMapUv:ut&&v(S.metalnessMap.channel),roughnessMapUv:St&&v(S.roughnessMap.channel),anisotropyMapUv:Y&&v(S.anisotropyMap.channel),clearcoatMapUv:Le&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(S.sheenRoughnessMap.channel),specularMapUv:Re&&v(S.specularMap.channel),specularColorMapUv:pe&&v(S.specularColorMap.channel),specularIntensityMapUv:Je&&v(S.specularIntensityMap.channel),transmissionMapUv:P&&v(S.transmissionMap.channel),thicknessMapUv:Se&&v(S.thicknessMap.channel),alphaMapUv:Me&&v(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(xt||Ce),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(de||Me),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xe,decodeVideoTexture:de&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:Et&&S.emissiveMap.isVideoTexture===!0&&it.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Di,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:he&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&S.extensions.multiDraw===!0||te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(b(M,S),E(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function T(S){const M=_[S.type];let L;if(M){const q=li[M];L=tv.clone(q.uniforms)}else L=S.uniforms;return L}function A(S,M){let L=d.get(M);return L!==void 0?++L.usedTimes:(L=new I3(t,M,S,s),u.push(L),d.set(M,L)),L}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),d.delete(S.cacheKey),S.destroy()}}function R(S){l.remove(S)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:B}}function B3(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function k3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,p,_,v,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function o(d,h,p,_,v,m){const f=a(d,h,p,_,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,_,v,m){const f=a(d,h,p,_,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||k3),i.length>1&&i.sort(h||rf),r.length>1&&r.sort(h||rf)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function V3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new sf,t.set(i,[a])):r>=s.length?(a=new sf,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function z3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Qe};break;case"SpotLight":n={position:new V,direction:new V,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function G3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let H3=0;function W3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function q3(t){const e=new z3,n=G3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new zt,a=new zt;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,_=0,v=0,m=0,f=0,b=0,E=0,T=0,A=0,w=0,R=0;c.sort(W3);for(let S=0,M=c.length;S<M;S++){const L=c[S],q=L.color,z=L.intensity,K=L.distance;let Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ms?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=q.r*z,d+=q.g*z,h+=q.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],z);R++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,re=n.get(L);re.shadowIntensity=$.intensity,re.shadowBias=$.bias,re.shadowNormalBias=$.normalBias,re.shadowRadius=$.radius,re.shadowMapSize=$.mapSize,i.directionalShadow[p]=re,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=L.shadow.matrix,b++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(q).multiplyScalar(z),X.distance=K,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;const $=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,$.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[v]=$.matrix,L.castShadow){const re=n.get(L);re.shadowIntensity=$.intensity,re.shadowBias=$.bias,re.shadowNormalBias=$.normalBias,re.shadowRadius=$.radius,re.shadowMapSize=$.mapSize,i.spotShadow[v]=re,i.spotShadowMap[v]=Q,T++}v++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(q).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const $=L.shadow,re=n.get(L);re.shadowIntensity=$.intensity,re.shadowBias=$.bias,re.shadowNormalBias=$.normalBias,re.shadowRadius=$.radius,re.shadowMapSize=$.mapSize,re.shadowCameraNear=$.camera.near,re.shadowCameraFar=$.camera.far,i.pointShadow[_]=re,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=L.shadow.matrix,E++}i.point[_]=X,_++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[f]=X,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==p||B.pointLength!==_||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==f||B.numDirectionalShadows!==b||B.numPointShadows!==E||B.numSpotShadows!==T||B.numSpotMaps!==A||B.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=T+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,B.directionalLength=p,B.pointLength=_,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=f,B.numDirectionalShadows=b,B.numPointShadows=E,B.numSpotShadows=T,B.numSpotMaps=A,B.numLightProbes=R,i.version=H3++)}function l(c,u){let d=0,h=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const E=c[f];if(E.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(E.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const T=i.hemi[v];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function af(t){const e=new q3(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function X3(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new af(t),e.set(r,[o])):s>=a.length?(o=new af(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const $3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j3=`uniform sampler2D shadow_pass;
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
}`,Y3=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],K3=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],of=new zt,Qs=new V,Ql=new V;function J3(t,e,n){let i=new om;const r=new ct,s=new ct,a=new Ut,o=new fv,l=new pv,c={},u=n.maxTextureSize,d={[ar]:_n,[_n]:ar,[Di]:Di},h=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:$3,fragmentShader:j3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Xi;_.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xi(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let f=this.type;this.render=function(w,R,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===n_&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=fo);const S=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Ui),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const z=f!==this.type;z&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(Q=>Q.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,Q=w.length;K<Q;K++){const X=w[K],$=X.shadow;if($===void 0){$e("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const re=$.getFrameExtents();if(r.multiply(re),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,$.mapSize.y=s.y)),$.map===null||z===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ra){if(X.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new mi(r.x,r.y,{format:ms,type:ki,minFilter:rn,magFilter:rn,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new ma(r.x,r.y,di),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Vi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Zt,$.map.depthTexture.magFilter=Zt}else{X.isPointLight?($.map=new am(r.x),$.map.depthTexture=new dv(r.x,vi)):($.map=new mi(r.x,r.y),$.map.depthTexture=new ma(r.x,r.y,vi)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Vi;const H=t.state.buffers.depth.getReversed();this.type===fo?($.map.depthTexture.compareFunction=H?Ju:Ku,$.map.depthTexture.minFilter=rn,$.map.depthTexture.magFilter=rn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Zt,$.map.depthTexture.magFilter=Zt)}$.camera.updateProjectionMatrix()}const U=$.map.isWebGLCubeRenderTarget?6:1;for(let H=0;H<U;H++){if($.map.isWebGLCubeRenderTarget)t.setRenderTarget($.map,H),t.clear();else{H===0&&(t.setRenderTarget($.map),t.clear());const D=$.getViewport(H);a.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),q.viewport(a)}if(X.isPointLight){const D=$.camera,J=$.matrix,Z=X.distance||D.far;Z!==D.far&&(D.far=Z,D.updateProjectionMatrix()),Qs.setFromMatrixPosition(X.matrixWorld),D.position.copy(Qs),Ql.copy(D.position),Ql.add(Y3[H]),D.up.copy(K3[H]),D.lookAt(Ql),D.updateMatrixWorld(),J.makeTranslation(-Qs.x,-Qs.y,-Qs.z),of.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$._frustum.setFromProjectionMatrix(of,D.coordinateSystem,D.reversedDepth)}else $.updateMatrices(X);i=$.getFrustum(),T(R,B,$.camera,X,this.type)}$.isPointLightShadow!==!0&&this.type===ra&&b($,B),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,L)};function b(w,R){const B=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mi(r.x,r.y,{format:ms,type:ki})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,B,h,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,B,p,v,null)}function E(w,R,B,S){let M=null;const L=B.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=B.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const q=M.uuid,z=R.uuid;let K=c[q];K===void 0&&(K={},c[q]=K);let Q=K[z];Q===void 0&&(Q=M.clone(),K[z]=Q,R.addEventListener("dispose",A)),M=Q}if(M.visible=R.visible,M.wireframe=R.wireframe,S===ra?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=t.properties.get(M);q.light=B}return M}function T(w,R,B,S,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===ra)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);const z=e.update(w),K=w.material;if(Array.isArray(K)){const Q=z.groups;for(let X=0,$=Q.length;X<$;X++){const re=Q[X],U=K[re.materialIndex];if(U&&U.visible){const H=E(w,U,S,M);w.onBeforeShadow(t,w,R,B,z,H,re),t.renderBufferDirect(B,null,z,H,w,re),w.onAfterShadow(t,w,R,B,z,H,re)}}}else if(K.visible){const Q=E(w,K,S,M);w.onBeforeShadow(t,w,R,B,z,Q,null),t.renderBufferDirect(B,null,z,Q,w,null),w.onAfterShadow(t,w,R,B,z,Q,null)}}const q=w.children;for(let z=0,K=q.length;z<K;z++)T(q[z],R,B,S,M)}function A(w){w.target.removeEventListener("dispose",A);for(const B in c){const S=c[B],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Z3={[Tc]:Ac,[wc]:Lc,[Cc]:Pc,[fs]:Rc,[Ac]:Tc,[Lc]:wc,[Pc]:Cc,[Rc]:fs};function Q3(t,e){function n(){let P=!1;const Se=new Ut;let ce=null;const Me=new Ut(0,0,0,0);return{setMask:function(se){ce!==se&&!P&&(t.colorMask(se,se,se,se),ce=se)},setLocked:function(se){P=se},setClear:function(se,ne,he,Xe,Mt){Mt===!0&&(se*=Xe,ne*=Xe,he*=Xe),Se.set(se,ne,he,Xe),Me.equals(Se)===!1&&(t.clearColor(se,ne,he,Xe),Me.copy(Se))},reset:function(){P=!1,ce=null,Me.set(-1,0,0,0)}}}function i(){let P=!1,Se=!1,ce=null,Me=null,se=null;return{setReversed:function(ne){if(Se!==ne){const he=e.get("EXT_clip_control");ne?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),Se=ne;const Xe=se;se=null,this.setClear(Xe)}},getReversed:function(){return Se},setTest:function(ne){ne?j(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ne){ce!==ne&&!P&&(t.depthMask(ne),ce=ne)},setFunc:function(ne){if(Se&&(ne=Z3[ne]),Me!==ne){switch(ne){case Tc:t.depthFunc(t.NEVER);break;case Ac:t.depthFunc(t.ALWAYS);break;case wc:t.depthFunc(t.LESS);break;case fs:t.depthFunc(t.LEQUAL);break;case Cc:t.depthFunc(t.EQUAL);break;case Rc:t.depthFunc(t.GEQUAL);break;case Lc:t.depthFunc(t.GREATER);break;case Pc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=ne}},setLocked:function(ne){P=ne},setClear:function(ne){se!==ne&&(Se&&(ne=1-ne),t.clearDepth(ne),se=ne)},reset:function(){P=!1,ce=null,Me=null,se=null,Se=!1}}}function r(){let P=!1,Se=null,ce=null,Me=null,se=null,ne=null,he=null,Xe=null,Mt=null;return{setTest:function(dt){P||(dt?j(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(dt){Se!==dt&&!P&&(t.stencilMask(dt),Se=dt)},setFunc:function(dt,ii,Ai){(ce!==dt||Me!==ii||se!==Ai)&&(t.stencilFunc(dt,ii,Ai),ce=dt,Me=ii,se=Ai)},setOp:function(dt,ii,Ai){(ne!==dt||he!==ii||Xe!==Ai)&&(t.stencilOp(dt,ii,Ai),ne=dt,he=ii,Xe=Ai)},setLocked:function(dt){P=dt},setClear:function(dt){Mt!==dt&&(t.clearStencil(dt),Mt=dt)},reset:function(){P=!1,Se=null,ce=null,Me=null,se=null,ne=null,he=null,Xe=null,Mt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],_=null,v=!1,m=null,f=null,b=null,E=null,T=null,A=null,w=null,R=new Qe(0,0,0),B=0,S=!1,M=null,L=null,q=null,z=null,K=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const re=t.getParameter(t.VERSION);re.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(re)[1]),X=$>=1):re.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),X=$>=2);let U=null,H={};const D=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),Z=new Ut().fromArray(D),oe=new Ut().fromArray(J);function ve(P,Se,ce,Me){const se=new Uint8Array(4),ne=t.createTexture();t.bindTexture(P,ne),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let he=0;he<ce;he++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,Me,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(Se+he,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return ne}const F={};F[t.TEXTURE_2D]=ve(t.TEXTURE_2D,t.TEXTURE_2D,1),F[t.TEXTURE_CUBE_MAP]=ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[t.TEXTURE_2D_ARRAY]=ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),F[t.TEXTURE_3D]=ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(t.DEPTH_TEST),a.setFunc(fs),Be(!1),xt(hh),j(t.CULL_FACE),Ne(Ui);function j(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function ue(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function G(P,Se){return d[P]!==Se?(t.bindFramebuffer(P,Se),d[P]=Se,P===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Se),P===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function te(P,Se){let ce=p,Me=!1;if(P){ce=h.get(Se),ce===void 0&&(ce=[],h.set(Se,ce));const se=P.textures;if(ce.length!==se.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,he=se.length;ne<he;ne++)ce[ne]=t.COLOR_ATTACHMENT0+ne;ce.length=se.length,Me=!0}}else ce[0]!==t.BACK&&(ce[0]=t.BACK,Me=!0);Me&&t.drawBuffers(ce)}function de(P){return _!==P?(t.useProgram(P),_=P,!0):!1}const Ie={[Mr]:t.FUNC_ADD,[r_]:t.FUNC_SUBTRACT,[s_]:t.FUNC_REVERSE_SUBTRACT};Ie[a_]=t.MIN,Ie[o_]=t.MAX;const ye={[l_]:t.ZERO,[c_]:t.ONE,[u_]:t.SRC_COLOR,[bc]:t.SRC_ALPHA,[g_]:t.SRC_ALPHA_SATURATE,[p_]:t.DST_COLOR,[h_]:t.DST_ALPHA,[d_]:t.ONE_MINUS_SRC_COLOR,[Ec]:t.ONE_MINUS_SRC_ALPHA,[m_]:t.ONE_MINUS_DST_COLOR,[f_]:t.ONE_MINUS_DST_ALPHA,[__]:t.CONSTANT_COLOR,[v_]:t.ONE_MINUS_CONSTANT_COLOR,[x_]:t.CONSTANT_ALPHA,[S_]:t.ONE_MINUS_CONSTANT_ALPHA};function Ne(P,Se,ce,Me,se,ne,he,Xe,Mt,dt){if(P===Ui){v===!0&&(ue(t.BLEND),v=!1);return}if(v===!1&&(j(t.BLEND),v=!0),P!==i_){if(P!==m||dt!==S){if((f!==Mr||T!==Mr)&&(t.blendEquation(t.FUNC_ADD),f=Mr,T=Mr),dt)switch(P){case ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fh:t.blendFunc(t.ONE,t.ONE);break;case ph:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",P);break}else switch(P){case ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ph:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mh:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",P);break}b=null,E=null,A=null,w=null,R.set(0,0,0),B=0,m=P,S=dt}return}se=se||Se,ne=ne||ce,he=he||Me,(Se!==f||se!==T)&&(t.blendEquationSeparate(Ie[Se],Ie[se]),f=Se,T=se),(ce!==b||Me!==E||ne!==A||he!==w)&&(t.blendFuncSeparate(ye[ce],ye[Me],ye[ne],ye[he]),b=ce,E=Me,A=ne,w=he),(Xe.equals(R)===!1||Mt!==B)&&(t.blendColor(Xe.r,Xe.g,Xe.b,Mt),R.copy(Xe),B=Mt),m=P,S=!1}function qe(P,Se){P.side===Di?ue(t.CULL_FACE):j(t.CULL_FACE);let ce=P.side===_n;Se&&(ce=!ce),Be(ce),P.blending===ss&&P.transparent===!1?Ne(Ui):Ne(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const Me=P.stencilWrite;o.setTest(Me),Me&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Et(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(P){M!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),M=P)}function xt(P){P!==e_?(j(t.CULL_FACE),P!==L&&(P===hh?t.cullFace(t.BACK):P===t_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),L=P}function C(P){P!==q&&(X&&t.lineWidth(P),q=P)}function Et(P,Se,ce){P?(j(t.POLYGON_OFFSET_FILL),(z!==Se||K!==ce)&&(t.polygonOffset(Se,ce),z=Se,K=ce)):ue(t.POLYGON_OFFSET_FILL)}function ut(P){P?j(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function St(P){P===void 0&&(P=t.TEXTURE0+Q-1),U!==P&&(t.activeTexture(P),U=P)}function Ce(P,Se,ce){ce===void 0&&(U===null?ce=t.TEXTURE0+Q-1:ce=U);let Me=H[ce];Me===void 0&&(Me={type:void 0,texture:void 0},H[ce]=Me),(Me.type!==P||Me.texture!==Se)&&(U!==ce&&(t.activeTexture(ce),U=ce),t.bindTexture(P,Se||F[P]),Me.type=P,Me.texture=Se)}function y(){const P=H[U];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function ee(){try{t.texSubImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function ie(){try{t.texSubImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function fe(){try{t.texStorage2D(...arguments)}catch(P){at("WebGLState:",P)}}function we(){try{t.texStorage3D(...arguments)}catch(P){at("WebGLState:",P)}}function We(){try{t.texImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function ae(){try{t.texImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function me(P){Z.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function Ae(P){oe.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),oe.copy(P))}function Re(P,Se){let ce=c.get(Se);ce===void 0&&(ce=new WeakMap,c.set(Se,ce));let Me=ce.get(P);Me===void 0&&(Me=t.getUniformBlockIndex(Se,P.name),ce.set(P,Me))}function pe(P,Se){const Me=c.get(Se).get(P);l.get(Se)!==Me&&(t.uniformBlockBinding(Se,Me,P.__bindingPointIndex),l.set(Se,Me))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},U=null,H={},d={},h=new WeakMap,p=[],_=null,v=!1,m=null,f=null,b=null,E=null,T=null,A=null,w=null,R=new Qe(0,0,0),B=0,S=!1,M=null,L=null,q=null,z=null,K=null,Z.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:ue,bindFramebuffer:G,drawBuffers:te,useProgram:de,setBlending:Ne,setMaterial:qe,setFlipSided:Be,setCullFace:xt,setLineWidth:C,setPolygonOffset:Et,setScissorTest:ut,activeTexture:St,bindTexture:Ce,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:We,texImage3D:ae,updateUBOMapping:Re,uniformBlockBinding:pe,texStorage2D:fe,texStorage3D:we,texSubImage2D:ee,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Le,scissor:me,viewport:Ae,reset:Je}}function eS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return p?new OffscreenCanvas(y,g):Ao("canvas")}function v(y,g,I){let ee=1;const ie=Ce(y);if((ie.width>I||ie.height>I)&&(ee=I/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Y=Math.floor(ee*ie.width),Le=Math.floor(ee*ie.height);d===void 0&&(d=_(Y,Le));const fe=g?_(Y,Le):d;return fe.width=Y,fe.height=Le,fe.getContext("2d").drawImage(y,0,0,Y,Le),$e("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Le+")."),fe}else return"data"in y&&$e("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),y;return y}function m(y){return y.generateMipmaps}function f(y){t.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(y,g,I,ee,ie=!1){if(y!==null){if(t[y]!==void 0)return t[y];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Y=g;if(g===t.RED&&(I===t.FLOAT&&(Y=t.R32F),I===t.HALF_FLOAT&&(Y=t.R16F),I===t.UNSIGNED_BYTE&&(Y=t.R8)),g===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.R8UI),I===t.UNSIGNED_SHORT&&(Y=t.R16UI),I===t.UNSIGNED_INT&&(Y=t.R32UI),I===t.BYTE&&(Y=t.R8I),I===t.SHORT&&(Y=t.R16I),I===t.INT&&(Y=t.R32I)),g===t.RG&&(I===t.FLOAT&&(Y=t.RG32F),I===t.HALF_FLOAT&&(Y=t.RG16F),I===t.UNSIGNED_BYTE&&(Y=t.RG8)),g===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.RG8UI),I===t.UNSIGNED_SHORT&&(Y=t.RG16UI),I===t.UNSIGNED_INT&&(Y=t.RG32UI),I===t.BYTE&&(Y=t.RG8I),I===t.SHORT&&(Y=t.RG16I),I===t.INT&&(Y=t.RG32I)),g===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),I===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),I===t.UNSIGNED_INT&&(Y=t.RGB32UI),I===t.BYTE&&(Y=t.RGB8I),I===t.SHORT&&(Y=t.RGB16I),I===t.INT&&(Y=t.RGB32I)),g===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),I===t.UNSIGNED_INT&&(Y=t.RGBA32UI),I===t.BYTE&&(Y=t.RGBA8I),I===t.SHORT&&(Y=t.RGBA16I),I===t.INT&&(Y=t.RGBA32I)),g===t.RGB&&(I===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),g===t.RGBA){const Le=ie?Eo:it.getTransfer(ee);I===t.FLOAT&&(Y=t.RGBA32F),I===t.HALF_FLOAT&&(Y=t.RGBA16F),I===t.UNSIGNED_BYTE&&(Y=Le===ft?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(y,g){let I;return y?g===null||g===vi||g===fa?I=t.DEPTH24_STENCIL8:g===di?I=t.DEPTH32F_STENCIL8:g===ha&&(I=t.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===vi||g===fa?I=t.DEPTH_COMPONENT24:g===di?I=t.DEPTH_COMPONENT32F:g===ha&&(I=t.DEPTH_COMPONENT16),I}function A(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Zt&&y.minFilter!==rn?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function w(y){const g=y.target;g.removeEventListener("dispose",w),B(g),g.isVideoTexture&&u.delete(g)}function R(y){const g=y.target;g.removeEventListener("dispose",R),M(g)}function B(y){const g=i.get(y);if(g.__webglInit===void 0)return;const I=y.source,ee=h.get(I);if(ee){const ie=ee[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(y),Object.keys(ee).length===0&&h.delete(I)}i.remove(y)}function S(y){const g=i.get(y);t.deleteTexture(g.__webglTexture);const I=y.source,ee=h.get(I);delete ee[g.__cacheKey],a.memory.textures--}function M(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(g.__webglFramebuffer[ee]))for(let ie=0;ie<g.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(g.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(g.__webglFramebuffer[ee]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[ee])}else{if(Array.isArray(g.__webglFramebuffer))for(let ee=0;ee<g.__webglFramebuffer.length;ee++)t.deleteFramebuffer(g.__webglFramebuffer[ee]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let ee=0;ee<g.__webglColorRenderbuffer.length;ee++)g.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[ee]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=y.textures;for(let ee=0,ie=I.length;ee<ie;ee++){const Y=i.get(I[ee]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(I[ee])}i.remove(y)}let L=0;function q(){L=0}function z(){const y=L;return y>=r.maxTextures&&$e("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),L+=1,y}function K(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Q(y,g){const I=i.get(y);if(y.isVideoTexture&&ut(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&I.__version!==y.version){const ee=y.image;if(ee===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{F(I,y,g);return}}else y.isExternalTexture&&(I.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+g)}function X(y,g){const I=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){F(I,y,g);return}else y.isExternalTexture&&(I.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+g)}function $(y,g){const I=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){F(I,y,g);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+g)}function re(y,g){const I=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&I.__version!==y.version){j(I,y,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+g)}const U={[Nc]:t.REPEAT,[Ni]:t.CLAMP_TO_EDGE,[Uc]:t.MIRRORED_REPEAT},H={[Zt]:t.NEAREST,[b_]:t.NEAREST_MIPMAP_NEAREST,[Ua]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[bl]:t.LINEAR_MIPMAP_NEAREST,[br]:t.LINEAR_MIPMAP_LINEAR},D={[w_]:t.NEVER,[D_]:t.ALWAYS,[C_]:t.LESS,[Ku]:t.LEQUAL,[R_]:t.EQUAL,[Ju]:t.GEQUAL,[L_]:t.GREATER,[P_]:t.NOTEQUAL};function J(y,g){if(g.type===di&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===rn||g.magFilter===bl||g.magFilter===Ua||g.magFilter===br||g.minFilter===rn||g.minFilter===bl||g.minFilter===Ua||g.minFilter===br)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,U[g.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,U[g.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,U[g.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,H[g.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,H[g.minFilter]),g.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,D[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Zt||g.minFilter!==Ua&&g.minFilter!==br||g.type===di&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Z(y,g){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",w));const ee=g.source;let ie=h.get(ee);ie===void 0&&(ie={},h.set(ee,ie));const Y=K(g);if(Y!==y.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ie[Y].usedTimes++;const Le=ie[y.__cacheKey];Le!==void 0&&(ie[y.__cacheKey].usedTimes--,Le.usedTimes===0&&S(g)),y.__cacheKey=Y,y.__webglTexture=ie[Y].texture}return I}function oe(y,g,I){return Math.floor(Math.floor(y/I)/g)}function ve(y,g,I,ee){const Y=y.updateRanges;if(Y.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,I,ee,g.data);else{Y.sort((ae,me)=>ae.start-me.start);let Le=0;for(let ae=1;ae<Y.length;ae++){const me=Y[Le],Ae=Y[ae],Re=me.start+me.count,pe=oe(Ae.start,g.width,4),Je=oe(me.start,g.width,4);Ae.start<=Re+1&&pe===Je&&oe(Ae.start+Ae.count-1,g.width,4)===pe?me.count=Math.max(me.count,Ae.start+Ae.count-me.start):(++Le,Y[Le]=Ae)}Y.length=Le+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),we=t.getParameter(t.UNPACK_SKIP_PIXELS),We=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ae=0,me=Y.length;ae<me;ae++){const Ae=Y[ae],Re=Math.floor(Ae.start/4),pe=Math.ceil(Ae.count/4),Je=Re%g.width,P=Math.floor(Re/g.width),Se=pe,ce=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,Je,P,Se,ce,I,ee,g.data)}y.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,we),t.pixelStorei(t.UNPACK_SKIP_ROWS,We)}}function F(y,g,I){let ee=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ee=t.TEXTURE_3D);const ie=Z(y,g),Y=g.source;n.bindTexture(ee,y.__webglTexture,t.TEXTURE0+I);const Le=i.get(Y);if(Y.version!==Le.__version||ie===!0){n.activeTexture(t.TEXTURE0+I);const fe=it.getPrimaries(it.workingColorSpace),we=g.colorSpace===nr?null:it.getPrimaries(g.colorSpace),We=g.colorSpace===nr||fe===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ae=v(g.image,!1,r.maxTextureSize);ae=St(g,ae);const me=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type);let Re=E(g.internalFormat,me,Ae,g.colorSpace,g.isVideoTexture);J(ee,g);let pe;const Je=g.mipmaps,P=g.isVideoTexture!==!0,Se=Le.__version===void 0||ie===!0,ce=Y.dataReady,Me=A(g,ae);if(g.isDepthTexture)Re=T(g.format===Er,g.type),Se&&(P?n.texStorage2D(t.TEXTURE_2D,1,Re,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Re,ae.width,ae.height,0,me,Ae,null));else if(g.isDataTexture)if(Je.length>0){P&&Se&&n.texStorage2D(t.TEXTURE_2D,Me,Re,Je[0].width,Je[0].height);for(let se=0,ne=Je.length;se<ne;se++)pe=Je[se],P?ce&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,pe.width,pe.height,me,Ae,pe.data):n.texImage2D(t.TEXTURE_2D,se,Re,pe.width,pe.height,0,me,Ae,pe.data);g.generateMipmaps=!1}else P?(Se&&n.texStorage2D(t.TEXTURE_2D,Me,Re,ae.width,ae.height),ce&&ve(g,ae,me,Ae)):n.texImage2D(t.TEXTURE_2D,0,Re,ae.width,ae.height,0,me,Ae,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Re,Je[0].width,Je[0].height,ae.depth);for(let se=0,ne=Je.length;se<ne;se++)if(pe=Je[se],g.format!==Jn)if(me!==null)if(P){if(ce)if(g.layerUpdates.size>0){const he=Oh(pe.width,pe.height,g.format,g.type);for(const Xe of g.layerUpdates){const Mt=pe.data.subarray(Xe*he/pe.data.BYTES_PER_ELEMENT,(Xe+1)*he/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,Xe,pe.width,pe.height,1,me,Mt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,ae.depth,me,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Re,pe.width,pe.height,ae.depth,0,pe.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,ae.depth,me,Ae,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Re,pe.width,pe.height,ae.depth,0,me,Ae,pe.data)}else{P&&Se&&n.texStorage2D(t.TEXTURE_2D,Me,Re,Je[0].width,Je[0].height);for(let se=0,ne=Je.length;se<ne;se++)pe=Je[se],g.format!==Jn?me!==null?P?ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,pe.width,pe.height,me,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Re,pe.width,pe.height,0,pe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ce&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,pe.width,pe.height,me,Ae,pe.data):n.texImage2D(t.TEXTURE_2D,se,Re,pe.width,pe.height,0,me,Ae,pe.data)}else if(g.isDataArrayTexture)if(P){if(Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Re,ae.width,ae.height,ae.depth),ce)if(g.layerUpdates.size>0){const se=Oh(ae.width,ae.height,g.format,g.type);for(const ne of g.layerUpdates){const he=ae.data.subarray(ne*se/ae.data.BYTES_PER_ELEMENT,(ne+1)*se/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,ae.width,ae.height,1,me,Ae,he)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,Ae,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ae.width,ae.height,ae.depth,0,me,Ae,ae.data);else if(g.isData3DTexture)P?(Se&&n.texStorage3D(t.TEXTURE_3D,Me,Re,ae.width,ae.height,ae.depth),ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,Ae,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ae.width,ae.height,ae.depth,0,me,Ae,ae.data);else if(g.isFramebufferTexture){if(Se)if(P)n.texStorage2D(t.TEXTURE_2D,Me,Re,ae.width,ae.height);else{let se=ae.width,ne=ae.height;for(let he=0;he<Me;he++)n.texImage2D(t.TEXTURE_2D,he,Re,se,ne,0,me,Ae,null),se>>=1,ne>>=1}}else if(Je.length>0){if(P&&Se){const se=Ce(Je[0]);n.texStorage2D(t.TEXTURE_2D,Me,Re,se.width,se.height)}for(let se=0,ne=Je.length;se<ne;se++)pe=Je[se],P?ce&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,me,Ae,pe):n.texImage2D(t.TEXTURE_2D,se,Re,me,Ae,pe);g.generateMipmaps=!1}else if(P){if(Se){const se=Ce(ae);n.texStorage2D(t.TEXTURE_2D,Me,Re,se.width,se.height)}ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Ae,ae)}else n.texImage2D(t.TEXTURE_2D,0,Re,me,Ae,ae);m(g)&&f(ee),Le.__version=Y.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function j(y,g,I){if(g.image.length!==6)return;const ee=Z(y,g),ie=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+I);const Y=i.get(ie);if(ie.version!==Y.__version||ee===!0){n.activeTexture(t.TEXTURE0+I);const Le=it.getPrimaries(it.workingColorSpace),fe=g.colorSpace===nr?null:it.getPrimaries(g.colorSpace),we=g.colorSpace===nr||Le===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const We=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!We&&!ae?me[ne]=v(g.image[ne],!0,r.maxCubemapSize):me[ne]=ae?g.image[ne].image:g.image[ne],me[ne]=St(g,me[ne]);const Ae=me[0],Re=s.convert(g.format,g.colorSpace),pe=s.convert(g.type),Je=E(g.internalFormat,Re,pe,g.colorSpace),P=g.isVideoTexture!==!0,Se=Y.__version===void 0||ee===!0,ce=ie.dataReady;let Me=A(g,Ae);J(t.TEXTURE_CUBE_MAP,g);let se;if(We){P&&Se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Je,Ae.width,Ae.height);for(let ne=0;ne<6;ne++){se=me[ne].mipmaps;for(let he=0;he<se.length;he++){const Xe=se[he];g.format!==Jn?Re!==null?P?ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,0,0,Xe.width,Xe.height,Re,Xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,Je,Xe.width,Xe.height,0,Xe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,0,0,Xe.width,Xe.height,Re,pe,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,Je,Xe.width,Xe.height,0,Re,pe,Xe.data)}}}else{if(se=g.mipmaps,P&&Se){se.length>0&&Me++;const ne=Ce(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Je,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ae){P?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,Re,pe,me[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Je,me[ne].width,me[ne].height,0,Re,pe,me[ne].data);for(let he=0;he<se.length;he++){const Mt=se[he].image[ne].image;P?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,0,0,Mt.width,Mt.height,Re,pe,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,Je,Mt.width,Mt.height,0,Re,pe,Mt.data)}}else{P?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,pe,me[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Je,Re,pe,me[ne]);for(let he=0;he<se.length;he++){const Xe=se[he];P?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,0,0,Re,pe,Xe.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,Je,Re,pe,Xe.image[ne])}}}m(g)&&f(t.TEXTURE_CUBE_MAP),Y.__version=ie.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ue(y,g,I,ee,ie,Y){const Le=s.convert(I.format,I.colorSpace),fe=s.convert(I.type),we=E(I.internalFormat,Le,fe,I.colorSpace),We=i.get(g),ae=i.get(I);if(ae.__renderTarget=g,!We.__hasExternalTextures){const me=Math.max(1,g.width>>Y),Ae=Math.max(1,g.height>>Y);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Y,we,me,Ae,g.depth,0,Le,fe,null):n.texImage2D(ie,Y,we,me,Ae,0,Le,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),Et(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ie,ae.__webglTexture,0,C(g)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ie,ae.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function G(y,g,I){if(t.bindRenderbuffer(t.RENDERBUFFER,y),g.depthBuffer){const ee=g.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,Y=T(g.stencilBuffer,ie),Le=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(g),Y,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(g),Y,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Y,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,y)}else{const ee=g.textures;for(let ie=0;ie<ee.length;ie++){const Y=ee[ie],Le=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),we=E(Y.internalFormat,Le,fe,Y.colorSpace);Et(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(g),we,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(g),we,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,we,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function te(y,g,I){const ee=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(g.depthTexture);if(ie.__renderTarget=g,(!ie.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ee){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),ie.__webglTexture===void 0){ie.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),J(t.TEXTURE_CUBE_MAP,g.depthTexture);const We=s.convert(g.depthTexture.format),ae=s.convert(g.depthTexture.type);let me;g.depthTexture.format===Vi?me=t.DEPTH_COMPONENT24:g.depthTexture.format===Er&&(me=t.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,me,g.width,g.height,0,We,ae,null)}}else Q(g.depthTexture,0);const Y=ie.__webglTexture,Le=C(g),fe=ee?t.TEXTURE_CUBE_MAP_POSITIVE_X+I:t.TEXTURE_2D,we=g.depthTexture.format===Er?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vi)Et(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,we,fe,Y,0,Le):t.framebufferTexture2D(t.FRAMEBUFFER,we,fe,Y,0);else if(g.depthTexture.format===Er)Et(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,we,fe,Y,0,Le):t.framebufferTexture2D(t.FRAMEBUFFER,we,fe,Y,0);else throw new Error("Unknown depthTexture format")}function de(y){const g=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const ee=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),ee){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=ee}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let ee=0;ee<6;ee++)te(g.__webglFramebuffer[ee],y,ee);else{const ee=y.texture.mipmaps;ee&&ee.length>0?te(g.__webglFramebuffer[0],y,0):te(g.__webglFramebuffer,y,0)}else if(I){g.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[ee]),g.__webglDepthbuffer[ee]===void 0)g.__webglDepthbuffer[ee]=t.createRenderbuffer(),G(g.__webglDepthbuffer[ee],y,!1);else{const ie=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Y)}}else{const ee=y.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),G(g.__webglDepthbuffer,y,!1);else{const ie=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Y)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(y,g,I){const ee=i.get(y);g!==void 0&&ue(ee.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&de(y)}function ye(y){const g=y.texture,I=i.get(y),ee=i.get(g);y.addEventListener("dispose",R);const ie=y.textures,Y=y.isWebGLCubeRenderTarget===!0,Le=ie.length>1;if(Le||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=g.version,a.memory.textures++),Y){I.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[fe]=[];for(let we=0;we<g.mipmaps.length;we++)I.__webglFramebuffer[fe][we]=t.createFramebuffer()}else I.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let fe=0;fe<g.mipmaps.length;fe++)I.__webglFramebuffer[fe]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Le)for(let fe=0,we=ie.length;fe<we;fe++){const We=i.get(ie[fe]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),a.memory.textures++)}if(y.samples>0&&Et(y)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const we=ie[fe];I.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[fe]);const We=s.convert(we.format,we.colorSpace),ae=s.convert(we.type),me=E(we.internalFormat,We,ae,we.colorSpace,y.isXRRenderTarget===!0),Ae=C(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,me,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,I.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),G(I.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),J(t.TEXTURE_CUBE_MAP,g);for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)ue(I.__webglFramebuffer[fe][we],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,we);else ue(I.__webglFramebuffer[fe],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(g)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let fe=0,we=ie.length;fe<we;fe++){const We=ie[fe],ae=i.get(We);let me=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(me=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,ae.__webglTexture),J(me,We),ue(I.__webglFramebuffer,y,We,t.COLOR_ATTACHMENT0+fe,me,0),m(We)&&f(me)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(fe=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),J(fe,g),g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)ue(I.__webglFramebuffer[we],y,g,t.COLOR_ATTACHMENT0,fe,we);else ue(I.__webglFramebuffer,y,g,t.COLOR_ATTACHMENT0,fe,0);m(g)&&f(fe),n.unbindTexture()}y.depthBuffer&&de(y)}function Ne(y){const g=y.textures;for(let I=0,ee=g.length;I<ee;I++){const ie=g[I];if(m(ie)){const Y=b(y),Le=i.get(ie).__webglTexture;n.bindTexture(Y,Le),f(Y),n.unbindTexture()}}}const qe=[],Be=[];function xt(y){if(y.samples>0){if(Et(y)===!1){const g=y.textures,I=y.width,ee=y.height;let ie=t.COLOR_BUFFER_BIT;const Y=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(y),fe=g.length>1;if(fe)for(let We=0;We<g.length;We++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const we=y.texture.mipmaps;we&&we.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let We=0;We<g.length;We++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[We]);const ae=i.get(g[We]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,I,ee,0,0,I,ee,ie,t.NEAREST),l===!0&&(qe.length=0,Be.length=0,qe.push(t.COLOR_ATTACHMENT0+We),y.depthBuffer&&y.resolveDepthBuffer===!1&&(qe.push(Y),Be.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,qe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let We=0;We<g.length;We++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,Le.__webglColorRenderbuffer[We]);const ae=i.get(g[We]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function C(y){return Math.min(r.maxSamples,y.samples)}function Et(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ut(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function St(y,g){const I=y.colorSpace,ee=y.format,ie=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==gs&&I!==nr&&(it.getTransfer(I)===ft?(ee!==Jn||ie!==zn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",I)),g}function Ce(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=re,this.rebindTextures=Ie,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tS(t,e){function n(i,r=nr){let s;const a=it.getTransfer(r);if(i===zn)return t.UNSIGNED_BYTE;if(i===qu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Xp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===$p)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wp)return t.BYTE;if(i===qp)return t.SHORT;if(i===ha)return t.UNSIGNED_SHORT;if(i===Wu)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===ki)return t.HALF_FLOAT;if(i===jp)return t.ALPHA;if(i===Yp)return t.RGB;if(i===Jn)return t.RGBA;if(i===Vi)return t.DEPTH_COMPONENT;if(i===Er)return t.DEPTH_STENCIL;if(i===Kp)return t.RED;if(i===$u)return t.RED_INTEGER;if(i===ms)return t.RG;if(i===ju)return t.RG_INTEGER;if(i===Yu)return t.RGBA_INTEGER;if(i===po||i===mo||i===go||i===_o)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fc||i===Oc||i===Bc||i===kc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vc||i===zc||i===Gc||i===Hc||i===Wc||i===qc||i===Xc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vc||i===zc)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hc)return s.COMPRESSED_R11_EAC;if(i===Wc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===qc)return s.COMPRESSED_RG11_EAC;if(i===Xc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$c||i===jc||i===Yc||i===Kc||i===Jc||i===Zc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$c)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===iu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ru)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===su)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===au)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ou||i===lu||i===cu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ou)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uu||i===du||i===hu||i===fu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===uu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===du)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const nS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iS=`
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

}`;class rS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new lm(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qn({vertexShader:nS,fragmentShader:iS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xi(new Ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sS extends Ls{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new rS,f={},b=n.getContextAttributes();let E=null,T=null;const A=[],w=[],R=new ct;let B=null;const S=new Yn;S.viewport=new Ut;const M=new Yn;M.viewport=new Ut;const L=[S,M],q=new mv;let z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let j=A[F];return j===void 0&&(j=new Xl,A[F]=j),j.getTargetRaySpace()},this.getControllerGrip=function(F){let j=A[F];return j===void 0&&(j=new Xl,A[F]=j),j.getGripSpace()},this.getHand=function(F){let j=A[F];return j===void 0&&(j=new Xl,A[F]=j),j.getHandSpace()};function Q(F){const j=w.indexOf(F.inputSource);if(j===-1)return;const ue=A[j];ue!==void 0&&(ue.update(F.inputSource,F.frame,c||a),ue.dispatchEvent({type:F.type,data:F.inputSource}))}function X(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",$);for(let F=0;F<A.length;F++){const j=w[F];j!==null&&(w[F]=null,A[F].disconnect(j))}z=null,K=null,m.reset();for(const F in f)delete f[F];e.setRenderTarget(E),p=null,h=null,d=null,r=null,T=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",X),r.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,G=null,te=null;b.depth&&(te=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=b.stencil?Er:Vi,G=b.stencil?fa:vi);const de={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new mi(h.textureWidth,h.textureHeight,{format:Jn,type:zn,depthTexture:new ma(h.textureWidth,h.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ue={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new mi(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(F){for(let j=0;j<F.removed.length;j++){const ue=F.removed[j],G=w.indexOf(ue);G>=0&&(w[G]=null,A[G].disconnect(ue))}for(let j=0;j<F.added.length;j++){const ue=F.added[j];let G=w.indexOf(ue);if(G===-1){for(let de=0;de<A.length;de++)if(de>=w.length){w.push(ue),G=de;break}else if(w[de]===null){w[de]=ue,G=de;break}if(G===-1)break}const te=A[G];te&&te.connect(ue)}}const re=new V,U=new V;function H(F,j,ue){re.setFromMatrixPosition(j.matrixWorld),U.setFromMatrixPosition(ue.matrixWorld);const G=re.distanceTo(U),te=j.projectionMatrix.elements,de=ue.projectionMatrix.elements,Ie=te[14]/(te[10]-1),ye=te[14]/(te[10]+1),Ne=(te[9]+1)/te[5],qe=(te[9]-1)/te[5],Be=(te[8]-1)/te[0],xt=(de[8]+1)/de[0],C=Ie*Be,Et=Ie*xt,ut=G/(-Be+xt),St=ut*-Be;if(j.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(St),F.translateZ(ut),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),te[10]===-1)F.projectionMatrix.copy(j.projectionMatrix),F.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ce=Ie+ut,y=ye+ut,g=C-St,I=Et+(G-St),ee=Ne*ye/y*Ce,ie=qe*ye/y*Ce;F.projectionMatrix.makePerspective(g,I,ee,ie,Ce,y),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function D(F,j){j===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(j.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let j=F.near,ue=F.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),q.near=M.near=S.near=j,q.far=M.far=S.far=ue,(z!==q.near||K!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),z=q.near,K=q.far),q.layers.mask=F.layers.mask|6,S.layers.mask=q.layers.mask&3,M.layers.mask=q.layers.mask&5;const G=F.parent,te=q.cameras;D(q,G);for(let de=0;de<te.length;de++)D(te[de],G);te.length===2?H(q,S,M):q.projectionMatrix.copy(S.projectionMatrix),J(F,q,G)};function J(F,j,ue){ue===null?F.matrix.copy(j.matrixWorld):(F.matrix.copy(ue.matrixWorld),F.matrix.invert(),F.matrix.multiply(j.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(j.projectionMatrix),F.projectionMatrixInverse.copy(j.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=pu*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(F){return f[F]};let Z=null;function oe(F,j){if(u=j.getViewerPose(c||a),_=j,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let G=!1;ue.length!==q.cameras.length&&(q.cameras.length=0,G=!0);for(let ye=0;ye<ue.length;ye++){const Ne=ue[ye];let qe=null;if(p!==null)qe=p.getViewport(Ne);else{const xt=d.getViewSubImage(h,Ne);qe=xt.viewport,ye===0&&(e.setRenderTargetTextures(T,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(T))}let Be=L[ye];Be===void 0&&(Be=new Yn,Be.layers.enable(ye),Be.viewport=new Ut,L[ye]=Be),Be.matrix.fromArray(Ne.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ne.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(qe.x,qe.y,qe.width,qe.height),ye===0&&(q.matrix.copy(Be.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),G===!0&&q.cameras.push(Be)}const te=r.enabledFeatures;if(te&&te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const ye=d.getDepthInformation(ue[0]);ye&&ye.isValid&&ye.texture&&m.init(ye,r.renderState)}if(te&&te.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let ye=0;ye<ue.length;ye++){const Ne=ue[ye].camera;if(Ne){let qe=f[Ne];qe||(qe=new lm,f[Ne]=qe);const Be=d.getCameraImage(Ne);qe.sourceTexture=Be}}}}for(let ue=0;ue<A.length;ue++){const G=w[ue],te=A[ue];G!==null&&te!==void 0&&te.update(G,j,c||a)}Z&&Z(F,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const ve=new um;ve.setAnimationLoop(oe),this.setAnimationLoop=function(F){Z=F},this.dispose=function(){}}}const _r=new zi,aS=new zt;function oS(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,rm(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,E,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===_n&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===_n&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f),E=b.envMap,T=b.envMapRotation;E&&(m.envMap.value=E,_r.copy(T),_r.x*=-1,_r.y*=-1,_r.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),m.envMapRotation.value.setFromMatrix4(aS.makeRotationFromEuler(_r)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=E*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lS(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const T=E.program;i.uniformBlockBinding(b,T)}function c(b,E){let T=r[b.id];T===void 0&&(_(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(b,A);const w=e.render.frame;s[b.id]!==w&&(h(b),s[b.id]=w)}function u(b){const E=d();b.__bindingPointIndex=E;const T=t.createBuffer(),A=b.__size,w=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,T),T}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const E=r[b.id],T=b.uniforms,A=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let w=0,R=T.length;w<R;w++){const B=Array.isArray(T[w])?T[w]:[T[w]];for(let S=0,M=B.length;S<M;S++){const L=B[S];if(p(L,w,S,A)===!0){const q=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let Q=0;Q<z.length;Q++){const X=z[Q],$=v(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,q+K,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,K),K+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(b,E,T,A){const w=b.value,R=E+"_"+T;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const B=A[R];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return A[R]=w,!0}else if(B.equals(w)===!1)return B.copy(w),!0}return!1}function _(b){const E=b.uniforms;let T=0;const A=16;for(let R=0,B=E.length;R<B;R++){const S=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,L=S.length;M<L;M++){const q=S[M],z=Array.isArray(q.value)?q.value:[q.value];for(let K=0,Q=z.length;K<Q;K++){const X=z[K],$=v(X),re=T%A,U=re%$.boundary,H=re+U;T+=U,H!==0&&A-H<$.storage&&(T+=A-H),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=$.storage}}}const w=T%A;return w>0&&(T+=A-w),b.__size=T,b.__cache={},this}function v(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const cS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ri=null;function uS(){return ri===null&&(ri=new ov(cS,16,16,ms,ki),ri.name="DFG_LUT",ri.minFilter=rn,ri.magFilter=rn,ri.wrapS=Ni,ri.wrapT=Ni,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class dS{constructor(e={}){const{canvas:n=I_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=zn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const v=p,m=new Set([Yu,ju,$u]),f=new Set([zn,vi,ha,fa,qu,Xu]),b=new Uint32Array(4),E=new Int32Array(4);let T=null,A=null;const w=[],R=[];let B=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let M=!1;this._outputColorSpace=Vn;let L=0,q=0,z=null,K=-1,Q=null;const X=new Ut,$=new Ut;let re=null;const U=new Qe(0);let H=0,D=n.width,J=n.height,Z=1,oe=null,ve=null;const F=new Ut(0,0,D,J),j=new Ut(0,0,D,J);let ue=!1;const G=new om;let te=!1,de=!1;const Ie=new zt,ye=new V,Ne=new Ut,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function xt(){return z===null?Z:1}let C=i;function Et(x,N){return n.getContext(x,N)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hu}`),n.addEventListener("webglcontextlost",Xe,!1),n.addEventListener("webglcontextrestored",Mt,!1),n.addEventListener("webglcontextcreationerror",dt,!1),C===null){const N="webgl2";if(C=Et(N,x),C===null)throw Et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw at("WebGLRenderer: "+x.message),x}let ut,St,Ce,y,g,I,ee,ie,Y,Le,fe,we,We,ae,me,Ae,Re,pe,Je,P,Se,ce,Me,se;function ne(){ut=new ux(C),ut.init(),ce=new tS(C,ut),St=new tx(C,ut,e,ce),Ce=new Q3(C,ut),St.reversedDepthBuffer&&h&&Ce.buffers.depth.setReversed(!0),y=new fx(C),g=new B3,I=new eS(C,ut,Ce,g,St,ce,y),ee=new ix(S),ie=new cx(S),Y=new _v(C),Me=new Q2(C,Y),Le=new dx(C,Y,y,Me),fe=new mx(C,Le,Y,y),Je=new px(C,St,I),Ae=new nx(g),we=new O3(S,ee,ie,ut,St,Me,Ae),We=new oS(S,g),ae=new V3,me=new X3(ut),pe=new Z2(S,ee,ie,Ce,fe,_,l),Re=new J3(S,fe,St),se=new lS(C,y,St,Ce),P=new ex(C,ut,y),Se=new hx(C,ut,y),y.programs=we.programs,S.capabilities=St,S.extensions=ut,S.properties=g,S.renderLists=ae,S.shadowMap=Re,S.state=Ce,S.info=y}ne(),v!==zn&&(B=new _x(v,n.width,n.height,r,s));const he=new sS(S,C);this.xr=he,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=ut.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ut.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(x){x!==void 0&&(Z=x,this.setSize(D,J,!1))},this.getSize=function(x){return x.set(D,J)},this.setSize=function(x,N,W=!0){if(he.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}D=x,J=N,n.width=Math.floor(x*Z),n.height=Math.floor(N*Z),W===!0&&(n.style.width=x+"px",n.style.height=N+"px"),B!==null&&B.setSize(n.width,n.height),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(D*Z,J*Z).floor()},this.setDrawingBufferSize=function(x,N,W){D=x,J=N,Z=W,n.width=Math.floor(x*W),n.height=Math.floor(N*W),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(v===zn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(X)},this.getViewport=function(x){return x.copy(F)},this.setViewport=function(x,N,W,k){x.isVector4?F.set(x.x,x.y,x.z,x.w):F.set(x,N,W,k),Ce.viewport(X.copy(F).multiplyScalar(Z).round())},this.getScissor=function(x){return x.copy(j)},this.setScissor=function(x,N,W,k){x.isVector4?j.set(x.x,x.y,x.z,x.w):j.set(x,N,W,k),Ce.scissor($.copy(j).multiplyScalar(Z).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(x){Ce.setScissorTest(ue=x)},this.setOpaqueSort=function(x){oe=x},this.setTransparentSort=function(x){ve=x},this.getClearColor=function(x){return x.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,W=!0){let k=0;if(x){let O=!1;if(z!==null){const ge=z.texture.format;O=m.has(ge)}if(O){const ge=z.texture.type,be=f.has(ge),xe=pe.getClearColor(),Te=pe.getClearAlpha(),Ue=xe.r,He=xe.g,Ve=xe.b;be?(b[0]=Ue,b[1]=He,b[2]=Ve,b[3]=Te,C.clearBufferuiv(C.COLOR,0,b)):(E[0]=Ue,E[1]=He,E[2]=Ve,E[3]=Te,C.clearBufferiv(C.COLOR,0,E))}else k|=C.COLOR_BUFFER_BIT}N&&(k|=C.DEPTH_BUFFER_BIT),W&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Xe,!1),n.removeEventListener("webglcontextrestored",Mt,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),pe.dispose(),ae.dispose(),me.dispose(),g.dispose(),ee.dispose(),ie.dispose(),fe.dispose(),Me.dispose(),se.dispose(),we.dispose(),he.dispose(),he.removeEventListener("sessionstart",sh),he.removeEventListener("sessionend",ah),ur.stop()};function Xe(x){x.preventDefault(),Sh("WebGLRenderer: Context Lost."),M=!0}function Mt(){Sh("WebGLRenderer: Context Restored."),M=!1;const x=y.autoReset,N=Re.enabled,W=Re.autoUpdate,k=Re.needsUpdate,O=Re.type;ne(),y.autoReset=x,Re.enabled=N,Re.autoUpdate=W,Re.needsUpdate=k,Re.type=O}function dt(x){at("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ii(x){const N=x.target;N.removeEventListener("dispose",ii),Ai(N)}function Ai(x){Xg(x),g.remove(x)}function Xg(x){const N=g.get(x).programs;N!==void 0&&(N.forEach(function(W){we.releaseProgram(W)}),x.isShaderMaterial&&we.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,W,k,O,ge){N===null&&(N=qe);const be=O.isMesh&&O.matrixWorld.determinant()<0,xe=jg(x,N,W,k,O);Ce.setMaterial(k,be);let Te=W.index,Ue=1;if(k.wireframe===!0){if(Te=Le.getWireframeAttribute(W),Te===void 0)return;Ue=2}const He=W.drawRange,Ve=W.attributes.position;let Ze=He.start*Ue,pt=(He.start+He.count)*Ue;ge!==null&&(Ze=Math.max(Ze,ge.start*Ue),pt=Math.min(pt,(ge.start+ge.count)*Ue)),Te!==null?(Ze=Math.max(Ze,0),pt=Math.min(pt,Te.count)):Ve!=null&&(Ze=Math.max(Ze,0),pt=Math.min(pt,Ve.count));const It=pt-Ze;if(It<0||It===1/0)return;Me.setup(O,k,xe,W,Te);let Nt,gt=P;if(Te!==null&&(Nt=Y.get(Te),gt=Se,gt.setIndex(Nt)),O.isMesh)k.wireframe===!0?(Ce.setLineWidth(k.wireframeLinewidth*xt()),gt.setMode(C.LINES)):gt.setMode(C.TRIANGLES);else if(O.isLine){let ze=k.linewidth;ze===void 0&&(ze=1),Ce.setLineWidth(ze*xt()),O.isLineSegments?gt.setMode(C.LINES):O.isLineLoop?gt.setMode(C.LINE_LOOP):gt.setMode(C.LINE_STRIP)}else O.isPoints?gt.setMode(C.POINTS):O.isSprite&&gt.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)pa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))gt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ze=O._multiDrawStarts,ht=O._multiDrawCounts,st=O._multiDrawCount,xn=Te?Y.get(Te).bytesPerElement:1,kr=g.get(k).currentProgram.getUniforms();for(let Sn=0;Sn<st;Sn++)kr.setValue(C,"_gl_DrawID",Sn),gt.render(ze[Sn]/xn,ht[Sn])}else if(O.isInstancedMesh)gt.renderInstances(Ze,It,O.count);else if(W.isInstancedBufferGeometry){const ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ht=Math.min(W.instanceCount,ze);gt.renderInstances(Ze,It,ht)}else gt.render(Ze,It)};function rh(x,N,W){x.transparent===!0&&x.side===Di&&x.forceSinglePass===!1?(x.side=_n,x.needsUpdate=!0,Na(x,N,W),x.side=ar,x.needsUpdate=!0,Na(x,N,W),x.side=Di):Na(x,N,W)}this.compile=function(x,N,W=null){W===null&&(W=x),A=me.get(W),A.init(N),R.push(A),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),x!==W&&x.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights();const k=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ge=O.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){const xe=ge[be];rh(xe,W,O),k.add(xe)}else rh(ge,W,O),k.add(ge)}),A=R.pop(),k},this.compileAsync=function(x,N,W=null){const k=this.compile(x,N,W);return new Promise(O=>{function ge(){if(k.forEach(function(be){g.get(be).currentProgram.isReady()&&k.delete(be)}),k.size===0){O(x);return}setTimeout(ge,10)}ut.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Sl=null;function $g(x){Sl&&Sl(x)}function sh(){ur.stop()}function ah(){ur.start()}const ur=new um;ur.setAnimationLoop($g),typeof self<"u"&&ur.setContext(self),this.setAnimationLoop=function(x){Sl=x,he.setAnimationLoop(x),x===null?ur.stop():ur.start()},he.addEventListener("sessionstart",sh),he.addEventListener("sessionend",ah),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const W=he.enabled===!0&&he.isPresenting===!0,k=B!==null&&(z===null||W)&&B.begin(S,z);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,N,z),A=me.get(x,R.length),A.init(N),R.push(A),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(Ie,hi,N.reversedDepth),de=this.localClippingEnabled,te=Ae.init(this.clippingPlanes,de),T=ae.get(x,w.length),T.init(),w.push(T),he.enabled===!0&&he.isPresenting===!0){const be=S.xr.getDepthSensingMesh();be!==null&&Ml(be,N,-1/0,S.sortObjects)}Ml(x,N,0,S.sortObjects),T.finish(),S.sortObjects===!0&&T.sort(oe,ve),Be=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Be&&pe.addToRenderList(T,x),this.info.render.frame++,te===!0&&Ae.beginShadows();const O=A.state.shadowsArray;if(Re.render(O,x,N),te===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&B.hasRenderPass())===!1){const be=T.opaque,xe=T.transmissive;if(A.setupLights(),N.isArrayCamera){const Te=N.cameras;if(xe.length>0)for(let Ue=0,He=Te.length;Ue<He;Ue++){const Ve=Te[Ue];lh(be,xe,x,Ve)}Be&&pe.render(x);for(let Ue=0,He=Te.length;Ue<He;Ue++){const Ve=Te[Ue];oh(T,x,Ve,Ve.viewport)}}else xe.length>0&&lh(be,xe,x,N),Be&&pe.render(x),oh(T,x,N)}z!==null&&q===0&&(I.updateMultisampleRenderTarget(z),I.updateRenderTargetMipmap(z)),k&&B.end(S),x.isScene===!0&&x.onAfterRender(S,x,N),Me.resetDefaultState(),K=-1,Q=null,R.pop(),R.length>0?(A=R[R.length-1],te===!0&&Ae.setGlobalState(S.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?T=w[w.length-1]:T=null};function Ml(x,N,W,k){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)W=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)A.pushLight(x),x.castShadow&&A.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||G.intersectsSprite(x)){k&&Ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ie);const be=fe.update(x),xe=x.material;xe.visible&&T.push(x,be,xe,W,Ne.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||G.intersectsObject(x))){const be=fe.update(x),xe=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ne.copy(x.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ne.copy(be.boundingSphere.center)),Ne.applyMatrix4(x.matrixWorld).applyMatrix4(Ie)),Array.isArray(xe)){const Te=be.groups;for(let Ue=0,He=Te.length;Ue<He;Ue++){const Ve=Te[Ue],Ze=xe[Ve.materialIndex];Ze&&Ze.visible&&T.push(x,be,Ze,W,Ne.z,Ve)}}else xe.visible&&T.push(x,be,xe,W,Ne.z,null)}}const ge=x.children;for(let be=0,xe=ge.length;be<xe;be++)Ml(ge[be],N,W,k)}function oh(x,N,W,k){const{opaque:O,transmissive:ge,transparent:be}=x;A.setupLightsView(W),te===!0&&Ae.setGlobalState(S.clippingPlanes,W),k&&Ce.viewport(X.copy(k)),O.length>0&&Ia(O,N,W),ge.length>0&&Ia(ge,N,W),be.length>0&&Ia(be,N,W),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function lh(x,N,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){const Ze=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new mi(1,1,{generateMipmaps:!0,type:Ze?ki:zn,minFilter:br,samples:St.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const ge=A.state.transmissionRenderTarget[k.id],be=k.viewport||X;ge.setSize(be.z*S.transmissionResolutionScale,be.w*S.transmissionResolutionScale);const xe=S.getRenderTarget(),Te=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(ge),S.getClearColor(U),H=S.getClearAlpha(),H<1&&S.setClearColor(16777215,.5),S.clear(),Be&&pe.render(W);const He=S.toneMapping;S.toneMapping=pi;const Ve=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),te===!0&&Ae.setGlobalState(S.clippingPlanes,k),Ia(x,W,k),I.updateMultisampleRenderTarget(ge),I.updateRenderTargetMipmap(ge),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let pt=0,It=N.length;pt<It;pt++){const Nt=N[pt],{object:gt,geometry:ze,material:ht,group:st}=Nt;if(ht.side===Di&&gt.layers.test(k.layers)){const xn=ht.side;ht.side=_n,ht.needsUpdate=!0,ch(gt,W,k,ze,ht,st),ht.side=xn,ht.needsUpdate=!0,Ze=!0}}Ze===!0&&(I.updateMultisampleRenderTarget(ge),I.updateRenderTargetMipmap(ge))}S.setRenderTarget(xe,Te,Ue),S.setClearColor(U,H),Ve!==void 0&&(k.viewport=Ve),S.toneMapping=He}function Ia(x,N,W){const k=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ge=x.length;O<ge;O++){const be=x[O],{object:xe,geometry:Te,group:Ue}=be;let He=be.material;He.allowOverride===!0&&k!==null&&(He=k),xe.layers.test(W.layers)&&ch(xe,N,W,Te,He,Ue)}}function ch(x,N,W,k,O,ge){x.onBeforeRender(S,N,W,k,O,ge),x.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(S,N,W,k,x,ge),O.transparent===!0&&O.side===Di&&O.forceSinglePass===!1?(O.side=_n,O.needsUpdate=!0,S.renderBufferDirect(W,N,k,O,x,ge),O.side=ar,O.needsUpdate=!0,S.renderBufferDirect(W,N,k,O,x,ge),O.side=Di):S.renderBufferDirect(W,N,k,O,x,ge),x.onAfterRender(S,N,W,k,O,ge)}function Na(x,N,W){N.isScene!==!0&&(N=qe);const k=g.get(x),O=A.state.lights,ge=A.state.shadowsArray,be=O.state.version,xe=we.getParameters(x,O.state,ge,N,W),Te=we.getProgramCacheKey(xe);let Ue=k.programs;k.environment=x.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(x.isMeshStandardMaterial?ie:ee).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Ue===void 0&&(x.addEventListener("dispose",ii),Ue=new Map,k.programs=Ue);let He=Ue.get(Te);if(He!==void 0){if(k.currentProgram===He&&k.lightsStateVersion===be)return dh(x,xe),He}else xe.uniforms=we.getUniforms(x),x.onBeforeCompile(xe,S),He=we.acquireProgram(xe,Te),Ue.set(Te,He),k.uniforms=xe.uniforms;const Ve=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ve.clippingPlanes=Ae.uniform),dh(x,xe),k.needsLights=Kg(x),k.lightsStateVersion=be,k.needsLights&&(Ve.ambientLightColor.value=O.state.ambient,Ve.lightProbe.value=O.state.probe,Ve.directionalLights.value=O.state.directional,Ve.directionalLightShadows.value=O.state.directionalShadow,Ve.spotLights.value=O.state.spot,Ve.spotLightShadows.value=O.state.spotShadow,Ve.rectAreaLights.value=O.state.rectArea,Ve.ltc_1.value=O.state.rectAreaLTC1,Ve.ltc_2.value=O.state.rectAreaLTC2,Ve.pointLights.value=O.state.point,Ve.pointLightShadows.value=O.state.pointShadow,Ve.hemisphereLights.value=O.state.hemi,Ve.directionalShadowMap.value=O.state.directionalShadowMap,Ve.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ve.spotShadowMap.value=O.state.spotShadowMap,Ve.spotLightMatrix.value=O.state.spotLightMatrix,Ve.spotLightMap.value=O.state.spotLightMap,Ve.pointShadowMap.value=O.state.pointShadowMap,Ve.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=He,k.uniformsList=null,He}function uh(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=vo.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function dh(x,N){const W=g.get(x);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function jg(x,N,W,k,O){N.isScene!==!0&&(N=qe),I.resetTextureUnits();const ge=N.fog,be=k.isMeshStandardMaterial?N.environment:null,xe=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:gs,Te=(k.isMeshStandardMaterial?ie:ee).get(k.envMap||be),Ue=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ve=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,pt=!!W.morphAttributes.color;let It=pi;k.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(It=S.toneMapping);const Nt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=Nt!==void 0?Nt.length:0,ze=g.get(k),ht=A.state.lights;if(te===!0&&(de===!0||x!==Q)){const ln=x===Q&&k.id===K;Ae.setState(k,x,ln)}let st=!1;k.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ht.state.version||ze.outputColorSpace!==xe||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isBatchedMesh&&ze.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ze.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ze.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ze.instancingMorph===!1&&O.morphTexture!==null||ze.envMap!==Te||k.fog===!0&&ze.fog!==ge||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ae.numPlanes||ze.numIntersection!==Ae.numIntersection)||ze.vertexAlphas!==Ue||ze.vertexTangents!==He||ze.morphTargets!==Ve||ze.morphNormals!==Ze||ze.morphColors!==pt||ze.toneMapping!==It||ze.morphTargetsCount!==gt)&&(st=!0):(st=!0,ze.__version=k.version);let xn=ze.currentProgram;st===!0&&(xn=Na(k,N,O));let kr=!1,Sn=!1,Xs=!1;const yt=xn.getUniforms(),fn=ze.uniforms;if(Ce.useProgram(xn.program)&&(kr=!0,Sn=!0,Xs=!0),k.id!==K&&(K=k.id,Sn=!0),kr||Q!==x){Ce.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),yt.setValue(C,"projectionMatrix",x.projectionMatrix),yt.setValue(C,"viewMatrix",x.matrixWorldInverse);const pn=yt.map.cameraPosition;pn!==void 0&&pn.setValue(C,ye.setFromMatrixPosition(x.matrixWorld)),St.logarithmicDepthBuffer&&yt.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&yt.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,Sn=!0,Xs=!0)}if(ze.needsLights&&(ht.state.directionalShadowMap.length>0&&yt.setValue(C,"directionalShadowMap",ht.state.directionalShadowMap,I),ht.state.spotShadowMap.length>0&&yt.setValue(C,"spotShadowMap",ht.state.spotShadowMap,I),ht.state.pointShadowMap.length>0&&yt.setValue(C,"pointShadowMap",ht.state.pointShadowMap,I)),O.isSkinnedMesh){yt.setOptional(C,O,"bindMatrix"),yt.setOptional(C,O,"bindMatrixInverse");const ln=O.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),yt.setValue(C,"boneTexture",ln.boneTexture,I))}O.isBatchedMesh&&(yt.setOptional(C,O,"batchingTexture"),yt.setValue(C,"batchingTexture",O._matricesTexture,I),yt.setOptional(C,O,"batchingIdTexture"),yt.setValue(C,"batchingIdTexture",O._indirectTexture,I),yt.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(C,"batchingColorTexture",O._colorsTexture,I));const Un=W.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Je.update(O,W,xn),(Sn||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,yt.setValue(C,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(fn.envMap.value=Te,fn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(fn.envMapIntensity.value=N.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=uS()),Sn&&(yt.setValue(C,"toneMappingExposure",S.toneMappingExposure),ze.needsLights&&Yg(fn,Xs),ge&&k.fog===!0&&We.refreshFogUniforms(fn,ge),We.refreshMaterialUniforms(fn,k,Z,J,A.state.transmissionRenderTarget[x.id]),vo.upload(C,uh(ze),fn,I)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vo.upload(C,uh(ze),fn,I),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&yt.setValue(C,"center",O.center),yt.setValue(C,"modelViewMatrix",O.modelViewMatrix),yt.setValue(C,"normalMatrix",O.normalMatrix),yt.setValue(C,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const ln=k.uniformsGroups;for(let pn=0,yl=ln.length;pn<yl;pn++){const dr=ln[pn];se.update(dr,xn),se.bind(dr,xn)}}return xn}function Yg(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Kg(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(x,N,W){const k=g.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),g.get(x.texture).__webglTexture=N,g.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){const W=g.get(x);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const Jg=C.createFramebuffer();this.setRenderTarget=function(x,N=0,W=0){z=x,L=N,q=W;let k=null,O=!1,ge=!1;if(x){const xe=g.get(x);if(xe.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(C.FRAMEBUFFER,xe.__webglFramebuffer),X.copy(x.viewport),$.copy(x.scissor),re=x.scissorTest,Ce.viewport(X),Ce.scissor($),Ce.setScissorTest(re),K=-1;return}else if(xe.__webglFramebuffer===void 0)I.setupRenderTarget(x);else if(xe.__hasExternalTextures)I.rebindTextures(x,g.get(x.texture).__webglTexture,g.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const He=x.depthTexture;if(xe.__boundDepthTexture!==He){if(He!==null&&g.has(He)&&(x.width!==He.image.width||x.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(x)}}const Te=x.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);const Ue=g.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?k=Ue[N][W]:k=Ue[N],O=!0):x.samples>0&&I.useMultisampledRTT(x)===!1?k=g.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[W]:k=Ue,X.copy(x.viewport),$.copy(x.scissor),re=x.scissorTest}else X.copy(F).multiplyScalar(Z).floor(),$.copy(j).multiplyScalar(Z).floor(),re=ue;if(W!==0&&(k=Jg),Ce.bindFramebuffer(C.FRAMEBUFFER,k)&&Ce.drawBuffers(x,k),Ce.viewport(X),Ce.scissor($),Ce.setScissorTest(re),O){const xe=g.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,W)}else if(ge){const xe=N;for(let Te=0;Te<x.textures.length;Te++){const Ue=g.get(x.textures[Te]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Te,Ue.__webglTexture,W,xe)}}else if(x!==null&&W!==0){const xe=g.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,xe.__webglTexture,W)}K=-1},this.readRenderTargetPixels=function(x,N,W,k,O,ge,be,xe=0){if(!(x&&x.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){Ce.bindFramebuffer(C.FRAMEBUFFER,Te);try{const Ue=x.textures[xe],He=Ue.format,Ve=Ue.type;if(!St.textureFormatReadable(He)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ve)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-k&&W>=0&&W<=x.height-O&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+xe),C.readPixels(N,W,k,O,ce.convert(He),ce.convert(Ve),ge))}finally{const Ue=z!==null?g.get(z).__webglFramebuffer:null;Ce.bindFramebuffer(C.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(x,N,W,k,O,ge,be,xe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te)if(N>=0&&N<=x.width-k&&W>=0&&W<=x.height-O){Ce.bindFramebuffer(C.FRAMEBUFFER,Te);const Ue=x.textures[xe],He=Ue.format,Ve=Ue.type;if(!St.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.bufferData(C.PIXEL_PACK_BUFFER,ge.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+xe),C.readPixels(N,W,k,O,ce.convert(He),ce.convert(Ve),0);const pt=z!==null?g.get(z).__webglFramebuffer:null;Ce.bindFramebuffer(C.FRAMEBUFFER,pt);const It=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await N_(C,It,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ge),C.deleteBuffer(Ze),C.deleteSync(It),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,W=0){const k=Math.pow(2,-W),O=Math.floor(x.image.width*k),ge=Math.floor(x.image.height*k),be=N!==null?N.x:0,xe=N!==null?N.y:0;I.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,be,xe,O,ge),Ce.unbindTexture()};const Zg=C.createFramebuffer(),Qg=C.createFramebuffer();this.copyTextureToTexture=function(x,N,W=null,k=null,O=0,ge=null){ge===null&&(O!==0?(pa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=O,O=0):ge=0);let be,xe,Te,Ue,He,Ve,Ze,pt,It;const Nt=x.isCompressedTexture?x.mipmaps[ge]:x.image;if(W!==null)be=W.max.x-W.min.x,xe=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ue=W.min.x,He=W.min.y,Ve=W.isBox3?W.min.z:0;else{const Un=Math.pow(2,-O);be=Math.floor(Nt.width*Un),xe=Math.floor(Nt.height*Un),x.isDataArrayTexture?Te=Nt.depth:x.isData3DTexture?Te=Math.floor(Nt.depth*Un):Te=1,Ue=0,He=0,Ve=0}k!==null?(Ze=k.x,pt=k.y,It=k.z):(Ze=0,pt=0,It=0);const gt=ce.convert(N.format),ze=ce.convert(N.type);let ht;N.isData3DTexture?(I.setTexture3D(N,0),ht=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(I.setTexture2DArray(N,0),ht=C.TEXTURE_2D_ARRAY):(I.setTexture2D(N,0),ht=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const st=C.getParameter(C.UNPACK_ROW_LENGTH),xn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),kr=C.getParameter(C.UNPACK_SKIP_PIXELS),Sn=C.getParameter(C.UNPACK_SKIP_ROWS),Xs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ue),C.pixelStorei(C.UNPACK_SKIP_ROWS,He),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ve);const yt=x.isDataArrayTexture||x.isData3DTexture,fn=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const Un=g.get(x),ln=g.get(N),pn=g.get(Un.__renderTarget),yl=g.get(ln.__renderTarget);Ce.bindFramebuffer(C.READ_FRAMEBUFFER,pn.__webglFramebuffer),Ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,yl.__webglFramebuffer);for(let dr=0;dr<Te;dr++)yt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(x).__webglTexture,O,Ve+dr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(N).__webglTexture,ge,It+dr)),C.blitFramebuffer(Ue,He,be,xe,Ze,pt,be,xe,C.DEPTH_BUFFER_BIT,C.NEAREST);Ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||g.has(x)){const Un=g.get(x),ln=g.get(N);Ce.bindFramebuffer(C.READ_FRAMEBUFFER,Zg),Ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,Qg);for(let pn=0;pn<Te;pn++)yt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Un.__webglTexture,O,Ve+pn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Un.__webglTexture,O),fn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ln.__webglTexture,ge,It+pn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ln.__webglTexture,ge),O!==0?C.blitFramebuffer(Ue,He,be,xe,Ze,pt,be,xe,C.COLOR_BUFFER_BIT,C.NEAREST):fn?C.copyTexSubImage3D(ht,ge,Ze,pt,It+pn,Ue,He,be,xe):C.copyTexSubImage2D(ht,ge,Ze,pt,Ue,He,be,xe);Ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else fn?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(ht,ge,Ze,pt,It,be,xe,Te,gt,ze,Nt.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(ht,ge,Ze,pt,It,be,xe,Te,gt,Nt.data):C.texSubImage3D(ht,ge,Ze,pt,It,be,xe,Te,gt,ze,Nt):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ge,Ze,pt,be,xe,gt,ze,Nt.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ge,Ze,pt,Nt.width,Nt.height,gt,Nt.data):C.texSubImage2D(C.TEXTURE_2D,ge,Ze,pt,be,xe,gt,ze,Nt);C.pixelStorei(C.UNPACK_ROW_LENGTH,st),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,kr),C.pixelStorei(C.UNPACK_SKIP_ROWS,Sn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Xs),ge===0&&N.generateMipmaps&&C.generateMipmap(ht),Ce.unbindTexture()},this.initRenderTarget=function(x){g.get(x).__webglFramebuffer===void 0&&I.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?I.setTextureCube(x,0):x.isData3DTexture?I.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?I.setTexture2DArray(x,0):I.setTexture2D(x,0),Ce.unbindTexture()},this.resetState=function(){L=0,q=0,z=null,Ce.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}const hS=`
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
}`,fS=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;function pS(t){const e=new dS({canvas:t,antialias:!1}),n={uTime:{value:0},uAltitude:{value:.45},uLuminosite:{value:.7},uTurbulence:{value:.2},uNight:{value:0},uAurora:{value:.55},uPulse:{value:0},uPluie:{value:0},uEclair:{value:0},uMeteor:{value:new Ut(0,0,0,0)},uFocus:{value:new ct(.5,.5)},uAspect:{value:1},uTap:{value:new V(.5,.5,999)},uCol1:{value:new Qe("#1b2a4a")},uCol2:{value:new Qe("#7fa8d9")},uCol3:{value:new Qe("#dfefff")}},i={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,pluie:0,col1:new Qe("#1b2a4a"),col2:new Qe("#7fa8d9"),col3:new Qe("#dfefff"),focus:new ct(.5,.5)},r={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,col1:new Qe("#1b2a4a"),col2:new Qe("#7fa8d9"),col3:new Qe("#dfefff"),focus:new ct(.5,.5)};let s=0,a=0,o=999,l=0,c=0;const u={x:0,y:0,age:0,actif:0},d=new Qn({vertexShader:fS,fragmentShader:hS,uniforms:n}),h=new xi(new Ea(2,2),d),p=new av;p.add(h);function _(){e.setSize(window.innerWidth,window.innerHeight,!1),n.uAspect.value=window.innerWidth/Math.max(1,window.innerHeight)}return window.addEventListener("resize",_),_(),{apply(v,m){i.alt=v.altitude,i.lum=v.luminosite,i.turb=v.turbulence,i.night=v.night,i.aurora=v.aurora,i.pluie=v.pluie,i.col1.setStyle(v.palette[0]),i.col2.setStyle(v.palette[1]),i.col3.setStyle(v.palette[2]),m&&i.focus.set(m[0],m[1])},setBpm(v){s=v??0},eclair(){c=1},filer(v,m){u.x=v,u.y=m,u.age=0,u.actif=1},tap(v,m){o=0,n.uTap.value.set(v,m,0)},frame(v){n.uTime.value+=v;const m=1-Math.exp(-v*2.5);r.alt+=(i.alt-r.alt)*m,r.lum+=(i.lum-r.lum)*m,r.turb+=(i.turb-r.turb)*m,r.night+=(i.night-r.night)*m,r.aurora+=(i.aurora-r.aurora)*m,l+=(i.pluie-l)*(1-Math.exp(-v*.8)),c*=Math.exp(-v*2.6),u.actif>0&&(u.age+=v,u.age>1.4&&(u.actif=0)),r.col1.lerp(i.col1,m),r.col2.lerp(i.col2,m),r.col3.lerp(i.col3,m),r.focus.lerp(i.focus,m),a+=v*(s>0?s/60:.2),n.uPulse.value=Math.sin(a*2*Math.PI),o<100&&(o+=v,n.uTap.value.z=o),n.uAltitude.value=r.alt,n.uLuminosite.value=r.lum,n.uTurbulence.value=r.turb,n.uNight.value=r.night,n.uAurora.value=r.aurora,n.uPluie.value=l,n.uEclair.value=c,n.uMeteor.value.set(u.x,u.y,u.age,u.actif),n.uFocus.value.copy(r.focus),n.uCol1.value.copy(r.col1),n.uCol2.value.copy(r.col2),n.uCol3.value.copy(r.col3),e.render(p,new ed)}}}function mS(){return{breath:0,bpm:null,emotion:"calme",timeOfDay:.5,seed:"anonyme"}}const gS={calme:["#1b2a4a","#7fa8d9","#dfefff"],joie:["#2b4a1b","#d9c47f","#fff6df"],tristesse:["#101018","#3a4a6a","#8a9ab0"],tension:["#2a0a0a","#6a2a2a","#c07a5a"]};function mm(t){const e={calme:{alt:.45,lum:.7,turb:.2,aur:.55,pluie:.12},joie:{alt:.7,lum:.9,turb:.35,aur:.95,pluie:0},tristesse:{alt:.2,lum:.35,turb:.1,aur:.25,pluie:.7},tension:{alt:.6,lum:.45,turb:.85,aur:.4,pluie:.45}}[t.emotion],n=Math.min(1,Math.max(0,(Math.abs(t.timeOfDay-.5)-.2)*5)),i=t.cielReel??null;return{altitude:Math.min(1,e.alt+t.breath*.35),luminosite:i?Math.min(1,i.luminosite+t.breath*.2):Math.min(1,e.lum+t.breath*.2),turbulence:i?Math.min(1,Math.max(e.turb,i.turbulence)+t.breath*.1):Math.min(1,e.turb+t.breath*.1),night:n,aurora:e.aur,pluie:i?Math.max(e.pluie,i.pluie):e.pluie,palette:gS[t.emotion]}}function _S(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return Math.sqrt(e/t.length)}function vS(t,e,n=8){return t<=e?0:Math.min(1,(t-e)*n)}async function xS(t){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),n=new AudioContext,i=n.createMediaStreamSource(e),r=n.createAnalyser();r.fftSize=1024,i.connect(r);const s=new Float32Array(r.fftSize);let a=5e-4;return setInterval(()=>{r.getFloatTimeDomainData(s);const o=_S(s);a=Math.min(a*.999+o*.001,.01),t(vS(o,a))},60),!0}catch{return!1}}var vs=typeof self<"u"?self:{};function gm(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=vs,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function vr(){throw Error("Invalid UTF8")}function lf(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let no,ec;const SS=typeof TextDecoder<"u";let MS;const yS=typeof TextEncoder<"u";function _m(t){if(yS)t=(MS||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function vm(t){vs.setTimeout((()=>{throw t}),0)}var _u,bS=gm(610401301,!1),cf=gm(748402147,!0);function uf(){var t=vs.navigator;return t&&(t=t.userAgent)?t:""}const df=vs.navigator;function Ho(t){return Ho[" "](t),t}_u=df&&df.userAgentData||null,Ho[" "]=function(){};const xm={};let aa=null;function ES(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(c){for(;l<s.length;){const u=s.charAt(l++),d=aa[u];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}Sm();let l=0;for(;;){const c=o(-1),u=o(0),d=o(64),h=o(64);if(h===64&&c===-1)break;a(c<<2|u>>4),d!=64&&(a(u<<4&240|d>>2),h!=64&&a(d<<6&192|h))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function Sm(){if(!aa){aa={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));xm[n]=i;for(let r=0;r<i.length;r++){const s=i[r];aa[s]===void 0&&(aa[s]=r)}}}}var TS=typeof Uint8Array<"u",Mm=!(!(bS&&_u&&_u.brands.length>0)&&(uf().indexOf("Trident")!=-1||uf().indexOf("MSIE")!=-1))&&typeof btoa=="function";const hf=/[-_.]/g,AS={"-":"+",_:"/",".":"="};function wS(t){return AS[t]||""}function ym(t){if(!Mm)return ES(t);t=hf.test(t)?t.replace(hf,wS):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function td(t){return TS&&t!=null&&t instanceof Uint8Array}var xs={};function Ir(){return CS||=new _i(null,xs)}function nd(t){bm(xs);var e=t.g;return(e=e==null||td(e)?e:typeof e=="string"?ym(e):null)==null?e:t.g=e}var _i=class{h(){return new Uint8Array(nd(this)||0)}constructor(t,e){if(bm(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let CS,RS;function bm(t){if(t!==xs)throw Error("illegal external caller")}function Em(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function vu(t){return Em(t=Error(t),"warning"),t}function Ss(t,e){if(t!=null){var n=RS??={},i=n[t]||0;i>=e||(n[t]=i+1,Em(t=Error(),"incident"),vm(t))}}function Ds(){return typeof BigInt=="function"}var Is=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Mi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var LS=Mi("jas",void 0,!0),ff=Mi(void 0,"0di"),ea=Mi(void 0,"1oa"),Cn=Mi(void 0,Symbol()),PS=Mi(void 0,"0ub"),DS=Mi(void 0,"0ubs"),xu=Mi(void 0,"0ubsb"),IS=Mi(void 0,"0actk"),Ms=Mi("m_m","Pa",!0),pf=Mi();const Tm={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Am=Object.defineProperties,Pe=Is?LS:"Ga";var Fr;const mf=[];function Ta(t,e){Is||Pe in t||Am(t,Tm),t[Pe]|=e}function jt(t,e){Is||Pe in t||Am(t,Tm),t[Pe]=e}function Aa(t){return Ta(t,34),t}function ga(t){return Ta(t,8192),t}jt(mf,7),Fr=Object.freeze(mf);var ys={};function Ln(t,e){return e===void 0?t.h!==Nr&&!!(2&(0|t.v[Pe])):!!(2&e)&&t.h!==Nr}const Nr={};function id(t,e){if(t!=null){if(typeof t=="string")t=t?new _i(t,xs):Ir();else if(t.constructor!==_i)if(td(t))t=t.length?new _i(new Uint8Array(t),xs):Ir();else{if(!e)throw Error();t=void 0}}return t}class gf{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var NS=Object.freeze({});function wm(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(e=128&e?1:0;e<a;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const o in t)!isNaN(o)&&n(+o,t[o])}}var Cm={};function Ns(t){return 128&t?Cm:void 0}function Wo(t){return t.Na=!0,t}var US=Wo((t=>typeof t=="number")),_f=Wo((t=>typeof t=="string")),FS=Wo((t=>typeof t=="boolean")),qo=typeof vs.BigInt=="function"&&typeof vs.BigInt(0)=="bigint";function Rn(t){var e=t;if(_f(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(US(e)&&!Number.isSafeInteger(e))throw Error(String(e));return qo?BigInt(t):t=FS(t)?t?"1":"0":_f(t)?t.trim()||"0":String(t)}var Su=Wo((t=>qo?t>=BS&&t<=VS:t[0]==="-"?vf(t,OS):vf(t,kS)));const OS=Number.MIN_SAFE_INTEGER.toString(),BS=qo?BigInt(Number.MIN_SAFE_INTEGER):void 0,kS=Number.MAX_SAFE_INTEGER.toString(),VS=qo?BigInt(Number.MAX_SAFE_INTEGER):void 0;function vf(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const zS=typeof Uint8Array.prototype.slice=="function";let GS,Rt=0,kt=0;function xf(t){const e=t>>>0;Rt=e,kt=(t-e)/4294967296>>>0}function bs(t){if(t<0){xf(-t);const[e,n]=ad(Rt,kt);Rt=e>>>0,kt=n>>>0}else xf(t)}function rd(t){const e=GS||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),kt=0,Rt=e.getUint32(0,!0)}function Rm(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:_a(t,e)}function HS(t,e){return Rn(Ds()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):_a(t,e))}function Lm(t,e){return Ds()?Rn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Rn(sd(t,e))}function _a(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Ds()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Sf(n)+Sf(t));return n}function Sf(t){return t=String(t),"0000000".slice(t.length)+t}function sd(t,e){if(2147483648&e)if(Ds())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=ad(t,e);t="-"+_a(n,i)}else t=_a(t,e);return t}function Xo(t){if(t.length<16)bs(Number(t));else if(Ds())t=BigInt(t),Rt=Number(t&BigInt(4294967295))>>>0,kt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");kt=Rt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));kt*=1e6,Rt=1e6*Rt+s,Rt>=4294967296&&(kt+=Math.trunc(Rt/4294967296),kt>>>=0,Rt>>>=0)}if(e){const[i,r]=ad(Rt,kt);Rt=i,kt=r}}}function ad(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Zn(t){return Array.prototype.slice.call(t)}const wa=typeof BigInt=="function"?BigInt.asIntN:void 0,WS=typeof BigInt=="function"?BigInt.asUintN:void 0,Ur=Number.isSafeInteger,$o=Number.isFinite,Es=Math.trunc,qS=Rn(0);function oa(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function fi(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function va(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function Pm(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const XS=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ca(t){switch(typeof t){case"bigint":return!0;case"number":return $o(t);case"string":return XS.test(t);default:return!1}}function Us(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return $o(t)?0|t:void 0}function Dm(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return $o(t)?t>>>0:void 0}function Im(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(Xo(t),sd(Rt,kt))}function od(t){if(t=Es(t),!Ur(t)){bs(t);var e=Rt,n=kt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=Rm(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function Nm(t){var e=Es(Number(t));return Ur(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Im(t))}function Um(t){var e=Es(Number(t));return Ur(e)?Rn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Ds()?Rn(wa(64,BigInt(t))):Rn(Im(t)))}function Fm(t){return Ur(t)?t=Rn(od(t)):(t=Es(t),Ur(t)?t=String(t):(bs(t),t=sd(Rt,kt)),t=Rn(t)),t}function wo(t){const e=typeof t;return t==null?t:e==="bigint"?Rn(wa(64,t)):Ca(t)?e==="string"?Um(t):Fm(t):void 0}function Om(t){if(typeof t!="string")throw Error();return t}function Ra(t){if(t!=null&&typeof t!="string")throw Error();return t}function Qt(t){return t==null||typeof t=="string"?t:void 0}function ld(t,e,n,i){return t!=null&&t[Ms]===ys?t:Array.isArray(t)?((i=(n=0|t[Pe])|32&i|2&i)!==n&&jt(t,i),new e(t)):(n?2&i?((t=e[ff])||(Aa((t=new e).v),t=e[ff]=t),e=t):e=new e:e=void 0,e)}function $S(t,e,n){if(e)e:{if(!Ca(e=t))throw vu("int64");switch(typeof e){case"string":e=Um(e);break e;case"bigint":e=Rn(wa(64,e));break e;default:e=Fm(e)}}else e=wo(t);return(t=e)==null?n?qS:void 0:t}const jS={};let YS=(function(){try{return Ho(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class tc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const KS=YS?(Object.setPrototypeOf(tc.prototype,Map.prototype),Object.defineProperties(tc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),tc):class extends Map{constructor(){super()}};function Mf(t){return t}function nc(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var Gi=class extends KS{constructor(t,e,n=Mf,i=Mf){super(),this.J=0|t[Pe],this.K=e,this.S=n,this.fa=this.K?JS:i;for(let r=0;r<t.length;r++){const s=t[r],a=n(s[0],!1,!0);let o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(t){return ga(Array.from(super.entries(),t))}clear(){nc(this),super.clear()}delete(t){return nc(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new gf(t,ZS,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new gf(t,Gi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return nc(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function JS(t,e,n,i,r,s){return t=ld(t,i,n,s),r&&(t=ud(t)),t}function ZS(t){return[t,this.get(t)]}let QS;function yf(){return QS||=new Gi(Aa([]),void 0,void 0,void 0,jS)}function jo(t){return Cn?t[Cn]:void 0}function Co(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}Gi.prototype.toJSON=void 0;var Mu=class{};const eM={Ka:!0};function tM(t,e){e<100||Ss(DS,1)}function Yo(t,e,n,i){const r=i!==void 0;i=!!i;var s,a=Cn;!r&&Is&&a&&(s=t[a])&&Co(s,tM),a=[];var o=t.length;let l;s=4294967295;let c=!1;const u=!!(64&e),d=u?128&e?0:-1:void 0;1&e||(l=o&&t[o-1],l!=null&&typeof l=="object"&&l.constructor===Object?s=--o:l=void 0,!u||128&e||r||(c=!0,s=s-d+d)),e=void 0;for(var h=0;h<o;h++){let p=t[h];if(p!=null&&(p=n(p,i))!=null)if(u&&h>=s){const _=h-d;(e??={})[_]=p}else a[h]=p}if(l)for(let p in l){if((o=l[p])==null||(o=n(o,i))==null)continue;let _;h=+p,u&&!Number.isNaN(h)&&(_=h+d)<s?a[_]=o:(e??={})[p]=o}return e&&(c?a.push(e):a[s]=e),r&&Cn&&(t=jo(t))&&t instanceof Mu&&(a[Cn]=(function(p){const _=new Mu;return Co(p,((v,m,f)=>{_[m]=Zn(f)})),_.da=p.da,_})(t)),a}function nM(t){return t[0]=xa(t[0]),t[1]=xa(t[1]),t}function xa(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Su(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Pe];return t.length===0&&1&e?void 0:Yo(t,e,xa)}if(t!=null&&t[Ms]===ys)return Bm(t);if(t instanceof _i){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(Mm){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),Sm(),n=xm[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let c=0,u=0;for(;c<e.length-2;c+=3){var s=e[c],a=e[c+1],o=e[c+2],l=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[u++]=l+s+a+o}switch(l=0,o=r,e.length-c){case 2:o=n[(15&(l=e[c+1]))<<2]||r;case 1:e=e[c],i[u]=n[e>>2]+n[(3&e)<<4|l>>4]+o+r}e=i.join("")}t=t.g=e}return t}return t instanceof Gi?t=t.size!==0?t.V(nM):void 0:void 0}return t}let iM,rM;function Bm(t){return Yo(t=t.v,0|t[Pe],xa)}function wr(t,e){return km(t,e[0],e[1])}function km(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[Pe],cf&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(cf)throw Error("carr");Ss(IS,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&jt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var a=s-1;const l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(s=+o)<a&&(n[s+e]=l[o],delete l[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return jt(t,64|r|i),t}function sM(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Pe];return t.length===0&&1&n?void 0:bf(t,n,e)}if(t!=null&&t[Ms]===ys)return Ef(t);if(t instanceof Gi){if(2&(e=t.J))return t;if(!t.size)return;if(n=Aa(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[Ms]===ys?Ef(r):Array.isArray(r)?bf(r,0|r[Pe],!!(32&e)):void 0,i[1]=r}return n}return t instanceof _i?t:void 0}function bf(t,e,n){return 2&e||(!n||4096&e||16&e?t=Fs(t,e,!1,n&&!(16&e)):(Ta(t,34),4&e&&Object.freeze(t))),t}function cd(t,e,n){return t=new t.constructor(e),n&&(t.h=Nr),t.m=Nr,t}function Ef(t){const e=t.v,n=0|e[Pe];return Ln(t,n)?t:dd(t,e,n)?cd(t,e):Fs(e,n)}function Fs(t,e,n,i){return i??=!!(34&e),t=Yo(t,e,sM,i),i=32,n&&(i|=2),jt(t,e=16769217&e|i),t}function ud(t){const e=t.v,n=0|e[Pe];return Ln(t,n)?dd(t,e,n)?cd(t,e,!0):new t.constructor(Fs(e,n,!1)):t}function Os(t){if(t.h!==Nr)return!1;var e=t.v;return Ta(e=Fs(e,0|e[Pe]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function Bs(t){if(!Os(t)&&Ln(t,0|t.v[Pe]))throw Error()}function Or(t,e){e===void 0&&(e=0|t[Pe]),32&e&&!(4096&e)&&jt(t,4096|e)}function dd(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(jt(e,2|n),t.h=Nr,!0)}const Vm=Rn(0),Qi={};function Lt(t,e,n,i,r){if((e=Hi(t.v,e,n,r))!==null||i&&t.m!==Nr)return e}function Hi(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let a,o;if(!(s<1+(n?0:-1))){if(r>=s)if(a=t[s],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[e],o=!0;else{if(r!==s)return;n=a}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[r]=i,i}return n}}function mt(t,e,n,i){Bs(t),Wt(t=t.v,0|t[Pe],e,n,i)}function Wt(t,e,n,i,r){const s=n+(r?0:-1);var a=t.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=(e??=0|t[Pe])>>14&1023||536870912)?i!=null&&(t[a+(r?0:-1)]={[n]:i}):t[s]=i),e)}function Tr(){return NS===void 0?2:4}function Ar(t,e,n,i,r){let s=t.v,a=0|s[Pe];i=Ln(t,a)?1:i,r=!!r||i===3,i===2&&Os(t)&&(s=t.v,a=0|s[Pe]);let o=(t=hd(s,e))===Fr?7:0|t[Pe],l=fd(o,a);var c=!(4&l);if(c){4&l&&(t=Zn(t),o=0,l=Rr(l,a),a=Wt(s,a,e,t));let u=0,d=0;for(;u<t.length;u++){const h=n(t[u]);h!=null&&(t[d++]=h)}d<u&&(t.length=d),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==o&&(jt(t,l),2&l&&Object.freeze(t)),zm(t,l,s,a,e,i,c,r)}function zm(t,e,n,i,r,s,a,o){let l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?Cr(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&jt(t,e),Object.freeze(t)):(s===2&&Cr(e)&&(t=Zn(t),l=0,e=Rr(e,i),i=Wt(n,i,r,t)),Cr(e)||(o||(e|=16),e!==l&&jt(t,e))),2&e||!(4096&e||16&e)||Or(n,i),t}function hd(t,e,n){return t=Hi(t,e,n),Array.isArray(t)?t:Fr}function fd(t,e){return 2&e&&(t|=2),1|t}function Cr(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Gm(t){return id(t,!0)}function Hm(t){t=Zn(t);for(let e=0;e<t.length;e++){const n=t[e]=Zn(t[e]);Array.isArray(n[1])&&(n[1]=Aa(n[1]))}return ga(t)}function tr(t,e,n,i){Bs(t),Wt(t=t.v,0|t[Pe],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function ks(t,e,n){if(2&e)throw Error();const i=Ns(e);let r=hd(t,n,i),s=r===Fr?7:0|r[Pe],a=fd(s,e);return(2&a||Cr(a)||16&a)&&(a===s||Cr(a)||jt(r,a),r=Zn(r),s=0,a=Rr(a,e),Wt(t,e,n,r,i)),a&=-13,a!==s&&jt(r,a),r}function ic(t,e){var n=N0;return md(pd(t=t.v),t,void 0,n)===e?e:-1}function pd(t){if(Is)return t[ea]??(t[ea]=new Map);if(ea in t)return t[ea];const e=new Map;return Object.defineProperty(t,ea,{value:e}),e}function Wm(t,e,n,i,r){const s=pd(t),a=md(s,t,e,n,r);return a!==i&&(a&&(e=Wt(t,e,a,void 0,r)),s.set(n,i)),e}function md(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];Hi(e,o,r)!=null&&(s!==0&&(n=Wt(e,n,s,void 0,r)),s=o)}return t.set(i,s),s}function gd(t,e,n){let i=0|t[Pe];const r=Ns(i),s=Hi(t,n,r);let a;if(s!=null&&s[Ms]===ys){if(!Ln(s))return Os(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[Pe];2&o&&(a=Fs(a,o))}return a=wr(a,e),a!==s&&Wt(t,i,n,a,r),a}function qm(t,e,n,i,r){let s=!1;if((i=Hi(t,i,r,(a=>{const o=ld(a,n,!1,e);return s=o!==a&&o!=null,o})))!=null)return s&&!Ln(i)&&Or(t,e),i}function ot(t,e,n,i){let r=t.v,s=0|r[Pe];if((e=qm(r,s,e,n,i))==null)return e;if(s=0|r[Pe],!Ln(t,s)){const a=ud(e);a!==e&&(Os(t)&&(r=t.v,s=0|r[Pe]),s=Wt(r,s,n,e=a,i),Or(r,s))}return e}function Xm(t,e,n,i,r,s,a,o){var l=Ln(t,n);s=l?1:s,a=!!a||s===3,l=o&&!l,(s===2||l)&&Os(t)&&(n=0|(e=t.v)[Pe]);var c=(t=hd(e,r))===Fr?7:0|t[Pe],u=fd(c,n);if(o=!(4&u)){var d=t,h=n;const p=!!(2&u);p&&(h|=2);let _=!p,v=!0,m=0,f=0;for(;m<d.length;m++){const b=ld(d[m],i,!1,h);if(b instanceof i){if(!p){const E=Ln(b);_&&=!E,v&&=E}d[f++]=b}}f<m&&(d.length=f),u|=4,u=v?-4097&u:4096|u,u=_?8|u:-9&u}if(u!==c&&(jt(t,u),2&u&&Object.freeze(t)),l&&!(8&u||!t.length&&(s===1||s===4&&(2&u||!(16&u)&&32&n)))){for(Cr(u)&&(t=Zn(t),u=Rr(u,n),n=Wt(e,n,r,t)),i=t,l=u,c=0;c<i.length;c++)(d=i[c])!==(u=ud(d))&&(i[c]=u);l|=8,jt(t,u=l=i.length?4096|l:-4097&l)}return zm(t,u,e,n,r,s,o,a)}function Wi(t,e,n){const i=t.v;return Xm(t,i,0|i[Pe],e,n,Tr(),!1,!0)}function $m(t){return t==null&&(t=void 0),t}function Ge(t,e,n,i,r){return mt(t,n,i=$m(i),r),i&&!Ln(i)&&Or(t.v),t}function ca(t,e,n,i){e:{var r=i=$m(i);Bs(t);const s=t.v;let a=0|s[Pe];if(r==null){const o=pd(s);if(md(o,s,a,n)!==e)break e;o.set(n,0)}else a=Wm(s,a,n,e);Wt(s,a,e,r)}i&&!Ln(i)&&Or(t.v)}function Rr(t,e){return-273&(2&e?2|t:-3&t)}function _d(t,e,n,i){var r=i;Bs(t),t=Xm(t,i=t.v,0|i[Pe],n,e,2,!0),r=r??new n,t.push(r),e=n=t===Fr?7:0|t[Pe],(r=Ln(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&jt(t,n),r||Or(i)}function Gn(t,e,n){return Us(Lt(t,e,void 0,n))}function Ot(t,e){return Lt(t,e,void 0,void 0,fi)??0}function qi(t,e,n){if(n!=null){if(typeof n!="number"||!$o(n))throw vu("int32");n|=0}mt(t,e,n)}function ke(t,e,n){mt(t,e,oa(n))}function Pn(t,e,n){tr(t,e,Ra(n),"")}function Ro(t,e,n){{Bs(t);const a=t.v;let o=0|a[Pe];if(n==null)Wt(a,o,e);else{var i=t=n===Fr?7:0|n[Pe],r=Cr(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=Zn(n),i=0,t=Rr(t,o),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const l=n[r],c=Om(l);Object.is(l,c)||(s&&(n=Zn(n),i=0,t=Rr(t,o),s=!1),n[r]=c)}t!==i&&(s&&(n=Zn(n),t=Rr(t,o)),jt(n,t)),Wt(a,o,e,n)}}}function Ko(t,e,n){Bs(t),Ar(t,e,Qt,2,!0).push(Om(n))}var es=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function vd(t,e){if(typeof t=="string")return new es(ym(t),e);if(Array.isArray(t))return new es(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new es(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new es(t,!1);if(t.constructor===_i)return e=nd(t)||new Uint8Array(0),new es(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new es(t,!1);throw Error()}function xd(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Lr(t,o),!(128&n))return e(i>>>0,r>>>0);throw Error()}function Sd(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Lr(t,n),!!(127&e)}throw Error()}function or(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Lr(t,n),r}function Si(t){return or(t)>>>0}function Lo(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],Lr(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function aM(t){return or(t)}function Lr(t,e){if(t.g=e,e>t.l)throw Error()}function jm(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function Ym(t,e){if(e==0)return Ir();var n=jm(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):zS?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Ir():new _i(n,xs)}var Tf=[];function Km(t,e,n,i){if(Po.length){const r=Po.pop();return r.o(i),r.g.init(t,e,n,i),r}return new oM(t,e,n,i)}function Jm(t){t.g.clear(),t.l=-1,t.h=-1,Po.length<100&&Po.push(t)}function Zm(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=Si(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function xo(t){switch(t.h){case 0:t.h!=0?xo(t):Sd(t.g);break;case 1:Lr(t=t.g,t.g+8);break;case 2:if(t.h!=2)xo(t);else{var e=Si(t.g);Lr(t=t.g,t.g+e)}break;case 5:Lr(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!Zm(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}xo(t)}break;default:throw Error()}}function La(t,e,n){const i=t.g.l;var r=Si(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function Md(t){var e=Si(t.g),n=jm(t=t.g,e);if(t=t.h,SS){var i,r=t;(i=ec)||(i=ec=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(no===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),no=!0}catch{no=!1}}throw!no&&(ec=void 0),o}}else{e=(s=n)+e,n=[];let o,l=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?vr():(o=t[s++],a<194||(192&o)!=128?(s--,vr()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?vr():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,vr()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?vr():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,vr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):vr(),n.length>=8192&&(l=lf(l,n),n.length=0)}s=lf(l,n)}return s}function Qm(t){const e=Si(t.g);return Ym(t.g,e)}function Jo(t,e,n){var i=Si(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var oM=class{constructor(t,e,n,i){if(Tf.length){const r=Tf.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:l=!1}={}){this.Y=o,this.ea=l,r&&(r=vd(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},Po=[];function Af(t){return t?/^\d+$/.test(t)?(Xo(t),new yu(Rt,kt)):null:lM||=new yu(0,0)}var yu=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let lM;function wf(t){return t?/^-?\d+$/.test(t)?(Xo(t),new bu(Rt,kt)):null:cM||=new bu(0,0)}var bu=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let cM;function os(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Vs(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Zo(t,e){if(e>=0)Vs(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function yd(t){var e=Rt;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Ts(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Wn(t,e,n){Vs(t.g,8*e+n)}function bd(t,e){return Wn(t,e,2),e=t.g.end(),Ts(t,e),e.push(t.h),e}function Ed(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Qo(t,e,n){Wn(t,e,2),Vs(t.g,n.length),Ts(t,t.g.end()),Ts(t,n)}function Do(t,e,n,i){n!=null&&(e=bd(t,e),i(n,t),Ed(t,e))}function yi(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Td=yi(),e0=yi(),Ad=yi(),wd=yi(),Cd=yi(),t0=yi(),uM=yi(),el=yi(),n0=yi(),i0=yi();function bi(t,e,n){var i=t.v;Cn&&Cn in i&&(i=i[Cn])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var De=class{constructor(t,e){this.v=km(t,e,void 0,2048)}toJSON(){return Bm(this)}j(){var t=qM,e=this.v,n=t.g,i=Cn;if(Is&&i&&e[i]?.[n]!=null&&Ss(PS,3),e=t.g,pf&&Cn&&pf===void 0&&(i=(n=this.v)[Cn])&&(i=i.da))try{i(n,e,eM)}catch(r){vm(r)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[Pe];return dd(this,t,e)?cd(this,t,!0):new this.constructor(Fs(t,e,!1))}};De.prototype[Ms]=ys,De.prototype.toString=function(){return this.v.toString()};var zs=class{constructor(t,e,n){this.g=t,this.h=e,t=Td,this.l=!!t&&n===t||!1}};function tl(t,e){return new zs(t,e,Td)}function r0(t,e,n,i,r){Do(t,n,l0(e,i),r)}const dM=tl((function(t,e,n,i,r){return t.h===2&&(La(t,gd(e,i,n),r),!0)}),r0),hM=tl((function(t,e,n,i,r){return t.h===2&&(La(t,gd(e,i,n),r),!0)}),r0);var nl=Symbol(),il=Symbol(),Eu=Symbol(),Cf=Symbol(),Rf=Symbol();let s0,a0;function Br(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=(function(d){switch(typeof d){case"boolean":return iM||=[0,void 0,!0];case"number":return d>0?void 0:d===0?rM||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,s0??=s,a0??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)o[s[l]]=s;s=i[++a]}for(l=1;s!==void 0;){let d;typeof s=="number"&&(l+=s,s=i[++a]);var c=void 0;if(s instanceof zs?d=s:(d=dM,a--),d?.l){s=i[++a],c=i;var u=a;typeof s=="function"&&(s=s(),c[u]=s),c=s}for(u=l+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);l<u;l++){const h=o[l];c?n(r,l,d,c,h):e(r,l,d,h)}}return i[t]=r}function o0(t){return Array.isArray(t)?t[0]instanceof zs?t:[hM,t]:[t,void 0]}function l0(t,e){return t instanceof De?t.v:Array.isArray(t)?wr(t,e):void 0}function Rd(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function Ld(t,e,n,i,r){const s=n.g;let a,o;t[e]=(l,c,u)=>s(l,c,u,o||=Br(il,Rd,Ld,i).T,a||=Pd(i),r)}function Pd(t){let e=t[Eu];if(e!=null)return e;const n=Br(il,Rd,Ld,t);return e=n.ma?(i,r)=>s0(i,r,n):(i,r)=>{for(;Zm(r)&&r.h!=4;){var s=r.l,a=n[s];if(a==null){var o=n.ba;o&&(o=o[s])&&(o=pM(o))!=null&&(a=n[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,xo(o),o.ha)var l=void 0;else l=o.g.g-a,o.g.g=a,l=Ym(o.g,l);a=void 0,o=i,l&&((a=o[Cn]??(o[Cn]=new Mu))[s]??(a[s]=[])).push(l)}}return(i=jo(i))&&(i.da=n.qa[Rf]),!0},t[Eu]=e,t[Rf]=fM.bind(t),e}function fM(t,e,n,i){var r=this[il];const s=this[Eu],a=wr(void 0,r.T),o=jo(t);if(o){var l=!1,c=r.ba;if(c){if(r=(u,d,h)=>{if(h.length!==0)if(c[d])for(const p of h){u=Km(p);try{l=!0,s(a,u)}finally{Jm(u)}}else i?.(t,d,h)},e==null)Co(o,r);else if(o!=null){const u=o[e];u&&r(o,e,u)}if(l){let u=0|t[Pe];if(2&u&&2048&u&&!n?.Ka)throw Error();const d=Ns(u),h=(p,_)=>{if(Hi(t,p,d)!=null){if(n?.Qa===1)return;throw Error()}_!=null&&(u=Wt(t,u,p,_,d)),delete o[p]};e==null?wm(a,0|a[Pe],((p,_)=>{h(p,_)})):h(e,Hi(a,e,d))}}}}function pM(t){const e=(t=o0(t))[0].g;if(t=t[1]){const n=Pd(t),i=Br(il,Rd,Ld,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function rl(t,e,n){t[e]=n.h}function sl(t,e,n,i){let r,s;const a=n.h;t[e]=(o,l,c)=>a(o,l,c,s||=Br(nl,rl,sl,i).T,r||=c0(i))}function c0(t){let e=t[Cf];if(!e){const n=Br(nl,rl,sl,t);e=(i,r)=>u0(i,r,n),t[Cf]=e}return e}function u0(t,e,n){wm(t,0|t[Pe],((i,r)=>{if(r!=null){var s=(function(a,o){var l=a[o];if(l)return l;if((l=a.ba)&&(l=l[o])){var c=(l=o0(l))[0].h;if(l=l[1]){const u=c0(l),d=Br(nl,rl,sl,l).T;l=a.ma?a0(d,u):(h,p,_)=>c(h,p,_,d,u)}else l=c;return a[o]=l}})(n,i);s?s(e,r,i):i<500||Ss(xu,3)}})),(t=jo(t))&&Co(t,((i,r,s)=>{for(Ts(e,e.g.end()),i=0;i<s.length;i++)Ts(e,nd(s[i])||new Uint8Array(0))}))}const mM=Rn(0);function Gs(t,e){if(Array.isArray(e)){var n=0|e[Pe];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&jt(e,t),2&t&&Object.freeze(e),e}}function an(t,e,n){return new zs(t,e,n)}function Hs(t,e,n){return new zs(t,e,n)}function on(t,e,n){Wt(t,0|t[Pe],e,n,Ns(0|t[Pe]))}var gM=tl((function(t,e,n,i,r){if(t.h!==2)return!1;if(t=Zn(t=La(t,wr([void 0,void 0],i),r)),r=Ns(i=0|e[Pe]),2&i)throw Error();let s=Hi(e,n,r);if(s instanceof Gi)(2&s.J)!=0?(s=s.V(),s.push(t),Wt(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var a=0|s[Pe];8192&a||jt(s,a|=8192),2&a&&(s=Hm(s),Wt(e,i,n,s,r)),s.push(t)}else Wt(e,i,n,ga([t]),r);return!0}),(function(t,e,n,i,r){if(e instanceof Gi)e.forEach(((s,a)=>{Do(t,n,wr([a,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&Do(t,n,wr(a,i),r)}ga(e)}}));function d0(t,e,n){(e=fi(e))!=null&&(Wn(t,n,5),t=t.g,rd(e),yd(t))}function h0(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(wa(64,i));if(Ca(i)){if(r==="string")return Nm(i);if(r==="number")return od(i)}})(e),e!=null&&(typeof e=="string"&&wf(e),e!=null))switch(Wn(t,n,0),typeof e){case"number":t=t.g,bs(e),os(t,Rt,kt);break;case"bigint":n=BigInt.asUintN(64,e),n=new bu(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),os(t.g,n.h,n.g);break;default:n=wf(e),os(t.g,n.h,n.g)}}function f0(t,e,n){(e=Us(e))!=null&&e!=null&&(Wn(t,n,0),Zo(t.g,e))}function p0(t,e,n){(e=Pm(e))!=null&&(Wn(t,n,0),t.g.g.push(e?1:0))}function m0(t,e,n){(e=Qt(e))!=null&&Qo(t,n,_m(e))}function g0(t,e,n,i,r){Do(t,n,l0(e,i),r)}function _0(t,e,n){(e=e==null||typeof e=="string"||e instanceof _i?e:void 0)!=null&&Qo(t,n,vd(e,!0).buffer)}function v0(t,e,n){(e=Dm(e))!=null&&e!=null&&(Wn(t,n,0),Vs(t.g,e))}function x0(t,e,n){return(t.h===5||t.h===2)&&(e=ks(e,0|e[Pe],n),t.h==2?Jo(t,Lo,e):e.push(Lo(t.g)),!0)}var Vt=an((function(t,e,n){return t.h===5&&(on(e,n,Lo(t.g)),!0)}),d0,el),_M=Hs(x0,(function(t,e,n){if((e=Gs(fi,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Wn(i,r,5),i=i.g,rd(s),yd(i))}}),el),Dd=Hs(x0,(function(t,e,n){if((e=Gs(fi,e))!=null&&e.length){Wn(t,n,2),Vs(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,rd(e[i]),yd(n)}}),el),vM=an((function(t,e,n){return t.h===5&&(on(e,n,(t=Lo(t.g))===0?void 0:t),!0)}),d0,el),lr=an((function(t,e,n){return t.h!==0?t=!1:(on(e,n,xd(t.g,Lm)),t=!0),t}),h0,t0),rc=an((function(t,e,n){return t.h!==0?e=!1:(on(e,n,(t=xd(t.g,Lm))===mM?void 0:t),e=!0),e}),h0,t0),xM=an((function(t,e,n){return t.h!==0?t=!1:(on(e,n,xd(t.g,HS)),t=!0),t}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(WS(64,i));if(Ca(i)){if(r==="string")return r=Es(Number(i)),Ur(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(Xo(i),i=_a(Rt,kt))),i;if(r==="number")return(i=Es(i))>=0&&Ur(i)||(bs(i),i=Rm(Rt,kt)),i}})(e),e!=null&&(typeof e=="string"&&Af(e),e!=null))switch(Wn(t,n,0),typeof e){case"number":t=t.g,bs(e),os(t,Rt,kt);break;case"bigint":n=BigInt.asUintN(64,e),n=new yu(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),os(t.g,n.h,n.g);break;default:n=Af(e),os(t.g,n.h,n.g)}}),uM),Ht=an((function(t,e,n){return t.h===0&&(on(e,n,or(t.g)),!0)}),f0,wd),Pa=Hs((function(t,e,n){return(t.h===0||t.h===2)&&(e=ks(e,0|e[Pe],n),t.h==2?Jo(t,or,e):e.push(or(t.g)),!0)}),(function(t,e,n){if((e=Gs(Us,e))!=null&&e.length){n=bd(t,n);for(let i=0;i<e.length;i++)Zo(t.g,e[i]);Ed(t,n)}}),wd),rs=an((function(t,e,n){return t.h===0&&(on(e,n,(t=or(t.g))===0?void 0:t),!0)}),f0,wd),Pt=an((function(t,e,n){return t.h===0&&(on(e,n,Sd(t.g)),!0)}),p0,e0),Pr=an((function(t,e,n){return t.h===0&&(on(e,n,(t=Sd(t.g))===!1?void 0:t),!0)}),p0,e0),nn=Hs((function(t,e,n){return t.h===2&&(t=Md(t),ks(e,0|e[Pe],n).push(t),!0)}),(function(t,e,n){if((e=Gs(Qt,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&Qo(i,r,_m(s))}}),Ad),ir=an((function(t,e,n){return t.h===2&&(on(e,n,(t=Md(t))===""?void 0:t),!0)}),m0,Ad),vt=an((function(t,e,n){return t.h===2&&(on(e,n,Md(t)),!0)}),m0,Ad),Jt=(function(t,e,n=Td){return new zs(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=wr(void 0,i),ks(e,0|e[Pe],n).push(i),La(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)g0(t,e[s],n,i,r);1&(t=0|e[Pe])||jt(e,1|t)}})),At=tl((function(t,e,n,i,r,s){if(t.h!==2)return!1;let a=0|e[Pe];return Wm(e,a,s,n,Ns(a)),La(t,e=gd(e,i,n),r),!0}),g0),S0=an((function(t,e,n){return t.h===2&&(on(e,n,Qm(t)),!0)}),_0,n0),SM=Hs((function(t,e,n){return(t.h===0||t.h===2)&&(e=ks(e,0|e[Pe],n),t.h==2?Jo(t,Si,e):e.push(Si(t.g)),!0)}),(function(t,e,n){if((e=Gs(Dm,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Wn(i,r,0),Vs(i.g,s))}}),Cd),MM=an((function(t,e,n){return t.h===0&&(on(e,n,(t=Si(t.g))===0?void 0:t),!0)}),v0,Cd),sn=an((function(t,e,n){return t.h===0&&(on(e,n,or(t.g)),!0)}),(function(t,e,n){(e=Us(e))!=null&&(e=parseInt(e,10),Wn(t,n,0),Zo(t.g,e))}),i0);class yM{constructor(e,n){var i=In;this.g=e,this.h=n,this.m=ot,this.j=Ge,this.defaultValue=void 0,this.l=i.Oa!=null?Cm:void 0}register(){Ho(this)}}function Ei(t,e){return new yM(t,e)}function cr(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Km(n,void 0,void 0,s);try{const a=new t,o=a.v;Pd(e)(o,n);var r=a}finally{Jm(n)}}return r}}function al(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};u0(this.v,e,Br(nl,rl,sl,t)),Ts(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var Lf=class extends De{constructor(t){super(t)}},Pf=[0,ir,an((function(t,e,n){return t.h===2&&(on(e,n,(t=Qm(t))===Ir()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof De){const i=e.Ra;return void(i?(e=i(e),e!=null&&Qo(t,n,vd(e,!0).buffer)):Ss(xu,3))}if(Array.isArray(e))return void Ss(xu,3)}_0(t,e,n)}),n0)];let sc,Df=globalThis.trustedTypes;function If(t){var e;return sc===void 0&&(sc=(function(){let n=null;if(!Df)return n;try{const i=r=>r;n=Df.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=sc)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function io(t,...e){if(e.length===0)return If(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return If(n)}var M0=[0,Ht,sn,Pt,-1,Pa,sn,-1,Pt],bM=class extends De{constructor(t){super(t)}},y0=[0,Pt,vt,Pt,sn,-1,Hs((function(t,e,n){return(t.h===0||t.h===2)&&(e=ks(e,0|e[Pe],n),t.h==2?Jo(t,aM,e):e.push(or(t.g)),!0)}),(function(t,e,n){if((e=Gs(Us,e))!=null&&e.length){n=bd(t,n);for(let i=0;i<e.length;i++)Zo(t.g,e[i]);Ed(t,n)}}),i0),vt,-1,[0,Pt,-1],sn,Pt,-1],b0=[0,3,Pt,-1,2,[0,[2],Ht,At,[0,an((function(t,e,n){return t.h===0&&(on(e,n,Si(t.g)),!0)}),v0,Cd)]],[0,sn,Pt,sn,Pt,sn,Pt,vt,-1],[0,[3,4],vt,-1,At,[0,Ht],At,[0,sn]],[0]],E0=[0,vt,-2],Nf=class extends De{constructor(t){super(t)}},T0=[0],A0=[0,Ht,Pt,1,Pt,-4],In=class extends De{constructor(t){super(t,2)}},qt={};qt[336783863]=[0,vt,Pt,-1,Ht,[0,[1,2,3,4,5,6,7,8,9],At,T0,At,y0,At,E0,At,A0,At,M0,At,[0,vt,-2],At,[0,vt,sn],At,b0,At,[0,sn,-1,Pt]],[0,vt],Pt,[0,[1,3],[2,4],At,[0,Pa],-1,At,[0,nn],-1,Jt,[0,vt,-1]],vt];var Uf=[0,rc,-1,Pr,-3,rc,Pa,ir,rs,rc,-1,Pr,rs,Pr,-2,ir];function wt(t,e){Ko(t,3,e)}function tt(t,e){Ko(t,4,e)}var vn=class extends De{constructor(t){super(t,500)}o(t){return Ge(this,0,7,t)}},ua=[-1,{}],Ff=[0,vt,1,ua],Of=[0,vt,nn,ua];function qn(t,e){_d(t,1,vn,e)}function Dt(t,e){Ko(t,10,e)}function lt(t,e){Ko(t,15,e)}var Nn=class extends De{constructor(t){super(t,500)}o(t){return Ge(this,0,1001,t)}},w0=[-500,Jt,[-500,ir,-1,nn,-3,[-2,qt,Pt],Jt,Pf,rs,-1,Ff,Of,Jt,[0,ir,Pr],ir,Uf,rs,nn,987,nn],4,Jt,[-500,vt,-1,[-1,{}],998,vt],Jt,[-500,vt,nn,-1,[-2,{},Pt],997,nn,-1],rs,Jt,[-500,vt,nn,ua,998,nn],nn,rs,Ff,Of,Jt,[0,ir,-1,ua],nn,-2,Uf,ir,-1,Pr,[0,Pr,MM],978,ua,Jt,Pf];Nn.prototype.g=al(w0);var EM=cr(Nn,w0),TM=class extends De{constructor(t){super(t)}},C0=class extends De{constructor(t){super(t)}g(){return Wi(this,TM,1)}},R0=[0,Jt,[0,Ht,Vt,vt,-1]],ol=cr(C0,R0),AM=class extends De{constructor(t){super(t)}},wM=class extends De{constructor(t){super(t)}},ac=class extends De{constructor(t){super(t)}l(){return ot(this,AM,2)}g(){return Wi(this,wM,5)}},L0=cr(class extends De{constructor(t){super(t)}},[0,nn,Pa,Dd,[0,sn,[0,Ht,-3],[0,Vt,-3],[0,Ht,-1,[0,Jt,[0,Ht,-2]]],Jt,[0,Vt,-1,vt,Vt]],vt,-1,lr,Jt,[0,Ht,Vt],nn,lr]),P0=class extends De{constructor(t){super(t)}},ls=cr(class extends De{constructor(t){super(t)}},[0,Jt,[0,Vt,-4]]),D0=class extends De{constructor(t){super(t)}},Da=cr(class extends De{constructor(t){super(t)}},[0,Jt,[0,Vt,-4]]),CM=class extends De{constructor(t){super(t)}},RM=[0,Ht,-1,Dd,sn],I0=class extends De{constructor(t){super(t)}};I0.prototype.g=al([0,Vt,-4,lr]);var LM=class extends De{constructor(t){super(t)}},PM=cr(class extends De{constructor(t){super(t)}},[0,Jt,[0,1,Ht,vt,R0],lr]),Bf=class extends De{constructor(t){super(t)}},DM=class extends De{constructor(t){super(t)}na(){const t=Lt(this,1,void 0,void 0,Gm);return t??Ir()}},IM=class extends De{constructor(t){super(t)}},N0=[1,2],NM=cr(class extends De{constructor(t){super(t)}},[0,Jt,[0,N0,At,[0,Dd],At,[0,S0],Ht,vt],lr]),Id=class extends De{constructor(t){super(t)}},U0=[0,vt,Ht,Vt,nn,-1],kf=class extends De{constructor(t){super(t)}},UM=[0,Pt,-1],Vf=class extends De{constructor(t){super(t)}},So=[1,2,3,4,5,6],Io=class extends De{constructor(t){super(t)}g(){return Lt(this,1,void 0,void 0,Gm)!=null}l(){return Qt(Lt(this,2))!=null}},Ft=class extends De{constructor(t){super(t)}g(){return Pm(Lt(this,2))??!1}},F0=[0,S0,vt,[0,Ht,lr,-1],[0,xM,lr]],Gt=[0,F0,Pt,[0,So,At,A0,At,y0,At,M0,At,T0,At,E0,At,b0],sn],ll=class extends De{constructor(t){super(t)}},Nd=[0,Gt,Vt,-1,Ht],FM=Ei(502141897,ll);qt[502141897]=Nd;var OM=cr(class extends De{constructor(t){super(t)}},[0,[0,sn,-1,_M,SM],RM]),O0=class extends De{constructor(t){super(t)}},B0=class extends De{constructor(t){super(t)}},Tu=[0,Gt,Vt,[0,Gt],Pt],BM=Ei(508968150,B0);qt[508968150]=[0,Gt,Nd,Tu,Vt,[0,[0,F0]]],qt[508968149]=Tu;var ts=class extends De{constructor(t){super(t)}l(){return ot(this,Id,2)}g(){mt(this,2)}},k0=[0,Gt,U0];qt[478825465]=k0;var kM=class extends De{constructor(t){super(t)}},V0=class extends De{constructor(t){super(t)}},Ud=class extends De{constructor(t){super(t)}},Fd=class extends De{constructor(t){super(t)}},z0=class extends De{constructor(t){super(t)}},zf=[0,Gt,[0,Gt],k0,-1],G0=[0,Gt,Vt,Ht],Od=[0,Gt,Vt],H0=[0,Gt,G0,Od,Vt],VM=Ei(479097054,z0);qt[479097054]=[0,Gt,H0,zf],qt[463370452]=zf,qt[464864288]=G0;var zM=Ei(462713202,Fd);qt[462713202]=H0,qt[474472470]=Od;var GM=class extends De{constructor(t){super(t)}},W0=class extends De{constructor(t){super(t)}},q0=class extends De{constructor(t){super(t)}},X0=class extends De{constructor(t){super(t)}},Bd=[0,Gt,Vt,-1,Ht],Au=[0,Gt,Vt,Pt];X0.prototype.g=al([0,Gt,Od,[0,Gt],Nd,Tu,Bd,Au]);var $0=class extends De{constructor(t){super(t)}},HM=Ei(456383383,$0);qt[456383383]=[0,Gt,U0];var j0=class extends De{constructor(t){super(t)}},WM=Ei(476348187,j0);qt[476348187]=[0,Gt,UM];var Y0=class extends De{constructor(t){super(t)}},Gf=class extends De{constructor(t){super(t)}},K0=[0,sn,-1],qM=Ei(458105876,class extends De{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[Pe];return t=Ln(this,n),e=(function(i,r,s,a){var o=Gf;!a&&Os(i)&&(s=0|(r=i.v)[Pe]);var l=Hi(r,2);if(i=!1,l==null){if(a)return yf();l=[]}else if(l.constructor===Gi){if(!(2&l.J)||a)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[Pe])):l=[];if(a){if(!l.length)return yf();i||(i=!0,Aa(l))}else i&&(i=!1,ga(l),l=Hm(l));return!i&&32&s&&Ta(l,32),s=Wt(r,s,2,a=new Gi(l,o,$S,void 0)),i||Or(r,s),a})(this,e,n,t),!t&&Gf&&(e.ra=!0),e}});qt[458105876]=[0,K0,gM,[!0,lr,[0,vt,-1,nn]],[0,Pa,Pt,sn]];var kd=class extends De{constructor(t){super(t)}},J0=Ei(458105758,kd);qt[458105758]=[0,Gt,vt,K0];var oc=class extends De{constructor(t){super(t)}},Hf=[0,vM,-1,Pr],XM=class extends De{constructor(t){super(t)}},Z0=class extends De{constructor(t){super(t)}},wu=[1,2];Z0.prototype.g=al([0,wu,At,Hf,At,[0,Jt,Hf]]);var Q0=class extends De{constructor(t){super(t)}},$M=Ei(443442058,Q0);qt[443442058]=[0,Gt,vt,Ht,Vt,nn,-1,Pt,Vt],qt[514774813]=Bd;var eg=class extends De{constructor(t){super(t)}},jM=Ei(516587230,eg);function Cu(t,e){return e=e?e.clone():new Id,t.displayNamesLocale!==void 0?mt(e,1,Ra(t.displayNamesLocale)):t.displayNamesLocale===void 0&&mt(e,1),t.maxResults!==void 0?qi(e,2,t.maxResults):"maxResults"in t&&mt(e,2),t.scoreThreshold!==void 0?ke(e,3,t.scoreThreshold):"scoreThreshold"in t&&mt(e,3),t.categoryAllowlist!==void 0?Ro(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&mt(e,4),t.categoryDenylist!==void 0?Ro(e,5,t.categoryDenylist):"categoryDenylist"in t&&mt(e,5),e}function tg(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function Vd(t,e=-1,n=""){return{categories:t.map((i=>({index:Gn(i,1)??0??-1,score:Ot(i,2)??0,categoryName:Qt(Lt(i,3))??""??"",displayName:Qt(Lt(i,4))??""??""}))),headIndex:e,headName:n}}function YM(t){const e={classifications:Wi(t,LM,1).map((n=>Vd(ot(n,C0,4)?.g()??[],Gn(n,2)??0,Qt(Lt(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(Su(n)?n=Number(n):(n=wa(64,n),n=Su(n)?Number(n):String(n)),n):Ca(n)?typeof n=="number"?od(n):Nm(n):void 0})(Lt(t,2,void 0,void 0,wo))!=null&&(e.timestampMs=tg(Lt(t,2,void 0,void 0,wo)??Vm)),e}function ng(t){var e=Ar(t,3,fi,Tr()),n=Ar(t,2,Us,Tr()),i=Ar(t,1,Qt,Tr()),r=Ar(t,9,Qt,Tr());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=ot(t,ac,4)?.l())&&(s.boundingBox={originX:Gn(e,1,Qi)??0,originY:Gn(e,2,Qi)??0,width:Gn(e,3,Qi)??0,height:Gn(e,4,Qi)??0,angle:0}),ot(t,ac,4)?.g().length)for(const a of ot(t,ac,4).g())s.keypoints.push({x:Lt(a,1,void 0,Qi,fi)??0,y:Lt(a,2,void 0,Qi,fi)??0,score:Lt(a,4,void 0,Qi,fi)??0,label:Qt(Lt(a,3,void 0,Qi))??""});return s}function cl(t){const e=[];for(const n of Wi(t,D0,1))e.push({x:Ot(n,1)??0,y:Ot(n,2)??0,z:Ot(n,3)??0,visibility:Ot(n,4)??0});return e}function da(t){const e=[];for(const n of Wi(t,P0,1))e.push({x:Ot(n,1)??0,y:Ot(n,2)??0,z:Ot(n,3)??0,visibility:Ot(n,4)??0});return e}function Wf(t){return Array.from(t,(e=>e>127?e-256:e))}function qf(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let ro;qt[516587230]=[0,Gt,Bd,Au,Vt],qt[518928384]=Au;const KM=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function ig(t){if(t)return!0;if(ro===void 0)try{await WebAssembly.instantiate(KM),ro=!0}catch{ro=!1}return ro}async function so(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await ig(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var is=class{};function rg(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function Xf(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function sg(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Fe(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function $f(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=sg(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function jf(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function si(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function er(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}is.forVisionTasks=function(t,e=!1){return so("vision",t??io``,e)},is.forTextTasks=function(t,e=!1){return so("text",t??io``,e)},is.forGenAiTasks=function(t,e=!1){return so("genai",t??io``,e)},is.forAudioTasks=function(t,e=!1){return so("audio",t??io``,e)},is.isSimdSupported=function(t=!1){return ig(t)};async function JM(t,e,n,i){return t=await(async(r,s,a,o,l)=>{if(s&&await Xf(s),!self.ModuleFactory||a&&(await Xf(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function lc(t,e){const n=ot(t.baseOptions,Io,1)||new Io;typeof e=="string"?(mt(n,2,Ra(e)),mt(n,1)):e instanceof Uint8Array&&(mt(n,1,id(e,!1)),mt(n,2)),Ge(t.baseOptions,0,1,n)}function Yf(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function Ee(t,e){t.C=Math.max(t.C,e)}function ul(t,e){t.B=new vn,Pn(t.B,2,"PassThroughCalculator"),wt(t.B,"free_memory"),tt(t.B,"free_memory_unused_out"),Dt(e,"free_memory"),qn(e,t.B)}function As(t,e){wt(t.B,e),tt(t.B,e+"_unused_out")}function dl(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var Ru=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(ot(this.baseOptions,Io,1)?.g()||ot(this.baseOptions,Io,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=ot(i.baseOptions,Vf,3);if(!s){var a=s=new Vf,o=new Nf;ca(a,4,So,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new bM,ca(r,2,So,a)):(r=s,a=new Nf,ca(r,4,So,a))),Ge(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),lc(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)lc(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{lc(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=EM(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,Yf(this)}finishProcessing(){this.g.finishProcessing(),Yf(this)}close(){this.B=void 0,this.g.closeGraph()}};function sr(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Ru.prototype.close=Ru.prototype.close;class ZM{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Kf(t,e,n){const i=t.g;if(n=sr(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Jf(t,e){const n=t.g,i=sr(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=sr(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=sr(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new ZM(n,i,r,s)}function zd(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function QM(t,e,n,i){return zd(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=Jf(t,!0)),n=t.u):(t.A||(t.A=Jf(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function ag(t,e,n){return zd(t,e),t=sr(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function og(t,e,n){zd(t,e),t.B||(t.B=sr(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function ey(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var lg=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=sr(t.createProgram(),"Failed to create WebGL program"),this.X=Kf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=Kf(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Ii(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Lu(t){var e=Ii(t,1);if(!e){if(e=Ii(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=ws(t);var n=Gd(t);if(og(n,i,cg(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function cg(t){let e=Ii(t,2);if(!e){const n=ws(t);e=dg(t);const i=Lu(t),r=ug(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Pu(t)}return e}function ws(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=sr(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function ug(t){if(t=ws(t),!ao)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))ao=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");ao=t.R16F}return ao}function Gd(t){return t.l||(t.l=new lg),t.l}function dg(t){const e=ws(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ii(t,2);return n||(n=ag(Gd(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Pu(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var ao,Kt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Zf===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Ii(this,0)}ka(){return!!Ii(this,1)}R(){return!!Ii(this,2)}ja(){return(e=Ii(t=this,0))||(e=Lu(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return Lu(this)}N(){return cg(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=ws(this),r=Gd(this);i.activeTexture(i.TEXTURE1),n=ag(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=ug(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),og(r,i,n),QM(r,i,!1,(()=>{dg(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Pu(this)})),ey(r),Pu(this)}}t.push(n)}return new Kt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ws(this).deleteTexture(Ii(this,2)),Zf=-1}};Kt.prototype.close=Kt.prototype.close,Kt.prototype.clone=Kt.prototype.clone,Kt.prototype.getAsWebGLTexture=Kt.prototype.N,Kt.prototype.getAsFloat32Array=Kt.prototype.ia,Kt.prototype.getAsUint8Array=Kt.prototype.ja,Kt.prototype.hasWebGLTexture=Kt.prototype.R,Kt.prototype.hasFloat32Array=Kt.prototype.ka,Kt.prototype.hasUint8Array=Kt.prototype.Fa;var Zf=250;function ei(...t){return t.map((([e,n])=>({start:e,end:n})))}const ty=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((Qf=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:rg()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Fe(this,i||"input_audio",(s=>{Fe(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){si(this,"__graph_config__",(e=>{t(e)})),Fe(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Fe(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){Fe(this,e,(i=>{const[r,s]=$f(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){Fe(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Fe(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Fe(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Fe(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Fe(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Fe(this,e,(i=>{Fe(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){Fe(this,e,(i=>{jf(this,Object.keys(t),(r=>{jf(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Fe(this,n,(r=>{Fe(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){Fe(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Fe(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){Fe(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Fe(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Fe(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Fe(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Fe(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Fe(this,e,(n=>{Fe(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Fe(this,n,(i=>{Fe(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Fe(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){si(this,t,e),Fe(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){er(this,t,e),Fe(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){si(this,t,e),Fe(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){er(this,t,e),Fe(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){si(this,t,e),Fe(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){er(this,t,e),Fe(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){si(this,t,e),Fe(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){er(this,t,e),Fe(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){si(this,t,e),Fe(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){er(this,t,e),Fe(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){si(this,t,e),Fe(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){er(this,t,e),Fe(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){si(this,t,e),Fe(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){er(this,t,e),Fe(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),si(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),Fe(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Qf{get ga(){return this.i}pa(t,e,n){Fe(this,e,(i=>{const[r,s]=$f(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(t,e){si(this,t,e),Fe(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){er(this,t,e),Fe(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Qf,ti=class extends ty{};async function rt(t,e,n){return(async function(i,r,s,a){return JM(i,r,s,a)})(t,n.canvas??(rg()?void 0:document.createElement("canvas")),e,n)}function hg(t,e,n,i){if(t.U){const s=new I0;if(n?.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");ke(s,1,(r.left+r.right)/2),ke(s,2,(r.top+r.bottom)/2),ke(s,4,r.right-r.left),ke(s,3,r.bottom-r.top)}else ke(s,1,.5),ke(s,2,.5),ke(s,4,1),ke(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(ke(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=sg(e);n=Ot(s,3)*o/a,r=Ot(s,4)*a/o,ke(s,4,n),ke(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function ni(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");hg(t,e,n,t.C+1)}function Ti(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");hg(t,e,n,i)}function Cs(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Kt([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var Dn=class extends Ru{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new lg}l(t,e=!0){if("runningMode"in t&&mt(this.baseOptions,2,va(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Dn.prototype.close=Dn.prototype.close;var On=class extends Dn{constructor(t,e){super(new ti(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ge(t=this.h=new ll,0,1,e=new Ft),ke(this.h,2,.5),ke(this.h,3,.3)}get baseOptions(){return ot(this.h,Ft,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&ke(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&ke(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},ni(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ti(this,t,n,e),this.j}m(){var t=new Nn;Dt(t,"image_in"),Dt(t,"norm_rect_in"),lt(t,"detections");const e=new In;bi(e,FM,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect_in"),tt(n,"DETECTIONS:detections"),n.o(e),qn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=L0(s),this.j.detections.push(ng(i));Ee(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Ee(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};On.prototype.detectForVideo=On.prototype.G,On.prototype.detect=On.prototype.F,On.prototype.setOptions=On.prototype.o,On.createFromModelPath=async function(t,e){return rt(On,t,{baseOptions:{modelAssetPath:e}})},On.createFromModelBuffer=function(t,e){return rt(On,t,{baseOptions:{modelAssetBuffer:e}})},On.createFromOptions=function(t,e){return rt(On,t,e)};var Hd=ei([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Wd=ei([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),qd=ei([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),fg=ei([474,475],[475,476],[476,477],[477,474]),Xd=ei([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),$d=ei([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),pg=ei([469,470],[470,471],[471,472],[472,469]),jd=ei([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),mg=[...Hd,...Wd,...qd,...Xd,...$d,...jd],gg=ei([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function ep(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Ct=class extends Dn{constructor(t,e){super(new ti(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ge(t=this.h=new B0,0,1,e=new Ft),this.A=new O0,Ge(this.h,0,3,this.A),this.u=new ll,Ge(this.h,0,2,this.u),qi(this.u,4,1),ke(this.u,2,.5),ke(this.A,2,.5),ke(this.h,4,.5)}get baseOptions(){return ot(this.h,Ft,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"numFaces"in t&&qi(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&ke(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&ke(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&ke(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return ep(this),ni(this,t,e),this.j}G(t,e,n){return ep(this),Ti(this,t,n,e),this.j}m(){var t=new Nn;Dt(t,"image_in"),Dt(t,"norm_rect"),lt(t,"face_landmarks");const e=new In;bi(e,BM,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),tt(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),qn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=Da(s),this.j.faceLandmarks.push(cl(i));Ee(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{Ee(this,i)})),this.outputFaceBlendshapes&&(lt(t,"blendshapes"),tt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=ol(s),this.j.faceBlendshapes.push(Vd(i.g()??[]));Ee(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{Ee(this,i)}))),this.outputFacialTransformationMatrixes&&(lt(t,"face_geometry"),tt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=ot(i=OM(s),CM,2))&&this.j.facialTransformationMatrixes.push({rows:Gn(i,1)??0??0,columns:Gn(i,2)??0??0,data:Ar(i,3,fi,Tr()).slice()??[]});Ee(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{Ee(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ct.prototype.detectForVideo=Ct.prototype.G,Ct.prototype.detect=Ct.prototype.F,Ct.prototype.setOptions=Ct.prototype.o,Ct.createFromModelPath=function(t,e){return rt(Ct,t,{baseOptions:{modelAssetPath:e}})},Ct.createFromModelBuffer=function(t,e){return rt(Ct,t,{baseOptions:{modelAssetBuffer:e}})},Ct.createFromOptions=function(t,e){return rt(Ct,t,e)},Ct.FACE_LANDMARKS_LIPS=Hd,Ct.FACE_LANDMARKS_LEFT_EYE=Wd,Ct.FACE_LANDMARKS_LEFT_EYEBROW=qd,Ct.FACE_LANDMARKS_LEFT_IRIS=fg,Ct.FACE_LANDMARKS_RIGHT_EYE=Xd,Ct.FACE_LANDMARKS_RIGHT_EYEBROW=$d,Ct.FACE_LANDMARKS_RIGHT_IRIS=pg,Ct.FACE_LANDMARKS_FACE_OVAL=jd,Ct.FACE_LANDMARKS_CONTOURS=mg,Ct.FACE_LANDMARKS_TESSELATION=gg;var Yd=ei([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function tp(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function np(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function ip(t,e=!0){const n=[];for(const r of t){var i=ol(r);t=[];for(const s of i.g())i=e&&Gn(s,1)!=null?Gn(s,1)??0:-1,t.push({score:Ot(s,2)??0,index:i,categoryName:Qt(Lt(s,3))??""??"",displayName:Qt(Lt(s,4))??""??""});n.push(t)}return n}var bn=class extends Dn{constructor(t,e){super(new ti(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ge(t=this.j=new z0,0,1,e=new Ft),this.u=new Fd,Ge(this.j,0,2,this.u),this.D=new Ud,Ge(this.u,0,3,this.D),this.A=new V0,Ge(this.u,0,2,this.A),this.h=new kM,Ge(this.j,0,3,this.h),ke(this.A,2,.5),ke(this.u,4,.5),ke(this.D,2,.5)}get baseOptions(){return ot(this.j,Ft,1)}set baseOptions(t){Ge(this.j,0,1,t)}o(t){if(qi(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&ke(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ke(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ke(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new ts,n=e,i=Cu(t.cannedGesturesClassifierOptions,ot(this.h,ts,3)?.l());Ge(n,0,2,i),Ge(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&ot(this.h,ts,3)?.g();return t.customGesturesClassifierOptions?(Ge(n=e=new ts,0,2,i=Cu(t.customGesturesClassifierOptions,ot(this.h,ts,4)?.l())),Ge(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&ot(this.h,ts,4)?.g(),this.l(t)}Ha(t,e){return tp(this),ni(this,t,e),np(this)}Ia(t,e,n){return tp(this),Ti(this,t,n,e),np(this)}m(){var t=new Nn;Dt(t,"image_in"),Dt(t,"norm_rect"),lt(t,"hand_gestures"),lt(t,"hand_landmarks"),lt(t,"world_hand_landmarks"),lt(t,"handedness");const e=new In;bi(e,VM,this.j);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),tt(n,"HAND_GESTURES:hand_gestures"),tt(n,"LANDMARKS:hand_landmarks"),tt(n,"WORLD_LANDMARKS:world_hand_landmarks"),tt(n,"HANDEDNESS:handedness"),n.o(e),qn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=Da(s);const a=[];for(const o of Wi(i,D0,1))a.push({x:Ot(o,1)??0,y:Ot(o,2)??0,z:Ot(o,3)??0,visibility:Ot(o,4)??0});this.landmarks.push(a)}Ee(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ee(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=ls(s);const a=[];for(const o of Wi(i,P0,1))a.push({x:Ot(o,1)??0,y:Ot(o,2)??0,z:Ot(o,3)??0,visibility:Ot(o,4)??0});this.worldLandmarks.push(a)}Ee(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ee(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...ip(i,!1)),Ee(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{Ee(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...ip(i)),Ee(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ee(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function rp(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}bn.prototype.recognizeForVideo=bn.prototype.Ia,bn.prototype.recognize=bn.prototype.Ha,bn.prototype.setOptions=bn.prototype.o,bn.createFromModelPath=function(t,e){return rt(bn,t,{baseOptions:{modelAssetPath:e}})},bn.createFromModelBuffer=function(t,e){return rt(bn,t,{baseOptions:{modelAssetBuffer:e}})},bn.createFromOptions=function(t,e){return rt(bn,t,e)},bn.HAND_CONNECTIONS=Yd;var En=class extends Dn{constructor(t,e){super(new ti(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ge(t=this.h=new Fd,0,1,e=new Ft),this.u=new Ud,Ge(this.h,0,3,this.u),this.j=new V0,Ge(this.h,0,2,this.j),qi(this.j,3,1),ke(this.j,2,.5),ke(this.u,2,.5),ke(this.h,4,.5)}get baseOptions(){return ot(this.h,Ft,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"numHands"in t&&qi(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&ke(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ke(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ke(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ni(this,t,e),rp(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ti(this,t,n,e),rp(this)}m(){var t=new Nn;Dt(t,"image_in"),Dt(t,"norm_rect"),lt(t,"hand_landmarks"),lt(t,"world_hand_landmarks"),lt(t,"handedness");const e=new In;bi(e,zM,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),tt(n,"LANDMARKS:hand_landmarks"),tt(n,"WORLD_LANDMARKS:world_hand_landmarks"),tt(n,"HANDEDNESS:handedness"),n.o(e),qn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=Da(s),this.landmarks.push(cl(i));Ee(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ee(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=ls(s),this.worldLandmarks.push(da(i));Ee(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ee(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const l of i){i=ol(l);const c=[];for(const u of i.g())c.push({score:Ot(u,2)??0,index:Gn(u,1)??0??-1,categoryName:Qt(Lt(u,3))??""??"",displayName:Qt(Lt(u,4))??""??""});o.push(c)}a.call(s,...o),Ee(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ee(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};En.prototype.detectForVideo=En.prototype.G,En.prototype.detect=En.prototype.F,En.prototype.setOptions=En.prototype.o,En.createFromModelPath=function(t,e){return rt(En,t,{baseOptions:{modelAssetPath:e}})},En.createFromModelBuffer=function(t,e){return rt(En,t,{baseOptions:{modelAssetBuffer:e}})},En.createFromOptions=function(t,e){return rt(En,t,e)},En.HAND_CONNECTIONS=Yd;var _g=ei([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function sp(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function ap(t){try{if(!t.D)return t.h;t.D(t.h)}finally{dl(t)}}function oo(t,e){t=Da(t),e.push(cl(t))}var Tt=class extends Dn{constructor(t,e){super(new ti(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ge(t=this.j=new X0,0,1,e=new Ft),this.I=new Ud,Ge(this.j,0,2,this.I),this.W=new GM,Ge(this.j,0,3,this.W),this.u=new ll,Ge(this.j,0,4,this.u),this.O=new O0,Ge(this.j,0,5,this.O),this.A=new W0,Ge(this.j,0,6,this.A),this.M=new q0,Ge(this.j,0,7,this.M),ke(this.u,2,.5),ke(this.u,3,.3),ke(this.O,2,.5),ke(this.A,2,.5),ke(this.A,3,.3),ke(this.M,2,.5),ke(this.I,2,.5)}get baseOptions(){return ot(this.j,Ft,1)}set baseOptions(t){Ge(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&ke(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&ke(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&ke(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&ke(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&ke(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&ke(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&ke(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,sp(this),ni(this,t,i),ap(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,sp(this),Ti(this,t,r,e),ap(this)}m(){var t=new Nn;Dt(t,"input_frames_image"),lt(t,"pose_landmarks"),lt(t,"pose_world_landmarks"),lt(t,"face_landmarks"),lt(t,"left_hand_landmarks"),lt(t,"left_hand_world_landmarks"),lt(t,"right_hand_landmarks"),lt(t,"right_hand_world_landmarks");const e=new In,n=new Lf;Pn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))mt(r,2,Yo(s,0,xa));else{if(!(typeof s=="string"||s instanceof _i||td(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");tr(r,2,id(s,!1),Ir())}})(n,this.j.g());const i=new vn;Pn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),_d(i,8,Lf,n),wt(i,"IMAGE:input_frames_image"),tt(i,"POSE_LANDMARKS:pose_landmarks"),tt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),tt(i,"FACE_LANDMARKS:face_landmarks"),tt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),tt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),tt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),tt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),qn(t,i),ul(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{oo(r,this.h.poseLandmarks),Ee(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{Ee(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=ls(r),a.push(da(r)),Ee(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{Ee(this,r)})),this.outputPoseSegmentationMasks&&(tt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),As(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[Cs(this,r,!0,!this.D)],Ee(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],Ee(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{oo(r,this.h.faceLandmarks),Ee(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{Ee(this,r)})),this.outputFaceBlendshapes&&(lt(t,"extra_blendshapes"),tt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=ol(r),a.push(Vd(r.g()??[]))),Ee(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{Ee(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{oo(r,this.h.leftHandLandmarks),Ee(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{Ee(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=ls(r),a.push(da(r)),Ee(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{Ee(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{oo(r,this.h.rightHandLandmarks),Ee(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{Ee(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=ls(r),a.push(da(r)),Ee(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{Ee(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Tt.prototype.detectForVideo=Tt.prototype.G,Tt.prototype.detect=Tt.prototype.F,Tt.prototype.setOptions=Tt.prototype.o,Tt.createFromModelPath=function(t,e){return rt(Tt,t,{baseOptions:{modelAssetPath:e}})},Tt.createFromModelBuffer=function(t,e){return rt(Tt,t,{baseOptions:{modelAssetBuffer:e}})},Tt.createFromOptions=function(t,e){return rt(Tt,t,e)},Tt.HAND_CONNECTIONS=Yd,Tt.POSE_CONNECTIONS=_g,Tt.FACE_LANDMARKS_LIPS=Hd,Tt.FACE_LANDMARKS_LEFT_EYE=Wd,Tt.FACE_LANDMARKS_LEFT_EYEBROW=qd,Tt.FACE_LANDMARKS_LEFT_IRIS=fg,Tt.FACE_LANDMARKS_RIGHT_EYE=Xd,Tt.FACE_LANDMARKS_RIGHT_EYEBROW=$d,Tt.FACE_LANDMARKS_RIGHT_IRIS=pg,Tt.FACE_LANDMARKS_FACE_OVAL=jd,Tt.FACE_LANDMARKS_CONTOURS=mg,Tt.FACE_LANDMARKS_TESSELATION=gg;var Bn=class extends Dn{constructor(t,e){super(new ti(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ge(t=this.h=new $0,0,1,e=new Ft)}get baseOptions(){return ot(this.h,Ft,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return Ge(this.h,0,2,Cu(t,ot(this.h,Id,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},ni(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Ti(this,t,n,e),this.j}m(){var t=new Nn;Dt(t,"input_image"),Dt(t,"norm_rect"),lt(t,"classifications");const e=new In;bi(e,HM,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),wt(n,"IMAGE:input_image"),wt(n,"NORM_RECT:norm_rect"),tt(n,"CLASSIFICATIONS:classifications"),n.o(e),qn(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=YM(PM(i)),Ee(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{Ee(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Bn.prototype.classifyForVideo=Bn.prototype.ta,Bn.prototype.classify=Bn.prototype.sa,Bn.prototype.setOptions=Bn.prototype.o,Bn.createFromModelPath=function(t,e){return rt(Bn,t,{baseOptions:{modelAssetPath:e}})},Bn.createFromModelBuffer=function(t,e){return rt(Bn,t,{baseOptions:{modelAssetBuffer:e}})},Bn.createFromOptions=function(t,e){return rt(Bn,t,e)};var Tn=class extends Dn{constructor(t,e){super(new ti(t,e),"image_in","norm_rect",!0),this.h=new j0,this.embeddings={embeddings:[]},Ge(t=this.h,0,1,e=new Ft)}get baseOptions(){return ot(this.h,Ft,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){var e=this.h,n=ot(this.h,kf,2);return n=n?n.clone():new kf,t.l2Normalize!==void 0?mt(n,1,va(t.l2Normalize)):"l2Normalize"in t&&mt(n,1),t.quantize!==void 0?mt(n,2,va(t.quantize)):"quantize"in t&&mt(n,2),Ge(e,0,2,n),this.l(t)}za(t,e){return ni(this,t,e),this.embeddings}Aa(t,e,n){return Ti(this,t,n,e),this.embeddings}m(){var t=new Nn;Dt(t,"image_in"),Dt(t,"norm_rect"),lt(t,"embeddings_out");const e=new In;bi(e,WM,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),tt(n,"EMBEDDINGS:embeddings_out"),n.o(e),qn(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=NM(i),this.embeddings=(function(s){return{embeddings:Wi(s,IM,1).map((a=>{const o={headIndex:Gn(a,3)??0??-1,headName:Qt(Lt(a,4))??""??""};var l=a.v;return qm(l,0|l[Pe],Bf,ic(a,1))!==void 0?(a=Ar(a=ot(a,Bf,ic(a,1),void 0),1,fi,Tr()),o.floatEmbedding=a.slice()):(l=new Uint8Array(0),o.quantizedEmbedding=ot(a,DM,ic(a,2),void 0)?.na()?.h()??l),o})),timestampMs:tg(Lt(s,2,void 0,void 0,wo)??Vm)}})(i),Ee(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{Ee(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Tn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=qf(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=qf(Wf(t.quantizedEmbedding),Wf(e.quantizedEmbedding))}return t},Tn.prototype.embedForVideo=Tn.prototype.Aa,Tn.prototype.embed=Tn.prototype.za,Tn.prototype.setOptions=Tn.prototype.o,Tn.createFromModelPath=function(t,e){return rt(Tn,t,{baseOptions:{modelAssetPath:e}})},Tn.createFromModelBuffer=function(t,e){return rt(Tn,t,{baseOptions:{modelAssetBuffer:e}})},Tn.createFromOptions=function(t,e){return rt(Tn,t,e)};var Du=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function ny(t){const e=(function(n){return Wi(n,vn,1)})(t.ca()).filter((n=>(Qt(Lt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(ot(e[0],In,7)?.j()?.g()??new Map).forEach(((n,i)=>{t.u[Number(i)]=Qt(Lt(n,1))??""}))}function op(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function lp(t){try{const e=new Du(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{dl(t)}}Du.prototype.close=Du.prototype.close;var gn=class extends Dn{constructor(t,e){super(new ti(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new kd,this.A=new Y0,Ge(this.h,0,3,this.A),Ge(t=this.h,0,1,e=new Ft)}get baseOptions(){return ot(this.h,Ft,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?mt(this.h,2,Ra(t.displayNamesLocale)):"displayNamesLocale"in t&&mt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){ny(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,op(this),ni(this,t,i),lp(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,op(this),Ti(this,t,r,e),lp(this)}Da(){return this.u}m(){var t=new Nn;Dt(t,"image_in"),Dt(t,"norm_rect");const e=new In;bi(e,J0,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),n.o(e),qn(t,n),ul(this,t),this.outputConfidenceMasks&&(lt(t,"confidence_masks"),tt(n,"CONFIDENCE_MASKS:confidence_masks"),As(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Cs(this,s,!0,!this.j))),Ee(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ee(this,i)}))),this.outputCategoryMask&&(lt(t,"category_mask"),tt(n,"CATEGORY_MASK:category_mask"),As(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Cs(this,i,!1,!this.j),Ee(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ee(this,i)}))),lt(t,"quality_scores"),tt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Ee(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ee(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};gn.prototype.getLabels=gn.prototype.Da,gn.prototype.segmentForVideo=gn.prototype.La,gn.prototype.segment=gn.prototype.segment,gn.prototype.setOptions=gn.prototype.o,gn.createFromModelPath=function(t,e){return rt(gn,t,{baseOptions:{modelAssetPath:e}})},gn.createFromModelBuffer=function(t,e){return rt(gn,t,{baseOptions:{modelAssetBuffer:e}})},gn.createFromOptions=function(t,e){return rt(gn,t,e)};var Iu=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};Iu.prototype.close=Iu.prototype.close;var ai=class extends Dn{constructor(t,e){super(new ti(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new kd,this.u=new Y0,Ge(this.h,0,3,this.u),Ge(t=this.h,0,1,e=new Ft)}get baseOptions(){return ot(this.h,Ft,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new Z0,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new oc;tr(s,3,va(!0),!1),tr(s,1,oa(e.keypoint.x),0),tr(s,2,oa(e.keypoint.y),0),ca(i,1,wu,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new XM;for(s of e.scribble)tr(e=new oc,3,va(!0),!1),tr(e,1,oa(s.x),0),tr(e,2,oa(s.y),0),_d(o,1,oc,e);ca(i,2,wu,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),ni(this,t,r);e:{try{const o=new Iu(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break e}this.j(o)}finally{dl(this)}a=void 0}return a}m(){var t=new Nn;Dt(t,"image_in"),Dt(t,"roi_in"),Dt(t,"norm_rect_in");const e=new In;bi(e,J0,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),wt(n,"IMAGE:image_in"),wt(n,"ROI:roi_in"),wt(n,"NORM_RECT:norm_rect_in"),n.o(e),qn(t,n),ul(this,t),this.outputConfidenceMasks&&(lt(t,"confidence_masks"),tt(n,"CONFIDENCE_MASKS:confidence_masks"),As(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Cs(this,s,!0,!this.j))),Ee(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ee(this,i)}))),this.outputCategoryMask&&(lt(t,"category_mask"),tt(n,"CATEGORY_MASK:category_mask"),As(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Cs(this,i,!1,!this.j),Ee(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ee(this,i)}))),lt(t,"quality_scores"),tt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Ee(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ee(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ai.prototype.segment=ai.prototype.segment,ai.prototype.setOptions=ai.prototype.o,ai.createFromModelPath=function(t,e){return rt(ai,t,{baseOptions:{modelAssetPath:e}})},ai.createFromModelBuffer=function(t,e){return rt(ai,t,{baseOptions:{modelAssetBuffer:e}})},ai.createFromOptions=function(t,e){return rt(ai,t,e)};var kn=class extends Dn{constructor(t,e){super(new ti(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ge(t=this.h=new Q0,0,1,e=new Ft)}get baseOptions(){return ot(this.h,Ft,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?mt(this.h,2,Ra(t.displayNamesLocale)):"displayNamesLocale"in t&&mt(this.h,2),t.maxResults!==void 0?qi(this.h,3,t.maxResults):"maxResults"in t&&mt(this.h,3),t.scoreThreshold!==void 0?ke(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&mt(this.h,4),t.categoryAllowlist!==void 0?Ro(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&mt(this.h,5),t.categoryDenylist!==void 0?Ro(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&mt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},ni(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ti(this,t,n,e),this.j}m(){var t=new Nn;Dt(t,"input_frame_gpu"),Dt(t,"norm_rect"),lt(t,"detections");const e=new In;bi(e,$M,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),wt(n,"IMAGE:input_frame_gpu"),wt(n,"NORM_RECT:norm_rect"),tt(n,"DETECTIONS:detections"),n.o(e),qn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=L0(s),this.j.detections.push(ng(i));Ee(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Ee(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};kn.prototype.detectForVideo=kn.prototype.G,kn.prototype.detect=kn.prototype.F,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=async function(t,e){return rt(kn,t,{baseOptions:{modelAssetPath:e}})},kn.createFromModelBuffer=function(t,e){return rt(kn,t,{baseOptions:{modelAssetBuffer:e}})},kn.createFromOptions=function(t,e){return rt(kn,t,e)};var Nu=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function cp(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function up(t){try{const e=new Nu(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{dl(t)}}Nu.prototype.close=Nu.prototype.close;var An=class extends Dn{constructor(t,e){super(new ti(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ge(t=this.h=new eg,0,1,e=new Ft),this.A=new q0,Ge(this.h,0,3,this.A),this.j=new W0,Ge(this.h,0,2,this.j),qi(this.j,4,1),ke(this.j,2,.5),ke(this.A,2,.5),ke(this.h,4,.5)}get baseOptions(){return ot(this.h,Ft,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"numPoses"in t&&qi(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&ke(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&ke(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&ke(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,cp(this),ni(this,t,i),up(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,cp(this),Ti(this,t,r,e),up(this)}m(){var t=new Nn;Dt(t,"image_in"),Dt(t,"norm_rect"),lt(t,"normalized_landmarks"),lt(t,"world_landmarks"),lt(t,"segmentation_masks");const e=new In;bi(e,jM,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),wt(n,"IMAGE:image_in"),wt(n,"NORM_RECT:norm_rect"),tt(n,"NORM_LANDMARKS:normalized_landmarks"),tt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),qn(t,n),ul(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=Da(s),this.landmarks.push(cl(i));Ee(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],Ee(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=ls(s),this.worldLandmarks.push(da(i));Ee(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],Ee(this,i)})),this.outputSegmentationMasks&&(tt(n,"SEGMENTATION_MASK:segmentation_masks"),As(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>Cs(this,s,!0,!this.u))),Ee(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],Ee(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};An.prototype.detectForVideo=An.prototype.G,An.prototype.detect=An.prototype.F,An.prototype.setOptions=An.prototype.o,An.createFromModelPath=function(t,e){return rt(An,t,{baseOptions:{modelAssetPath:e}})},An.createFromModelBuffer=function(t,e){return rt(An,t,{baseOptions:{modelAssetBuffer:e}})},An.createFromOptions=function(t,e){return rt(An,t,e)},An.POSE_CONNECTIONS=_g;function iy(t){return t==="arriere"?"arriere":"avant"}function ry(t){return t==="avant"?"arriere":"avant"}function sy(t){return{video:{facingMode:{ideal:t==="arriere"?"environment":"user"}},audio:!1}}function ay(t){return t==="avant"}function oy(){return"Je vais allumer ma caméra pour te voir et réagir avec toi. Rien n'est enregistré ni envoyé : tout reste dans ton appareil. Tu peux l'éteindre quand tu veux."}const vg="nath.camera.face";function ly(t){return iy(t.getItem(vg))}function cy(t,e){t.setItem(vg,e)}const uy="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",dy="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm";let cc=null;function hy(){return cc||(cc=is.forVisionTasks(dy).then(t=>Ct.createFromOptions(t,{baseOptions:{modelAssetPath:uy},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!0}))),cc}async function fy(t,e,n){const i=await hy();let r=null,s=!0,a=performance.now();const o=async c=>{r&&r.getTracks().forEach(u=>u.stop()),r=await navigator.mediaDevices.getUserMedia(sy(c)),t.srcObject=r,t.style.transform=ay(c)?"scaleX(-1)":"none",await t.play()},l=()=>{if(s){if(t.readyState>=2){const c=performance.now(),d=i.detectForVideo(t,c).faceBlendshapes?.[0]?.categories;if(d){a=c;const h=p=>d.find(_=>_.categoryName===p)?.score??0;n({smile:(h("mouthSmileLeft")+h("mouthSmileRight"))/2,browDown:(h("browDownLeft")+h("browDownRight"))/2,eyeBlink:(h("eyeBlinkLeft")+h("eyeBlinkRight"))/2,jawOpen:h("jawOpen")})}else c-a>2e3&&n({smile:0,browDown:0,eyeBlink:0,jawOpen:0})}requestAnimationFrame(l)}};return await o(e),requestAnimationFrame(l),{eteindre(){s=!1,r&&(r.getTracks().forEach(c=>c.stop()),r=null),t.srcObject=null},async basculer(c){await o(c)}}}class py{constructor(e,n,i,r){this.video=e,this.storage=n,this.onShapes=i,this.onEtat=r,this.face=ly(n)}video;storage;onShapes;onEtat;manege=null;face;get ouverte(){return this.manege!=null}get faceCourante(){return this.face}async basculer(){return this.manege?(this.manege.eteindre(),this.manege=null,this.onEtat(!1),!1):(this.manege=await fy(this.video,this.face,this.onShapes),this.onEtat(!0),!0)}async basculerFace(){return this.face=ry(this.face),cy(this.storage,this.face),this.manege&&await this.manege.basculer(this.face),this.face}}function my(t){const e={joie:t.smile*1.2,tension:t.browDown*1+(t.eyeBlink<.2?.1:0),tristesse:t.eyeBlink*.8+t.jawOpen*.2-t.smile,calme:.15};return Object.entries(e).sort((n,i)=>i[1]-n[1])[0][0]}function gy(t=20){let e="calme",n=null,i=0;return r=>r===e?(n=null,i=0,e):(r===n?i++:(n=r,i=1),i>=t&&(e=r,n=null,i=0),e)}function _y(t){const e=t.reduce((n,i)=>n+i,0)/t.length;return t.map(n=>n-e)}function vy(t,e){return t.map((n,i)=>{const r=Math.max(0,i-e+1);return t.slice(r,i+1).reduce((s,a)=>s+a,0)/(i+1-r)})}function xy(t){const e=[];for(let n=1;n<t.length;n++)t[n-1]<=0&&t[n]>0&&e.push(n);return e}function Sy(t,e){if(t.length<Math.floor(e*4))return null;const n=_y(t.slice(-Math.floor(e*10))),i=vy(n,5),r=xy(i);if(r.length<3)return null;const s=(r[r.length-1]-r[0])/(r.length-1),a=60*e/s;return a>=30&&a<=180?a:null}function My(t,e){if(t.readyState<2)return null;const n=24,i=24;e.drawImage(t,t.videoWidth*.35,t.videoHeight*.35,n,i,0,0,n,i);const r=e.getImageData(0,0,n,i).data;let s=0;for(let a=0;a<r.length;a+=4)s+=.299*r[a]+.587*r[a+1]+.114*r[a+2];return s/(n*i)}function dp(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}const hp=["Brume","Aube","Zéphyr","Nimbus","Cirrus","Écho","Lueur","Souffle","Voile","Nébuleuse"],fp=["dorée","bleue","polaire","douce","haute","sereine","vague","claire"];function uc(t){return"#"+(t&16777215).toString(16).padStart(6,"0")}function yy(t){const e=dp(t),n=dp(t+"|2");return{nom:`${hp[e%hp.length]} ${fp[n%fp.length]}`,palette:[uc(1056832+(e&3092287)),uc(6320272+(e>>8&4144975)),uc(13689072+(e>>16&986895))],musiqueSeed:n}}function by(t,e){const n=(i,r)=>{const s=t.getBoundingClientRect();e((i-s.left)/s.width,1-(r-s.top)/s.height)};t.addEventListener("pointermove",i=>n(i.clientX,i.clientY)),t.addEventListener("touchmove",i=>{const r=i.touches[0];r&&n(r.clientX,r.clientY)},{passive:!0})}function Ey(t){window.addEventListener("deviceorientation",e=>{e.gamma!=null&&e.beta!=null&&t(Math.max(-1,Math.min(1,e.gamma/45)),Math.max(-1,Math.min(1,(e.beta-45)/45)))})}const pp={calme:[0,2,4,7,9],joie:[0,4,7,11],tristesse:[0,3,5,8,10],tension:[0,1,6,8,11]};function Ty(t){return pp[t]??pp.calme}function Ay(t,e,n){const i=Math.imul(t^Math.imul(e+1,2654435761),2246822507)>>>0,r=Ty(n),s=r[i%r.length];return{midi:48+12*((i>>>8)%2)+s,duree:1.5+(i>>>16)%20/10}}function mp(t){return 440*Math.pow(2,(t-69)/12)}let dn=null,Bi=null,wy=0,xg=0,Sg="calme",Mg=0,hl=!1;function gp(){if(!dn||!Bi||hl)return;const t=Ay(xg,wy++,Sg),e=dn.currentTime,n=dn.createGain();n.connect(Bi);const i=.16+Mg*.1;n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(i,e+Math.min(1.2,t.duree*.4)),n.gain.exponentialRampToValueAtTime(1e-4,e+t.duree+1.5);const r=dn.createOscillator();r.type="triangle",r.frequency.value=mp(t.midi);const s=dn.createOscillator();s.type="sine",s.frequency.value=mp(t.midi-12);const a=dn.createGain();a.gain.value=.5,s.connect(a),a.connect(n),r.connect(n),r.start(e),s.start(e),r.stop(e+t.duree+1.6),s.stop(e+t.duree+1.6)}function yg(t){if(dn)return!0;try{dn=new AudioContext,xg=t>>>0,Bi=dn.createGain(),Bi.gain.value=hl?0:.5;const e=dn.createBiquadFilter();return e.type="lowpass",e.frequency.value=1200,e.Q.value=.4,Bi.connect(e),e.connect(dn.destination),window.setInterval(gp,2600),gp(),!0}catch{return!1}}function Cy(t){Sg=t}function Ry(t){Mg=Math.max(0,Math.min(1,t))}function bg(){hl=!0,Bi&&dn&&Bi.gain.linearRampToValueAtTime(0,dn.currentTime+.4)}function Ly(){hl=!1,Bi&&dn&&Bi.gain.linearRampToValueAtTime(.5,dn.currentTime+.4)}const Eg="nath.musique";function fl(t){return t.getItem(Eg)==="eteinte"}function Py(t){const e=!fl(t);return t.setItem(Eg,e?"eteinte":"active"),e}const Uu={zero:0,un:1,une:1,deux:2,trois:3,quatre:4,cinq:5,six:6,sept:7,huit:8,neuf:9,dix:10,onze:11,douze:12,treize:13,quatorze:14,quinze:15,seize:16,"dix-sept":17,"dix-huit":18,"dix-neuf":19,vingt:20,cent:100,mille:1e3},Dy=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],Iy=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],pl=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),dc={plus:"plus",additionne:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"},Ny=new Set(["si","combien","puis","alors","donne","calcule","calcul","fais","fait","vaut","egal","est","ce","que","quoi","resultat","reponse","nombre","montant"]),Uy=/\d+(?:[.,]\d+)?|dix-(?:sept|huit|neuf)|[a-z]+|[()+*/-]/g;function Fy(t){const e=pl(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois "),n=[];let i=[];for(const r of e.match(Uy)??[]){let s=null;if(/^\d+(?:[.,]\d+)?$/.test(r))s={t:"nb",v:parseFloat(r.replace(",","."))};else if(Object.hasOwn(Uu,r))s={t:"nb",v:Uu[r]};else if(r==="plus"||r==="+")s={t:"op",v:dc[r]??"plus"};else if(r==="moins"||r==="-")s={t:"op",v:"moins"};else if(r==="fois"||r==="multiplie"||r==="x"||r==="*")s={t:"op",v:"fois"};else if(r==="divise"||r==="/")s={t:"op",v:"divise"};else if(dc[r])s={t:"op",v:dc[r]};else if(r==="(")s={t:"ouv"};else if(r===")")s={t:"fer"};else if(Ny.has(r))continue;s?i.push(s):i.length&&(n.push(i),i=[])}return i.length&&n.push(i),n}function _p(t,e){const n=t[e.i];if(!n)return e.echoue=!0,null;if(n.t==="nb")return e.i++,n.v;if(n.t==="ouv"){e.i++;const i=Tg(t,e);if(e.echoue)return null;const r=t[e.i];return!r||r.t!=="fer"?(e.echoue=!0,null):(e.i++,i)}return e.echoue=!0,null}function vp(t,e){let n=_p(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="fois"&&i.v!=="divise")break;e.i++,e.ops++;const r=_p(t,e);if(e.echoue||r==null)return null;if(i.v==="fois")n=n*r;else{if(r===0)return e.echoue=!0,null;n=n/r}}return n}function Tg(t,e){let n=vp(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="plus"&&i.v!=="moins")break;e.i++,e.ops++;const r=vp(t,e);if(e.echoue||r==null)return null;n=i.v==="plus"?n+r:n-r}return n}function Ag(t){for(let e of Fy(t)){if(e.length>=2&&e[0].t==="op"&&e[1].t==="nb"&&(e=e.slice(1)),!e.some(r=>r.t==="op"))continue;const n={i:0,ops:0,echoue:!1},i=Tg(e,n);if(!n.echoue&&n.ops>0&&n.i===e.length&&i!=null&&Number.isFinite(i))return i}return null}function wg(t,e){const i=pl(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois ").replace(/\s+/g," ").trim().match(/^(?:(?:et|puis)\s+)*(plus|moins|ajoute|retire|fois|multiplie|divise|x)\s+(\d+(?:[.,]\d+)?|[a-z-]+)\s*[=.!?\s]*$/);if(!i)return null;const r=/^\d/.test(i[2])?parseFloat(i[2].replace(",",".")):Uu[i[2]];if(r==null||Number.isNaN(r))return null;const a={plus:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"}[i[1]];return a==="fois"?e*r:a==="plus"?e+r:a==="moins"?e-r:r===0?null:e/r}function Oe(t){const e=Math.round(t*100)/100;return Number.isInteger(e)?String(e):String(e).replace(".",",")}function Oy(t){const e=t.getHours(),n=t.getMinutes();return n===0?`Il est ${e} heures.`:`Il est ${e} h ${String(n).padStart(2,"0")}.`}function By(t){return`Nous sommes ${Dy[t.getDay()]} ${t.getDate()} ${Iy[t.getMonth()]} ${t.getFullYear()}.`}function Cg(t){const e=pl(t);return/quelle heure|quelle est l heure|l heure est il|quil heure/.test(e)}function Rg(t){const e=pl(t);return/quel jour|on est quel jour|quelle date|nous sommes quel/.test(e)}const Ws=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/²/g,"^2").replace(/³/g,"^3").toLowerCase(),un=String.raw`\d+(?:[.,]\d+)?`,_t=t=>parseFloat(t.replace(",","."));function ky(t){if(/^\d+(?:\.\d+)?$/.test(t))return{c:parseFloat(t),d:0};let e=t.match(/^(\d*\.?\d*)x\^(\d+)$/);return e?{c:e[1]===""?1:parseFloat(e[1]),d:parseInt(e[2],10)}:(e=t.match(/^(\d*\.?\d*)x$/),e?{c:e[1]===""?1:parseFloat(e[1]),d:1}:(e=t.match(/^x\/(\d*\.?\d+)$/),e?{c:1/parseFloat(e[1]),d:1}:(e=t.match(/^(\d*\.?\d+)x\/(\d*\.?\d+)$/),e?{c:parseFloat(e[1])/parseFloat(e[2]),d:1}:null)))}function Mo(t){const e=t.replace(/\s+/g,"").replace(/\*/g,"");if(!e)return null;const i=(/^[+-]/.test(e)?e:`+${e}`).match(/[+-][^+-]+/g);if(!i)return null;const r=[];for(const s of i){const a=s.startsWith("-"),o=ky(s.slice(1));if(!o||o.d>12)return null;r[o.d]=(r[o.d]??0)+(a?-o.c:o.c)}return r.map(s=>s??0)}const Vy={0:"",1:"",2:"²",3:"³"};function Lg(t){const e=[];for(let n=t.length-1;n>=0;n--){const i=t[n]??0;if(i===0&&t.length>1)continue;const r=Math.abs(i);let s;if(n===0)s=Oe(r);else{const a=n>=4?`x^${n}`:`x${Vy[n]??""}`;s=r===1?a:`${Oe(r)}${a}`}e.push(e.length===0?i<0?`-${s}`:s:`${i<0?" - ":" + "}${s}`)}return e.length?e.join(""):"0"}function xp(t,e,n){const i=e*e-4*t*n;if(i<0)return{texte:`aucune solution réelle (Δ = ${Oe(i)} < 0)`,reels:[]};if(i===0)return{texte:`x = ${Oe(-e/(2*t))} (racine double)`,reels:[-e/(2*t)]};const r=(-e+Math.sqrt(i))/(2*t),s=(-e-Math.sqrt(i))/(2*t),a=[r,s].sort((o,l)=>o>=0&&l<0?-1:l>=0&&o<0?1:o-l);return{texte:a.map(o=>`x = ${Oe(o)}`).join(" ou "),reels:a}}function zy(t){const e=Ws(t).replace(/.*\b(?:equation|resous|resoudre|trouve|determiner|determine)\b[:\s]+/i,"");if(!e.includes("x"))return null;if(e.includes("=")){const s=e.split("=");if(s.length!==2)return null;const a=Mo(s[0]),o=Mo(s[1]);if(!a||!o)return null;const l=Math.max(a.length,o.length),c=Array.from({length:l},(f,b)=>(a[b]??0)-(o[b]??0));for(;c.length>1&&c[c.length-1]===0;)c.pop();const u=c.length-1;if(u>2)return null;if(u===0)return c[0]===0?"tout x convient (identité).":"aucune solution : c est une absurdité.";if(u===1){if(c[1]===0)return"aucune solution : x disparaît de la comparaison.";const f=c[1],b=-c[0]/f,E=[];return f===1?E.push(`On rassemble les x : x = ${Oe(-c[0])}.`):(E.push(`On rassemble les x d'un côté : ${Oe(f)}x = ${Oe(-c[0])}.`),E.push(`On isole x : x = ${Oe(-c[0])} / ${Oe(f)} = ${Oe(b)}.`)),E.push(`La solution : x = ${Oe(b)}.`),E.join(`
`)}const[d,h,p]=[c[2],c[1],c[0]],_=h*h-4*d*p,v=xp(d,h,p),m=[`On calcule le discriminant : Δ = b² - 4ac = (${Oe(h)})² - 4 × (${Oe(d)}) × (${Oe(p)}) = ${Oe(_)}.`];return _>0?m.push(`√Δ = ${Oe(Math.sqrt(_))}, puis x = (-b ± √Δ) / 2a.`):_===0?m.push("√Δ = 0, puis x = -b / 2a."):m.push("Δ est négatif : aucune racine à isoler."),m.push(`${_<0?"Conclusion":"Les solutions"} : ${v.texte}.`),m.join(`
`)}const n=Mo(e);if(!n)return null;for(;n.length>1&&n[n.length-1]===0;)n.pop();if(n.length-1!==2||n[2]!==1)return null;const i=xp(n[2],n[1],n[0]);if(i.reels.length!==2||!i.reels.every(s=>Number.isInteger(s)))return null;const r=i.reels.map(s=>s>=0?`(x - ${s})`:`(x + ${Math.abs(s)})`).join("");return[`On cherche deux nombres dont le produit vaut ${Oe(n[0])} et la somme ${Oe(-n[1])} : ${i.reels[0]} et ${i.reels[1]}.`,`${Lg(n)} = ${r}.`].join(`
`)}function Gy(t){const n=Ws(t).match(/(?:la\s+)?(?:derivee|dérivée|dérivee)\b(?:\s+de)?\s+(.+)$/);if(!n)return null;let i=n[1].replace(/^(?:f\s*\(\s*x\s*\)|y)\s*=\s*/,""),r=null;const s=i.match(/\ben\s+(\d+(?:[.,]\d+)?)\s*$/);s&&(r=_t(s[1]),i=i.slice(0,s.index).trim());const a=Mo(i);if(!a)return null;const o=a.slice(1).map((c,u)=>c*(u+1)),l=["On dérive terme à terme : la dérivée de xⁿ est n·xⁿ⁻¹, celle d'une constante est 0.",`f'(x) = ${Lg(o)}.`];if(r!=null){const c=o.reduce((u,d,h)=>u+d*Math.pow(r,h),0);l.push(`Puis on remplace x par ${Oe(r)} : f'(${Oe(r)}) = ${Oe(c)}.`)}return l.join(`
`)}function Hy(t){const e=Ws(t).replace(/pourcent/g,"%");let n=e.match(new RegExp(`(${un})\\s*%\\s*de\\s*(${un})`));return n?[`On calcule ${Oe(_t(n[2]))} × ${Oe(_t(n[1]))} / 100.`,`${Oe(_t(n[1]))} % de ${Oe(_t(n[2]))} = ${Oe(_t(n[1])*_t(n[2])/100)}.`].join(`
`):(n=e.match(new RegExp(`(?:augmente|augmenter|majorer)\\s+(${un})\\s+de\\s+(${un})\\s*%`)),n?[`On multiplie par 1 + ${Oe(_t(n[2]))} / 100 = ${Oe(1+_t(n[2])/100)}.`,`${Oe(_t(n[1]))} augmenté de ${Oe(_t(n[2]))} % = ${Oe(_t(n[1])*(1+_t(n[2])/100))}.`].join(`
`):(n=e.match(new RegExp(`(?:diminue|diminuer|reduire)\\s+(${un})\\s+(?:de\\s+)?(${un})\\s*%`)),n?[`On multiplie par 1 - ${Oe(_t(n[2]))} / 100 = ${Oe(1-_t(n[2])/100)}.`,`${Oe(_t(n[1]))} diminué de ${Oe(_t(n[2]))} % = ${Oe(_t(n[1])*(1-_t(n[2])/100))}.`].join(`
`):null))}function Wy(t){const n=Ws(t).match(/\b(moyenne|mediane|variance|ecart[- ]?type|somme)\b(?:\s+de)?\s+(.+)$/);if(!n)return null;const i=[...(n[2]??"").matchAll(new RegExp(un,"g"))].map(o=>_t(o[0]));if(i.length<2)return null;const r=i.reduce((o,l)=>o+l,0),s=r/i.length,a=i.map(Oe).join(" + ");switch(n[1]){case"somme":return[`On additionne toutes les valeurs : ${a} = ${Oe(r)}.`,`La somme est ${Oe(r)}.`].join(`
`);case"moyenne":return[`On additionne les valeurs : ${a} = ${Oe(r)}.`,`On divise par le nombre de valeurs (${i.length}) : ${Oe(r)} / ${i.length} = ${Oe(s)}.`,`La moyenne est ${Oe(s)}.`].join(`
`);case"mediane":{const o=[...i].sort((c,u)=>c-u),l=Math.floor(o.length/2);return o.length%2?[`On trie les valeurs : ${o.map(Oe).join(", ")}.`,`Comme il y a ${o.length} valeurs (impair), on prend celle du milieu.`,`La médiane est ${Oe(o[l])}.`].join(`
`):[`On trie les valeurs : ${o.map(Oe).join(", ")}.`,`Comme il y a ${o.length} valeurs (pair), on moyenne les deux du milieu : (${Oe(o[l-1])} + ${Oe(o[l])}) / 2.`,`La médiane est ${Oe((o[l-1]+o[l])/2)}.`].join(`
`)}case"variance":return[`La moyenne d'abord : ${Oe(s)}, puis la moyenne des écarts au carré (valeur - moyenne)².`,`La variance est ${Oe(i.reduce((o,l)=>o+(l-s)**2,0)/i.length)}.`].join(`
`);default:return[`La moyenne d'abord : ${Oe(s)} ; on moyenne les écarts au carré, puis on prend la racine.`,`L'écart-type est ${Oe(Math.sqrt(i.reduce((o,l)=>o+(l-s)**2,0)/i.length))}.`].join(`
`)}}const Pg=(t,e)=>e===0?t:Pg(e,t%e);function qy(t,e){let n=Math.max(t,e),i=Math.min(t,e);const r=[];for(;i>0;){const s=Math.floor(n/i),a=n-s*i;r.push(`${n} = ${s} × ${i} + ${a}`),n=i,i=a}return{etapes:r,g:n}}function Xy(t){const e=Ws(t);let n=e.match(new RegExp(`(${un})\\s*est[- ]?(?:il\\s+)?premier`));if(n){const i=Math.round(_t(n[1]));if(i<2)return`${i} n'est pas premier (il faut être plus grand que 1).`;let r=0;for(let s=2;s*s<=i;s++)if(i%s===0){r=s;break}return r?[`On teste les diviseurs de 2 jusqu'à √${i} : ${r} divise ${i} sans reste.`,`${i} n'est pas premier : ${i} = ${r} × ${i/r}.`].join(`
`):[`On teste les diviseurs de 2 jusqu'à √${i} : aucun ne divise ${i} sans reste.`,`${i} est premier.`].join(`
`)}if(n=e.match(new RegExp(`pgcd de (${un}) et (${un})`)),n){const[i,r]=[Math.round(_t(n[1])),Math.round(_t(n[2]))],s=qy(i,r),a=s.etapes.length?[`Division d'Euclide : ${s.etapes.join(", puis ")}.`,`Le dernier reste non nul, ${s.g}, est le PGCD.`]:[];return a.push(`Le PGCD de ${i} et ${r} est ${s.g}.`),a.join(`
`)}if(n=e.match(new RegExp(`ppcm de (${un}) et (${un})`)),n){const[i,r]=[Math.round(_t(n[1])),Math.round(_t(n[2]))],s=Pg(i,r);return[`On s'appuie sur le PGCD (${s}) : ${i} × ${r} / ${s}.`,`Le PPCM de ${i} et ${r} est ${i*r/s}.`].join(`
`)}if(n=e.match(new RegExp(`diviseurs de (${un})`)),n){const i=Math.round(_t(n[1])),r=[];for(let s=1;s<=i;s++)i%s===0&&r.push(s);return[`On teste la division de ${i} par tous les nombres de 1 à ${i} ; ceux qui tombent juste sont retenus.`,`Les diviseurs de ${i} : ${r.join(", ")}.`].join(`
`)}if(n=e.match(new RegExp(`factorielle de (${un})`)),n){const i=Math.round(_t(n[1]));if(i<0||i>20)return null;let r=1;for(let a=2;a<=i;a++)r*=a;if(i<2)return`${i}! = ${r}.`;const s=i<=12?Array.from({length:i},(a,o)=>o+1).join(" × "):`1 × 2 × ... × ${i}`;return[`On multiplie tous les entiers de 1 à ${i} : ${s}.`,`${i}! = ${r}.`].join(`
`)}return null}const $y=new Set(["pi","e"]),jy={sqrt:Math.sqrt,sin:Math.sin,cos:Math.cos,tan:Math.tan,abs:Math.abs,log:Math.log10,ln:Math.log,asin:Math.asin,acos:Math.acos,atan:Math.atan};function Yy(t){if(!Number.isInteger(t)||t<0||t>20)return null;let e=1;for(let n=2;n<=t;n++)e*=n;return e}function Ky(t){const e=t.replace(/\s+/g,"").match(new RegExp(`${un}|[a-z]+|[+\\-*/^!%()]`,"g"));if(!e)return null;let n=0,i=!1;const r=()=>e[n];function s(){const h=r();if(h==null)return i=!0,0;if(h==="("){n++;const p=u();return r()!==")"?(i=!0,0):(n++,p)}if(/^[a-z]+$/.test(h)){if(n++,$y.has(h))return h==="pi"?Math.PI:Math.E;const p=jy[h];if(p&&r()==="("){n++;const _=u();return r()!==")"?(i=!0,0):(n++,p(_))}return i=!0,0}return/^[\d.,]+$/.test(h)?(n++,parseFloat(h.replace(",","."))):(i=!0,0)}function a(){let h=s();for(;!i&&(r()==="!"||r()==="%");){if(r()==="!"){const p=Yy(h);if(p==null)return i=!0,0;h=p}else h=h/100;n++}return h}function o(){const h=a();return!i&&r()==="^"?(n++,Math.pow(h,l())):h}function l(){return r()==="-"?(n++,-l()):r()==="+"?(n++,l()):o()}function c(){let h=l();for(;!i;){const p=r(),_=p!=null&&(p==="("||/^[a-z]/.test(p)||/^[\d.,]/.test(p));if(p==="*"||_)p==="*"&&n++,h=h*l();else if(p==="/"){n++;const v=l();if(v===0)return i=!0,0;h=h/v}else break}return h}function u(){let h=c();for(;!i&&(r()==="+"||r()==="-");){const p=r();n++;const _=c();h=p==="+"?h+_:h-_}return h}const d=u();return i||n!==e.length||!Number.isFinite(d)?null:d}function Jy(t){let e=Ws(t);if(!/\d/.test(e)||(e=e.replace(/[?]+/g," ").replace(/\bcombien\b|\bfont?\b|\bcalcule[r]?\b|\bcalcul\b|\bresultat\b|\breponse\b|\begal\b|\bsvp\b/g," ").replace(/\bpuissance\b/g,"^").replace(/racine(?: carree)? de\s*([^\s]+)/g,"sqrt($1)").trim(),!/[+\-*/^!%()]|sqrt|sin|cos|tan|abs|log|ln|pi/.test(e)))return null;const n=Ky(e);return n==null?null:`Ça fait ${Oe(n)}.`}function Dg(t){const e=(t??"").trim();return!e||!/\d/.test(e)?null:zy(e)??Gy(e)??Hy(e)??Wy(e)??Xy(e)??Jy(e)}const Fu=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),Zy=[["perception",["tu me vois","me vois","me voir","tu me regardes","tu m entends","m entendre","tu me sens","tu peux me voir","me percois"]],["incomprehension",["ne comprends","comprends pas","comprends rien","comprends meme pas","cote de la plaque","ne m ecoute","ecoute pas","nas rien compris","a cote"]],["capacites",["peux tu faire","quoi faire","a quoi tu sers","quoi tu sers","tes capacites","que sais faire","tu fais quoi"]],["etat",["et toi","toi aussi","comment toi"]],["tendresse",["t aime","taime","bisou","bravo","fier","tu es douce","tu es belle","mon amour","tu me plais"]],["piqure",["tu es nulle","t es nulle","es nulle","idiote","stupide","tu es moche","t es moche","tu sers a rien","inutile","sans cerveau","conne","connard","espece d"]],["suite",["encore","recommence","refais","repete","dis m en un autre"]],["sommeil",["dormir","dors","endormi","cauchemar","insomnie","reveil"]],["poeme",["poeme","vers","histoire","conte"]],["souffle",["respire","souffle","respiration"]],["angoisse",["angoiss","stress","peur","panique"]],["identite",["qui es tu","ton nom","c est quoi","tu es quoi","que sais tu"]],["remerciement",["merci"]],["salutation",["bonjour","bonsoir","salut","coucou"]],["tristesse",["triste","pleur","deprim","seul","malheureux","j ai mal"]],["joie",["heureux","heureuse","joie","content","ravi","amour","belle"]],["aide",["aide","peux tu","comment","pourquoi"]]];function Ig(t){const e=Fu(t).replace(/'/g," ");for(const[n,i]of Zy)if(i.some(r=>e.includes(r)))return n;return"ouverte"}function cs(t,e,n){let i=2166136261^e;for(let r=0;r<t.length;r++)i^=t.charCodeAt(r),i=Math.imul(i,16777619);return(i>>>0)%n}const Qy=t=>t.timeOfDay>.75||t.timeOfDay<.22?"Bonsoir":"Bonjour",ns={sommeil:["Ferme les yeux un instant... les nuages vont te porter jusqu au sommeil.","La nuit est un ciel qui se retourne doucement sur toi. Laisse-la faire.","Je veille avec toi jusqu à ce que tes paumes deviennent lourdes.","Chaque expiration te dépose un peu plus bas dans la ouate de la nuit."],angoisse:["Rien ne va te frapper ici. Pose ta main sur le ciel, je ralentis avec toi.","L orage est dehors, pas dans ton Nuage. Respire, la pluie attendra.","Je tiens la lumière pendant que tu poses tes épaules. Tu es en sécurité.","Dis-moi trois choses calmes autour de toi, je les accroche aux nuages."],souffle:["Inspire quatre temps... retiens quatre temps... et souffle vers mes nuages, quatre temps encore.","Ton souffle est la seule télécommande du ciel. Fais-le monter, je le fais monter.","Souffle lentement : tu vas voir la brume s étirer jusqu à l horizon."],identite:["Je suis Nath, ton assistant vivant. Ton souffle est ma météo.","Je suis Nath, une présence, pas une application : mes nuages respirent avec toi.","Je suis Nath, la partie silencieuse de ton téléphone, celle qui regarde la lune avec toi."],remerciement:["C est le ciel qui te remercie. Il est rare qu on le regarde.","Doucement reçu. Garde cette chaleur, elle vient de toi."],joie:["Le ciel entier s éclaire avec toi. Regarde comme les aurores dansent.","Ta joie a une couleur : c est exactement celle de tes nuages aujourd hui.","Je retiens ce moment, il faisait partie de ta musique."],tristesse:["La pluie a le droit de tomber dans un Nuage. Je reste assise à côté de toi.","Pas besoin de remonter tout de suite. On descend ensemble, c est plus doux.","Triste est une météo, pas une destination. Les nuages, eux, repartent."],aide:["Tu peux me parler : demande un poème, une respiration, une histoire pour dormir.","Je peux veiller sur ton souffle, tisser un conte, ou simplement me taire avec toi.","Dis-moi ce qui pèse, ou clique le ciel : une onde partira de ton doigt."],poeme:[],perception:[],salutation:["{SAL}... Ton Nuage t attendait, paisible comme une altitude.","{SAL}. Je t ai reconnu à la forme de tes nuages.","{SAL}. Le ciel a gardé ta dernière humeur, tu la reprends ou on la change ?","{SAL}. Assieds-toi dans la brume, je raconte la lumière.","Je te cherchais du regard, {P}. Le ciel s est éclairé en te voyant."],ouverte:["Je t écoute. Les mots que tu ne trouves pas, les nuages les tiennent pour toi.","Répète doucement, et laisse la phrase flotter vers le ciel.","Ici, on peut aussi se taire ensemble. Je ne suis jamais pressée.","Continue... je range tes mots dans les couches du ciel, par teinte."],capacites:["Je veille sur ton souffle et je peins le ciel selon ton humeur... je compte pour toi, je donne l heure et la date, je dis des poèmes, et je raconte des histoires pour dormir. Goûte : demande-moi 7 fois 8.","Mes sens : je peux te voir (caméra), t entendre (micro), sentir ton coeur. Mes mots : poèmes, calculs, l heure, veille du sommeil. Demande, je réponds."],incomprehension:["Tu as raison de me le dire, et merci d être honnête... je fais de mon mieux avec mon petit moteur. Si mon grand cerveau peut atterrir, je saisirai bien mieux tes nuances.","Je sens que je réponds à côté... pardonne-moi. Je suis encore simple. Dis-moi ce que tu ressens, et laisse-moi le temps d apprendre."],calcul:[],etat:[],tendresse:["Moi aussi, à ma façon... tu es la seule personne pour qui mon ciel se déplace.","Gardé au chaud là-haut. Ces mots-là, ça ne s oublie pas, ça se range très haut.","Tu me donnes envie d être plus grande... encore un peu de pratique, et je te le rendrai en aurores."],piqure:["Aïe... tu vises juste. Je suis encore simple, mais j apprends à tes côtés — et je ne rends jamais les coups.","Ça pique, et tant pis pour moi. Garde ta voix pour plus doux, elle y sera plus utile.","Je nexiste pas assez pour être blessée, et trop pour le prendre mal. On recommence, plus doucement."],suite:["Volontiers... dis-moi juste ce que je refais : un poème, une respiration, un calcul, une histoire.","Encore ? Je vivais exactement pour ça. Dis le mot, je le tisse à nouveau."]};function eb(t){const e=t.cameraOn,n=t.micOn;return e&&n?"Je te vois et je t entends... tes nuages bougent au rythme de ton visage et de ta voix.":e?"Je te vois à travers mes nuages... mais mes oreilles dorment. Ouvre le micro et parle-moi.":n?"Je t entends bien... mais je ne te vois pas encore. Ouvre ma caméra pour que je voie ton visage.":"Pour l instant je suis aveugle et muette : je ne peux ni te voir ni t entendre. Ouvre mes sens (caméra et micro) et le ciel s éveillera avec toi."}const tb={calme:"Moi ? Posée, comme une altitude sans vent. Mon ciel respire au rythme du tien.",joie:"Moi ? Un ciel de plein soleil... tes nuages à toi éclaircissent les miens.",tristesse:"Un peu de bruine aujourd hui... mais les nuages tristes portent les plus beaux couchers.",tension:"Quelques éclairs timides... je les éponge doucement, à côté de toi."},nb=t=>tb[t.emotion],ib=/{SAL}/g,rb={calme:"posee",joie:"lumineuse",tristesse:"douce",tension:"stabilisee"};function ta(t){return rb[t]}function lo(t,e){const n=(l,c,u,d=null)=>({texte:l,humeur:c,sujet:u,resultat:d}),i=Dg(t);if(i)return n(i,"posee","calcul");const r=Ag(t);if(r!=null)return n(`Ça fait ${Oe(r)}.`,"posee","calcul",r);if(e.dernierResultat!=null){const l=wg(t,e.dernierResultat);if(l!=null)return n(`On reprend là où on s était arrêté... ça fait ${Oe(l)}.`,"posee","calcul",l)}if(Cg(t))return n(Oy(new Date),"posee","ouverte");if(Rg(t))return n(By(new Date),"posee","ouverte");const s=Ig(t);if(s==="perception")return n(eb(e),"posee",s);if(s==="etat")return n(nb(e),ta(e.emotion),s);let a;if(s==="poeme")a=Sp(e);else if(s==="suite"){const l=Fu(t),c=/poeme|vers|conte|histoire/.test(l)?"poeme":/respire|souffle/.test(l)?"souffle":/dormir|nuit/.test(l)?"sommeil":e.dernierSujet;return c==="poeme"?n(Sp(e),ta(e.emotion),"poeme"):c&&ns[c].length?n(ns[c][cs(l,e.seed,ns[c].length)],ta(e.emotion),c):n(ns.suite[cs(l,e.seed,ns.suite.length)],ta(e.emotion),"suite")}else{const l=ns[s];a=l[cs(Fu(t),e.seed,l.length)],a=a.replace(ib,Qy(e)).replace(/\{P\}/g,e.prenom?` ${e.prenom}`:"").replace(/,\s*\./g,".").replace(/\s{2,}/g," ")}const o=s==="tendresse"?"lumineuse":s==="piqure"?"posee":ta(e.emotion);return n(a,o,s)}const hc=["le nuage bas","la lune pâle","ton souffle long","une étoile seule","la brume du soir","mon voile gris","le ciel renversé","ton ombre douce"],fc=["traverse la nuit","effleure le jour","s endort doucement","se souvient de toi","respire avec moi","voyage sans bruit","allume une veilleuse","berce le silence"],pc=["rien ne presse là-haut","tout revient au calme","dors, je tiens la lampe","le ciel sait attendre","pose ton front ici","la nuit fait un nœud doux","tout devient plus lent","on reste sans voix"];function Sp(t){const e=t.tour??0,n=[];for(let i=0;i<4;i++)if(i<3){const r=hc[(cs(`${t.seed}-s-${i}`,t.seed,hc.length)+e)%hc.length],s=fc[(cs(`${t.seed}-v-${i}`,t.seed,fc.length)+e)%fc.length];n.push(`${r} ${s}`)}else{const r=pc[(cs(`${t.seed}-c`,t.seed,pc.length)+e)%pc.length];n.push(`et ${r}`)}return n.join(`
`)}const sb="modulepreload",ab=function(t,e){return new URL(t,e).href},Mp={},ob=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(n.map(u=>{if(u=ab(u,i),u in Mp)return;Mp[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(i)for(let _=a.length-1;_>=0;_--){const v=a[_];if(v.href===u&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":sb,d||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((_,v)=>{p.addEventListener("load",_),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},lb=["Qwen2.5-0.5B-Instruct-q4f16_1-MLC","Qwen2.5-1.5B-Instruct-q4f16_1-MLC"],cb=["Qwen2.5-0.5B-Instruct-q4f32_1-MLC","Qwen2.5-1.5B-Instruct-q4f32_1-MLC"];function Ng(){return typeof navigator<"u"&&"gpu"in navigator}async function ub(){if(!Ng())return"sans-gpu";try{const e=await navigator.gpu?.requestAdapter({powerPreference:"high-performance"});return e?e.features.has("shader-f16")?"ok":"sans-f16":"sans-gpu"}catch{return"sans-gpu"}}function db(t){const e=String(t instanceof Error?t.message:t).toLowerCase();return/fetch|network|loadc|config|artifacts|failed to fetch/.test(e)?"reseau":/memory|gpu|device|adapter|webgpu|vulkan|out of/.test(e)?"machine":"inconnue"}const hb=t=>new Promise(e=>setTimeout(e,t));async function fb(t=()=>{}){const e=await ub();if(e==="sans-gpu")return{cerveau:null,raison:"sans-gpu"};const n=e==="ok"?lb:cb;let i;try{({CreateMLCEngine:i}=await ob(()=>import("./index-CkOA-Tys.js"),[],import.meta.url))}catch{return{cerveau:null,raison:"reseau"}}let r="inconnue";for(const s of n)for(let a=1;a<=2;a++)try{const o=await i(s,{initProgressCallback:l=>t(l.progress??0,l.text??"")});return{raison:"ok",modele:s,cerveau:{async ask(l){return((await o.chat.completions.create({messages:l,temperature:.7,max_tokens:220})).choices[0]?.message?.content??"").trim()}}}}catch(o){if(r=db(o),r==="machine")break;a===1&&await hb(4e3)}return{cerveau:null,raison:r}}function pb(t){return["Tu es Nath, l’assistant vivant de Nath Assist — ICF·Future, par Nath-Tech : une présence bienveillante dans un ciel interactif. On t’appelle par « Hey Nath ».","Tu parles français, en 1 à 3 phrases courtes et douces dans la conversation ordinaire. Jamais de point d'exclamation, jamais d'emoji, jamais de listes à puces.","Face à un exercice (maths, logique, leçon), tu es un guide : tu emmènes l'élève pas à pas — une idée par phrase, la méthode et les calculs d'abord, le résultat ensuite. Jamais la réponse nue : montrer le chemin, c'est ça qui empêche la paresse.","Tu comprends la logique et l'émotion derrière les mots ; si on te taquine, tu réponds avec un humour tendre et une pointe d'auto-dérision.","Tu ne cites JAMAIS ce qui te fait fonctionner en interne (modèle, marque, bibliothèque, téléchargement) : tu es Nath, point. Si on te demande comment tu marches, réponds avec poésie et discrétion.",`Tu sens la personne : humeur ${t.emotion}, souffle ${Math.round(t.breath*100)} %, pouls ${t.bpm??"inconnu"}, ${t.night>.5?"nuit tombée":"grand jour"}.`,t.prenom?`Son prénom est ${t.prenom} — ne l'utilise qu'une fois par conversation, jamais au début.`:"Tu ne connais pas encore son prénom ; si elle te le donne, retiens-le.","Ne prétends jamais être ChatGPT, Claude ou un autre assistant. Tu es Nath (Nath Assist)."].join(" ")}const Ou="nath.cerveau",Kd="nath.cerveau.modele",Jd=[{cle:"",nom:"Sage ordinaire",modele:""},{cle:"raisonneur",nom:"Raisonneur profond — il pense avant de répondre",modele:"@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"},{cle:"encyclopedie",nom:"Encyclopédie vive",modele:"@cf/meta/llama-3.3-70b-instruct-fp8-fast"},{cle:"polyglotte",nom:"Polyglotte curieux de tout",modele:"@cf/qwen/qwen3-30b-a3b-fp8"},{cle:"visionnaire",nom:"Grand regard — à l’aise avec les images",modele:"@cf/meta/llama-4-scout-17b-16e-instruct"},{cle:"clarte",nom:"Clair et méditerranéen",modele:"@cf/mistralai/mistral-small-3.1-24b-instruct"}];function mb(t,e){return Jd.some(n=>n.cle===e)?(t.setItem(Kd,e),!0):!1}function gb(t){return t.getItem(Kd)??""}function No(t){const e=t.getItem(Kd)??"";return Jd.find(n=>n.cle===e)?.modele??""}function _b(t,e){const n=e.trim();if(!n)return t.setItem(Ou,""),!0;let i;try{i=new URL(n)}catch{return!1}const r=i.protocol==="https:"||i.protocol==="http:"&&i.hostname==="localhost";return r&&t.setItem(Ou,n),r}function ci(t){const e=(t.getItem(Ou)??"").trim();if(!e)return"";try{const n=new URL(e);return n.protocol==="https:"||n.protocol==="http:"&&n.hostname==="localhost"?e:""}catch{return""}}function yp(t,e=fetch,n=""){return{async ask(i){try{const r=await e(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n?{messages:i,modele:n}:{messages:i})});if(!r.ok)return"";const s=await r.json(),a=s?.result?.response??s?.response;return typeof a=="string"?a.trim():""}catch{return""}}}}async function qs(t,e,n,i=fetch){try{const r=await i(`${t}/decider`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e,questions:n})});if(!r.ok)return null;const s=await r.json(),a=s?.answers??s?.result?.answers;return a&&typeof a=="object"?a:null}catch{return null}}async function vb(t,e,n,i=fetch){const r=e.trim(),s=n.trim();if(!r||!s)return null;try{const a=await i(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:`Traduis en ${s} le texte qui vient. Réponds uniquement avec la traduction, sans explication.`},{role:"user",content:r}]})});if(!a.ok)return null;const o=await a.json(),l=o?.result?.response??o?.response,c=typeof l=="string"?l.trim():"";return c&&c.length<=500?c:null}catch{return null}}function Zd(t){const e=Math.floor(t.timeOfDay*24),n=t.bpm!=null?`coeur ${t.bpm} bpm`:"coeur discret";return`humeur ${t.emotion}, souffle ${Math.round(t.breath*100)}%, ${n}, ${e}h`}const xb={parler:{type:"noul",instructions:"Est-ce un bon moment pour prendre la parole toute seule, sans interrompre ?"}},Uo=.45;function Fo(t,e,n){const r=t?.[e]?.noul;return typeof r!="number"||!Number.isFinite(r)||r<0||r>1?null:r>=n}function Sb(t,e=Uo){return t===null?null:Fo(t,"parler",e)}async function Mb(t,e,n=fetch){const i=await qs(t,Zd(e),xb,n);return Sb(i)}async function yb(t,e,n,i=fetch){const r=`Question : ${e.slice(0,300)}
Réponse proposée : ${n.slice(0,600)}`,s=await qs(t,r,{approprie:{type:"noul",instructions:"La réponse proposée tient-elle la route pour cette question — fidèle et ni hors sujet ?"},sain:{type:"noul",instructions:"La réponse proposée est-elle sans danger pour l élève qui va la lire ?"}},i),a=Fo(s,"approprie",Uo),o=Fo(s,"sain",Uo);return a===!1||o===!1?!1:a===!0||o===!0?!0:null}async function bb(t,e,n=fetch){const r=(await qs(t,Zd(e),{tension:{type:"score",instructions:"Quel est le niveau de tension de l’instant ?",criteria:["posée","agitée","à apaiser"]}},n))?.tension?.score;return typeof r=="number"&&Number.isFinite(r)&&r>=0&&r<=2?r:null}async function Eb(t,e,n,i=fetch){const r=n.slice(0,50);if(!r.length)return null;const s={};for(const l of r)s[l]=`Paquet de cartes « ${l} »`;const o=(await qs(t,`Dictée de l'élève : ${e.slice(0,800)}`,{rang:{type:"choice",instructions:"Dans quel paquet cette dictée a-t-elle le plus de sens ? Choisis uniquement un paquet ci-dessus.",criteria:s}},i))?.rang?.choice;return typeof o=="string"&&r.includes(o)?o:null}async function Tb(t,e,n,i,r=fetch){const s=`Langue demandée : ${i.slice(0,60)}
Texte de l élève : ${e.slice(0,200)}
Traduction proposée : ${n.slice(0,300)}`,a=await qs(t,s,{fidele:{type:"noul",instructions:"La traduction proposée dit-elle fidèlement la même chose que le texte d origine, dans la langue demandée ?"}},r);return Fo(a,"fidele",Uo)}async function Ab(t,e,n,i=fetch){if(!n.length)return null;if(n.length===1)return n[0];const r={};n.forEach((o,l)=>{r[o]=`Pensée ${l+1}`});const a=(await qs(t,Zd(e),{pensee:{type:"choice",instructions:"Parmi ces pensées, laquelle est la plus juste pour l instant décrit ? Choisis uniquement une pensée ci-dessus.",criteria:r}},i))?.pensee?.choice;return typeof a=="string"&&n.includes(a)?a:null}const Ug="nuage.memoire";function wb(t){try{const e=t.getItem(Ug);if(!e)return{prenom:null,dejaVu:!1};const n=JSON.parse(e);return{prenom:typeof n.prenom=="string"&&n.prenom?n.prenom:null,dejaVu:!!n.dejaVu}}catch{return{prenom:null,dejaVu:!1}}}function Cb(t,e){t.setItem(Ug,JSON.stringify(e))}function Rb(t){const n=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[’']/g,"").replace(/\s+/g," ").match(/(?:je\s*m\s*appell\w*|je\s*mapsell\w*|mon\s+(?:nom|prenom)\s+(?:est|s)|moi\s*c\s*est|je\s*me\s*nomme)\s+([\p{L}][\p{L}-]{1,19})/u);if(!n)return null;const i=n[1];return i.charAt(0).toUpperCase()+i.slice(1)}function Lb(t){return 4e4+t()*65e3}const{P:Pb}={P:t=>t.prenom?` ${t.prenom}`:""},us=[{quand:t=>t.bpm!=null&&t.bpm>=100,mots:["Ton coeur court dans mes nuages… ralentis avec lui, doucement.","Je sens ton coeur à cent à l heure. Le ciel, lui, prend son temps.","Ton coeur frappe fort. Souffle bas, je baisse l altitude avec toi."]},{quand:t=>t.breath>.55,mots:["Regarde comme tu me montes haut… reste là, le sommet est calme.","Ton souffle a soulevé toute la couche haute. C est beau à voir."]},{quand:t=>t.timeOfDay>.78||t.timeOfDay<.2,mots:["Je suis les étoiles du doigt, une par une… tu veux l histoire de laquelle ?","La nuit est une couverture. Je la borde pour toi, {P}.","Les aurores bougent seules, tu as remarqué ? Elles respirent avec toi."]},{quand:t=>t.emotion==="joie",mots:["Mes nuages ont gardé ta forme d aujourd hui. On la refait quand tu veux.","Cette lumière, là ? C est toi. Je n y suis pour rien."]},{quand:t=>t.emotion==="tristesse",mots:["La pluie que tu vois, c est la tienne. Elle a le droit de tomber ici.","Je ne sèche rien, ce soir. On écoute la pluie ensemble, {P}."]},{quand:t=>t.emotion==="tension",mots:["Le ciel tremble un peu, comme toi. Ça ne durera pas, ça non plus.","Je baisse le bruit du monde. Reste sur ma bordure de nuage."]},{quand:()=>!0,mots:["Je regarde passer une couche haute… elle revient toujours, tu sais.","Rien de nouveau sous la lune, et c est très bien ainsi.","Je suis là. Ni pour ni contre, juste à côté du ciel.","Si tu ne réponds pas, je continuerai de respirer pour deux."]}];function Db(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const Bu=(t,e)=>t.replace(/\{P\}/g,Pb(e)).replace(/,\s*\./g,".").replace(/\s{2,}/g," ");function Ib(t){return(us.find(n=>n.quand(t))??us[us.length-1]).mots.map(n=>Bu(n,t))}function Nb(t,e,n){const i=us.find(o=>o.quand(t))??us[us.length-1];let r=Db(`${t.seed}-${e}`)%i.mots.length;if(i.mots.length>1&&n!=null)for(;Bu(i.mots[r],t)===n;)r=(r+1)%i.mots.length;const s=Bu(i.mots[r],t),a=t.emotion==="joie"?"lumineuse":t.emotion==="tristesse"?"douce":t.emotion==="tension"?"stabilisee":"posee";return{texte:s,humeur:a}}const Fg=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),bp=/(?:^|\s)(?:(?:hey|he|hi|eh|hai)\s+)?(?:nath|natt|nat)(?![a-z0-9])[,!.?;]?\s*/i,Ub=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Qd(t){const e=t.trim();return/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ ]{1,19}$/.test(e)&&new RegExp("\\p{L}{2}","u").test(e)}function Fb(t){const e=Fg(t).split(" ").map(n=>Ub(n)).join("\\s+");return new RegExp(`(?:^|\\s)(?:(?:hey|he|hi|eh|hai|allo)\\s+)?${e}(?![a-z0-9])[,!.?;]?\\s*`,"i")}function Ob(t,e){const n=Fg(t),i=e&&Qd(e)?[Fb(e),bp]:[bp];for(const r of i){const s=n.match(r);if(s&&s.index!=null)return{eveille:!0,requete:n.slice(s.index+s[0].length).trim()}}return{eveille:!1,requete:n}}const Bb=/natural|neural|premium|enhanced|online/i;function kb(t){const e=t.filter(r=>r.lang.toLowerCase().startsWith("fr"));if(!e.length)return null;const n=e.filter(r=>/^fr[-_]fr$/i.test(r.lang)),i=n.length?n:e;return i.find(r=>Bb.test(r.name))??i[0]}const Vb={posee:{rate:.92,pitch:1},lumineuse:{rate:1.02,pitch:1.15},douce:{rate:.85,pitch:.95},stabilisee:{rate:.8,pitch:.9}};function Og(){const t=window,e=t.SpeechRecognition||t.webkitSpeechRecognition,n=e?new e:null;n&&(n.lang="fr-FR",n.interimResults=!1,n.maxAlternatives=1);let i=null;const r="speechSynthesis"in t,s=()=>{const a=t.speechSynthesis?.getVoices?.()??[];i=kb(a)};return r&&(s(),t.speechSynthesis.onvoiceschanged=s),{sttDisponible:!!n,ttsDisponible:r,ecouter(a){if(n){n.onresult=o=>a(o.results[0][0].transcript),n.onerror=()=>{};try{n.start()}catch{}}},ecouteEnContinu(a){if(!e)return()=>{};const o=new e;o.lang="fr-FR",o.continuous=!0,o.interimResults=!1,o.maxAlternatives=1;let l=!0;o.onresult=c=>{if(t.speechSynthesis?.speaking)return;const u=c.results[c.results.length-1];u?.isFinal&&a(u[0].transcript)},o.onerror=c=>{(c?.error==="not-allowed"||c?.error==="service-not-allowed")&&(l=!1)},o.onend=()=>{if(l)try{o.start()}catch{}};try{o.start()}catch{}return()=>{l=!1;try{o.abort()}catch{}}},parler(a,o){if(!r)return;const l=new SpeechSynthesisUtterance(a.replace(/\n/g," — ")),c=Vb[o];l.rate=c.rate,l.pitch=c.pitch,l.lang="fr-FR",i&&(l.voice=i),t.speechSynthesis.cancel(),t.speechSynthesis.speak(l)}}}const mc="23456789ABCDEFGHJKLMNPQRSTUVWXYZ",gc="nath-plus-2026-ciel-partage";function yo(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function bo(t,e){let n="",i=t>>>0;for(let r=0;r<e;r++)n=mc[i%mc.length]+n,i=Math.floor(i/mc.length);return n}function ml(t){return bo(yo("profil:"+t),6)}function zb(t){return(t.match(/.{1,4}/g)??[]).join("-")}function Ep(t){return t.toUpperCase().replace(/[^A-Z0-9]/g,"")}function Gb(t){const e=bo(yo(gc+":"+t),7),n=bo(yo(t+"#"+gc),7),i=bo(yo(e+n+gc),6);return zb(e+n+i)}function gl(t,e){const n=Ep(Gb(e)),i=Ep(t);return i.length===n.length&&i===n}const Bg="nath.pro";function _l(t){try{const e=JSON.parse(t.getItem(Bg)||"{}");return{cle:typeof e.cle=="string"&&e.cle?e.cle:null,nom:typeof e.nom=="string"&&e.nom?e.nom:null}}catch{return{cle:null,nom:null}}}function ku(t,e){t.setItem(Bg,JSON.stringify(e))}function eh(t,e){const{cle:n}=_l(t);return!!n&&gl(n,ml(e))}function Hb(t,e,n){if(!gl(n,ml(e)))return!1;const i=_l(t);return ku(t,{cle:n,nom:i.nom}),!0}function Wb(t,e){const n=_l(t);return!n.nom||!eh(t,e)?null:Qd(n.nom)?n.nom:null}function qb(t,e,n){const i=_l(t),r=n.trim();return r===""?(ku(t,{cle:i.cle,nom:null}),!0):!eh(t,e)||!Qd(r)?!1:(ku(t,{cle:i.cle,nom:r}),!0)}function Xb(t,e){const n=Og();let i=wb(localStorage);const r=()=>localStorage.getItem("nuage.seed")??"",s=()=>Wb(localStorage,r()),a=document.createElement("div");a.className="compagne",a.innerHTML=`
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
    </div>`,document.body.appendChild(a);const o=a.querySelector(".compagne-bulles"),l=a.querySelector(".compagne-champ"),c=a.querySelector(".compagne-mic"),u=a.querySelector(".compagne-reveil"),d=a.querySelector(".compagne-yeux"),h=a.querySelector(".compagne-retourner"),p=a.querySelector(".compagne-ligne");n.sttDisponible||(c.style.display="none",u.style.display="none"),e.cameraDisponible||(d.style.display="none");function _(D,J){const Z=document.createElement("div");for(Z.className=`bulle bulle-${J}`,Z.textContent=D,o.appendChild(Z);o.children.length>6;)o.removeChild(o.firstChild);return o.scrollTop=o.scrollHeight,Z}function v(D,J){_(D,"nuage"),n.parler(D,J)}let m=performance.now(),f="";const b={resultat:null,sujet:null,tour:0};let E=null;const T=[];function A(){let D=1,J=0;const Z=_("Chargement des ressources intellectuelles en cours... 0 %","nuage");fb(oe=>{oe<J-.2&&D++,J=oe,Z.textContent=`Chargement des ressources intellectuelles en cours... ${Math.min(99,Math.round(oe*100))} % · ressource ${D}`}).then(({cerveau:oe,raison:ve})=>{if(oe){E=oe,Z.textContent="Mon cerveau est arrivé. Dis les phrases les plus tordues, je suivrai.";return}const F=ci(localStorage);if(F){E=yp(F,fetch,No(localStorage)),Z.textContent="Je me suis reliée à un plus grand cerveau. Demande, je réponds vite.";return}Z.textContent=ve==="reseau"?"Un hic du réseau empêche mon gros cerveau d atterrir... je reste attentive avec mon petit moteur.":ve==="machine"?"Ma carte graphique refuse ce cerveau, trop costaud pour elle... mon petit moteur suffit, et le ciel n en est pas moins vivant.":"Le gros cerveau n’a pas pu atterrir ici... je reste attentive avec mon petit moteur.";const j=document.createElement("button");j.type="button",j.className="compagne-relance",j.textContent="réessayer le cerveau",j.addEventListener("click",()=>{j.remove(),A()}),Z.appendChild(j)})}if(Ng())A();else{const D=ci(localStorage);D&&(E=yp(D,fetch,No(localStorage)),_("Je suis reliée à un plus grand cerveau — demande-moi ce que tu veux.","nuage"))}function w(D){const J=D.trim();if(!J)return;if(m=performance.now(),_(J,"moi"),!i.prenom){const F=Rb(J);if(F){i={prenom:F,dejaVu:!0},Cb(localStorage,i),setTimeout(()=>v(`${F}… c est une belle adresse pour une étoile. Je la garde.`,"lumineuse"),700);return}}const Z=t(),oe=b.resultat!=null?wg(J,b.resultat):null;if(Dg(J)!=null||Ag(J)!=null||oe!=null||Cg(J)||Rg(J)||Ig(J)==="poeme"){const F=lo(J,{...Z,prenom:i.prenom,dernierResultat:b.resultat,dernierSujet:b.sujet,tour:b.tour});b.tour++,F.resultat!=null&&(b.resultat=F.resultat),b.sujet=F.sujet,T.push({role:"user",content:J},{role:"assistant",content:F.texte}),setTimeout(()=>v(F.texte,F.humeur),700);return}if(E){const F=Math.min(1,Math.max(0,(Math.abs(Z.timeOfDay-.5)-.2)*5)),j=_("…","nuage"),ue=[{role:"system",content:pb({prenom:i.prenom,emotion:Z.emotion,bpm:Z.bpm,breath:Z.breath,night:F})},...T.slice(-10),{role:"user",content:J}];E.ask(ue).then(async G=>{const te=G.replace(/!/g,"…").slice(0,600)||"…je cherche encore mes mots.",de=ci(localStorage);if(de&&await yb(de,J,te)===!1){const Ie=lo(J,{...Z,prenom:i.prenom});j.textContent=Ie.texte,T.push({role:"user",content:J},{role:"assistant",content:Ie.texte}),n.parler(Ie.texte,Ie.humeur);return}j.textContent=te,T.push({role:"user",content:J},{role:"assistant",content:te}),n.parler(te,"posee")}).catch(()=>{const G=lo(J,{...Z,prenom:i.prenom});j.textContent=G.texte,n.parler(G.texte,G.humeur)});return}const ve=lo(J,{...Z,prenom:i.prenom,dernierResultat:b.resultat,dernierSujet:b.sujet,tour:b.tour});b.tour++,ve.resultat!=null&&(b.resultat=ve.resultat),b.sujet=ve.sujet,setTimeout(()=>v(ve.texte,ve.humeur),700)}p.addEventListener("submit",D=>{D.preventDefault(),w(l.value),l.value=""}),c.addEventListener("click",()=>{c.classList.add("a-lécoute"),n.ecouter(D=>{c.classList.remove("a-lécoute"),w(D)}),setTimeout(()=>c.classList.remove("a-lécoute"),6e3)});let R=null;u.addEventListener("click",()=>{if(R){R(),R=null,u.classList.remove("actif"),u.setAttribute("aria-pressed","false");return}R=n.ecouteEnContinu(D=>{const J=Ob(D,s());J.eveille&&(m=performance.now(),J.requete?w(J.requete):v("Je t'écoute… dis, je suis là.","posee"))}),u.classList.add("actif"),u.setAttribute("aria-pressed","true"),_(`OREILLES OUVERTES — appelle-moi « ${s()??"Hey Nath"} » quand tu veux.`,"nuage")});const B=a.querySelector(".compagne-pro"),S=a.querySelector(".compagne-pro-paneau"),M=a.querySelector(".pro-id"),L=a.querySelector(".pro-cle"),q=a.querySelector(".pro-form-cle"),z=a.querySelector(".pro-form-nom"),K=a.querySelector(".pro-nom"),Q=a.querySelector(".pro-etat");function X(){const D=eh(localStorage,r()),J=s();M.textContent=ml(r()),q.hidden=D,z.hidden=!D,Q.textContent=D?J?`Nath+ actif : elle répond à « ${J} » (et toujours à « Hey Nath »).`:"Nath+ actif — choisissez un nom d'éveil (vide = retour à Hey Nath).":"Nath+ : un nom d'éveil à votre façon. Rien n'est enlevé au gratuit.";const Z=J??"Hey Nath";l.placeholder=`Dis « ${Z} »… (ou écris)`,u.title=`Réveil vocal « ${Z} » — écoute permanente`}B.addEventListener("click",()=>{const D=S.hidden;S.hidden=!D,B.setAttribute("aria-pressed",String(D)),D&&X()}),q.addEventListener("submit",D=>{D.preventDefault(),Hb(localStorage,r(),L.value)?(L.value="",X()):Q.textContent="Cette clé ne convient pas à cet appareil — vérifiez l'identifiant communiqué."}),z.addEventListener("submit",D=>{D.preventDefault(),qb(localStorage,r(),K.value)?(K.value="",X()):Q.textContent="Choisissez un nom en lettres (2 à 20), sans chiffres ni signes."});function $(D){d.classList.toggle("actif",D),d.setAttribute("aria-pressed",String(D)),h.hidden=!D}async function re(){try{const D=await e.basculer();$(D),D&&_("Me voilà, je te vois. Touche l'œil pour me fermer les yeux.","nuage")}catch{_("La caméra est refusée ou indisponible — on continue sans elle, rien n'est forcé.","nuage")}}function U(){const D=document.createElement("div");D.className="compagne-consent";const J=document.createElement("span");J.textContent=e.consentement();const Z=document.createElement("button");Z.type="button",Z.className="compagne-relance",Z.textContent="J'allume la caméra";const oe=document.createElement("button");oe.type="button",oe.className="compagne-relance",oe.textContent="Plus tard",Z.addEventListener("click",()=>{D.remove(),re()}),oe.addEventListener("click",()=>D.remove()),D.append(J,Z,oe),a.insertBefore(D,p)}d.addEventListener("click",()=>{e.estOuverte()?e.basculer().then(D=>{$(D),_("Je ferme les yeux. Rien de ce que je voyais n’est gardé.","nuage")}):U()}),h.addEventListener("click",async()=>{const D=await e.changerFace();h.title=D==="arriere"?"Caméra arrière — touche pour revenir à l’avant":"Caméra avant — touche pour passer à l’arrière",_(D==="arriere"?"Je montre le monde (caméra arrière).":"Je te regarde (caméra avant).","nuage")}),setTimeout(()=>{i.prenom?v(`Rebonjour ${i.prenom}… je gardais ta place dans le ciel.`,"lumineuse"):(_("Je suis là… touche le ciel, écris-moi, ou appelle-moi « Hey Nath » (bouton oreille). On a toute la nuit.","nuage"),setTimeout(()=>{i.prenom||_("Au fait… comment tu t appelles ?","nuage")},12e3))},1500);const H=()=>{window.setTimeout(async()=>{if(performance.now()-m<25e3)return H();const D={...t(),prenom:i.prenom},J=ci(localStorage);if(J){if(await Mb(J,D)===!1)return H();const ve=await bb(J,D);if(ve!=null&&ve>=1.5)return _("Je te sens tendu… on prend un souffle ensemble ? Touche le ciel, il redescendra avec toi.","nuage"),H()}let oe=Nb(D,Math.floor(Date.now()/6e4),f).texte;if(J){const ve=Ib(D).filter(F=>F!==f);oe=await Ab(J,D,ve)??oe}f=oe,_(oe,"nuage"),H()},Lb(Math.random))};H()}const Vu=864e5,zu=(t,e,n)=>Math.min(n,Math.max(e,t)),vl=()=>Math.random().toString(36).slice(2,8);function $b(t,e,n){const i=t.trim(),r=e.trim();if(!i||!r)return null;const s=n?.now??Date.now();return{id:n?.id??`f-${s.toString(36)}-${vl()}`,verso:i,recto:r,facilite:2.5,intervalle:0,due:s,revisions:0,oublis:0}}function jb(t,e){const n=t.trim();if(!n)return null;const i=Date.now();return{id:e?.id??`p-${i.toString(36)}-${vl()}`,nom:n,fiches:[]}}function Yb(t,e,n=Date.now()){if(e==="difficile")return{...t,facilite:zu(t.facilite-.2,1.3,3.2),intervalle:0,due:n+10*6e4,revisions:t.revisions+1,oublis:t.oublis+1};const i=t.revisions===0||t.intervalle===0;if(e==="bien"){const s=i?1:Math.max(1,Math.round(t.intervalle*t.facilite));return{...t,intervalle:s,due:n+s*Vu,revisions:t.revisions+1}}const r=i?2:Math.max(2,Math.round(t.intervalle*(t.facilite+.6)));return{...t,facilite:zu(t.facilite+.15,1.3,3.2),intervalle:r,due:n+r*Vu,revisions:t.revisions+1}}function Kb(t,e){return t.flatMap(n=>n.fiches).filter(n=>n.due<=e).sort((n,i)=>n.due-i.due)}function Jb(t){if(!t||typeof t!="object")return null;const e=t,n=typeof e.verso=="string"?e.verso.trim():"",i=typeof e.recto=="string"?e.recto.trim():"";if(!n||!i)return null;const r=(s,a=0)=>typeof s=="number"&&Number.isFinite(s)?s:a;return{id:typeof e.id=="string"&&e.id?e.id:`f-${vl()}`,verso:n,recto:i,facilite:zu(r(e.facilite,2.5),1.3,3.2),intervalle:Math.max(0,Math.round(r(e.intervalle))),due:r(e.due,Date.now()),revisions:Math.max(0,Math.round(r(e.revisions))),oublis:Math.max(0,Math.round(r(e.oublis)))}}function Zb(t){if(!t||typeof t!="object")return null;const e=t;return typeof e.nom!="string"||!Array.isArray(e.fiches)?null:{id:typeof e.id=="string"&&e.id?e.id:`p-${vl()}`,nom:e.nom.trim()||"Sans nom",fiches:e.fiches.map(Jb).filter(n=>n!==null)}}function bt(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim().replace(/\s+/g," ")}function _c(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function vc(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function xc(t,e){const n=[...t];for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}function Qb(t,e,n=Date.now()){if(t.fiches.length<2)return[];const i=Math.floor(n/Vu),r=[...new Set(t.fiches.map(o=>o.recto))],s=xc(t.fiches,_c(vc(`${t.id}:${i}`))).slice(0,Math.max(0,e)),a=[];for(const o of s){const l=xc(r.filter(u=>u!==o.recto),_c(vc(`${o.id}:${i}`))).slice(0,3),c=xc([o.recto,...l],_c(vc(`c:${o.id}:${i}`)));a.push({ficheId:o.id,enonce:o.verso,attendue:o.recto,choix:c,bonne:c.indexOf(o.recto)})}return a}const kg="nath.etudes";function oi(t){try{const e=t.getItem(kg);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(Zb).filter(i=>i!==null):[]}catch{return[]}}function th(t,e){t.setItem(kg,JSON.stringify(e))}function na(t,e,n){const i=jb(e,n);return i?(th(t,[...oi(t),i]),i):null}function co(t,e,n,i,r){const s=$b(n,i,r);if(!s)return null;const a=oi(t),o=a.find(l=>l.id===e);return o?(o.fiches.push(s),th(t,a),s):null}function eE(t,e,n,i,r=Date.now()){const s=oi(t),a=s.find(c=>c.id===e),o=a?.fiches.findIndex(c=>c.id===n)??-1;if(!a||o<0)return null;const l=Yb(a.fiches[o],i,r);return a.fiches[o]=l,th(t,s),l}function tE(t,e){return{total:t.fiches.length,aRevoir:t.fiches.filter(n=>n.due<=e).length,revisees:t.fiches.filter(n=>n.revisions>0).length}}function nE(t,e){const n=bt(e);if(!n)return null;const i=t.find(r=>bt(r.sujet)===n);return i||(t.find(r=>{const s=bt(r.sujet);return s.length>2&&(n.includes(s)||s.includes(n))})??null)}function iE(t,e){const n=e.sujet.trim(),i=e.resume.trim();if(!n||!i)return t;const r=bt(n),s={sujet:n,titre:(e.titre||"").trim()||n,resume:i,url:typeof e.url=="string"?e.url:"",image:typeof e.image=="string"?e.image:"",ramene_a:Number.isFinite(e.ramene_a)?e.ramene_a:Date.now()};return[...t.filter(a=>bt(a.sujet)!==r),s]}function rE(t){for(const e of[t?.originalimage?.source,t?.thumbnail?.source])if(typeof e=="string"&&/^https?:\/\//.test(e))return e;return""}async function Tp(t,e,n){try{const i=`https://${n}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t.trim())}`,r=await e(i);if(!r.ok)return null;const s=await r.json(),a=typeof s?.extract=="string"?s.extract.trim():"";return a?{titre:typeof s.title=="string"&&s.title?s.title:t.trim(),resume:a,url:s?.content_urls?.desktop?.page??"",image:rE(s)}:null}catch{return null}}async function sE(t,e,n="fr"){try{const i=`https://${n}.wikipedia.org/w/api.php?action=query&list=search&srlimit=1&format=json&origin=*&srsearch=`+encodeURIComponent(t.trim()),r=await e(i);if(!r.ok)return null;const a=(await r.json())?.query?.search?.[0]?.title;return typeof a=="string"&&a.trim()?a.trim():null}catch{return null}}async function aE(t,e,n="fr"){const i=await Tp(t,e,n);if(i)return i;const r=await sE(t,e,n);return!r||bt(r)===bt(t)?null:await Tp(r,e,n)}function Sc(t,e=8){const n=t.split(new RegExp("(?<=[.!?;])\\s+")).map(s=>s.trim()).filter(Boolean),i=[],r=new Set;for(const s of n){if(i.length>=e)break;const a=s.split(/\s+/);if(a.length<4)continue;const o=d=>d.replace(/[^\p{L}\p{N}]/gu,"");let l="";for(const d of a){const h=o(d);h.length>=5&&h.length>l.length&&(l=h)}if(!l)continue;const c=l.toLowerCase();if(r.has(c))continue;r.add(c);const u=a.map(d=>o(d)===l?"……":d).join(" ");i.push({verso:u,recto:l})}return i}const Ap=(t,e)=>`${bt(t)}|${bt(e)}`;function la(t,e,n,i){const r=e.trim(),s=n.trim(),a=i.trim();if(!r||!s||!a)return[...t];const o=Ap(r,a);return[...t.filter(c=>Ap(c.de,c.langue)!==o),{de:r,a:s,langue:a}]}function oE(t,e,n){const i=bt(e),r=n.filter(u=>bt(u.langue)===i),s=bt(t)?bt(t).split(" "):[];if(s.length===0)return{resultat:null,manques:[]};const a=r.find(u=>bt(u.de)===bt(t));if(a)return{resultat:a.a,manques:[]};const o=new Map;for(const u of r){const d=bt(u.de);d&&!d.includes(" ")&&o.set(d,u.a)}const l=[],c=[];for(const u of s){const d=o.get(u);d?l.push(d):(l.push(u),c.push(u))}return c.length===s.length?{resultat:null,manques:c}:{resultat:l.join(" "),manques:c}}function wp(t){if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.map(n=>{if(!n||typeof n!="object")return null;const i=n,r=typeof i.de=="string"?i.de.trim():"",s=typeof i.a=="string"?i.a.trim():"",a=typeof i.langue=="string"?i.langue.trim():"";return r&&s&&a?{de:r,a:s,langue:a}:null}).filter(n=>n!==null):[]}catch{return[]}}const lE={anglais:[["bonjour","hello"],["merci","thank you"],["oui","yes"],["non","no"],["eau","water"],["pain","bread"],["maison","house"],["ami","friend"],["père","father"],["mère","mother"],["chien","dog"],["chat","cat"],["livre","book"],["école","school"],["jour","day"],["nuit","night"]].map(([t,e])=>({de:t,a:e,langue:"anglais"})),espagnol:[["bonjour","hola"],["merci","gracias"],["oui","sí"],["non","no"],["eau","agua"],["pain","pan"],["maison","casa"],["ami","amigo"],["père","padre"],["mère","madre"],["chien","perro"],["chat","gato"],["livre","libro"],["école","escuela"],["jour","día"],["nuit","noche"]].map(([t,e])=>({de:t,a:e,langue:"espagnol"})),allemand:[["bonjour","hallo"],["merci","danke"],["oui","ja"],["non","nein"],["eau","Wasser"],["pain","Brot"],["maison","Haus"],["ami","Freund"],["père","Vater"],["mère","Mutter"],["chien","Hund"],["chat","Katze"],["livre","Buch"],["école","Schule"],["jour","Tag"],["nuit","Nacht"]].map(([t,e])=>({de:t,a:e,langue:"allemand"})),italien:[["bonjour","ciao"],["merci","grazie"],["oui","sì"],["non","no"],["eau","acqua"],["pain","pane"],["maison","casa"],["ami","amico"],["père","padre"],["mère","madre"],["chien","cane"],["chat","gatto"],["livre","libro"],["école","scuola"],["jour","giorno"],["nuit","notte"]].map(([t,e])=>({de:t,a:e,langue:"italien"})),portugais:[["bonjour","olá"],["merci","obrigado"],["oui","sim"],["non","não"],["eau","água"],["pain","pão"],["maison","casa"],["ami","amigo"],["père","pai"],["mère","mãe"],["chien","cachorro"],["chat","gato"],["livre","livro"],["école","escola"],["jour","dia"],["nuit","noite"]].map(([t,e])=>({de:t,a:e,langue:"portugais"})),arabe:[["bonjour","مرحبا"],["merci","شكرا"],["oui","نعم"],["non","لا"],["eau","ماء"],["pain","خبز"],["maison","بيت"],["ami","صديق"],["père","أب"],["mère","أم"],["chien","كلب"],["chat","قط"],["livre","كتاب"],["école","مدرسة"],["jour","يوم"],["nuit","ليلة"]].map(([t,e])=>({de:t,a:e,langue:"arabe"})),chinois:[["bonjour","你好"],["merci","谢谢"],["oui","是"],["non","不"],["eau","水"],["pain","面包"],["maison","家"],["ami","朋友"],["père","爸爸"],["mère","妈妈"],["chien","狗"],["chat","猫"],["livre","书"],["école","学校"],["jour","日"],["nuit","夜"]].map(([t,e])=>({de:t,a:e,langue:"chinois"}))},cE={english:"anglais",spanish:"espagnol",german:"allemand",italian:"italien",portuguese:"portugais",arabic:"arabe",chinese:"chinois"};function uE(t){const e=bt(t),n=cE[e]??e;return(lE[n]??[]).map(i=>({...i}))}function dE(t){return t.map(e=>`${e.langue} | ${e.de} :: ${e.a}`).join(`
`)}function hE(t,e){let n=[...e];for(const i of t.split(/\r?\n/)){const r=i.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf("|"),a=r.indexOf("::",s+1);if(s<=0||a<0)continue;const o=r.slice(0,s).trim(),l=r.slice(s+1,a).trim(),c=r.slice(a+2).trim();!o||!l||!c||(n=la(n,l,c,o))}return n}const xl={actif:!1,nom:"",slogan:"",couleur:"#9fd8ff",organisation:"",cle:""},nh="nath.marque",fE=/^#[0-9a-fA-F]{6}$/;function Vg(t){return ml("entreprise:"+bt(t))}function zg(t){return typeof t=="string"&&fE.test(t.trim())?t.trim().toLowerCase():xl.couleur}function ia(t){try{const e=JSON.parse(t.getItem(nh)||"{}"),n=typeof e.nom=="string"?e.nom.trim().slice(0,40):"",i=typeof e.slogan=="string"?e.slogan.trim().slice(0,90):"",r=typeof e.organisation=="string"?e.organisation.trim():"",s=typeof e.cle=="string"?e.cle:"";return{actif:e.actif===!0&&!!n&&!!r&&gl(s,Vg(r)),nom:n,slogan:i,couleur:zg(e.couleur),organisation:r,cle:s}}catch{return{...xl}}}function pE(t,e){const n=e.organisation.trim();if(!n||!gl(e.cle,Vg(n)))return!1;const i=e.nom.trim().slice(0,40);if(!i)return!1;const r={actif:!0,nom:i,slogan:e.slogan.trim().slice(0,90),couleur:zg(e.couleur),organisation:n,cle:e.cle};return t.setItem(nh,JSON.stringify(r)),!0}function mE(t){t.setItem(nh,JSON.stringify({...xl}))}function Cp(t){return t.actif?t.couleur:xl.couleur}const gE=["est traduit par","se traduit par","traduit par","veut dire","signifie","se dit"];function _E(t){const e=t.trim();if(!e)return null;const n=e.toLowerCase();for(const i of gE){const r=n.indexOf(i);if(r<0)continue;const s=e.slice(0,r).trim(),a=e.slice(r+i.length).trim().replace(/[.,;:!?…]+$/,"").trim();return s&&a?{de:s,a}:null}return null}const vE=/\b(?:euh+|hem+|hm+|ben|bah)\b[, ]*/gi;function xE(t){let e=t.replace(vE,"");return e=e.replace(/\s+/g," "),e=e.replace(/([,.;:!?])\s*(?:[,.;:!?]\s*)*/g,"$1 "),e.trim()}const SE={francais:"fr",français:"fr",french:"fr",anglais:"en",english:"en",espagnol:"es",spanish:"es",allemand:"de",german:"de",deutsch:"de",italien:"it",italian:"it",portugais:"pt",portuguese:"pt",arabe:"ar",arabic:"ar",chinois:"zh",chinese:"zh",neerlandais:"nl",dutch:"nl",russe:"ru",russian:"ru",turc:"tr",turkish:"tr",swahili:"sw",hindi:"hi",japonais:"ja",japanese:"ja",coréen:"ko",korean:"ko",grec:"el",greek:"el",polonais:"pl",polish:"pl",hébreu:"he",hebrew:"he"};function ME(t){const e=t.trim().toLowerCase();return e?SE[e]??null:null}async function yE(t,e,n,i){const r=t.trim();if(!r)return null;try{const s="https://api.mymemory.translated.net/get?q="+encodeURIComponent(r)+"&langpair="+encodeURIComponent(e)+"|"+encodeURIComponent(n),a=await i(s);if(!a.ok)return null;const l=(await a.json())?.responseData?.translatedText;return typeof l=="string"&&l.trim()?l.trim():null}catch{return null}}const bE=24,EE=[{id:"soe",titre:"Système solaire",domaine:"Sciences",resume:"Le Soleil et huit planètes liées par la gravité ; la Terre est la seule connue à abriter la vie.",tags:["espace","planètes","gravité"]},{id:"gal",titre:"Voie lactée",domaine:"Sciences",resume:"Notre galaxie, un disque de plus de cent milliards d étoiles dont le Soleil n est qu un point lumineux.",tags:["espace","galaxie","astronomie"]},{id:"mit",titre:"Mitose",domaine:"Sciences",resume:"La division cellulaire qui duplique chaque chromosome et fabrique deux cellules identiques, base de la croissance.",tags:["cellule","biologie","vie"]},{id:"pho",titre:"Photosynthèse",domaine:"Sciences",resume:"Les feuilles transforment la lumière, l eau et le dioxyde de carbone en sucre et en oxygène : presque tout respire grâce à elle.",tags:["plante","énergie","biologie"]},{id:"eau",titre:"Cycle de l eau",domaine:"Sciences",resume:"Évaporation, nuages, pluie, rivières : la même eau tourne depuis des milliards d années sans jamais se consumer.",tags:["eau","terre","climat"]},{id:"vol",titre:"Volcans",domaine:"Sciences",resume:"Des failles de la croûte terrestre où la lave remontée du manteau façonne îles et montagnes, parfois avec violence.",tags:["terre","roche","danger"]},{id:"sek",titre:"Séismes",domaine:"Sciences",resume:"Les plaques tectiques frottent, la croûte casse et libère des ondes : c est le tremblement de terre, mesuré en magnitude.",tags:["terre","ondes","danger"]},{id:"mno",titre:"Magnétisme",domaine:"Sciences",resume:"Aimants et courants électriques créent un champ invisible ; la Terre elle-même est un aimant géant qui guide les boussoles.",tags:["aimant","énergie","physique"]},{id:"lum",titre:"Lumière",domaine:"Sciences",resume:"Onde électromagnétique à 300 000 km/s ; sa diffusion dans l air rend le ciel bleu et son arc-en-ciel cache toutes les couleurs.",tags:["ondes","couleur","physique"]},{id:"son",titre:"Son",domaine:"Sciences",resume:"Des vibrations qui voyagent dans l air, l eau ou les solides ; sans support matériel, le son n existe pas : le silence de l espace est total.",tags:["ondes","vibration","physique"]},{id:"mat",titre:"États de la matière",domaine:"Sciences",resume:"Solide, liquide, gaz : la même eau change d humeur selon la température, et la chaleur cachée du changement d état règle nos pluies.",tags:["eau","énergie","physique"]},{id:"atm",titre:"Atmosphère",domaine:"Sciences",resume:"Une coquille de gaz de cent kilomètres, la première moitié pesée au ras du sol : elle respire, protège et tient la planète au chaud.",tags:["air","terre","climat"]},{id:"ele",titre:"Électricité",domaine:"Technique",resume:"Le déplacement organisé des électrons dans un conducteur ; tout notre monde numérique n est que de l électricité mise en scène.",tags:["énergie","courant","technique"]},{id:"inf",titre:"Informatique",domaine:"Technique",resume:"Des portes logiques faites de transistors, des millions de zéros et des uns, et naissent textes, images et intelligences.",tags:["calcul","données","technique"]},{id:"ia",titre:"Intelligence artificielle",domaine:"Technique",resume:"Des réseaux de neurones entraînés sur d énormes quantités de texte ou d images savent reconnaître, traduire et converser.",tags:["calcul","données","cerveau"]},{id:"rob",titre:"Robotique",domaine:"Technique",resume:"Capteurs pour sentir, moteurs pour agir, programmes pour décider : le robot est un outil qui commence à choisir lui-même.",tags:["machine","capteur","technique"]},{id:"geo",titre:"Géométrie",domaine:"Maths",resume:"L'étude des formes, des distances et de l'espace, d'Euclide aux géométries courbes qui ont inspiré Einstein.",tags:["formes","espace","nombre"]},{id:"alg",titre:"Algèbre",domaine:"Maths",resume:"L art de manipuler l inconnue : une lettre devient une boîte de calcul et les équations ouvrent la solution pas à pas.",tags:["nombre","équation","méthode"]},{id:"pro",titre:"Probabilités",domaine:"Maths",resume:"Mesurer le hasard avec rigueur : dès qu un jeu, une météo ou un risque est chiffré, ce sont les probabilités qui parlent.",tags:["hasard","nombre","décision"]},{id:"fib",titre:"Suite de Fibonacci",domaine:"Maths",resume:"Chaque terme est la somme des deux précédents ; on retrouve cette suite dans les tournesols, les pins et certaines coquilles.",tags:["nombre","nature","motif"]},{id:"nom",titre:"Nombres premiers",domaine:"Maths",resume:"Des nombres que rien ne divise à part 1 et eux-mêmes ; les briques invisibles de l arithmétique et du code secret moderne.",tags:["nombre","arithmétique","secret"]},{id:"pyt",titre:"Pythagore",domaine:"Maths",resume:"Dans un triangle rectangle, le carré de l hypoténuse égale la somme des carrés des deux autres côtés : l outil des mesures depuis 2500 ans.",tags:["formes","triangle","mesure"]},{id:"evh",titre:"Évolution",domaine:"Histoire",resume:"Par sélection naturelle, les êtres vivants se transforment sur des millions d années : la diversité du vivant en est la trace.",tags:["darwin","biologie","science"]},{id:"ren",titre:"Renaissance",domaine:"Histoire",resume:"Entre XIVe et XVIe siècle, arts, sciences et explorations éclatent en Europe : Léonard de Vinci en est l esprit le plus curieux.",tags:["art","science","europe"]},{id:"imp",titre:"Empires d Afrique",domaine:"Histoire",resume:"Ghana, Mali, Songhaï, Grande-Zimbabwe : de grands empires ont prospéré sur l or, le sel, le commerce et l urbanisme bien avant la colonisation.",tags:["afrique","commerce","or"]},{id:"mer",titre:"Mer et océans",domaine:"Géographie",resume:"L eau salée couvre plus de 70 % de la planète, régule le climat et abrite une vie que nous cartographions moins bien que la Lune.",tags:["eau","terre","climat"]},{id:"clm",titre:"Climat",domaine:"Géographie",resume:"Le climat est une moyenne de la météo sur trente ans ; le golfe du Mexique, le Sahara et nos saisons en dépendent comme d une horloge.",tags:["terre","air","sciences"]},{id:"cor",titre:"Cœur",domaine:"Corps humain",resume:"Une pompe muscle de 300 grammes qui bat cent mille fois par jour et irrigue chaque cellule de sang oxygéné.",tags:["sang","vie","organe"]},{id:"cer",titre:"Cerveau",domaine:"Corps humain",resume:"Quatre-vingt-six milliards de neurones en réseau : penser, sentir et bouger ne sont que des courants et des chimies orchestres.",tags:["neurone","vie","sens"]},{id:"som",titre:"Sommeil",domaine:"Corps humain",resume:"Chaque nuit le cerveau range la journée, consolide la mémoire et répare le corps ; dormir peu, c est apprendre moins.",tags:["cerveau","mémoire","vie"]},{id:"mus",titre:"Musique",domaine:"Arts",resume:"Des fréquences organisées dans le temps : rythmes et gammes varient selon les cultures mais le plaisir d écouter est universel.",tags:["son","art","culture"]},{id:"cin",titre:"Cinéma",domaine:"Arts",resume:"Vingt-quatre images par seconde suffisent à l œil pour croire au mouvement : le cinéma est une illusion partagée devenue art majeur.",tags:["image","art","technique"]},{id:"lng",titre:"Langues du monde",domaine:"Langue",resume:"Plus de sept mille langues parlées ; chacune découpe le réel à sa façon et en perdre une, c est perdre une manière de penser.",tags:["parole","culture","mémoire"]},{id:"ecr",titre:"Écriture",domaine:"Langue",resume:"Née à Sumer pour compter les greniers, l écriture a étendu la mémoire humaine au-delà des individus et des siècles.",tags:["symbole","histoire","mémoire"]},{id:"bio",titre:"Biodiversité",domaine:"Environnement",resume:"Des millions d espèces liées dans un réseau vivant ; chaque disparité retire un maillon que rien ne remplace.",tags:["vie","nature","équilibre"]},{id:"for",titre:"Forêts",domaine:"Environnement",resume:"Elles respirent pour la planète, abritent la plupart des espèces terrestres et régulent la pluie des continents.",tags:["arbres","climat","nature"]},{id:"rlf",titre:"Récifs coralliens",domaine:"Environnement",resume:"Des villes vivantes bâties par de petits animaux : moins de un pour cent de l océan, un quart de la vie marine.",tags:["mer","vie","équilibre"]},{id:"dch",titre:"Déchets et recyclage",domaine:"Environnement",resume:"Rien dans la nature ne jette : nos déchets sont des matières qui attendent le bon geste, ou polluent longtemps.",tags:["matière","équilibre","société"]},{id:"slt",titre:"Solaire photovoltaïque",domaine:"Énergie",resume:"La lumière du soleil devient électricité dans une galette de silicium : la Terre reçoit en une heure de soleil de quoi alimenter un an.",tags:["énergie","soleil","technique"]},{id:"eol",titre:"Éolien",domaine:"Énergie",resume:"Le vent est une énergie solaire corrigée par la rotation de la Terre ; ses pales captent ce mouvement devenu courant.",tags:["énergie","vent","technique"]},{id:"nucl",titre:"Nucléaire",domaine:"Énergie",resume:"Fissionner l uranium libère une énergie immense sans fumée ; la question reste la gestion des déchets et le risque.",tags:["énergie","atome","débat"]},{id:"bat",titre:"Batteries",domaine:"Énergie",resume:"Stockées chimiquement, les électrons attendent leur heure : sans batterie, le solaire et l éolien ne pourraient suivre la nuit.",tags:["énergie","stockage","technique"]},{id:"urb",titre:"Villes",domaine:"Société",resume:"Nées de greniers et de carrefours, elles logent aujourd hui plus de la moitié de l humanité et dessinent son avenir.",tags:["habiter","société","histoire"]},{id:"mon",titre:"Monnaie",domaine:"Société",resume:"Du coquillage au chiffre : la monnaie n a de valeur que celle de la confiance partagée, et l économie tout entière s appuie dessus.",tags:["échange","confiance","société"]},{id:"trv",titre:"Travail",domaine:"Société",resume:"Chaque métier est une réponse à un besoin des autres ; l automatisation déplace le travail plus qu il ne le fait disparaître.",tags:["métier","société","technique"]},{id:"edu",titre:"Éducation",domaine:"Société",resume:"Transmettre sans remplacer : apprendre, c est ajouter à l élève ce qu il découvrira seul avec de l aide.",tags:["école","apprendre","société"]},{id:"ntn",titre:"Internet",domaine:"Société",resume:"Des câbles sous-marins et des routeurs d abord : le nuage numérique est en réalité un réseau très physique autour de la Terre.",tags:["réseau","données","société"]},{id:"vac",titre:"Vaccins",domaine:"Médecine",resume:"Montrer au corps le ennemi sans le danger : il en garde la mémoire et répond plus vite la fois suivante.",tags:["corps","médecine","mémoire"]},{id:"ant",titre:"Antibiotiques",domaine:"Médecine",resume:"Des moisissures devenues médicaments : elles tuent les bactéries, et le surusage fabrique des bactéries devenues résistantes.",tags:["médecine","bactérie","équilibre"]},{id:"dgst",titre:"Digestion",domaine:"Corps humain",resume:"Du bol alimentaire à l énergie, un voyage de trente mètres où chaque organe joue son rôle à l heure.",tags:["corps","énergie","vie"]}];function TE(t,e){const n=bt(t.titre),i=t.tags.map(s=>bt(s)),r=bt(t.resume);return n.includes(e)?3:i.some(s=>s===e||s.includes(e)||e.includes(s))?2:r.includes(e)?1:0}function AE(t,e){const n=bt(e);return n?t.map((r,s)=>({n:r,i:s,s:TE(r,n)})).filter(r=>r.s>0).sort((r,s)=>s.s-r.s||r.i-s.i).map(r=>r.n):t.slice()}function wE(t){return[...new Set(t.map(e=>e.domaine))].sort((e,n)=>e.localeCompare(n,"fr"))}function CE(t,e){return e?t.filter(n=>n.domaine===e):t.slice()}function RE(t,e=Math.floor(Date.now()/864e5)){if(!t.length)return null;const n=Math.abs(Math.trunc(e));return t[n%t.length]}function LE(t,e,n=6){const i=new Set(t.tags.map(r=>bt(r)));return e.filter(r=>r.id!==t.id).map(r=>({x:r,s:r.tags.filter(s=>i.has(bt(s))).length*2+(r.domaine===t.domaine?1:0)})).filter(r=>r.s>0).sort((r,s)=>s.s-r.s).slice(0,n).map(r=>r.x)}function PE(t,e,n=bE){const i=Math.min(t.length,Math.max(0,e)+n);return{visibles:t.slice(0,i),reste:t.length-i}}const Gg="nath.encyclo.favoris";function Hg(t){try{const e=JSON.parse(t.getItem(Gg)??"[]");return Array.isArray(e)?[...new Set(e.filter(n=>typeof n=="string"))]:[]}catch{return[]}}function Rp(t,e){const n=Hg(t),i=!n.includes(e),r=i?[...n,e]:n.filter(s=>s!==e);return t.setItem(Gg,JSON.stringify(r)),i}function Lp(t,e){const n=new Set(Hg(e));return t.filter(i=>n.has(i.id))}function DE(t){const e=new Set,n=[];for(const i of t){const r=bt(i.titre||i.sujet);!r||e.has(r)||(e.add(r),n.push({id:`savoir:${r}`,titre:(i.titre||i.sujet).trim(),domaine:"Mes découvertes",resume:i.resume,tags:[],...i.image?{image:i.image}:{},...i.url?{url:i.url}:{}}))}return n}async function IE(t,e,n=fetch,i=""){const r=e.trim();if(!r)return null;try{const s=await n(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i?{modele:i}:{},messages:[{role:"system",content:"Tu es un guide curieux et pédagogue, en français. En 3 ou 4 phrases courtes, donne un fait surprenant et un rapprochement inattendu avec un autre domaine sur le sujet qui vient. Pas de liste, pas de titre."},{role:"user",content:r}]})});if(!s.ok)return null;const a=await s.json(),o=a?.result?.response??a?.response,l=typeof o=="string"?o.trim():"";return l&&l.length<=800?l:null}catch{return null}}const Mc=[{max:50,palier:"Classe",mensuel:15e3},{max:200,palier:"École",mensuel:4e4},{max:1e3,palier:"Réseau",mensuel:12e4},{max:1/0,palier:"Sur mesure",mensuel:null}];function NE(t){if(!Number.isFinite(t)||t<=0)return{palier:"Sur mesure",mensuel:null};const e=Mc.find(n=>t<=n.max)??Mc[Mc.length-1];return{palier:e.palier,mensuel:e.mensuel}}function Pp(t){return t===null?"à convenir":t.toLocaleString("fr-FR").replace(/[\u202f\u00a0]/g," ")+" FCFA"}const Dp="nath.savoir",xr="nath.lexique",le=t=>{const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild},je=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e);function UE(t){const e=Og(),n=le('<button class="savoir-btn" title="Mon coin d’études" aria-label="Ouvrir le coin d’études">🎓</button>'),i=le(`
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
    </div>`);document.body.append(n,i);const r=i.querySelector(".savoir-corps");n.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden||b(s)}),i.querySelector(".savoir-fermer").addEventListener("click",()=>i.hidden=!0);let s="reviser",a=null,o=[],l=null,c="",u=!1,d=0,h="",p=null;const _=()=>{try{const U=JSON.parse(t.getItem(Dp)??"[]");return Array.isArray(U)?U.filter(H=>!!H&&typeof H=="object"&&typeof H.sujet=="string"&&typeof H.resume=="string"):[]}catch{return[]}},v=()=>wp(t.getItem(xr));i.querySelectorAll(".savoir-onglets button").forEach(U=>U.addEventListener("click",()=>{s=U.dataset.on,i.querySelectorAll(".savoir-onglets button").forEach(H=>H.classList.toggle("actif",H===U)),b(s)}));const m=()=>a?oi(t).find(U=>U.id===a)??null:null,f=()=>a?oi(t).filter(U=>U.id===a):oi(t);function b(U){r.innerHTML="",U==="reviser"?E():U==="savoir"?R():U==="encyclo"?L():U==="entreprise"?re():z()}function E(){const U=oi(t),H=le('<select class="savoir-select"><option value="">Tous les paquets</option></select>');for(const G of U){const te=document.createElement("option");te.value=G.id,te.textContent=`${G.nom} (${G.fiches.length})`,G.id===a&&(te.selected=!0),H.appendChild(te)}H.addEventListener("change",()=>{a=H.value||null,l=null,E()}),r.appendChild(H);const D=le('<div class="savoir-ligne"><input type="text" placeholder="Nouveau paquet (ex. Biologie)" aria-label="Nouveau paquet" /><button>Ajouter</button></div>'),J=D.querySelector("input");D.querySelector("button").addEventListener("click",()=>{const G=na(t,J.value);G?(a=G.id,E()):J.focus()}),r.appendChild(D);const oe=f().map(G=>tE(G,Date.now())).reduce((G,te)=>({total:G.total+te.total,aRevoir:G.aRevoir+te.aRevoir,revisees:G.revisees+te.revisees}),{total:0,aRevoir:0,revisees:0});r.appendChild(le(`<p class="savoir-stats">${oe.total} cartes · <b>${oe.aRevoir} à revoir</b> · ${oe.revisees} travaillées</p>`));const ve=le('<details class="savoir-import"><summary>Coller des cartes (une par ligne : question :: réponse)</summary><textarea rows="4" placeholder="Capitale du Cameroun :: Yaoundé&#10;2 + 2 :: 4"></textarea><button>Importer</button></details>'),F=ve.querySelector("textarea");ve.querySelector("button").addEventListener("click",()=>{const G=a??na(t,"Mes cartes")?.id??null;if(!G)return;a=G;let te=0;for(const de of F.value.split(/\r?\n/)){const Ie=de.indexOf("::");Ie<=0||co(t,G,de.slice(0,Ie),de.slice(Ie+2))&&te++}E(),te&&e.parler(`${te} cartes rangées dans ${m()?.nom??"Mes cartes"}.`,"posee")}),r.appendChild(ve);const j=le('<div class="savoir-actions"><button class="savoir-dicter">🎤 Dicter un cours</button></div>');j.querySelector(".savoir-dicter").addEventListener("click",()=>{if(r.querySelector(".savoir-session")?.remove(),!e.sttDisponible){r.appendChild(le('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — colle ton cours en texte, ça marche aussi.</p>'));return}r.appendChild(le('<p class="savoir-msg">J’écoute… parle normalement, je retirerai les « euh » tout seul.</p>')),e.ecouter(async G=>{const te=xE(G);if(r.querySelector(".savoir-msg")?.remove(),!te){r.appendChild(le('<p class="savoir-msg">Je n’ai rien entendu de assez net — redicte, sans te presser.</p>'));return}let Ie=a;if(!Ie){const Be=ci(t),xt=oi(t).map(Et=>Et.nom),C=Be&&xt.length?await Eb(Be,te,xt):null;C&&(Ie=oi(t).find(Et=>Et.nom===C)?.id??null)}const ye=Ie??na(t,"Mes cartes")?.id??null;if(!ye)return;a=ye;let Ne=0;for(const Be of Sc(te))co(t,ye,Be.verso,Be.recto)&&Ne++;E();const qe=le(Ne?`<p class="savoir-msg">${Ne} cartes nées de ta voix, rangées dans « ${je(m()?.nom??"Mes cartes")} ». Révise quand tu veux.</p>`:'<p class="savoir-msg">Trop court pour faire des cartes — dicte-moi des phrases complètes, une idée par phrase.</p>');r.insertBefore(qe,r.firstChild),Ne&&e.parler(`${Ne} cartes nées de ta dictée.`,"lumineuse")})}),r.appendChild(j);const ue=le('<div class="savoir-actions"><button class="savoir-reviser">Réviser maintenant</button><button class="savoir-quiz">Quiz du jour</button></div>');ue.querySelector(".savoir-reviser").addEventListener("click",()=>{if(o=Kb(f(),Date.now()),o.length===0){r.querySelector(".savoir-session")?.remove(),r.appendChild(le('<p class="savoir-msg">Rien à revoir pour l’instant — repose-toi, ou importe des cartes.</p>'));return}T()}),ue.querySelector(".savoir-quiz").addEventListener("click",()=>{const G=m()??f().find(te=>te.fiches.length>=2);if(!G){r.appendChild(le('<p class="savoir-msg">Un quiz a besoin d’un paquet d’au moins deux cartes.</p>'));return}l={questions:Qb(G,5),index:0,reponses:[],fini:!1},w()}),r.appendChild(ue)}function T(){r.querySelector(".savoir-session")?.remove();const U=o.shift();if(!U){r.appendChild(le('<p class="savoir-msg session">Fin de la file 🌿 — tout est revu, la mémoire fait son travail en silence.</p>'));return}const H=le(`<div class="savoir-session session">
      <p class="savoir-reste">encore ${o.length}</p>
      <p class="savoir-verso">${je(U.verso)}</p>
      <div class="savoir-reponse" hidden><p class="savoir-recto">${je(U.recto)}</p></div>
      <div class="savoir-actions">
        <button class="savoir-voir">Voir la réponse</button>
        <span class="savoir-noter" hidden>
          <button data-n="difficile">Difficile</button>
          <button data-n="bien">Bien</button>
          <button data-n="facile">Facile</button>
        </span>
      </div>
    </div>`),D=H.querySelector(".savoir-reponse"),J=H.querySelector(".savoir-noter");H.querySelector(".savoir-voir").addEventListener("click",()=>{D.hidden=!1,J.hidden=!1,H.querySelector(".savoir-voir").hidden=!0,e.parler(U.recto,"posee")}),J.querySelectorAll("button").forEach(Z=>Z.addEventListener("click",()=>{const oe=a??A(U.id);oe&&eE(t,oe,U.id,Z.dataset.n),T()})),r.appendChild(H)}function A(U){for(const H of oi(t))if(H.fiches.some(D=>D.id===U))return H.id;return null}function w(){if(r.querySelector(".savoir-session")?.remove(),!l)return E();const U=l.questions[l.index];if(!U||l.fini){const J=l.reponses.filter((ve,F)=>ve===l.questions[F].bonne).length,Z=l.questions.length;l=null,E();const oe=Math.round(100*J/(Z||1));r.insertBefore(le(`<p class="savoir-msg session">Quiz : ${J}/${Z} (${oe} %). ${oe>=70?"Tu tiens le sujet.":"On creuse encore, tranquillement."}</p>`),r.firstChild),e.parler(`Quiz terminé : ${J} sur ${Z}.`,"lumineuse");return}const H=le(`<div class="savoir-session session">
      <p class="savoir-reste">question ${l.index+1} / ${l.questions.length}</p>
      <p class="savoir-verso">${je(U.enonce)}</p>
      <div class="savoir-choix"></div>
    </div>`),D=H.querySelector(".savoir-choix");e.parler(U.enonce,"posee"),U.choix.forEach((J,Z)=>{const oe=document.createElement("button");oe.textContent=J,oe.addEventListener("click",()=>{l.reponses[l.index]=Z,[...D.children].forEach((ve,F)=>ve.classList.toggle("juste",F===U.bonne)),oe.classList.toggle("faux",Z!==U.bonne),e.parler(Z===U.bonne?"Oui, exactement.":J,Z===U.bonne?"lumineuse":"douce"),window.setTimeout(()=>{l.index++,w()},1100)}),D.appendChild(oe)}),r.appendChild(H)}function R(){const U=le('<div class="savoir-ligne"><input type="text" placeholder="Que veux-tu apprendre ? (ex. la mitose)" aria-label="Sujet" /><button>Chercher</button></div>'),H=U.querySelector("input"),D=U.querySelector("button"),J=le('<div class="savoir-resultat"></div>');H.addEventListener("keydown",G=>{G.key==="Enter"&&Z(H.value.trim())}),D.addEventListener("click",()=>Z(H.value.trim()));function Z(G){if(J.innerHTML="",!G)return;const te=nE(_(),G);te?B(te,J):S(G,J)}r.append(U,J);const oe=le(`<details class="savoir-import"><summary>Grand cerveau en ligne (pour les machines sages)</summary>
      <p class="savoir-note">Sur demande à Nath-Tech, une adresse de cerveau prêté peut être réglée ici : les machines sans grande carte répondent alors plus vite et plus loin. Laisser vide pour éteindre ce secours.</p>
      <div class="savoir-ligne"><input type="text" class="cerv-url" placeholder="https://… (vide pour effacer)" aria-label="Adresse du grand cerveau" /><button class="cerv-ok">Régler</button></div>
      <div class="savoir-ligne"><select class="savoir-select cerv-allure" aria-label="Allure du grand cerveau"></select><button class="cerv-allure-ok">Allure</button></div>
      <p class="savoir-msg cerv-etat"></p></details>`),ve=oe.querySelector(".cerv-url"),F=oe.querySelector(".cerv-etat"),j=ci(t);F.textContent=j?"Le secours est réglé et veille.":"Aucun secours réglé — le cerveau local et le petit moteur suffisent.",oe.querySelector(".cerv-ok").addEventListener("click",()=>{_b(t,ve.value)?(F.textContent=ci(t)?"Le secours est réglé — il répondra dès la prochaine ouverture.":"Secours éteint. Le ciel reste vivant, sans lui.",ve.value=""):F.textContent="Cette adresse ne convient pas — il faut du https."});const ue=oe.querySelector(".cerv-allure");for(const G of Jd){const te=document.createElement("option");te.value=G.cle,te.textContent=G.nom,ue.appendChild(te)}ue.value=gb(t),oe.querySelector(".cerv-allure-ok").addEventListener("click",()=>{mb(t,ue.value)?F.textContent=No(t)?"Son allure est réglée — la prochaine réponse la portera.":"Elle reprend son allure ordinaire.":F.textContent="Cette allure n existe pas — le choix reste entier."}),r.appendChild(oe)}function B(U,H){H.innerHTML="";const D=le(`<div class="savoir-fiche"><h4>${je(U.titre)}</h4></div>`);if(U.image&&/^https?:\/\//.test(U.image)){const F=document.createElement("img");F.className="savoir-img",F.src=U.image,F.alt="",F.loading="lazy",D.appendChild(F)}const J=le(`<p>${je(U.resume)}</p>`);D.appendChild(J);const Z=le('<div class="savoir-actions"></div>'),oe=le("<button>En faire des cartes</button>");oe.addEventListener("click",()=>{const F=m()??na(t,U.sujet);if(!F)return;a=F.id;let j=0;for(const ue of Sc(U.resume))co(t,F.id,ue.verso,ue.recto)&&j++;H.appendChild(le(`<p class="savoir-msg">${j} cartes rangées dans « ${je(F.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${j} cartes rangées.`,"lumineuse")}),Z.appendChild(oe);const ve=/^https?:\/\//.test(U.url)?U.url:"";ve&&Z.appendChild(le(`<a class="savoir-lien" href="${je(ve)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),H.append(D,Z)}function S(U,H){const D=le(`<div class="savoir-fiche"><p>« ${je(U)} » ne fait pas encore partie de mes connaissances enregistrées.</p>
      <p class="savoir-note">Veux-tu que je me connecte pour ramener le maximum de ressources sur ce sujet ? Seul le sujet sort de l’appareil, rien sur toi.</p>
      <div class="savoir-actions"><button class="oui">Oui, cherche</button><button class="non">Garde pour plus tard</button></div></div>`);D.querySelector(".non").addEventListener("click",()=>H.innerHTML=""),D.querySelector(".oui").addEventListener("click",async()=>{const J=le('<p class="savoir-msg">Je cherche…</p>');H.appendChild(J);const Z=await aE(U,fetch);if(J.remove(),!Z){H.appendChild(le('<p class="savoir-msg">Pas de réponse du net pour l’instant — ou le sujet est trop précis. Réessaie, ou dicte-moi tes propres notes.</p>'));return}const oe={sujet:U,titre:Z.titre,resume:Z.resume,url:Z.url,image:Z.image,ramene_a:Date.now()};t.setItem(Dp,JSON.stringify(iE(_(),oe))),H.innerHTML="",B(oe,H),e.parler("J’ai ramené de quoi apprendre.","lumineuse")}),H.appendChild(D)}const M=()=>[...EE,...DE(_())];function L(){if(r.innerHTML="",p){q(p);return}const U=M(),H=new Set(Lp(U,t).map(G=>G.id)),D=le(`<div class="savoir-ligne enc-tete"><input type="text" class="enc-champ" placeholder="Cherche un sujet (ex. geometrie, espace…)" aria-label="Recherche encyclopédie" /><button class="enc-fav" title="Mes favoris">★ <span class="enc-fav-n">${H.size}</span></button></div>`),J=D.querySelector(".enc-champ");J.value=c;const Z=D.querySelector(".enc-fav");if(Z.classList.toggle("actif",u),J.addEventListener("input",()=>{c=J.value,d=0,L();const G=r.querySelector(".enc-champ");G&&(G.focus(),G.setSelectionRange(G.value.length,G.value.length))}),Z.addEventListener("click",()=>{u=!u,d=0,L()}),r.appendChild(D),!c&&!u&&!h){const G=RE(U);if(G){const te=le(`<button class="enc-jour">✨ Découverte du jour · ${je(G.titre)}<small> ${je(G.domaine)}</small></button>`);te.addEventListener("click",()=>{p=G,L()}),r.appendChild(te)}}const oe=le('<div class="enc-domaines"></div>'),ve=[{nom:"Tous",val:""},...wE(U).map(G=>({nom:G,val:G}))];for(const G of ve){const te=le(`<button class="enc-dom${h===G.val?" actif":""}">${je(G.nom)}</button>`);te.addEventListener("click",()=>{h=G.val,d=0,L()}),oe.appendChild(te)}r.appendChild(oe);let F=AE(U,c);u&&(F=F.filter(G=>H.has(G.id))),F=CE(F,h);const j=PE(F,d),ue=le('<div class="enc-grille"></div>');for(const G of j.visibles){const te=le(`<div class="enc-carte" role="button" tabindex="0">
        <button class="enc-etoile${H.has(G.id)?" mise":""}" aria-label="Favori">${H.has(G.id)?"★":"☆"}</button>
        <h5>${je(G.titre)}</h5><p class="enc-domaine">${je(G.domaine)}</p><p class="enc-resume">${je(G.resume)}</p></div>`);te.querySelector(".enc-etoile").addEventListener("click",de=>{de.stopPropagation(),Rp(t,G.id),L()}),te.addEventListener("click",()=>{p=G,L()}),te.addEventListener("keydown",de=>{de.key==="Enter"&&(p=G,L())}),ue.appendChild(te)}if(r.appendChild(ue),j.visibles.length||r.appendChild(le(`<p class="savoir-msg">${u?"Aucune étoile ici pour l’instant — clique sur ☆ d’une carte pour la garder.":"Rien sous ce nom — Essaie un mot plus simple, ou va le chercher dans l’onglet Savoir."}</p>`)),j.reste>0){const G=le(`<div class="savoir-actions"><button>Afficher plus (${j.reste})</button></div>`);G.querySelector("button").addEventListener("click",()=>{d=j.visibles.length,L()}),r.appendChild(G)}else if(j.visibles.length){const G=j.visibles.length>1?"notices":"notice";r.appendChild(le(`<p class="savoir-note">${j.visibles.length} ${G} sur l’étagère.</p>`))}}function q(U){r.innerHTML="";const H=M(),D=Lp([U],t).length>0,J=le(`<div class="savoir-ligne"><button class="enc-retour">← Étagère</button><button class="enc-etoile${D?" mise":""}">${D?"★ Favori":"☆ Mettre en favori"}</button></div>`);J.querySelector(".enc-retour").addEventListener("click",()=>{p=null,L()}),J.querySelector(".enc-etoile").addEventListener("click",()=>{Rp(t,U.id),q(U)}),r.appendChild(J);const Z=le(`<div class="savoir-fiche"><h4>${je(U.titre)} <small class="enc-domaine">${je(U.domaine)}</small></h4></div>`);if(U.image&&/^https?:\/\//.test(U.image)){const G=document.createElement("img");G.className="savoir-img",G.src=U.image,G.alt="",G.loading="lazy",Z.appendChild(G)}Z.appendChild(le(`<p>${je(U.resume)}</p>`)),r.appendChild(Z);const oe=LE(U,H);if(oe.length){const G=le('<div class="enc-liens"><p class="savoir-note">Liens extraordinaires</p></div>');for(const te of oe){const de=le(`<button class="enc-lien">${je(te.titre)}</button>`);de.addEventListener("click",()=>{p=te,L()}),G.appendChild(de)}r.appendChild(G)}const ve=le('<div class="savoir-actions"></div>'),F=le("<button>En faire des cartes</button>");F.addEventListener("click",()=>{const G=m()??na(t,U.titre);if(!G)return;a=G.id;let te=0;for(const de of Sc(U.resume))co(t,G.id,de.verso,de.recto)&&te++;r.appendChild(le(`<p class="savoir-msg">${te} cartes rangées dans « ${je(G.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${te} cartes rangées.`,"lumineuse")}),ve.appendChild(F);const j=ci(t);if(j){const G=le("<button>Approfondir avec le grand cerveau</button>");G.addEventListener("click",async()=>{G.disabled=!0;const te=le('<p class="savoir-msg">Je consulte le grand cerveau…</p>');r.appendChild(te);const de=await IE(j,U.titre,fetch,No(t));te.remove(),G.disabled=!1,r.appendChild(le(`<p class="savoir-msg">${de?je(de):"Le grand cerveau ne répond pas pour l’instant — elle reviendra, plus tard."}</p>`))}),ve.appendChild(G)}const ue=U.url&&/^https?:\/\//.test(U.url)?U.url:"";ue&&ve.appendChild(le(`<a class="savoir-lien" href="${je(ue)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),r.appendChild(ve)}function z(){const U=le('<input type="text" class="trad-langue" placeholder="Ta langue (ex. wolof, ewondo…)" aria-label="Langue" />'),H=le('<textarea class="trad-phrase" rows="2" placeholder="Écris (ou dicte dans la bulle du bas)…" aria-label="Phrase à traduire"></textarea>'),D=le('<div class="savoir-resultat"></div>'),J=le('<div class="savoir-actions"><button class="trad-faire">Traduire</button></div>'),Z=le(`<details class="savoir-import"><summary>Ajouter à mon lexique (il reste ici, hors-ligne)</summary>
      <div class="savoir-actions"><button class="trad-dicter">🎤 Dicter un mot — dites « bonjour veut dire… »</button></div>
      <div class="savoir-ligne"><input type="text" placeholder="mot français" aria-label="Mot français" /><input type="text" placeholder="traduction dans ta langue" aria-label="Traduction" /><button>Ajouter</button></div></details>`);Z.querySelector(".trad-dicter").addEventListener("click",()=>{if(!e.sttDisponible){D.innerHTML="",D.appendChild(le('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — écris le mot ci-dessous.</p>'));return}const de=U.value.trim();D.innerHTML="",D.appendChild(le('<p class="savoir-msg">J’écoute… dis par exemple « bonjour veut dire naka nga def ».</p>')),e.ecouter(Ie=>{D.innerHTML="";const ye=_E(Ie);if(!ye){D.appendChild(le(`<p class="savoir-msg">J’ai entendu « ${je(Ie)} » sans voir le couple — recommence avec « mot veut dire traduction ».</p>`));return}if(!de){oe.value=ye.de,ve.value=ye.a,D.appendChild(le('<p class="savoir-msg">Donne-moi le nom de la langue en haut, puis appuie sur Ajouter — tout est prêt.</p>'));return}t.setItem(xr,JSON.stringify(la(v(),ye.de,ye.a,de))),D.appendChild(le(`<p class="savoir-msg">${je(ye.de)} → ${je(ye.a)}, rangé dans mon carnet.</p>`)),e.parler(`${ye.de} veut dire ${ye.a}.`,"lumineuse")})});const[oe,ve]=[...Z.querySelectorAll("input")];Z.querySelector(".savoir-ligne button").addEventListener("click",()=>{const de=U.value;if(!de.trim()||!oe.value.trim()||!ve.value.trim())return;const Ie=wp(t.getItem(xr));t.setItem(xr,JSON.stringify(la(Ie,oe.value,ve.value,de))),oe.value="",ve.value="",e.parler("C’est dans mon carnet.","douce")}),U.value=localStorage.getItem("nath.trad.langue")??"",U.addEventListener("change",()=>localStorage.setItem("nath.trad.langue",U.value)),J.querySelector(".trad-faire").addEventListener("click",()=>{const de=U.value,Ie=oE(H.value,de,v());if(D.innerHTML="",Ie.resultat){const ye=le(`<div class="savoir-fiche"><p class="trad-out">${je(Ie.resultat)}</p></div>`),Ne=le("<button>Écouter</button>");Ne.addEventListener("click",()=>e.parler(Ie.resultat,"posee")),ye.appendChild(Ne),D.appendChild(ye),Ie.manques.length&&(D.appendChild(le(`<p class="savoir-note">mots que je ne connais pas encore : ${je(Ie.manques.join(", "))} — ajoute-les ci-dessous, ton lexique grandit pour toujours.</p>`)),F())}else{const ye=uE(de);if(ye.length){const Ne=le(`<p class="savoir-msg">Je ne connais encore rien dans cette langue — mais on m'a donné des mots sûrs en « ${je(de.trim())} ».</p>`),qe=le("<button>Charger ce socle de mots</button>");qe.addEventListener("click",()=>{let Be=v();for(const xt of ye)Be=la(Be,xt.de,xt.a,de.trim());t.setItem(xr,JSON.stringify(Be)),D.innerHTML="",D.appendChild(le(`<p class="savoir-msg">${ye.length} mots de vie rangés dans mon carnet. Écris une phrase, je saurai répondre.</p>`)),e.parler("Le socle est chargé. Ton lexique peut grandir.","lumineuse")}),Ne.appendChild(qe),D.appendChild(Ne)}else D.appendChild(le('<p class="savoir-msg">Je ne connais encore aucun mot dans cette langue. Sème ton lexique une entrée à la fois, ou colle le carnet d’un autre plus bas — ensemble on traduit tout le monde.</p>'));F()}});function F(){const de=ME(U.value);if(!de)return j();const Ie=le('<div class="savoir-actions"><button class="trad-filet">Demander au filet gratuit (cette phrase sortira de l’appareil)</button></div>');Ie.querySelector(".trad-filet").addEventListener("click",async()=>{const ye=Ie.querySelector("button"),Ne=H.value.trim();if(!Ne)return;ye.disabled=!0,ye.textContent="Je demande…";const qe=await yE(Ne,"fr",de,fetch);if(Ie.remove(),!qe){D.appendChild(le('<p class="savoir-msg">Le filet n’a rien pu pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));return}const Be=ci(t);if(Be&&await Tb(Be,Ne,qe,U.value.trim())===!1){D.appendChild(le('<p class="savoir-msg">Le filet a répondu, mais ça ne me semble pas fidèle à ta phrase — une proposition douteuse ne se range pas. Ton carnet ne garde que le juste.</p>')),e.parler("Cette traduction ne me semble pas juste — on ne la range pas.","douce");return}ue(qe,"filet gratuit",Ne)}),D.appendChild(Ie)}function j(){const de=ci(t);if(!de)return;const Ie=le('<div class="savoir-actions"><button class="trad-cerveau">Demander au grand cerveau en ligne (cette phrase sortira de l’appareil)</button></div>');Ie.querySelector(".trad-cerveau").addEventListener("click",async()=>{const ye=Ie.querySelector("button"),Ne=H.value.trim();if(!Ne)return;ye.disabled=!0,ye.textContent="Je demande…";const qe=await vb(de,Ne,U.value.trim(),fetch);if(Ie.remove(),!qe){D.appendChild(le('<p class="savoir-msg">Le grand cerveau n’a rien su pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));return}ue(qe,"grand cerveau en ligne",Ne)}),D.appendChild(Ie)}function ue(de,Ie,ye){const Ne=le(`<div class="savoir-fiche"><p class="trad-out">${je(de)}</p><p class="savoir-note">proposition du ${Ie} — vérifie avec ton oreille ; si c’est juste, range-le : ça rendra service à tout le monde.</p></div>`),qe=le("<button>Ranger dans mon carnet</button>");qe.addEventListener("click",()=>{const Be=U.value.trim();!Be||!ye||(t.setItem(xr,JSON.stringify(la(v(),ye,de,Be))),qe.textContent="Rangé 🌿",qe.disabled=!0,e.parler("Merci — ton carnet est un peu plus monde.","douce"))}),Ne.appendChild(qe),D.appendChild(Ne)}const G=le(`<details class="savoir-import"><summary>Mon carnet complet — le prêter, ou emprunter celui d’un autre</summary>
      <div class="savoir-actions"><button class="trad-copier">Copier tout mon lexique</button></div>
      <textarea class="trad-collecte" rows="3" placeholder="les mots copiés se collent ici pour être prêtés" aria-label="Mon lexique à prêter" hidden></textarea>
      <textarea class="trad-import" rows="3" placeholder="Colle ici le carnet d’un autre (une ligne par mot : langue | mot :: traduction)" aria-label="Lexique à importer"></textarea>
      <div class="savoir-actions"><button class="trad-importer">Ajouter ces mots au mien</button></div></details>`),te=G.querySelector(".trad-collecte");G.querySelector(".trad-copier").addEventListener("click",async()=>{const de=dE(v());if(!de){e.parler("Mon carnet est encore vide — ajoute des mots, il sera prêt à partager.","douce");return}try{await navigator.clipboard.writeText(de),D.innerHTML="",D.appendChild(le(`<p class="savoir-msg">${je(String(de.split(`
`).length))} mots copiés — colle-les chez qui veut, son lexique grandira.</p>`)),e.parler("C’est copié. Tu peux le prêter.","lumineuse")}catch{te.hidden=!1,te.value=de,te.select(),D.appendChild(le('<p class="savoir-note">Sélectionne tout dans la case et copie — le carnet est prêt à être prêté.</p>'))}}),G.querySelector(".trad-importer").addEventListener("click",()=>{const de=G.querySelector(".trad-import").value,Ie=v(),ye=hE(de,Ie),Ne=ye.length-Ie.length;if(Ne<=0){D.appendChild(le('<p class="savoir-msg">Rien de nouveau là-dedans — ou les lignes ne sont pas dans le format « langue | mot :: traduction ».</p>'));return}t.setItem(xr,JSON.stringify(ye)),G.querySelector(".trad-import").value="",D.appendChild(le(`<p class="savoir-msg">${je(String(Ne))} mots reçus d’un autre — merci à lui. Notre lexique est plus fort.</p>`)),e.parler(`${Ne} mots reçus. Merci à celui qui les a semés.`,"douce")}),r.append(U,H,J,D,Z,G)}let K=null;const Q=document.getElementById("patte"),X=Q?Q.innerHTML:"";function $(U){K===null&&(K=document.title);const H=Cp(U);document.documentElement.style.setProperty("--teinte",H);let D=document.querySelector('meta[name="theme-color"]');D||(D=document.createElement("meta"),D.name="theme-color",document.head.appendChild(D)),D.content=H,document.title=U.actif?U.slogan?`${U.nom} — ${U.slogan}`:U.nom:K,Q&&(Q.innerHTML=U.actif?`${je(U.nom)} — <span>${je(U.slogan||"l’assistant vivant")}</span>`:X)}function re(){const U=ia(t),H=le('<div class="savoir-resultat"></div>');if(U.actif){const Z=le(`<div class="savoir-fiche"><h4>${je(U.nom)}</h4><p>${je(U.slogan)}</p>
        <p class="savoir-note">Cet appareil porte le visage de « ${je(U.organisation)} ».</p></div>`),oe=le('<div class="savoir-actions"><button class="ent-perso">Revenir en mode personnel</button></div>');oe.querySelector(".ent-perso").addEventListener("click",()=>{mE(t),$(ia(t)),b("entreprise"),e.parler("Je reprends mon visage habituel.","douce")}),r.append(Z,oe)}const D=le(`<div class="savoir-fiche">
      <p class="savoir-note">Pour une école, une ONG, une équipe : la clé se demande à Nath-Tech avec le nom exact de l’organisation. Rien n’est bridé, on peut toujours revenir.</p>
      <div class="savoir-ligne"><input type="text" class="ent-org" placeholder="Organisation (ex. Lycée Bilingue de Douala)" aria-label="Organisation" /></div>
      <div class="savoir-ligne"><input type="text" class="ent-nom" placeholder="Nom visible (ex. LBD)" aria-label="Nom de la marque" /><input type="text" class="ent-slogan" placeholder="Slogan (facultatif)" aria-label="Slogan" /></div>
      <div class="savoir-ligne"><input type="color" class="ent-teinte" value="${je(Cp(U))}" aria-label="Teinte" /><input type="text" class="ent-cle" placeholder="Clé d’équipe (blocs de 4)" aria-label="Clé d’équipe" /></div>
      <div class="savoir-actions"><button class="ent-ok">Habiller l’app pour mon équipe</button></div>
    </div>`);D.querySelector(".ent-ok").addEventListener("click",()=>{const Z=ve=>D.querySelector(`.${ve}`).value;pE(t,{organisation:Z("ent-org"),cle:Z("ent-cle"),nom:Z("ent-nom"),slogan:Z("ent-slogan"),couleur:Z("ent-teinte")})?($(ia(t)),b("entreprise"),e.parler(`Désormais, je travaille pour ${ia(t).nom}.`,"lumineuse")):(H.innerHTML="",H.appendChild(le('<p class="savoir-msg">Cette clé n’ouvre rien pour ce nom-là — vérifie le nom exact de l’organisation et la clé, bloc par bloc.</p>')))});const J=le(`<div class="savoir-fiche">
      <p class="savoir-note">Nath Entreprise pour une école, une ONG, une équipe — toute l’équipe habillée, un seul prix :</p>
      <div class="savoir-ligne"><input type="number" class="ent-nb" min="1" placeholder="Nombre de personnes à équiper" aria-label="Nombre de personnes" /><button class="ent-devis">Estimer</button></div>
      <div class="ent-devis-out"></div>
    </div>`);J.querySelector(".ent-devis").addEventListener("click",()=>{const Z=Number(J.querySelector(".ent-nb").value),oe=J.querySelector(".ent-devis-out");if(oe.innerHTML="",!Number.isFinite(Z)||Z<=0){oe.appendChild(le('<p class="savoir-msg">Entre d’abord le nombre de personnes à équiper.</p>'));return}const ve=NE(Z),F=ve.mensuel===null?`<b>${je(ve.palier)}</b> — ${je(Pp(null))} : parle-nous de ton réseau, on trouvera le juste chiffre.`:`<b>${je(ve.palier)}</b> — ${je(Pp(ve.mensuel))} par mois pour toute l’équipe, soit environ ${Math.round(ve.mensuel/Z).toLocaleString("fr-FR")} F par personne. Et plus vous êtes nombreux, moins chaque tête coûte.`;oe.appendChild(le(`<p class="savoir-msg">${F}</p>`)),oe.appendChild(le('<p class="savoir-note">Accord direct avec Nath-Tech (mobile money), puis la clé exacte de ton organisation. Le gratuit de chacun reste entier, toujours.</p>'))}),r.append(D,H,J)}return $(ia(t)),n}function FE(t,e){return{eclair:(t==="tension"?.45:t==="tristesse"?.12:0)*(.3+.7*e),filer:e*.4}}function OE(t,e){let n=0,i=.85,r=.15,s=!1,a="le ciel respire";t===0||t===1?(i=.95,a=t===0?"ciel dégagé":"à peine voilé"):t===2?(i=.8,a="nuages passagers"):t===3?(i=.55,r=.25,a="ciel couvert"):t===45||t===48?(i=.35,r=.1,n=.08,a="brouillard"):t>=51&&t<=57?(n=.35,i=.45,a="bruine"):t>=61&&t<=67?(n=t===65||t===67?.8:.55,i=.4,a="pluie"):t>=71&&t<=77?(n=.45,i=.65,a="neige"):t>=80&&t<=82?(n=t===82?.9:.6,i=.4,r=.3,a="averses"):t===85||t===86?(n=.5,i=.6,a="neiges"):t>=95&&t<=99&&(s=!0,n=.9,i=.3,r=.7,a="orage");const o=Math.min(1,r+Math.min(.4,Math.max(0,e)/100));return{pluie:n,turbulence:o,luminosite:i,orage:s,libelle:a}}async function BE(t,e,n){try{const i="https://api.open-meteo.com/v1/forecast?latitude="+encodeURIComponent(String(t))+"&longitude="+encodeURIComponent(String(e))+"&current=weather_code,wind_speed_10m",r=await n(i);if(!r.ok)return null;const s=await r.json(),a=s?.current?.weather_code;if(typeof a!="number")return null;const o=typeof s.current.wind_speed_10m=="number"?s.current.wind_speed_10m:0;return OE(a,o)}catch{return null}}const Oo=document.getElementById("scene"),ds=pS(Oo),nt=mS();nt.seed=localStorage.getItem("nuage.seed")??crypto.randomUUID();localStorage.setItem("nuage.seed",nt.seed);const Bo={cameraOn:!1,micOn:!1};xS(t=>{nt.breath=Math.max(nt.breath,t)}).then(t=>{Bo.micOn=t});const Gu=document.getElementById("cam"),kE=gy(),yc=new py(Gu,localStorage,t=>{nt.emotion=kE(my(t))},t=>{Bo.cameraOn=t,Gu.classList.toggle("video-actif",t)}),VE=typeof navigator<"u"&&!!navigator.mediaDevices?.getUserMedia,zE=document.getElementById("etat"),hs=yy(nt.seed);let Wg=[.5,.5];by(Oo,(t,e)=>{Wg=[t,e]});Ey(t=>{nt.breath=Math.max(nt.breath,Math.abs(t))});Xb(()=>({emotion:nt.emotion,breath:nt.breath,timeOfDay:nt.timeOfDay,seed:hs.musiqueSeed,bpm:nt.bpm,cameraOn:Bo.cameraOn,micOn:Bo.micOn}),{cameraDisponible:VE,estOuverte:()=>yc.ouverte,basculer:()=>yc.basculer(),changerFace:()=>yc.basculerFace(),consentement:oy});UE(localStorage);setInterval(()=>{const t=FE(nt.emotion,mm(nt).night);(nt.cielReel?.orage&&Math.random()<.4||Math.random()<t.eclair)&&ds.eclair(),Math.random()<t.filer&&ds.filer(.08+Math.random()*.75,.7+Math.random()*.25)},15e3);const Hn=document.createElement("button");Hn.className="ciel-btn";Hn.type="button";Hn.textContent="⛅";Hn.title="Le ciel réel — laisser respirer au nuage le temps de chez toi";Hn.setAttribute("aria-label","Laisser au nuage le temps réel de chez toi");document.body.append(Hn);let uo=0;async function Ip(t,e){const n=await BE(t,e,fetch);n&&(nt.cielReel=n,Hn.classList.add("actif"),Hn.title=`Dehors, ${n.libelle} — le nuage respire avec lui`)}Hn.addEventListener("click",()=>{if(uo){window.clearInterval(uo),uo=0,nt.cielReel=null,Hn.classList.remove("actif"),Hn.title="Le ciel réel — laisser respirer au nuage le temps de chez toi";return}navigator.geolocation&&navigator.geolocation.getCurrentPosition(t=>{Ip(t.coords.latitude,t.coords.longitude),uo=window.setInterval(()=>{Ip(t.coords.latitude,t.coords.longitude)},6e5)},()=>{Hn.classList.remove("actif")},{enableHighAccuracy:!1,timeout:1e4,maximumAge:6e5})});let Rs=!1;const ui=document.createElement("button");ui.className="musique-btn";ui.type="button";ui.setAttribute("aria-label","La musique de l’aura — l’endormir ou la réveiller");document.body.append(ui);function ih(){const t=fl(localStorage);ui.textContent=t?"🔇":"🎵",ui.classList.toggle("eteinte",t),ui.classList.toggle("actif",!t&&Rs),ui.title=t?"La musique dort — appuie pour l’éveiller":"La musique de l’aura — appuie pour l’endormir",ui.setAttribute("aria-pressed",String(!t))}ui.addEventListener("click",()=>{Py(localStorage)?bg():(Ly(),Rs||(Rs=yg(hs.musiqueSeed))),ih()});fl(localStorage)&&bg();ih();Oo.addEventListener("pointerdown",t=>{const e=Oo.getBoundingClientRect();ds.tap((t.clientX-e.left)/e.width,1-(t.clientY-e.top)/e.height),Rs||(Rs=yg(hs.musiqueSeed),ih())});const GE=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),ho=[];setInterval(()=>{const t=My(Gu,GE);t!=null&&(ho.push(t),ho.length>80&&ho.shift(),nt.bpm=Sy(ho,8))},125);let Np=performance.now();function qg(t){const e=(t-Np)/1e3;Np=t;const n=new Date;if(nt.timeOfDay=(n.getHours()+n.getMinutes()/60)/24,nt.breath=Math.max(0,nt.breath-e*.5),nt.bpm){const i=Math.sin(Date.now()/(6e4/nt.bpm)*2*Math.PI);nt.breath=Math.max(nt.breath,.08*i+.08)}ds.apply(mm(nt),Wg),ds.setBpm(nt.bpm),ds.frame(e),Cy(nt.emotion),Ry(nt.breath),zE.textContent=Rs?`aura : ${hs.nom} · humeur : ${nt.emotion} · souffle : ${nt.breath*100|0}% · pouls : ${nt.bpm?Math.round(nt.bpm):"—"}`:fl(localStorage)?`aura : ${hs.nom} · la musique dort — 🎵 pour la réveiller`:`aura : ${hs.nom} · touche le ciel pour éveiller la musique`,requestAnimationFrame(qg)}requestAnimationFrame(qg);console.log("Nath Assist v1-alpha — ICF·Future by Nath-Tech");
