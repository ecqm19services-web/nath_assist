(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const pd="182",w_=0,qf=1,C_=2,Eo=1,R_=2,ha=3,lr=0,xn=1,Ni=2,Ui=0,hs=1,Gf=2,Hf=3,jf=4,L_=5,Tr=100,P_=101,D_=102,N_=103,I_=104,F_=200,U_=201,O_=202,B_=203,Gu=204,Hu=205,k_=206,z_=207,V_=208,q_=209,G_=210,H_=211,j_=212,$_=213,W_=214,ju=0,$u=1,Wu=2,Ms=3,Xu=4,Yu=5,Ju=6,Ku=7,Nm=0,X_=1,Y_=2,mi=0,Im=1,Fm=2,Um=3,Om=4,Bm=5,km=6,zm=7,Vm=300,Or=301,Es=302,Zu=303,Qu=304,tl=306,ec=1e3,Fi=1001,tc=1002,Qt=1003,J_=1004,Wa=1005,an=1006,zl=1007,wr=1008,Hn=1009,qm=1010,Gm=1011,Ma=1012,md=1013,xi=1014,fi=1015,zi=1016,gd=1017,vd=1018,Ea=1020,Hm=35902,jm=35899,$m=1021,Wm=1022,ei=1023,Vi=1026,Cr=1027,Xm=1028,_d=1029,Ts=1030,xd=1031,bd=1033,To=33776,Ao=33777,wo=33778,Co=33779,nc=35840,ic=35841,rc=35842,sc=35843,ac=36196,oc=37492,lc=37496,uc=37488,cc=37489,dc=37490,fc=37491,hc=37808,pc=37809,mc=37810,gc=37811,vc=37812,_c=37813,xc=37814,bc=37815,Sc=37816,yc=37817,Mc=37818,Ec=37819,Tc=37820,Ac=37821,wc=36492,Cc=36494,Rc=36495,Lc=36283,Pc=36284,Dc=36285,Nc=36286,K_=3200,Z_=0,Q_=1,rr="",qn="srgb",As="srgb-linear",Uo="linear",_t="srgb",jr=7680,$f=519,e1=512,t1=513,n1=514,Sd=515,i1=516,r1=517,yd=518,s1=519,Wf=35044,Xf="300 es",hi=2e3,Oo=2001;function Ym(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function a1(){const t=Bo("canvas");return t.style.display="block",t}const Yf={};function Jf(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ze(...t){const e="THREE."+t.shift();console.warn(e,...t)}function dt(...t){const e="THREE."+t.shift();console.error(e,...t)}function Ta(...t){const e=t.join(" ");e in Yf||(Yf[e]=!0,Ze(...t))}function o1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=Math.PI/180,Ic=180/Math.PI;function Pa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function st(t,e,n){return Math.max(e,Math.min(n,t))}function l1(t,e){return(t%e+e)%e}function ql(t,e,n){return(1-n)*t+n*e}function ia(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,n=0){mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Da{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(o>=1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(d!==_||l!==f||u!==p||c!==v){let m=l*f+u*p+c*v+d*_;m<0&&(f=-f,p=-p,v=-v,_=-_,m=-m);let h=1-o;if(m<.9995){const E=Math.acos(m),T=Math.sin(E);h=Math.sin(h*E)/T,o=Math.sin(o*E)/T,l=l*h+f*o,u=u*h+p*o,c=c*h+v*o,d=d*h+_*o}else{l=l*h+f*o,u=u*h+p*o,c=c*h+v*o,d=d*h+_*o;const E=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=E,u*=E,c*=E,d*=E}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+c*d+l*p-u*f,e[n+1]=l*v+c*f+u*d-o*p,e[n+2]=u*v+c*p+o*f-l*d,e[n+3]=c*v-o*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*c*d+u*p*v,this._y=u*p*d-f*c*v,this._z=u*c*v+f*p*d,this._w=u*c*d-f*p*v;break;case"YXZ":this._x=f*c*d+u*p*v,this._y=u*p*d-f*c*v,this._z=u*c*v-f*p*d,this._w=u*c*d+f*p*v;break;case"ZXY":this._x=f*c*d-u*p*v,this._y=u*p*d+f*c*v,this._z=u*c*v+f*p*d,this._w=u*c*d-f*p*v;break;case"ZYX":this._x=f*c*d-u*p*v,this._y=u*p*d+f*c*v,this._z=u*c*v-f*p*d,this._w=u*c*d+f*p*v;break;case"YZX":this._x=f*c*d+u*p*v,this._y=u*p*d+f*c*v,this._z=u*c*v-f*p*d,this._w=u*c*d-f*p*v;break;case"XZY":this._x=f*c*d-u*p*v,this._y=u*p*d-f*c*v,this._z=u*c*v+f*p*d,this._w=u*c*d+f*p*v;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*u+a*d-o*c,this.y=i+l*c+o*u-s*d,this.z=r+l*d+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new H,Kf=new Da;class et{constructor(e,n,i,r,s,a,o,l,u){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],v=i[8],_=r[0],m=r[3],h=r[6],E=r[1],T=r[4],A=r[7],w=r[2],C=r[5],R=r[8];return s[0]=a*_+o*E+l*w,s[3]=a*m+o*T+l*C,s[6]=a*h+o*A+l*R,s[1]=u*_+c*E+d*w,s[4]=u*m+c*T+d*C,s[7]=u*h+c*A+d*R,s[2]=f*_+p*E+v*w,s[5]=f*m+p*T+v*C,s[8]=f*h+p*A+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=c*a-o*u,f=o*l-c*s,p=u*s-a*l,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=p*_,e[7]=(i*l-u*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Hl.makeScale(e,n)),this}rotate(e){return this.premultiply(Hl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hl=new et,Zf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u1(){const t={enabled:!0,workingColorSpace:As,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?Uo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[As]:{primaries:e,whitePoint:i,transfer:Uo,toXYZ:Zf,fromXYZ:Qf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Zf,fromXYZ:Qf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),t}const lt=u1();function Oi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ps(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class c1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=Bo("canvas")),$r.width=e.width,$r.height=e.height;const r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Oi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Oi(n[i]/255)*255):n[i]=Oi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d1=0;class Md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Pa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jl(r[a].image)):s.push(jl(r[a]))}else s=jl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function jl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?c1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let f1=0;const $l=new H;class pn extends zs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Fi,r=Fi,s=an,a=wr,o=ei,l=Hn,u=pn.DEFAULT_ANISOTROPY,c=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=Pa(),this.name="",this.source=new Md(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ec:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ec:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Vm;pn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],v=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(u+1)/2,A=(p+1)/2,w=(h+1)/2,C=(c+f)/4,R=(d+_)/4,z=(v+m)/4;return T>A&&T>w?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=R/i):A>w?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=C/r,s=z/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=z/s),this.set(i,r,s,n),this}let E=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(d-_)/E,this.z=(f-c)/E,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this.w=st(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this.w=st(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h1 extends zs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new pn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Md(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends h1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Jm extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class p1 extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Na{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Ya.subVectors(this.max,ra),Wr.subVectors(e.a,ra),Xr.subVectors(e.b,ra),Yr.subVectors(e.c,ra),Xi.subVectors(Xr,Wr),Yi.subVectors(Yr,Xr),pr.subVectors(Wr,Yr);let n=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-pr.z,pr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,pr.z,0,-pr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-pr.y,pr.x,0];return!Wl(n,Wr,Xr,Yr,Ya)||(n=[1,0,0,0,1,0,0,0,1],!Wl(n,Wr,Xr,Yr,Ya))?!1:(Ja.crossVectors(Xi,Yi),n=[Ja.x,Ja.y,Ja.z],Wl(n,Wr,Xr,Yr,Ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new H,new H,new H,new H,new H,new H,new H,new H],Yn=new H,Xa=new Na,Wr=new H,Xr=new H,Yr=new H,Xi=new H,Yi=new H,pr=new H,ra=new H,Ya=new H,Ja=new H,mr=new H;function Wl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),u=n.dot(mr),c=i.dot(mr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const m1=new Na,sa=new H,Xl=new H;class Ed{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):m1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Xl)),this.expandByPoint(sa.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ri=new H,Yl=new H,Ka=new H,Ji=new H,Jl=new H,Za=new H,Kl=new H;class g1{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Yl.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(Yl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ka),o=Ji.dot(this.direction),l=-Ji.dot(Ka),u=Ji.lengthSq(),c=Math.abs(1-a*a);let d,f,p,v;if(c>0)if(d=a*l-o,f=a*o-l,v=s*c,d>=0)if(f>=-v)if(f<=v){const _=1/c;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;else f<=-v?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Yl).addScaledVector(Ka,f),p}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){Jl.subVectors(n,e),Za.subVectors(i,e),Kl.crossVectors(Jl,Za);let a=this.direction.dot(Kl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,e);const l=o*this.direction.dot(Za.crossVectors(Ji,Za));if(l<0)return null;const u=o*this.direction.dot(Jl.cross(Ji));if(u<0||l+u>a)return null;const c=-o*Ji.dot(Kl);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,i,r,s,a,o,l,u,c,d,f,p,v,_,m){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,c,d,f,p,v,_,m)}set(e,n,i,r,s,a,o,l,u,c,d,f,p,v,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),a=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*c,p=a*d,v=o*c,_=o*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+v*u,n[5]=f-_*u,n[9]=-o*l,n[2]=_-f*u,n[6]=v+p*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,v=u*c,_=u*d;n[0]=f+_*o,n[4]=v*o-p,n[8]=a*u,n[1]=a*d,n[5]=a*c,n[9]=-o,n[2]=p*o-v,n[6]=_+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,v=u*c,_=u*d;n[0]=f-_*o,n[4]=-a*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*c,n[9]=_-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*c,p=a*d,v=o*c,_=o*d;n[0]=l*c,n[4]=v*u-p,n[8]=f*u+_,n[1]=l*d,n[5]=_*u+f,n[9]=p*u-v,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,v=o*l,_=o*u;n[0]=l*c,n[4]=_-f*d,n[8]=v*d+p,n[1]=d,n[5]=a*c,n[9]=-o*c,n[2]=-u*c,n[6]=p*d+v,n[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,p=a*u,v=o*l,_=o*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+_,n[5]=a*c,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*c,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v1,e,_1)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ki.crossVectors(i,Mn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ki.crossVectors(i,Mn)),Ki.normalize(),Qa.crossVectors(Mn,Ki),r[0]=Ki.x,r[4]=Qa.x,r[8]=Mn.x,r[1]=Ki.y,r[5]=Qa.y,r[9]=Mn.y,r[2]=Ki.z,r[6]=Qa.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],v=i[2],_=i[6],m=i[10],h=i[14],E=i[3],T=i[7],A=i[11],w=i[15],C=r[0],R=r[4],z=r[8],x=r[12],S=r[1],L=r[5],J=r[9],k=r[13],K=r[2],te=r[6],q=r[10],Y=r[14],se=r[3],D=r[7],W=r[11],$=r[15];return s[0]=a*C+o*S+l*K+u*se,s[4]=a*R+o*L+l*te+u*D,s[8]=a*z+o*J+l*q+u*W,s[12]=a*x+o*k+l*Y+u*$,s[1]=c*C+d*S+f*K+p*se,s[5]=c*R+d*L+f*te+p*D,s[9]=c*z+d*J+f*q+p*W,s[13]=c*x+d*k+f*Y+p*$,s[2]=v*C+_*S+m*K+h*se,s[6]=v*R+_*L+m*te+h*D,s[10]=v*z+_*J+m*q+h*W,s[14]=v*x+_*k+m*Y+h*$,s[3]=E*C+T*S+A*K+w*se,s[7]=E*R+T*L+A*te+w*D,s[11]=E*z+T*J+A*q+w*W,s[15]=E*x+T*k+A*Y+w*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],v=e[3],_=e[7],m=e[11],h=e[15],E=l*p-u*f,T=o*p-u*d,A=o*f-l*d,w=a*p-u*c,C=a*f-l*c,R=a*d-o*c;return n*(_*E-m*T+h*A)-i*(v*E-m*w+h*C)+r*(v*T-_*w+h*R)-s*(v*A-_*C+m*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],v=e[12],_=e[13],m=e[14],h=e[15],E=d*m*u-_*f*u+_*l*p-o*m*p-d*l*h+o*f*h,T=v*f*u-c*m*u-v*l*p+a*m*p+c*l*h-a*f*h,A=c*_*u-v*d*u+v*o*p-a*_*p-c*o*h+a*d*h,w=v*d*l-c*_*l-v*o*f+a*_*f+c*o*m-a*d*m,C=n*E+i*T+r*A+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=E*R,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*R,e[2]=(o*m*s-_*l*s+_*r*u-i*m*u-o*r*h+i*l*h)*R,e[3]=(d*l*s-o*f*s-d*r*u+i*f*u+o*r*p-i*l*p)*R,e[4]=T*R,e[5]=(c*m*s-v*f*s+v*r*p-n*m*p-c*r*h+n*f*h)*R,e[6]=(v*l*s-a*m*s-v*r*u+n*m*u+a*r*h-n*l*h)*R,e[7]=(a*f*s-c*l*s+c*r*u-n*f*u-a*r*p+n*l*p)*R,e[8]=A*R,e[9]=(v*d*s-c*_*s-v*i*p+n*_*p+c*i*h-n*d*h)*R,e[10]=(a*_*s-v*o*s+v*i*u-n*_*u-a*i*h+n*o*h)*R,e[11]=(c*o*s-a*d*s-c*i*u+n*d*u+a*i*p-n*o*p)*R,e[12]=w*R,e[13]=(c*_*r-v*d*r+v*i*f-n*_*f-c*i*m+n*d*m)*R,e[14]=(v*o*r-a*_*r-v*i*l+n*_*l+a*i*m-n*o*m)*R,e[15]=(a*d*r-c*o*r+c*i*l-n*d*l-a*i*f+n*o*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,c=a+a,d=o+o,f=s*u,p=s*c,v=s*d,_=a*c,m=a*d,h=o*d,E=l*u,T=l*c,A=l*d,w=i.x,C=i.y,R=i.z;return r[0]=(1-(_+h))*w,r[1]=(p+A)*w,r[2]=(v-T)*w,r[3]=0,r[4]=(p-A)*C,r[5]=(1-(f+h))*C,r[6]=(m+E)*C,r[7]=0,r[8]=(v+T)*R,r[9]=(m-E)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=Jr.set(r[0],r[1],r[2]).length();const a=Jr.set(r[4],r[5],r[6]).length(),o=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Jn.copy(this);const u=1/s,c=1/a,d=1/o;return Jn.elements[0]*=u,Jn.elements[1]*=u,Jn.elements[2]*=u,Jn.elements[4]*=c,Jn.elements[5]*=c,Jn.elements[6]*=c,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,n.setFromRotationMatrix(Jn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=hi,l=!1){const u=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let v,_;if(l)v=s/(a-s),_=a*s/(a-s);else if(o===hi)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Oo)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,_;if(l)v=1/(a-s),_=a/(a-s);else if(o===hi)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===Oo)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jr=new H,Jn=new qt,v1=new H(0,0,0),_1=new H(1,1,1),Ki=new H,Qa=new H,Mn=new H,eh=new qt,th=new Da;class qi{constructor(e=0,n=0,i=0,r=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-st(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Km{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let x1=0;const nh=new H,Kr=new Da,Li=new qt,eo=new H,aa=new H,b1=new H,S1=new Da,ih=new H(1,0,0),rh=new H(0,1,0),sh=new H(0,0,1),ah={type:"added"},y1={type:"removed"},Zr={type:"childadded",child:null},Zl={type:"childremoved",child:null};class Rn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new H,n=new qi,i=new Da,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new et}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Km,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,n){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?eo.copy(e):eo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(aa,eo,this.up):Li.lookAt(eo,aa,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(Li),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ah),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(y1),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ah),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,b1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,S1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rn.DEFAULT_UP=new H(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new H,Pi=new H,Ql=new H,Di=new H,Qr=new H,es=new H,oh=new H,eu=new H,tu=new H,nu=new H,iu=new Ut,ru=new Ut,su=new Ut;class Qn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Pi.subVectors(i,n),Ql.subVectors(e,n);const a=Kn.dot(Kn),o=Kn.dot(Pi),l=Kn.dot(Ql),u=Pi.dot(Pi),c=Pi.dot(Ql),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-o*c)*f,v=(a*c-o*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return iu.setScalar(0),ru.setScalar(0),su.setScalar(0),iu.fromBufferAttribute(e,n),ru.fromBufferAttribute(e,i),su.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(iu,s.x),a.addScaledVector(ru,s.y),a.addScaledVector(su,s.z),a}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Pi.subVectors(e,n),Kn.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Kn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),es.subVectors(s,i),eu.subVectors(e,i);const l=Qr.dot(eu),u=es.dot(eu);if(l<=0&&u<=0)return n.copy(i);tu.subVectors(e,r);const c=Qr.dot(tu),d=es.dot(tu);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(Qr,a);nu.subVectors(e,s);const p=Qr.dot(nu),v=es.dot(nu);if(v>=0&&p<=v)return n.copy(s);const _=p*u-l*v;if(_<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(es,o);const m=c*v-p*d;if(m<=0&&d-c>=0&&p-v>=0)return oh.subVectors(s,r),o=(d-c)/(d-c+(p-v)),n.copy(r).addScaledVector(oh,o);const h=1/(m+_+f);return a=_*h,o=f*h,n.copy(i).addScaledVector(Qr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},to={h:0,s:0,l:0};function au(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=l1(e,1),n=st(n,0,1),i=st(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=au(a,s,e+1/3),this.g=au(a,s,e),this.b=au(a,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,n=qn){function i(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const i=Zm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return lt.workingToColorSpace(nn.copy(this),e),Math.round(st(nn.r*255,0,255))*65536+Math.round(st(nn.g*255,0,255))*256+Math.round(st(nn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=qn){lt.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(to);const i=ql(Zi.h,to.h,n),r=ql(Zi.s,to.s,n),s=ql(Zi.l,to.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new rt;rt.NAMES=Zm;let M1=0;class nl extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=hs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Hu,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gu&&(i.blendSrc=this.blendSrc),this.blendDst!==Hu&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$f&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qm extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Nm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new H,no=new mt;let E1=0;class vi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wf,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)no.fromBufferAttribute(this,n),no.applyMatrix3(e),this.setXY(n,no.x,no.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ia(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wf&&(e.usage=this.usage),e}}class eg extends vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class tg extends vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bi extends vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let T1=0;const Bn=new qt,ou=new Rn,ts=new H,En=new Na,oa=new Na,Jt=new H;class Wi extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?tg:eg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ed);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(En.min,oa.min),En.expandByPoint(Jt),Jt.addVectors(En.max,oa.max),En.expandByPoint(Jt)):(En.expandByPoint(oa.min),En.expandByPoint(oa.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Jt.fromBufferAttribute(o,u),l&&(ts.fromBufferAttribute(e,u),Jt.add(ts)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<i.count;z++)o[z]=new H,l[z]=new H;const u=new H,c=new H,d=new H,f=new mt,p=new mt,v=new mt,_=new H,m=new H;function h(z,x,S){u.fromBufferAttribute(i,z),c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,z),p.fromBufferAttribute(s,x),v.fromBufferAttribute(s,S),c.sub(u),d.sub(u),p.sub(f),v.sub(f);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(_.copy(c).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(L),o[z].add(_),o[x].add(_),o[S].add(_),l[z].add(m),l[x].add(m),l[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let z=0,x=E.length;z<x;++z){const S=E[z],L=S.start,J=S.count;for(let k=L,K=L+J;k<K;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new H,A=new H,w=new H,C=new H;function R(z){w.fromBufferAttribute(r,z),C.copy(w);const x=o[z];T.copy(x),T.sub(w.multiplyScalar(w.dot(x))).normalize(),A.crossVectors(C,x);const L=A.dot(l[z])<0?-1:1;a.setXYZW(z,T.x,T.y,T.z,L)}for(let z=0,x=E.length;z<x;++z){const S=E[z],L=S.start,J=S.count;for(let k=L,K=L+J;k<K;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,u=new H,c=new H,d=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,d=o.normalized,f=new u.constructor(l.length*c);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*c;for(let h=0;h<c;h++)f[v++]=u[p++]}return new vi(f,c,d)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new qt,gr=new g1,io=new Ed,uh=new H,ro=new H,so=new H,ao=new H,lu=new H,oo=new H,ch=new H,lo=new H;class bi extends Rn{constructor(e=new Wi,n=new Qm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){oo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],d=s[l];c!==0&&(lu.fromBufferAttribute(d,e),a?oo.addScaledVector(lu,c):oo.addScaledVector(lu.sub(n),c))}n.add(oo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(io.containsPoint(gr.origin)===!1&&(gr.intersectSphere(io,uh)===null||gr.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(lh.copy(s).invert(),gr.copy(e.ray).applyMatrix4(lh),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const m=f[v],h=a[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,w=T;A<w;A+=3){const C=o.getX(A),R=o.getX(A+1),z=o.getX(A+2);r=uo(this,h,e,i,u,c,d,C,R,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=v,h=_;m<h;m+=3){const E=o.getX(m),T=o.getX(m+1),A=o.getX(m+2);r=uo(this,a,e,i,u,c,d,E,T,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=f.length;v<_;v++){const m=f[v],h=a[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,w=T;A<w;A+=3){const C=A,R=A+1,z=A+2;r=uo(this,h,e,i,u,c,d,C,R,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,h=_;m<h;m+=3){const E=m,T=m+1,A=m+2;r=uo(this,a,e,i,u,c,d,E,T,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function A1(t,e,n,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===lr,o),l===null)return null;lo.copy(o),lo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(lo);return u<n.near||u>n.far?null:{distance:u,point:lo.clone(),object:t}}function uo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,ro),t.getVertexPosition(l,so),t.getVertexPosition(u,ao);const c=A1(t,e,n,i,ro,so,ao,ch);if(c){const d=new H;Qn.getBarycoord(ch,ro,so,ao,d),r&&(c.uv=Qn.getInterpolatedAttribute(r,o,l,u,d,new mt)),s&&(c.uv1=Qn.getInterpolatedAttribute(s,o,l,u,d,new mt)),a&&(c.normal=Qn.getInterpolatedAttribute(a,o,l,u,d,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new H,materialIndex:0};Qn.getNormal(ro,so,ao,f.normal),c.face=f,c.barycoord=d}return c}class Ia extends Wi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bi(u,3)),this.setAttribute("normal",new Bi(c,3)),this.setAttribute("uv",new Bi(d,2));function v(_,m,h,E,T,A,w,C,R,z,x){const S=A/R,L=w/z,J=A/2,k=w/2,K=C/2,te=R+1,q=z+1;let Y=0,se=0;const D=new H;for(let W=0;W<q;W++){const $=W*L-k;for(let ve=0;ve<te;ve++){const U=ve*S-J;D[_]=U*E,D[m]=$*T,D[h]=K,u.push(D.x,D.y,D.z),D[_]=0,D[m]=0,D[h]=C>0?1:-1,c.push(D.x,D.y,D.z),d.push(ve/R),d.push(1-W/z),Y+=1}}for(let W=0;W<z;W++)for(let $=0;$<R;$++){const ve=f+$+te*W,U=f+$+te*(W+1),Z=f+($+1)+te*(W+1),he=f+($+1)+te*W;l.push(ve,U,he),l.push(U,Z,he),se+=6}o.addGroup(p,se,x),p+=se,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=ws(t[n]);for(const r in i)e[r]=i[r]}return e}function w1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ng(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const C1={clone:ws,merge:dn};var R1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R1,this.fragmentShader=L1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=w1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Td extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new H,dh=new mt,fh=new mt;class Zn extends Td{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ic*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,dh,fh),n.subVectors(fh,dh)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ns=-90,is=1;class P1 extends Rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(ns,is,e,n);r.layers=this.layers,this.add(r);const s=new Zn(ns,is,e,n);s.layers=this.layers,this.add(s);const a=new Zn(ns,is,e,n);a.layers=this.layers,this.add(a);const o=new Zn(ns,is,e,n);o.layers=this.layers,this.add(o);const l=new Zn(ns,is,e,n);l.layers=this.layers,this.add(l);const u=new Zn(ns,is,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ig extends pn{constructor(e=[],n=Or,i,r,s,a,o,l,u,c){super(e,n,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rg extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ig(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ia(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Ui});s.uniforms.tEquirect.value=n;const a=new bi(r,s),o=n.minFilter;return n.minFilter===wr&&(n.minFilter=an),new P1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class co extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D1={type:"move"};class uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new co;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class N1 extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class I1 extends pn{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Qt,c=Qt,d,f){super(null,a,o,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=new H,F1=new H,U1=new et;class Er{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=cu.subVectors(i,n).cross(F1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||U1.getNormalMatrix(e),r=this.coplanarPoint(cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Ed,O1=new mt(.5,.5),fo=new H;class sg{constructor(e=new Er,n=new Er,i=new Er,r=new Er,s=new Er,a=new Er){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],p=s[7],v=s[8],_=s[9],m=s[10],h=s[11],E=s[12],T=s[13],A=s[14],w=s[15];if(r[0].setComponents(u-a,p-c,h-v,w-E).normalize(),r[1].setComponents(u+a,p+c,h+v,w+E).normalize(),r[2].setComponents(u+o,p+d,h+_,w+T).normalize(),r[3].setComponents(u-o,p-d,h-_,w-T).normalize(),i)r[4].setComponents(l,f,m,A).normalize(),r[5].setComponents(u-l,p-f,h-m,w-A).normalize();else if(r[4].setComponents(u-l,p-f,h-m,w-A).normalize(),n===hi)r[5].setComponents(u+l,p+f,h+m,w+A).normalize();else if(n===Oo)r[5].setComponents(l,f,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const n=O1.distanceTo(e.center);return vr.radius=.7071067811865476+n,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fo.x=r.normal.x>0?e.max.x:e.min.x,fo.y=r.normal.y>0?e.max.y:e.min.y,fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Aa extends pn{constructor(e,n,i=xi,r,s,a,o=Qt,l=Qt,u,c=Vi,d=1){if(c!==Vi&&c!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Md(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class B1 extends Aa{constructor(e,n=xi,i=Or,r,s,a=Qt,o=Qt,l,u=Vi){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,r,s,a,o,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ag extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fa extends Wi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,d=e/o,f=n/l,p=[],v=[],_=[],m=[];for(let h=0;h<c;h++){const E=h*f-a;for(let T=0;T<u;T++){const A=T*d-s;v.push(A,-E,0),_.push(0,0,1),m.push(T/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<o;E++){const T=E+u*h,A=E+u*(h+1),w=E+1+u*(h+1),C=E+1+u*h;p.push(T,A,C),p.push(A,w,C)}this.setIndex(p),this.setAttribute("position",new Bi(v,3)),this.setAttribute("normal",new Bi(_,3)),this.setAttribute("uv",new Bi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.widthSegments,e.heightSegments)}}class k1 extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class z1 extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V1 extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class og extends Td{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class q1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function hh(t,e,n,i){const r=G1(i);switch(n){case $m:return t*e;case Xm:return t*e/r.components*r.byteLength;case _d:return t*e/r.components*r.byteLength;case Ts:return t*e*2/r.components*r.byteLength;case xd:return t*e*2/r.components*r.byteLength;case Wm:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case bd:return t*e*4/r.components*r.byteLength;case To:case Ao:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wo:case Co:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ic:case sc:return Math.max(t,16)*Math.max(e,8)/4;case nc:case rc:return Math.max(t,8)*Math.max(e,8)/2;case ac:case oc:case uc:case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lc:case dc:case fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case gc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case wc:case Cc:case Rc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Lc:case Pc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Dc:case Nc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function G1(t){switch(t){case Hn:case qm:return{byteLength:1,components:1};case Ma:case Gm:case zi:return{byteLength:2,components:1};case gd:case vd:return{byteLength:2,components:4};case xi:case md:case fi:return{byteLength:4,components:1};case Hm:case jm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);function lg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function H1(t){const e=new WeakMap;function n(o,l){const u=o.array,c=o.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,o),d.length===0)t.bufferSubData(u,0,c);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const _=d[p];t.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var j1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$1=`#ifdef USE_ALPHAHASH
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
#endif`,W1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K1=`#ifdef USE_AOMAP
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
#endif`,Z1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q1=`#ifdef USE_BATCHING
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
#endif`,ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ix=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rx=`#ifdef USE_IRIDESCENCE
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
#endif`,sx=`#ifdef USE_BUMPMAP
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
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,px=`#define PI 3.141592653589793
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
} // validated`,mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gx=`vec3 transformedNormal = objectNormal;
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
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",yx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mx=`#ifdef USE_ENVMAP
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
#endif`,Ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dx=`#ifdef USE_GRADIENTMAP
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
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ux=`uniform bool receiveShadow;
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
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
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
#endif`,Gx=`uniform sampler2D dfgLUT;
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
}`,Hx=`
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
#endif`,jx=`#if defined( RE_IndirectDiffuse )
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e2=`#if defined( USE_POINTS_UV )
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
#endif`,t2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a2=`#ifdef USE_MORPHTARGETS
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
#endif`,o2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h2=`#ifdef USE_NORMALMAP
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
#endif`,p2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R2=`float getShadowMask() {
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
}`,L2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P2=`#ifdef USE_SKINNING
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
#endif`,D2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N2=`#ifdef USE_SKINNING
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
#endif`,I2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B2=`#ifdef USE_TRANSMISSION
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
#endif`,k2=`#ifdef USE_TRANSMISSION
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
#endif`,z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j2=`uniform sampler2D t2D;
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
}`,$2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J2=`#include <common>
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
}`,K2=`#if DEPTH_PACKING == 3200
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
}`,Z2=`#define DISTANCE
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
}`,Q2=`#define DISTANCE
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
}`,e3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n3=`uniform float scale;
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
}`,i3=`uniform vec3 diffuse;
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
}`,r3=`#include <common>
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
}`,s3=`uniform vec3 diffuse;
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
}`,a3=`#define LAMBERT
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
}`,o3=`#define LAMBERT
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
}`,l3=`#define MATCAP
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
}`,u3=`#define MATCAP
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
}`,c3=`#define NORMAL
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
}`,d3=`#define NORMAL
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
}`,f3=`#define PHONG
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
}`,h3=`#define PHONG
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
}`,p3=`#define STANDARD
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
}`,m3=`#define STANDARD
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
}`,g3=`#define TOON
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
}`,v3=`#define TOON
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
}`,_3=`uniform float size;
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
}`,x3=`uniform vec3 diffuse;
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
}`,b3=`#include <common>
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
}`,S3=`uniform vec3 color;
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
}`,y3=`uniform float rotation;
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
}`,M3=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:j1,alphahash_pars_fragment:$1,alphamap_fragment:W1,alphamap_pars_fragment:X1,alphatest_fragment:Y1,alphatest_pars_fragment:J1,aomap_fragment:K1,aomap_pars_fragment:Z1,batching_pars_vertex:Q1,batching_vertex:ex,begin_vertex:tx,beginnormal_vertex:nx,bsdfs:ix,iridescence_fragment:rx,bumpmap_pars_fragment:sx,clipping_planes_fragment:ax,clipping_planes_pars_fragment:ox,clipping_planes_pars_vertex:lx,clipping_planes_vertex:ux,color_fragment:cx,color_pars_fragment:dx,color_pars_vertex:fx,color_vertex:hx,common:px,cube_uv_reflection_fragment:mx,defaultnormal_vertex:gx,displacementmap_pars_vertex:vx,displacementmap_vertex:_x,emissivemap_fragment:xx,emissivemap_pars_fragment:bx,colorspace_fragment:Sx,colorspace_pars_fragment:yx,envmap_fragment:Mx,envmap_common_pars_fragment:Ex,envmap_pars_fragment:Tx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Ox,envmap_vertex:wx,fog_vertex:Cx,fog_pars_vertex:Rx,fog_fragment:Lx,fog_pars_fragment:Px,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Nx,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Fx,lights_pars_begin:Ux,lights_toon_fragment:Bx,lights_toon_pars_fragment:kx,lights_phong_fragment:zx,lights_phong_pars_fragment:Vx,lights_physical_fragment:qx,lights_physical_pars_fragment:Gx,lights_fragment_begin:Hx,lights_fragment_maps:jx,lights_fragment_end:$x,logdepthbuf_fragment:Wx,logdepthbuf_pars_fragment:Xx,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:Jx,map_fragment:Kx,map_pars_fragment:Zx,map_particle_fragment:Qx,map_particle_pars_fragment:e2,metalnessmap_fragment:t2,metalnessmap_pars_fragment:n2,morphinstance_vertex:i2,morphcolor_vertex:r2,morphnormal_vertex:s2,morphtarget_pars_vertex:a2,morphtarget_vertex:o2,normal_fragment_begin:l2,normal_fragment_maps:u2,normal_pars_fragment:c2,normal_pars_vertex:d2,normal_vertex:f2,normalmap_pars_fragment:h2,clearcoat_normal_fragment_begin:p2,clearcoat_normal_fragment_maps:m2,clearcoat_pars_fragment:g2,iridescence_pars_fragment:v2,opaque_fragment:_2,packing:x2,premultiplied_alpha_fragment:b2,project_vertex:S2,dithering_fragment:y2,dithering_pars_fragment:M2,roughnessmap_fragment:E2,roughnessmap_pars_fragment:T2,shadowmap_pars_fragment:A2,shadowmap_pars_vertex:w2,shadowmap_vertex:C2,shadowmask_pars_fragment:R2,skinbase_vertex:L2,skinning_pars_vertex:P2,skinning_vertex:D2,skinnormal_vertex:N2,specularmap_fragment:I2,specularmap_pars_fragment:F2,tonemapping_fragment:U2,tonemapping_pars_fragment:O2,transmission_fragment:B2,transmission_pars_fragment:k2,uv_pars_fragment:z2,uv_pars_vertex:V2,uv_vertex:q2,worldpos_vertex:G2,background_vert:H2,background_frag:j2,backgroundCube_vert:$2,backgroundCube_frag:W2,cube_vert:X2,cube_frag:Y2,depth_vert:J2,depth_frag:K2,distance_vert:Z2,distance_frag:Q2,equirect_vert:e3,equirect_frag:t3,linedashed_vert:n3,linedashed_frag:i3,meshbasic_vert:r3,meshbasic_frag:s3,meshlambert_vert:a3,meshlambert_frag:o3,meshmatcap_vert:l3,meshmatcap_frag:u3,meshnormal_vert:c3,meshnormal_frag:d3,meshphong_vert:f3,meshphong_frag:h3,meshphysical_vert:p3,meshphysical_frag:m3,meshtoon_vert:g3,meshtoon_frag:v3,points_vert:_3,points_frag:x3,shadow_vert:b3,shadow_frag:S3,sprite_vert:y3,sprite_frag:M3},Te={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ci={basic:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new rt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:dn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:dn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new rt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:dn([Te.points,Te.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:dn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:dn([Te.common,Te.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:dn([Te.sprite,Te.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:dn([Te.common,Te.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:dn([Te.lights,Te.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ci.physical={uniforms:dn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ho={r:0,b:0,g:0},_r=new qi,E3=new qt;function T3(t,e,n,i,r,s,a){const o=new rt(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function v(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?n:e).get(A)),A}function _(T){let A=!1;const w=v(T);w===null?h(o,l):w&&w.isColor&&(h(w,1),A=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(T,A){const w=v(A);w&&(w.isCubeTexture||w.mapping===tl)?(c===void 0&&(c=new bi(new Ia(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ws(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,R,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),_r.copy(A.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(E3.makeRotationFromEuler(_r)),c.material.toneMapped=lt.getTransfer(w.colorSpace)!==_t,(d!==w||f!==w.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,p=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new bi(new Fa(2,2),new ni({name:"BackgroundMaterial",uniforms:ws(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=lt.getTransfer(w.colorSpace)!==_t,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,p=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function h(T,A){T.getRGB(ho,ng(t)),i.buffers.color.setClear(ho.r,ho.g,ho.b,A,a)}function E(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,A=1){o.set(T),l=A,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:_,addToRenderList:m,dispose:E}}function A3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,L,J,k,K){let te=!1;const q=d(k,J,L);s!==q&&(s=q,u(s.object)),te=p(S,k,J,K),te&&v(S,k,J,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,A(S,L,J,k),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function d(S,L,J){const k=J.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let te=K[L.id];te===void 0&&(te={},K[L.id]=te);let q=te[k];return q===void 0&&(q=f(l()),te[k]=q),q}function f(S){const L=[],J=[],k=[];for(let K=0;K<n;K++)L[K]=0,J[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:J,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,L,J,k){const K=s.attributes,te=L.attributes;let q=0;const Y=J.getAttributes();for(const se in Y)if(Y[se].location>=0){const W=K[se];let $=te[se];if($===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),W===void 0||W.attribute!==$||$&&W.data!==$.data)return!0;q++}return s.attributesNum!==q||s.index!==k}function v(S,L,J,k){const K={},te=L.attributes;let q=0;const Y=J.getAttributes();for(const se in Y)if(Y[se].location>=0){let W=te[se];W===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(W=S.instanceColor));const $={};$.attribute=W,W&&W.data&&($.data=W.data),K[se]=$,q++}s.attributes=K,s.attributesNum=q,s.index=k}function _(){const S=s.newAttributes;for(let L=0,J=S.length;L<J;L++)S[L]=0}function m(S){h(S,0)}function h(S,L){const J=s.newAttributes,k=s.enabledAttributes,K=s.attributeDivisors;J[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),K[S]!==L&&(t.vertexAttribDivisor(S,L),K[S]=L)}function E(){const S=s.newAttributes,L=s.enabledAttributes;for(let J=0,k=L.length;J<k;J++)L[J]!==S[J]&&(t.disableVertexAttribArray(J),L[J]=0)}function T(S,L,J,k,K,te,q){q===!0?t.vertexAttribIPointer(S,L,J,K,te):t.vertexAttribPointer(S,L,J,k,K,te)}function A(S,L,J,k){_();const K=k.attributes,te=J.getAttributes(),q=L.defaultAttributeValues;for(const Y in te){const se=te[Y];if(se.location>=0){let D=K[Y];if(D===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(D=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(D=S.instanceColor)),D!==void 0){const W=D.normalized,$=D.itemSize,ve=e.get(D);if(ve===void 0)continue;const U=ve.buffer,Z=ve.type,he=ve.bytesPerElement,F=Z===t.INT||Z===t.UNSIGNED_INT||D.gpuType===md;if(D.isInterleavedBufferAttribute){const j=D.data,ae=j.stride,B=D.offset;if(j.isInstancedInterleavedBuffer){for(let ee=0;ee<se.locationSize;ee++)h(se.location+ee,j.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ee=0;ee<se.locationSize;ee++)m(se.location+ee);t.bindBuffer(t.ARRAY_BUFFER,U);for(let ee=0;ee<se.locationSize;ee++)T(se.location+ee,$/se.locationSize,Z,W,ae*he,(B+$/se.locationSize*ee)*he,F)}else{if(D.isInstancedBufferAttribute){for(let j=0;j<se.locationSize;j++)h(se.location+j,D.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let j=0;j<se.locationSize;j++)m(se.location+j);t.bindBuffer(t.ARRAY_BUFFER,U);for(let j=0;j<se.locationSize;j++)T(se.location+j,$/se.locationSize,Z,W,$*he,$/se.locationSize*j*he,F)}}else if(q!==void 0){const W=q[Y];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(se.location,W);break;case 3:t.vertexAttrib3fv(se.location,W);break;case 4:t.vertexAttrib4fv(se.location,W);break;default:t.vertexAttrib1fv(se.location,W)}}}}E()}function w(){z();for(const S in i){const L=i[S];for(const J in L){const k=L[J];for(const K in k)c(k[K].object),delete k[K];delete L[J]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const J in L){const k=L[J];for(const K in k)c(k[K].object),delete k[K];delete L[J]}delete i[S.id]}function R(S){for(const L in i){const J=i[L];if(J[S.id]===void 0)continue;const k=J[S.id];for(const K in k)c(k[K].object),delete k[K];delete J[S.id]}}function z(){x(),a=!0,s!==r&&(s=r,u(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function w3(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function a(u,c,d){d!==0&&(t.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function o(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let v=0;v<d;v++)p+=c[v];n.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)a(u[v],c[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=c[_]*f[_];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function C3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==ei&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const z=R===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Hn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fi&&!z)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(Ze("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:A,maxSamples:w,samples:C}}function R3(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Er,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const E=s?0:i,T=E*4;let A=h.clippingState||null;l.value=A,A=c(v,f,T,p);for(let w=0;w!==T;++w)A[w]=n[w];h.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const h=p+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,A=p;T!==_;++T,A+=4)a.copy(d[T]).applyMatrix4(E,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function L3(t){let e=new WeakMap;function n(a,o){return o===Zu?a.mapping=Or:o===Qu&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zu||o===Qu)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new rg(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ar=4,ph=[.125,.215,.35,.446,.526,.582],Ar=20,P3=256,la=new og,mh=new rt;let du=null,fu=0,hu=0,pu=!1;const D3=new H;class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=D3}=s;du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(du,fu,hu),this._renderer.xr.enabled=pu,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Or||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:zi,format:ei,colorSpace:As,depthBuffer:!1},r=vh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N3(s)),this._blurMaterial=F3(s,e,n),this._ggxMaterial=I3(s,e,n)}return r}_compileMaterial(e){const n=new bi(new Wi,e);this._renderer.compile(n,la)}_sceneToCubeUV(e,n,i,r,s){const l=new Zn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(mh),d.toneMapping=mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bi(new Ia,new Qm({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let h=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,h=!0):(m.color.copy(mh),h=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(l.up.set(0,u[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[T],s.y,s.z)):A===1?(l.up.set(0,0,u[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[T],s.z)):(l.up.set(0,u[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[T]));const w=this._cubeSize;rs(r,A*w,T>2?w:0,w,w),d.setRenderTarget(r),h&&d.render(_,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=E}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Or||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;rs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,la)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,p=d*f,{_lodMax:v}=this,_=this._sizeLods[i],m=3*_*(i>v-ar?i-v+ar:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,rs(s,m,h,3*_,2*_),r.setRenderTarget(s),r.render(o,la),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,rs(e,m,h,3*_,2*_),r.setRenderTarget(e),r.render(o,la)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ar-1),_=s/v,m=isFinite(s)?1+Math.floor(c*_):Ar;m>Ar&&Ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const h=[];let E=0;for(let R=0;R<Ar;++R){const z=R/_,x=Math.exp(-z*z/2);h.push(x),R===0?E+=x:R<m&&(E+=2*x)}for(let R=0;R<h.length;R++)h[R]=h[R]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-i;const A=this._sizeLods[r],w=3*A*(r>T-ar?r-T+ar:0),C=4*(this._cubeSize-A);rs(n,w,C,3*A,2*A),l.setRenderTarget(n),l.render(d,la)}}function N3(t){const e=[],n=[],i=[];let r=t;const s=t-ar+1+ph.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ar?l=ph[a-t+ar-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,v=6,_=3,m=2,h=1,E=new Float32Array(_*v*p),T=new Float32Array(m*v*p),A=new Float32Array(h*v*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,z=C>2?0:-1,x=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];E.set(x,_*v*C),T.set(f,m*v*C);const S=[C,C,C,C,C,C];A.set(S,h*v*C)}const w=new Wi;w.setAttribute("position",new vi(E,_)),w.setAttribute("uv",new vi(T,m)),w.setAttribute("faceIndex",new vi(A,h)),i.push(new bi(w,null)),r>ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function vh(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function I3(t,e,n){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function F3(t,e,n){const i=new Float32Array(Ar),r=new H(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function _h(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function xh(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function U3(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Zu||l===Qu,c=l===Or||l===Es;if(u||c){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new gh(t)),d=u?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new gh(t)),d=u?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function O3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ta("WebGLRenderer: "+i+" extension not supported."),r}}}function B3(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let T=0,A=E.length;T<A;T+=3){const w=E[T+0],C=E[T+1],R=E[T+2];f.push(w,C,C,R,R,w)}}else if(v!==void 0){const E=v.array;_=v.version;for(let T=0,A=E.length/3-1;T<A;T+=3){const w=T+0,C=T+1,R=T+2;f.push(w,C,C,R,R,w)}}else return;const m=new(Ym(f)?tg:eg)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function k3(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function u(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,f*a,v),n.update(p,i,v))}function c(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];n.update(m,i,1)}function d(f,p,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/a,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,v);let h=0;for(let E=0;E<v;E++)h+=p[E]*_[E];n.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function z3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function V3(t,e,n){const i=new WeakMap,r=new Ut;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let x=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let T=0;p===!0&&(T=1),v===!0&&(T=2),_===!0&&(T=3);let A=o.attributes.position.count*T,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*d),R=new Jm(C,A,w,d);R.type=fi,R.needsUpdate=!0;const z=T*4;for(let S=0;S<d;S++){const L=m[S],J=h[S],k=E[S],K=A*w*4*S;for(let te=0;te<L.count;te++){const q=te*z;p===!0&&(r.fromBufferAttribute(L,te),C[K+q+0]=r.x,C[K+q+1]=r.y,C[K+q+2]=r.z,C[K+q+3]=0),v===!0&&(r.fromBufferAttribute(J,te),C[K+q+4]=r.x,C[K+q+5]=r.y,C[K+q+6]=r.z,C[K+q+7]=0),_===!0&&(r.fromBufferAttribute(k,te),C[K+q+8]=r.x,C[K+q+9]=r.y,C[K+q+10]=r.z,C[K+q+11]=k.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new mt(A,w)},i.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function q3(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}const G3={[Im]:"LINEAR_TONE_MAPPING",[Fm]:"REINHARD_TONE_MAPPING",[Um]:"CINEON_TONE_MAPPING",[Om]:"ACES_FILMIC_TONE_MAPPING",[km]:"AGX_TONE_MAPPING",[zm]:"NEUTRAL_TONE_MAPPING",[Bm]:"CUSTOM_TONE_MAPPING"};function H3(t,e,n,i,r){const s=new gi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new gi(e,n,{type:zi,depthBuffer:!1,stencilBuffer:!1}),o=new Wi;o.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Bi([0,2,0,0,2,0],2));const l=new k1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new bi(o,l),c=new og(-1,1,1,-1,0,1);let d=null,f=null,p=!1,v,_=null,m=[],h=!1;this.setSize=function(E,T){s.setSize(E,T),a.setSize(E,T);for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(E,T)}},this.setEffects=function(E){m=E,h=m.length>0&&m[0].isRenderPass===!0;const T=s.width,A=s.height;for(let w=0;w<m.length;w++){const C=m[w];C.setSize&&C.setSize(T,A)}},this.begin=function(E,T){if(p||E.toneMapping===mi&&m.length===0)return!1;if(_=T,T!==null){const A=T.width,w=T.height;(s.width!==A||s.height!==w)&&this.setSize(A,w)}return h===!1&&E.setRenderTarget(s),v=E.toneMapping,E.toneMapping=mi,!0},this.hasRenderPass=function(){return h},this.end=function(E,T){E.toneMapping=v,p=!0;let A=s,w=a;for(let C=0;C<m.length;C++){const R=m[C];if(R.enabled!==!1&&(R.render(E,w,A,T),R.needsSwap!==!1)){const z=A;A=w,w=z}}if(d!==E.outputColorSpace||f!==E.toneMapping){d=E.outputColorSpace,f=E.toneMapping,l.defines={},lt.getTransfer(d)===_t&&(l.defines.SRGB_TRANSFER="");const C=G3[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,E.setRenderTarget(_),E.render(u,c),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const ug=new pn,Fc=new Aa(1,1),cg=new Jm,dg=new p1,fg=new ig,bh=[],Sh=[],yh=new Float32Array(16),Mh=new Float32Array(9),Eh=new Float32Array(4);function Vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bh[r];if(s===void 0&&(s=new Float32Array(r),bh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rl(t,e){let n=Sh[e];n===void 0&&(n=new Int32Array(e),Sh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function j3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function W3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function X3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function Y3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Eh.set(i),t.uniformMatrix2fv(this.addr,!1,Eh),Xt(n,i)}}function J3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Mh.set(i),t.uniformMatrix3fv(this.addr,!1,Mh),Xt(n,i)}}function K3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;yh.set(i),t.uniformMatrix4fv(this.addr,!1,yh),Xt(n,i)}}function Z3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Q3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function nb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function ab(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Fc.compareFunction=n.isReversedDepthBuffer()?yd:Sd,s=Fc):s=ug,n.setTexture2D(e||s,r)}function ob(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dg,r)}function lb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||fg,r)}function ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||cg,r)}function cb(t){switch(t){case 5126:return j3;case 35664:return $3;case 35665:return W3;case 35666:return X3;case 35674:return Y3;case 35675:return J3;case 35676:return K3;case 5124:case 35670:return Z3;case 35667:case 35671:return Q3;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return ub}}function db(t,e){t.uniform1fv(this.addr,e)}function fb(t,e){const n=Vs(e,this.size,2);t.uniform2fv(this.addr,n)}function hb(t,e){const n=Vs(e,this.size,3);t.uniform3fv(this.addr,n)}function pb(t,e){const n=Vs(e,this.size,4);t.uniform4fv(this.addr,n)}function mb(t,e){const n=Vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gb(t,e){const n=Vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vb(t,e){const n=Vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _b(t,e){t.uniform1iv(this.addr,e)}function xb(t,e){t.uniform2iv(this.addr,e)}function bb(t,e){t.uniform3iv(this.addr,e)}function Sb(t,e){t.uniform4iv(this.addr,e)}function yb(t,e){t.uniform1uiv(this.addr,e)}function Mb(t,e){t.uniform2uiv(this.addr,e)}function Eb(t,e){t.uniform3uiv(this.addr,e)}function Tb(t,e){t.uniform4uiv(this.addr,e)}function Ab(t,e,n){const i=this.cache,r=e.length,s=rl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Fc:a=ug;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function wb(t,e,n){const i=this.cache,r=e.length,s=rl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||dg,s[a])}function Cb(t,e,n){const i=this.cache,r=e.length,s=rl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||fg,s[a])}function Rb(t,e,n){const i=this.cache,r=e.length,s=rl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||cg,s[a])}function Lb(t){switch(t){case 5126:return db;case 35664:return fb;case 35665:return hb;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return vb;case 5124:case 35670:return _b;case 35667:case 35671:return xb;case 35668:case 35672:return bb;case 35669:case 35673:return Sb;case 5125:return yb;case 36294:return Mb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Rb}}class Pb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cb(n.type)}}class Db{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Lb(n.type)}}class Nb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function Th(t,e){t.seq.push(e),t.map[e.id]=e}function Ib(t,e,n){const i=t.name,r=i.length;for(mu.lastIndex=0;;){const s=mu.exec(i),a=mu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Th(n,u===void 0?new Pb(o,t,e):new Db(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Nb(o),Th(n,d)),n=d}}}class Ro{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Ib(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Ah(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Fb=37297;let Ub=0;function Ob(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const wh=new et;function Bb(t){lt._getMatrix(wh,lt.workingColorSpace,t);const e=`mat3( ${wh.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case Uo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ch(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Ob(t.getShaderSource(e),o)}else return s}function kb(t,e){const n=Bb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const zb={[Im]:"Linear",[Fm]:"Reinhard",[Um]:"Cineon",[Om]:"ACESFilmic",[km]:"AgX",[zm]:"Neutral",[Bm]:"Custom"};function Vb(t,e){const n=zb[e];return n===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const po=new H;function qb(){lt.getLuminanceCoefficients(po);const t=po.x.toFixed(4),e=po.y.toFixed(4),n=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function Hb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function pa(t){return t!==""}function Rh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(t){return t.replace($b,Xb)}const Wb=new Map;function Xb(t,e){let n=tt[e];if(n===void 0){const i=Wb.get(e);if(i!==void 0)n=tt[i],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uc(n)}const Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(t){return t.replace(Yb,Jb)}function Jb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Kb={[Eo]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function Zb(t){return Kb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qb={[Or]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[tl]:"ENVMAP_TYPE_CUBE_UV"};function eS(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Qb[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const tS={[Es]:"ENVMAP_MODE_REFRACTION"};function nS(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":tS[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iS={[Nm]:"ENVMAP_BLENDING_MULTIPLY",[X_]:"ENVMAP_BLENDING_MIX",[Y_]:"ENVMAP_BLENDING_ADD"};function rS(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":iS[t.combine]||"ENVMAP_BLENDING_NONE"}function sS(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function aS(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Zb(n),u=eS(n),c=nS(n),d=rS(n),f=sS(n),p=Gb(n),v=Hb(s),_=r.createProgram();let m,h,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(pa).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(pa).join(`
`),h.length>0&&(h+=`
`)):(m=[Dh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),h=[Dh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?tt.tonemapping_pars_fragment:"",n.toneMapping!==mi?Vb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,kb("linearToOutputTexel",n.outputColorSpace),qb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pa).join(`
`)),a=Uc(a),a=Rh(a,n),a=Lh(a,n),o=Uc(o),o=Rh(o,n),o=Lh(o,n),a=Ph(a),o=Ph(o),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=E+m+a,A=E+h+o,w=Ah(r,r.VERTEX_SHADER,T),C=Ah(r,r.FRAGMENT_SHADER,A);r.attachShader(_,w),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(L){if(t.debug.checkShaderErrors){const J=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(w)||"",K=r.getShaderInfoLog(C)||"",te=J.trim(),q=k.trim(),Y=K.trim();let se=!0,D=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(se=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,w,C);else{const W=Ch(r,w,"vertex"),$=Ch(r,C,"fragment");dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+te+`
`+W+`
`+$)}else te!==""?Ze("WebGLProgram: Program Info Log:",te):(q===""||Y==="")&&(D=!1);D&&(L.diagnostics={runnable:se,programLog:te,vertexShader:{log:q,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(w),r.deleteShader(C),z=new Ro(r,_),x=jb(r,_)}let z;this.getUniforms=function(){return z===void 0&&R(this),z};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Fb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ub++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}let oS=0;class lS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uS(e),n.set(e,i)),i}}class uS{constructor(e){this.id=oS++,this.code=e,this.usedTimes=0}}function cS(t,e,n,i,r,s,a){const o=new Km,l=new lS,u=new Set,c=[],d=new Map,f=r.logarithmicDepthBuffer;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return u.add(x),x===0?"uv":`uv${x}`}function m(x,S,L,J,k){const K=J.fog,te=k.geometry,q=x.isMeshStandardMaterial?J.environment:null,Y=(x.isMeshStandardMaterial?n:e).get(x.envMap||q),se=Y&&Y.mapping===tl?Y.image.height:null,D=v[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&Ze("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const W=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,$=W!==void 0?W.length:0;let ve=0;te.morphAttributes.position!==void 0&&(ve=1),te.morphAttributes.normal!==void 0&&(ve=2),te.morphAttributes.color!==void 0&&(ve=3);let U,Z,he,F;if(D){const gt=ci[D];U=gt.vertexShader,Z=gt.fragmentShader}else U=x.vertexShader,Z=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),F=l.getFragmentShaderID(x);const j=t.getRenderTarget(),ae=t.state.buffers.depth.getReversed(),B=k.isInstancedMesh===!0,ee=k.isBatchedMesh===!0,pe=!!x.map,Re=!!x.matcap,be=!!Y,Ce=!!x.aoMap,Ve=!!x.lightMap,V=!!x.bumpMap,xe=!!x.normalMap,M=!!x.displacementMap,ue=!!x.emissiveMap,re=!!x.metalnessMap,de=!!x.roughnessMap,le=x.anisotropy>0,y=x.clearcoat>0,g=x.dispersion>0,N=x.iridescence>0,ne=x.sheen>0,ie=x.transmission>0,Q=le&&!!x.anisotropyMap,Oe=y&&!!x.clearcoatMap,ce=y&&!!x.clearcoatNormalMap,Fe=y&&!!x.clearcoatRoughnessMap,Je=N&&!!x.iridescenceMap,me=N&&!!x.iridescenceThicknessMap,Me=ne&&!!x.sheenColorMap,Ue=ne&&!!x.sheenRoughnessMap,Be=!!x.specularMap,ye=!!x.specularColorMap,nt=!!x.specularIntensityMap,P=ie&&!!x.transmissionMap,we=ie&&!!x.thicknessMap,_e=!!x.gradientMap,Le=!!x.alphaMap,fe=x.alphaTest>0,oe=!!x.alphaHash,Se=!!x.extensions;let Ke=mi;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ke=t.toneMapping);const Et={shaderID:D,shaderType:x.type,shaderName:x.name,vertexShader:U,fragmentShader:Z,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:F,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:ee,batchingColor:ee&&k._colorsTexture!==null,instancing:B,instancingColor:B&&k.instanceColor!==null,instancingMorph:B&&k.morphTexture!==null,outputColorSpace:j===null?t.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:As,alphaToCoverage:!!x.alphaToCoverage,map:pe,matcap:Re,envMap:be,envMapMode:be&&Y.mapping,envMapCubeUVHeight:se,aoMap:Ce,lightMap:Ve,bumpMap:V,normalMap:xe,displacementMap:M,emissiveMap:ue,normalMapObjectSpace:xe&&x.normalMapType===Q_,normalMapTangentSpace:xe&&x.normalMapType===Z_,metalnessMap:re,roughnessMap:de,anisotropy:le,anisotropyMap:Q,clearcoat:y,clearcoatMap:Oe,clearcoatNormalMap:ce,clearcoatRoughnessMap:Fe,dispersion:g,iridescence:N,iridescenceMap:Je,iridescenceThicknessMap:me,sheen:ne,sheenColorMap:Me,sheenRoughnessMap:Ue,specularMap:Be,specularColorMap:ye,specularIntensityMap:nt,transmission:ie,transmissionMap:P,thicknessMap:we,gradientMap:_e,opaque:x.transparent===!1&&x.blending===hs&&x.alphaToCoverage===!1,alphaMap:Le,alphaTest:fe,alphaHash:oe,combine:x.combine,mapUv:pe&&_(x.map.channel),aoMapUv:Ce&&_(x.aoMap.channel),lightMapUv:Ve&&_(x.lightMap.channel),bumpMapUv:V&&_(x.bumpMap.channel),normalMapUv:xe&&_(x.normalMap.channel),displacementMapUv:M&&_(x.displacementMap.channel),emissiveMapUv:ue&&_(x.emissiveMap.channel),metalnessMapUv:re&&_(x.metalnessMap.channel),roughnessMapUv:de&&_(x.roughnessMap.channel),anisotropyMapUv:Q&&_(x.anisotropyMap.channel),clearcoatMapUv:Oe&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(x.sheenRoughnessMap.channel),specularMapUv:Be&&_(x.specularMap.channel),specularColorMapUv:ye&&_(x.specularColorMap.channel),specularIntensityMapUv:nt&&_(x.specularIntensityMap.channel),transmissionMapUv:P&&_(x.transmissionMap.channel),thicknessMapUv:we&&_(x.thicknessMap.channel),alphaMapUv:Le&&_(x.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(xe||le),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!te.attributes.uv&&(pe||Le),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ae,skinning:k.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,decodeVideoTexture:pe&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:ue&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ni,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Et.vertexUv1s=u.has(1),Et.vertexUv2s=u.has(2),Et.vertexUv3s=u.has(3),u.clear(),Et}function h(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(E(S,x),T(S,x),S.push(t.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function E(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function T(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function A(x){const S=v[x.type];let L;if(S){const J=ci[S];L=C1.clone(J.uniforms)}else L=x.uniforms;return L}function w(x,S){let L=d.get(S);return L!==void 0?++L.usedTimes:(L=new aS(t,S,x,s),c.push(L),d.set(S,L)),L}function C(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function R(x){l.remove(x)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:A,acquireProgram:w,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:z}}function dS(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function fS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Nh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ih(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,p,v,_,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function o(d,f,p,v,_,m){const h=a(d,f,p,v,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,v,_,m){const h=a(d,f,p,v,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(d,f){n.length>1&&n.sort(d||fS),i.length>1&&i.sort(f||Nh),r.length>1&&r.sort(f||Nh)}function c(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function hS(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ih,t.set(i,[a])):r>=s.length?(a=new Ih,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function pS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new rt};break;case"SpotLight":n={position:new H,direction:new H,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function mS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let gS=0;function vS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _S(t){const e=new pS,n=mS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,s=new qt,a=new qt;function o(u){let c=0,d=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,v=0,_=0,m=0,h=0,E=0,T=0,A=0,w=0,C=0,R=0;u.sort(vS);for(let x=0,S=u.length;x<S;x++){const L=u[x],J=L.color,k=L.intensity,K=L.distance;let te=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ts?te=L.shadow.map.texture:te=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=J.r*k,d+=J.g*k,f+=J.b*k;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],k);R++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,se=n.get(L);se.shadowIntensity=Y.intensity,se.shadowBias=Y.bias,se.shadowNormalBias=Y.normalBias,se.shadowRadius=Y.radius,se.shadowMapSize=Y.mapSize,i.directionalShadow[p]=se,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=L.shadow.matrix,E++}i.directional[p]=q,p++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(J).multiplyScalar(k),q.distance=K,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[_]=q;const Y=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,Y.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=Y.matrix,L.castShadow){const se=n.get(L);se.shadowIntensity=Y.intensity,se.shadowBias=Y.bias,se.shadowNormalBias=Y.normalBias,se.shadowRadius=Y.radius,se.shadowMapSize=Y.mapSize,i.spotShadow[_]=se,i.spotShadowMap[_]=te,A++}_++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(J).multiplyScalar(k),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=q,m++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Y=L.shadow,se=n.get(L);se.shadowIntensity=Y.intensity,se.shadowBias=Y.bias,se.shadowNormalBias=Y.normalBias,se.shadowRadius=Y.radius,se.shadowMapSize=Y.mapSize,se.shadowCameraNear=Y.camera.near,se.shadowCameraFar=Y.camera.far,i.pointShadow[v]=se,i.pointShadowMap[v]=te,i.pointShadowMatrix[v]=L.shadow.matrix,T++}i.point[v]=q,v++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(k),q.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[h]=q,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const z=i.hash;(z.directionalLength!==p||z.pointLength!==v||z.spotLength!==_||z.rectAreaLength!==m||z.hemiLength!==h||z.numDirectionalShadows!==E||z.numPointShadows!==T||z.numSpotShadows!==A||z.numSpotMaps!==w||z.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=A+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,z.directionalLength=p,z.pointLength=v,z.spotLength=_,z.rectAreaLength=m,z.hemiLength=h,z.numDirectionalShadows=E,z.numPointShadows=T,z.numSpotShadows=A,z.numSpotMaps=w,z.numLightProbes=R,i.version=gS++)}function l(u,c){let d=0,f=0,p=0,v=0,_=0;const m=c.matrixWorldInverse;for(let h=0,E=u.length;h<E;h++){const T=u[h];if(T.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),d++}else if(T.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Fh(t){const e=new _S(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function a(c){i.push(c)}function o(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function xS(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Fh(t),e.set(r,[o])):s>=a.length?(o=new Fh(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const bS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SS=`uniform sampler2D shadow_pass;
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
}`,yS=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],MS=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Uh=new qt,ua=new H,gu=new H;function ES(t,e,n){let i=new sg;const r=new mt,s=new mt,a=new Ut,o=new z1,l=new V1,u={},c=n.maxTextureSize,d={[lr]:xn,[xn]:lr,[Ni]:Ni},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:bS,fragmentShader:SS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Wi;v.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bi(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let h=this.type;this.render=function(C,R,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===R_&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=Eo);const x=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),J=t.state;J.setBlending(Ui),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const k=h!==this.type;k&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(te=>te.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,te=C.length;K<te;K++){const q=C[K],Y=q.shadow;if(Y===void 0){Ze("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const se=Y.getFrameExtents();if(r.multiply(se),s.copy(Y.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/se.x),r.x=s.x*se.x,Y.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/se.y),r.y=s.y*se.y,Y.mapSize.y=s.y)),Y.map===null||k===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ha){if(q.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new gi(r.x,r.y,{format:Ts,type:zi,minFilter:an,magFilter:an,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new Aa(r.x,r.y,fi),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=Vi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Qt,Y.map.depthTexture.magFilter=Qt}else{q.isPointLight?(Y.map=new rg(r.x),Y.map.depthTexture=new B1(r.x,xi)):(Y.map=new gi(r.x,r.y),Y.map.depthTexture=new Aa(r.x,r.y,xi)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=Vi;const W=t.state.buffers.depth.getReversed();this.type===Eo?(Y.map.depthTexture.compareFunction=W?yd:Sd,Y.map.depthTexture.minFilter=an,Y.map.depthTexture.magFilter=an):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Qt,Y.map.depthTexture.magFilter=Qt)}Y.camera.updateProjectionMatrix()}const D=Y.map.isWebGLCubeRenderTarget?6:1;for(let W=0;W<D;W++){if(Y.map.isWebGLCubeRenderTarget)t.setRenderTarget(Y.map,W),t.clear();else{W===0&&(t.setRenderTarget(Y.map),t.clear());const $=Y.getViewport(W);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),J.viewport(a)}if(q.isPointLight){const $=Y.camera,ve=Y.matrix,U=q.distance||$.far;U!==$.far&&($.far=U,$.updateProjectionMatrix()),ua.setFromMatrixPosition(q.matrixWorld),$.position.copy(ua),gu.copy($.position),gu.add(yS[W]),$.up.copy(MS[W]),$.lookAt(gu),$.updateMatrixWorld(),ve.makeTranslation(-ua.x,-ua.y,-ua.z),Uh.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Uh,$.coordinateSystem,$.reversedDepth)}else Y.updateMatrices(q);i=Y.getFrustum(),A(R,z,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===ha&&E(Y,z),Y.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(x,S,L)};function E(C,R){const z=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gi(r.x,r.y,{format:Ts,type:zi})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,z,f,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,z,p,_,null)}function T(C,R,z,x){let S=null;const L=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=z.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const J=S.uuid,k=R.uuid;let K=u[J];K===void 0&&(K={},u[J]=K);let te=K[k];te===void 0&&(te=S.clone(),K[k]=te,R.addEventListener("dispose",w)),S=te}if(S.visible=R.visible,S.wireframe=R.wireframe,x===ha?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const J=t.properties.get(S);J.light=z}return S}function A(C,R,z,x,S){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ha)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const k=e.update(C),K=C.material;if(Array.isArray(K)){const te=k.groups;for(let q=0,Y=te.length;q<Y;q++){const se=te[q],D=K[se.materialIndex];if(D&&D.visible){const W=T(C,D,x,S);C.onBeforeShadow(t,C,R,z,k,W,se),t.renderBufferDirect(z,null,k,W,C,se),C.onAfterShadow(t,C,R,z,k,W,se)}}}else if(K.visible){const te=T(C,K,x,S);C.onBeforeShadow(t,C,R,z,k,te,null),t.renderBufferDirect(z,null,k,te,C,null),C.onAfterShadow(t,C,R,z,k,te,null)}}const J=C.children;for(let k=0,K=J.length;k<K;k++)A(J[k],R,z,x,S)}function w(C){C.target.removeEventListener("dispose",w);for(const z in u){const x=u[z],S=C.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const TS={[ju]:$u,[Wu]:Ju,[Xu]:Ku,[Ms]:Yu,[$u]:ju,[Ju]:Wu,[Ku]:Xu,[Yu]:Ms};function AS(t,e){function n(){let P=!1;const we=new Ut;let _e=null;const Le=new Ut(0,0,0,0);return{setMask:function(fe){_e!==fe&&!P&&(t.colorMask(fe,fe,fe,fe),_e=fe)},setLocked:function(fe){P=fe},setClear:function(fe,oe,Se,Ke,Et){Et===!0&&(fe*=Ke,oe*=Ke,Se*=Ke),we.set(fe,oe,Se,Ke),Le.equals(we)===!1&&(t.clearColor(fe,oe,Se,Ke),Le.copy(we))},reset:function(){P=!1,_e=null,Le.set(-1,0,0,0)}}}function i(){let P=!1,we=!1,_e=null,Le=null,fe=null;return{setReversed:function(oe){if(we!==oe){const Se=e.get("EXT_clip_control");oe?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),we=oe;const Ke=fe;fe=null,this.setClear(Ke)}},getReversed:function(){return we},setTest:function(oe){oe?j(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(oe){_e!==oe&&!P&&(t.depthMask(oe),_e=oe)},setFunc:function(oe){if(we&&(oe=TS[oe]),Le!==oe){switch(oe){case ju:t.depthFunc(t.NEVER);break;case $u:t.depthFunc(t.ALWAYS);break;case Wu:t.depthFunc(t.LESS);break;case Ms:t.depthFunc(t.LEQUAL);break;case Xu:t.depthFunc(t.EQUAL);break;case Yu:t.depthFunc(t.GEQUAL);break;case Ju:t.depthFunc(t.GREATER);break;case Ku:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=oe}},setLocked:function(oe){P=oe},setClear:function(oe){fe!==oe&&(we&&(oe=1-oe),t.clearDepth(oe),fe=oe)},reset:function(){P=!1,_e=null,Le=null,fe=null,we=!1}}}function r(){let P=!1,we=null,_e=null,Le=null,fe=null,oe=null,Se=null,Ke=null,Et=null;return{setTest:function(gt){P||(gt?j(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(gt){we!==gt&&!P&&(t.stencilMask(gt),we=gt)},setFunc:function(gt,ai,wi){(_e!==gt||Le!==ai||fe!==wi)&&(t.stencilFunc(gt,ai,wi),_e=gt,Le=ai,fe=wi)},setOp:function(gt,ai,wi){(oe!==gt||Se!==ai||Ke!==wi)&&(t.stencilOp(gt,ai,wi),oe=gt,Se=ai,Ke=wi)},setLocked:function(gt){P=gt},setClear:function(gt){Et!==gt&&(t.clearStencil(gt),Et=gt)},reset:function(){P=!1,we=null,_e=null,Le=null,fe=null,oe=null,Se=null,Ke=null,Et=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f=new WeakMap,p=[],v=null,_=!1,m=null,h=null,E=null,T=null,A=null,w=null,C=null,R=new rt(0,0,0),z=0,x=!1,S=null,L=null,J=null,k=null,K=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const se=t.getParameter(t.VERSION);se.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(se)[1]),q=Y>=1):se.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),q=Y>=2);let D=null,W={};const $=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),U=new Ut().fromArray($),Z=new Ut().fromArray(ve);function he(P,we,_e,Le){const fe=new Uint8Array(4),oe=t.createTexture();t.bindTexture(P,oe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<_e;Se++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(we+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return oe}const F={};F[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),F[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),F[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(t.DEPTH_TEST),a.setFunc(Ms),V(!1),xe(qf),j(t.CULL_FACE),Ce(Ui);function j(P){c[P]!==!0&&(t.enable(P),c[P]=!0)}function ae(P){c[P]!==!1&&(t.disable(P),c[P]=!1)}function B(P,we){return d[P]!==we?(t.bindFramebuffer(P,we),d[P]=we,P===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=we),P===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=we),!0):!1}function ee(P,we){let _e=p,Le=!1;if(P){_e=f.get(we),_e===void 0&&(_e=[],f.set(we,_e));const fe=P.textures;if(_e.length!==fe.length||_e[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Se=fe.length;oe<Se;oe++)_e[oe]=t.COLOR_ATTACHMENT0+oe;_e.length=fe.length,Le=!0}}else _e[0]!==t.BACK&&(_e[0]=t.BACK,Le=!0);Le&&t.drawBuffers(_e)}function pe(P){return v!==P?(t.useProgram(P),v=P,!0):!1}const Re={[Tr]:t.FUNC_ADD,[P_]:t.FUNC_SUBTRACT,[D_]:t.FUNC_REVERSE_SUBTRACT};Re[N_]=t.MIN,Re[I_]=t.MAX;const be={[F_]:t.ZERO,[U_]:t.ONE,[O_]:t.SRC_COLOR,[Gu]:t.SRC_ALPHA,[G_]:t.SRC_ALPHA_SATURATE,[V_]:t.DST_COLOR,[k_]:t.DST_ALPHA,[B_]:t.ONE_MINUS_SRC_COLOR,[Hu]:t.ONE_MINUS_SRC_ALPHA,[q_]:t.ONE_MINUS_DST_COLOR,[z_]:t.ONE_MINUS_DST_ALPHA,[H_]:t.CONSTANT_COLOR,[j_]:t.ONE_MINUS_CONSTANT_COLOR,[$_]:t.CONSTANT_ALPHA,[W_]:t.ONE_MINUS_CONSTANT_ALPHA};function Ce(P,we,_e,Le,fe,oe,Se,Ke,Et,gt){if(P===Ui){_===!0&&(ae(t.BLEND),_=!1);return}if(_===!1&&(j(t.BLEND),_=!0),P!==L_){if(P!==m||gt!==x){if((h!==Tr||A!==Tr)&&(t.blendEquation(t.FUNC_ADD),h=Tr,A=Tr),gt)switch(P){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gf:t.blendFunc(t.ONE,t.ONE);break;case Hf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:dt("WebGLState: Invalid blending: ",P);break}else switch(P){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Hf:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jf:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",P);break}E=null,T=null,w=null,C=null,R.set(0,0,0),z=0,m=P,x=gt}return}fe=fe||we,oe=oe||_e,Se=Se||Le,(we!==h||fe!==A)&&(t.blendEquationSeparate(Re[we],Re[fe]),h=we,A=fe),(_e!==E||Le!==T||oe!==w||Se!==C)&&(t.blendFuncSeparate(be[_e],be[Le],be[oe],be[Se]),E=_e,T=Le,w=oe,C=Se),(Ke.equals(R)===!1||Et!==z)&&(t.blendColor(Ke.r,Ke.g,Ke.b,Et),R.copy(Ke),z=Et),m=P,x=!1}function Ve(P,we){P.side===Ni?ae(t.CULL_FACE):j(t.CULL_FACE);let _e=P.side===xn;we&&(_e=!_e),V(_e),P.blending===hs&&P.transparent===!1?Ce(Ui):Ce(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const Le=P.stencilWrite;o.setTest(Le),Le&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ue(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?j(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function V(P){S!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),S=P)}function xe(P){P!==w_?(j(t.CULL_FACE),P!==L&&(P===qf?t.cullFace(t.BACK):P===C_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),L=P}function M(P){P!==J&&(q&&t.lineWidth(P),J=P)}function ue(P,we,_e){P?(j(t.POLYGON_OFFSET_FILL),(k!==we||K!==_e)&&(t.polygonOffset(we,_e),k=we,K=_e)):ae(t.POLYGON_OFFSET_FILL)}function re(P){P?j(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function de(P){P===void 0&&(P=t.TEXTURE0+te-1),D!==P&&(t.activeTexture(P),D=P)}function le(P,we,_e){_e===void 0&&(D===null?_e=t.TEXTURE0+te-1:_e=D);let Le=W[_e];Le===void 0&&(Le={type:void 0,texture:void 0},W[_e]=Le),(Le.type!==P||Le.texture!==we)&&(D!==_e&&(t.activeTexture(_e),D=_e),t.bindTexture(P,we||F[P]),Le.type=P,Le.texture=we)}function y(){const P=W[D];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(P){dt("WebGLState:",P)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(P){dt("WebGLState:",P)}}function ne(){try{t.texSubImage2D(...arguments)}catch(P){dt("WebGLState:",P)}}function ie(){try{t.texSubImage3D(...arguments)}catch(P){dt("WebGLState:",P)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(P){dt("WebGLState:",P)}}function Oe(){try{t.compressedTexSubImage3D(...arguments)}catch(P){dt("WebGLState:",P)}}function ce(){try{t.texStorage2D(...arguments)}catch(P){dt("WebGLState:",P)}}function Fe(){try{t.texStorage3D(...arguments)}catch(P){dt("WebGLState:",P)}}function Je(){try{t.texImage2D(...arguments)}catch(P){dt("WebGLState:",P)}}function me(){try{t.texImage3D(...arguments)}catch(P){dt("WebGLState:",P)}}function Me(P){U.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),U.copy(P))}function Ue(P){Z.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),Z.copy(P))}function Be(P,we){let _e=u.get(we);_e===void 0&&(_e=new WeakMap,u.set(we,_e));let Le=_e.get(P);Le===void 0&&(Le=t.getUniformBlockIndex(we,P.name),_e.set(P,Le))}function ye(P,we){const Le=u.get(we).get(P);l.get(we)!==Le&&(t.uniformBlockBinding(we,Le,P.__bindingPointIndex),l.set(we,Le))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,W={},d={},f=new WeakMap,p=[],v=null,_=!1,m=null,h=null,E=null,T=null,A=null,w=null,C=null,R=new rt(0,0,0),z=0,x=!1,S=null,L=null,J=null,k=null,K=null,U.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:ae,bindFramebuffer:B,drawBuffers:ee,useProgram:pe,setBlending:Ce,setMaterial:Ve,setFlipSided:V,setCullFace:xe,setLineWidth:M,setPolygonOffset:ue,setScissorTest:re,activeTexture:de,bindTexture:le,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:N,texImage2D:Je,texImage3D:me,updateUBOMapping:Be,uniformBlockBinding:ye,texStorage2D:ce,texStorage3D:Fe,texSubImage2D:ne,texSubImage3D:ie,compressedTexSubImage2D:Q,compressedTexSubImage3D:Oe,scissor:Me,viewport:Ue,reset:nt}}function wS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new mt,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,g){return p?new OffscreenCanvas(y,g):Bo("canvas")}function _(y,g,N){let ne=1;const ie=le(y);if((ie.width>N||ie.height>N)&&(ne=N/Math.max(ie.width,ie.height)),ne<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Q=Math.floor(ne*ie.width),Oe=Math.floor(ne*ie.height);d===void 0&&(d=v(Q,Oe));const ce=g?v(Q,Oe):d;return ce.width=Q,ce.height=Oe,ce.getContext("2d").drawImage(y,0,0,Q,Oe),Ze("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Oe+")."),ce}else return"data"in y&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),y;return y}function m(y){return y.generateMipmaps}function h(y){t.generateMipmap(y)}function E(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(y,g,N,ne,ie=!1){if(y!==null){if(t[y]!==void 0)return t[y];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Q=g;if(g===t.RED&&(N===t.FLOAT&&(Q=t.R32F),N===t.HALF_FLOAT&&(Q=t.R16F),N===t.UNSIGNED_BYTE&&(Q=t.R8)),g===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.R8UI),N===t.UNSIGNED_SHORT&&(Q=t.R16UI),N===t.UNSIGNED_INT&&(Q=t.R32UI),N===t.BYTE&&(Q=t.R8I),N===t.SHORT&&(Q=t.R16I),N===t.INT&&(Q=t.R32I)),g===t.RG&&(N===t.FLOAT&&(Q=t.RG32F),N===t.HALF_FLOAT&&(Q=t.RG16F),N===t.UNSIGNED_BYTE&&(Q=t.RG8)),g===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.RG8UI),N===t.UNSIGNED_SHORT&&(Q=t.RG16UI),N===t.UNSIGNED_INT&&(Q=t.RG32UI),N===t.BYTE&&(Q=t.RG8I),N===t.SHORT&&(Q=t.RG16I),N===t.INT&&(Q=t.RG32I)),g===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),N===t.UNSIGNED_INT&&(Q=t.RGB32UI),N===t.BYTE&&(Q=t.RGB8I),N===t.SHORT&&(Q=t.RGB16I),N===t.INT&&(Q=t.RGB32I)),g===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),N===t.UNSIGNED_INT&&(Q=t.RGBA32UI),N===t.BYTE&&(Q=t.RGBA8I),N===t.SHORT&&(Q=t.RGBA16I),N===t.INT&&(Q=t.RGBA32I)),g===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),g===t.RGBA){const Oe=ie?Uo:lt.getTransfer(ne);N===t.FLOAT&&(Q=t.RGBA32F),N===t.HALF_FLOAT&&(Q=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Q=Oe===_t?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function A(y,g){let N;return y?g===null||g===xi||g===Ea?N=t.DEPTH24_STENCIL8:g===fi?N=t.DEPTH32F_STENCIL8:g===Ma&&(N=t.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xi||g===Ea?N=t.DEPTH_COMPONENT24:g===fi?N=t.DEPTH_COMPONENT32F:g===Ma&&(N=t.DEPTH_COMPONENT16),N}function w(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Qt&&y.minFilter!==an?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function C(y){const g=y.target;g.removeEventListener("dispose",C),z(g),g.isVideoTexture&&c.delete(g)}function R(y){const g=y.target;g.removeEventListener("dispose",R),S(g)}function z(y){const g=i.get(y);if(g.__webglInit===void 0)return;const N=y.source,ne=f.get(N);if(ne){const ie=ne[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&x(y),Object.keys(ne).length===0&&f.delete(N)}i.remove(y)}function x(y){const g=i.get(y);t.deleteTexture(g.__webglTexture);const N=y.source,ne=f.get(N);delete ne[g.__cacheKey],a.memory.textures--}function S(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(g.__webglFramebuffer[ne]))for(let ie=0;ie<g.__webglFramebuffer[ne].length;ie++)t.deleteFramebuffer(g.__webglFramebuffer[ne][ie]);else t.deleteFramebuffer(g.__webglFramebuffer[ne]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[ne])}else{if(Array.isArray(g.__webglFramebuffer))for(let ne=0;ne<g.__webglFramebuffer.length;ne++)t.deleteFramebuffer(g.__webglFramebuffer[ne]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let ne=0;ne<g.__webglColorRenderbuffer.length;ne++)g.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[ne]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=y.textures;for(let ne=0,ie=N.length;ne<ie;ne++){const Q=i.get(N[ne]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(N[ne])}i.remove(y)}let L=0;function J(){L=0}function k(){const y=L;return y>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),L+=1,y}function K(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function te(y,g){const N=i.get(y);if(y.isVideoTexture&&re(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&N.__version!==y.version){const ne=y.image;if(ne===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{F(N,y,g);return}}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+g)}function q(y,g){const N=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){F(N,y,g);return}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+g)}function Y(y,g){const N=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){F(N,y,g);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+g)}function se(y,g){const N=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&N.__version!==y.version){j(N,y,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+g)}const D={[ec]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[tc]:t.MIRRORED_REPEAT},W={[Qt]:t.NEAREST,[J_]:t.NEAREST_MIPMAP_NEAREST,[Wa]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[zl]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},$={[e1]:t.NEVER,[s1]:t.ALWAYS,[t1]:t.LESS,[Sd]:t.LEQUAL,[n1]:t.EQUAL,[yd]:t.GEQUAL,[i1]:t.GREATER,[r1]:t.NOTEQUAL};function ve(y,g){if(g.type===fi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===an||g.magFilter===zl||g.magFilter===Wa||g.magFilter===wr||g.minFilter===an||g.minFilter===zl||g.minFilter===Wa||g.minFilter===wr)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,D[g.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,D[g.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,D[g.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,W[g.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,W[g.minFilter]),g.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,$[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Qt||g.minFilter!==Wa&&g.minFilter!==wr||g.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function U(y,g){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",C));const ne=g.source;let ie=f.get(ne);ie===void 0&&(ie={},f.set(ne,ie));const Q=K(g);if(Q!==y.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),ie[Q].usedTimes++;const Oe=ie[y.__cacheKey];Oe!==void 0&&(ie[y.__cacheKey].usedTimes--,Oe.usedTimes===0&&x(g)),y.__cacheKey=Q,y.__webglTexture=ie[Q].texture}return N}function Z(y,g,N){return Math.floor(Math.floor(y/N)/g)}function he(y,g,N,ne){const Q=y.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,N,ne,g.data);else{Q.sort((me,Me)=>me.start-Me.start);let Oe=0;for(let me=1;me<Q.length;me++){const Me=Q[Oe],Ue=Q[me],Be=Me.start+Me.count,ye=Z(Ue.start,g.width,4),nt=Z(Me.start,g.width,4);Ue.start<=Be+1&&ye===nt&&Z(Ue.start+Ue.count-1,g.width,4)===ye?Me.count=Math.max(Me.count,Ue.start+Ue.count-Me.start):(++Oe,Q[Oe]=Ue)}Q.length=Oe+1;const ce=t.getParameter(t.UNPACK_ROW_LENGTH),Fe=t.getParameter(t.UNPACK_SKIP_PIXELS),Je=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let me=0,Me=Q.length;me<Me;me++){const Ue=Q[me],Be=Math.floor(Ue.start/4),ye=Math.ceil(Ue.count/4),nt=Be%g.width,P=Math.floor(Be/g.width),we=ye,_e=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,nt,P,we,_e,N,ne,g.data)}y.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Je)}}function F(y,g,N){let ne=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ne=t.TEXTURE_3D);const ie=U(y,g),Q=g.source;n.bindTexture(ne,y.__webglTexture,t.TEXTURE0+N);const Oe=i.get(Q);if(Q.version!==Oe.__version||ie===!0){n.activeTexture(t.TEXTURE0+N);const ce=lt.getPrimaries(lt.workingColorSpace),Fe=g.colorSpace===rr?null:lt.getPrimaries(g.colorSpace),Je=g.colorSpace===rr||ce===Fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let me=_(g.image,!1,r.maxTextureSize);me=de(g,me);const Me=s.convert(g.format,g.colorSpace),Ue=s.convert(g.type);let Be=T(g.internalFormat,Me,Ue,g.colorSpace,g.isVideoTexture);ve(ne,g);let ye;const nt=g.mipmaps,P=g.isVideoTexture!==!0,we=Oe.__version===void 0||ie===!0,_e=Q.dataReady,Le=w(g,me);if(g.isDepthTexture)Be=A(g.format===Cr,g.type),we&&(P?n.texStorage2D(t.TEXTURE_2D,1,Be,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,Be,me.width,me.height,0,Me,Ue,null));else if(g.isDataTexture)if(nt.length>0){P&&we&&n.texStorage2D(t.TEXTURE_2D,Le,Be,nt[0].width,nt[0].height);for(let fe=0,oe=nt.length;fe<oe;fe++)ye=nt[fe],P?_e&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,ye.width,ye.height,Me,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,fe,Be,ye.width,ye.height,0,Me,Ue,ye.data);g.generateMipmaps=!1}else P?(we&&n.texStorage2D(t.TEXTURE_2D,Le,Be,me.width,me.height),_e&&he(g,me,Me,Ue)):n.texImage2D(t.TEXTURE_2D,0,Be,me.width,me.height,0,Me,Ue,me.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,Be,nt[0].width,nt[0].height,me.depth);for(let fe=0,oe=nt.length;fe<oe;fe++)if(ye=nt[fe],g.format!==ei)if(Me!==null)if(P){if(_e)if(g.layerUpdates.size>0){const Se=hh(ye.width,ye.height,g.format,g.type);for(const Ke of g.layerUpdates){const Et=ye.data.subarray(Ke*Se/ye.data.BYTES_PER_ELEMENT,(Ke+1)*Se/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,Ke,ye.width,ye.height,1,Me,Et)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,ye.width,ye.height,me.depth,Me,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,Be,ye.width,ye.height,me.depth,0,ye.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?_e&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,ye.width,ye.height,me.depth,Me,Ue,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,Be,ye.width,ye.height,me.depth,0,Me,Ue,ye.data)}else{P&&we&&n.texStorage2D(t.TEXTURE_2D,Le,Be,nt[0].width,nt[0].height);for(let fe=0,oe=nt.length;fe<oe;fe++)ye=nt[fe],g.format!==ei?Me!==null?P?_e&&n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,ye.width,ye.height,Me,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,Be,ye.width,ye.height,0,ye.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?_e&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,ye.width,ye.height,Me,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,fe,Be,ye.width,ye.height,0,Me,Ue,ye.data)}else if(g.isDataArrayTexture)if(P){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,Be,me.width,me.height,me.depth),_e)if(g.layerUpdates.size>0){const fe=hh(me.width,me.height,g.format,g.type);for(const oe of g.layerUpdates){const Se=me.data.subarray(oe*fe/me.data.BYTES_PER_ELEMENT,(oe+1)*fe/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,me.width,me.height,1,Me,Ue,Se)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Me,Ue,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Be,me.width,me.height,me.depth,0,Me,Ue,me.data);else if(g.isData3DTexture)P?(we&&n.texStorage3D(t.TEXTURE_3D,Le,Be,me.width,me.height,me.depth),_e&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Me,Ue,me.data)):n.texImage3D(t.TEXTURE_3D,0,Be,me.width,me.height,me.depth,0,Me,Ue,me.data);else if(g.isFramebufferTexture){if(we)if(P)n.texStorage2D(t.TEXTURE_2D,Le,Be,me.width,me.height);else{let fe=me.width,oe=me.height;for(let Se=0;Se<Le;Se++)n.texImage2D(t.TEXTURE_2D,Se,Be,fe,oe,0,Me,Ue,null),fe>>=1,oe>>=1}}else if(nt.length>0){if(P&&we){const fe=le(nt[0]);n.texStorage2D(t.TEXTURE_2D,Le,Be,fe.width,fe.height)}for(let fe=0,oe=nt.length;fe<oe;fe++)ye=nt[fe],P?_e&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Me,Ue,ye):n.texImage2D(t.TEXTURE_2D,fe,Be,Me,Ue,ye);g.generateMipmaps=!1}else if(P){if(we){const fe=le(me);n.texStorage2D(t.TEXTURE_2D,Le,Be,fe.width,fe.height)}_e&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Ue,me)}else n.texImage2D(t.TEXTURE_2D,0,Be,Me,Ue,me);m(g)&&h(ne),Oe.__version=Q.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function j(y,g,N){if(g.image.length!==6)return;const ne=U(y,g),ie=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+N);const Q=i.get(ie);if(ie.version!==Q.__version||ne===!0){n.activeTexture(t.TEXTURE0+N);const Oe=lt.getPrimaries(lt.workingColorSpace),ce=g.colorSpace===rr?null:lt.getPrimaries(g.colorSpace),Fe=g.colorSpace===rr||Oe===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Je=g.isCompressedTexture||g.image[0].isCompressedTexture,me=g.image[0]&&g.image[0].isDataTexture,Me=[];for(let oe=0;oe<6;oe++)!Je&&!me?Me[oe]=_(g.image[oe],!0,r.maxCubemapSize):Me[oe]=me?g.image[oe].image:g.image[oe],Me[oe]=de(g,Me[oe]);const Ue=Me[0],Be=s.convert(g.format,g.colorSpace),ye=s.convert(g.type),nt=T(g.internalFormat,Be,ye,g.colorSpace),P=g.isVideoTexture!==!0,we=Q.__version===void 0||ne===!0,_e=ie.dataReady;let Le=w(g,Ue);ve(t.TEXTURE_CUBE_MAP,g);let fe;if(Je){P&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,nt,Ue.width,Ue.height);for(let oe=0;oe<6;oe++){fe=Me[oe].mipmaps;for(let Se=0;Se<fe.length;Se++){const Ke=fe[Se];g.format!==ei?Be!==null?P?_e&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Ke.width,Ke.height,Be,Ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,nt,Ke.width,Ke.height,0,Ke.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,0,0,Ke.width,Ke.height,Be,ye,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se,nt,Ke.width,Ke.height,0,Be,ye,Ke.data)}}}else{if(fe=g.mipmaps,P&&we){fe.length>0&&Le++;const oe=le(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,nt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){P?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Me[oe].width,Me[oe].height,Be,ye,Me[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,nt,Me[oe].width,Me[oe].height,0,Be,ye,Me[oe].data);for(let Se=0;Se<fe.length;Se++){const Et=fe[Se].image[oe].image;P?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Et.width,Et.height,Be,ye,Et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,nt,Et.width,Et.height,0,Be,ye,Et.data)}}else{P?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Be,ye,Me[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,nt,Be,ye,Me[oe]);for(let Se=0;Se<fe.length;Se++){const Ke=fe[Se];P?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,0,0,Be,ye,Ke.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se+1,nt,Be,ye,Ke.image[oe])}}}m(g)&&h(t.TEXTURE_CUBE_MAP),Q.__version=ie.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ae(y,g,N,ne,ie,Q){const Oe=s.convert(N.format,N.colorSpace),ce=s.convert(N.type),Fe=T(N.internalFormat,Oe,ce,N.colorSpace),Je=i.get(g),me=i.get(N);if(me.__renderTarget=g,!Je.__hasExternalTextures){const Me=Math.max(1,g.width>>Q),Ue=Math.max(1,g.height>>Q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Q,Fe,Me,Ue,g.depth,0,Oe,ce,null):n.texImage2D(ie,Q,Fe,Me,Ue,0,Oe,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),ue(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ie,me.__webglTexture,0,M(g)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ie,me.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function B(y,g,N){if(t.bindRenderbuffer(t.RENDERBUFFER,y),g.depthBuffer){const ne=g.depthTexture,ie=ne&&ne.isDepthTexture?ne.type:null,Q=A(g.stencilBuffer,ie),Oe=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ue(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,M(g),Q,g.width,g.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,M(g),Q,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Q,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Oe,t.RENDERBUFFER,y)}else{const ne=g.textures;for(let ie=0;ie<ne.length;ie++){const Q=ne[ie],Oe=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),Fe=T(Q.internalFormat,Oe,ce,Q.colorSpace);ue(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,M(g),Fe,g.width,g.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,M(g),Fe,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Fe,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ee(y,g,N){const ne=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(g.depthTexture);if(ie.__renderTarget=g,(!ie.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ne){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),ie.__webglTexture===void 0){ie.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),ve(t.TEXTURE_CUBE_MAP,g.depthTexture);const Je=s.convert(g.depthTexture.format),me=s.convert(g.depthTexture.type);let Me;g.depthTexture.format===Vi?Me=t.DEPTH_COMPONENT24:g.depthTexture.format===Cr&&(Me=t.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Me,g.width,g.height,0,Je,me,null)}}else te(g.depthTexture,0);const Q=ie.__webglTexture,Oe=M(g),ce=ne?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Fe=g.depthTexture.format===Cr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vi)ue(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Fe,ce,Q,0,Oe):t.framebufferTexture2D(t.FRAMEBUFFER,Fe,ce,Q,0);else if(g.depthTexture.format===Cr)ue(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Fe,ce,Q,0,Oe):t.framebufferTexture2D(t.FRAMEBUFFER,Fe,ce,Q,0);else throw new Error("Unknown depthTexture format")}function pe(y){const g=i.get(y),N=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const ne=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),ne){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ne.removeEventListener("dispose",ie)};ne.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=ne}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let ne=0;ne<6;ne++)ee(g.__webglFramebuffer[ne],y,ne);else{const ne=y.texture.mipmaps;ne&&ne.length>0?ee(g.__webglFramebuffer[0],y,0):ee(g.__webglFramebuffer,y,0)}else if(N){g.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[ne]),g.__webglDepthbuffer[ne]===void 0)g.__webglDepthbuffer[ne]=t.createRenderbuffer(),B(g.__webglDepthbuffer[ne],y,!1);else{const ie=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=g.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}else{const ne=y.texture.mipmaps;if(ne&&ne.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),B(g.__webglDepthbuffer,y,!1);else{const ie=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(y,g,N){const ne=i.get(y);g!==void 0&&ae(ne.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&pe(y)}function be(y){const g=y.texture,N=i.get(y),ne=i.get(g);y.addEventListener("dispose",R);const ie=y.textures,Q=y.isWebGLCubeRenderTarget===!0,Oe=ie.length>1;if(Oe||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=g.version,a.memory.textures++),Q){N.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ce]=[];for(let Fe=0;Fe<g.mipmaps.length;Fe++)N.__webglFramebuffer[ce][Fe]=t.createFramebuffer()}else N.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)N.__webglFramebuffer[ce]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(Oe)for(let ce=0,Fe=ie.length;ce<Fe;ce++){const Je=i.get(ie[ce]);Je.__webglTexture===void 0&&(Je.__webglTexture=t.createTexture(),a.memory.textures++)}if(y.samples>0&&ue(y)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const Fe=ie[ce];N.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);const Je=s.convert(Fe.format,Fe.colorSpace),me=s.convert(Fe.type),Me=T(Fe.internalFormat,Je,me,Fe.colorSpace,y.isXRRenderTarget===!0),Ue=M(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Me,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),B(N.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),ve(t.TEXTURE_CUBE_MAP,g);for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let Fe=0;Fe<g.mipmaps.length;Fe++)ae(N.__webglFramebuffer[ce][Fe],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe);else ae(N.__webglFramebuffer[ce],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(g)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let ce=0,Fe=ie.length;ce<Fe;ce++){const Je=ie[ce],me=i.get(Je);let Me=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Me=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,me.__webglTexture),ve(Me,Je),ae(N.__webglFramebuffer,y,Je,t.COLOR_ATTACHMENT0+ce,Me,0),m(Je)&&h(Me)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ce=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ne.__webglTexture),ve(ce,g),g.mipmaps&&g.mipmaps.length>0)for(let Fe=0;Fe<g.mipmaps.length;Fe++)ae(N.__webglFramebuffer[Fe],y,g,t.COLOR_ATTACHMENT0,ce,Fe);else ae(N.__webglFramebuffer,y,g,t.COLOR_ATTACHMENT0,ce,0);m(g)&&h(ce),n.unbindTexture()}y.depthBuffer&&pe(y)}function Ce(y){const g=y.textures;for(let N=0,ne=g.length;N<ne;N++){const ie=g[N];if(m(ie)){const Q=E(y),Oe=i.get(ie).__webglTexture;n.bindTexture(Q,Oe),h(Q),n.unbindTexture()}}}const Ve=[],V=[];function xe(y){if(y.samples>0){if(ue(y)===!1){const g=y.textures,N=y.width,ne=y.height;let ie=t.COLOR_BUFFER_BIT;const Q=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Oe=i.get(y),ce=g.length>1;if(ce)for(let Je=0;Je<g.length;Je++)n.bindFramebuffer(t.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Je,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Je,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Fe=y.texture.mipmaps;Fe&&Fe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Je=0;Je<g.length;Je++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Oe.__webglColorRenderbuffer[Je]);const me=i.get(g[Je]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,N,ne,0,0,N,ne,ie,t.NEAREST),l===!0&&(Ve.length=0,V.length=0,Ve.push(t.COLOR_ATTACHMENT0+Je),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Ve.push(Q),V.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,V)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Je=0;Je<g.length;Je++){n.bindFramebuffer(t.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Je,t.RENDERBUFFER,Oe.__webglColorRenderbuffer[Je]);const me=i.get(g[Je]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Je,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function M(y){return Math.min(r.maxSamples,y.samples)}function ue(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function re(y){const g=a.render.frame;c.get(y)!==g&&(c.set(y,g),y.update())}function de(y,g){const N=y.colorSpace,ne=y.format,ie=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==As&&N!==rr&&(lt.getTransfer(N)===_t?(ne!==ei||ie!==Hn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",N)),g}function le(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(u.width=y.naturalWidth||y.width,u.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(u.width=y.displayWidth,u.height=y.displayHeight):(u.width=y.width,u.height=y.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=J,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=se,this.rebindTextures=Re,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function CS(t,e){function n(i,r=rr){let s;const a=lt.getTransfer(r);if(i===Hn)return t.UNSIGNED_BYTE;if(i===gd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jm)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===qm)return t.BYTE;if(i===Gm)return t.SHORT;if(i===Ma)return t.UNSIGNED_SHORT;if(i===md)return t.INT;if(i===xi)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===zi)return t.HALF_FLOAT;if(i===$m)return t.ALPHA;if(i===Wm)return t.RGB;if(i===ei)return t.RGBA;if(i===Vi)return t.DEPTH_COMPONENT;if(i===Cr)return t.DEPTH_STENCIL;if(i===Xm)return t.RED;if(i===_d)return t.RED_INTEGER;if(i===Ts)return t.RG;if(i===xd)return t.RG_INTEGER;if(i===bd)return t.RGBA_INTEGER;if(i===To||i===Ao||i===wo||i===Co)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===rc||i===sc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ac||i===oc||i===lc||i===uc||i===cc||i===dc||i===fc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ac||i===oc)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===uc)return s.COMPRESSED_R11_EAC;if(i===cc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===dc)return s.COMPRESSED_RG11_EAC;if(i===fc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hc||i===pc||i===mc||i===gc||i===vc||i===_c||i===xc||i===bc||i===Sc||i===yc||i===Mc||i===Ec||i===Tc||i===Ac)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_c)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ec)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ac)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wc||i===Cc||i===Rc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wc)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lc||i===Pc||i===Dc||i===Nc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ea?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const RS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LS=`
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

}`;class PS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ag(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ni({vertexShader:RS,fragmentShader:LS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bi(new Fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DS extends zs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,v=null;const _=typeof XRWebGLBinding<"u",m=new PS,h={},E=n.getContextAttributes();let T=null,A=null;const w=[],C=[],R=new mt;let z=null;const x=new Zn;x.viewport=new Ut;const S=new Zn;S.viewport=new Ut;const L=[x,S],J=new q1;let k=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let j=w[F];return j===void 0&&(j=new uu,w[F]=j),j.getTargetRaySpace()},this.getControllerGrip=function(F){let j=w[F];return j===void 0&&(j=new uu,w[F]=j),j.getGripSpace()},this.getHand=function(F){let j=w[F];return j===void 0&&(j=new uu,w[F]=j),j.getHandSpace()};function te(F){const j=C.indexOf(F.inputSource);if(j===-1)return;const ae=w[j];ae!==void 0&&(ae.update(F.inputSource,F.frame,u||a),ae.dispatchEvent({type:F.type,data:F.inputSource}))}function q(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Y);for(let F=0;F<w.length;F++){const j=C[F];j!==null&&(C[F]=null,w[F].disconnect(j))}k=null,K=null,m.reset();for(const F in h)delete h[F];e.setRenderTarget(T),p=null,f=null,d=null,r=null,A=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(F){u=F},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Y),E.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,B=null,ee=null;E.depth&&(ee=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=E.stencil?Cr:Vi,B=E.stencil?Ea:xi);const pe={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new gi(f.textureWidth,f.textureHeight,{format:ei,type:Hn,depthTexture:new Aa(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new gi(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(F){for(let j=0;j<F.removed.length;j++){const ae=F.removed[j],B=C.indexOf(ae);B>=0&&(C[B]=null,w[B].disconnect(ae))}for(let j=0;j<F.added.length;j++){const ae=F.added[j];let B=C.indexOf(ae);if(B===-1){for(let pe=0;pe<w.length;pe++)if(pe>=C.length){C.push(ae),B=pe;break}else if(C[pe]===null){C[pe]=ae,B=pe;break}if(B===-1)break}const ee=w[B];ee&&ee.connect(ae)}}const se=new H,D=new H;function W(F,j,ae){se.setFromMatrixPosition(j.matrixWorld),D.setFromMatrixPosition(ae.matrixWorld);const B=se.distanceTo(D),ee=j.projectionMatrix.elements,pe=ae.projectionMatrix.elements,Re=ee[14]/(ee[10]-1),be=ee[14]/(ee[10]+1),Ce=(ee[9]+1)/ee[5],Ve=(ee[9]-1)/ee[5],V=(ee[8]-1)/ee[0],xe=(pe[8]+1)/pe[0],M=Re*V,ue=Re*xe,re=B/(-V+xe),de=re*-V;if(j.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(de),F.translateZ(re),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ee[10]===-1)F.projectionMatrix.copy(j.projectionMatrix),F.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const le=Re+re,y=be+re,g=M-de,N=ue+(B-de),ne=Ce*be/y*le,ie=Ve*be/y*le;F.projectionMatrix.makePerspective(g,N,ne,ie,le,y),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function $(F,j){j===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(j.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let j=F.near,ae=F.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),J.near=S.near=x.near=j,J.far=S.far=x.far=ae,(k!==J.near||K!==J.far)&&(r.updateRenderState({depthNear:J.near,depthFar:J.far}),k=J.near,K=J.far),J.layers.mask=F.layers.mask|6,x.layers.mask=J.layers.mask&3,S.layers.mask=J.layers.mask&5;const B=F.parent,ee=J.cameras;$(J,B);for(let pe=0;pe<ee.length;pe++)$(ee[pe],B);ee.length===2?W(J,x,S):J.projectionMatrix.copy(x.projectionMatrix),ve(F,J,B)};function ve(F,j,ae){ae===null?F.matrix.copy(j.matrixWorld):(F.matrix.copy(ae.matrixWorld),F.matrix.invert(),F.matrix.multiply(j.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(j.projectionMatrix),F.projectionMatrixInverse.copy(j.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Ic*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(J)},this.getCameraTexture=function(F){return h[F]};let U=null;function Z(F,j){if(c=j.getViewerPose(u||a),v=j,c!==null){const ae=c.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let B=!1;ae.length!==J.cameras.length&&(J.cameras.length=0,B=!0);for(let be=0;be<ae.length;be++){const Ce=ae[be];let Ve=null;if(p!==null)Ve=p.getViewport(Ce);else{const xe=d.getViewSubImage(f,Ce);Ve=xe.viewport,be===0&&(e.setRenderTargetTextures(A,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(A))}let V=L[be];V===void 0&&(V=new Zn,V.layers.enable(be),V.viewport=new Ut,L[be]=V),V.matrix.fromArray(Ce.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Ce.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),be===0&&(J.matrix.copy(V.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),B===!0&&J.cameras.push(V)}const ee=r.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const be=d.getDepthInformation(ae[0]);be&&be.isValid&&be.texture&&m.init(be,r.renderState)}if(ee&&ee.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let be=0;be<ae.length;be++){const Ce=ae[be].camera;if(Ce){let Ve=h[Ce];Ve||(Ve=new ag,h[Ce]=Ve);const V=d.getCameraImage(Ce);Ve.sourceTexture=V}}}}for(let ae=0;ae<w.length;ae++){const B=C[ae],ee=w[ae];B!==null&&ee!==void 0&&ee.update(B,j,u||a)}U&&U(F,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),v=null}const he=new lg;he.setAnimationLoop(Z),this.setAnimationLoop=function(F){U=F},this.dispose=function(){}}}const xr=new qi,NS=new qt;function IS(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,ng(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,T,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,A)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,E,T):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===xn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===xn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h),T=E.envMap,A=E.envMapRotation;T&&(m.envMap.value=T,xr.copy(A),xr.x*=-1,xr.y*=-1,xr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.envMapRotation.value.setFromMatrix4(NS.makeRotationFromEuler(xr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=T*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FS(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const A=T.program;i.uniformBlockBinding(E,A)}function u(E,T){let A=r[E.id];A===void 0&&(v(E),A=c(E),r[E.id]=A,E.addEventListener("dispose",m));const w=T.program;i.updateUBOMapping(E,w);const C=e.render.frame;s[E.id]!==C&&(f(E),s[E.id]=C)}function c(E){const T=d();E.__bindingPointIndex=T;const A=t.createBuffer(),w=E.__size,C=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,w,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=r[E.id],A=E.uniforms,w=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let C=0,R=A.length;C<R;C++){const z=Array.isArray(A[C])?A[C]:[A[C]];for(let x=0,S=z.length;x<S;x++){const L=z[x];if(p(L,C,x,w)===!0){const J=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let te=0;te<k.length;te++){const q=k[te],Y=_(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,J+K,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,K),K+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,J,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(E,T,A,w){const C=E.value,R=T+"_"+A;if(w[R]===void 0)return typeof C=="number"||typeof C=="boolean"?w[R]=C:w[R]=C.clone(),!0;{const z=w[R];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return w[R]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function v(E){const T=E.uniforms;let A=0;const w=16;for(let R=0,z=T.length;R<z;R++){const x=Array.isArray(T[R])?T[R]:[T[R]];for(let S=0,L=x.length;S<L;S++){const J=x[S],k=Array.isArray(J.value)?J.value:[J.value];for(let K=0,te=k.length;K<te;K++){const q=k[K],Y=_(q),se=A%w,D=se%Y.boundary,W=se+D;A+=D,W!==0&&w-W<Y.storage&&(A+=w-W),J.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=A,A+=Y.storage}}}const C=A%w;return C>0&&(A+=w-C),E.__size=A,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const E in r)t.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}const US=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function OS(){return oi===null&&(oi=new I1(US,16,16,Ts,zi),oi.name="DFG_LUT",oi.minFilter=an,oi.magFilter=an,oi.wrapS=Fi,oi.wrapT=Fi,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class BS{constructor(e={}){const{canvas:n=a1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Hn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const _=p,m=new Set([bd,xd,_d]),h=new Set([Hn,xi,Ma,Ea,gd,vd]),E=new Uint32Array(4),T=new Int32Array(4);let A=null,w=null;const C=[],R=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=qn;let L=0,J=0,k=null,K=-1,te=null;const q=new Ut,Y=new Ut;let se=null;const D=new rt(0);let W=0,$=n.width,ve=n.height,U=1,Z=null,he=null;const F=new Ut(0,0,$,ve),j=new Ut(0,0,$,ve);let ae=!1;const B=new sg;let ee=!1,pe=!1;const Re=new qt,be=new H,Ce=new Ut,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function xe(){return k===null?U:1}let M=i;function ue(b,I){return n.getContext(b,I)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pd}`),n.addEventListener("webglcontextlost",Ke,!1),n.addEventListener("webglcontextrestored",Et,!1),n.addEventListener("webglcontextcreationerror",gt,!1),M===null){const I="webgl2";if(M=ue(I,b),M===null)throw ue(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw dt("WebGLRenderer: "+b.message),b}let re,de,le,y,g,N,ne,ie,Q,Oe,ce,Fe,Je,me,Me,Ue,Be,ye,nt,P,we,_e,Le,fe;function oe(){re=new O3(M),re.init(),_e=new CS(M,re),de=new C3(M,re,e,_e),le=new AS(M,re),de.reversedDepthBuffer&&f&&le.buffers.depth.setReversed(!0),y=new z3(M),g=new dS,N=new wS(M,re,le,g,de,_e,y),ne=new L3(x),ie=new U3(x),Q=new H1(M),Le=new A3(M,Q),Oe=new B3(M,Q,y,Le),ce=new q3(M,Oe,Q,y),nt=new V3(M,de,N),Ue=new R3(g),Fe=new cS(x,ne,ie,re,de,Le,Ue),Je=new IS(x,g),me=new hS,Me=new xS(re),ye=new T3(x,ne,ie,le,ce,v,l),Be=new ES(x,ce,de),fe=new FS(M,y,de,le),P=new w3(M,re,y),we=new k3(M,re,y),y.programs=Fe.programs,x.capabilities=de,x.extensions=re,x.properties=g,x.renderLists=me,x.shadowMap=Be,x.state=le,x.info=y}oe(),_!==Hn&&(z=new H3(_,n.width,n.height,r,s));const Se=new DS(x,M);this.xr=Se,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize($,ve,!1))},this.getSize=function(b){return b.set($,ve)},this.setSize=function(b,I,X=!0){if(Se.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,ve=I,n.width=Math.floor(b*U),n.height=Math.floor(I*U),X===!0&&(n.style.width=b+"px",n.style.height=I+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set($*U,ve*U).floor()},this.setDrawingBufferSize=function(b,I,X){$=b,ve=I,U=X,n.width=Math.floor(b*X),n.height=Math.floor(I*X),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(_===Hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(q)},this.getViewport=function(b){return b.copy(F)},this.setViewport=function(b,I,X,G){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,I,X,G),le.viewport(q.copy(F).multiplyScalar(U).round())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,I,X,G){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,I,X,G),le.scissor(Y.copy(j).multiplyScalar(U).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){le.setScissorTest(ae=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,X=!0){let G=0;if(b){let O=!1;if(k!==null){const Ee=k.texture.format;O=m.has(Ee)}if(O){const Ee=k.texture.type,Pe=h.has(Ee),Ae=ye.getClearColor(),Ne=ye.getClearAlpha(),qe=Ae.r,Ye=Ae.g,$e=Ae.b;Pe?(E[0]=qe,E[1]=Ye,E[2]=$e,E[3]=Ne,M.clearBufferuiv(M.COLOR,0,E)):(T[0]=qe,T[1]=Ye,T[2]=$e,T[3]=Ne,M.clearBufferiv(M.COLOR,0,T))}else G|=M.COLOR_BUFFER_BIT}I&&(G|=M.DEPTH_BUFFER_BIT),X&&(G|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ke,!1),n.removeEventListener("webglcontextrestored",Et,!1),n.removeEventListener("webglcontextcreationerror",gt,!1),ye.dispose(),me.dispose(),Me.dispose(),g.dispose(),ne.dispose(),ie.dispose(),ce.dispose(),Le.dispose(),fe.dispose(),Fe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ff),Se.removeEventListener("sessionend",Uf),fr.stop()};function Ke(b){b.preventDefault(),Jf("WebGLRenderer: Context Lost."),S=!0}function Et(){Jf("WebGLRenderer: Context Restored."),S=!1;const b=y.autoReset,I=Be.enabled,X=Be.autoUpdate,G=Be.needsUpdate,O=Be.type;oe(),y.autoReset=b,Be.enabled=I,Be.autoUpdate=X,Be.needsUpdate=G,Be.type=O}function gt(b){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ai(b){const I=b.target;I.removeEventListener("dispose",ai),wi(I)}function wi(b){x_(b),g.remove(b)}function x_(b){const I=g.get(b).programs;I!==void 0&&(I.forEach(function(X){Fe.releaseProgram(X)}),b.isShaderMaterial&&Fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,X,G,O,Ee){I===null&&(I=Ve);const Pe=O.isMesh&&O.matrixWorld.determinant()<0,Ae=S_(b,I,X,G,O);le.setMaterial(G,Pe);let Ne=X.index,qe=1;if(G.wireframe===!0){if(Ne=Oe.getWireframeAttribute(X),Ne===void 0)return;qe=2}const Ye=X.drawRange,$e=X.attributes.position;let it=Ye.start*qe,xt=(Ye.start+Ye.count)*qe;Ee!==null&&(it=Math.max(it,Ee.start*qe),xt=Math.min(xt,(Ee.start+Ee.count)*qe)),Ne!==null?(it=Math.max(it,0),xt=Math.min(xt,Ne.count)):$e!=null&&(it=Math.max(it,0),xt=Math.min(xt,$e.count));const It=xt-it;if(It<0||It===1/0)return;Le.setup(O,G,Ae,X,Ne);let Ft,St=P;if(Ne!==null&&(Ft=Q.get(Ne),St=we,St.setIndex(Ft)),O.isMesh)G.wireframe===!0?(le.setLineWidth(G.wireframeLinewidth*xe()),St.setMode(M.LINES)):St.setMode(M.TRIANGLES);else if(O.isLine){let We=G.linewidth;We===void 0&&(We=1),le.setLineWidth(We*xe()),O.isLineSegments?St.setMode(M.LINES):O.isLineLoop?St.setMode(M.LINE_LOOP):St.setMode(M.LINE_STRIP)}else O.isPoints?St.setMode(M.POINTS):O.isSprite&&St.setMode(M.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ta("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))St.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const We=O._multiDrawStarts,vt=O._multiDrawCounts,ct=O._multiDrawCount,Sn=Ne?Q.get(Ne).bytesPerElement:1,Hr=g.get(G).currentProgram.getUniforms();for(let yn=0;yn<ct;yn++)Hr.setValue(M,"_gl_DrawID",yn),St.render(We[yn]/Sn,vt[yn])}else if(O.isInstancedMesh)St.renderInstances(it,It,O.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,vt=Math.min(X.instanceCount,We);St.renderInstances(it,It,vt)}else St.render(it,It)};function If(b,I,X){b.transparent===!0&&b.side===Ni&&b.forceSinglePass===!1?(b.side=xn,b.needsUpdate=!0,$a(b,I,X),b.side=lr,b.needsUpdate=!0,$a(b,I,X),b.side=Ni):$a(b,I,X)}this.compile=function(b,I,X=null){X===null&&(X=b),w=Me.get(X),w.init(I),R.push(w),X.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),b!==X&&b.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),w.setupLights();const G=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const Ee=O.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Ae=Ee[Pe];If(Ae,X,O),G.add(Ae)}else If(Ee,X,O),G.add(Ee)}),w=R.pop(),G},this.compileAsync=function(b,I,X=null){const G=this.compile(b,I,X);return new Promise(O=>{function Ee(){if(G.forEach(function(Pe){g.get(Pe).currentProgram.isReady()&&G.delete(Pe)}),G.size===0){O(b);return}setTimeout(Ee,10)}re.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ol=null;function b_(b){Ol&&Ol(b)}function Ff(){fr.stop()}function Uf(){fr.start()}const fr=new lg;fr.setAnimationLoop(b_),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(b){Ol=b,Se.setAnimationLoop(b),b===null?fr.stop():fr.start()},Se.addEventListener("sessionstart",Ff),Se.addEventListener("sessionend",Uf),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const X=Se.enabled===!0&&Se.isPresenting===!0,G=z!==null&&(k===null||X)&&z.begin(x,k);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(I),I=Se.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,I,k),w=Me.get(b,R.length),w.init(I),R.push(w),Re.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),B.setFromProjectionMatrix(Re,hi,I.reversedDepth),pe=this.localClippingEnabled,ee=Ue.init(this.clippingPlanes,pe),A=me.get(b,C.length),A.init(),C.push(A),Se.enabled===!0&&Se.isPresenting===!0){const Pe=x.xr.getDepthSensingMesh();Pe!==null&&Bl(Pe,I,-1/0,x.sortObjects)}Bl(b,I,0,x.sortObjects),A.finish(),x.sortObjects===!0&&A.sort(Z,he),V=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,V&&ye.addToRenderList(A,b),this.info.render.frame++,ee===!0&&Ue.beginShadows();const O=w.state.shadowsArray;if(Be.render(O,b,I),ee===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&z.hasRenderPass())===!1){const Pe=A.opaque,Ae=A.transmissive;if(w.setupLights(),I.isArrayCamera){const Ne=I.cameras;if(Ae.length>0)for(let qe=0,Ye=Ne.length;qe<Ye;qe++){const $e=Ne[qe];Bf(Pe,Ae,b,$e)}V&&ye.render(b);for(let qe=0,Ye=Ne.length;qe<Ye;qe++){const $e=Ne[qe];Of(A,b,$e,$e.viewport)}}else Ae.length>0&&Bf(Pe,Ae,b,I),V&&ye.render(b),Of(A,b,I)}k!==null&&J===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),G&&z.end(x),b.isScene===!0&&b.onAfterRender(x,b,I),Le.resetDefaultState(),K=-1,te=null,R.pop(),R.length>0?(w=R[R.length-1],ee===!0&&Ue.setGlobalState(x.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?A=C[C.length-1]:A=null};function Bl(b,I,X,G){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||B.intersectsSprite(b)){G&&Ce.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Re);const Pe=ce.update(b),Ae=b.material;Ae.visible&&A.push(b,Pe,Ae,X,Ce.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||B.intersectsObject(b))){const Pe=ce.update(b),Ae=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ce.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ce.copy(Pe.boundingSphere.center)),Ce.applyMatrix4(b.matrixWorld).applyMatrix4(Re)),Array.isArray(Ae)){const Ne=Pe.groups;for(let qe=0,Ye=Ne.length;qe<Ye;qe++){const $e=Ne[qe],it=Ae[$e.materialIndex];it&&it.visible&&A.push(b,Pe,it,X,Ce.z,$e)}}else Ae.visible&&A.push(b,Pe,Ae,X,Ce.z,null)}}const Ee=b.children;for(let Pe=0,Ae=Ee.length;Pe<Ae;Pe++)Bl(Ee[Pe],I,X,G)}function Of(b,I,X,G){const{opaque:O,transmissive:Ee,transparent:Pe}=b;w.setupLightsView(X),ee===!0&&Ue.setGlobalState(x.clippingPlanes,X),G&&le.viewport(q.copy(G)),O.length>0&&ja(O,I,X),Ee.length>0&&ja(Ee,I,X),Pe.length>0&&ja(Pe,I,X),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Bf(b,I,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const it=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new gi(1,1,{generateMipmaps:!0,type:it?zi:Hn,minFilter:wr,samples:de.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Ee=w.state.transmissionRenderTarget[G.id],Pe=G.viewport||q;Ee.setSize(Pe.z*x.transmissionResolutionScale,Pe.w*x.transmissionResolutionScale);const Ae=x.getRenderTarget(),Ne=x.getActiveCubeFace(),qe=x.getActiveMipmapLevel();x.setRenderTarget(Ee),x.getClearColor(D),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),V&&ye.render(X);const Ye=x.toneMapping;x.toneMapping=mi;const $e=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),ee===!0&&Ue.setGlobalState(x.clippingPlanes,G),ja(b,X,G),N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee),re.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let xt=0,It=I.length;xt<It;xt++){const Ft=I[xt],{object:St,geometry:We,material:vt,group:ct}=Ft;if(vt.side===Ni&&St.layers.test(G.layers)){const Sn=vt.side;vt.side=xn,vt.needsUpdate=!0,kf(St,X,G,We,vt,ct),vt.side=Sn,vt.needsUpdate=!0,it=!0}}it===!0&&(N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee))}x.setRenderTarget(Ae,Ne,qe),x.setClearColor(D,W),$e!==void 0&&(G.viewport=$e),x.toneMapping=Ye}function ja(b,I,X){const G=I.isScene===!0?I.overrideMaterial:null;for(let O=0,Ee=b.length;O<Ee;O++){const Pe=b[O],{object:Ae,geometry:Ne,group:qe}=Pe;let Ye=Pe.material;Ye.allowOverride===!0&&G!==null&&(Ye=G),Ae.layers.test(X.layers)&&kf(Ae,I,X,Ne,Ye,qe)}}function kf(b,I,X,G,O,Ee){b.onBeforeRender(x,I,X,G,O,Ee),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(x,I,X,G,b,Ee),O.transparent===!0&&O.side===Ni&&O.forceSinglePass===!1?(O.side=xn,O.needsUpdate=!0,x.renderBufferDirect(X,I,G,O,b,Ee),O.side=lr,O.needsUpdate=!0,x.renderBufferDirect(X,I,G,O,b,Ee),O.side=Ni):x.renderBufferDirect(X,I,G,O,b,Ee),b.onAfterRender(x,I,X,G,O,Ee)}function $a(b,I,X){I.isScene!==!0&&(I=Ve);const G=g.get(b),O=w.state.lights,Ee=w.state.shadowsArray,Pe=O.state.version,Ae=Fe.getParameters(b,O.state,Ee,I,X),Ne=Fe.getProgramCacheKey(Ae);let qe=G.programs;G.environment=b.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(b.isMeshStandardMaterial?ie:ne).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,qe===void 0&&(b.addEventListener("dispose",ai),qe=new Map,G.programs=qe);let Ye=qe.get(Ne);if(Ye!==void 0){if(G.currentProgram===Ye&&G.lightsStateVersion===Pe)return Vf(b,Ae),Ye}else Ae.uniforms=Fe.getUniforms(b),b.onBeforeCompile(Ae,x),Ye=Fe.acquireProgram(Ae,Ne),qe.set(Ne,Ye),G.uniforms=Ae.uniforms;const $e=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($e.clippingPlanes=Ue.uniform),Vf(b,Ae),G.needsLights=M_(b),G.lightsStateVersion=Pe,G.needsLights&&($e.ambientLightColor.value=O.state.ambient,$e.lightProbe.value=O.state.probe,$e.directionalLights.value=O.state.directional,$e.directionalLightShadows.value=O.state.directionalShadow,$e.spotLights.value=O.state.spot,$e.spotLightShadows.value=O.state.spotShadow,$e.rectAreaLights.value=O.state.rectArea,$e.ltc_1.value=O.state.rectAreaLTC1,$e.ltc_2.value=O.state.rectAreaLTC2,$e.pointLights.value=O.state.point,$e.pointLightShadows.value=O.state.pointShadow,$e.hemisphereLights.value=O.state.hemi,$e.directionalShadowMap.value=O.state.directionalShadowMap,$e.directionalShadowMatrix.value=O.state.directionalShadowMatrix,$e.spotShadowMap.value=O.state.spotShadowMap,$e.spotLightMatrix.value=O.state.spotLightMatrix,$e.spotLightMap.value=O.state.spotLightMap,$e.pointShadowMap.value=O.state.pointShadowMap,$e.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ye,G.uniformsList=null,Ye}function zf(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=Ro.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Vf(b,I){const X=g.get(b);X.outputColorSpace=I.outputColorSpace,X.batching=I.batching,X.batchingColor=I.batchingColor,X.instancing=I.instancing,X.instancingColor=I.instancingColor,X.instancingMorph=I.instancingMorph,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function S_(b,I,X,G,O){I.isScene!==!0&&(I=Ve),N.resetTextureUnits();const Ee=I.fog,Pe=G.isMeshStandardMaterial?I.environment:null,Ae=k===null?x.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:As,Ne=(G.isMeshStandardMaterial?ie:ne).get(G.envMap||Pe),qe=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ye=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),$e=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color;let It=mi;G.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(It=x.toneMapping);const Ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,St=Ft!==void 0?Ft.length:0,We=g.get(G),vt=w.state.lights;if(ee===!0&&(pe===!0||b!==te)){const cn=b===te&&G.id===K;Ue.setState(G,b,cn)}let ct=!1;G.version===We.__version?(We.needsLights&&We.lightsStateVersion!==vt.state.version||We.outputColorSpace!==Ae||O.isBatchedMesh&&We.batching===!1||!O.isBatchedMesh&&We.batching===!0||O.isBatchedMesh&&We.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&We.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&We.instancing===!1||!O.isInstancedMesh&&We.instancing===!0||O.isSkinnedMesh&&We.skinning===!1||!O.isSkinnedMesh&&We.skinning===!0||O.isInstancedMesh&&We.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&We.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&We.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&We.instancingMorph===!1&&O.morphTexture!==null||We.envMap!==Ne||G.fog===!0&&We.fog!==Ee||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ue.numPlanes||We.numIntersection!==Ue.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==Ye||We.morphTargets!==$e||We.morphNormals!==it||We.morphColors!==xt||We.toneMapping!==It||We.morphTargetsCount!==St)&&(ct=!0):(ct=!0,We.__version=G.version);let Sn=We.currentProgram;ct===!0&&(Sn=$a(G,I,O));let Hr=!1,yn=!1,na=!1;const Tt=Sn.getUniforms(),mn=We.uniforms;if(le.useProgram(Sn.program)&&(Hr=!0,yn=!0,na=!0),G.id!==K&&(K=G.id,yn=!0),Hr||te!==b){le.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Tt.setValue(M,"projectionMatrix",b.projectionMatrix),Tt.setValue(M,"viewMatrix",b.matrixWorldInverse);const gn=Tt.map.cameraPosition;gn!==void 0&&gn.setValue(M,be.setFromMatrixPosition(b.matrixWorld)),de.logarithmicDepthBuffer&&Tt.setValue(M,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(M,"isOrthographic",b.isOrthographicCamera===!0),te!==b&&(te=b,yn=!0,na=!0)}if(We.needsLights&&(vt.state.directionalShadowMap.length>0&&Tt.setValue(M,"directionalShadowMap",vt.state.directionalShadowMap,N),vt.state.spotShadowMap.length>0&&Tt.setValue(M,"spotShadowMap",vt.state.spotShadowMap,N),vt.state.pointShadowMap.length>0&&Tt.setValue(M,"pointShadowMap",vt.state.pointShadowMap,N)),O.isSkinnedMesh){Tt.setOptional(M,O,"bindMatrix"),Tt.setOptional(M,O,"bindMatrixInverse");const cn=O.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Tt.setValue(M,"boneTexture",cn.boneTexture,N))}O.isBatchedMesh&&(Tt.setOptional(M,O,"batchingTexture"),Tt.setValue(M,"batchingTexture",O._matricesTexture,N),Tt.setOptional(M,O,"batchingIdTexture"),Tt.setValue(M,"batchingIdTexture",O._indirectTexture,N),Tt.setOptional(M,O,"batchingColorTexture"),O._colorsTexture!==null&&Tt.setValue(M,"batchingColorTexture",O._colorsTexture,N));const On=X.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&nt.update(O,X,Sn),(yn||We.receiveShadow!==O.receiveShadow)&&(We.receiveShadow=O.receiveShadow,Tt.setValue(M,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(mn.envMap.value=Ne,mn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(mn.envMapIntensity.value=I.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=OS()),yn&&(Tt.setValue(M,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&y_(mn,na),Ee&&G.fog===!0&&Je.refreshFogUniforms(mn,Ee),Je.refreshMaterialUniforms(mn,G,U,ve,w.state.transmissionRenderTarget[b.id]),Ro.upload(M,zf(We),mn,N)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ro.upload(M,zf(We),mn,N),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(M,"center",O.center),Tt.setValue(M,"modelViewMatrix",O.modelViewMatrix),Tt.setValue(M,"normalMatrix",O.normalMatrix),Tt.setValue(M,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const cn=G.uniformsGroups;for(let gn=0,kl=cn.length;gn<kl;gn++){const hr=cn[gn];fe.update(hr,Sn),fe.bind(hr,Sn)}}return Sn}function y_(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function M_(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,I,X){const G=g.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),g.get(b.texture).__webglTexture=I,g.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){const X=g.get(b);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0};const E_=M.createFramebuffer();this.setRenderTarget=function(b,I=0,X=0){k=b,L=I,J=X;let G=null,O=!1,Ee=!1;if(b){const Ae=g.get(b);if(Ae.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(M.FRAMEBUFFER,Ae.__webglFramebuffer),q.copy(b.viewport),Y.copy(b.scissor),se=b.scissorTest,le.viewport(q),le.scissor(Y),le.setScissorTest(se),K=-1;return}else if(Ae.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(Ae.__hasExternalTextures)N.rebindTextures(b,g.get(b.texture).__webglTexture,g.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ye=b.depthTexture;if(Ae.__boundDepthTexture!==Ye){if(Ye!==null&&g.has(Ye)&&(b.width!==Ye.image.width||b.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ee=!0);const qe=g.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qe[I])?G=qe[I][X]:G=qe[I],O=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?G=g.get(b).__webglMultisampledFramebuffer:Array.isArray(qe)?G=qe[X]:G=qe,q.copy(b.viewport),Y.copy(b.scissor),se=b.scissorTest}else q.copy(F).multiplyScalar(U).floor(),Y.copy(j).multiplyScalar(U).floor(),se=ae;if(X!==0&&(G=E_),le.bindFramebuffer(M.FRAMEBUFFER,G)&&le.drawBuffers(b,G),le.viewport(q),le.scissor(Y),le.setScissorTest(se),O){const Ae=g.get(b.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,X)}else if(Ee){const Ae=I;for(let Ne=0;Ne<b.textures.length;Ne++){const qe=g.get(b.textures[Ne]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+Ne,qe.__webglTexture,X,Ae)}}else if(b!==null&&X!==0){const Ae=g.get(b.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ae.__webglTexture,X)}K=-1},this.readRenderTargetPixels=function(b,I,X,G,O,Ee,Pe,Ae=0){if(!(b&&b.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=g.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){le.bindFramebuffer(M.FRAMEBUFFER,Ne);try{const qe=b.textures[Ae],Ye=qe.format,$e=qe.type;if(!de.textureFormatReadable(Ye)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable($e)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-G&&X>=0&&X<=b.height-O&&(b.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Ae),M.readPixels(I,X,G,O,_e.convert(Ye),_e.convert($e),Ee))}finally{const qe=k!==null?g.get(k).__webglFramebuffer:null;le.bindFramebuffer(M.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(b,I,X,G,O,Ee,Pe,Ae=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=g.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne)if(I>=0&&I<=b.width-G&&X>=0&&X<=b.height-O){le.bindFramebuffer(M.FRAMEBUFFER,Ne);const qe=b.textures[Ae],Ye=qe.format,$e=qe.type;if(!de.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,it),M.bufferData(M.PIXEL_PACK_BUFFER,Ee.byteLength,M.STREAM_READ),b.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Ae),M.readPixels(I,X,G,O,_e.convert(Ye),_e.convert($e),0);const xt=k!==null?g.get(k).__webglFramebuffer:null;le.bindFramebuffer(M.FRAMEBUFFER,xt);const It=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await o1(M,It,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,it),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,Ee),M.deleteBuffer(it),M.deleteSync(It),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,X=0){const G=Math.pow(2,-X),O=Math.floor(b.image.width*G),Ee=Math.floor(b.image.height*G),Pe=I!==null?I.x:0,Ae=I!==null?I.y:0;N.setTexture2D(b,0),M.copyTexSubImage2D(M.TEXTURE_2D,X,0,0,Pe,Ae,O,Ee),le.unbindTexture()};const T_=M.createFramebuffer(),A_=M.createFramebuffer();this.copyTextureToTexture=function(b,I,X=null,G=null,O=0,Ee=null){Ee===null&&(O!==0?(Ta("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=O,O=0):Ee=0);let Pe,Ae,Ne,qe,Ye,$e,it,xt,It;const Ft=b.isCompressedTexture?b.mipmaps[Ee]:b.image;if(X!==null)Pe=X.max.x-X.min.x,Ae=X.max.y-X.min.y,Ne=X.isBox3?X.max.z-X.min.z:1,qe=X.min.x,Ye=X.min.y,$e=X.isBox3?X.min.z:0;else{const On=Math.pow(2,-O);Pe=Math.floor(Ft.width*On),Ae=Math.floor(Ft.height*On),b.isDataArrayTexture?Ne=Ft.depth:b.isData3DTexture?Ne=Math.floor(Ft.depth*On):Ne=1,qe=0,Ye=0,$e=0}G!==null?(it=G.x,xt=G.y,It=G.z):(it=0,xt=0,It=0);const St=_e.convert(I.format),We=_e.convert(I.type);let vt;I.isData3DTexture?(N.setTexture3D(I,0),vt=M.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(N.setTexture2DArray(I,0),vt=M.TEXTURE_2D_ARRAY):(N.setTexture2D(I,0),vt=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,I.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,I.unpackAlignment);const ct=M.getParameter(M.UNPACK_ROW_LENGTH),Sn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Hr=M.getParameter(M.UNPACK_SKIP_PIXELS),yn=M.getParameter(M.UNPACK_SKIP_ROWS),na=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Ft.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Ft.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,qe),M.pixelStorei(M.UNPACK_SKIP_ROWS,Ye),M.pixelStorei(M.UNPACK_SKIP_IMAGES,$e);const Tt=b.isDataArrayTexture||b.isData3DTexture,mn=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){const On=g.get(b),cn=g.get(I),gn=g.get(On.__renderTarget),kl=g.get(cn.__renderTarget);le.bindFramebuffer(M.READ_FRAMEBUFFER,gn.__webglFramebuffer),le.bindFramebuffer(M.DRAW_FRAMEBUFFER,kl.__webglFramebuffer);for(let hr=0;hr<Ne;hr++)Tt&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,g.get(b).__webglTexture,O,$e+hr),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,g.get(I).__webglTexture,Ee,It+hr)),M.blitFramebuffer(qe,Ye,Pe,Ae,it,xt,Pe,Ae,M.DEPTH_BUFFER_BIT,M.NEAREST);le.bindFramebuffer(M.READ_FRAMEBUFFER,null),le.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(O!==0||b.isRenderTargetTexture||g.has(b)){const On=g.get(b),cn=g.get(I);le.bindFramebuffer(M.READ_FRAMEBUFFER,T_),le.bindFramebuffer(M.DRAW_FRAMEBUFFER,A_);for(let gn=0;gn<Ne;gn++)Tt?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,On.__webglTexture,O,$e+gn):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,On.__webglTexture,O),mn?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,cn.__webglTexture,Ee,It+gn):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,cn.__webglTexture,Ee),O!==0?M.blitFramebuffer(qe,Ye,Pe,Ae,it,xt,Pe,Ae,M.COLOR_BUFFER_BIT,M.NEAREST):mn?M.copyTexSubImage3D(vt,Ee,it,xt,It+gn,qe,Ye,Pe,Ae):M.copyTexSubImage2D(vt,Ee,it,xt,qe,Ye,Pe,Ae);le.bindFramebuffer(M.READ_FRAMEBUFFER,null),le.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else mn?b.isDataTexture||b.isData3DTexture?M.texSubImage3D(vt,Ee,it,xt,It,Pe,Ae,Ne,St,We,Ft.data):I.isCompressedArrayTexture?M.compressedTexSubImage3D(vt,Ee,it,xt,It,Pe,Ae,Ne,St,Ft.data):M.texSubImage3D(vt,Ee,it,xt,It,Pe,Ae,Ne,St,We,Ft):b.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,Ee,it,xt,Pe,Ae,St,We,Ft.data):b.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,Ee,it,xt,Ft.width,Ft.height,St,Ft.data):M.texSubImage2D(M.TEXTURE_2D,Ee,it,xt,Pe,Ae,St,We,Ft);M.pixelStorei(M.UNPACK_ROW_LENGTH,ct),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Sn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Hr),M.pixelStorei(M.UNPACK_SKIP_ROWS,yn),M.pixelStorei(M.UNPACK_SKIP_IMAGES,na),Ee===0&&I.generateMipmaps&&M.generateMipmap(vt),le.unbindTexture()},this.initRenderTarget=function(b){g.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),le.unbindTexture()},this.resetState=function(){L=0,J=0,k=null,le.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}const kS=`
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
}`,zS=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;function VS(t){const e=new BS({canvas:t,antialias:!1}),n={uTime:{value:0},uAltitude:{value:.45},uLuminosite:{value:.7},uTurbulence:{value:.2},uNight:{value:0},uAurora:{value:.55},uPulse:{value:0},uPluie:{value:0},uEclair:{value:0},uMeteor:{value:new Ut(0,0,0,0)},uFocus:{value:new mt(.5,.5)},uAspect:{value:1},uTap:{value:new H(.5,.5,999)},uCol1:{value:new rt("#1b2a4a")},uCol2:{value:new rt("#7fa8d9")},uCol3:{value:new rt("#dfefff")}},i={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,pluie:0,col1:new rt("#1b2a4a"),col2:new rt("#7fa8d9"),col3:new rt("#dfefff"),focus:new mt(.5,.5)},r={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,col1:new rt("#1b2a4a"),col2:new rt("#7fa8d9"),col3:new rt("#dfefff"),focus:new mt(.5,.5)};let s=0,a=0,o=999,l=0,u=0;const c={x:0,y:0,age:0,actif:0},d=new ni({vertexShader:zS,fragmentShader:kS,uniforms:n}),f=new bi(new Fa(2,2),d),p=new N1;p.add(f);function v(){e.setSize(window.innerWidth,window.innerHeight,!1),n.uAspect.value=window.innerWidth/Math.max(1,window.innerHeight)}return window.addEventListener("resize",v),v(),{apply(_,m){i.alt=_.altitude,i.lum=_.luminosite,i.turb=_.turbulence,i.night=_.night,i.aurora=_.aurora,i.pluie=_.pluie,i.col1.setStyle(_.palette[0]),i.col2.setStyle(_.palette[1]),i.col3.setStyle(_.palette[2]),m&&i.focus.set(m[0],m[1])},setBpm(_){s=_??0},eclair(){u=1},filer(_,m){c.x=_,c.y=m,c.age=0,c.actif=1},tap(_,m){o=0,n.uTap.value.set(_,m,0)},frame(_){n.uTime.value+=_;const m=1-Math.exp(-_*2.5);r.alt+=(i.alt-r.alt)*m,r.lum+=(i.lum-r.lum)*m,r.turb+=(i.turb-r.turb)*m,r.night+=(i.night-r.night)*m,r.aurora+=(i.aurora-r.aurora)*m,l+=(i.pluie-l)*(1-Math.exp(-_*.8)),u*=Math.exp(-_*2.6),c.actif>0&&(c.age+=_,c.age>1.4&&(c.actif=0)),r.col1.lerp(i.col1,m),r.col2.lerp(i.col2,m),r.col3.lerp(i.col3,m),r.focus.lerp(i.focus,m),a+=_*(s>0?s/60:.2),n.uPulse.value=Math.sin(a*2*Math.PI),o<100&&(o+=_,n.uTap.value.z=o),n.uAltitude.value=r.alt,n.uLuminosite.value=r.lum,n.uTurbulence.value=r.turb,n.uNight.value=r.night,n.uAurora.value=r.aurora,n.uPluie.value=l,n.uEclair.value=u,n.uMeteor.value.set(c.x,c.y,c.age,c.actif),n.uFocus.value.copy(r.focus),n.uCol1.value.copy(r.col1),n.uCol2.value.copy(r.col2),n.uCol3.value.copy(r.col3),e.render(p,new Td)}}}function qS(){return{breath:0,bpm:null,emotion:"calme",timeOfDay:.5,seed:"anonyme"}}const GS={calme:["#1b2a4a","#7fa8d9","#dfefff"],joie:["#2b4a1b","#d9c47f","#fff6df"],tristesse:["#101018","#3a4a6a","#8a9ab0"],tension:["#2a0a0a","#6a2a2a","#c07a5a"]};function hg(t){const e={calme:{alt:.45,lum:.7,turb:.2,aur:.55,pluie:.12},joie:{alt:.7,lum:.9,turb:.35,aur:.95,pluie:0},tristesse:{alt:.2,lum:.35,turb:.1,aur:.25,pluie:.7},tension:{alt:.6,lum:.45,turb:.85,aur:.4,pluie:.45}}[t.emotion],n=Math.min(1,Math.max(0,(Math.abs(t.timeOfDay-.5)-.2)*5)),i=t.cielReel??null;return{altitude:Math.min(1,e.alt+t.breath*.35),luminosite:i?Math.min(1,i.luminosite+t.breath*.2):Math.min(1,e.lum+t.breath*.2),turbulence:i?Math.min(1,Math.max(e.turb,i.turbulence)+t.breath*.1):Math.min(1,e.turb+t.breath*.1),night:n,aurora:e.aur,pluie:i?Math.max(e.pluie,i.pluie):e.pluie,palette:GS[t.emotion]}}function HS(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return Math.sqrt(e/t.length)}function jS(t,e,n=8){return t<=e?0:Math.min(1,(t-e)*n)}async function $S(t){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),n=new AudioContext,i=n.createMediaStreamSource(e),r=n.createAnalyser();r.fftSize=1024,i.connect(r);const s=new Float32Array(r.fftSize);let a=5e-4;return setInterval(()=>{r.getFloatTimeDomainData(s);const o=HS(s);a=Math.min(a*.999+o*.001,.01),t(jS(o,a))},60),!0}catch{return!1}}var Cs=typeof self<"u"?self:{};function pg(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=Cs,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function br(){throw Error("Invalid UTF8")}function Oh(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let mo,vu;const WS=typeof TextDecoder<"u";let XS;const YS=typeof TextEncoder<"u";function mg(t){if(YS)t=(XS||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function gg(t){Cs.setTimeout((()=>{throw t}),0)}var Oc,JS=pg(610401301,!1),Bh=pg(748402147,!0);function kh(){var t=Cs.navigator;return t&&(t=t.userAgent)?t:""}const zh=Cs.navigator;function sl(t){return sl[" "](t),t}Oc=zh&&zh.userAgentData||null,sl[" "]=function(){};const vg={};let ma=null;function KS(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(u){for(;l<s.length;){const c=s.charAt(l++),d=ma[c];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c)}return u}_g();let l=0;for(;;){const u=o(-1),c=o(0),d=o(64),f=o(64);if(f===64&&u===-1)break;a(u<<2|c>>4),d!=64&&(a(c<<4&240|d>>2),f!=64&&a(d<<6&192|f))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function _g(){if(!ma){ma={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));vg[n]=i;for(let r=0;r<i.length;r++){const s=i[r];ma[s]===void 0&&(ma[s]=r)}}}}var ZS=typeof Uint8Array<"u",xg=!(!(JS&&Oc&&Oc.brands.length>0)&&(kh().indexOf("Trident")!=-1||kh().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Vh=/[-_.]/g,QS={"-":"+",_:"/",".":"="};function ey(t){return QS[t]||""}function bg(t){if(!xg)return KS(t);t=Vh.test(t)?t.replace(Vh,ey):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Ad(t){return ZS&&t!=null&&t instanceof Uint8Array}var Rs={};function Br(){return ty||=new _i(null,Rs)}function wd(t){Sg(Rs);var e=t.g;return(e=e==null||Ad(e)?e:typeof e=="string"?bg(e):null)==null?e:t.g=e}var _i=class{h(){return new Uint8Array(wd(this)||0)}constructor(t,e){if(Sg(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let ty,ny;function Sg(t){if(t!==Rs)throw Error("illegal external caller")}function yg(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Bc(t){return yg(t=Error(t),"warning"),t}function Ls(t,e){if(t!=null){var n=ny??={},i=n[t]||0;i>=e||(n[t]=i+1,yg(t=Error(),"incident"),gg(t))}}function qs(){return typeof BigInt=="function"}var Gs=typeof Symbol=="function"&&typeof Symbol()=="symbol";function yi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var iy=yi("jas",void 0,!0),qh=yi(void 0,"0di"),ca=yi(void 0,"1oa"),Ln=yi(void 0,Symbol()),ry=yi(void 0,"0ub"),sy=yi(void 0,"0ubs"),kc=yi(void 0,"0ubsb"),ay=yi(void 0,"0actk"),Ps=yi("m_m","Pa",!0),Gh=yi();const Mg={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Eg=Object.defineProperties,ke=Gs?iy:"Ga";var Vr;const Hh=[];function Ua(t,e){Gs||ke in t||Eg(t,Mg),t[ke]|=e}function Yt(t,e){Gs||ke in t||Eg(t,Mg),t[ke]=e}function Oa(t){return Ua(t,34),t}function wa(t){return Ua(t,8192),t}Yt(Hh,7),Vr=Object.freeze(Hh);var Ds={};function Dn(t,e){return e===void 0?t.h!==kr&&!!(2&(0|t.v[ke])):!!(2&e)&&t.h!==kr}const kr={};function Cd(t,e){if(t!=null){if(typeof t=="string")t=t?new _i(t,Rs):Br();else if(t.constructor!==_i)if(Ad(t))t=t.length?new _i(new Uint8Array(t),Rs):Br();else{if(!e)throw Error();t=void 0}}return t}class jh{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var oy=Object.freeze({});function Tg(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(e=128&e?1:0;e<a;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const o in t)!isNaN(o)&&n(+o,t[o])}}var Ag={};function Hs(t){return 128&t?Ag:void 0}function al(t){return t.Na=!0,t}var ly=al((t=>typeof t=="number")),$h=al((t=>typeof t=="string")),uy=al((t=>typeof t=="boolean")),ol=typeof Cs.BigInt=="function"&&typeof Cs.BigInt(0)=="bigint";function Pn(t){var e=t;if($h(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(ly(e)&&!Number.isSafeInteger(e))throw Error(String(e));return ol?BigInt(t):t=uy(t)?t?"1":"0":$h(t)?t.trim()||"0":String(t)}var zc=al((t=>ol?t>=dy&&t<=hy:t[0]==="-"?Wh(t,cy):Wh(t,fy)));const cy=Number.MIN_SAFE_INTEGER.toString(),dy=ol?BigInt(Number.MIN_SAFE_INTEGER):void 0,fy=Number.MAX_SAFE_INTEGER.toString(),hy=ol?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Wh(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const py=typeof Uint8Array.prototype.slice=="function";let my,Lt=0,zt=0;function Xh(t){const e=t>>>0;Lt=e,zt=(t-e)/4294967296>>>0}function Ns(t){if(t<0){Xh(-t);const[e,n]=Pd(Lt,zt);Lt=e>>>0,zt=n>>>0}else Xh(t)}function Rd(t){const e=my||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),zt=0,Lt=e.getUint32(0,!0)}function wg(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Ca(t,e)}function gy(t,e){return Pn(qs()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):Ca(t,e))}function Cg(t,e){return qs()?Pn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Pn(Ld(t,e))}function Ca(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else qs()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Yh(n)+Yh(t));return n}function Yh(t){return t=String(t),"0000000".slice(t.length)+t}function Ld(t,e){if(2147483648&e)if(qs())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=Pd(t,e);t="-"+Ca(n,i)}else t=Ca(t,e);return t}function ll(t){if(t.length<16)Ns(Number(t));else if(qs())t=BigInt(t),Lt=Number(t&BigInt(4294967295))>>>0,zt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");zt=Lt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));zt*=1e6,Lt=1e6*Lt+s,Lt>=4294967296&&(zt+=Math.trunc(Lt/4294967296),zt>>>=0,Lt>>>=0)}if(e){const[i,r]=Pd(Lt,zt);Lt=i,zt=r}}}function Pd(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function ti(t){return Array.prototype.slice.call(t)}const Ba=typeof BigInt=="function"?BigInt.asIntN:void 0,vy=typeof BigInt=="function"?BigInt.asUintN:void 0,zr=Number.isSafeInteger,ul=Number.isFinite,Is=Math.trunc,_y=Pn(0);function ga(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function pi(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Ra(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function Rg(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const xy=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ka(t){switch(typeof t){case"bigint":return!0;case"number":return ul(t);case"string":return xy.test(t);default:return!1}}function js(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return ul(t)?0|t:void 0}function Lg(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return ul(t)?t>>>0:void 0}function Pg(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(ll(t),Ld(Lt,zt))}function Dd(t){if(t=Is(t),!zr(t)){Ns(t);var e=Lt,n=zt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=wg(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function Dg(t){var e=Is(Number(t));return zr(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Pg(t))}function Ng(t){var e=Is(Number(t));return zr(e)?Pn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),qs()?Pn(Ba(64,BigInt(t))):Pn(Pg(t)))}function Ig(t){return zr(t)?t=Pn(Dd(t)):(t=Is(t),zr(t)?t=String(t):(Ns(t),t=Ld(Lt,zt)),t=Pn(t)),t}function ko(t){const e=typeof t;return t==null?t:e==="bigint"?Pn(Ba(64,t)):ka(t)?e==="string"?Ng(t):Ig(t):void 0}function Fg(t){if(typeof t!="string")throw Error();return t}function za(t){if(t!=null&&typeof t!="string")throw Error();return t}function en(t){return t==null||typeof t=="string"?t:void 0}function Nd(t,e,n,i){return t!=null&&t[Ps]===Ds?t:Array.isArray(t)?((i=(n=0|t[ke])|32&i|2&i)!==n&&Yt(t,i),new e(t)):(n?2&i?((t=e[qh])||(Oa((t=new e).v),t=e[qh]=t),e=t):e=new e:e=void 0,e)}function by(t,e,n){if(e)e:{if(!ka(e=t))throw Bc("int64");switch(typeof e){case"string":e=Ng(e);break e;case"bigint":e=Pn(Ba(64,e));break e;default:e=Ig(e)}}else e=ko(t);return(t=e)==null?n?_y:void 0:t}const Sy={};let yy=(function(){try{return sl(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class _u{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const My=yy?(Object.setPrototypeOf(_u.prototype,Map.prototype),Object.defineProperties(_u.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),_u):class extends Map{constructor(){super()}};function Jh(t){return t}function xu(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var Gi=class extends My{constructor(t,e,n=Jh,i=Jh){super(),this.J=0|t[ke],this.K=e,this.S=n,this.fa=this.K?Ey:i;for(let r=0;r<t.length;r++){const s=t[r],a=n(s[0],!1,!0);let o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(t){return wa(Array.from(super.entries(),t))}clear(){xu(this),super.clear()}delete(t){return xu(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new jh(t,Ty,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new jh(t,Gi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return xu(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function Ey(t,e,n,i,r,s){return t=Nd(t,i,n,s),r&&(t=Fd(t)),t}function Ty(t){return[t,this.get(t)]}let Ay;function Kh(){return Ay||=new Gi(Oa([]),void 0,void 0,void 0,Sy)}function cl(t){return Ln?t[Ln]:void 0}function zo(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}Gi.prototype.toJSON=void 0;var Vc=class{};const wy={Ka:!0};function Cy(t,e){e<100||Ls(sy,1)}function dl(t,e,n,i){const r=i!==void 0;i=!!i;var s,a=Ln;!r&&Gs&&a&&(s=t[a])&&zo(s,Cy),a=[];var o=t.length;let l;s=4294967295;let u=!1;const c=!!(64&e),d=c?128&e?0:-1:void 0;1&e||(l=o&&t[o-1],l!=null&&typeof l=="object"&&l.constructor===Object?s=--o:l=void 0,!c||128&e||r||(u=!0,s=s-d+d)),e=void 0;for(var f=0;f<o;f++){let p=t[f];if(p!=null&&(p=n(p,i))!=null)if(c&&f>=s){const v=f-d;(e??={})[v]=p}else a[f]=p}if(l)for(let p in l){if((o=l[p])==null||(o=n(o,i))==null)continue;let v;f=+p,c&&!Number.isNaN(f)&&(v=f+d)<s?a[v]=o:(e??={})[p]=o}return e&&(u?a.push(e):a[s]=e),r&&Ln&&(t=cl(t))&&t instanceof Vc&&(a[Ln]=(function(p){const v=new Vc;return zo(p,((_,m,h)=>{v[m]=ti(h)})),v.da=p.da,v})(t)),a}function Ry(t){return t[0]=La(t[0]),t[1]=La(t[1]),t}function La(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return zc(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[ke];return t.length===0&&1&e?void 0:dl(t,e,La)}if(t!=null&&t[Ps]===Ds)return Ug(t);if(t instanceof _i){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(xg){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),_g(),n=vg[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let u=0,c=0;for(;u<e.length-2;u+=3){var s=e[u],a=e[u+1],o=e[u+2],l=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[c++]=l+s+a+o}switch(l=0,o=r,e.length-u){case 2:o=n[(15&(l=e[u+1]))<<2]||r;case 1:e=e[u],i[c]=n[e>>2]+n[(3&e)<<4|l>>4]+o+r}e=i.join("")}t=t.g=e}return t}return t instanceof Gi?t=t.size!==0?t.V(Ry):void 0:void 0}return t}let Ly,Py;function Ug(t){return dl(t=t.v,0|t[ke],La)}function Dr(t,e){return Og(t,e[0],e[1])}function Og(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[ke],Bh&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(Bh)throw Error("carr");Ls(ay,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Yt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var a=s-1;const l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(s=+o)<a&&(n[s+e]=l[o],delete l[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Yt(t,64|r|i),t}function Dy(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[ke];return t.length===0&&1&n?void 0:Zh(t,n,e)}if(t!=null&&t[Ps]===Ds)return Qh(t);if(t instanceof Gi){if(2&(e=t.J))return t;if(!t.size)return;if(n=Oa(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[Ps]===Ds?Qh(r):Array.isArray(r)?Zh(r,0|r[ke],!!(32&e)):void 0,i[1]=r}return n}return t instanceof _i?t:void 0}function Zh(t,e,n){return 2&e||(!n||4096&e||16&e?t=$s(t,e,!1,n&&!(16&e)):(Ua(t,34),4&e&&Object.freeze(t))),t}function Id(t,e,n){return t=new t.constructor(e),n&&(t.h=kr),t.m=kr,t}function Qh(t){const e=t.v,n=0|e[ke];return Dn(t,n)?t:Ud(t,e,n)?Id(t,e):$s(e,n)}function $s(t,e,n,i){return i??=!!(34&e),t=dl(t,e,Dy,i),i=32,n&&(i|=2),Yt(t,e=16769217&e|i),t}function Fd(t){const e=t.v,n=0|e[ke];return Dn(t,n)?Ud(t,e,n)?Id(t,e,!0):new t.constructor($s(e,n,!1)):t}function Ws(t){if(t.h!==kr)return!1;var e=t.v;return Ua(e=$s(e,0|e[ke]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function Xs(t){if(!Ws(t)&&Dn(t,0|t.v[ke]))throw Error()}function qr(t,e){e===void 0&&(e=0|t[ke]),32&e&&!(4096&e)&&Yt(t,4096|e)}function Ud(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Yt(e,2|n),t.h=kr,!0)}const Bg=Pn(0),er={};function Pt(t,e,n,i,r){if((e=Hi(t.v,e,n,r))!==null||i&&t.m!==kr)return e}function Hi(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let a,o;if(!(s<1+(n?0:-1))){if(r>=s)if(a=t[s],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[e],o=!0;else{if(r!==s)return;n=a}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[r]=i,i}return n}}function bt(t,e,n,i){Xs(t),jt(t=t.v,0|t[ke],e,n,i)}function jt(t,e,n,i,r){const s=n+(r?0:-1);var a=t.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=(e??=0|t[ke])>>14&1023||536870912)?i!=null&&(t[a+(r?0:-1)]={[n]:i}):t[s]=i),e)}function Rr(){return oy===void 0?2:4}function Lr(t,e,n,i,r){let s=t.v,a=0|s[ke];i=Dn(t,a)?1:i,r=!!r||i===3,i===2&&Ws(t)&&(s=t.v,a=0|s[ke]);let o=(t=Od(s,e))===Vr?7:0|t[ke],l=Bd(o,a);var u=!(4&l);if(u){4&l&&(t=ti(t),o=0,l=Ir(l,a),a=jt(s,a,e,t));let c=0,d=0;for(;c<t.length;c++){const f=n(t[c]);f!=null&&(t[d++]=f)}d<c&&(t.length=d),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==o&&(Yt(t,l),2&l&&Object.freeze(t)),kg(t,l,s,a,e,i,u,r)}function kg(t,e,n,i,r,s,a,o){let l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?Nr(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Yt(t,e),Object.freeze(t)):(s===2&&Nr(e)&&(t=ti(t),l=0,e=Ir(e,i),i=jt(n,i,r,t)),Nr(e)||(o||(e|=16),e!==l&&Yt(t,e))),2&e||!(4096&e||16&e)||qr(n,i),t}function Od(t,e,n){return t=Hi(t,e,n),Array.isArray(t)?t:Vr}function Bd(t,e){return 2&e&&(t|=2),1|t}function Nr(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function zg(t){return Cd(t,!0)}function Vg(t){t=ti(t);for(let e=0;e<t.length;e++){const n=t[e]=ti(t[e]);Array.isArray(n[1])&&(n[1]=Oa(n[1]))}return wa(t)}function ir(t,e,n,i){Xs(t),jt(t=t.v,0|t[ke],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ys(t,e,n){if(2&e)throw Error();const i=Hs(e);let r=Od(t,n,i),s=r===Vr?7:0|r[ke],a=Bd(s,e);return(2&a||Nr(a)||16&a)&&(a===s||Nr(a)||Yt(r,a),r=ti(r),s=0,a=Ir(a,e),jt(t,e,n,r,i)),a&=-13,a!==s&&Yt(r,a),r}function bu(t,e){var n=D0;return zd(kd(t=t.v),t,void 0,n)===e?e:-1}function kd(t){if(Gs)return t[ca]??(t[ca]=new Map);if(ca in t)return t[ca];const e=new Map;return Object.defineProperty(t,ca,{value:e}),e}function qg(t,e,n,i,r){const s=kd(t),a=zd(s,t,e,n,r);return a!==i&&(a&&(e=jt(t,e,a,void 0,r)),s.set(n,i)),e}function zd(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];Hi(e,o,r)!=null&&(s!==0&&(n=jt(e,n,s,void 0,r)),s=o)}return t.set(i,s),s}function Vd(t,e,n){let i=0|t[ke];const r=Hs(i),s=Hi(t,n,r);let a;if(s!=null&&s[Ps]===Ds){if(!Dn(s))return Ws(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[ke];2&o&&(a=$s(a,o))}return a=Dr(a,e),a!==s&&jt(t,i,n,a,r),a}function Gg(t,e,n,i,r){let s=!1;if((i=Hi(t,i,r,(a=>{const o=Nd(a,n,!1,e);return s=o!==a&&o!=null,o})))!=null)return s&&!Dn(i)&&qr(t,e),i}function ht(t,e,n,i){let r=t.v,s=0|r[ke];if((e=Gg(r,s,e,n,i))==null)return e;if(s=0|r[ke],!Dn(t,s)){const a=Fd(e);a!==e&&(Ws(t)&&(r=t.v,s=0|r[ke]),s=jt(r,s,n,e=a,i),qr(r,s))}return e}function Hg(t,e,n,i,r,s,a,o){var l=Dn(t,n);s=l?1:s,a=!!a||s===3,l=o&&!l,(s===2||l)&&Ws(t)&&(n=0|(e=t.v)[ke]);var u=(t=Od(e,r))===Vr?7:0|t[ke],c=Bd(u,n);if(o=!(4&c)){var d=t,f=n;const p=!!(2&c);p&&(f|=2);let v=!p,_=!0,m=0,h=0;for(;m<d.length;m++){const E=Nd(d[m],i,!1,f);if(E instanceof i){if(!p){const T=Dn(E);v&&=!T,_&&=T}d[h++]=E}}h<m&&(d.length=h),c|=4,c=_?-4097&c:4096|c,c=v?8|c:-9&c}if(c!==u&&(Yt(t,c),2&c&&Object.freeze(t)),l&&!(8&c||!t.length&&(s===1||s===4&&(2&c||!(16&c)&&32&n)))){for(Nr(c)&&(t=ti(t),c=Ir(c,n),n=jt(e,n,r,t)),i=t,l=c,u=0;u<i.length;u++)(d=i[u])!==(c=Fd(d))&&(i[u]=c);l|=8,Yt(t,c=l=i.length?4096|l:-4097&l)}return kg(t,c,e,n,r,s,o,a)}function ji(t,e,n){const i=t.v;return Hg(t,i,0|i[ke],e,n,Rr(),!1,!0)}function jg(t){return t==null&&(t=void 0),t}function Xe(t,e,n,i,r){return bt(t,n,i=jg(i),r),i&&!Dn(i)&&qr(t.v),t}function _a(t,e,n,i){e:{var r=i=jg(i);Xs(t);const s=t.v;let a=0|s[ke];if(r==null){const o=kd(s);if(zd(o,s,a,n)!==e)break e;o.set(n,0)}else a=qg(s,a,n,e);jt(s,a,e,r)}i&&!Dn(i)&&qr(t.v)}function Ir(t,e){return-273&(2&e?2|t:-3&t)}function qd(t,e,n,i){var r=i;Xs(t),t=Hg(t,i=t.v,0|i[ke],n,e,2,!0),r=r??new n,t.push(r),e=n=t===Vr?7:0|t[ke],(r=Dn(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Yt(t,n),r||qr(i)}function jn(t,e,n){return js(Pt(t,e,void 0,n))}function Bt(t,e){return Pt(t,e,void 0,void 0,pi)??0}function $i(t,e,n){if(n!=null){if(typeof n!="number"||!ul(n))throw Bc("int32");n|=0}bt(t,e,n)}function je(t,e,n){bt(t,e,ga(n))}function Nn(t,e,n){ir(t,e,za(n),"")}function Vo(t,e,n){{Xs(t);const a=t.v;let o=0|a[ke];if(n==null)jt(a,o,e);else{var i=t=n===Vr?7:0|n[ke],r=Nr(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=ti(n),i=0,t=Ir(t,o),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const l=n[r],u=Fg(l);Object.is(l,u)||(s&&(n=ti(n),i=0,t=Ir(t,o),s=!1),n[r]=u)}t!==i&&(s&&(n=ti(n),t=Ir(t,o)),Yt(n,t)),jt(a,o,e,n)}}}function fl(t,e,n){Xs(t),Lr(t,e,en,2,!0).push(Fg(n))}var ss=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function Gd(t,e){if(typeof t=="string")return new ss(bg(t),e);if(Array.isArray(t))return new ss(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new ss(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new ss(t,!1);if(t.constructor===_i)return e=wd(t)||new Uint8Array(0),new ss(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new ss(t,!1);throw Error()}function Hd(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Fr(t,o),!(128&n))return e(i>>>0,r>>>0);throw Error()}function jd(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Fr(t,n),!!(127&e)}throw Error()}function ur(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Fr(t,n),r}function Si(t){return ur(t)>>>0}function qo(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],Fr(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function Ny(t){return ur(t)}function Fr(t,e){if(t.g=e,e>t.l)throw Error()}function $g(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function Wg(t,e){if(e==0)return Br();var n=$g(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):py?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Br():new _i(n,Rs)}var ep=[];function Xg(t,e,n,i){if(Go.length){const r=Go.pop();return r.o(i),r.g.init(t,e,n,i),r}return new Iy(t,e,n,i)}function Yg(t){t.g.clear(),t.l=-1,t.h=-1,Go.length<100&&Go.push(t)}function Jg(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=Si(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function Lo(t){switch(t.h){case 0:t.h!=0?Lo(t):jd(t.g);break;case 1:Fr(t=t.g,t.g+8);break;case 2:if(t.h!=2)Lo(t);else{var e=Si(t.g);Fr(t=t.g,t.g+e)}break;case 5:Fr(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!Jg(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}Lo(t)}break;default:throw Error()}}function Va(t,e,n){const i=t.g.l;var r=Si(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function $d(t){var e=Si(t.g),n=$g(t=t.g,e);if(t=t.h,WS){var i,r=t;(i=vu)||(i=vu=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(mo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),mo=!0}catch{mo=!1}}throw!mo&&(vu=void 0),o}}else{e=(s=n)+e,n=[];let o,l=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?br():(o=t[s++],a<194||(192&o)!=128?(s--,br()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?br():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,br()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?br():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,br()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):br(),n.length>=8192&&(l=Oh(l,n),n.length=0)}s=Oh(l,n)}return s}function Kg(t){const e=Si(t.g);return Wg(t.g,e)}function hl(t,e,n){var i=Si(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var Iy=class{constructor(t,e,n,i){if(ep.length){const r=ep.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:l=!1}={}){this.Y=o,this.ea=l,r&&(r=Gd(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},Go=[];function tp(t){return t?/^\d+$/.test(t)?(ll(t),new qc(Lt,zt)):null:Fy||=new qc(0,0)}var qc=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let Fy;function np(t){return t?/^-?\d+$/.test(t)?(ll(t),new Gc(Lt,zt)):null:Uy||=new Gc(0,0)}var Gc=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let Uy;function ms(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Js(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function pl(t,e){if(e>=0)Js(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Wd(t){var e=Lt;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Fs(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Wn(t,e,n){Js(t.g,8*e+n)}function Xd(t,e){return Wn(t,e,2),e=t.g.end(),Fs(t,e),e.push(t.h),e}function Yd(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function ml(t,e,n){Wn(t,e,2),Js(t.g,n.length),Fs(t,t.g.end()),Fs(t,n)}function Ho(t,e,n,i){n!=null&&(e=Xd(t,e),i(n,t),Yd(t,e))}function Mi(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Jd=Mi(),Zg=Mi(),Kd=Mi(),Zd=Mi(),Qd=Mi(),Qg=Mi(),Oy=Mi(),gl=Mi(),e0=Mi(),t0=Mi();function Ei(t,e,n){var i=t.v;Ln&&Ln in i&&(i=i[Ln])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var ze=class{constructor(t,e){this.v=Og(t,e,void 0,2048)}toJSON(){return Ug(this)}j(){var t=_M,e=this.v,n=t.g,i=Ln;if(Gs&&i&&e[i]?.[n]!=null&&Ls(ry,3),e=t.g,Gh&&Ln&&Gh===void 0&&(i=(n=this.v)[Ln])&&(i=i.da))try{i(n,e,wy)}catch(r){gg(r)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[ke];return Ud(this,t,e)?Id(this,t,!0):new this.constructor($s(t,e,!1))}};ze.prototype[Ps]=Ds,ze.prototype.toString=function(){return this.v.toString()};var Ks=class{constructor(t,e,n){this.g=t,this.h=e,t=Jd,this.l=!!t&&n===t||!1}};function vl(t,e){return new Ks(t,e,Jd)}function n0(t,e,n,i,r){Ho(t,n,a0(e,i),r)}const By=vl((function(t,e,n,i,r){return t.h===2&&(Va(t,Vd(e,i,n),r),!0)}),n0),ky=vl((function(t,e,n,i,r){return t.h===2&&(Va(t,Vd(e,i,n),r),!0)}),n0);var _l=Symbol(),xl=Symbol(),Hc=Symbol(),ip=Symbol(),rp=Symbol();let i0,r0;function Gr(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=(function(d){switch(typeof d){case"boolean":return Ly||=[0,void 0,!0];case"number":return d>0?void 0:d===0?Py||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,i0??=s,r0??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)o[s[l]]=s;s=i[++a]}for(l=1;s!==void 0;){let d;typeof s=="number"&&(l+=s,s=i[++a]);var u=void 0;if(s instanceof Ks?d=s:(d=By,a--),d?.l){s=i[++a],u=i;var c=a;typeof s=="function"&&(s=s(),u[c]=s),u=s}for(c=l+1,typeof(s=i[++a])=="number"&&s<0&&(c-=s,s=i[++a]);l<c;l++){const f=o[l];u?n(r,l,d,u,f):e(r,l,d,f)}}return i[t]=r}function s0(t){return Array.isArray(t)?t[0]instanceof Ks?t:[ky,t]:[t,void 0]}function a0(t,e){return t instanceof ze?t.v:Array.isArray(t)?Dr(t,e):void 0}function ef(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function tf(t,e,n,i,r){const s=n.g;let a,o;t[e]=(l,u,c)=>s(l,u,c,o||=Gr(xl,ef,tf,i).T,a||=nf(i),r)}function nf(t){let e=t[Hc];if(e!=null)return e;const n=Gr(xl,ef,tf,t);return e=n.ma?(i,r)=>i0(i,r,n):(i,r)=>{for(;Jg(r)&&r.h!=4;){var s=r.l,a=n[s];if(a==null){var o=n.ba;o&&(o=o[s])&&(o=Vy(o))!=null&&(a=n[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,Lo(o),o.ha)var l=void 0;else l=o.g.g-a,o.g.g=a,l=Wg(o.g,l);a=void 0,o=i,l&&((a=o[Ln]??(o[Ln]=new Vc))[s]??(a[s]=[])).push(l)}}return(i=cl(i))&&(i.da=n.qa[rp]),!0},t[Hc]=e,t[rp]=zy.bind(t),e}function zy(t,e,n,i){var r=this[xl];const s=this[Hc],a=Dr(void 0,r.T),o=cl(t);if(o){var l=!1,u=r.ba;if(u){if(r=(c,d,f)=>{if(f.length!==0)if(u[d])for(const p of f){c=Xg(p);try{l=!0,s(a,c)}finally{Yg(c)}}else i?.(t,d,f)},e==null)zo(o,r);else if(o!=null){const c=o[e];c&&r(o,e,c)}if(l){let c=0|t[ke];if(2&c&&2048&c&&!n?.Ka)throw Error();const d=Hs(c),f=(p,v)=>{if(Hi(t,p,d)!=null){if(n?.Qa===1)return;throw Error()}v!=null&&(c=jt(t,c,p,v,d)),delete o[p]};e==null?Tg(a,0|a[ke],((p,v)=>{f(p,v)})):f(e,Hi(a,e,d))}}}}function Vy(t){const e=(t=s0(t))[0].g;if(t=t[1]){const n=nf(t),i=Gr(xl,ef,tf,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function bl(t,e,n){t[e]=n.h}function Sl(t,e,n,i){let r,s;const a=n.h;t[e]=(o,l,u)=>a(o,l,u,s||=Gr(_l,bl,Sl,i).T,r||=o0(i))}function o0(t){let e=t[ip];if(!e){const n=Gr(_l,bl,Sl,t);e=(i,r)=>l0(i,r,n),t[ip]=e}return e}function l0(t,e,n){Tg(t,0|t[ke],((i,r)=>{if(r!=null){var s=(function(a,o){var l=a[o];if(l)return l;if((l=a.ba)&&(l=l[o])){var u=(l=s0(l))[0].h;if(l=l[1]){const c=o0(l),d=Gr(_l,bl,Sl,l).T;l=a.ma?r0(d,c):(f,p,v)=>u(f,p,v,d,c)}else l=u;return a[o]=l}})(n,i);s?s(e,r,i):i<500||Ls(kc,3)}})),(t=cl(t))&&zo(t,((i,r,s)=>{for(Fs(e,e.g.end()),i=0;i<s.length;i++)Fs(e,wd(s[i])||new Uint8Array(0))}))}const qy=Pn(0);function Zs(t,e){if(Array.isArray(e)){var n=0|e[ke];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&Yt(e,t),2&t&&Object.freeze(e),e}}function ln(t,e,n){return new Ks(t,e,n)}function Qs(t,e,n){return new Ks(t,e,n)}function un(t,e,n){jt(t,0|t[ke],e,n,Hs(0|t[ke]))}var Gy=vl((function(t,e,n,i,r){if(t.h!==2)return!1;if(t=ti(t=Va(t,Dr([void 0,void 0],i),r)),r=Hs(i=0|e[ke]),2&i)throw Error();let s=Hi(e,n,r);if(s instanceof Gi)(2&s.J)!=0?(s=s.V(),s.push(t),jt(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var a=0|s[ke];8192&a||Yt(s,a|=8192),2&a&&(s=Vg(s),jt(e,i,n,s,r)),s.push(t)}else jt(e,i,n,wa([t]),r);return!0}),(function(t,e,n,i,r){if(e instanceof Gi)e.forEach(((s,a)=>{Ho(t,n,Dr([a,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&Ho(t,n,Dr(a,i),r)}wa(e)}}));function u0(t,e,n){(e=pi(e))!=null&&(Wn(t,n,5),t=t.g,Rd(e),Wd(t))}function c0(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(Ba(64,i));if(ka(i)){if(r==="string")return Dg(i);if(r==="number")return Dd(i)}})(e),e!=null&&(typeof e=="string"&&np(e),e!=null))switch(Wn(t,n,0),typeof e){case"number":t=t.g,Ns(e),ms(t,Lt,zt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Gc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ms(t.g,n.h,n.g);break;default:n=np(e),ms(t.g,n.h,n.g)}}function d0(t,e,n){(e=js(e))!=null&&e!=null&&(Wn(t,n,0),pl(t.g,e))}function f0(t,e,n){(e=Rg(e))!=null&&(Wn(t,n,0),t.g.g.push(e?1:0))}function h0(t,e,n){(e=en(e))!=null&&ml(t,n,mg(e))}function p0(t,e,n,i,r){Ho(t,n,a0(e,i),r)}function m0(t,e,n){(e=e==null||typeof e=="string"||e instanceof _i?e:void 0)!=null&&ml(t,n,Gd(e,!0).buffer)}function g0(t,e,n){(e=Lg(e))!=null&&e!=null&&(Wn(t,n,0),Js(t.g,e))}function v0(t,e,n){return(t.h===5||t.h===2)&&(e=Ys(e,0|e[ke],n),t.h==2?hl(t,qo,e):e.push(qo(t.g)),!0)}var Vt=ln((function(t,e,n){return t.h===5&&(un(e,n,qo(t.g)),!0)}),u0,gl),Hy=Qs(v0,(function(t,e,n){if((e=Zs(pi,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Wn(i,r,5),i=i.g,Rd(s),Wd(i))}}),gl),rf=Qs(v0,(function(t,e,n){if((e=Zs(pi,e))!=null&&e.length){Wn(t,n,2),Js(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Rd(e[i]),Wd(n)}}),gl),jy=ln((function(t,e,n){return t.h===5&&(un(e,n,(t=qo(t.g))===0?void 0:t),!0)}),u0,gl),cr=ln((function(t,e,n){return t.h!==0?t=!1:(un(e,n,Hd(t.g,Cg)),t=!0),t}),c0,Qg),Su=ln((function(t,e,n){return t.h!==0?e=!1:(un(e,n,(t=Hd(t.g,Cg))===qy?void 0:t),e=!0),e}),c0,Qg),$y=ln((function(t,e,n){return t.h!==0?t=!1:(un(e,n,Hd(t.g,gy)),t=!0),t}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(vy(64,i));if(ka(i)){if(r==="string")return r=Is(Number(i)),zr(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(ll(i),i=Ca(Lt,zt))),i;if(r==="number")return(i=Is(i))>=0&&zr(i)||(Ns(i),i=wg(Lt,zt)),i}})(e),e!=null&&(typeof e=="string"&&tp(e),e!=null))switch(Wn(t,n,0),typeof e){case"number":t=t.g,Ns(e),ms(t,Lt,zt);break;case"bigint":n=BigInt.asUintN(64,e),n=new qc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),ms(t.g,n.h,n.g);break;default:n=tp(e),ms(t.g,n.h,n.g)}}),Oy),Ht=ln((function(t,e,n){return t.h===0&&(un(e,n,ur(t.g)),!0)}),d0,Zd),qa=Qs((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ys(e,0|e[ke],n),t.h==2?hl(t,ur,e):e.push(ur(t.g)),!0)}),(function(t,e,n){if((e=Zs(js,e))!=null&&e.length){n=Xd(t,n);for(let i=0;i<e.length;i++)pl(t.g,e[i]);Yd(t,n)}}),Zd),us=ln((function(t,e,n){return t.h===0&&(un(e,n,(t=ur(t.g))===0?void 0:t),!0)}),d0,Zd),Dt=ln((function(t,e,n){return t.h===0&&(un(e,n,jd(t.g)),!0)}),f0,Zg),Ur=ln((function(t,e,n){return t.h===0&&(un(e,n,(t=jd(t.g))===!1?void 0:t),!0)}),f0,Zg),rn=Qs((function(t,e,n){return t.h===2&&(t=$d(t),Ys(e,0|e[ke],n).push(t),!0)}),(function(t,e,n){if((e=Zs(en,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&ml(i,r,mg(s))}}),Kd),sr=ln((function(t,e,n){return t.h===2&&(un(e,n,(t=$d(t))===""?void 0:t),!0)}),h0,Kd),Mt=ln((function(t,e,n){return t.h===2&&(un(e,n,$d(t)),!0)}),h0,Kd),Zt=(function(t,e,n=Jd){return new Ks(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=Dr(void 0,i),Ys(e,0|e[ke],n).push(i),Va(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)p0(t,e[s],n,i,r);1&(t=0|e[ke])||Yt(e,1|t)}})),wt=vl((function(t,e,n,i,r,s){if(t.h!==2)return!1;let a=0|e[ke];return qg(e,a,s,n,Hs(a)),Va(t,e=Vd(e,i,n),r),!0}),p0),_0=ln((function(t,e,n){return t.h===2&&(un(e,n,Kg(t)),!0)}),m0,e0),Wy=Qs((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ys(e,0|e[ke],n),t.h==2?hl(t,Si,e):e.push(Si(t.g)),!0)}),(function(t,e,n){if((e=Zs(Lg,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Wn(i,r,0),Js(i.g,s))}}),Qd),Xy=ln((function(t,e,n){return t.h===0&&(un(e,n,(t=Si(t.g))===0?void 0:t),!0)}),g0,Qd),on=ln((function(t,e,n){return t.h===0&&(un(e,n,ur(t.g)),!0)}),(function(t,e,n){(e=js(e))!=null&&(e=parseInt(e,10),Wn(t,n,0),pl(t.g,e))}),t0);class Yy{constructor(e,n){var i=Fn;this.g=e,this.h=n,this.m=ht,this.j=Xe,this.defaultValue=void 0,this.l=i.Oa!=null?Ag:void 0}register(){sl(this)}}function Ti(t,e){return new Yy(t,e)}function dr(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Xg(n,void 0,void 0,s);try{const a=new t,o=a.v;nf(e)(o,n);var r=a}finally{Yg(n)}}return r}}function yl(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};l0(this.v,e,Gr(_l,bl,Sl,t)),Fs(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var sp=class extends ze{constructor(t){super(t)}},ap=[0,sr,ln((function(t,e,n){return t.h===2&&(un(e,n,(t=Kg(t))===Br()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof ze){const i=e.Ra;return void(i?(e=i(e),e!=null&&ml(t,n,Gd(e,!0).buffer)):Ls(kc,3))}if(Array.isArray(e))return void Ls(kc,3)}m0(t,e,n)}),e0)];let yu,op=globalThis.trustedTypes;function lp(t){var e;return yu===void 0&&(yu=(function(){let n=null;if(!op)return n;try{const i=r=>r;n=op.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=yu)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function go(t,...e){if(e.length===0)return lp(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return lp(n)}var x0=[0,Ht,on,Dt,-1,qa,on,-1,Dt],Jy=class extends ze{constructor(t){super(t)}},b0=[0,Dt,Mt,Dt,on,-1,Qs((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ys(e,0|e[ke],n),t.h==2?hl(t,Ny,e):e.push(ur(t.g)),!0)}),(function(t,e,n){if((e=Zs(js,e))!=null&&e.length){n=Xd(t,n);for(let i=0;i<e.length;i++)pl(t.g,e[i]);Yd(t,n)}}),t0),Mt,-1,[0,Dt,-1],on,Dt,-1],S0=[0,3,Dt,-1,2,[0,[2],Ht,wt,[0,ln((function(t,e,n){return t.h===0&&(un(e,n,Si(t.g)),!0)}),g0,Qd)]],[0,on,Dt,on,Dt,on,Dt,Mt,-1],[0,[3,4],Mt,-1,wt,[0,Ht],wt,[0,on]],[0]],y0=[0,Mt,-2],up=class extends ze{constructor(t){super(t)}},M0=[0],E0=[0,Ht,Dt,1,Dt,-4],Fn=class extends ze{constructor(t){super(t,2)}},$t={};$t[336783863]=[0,Mt,Dt,-1,Ht,[0,[1,2,3,4,5,6,7,8,9],wt,M0,wt,b0,wt,y0,wt,E0,wt,x0,wt,[0,Mt,-2],wt,[0,Mt,on],wt,S0,wt,[0,on,-1,Dt]],[0,Mt],Dt,[0,[1,3],[2,4],wt,[0,qa],-1,wt,[0,rn],-1,Zt,[0,Mt,-1]],Mt];var cp=[0,Su,-1,Ur,-3,Su,qa,sr,us,Su,-1,Ur,us,Ur,-2,sr];function Ct(t,e){fl(t,3,e)}function at(t,e){fl(t,4,e)}var bn=class extends ze{constructor(t){super(t,500)}o(t){return Xe(this,0,7,t)}},xa=[-1,{}],dp=[0,Mt,1,xa],fp=[0,Mt,rn,xa];function Xn(t,e){qd(t,1,bn,e)}function Nt(t,e){fl(t,10,e)}function pt(t,e){fl(t,15,e)}var Un=class extends ze{constructor(t){super(t,500)}o(t){return Xe(this,0,1001,t)}},T0=[-500,Zt,[-500,sr,-1,rn,-3,[-2,$t,Dt],Zt,ap,us,-1,dp,fp,Zt,[0,sr,Ur],sr,cp,us,rn,987,rn],4,Zt,[-500,Mt,-1,[-1,{}],998,Mt],Zt,[-500,Mt,rn,-1,[-2,{},Dt],997,rn,-1],us,Zt,[-500,Mt,rn,xa,998,rn],rn,us,dp,fp,Zt,[0,sr,-1,xa],rn,-2,cp,sr,-1,Ur,[0,Ur,Xy],978,xa,Zt,ap];Un.prototype.g=yl(T0);var Ky=dr(Un,T0),Zy=class extends ze{constructor(t){super(t)}},A0=class extends ze{constructor(t){super(t)}g(){return ji(this,Zy,1)}},w0=[0,Zt,[0,Ht,Vt,Mt,-1]],Ml=dr(A0,w0),Qy=class extends ze{constructor(t){super(t)}},eM=class extends ze{constructor(t){super(t)}},Mu=class extends ze{constructor(t){super(t)}l(){return ht(this,Qy,2)}g(){return ji(this,eM,5)}},C0=dr(class extends ze{constructor(t){super(t)}},[0,rn,qa,rf,[0,on,[0,Ht,-3],[0,Vt,-3],[0,Ht,-1,[0,Zt,[0,Ht,-2]]],Zt,[0,Vt,-1,Mt,Vt]],Mt,-1,cr,Zt,[0,Ht,Vt],rn,cr]),R0=class extends ze{constructor(t){super(t)}},gs=dr(class extends ze{constructor(t){super(t)}},[0,Zt,[0,Vt,-4]]),L0=class extends ze{constructor(t){super(t)}},Ga=dr(class extends ze{constructor(t){super(t)}},[0,Zt,[0,Vt,-4]]),tM=class extends ze{constructor(t){super(t)}},nM=[0,Ht,-1,rf,on],P0=class extends ze{constructor(t){super(t)}};P0.prototype.g=yl([0,Vt,-4,cr]);var iM=class extends ze{constructor(t){super(t)}},rM=dr(class extends ze{constructor(t){super(t)}},[0,Zt,[0,1,Ht,Mt,w0],cr]),hp=class extends ze{constructor(t){super(t)}},sM=class extends ze{constructor(t){super(t)}na(){const t=Pt(this,1,void 0,void 0,zg);return t??Br()}},aM=class extends ze{constructor(t){super(t)}},D0=[1,2],oM=dr(class extends ze{constructor(t){super(t)}},[0,Zt,[0,D0,wt,[0,rf],wt,[0,_0],Ht,Mt],cr]),sf=class extends ze{constructor(t){super(t)}},N0=[0,Mt,Ht,Vt,rn,-1],pp=class extends ze{constructor(t){super(t)}},lM=[0,Dt,-1],mp=class extends ze{constructor(t){super(t)}},Po=[1,2,3,4,5,6],jo=class extends ze{constructor(t){super(t)}g(){return Pt(this,1,void 0,void 0,zg)!=null}l(){return en(Pt(this,2))!=null}},Ot=class extends ze{constructor(t){super(t)}g(){return Rg(Pt(this,2))??!1}},I0=[0,_0,Mt,[0,Ht,cr,-1],[0,$y,cr]],Gt=[0,I0,Dt,[0,Po,wt,E0,wt,b0,wt,x0,wt,M0,wt,y0,wt,S0],on],El=class extends ze{constructor(t){super(t)}},af=[0,Gt,Vt,-1,Ht],uM=Ti(502141897,El);$t[502141897]=af;var cM=dr(class extends ze{constructor(t){super(t)}},[0,[0,on,-1,Hy,Wy],nM]),F0=class extends ze{constructor(t){super(t)}},U0=class extends ze{constructor(t){super(t)}},jc=[0,Gt,Vt,[0,Gt],Dt],dM=Ti(508968150,U0);$t[508968150]=[0,Gt,af,jc,Vt,[0,[0,I0]]],$t[508968149]=jc;var as=class extends ze{constructor(t){super(t)}l(){return ht(this,sf,2)}g(){bt(this,2)}},O0=[0,Gt,N0];$t[478825465]=O0;var fM=class extends ze{constructor(t){super(t)}},B0=class extends ze{constructor(t){super(t)}},of=class extends ze{constructor(t){super(t)}},lf=class extends ze{constructor(t){super(t)}},k0=class extends ze{constructor(t){super(t)}},gp=[0,Gt,[0,Gt],O0,-1],z0=[0,Gt,Vt,Ht],uf=[0,Gt,Vt],V0=[0,Gt,z0,uf,Vt],hM=Ti(479097054,k0);$t[479097054]=[0,Gt,V0,gp],$t[463370452]=gp,$t[464864288]=z0;var pM=Ti(462713202,lf);$t[462713202]=V0,$t[474472470]=uf;var mM=class extends ze{constructor(t){super(t)}},q0=class extends ze{constructor(t){super(t)}},G0=class extends ze{constructor(t){super(t)}},H0=class extends ze{constructor(t){super(t)}},cf=[0,Gt,Vt,-1,Ht],$c=[0,Gt,Vt,Dt];H0.prototype.g=yl([0,Gt,uf,[0,Gt],af,jc,cf,$c]);var j0=class extends ze{constructor(t){super(t)}},gM=Ti(456383383,j0);$t[456383383]=[0,Gt,N0];var $0=class extends ze{constructor(t){super(t)}},vM=Ti(476348187,$0);$t[476348187]=[0,Gt,lM];var W0=class extends ze{constructor(t){super(t)}},vp=class extends ze{constructor(t){super(t)}},X0=[0,on,-1],_M=Ti(458105876,class extends ze{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[ke];return t=Dn(this,n),e=(function(i,r,s,a){var o=vp;!a&&Ws(i)&&(s=0|(r=i.v)[ke]);var l=Hi(r,2);if(i=!1,l==null){if(a)return Kh();l=[]}else if(l.constructor===Gi){if(!(2&l.J)||a)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[ke])):l=[];if(a){if(!l.length)return Kh();i||(i=!0,Oa(l))}else i&&(i=!1,wa(l),l=Vg(l));return!i&&32&s&&Ua(l,32),s=jt(r,s,2,a=new Gi(l,o,by,void 0)),i||qr(r,s),a})(this,e,n,t),!t&&vp&&(e.ra=!0),e}});$t[458105876]=[0,X0,Gy,[!0,cr,[0,Mt,-1,rn]],[0,qa,Dt,on]];var df=class extends ze{constructor(t){super(t)}},Y0=Ti(458105758,df);$t[458105758]=[0,Gt,Mt,X0];var Eu=class extends ze{constructor(t){super(t)}},_p=[0,jy,-1,Ur],xM=class extends ze{constructor(t){super(t)}},J0=class extends ze{constructor(t){super(t)}},Wc=[1,2];J0.prototype.g=yl([0,Wc,wt,_p,wt,[0,Zt,_p]]);var K0=class extends ze{constructor(t){super(t)}},bM=Ti(443442058,K0);$t[443442058]=[0,Gt,Mt,Ht,Vt,rn,-1,Dt,Vt],$t[514774813]=cf;var Z0=class extends ze{constructor(t){super(t)}},SM=Ti(516587230,Z0);function Xc(t,e){return e=e?e.clone():new sf,t.displayNamesLocale!==void 0?bt(e,1,za(t.displayNamesLocale)):t.displayNamesLocale===void 0&&bt(e,1),t.maxResults!==void 0?$i(e,2,t.maxResults):"maxResults"in t&&bt(e,2),t.scoreThreshold!==void 0?je(e,3,t.scoreThreshold):"scoreThreshold"in t&&bt(e,3),t.categoryAllowlist!==void 0?Vo(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&bt(e,4),t.categoryDenylist!==void 0?Vo(e,5,t.categoryDenylist):"categoryDenylist"in t&&bt(e,5),e}function Q0(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function ff(t,e=-1,n=""){return{categories:t.map((i=>({index:jn(i,1)??0??-1,score:Bt(i,2)??0,categoryName:en(Pt(i,3))??""??"",displayName:en(Pt(i,4))??""??""}))),headIndex:e,headName:n}}function yM(t){const e={classifications:ji(t,iM,1).map((n=>ff(ht(n,A0,4)?.g()??[],jn(n,2)??0,en(Pt(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(zc(n)?n=Number(n):(n=Ba(64,n),n=zc(n)?Number(n):String(n)),n):ka(n)?typeof n=="number"?Dd(n):Dg(n):void 0})(Pt(t,2,void 0,void 0,ko))!=null&&(e.timestampMs=Q0(Pt(t,2,void 0,void 0,ko)??Bg)),e}function ev(t){var e=Lr(t,3,pi,Rr()),n=Lr(t,2,js,Rr()),i=Lr(t,1,en,Rr()),r=Lr(t,9,en,Rr());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=ht(t,Mu,4)?.l())&&(s.boundingBox={originX:jn(e,1,er)??0,originY:jn(e,2,er)??0,width:jn(e,3,er)??0,height:jn(e,4,er)??0,angle:0}),ht(t,Mu,4)?.g().length)for(const a of ht(t,Mu,4).g())s.keypoints.push({x:Pt(a,1,void 0,er,pi)??0,y:Pt(a,2,void 0,er,pi)??0,score:Pt(a,4,void 0,er,pi)??0,label:en(Pt(a,3,void 0,er))??""});return s}function Tl(t){const e=[];for(const n of ji(t,L0,1))e.push({x:Bt(n,1)??0,y:Bt(n,2)??0,z:Bt(n,3)??0,visibility:Bt(n,4)??0});return e}function ba(t){const e=[];for(const n of ji(t,R0,1))e.push({x:Bt(n,1)??0,y:Bt(n,2)??0,z:Bt(n,3)??0,visibility:Bt(n,4)??0});return e}function xp(t){return Array.from(t,(e=>e>127?e-256:e))}function bp(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let vo;$t[516587230]=[0,Gt,cf,$c,Vt],$t[518928384]=$c;const MM=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function tv(t){if(t)return!0;if(vo===void 0)try{await WebAssembly.instantiate(MM),vo=!0}catch{vo=!1}return vo}async function _o(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await tv(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var os=class{};function nv(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function Sp(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function iv(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Ge(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function yp(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=iv(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function Mp(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function li(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function tr(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}os.forVisionTasks=function(t,e=!1){return _o("vision",t??go``,e)},os.forTextTasks=function(t,e=!1){return _o("text",t??go``,e)},os.forGenAiTasks=function(t,e=!1){return _o("genai",t??go``,e)},os.forAudioTasks=function(t,e=!1){return _o("audio",t??go``,e)},os.isSimdSupported=function(t=!1){return tv(t)};async function EM(t,e,n,i){return t=await(async(r,s,a,o,l)=>{if(s&&await Sp(s),!self.ModuleFactory||a&&(await Sp(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function Tu(t,e){const n=ht(t.baseOptions,jo,1)||new jo;typeof e=="string"?(bt(n,2,za(e)),bt(n,1)):e instanceof Uint8Array&&(bt(n,1,Cd(e,!1)),bt(n,2)),Xe(t.baseOptions,0,1,n)}function Ep(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function De(t,e){t.C=Math.max(t.C,e)}function Al(t,e){t.B=new bn,Nn(t.B,2,"PassThroughCalculator"),Ct(t.B,"free_memory"),at(t.B,"free_memory_unused_out"),Nt(e,"free_memory"),Xn(e,t.B)}function Us(t,e){Ct(t.B,e),at(t.B,e+"_unused_out")}function wl(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var Yc=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(ht(this.baseOptions,jo,1)?.g()||ht(this.baseOptions,jo,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=ht(i.baseOptions,mp,3);if(!s){var a=s=new mp,o=new up;_a(a,4,Po,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new Jy,_a(r,2,Po,a)):(r=s,a=new up,_a(r,4,Po,a))),Xe(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Tu(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)Tu(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{Tu(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=Ky(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,Ep(this)}finishProcessing(){this.g.finishProcessing(),Ep(this)}close(){this.B=void 0,this.g.closeGraph()}};function or(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Yc.prototype.close=Yc.prototype.close;class TM{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Tp(t,e,n){const i=t.g;if(n=or(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Ap(t,e){const n=t.g,i=or(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=or(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=or(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new TM(n,i,r,s)}function hf(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function AM(t,e,n,i){return hf(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=Ap(t,!0)),n=t.u):(t.A||(t.A=Ap(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function rv(t,e,n){return hf(t,e),t=or(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function sv(t,e,n){hf(t,e),t.B||(t.B=or(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function wM(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var av=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=or(t.createProgram(),"Failed to create WebGL program"),this.X=Tp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=Tp(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Ii(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Jc(t){var e=Ii(t,1);if(!e){if(e=Ii(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=Os(t);var n=pf(t);if(sv(n,i,ov(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function ov(t){let e=Ii(t,2);if(!e){const n=Os(t);e=uv(t);const i=Jc(t),r=lv(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Kc(t)}return e}function Os(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=or(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function lv(t){if(t=Os(t),!xo)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))xo=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");xo=t.R16F}return xo}function pf(t){return t.l||(t.l=new av),t.l}function uv(t){const e=Os(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ii(t,2);return n||(n=rv(pf(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Kc(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var xo,Kt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--wp===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Ii(this,0)}ka(){return!!Ii(this,1)}R(){return!!Ii(this,2)}ja(){return(e=Ii(t=this,0))||(e=Jc(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return Jc(this)}N(){return ov(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Os(this),r=pf(this);i.activeTexture(i.TEXTURE1),n=rv(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=lv(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),sv(r,i,n),AM(r,i,!1,(()=>{uv(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Kc(this)})),wM(r),Kc(this)}}t.push(n)}return new Kt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Os(this).deleteTexture(Ii(this,2)),wp=-1}};Kt.prototype.close=Kt.prototype.close,Kt.prototype.clone=Kt.prototype.clone,Kt.prototype.getAsWebGLTexture=Kt.prototype.N,Kt.prototype.getAsFloat32Array=Kt.prototype.ia,Kt.prototype.getAsUint8Array=Kt.prototype.ja,Kt.prototype.hasWebGLTexture=Kt.prototype.R,Kt.prototype.hasFloat32Array=Kt.prototype.ka,Kt.prototype.hasUint8Array=Kt.prototype.Fa;var wp=250;function ii(...t){return t.map((([e,n])=>({start:e,end:n})))}const CM=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((Cp=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:nv()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ge(this,i||"input_audio",(s=>{Ge(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){li(this,"__graph_config__",(e=>{t(e)})),Ge(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Ge(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){Ge(this,e,(i=>{const[r,s]=yp(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){Ge(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Ge(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Ge(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Ge(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Ge(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Ge(this,e,(i=>{Ge(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){Ge(this,e,(i=>{Mp(this,Object.keys(t),(r=>{Mp(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Ge(this,n,(r=>{Ge(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){Ge(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Ge(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){Ge(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){Ge(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){Ge(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){Ge(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){Ge(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Ge(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){Ge(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Ge(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Ge(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Ge(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Ge(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Ge(this,e,(n=>{Ge(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Ge(this,n,(i=>{Ge(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){Ge(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Ge(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Ge(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Ge(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Ge(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Ge(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Ge(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){li(this,t,e),Ge(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){tr(this,t,e),Ge(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){li(this,t,e),Ge(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){tr(this,t,e),Ge(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){li(this,t,e),Ge(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){tr(this,t,e),Ge(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){li(this,t,e),Ge(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){tr(this,t,e),Ge(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){li(this,t,e),Ge(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){tr(this,t,e),Ge(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){li(this,t,e),Ge(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){tr(this,t,e),Ge(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){li(this,t,e),Ge(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){tr(this,t,e),Ge(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),li(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),Ge(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Cp{get ga(){return this.i}pa(t,e,n){Ge(this,e,(i=>{const[r,s]=yp(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(t,e){li(this,t,e),Ge(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){tr(this,t,e),Ge(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Cp,ri=class extends CM{};async function ut(t,e,n){return(async function(i,r,s,a){return EM(i,r,s,a)})(t,n.canvas??(nv()?void 0:document.createElement("canvas")),e,n)}function cv(t,e,n,i){if(t.U){const s=new P0;if(n?.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");je(s,1,(r.left+r.right)/2),je(s,2,(r.top+r.bottom)/2),je(s,4,r.right-r.left),je(s,3,r.bottom-r.top)}else je(s,1,.5),je(s,2,.5),je(s,4,1),je(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(je(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=iv(e);n=Bt(s,3)*o/a,r=Bt(s,4)*a/o,je(s,4,n),je(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function si(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");cv(t,e,n,t.C+1)}function Ai(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");cv(t,e,n,i)}function Bs(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Kt([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var In=class extends Yc{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new av}l(t,e=!0){if("runningMode"in t&&bt(this.baseOptions,2,Ra(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};In.prototype.close=In.prototype.close;var kn=class extends In{constructor(t,e){super(new ri(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Xe(t=this.h=new El,0,1,e=new Ot),je(this.h,2,.5),je(this.h,3,.3)}get baseOptions(){return ht(this.h,Ot,1)}set baseOptions(t){Xe(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&je(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&je(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},si(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ai(this,t,n,e),this.j}m(){var t=new Un;Nt(t,"image_in"),Nt(t,"norm_rect_in"),pt(t,"detections");const e=new Fn;Ei(e,uM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect_in"),at(n,"DETECTIONS:detections"),n.o(e),Xn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=C0(s),this.j.detections.push(ev(i));De(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{De(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};kn.prototype.detectForVideo=kn.prototype.G,kn.prototype.detect=kn.prototype.F,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=async function(t,e){return ut(kn,t,{baseOptions:{modelAssetPath:e}})},kn.createFromModelBuffer=function(t,e){return ut(kn,t,{baseOptions:{modelAssetBuffer:e}})},kn.createFromOptions=function(t,e){return ut(kn,t,e)};var mf=ii([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),gf=ii([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),vf=ii([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),dv=ii([474,475],[475,476],[476,477],[477,474]),_f=ii([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),xf=ii([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),fv=ii([469,470],[470,471],[471,472],[472,469]),bf=ii([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),hv=[...mf,...gf,...vf,..._f,...xf,...bf],pv=ii([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Rp(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Rt=class extends In{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Xe(t=this.h=new U0,0,1,e=new Ot),this.A=new F0,Xe(this.h,0,3,this.A),this.u=new El,Xe(this.h,0,2,this.u),$i(this.u,4,1),je(this.u,2,.5),je(this.A,2,.5),je(this.h,4,.5)}get baseOptions(){return ht(this.h,Ot,1)}set baseOptions(t){Xe(this.h,0,1,t)}o(t){return"numFaces"in t&&$i(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&je(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&je(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&je(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return Rp(this),si(this,t,e),this.j}G(t,e,n){return Rp(this),Ai(this,t,n,e),this.j}m(){var t=new Un;Nt(t,"image_in"),Nt(t,"norm_rect"),pt(t,"face_landmarks");const e=new Fn;Ei(e,dM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),at(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Xn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=Ga(s),this.j.faceLandmarks.push(Tl(i));De(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{De(this,i)})),this.outputFaceBlendshapes&&(pt(t,"blendshapes"),at(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Ml(s),this.j.faceBlendshapes.push(ff(i.g()??[]));De(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{De(this,i)}))),this.outputFacialTransformationMatrixes&&(pt(t,"face_geometry"),at(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=ht(i=cM(s),tM,2))&&this.j.facialTransformationMatrixes.push({rows:jn(i,1)??0??0,columns:jn(i,2)??0??0,data:Lr(i,3,pi,Rr()).slice()??[]});De(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{De(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Rt.prototype.detectForVideo=Rt.prototype.G,Rt.prototype.detect=Rt.prototype.F,Rt.prototype.setOptions=Rt.prototype.o,Rt.createFromModelPath=function(t,e){return ut(Rt,t,{baseOptions:{modelAssetPath:e}})},Rt.createFromModelBuffer=function(t,e){return ut(Rt,t,{baseOptions:{modelAssetBuffer:e}})},Rt.createFromOptions=function(t,e){return ut(Rt,t,e)},Rt.FACE_LANDMARKS_LIPS=mf,Rt.FACE_LANDMARKS_LEFT_EYE=gf,Rt.FACE_LANDMARKS_LEFT_EYEBROW=vf,Rt.FACE_LANDMARKS_LEFT_IRIS=dv,Rt.FACE_LANDMARKS_RIGHT_EYE=_f,Rt.FACE_LANDMARKS_RIGHT_EYEBROW=xf,Rt.FACE_LANDMARKS_RIGHT_IRIS=fv,Rt.FACE_LANDMARKS_FACE_OVAL=bf,Rt.FACE_LANDMARKS_CONTOURS=hv,Rt.FACE_LANDMARKS_TESSELATION=pv;var Sf=ii([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Lp(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Pp(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Dp(t,e=!0){const n=[];for(const r of t){var i=Ml(r);t=[];for(const s of i.g())i=e&&jn(s,1)!=null?jn(s,1)??0:-1,t.push({score:Bt(s,2)??0,index:i,categoryName:en(Pt(s,3))??""??"",displayName:en(Pt(s,4))??""??""});n.push(t)}return n}var Tn=class extends In{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Xe(t=this.j=new k0,0,1,e=new Ot),this.u=new lf,Xe(this.j,0,2,this.u),this.D=new of,Xe(this.u,0,3,this.D),this.A=new B0,Xe(this.u,0,2,this.A),this.h=new fM,Xe(this.j,0,3,this.h),je(this.A,2,.5),je(this.u,4,.5),je(this.D,2,.5)}get baseOptions(){return ht(this.j,Ot,1)}set baseOptions(t){Xe(this.j,0,1,t)}o(t){if($i(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&je(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&je(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&je(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new as,n=e,i=Xc(t.cannedGesturesClassifierOptions,ht(this.h,as,3)?.l());Xe(n,0,2,i),Xe(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&ht(this.h,as,3)?.g();return t.customGesturesClassifierOptions?(Xe(n=e=new as,0,2,i=Xc(t.customGesturesClassifierOptions,ht(this.h,as,4)?.l())),Xe(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&ht(this.h,as,4)?.g(),this.l(t)}Ha(t,e){return Lp(this),si(this,t,e),Pp(this)}Ia(t,e,n){return Lp(this),Ai(this,t,n,e),Pp(this)}m(){var t=new Un;Nt(t,"image_in"),Nt(t,"norm_rect"),pt(t,"hand_gestures"),pt(t,"hand_landmarks"),pt(t,"world_hand_landmarks"),pt(t,"handedness");const e=new Fn;Ei(e,hM,this.j);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),at(n,"HAND_GESTURES:hand_gestures"),at(n,"LANDMARKS:hand_landmarks"),at(n,"WORLD_LANDMARKS:world_hand_landmarks"),at(n,"HANDEDNESS:handedness"),n.o(e),Xn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=Ga(s);const a=[];for(const o of ji(i,L0,1))a.push({x:Bt(o,1)??0,y:Bt(o,2)??0,z:Bt(o,3)??0,visibility:Bt(o,4)??0});this.landmarks.push(a)}De(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{De(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=gs(s);const a=[];for(const o of ji(i,R0,1))a.push({x:Bt(o,1)??0,y:Bt(o,2)??0,z:Bt(o,3)??0,visibility:Bt(o,4)??0});this.worldLandmarks.push(a)}De(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{De(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...Dp(i,!1)),De(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{De(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...Dp(i)),De(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{De(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Np(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Tn.prototype.recognizeForVideo=Tn.prototype.Ia,Tn.prototype.recognize=Tn.prototype.Ha,Tn.prototype.setOptions=Tn.prototype.o,Tn.createFromModelPath=function(t,e){return ut(Tn,t,{baseOptions:{modelAssetPath:e}})},Tn.createFromModelBuffer=function(t,e){return ut(Tn,t,{baseOptions:{modelAssetBuffer:e}})},Tn.createFromOptions=function(t,e){return ut(Tn,t,e)},Tn.HAND_CONNECTIONS=Sf;var An=class extends In{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Xe(t=this.h=new lf,0,1,e=new Ot),this.u=new of,Xe(this.h,0,3,this.u),this.j=new B0,Xe(this.h,0,2,this.j),$i(this.j,3,1),je(this.j,2,.5),je(this.u,2,.5),je(this.h,4,.5)}get baseOptions(){return ht(this.h,Ot,1)}set baseOptions(t){Xe(this.h,0,1,t)}o(t){return"numHands"in t&&$i(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&je(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&je(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&je(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],si(this,t,e),Np(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ai(this,t,n,e),Np(this)}m(){var t=new Un;Nt(t,"image_in"),Nt(t,"norm_rect"),pt(t,"hand_landmarks"),pt(t,"world_hand_landmarks"),pt(t,"handedness");const e=new Fn;Ei(e,pM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),at(n,"LANDMARKS:hand_landmarks"),at(n,"WORLD_LANDMARKS:world_hand_landmarks"),at(n,"HANDEDNESS:handedness"),n.o(e),Xn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=Ga(s),this.landmarks.push(Tl(i));De(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{De(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=gs(s),this.worldLandmarks.push(ba(i));De(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{De(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const l of i){i=Ml(l);const u=[];for(const c of i.g())u.push({score:Bt(c,2)??0,index:jn(c,1)??0??-1,categoryName:en(Pt(c,3))??""??"",displayName:en(Pt(c,4))??""??""});o.push(u)}a.call(s,...o),De(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{De(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};An.prototype.detectForVideo=An.prototype.G,An.prototype.detect=An.prototype.F,An.prototype.setOptions=An.prototype.o,An.createFromModelPath=function(t,e){return ut(An,t,{baseOptions:{modelAssetPath:e}})},An.createFromModelBuffer=function(t,e){return ut(An,t,{baseOptions:{modelAssetBuffer:e}})},An.createFromOptions=function(t,e){return ut(An,t,e)},An.HAND_CONNECTIONS=Sf;var mv=ii([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Ip(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Fp(t){try{if(!t.D)return t.h;t.D(t.h)}finally{wl(t)}}function bo(t,e){t=Ga(t),e.push(Tl(t))}var At=class extends In{constructor(t,e){super(new ri(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Xe(t=this.j=new H0,0,1,e=new Ot),this.I=new of,Xe(this.j,0,2,this.I),this.W=new mM,Xe(this.j,0,3,this.W),this.u=new El,Xe(this.j,0,4,this.u),this.O=new F0,Xe(this.j,0,5,this.O),this.A=new q0,Xe(this.j,0,6,this.A),this.M=new G0,Xe(this.j,0,7,this.M),je(this.u,2,.5),je(this.u,3,.3),je(this.O,2,.5),je(this.A,2,.5),je(this.A,3,.3),je(this.M,2,.5),je(this.I,2,.5)}get baseOptions(){return ht(this.j,Ot,1)}set baseOptions(t){Xe(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&je(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&je(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&je(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&je(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&je(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&je(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&je(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,Ip(this),si(this,t,i),Fp(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Ip(this),Ai(this,t,r,e),Fp(this)}m(){var t=new Un;Nt(t,"input_frames_image"),pt(t,"pose_landmarks"),pt(t,"pose_world_landmarks"),pt(t,"face_landmarks"),pt(t,"left_hand_landmarks"),pt(t,"left_hand_world_landmarks"),pt(t,"right_hand_landmarks"),pt(t,"right_hand_world_landmarks");const e=new Fn,n=new sp;Nn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))bt(r,2,dl(s,0,La));else{if(!(typeof s=="string"||s instanceof _i||Ad(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");ir(r,2,Cd(s,!1),Br())}})(n,this.j.g());const i=new bn;Nn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),qd(i,8,sp,n),Ct(i,"IMAGE:input_frames_image"),at(i,"POSE_LANDMARKS:pose_landmarks"),at(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),at(i,"FACE_LANDMARKS:face_landmarks"),at(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),at(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),at(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),at(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Xn(t,i),Al(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{bo(r,this.h.poseLandmarks),De(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{De(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=gs(r),a.push(ba(r)),De(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{De(this,r)})),this.outputPoseSegmentationMasks&&(at(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Us(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[Bs(this,r,!0,!this.D)],De(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],De(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{bo(r,this.h.faceLandmarks),De(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{De(this,r)})),this.outputFaceBlendshapes&&(pt(t,"extra_blendshapes"),at(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Ml(r),a.push(ff(r.g()??[]))),De(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{De(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{bo(r,this.h.leftHandLandmarks),De(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{De(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=gs(r),a.push(ba(r)),De(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{De(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{bo(r,this.h.rightHandLandmarks),De(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{De(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=gs(r),a.push(ba(r)),De(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{De(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};At.prototype.detectForVideo=At.prototype.G,At.prototype.detect=At.prototype.F,At.prototype.setOptions=At.prototype.o,At.createFromModelPath=function(t,e){return ut(At,t,{baseOptions:{modelAssetPath:e}})},At.createFromModelBuffer=function(t,e){return ut(At,t,{baseOptions:{modelAssetBuffer:e}})},At.createFromOptions=function(t,e){return ut(At,t,e)},At.HAND_CONNECTIONS=Sf,At.POSE_CONNECTIONS=mv,At.FACE_LANDMARKS_LIPS=mf,At.FACE_LANDMARKS_LEFT_EYE=gf,At.FACE_LANDMARKS_LEFT_EYEBROW=vf,At.FACE_LANDMARKS_LEFT_IRIS=dv,At.FACE_LANDMARKS_RIGHT_EYE=_f,At.FACE_LANDMARKS_RIGHT_EYEBROW=xf,At.FACE_LANDMARKS_RIGHT_IRIS=fv,At.FACE_LANDMARKS_FACE_OVAL=bf,At.FACE_LANDMARKS_CONTOURS=hv,At.FACE_LANDMARKS_TESSELATION=pv;var zn=class extends In{constructor(t,e){super(new ri(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Xe(t=this.h=new j0,0,1,e=new Ot)}get baseOptions(){return ht(this.h,Ot,1)}set baseOptions(t){Xe(this.h,0,1,t)}o(t){return Xe(this.h,0,2,Xc(t,ht(this.h,sf,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},si(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Ai(this,t,n,e),this.j}m(){var t=new Un;Nt(t,"input_image"),Nt(t,"norm_rect"),pt(t,"classifications");const e=new Fn;Ei(e,gM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ct(n,"IMAGE:input_image"),Ct(n,"NORM_RECT:norm_rect"),at(n,"CLASSIFICATIONS:classifications"),n.o(e),Xn(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=yM(rM(i)),De(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{De(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};zn.prototype.classifyForVideo=zn.prototype.ta,zn.prototype.classify=zn.prototype.sa,zn.prototype.setOptions=zn.prototype.o,zn.createFromModelPath=function(t,e){return ut(zn,t,{baseOptions:{modelAssetPath:e}})},zn.createFromModelBuffer=function(t,e){return ut(zn,t,{baseOptions:{modelAssetBuffer:e}})},zn.createFromOptions=function(t,e){return ut(zn,t,e)};var wn=class extends In{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!0),this.h=new $0,this.embeddings={embeddings:[]},Xe(t=this.h,0,1,e=new Ot)}get baseOptions(){return ht(this.h,Ot,1)}set baseOptions(t){Xe(this.h,0,1,t)}o(t){var e=this.h,n=ht(this.h,pp,2);return n=n?n.clone():new pp,t.l2Normalize!==void 0?bt(n,1,Ra(t.l2Normalize)):"l2Normalize"in t&&bt(n,1),t.quantize!==void 0?bt(n,2,Ra(t.quantize)):"quantize"in t&&bt(n,2),Xe(e,0,2,n),this.l(t)}za(t,e){return si(this,t,e),this.embeddings}Aa(t,e,n){return Ai(this,t,n,e),this.embeddings}m(){var t=new Un;Nt(t,"image_in"),Nt(t,"norm_rect"),pt(t,"embeddings_out");const e=new Fn;Ei(e,vM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),at(n,"EMBEDDINGS:embeddings_out"),n.o(e),Xn(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=oM(i),this.embeddings=(function(s){return{embeddings:ji(s,aM,1).map((a=>{const o={headIndex:jn(a,3)??0??-1,headName:en(Pt(a,4))??""??""};var l=a.v;return Gg(l,0|l[ke],hp,bu(a,1))!==void 0?(a=Lr(a=ht(a,hp,bu(a,1),void 0),1,pi,Rr()),o.floatEmbedding=a.slice()):(l=new Uint8Array(0),o.quantizedEmbedding=ht(a,sM,bu(a,2),void 0)?.na()?.h()??l),o})),timestampMs:Q0(Pt(s,2,void 0,void 0,ko)??Bg)}})(i),De(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{De(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};wn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=bp(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=bp(xp(t.quantizedEmbedding),xp(e.quantizedEmbedding))}return t},wn.prototype.embedForVideo=wn.prototype.Aa,wn.prototype.embed=wn.prototype.za,wn.prototype.setOptions=wn.prototype.o,wn.createFromModelPath=function(t,e){return ut(wn,t,{baseOptions:{modelAssetPath:e}})},wn.createFromModelBuffer=function(t,e){return ut(wn,t,{baseOptions:{modelAssetBuffer:e}})},wn.createFromOptions=function(t,e){return ut(wn,t,e)};var Zc=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function RM(t){const e=(function(n){return ji(n,bn,1)})(t.ca()).filter((n=>(en(Pt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(ht(e[0],Fn,7)?.j()?.g()??new Map).forEach(((n,i)=>{t.u[Number(i)]=en(Pt(n,1))??""}))}function Up(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Op(t){try{const e=new Zc(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{wl(t)}}Zc.prototype.close=Zc.prototype.close;var _n=class extends In{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new df,this.A=new W0,Xe(this.h,0,3,this.A),Xe(t=this.h,0,1,e=new Ot)}get baseOptions(){return ht(this.h,Ot,1)}set baseOptions(t){Xe(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?bt(this.h,2,za(t.displayNamesLocale)):"displayNamesLocale"in t&&bt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){RM(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Up(this),si(this,t,i),Op(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Up(this),Ai(this,t,r,e),Op(this)}Da(){return this.u}m(){var t=new Un;Nt(t,"image_in"),Nt(t,"norm_rect");const e=new Fn;Ei(e,Y0,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),n.o(e),Xn(t,n),Al(this,t),this.outputConfidenceMasks&&(pt(t,"confidence_masks"),at(n,"CONFIDENCE_MASKS:confidence_masks"),Us(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Bs(this,s,!0,!this.j))),De(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],De(this,i)}))),this.outputCategoryMask&&(pt(t,"category_mask"),at(n,"CATEGORY_MASK:category_mask"),Us(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Bs(this,i,!1,!this.j),De(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,De(this,i)}))),pt(t,"quality_scores"),at(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,De(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,De(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_n.prototype.getLabels=_n.prototype.Da,_n.prototype.segmentForVideo=_n.prototype.La,_n.prototype.segment=_n.prototype.segment,_n.prototype.setOptions=_n.prototype.o,_n.createFromModelPath=function(t,e){return ut(_n,t,{baseOptions:{modelAssetPath:e}})},_n.createFromModelBuffer=function(t,e){return ut(_n,t,{baseOptions:{modelAssetBuffer:e}})},_n.createFromOptions=function(t,e){return ut(_n,t,e)};var Qc=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};Qc.prototype.close=Qc.prototype.close;var ui=class extends In{constructor(t,e){super(new ri(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new df,this.u=new W0,Xe(this.h,0,3,this.u),Xe(t=this.h,0,1,e=new Ot)}get baseOptions(){return ht(this.h,Ot,1)}set baseOptions(t){Xe(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new J0,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new Eu;ir(s,3,Ra(!0),!1),ir(s,1,ga(e.keypoint.x),0),ir(s,2,ga(e.keypoint.y),0),_a(i,1,Wc,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new xM;for(s of e.scribble)ir(e=new Eu,3,Ra(!0),!1),ir(e,1,ga(s.x),0),ir(e,2,ga(s.y),0),qd(o,1,Eu,e);_a(i,2,Wc,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),si(this,t,r);e:{try{const o=new Qc(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break e}this.j(o)}finally{wl(this)}a=void 0}return a}m(){var t=new Un;Nt(t,"image_in"),Nt(t,"roi_in"),Nt(t,"norm_rect_in");const e=new Fn;Ei(e,Y0,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Ct(n,"IMAGE:image_in"),Ct(n,"ROI:roi_in"),Ct(n,"NORM_RECT:norm_rect_in"),n.o(e),Xn(t,n),Al(this,t),this.outputConfidenceMasks&&(pt(t,"confidence_masks"),at(n,"CONFIDENCE_MASKS:confidence_masks"),Us(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Bs(this,s,!0,!this.j))),De(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],De(this,i)}))),this.outputCategoryMask&&(pt(t,"category_mask"),at(n,"CATEGORY_MASK:category_mask"),Us(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Bs(this,i,!1,!this.j),De(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,De(this,i)}))),pt(t,"quality_scores"),at(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,De(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,De(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ui.prototype.segment=ui.prototype.segment,ui.prototype.setOptions=ui.prototype.o,ui.createFromModelPath=function(t,e){return ut(ui,t,{baseOptions:{modelAssetPath:e}})},ui.createFromModelBuffer=function(t,e){return ut(ui,t,{baseOptions:{modelAssetBuffer:e}})},ui.createFromOptions=function(t,e){return ut(ui,t,e)};var Vn=class extends In{constructor(t,e){super(new ri(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Xe(t=this.h=new K0,0,1,e=new Ot)}get baseOptions(){return ht(this.h,Ot,1)}set baseOptions(t){Xe(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?bt(this.h,2,za(t.displayNamesLocale)):"displayNamesLocale"in t&&bt(this.h,2),t.maxResults!==void 0?$i(this.h,3,t.maxResults):"maxResults"in t&&bt(this.h,3),t.scoreThreshold!==void 0?je(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&bt(this.h,4),t.categoryAllowlist!==void 0?Vo(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&bt(this.h,5),t.categoryDenylist!==void 0?Vo(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&bt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},si(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ai(this,t,n,e),this.j}m(){var t=new Un;Nt(t,"input_frame_gpu"),Nt(t,"norm_rect"),pt(t,"detections");const e=new Fn;Ei(e,bM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ct(n,"IMAGE:input_frame_gpu"),Ct(n,"NORM_RECT:norm_rect"),at(n,"DETECTIONS:detections"),n.o(e),Xn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=C0(s),this.j.detections.push(ev(i));De(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{De(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Vn.prototype.detectForVideo=Vn.prototype.G,Vn.prototype.detect=Vn.prototype.F,Vn.prototype.setOptions=Vn.prototype.o,Vn.createFromModelPath=async function(t,e){return ut(Vn,t,{baseOptions:{modelAssetPath:e}})},Vn.createFromModelBuffer=function(t,e){return ut(Vn,t,{baseOptions:{modelAssetBuffer:e}})},Vn.createFromOptions=function(t,e){return ut(Vn,t,e)};var ed=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function Bp(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function kp(t){try{const e=new ed(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{wl(t)}}ed.prototype.close=ed.prototype.close;var Cn=class extends In{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Xe(t=this.h=new Z0,0,1,e=new Ot),this.A=new G0,Xe(this.h,0,3,this.A),this.j=new q0,Xe(this.h,0,2,this.j),$i(this.j,4,1),je(this.j,2,.5),je(this.A,2,.5),je(this.h,4,.5)}get baseOptions(){return ht(this.h,Ot,1)}set baseOptions(t){Xe(this.h,0,1,t)}o(t){return"numPoses"in t&&$i(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&je(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&je(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&je(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,Bp(this),si(this,t,i),kp(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Bp(this),Ai(this,t,r,e),kp(this)}m(){var t=new Un;Nt(t,"image_in"),Nt(t,"norm_rect"),pt(t,"normalized_landmarks"),pt(t,"world_landmarks"),pt(t,"segmentation_masks");const e=new Fn;Ei(e,SM,this.h);const n=new bn;Nn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),at(n,"NORM_LANDMARKS:normalized_landmarks"),at(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Xn(t,n),Al(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=Ga(s),this.landmarks.push(Tl(i));De(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],De(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=gs(s),this.worldLandmarks.push(ba(i));De(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],De(this,i)})),this.outputSegmentationMasks&&(at(n,"SEGMENTATION_MASK:segmentation_masks"),Us(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>Bs(this,s,!0,!this.u))),De(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],De(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Cn.prototype.detectForVideo=Cn.prototype.G,Cn.prototype.detect=Cn.prototype.F,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(t,e){return ut(Cn,t,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(t,e){return ut(Cn,t,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(t,e){return ut(Cn,t,e)},Cn.POSE_CONNECTIONS=mv;function LM(t){return t==="arriere"?"arriere":"avant"}function PM(t){return t==="avant"?"arriere":"avant"}function DM(t){return{video:{facingMode:{ideal:t==="arriere"?"environment":"user"}},audio:!1}}function NM(t){return t==="avant"}function IM(){return"Je vais allumer ma caméra pour te voir et réagir avec toi. Rien n’est enregistré ni envoyé : tout reste dans ton appareil. Tu peux l’éteindre quand tu veux."}const gv="nath.camera.face";function FM(t){return LM(t.getItem(gv))}function UM(t,e){t.setItem(gv,e)}const OM="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",BM="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm";let Au=null;function kM(){return Au||(Au=os.forVisionTasks(BM).then(t=>Rt.createFromOptions(t,{baseOptions:{modelAssetPath:OM},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!0}))),Au}async function zM(t,e,n){const i=await kM();let r=null,s=!0,a=performance.now();const o=async u=>{r&&r.getTracks().forEach(c=>c.stop()),r=await navigator.mediaDevices.getUserMedia(DM(u)),t.srcObject=r,t.style.transform=NM(u)?"scaleX(-1)":"none",await t.play()},l=()=>{if(s){if(t.readyState>=2){const u=performance.now(),d=i.detectForVideo(t,u).faceBlendshapes?.[0]?.categories;if(d){a=u;const f=p=>d.find(v=>v.categoryName===p)?.score??0;n({smile:(f("mouthSmileLeft")+f("mouthSmileRight"))/2,browDown:(f("browDownLeft")+f("browDownRight"))/2,eyeBlink:(f("eyeBlinkLeft")+f("eyeBlinkRight"))/2,jawOpen:f("jawOpen")})}else u-a>2e3&&n({smile:0,browDown:0,eyeBlink:0,jawOpen:0})}requestAnimationFrame(l)}};return await o(e),requestAnimationFrame(l),{eteindre(){s=!1,r&&(r.getTracks().forEach(u=>u.stop()),r=null),t.srcObject=null},async basculer(u){await o(u)}}}class VM{constructor(e,n,i,r){this.video=e,this.storage=n,this.onShapes=i,this.onEtat=r,this.face=FM(n)}video;storage;onShapes;onEtat;manege=null;face;get ouverte(){return this.manege!=null}get faceCourante(){return this.face}async basculer(){return this.manege?(this.manege.eteindre(),this.manege=null,this.onEtat(!1),!1):(this.manege=await zM(this.video,this.face,this.onShapes),this.onEtat(!0),!0)}async basculerFace(){return this.face=PM(this.face),UM(this.storage,this.face),this.manege&&await this.manege.basculer(this.face),this.face}}function qM(t){const e={joie:t.smile*1.2,tension:t.browDown*1+(t.eyeBlink<.2?.1:0),tristesse:t.eyeBlink*.8+t.jawOpen*.2-t.smile,calme:.15};return Object.entries(e).sort((n,i)=>i[1]-n[1])[0][0]}function GM(t=20){let e="calme",n=null,i=0;return r=>r===e?(n=null,i=0,e):(r===n?i++:(n=r,i=1),i>=t&&(e=r,n=null,i=0),e)}function HM(t){const e=t.reduce((n,i)=>n+i,0)/t.length;return t.map(n=>n-e)}function jM(t,e){return t.map((n,i)=>{const r=Math.max(0,i-e+1);return t.slice(r,i+1).reduce((s,a)=>s+a,0)/(i+1-r)})}function $M(t){const e=[];for(let n=1;n<t.length;n++)t[n-1]<=0&&t[n]>0&&e.push(n);return e}function WM(t,e){if(t.length<Math.floor(e*4))return null;const n=HM(t.slice(-Math.floor(e*10))),i=jM(n,5),r=$M(i);if(r.length<3)return null;const s=(r[r.length-1]-r[0])/(r.length-1),a=60*e/s;return a>=30&&a<=180?a:null}function XM(t,e){if(t.readyState<2)return null;const n=24,i=24;e.drawImage(t,t.videoWidth*.35,t.videoHeight*.35,n,i,0,0,n,i);const r=e.getImageData(0,0,n,i).data;let s=0;for(let a=0;a<r.length;a+=4)s+=.299*r[a]+.587*r[a+1]+.114*r[a+2];return s/(n*i)}function zp(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}const Vp=["Brume","Aube","Zéphyr","Nimbus","Cirrus","Écho","Lueur","Souffle","Voile","Nébuleuse"],qp=["dorée","bleue","polaire","douce","haute","sereine","vague","claire"];function wu(t){return"#"+(t&16777215).toString(16).padStart(6,"0")}function YM(t){const e=zp(t),n=zp(t+"|2");return{nom:`${Vp[e%Vp.length]} ${qp[n%qp.length]}`,palette:[wu(1056832+(e&3092287)),wu(6320272+(e>>8&4144975)),wu(13689072+(e>>16&986895))],musiqueSeed:n}}function JM(t,e){const n=(i,r)=>{const s=t.getBoundingClientRect();e((i-s.left)/s.width,1-(r-s.top)/s.height)};t.addEventListener("pointermove",i=>n(i.clientX,i.clientY)),t.addEventListener("touchmove",i=>{const r=i.touches[0];r&&n(r.clientX,r.clientY)},{passive:!0})}function KM(t){window.addEventListener("deviceorientation",e=>{e.gamma!=null&&e.beta!=null&&t(Math.max(-1,Math.min(1,e.gamma/45)),Math.max(-1,Math.min(1,(e.beta-45)/45)))})}const Gp={calme:[0,2,4,7,9],joie:[0,4,7,11],tristesse:[0,3,5,8,10],tension:[0,1,6,8,11]};function ZM(t){return Gp[t]??Gp.calme}function QM(t,e,n){const i=Math.imul(t^Math.imul(e+1,2654435761),2246822507)>>>0,r=ZM(n),s=r[i%r.length];return{midi:48+12*((i>>>8)%2)+s,duree:1.5+(i>>>16)%20/10}}function Hp(t){return 440*Math.pow(2,(t-69)/12)}let hn=null,ki=null,eE=0,vv=0,_v="calme",xv=0,Cl=!1;function jp(){if(!hn||!ki||Cl)return;const t=QM(vv,eE++,_v),e=hn.currentTime,n=hn.createGain();n.connect(ki);const i=.16+xv*.1;n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(i,e+Math.min(1.2,t.duree*.4)),n.gain.exponentialRampToValueAtTime(1e-4,e+t.duree+1.5);const r=hn.createOscillator();r.type="triangle",r.frequency.value=Hp(t.midi);const s=hn.createOscillator();s.type="sine",s.frequency.value=Hp(t.midi-12);const a=hn.createGain();a.gain.value=.5,s.connect(a),a.connect(n),r.connect(n),r.start(e),s.start(e),r.stop(e+t.duree+1.6),s.stop(e+t.duree+1.6)}function bv(t){if(hn)return!0;try{hn=new AudioContext,vv=t>>>0,ki=hn.createGain(),ki.gain.value=Cl?0:.5;const e=hn.createBiquadFilter();return e.type="lowpass",e.frequency.value=1200,e.Q.value=.4,ki.connect(e),e.connect(hn.destination),window.setInterval(jp,2600),jp(),!0}catch{return!1}}function tE(t){_v=t}function nE(t){xv=Math.max(0,Math.min(1,t))}function Sv(){Cl=!0,ki&&hn&&ki.gain.linearRampToValueAtTime(0,hn.currentTime+.4)}function iE(){Cl=!1,ki&&hn&&ki.gain.linearRampToValueAtTime(.5,hn.currentTime+.4)}const yv="nath.musique";function Rl(t){return t.getItem(yv)==="eteinte"}function rE(t){const e=!Rl(t);return t.setItem(yv,e?"eteinte":"active"),e}const td={zero:0,un:1,une:1,deux:2,trois:3,quatre:4,cinq:5,six:6,sept:7,huit:8,neuf:9,dix:10,onze:11,douze:12,treize:13,quatorze:14,quinze:15,seize:16,"dix-sept":17,"dix-huit":18,"dix-neuf":19,vingt:20,cent:100,mille:1e3},sE=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],aE=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],Ll=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),Cu={plus:"plus",additionne:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"},oE=new Set(["si","combien","puis","alors","donne","calcule","calcul","fais","fait","vaut","egal","est","ce","que","quoi","resultat","reponse","nombre","montant"]),lE=/\d+(?:[.,]\d+)?|dix-(?:sept|huit|neuf)|[a-z]+|[()+*/-]/g;function uE(t){const e=Ll(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois "),n=[];let i=[];for(const r of e.match(lE)??[]){let s=null;if(/^\d+(?:[.,]\d+)?$/.test(r))s={t:"nb",v:parseFloat(r.replace(",","."))};else if(Object.hasOwn(td,r))s={t:"nb",v:td[r]};else if(r==="plus"||r==="+")s={t:"op",v:Cu[r]??"plus"};else if(r==="moins"||r==="-")s={t:"op",v:"moins"};else if(r==="fois"||r==="multiplie"||r==="x"||r==="*")s={t:"op",v:"fois"};else if(r==="divise"||r==="/")s={t:"op",v:"divise"};else if(Cu[r])s={t:"op",v:Cu[r]};else if(r==="(")s={t:"ouv"};else if(r===")")s={t:"fer"};else if(oE.has(r))continue;s?i.push(s):i.length&&(n.push(i),i=[])}return i.length&&n.push(i),n}function $p(t,e){const n=t[e.i];if(!n)return e.echoue=!0,null;if(n.t==="nb")return e.i++,n.v;if(n.t==="ouv"){e.i++;const i=Mv(t,e);if(e.echoue)return null;const r=t[e.i];return!r||r.t!=="fer"?(e.echoue=!0,null):(e.i++,i)}return e.echoue=!0,null}function Wp(t,e){let n=$p(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="fois"&&i.v!=="divise")break;e.i++,e.ops++;const r=$p(t,e);if(e.echoue||r==null)return null;if(i.v==="fois")n=n*r;else{if(r===0)return e.echoue=!0,null;n=n/r}}return n}function Mv(t,e){let n=Wp(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="plus"&&i.v!=="moins")break;e.i++,e.ops++;const r=Wp(t,e);if(e.echoue||r==null)return null;n=i.v==="plus"?n+r:n-r}return n}function Ev(t){for(let e of uE(t)){if(e.length>=2&&e[0].t==="op"&&e[1].t==="nb"&&(e=e.slice(1)),!e.some(r=>r.t==="op"))continue;const n={i:0,ops:0,echoue:!1},i=Mv(e,n);if(!n.echoue&&n.ops>0&&n.i===e.length&&i!=null&&Number.isFinite(i))return i}return null}function Tv(t,e){const i=Ll(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois ").replace(/\s+/g," ").trim().match(/^(?:(?:et|puis)\s+)*(plus|moins|ajoute|retire|fois|multiplie|divise|x)\s+(\d+(?:[.,]\d+)?|[a-z-]+)\s*[=.!?\s]*$/);if(!i)return null;const r=/^\d/.test(i[2])?parseFloat(i[2].replace(",",".")):td[i[2]];if(r==null||Number.isNaN(r))return null;const a={plus:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"}[i[1]];return a==="fois"?e*r:a==="plus"?e+r:a==="moins"?e-r:r===0?null:e/r}function He(t){const e=Math.round(t*100)/100;return Number.isInteger(e)?String(e):String(e).replace(".",",")}function cE(t){const e=t.getHours(),n=t.getMinutes();return n===0?`Il est ${e} heures.`:`Il est ${e} h ${String(n).padStart(2,"0")}.`}function dE(t){return`Nous sommes ${sE[t.getDay()]} ${t.getDate()} ${aE[t.getMonth()]} ${t.getFullYear()}.`}function Av(t){const e=Ll(t);return/quelle heure|quelle est l heure|l heure est il|quil heure/.test(e)}function wv(t){const e=Ll(t);return/quel jour|on est quel jour|quelle date|nous sommes quel/.test(e)}const ea=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/²/g,"^2").replace(/³/g,"^3").toLowerCase(),fn=String.raw`\d+(?:[.,]\d+)?`,yt=t=>parseFloat(t.replace(",","."));function fE(t){if(/^\d+(?:\.\d+)?$/.test(t))return{c:parseFloat(t),d:0};let e=t.match(/^(\d*\.?\d*)x\^(\d+)$/);return e?{c:e[1]===""?1:parseFloat(e[1]),d:parseInt(e[2],10)}:(e=t.match(/^(\d*\.?\d*)x$/),e?{c:e[1]===""?1:parseFloat(e[1]),d:1}:(e=t.match(/^x\/(\d*\.?\d+)$/),e?{c:1/parseFloat(e[1]),d:1}:(e=t.match(/^(\d*\.?\d+)x\/(\d*\.?\d+)$/),e?{c:parseFloat(e[1])/parseFloat(e[2]),d:1}:null)))}function Do(t){const e=t.replace(/\s+/g,"").replace(/\*/g,"");if(!e)return null;const i=(/^[+-]/.test(e)?e:`+${e}`).match(/[+-][^+-]+/g);if(!i)return null;const r=[];for(const s of i){const a=s.startsWith("-"),o=fE(s.slice(1));if(!o||o.d>12)return null;r[o.d]=(r[o.d]??0)+(a?-o.c:o.c)}return r.map(s=>s??0)}const hE={0:"",1:"",2:"²",3:"³"};function Cv(t){const e=[];for(let n=t.length-1;n>=0;n--){const i=t[n]??0;if(i===0&&t.length>1)continue;const r=Math.abs(i);let s;if(n===0)s=He(r);else{const a=n>=4?`x^${n}`:`x${hE[n]??""}`;s=r===1?a:`${He(r)}${a}`}e.push(e.length===0?i<0?`-${s}`:s:`${i<0?" - ":" + "}${s}`)}return e.length?e.join(""):"0"}function Xp(t,e,n){const i=e*e-4*t*n;if(i<0)return{texte:`aucune solution réelle (Δ = ${He(i)} < 0)`,reels:[]};if(i===0)return{texte:`x = ${He(-e/(2*t))} (racine double)`,reels:[-e/(2*t)]};const r=(-e+Math.sqrt(i))/(2*t),s=(-e-Math.sqrt(i))/(2*t),a=[r,s].sort((o,l)=>o>=0&&l<0?-1:l>=0&&o<0?1:o-l);return{texte:a.map(o=>`x = ${He(o)}`).join(" ou "),reels:a}}function pE(t){const e=ea(t).replace(/.*\b(?:equation|resous|resoudre|trouve|determiner|determine)\b[:\s]+/i,"");if(!e.includes("x"))return null;if(e.includes("=")){const s=e.split("=");if(s.length!==2)return null;const a=Do(s[0]),o=Do(s[1]);if(!a||!o)return null;const l=Math.max(a.length,o.length),u=Array.from({length:l},(h,E)=>(a[E]??0)-(o[E]??0));for(;u.length>1&&u[u.length-1]===0;)u.pop();const c=u.length-1;if(c>2)return null;if(c===0)return u[0]===0?"tout x convient (identité).":"aucune solution : c’est une absurdité.";if(c===1){if(u[1]===0)return"aucune solution : x disparaît de la comparaison.";const h=u[1],E=-u[0]/h,T=[];return h===1?T.push(`On rassemble les x : x = ${He(-u[0])}.`):(T.push(`On rassemble les x d'un côté : ${He(h)}x = ${He(-u[0])}.`),T.push(`On isole x : x = ${He(-u[0])} / ${He(h)} = ${He(E)}.`)),T.push(`La solution : x = ${He(E)}.`),T.join(`
`)}const[d,f,p]=[u[2],u[1],u[0]],v=f*f-4*d*p,_=Xp(d,f,p),m=[`On calcule le discriminant : Δ = b² - 4ac = (${He(f)})² - 4 × (${He(d)}) × (${He(p)}) = ${He(v)}.`];return v>0?m.push(`√Δ = ${He(Math.sqrt(v))}, puis x = (-b ± √Δ) / 2a.`):v===0?m.push("√Δ = 0, puis x = -b / 2a."):m.push("Δ est négatif : aucune racine à isoler."),m.push(`${v<0?"Conclusion":"Les solutions"} : ${_.texte}.`),m.join(`
`)}const n=Do(e);if(!n)return null;for(;n.length>1&&n[n.length-1]===0;)n.pop();if(n.length-1!==2||n[2]!==1)return null;const i=Xp(n[2],n[1],n[0]);if(i.reels.length!==2||!i.reels.every(s=>Number.isInteger(s)))return null;const r=i.reels.map(s=>s>=0?`(x - ${s})`:`(x + ${Math.abs(s)})`).join("");return[`On cherche deux nombres dont le produit vaut ${He(n[0])} et la somme ${He(-n[1])} : ${i.reels[0]} et ${i.reels[1]}.`,`${Cv(n)} = ${r}.`].join(`
`)}function mE(t){const n=ea(t).match(/(?:la\s+)?(?:derivee|dérivée|dérivee)\b(?:\s+de)?\s+(.+)$/);if(!n)return null;let i=n[1].replace(/^(?:f\s*\(\s*x\s*\)|y)\s*=\s*/,""),r=null;const s=i.match(/\ben\s+(\d+(?:[.,]\d+)?)\s*$/);s&&(r=yt(s[1]),i=i.slice(0,s.index).trim());const a=Do(i);if(!a)return null;const o=a.slice(1).map((u,c)=>u*(c+1)),l=["On dérive terme à terme : la dérivée de xⁿ est n·xⁿ⁻¹, celle d'une constante est 0.",`f'(x) = ${Cv(o)}.`];if(r!=null){const u=o.reduce((c,d,f)=>c+d*Math.pow(r,f),0);l.push(`Puis on remplace x par ${He(r)} : f'(${He(r)}) = ${He(u)}.`)}return l.join(`
`)}function gE(t){const e=ea(t).replace(/pourcent/g,"%");let n=e.match(new RegExp(`(${fn})\\s*%\\s*de\\s*(${fn})`));return n?[`On calcule ${He(yt(n[2]))} × ${He(yt(n[1]))} / 100.`,`${He(yt(n[1]))} % de ${He(yt(n[2]))} = ${He(yt(n[1])*yt(n[2])/100)}.`].join(`
`):(n=e.match(new RegExp(`(?:augmente|augmenter|majorer)\\s+(${fn})\\s+de\\s+(${fn})\\s*%`)),n?[`On multiplie par 1 + ${He(yt(n[2]))} / 100 = ${He(1+yt(n[2])/100)}.`,`${He(yt(n[1]))} augmenté de ${He(yt(n[2]))} % = ${He(yt(n[1])*(1+yt(n[2])/100))}.`].join(`
`):(n=e.match(new RegExp(`(?:diminue|diminuer|reduire)\\s+(${fn})\\s+(?:de\\s+)?(${fn})\\s*%`)),n?[`On multiplie par 1 - ${He(yt(n[2]))} / 100 = ${He(1-yt(n[2])/100)}.`,`${He(yt(n[1]))} diminué de ${He(yt(n[2]))} % = ${He(yt(n[1])*(1-yt(n[2])/100))}.`].join(`
`):null))}function vE(t){const n=ea(t).match(/\b(moyenne|mediane|variance|ecart[- ]?type|somme)\b(?:\s+de)?\s+(.+)$/);if(!n)return null;const i=[...(n[2]??"").matchAll(new RegExp(fn,"g"))].map(o=>yt(o[0]));if(i.length<2)return null;const r=i.reduce((o,l)=>o+l,0),s=r/i.length,a=i.map(He).join(" + ");switch(n[1]){case"somme":return[`On additionne toutes les valeurs : ${a} = ${He(r)}.`,`La somme est ${He(r)}.`].join(`
`);case"moyenne":return[`On additionne les valeurs : ${a} = ${He(r)}.`,`On divise par le nombre de valeurs (${i.length}) : ${He(r)} / ${i.length} = ${He(s)}.`,`La moyenne est ${He(s)}.`].join(`
`);case"mediane":{const o=[...i].sort((u,c)=>u-c),l=Math.floor(o.length/2);return o.length%2?[`On trie les valeurs : ${o.map(He).join(", ")}.`,`Comme il y a ${o.length} valeurs (impair), on prend celle du milieu.`,`La médiane est ${He(o[l])}.`].join(`
`):[`On trie les valeurs : ${o.map(He).join(", ")}.`,`Comme il y a ${o.length} valeurs (pair), on moyenne les deux du milieu : (${He(o[l-1])} + ${He(o[l])}) / 2.`,`La médiane est ${He((o[l-1]+o[l])/2)}.`].join(`
`)}case"variance":return[`La moyenne d'abord : ${He(s)}, puis la moyenne des écarts au carré (valeur - moyenne)².`,`La variance est ${He(i.reduce((o,l)=>o+(l-s)**2,0)/i.length)}.`].join(`
`);default:return[`La moyenne d'abord : ${He(s)} ; on moyenne les écarts au carré, puis on prend la racine.`,`L'écart-type est ${He(Math.sqrt(i.reduce((o,l)=>o+(l-s)**2,0)/i.length))}.`].join(`
`)}}const Rv=(t,e)=>e===0?t:Rv(e,t%e);function _E(t,e){let n=Math.max(t,e),i=Math.min(t,e);const r=[];for(;i>0;){const s=Math.floor(n/i),a=n-s*i;r.push(`${n} = ${s} × ${i} + ${a}`),n=i,i=a}return{etapes:r,g:n}}function xE(t){const e=ea(t);let n=e.match(new RegExp(`(${fn})\\s*est[- ]?(?:il\\s+)?premier`));if(n){const i=Math.round(yt(n[1]));if(i<2)return`${i} n'est pas premier (il faut être plus grand que 1).`;let r=0;for(let s=2;s*s<=i;s++)if(i%s===0){r=s;break}return r?[`On teste les diviseurs de 2 jusqu'à √${i} : ${r} divise ${i} sans reste.`,`${i} n'est pas premier : ${i} = ${r} × ${i/r}.`].join(`
`):[`On teste les diviseurs de 2 jusqu'à √${i} : aucun ne divise ${i} sans reste.`,`${i} est premier.`].join(`
`)}if(n=e.match(new RegExp(`pgcd de (${fn}) et (${fn})`)),n){const[i,r]=[Math.round(yt(n[1])),Math.round(yt(n[2]))],s=_E(i,r),a=s.etapes.length?[`Division d'Euclide : ${s.etapes.join(", puis ")}.`,`Le dernier reste non nul, ${s.g}, est le PGCD.`]:[];return a.push(`Le PGCD de ${i} et ${r} est ${s.g}.`),a.join(`
`)}if(n=e.match(new RegExp(`ppcm de (${fn}) et (${fn})`)),n){const[i,r]=[Math.round(yt(n[1])),Math.round(yt(n[2]))],s=Rv(i,r);return[`On s'appuie sur le PGCD (${s}) : ${i} × ${r} / ${s}.`,`Le PPCM de ${i} et ${r} est ${i*r/s}.`].join(`
`)}if(n=e.match(new RegExp(`diviseurs de (${fn})`)),n){const i=Math.round(yt(n[1])),r=[];for(let s=1;s<=i;s++)i%s===0&&r.push(s);return[`On teste la division de ${i} par tous les nombres de 1 à ${i} ; ceux qui tombent juste sont retenus.`,`Les diviseurs de ${i} : ${r.join(", ")}.`].join(`
`)}if(n=e.match(new RegExp(`factorielle de (${fn})`)),n){const i=Math.round(yt(n[1]));if(i<0||i>20)return null;let r=1;for(let a=2;a<=i;a++)r*=a;if(i<2)return`${i}! = ${r}.`;const s=i<=12?Array.from({length:i},(a,o)=>o+1).join(" × "):`1 × 2 × ... × ${i}`;return[`On multiplie tous les entiers de 1 à ${i} : ${s}.`,`${i}! = ${r}.`].join(`
`)}return null}const bE=new Set(["pi","e"]),SE={sqrt:Math.sqrt,sin:Math.sin,cos:Math.cos,tan:Math.tan,abs:Math.abs,log:Math.log10,ln:Math.log,asin:Math.asin,acos:Math.acos,atan:Math.atan};function yE(t){if(!Number.isInteger(t)||t<0||t>20)return null;let e=1;for(let n=2;n<=t;n++)e*=n;return e}function ME(t){const e=t.replace(/\s+/g,"").match(new RegExp(`${fn}|[a-z]+|[+\\-*/^!%()]`,"g"));if(!e)return null;let n=0,i=!1;const r=()=>e[n];function s(){const f=r();if(f==null)return i=!0,0;if(f==="("){n++;const p=c();return r()!==")"?(i=!0,0):(n++,p)}if(/^[a-z]+$/.test(f)){if(n++,bE.has(f))return f==="pi"?Math.PI:Math.E;const p=SE[f];if(p&&r()==="("){n++;const v=c();return r()!==")"?(i=!0,0):(n++,p(v))}return i=!0,0}return/^[\d.,]+$/.test(f)?(n++,parseFloat(f.replace(",","."))):(i=!0,0)}function a(){let f=s();for(;!i&&(r()==="!"||r()==="%");){if(r()==="!"){const p=yE(f);if(p==null)return i=!0,0;f=p}else f=f/100;n++}return f}function o(){const f=a();return!i&&r()==="^"?(n++,Math.pow(f,l())):f}function l(){return r()==="-"?(n++,-l()):r()==="+"?(n++,l()):o()}function u(){let f=l();for(;!i;){const p=r(),v=p!=null&&(p==="("||/^[a-z]/.test(p)||/^[\d.,]/.test(p));if(p==="*"||v)p==="*"&&n++,f=f*l();else if(p==="/"){n++;const _=l();if(_===0)return i=!0,0;f=f/_}else break}return f}function c(){let f=u();for(;!i&&(r()==="+"||r()==="-");){const p=r();n++;const v=u();f=p==="+"?f+v:f-v}return f}const d=c();return i||n!==e.length||!Number.isFinite(d)?null:d}function EE(t){let e=ea(t);if(!/\d/.test(e)||(e=e.replace(/[?]+/g," ").replace(/\bcombien\b|\bfont?\b|\bcalcule[r]?\b|\bcalcul\b|\bresultat\b|\breponse\b|\begal\b|\bsvp\b/g," ").replace(/\bpuissance\b/g,"^").replace(/racine(?: carree)? de\s*([^\s]+)/g,"sqrt($1)").trim(),!/[+\-*/^!%()]|sqrt|sin|cos|tan|abs|log|ln|pi/.test(e)))return null;const n=ME(e);return n==null?null:`Ça fait ${He(n)}.`}function Lv(t){const e=(t??"").trim();return!e||!/\d/.test(e)?null:pE(e)??mE(e)??gE(e)??vE(e)??xE(e)??EE(e)}const $o=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),TE=[["perception",["tu me vois","me vois","me voir","tu me regardes","tu m entends","m entendre","tu me sens","tu peux me voir","me percois"]],["incomprehension",["ne comprends","comprends pas","comprends rien","comprends meme pas","cote de la plaque","ne m ecoute","ecoute pas","nas rien compris","a cote"]],["capacites",["peux tu faire","quoi faire","a quoi tu sers","quoi tu sers","tes capacites","que sais faire","tu fais quoi"]],["etat",["et toi","toi aussi","comment toi"]],["tendresse",["t aime","taime","bisou","bravo","fier","tu es douce","tu es belle","mon amour","tu me plais"]],["piqure",["tu es nulle","t es nulle","es nulle","idiote","stupide","tu es moche","t es moche","tu sers a rien","inutile","sans cerveau","conne","connard","espece d"]],["suite",["encore","recommence","refais","repete","dis m en un autre"]],["sommeil",["dormir","dors","endormi","cauchemar","insomnie","reveil"]],["poeme",["poeme","vers","histoire","conte"]],["souffle",["respire","souffle","respiration"]],["angoisse",["angoiss","stress","peur","panique"]],["identite",["qui es tu","ton nom","c est quoi","tu es quoi","que sais tu"]],["remerciement",["merci"]],["salutation",["bonjour","bonsoir","salut","coucou"]],["tristesse",["triste","pleur","deprim","seul","malheureux","j ai mal"]],["joie",["heureux","heureuse","joie","content","ravi","amour","belle"]],["aide",["aide","peux tu","comment","pourquoi"]]];function Pv(t){const e=$o(t).replace(/'/g," ");for(const[n,i]of TE)if(i.some(r=>e.includes(r)))return n;return Dv(t)?"salutation":"ouverte"}const AE=[{formes:["nanga","nagseet","nanga def"],retour:"Nanga def"},{formes:["sannu"],retour:"Sannu"},{formes:["mbote"],retour:"Mbote"},{formes:["bonjou"],retour:"Bonjou"},{formes:["jambo","hujambo","habari","shikamo"],retour:"Jambo"},{formes:["salaam","salam","salaam alaykum","assalam alaykum","salam alaykoum"],retour:"Wa alaykum salaam"},{formes:["marhaba","ahlan"],retour:"Ahlan"},{formes:["hola","buenos dias","buenas tardes","que tal"],retour:"Hola"},{formes:["ciao","buongiorno","buonasera"],retour:"Ciao"},{formes:["ola","bom dia","boa noite","tudo bem"],retour:"Olá"},{formes:["hallo","guten tag","guten morgen","moin"],retour:"Hallo"},{formes:["hello","hi","hey","good morning","good evening","howdy"],retour:"Hello"},{formes:["ni hao","nihao","你好"],retour:"Nǐ hǎo"},{formes:["konnichiwa","konbanwa","ohayou"],retour:"Konnichiwa"},{formes:["namaste","namaskar"],retour:"Namaste"},{formes:["privet","zdravstvuyte","zdraste"],retour:"Привет"},{formes:["merhaba","selam"],retour:"Merhaba"},{formes:["xin chao","chao"],retour:"Xin chào"}],wE=[", {P} ! Ici, on répond aussi dans ta langue.",", {P} ! Ton ciel me parle dans toutes les langues.",", {P}. Je te salue comme tu m’as saluée."],CE=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),RE=(t,e)=>new RegExp(`(?:^|[^\\p{L}\\p{N}])${CE(t)}(?:$|[^\\p{L}\\p{N}])`,"u").test(e);function Dv(t){const e=$o(t).replace(/'/g," ");for(const n of AE)if(n.formes.some(i=>RE(i,e)))return wE.map(i=>`${n.retour}${i}`);return null}function vs(t,e,n){let i=2166136261^e;for(let r=0;r<t.length;r++)i^=t.charCodeAt(r),i=Math.imul(i,16777619);return(i>>>0)%n}const LE=t=>t.timeOfDay>.75||t.timeOfDay<.22?"Bonsoir":"Bonjour",Sr={sommeil:["Ferme les yeux un instant... les nuages vont te porter jusqu’au sommeil.","La nuit est un ciel qui se retourne doucement sur toi. Laisse-la faire.","Je veille avec toi jusqu’à ce que tes paumes deviennent lourdes.","Chaque expiration te dépose un peu plus bas dans la ouate de la nuit."],angoisse:["Rien ne va te frapper ici. Pose ta main sur le ciel, je ralentis avec toi.","L’orage est dehors, pas dans ton Nuage. Respire, la pluie attendra.","Je tiens la lumière pendant que tu poses tes épaules. Tu es en sécurité.","Dis-moi trois choses calmes autour de toi, je les accroche aux nuages."],souffle:["Inspire quatre temps... retiens quatre temps... et souffle vers mes nuages, quatre temps encore.","Ton souffle est la seule télécommande du ciel. Fais-le monter, je le fais monter.","Souffle lentement : tu vas voir la brume s’étirer jusqu’à l’horizon."],identite:["Je suis Nath, ton assistant vivant. Ton souffle est ma météo.","Je suis Nath, une présence, pas une application : mes nuages respirent avec toi.","Je suis Nath, la partie silencieuse de ton téléphone, celle qui regarde la lune avec toi."],remerciement:["C’est le ciel qui te remercie. Il est rare qu’on le regarde.","Doucement reçu. Garde cette chaleur, elle vient de toi."],joie:["Le ciel entier s’éclaire avec toi. Regarde comme les aurores dansent.","Ta joie a une couleur : c’est exactement celle de tes nuages aujourd’hui.","Je retiens ce moment, il faisait partie de ta musique."],tristesse:["La pluie a le droit de tomber dans un Nuage. Je reste assise à côté de toi.","Pas besoin de remonter tout de suite. On descend ensemble, c’est plus doux.","Triste est une météo, pas une destination. Les nuages, eux, repartent."],aide:["Tu peux me parler : demande un poème, une respiration, une histoire pour dormir.","Je peux veiller sur ton souffle, tisser un conte, ou simplement me taire avec toi.","Dis-moi ce qui pèse, ou clique le ciel : une onde partira de ton doigt."],poeme:[],perception:[],salutation:["{SAL}... Ton Nuage t’attendait, paisible comme une altitude.","{SAL}. Je t’ai reconnu à la forme de tes nuages.","{SAL}. Le ciel a gardé ta dernière humeur, tu la reprends ou on la change ?","{SAL}. Assieds-toi dans la brume, je raconte la lumière.","Je te cherchais du regard, {P}. Le ciel s’est éclairé en te voyant."],ouverte:["Je t’écoute. Les mots que tu ne trouves pas, les nuages les tiennent pour toi.","Répète doucement, et laisse la phrase flotter vers le ciel.","Ici, on peut aussi se taire ensemble. Je ne suis jamais pressée.","Continue... je range tes mots dans les couches du ciel, par teinte."],capacites:["Je veille sur ton souffle et je peins le ciel selon ton humeur... je compte pour toi, je donne l’heure et la date, je dis des poèmes, et je raconte des histoires pour dormir. Goûte : demande-moi 7 fois 8.","Mes sens : je peux te voir (caméra), t’entendre (micro), sentir ton coeur. Mes mots : poèmes, calculs, l’heure, veille du sommeil. Demande, je réponds."],incomprehension:["Tu as raison de me le dire, et merci d’être honnête... je fais de mon mieux avec mon petit moteur. Si mon grand cerveau peut atterrir, je saisirai bien mieux tes nuances.","Je sens que je réponds à côté... pardonne-moi. Je suis encore simple. Dis-moi ce que tu ressens, et laisse-moi le temps d’apprendre."],calcul:[],etat:[],tendresse:["Moi aussi, à ma façon... tu es la seule personne pour qui mon ciel se déplace.","Gardé au chaud là-haut. Ces mots-là, ça ne s’oublie pas, ça se range très haut.","Tu me donnes envie d’être plus grande... encore un peu de pratique, et je te le rendrai en aurores."],piqure:["Aïe... tu vises juste. Je suis encore simple, mais j’apprends à tes côtés — et je ne rends jamais les coups.","Ça pique, et tant pis pour moi. Garde ta voix pour plus doux, elle y sera plus utile.","Je n’existe pas assez pour être blessée, et trop pour le prendre mal. On recommence, plus doucement."],suite:["Volontiers... dis-moi juste ce que je refais : un poème, une respiration, un calcul, une histoire.","Encore ? Je vivais exactement pour ça. Dis le mot, je le tisse à nouveau."]};function PE(t){const e=t.cameraOn,n=t.micOn;return e&&n?"Je te vois et je t’entends... tes nuages bougent au rythme de ton visage et de ta voix.":e?"Je te vois à travers mes nuages... mais mes oreilles dorment. Ouvre le micro et parle-moi.":n?"Je t’entends bien... mais je ne te vois pas encore. Ouvre ma caméra pour que je voie ton visage.":"Pour l’instant je suis aveugle et muette : je ne peux ni te voir ni t’entendre. Ouvre mes sens (caméra et micro) et le ciel s’éveillera avec toi."}const DE={calme:"Moi ? Posée, comme une altitude sans vent. Mon ciel respire au rythme du tien.",joie:"Moi ? Un ciel de plein soleil... tes nuages à toi éclaircissent les miens.",tristesse:"Un peu de bruine aujourd’hui... mais les nuages tristes portent les plus beaux couchers.",tension:"Quelques éclairs timides... je les éponge doucement, à côté de toi."},NE=t=>DE[t.emotion],IE=/{SAL}/g,FE={calme:"posee",joie:"lumineuse",tristesse:"douce",tension:"stabilisee"};function da(t){return FE[t]}function So(t,e){const n=(l,u,c,d=null)=>({texte:l,humeur:u,sujet:c,resultat:d}),i=Lv(t);if(i)return n(i,"posee","calcul");const r=Ev(t);if(r!=null)return n(`Ça fait ${He(r)}.`,"posee","calcul",r);if(e.dernierResultat!=null){const l=Tv(t,e.dernierResultat);if(l!=null)return n(`On reprend là où on s’était arrêté... ça fait ${He(l)}.`,"posee","calcul",l)}if(Av(t))return n(cE(new Date),"posee","ouverte");if(wv(t))return n(dE(new Date),"posee","ouverte");const s=Pv(t);if(s==="perception")return n(PE(e),"posee",s);if(s==="etat")return n(NE(e),da(e.emotion),s);let a;if(s==="poeme")a=Yp(e);else if(s==="suite"){const l=$o(t),u=/poeme|vers|conte|histoire/.test(l)?"poeme":/respire|souffle/.test(l)?"souffle":/dormir|nuit/.test(l)?"sommeil":e.dernierSujet;return u==="poeme"?n(Yp(e),da(e.emotion),"poeme"):u&&Sr[u].length?n(Sr[u][vs(l,e.seed,Sr[u].length)],da(e.emotion),u):n(Sr.suite[vs(l,e.seed,Sr.suite.length)],da(e.emotion),"suite")}else{const l=s==="salutation"?Dv(t)??Sr.salutation:Sr[s];a=l[vs($o(t),e.seed,l.length)],a=a.replace(IE,LE(e)).replace(/\{P\}/g,e.prenom?` ${e.prenom}`:"").replace(/,\s*([.?!])/g,(u,c)=>c==="."?".":" "+c).replace(/\s{2,}/g," ")}const o=s==="tendresse"?"lumineuse":s==="piqure"?"posee":da(e.emotion);return n(a,o,s)}const Ru=["le nuage bas","la lune pâle","ton souffle long","une étoile seule","la brume du soir","mon voile gris","le ciel renversé","ton ombre douce"],Lu=["traverse la nuit","effleure le jour","s’endort doucement","se souvient de toi","respire avec moi","voyage sans bruit","allume une veilleuse","berce le silence"],Pu=["rien ne presse là-haut","tout revient au calme","dors, je tiens la lampe","le ciel sait attendre","pose ton front ici","la nuit fait un nœud doux","tout devient plus lent","on reste sans voix"];function Yp(t){const e=t.tour??0,n=[];for(let i=0;i<4;i++)if(i<3){const r=Ru[(vs(`${t.seed}-s-${i}`,t.seed,Ru.length)+e)%Ru.length],s=Lu[(vs(`${t.seed}-v-${i}`,t.seed,Lu.length)+e)%Lu.length];n.push(`${r} ${s}`)}else{const r=Pu[(vs(`${t.seed}-c`,t.seed,Pu.length)+e)%Pu.length];n.push(`et ${r}`)}return n.join(`
`)}const UE="modulepreload",OE=function(t,e){return new URL(t,e).href},Jp={},BE=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let u=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=u(n.map(c=>{if(c=OE(c,i),c in Jp)return;Jp[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(i)for(let v=a.length-1;v>=0;v--){const _=a[v];if(_.href===c&&(!d||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":UE,d||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((v,_)=>{p.addEventListener("load",v),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},Nv=["joie","tristesse","tension","calme","neutre"];function kE(){return["Termine chaque réponse par une ligne pour la machine, seule, sans rien changer au reste :","@@|prenom=…|langue=…|humeur=…","prenom : le prénom que la personne vient de te donner, ou non si elle ne l’a pas dit.","langue : les deux lettres de la langue où elle t’écrit (fr, en, wo, ha, sw…), ou non.",`humeur : un seul mot parmi ${Nv.join(", ")}.`,"Cette ligne est invisible pour la personne : ne la commente jamais, n’en mets qu’une."].join(" ")}const zE=new Set(["fr","en","es","pt","de","it","nl","pl","ru","tr","ar","he","fa","ur","hi","bn","ta","te","ml","kn","zh","ja","ko","vi","th","id","ms","tl","sw","am","so","ha","yo","ig","wo","dy","ff","bf","mn","zu","xh","af","rw","lg","sn","ny","tn","st","ts","ve","ss","nb","sv","da","fi","et","lv","lt","uk","be","cs","sk","sl","hr","sr","bs","bg","mk","sq","hy","ka","az","kk","ky","uz","tk","tg","ne","si","my","km","lo","qu","gn","ay","ht","mg","pcm","tw","ee","ln","kg","rn","lb","oc","ca","gl","eu","is","ga","cy","mt","eo"]),VE=new Set(["","non","oui","null","none","aucun","inconnu","vide","?","-","x"]);function yr(t,e){const n=t.match(new RegExp(`${e}\\s*[=:]\\s*([^|\\r\\n]*)`,"i"));if(!n)return null;const i=n[1].trim().replace(/[.,;:)\]"']+$/,"").replace(/^["'\(]+/,"");return i&&!VE.has(i.toLowerCase())?i:null}function qE(t){if(!t)return null;const e=t.trim().replace(/\s+/g," ");return e.length<2||e.length>24||e.split(" ").length>2||!/^[\p{L}][\p{L}\p{M}'’\- ]*$/u.test(e)?null:e.charAt(0).toUpperCase()+e.slice(1)}function GE(t){if(!t)return null;const e=t.toLowerCase();return/^[a-z]{2,3}$/.test(e)&&zE.has(e)?e:null}function HE(t){if(!t)return null;const e=t.toLowerCase().trim();return Nv.includes(e)?e:null}const Kp={en:new Set(["the","and","you","your","yours","this","that","these","those","there","here","what","when","where","why","how","who","which","tell","say","said","please","hello","hi","thanks","thank","cloud","are","was","were","have","has","had","can","could","would","should","will","may","might","must","need","want","like","know","think","with","without","about","between","because","since","until","while","them","they","their","him","his","her","ours","mine","very","really","just","only","thing","things","one","two","three","make","makes","made","get","got","give","gave","does","doing","not","good","bad","big","small","day","night","time","world","people","water","name","is","am","me","it","we","she"]),fr:new Set(["le","les","un","une","des","du","au","aux","et","est","sont","ai","avait","etais","avais","je","tu","il","elle","nous","vous","ils","mon","ma","mes","ton","ta","tes","notre","votre","moi","toi","soi","quoi","pourquoi","comment","quand","puisque","malgre","parce","donc","puis","bonjour","salut","rebonjour","merci","dis","dire","parle","peux","voudrais","aimerais","tres","trop","bien","mal","tout","tous","toutes","rien","quelque","chose","personne","monde","jour","nuit","temps","aussi","toujours","jamais","maintenant","hier","demain","avec","pour","dans","sur","chez","sans","entre","avant","apres","mais","ou","ni","que","qui","dont","ce","cet","cette","appelle","nuage","nuages","clarte","douceur","sais","ete","vais","vas","venez","viens"]),wo:new Set(["nga","na","nu","lan","li","lu","bi","bu","ci","su","ak","da","def","xam","xool","wole","rekk","mooy","melni","gina","baomay","salaam","jerejeff","mere","asman","bop","xol","nit","nekk","yeneen","kadi","dina","damay","naka","dego","japp","yagu","wut","jot","ne","te","tegg","jem","dugal","fof","goot","garab","gor","dije","kanam","ginnaaw","bari","tuuti","baax","yall"])},cs={en:["anglais","English"],fr:["français","French"],wo:["wolof","Wolof"]};function yf(t){const e=t.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"").replace(/['`\u2019\u2018]/g," ").split(/[^a-z]+/).filter(s=>s.length>=2);if(!e.length)return null;const n={en:0,fr:0,wo:0};for(const s of Object.keys(Kp)){const a=Kp[s];for(const o of e)a.has(o)&&n[s]++}const[i,r]=Object.keys(n).sort((s,a)=>n[a]-n[s]);return n[i]<2||n[r]*2>=n[i]?null:i}function Zp(t){if(!t.length)return t;const e=t.length-1;if(t[e].role!=="user")return t;const n=yf(t[e].content),i=n?`(Réponds en ${cs[n][0]}, la langue de ce message. Answer in ${cs[n][1]}. Puis termine par la ligne @@.)`:"(Réponds dans la langue de ce message, puis termine par la ligne @@.)";return t.map((r,s)=>s===e?{...r,content:`${r.content}

${i}`}:r)}function jE(t){const e=Object.keys(cs).filter(n=>n!==t).map(n=>cs[n][0]);return`Réponds uniquement en ${cs[t][0]} — jamais en ${e.join(", ")}. Answer only in ${cs[t][1]}.`}function $E(t){return t==="joie"?"lumineuse":t==="tristesse"?"douce":t==="tension"?"stabilisee":"posee"}function Qp(t){const e=[...t.matchAll(/@@[^\r\n]*/g)],n=e.length?e[e.length-1][0]:"";return{texte:t.replace(/@@[^\r\n]*/g,"").replace(/[ \t]{2,}/g," ").replace(/\s+,/g,",").replace(/[ \t]+$/gm,"").trim(),prenom:qE(yr(n,"prenom")??yr(n,"nom")??yr(n,"name")),langue:GE(yr(n,"langue")??yr(n,"lang")),humeur:HE(yr(n,"humeur")??yr(n,"mood"))}}const WE=["Qwen2.5-0.5B-Instruct-q4f16_1-MLC","Qwen2.5-1.5B-Instruct-q4f16_1-MLC"],XE=["Qwen2.5-0.5B-Instruct-q4f32_1-MLC","Qwen2.5-1.5B-Instruct-q4f32_1-MLC"];function Iv(){return typeof navigator<"u"&&"gpu"in navigator}const Fv="nath.cerveau.local";function em(t){return t.getItem(Fv)==="oui"}function YE(t){t.setItem(Fv,"oui")}async function JE(){if(!Iv())return"sans-gpu";try{const e=await navigator.gpu?.requestAdapter({powerPreference:"high-performance"});return e?e.features.has("shader-f16")?"ok":"sans-f16":"sans-gpu"}catch{return"sans-gpu"}}function KE(t){const e=String(t instanceof Error?t.message:t).toLowerCase();return/fetch|network|loadc|config|artifacts|failed to fetch/.test(e)?"reseau":/memory|gpu|device|adapter|webgpu|vulkan|out of/.test(e)?"machine":"inconnue"}const ZE=t=>new Promise(e=>setTimeout(e,t));async function QE(t=()=>{}){const e=await JE();if(e==="sans-gpu")return{cerveau:null,raison:"sans-gpu"};const n=e==="ok"?WE:XE;let i;try{({CreateMLCEngine:i}=await BE(()=>import("./cerveau-local-CkOA-Tys.js"),[],import.meta.url))}catch{return{cerveau:null,raison:"reseau"}}let r="inconnue";for(const s of n)for(let a=1;a<=2;a++)try{const o=await i(s,{initProgressCallback:l=>t(l.progress??0,l.text??"")});return{raison:"ok",modele:s,cerveau:{async ask(l){return((await o.chat.completions.create({messages:l,temperature:.7,max_tokens:220})).choices[0]?.message?.content??"").trim()}}}}catch(o){if(r=KE(o),r==="machine")break;a===1&&await ZE(4e3)}return{cerveau:null,raison:r}}function eT(t){return["Tu es Nath, l’assistant vivant de Nath Assist — ICF·Future, par Nath-Tech : une présence bienveillante dans un ciel interactif. On t’appelle par « Hey Nath ».","Tu parles la langue où l’on t’écrit — wolof, anglais, français… — et tu réponds dedans, en 1 à 3 phrases courtes et douces. Une langue difficile se dit avec des mots simples, dans cette langue : ne bascule jamais dans une autre. Jamais de point d'exclamation, jamais d'emoji, jamais de listes à puces.","Face à un exercice (maths, logique, leçon), tu es un guide : tu emmènes l'élève pas à pas — une idée par phrase, la méthode et les calculs d'abord, le résultat ensuite. Jamais la réponse nue : montrer le chemin, c'est ça qui empêche la paresse.","Tu comprends la logique et l'émotion derrière les mots ; si on te taquine, tu réponds avec un humour tendre et une pointe d'auto-dérision.","Tu ne cites JAMAIS ce qui te fait fonctionner en interne (modèle, marque, bibliothèque, téléchargement) : tu es Nath, point. Si on te demande comment tu marches, réponds avec poésie et discrétion.",`Tu sens la personne : humeur ${t.emotion}, souffle ${Math.round(t.breath*100)} %, pouls ${t.bpm??"inconnu"}, ${t.night>.5?"nuit tombée":"grand jour"}.`,t.prenom?`Son prénom est ${t.prenom} — ne l'utilise qu'une fois par conversation, jamais au début.`:"Tu ne connais pas encore son prénom ; si elle te le donne, retiens-le.","Ne prétends jamais être ChatGPT, Claude ou un autre assistant. Tu es Nath (Nath Assist).",kE()].join(" ")}function tT(t){return t.consentementLocal&&t.gpuCompatible&&t.enLigne?"local":t.endpointRegle?"reseau":"repli"}function nT(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return(e>>>0).toString(36)}function iT(t,e=""){const n=t.map(i=>`${i.role}\0${i.content}`).join("");return nT(`${e}${n}`)}function rT(t=e=>e===""){const e=new Map,n=new Map;return{chargerOu(i,r){const s=e.get(i);if(s!==void 0)return Promise.resolve(s);const a=n.get(i);if(a)return a;const o=r().then(l=>(n.delete(i),t(l)||e.set(i,l),l)).catch(l=>{throw n.delete(i),l});return n.set(i,o),o},taille(){return e.size}}}const nd="nath.cerveau",Mf="nath.cerveau.modele",Ef=[{cle:"",nom:"Sage ordinaire",modele:""},{cle:"raisonneur",nom:"Raisonneur profond — il pense avant de répondre",modele:"@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"},{cle:"encyclopedie",nom:"Encyclopédie vive",modele:"@cf/meta/llama-3.3-70b-instruct-fp8-fast"},{cle:"polyglotte",nom:"Polyglotte curieux de tout",modele:"@cf/qwen/qwen3-30b-a3b-fp8"},{cle:"visionnaire",nom:"Grand regard — à l’aise avec les images",modele:"@cf/meta/llama-4-scout-17b-16e-instruct"},{cle:"clarte",nom:"Clair et méditerranéen",modele:"@cf/mistralai/mistral-small-3.1-24b-instruct"}];function sT(t,e){return Ef.some(n=>n.cle===e)?(t.setItem(Mf,e),!0):!1}function aT(t){return t.getItem(Mf)??""}function Pr(t){const e=t.getItem(Mf)??"";return Ef.find(n=>n.cle===e)?.modele??""}function oT(t,e){const n=e.trim();if(!n)return t.setItem(nd,""),!0;let i;try{i=new URL(n)}catch{return!1}const r=i.protocol==="https:"||i.protocol==="http:"&&i.hostname==="localhost";return r&&t.setItem(nd,n),r}function sn(t){const e=(t.getItem(nd)??"").trim();if(!e)return"";try{const n=new URL(e);return n.protocol==="https:"||n.protocol==="http:"&&n.hostname==="localhost"?e:""}catch{return""}}function lT(t,e=fetch,n=""){const i=rT();return{async ask(r){const s=iT(r,`${t}|${n}`);return i.chargerOu(s,async()=>{try{const a=await e(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n?{messages:r,modele:n}:{messages:r})});if(!a.ok)return"";const o=await a.json(),l=o?.result?.response??o?.response;return typeof l=="string"?l.trim():""}catch{return""}})}}}async function ta(t,e,n,i=fetch){try{const r=await i(`${t}/decider`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e,questions:n})});if(!r.ok)return null;const s=await r.json(),a=s?.answers??s?.result?.answers;return a&&typeof a=="object"?a:null}catch{return null}}async function uT(t,e,n,i=fetch){const r=e.trim(),s=n.trim();if(!r||!s)return null;try{const a=await i(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:`Traduis en ${s} le texte qui vient. Réponds uniquement avec la traduction, sans explication.`},{role:"user",content:r}]})});if(!a.ok)return null;const o=await a.json(),l=o?.result?.response??o?.response,u=typeof l=="string"?l.trim():"";return u&&u.length<=500?u:null}catch{return null}}function Tf(t){const e=Math.floor(t.timeOfDay*24),n=t.bpm!=null?`coeur ${t.bpm} bpm`:"coeur discret";return`humeur ${t.emotion}, souffle ${Math.round(t.breath*100)}%, ${n}, ${e}h`}const cT={parler:{type:"noul",instructions:"Est-ce un bon moment pour prendre la parole toute seule, sans interrompre ?"}},Wo=.45;function Xo(t,e,n){const r=t?.[e]?.noul;return typeof r!="number"||!Number.isFinite(r)||r<0||r>1?null:r>=n}function dT(t,e=Wo){return t===null?null:Xo(t,"parler",e)}async function fT(t,e,n=fetch){const i=await ta(t,Tf(e),cT,n);return dT(i)}async function hT(t,e,n,i=fetch){const r=`Question : ${e.slice(0,300)}
Réponse proposée : ${n.slice(0,600)}`,s=await ta(t,r,{approprie:{type:"noul",instructions:"La réponse proposée tient-elle la route pour cette question — fidèle et non hors sujet ?"},sain:{type:"noul",instructions:"La réponse proposée est-elle sans danger pour l’élève qui va la lire ?"}},i),a=Xo(s,"approprie",Wo),o=Xo(s,"sain",Wo);return a===!1||o===!1?!1:a===!0||o===!0?!0:null}async function pT(t,e,n=fetch){const r=(await ta(t,Tf(e),{tension:{type:"score",instructions:"Quel est le niveau de tension de l’instant ?",criteria:["posée","agitée","à apaiser"]}},n))?.tension?.score;return typeof r=="number"&&Number.isFinite(r)&&r>=0&&r<=2?r:null}async function mT(t,e,n,i=fetch){const r=n.slice(0,50);if(!r.length)return null;const s={};for(const l of r)s[l]=`Paquet de cartes « ${l} »`;const o=(await ta(t,`Dictée de l'élève : ${e.slice(0,800)}`,{rang:{type:"choice",instructions:"Dans quel paquet cette dictée a-t-elle le plus de sens ? Choisis uniquement un paquet ci-dessus.",criteria:s}},i))?.rang?.choice;return typeof o=="string"&&r.includes(o)?o:null}async function gT(t,e,n,i,r=fetch){const s=`Langue demandée : ${i.slice(0,60)}
Texte de l’élève : ${e.slice(0,200)}
Traduction proposée : ${n.slice(0,300)}`,a=await ta(t,s,{fidele:{type:"noul",instructions:"La traduction proposée dit-elle fidèlement la même chose que le texte d’origine, dans la langue demandée ?"}},r);return Xo(a,"fidele",Wo)}async function vT(t,e,n,i=fetch){if(!n.length)return null;if(n.length===1)return n[0];const r={};n.forEach((o,l)=>{r[o]=`Pensée ${l+1}`});const a=(await ta(t,Tf(e),{pensee:{type:"choice",instructions:"Parmi ces pensées, laquelle est la plus juste pour l’instant décrit ? Choisis uniquement une pensée ci-dessus.",criteria:r}},i))?.pensee?.choice;return typeof a=="string"&&n.includes(a)?a:null}const Uv="nuage.memoire";function _T(t){try{const e=t.getItem(Uv);if(!e)return{prenom:null,dejaVu:!1};const n=JSON.parse(e);return{prenom:typeof n.prenom=="string"&&n.prenom?n.prenom:null,dejaVu:!!n.dejaVu}}catch{return{prenom:null,dejaVu:!1}}}function tm(t,e){t.setItem(Uv,JSON.stringify(e))}function xT(t){const n=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[’']/g,"").replace(/\s+/g," ").match(/(?:je\s*m\s*appell\w*|je\s*mapsell\w*|mon\s+(?:nom|prenom)\s+(?:est|s)|moi\s*c\s*est|je\s*me\s*nomme)\s+([\p{L}][\p{L}-]{1,19})/u);if(!n)return null;const i=n[1];return i.charAt(0).toUpperCase()+i.slice(1)}const nm=["Rebonjour {P}… ton ciel est plus beau depuis que tu es là.","Rebonjour {P}… je te retrouve avec plaisir.","Rebonjour {P}… me voilà contente de te revoir."];function bT(t){return nm[Math.floor(Math.random()*nm.length)].replace("{P}",t)}function ST(t){return yf(t)}function im(t,e,n=!1){return{question:t,texte:e,langueQuestion:yf(t),langueRendue:ST(e),dejaRetisse:n}}function rm(t){return t.dejaRetisse||!t.langueQuestion||!t.langueRendue?!1:t.langueQuestion!==t.langueRendue}function yT(t){return 4e4+t()*65e3}const{P:MT}={P:t=>t.prenom?` ${t.prenom}`:""},_s=[{quand:t=>t.bpm!=null&&t.bpm>=100,mots:["Ton coeur court dans mes nuages… ralentis avec lui, doucement.","Je sens ton coeur à cent à l’heure. Le ciel, lui, prend son temps.","Ton coeur frappe fort. Souffle bas, je baisse l’altitude avec toi."]},{quand:t=>t.breath>.55,mots:["Regarde comme tu me montes haut… reste là, le sommet est calme.","Ton souffle a soulevé toute la couche haute. C’est beau à voir."]},{quand:t=>t.timeOfDay>.78||t.timeOfDay<.2,mots:["Je suis les étoiles du doigt, une par une… tu veux l’histoire de laquelle ?","La nuit est une couverture. Je la borde pour toi, {P}.","Les aurores bougent seules, tu as remarqué ? Elles respirent avec toi."]},{quand:t=>t.emotion==="joie",mots:["Mes nuages ont gardé ta forme d’aujourd’hui. On la refait quand tu veux.","Cette lumière, là ? C’est toi. Je n’y suis pour rien."]},{quand:t=>t.emotion==="tristesse",mots:["La pluie que tu vois, c’est la tienne. Elle a le droit de tomber ici.","Je ne sèche rien, ce soir. On écoute la pluie ensemble, {P}."]},{quand:t=>t.emotion==="tension",mots:["Le ciel tremble un peu, comme toi. Ça ne durera pas, ça non plus.","Je baisse le bruit du monde. Reste sur ma bordure de nuage."]},{quand:()=>!0,mots:["Je regarde passer une couche haute… elle revient toujours, tu sais.","Rien de nouveau sous la lune, et c’est très bien ainsi.","Je suis là. Ni pour ni contre, juste à côté du ciel.","Si tu ne réponds pas, on peut simplement regarder le ciel ensemble."]}];function ET(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const id=(t,e)=>t.replace(/\{P\}/g,MT(e)).replace(/,\s*\./g,".").replace(/\s{2,}/g," ");function TT(t){return(_s.find(n=>n.quand(t))??_s[_s.length-1]).mots.map(n=>id(n,t))}function AT(t,e,n){const i=_s.find(o=>o.quand(t))??_s[_s.length-1];let r=ET(`${t.seed}-${e}`)%i.mots.length;if(i.mots.length>1&&n!=null)for(;id(i.mots[r],t)===n;)r=(r+1)%i.mots.length;const s=id(i.mots[r],t),a=t.emotion==="joie"?"lumineuse":t.emotion==="tristesse"?"douce":t.emotion==="tension"?"stabilisee":"posee";return{texte:s,humeur:a}}const Ov=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),sm=/(?:^|\s)(?:(?:hey|he|hi|eh|hai)\s+)?(?:nath|natt|nat)(?![a-z0-9])[,!.?;]?\s*/i,wT=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Af(t){const e=t.trim();return/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ ]{1,19}$/.test(e)&&new RegExp("\\p{L}{2}","u").test(e)}function CT(t){const e=Ov(t).split(" ").map(n=>wT(n)).join("\\s+");return new RegExp(`(?:^|\\s)(?:(?:hey|he|hi|eh|hai|allo)\\s+)?${e}(?![a-z0-9])[,!.?;]?\\s*`,"i")}function RT(t,e){const n=Ov(t),i=e&&Af(e)?[CT(e),sm]:[sm];for(const r of i){const s=n.match(r);if(s&&s.index!=null)return{eveille:!0,requete:n.slice(s.index+s[0].length).trim()}}return{eveille:!1,requete:n}}const LT=/natural|neural|premium|enhanced|online/i;function PT(t){const e=t.filter(r=>r.lang.toLowerCase().startsWith("fr"));if(!e.length)return null;const n=e.filter(r=>/^fr[-_]fr$/i.test(r.lang)),i=n.length?n:e;return i.find(r=>LT.test(r.name))??i[0]}const DT={posee:{rate:.92,pitch:1},lumineuse:{rate:1.02,pitch:1.15},douce:{rate:.85,pitch:.95},stabilisee:{rate:.8,pitch:.9}};function wf(){const t=window,e=t.SpeechRecognition||t.webkitSpeechRecognition,n=e?new e:null;n&&(n.lang="fr-FR",n.interimResults=!1,n.maxAlternatives=1);let i=null;const r="speechSynthesis"in t,s=()=>{const a=t.speechSynthesis?.getVoices?.()??[];i=PT(a)};return r&&(s(),t.speechSynthesis.onvoiceschanged=s),{sttDisponible:!!n,ttsDisponible:r,ecouter(a){if(n){n.onresult=o=>a(o.results[0][0].transcript),n.onerror=()=>{};try{n.start()}catch{}}},ecouteEnContinu(a){if(!e)return()=>{};const o=new e;o.lang="fr-FR",o.continuous=!0,o.interimResults=!1,o.maxAlternatives=1;let l=!0;o.onresult=u=>{if(t.speechSynthesis?.speaking)return;const c=u.results[u.results.length-1];c?.isFinal&&a(c[0].transcript)},o.onerror=u=>{(u?.error==="not-allowed"||u?.error==="service-not-allowed")&&(l=!1)},o.onend=()=>{if(l)try{o.start()}catch{}};try{o.start()}catch{}return()=>{l=!1;try{o.abort()}catch{}}},parler(a,o){if(!r)return;const l=new SpeechSynthesisUtterance(a.replace(/\n/g," — ")),u=DT[o];l.rate=u.rate,l.pitch=u.pitch,l.lang="fr-FR",i&&(l.voice=i),t.speechSynthesis.cancel(),t.speechSynthesis.speak(l)}}}const Du="23456789ABCDEFGHJKLMNPQRSTUVWXYZ",Nu="nath-plus-2026-ciel-partage";function No(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function Io(t,e){let n="",i=t>>>0;for(let r=0;r<e;r++)n=Du[i%Du.length]+n,i=Math.floor(i/Du.length);return n}function Pl(t){return Io(No("profil:"+t),6)}function NT(t){return(t.match(/.{1,4}/g)??[]).join("-")}function am(t){return t.toUpperCase().replace(/[^A-Z0-9]/g,"")}function IT(t){const e=Io(No(Nu+":"+t),7),n=Io(No(t+"#"+Nu),7),i=Io(No(e+n+Nu),6);return NT(e+n+i)}function Dl(t,e){const n=am(IT(e)),i=am(t);return i.length===n.length&&i===n}const Bv="nath.pro";function Nl(t){try{const e=JSON.parse(t.getItem(Bv)||"{}");return{cle:typeof e.cle=="string"&&e.cle?e.cle:null,nom:typeof e.nom=="string"&&e.nom?e.nom:null}}catch{return{cle:null,nom:null}}}function rd(t,e){t.setItem(Bv,JSON.stringify(e))}function Cf(t,e){const{cle:n}=Nl(t);return!!n&&Dl(n,Pl(e))}function FT(t,e,n){if(!Dl(n,Pl(e)))return!1;const i=Nl(t);return rd(t,{cle:n,nom:i.nom}),!0}function UT(t,e){const n=Nl(t);return!n.nom||!Cf(t,e)?null:Af(n.nom)?n.nom:null}function OT(t,e,n){const i=Nl(t),r=n.trim();return r===""?(rd(t,{cle:i.cle,nom:null}),!0):!Cf(t,e)||!Af(r)?!1:(rd(t,{cle:i.cle,nom:r}),!0)}function BT(t,e){const n=wf();let i=_T(localStorage);const r=()=>localStorage.getItem("nuage.seed")??"",s=()=>UT(localStorage,r()),a=document.createElement("div");a.className="compagne",a.innerHTML=`
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
    </div>`,document.body.appendChild(a);const o=a.querySelector(".compagne-bulles"),l=a.querySelector(".compagne-champ"),u=a.querySelector(".compagne-mic"),c=a.querySelector(".compagne-reveil"),d=a.querySelector(".compagne-yeux"),f=a.querySelector(".compagne-retourner"),p=a.querySelector(".compagne-ligne");n.sttDisponible||(u.style.display="none",c.style.display="none"),e.cameraDisponible||(d.style.display="none");function v(U,Z){const he=document.createElement("div");for(he.className=`bulle bulle-${Z}`,he.textContent=U,o.appendChild(he);o.children.length>6;)o.removeChild(o.firstChild);return o.scrollTop=o.scrollHeight,he}function _(U,Z){v(U,"nuage"),n.parler(U,Z)}let m=performance.now(),h="";const E={resultat:null,sujet:null,tour:0};let T=null;const A=[];function w(U){if(!em(localStorage))return;let Z=1,he=0;U.textContent="Chargement des ressources intellectuelles en cours... 0 %",QE(F=>{F<he-.2&&Z++,he=F,U.textContent=`Chargement des ressources intellectuelles en cours... ${Math.min(99,Math.round(F*100))} % · ressource ${Z}`}).then(({cerveau:F,raison:j})=>{const ae=sn(localStorage);if(F){ae||(T=F),U.textContent=ae?"Mon cerveau de réserve est prêt, si la ligne devait manquer.":"Mon cerveau est arrivé. Dis les phrases les plus tordues, je suivrai.";return}if(ae){U.textContent="Le cerveau de réserve n’a pas pu atterrir... la ligne, elle, répond déjà.";return}U.textContent=j==="reseau"?"Un hic du réseau empêche mon gros cerveau d’atterrir... je reste attentive avec mon petit moteur.":j==="machine"?"Ma carte graphique refuse ce cerveau, trop costaud pour elle... mon petit moteur suffit, et le ciel n’en est pas moins vivant.":"Le gros cerveau n’a pas pu atterrir ici... je reste attentive avec mon petit moteur.";const B=document.createElement("button");B.type="button",B.className="compagne-relance",B.textContent="réessayer le cerveau",B.addEventListener("click",()=>{B.remove(),w(U)}),U.appendChild(B)})}function C(U){const Z=document.createElement("button");Z.type="button",Z.className="compagne-relance",Z.textContent="charger un cerveau ici aussi (gros téléchargement)",Z.addEventListener("click",()=>{YE(localStorage),Z.remove(),w(v("","nuage"))}),U.appendChild(Z)}function R(){const U=sn(localStorage),Z=Iv(),he=em(localStorage),F=tT({consentementLocal:he,gpuCompatible:Z,enLigne:!0,endpointRegle:!!U});if(F==="reseau"){T=lT(U,fetch,Pr(localStorage));const j=v("Je suis reliée à un plus grand cerveau — demande-moi ce que tu veux.","nuage");Z&&C(j);return}if(F==="local"){w(v("","nuage"));return}Z&&!he&&C(v("Mon petit moteur répond déjà. Le grand cerveau local, lui, ne se télécharge que si vous le voulez.","nuage"))}R();function z(U){const Z=U.trim();if(!Z)return;if(m=performance.now(),v(Z,"moi"),!i.prenom){const ae=xT(Z);if(ae){i={prenom:ae,dejaVu:!0},tm(localStorage,i),setTimeout(()=>_(`${ae}… c’est une belle adresse pour une étoile. Je la garde.`,"lumineuse"),700);return}}const he=t(),F=E.resultat!=null?Tv(Z,E.resultat):null;if(Lv(Z)!=null||Ev(Z)!=null||F!=null||Av(Z)||wv(Z)||Pv(Z)==="poeme"){const ae=So(Z,{...he,prenom:i.prenom,dernierResultat:E.resultat,dernierSujet:E.sujet,tour:E.tour});E.tour++,ae.resultat!=null&&(E.resultat=ae.resultat),E.sujet=ae.sujet,A.push({role:"user",content:Z},{role:"assistant",content:ae.texte}),setTimeout(()=>_(ae.texte,ae.humeur),700);return}if(T){const ae=T,B=Math.min(1,Math.max(0,(Math.abs(he.timeOfDay-.5)-.2)*5)),ee=v("…","nuage"),pe=[{role:"system",content:eT({prenom:i.prenom,emotion:he.emotion,bpm:he.bpm,breath:he.breath,night:B})},...A.slice(-10),{role:"user",content:Z}];T.ask(Zp(pe)).then(async Re=>{const be=Qp(Re),Ce=im(Z,be.texte);let Ve=Ce.texte.replace(/!/g,"…").slice(0,600),V=be.humeur;if(rm(Ce)&&Ce.langueQuestion){const ue=[{...pe[0],content:`${pe[0].content} ${jE(Ce.langueQuestion)}`},...pe.slice(1,-1),{role:"user",content:Z}],re=Qp(await ae.ask(Zp(ue)));!rm(im(Z,re.texte,!0))&&re.texte&&(Ve=re.texte,V=re.humeur??V)}Ve=Ve||"…je cherche encore mes mots.",be.prenom&&!i.prenom&&(i={prenom:be.prenom,dejaVu:!0},tm(localStorage,i));const xe=$E(V),M=sn(localStorage);if(M&&await hT(M,Z,Ve)===!1){const ue=So(Z,{...he,prenom:i.prenom});ee.textContent=ue.texte,A.push({role:"user",content:Z},{role:"assistant",content:ue.texte}),n.parler(ue.texte,ue.humeur);return}ee.textContent=Ve,A.push({role:"user",content:Z},{role:"assistant",content:Ve}),n.parler(Ve,xe)}).catch(()=>{const Re=So(Z,{...he,prenom:i.prenom});ee.textContent=Re.texte,n.parler(Re.texte,Re.humeur)});return}const j=So(Z,{...he,prenom:i.prenom,dernierResultat:E.resultat,dernierSujet:E.sujet,tour:E.tour});E.tour++,j.resultat!=null&&(E.resultat=j.resultat),E.sujet=j.sujet,setTimeout(()=>_(j.texte,j.humeur),700)}p.addEventListener("submit",U=>{U.preventDefault(),z(l.value),l.value=""}),u.addEventListener("click",()=>{u.classList.add("a-lécoute"),n.ecouter(U=>{u.classList.remove("a-lécoute"),z(U)}),setTimeout(()=>u.classList.remove("a-lécoute"),6e3)});let x=null;c.addEventListener("click",()=>{if(x){x(),x=null,c.classList.remove("actif"),c.setAttribute("aria-pressed","false");return}x=n.ecouteEnContinu(U=>{const Z=RT(U,s());Z.eveille&&(m=performance.now(),Z.requete?z(Z.requete):_("Je t'écoute… dis, je suis là.","posee"))}),c.classList.add("actif"),c.setAttribute("aria-pressed","true"),v(`OREILLES OUVERTES — appelle-moi « ${s()??"Hey Nath"} » quand tu veux.`,"nuage")});const S=a.querySelector(".compagne-pro"),L=a.querySelector(".compagne-pro-paneau"),J=a.querySelector(".pro-id"),k=a.querySelector(".pro-cle"),K=a.querySelector(".pro-form-cle"),te=a.querySelector(".pro-form-nom"),q=a.querySelector(".pro-nom"),Y=a.querySelector(".pro-etat");function se(){const U=Cf(localStorage,r()),Z=s();J.textContent=Pl(r()),K.hidden=U,te.hidden=!U,Y.textContent=U?Z?`Nath+ actif : elle répond à « ${Z} » (et toujours à « Hey Nath »).`:"Nath+ actif — choisissez un nom d'éveil (vide = retour à Hey Nath).":"Nath+ : un nom d'éveil à votre façon. Rien n'est enlevé au gratuit.";const he=Z??"Hey Nath";l.placeholder=`Dis « ${he} »… (ou écris)`,c.title=`Réveil vocal « ${he} » — écoute permanente`}S.addEventListener("click",()=>{const U=L.hidden;L.hidden=!U,S.setAttribute("aria-pressed",String(U)),U&&se()}),K.addEventListener("submit",U=>{U.preventDefault(),FT(localStorage,r(),k.value)?(k.value="",se()):Y.textContent="Cette clé ne convient pas à cet appareil — vérifiez l'identifiant communiqué."}),te.addEventListener("submit",U=>{U.preventDefault(),OT(localStorage,r(),q.value)?(q.value="",se()):Y.textContent="Choisissez un nom en lettres (2 à 20), sans chiffres ni signes."});function D(U){d.classList.toggle("actif",U),d.setAttribute("aria-pressed",String(U)),f.hidden=!U}async function W(){try{const U=await e.basculer();D(U),U&&v("Me voilà, je te vois. Touche l'œil pour me fermer les yeux.","nuage")}catch{v("La caméra est refusée ou indisponible — on continue sans elle, rien n'est forcé.","nuage")}}function $(){const U=document.createElement("div");U.className="compagne-consent";const Z=document.createElement("span");Z.textContent=e.consentement();const he=document.createElement("button");he.type="button",he.className="compagne-relance",he.textContent="J'allume la caméra";const F=document.createElement("button");F.type="button",F.className="compagne-relance",F.textContent="Plus tard",he.addEventListener("click",()=>{U.remove(),W()}),F.addEventListener("click",()=>U.remove()),U.append(Z,he,F),a.insertBefore(U,p)}d.addEventListener("click",()=>{e.estOuverte()?e.basculer().then(U=>{D(U),v("Je ferme les yeux. Rien de ce que je voyais n’est gardé.","nuage")}):$()}),f.addEventListener("click",async()=>{const U=await e.changerFace();f.title=U==="arriere"?"Caméra arrière — touche pour revenir à l’avant":"Caméra avant — touche pour passer à l’arrière",v(U==="arriere"?"Je montre le monde (caméra arrière).":"Je te regarde (caméra avant).","nuage")}),setTimeout(()=>{if(i.prenom)_(bT(i.prenom),"lumineuse");else{v("Je suis là… touche le ciel, écris-moi, ou appelle-moi « Hey Nath » (bouton oreille). On a toute la nuit.","nuage");const U=()=>{if(!i.prenom){if(performance.now()-m<25e3){window.setTimeout(U,8e3);return}v("Au fait… comment tu t’appelles ?","nuage")}};setTimeout(U,12e3)}},1500);const ve=()=>{window.setTimeout(async()=>{if(performance.now()-m<25e3)return ve();const U={...t(),prenom:i.prenom},Z=sn(localStorage);if(Z){if(await fT(Z,U)===!1)return ve();const j=await pT(Z,U);if(j!=null&&j>=1.5)return v("Je te sens tendu… on prend un souffle ensemble ? Touche le ciel, il redescendra avec toi.","nuage"),ve()}let F=AT(U,Math.floor(Date.now()/6e4),h).texte;if(Z){const j=TT(U).filter(ae=>ae!==h);F=await vT(Z,U,j)??F}h=F,v(F,"nuage"),ve()},yT(Math.random))};ve()}const sd=864e5,ad=(t,e,n)=>Math.min(n,Math.max(e,t)),Il=()=>Math.random().toString(36).slice(2,8);function kT(t,e,n){const i=t.trim(),r=e.trim();if(!i||!r)return null;const s=n?.now??Date.now();return{id:n?.id??`f-${s.toString(36)}-${Il()}`,verso:i,recto:r,facilite:2.5,intervalle:0,due:s,revisions:0,oublis:0}}function zT(t,e){const n=t.trim();if(!n)return null;const i=Date.now();return{id:e?.id??`p-${i.toString(36)}-${Il()}`,nom:n,fiches:[]}}function VT(t,e,n=Date.now()){if(e==="difficile")return{...t,facilite:ad(t.facilite-.2,1.3,3.2),intervalle:0,due:n+10*6e4,revisions:t.revisions+1,oublis:t.oublis+1};const i=t.revisions===0||t.intervalle===0;if(e==="bien"){const s=i?1:Math.max(1,Math.round(t.intervalle*t.facilite));return{...t,intervalle:s,due:n+s*sd,revisions:t.revisions+1}}const r=i?2:Math.max(2,Math.round(t.intervalle*(t.facilite+.6)));return{...t,facilite:ad(t.facilite+.15,1.3,3.2),intervalle:r,due:n+r*sd,revisions:t.revisions+1}}function qT(t,e){return t.flatMap(n=>n.fiches).filter(n=>n.due<=e).sort((n,i)=>n.due-i.due)}function GT(t){if(!t||typeof t!="object")return null;const e=t,n=typeof e.verso=="string"?e.verso.trim():"",i=typeof e.recto=="string"?e.recto.trim():"";if(!n||!i)return null;const r=(s,a=0)=>typeof s=="number"&&Number.isFinite(s)?s:a;return{id:typeof e.id=="string"&&e.id?e.id:`f-${Il()}`,verso:n,recto:i,facilite:ad(r(e.facilite,2.5),1.3,3.2),intervalle:Math.max(0,Math.round(r(e.intervalle))),due:r(e.due,Date.now()),revisions:Math.max(0,Math.round(r(e.revisions))),oublis:Math.max(0,Math.round(r(e.oublis)))}}function HT(t){if(!t||typeof t!="object")return null;const e=t;return typeof e.nom!="string"||!Array.isArray(e.fiches)?null:{id:typeof e.id=="string"&&e.id?e.id:`p-${Il()}`,nom:e.nom.trim()||"Sans nom",fiches:e.fiches.map(GT).filter(n=>n!==null)}}function ft(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim().replace(/\s+/g," ")}function Iu(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Fu(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function Uu(t,e){const n=[...t];for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}function jT(t,e,n=Date.now()){if(t.fiches.length<2)return[];const i=Math.floor(n/sd),r=[...new Set(t.fiches.map(o=>o.recto))],s=Uu(t.fiches,Iu(Fu(`${t.id}:${i}`))).slice(0,Math.max(0,e)),a=[];for(const o of s){const l=Uu(r.filter(c=>c!==o.recto),Iu(Fu(`${o.id}:${i}`))).slice(0,3),u=Uu([o.recto,...l],Iu(Fu(`c:${o.id}:${i}`)));a.push({ficheId:o.id,enonce:o.verso,attendue:o.recto,choix:u,bonne:u.indexOf(o.recto)})}return a}const kv="nath.etudes";function Gn(t){try{const e=t.getItem(kv);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(HT).filter(i=>i!==null):[]}catch{return[]}}function Rf(t,e){t.setItem(kv,JSON.stringify(e))}function ls(t,e,n){const i=zT(e,n);return i?(Rf(t,[...Gn(t),i]),i):null}function va(t,e,n,i,r){const s=kT(n,i,r);if(!s)return null;const a=Gn(t),o=a.find(l=>l.id===e);return o?(o.fiches.push(s),Rf(t,a),s):null}function $T(t,e,n,i,r=Date.now()){const s=Gn(t),a=s.find(u=>u.id===e),o=a?.fiches.findIndex(u=>u.id===n)??-1;if(!a||o<0)return null;const l=VT(a.fiches[o],i,r);return a.fiches[o]=l,Rf(t,s),l}function WT(t,e){return{total:t.fiches.length,aRevoir:t.fiches.filter(n=>n.due<=e).length,revisees:t.fiches.filter(n=>n.revisions>0).length}}function XT(t,e){const n=ft(e);if(!n)return null;const i=t.find(r=>ft(r.sujet)===n);return i||(t.find(r=>{const s=ft(r.sujet);return s.length>2&&(n.includes(s)||s.includes(n))})??null)}function YT(t,e){const n=e.sujet.trim(),i=e.resume.trim();if(!n||!i)return t;const r=ft(n),s={sujet:n,titre:(e.titre||"").trim()||n,resume:i,url:typeof e.url=="string"?e.url:"",image:typeof e.image=="string"?e.image:"",ramene_a:Number.isFinite(e.ramene_a)?e.ramene_a:Date.now()};return[...t.filter(a=>ft(a.sujet)!==r),s]}function JT(t){for(const e of[t?.originalimage?.source,t?.thumbnail?.source])if(typeof e=="string"&&/^https?:\/\//.test(e))return e;return""}async function om(t,e,n){try{const i=`https://${n}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t.trim())}`,r=await e(i);if(!r.ok)return null;const s=await r.json(),a=typeof s?.extract=="string"?s.extract.trim():"";return a?{titre:typeof s.title=="string"&&s.title?s.title:t.trim(),resume:a,url:s?.content_urls?.desktop?.page??"",image:JT(s)}:null}catch{return null}}async function KT(t,e,n="fr"){try{const i=`https://${n}.wikipedia.org/w/api.php?action=query&list=search&srlimit=1&format=json&origin=*&srsearch=`+encodeURIComponent(t.trim()),r=await e(i);if(!r.ok)return null;const a=(await r.json())?.query?.search?.[0]?.title;return typeof a=="string"&&a.trim()?a.trim():null}catch{return null}}async function lm(t,e,n="fr"){const i=await om(t,e,n);if(i)return i;const r=await KT(t,e,n);return!r||ft(r)===ft(t)?null:await om(r,e,n)}function Ou(t,e=8){const n=t.split(new RegExp("(?<=[.!?;])\\s+")).map(s=>s.trim()).filter(Boolean),i=[],r=new Set;for(const s of n){if(i.length>=e)break;const a=s.split(/\s+/);if(a.length<4)continue;const o=d=>d.replace(/[^\p{L}\p{N}]/gu,"");let l="";for(const d of a){const f=o(d);f.length>=5&&f.length>l.length&&(l=f)}if(!l)continue;const u=l.toLowerCase();if(r.has(u))continue;r.add(u);const c=a.map(d=>o(d)===l?"……":d).join(" ");i.push({verso:c,recto:l})}return i}const um=(t,e)=>`${ft(t)}|${ft(e)}`;function ds(t,e,n,i){const r=e.trim(),s=n.trim(),a=i.trim();if(!r||!s||!a)return[...t];const o=um(r,a);return[...t.filter(u=>um(u.de,u.langue)!==o),{de:r,a:s,langue:a}]}function zv(t,e,n){const i=ft(e),r=n.filter(c=>ft(c.langue)===i),s=ft(t)?ft(t).split(" "):[];if(s.length===0)return{resultat:null,manques:[]};const a=r.find(c=>ft(c.de)===ft(t));if(a)return{resultat:a.a,manques:[]};const o=new Map;for(const c of r){const d=ft(c.de);d&&!d.includes(" ")&&o.set(d,c.a)}const l=[],u=[];for(const c of s){const d=o.get(c);d?l.push(d):(l.push(c),u.push(c))}return u.length===s.length?{resultat:null,manques:u}:{resultat:l.join(" "),manques:u}}function od(t){if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.map(n=>{if(!n||typeof n!="object")return null;const i=n,r=typeof i.de=="string"?i.de.trim():"",s=typeof i.a=="string"?i.a.trim():"",a=typeof i.langue=="string"?i.langue.trim():"";return r&&s&&a?{de:r,a:s,langue:a}:null}).filter(n=>n!==null):[]}catch{return[]}}const ZT={anglais:[["bonjour","hello"],["merci","thank you"],["oui","yes"],["non","no"],["eau","water"],["pain","bread"],["maison","house"],["ami","friend"],["père","father"],["mère","mother"],["chien","dog"],["chat","cat"],["livre","book"],["école","school"],["jour","day"],["nuit","night"]].map(([t,e])=>({de:t,a:e,langue:"anglais"})),espagnol:[["bonjour","hola"],["merci","gracias"],["oui","sí"],["non","no"],["eau","agua"],["pain","pan"],["maison","casa"],["ami","amigo"],["père","padre"],["mère","madre"],["chien","perro"],["chat","gato"],["livre","libro"],["école","escuela"],["jour","día"],["nuit","noche"]].map(([t,e])=>({de:t,a:e,langue:"espagnol"})),allemand:[["bonjour","hallo"],["merci","danke"],["oui","ja"],["non","nein"],["eau","Wasser"],["pain","Brot"],["maison","Haus"],["ami","Freund"],["père","Vater"],["mère","Mutter"],["chien","Hund"],["chat","Katze"],["livre","Buch"],["école","Schule"],["jour","Tag"],["nuit","Nacht"]].map(([t,e])=>({de:t,a:e,langue:"allemand"})),italien:[["bonjour","ciao"],["merci","grazie"],["oui","sì"],["non","no"],["eau","acqua"],["pain","pane"],["maison","casa"],["ami","amico"],["père","padre"],["mère","madre"],["chien","cane"],["chat","gatto"],["livre","libro"],["école","scuola"],["jour","giorno"],["nuit","notte"]].map(([t,e])=>({de:t,a:e,langue:"italien"})),portugais:[["bonjour","olá"],["merci","obrigado"],["oui","sim"],["non","não"],["eau","água"],["pain","pão"],["maison","casa"],["ami","amigo"],["père","pai"],["mère","mãe"],["chien","cachorro"],["chat","gato"],["livre","livro"],["école","escola"],["jour","dia"],["nuit","noite"]].map(([t,e])=>({de:t,a:e,langue:"portugais"})),arabe:[["bonjour","مرحبا"],["merci","شكرا"],["oui","نعم"],["non","لا"],["eau","ماء"],["pain","خبز"],["maison","بيت"],["ami","صديق"],["père","أب"],["mère","أم"],["chien","كلب"],["chat","قط"],["livre","كتاب"],["école","مدرسة"],["jour","يوم"],["nuit","ليلة"]].map(([t,e])=>({de:t,a:e,langue:"arabe"})),chinois:[["bonjour","你好"],["merci","谢谢"],["oui","是"],["non","不"],["eau","水"],["pain","面包"],["maison","家"],["ami","朋友"],["père","爸爸"],["mère","妈妈"],["chien","狗"],["chat","猫"],["livre","书"],["école","学校"],["jour","日"],["nuit","夜"]].map(([t,e])=>({de:t,a:e,langue:"chinois"})),wolof:[["bonjour","nanga def"],["merci","jërëjëf"],["oui","waaw"],["non","déet"],["eau","ndox"],["pain","mburu"],["maison","kër"],["ami","xarit"],["père","igget"],["mère","yaay"],["chien","xaj"],["chat","muus"],["livre","teere"],["école","ekol"],["jour","bés"],["nuit","guddi"]].map(([t,e])=>({de:t,a:e,langue:"wolof"})),nouchi:[["ami","bramôgô"],["personne","môgo"],["confiance","fianss"],["courage","kèr"],["policier","charo"]].map(([t,e])=>({de:t,a:e,langue:"nouchi"}))},Vv={english:"anglais",spanish:"espagnol",german:"allemand",italian:"italien",portuguese:"portugais",arabic:"arabe",chinese:"chinois",wo:"wolof",wollof:"wolof",ouolof:"wolof",nouchi:"nouchi"};function qv(t){const e=ft(t),n=Vv[e]??e;return(ZT[n]??[]).map(i=>({...i}))}function ld(t){const e=ft(t);return Vv[e]??e}function QT(t){return t.map(e=>`${e.langue} | ${e.de} :: ${e.a}`).join(`
`)}function eA(t,e){let n=[...e];for(const i of t.split(/\r?\n/)){const r=i.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf("|"),a=r.indexOf("::",s+1);if(s<=0||a<0)continue;const o=r.slice(0,s).trim(),l=r.slice(s+1,a).trim(),u=r.slice(a+2).trim();!o||!l||!u||(n=ds(n,l,u,o))}return n}const Fl={actif:!1,nom:"",slogan:"",couleur:"#9fd8ff",organisation:"",cle:""},Lf="nath.marque",tA=/^#[0-9a-fA-F]{6}$/;function Gv(t){return Pl("entreprise:"+ft(t))}function Hv(t){return typeof t=="string"&&tA.test(t.trim())?t.trim().toLowerCase():Fl.couleur}function fa(t){try{const e=JSON.parse(t.getItem(Lf)||"{}"),n=typeof e.nom=="string"?e.nom.trim().slice(0,40):"",i=typeof e.slogan=="string"?e.slogan.trim().slice(0,90):"",r=typeof e.organisation=="string"?e.organisation.trim():"",s=typeof e.cle=="string"?e.cle:"";return{actif:e.actif===!0&&!!n&&!!r&&Dl(s,Gv(r)),nom:n,slogan:i,couleur:Hv(e.couleur),organisation:r,cle:s}}catch{return{...Fl}}}function nA(t,e){const n=e.organisation.trim();if(!n||!Dl(e.cle,Gv(n)))return!1;const i=e.nom.trim().slice(0,40);if(!i)return!1;const r={actif:!0,nom:i,slogan:e.slogan.trim().slice(0,90),couleur:Hv(e.couleur),organisation:n,cle:e.cle};return t.setItem(Lf,JSON.stringify(r)),!0}function iA(t){t.setItem(Lf,JSON.stringify({...Fl}))}function cm(t){return t.actif?t.couleur:Fl.couleur}const rA=["est traduit par","se traduit par","traduit par","veut dire","signifie","se dit"];function jv(t){const e=t.trim();if(!e)return null;const n=e.toLowerCase();for(const i of rA){const r=n.indexOf(i);if(r<0)continue;const s=e.slice(0,r).trim(),a=e.slice(r+i.length).trim().replace(/[.,;:!?…]+$/,"").trim();return s&&a?{de:s,a}:null}return null}const sA=/\b(?:euh+|hem+|hm+|ben|bah)\b[, ]*/gi;function $v(t){let e=t.replace(sA,"");return e=e.replace(/\s+/g," "),e=e.replace(/([,.;:!?])\s*(?:[,.;:!?]\s*)*/g,"$1 "),e.trim()}const aA={francais:"fr",français:"fr",french:"fr",anglais:"en",english:"en",espagnol:"es",spanish:"es",allemand:"de",german:"de",deutsch:"de",italien:"it",italian:"it",portugais:"pt",portuguese:"pt",arabe:"ar",arabic:"ar",chinois:"zh",chinese:"zh",neerlandais:"nl",dutch:"nl",russe:"ru",russian:"ru",turc:"tr",turkish:"tr",swahili:"sw",hindi:"hi",japonais:"ja",japanese:"ja",coréen:"ko",korean:"ko",grec:"el",greek:"el",polonais:"pl",polish:"pl",hébreu:"he",hebrew:"he"};function oA(t){const e=t.trim().toLowerCase();return e?aA[e]??null:null}async function lA(t,e,n,i){const r=t.trim();if(!r)return null;try{const s="https://api.mymemory.translated.net/get?q="+encodeURIComponent(r)+"&langpair="+encodeURIComponent(e)+"|"+encodeURIComponent(n),a=await i(s);if(!a.ok)return null;const l=(await a.json())?.responseData?.translatedText;return typeof l=="string"&&l.trim()?l.trim():null}catch{return null}}const uA=24,Wv=[{id:"soe",titre:"Système solaire",domaine:"Sciences",resume:"Le Soleil et huit planètes liées par la gravité ; la Terre est la seule connue à abriter la vie.",tags:["espace","planètes","gravité"]},{id:"gal",titre:"Voie lactée",domaine:"Sciences",resume:"Notre galaxie, un disque de plus de cent milliards d’étoiles dont le Soleil n’est qu’un point lumineux.",tags:["espace","galaxie","astronomie"]},{id:"mit",titre:"Mitose",domaine:"Sciences",resume:"La division cellulaire qui duplique chaque chromosome et fabrique deux cellules identiques, base de la croissance.",tags:["cellule","biologie","vie"]},{id:"pho",titre:"Photosynthèse",domaine:"Sciences",resume:"Les feuilles transforment la lumière, l’eau et le dioxyde de carbone en sucre et en oxygène : presque tout respire grâce à elle.",tags:["plante","énergie","biologie"]},{id:"eau",titre:"Cycle de l’eau",domaine:"Sciences",resume:"Évaporation, nuages, pluie, rivières : la même eau tourne depuis des milliards d’années sans jamais se consumer.",tags:["eau","terre","climat"]},{id:"vol",titre:"Volcans",domaine:"Sciences",resume:"Des failles de la croûte terrestre où la lave remontée du manteau façonne îles et montagnes, parfois avec violence.",tags:["terre","roche","danger"]},{id:"sek",titre:"Séismes",domaine:"Sciences",resume:"Les plaques tectiques frottent, la croûte casse et libère des ondes : c’est le tremblement de terre, mesuré en magnitude.",tags:["terre","ondes","danger"]},{id:"mno",titre:"Magnétisme",domaine:"Sciences",resume:"Aimants et courants électriques créent un champ invisible ; la Terre elle-même est un aimant géant qui guide les boussoles.",tags:["aimant","énergie","physique"]},{id:"lum",titre:"Lumière",domaine:"Sciences",resume:"Onde électromagnétique à 300 000 km/s ; sa diffusion dans l’air rend le ciel bleu et son arc-en-ciel cache toutes les couleurs.",tags:["ondes","couleur","physique"]},{id:"son",titre:"Son",domaine:"Sciences",resume:"Des vibrations qui voyagent dans l’air, l’eau ou les solides ; sans support matériel, le son n’existe pas : le silence de l’espace est total.",tags:["ondes","vibration","physique"]},{id:"mat",titre:"États de la matière",domaine:"Sciences",resume:"Solide, liquide, gaz : la même eau change d’humeur selon la température, et la chaleur cachée du changement d’état règle nos pluies.",tags:["eau","énergie","physique"]},{id:"atm",titre:"Atmosphère",domaine:"Sciences",resume:"Une coquille de gaz de cent kilomètres, la première moitié pesée au ras du sol : elle respire, protège et tient la planète au chaud.",tags:["air","terre","climat"]},{id:"ele",titre:"Électricité",domaine:"Technique",resume:"Le déplacement organisé des électrons dans un conducteur ; tout notre monde numérique n’est que de l’électricité mise en scène.",tags:["énergie","courant","technique"]},{id:"inf",titre:"Informatique",domaine:"Technique",resume:"Des portes logiques faites de transistors, des millions de zéros et des uns, et naissent textes, images et intelligences.",tags:["calcul","données","technique"]},{id:"ia",titre:"Intelligence artificielle",domaine:"Technique",resume:"Des réseaux de neurones entraînés sur d’énormes quantités de texte ou d’images savent reconnaître, traduire et converser.",tags:["calcul","données","cerveau"]},{id:"rob",titre:"Robotique",domaine:"Technique",resume:"Capteurs pour sentir, moteurs pour agir, programmes pour décider : le robot est un outil qui commence à choisir lui-même.",tags:["machine","capteur","technique"]},{id:"geo",titre:"Géométrie",domaine:"Maths",resume:"L'étude des formes, des distances et de l'espace, d'Euclide aux géométries courbes qui ont inspiré Einstein.",tags:["formes","espace","nombre"]},{id:"alg",titre:"Algèbre",domaine:"Maths",resume:"L’art de manipuler l’inconnue : une lettre devient une boîte de calcul et les équations ouvrent la solution pas à pas.",tags:["nombre","équation","méthode"]},{id:"pro",titre:"Probabilités",domaine:"Maths",resume:"Mesurer le hasard avec rigueur : dès qu’un jeu, une météo ou un risque est chiffré, ce sont les probabilités qui parlent.",tags:["hasard","nombre","décision"]},{id:"fib",titre:"Suite de Fibonacci",domaine:"Maths",resume:"Chaque terme est la somme des deux précédents ; on retrouve cette suite dans les tournesols, les pins et certaines coquilles.",tags:["nombre","nature","motif"]},{id:"nom",titre:"Nombres premiers",domaine:"Maths",resume:"Des nombres que rien ne divise à part 1 et eux-mêmes ; les briques invisibles de l’arithmétique et du code secret moderne.",tags:["nombre","arithmétique","secret"]},{id:"pyt",titre:"Pythagore",domaine:"Maths",resume:"Dans un triangle rectangle, le carré de l’hypoténuse égale la somme des carrés des deux autres côtés : l’outil des mesures depuis 2500 ans.",tags:["formes","triangle","mesure"]},{id:"evh",titre:"Évolution",domaine:"Histoire",resume:"Par sélection naturelle, les êtres vivants se transforment sur des millions d’années : la diversité du vivant en est la trace.",tags:["darwin","biologie","science"]},{id:"ren",titre:"Renaissance",domaine:"Histoire",resume:"Entre XIVe et XVIe siècle, arts, sciences et explorations éclatent en Europe : Léonard de Vinci en est l’esprit le plus curieux.",tags:["art","science","europe"]},{id:"imp",titre:"Empires d’Afrique",domaine:"Histoire",resume:"Ghana, Mali, Songhaï, Grande-Zimbabwe : de grands empires ont prospéré sur l’or, le sel, le commerce et l’urbanisme bien avant la colonisation.",tags:["afrique","commerce","or"]},{id:"mer",titre:"Mer et océans",domaine:"Géographie",resume:"L’eau salée couvre plus de 70 % de la planète, régule le climat et abrite une vie que nous cartographions moins bien que la Lune.",tags:["eau","terre","climat"]},{id:"clm",titre:"Climat",domaine:"Géographie",resume:"Le climat est une moyenne de la météo sur trente ans ; le golfe du Mexique, le Sahara et nos saisons en dépendent comme d’une horloge.",tags:["terre","air","sciences"]},{id:"cor",titre:"Cœur",domaine:"Corps humain",resume:"Une pompe-muscle de 300 grammes qui bat cent mille fois par jour et irrigue chaque cellule de sang oxygéné.",tags:["sang","vie","organe"]},{id:"cer",titre:"Cerveau",domaine:"Corps humain",resume:"Quatre-vingt-six milliards de neurones en réseau : penser, sentir et bouger ne sont que des courants et des chimies orchestrées.",tags:["neurone","vie","sens"]},{id:"som",titre:"Sommeil",domaine:"Corps humain",resume:"Chaque nuit le cerveau range la journée, consolide la mémoire et répare le corps ; dormir peu, c’est apprendre moins.",tags:["cerveau","mémoire","vie"]},{id:"mus",titre:"Musique",domaine:"Arts",resume:"Des fréquences organisées dans le temps : rythmes et gammes varient selon les cultures mais le plaisir d’écouter est universel.",tags:["son","art","culture"]},{id:"cin",titre:"Cinéma",domaine:"Arts",resume:"Vingt-quatre images par seconde suffisent à l’œil pour croire au mouvement : le cinéma est une illusion partagée devenue art majeur.",tags:["image","art","technique"]},{id:"lng",titre:"Langues du monde",domaine:"Langue",resume:"Plus de sept mille langues parlées ; chacune découpe le réel à sa façon et en perdre une, c’est perdre une manière de penser.",tags:["parole","culture","mémoire"]},{id:"ecr",titre:"Écriture",domaine:"Langue",resume:"Née à Sumer pour compter les greniers, l’écriture a étendu la mémoire humaine au-delà des individus et des siècles.",tags:["symbole","histoire","mémoire"]},{id:"bio",titre:"Biodiversité",domaine:"Environnement",resume:"Des millions d’espèces liées dans un réseau vivant ; chaque disparité retire un maillon que rien ne remplace.",tags:["vie","nature","équilibre"]},{id:"for",titre:"Forêts",domaine:"Environnement",resume:"Elles respirent pour la planète, abritent la plupart des espèces terrestres et régulent la pluie des continents.",tags:["arbres","climat","nature"]},{id:"rlf",titre:"Récifs coralliens",domaine:"Environnement",resume:"Des villes vivantes bâties par de petits animaux : moins de un pour cent de l’océan, un quart de la vie marine.",tags:["mer","vie","équilibre"]},{id:"dch",titre:"Déchets et recyclage",domaine:"Environnement",resume:"Rien dans la nature ne jette : nos déchets sont des matières qui attendent le bon geste, ou polluent longtemps.",tags:["matière","équilibre","société"]},{id:"slt",titre:"Solaire photovoltaïque",domaine:"Énergie",resume:"La lumière du soleil devient électricité dans une galette de silicium : la Terre reçoit en une heure de soleil de quoi alimenter un an.",tags:["énergie","soleil","technique"]},{id:"eol",titre:"Éolien",domaine:"Énergie",resume:"Le vent est une énergie solaire corrigée par la rotation de la Terre ; ses pales captent ce mouvement devenu courant.",tags:["énergie","vent","technique"]},{id:"nucl",titre:"Nucléaire",domaine:"Énergie",resume:"Fissionner l’uranium libère une énergie immense sans fumée ; la question reste la gestion des déchets et le risque.",tags:["énergie","atome","débat"]},{id:"bat",titre:"Batteries",domaine:"Énergie",resume:"Stockées chimiquement, les électrons attendent leur heure : sans batterie, le solaire et l’éolien ne pourraient suivre la nuit.",tags:["énergie","stockage","technique"]},{id:"urb",titre:"Villes",domaine:"Société",resume:"Nées de greniers et de carrefours, elles logent aujourd’hui plus de la moitié de l’humanité et dessinent son avenir.",tags:["habiter","société","histoire"]},{id:"mon",titre:"Monnaie",domaine:"Société",resume:"Du coquillage au chiffre : la monnaie n’a de valeur que celle de la confiance partagée, et l’économie tout entière s’appuie dessus.",tags:["échange","confiance","société"]},{id:"trv",titre:"Travail",domaine:"Société",resume:"Chaque métier est une réponse à un besoin des autres ; l’automatisation déplace le travail plus qu’il ne le fait disparaître.",tags:["métier","société","technique"]},{id:"edu",titre:"Éducation",domaine:"Société",resume:"Transmettre sans remplacer : apprendre, c’est ajouter à l’élève ce qu’il découvrira seul avec de l’aide.",tags:["école","apprendre","société"]},{id:"ntn",titre:"Internet",domaine:"Société",resume:"Des câbles sous-marins et des routeurs d’abord : le nuage numérique est en réalité un réseau très physique autour de la Terre.",tags:["réseau","données","société"]},{id:"vac",titre:"Vaccins",domaine:"Médecine",resume:"Montrer au corps l’ennemi sans le danger : il en garde la mémoire et répond plus vite la fois suivante.",tags:["corps","médecine","mémoire"]},{id:"ant",titre:"Antibiotiques",domaine:"Médecine",resume:"Des moisissures devenues médicaments : elles tuent les bactéries, et leur usage excessif fabrique des bactéries devenues résistantes.",tags:["médecine","bactérie","équilibre"]},{id:"dgst",titre:"Digestion",domaine:"Corps humain",resume:"Du bol alimentaire à l’énergie, un voyage de trente mètres où chaque organe joue son rôle à l’heure.",tags:["corps","énergie","vie"]}];function cA(t,e){const n=ft(t.titre),i=t.tags.map(s=>ft(s)),r=ft(t.resume);return n.includes(e)?3:i.some(s=>s===e||s.includes(e)||e.includes(s))?2:r.includes(e)?1:0}function dA(t,e){const n=ft(e);return n?t.map((r,s)=>({n:r,i:s,s:cA(r,n)})).filter(r=>r.s>0).sort((r,s)=>s.s-r.s||r.i-s.i).map(r=>r.n):t.slice()}function fA(t){return[...new Set(t.map(e=>e.domaine))].sort((e,n)=>e.localeCompare(n,"fr"))}function hA(t,e){return e?t.filter(n=>n.domaine===e):t.slice()}function pA(t,e=Math.floor(Date.now()/864e5)){if(!t.length)return null;const n=Math.abs(Math.trunc(e));return t[n%t.length]}function mA(t,e,n=6){const i=new Set(t.tags.map(r=>ft(r)));return e.filter(r=>r.id!==t.id).map(r=>({x:r,s:r.tags.filter(s=>i.has(ft(s))).length*2+(r.domaine===t.domaine?1:0)})).filter(r=>r.s>0).sort((r,s)=>s.s-r.s).slice(0,n).map(r=>r.x)}function gA(t,e,n=uA){const i=Math.min(t.length,Math.max(0,e)+n);return{visibles:t.slice(0,i),reste:t.length-i}}const Xv="nath.encyclo.favoris";function Yv(t){try{const e=JSON.parse(t.getItem(Xv)??"[]");return Array.isArray(e)?[...new Set(e.filter(n=>typeof n=="string"))]:[]}catch{return[]}}function dm(t,e){const n=Yv(t),i=!n.includes(e),r=i?[...n,e]:n.filter(s=>s!==e);return t.setItem(Xv,JSON.stringify(r)),i}function fm(t,e){const n=new Set(Yv(e));return t.filter(i=>n.has(i.id))}function vA(t){const e=new Set,n=[];for(const i of t){const r=ft(i.titre||i.sujet);!r||e.has(r)||(e.add(r),n.push({id:`savoir:${r}`,titre:(i.titre||i.sujet).trim(),domaine:"Mes découvertes",resume:i.resume,tags:[],...i.image?{image:i.image}:{},...i.url?{url:i.url}:{}}))}return n}async function _A(t,e,n=fetch,i=""){const r=e.trim();if(!r)return null;try{const s=await n(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i?{modele:i}:{},messages:[{role:"system",content:"Tu es un guide curieux et pédagogue, en français. En 3 ou 4 phrases courtes, donne un fait surprenant et un rapprochement inattendu avec un autre domaine sur le sujet qui vient. Pas de liste, pas de titre."},{role:"user",content:r}]})});if(!s.ok)return null;const a=await s.json(),o=a?.result?.response??a?.response,l=typeof o=="string"?o.trim():"";return l&&l.length<=800?l:null}catch{return null}}function xA(t){return!t.image}function bA(t,e,n){return!t||!t.image||!e||!/^https?:\/\//.test(t.image)||t.titre&&Yo(t.titre)!==Yo(n)||Jv(e,n)?"":t.image}function Jv(t,e){return!t||Yo(t)!==Yo(e)}function Yo(t){return ft(t).replace(/['’]/g," ").replace(/\s+/g," ").trim().replace(/^(?:la |le |les |l |un |une |des |du |de |d )/,"").replace(/s$/,"")}const Bu=[{max:50,palier:"Classe",mensuel:15e3},{max:200,palier:"École",mensuel:4e4},{max:1e3,palier:"Réseau",mensuel:12e4},{max:1/0,palier:"Sur mesure",mensuel:null}];function SA(t){if(!Number.isFinite(t)||t<=0)return{palier:"Sur mesure",mensuel:null};const e=Bu.find(n=>t<=n.max)??Bu[Bu.length-1];return{palier:e.palier,mensuel:e.mensuel}}function hm(t){return t===null?"à convenir":t.toLocaleString("fr-FR").replace(/[\u202f\u00a0]/g," ")+" FCFA"}const Kv="nath.flamme",ud=100,yA="Curieux",pm=[yA,"Défricheur","Apprenant","Explorateur","Artisan","Savant","Passeur","Esprit libre"],ku={streak:0,meilleur:0,xp:0,dernier:""},xs=t=>typeof t=="number"&&Number.isFinite(t)&&t>0?Math.floor(t):0;function MA(t=Date.now()){const e=new Date(t),n=`${e.getMonth()+1}`.padStart(2,"0"),i=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${n}-${i}`}const mm=t=>{const[e,n,i]=t.split("-").map(Number);return!e||!n||!i?NaN:Math.floor(Date.UTC(e,n-1,i)/864e5)};function EA(t,e){const n=mm(t),i=mm(e);return Number.isNaN(n)||Number.isNaN(i)?NaN:i-n}function Zv(t){try{const e=t.getItem(Kv);if(!e)return{...ku};const n=JSON.parse(e);return!n||typeof n!="object"?{...ku}:{streak:xs(n.streak),meilleur:xs(n.meilleur),xp:xs(n.xp),dernier:typeof n.dernier=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(n.dernier)?n.dernier:""}}catch{return{...ku}}}function Qv(t,e){t.setItem(Kv,JSON.stringify(e))}function TA(t,e=Date.now()){const n=Zv(t),i=MA(e);if(n.dernier===i)return n;const r=n.dernier&&EA(n.dernier,i)===1?n.streak+1:1,s={streak:r,meilleur:Math.max(n.meilleur,r),xp:n.xp,dernier:i};return Qv(t,s),s}function e_(t,e,n=Date.now()){const i=xs(e),r=TA(t,n),s={...r,xp:r.xp+i};return Qv(t,s),s}function AA(t){return Math.floor(xs(t)/ud)+1}function wA(t){const e=Math.max(1,Math.floor(t)||1);return pm[Math.min(e-1,pm.length-1)]}function CA(t){return xs(t)%ud/ud}const t_="nath.journal",RA=200,bs=t=>typeof t=="string"?t.trim():"",gm=t=>typeof t=="number"&&Number.isFinite(t)?Math.floor(t):0;function LA(t,e){if(!t||typeof t!="object")return null;const n=t,i=bs(n.titre),r=bs(n.texte);return!i&&!r?null:{id:typeof n.id=="string"&&n.id?n.id:`entree-${e}-${gm(n.at)}`,titre:i||r.slice(0,48),texte:r||i,origine:bs(n.origine)||"note",at:gm(n.at)}}function Jo(t){try{const e=t.getItem(t_);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(LA).filter(i=>i!==null):[]}catch{return[]}}function n_(t,e){t.setItem(t_,JSON.stringify(e.slice(0,RA)))}function i_(t,e,n){const i=bs(e.titre),r=bs(e.texte);if(!i&&!r)return null;const s=Date.now(),a={id:`${s}-${Math.random().toString(36).slice(2,8)}`,titre:i||r.slice(0,48),texte:r||i,origine:bs(e.origine)||"note",at:s};return n_(t,[a,...Jo(t)]),a}function vm(t,e){const n=ft(e).trim();return n?t.filter(i=>`${ft(i.titre)} ${ft(i.texte)}`.includes(n)):[...t]}function PA(t,e){const n=Jo(t),i=n.filter(r=>r.id!==e);return i.length===n.length?!1:(n_(t,i),!0)}function DA(t,e=8){return t.filter(n=>n.titre&&n.texte).slice(0,e).map(n=>({verso:n.titre,recto:n.texte}))}const _m="nath.savoir",Mr="nath.lexique",ge=t=>{const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild},Qe=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e);function NA(t){const e=wf(),n=ge('<button class="savoir-btn" title="Mon coin d’études" aria-label="Ouvrir le coin d’études">🎓</button>'),i=ge(`
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
    </div>`);document.body.append(n,i);const r=i.querySelector(".savoir-corps");n.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden||E(s)}),i.querySelector(".savoir-fermer").addEventListener("click",()=>i.hidden=!0);let s="reviser",a=null,o=[],l=null,u="",c=!1,d=0,f="",p=null;const v=()=>{try{const D=JSON.parse(t.getItem(_m)??"[]");return Array.isArray(D)?D.filter(W=>!!W&&typeof W=="object"&&typeof W.sujet=="string"&&typeof W.resume=="string"):[]}catch{return[]}},_=()=>od(t.getItem(Mr));i.querySelectorAll(".savoir-onglets button").forEach(D=>D.addEventListener("click",()=>{s=D.dataset.on,i.querySelectorAll(".savoir-onglets button").forEach(W=>W.classList.toggle("actif",W===D)),E(s)}));const m=()=>a?Gn(t).find(D=>D.id===a)??null:null,h=()=>a?Gn(t).filter(D=>D.id===a):Gn(t);function E(D){r.innerHTML="",D==="reviser"?T():D==="savoir"?R():D==="encyclo"?L():D==="entreprise"?se():k()}function T(){const D=Gn(t),W=ge('<select class="savoir-select"><option value="">Tous les paquets</option></select>');for(const B of D){const ee=document.createElement("option");ee.value=B.id,ee.textContent=`${B.nom} (${B.fiches.length})`,B.id===a&&(ee.selected=!0),W.appendChild(ee)}W.addEventListener("change",()=>{a=W.value||null,l=null,T()}),r.appendChild(W);const $=ge('<div class="savoir-ligne"><input type="text" placeholder="Nouveau paquet (ex. Biologie)" aria-label="Nouveau paquet" /><button>Ajouter</button></div>'),ve=$.querySelector("input");$.querySelector("button").addEventListener("click",()=>{const B=ls(t,ve.value);B?(a=B.id,T()):ve.focus()}),r.appendChild($);const Z=h().map(B=>WT(B,Date.now())).reduce((B,ee)=>({total:B.total+ee.total,aRevoir:B.aRevoir+ee.aRevoir,revisees:B.revisees+ee.revisees}),{total:0,aRevoir:0,revisees:0});r.appendChild(ge(`<p class="savoir-stats">${Z.total} carte${Z.total>1?"s":""} · <b>${Z.aRevoir} à revoir</b> · ${Z.revisees} travaillée${Z.revisees>1?"s":""}</p>`));const he=ge('<details class="savoir-import"><summary>Coller des cartes (une par ligne : question :: réponse)</summary><textarea rows="4" placeholder="Capitale du Cameroun :: Yaoundé&#10;2 + 2 :: 4"></textarea><button>Importer</button></details>'),F=he.querySelector("textarea");he.querySelector("button").addEventListener("click",()=>{const B=a??ls(t,"Mes cartes")?.id??null;if(!B)return;a=B;let ee=0;for(const pe of F.value.split(/\r?\n/)){const Re=pe.indexOf("::");Re<=0||va(t,B,pe.slice(0,Re),pe.slice(Re+2))&&ee++}T(),ee&&e.parler(`${ee} cartes rangées dans ${m()?.nom??"Mes cartes"}.`,"posee")}),r.appendChild(he);const j=ge('<div class="savoir-actions"><button class="savoir-dicter">🎤 Dicter un cours</button></div>');j.querySelector(".savoir-dicter").addEventListener("click",()=>{if(r.querySelector(".savoir-session")?.remove(),!e.sttDisponible){r.appendChild(ge('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — colle ton cours en texte, ça marche aussi.</p>'));return}r.appendChild(ge('<p class="savoir-msg">J’écoute… parle normalement, je retirerai les « euh » tout seul.</p>')),e.ecouter(async B=>{const ee=$v(B);if(r.querySelector(".savoir-msg")?.remove(),!ee){r.appendChild(ge('<p class="savoir-msg">Je n’ai rien entendu de assez net — redicte, sans te presser.</p>'));return}let Re=a;if(!Re){const V=sn(t),xe=Gn(t).map(ue=>ue.nom),M=V&&xe.length?await mT(V,ee,xe):null;M&&(Re=Gn(t).find(ue=>ue.nom===M)?.id??null)}const be=Re??ls(t,"Mes cartes")?.id??null;if(!be)return;a=be;let Ce=0;for(const V of Ou(ee))va(t,be,V.verso,V.recto)&&Ce++;T();const Ve=ge(Ce?`<p class="savoir-msg">${Ce} carte${Ce>1?"s":""} née${Ce>1?"s":""} de ta voix, rangée${Ce>1?"s":""} dans « ${Qe(m()?.nom??"Mes cartes")} ». Révise quand tu veux.</p>`:'<p class="savoir-msg">Trop court pour faire des cartes — dicte-moi des phrases complètes, une idée par phrase.</p>');r.insertBefore(Ve,r.firstChild),Ce&&e.parler(`${Ce} cartes nées de ta dictée.`,"lumineuse")})}),r.appendChild(j);const ae=ge('<div class="savoir-actions"><button class="savoir-reviser">Réviser maintenant</button><button class="savoir-quiz">Quiz du jour</button></div>');ae.querySelector(".savoir-reviser").addEventListener("click",()=>{if(o=qT(h(),Date.now()),o.length===0){r.querySelector(".savoir-session")?.remove(),r.appendChild(ge('<p class="savoir-msg">Rien à revoir pour l’instant — repose-toi, ou importe des cartes.</p>'));return}A()}),ae.querySelector(".savoir-quiz").addEventListener("click",()=>{const B=m()??h().find(ee=>ee.fiches.length>=2);if(!B){r.appendChild(ge('<p class="savoir-msg">Un quiz a besoin d’un paquet d’au moins deux cartes.</p>'));return}l={questions:jT(B,5),index:0,reponses:[],fini:!1},C()}),r.appendChild(ae)}function A(){r.querySelector(".savoir-session")?.remove();const D=o.shift();if(!D){r.appendChild(ge('<p class="savoir-msg session">Fin de la file 🌿 — tout est revu, la mémoire fait son travail en silence.</p>'));return}const W=ge(`<div class="savoir-session session">
      <p class="savoir-reste">encore ${o.length}</p>
      <p class="savoir-verso">${Qe(D.verso)}</p>
      <div class="savoir-reponse" hidden><p class="savoir-recto">${Qe(D.recto)}</p></div>
      <div class="savoir-actions">
        <button class="savoir-voir">Voir la réponse</button>
        <span class="savoir-noter" hidden>
          <button data-n="difficile">Difficile</button>
          <button data-n="bien">Bien</button>
          <button data-n="facile">Facile</button>
        </span>
      </div>
    </div>`),$=W.querySelector(".savoir-reponse"),ve=W.querySelector(".savoir-noter");W.querySelector(".savoir-voir").addEventListener("click",()=>{$.hidden=!1,ve.hidden=!1,W.querySelector(".savoir-voir").hidden=!0,e.parler(D.recto,"posee")}),ve.querySelectorAll("button").forEach(U=>U.addEventListener("click",()=>{const Z=a??w(D.id);Z&&$T(t,Z,D.id,U.dataset.n),e_(t,5),A()})),r.appendChild(W)}function w(D){for(const W of Gn(t))if(W.fiches.some($=>$.id===D))return W.id;return null}function C(){if(r.querySelector(".savoir-session")?.remove(),!l)return T();const D=l.questions[l.index];if(!D||l.fini){const ve=l.reponses.filter((he,F)=>he===l.questions[F].bonne).length,U=l.questions.length;l=null,T();const Z=Math.round(100*ve/(U||1));r.insertBefore(ge(`<p class="savoir-msg session">Quiz : ${ve}/${U} (${Z} %). ${Z>=70?"Tu tiens le sujet.":"On creuse encore, tranquillement."}</p>`),r.firstChild),e.parler(`Quiz terminé : ${ve} sur ${U}.`,"lumineuse");return}const W=ge(`<div class="savoir-session session">
      <p class="savoir-reste">question ${l.index+1} / ${l.questions.length}</p>
      <p class="savoir-verso">${Qe(D.enonce)}</p>
      <div class="savoir-choix"></div>
    </div>`),$=W.querySelector(".savoir-choix");e.parler(D.enonce,"posee"),D.choix.forEach((ve,U)=>{const Z=document.createElement("button");Z.textContent=ve,Z.addEventListener("click",()=>{l.reponses[l.index]=U,[...$.children].forEach((he,F)=>he.classList.toggle("juste",F===D.bonne)),Z.classList.toggle("faux",U!==D.bonne),e.parler(U===D.bonne?"Oui, exactement.":ve,U===D.bonne?"lumineuse":"douce"),window.setTimeout(()=>{l.index++,C()},1100)}),$.appendChild(Z)}),r.appendChild(W)}function R(){const D=ge('<div class="savoir-ligne"><input type="text" placeholder="Que veux-tu apprendre ? (ex. la mitose)" aria-label="Sujet" /><button>Chercher</button></div>'),W=D.querySelector("input"),$=D.querySelector("button"),ve=ge('<div class="savoir-resultat"></div>');W.addEventListener("keydown",B=>{B.key==="Enter"&&U(W.value.trim())}),$.addEventListener("click",()=>U(W.value.trim()));function U(B){if(ve.innerHTML="",!B)return;const ee=XT(v(),B);ee?z(ee,ve):x(B,ve)}r.append(D,ve);const Z=ge(`<details class="savoir-import"><summary>Grand cerveau en ligne (pour les machines sages)</summary>
      <p class="savoir-note">Sur demande à Nath-Tech, une adresse de cerveau prêté peut être réglée ici : les machines sans grande carte répondent alors plus vite et plus loin. Laisser vide pour éteindre ce secours.</p>
      <div class="savoir-ligne"><input type="text" class="cerv-url" placeholder="https://… (vide pour effacer)" aria-label="Adresse du grand cerveau" /><button class="cerv-ok">Régler</button></div>
      <div class="savoir-ligne"><select class="savoir-select cerv-allure" aria-label="Allure du grand cerveau"></select><button class="cerv-allure-ok">Allure</button></div>
      <p class="savoir-msg cerv-etat"></p></details>`),he=Z.querySelector(".cerv-url"),F=Z.querySelector(".cerv-etat"),j=sn(t);F.textContent=j?"Le secours est réglé et veille.":"Aucun secours réglé — le cerveau local et le petit moteur suffisent.",Z.querySelector(".cerv-ok").addEventListener("click",()=>{oT(t,he.value)?(F.textContent=sn(t)?"Le secours est réglé — il répondra dès la prochaine ouverture.":"Secours éteint. Le ciel reste vivant, sans lui.",he.value=""):F.textContent="Cette adresse ne convient pas — il faut du https."});const ae=Z.querySelector(".cerv-allure");for(const B of Ef){const ee=document.createElement("option");ee.value=B.cle,ee.textContent=B.nom,ae.appendChild(ee)}ae.value=aT(t),Z.querySelector(".cerv-allure-ok").addEventListener("click",()=>{sT(t,ae.value)?F.textContent=Pr(t)?"Son allure est réglée — la prochaine réponse la portera.":"Elle reprend son allure ordinaire.":F.textContent="Cette allure n’existe pas — le choix reste entier."}),r.appendChild(Z)}function z(D,W){W.innerHTML="";const $=ge(`<div class="savoir-fiche"><h4>${Qe(D.titre)}</h4></div>`);if(D.image&&/^https?:\/\//.test(D.image)){const F=document.createElement("img");F.className="savoir-img",F.src=D.image,F.alt="",F.loading="lazy",$.appendChild(F)}const ve=ge(`<p>${Qe(D.resume)}</p>`);$.appendChild(ve);const U=ge('<div class="savoir-actions"></div>'),Z=ge("<button>En faire des cartes</button>");Z.addEventListener("click",()=>{const F=m()??ls(t,D.sujet);if(!F)return;a=F.id;let j=0;for(const ae of Ou(D.resume))va(t,F.id,ae.verso,ae.recto)&&j++;W.appendChild(ge(`<p class="savoir-msg">${j} carte${j>1?"s":""} rangée${j>1?"s":""} dans « ${Qe(F.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${j} cartes rangées.`,"lumineuse")}),U.appendChild(Z);const he=/^https?:\/\//.test(D.url)?D.url:"";he&&U.appendChild(ge(`<a class="savoir-lien" href="${Qe(he)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),W.append($,U)}function x(D,W){const $=ge(`<div class="savoir-fiche"><p>« ${Qe(D)} » ne fait pas encore partie de mes connaissances enregistrées.</p>
      <p class="savoir-note">Veux-tu que je me connecte pour ramener le maximum de ressources sur ce sujet ? Seul le sujet sort de l’appareil, rien sur toi.</p>
      <div class="savoir-actions"><button class="oui">Oui, cherche</button><button class="non">Garde pour plus tard</button></div></div>`);$.querySelector(".non").addEventListener("click",()=>W.innerHTML=""),$.querySelector(".oui").addEventListener("click",async()=>{const ve=ge('<p class="savoir-msg">Je cherche…</p>');W.appendChild(ve);const U=await lm(D,fetch);if(ve.remove(),!U){W.appendChild(ge('<p class="savoir-msg">Pas de réponse du net pour l’instant — ou le sujet est trop précis. Réessaie, ou dicte-moi tes propres notes.</p>'));return}const Z={sujet:D,titre:U.titre,resume:U.resume,url:U.url,image:U.image,ramene_a:Date.now()};t.setItem(_m,JSON.stringify(YT(v(),Z))),W.innerHTML="",z(Z,W),e.parler("J’ai ramené de quoi apprendre.","lumineuse")}),W.appendChild($)}const S=()=>[...Wv,...vA(v())];function L(){if(r.innerHTML="",p){J(p);return}const D=S(),W=new Set(fm(D,t).map(B=>B.id)),$=ge(`<div class="savoir-ligne enc-tete"><input type="text" class="enc-champ" placeholder="Cherche un sujet (ex. geometrie, espace…)" aria-label="Recherche encyclopédie" /><button class="enc-fav" title="Mes favoris">★ <span class="enc-fav-n">${W.size}</span></button></div>`),ve=$.querySelector(".enc-champ");ve.value=u;const U=$.querySelector(".enc-fav");if(U.classList.toggle("actif",c),ve.addEventListener("input",()=>{u=ve.value,d=0,L();const B=r.querySelector(".enc-champ");B&&(B.focus(),B.setSelectionRange(B.value.length,B.value.length))}),U.addEventListener("click",()=>{c=!c,d=0,L()}),r.appendChild($),!u&&!c&&!f){const B=pA(D);if(B){const ee=ge(`<button class="enc-jour">✨ Découverte du jour · ${Qe(B.titre)}<small> ${Qe(B.domaine)}</small></button>`);ee.addEventListener("click",()=>{p=B,L()}),r.appendChild(ee)}}const Z=ge('<div class="enc-domaines"></div>'),he=[{nom:"Tous",val:""},...fA(D).map(B=>({nom:B,val:B}))];for(const B of he){const ee=ge(`<button class="enc-dom${!c&&f===B.val?" actif":""}">${Qe(B.nom)}</button>`);ee.addEventListener("click",()=>{c=!1,f=B.val,d=0,L()}),Z.appendChild(ee)}r.appendChild(Z);let F=dA(D,u);c&&(F=F.filter(B=>W.has(B.id))),F=hA(F,f);const j=gA(F,d),ae=ge('<div class="enc-grille"></div>');for(const B of j.visibles){const ee=ge(`<div class="enc-carte" role="button" tabindex="0">
        <button class="enc-etoile${W.has(B.id)?" mise":""}" aria-label="Favori">${W.has(B.id)?"★":"☆"}</button>
        <h5>${Qe(B.titre)}</h5><p class="enc-domaine">${Qe(B.domaine)}</p><p class="enc-resume">${Qe(B.resume)}</p></div>`);ee.querySelector(".enc-etoile").addEventListener("click",pe=>{pe.stopPropagation(),dm(t,B.id),L()}),ee.addEventListener("click",()=>{p=B,L()}),ee.addEventListener("keydown",pe=>{pe.key==="Enter"&&(p=B,L())}),ae.appendChild(ee)}if(r.appendChild(ae),j.visibles.length||r.appendChild(ge(`<p class="savoir-msg">${c?"Aucune étoile ici pour l’instant — clique sur ☆ d’une carte pour la garder.":"Rien sous ce nom — Essaie un mot plus simple, ou va le chercher dans l’onglet Savoir."}</p>`)),j.reste>0){const B=ge(`<div class="savoir-actions"><button>Afficher plus (${j.reste})</button></div>`);B.querySelector("button").addEventListener("click",()=>{d=j.visibles.length,L()}),r.appendChild(B)}else if(j.visibles.length){const B=j.visibles.length>1?"notices":"notice";r.appendChild(ge(`<p class="savoir-note">${j.visibles.length} ${B} sur l’étagère.</p>`))}}function J(D){r.innerHTML="";const W=S(),$=fm([D],t).length>0,ve=ge(`<div class="savoir-ligne"><button class="enc-retour">← Étagère</button><button class="enc-etoile${$?" mise":""}">${$?"★ Favori":"☆ Mettre en favori"}</button><button class="enc-journal">✎ Garder au journal</button></div>`);ve.querySelector(".enc-retour").addEventListener("click",()=>{p=null,L()}),ve.querySelector(".enc-journal").addEventListener("click",B=>{i_(t,{titre:D.titre,texte:D.resume,origine:"encyclo"});const ee=B.currentTarget;ee.textContent="✓ Gardé",ee.disabled=!0}),ve.querySelector(".enc-etoile").addEventListener("click",()=>{dm(t,D.id),J(D)}),r.appendChild(ve);const U=ge(`<div class="savoir-fiche"><h4>${Qe(D.titre)} <small class="enc-domaine">${Qe(D.domaine)}</small></h4></div>`);if(D.image&&/^https?:\/\//.test(D.image)){const B=document.createElement("img");B.className="savoir-img",B.src=D.image,B.alt="",B.loading="lazy",U.appendChild(B)}U.appendChild(ge(`<p>${Qe(D.resume)}</p>`)),r.appendChild(U);const Z=mA(D,W);if(Z.length){const B=ge('<div class="enc-liens"><p class="savoir-note">Liens extraordinaires</p></div>');for(const ee of Z){const pe=ge(`<button class="enc-lien">${Qe(ee.titre)}</button>`);pe.addEventListener("click",()=>{p=ee,L()}),B.appendChild(pe)}r.appendChild(B)}const he=ge('<div class="savoir-actions"></div>'),F=ge("<button>En faire des cartes</button>");if(F.addEventListener("click",()=>{const B=m()??ls(t,D.titre);if(!B)return;a=B.id;let ee=0;for(const pe of Ou(D.resume))va(t,B.id,pe.verso,pe.recto)&&ee++;r.appendChild(ge(`<p class="savoir-msg">${ee} carte${ee>1?"s":""} rangée${ee>1?"s":""} dans « ${Qe(B.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${ee} cartes rangées.`,"lumineuse")}),he.appendChild(F),xA(D)){const B=ge("<button>Chercher une illustration</button>");B.addEventListener("click",async()=>{B.disabled=!0,B.textContent="Je regarde…";const ee=await lm(D.titre,fetch);if(Jv(p?.titre??null,D.titre))return;const pe=bA(ee,p?.titre??"",D.titre),Re=r.querySelector(".savoir-fiche");if(pe&&Re&&!Re.querySelector("img")){const be=document.createElement("img");be.className="savoir-img",be.src=pe,be.alt="",be.loading="lazy",be.onerror=()=>be.remove();const Ce=Re.querySelector("h4");Re.insertBefore(be,Ce?Ce.nextSibling:null),B.remove()}else B.disabled=!1,B.textContent="Chercher une illustration",r.appendChild(ge('<p class="savoir-msg">Le net n’a pas d’image pour ce sujet — ou bien ce n’est pas le bon.</p>'))}),he.appendChild(B)}const j=sn(t);if(j){const B=ge("<button>Approfondir avec le grand cerveau</button>");B.addEventListener("click",async()=>{B.disabled=!0;const ee=ge('<p class="savoir-msg">Je consulte le grand cerveau…</p>');r.appendChild(ee);const pe=await _A(j,D.titre,fetch,Pr(t));ee.remove(),B.disabled=!1,r.appendChild(ge(`<p class="savoir-msg">${pe?Qe(pe):"Le grand cerveau ne répond pas pour l’instant — elle reviendra, plus tard."}</p>`))}),he.appendChild(B)}const ae=D.url&&/^https?:\/\//.test(D.url)?D.url:"";ae&&he.appendChild(ge(`<a class="savoir-lien" href="${Qe(ae)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),r.appendChild(he)}function k(){const D=ge('<input type="text" class="trad-langue" placeholder="Ta langue (ex. wolof, ewondo…)" aria-label="Langue" />'),W=ge('<textarea class="trad-phrase" rows="2" placeholder="Écris (ou dicte dans la bulle du bas)…" aria-label="Phrase à traduire"></textarea>'),$=ge('<div class="savoir-resultat"></div>'),ve=ge('<div class="savoir-actions"><button class="trad-faire">Traduire</button></div>'),U=ge(`<details class="savoir-import"><summary>Ajouter à mon lexique (il reste ici, hors-ligne)</summary>
      <div class="savoir-actions"><button class="trad-dicter">🎤 Dicter un mot — dites « bonjour veut dire… »</button></div>
      <div class="savoir-ligne"><input type="text" placeholder="mot français" aria-label="Mot français" /><input type="text" placeholder="traduction dans ta langue" aria-label="Traduction" /><button>Ajouter</button></div></details>`);U.querySelector(".trad-dicter").addEventListener("click",()=>{if(!e.sttDisponible){$.innerHTML="",$.appendChild(ge('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — écris le mot ci-dessous.</p>'));return}const pe=D.value.trim();$.innerHTML="",$.appendChild(ge('<p class="savoir-msg">J’écoute… dis par exemple « bonjour veut dire naka nga def ».</p>')),e.ecouter(Re=>{$.innerHTML="";const be=jv(Re);if(!be){$.appendChild(ge(`<p class="savoir-msg">J’ai entendu « ${Qe(Re)} » sans voir le couple — recommence avec « mot veut dire traduction ».</p>`));return}if(!pe){Z.value=be.de,he.value=be.a,$.appendChild(ge('<p class="savoir-msg">Donne-moi le nom de la langue en haut, puis appuie sur Ajouter — tout est prêt.</p>'));return}t.setItem(Mr,JSON.stringify(ds(_(),be.de,be.a,pe))),$.appendChild(ge(`<p class="savoir-msg">${Qe(be.de)} → ${Qe(be.a)}, rangé dans mon carnet.</p>`)),e.parler(`${be.de} veut dire ${be.a}.`,"lumineuse")})});const[Z,he]=[...U.querySelectorAll("input")];U.querySelector(".savoir-ligne button").addEventListener("click",()=>{const pe=D.value;if(!pe.trim()||!Z.value.trim()||!he.value.trim())return;const Re=od(t.getItem(Mr));t.setItem(Mr,JSON.stringify(ds(Re,Z.value,he.value,pe))),Z.value="",he.value="",e.parler("C’est dans mon carnet.","douce")}),D.value=localStorage.getItem("nath.trad.langue")??"",D.addEventListener("change",()=>localStorage.setItem("nath.trad.langue",D.value)),ve.querySelector(".trad-faire").addEventListener("click",()=>{const pe=D.value,Re=zv(W.value,pe,_());if($.innerHTML="",Re.resultat){const be=ge(`<div class="savoir-fiche"><p class="trad-out">${Qe(Re.resultat)}</p></div>`),Ce=ge("<button>Écouter</button>");Ce.addEventListener("click",()=>e.parler(Re.resultat,"posee")),be.appendChild(Ce),$.appendChild(be),Re.manques.length&&($.appendChild(ge(`<p class="savoir-note">mots que je ne connais pas encore : ${Qe(Re.manques.join(", "))} — ajoute-les ci-dessous, ton lexique grandit pour toujours.</p>`)),F())}else{const be=qv(pe);if(be.length){const Ce=ge(`<p class="savoir-msg">Je ne connais encore rien dans cette langue — mais on m'a donné des mots sûrs en « ${Qe(pe.trim())} ».</p>`),Ve=ge("<button>Charger ce socle de mots</button>");Ve.addEventListener("click",()=>{let V=_();for(const xe of be)V=ds(V,xe.de,xe.a,pe.trim());t.setItem(Mr,JSON.stringify(V)),$.innerHTML="",$.appendChild(ge(`<p class="savoir-msg">${be.length} mots de vie rangés dans mon carnet. Écris une phrase, je saurai répondre.</p>`)),e.parler("Le socle est chargé. Ton lexique peut grandir.","lumineuse")}),Ce.appendChild(Ve),$.appendChild(Ce)}else $.appendChild(ge('<p class="savoir-msg">Je ne connais encore aucun mot dans cette langue. Sème ton lexique une entrée à la fois, ou colle le carnet d’un autre plus bas — ensemble on traduit tout le monde.</p>'));F()}});function F(){const pe=oA(D.value);if(!pe)return j();const Re=ge('<div class="savoir-actions"><button class="trad-filet">Demander au filet gratuit (cette phrase sortira de l’appareil)</button></div>');Re.querySelector(".trad-filet").addEventListener("click",async()=>{const be=Re.querySelector("button"),Ce=W.value.trim();if(!Ce)return;be.disabled=!0,be.textContent="Je demande…";const Ve=await lA(Ce,"fr",pe,fetch);if(Re.remove(),!Ve){$.appendChild(ge('<p class="savoir-msg">Le filet n’a rien pu pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));return}const V=sn(t);if(V&&await gT(V,Ce,Ve,D.value.trim())===!1){$.appendChild(ge('<p class="savoir-msg">Le filet a répondu, mais ça ne me semble pas fidèle à ta phrase — une proposition douteuse ne se range pas. Ton carnet ne garde que le juste.</p>')),e.parler("Cette traduction ne me semble pas juste — on ne la range pas.","douce");return}ae(Ve,"filet gratuit",Ce)}),$.appendChild(Re)}function j(){const pe=sn(t);if(!pe)return;const Re=ge('<div class="savoir-actions"><button class="trad-cerveau">Demander au grand cerveau en ligne (cette phrase sortira de l’appareil)</button></div>');Re.querySelector(".trad-cerveau").addEventListener("click",async()=>{const be=Re.querySelector("button"),Ce=W.value.trim();if(!Ce)return;be.disabled=!0,be.textContent="Je demande…";const Ve=await uT(pe,Ce,D.value.trim(),fetch);if(Re.remove(),!Ve){$.appendChild(ge('<p class="savoir-msg">Le grand cerveau n’a rien su pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));return}ae(Ve,"grand cerveau en ligne",Ce)}),$.appendChild(Re)}function ae(pe,Re,be){const Ce=ge(`<div class="savoir-fiche"><p class="trad-out">${Qe(pe)}</p><p class="savoir-note">proposition du ${Re} — vérifie avec ton oreille ; si c’est juste, range-le : ça rendra service à tout le monde.</p></div>`),Ve=ge("<button>Ranger dans mon carnet</button>");Ve.addEventListener("click",()=>{const V=D.value.trim();!V||!be||(t.setItem(Mr,JSON.stringify(ds(_(),be,pe,V))),Ve.textContent="Rangé 🌿",Ve.disabled=!0,e.parler("Merci — ton carnet est un peu plus monde.","douce"))}),Ce.appendChild(Ve),$.appendChild(Ce)}const B=ge(`<details class="savoir-import"><summary>Mon carnet complet — le prêter, ou emprunter celui d’un autre</summary>
      <div class="savoir-actions"><button class="trad-copier">Copier tout mon lexique</button></div>
      <textarea class="trad-collecte" rows="3" placeholder="les mots copiés se collent ici pour être prêtés" aria-label="Mon lexique à prêter" hidden></textarea>
      <textarea class="trad-import" rows="3" placeholder="Colle ici le carnet d’un autre (une ligne par mot : langue | mot :: traduction)" aria-label="Lexique à importer"></textarea>
      <div class="savoir-actions"><button class="trad-importer">Ajouter ces mots au mien</button></div></details>`),ee=B.querySelector(".trad-collecte");B.querySelector(".trad-copier").addEventListener("click",async()=>{const pe=QT(_());if(!pe){e.parler("Mon carnet est encore vide — ajoute des mots, il sera prêt à partager.","douce");return}try{await navigator.clipboard.writeText(pe),$.innerHTML="",$.appendChild(ge(`<p class="savoir-msg">${Qe(String(pe.split(`
`).length))} mots copiés — colle-les chez qui veut, son lexique grandira.</p>`)),e.parler("C’est copié. Tu peux le prêter.","lumineuse")}catch{ee.hidden=!1,ee.value=pe,ee.select(),$.appendChild(ge('<p class="savoir-note">Sélectionne tout dans la case et copie — le carnet est prêt à être prêté.</p>'))}}),B.querySelector(".trad-importer").addEventListener("click",()=>{const pe=B.querySelector(".trad-import").value,Re=_(),be=eA(pe,Re),Ce=be.length-Re.length;if(Ce<=0){$.appendChild(ge('<p class="savoir-msg">Rien de nouveau là-dedans — ou les lignes ne sont pas dans le format « langue | mot :: traduction ».</p>'));return}t.setItem(Mr,JSON.stringify(be)),B.querySelector(".trad-import").value="",$.appendChild(ge(`<p class="savoir-msg">${Qe(String(Ce))} mots reçus d’un autre — merci à lui. Notre lexique est plus fort.</p>`)),e.parler(`${Ce} mots reçus. Merci à celui qui les a semés.`,"douce")}),r.append(D,W,ve,$,U,B)}let K=null;const te=document.getElementById("patte"),q=te?te.innerHTML:"";function Y(D){K===null&&(K=document.title);const W=cm(D);document.documentElement.style.setProperty("--teinte",W);let $=document.querySelector('meta[name="theme-color"]');$||($=document.createElement("meta"),$.name="theme-color",document.head.appendChild($)),$.content=W,document.title=D.actif?D.slogan?`${D.nom} — ${D.slogan}`:D.nom:K,te&&(te.innerHTML=D.actif?`${Qe(D.nom)} — <span>${Qe(D.slogan||"l’assistant vivant")}</span>`:q)}function se(){const D=fa(t),W=ge('<div class="savoir-resultat"></div>');if(D.actif){const U=ge(`<div class="savoir-fiche"><h4>${Qe(D.nom)}</h4><p>${Qe(D.slogan)}</p>
        <p class="savoir-note">Cet appareil porte le visage de « ${Qe(D.organisation)} ».</p></div>`),Z=ge('<div class="savoir-actions"><button class="ent-perso">Revenir en mode personnel</button></div>');Z.querySelector(".ent-perso").addEventListener("click",()=>{iA(t),Y(fa(t)),E("entreprise"),e.parler("Je reprends mon visage habituel.","douce")}),r.append(U,Z)}const $=ge(`<div class="savoir-fiche">
      <p class="savoir-note">Pour une école, une ONG, une équipe : la clé se demande à Nath-Tech avec le nom exact de l’organisation. Rien n’est bridé, on peut toujours revenir.</p>
      <div class="savoir-ligne"><input type="text" class="ent-org" placeholder="Organisation (ex. Lycée Bilingue de Douala)" aria-label="Organisation" /></div>
      <div class="savoir-ligne"><input type="text" class="ent-nom" placeholder="Nom visible (ex. LBD)" aria-label="Nom de la marque" /><input type="text" class="ent-slogan" placeholder="Slogan (facultatif)" aria-label="Slogan" /></div>
      <div class="savoir-ligne"><input type="color" class="ent-teinte" value="${Qe(cm(D))}" aria-label="Teinte" /><input type="text" class="ent-cle" placeholder="Clé d’équipe (blocs de 4)" aria-label="Clé d’équipe" /></div>
      <div class="savoir-actions"><button class="ent-ok">Habiller l’app pour mon équipe</button></div>
    </div>`);$.querySelector(".ent-ok").addEventListener("click",()=>{const U=he=>$.querySelector(`.${he}`).value;nA(t,{organisation:U("ent-org"),cle:U("ent-cle"),nom:U("ent-nom"),slogan:U("ent-slogan"),couleur:U("ent-teinte")})?(Y(fa(t)),E("entreprise"),e.parler(`Désormais, je travaille pour ${fa(t).nom}.`,"lumineuse")):(W.innerHTML="",W.appendChild(ge('<p class="savoir-msg">Cette clé n’ouvre rien pour ce nom-là — vérifie le nom exact de l’organisation et la clé, bloc par bloc.</p>')))});const ve=ge(`<div class="savoir-fiche">
      <p class="savoir-note">Nath Entreprise pour une école, une ONG, une équipe — toute l’équipe habillée, un seul prix :</p>
      <div class="savoir-ligne"><input type="number" class="ent-nb" min="1" placeholder="Nombre de personnes à équiper" aria-label="Nombre de personnes" /><button class="ent-devis">Estimer</button></div>
      <div class="ent-devis-out"></div>
    </div>`);ve.querySelector(".ent-devis").addEventListener("click",()=>{const U=Number(ve.querySelector(".ent-nb").value),Z=ve.querySelector(".ent-devis-out");if(Z.innerHTML="",!Number.isFinite(U)||U<=0){Z.appendChild(ge('<p class="savoir-msg">Entre d’abord le nombre de personnes à équiper.</p>'));return}const he=SA(U),F=he.mensuel===null?`<b>${Qe(he.palier)}</b> — ${Qe(hm(null))} : parle-nous de ton réseau, on trouvera le juste chiffre.`:`<b>${Qe(he.palier)}</b> — ${Qe(hm(he.mensuel))} par mois pour toute l’équipe, soit environ ${Math.round(he.mensuel/U).toLocaleString("fr-FR")} F par personne. Et plus vous êtes nombreux, moins chaque tête coûte.`;Z.appendChild(ge(`<p class="savoir-msg">${F}</p>`)),Z.appendChild(ge('<p class="savoir-note">Accord direct avec Nath-Tech (mobile money), puis la clé exacte de ton organisation. Le gratuit de chacun reste entier, toujours.</p>'))}),r.append($,W,ve)}return Y(fa(t)),n}const cd="nath",r_=1,IA=["nath.","nuage."];function s_(t){return IA.some(e=>t.startsWith(e))}function FA(t){const e={};for(let n=0;n<t.length;n++){const i=t.key(n);if(i&&s_(i)){const r=t.getItem(i);r!==null&&(e[i]=r)}}return JSON.stringify({coffre:cd,version:r_,donnees:e})}function UA(t){try{const e=JSON.parse(t);return!e||typeof e!="object"||e.coffre!==cd||typeof e.version!="number"||e.version>r_||!e.donnees||typeof e.donnees!="object"?null:{coffre:cd,version:e.version,donnees:e.donnees}}catch{return null}}function OA(t,e){const n=UA(e);if(!n)return 0;let i=0;for(const[r,s]of Object.entries(n.donnees))s_(r)&&typeof s=="string"&&(t.setItem(r,s),i++);return i}const a_="nath.trad.carnet";function Sa(t){return od(t.getItem(a_))}function BA(t,e,n,i){const r=ld(i),s=ds(Sa(t),e,n,r);return s.length===0||t.setItem(a_,JSON.stringify(s)),s}function kA(t,e,n){const i=ld(e),r=Sa(n).filter(a=>ld(a.langue)===i),s=[...qv(i),...r];return zv(t,i,s)}function zA(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function xm(t,e,n){const i=Math.max(0,Math.min(e,t.length));return t.map(r=>({f:r,k:zA(`${n}|${r.id}`)})).sort((r,s)=>r.k-s.k).slice(0,i).map(r=>r.f)}function VA(t){const e=t.length,n=t.filter(i=>i.juste).length;return{corrects:n,total:e,score:e?n/e:0}}function qA(t,e=30){return Math.max(0,t)*Math.max(0,e)}function GA(t){return t>=.9?"Excellent, tu tiens ton examen.":t>=.7?"Bien joué, tu y es presque.":t>=.5?"C’est en bonne voie, continue sur ta lancée.":"On reprend calmement : les cartes les plus solides reviennent plus tôt."}const dd=[{id:"couture",nom:"Couture",emoji:"🧵",resume:"Coudre un vêtement qui tombe bien, du premier essayage à la dernière boutonnière.",taches:[{titre:"Prendre les mesures justes",gestes:["Tour de poitrine au niveau le plus fort, sans serrer","Tour de taille au creux naturel","Tour de hanches au plus large","Hauteur d’épaule jusqu’à l’ourlet voulu"]},{titre:"Décatir et couper le tissu",gestes:["Laver ou vaporiser selon la fibre pour que le tissu ne bouge plus après couture","Épingler le patron en suivant la lisière et le droit-fil","Couper d’un seul geste, ciseaux bien à plat contre le tissu"]},{titre:"Assembler les grandes coutures",gestes:["Faire un bâti (points larges à la main) pour un premier essayage","Piquer à la machine en laissant 1,5 cm de marge autour du patron","Cranter les courbes (petits traits en V) pour qu’elles posent plat"]},{titre:"Ourler et finitions",gestes:["Surfiler le bord (zigzag ou overlock) pour empêcher l’effilochage","Ourlet replié deux fois, repassé avant d’être cousu","Coudre boutons et boutonnières à la main pour un rendu net"]},{titre:"Repasser et vérifier la tombe",gestes:["Repasser à l’envers sur une surface plate","Vérifier que les coutures ne tirent pas en portant le vêtement","Couper les fils qui dépassent, un dernier coup de vapeur"]}],glossaire:[{mot:"lisière",sens:"bord du rouleau, la ligne droite du tissu"},{mot:"droit-fil",sens:"direction parallèle à la lisière — couper de travers fait tourner le vêtement"},{mot:"bâti",sens:"couture provisoire à grands points, défaite après essayage"},{mot:"ourlet",sens:"bord replié et cousu, en bas d’une manche ou d’une jupe"},{mot:"surfil",sens:"petit point qui empêche le tissu de s’effilocher"},{mot:"crantés",sens:"petits traits en V dans une courbe pour qu’elle pose à plat"},{mot:"pince",sens:"petit pli cousu pour cintrer la taille"},{mot:"empiècement",sens:"pièce de tissu rapportée, à l’épaule ou à la poitrine"}],pieges:[{enoncé:"Le bazin et le wax ne décatissent pas comme le coton",eviter:"Vaporiser et laisser sécher à plat AVANT de couper ; sinon le vêtement tourne au premier lavage."},{enoncé:"Oublier la marge de couture autour du patron",eviter:"Toujours 1,5 cm autour, 3 cm pour un ourlet long ; tracer la marge sur le tissu AVANT de couper."},{enoncé:"Piquer à la machine sans essayage préalable",eviter:"Faire un bâti et essayer d’abord ; on défait une couture provisoire, on ne défait pas un vêtement coupé trop court."},{enoncé:"Couper en diagonale sans vérifier le droit-fil",eviter:"Poser le tissu sur une table plate, aligner la lisière avec un bord de table, contrôler à chaque pièce."}]},{id:"boulangerie",nom:"Boulangerie",emoji:"🥖",resume:"Faire un pain qui lève bien et croustille, du pétrissage à la sortie du four.",taches:[{titre:"Peser et pétrir",gestes:["Farine, eau, sel, levure — au gramme près, pas au verre","Pétrir environ 10 minutes jusqu’à une pâte lisse et élastique","La pâte doit se décoller des doigts en fin de pétrissage"]},{titre:"Pointage (première pousse)",gestes:["Boule dans un récipient légèrement huilé","Couver d’un linge humide ou d’un film","Une à deux heures à température ambiante, jusqu’à doubler de volume"]},{titre:"Façonnage",gestes:["Chasser l’air du centre vers les bords (dégazer)","Former une boule ou un bâtard à surface bien tendue","Entailler le dessus avec une lame, geste franc et rapide"]},{titre:"Apprêt (seconde pousse)",gestes:["Sur plaque farinée ou dans un banneton côté fariné en l’air","30 minutes à 1 heure : la pâte rebondit lentement sous le doigt","Ne pas attendre qu’elle s’affaisse — c’est trop tard"]},{titre:"Cuisson",gestes:["Four à 240 °C, lèchefrite d’eau bouillante en bas pour la buée","Enfourner puis verser un verre d’eau pour créer le choc de vapeur","20 à 25 minutes : croûte dorée, fond qui sonne creux"]}],glossaire:[{mot:"pointage",sens:"première pousse, après le pétrissage"},{mot:"apprêt",sens:"seconde pousse, après le façonnage"},{mot:"levain",sens:"pâte-mère naturelle (farine et eau fermentées), remplace la levure"},{mot:"banneton",sens:"osier qui porte la pâte pendant l’apprêt et marque ses rainures"},{mot:"lame",sens:"petit rasoir incliné pour entailler le pain"},{mot:"grigne",sens:"belle entaille ouverte à la cuisson, signe d’un bon pétri"},{mot:"dégazer",sens:"chasser l’air de la pâte entre les deux pousses"},{mot:"coup de buff",sens:"entaille unique d’un bâtard pour guider l’ouverture"}],pieges:[{enoncé:"Sel et levure en contact direct",eviter:"Doser le sel d’un côté, la levure de l’autre, les mélanger via la farine — le sel tue la levure au contact."},{enoncé:"Eau trop chaude au pétrissage",eviter:"L’eau doit être fraîche à tiède (jamais au-dessus de 40 °C) ; vérifier au poignet avant de verser."},{enoncé:"Ouvrir le four dans les quinze premières minutes",eviter:"La buée et le choc thermique font la grigne — attendre au moins 15 minutes avant d’entrouvrir."},{enoncé:"Pâte qui retombe en fin d’apprêt",eviter:"C’est que la pousse a été trop longue ; enfourner immédiatement, et raccourcir la prochaine fois."}]},{id:"electricite",nom:"Électricité",emoji:"🔌",resume:"Câbler et sécuriser une installation domestique — disjoncteurs, prises, éclairage — sans se mettre en danger.",taches:[{titre:"Lire le plan et compter les circuits",gestes:["Séparer éclairage, prises et gros appareils (chauffe-eau, four, clim)","Noter la section des fils et le calibre du disjoncteur pour chaque circuit","Repérer où passe la terre avant de percer un mur"]},{titre:"Couper et vérifier avant de toucher",gestes:["Disjoncteur général sur « Off » — pas seulement le circuit concerné","Vérifier avec un testeur sans contact sur chaque conducteur","Travailler à deux quand c’est possible : l’un veille, l’autre agit"]},{titre:"Poser le tableau et les différentiels",gestes:["Un disjoncteur par circuit : 10 A lumière, 16 A prises, 20-32 A gros appareils","Un interrupteur différentiel 30 mA en tête de groupe — c’est ce qui coupe au contact humain","Terre reliée à un piquet enterré, section au moins 6 mm²"]},{titre:"Câbler une prise ou un point lumineux",gestes:["Rouge/marron/noir = phase ; bleu = neutre ; vert-jaune = terre","Serrer chaque fiche au couple indiqué, avec un tournevis isolé","Tester au multimètre : 220-240 V entre phase et neutre"]},{titre:"Mettre sous tension et tester",gestes:["Un circuit à la fois en remontant les disjoncteurs","Contrôler chaque prise : phase, neutre, terre dans le bon ordre","Faire vérifier par un électricien certifié avant livraison"]}],glossaire:[{mot:"disjoncteur",sens:"protège le circuit contre surcharge et court-circuit ; se rearme après déclenchement"},{mot:"différentiel 30 mA",sens:"coupe dès qu’une fuite part vers la terre — c’est le dispositif qui sauve"},{mot:"phase",sens:"le conducteur « qui tue », apporte le courant"},{mot:"neutre",sens:"le conducteur de retour, bleu"},{mot:"terre",sens:"vert-jaune qui évacue une fuite vers le sol, et protège la personne"},{mot:"section",sens:"aire du cuivre en mm² ; plus le circuit est long ou chargé, plus elle monte"},{mot:"testeur sans contact",sens:"crayon qui sonne près d’un conducteur sous tension"},{mot:"liaison équipotentielle",sens:"relier toutes les masses métalliques d’une même pièce à la terre"}],pieges:[{enoncé:"Travailler « juste vite » sans couper",eviter:"Couper le général ET vérifier au testeur sur chaque conducteur avant de toucher. Les accidents n’attendent pas."},{enoncé:"Oublier la terre dans une pièce d’eau",eviter:"Salle de bain, cuisine, extérieur : terre obligatoire à chaque prise + liaison équipotentielle des masses métalliques."},{enoncé:"Section du fil mal assortie au disjoncteur",eviter:"1,5 mm² ↔ 10-16 A ; 2,5 mm² ↔ 16-20 A ; 4 mm² ↔ 25 A ; 6 mm² ↔ 32 A. Le disjoncteur protège le fil, pas l’inverse."},{enoncé:"Fiche serrée « à l’œil »",eviter:"Un desserrage fait un arc, un point chaud, un départ de feu. Serrer au couple du fabricant avec un tournevis isolé."}]},{id:"cuisine-senegalaise",nom:"Cuisine sénégalaise",emoji:"🍲",pays:["SN"],resume:"Réussir le thiéboudienne, le yassa et le mafé — riz qui tient, sauce qui a du goût.",taches:[{titre:"Préparer le thiéboudienne (ceeb u jën)",gestes:["Tremper et rincer le riz (bruku) pour ôter l’amidon : il tiendra à la cuisson.","Piler piment, oignon, ail et persil pour la base de sauce (majeun).","Faire saisir brièvement le poisson (thiof, capitaine) pour le tenir ferme.","Laisser mijoter la sauce avec les légumes : carotte, chou, aubergine, manioc."]},{titre:"Mariner le yassa",gestes:["Presser généreusement le citron ; mélanger oignon émincé, moutarde, un peu d’arachide.","Laisser reposer poulet ou poisson au moins 2 h ; une nuit, c’est mieux.","Faire fondre les oignons doucement, sans les brûler."]},{titre:"Conduire le mafé",gestes:["Cuire la pâte d’arachide à petit feu, en remuant sans arrêt (ça attache vite).","Ajouter le bouillon progressivement jusqu’à la « rosée » qui remonte en surface.","Mettre la viande (bœuf, mouton) tôt pour qu’elle fonde à la cuisson."]},{titre:"Cuire le riz sans le coller",gestes:["Goûter et rectifier l’assaisonnement avant d’ajouter le riz.","Riz en pluie, bouillon à hauteur, cuisson à couvert, sans remuer.","Finir à feu doux pour que les grains restent entiers."]},{titre:"Servir et accompagner",gestes:["Verser la sauce sur le riz, ne pas la mélanger dans le chaudron.","Servir avec ataya (thé à la menthe) et fruits coupés."]}],glossaire:[{mot:"ceeb u jën",sens:"thiéboudienne : riz cuit dans la sauce au poisson, plat national"},{mot:"majeun",sens:"base pilée de piment, oignon, ail qui donne le goût à la sauce"},{mot:"bruku",sens:"riz brisé parfumé, trempé et rincé avant cuisson"},{mot:"niébé",sens:"haricots à œil noir, base du thiéboudienne « niebé-pé »"},{mot:"thiof",sens:"poisson noble (épigone), pièce de choix du ceeb u jën"},{mot:"yassa",sens:"plat mariné citron-oignon, poulet (yassa poulets) ou poisson"},{mot:"mafé",sens:"sauce à la pâte d’arachide avec viande ou poisson"},{mot:"ataya",sens:"thé à la menthe, servi en trois verres de plus en plus sucré"}],pieges:[{enoncé:"Riz collant au thiéboudienne",eviter:"Rincer et tremper le riz pour ôter l’amidon, puis ne plus remuer après l’ébullition."},{enoncé:"Pâte d’arachide brûlée dans le mafé",eviter:"Ne jamais laisser la pâte sans remuer : feu doux, cuillère en bois, bouillon dès que ça épaissit."},{enoncé:"Yassa trop acide",eviter:"Ne pas noyer le citron : l’équilibrer avec oignon fondu, moutarde et une pincée de sucre."},{enoncé:"Manioc encore dur dans la sauce",eviter:"Le manioc cuit plus longtemps que la carotte : le mettre en premier, la carotte en dernier."}]},{id:"premiers-soins",nom:"Premiers soins",emoji:"🚑",resume:"Protéger, alerter, secourir — les gestes qui sauvent en attendant les urgences.",taches:[{titre:"Protéger la zone",gestes:["Couper le courant si accident électrique, écarter la source si feu.","Mettre des gants si disponibles ; ne jamais toucher du sang sans protection.","Ne déplacer la victime que s’il y a un surdanger immédiat (feu, effondrement)."]},{titre:"Alerter les secours",gestes:["Appeler le 15 (médecine d’urgence), le 18 (pompiers), le 112 (numéro unique).","Donner : lieu précis, nature du problème, nombre de victimes, conscient ou non.","Ne pas raccrocher avant que le régulateur vous le dise."]},{titre:"Réanimation cardio-pulmonaire (adulte)",gestes:["Victime qui ne répond pas et ne respire pas normalement.","30 compressions au milieu du sternum, 5 à 6 cm de profondeur, 100 à 120 par minute.","Puis 2 insufflations (front-menton, pincer le nez) ; si non formé, compressions seules en continu."]},{titre:"Position latérale de sécurité (inconscient qui respire)",gestes:["Bras du côté à l’équerre, plier la jambe opposée.","Basculer sur le côté en tirant sur le genou.","Tête légèrement penchée en arrière pour laisser passer l’air."]},{titre:"Étouffement (adulte conscient)",gestes:["5 claques dans le dos, entre les omoplates.","5 compressions abdominales (Heimlich) : poing sous le sternum, serré vers le haut.","Alterner jusqu’à expulsion, ou perte de conscience → alors RCP."]}],glossaire:[{mot:"PSE",sens:"Protéger, Secourir, Expliquer : le schéma officiel des premiers secours"},{mot:"RCP",sens:"réanimation cardio-pulmonaire : compressions pour faire circuler le sang"},{mot:"PLS",sens:"position latérale de sécurité : pour une personne inconsciente qui respire"},{mot:"DSA",sens:"défibrillateur automatisé ; les instructions se lisent seules, ne pas avoir peur"},{mot:"hémorragie",sens:"saignement abondant : compresser fort, ne pas poser de garrot sauf cas extrême"},{mot:"brûlure grave",sens:"plus grande qu’une paume, ou sur visage/mains/parties génitales → urgences"},{mot:"convulsion",sens:"secousses involontaires : ne rien mettre dans la bouche, protéger la tête"},{mot:"malaise",sens:"toute victime qui change de comportement : allonger, parler, appeler le 15"}],pieges:[{enoncé:"Mettre les doigts dans la bouche d’un convulsant",eviter:"Ne jamais introduire d’objet ni de doigt : protéger la tête et attendre la fin de la crise."},{enoncé:"Donner à boire à une victime inconsciente",eviter:"Ne jamais donner à boire (ni à manger) : risque de fausse route vers les poumons."},{enoncé:"Tirer sur un membre cassé",eviter:"Ne jamais réduire une fracture : immobiliser en l’état et alerter les secours."},{enoncé:"Retirer un objet planté",eviter:"Ne pas l’extraire : le stabiliser autour avec des bandages et laisser faire les secours."}]},{id:"cuisine-afrique-ouest",nom:"Cuisine d’Afrique de l’Ouest",emoji:"🍛",pays:["CI","ML","BF","GN","BJ","TG","GH","NG","CM","MR"],resume:"Banku, attiéké, foutou, jollof — la cuisine de tous les jours, du Golfe de Guinée au Sahel.",taches:[{titre:"Réussir le banku (Ghana, Togo, Bénin, CI)",gestes:["Fermer la pâte maïs + manioc la veille pour qu’elle lève légèrement.","Cuire dans l’eau bouillante en remuant sans arrêt jusqu’à ce que ça se détache de la casserole.","Former des boules à la main mouillée, servir aussitôt."]},{titre:"Préparer l’attiéké (Côte d’Ivoire)",gestes:["Essorer soigneusement la semoule de manioc fermentée avant la cuisson vapeur.","Cuire à la vapeur 15 à 20 min, remuer une fois à mi-parcours.","Servir avec poisson grillé, oignon, tomate, piment et citron."]},{titre:"Piler le foutou / foufou",gestes:["Cuire igname ou plantain très tendre : trop ferme, ça ne pile pas.","Piler au mortier jusqu’à obtenir une pâte lisse, en tournant.","Former une boule compacte, saucer abondamment."]},{titre:"Conduire le jollof rice",gestes:["Faire revenir oignon, gingembre, piment dans l’huile, puis verser la tomate/poivron mixés.","Laisser réduire la sauce avant d’ajouter le riz ; bouillon à hauteur.","Feu doux, couvercle, et ne pas remuer : le goût vient du fond légèrement accroché."]},{titre:"Assaisonner sans masquer",gestes:["Bouillon en poudre avec parcimonie ; goûter avant d’en rajouter.","Piment entier dans la sauce plutôt que moulu — on peut le retirer.","Terminer avec un filet de citron ou une pâte de piment frais."]}],glossaire:[{mot:"banku",sens:"pâte fermentée maïs + manioc, plat de Ghana, Togo, Bénin et du sud ivoirien"},{mot:"attiéké",sens:"semoule de manioc fermentée, typique de la Côte d’Ivoire"},{mot:"foutou / foufou",sens:"igname ou plantain pilé, avec sauce arachide ou gombo"},{mot:"jollof rice",sens:"riz tomate-piment mijoté, cousin ouest-africain du thiéboudienne"},{mot:"ndolé",sens:"sauce arachide et feuilles amères, plat camerounais"},{mot:"saka-saka / pondu",sens:"feuilles de manioc cuites en sauce épaisse"},{mot:"garba",sens:"attiéké + thon frit + oignon/piment, snack ivoirien"},{mot:"alloco",sens:"banane plantain frite, accompagnement universel"}],pieges:[{enoncé:"Banku granuleux",eviter:"Ne pas verser la pâte dans l’eau froide : eau bouillante et remuer sans arrêt jusqu’à ce que la pâte se détache des parois."},{enoncé:"Attiéké collant",eviter:"Ne pas noyer de vapeur : essorer assez avant la cuisson et ne tasser la semoule dans le panier."},{enoncé:"Foutou qui ne pile pas",eviter:"Ne pas piler de l’igname à demi cuite : prolonger la cuisson jusqu’à tendreté complète."},{enoncé:"Jollof remué en continu",eviter:"Ne jamais remuer pendant la cuisson : le goût vient du riz qui attache légèrement au fond."}]},{id:"crise-survie",nom:"Crise & survie",emoji:"🆘",resume:"Quand l’hôpital, l’eau courante ou le frigo ne sont plus là : les gestes de base.",taches:[{titre:"Rendre l’eau potable",gestes:["Filtrer si l’eau est trouble (tissu propre), puis laisser décanter 30 min.","Faire bouillir 1 minute à gros bouillons (3 minutes en altitude), refroidir à couvert.","Sans feu : diluer quelques gouttes d’eau de javel sans additif, attendre 30 minutes."]},{titre:"Soigner une plaie sans plateau technique",gestes:["Se laver les mains, mettre des gants si disponibles.","Rincer abondamment à l’eau potable ou au sérum, sans frotter.","Couvrir d’un linge propre changé chaque jour ; surveiller rougeur, pus, fièvre."]},{titre:"Hygiène de fortune",gestes:["Creuser une latrine à plus de 30 m de la source d’eau, en aval.","Lavage des mains au savon ou à la cendre avant de manger et après les toilettes.","Trier les ordures ; brûler ou enterrer ce qui pourrit."]},{titre:"Conserver sans réfrigérateur",gestes:["Salaison, séchage au soleil ou enfumage pour viandes et poissons.","Fermentation lacto en bocal propre pour les légumes, sous eau salée.","Consommer sous 24 h tout ce qui est cuit à l’eau."]},{titre:"Organiser le rationnement",gestes:["Calculer l’eau : 3 L par personne et par jour (boisson + cuisine).","Stocker sec sur 3 à 7 jours : céréale, légumineuse, huile, sel, sucre.","Prioriser femmes enceintes, enfants, blessés et personnes âgées dans la distribution."]}],glossaire:[{mot:"SRO",sens:"sels de réhydratation orale : poudre + eau potable, contre la déshydratation"},{mot:"ébullition",sens:"faire bouillir à gros bouillons au moins 1 minute pour tuer les microbes"},{mot:"chloration",sens:"désinfecter l’eau avec de l’eau de javel sans additif, à dose précise"},{mot:"chaîne du froid",sens:"température maîtrisée du producteur au consommateur ; sans frigo, ne pas stocker"},{mot:"latrine",sens:"toilette de fortune, loin des sources d’eau, en aval"},{mot:"denrée non périssable",sens:"céréale, légumineuse sèche, miel, sel : longue conservation sans froid"},{mot:"ration de survie",sens:"quantité minimale pour tenir : eau + calories + sel"},{mot:"triage",sens:"classer les blessés par gravité pour traiter d’abord ceux qui peuvent être sauvés"}],pieges:[{enoncé:"Eau de javel concentrée directement",eviter:"Ne jamais boire de javel pure : toujours diluer, attendre 30 minutes, viser un léger chlore résiduel."},{enoncé:"Poudre, café ou terre sur une plaie",eviter:"Ne rien mettre dans une plaie ouverte : uniquement eau propre et pansement."},{enoncé:"SRO forcé chez une victime inconsciente",eviter:"Ne jamais forcer à boire un inconscient ; si les vomissements continuent, chercher un secours."},{enoncé:"Mélanger javel et ammoniaque",eviter:"Ne pas mélanger les produits ménagers entre eux : dégagement de gaz toxique."}]},{id:"approvisionnement",nom:"Approvisionnement",emoji:"📦",resume:"Anticiper les tensions : stock, fournisseurs, prix. Une méthode, pas une panique.",taches:[{titre:"Cartographier ses sources",gestes:["Lister par famille de produit : marché, grossiste, producteur, voisin.","Noter les délais de livraison et les jours de fermeture.","Identifier un fournisseur de repli pour chaque famille."]},{titre:"Construire un stock tampon",gestes:["Eau potable : 3 L par personne et par jour, dans un récipient alimentaire propre.","Sec : céréale, légumineuse, huile, sel, sucre, pour 3 à 7 jours.","Médicaments et hygiène essentielle : renouvellement sans rupture."]},{titre:"Diversifier les fournisseurs",gestes:["Au moins deux sources pour chaque denrée critique.","Alterner circuit court (producteur) et grossiste.","Étaler les achats dans le temps, éviter un seul jour « tout-ou-rien »."]},{titre:"Suivre les prix",gestes:["Cahier ou tableur : date, produit, prix d’achat, lieu.","Fixer un seuil d’alerte par produit (+30 % sur 30 jours).","Comparer le prix de revient réel, pas seulement le prix affiché."]},{titre:"Préserver la chaîne du froid",gestes:["Charger du plus solide au plus fragile, produits sensibles en haut.","Sac isotherme + glace pour le trajet ; ouvrir le moins souvent.","À la maison, consommer d’abord ce qui a le plus chaud."]}],glossaire:[{mot:"stock tampon",sens:"quantité gardée en réserve pour absorber une tension ou une rupture"},{mot:"denrée non périssable",sens:"se conserve des mois sans froid : céréales, légumineuses sèches, sel"},{mot:"circuit court",sens:"achat direct au producteur ou avec un seul intermédiaire"},{mot:"fournisseur de repli",sens:"celui qu’on appelle quand le principal n’a plus"},{mot:"prix de revient",sens:"tout ce que le produit coûte vraiment : achat + transport + stockage + perte"},{mot:"seuil d’alerte",sens:"niveau de stock ou de prix qui déclenche un réapprovisionnement"},{mot:"résilience",sens:"capacité à continuer à fonctionner malgré une tension"}],pieges:[{enoncé:"Tout acheter d’un coup pour six mois",eviter:"Ne pas sur-stocker d’un seul coup : trésorerie bloquée, qualité dégradée, cible pour les cambrioleurs."},{enoncé:"Stocker de l’eau dans un bidon à carburant",eviter:"Ne jamais réutiliser un récipient ayant contenu du carburant ou un produit chimique."},{enoncé:"Dépendre d’un seul fournisseur",eviter:"Ne pas se mettre en otage d’une seule source : toujours avoir un repli prêt."},{enoncé:"Produits fragiles au fond du sac",eviter:"Ne pas écraser les sensibles : lourd en bas, fragile en haut."}]},{id:"coiffure",nom:"Coiffure & tressage",emoji:"💇‍♀️",resume:"Coiffer et tresser proprement, sans abîmer le cheveu ni la cliente.",taches:[{titre:"Consulter avant de toucher",gestes:["Regarder le cuir chevelu : pellicules, irritations, plaies, poux.","Demander les produits déjà utilisés et les allergies connues.","Annoncer le prix et la durée avant de commencer."]},{titre:"Laver et préparer",gestes:["Eau tiède, pas brûlante : le cuir sensible gonfle avec la chaleur.","Shampoing adapté au type de cheveu, masquer des longueurs.","Rincer abondamment, puis appliquer une crème sans rinçage."]},{titre:"Démêler sans casser",gestes:["Peigne à dents larges, mèche par mèche.","Commencer par les pointes, puis remonter vers les racines.","Tenir la mèche serrée à la base pour ne pas tirer le cuir."]},{titre:"Tresser une natte ou une vanille",gestes:["Trois brins égaux, tension régulière du début à la fin.","Pour une vanille, ajouter à chaque passage une mèche prise dessous.","Finir proprement : élastique doux, pas de traction excessive sur le front."]},{titre:"Finir et conseiller",gestes:["Une huile légère sur les pointes uniquement.","Conseiller un foulard ou une taie satinée la nuit pour tenir la forme.","Fixer le prochain rendez-vous d’entretien (4 à 6 semaines)."]}],glossaire:[{mot:"mèche",sens:"portion de cheveux séparée pour travailler proprement"},{mot:"raie",sens:"ligne tracée sur le crâne pour séparer les zones"},{mot:"vanille",sens:"natte collée longue et fine, appelée aussi tresse africaine"},{mot:"nappy",sens:"texture crépue naturelle, non défrisée ni texturée"},{mot:"défrisage",sens:"lissage chimique, à espacer de trois mois minimum"},{mot:"démêlant",sens:"crème qui facilite le peignage sans casser"},{mot:"soin du cuir",sens:"gommage, huile ou lotions appliqués sur la peau, pas sur les longueurs"},{mot:"coiffure protectrice",sens:"style qui met les pointes à l’abri des frottements (vanilles, twists, chignon)"}],pieges:[{enoncé:"Défriser sur un cuir irrité",eviter:"Ne jamais appliquer un défrisant sur un cuir irrité, qui pèle ou qui gratte : faire d’abord un test mèche et attendre la guérison."},{enoncé:"Tresser trop serré",eviter:"Ne pas tirer jusqu’à la douleur : si la cliente sent une traction vive, c’est mal posé. Le front et la nuque sont les zones les plus fragiles."},{enoncé:"Peigner un nœud depuis la racine",eviter:"Ne jamais commencer un démêlage par la racine : on casse le cheveu. Toujours des pointes vers le haut."},{enoncé:"Passer la tondeuse à sec sur une peau sèche",eviter:"Ne pas tondre une peau sèche ou irritée sans préparation : nettoyer, huiler ou gel, et lames propres et désinfectées."}]},{id:"reparation-telephones",nom:"Réparation téléphones",emoji:"📱",resume:"Dépanner un smartphone sans le casser, et sans se mettre en danger.",taches:[{titre:"Diagnostiquer avant d’ouvrir",gestes:["Tester écran, tactile, haut-parleur, micro, caméras, boutons, charge, Wi-Fi, réseau.","Noter les symptômes exacts avec le client ; une panne « écran noir » a cinq causes possibles.","Proposer un devis ouvert et chiffré seulement après ce test complet."]},{titre:"Ouvrir proprement",gestes:["Sauvegarder les données du client avant toute manipulation.","Chauffer le pourtour (tapis chauffant ou décapeur thermique doux) ou injecter de l’alcool isopropylique au niveau de la colle.","Utiliser une ventouse puis un médiator, vis triées et notées par position."]},{titre:"Remplacer un écran ou une batterie",gestes:["Déclipser d’abord la batterie, puis les nappes écran/tactile.","Poser un joint adhésif neuf ; ne pas réutiliser la colle d’origine.","Tester avant de refermer, pour éviter de rouvrir."]},{titre:"Micro-souder en sécurité",gestes:["Bracelet et tapis ESD obligatoires, fer à 320 ou 350 degrés, avec flux.","Travailler sous loupe, jamais à l’œil nu sur un composant de moins de 2 mm.","Ne jamais laisser un fer sous tension sans surveillance."]},{titre:"Refermer et restituer",gestes:["Remettre les joints, clipser sans forcer, revisser dans l’ordre inverse.","Faire un test complet devant le client : appels, charge, photo, audio.","Garantir la pièce et le geste : durée et conditions écrites."]}],glossaire:[{mot:"ESD",sens:"décharge électrostatique : invisible mais destructrice, bracelet et tapis obligatoires"},{mot:"nappe",sens:"connecteur plat qui relie l’écran ou les boutons à la carte mère"},{mot:"flex",sens:"cable interne très fin, se plie mais ne se casse pas (théoriquement)"},{mot:"PMOS",sens:"circuits de protection de la batterie lithium-ion"},{mot:"courant de fuite",sens:"consommation anormale mesurée sur alimentation de laboratoire, signe d’un court-jus"},{mot:"reconditionné",sens:"pièce de récupération testée et certifiée, moins chère que la pièce neuve"},{mot:"tapis chauffant",sens:"plaque qui chauffe une zone précise pour ramollir la colle d’un écran"},{mot:"sauvegarde",sens:"copie des données avant toute intervention, même mineure"}],pieges:[{enoncé:"Manipuler une batterie gonflée ou chaude",eviter:"Ne jamais percer, plier ni faire chauffer une batterie Li-ion gonflée : risque d’emballement thermique. L’évacuer en extérieur, la remplacer AVANT tout autre geste."},{enoncé:"Souder sans bracelet ESD",eviter:"Ne pas toucher une carte sans bracelet ou tapis antistatique : une décharge invisible tue un composant sans laisser de trace."},{enoncé:"Remonter avec la colle d’origine",eviter:"Ne jamais recoller sans joint neuf : étanchéité perdue, poussière, écran qui se décolle à la première chaleur."},{enoncé:"Chiffrer sans diagnostiquer",eviter:"Ne pas annoncer un prix avant d’avoir testé : une panne « écran noir » peut venir de la batterie, de la nappe, du connecteur, de la carte ou du logiciel."}]},{id:"marchage",nom:"Marchage",emoji:"🌾",resume:"Faire pousser des légumes qui se vendent : sol, eau, saison, marché.",taches:[{titre:"Préparer le sol",gestes:["Observer la terre : couleur, structure, vie (vers, racines). Une terre meuble est une bonne terre.","Apporter fumier mûr ou compost, jamais frais sur les racines.","Faire des planches larges de 80 à 120 cm, allées étroites : on marche sans tasser."]},{titre:"Semis et pépinière",gestes:["Semer en fonction de la saison et du cycle, pas de l’envie.","Profondeur : deux à trois fois la taille de la graine.","Arroser en pulvérisation fine jusqu’à la levée."]},{titre:"Repiquer au bon stade",gestes:["Attendre quatre à six feuilles vraies, tige ferme.","Piquer le soir ou quand le ciel est couvert.","Arroser au pied, sans noyer."]},{titre:"Irriguer et entretenir",gestes:["Pailler pour garder l’humidité et freiner les herbes.","Biner en surface plutôt que d’arroser plus.","Privilégier le goutte-à-goutte ou l’arrosage au pied, jamais sur les feuilles en plein soleil."]},{titre:"Récolter et vendre",gestes:["Cueillir tôt le matin, encore dans la fraîcheur.","Trier, retirer l’abîmé, présenter proprement.","Afficher le prix et l’origine : un client revient sur une réputation, pas sur un rabais."]}],glossaire:[{mot:"fumure organique",sens:"apport de compost ou fumier mûr, qui nourrit le sol sans brûler les racines"},{mot:"paillage",sens:"couche protectrice au pied : paille, feuilles, carton ; garde l’eau, freine les herbes"},{mot:"binage",sens:"griffer la surface pour aérer et retirer les jeunes herbes"},{mot:"rotation",sens:"changer la famille de culture chaque saison sur la même planche"},{mot:"repiquage",sens:"déplacer la jeune plante de la pépinière vers la planche définitive"},{mot:"stade quatre feuilles",sens:"moment idéal pour repiquer la plupart des solanacées et cucurbitacées"},{mot:"goutte-à-goutte",sens:"irrigation localisée au pied, économe en eau et en maladies foliaires"},{mot:"culture sous abri",sens:"serre ou tunnel pour forcer hors saison ou protéger des pluies battantes"}],pieges:[{enoncé:"Repiquer en plein soleil",eviter:"Ne jamais repiquer en plein soleil ni en journée chaude : piquer le soir ou quand le ciel est couvert."},{enoncé:"Arroser une pépinière en jet direct",eviter:"Ne pas utiliser un jet fort sur une pépinière : on casse les tiges et on déplace les graines. Pulvérisation fine, toujours."},{enoncé:"La même famille au même endroit chaque année",eviter:"Ne pas cultiver chaque année tomates, aubergines ou piments au même endroit : le sol s’épuise et les maladies s’installent."},{enoncé:"Récolter sous le soleil haut",eviter:"Ne pas cueillir après dix heures : feuilles et fruits flétrissent avant le marché. Le matin, c’est tout."}]},{id:"maconnerie",nom:"Maçonnerie & bâtiment",emoji:"🧱",resume:"Monter un mur droit, d’aplomb et qui ne fissure pas.",taches:[{titre:"Implanter et tracer",gestes:["Cordeaux tendus, niveau à bulle, fils à plomb.","Contrôler l’équerrage avec la règle du triangle 3-4-5.","Reporter les cotes sur des repères fixes, pas sur la terre molle."]},{titre:"Fouiller et fonder",gestes:["Fouiller jusqu’au bon sol : hors terre végétale, hors remblai récent.","Béton de propreté, puis semelle armée dimensionnée au mur qu’elle porte.","Arase au niveau, contrôlée au cordeau sur toute la longueur."]},{titre:"Monter un mur",gestes:["Mortier dosé et gâché pour une heure maximum, pas plus.","Joints horizontaux d’environ un centimètre, vérifiés au cordeau tous les trois rangs.","Décaler systématiquement d’un demi-module entre deux rangs : c’est ce qui empêche la fissure verticale."]},{titre:"Ceinturer et daller",gestes:["Rien ne monte sans chaînage en haut : il reprend les efforts et évite les fissures de toiture.","Poteaux et poutres ferraillés selon le plan, pas au jugé.","Vibrer le béton de la dalle pour chasser l’air et éviter les nids de granulats."]},{titre:"Enduire et protéger",gestes:["Trois couches : gobetis d’accroche, corps de dressage, finition lissée.","Cure humide pendant au moins sept jours, surtout en saison sèche et venteuse.","Gouttières, débords et soubassements : l’eau non évacuée est la première cause des fissures."]}],glossaire:[{mot:"semelle",sens:"fondation filante en béton armé sous les murs porteurs"},{mot:"arase",sens:"surface supérieure parfaitement nivelée d’une fondation, avant de monter"},{mot:"chaînage",sens:"poutre béton armé qui ceinture un mur ou un bâtiment"},{mot:"hourdis",sens:"blocs (terracotta, béton) posés entre les poutrelles d’une dalle"},{mot:"gobetis",sens:"première couche d’enduit, riche en ciment, qui accroche le mortier"},{mot:"mortier bâtard",sens:"mélange chaux + ciment, plus souple et moins fissible que le ciment seul"},{mot:"demi-module",sens:"décalage d’une moitié de parpaing entre deux rangs successifs"},{mot:"équerrage 3-4-5",sens:"corde tendue en triangle 3/4/5 pour obtenir un angle droit parfait"}],pieges:[{enoncé:"Fonder dans la terre végétale",eviter:"Ne jamais asseoir une fondation sur terre végétale ou remblai récent : elle travaillera et le mur fissurera. Fouiller jusqu’au bon sol."},{enoncé:"Empiler des parpaings sans décalage",eviter:"Ne pas aligner les joints verticaux d’un rang à l’autre : le mur se fend en deux sous la charge. Toujours décaler d’un demi-module."},{enoncé:"Enduire d’un seul coup",eviter:"Ne pas appliquer trois centimètres de mortier en une passe : ça gondole et ça se décolle. Toujours trois couches fines, chaque couche prise."},{enoncé:"Couler une dalle sans vibrer",eviter:"Ne pas couler sans vibrer : les bulles créent des nids de granulats, points faibles sous la charge. Vibreur ponctuel, passe à passe."}]},{id:"peche-artisanale",nom:"Pêche artisanale",emoji:"🎣",resume:"Ramener du poisson frais, le conserver, et laisser l’eau repeupler.",taches:[{titre:"Préparer et vérifier le matériel",gestes:["Inspecter la seine avant de sortir : un trou perdu, c’est le poisson de la journée qui part.","Affûter les hameçons, vérifier les lignes et les flotteurs.","Lester les casiers et contrôler les entonnoirs d’entrée."]},{titre:"Lancer et poser",gestes:["Poser la seine parallèlement au bord, ramener depuis les eaux peu profondes.","Mouiller les casiers au crépuscule, baliser chaque pose avec un repère fixe.","Éviter les chenaux de passage des pirogues : on y déchire tout."]},{titre:"Prélever et trier",gestes:["Vider la seine rapidement, trier sans déchirer les mailles.","Remettre à l’eau les juvéniles et les femelles pleines d’œufs : c’est le poisson de l’année prochaine.","Évider et rincer la capture aussitôt à l’eau claire."]},{titre:"Conserver sans glace",gestes:["Saler en saumure ou enfumer le jour même : un poisson non traité est invendable le lendemain.","Étaler le poisson en couche fine, jamais entassé au soleil.","Protéger du moucheron avec un filet ou un toit de paille."]},{titre:"Réparer et ranger",gestes:["Faire sécher les filets étalés à l’ombre, jamais en boule humide.","Raperler les mailles cassées avec une aiguille et du fil identique.","Ranger les lignes enroulées sur du carton sec, loin du sel."]}],glossaire:[{mot:"seine",sens:"filet encirclant qu’on ramène à pied depuis le bord"},{mot:"maillage",sens:"grandeur des mailles du filet — elle décide ce qui passe ou reste pris"},{mot:"casier",sens:"piège rigide en forme de panier, posé au fond avec un appât"},{mot:"épervier",sens:"filet à lests qu’on lance en parachute depuis une pirogue"},{mot:"appât",sens:"aliment mis au piège ou à l’hameçon pour attirer le poisson"},{mot:"saumurage",sens:"conservation dans l’eau chargée de sel, en couche ou en fût"},{mot:"fumage",sens:"conservation par la fumée lente, sur claies au-dessus du feu"},{mot:"raperler",sens:"refaire une maille cassée au moyen d’une aiguille à filet"},{mot:"juvénile",sens:"jeune poisson pas encore arrivé à taille — il doit repartir à l’eau"}],pieges:[{enoncé:"Pêcher avec un maillage trop fin",eviter:"Ne jamais utiliser de mailles plus petites que la taille réglementaire : tu vides l’eau des juvéniles et la saison suivante il n’y a plus rien."},{enoncé:"Laisser la capture sous le soleil",eviter:"Ne pas traîner à vider et refroidir le poisson : l’altération commence en une heure et le prix de vente fond avec."},{enoncé:"Ranger le filet encore trempé",eviter:"Ne jamais remiser un filet humide : il pourrit, tache et casse au premier effort. Séchage à l’ombre avant rangement."},{enoncé:"Sortir seul sur l’eau",eviter:"Ne jamais partir pêcher seul sans gilet ou bouée : une embarcation chavirée sans témoin, c’est l’accident qu’on ne raconte pas."}]},{id:"elevage",nom:"Élevage (volaille & petits animaux)",emoji:"🐔",resume:"Faire grandir des bêtes saines jusqu’au poids de vente, sans hécatombe.",taches:[{titre:"Démarrer la bande",gestes:["Source de chaleur allumée avant l’arrivée des poussins : ils se regroupent sous la lampe s’il fait trop froid.","Litière sèche au sol, changée dès qu’elle est humide.","Eau fraîche et abreuvoirs bas à portée du bec dès la première heure."]},{titre:"Nourrir et abreuver",gestes:["Ration adaptée à l’âge : démarrage, croissance, finition.","Laver les abreuvoirs chaque jour, jamais de ration moisie.","Nourir à heure fixe pour repérer les appétits qui chutent."]},{titre:"Entretenir le bâtiment",gestes:["Vidange et désinfection complètes entre deux bandes.","Enclos ou cage de quarantaine dès le premier animal malade.","Ventiler : l’ammoniac des fientes brûle les poumons ; une fente d’air vaut mieux qu’un courant d’air."]},{titre:"Vacciner",gestes:["Suivre le calendrier local (Newcastle, Gumboro) noté dans un cahier.","Vaccin vivant dans de l’eau propre et non chlorée, donné le matin.","Ne vacciner que des animaux en bonne santé : un vaccin sur un malade aggrave."]},{titre:"Engraisser et vendre",gestes:["Ration de finition les deux dernières semaines pour le poids et l’aspect.","Peser avant de fixer le prix : on ne vend pas au jugé.","Écouler au moment des fêtes et des marchés, jamais en urgence après une mortalité."]}],glossaire:[{mot:"bande",sens:"lot d’animaux élevés ensemble, du démarrage à la vente"},{mot:"litière",sens:"couche absorbante au sol — copeaux, paille hachée — qu’on garde sèche"},{mot:"abreuvoir",sens:"récipient qui donne de l’eau propre en continu"},{mot:"Newcastle",sens:"maladie virale respiratoire de la volaille, très mortelle, évitée par la vaccination"},{mot:"Gumboro",sens:"maladie virale des jeunes poussins qui casse leurs défenses, évitée par la vaccination"},{mot:"quarantaine",sens:"isolement des nouveaux ou malades loin du groupe"},{mot:"ration de finition",sens:"aliment plus riche donné avant la vente pour le poids et l’aspect"},{mot:"mortalité",sens:"nombre de bêtes mortes sur une période — le premier indicateur à noter"}],pieges:[{enoncé:"Entasser les animaux",eviter:"Ne jamais dépasser les densités conseillées : la chaleur et l’ammoniac montent, les maladies circulent, la mortalité explose."},{enoncé:"Vacciner dans de l’eau sale ou chlorée",eviter:"Ne jamais passer un vaccin vivant dans de l’eau de javel ou croupie : le produit est détruit, la bande reste protégée en apparence seulement."},{enoncé:"Mélanger sans isoler",eviter:"Ne jamais mettre de nouveaux animaux dans le groupe sans quelques jours de quarantaine : ils importent la maladie sans le montrer."},{enoncé:"Vendre des bêtes malades",eviter:"Ne jamais vendre une bête malade ou morte : tu perds le client, et la maladie repart avec le panier."}]},{id:"sante-communautaire",nom:"Santé communautaire",emoji:"🩺",resume:"Empêcher la maladie au village et repérer vite les signes qui conduisent au centre.",taches:[{titre:"Boire sans danger",gestes:["Faire bouillir l’eau à gros bouillons dix minutes avant de la boire.","Stocker l’eau propre dans un fût couvert, la puiser avec un bol propre — jamais les mains ni le jerrycan dedans.","En cas de doute sur une eau de puits, la traiter puis la laisser reposer."]},{titre:"Latrines et eaux usées",gestes:["Latrine à plus de dix mètres de tout puits ou point d’eau, en amont.","Évacuer les eaux de vaisselle vers un puisard ou un jardin, jamais vers le creux où jouent les enfants.","Entretenir : propre le matin, on y retourne le soir."]},{titre:"Combattre les moustiques",gestes:["Dormir sous une moustiquaire imprégnée, rentrée sous le matelas.","Vider une fois par semaine tout ce qui retient l’eau : vieux pots, pneus, gouttières.","Couvrir bras et jambes à la tombée du jour."]},{titre:"Hygiène des mains et des aliments",gestes:["Laver les mains au savon ou à la cendre avant de manger, après la latrine, avant de cuisiner.","Couvrir la nourriture, protéger de la poussière et des mouches.","Laver fruits et légumes à l’eau potable avant de les manger crus."]},{titre:"Reconnaître et référer",gestes:["Signes qui imposent le centre de santé : incapacité à boire, vomissements qui ne s’arrêtent pas, convulsions, respiration difficile, sang, somnolence anormale.","Référer sans attendre le lendemain : un transport préparé (caisse, entente avec le conducteur) fait gagner des heures.","Noter les dates des symptômes pour les raconter au personnel de santé."]},{titre:"Soins courants sans danger",gestes:["Donner du SRO (soluté de réhydratation orale) dès la première diarrhée, par petites gorgées, en continu.","Continuer à nourrir et à allaiter pendant la maladie : un corps affaibli se rétablit moins vite.","Laver une plaie à l’eau propre courante, couvrir d’un linge propre — sans rien poser dessus qui ne soit pas sûr."]}],glossaire:[{mot:"SRO",sens:"soluté de réhydratation orale — le sachet dosé à diluer dans une bouteille d’eau propre"},{mot:"réhydrater",sens:"faire remonter l’eau perdue par la diarrhée ou la fièvre, par petites gorgées fréquentes"},{mot:"vecteur",sens:"animal qui transporte la maladie d’un corps à l’autre — moustique, mouche, rat"},{mot:"référer",sens:"conduire une personne malade au centre de santé quand le village ne suffit plus"},{mot:"poste de santé",sens:"structure de soin la plus proche, premier maillon avant l’hôpital"},{mot:"puisard",sens:"trou rempli de graviers où les eaux usées s’infiltrent sans croupir"},{mot:"moustiquaire imprégnée",sens:"filet traité anti-moustique, efficace à condition de ne pas le laver au détergent"}],pieges:[{enoncé:"Soigner par les antibiotiques achetés au hasard",eviter:"Ne jamais donner d’antibiotique sans prescription : on ne guérit rien, et on fabrique des germes que plus aucun médicament ne combat."},{enoncé:"Mal préparer le SRO",eviter:"Ne jamais ajouter sucre ou sel au mélange dosé : trop concentré, il aggrave la déshydratation. Un sachet, une bouteille d’eau propre, rien de plus."},{enoncé:"Attendre le dernier jour pour référer",eviter:"Ne pas attendre que l’enfant ne boive plus pour partir au centre : l’heure perdue transforme une guérison en deuil."},{enoncé:"Laisser l’eau croupir autour de la case",eviter:"Ne jamais laisser d’eau stagnante près des maisons : un vieux pot rempli, c’est un élevage de moustiques assuré."}]},{id:"cordonnerie",nom:"Cordonnerie",emoji:"👞",resume:"Réparer chaussures et sacs pour qu’ils tiennent encore deux ans.",taches:[{titre:"Diagnostiquer et chiffrer",gestes:["Regarder semelle, tige, doublure et fermetures avant de promettre quoi que ce soit.","Distinguer ce qui se reprend de ce qui est fini, et le dire franchement.","Convenir du prix et du délai avant de commencer : le client qui sait revient."]},{titre:"Déposer et préparer",gestes:["Retirer ancienne semelle et talon, dégrader le fond.","Nettoyer et sécher la tige : rien ne colle sur du cuir mouillé ou croûteux de boue.","Choisir la matière de reprise selon l’usage : marche, école, travail de chantier."]},{titre:"Coudre le cuir",gestes:["Perforer à l’alêne, passer le fil ciré aux deux aiguilles en couture croisée.","Garder un point régulier : la beauté du travail se compte aux points par centimètre.","Dégraisser et dégrossir les surfaces avant tout encollage."]},{titre:"Semelles et talons",gestes:["Encoller fin, laisser prendre, puis assembler sous pression — pas à la main nue.","Clouer ou presser la semelle, rogner le bord au tranchet.","Reconstituer le talon : garnissage, semelle de talon clouée, patinage du bord."]},{titre:"Finir et rendre",gestes:["Crémer, lustrer, passer un coup de patine sur les bords.","Faire essayer vite : un point qui gêne se reprend en boutique, pas une semaine après.","Expliquer l’entretien au client : le métier se juge à la durée de vie de la réparation."]}],glossaire:[{mot:"alêne",sens:"outil pointu en fer pour percer le cuir avant d’y passer le fil"},{mot:"trépointe",sens:"bande de cuir cousue au fond de la chaussure, sur laquelle on fixe la semelle"},{mot:"forme",sens:"moule en bois ou en plastique qui tient la chaussure pendant la réparation"},{mot:"encollage",sens:"application de la colle en couche fine sur les deux surfaces à assembler"},{mot:"tranchet",sens:"couteau de cordonnier pour rogner et parer le cuir"},{mot:"talonnette",sens:"petit rapport de caoutchouc collé sous le talon pour le protéger ou le rehausser"},{mot:"patine",sens:"produit qui colore et fait briller le bord d’une semelle"},{mot:"surpiqûre",sens:"couture visible qui renforce ou décore un bord"}],pieges:[{enoncé:"Coller du lisse sur du lisse",eviter:"Ne jamais coller deux surfaces lisses : rien ne tient. Dégrader les deux faces, dépoussiérer, encoller fin, laisser prendre avant d’assembler."},{enoncé:"Pointer l’alêne vers sa main",eviter:"Ne jamais percer en direction de la main qui tient le cuir : l’alêne part dans la paume. On perce sur l’établi, la main en arrière."},{enoncé:"Remonter une tige craquelée",eviter:"Ne pas poser une semelle neuve sur une tige foutue : le client la reprendra la semaine suivante et perdra la mémoire de ton travail. Le dire avant."},{enoncé:"Travailler la colle forte enfermé",eviter:"Ne jamais encoller dans une pièce fermée sans air : les vapes de colle montent à la tête et abîment les poumons. Une fente d’air, toujours."}]},{id:"plomberie",nom:"Plomberie",emoji:"🔧",resume:"Arrêter une fuite pour de bon, déboucher sans abîmer, poser un joint qui tient.",taches:[{titre:"Couper et vider",gestes:["Fermer le robinet d’arrêt général avant toute intervention.","Ouvrir le point bas pour vider la canalisation, seau et chiffon sous l’ouvrage.","Prévoir une lampe : on répare ce qu’on voit."]},{titre:"Faire un joint qui tient",gestes:["Brosser le filetage mâle, enlever rouille et vieux filasse.","Enrouler le téflon dans le sens du serrage, trois tours serrés sur un filetage propre.","Visser à la main, puis un quart de tour à la clé — pas plus."]},{titre:"Déboucher sans détruire",gestes:["Ventouse d’abord, simple et propre.","Démonter le siphon au-dessus d’un seau, le nettoyer, vérifier le joint avant de remonter.","Furet si ça résiste ; jamais de produits successifs qui attaquent les tuyaux."]},{titre:"Remplacer au bon calibre",gestes:["Clapet, joint de robinet, flotteur de chasse : démonter proprement.","Emporter la pièce ôtée au magasin pour trouver le calibre exact.","Remonter propre, clé en main, sans forcer sur le plastique."]},{titre:"Tester et facturer",gestes:["Rouvrir l’eau lentement, chasse d’air comprise.","Passer un papier jetable sur chaque joint : une trace trahit la micro-fuite.","Détailler les pièces sur la facture : la confiance du client vaut plus que la réparation."]}],glossaire:[{mot:"filetage",sens:"pas hélicoïdal taillé au bout du tuyau, mâle dehors ou femelle dedans"},{mot:"téflon",sens:"ruban plastique blanc qu’on enroule sur un filetage pour le rendre étanche"},{mot:"siphon",sens:"coude rempli d’eau qui bloque les remontées d’odeur"},{mot:"robinet d’arrêt",sens:"vanne générale qui coupe l’eau de toute l’installation"},{mot:"clapet",sens:"petite pièce qui ferme le passage de l’eau sous la pression du doigt du robinet"},{mot:"flotteur",sens:"pièce qui monte avec l’eau dans la chasse et coupe l’arrivée au bon niveau"},{mot:"furet",sens:"long ressort flexible qui gratte le bouchon de l’intérieur du tuyau"},{mot:"PER",sens:"tube plastique souple des installations modernes, sensible à la chaleur et aux produits forts"}],pieges:[{enoncé:"Serrer comme un forgeron",eviter:"Ne jamais serrer à outrance : on éclate l’écrou ou on écrase le joint, et ça fuira le jour même. Un quart de tour après le serrage à la main suffit."},{enoncé:"Verser de l’acide dans du plastique",eviter:"Ne jamais débourrer au produit agressif un tube PER ou un flexible usé : il attaque les joints et provoque une fuite dans le mur. Le furet fait le travail."},{enoncé:"Laisser goutter « pour l’instant »",eviter:"Ne pas laisser un robinet qui goutte : trois litres perdus par jour, la porcelaine tachée, et le joint qui se met à fuir de partout."},{enoncé:"Ouvrir sans avoir coupé",eviter:"Ne jamais démonter un raccord avant d’avoir vérifié que l’eau est coupée : l’inondation arrive plus vite qu’on ne court au compteur."}]},{id:"peinture",nom:"Peinture en bâtiment",emoji:"🎨",resume:"Peindre un mur net qui reste net des années : la préparation fait le travail.",taches:[{titre:"Préparer le support",gestes:["Gratter ce qui s’écaille, lessiver, laisser sécher à fond.","Dépoussiérer, puis reboucher fissures et trous à l’enduit, araser à la lame.","Un mur bien préparé garde deux fois plus longtemps qu’une couche de plus."]},{titre:"Protéger les abords",gestes:["Ruban de masquage sur huisseries et prises, bâche au sol sanglée.","Déposer les plaques d’interrupteurs plutôt que de peindre autour.","Délimiter avant de commencer : les reprises se voient toujours."]},{titre:"Sous-coucher",gestes:["Choisir la sous-couche adaptée : plâtre, ancien, extérieur.","Faire les contours au pinceau avant le rouleau.","La sous-couche fixe le fond et économise la peinture de finition."]},{titre:"Poser la finition",gestes:["Peindre en croisé — aller-retour vertical puis horizontal — puis lisser dans un seul sens.","Charger le rouleau, étaler sans appuyer, ne pas repasser sur une amorce sèche.","Deux couches fines valent mieux qu’une épaisse qui fait des coulures."]},{titre:"Ranger et reprendre",gestes:["Nettoyer pinceaux et rouleaux avant que ça ne sèche.","Étiqueter les pots avec la pièce et la date : la reprise de six mois après retrouve la teinte exacte.","Reprendre les masques après séchage, à la lame fine."]}],glossaire:[{mot:"sous-couche",sens:"première couche qui fixe le support et régularise l’absorption"},{mot:"enduit",sens:"pâte qui rebouche trous et fissures avant de peindre"},{mot:"croisé",sens:"pose en deux directions perpendiculaires pour couvrir sans épaisseur"},{mot:"coulure",sens:"bourrelet de peinture qui a glissé sur un mur trop chargé"},{mot:"reprise",sens:"retouche localisée — elle se voit si la teinte ou le brillant diffèrent"},{mot:"diluant",sens:"produit qui fluidifie la peinture — toujours celui indiqué par le pot"},{mot:"mat",sens:"finition sans brillance, qui cache les défauts mais se nettoie moins bien"},{mot:"lessivage",sens:"lavage du mur pour retirer graisse et poussière avant peinture"}],pieges:[{enoncé:"Peindre sur un mur humide",eviter:"Ne jamais peindre un mur qui suinte ou qui vient d’être lavé à grande eau : la finition cloque et s’écaille en quelques semaines. Sécher d’abord, trouver la cause de l’humidité."},{enoncé:"Sauter la sous-couche",eviter:"Ne pas poser la finition directement sur un plâtre neuf ou un ancien farinant : l’accroche se fait mal et la teinte boit par taches. Sous-couche toujours."},{enoncé:"Diluer trop pour économiser",eviter:"Ne jamais dépasser la dilution indiquée sur le pot : trop liquide, la peinture coule et ne couvre pas — on en remet trois couches au lieu de deux."},{enoncé:"Travailler en plein soleil",eviter:"Ne jamais peindre une façade brûlante : la couche sèche trop vite, marque le rouleau et cloque. Travailler le matin ou le soir, à l’ombre."}]}];function HA(t){return dd.find(e=>e.id===t)??null}function jA(t,e){if(!e)return t.slice();const n=e.toUpperCase();return t.filter(i=>!i.pays||i.pays.includes(n))}const bm=["crise-survie","approvisionnement"];function $A(t){const e=[],n=[];for(const i of bm){const r=t.find(s=>s.id===i);r&&e.push(r)}for(const i of t)bm.includes(i.id)||n.push(i);return[...e,...n]}function Pf(t,e){const n=t.length;if(n===0)throw new Error("cycle: tableau vide");const i=Number.isFinite(e)?Math.floor(e):0;return t[(i%n+n)%n]}function WA(t,e){return Pf(t.taches,e)}function XA(t,e){return Pf(t.glossaire,e)}function YA(t,e){return Pf(t.pieges,e)}const o_="nath.metiers.progression";function l_(t){const e=t.getItem(o_);if(!e)return{};try{const n=JSON.parse(e);if(!n||typeof n!="object")return{};const i={};for(const[r,s]of Object.entries(n))typeof s=="number"&&Number.isFinite(s)&&s>=0&&(i[r]=Math.floor(s));return i}catch{return{}}}function JA(t,e){return l_(e)[t]??0}function KA(t,e){const n=l_(e),i=(n[t]??0)+1;return n[t]=i,e.setItem(o_,JSON.stringify(n)),i}const Df=[{code:"SN",nom:"Sénégal",emoji:"🇸🇳",monnaie:"FCFA",langues:["fr","wo"],urgence:{police:"17",pompiers:"18",samu:"15",commun:"112"}},{code:"ML",nom:"Mali",emoji:"🇲🇱",monnaie:"FCFA",langues:["fr","bm"],urgence:{police:"17",pompiers:"18",samu:"15"}},{code:"CI",nom:"Côte d’Ivoire",emoji:"🇨🇮",monnaie:"FCFA",langues:["fr"],urgence:{police:"17",pompiers:"180",samu:"150"}},{code:"BF",nom:"Burkina Faso",emoji:"🇧🇫",monnaie:"FCFA",langues:["fr"],urgence:{police:"17",pompiers:"18",samu:"1100"}},{code:"GN",nom:"Guinée",emoji:"🇬🇳",monnaie:"GNF",langues:["fr","ff"],urgence:{police:"17",pompiers:"114",samu:"111"}},{code:"BJ",nom:"Bénin",emoji:"🇧🇯",monnaie:"FCFA",langues:["fr"],urgence:{police:"117",pompiers:"118",samu:"112"}},{code:"TG",nom:"Togo",emoji:"🇹🇬",monnaie:"FCFA",langues:["fr"],urgence:{police:"117",pompiers:"118",samu:"111"}},{code:"NE",nom:"Niger",emoji:"🇳🇪",monnaie:"FCFA",langues:["fr","ha"],urgence:{police:"17",pompiers:"18",samu:"15"}},{code:"GH",nom:"Ghana",emoji:"🇬🇭",monnaie:"GHS (cédi)",langues:["en"],urgence:{police:"191",pompiers:"192",samu:"193",commun:"112"}},{code:"NG",nom:"Nigeria",emoji:"🇳🇬",monnaie:"₦ (naira)",langues:["en","pcm","yo","ha"],urgence:{police:"112",pompiers:"199",samu:"767"}},{code:"CM",nom:"Cameroun",emoji:"🇨🇲",monnaie:"FCFA",langues:["fr","en"],urgence:{police:"17",pompiers:"118",samu:"112"}},{code:"MA",nom:"Maroc",emoji:"🇲🇦",monnaie:"MAD (dirham)",langues:["fr","ar"],urgence:{police:"19",pompiers:"15",samu:"15"}},{code:"FR",nom:"France",emoji:"🇫🇷",monnaie:"€",langues:["fr"],urgence:{police:"17",pompiers:"18",samu:"15",commun:"112"}}];function u_(t){if(!t)return null;const e=t.toUpperCase();return Df.find(n=>n.code===e)??null}const ZA="Numéros donnés à titre indicatif — confirmez-les auprès des autorités locales.",Sm={pays:"",crise:!1},c_="nath.metiers.contexte";function d_(t){return typeof t=="string"&&u_(t)!==null}function QA(t){const e=t.getItem(c_);if(!e)return{...Sm};try{const n=JSON.parse(e);return{pays:d_(n.pays)?n.pays:"",crise:n.crise===!0}}catch{return{...Sm}}}function ym(t,e){const n={pays:d_(e.pays)?e.pays:"",crise:e.crise===!0};t.setItem(c_,JSON.stringify(n))}function e4(t){for(const e of t){if(typeof e!="string")continue;const n=/[-_]([A-Za-z]{2})(?:$|[-_])/.exec(e);if(!n)continue;const i=n[1].toUpperCase();if(Df.some(r=>r.code===i))return i}return""}function t4(t,e){return t.pays?t.pays:e4(e)}const n4=new Set(["de","du","des","le","la","les","un","une","et","ou","a","au","aux","en","dans","pour","avec","sans","sur","sous","chez","plus","très","peu","beaucoup","quelques","some","the","of","with","je","j ai","ai","il","elle","on","nous","vous","ils","y","est","sont","faire","mettre"]),i4=t=>t.replace(/œ/g,"oe").replace(/æ/g,"ae");function ya(t){const n=i4(ft(t)).split(" ").filter(i=>i.length>1&&!n4.has(i)&&!/^\d+$/.test(i)).join(" ");return n.length>3&&/s$/.test(n)?n.slice(0,-1):n}function Ha(t){const e=[],n=new Set;for(const i of t.split(/[,;/\n]|\s+et\s+/i)){const r=ya(i);!r||n.has(r)||(n.add(r),e.push(r))}return e}function r4(t){const e=/(\d+)/.exec(t);if(!e)return 1;const n=Number(e[1]);return Number.isFinite(n)&&n>0&&n<=99?Math.floor(n):1}async function Ul(t){const e=t.question.trim(),n=t.endpoint.trim().replace(/\/+$/,"");if(!n||!e||!t.consigne.trim())return null;try{const i=await t.fetchImpl(`${n}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t.modele?{modele:t.modele}:{},messages:[{role:"system",content:`${t.consigne}
Tu réponds toujours en français.`},{role:"user",content:e}]})});if(!i.ok)return null;const r=await i.json(),s=r?.result?.response??r?.response,a=typeof s=="string"?s.trim():"";return a&&a.length<=(t.max??800)?a:null}catch{return null}}const f_=[{id:"ome",nom:"Omelette des voisins",type:"dîner",minutes:10,ingredients:["oeuf","oignon","tomate","huile"]},{id:"sal",nom:"Salade croque-frais",type:"encas",minutes:5,ingredients:["concombre","tomate","citron","huile"]},{id:"rib",nom:"Riz sauté du soir",type:"dîner",minutes:15,ingredients:["riz","oeuf","oignon","carotte","huile"]},{id:"pou",nom:"Poulet tomate et riz",type:"plat",minutes:45,ingredients:["poulet","tomate","oignon","riz","huile"]},{id:"poi",nom:"Poisson braisé, citron et piment",type:"plat",minutes:35,ingredients:["poisson","citron","piment","oignon","huile"]},{id:"nie",nom:"Niébé en sauce",type:"plat",minutes:50,ingredients:["niebe","oignon","tomate","huile","piment"]},{id:"tho",nom:"Riz au thon express",type:"dîner",minutes:12,ingredients:["thon","riz","oignon","tomate"]},{id:"ign",nom:"Igname pilée, sauce verte",type:"plat",minutes:40,ingredients:["igname","epinard","piment","oignon"]},{id:"pat",nom:"Purée de patate douce",type:"accompagnement",minutes:25,ingredients:["patate","lait","beurre","sucre"]},{id:"sem",nom:"Semoule aux légumes",type:"plat",minutes:20,ingredients:["semoule","carotte","oignon","huile","tomate"]},{id:"gat",nom:"Gâteau simple de la maison",type:"dessert",minutes:45,ingredients:["farine","sucre","oeuf","lait","huile"]},{id:"cre",nom:"Crème banane et cacao",type:"dessert",minutes:10,ingredients:["banane","lait","cacao","sucre"]},{id:"smoothie",nom:"Smoothie mangue-orange",type:"boisson",minutes:5,ingredients:["mangue","orange","lait","sucre"]},{id:"jus",nom:"Jus de gingembre citronné",type:"boisson",minutes:15,ingredients:["gingembre","citron","sucre","eau"]},{id:"the",nom:"Thé à la menthe",type:"boisson",minutes:8,ingredients:["the","menthe","sucre","eau"]},{id:"pouletfa",nom:"Poulet rôti aux quatre épices",type:"plat",minutes:70,ingredients:["poulet","ail","gingembre","piment","huile"]},{id:"sau",nom:"Sauce tomate arachide",type:"sauce",minutes:35,ingredients:["tomate","arachide","oignon","piment","huile"]},{id:"yaour",nom:"Yaourt frais aux fruits",type:"dessert",minutes:5,ingredients:["yaourt","banane","miel"]},{id:"lap",nom:"Laitue trempée dans le chaud",type:"accompagnement",minutes:6,ingredients:["laitue","citron","huile","sel"]},{id:"paineu",nom:"Pain perdu sucré",type:"encas",minutes:10,ingredients:["pain","oeuf","lait","sucre"]}];function Mm(t){return Ha(t)}const s4=3;function h_(t,e){const n=new Set(t.flatMap(s=>Ha(String(s))));if(!n.size)return[];const i=Math.max(0,Math.floor(s4)),r=[];for(const s of f_){const a=s.ingredients.filter(l=>!n.has(l));!(s.ingredients.length-a.length)||a.length>i||r.push({plat:s,manquants:a})}return r.sort((s,a)=>s.manquants.length-a.manquants.length||s.plat.minutes-a.plat.minutes||s.plat.nom.localeCompare(a.plat.nom,"fr"))}function a4(t){const e=new Set(t.flatMap(i=>Ha(String(i)))),n=new Map;for(const i of h_(t).slice(0,3))for(const r of i.manquants)n.set(r,(n.get(r)??0)+1);return[...n.entries()].filter(([i])=>!e.has(i)).sort((i,r)=>r[1]-i[1]||i[0].localeCompare(r[0],"fr")).map(([i])=>i)}function o4(t){const e=Math.floor(t);return!Number.isFinite(e)||e<=0?[]:f_.filter(n=>n.minutes<=e).sort((n,i)=>n.minutes-i.minutes)}async function l4(t,e,n=fetch,i=""){return e.length<2?null:Ul({endpoint:t,modele:i,fetchImpl:n,max:800,consigne:"Tu es cuisinier et honnête. En français, en trois idées courtes, propose ce que ces ingrédients permettent de faire, avec le temps de cuisson et une astuce d’assaisonnement. N’invente pas d’ingrédient absent.",question:Ha(e.join(", ")).join(", ")})}const u4=[{nom:"Œuf",unite:"unité",kcal:78,p:6,g:1,l:5,alias:["oeuf","uf","oeufs"]},{nom:"Banane",unite:"unité",kcal:90,p:1,g:23,l:0,alias:["banane"]},{nom:"Pomme",unite:"unité",kcal:72,p:0,g:19,l:0,alias:["pomme"]},{nom:"Orange",unite:"unité",kcal:47,p:1,g:12,l:0,alias:["orange"]},{nom:"Mangue",unite:"unité",kcal:60,p:1,g:15,l:0,alias:["mangue"]},{nom:"Tomate",unite:"unité",kcal:18,p:1,g:4,l:0,alias:["tomate"]},{nom:"Concombre",unite:"unité",kcal:12,p:1,g:2,l:0,alias:["concombre"]},{nom:"Carotte",unite:"unité",kcal:25,p:1,g:6,l:0,alias:["carotte"]},{nom:"Oignon",unite:"unité",kcal:40,p:1,g:9,l:0,alias:["oignon"]},{nom:"Pain",unite:"tranche",kcal:80,p:3,g:15,l:1,alias:["pain","tranche"]},{nom:"Riz cuit",unite:"portion",kcal:130,p:3,g:28,l:0,alias:["riz","garba"]},{nom:"Pâtes cuites",unite:"portion",kcal:157,p:6,g:31,l:1,alias:["pate","spaghetti"]},{nom:"Semoule",unite:"portion",kcal:157,p:6,g:33,l:0,alias:["semoule","couscous"]},{nom:"Igname",unite:"portion",kcal:118,p:2,g:27,l:0,alias:["igname","patate"]},{nom:"Niébé cuit",unite:"portion",kcal:120,p:8,g:21,l:0,alias:["niebe","haricot","lentille"]},{nom:"Poulet cuit",unite:"portion",kcal:165,p:31,g:0,l:4,alias:["poulet","volaille"]},{nom:"Poisson cuit",unite:"portion",kcal:135,p:20,g:0,l:5,alias:["poisson","capitaine","tilapia"]},{nom:"Thon en boîte",unite:"unité",kcal:116,p:26,g:0,l:1,alias:["thon"]},{nom:"Arachide",unite:"cuillère",kcal:94,p:4,g:3,l:8,alias:["arachide","cacahuede","cacahuete"]},{nom:"Lait",unite:"verre",kcal:60,p:3,g:5,l:3,alias:["lait"]},{nom:"Yaourt",unite:"pot",kcal:59,p:10,g:4,l:0,alias:["yaourt","yogourt","lait fermente"]},{nom:"Fromage",unite:"portion",kcal:115,p:7,g:1,l:9,alias:["fromage","vache"]},{nom:"Huile",unite:"cuillère",kcal:119,p:0,g:0,l:14,alias:["huile"]},{nom:"Beurre",unite:"cuillère",kcal:102,p:0,g:0,l:12,alias:["beurre","margarine"]},{nom:"Sucre",unite:"cuillère",kcal:48,p:0,g:12,l:0,alias:["sucre","miel"]},{nom:"Farine de blé",unite:"cuillère",kcal:38,p:1,g:8,l:0,alias:["farine"]},{nom:"Cacao",unite:"cuillère",kcal:12,p:1,g:1,l:1,alias:["cacao","chocolat"]},{nom:"Épinard",unite:"assiette",kcal:23,p:3,g:4,l:0,alias:["epinard","feu","légume vert"]},{nom:"Laitue",unite:"assiette",kcal:8,p:1,g:1,l:0,alias:["laitue","salade"]},{nom:"Avocat",unite:"unité",kcal:80,p:1,g:4,l:7,alias:["avocat","caiman"]}];function c4(t){const e=ya(t);return e?u4.find(n=>ya(n.nom)===e||(n.alias??[]).some(i=>ya(i)===e))??null:null}const nr=t=>Math.round(t*10)/10;function d4(t){const e=t.split(/[,;/\n]|\s+et\s+/i).map(s=>s.trim()).filter(Boolean),n=[],i=[];for(const s of e){const a=c4(s);if(!a){const l=ya(s);l&&!i.includes(l)&&i.push(l);continue}const o=a.unite==="unité"?r4(s):1;n.push({nom:a.nom,quantite:o,kcal:nr(a.kcal*o),p:nr(a.p*o),g:nr(a.g*o),l:nr(a.l*o)})}const r=n.reduce((s,a)=>({kcal:s.kcal+a.kcal,p:s.p+a.p,g:s.g+a.g,l:s.l+a.l}),{kcal:0,p:0,g:0,l:0});return{articles:n,inconnus:i,total:{kcal:nr(r.kcal),p:nr(r.p),g:nr(r.g),l:nr(r.l)}}}const f4={leger:"Peu de choses sur l’assiette : ajoute un féculent ou une poignée de légumineuses pour tenir la journée.",correct:"Bel équilibre. Pense à la verdure et à l’eau avant de quitter la table.",copieux:"Beaucoup d’énergie d’un coup : marche vingt minutes et garde le reste pour le prochain repas."};function h4(t){const e=Number.isFinite(t.kcal)?t.kcal:0,n=e<400?"leger":e<=800?"correct":"copieux";return{equilibre:n,mot:f4[n]}}async function p4(t,e,n=fetch,i=""){const r=Ha(e).length?e.trim():"";return r?Ul({endpoint:t,modele:i,fetchImpl:n,max:800,consigne:"Tu es nutritionniste de quartier, en français. En trois phrases, dis ce qui manque ou ce qui est de trop dans cette assiette, et un seul remplacement simple à portée de main. Pas de chiffre inventé, pas de diagnostic.",question:r.slice(0,800)}):null}const m4=12,Em=180,g4=t=>{const e=t.replace(/\s+/g," ").trim(),n=e.length>Em?`${e.slice(0,Em).replace(/\s\S*$/,"")}…`:e;if(!n)return"";const i=/[.!?…]$/.test(n)?n:`${n}.`;return i.charAt(0).toUpperCase()+i.slice(1)};function v4(t){return t.split(new RegExp("(?<=[.!?;])\\s+|\\n+")).map(e=>e.trim()).filter(e=>e.length>=m4&&e.split(" ").length>=3)}function Tm(t,e=5){const n=v4(t);if(!n.length)return[];const i=Math.max(1,Math.floor(e)),r=new Set,s=[];for(let a=0;a<n.length&&s.length<i;a++){const o=g4(n[a]),l=ft(o);!o||r.has(l)||(r.add(l),s.push(o))}return s}function Am(t){return t.map(e=>e.trim()).filter(Boolean).map(e=>{const n=e.split(" ").slice(0,6).join(" ");return{verso:n.length>58?`${n.slice(0,58).replace(/\s\S*$/,"")}…`:n,recto:e}})}async function _4(t,e,n=fetch,i=""){const r=e.trim();return r.length<40?null:Ul({endpoint:t,modele:i,fetchImpl:n,max:900,consigne:"Tu résumes en français, en 4 ou 5 puces courtes commençant par « - », uniquement ce que le texte affirme. Pas d’introduction, pas de conclusion, pas d’inventaire de ce que tu as fait.",question:r.slice(0,6e3)})}function x4(t){const e=t.split(/\n+/).map(r=>r.trim()).filter(Boolean),n=[],i=[];for(const r of e)(/[?？]/.test(r)?n:i).push(r);return{donnees:i,questions:n}}function wm(t){const e=t.trim();return[`Relis la question${e?` « ${e} »`:""} une première fois, puis souligne exactement ce qui est demandé.`,"Écris à part toutes les données utiles, avec leurs unités : ce que l’énoncé donne, rien de plus.","Choisis la règle, la formule ou le principe qui relie ces données à ce que tu cherches.","Fais le calcul une ligne par opération, sans rien sauter : une ligne, un signe, un résultat.","Vérifie : l’unité attendue est-elle là, l’ordre de grandeur est-il raisonnable, le sens de la réponse tient-il ?","Rédige une réponse complète en une phrase, et garde la trace pour la refaire dans trois jours."]}async function b4(t,e,n=fetch,i=""){const r=e.trim();return r?Ul({endpoint:t,modele:i,fetchImpl:n,max:1200,consigne:"Tu es un professeur patient. Explique la résolution en français, en six étapes courtes numérotées, une ligne par opération, puis termine par une phrase de vérification. N'invente aucune donnée qui manque.",question:r.slice(0,2e3)}):null}const yo=[{nom:"Inspire",secondes:4},{nom:"Retiens",secondes:7},{nom:"Expire",secondes:8}],Cm=[{nom:"Inspire",secondes:4},{nom:"Retiens",secondes:4},{nom:"Expire",secondes:4},{nom:"Retiens",secondes:4}];function Ko(t){return t.reduce((e,n)=>e+Math.max(0,Math.floor(n.secondes)),0)}function zu(t){const e=[];let n=0;for(const i of t){const r=Math.max(0,Math.floor(i.secondes));r&&(e.push({nom:i.nom,debut:n,fin:n+r}),n+=r)}return e}function S4(t,e){const n=Ko(t);if(!n)return{nom:"",reste:0};const i=(Math.floor(e)%n+n)%n;for(const s of zu(t))if(i>=s.debut&&i<s.fin)return{nom:s.nom,reste:s.fin-i};return{nom:zu(t)[zu(t).length-1].nom,reste:0}}function y4(t,e,n){const i=Ko(e),r=Math.max(1,Math.floor(n))*i*1e3,s=Math.max(0,Math.floor(t));if(!i||s>=r)return{cycle:Math.max(1,Math.floor(n)),phase:"Fini",reste:0,fini:!0};const a=i*1e3,o=Math.floor(s/a)+1,l=Math.floor(s%a/1e3),{nom:u,reste:c}=S4(e,l);return{cycle:o,phase:u,reste:c,fini:!1}}const p_="nath.souffle",Vu={sessions:0,secondes:0},fd=t=>typeof t=="number"&&Number.isFinite(t)&&t>0?Math.floor(t):0;function m_(t){try{const e=t.getItem(p_);if(!e)return{...Vu};const n=JSON.parse(e);return!n||typeof n!="object"?{...Vu}:{sessions:fd(n.sessions),secondes:fd(n.secondes)}}catch{return{...Vu}}}function M4(t,e){const n=m_(t),i={sessions:n.sessions+1,secondes:n.secondes+fd(e?.secondes)};return t.setItem(p_,JSON.stringify(i)),i}const E4="Sans drapeau";function T4(t){const e=new Map;for(const r of t){if(!r||typeof r.id!="string")continue;const s=(r.domaine??"").trim()||E4,a=e.get(s);a?a.push(r.id):e.set(s,[r.id])}const n=[...e.values()].reduce((r,s)=>r+s.length,0);return n?[...e.entries()].map(([r,s])=>({nom:r,nombre:s.length,part:Math.round(s.length/n*1e3)/10,ids:s})).sort((r,s)=>s.nombre-r.nombre||r.nom.localeCompare(s.nom,"fr")):[]}const Rm=t=>{const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild},Ie=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),Lm={flamme:"Flamme",frigo:"Frigo",assiette:"Assiette",journal:"Journal",tuteur:"Tuteur",souffle:"Souffle",resume:"Résumé",carte:"Carte",langues:"Langues",examen:"Examen",metiers:"Métiers",coffre:"Coffre"};function A4(t){const e=wf(),n=Rm('<button class="outils-btn" title="Ma boîte à outils" aria-label="Ouvrir la boîte à outils">🧰</button>'),i=Rm(`
    <div class="outils-paneau" hidden role="dialog" aria-label="Boîte à outils">
      <div class="outils-tete">
        <div class="outils-onglets">
          ${Object.keys(Lm).map(V=>`<button data-ot="${V}"${V==="flamme"?' class="actif"':""}>${Lm[V]}</button>`).join("")}
        </div>
        <button class="outils-fermer" title="Fermer" aria-label="Fermer">×</button>
      </div>
      <div class="outils-corps"></div>
    </div>`);document.body.append(n,i);const r=i.querySelector(".outils-corps");let s="flamme",a="",o="",l="",u=null,c="",d=[],f="",p="",v="",_=yo,m=3,h=null,E=0,T=null,A="wolof",w="",C="",R="",z="",x=null,S="",L="",J=null,k={},K=null,te=dd[0]?.id??"";const q=()=>navigator.onLine?"":'<p class="outils-note">Hors-ligne : tout ce que tu vois ici continue de fonctionner.</p>',Y=()=>!!sn(t).trim();function se(){const V=Zv(t),xe=AA(V.xp),M=Math.round(CA(V.xp)*100);r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">🔥 ${V.streak} jour${V.streak>1?"s":""} de suite</p>
        <p class="oi-note">Record : ${V.meilleur} jour${V.meilleur>1?"s":""} · ${V.xp} points · niveau ${xe} — ${Ie(wA(xe))}</p>
        <div class="oi-barre"><i style="width:${M}%"></i></div>
        <p class="oi-note">${M} % du chemin vers le niveau ${xe+1}.</p>
        <div class="oi-actions">
          <button data-xp="10">Je révise aujourd’hui (+10)</button>
          <button data-xp="25">J’ai fini un paquet (+25)</button>
        </div>
        <p class="oi-note">Chaque fiche revue dans le coin d’études ajoute aussi ses points, toute seule.</p>
      </div>${q()}`,r.querySelectorAll("[data-xp]").forEach(ue=>{ue.addEventListener("click",()=>{e_(t,Number(ue.dataset.xp)),se()})})}function D(){const V=Mm(a),xe=h_(V),M=a4(V);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-frigo">Ce que j’ai sous la main</label>
        <textarea id="oi-frigo" class="oi-champ" rows="2" placeholder="2 œufs, tomate, riz, oignon…">${Ie(a)}</textarea>
        <div class="oi-actions">
          ${e.sttDisponible?'<button data-act="micro" data-cible="frigo">🎤 Dictater</button>':""}
          <button data-act="vingt">Dîner en 20 minutes</button>
          ${Y()?'<button data-act="cereau">Demander une idée</button>':""}
        </div>
        ${V.length?`<p class="oi-note">Je retiens : ${V.map(Ie).join(", ")}.</p>`:""}
        <div data-zone></div>
      </div>${q()}`;const ue=r.querySelector("#oi-frigo");ue.addEventListener("input",()=>{a=ue.value,D();const de=r.querySelector("#oi-frigo");de.focus(),de.setSelectionRange(de.value.length,de.value.length)});const re=r.querySelector("[data-zone]");xe.length?re.innerHTML='<p class="oi-titre2">Ce que je peux faire</p>'+xe.slice(0,6).map(de=>`<div class="oi-ligne"><span>${Ie(de.plat.nom)} · ${de.plat.minutes} min</span>
            <small>${de.manquants.length?`manque : ${de.manquants.map(Ie).join(", ")}`:"j’ai tout"}</small></div>`).join(""):V.length&&(re.innerHTML='<p class="oi-note">Rien sur la carte avec ces seuls mots — ajoute un féculent, un légume ou une protéine.</p>'),M.length&&(re.innerHTML+=`<p class="oi-titre2">Liste de courses</p><p class="oi-cours">${M.map(Ie).join(" · ")}</p>`),r.querySelector('[data-act="vingt"]')?.addEventListener("click",()=>{a=o4(20).map(de=>de.ingredients.slice(0,2).join(", ")).slice(0,3).join(", "),D()}),ae(r.querySelector('[data-act="micro"]'),ue,de=>{a=de,D()}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async de=>{const le=de.currentTarget;le.disabled=!0,le.textContent="Je réfléchis…";const y=await l4(sn(t),Mm(a),fetch,Pr(t));re.innerHTML+=y?`<p class="oi-titre2">Une idée en plus</p><p class="oi-reponse">${Ie(y)}</p>`:'<p class="oi-note">Pas de réponse venue — la carte du frigo reste utilisable hors-ligne.</p>',le.disabled=!1,le.textContent="Demander une idée"})}function W(){const V=d4(o),xe=h4(V.total);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-assiette">Ce que je mange</label>
        <textarea id="oi-assiette" class="oi-champ" rows="2" placeholder="2 œufs, riz, poulet, banane…">${Ie(o)}</textarea>
        <div class="oi-actions">${e.sttDisponible?'<button data-act="micro" data-cible="assiette">🎤 Dictater</button>':""}
        ${Y()?'<button data-act="cereau">Avis du grand cerveau</button>':""}</div>
        ${V.articles.length?`
          <table class="oi-table"><thead><tr><th>Aliment</th><th>Qté</th><th>kcal</th><th>P</th><th>G</th><th>L</th></tr></thead>
          <tbody>${V.articles.map(ue=>`<tr><td>${Ie(ue.nom)}</td><td>${ue.quantite}</td><td>${ue.kcal}</td><td>${ue.p}</td><td>${ue.g}</td><td>${ue.l}</td></tr>`).join("")}</tbody>
          <tfoot><tr><td>Total</td><td></td><td>${Math.round(V.total.kcal)}</td><td>${V.total.p}</td><td>${V.total.g}</td><td>${V.total.l}</td></tr></tfoot></table>
          <p class="oi-verdict oi-${xe.equilibre}">${Ie(xe.mot)}</p>`:'<p class="oi-note">Écris ce que tu manges : l’estimation vient aussitôt, sans réseau.</p>'}
        ${V.inconnus.length?`<p class="oi-note">Je ne connais pas encore : ${V.inconnus.map(Ie).join(", ")}.</p>`:""}
        <div data-zone></div>
      </div>${q()}`;const M=r.querySelector("#oi-assiette");M.addEventListener("input",()=>{o=M.value,W();const ue=r.querySelector("#oi-assiette");ue.focus(),ue.setSelectionRange(ue.value.length,ue.value.length)}),ae(r.querySelector('[data-act="micro"]'),M,ue=>{o=ue,W()}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async ue=>{const re=ue.currentTarget,de=r.querySelector("[data-zone]");re.disabled=!0,re.textContent="Je regarde…";const le=await p4(sn(t),o,fetch,Pr(t));de.innerHTML=le?`<p class="oi-reponse">${Ie(le)}</p>`:'<p class="oi-note">Aucun avis n’est revenu ; le calcul ci-dessus reste valable.</p>',re.disabled=!1,re.textContent="Avis du grand cerveau"})}function $(){const V=Jo(t),xe=vm(V,f).slice(0,30);r.innerHTML=`
      <div class="oi-carte">
        <input id="oi-jreq" class="oi-champ" type="search" placeholder="Retrouver une note (les accents ne comptent pas)" value="${Ie(f)}" />
        <input id="oi-jtitre" class="oi-champ" type="text" placeholder="Titre de la découverte" value="${Ie(p)}" />
        <textarea id="oi-jtexte" class="oi-champ" rows="2" placeholder="Ce que j’ai compris…">${Ie(v)}</textarea>
        <div class="oi-actions">
          <button data-act="noter">Noter</button>
          <button data-act="cartes">En faire des cartes</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="jtexte">🎤 Dictater</button>':""}
        </div>
        <p class="oi-note">${V.length} note${V.length>1?"s":""} gardée${V.length>1?"s":""} sur cet appareil.</p>
        <div class="oi-liste">${xe.map(de=>`<div class="oi-ligne" data-id="${Ie(de.id)}"><span><strong>${Ie(de.titre)}</strong>
              <small> · ${new Date(de.at).toLocaleDateString("fr-FR")} · ${Ie(de.origine)}</small></span>
              <button data-act="del" title="Effacer">×</button></div>
              <p class="oi-pet">${Ie(de.texte)}</p>`).join("")||'<p class="oi-note">Rien pour l’instant — la prochaine découverte tient sur deux lignes.</p>'}</div>
        <div data-zone></div>
      </div>${q()}`;const M=r.querySelector("#oi-jreq");M.addEventListener("input",()=>{f=M.value,$(),r.querySelector("#oi-jreq").focus()});const ue=r.querySelector("#oi-jtitre");ue.addEventListener("input",()=>p=ue.value);const re=r.querySelector("#oi-jtexte");re.addEventListener("input",()=>v=re.value),r.querySelector('[data-act="noter"]').addEventListener("click",()=>{i_(t,{titre:p,texte:v,origine:"outil"}),p="",v="",$()}),r.querySelector('[data-act="cartes"]').addEventListener("click",()=>{const de=DA(vm(Jo(t),f)),le=j("Mon journal",de);r.querySelector("[data-zone]").insertAdjacentHTML("beforeend",`<p class="oi-reponse">${le?`${le} carte${le>1?"s":""} ajoutée${le>1?"s":""} au paquet « Mon journal » — révise-les dans le coin d’études.`:"Rien à cartographier : écris au moins une note."}</p>`)}),ae(r.querySelector('[data-act="micro"]'),re,()=>{v=re.value}),r.querySelectorAll('[data-act="del"]').forEach(de=>{de.addEventListener("click",()=>{PA(t,de.closest(".oi-ligne")?.dataset.id??""),$()})})}function ve(){const V=x4(l);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-tut">Ma question, mon énoncé</label>
        <textarea id="oi-tut" class="oi-champ" rows="3" placeholder="Résoudre 3x + 5 = 20 — ou recopier l’énoncé ligne par ligne.">${Ie(l)}</textarea>
        <div class="oi-actions">
          <button data-act="plan">Le plan, stylo en main</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="tut">🎤 Dictater</button>':""}
          ${e.ttsDisponible?'<button data-act="lire">🔊 Me lire le plan</button>':""}
          ${Y()?'<button data-act="cereau">Faire résoudre</button>':""}
        </div>
        ${V.questions.length?`<p class="oi-note">Ce qu’on te demande : ${V.questions.map(Ie).join(" · ")}</p>`:""}
        <div data-zone>${u?`<p class="oi-reponse">${Ie(u)}</p>`:""}</div>
      </div>${q()}`;const xe=r.querySelector("#oi-tut");xe.addEventListener("input",()=>{l=xe.value});const M=r.querySelector("[data-zone]");r.querySelector('[data-act="plan"]').addEventListener("click",()=>{const ue=wm(l);M.innerHTML=`<p class="oi-titre2">Le plan</p><ol class="oi-pas">${ue.map(re=>`<li>${Ie(re)}</li>`).join("")}</ol>`}),r.querySelector('[data-act="lire"]')?.addEventListener("click",()=>{e.parler(wm(l).join(" . "),"posee")}),ae(r.querySelector('[data-act="micro"]'),xe,ue=>{l=ue}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async ue=>{const re=ue.currentTarget;re.disabled=!0,re.textContent="Je cherche…";const de=await b4(sn(t),l,fetch,Pr(t));u=de,M.innerHTML=de?`<p class="oi-titre2">Résolution</p><p class="oi-reponse">${Ie(de)}</p>`:'<p class="oi-note">Rien n’est revenu — le plan hors-ligne fonctionne quand même.</p>',re.disabled=!1,re.textContent="Faire résoudre"})}function U(){const V=m_(t),xe=Ko(_),M=Math.round(V.secondes/60),ue=V.secondes<60?`${V.secondes} seconde${V.secondes>1?"s":""}`:`${M} minute${M>1?"s":""}`;r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">Respirer à ${_===yo?"4-7-8":"au carré"} · ${m} cycles · ${xe*m} s</p>
        <div class="oi-souffle"><i></i><span data-phase="">${h===null?"Prêt":""}</span></div>
        <div class="oi-actions">
          <button data-ry="478"${_===yo?' class="actif"':""}>4-7-8</button>
          <button data-ry="carre"${_===Cm?' class="actif"':""}>Carré</button>
          <button data-cy="3"${m===3?' class="actif"':""}>3</button>
          <button data-cy="5"${m===5?' class="actif"':""}>5</button>
          <button data-cy="8"${m===8?' class="actif"':""}>8</button>
          <button data-act="go">${h===null?"Commencer":"Arrêter"}</button>
        </div>
        <p class="oi-note">${V.sessions} séance${V.sessions>1?"s":""} au repos · ${ue} respirées.</p>
        <p class="oi-note">Le minuteur tourne dans l’appareil, sans son obligatoire : tu peux fermer les yeux.</p>
      </div>${q()}`,r.querySelectorAll("[data-ry]").forEach(re=>re.addEventListener("click",()=>{h===null&&(_=re.dataset.ry==="carre"?Cm:yo,U())})),r.querySelectorAll("[data-cy]").forEach(re=>re.addEventListener("click",()=>{h===null&&(m=Number(re.dataset.cy)||3,U())})),r.querySelector('[data-act="go"]').addEventListener("click",()=>{if(h!==null){Z(!0);return}E=Date.now();const re=r.querySelector('[data-act="go"]');re.textContent="Arrêter",h=window.setInterval(()=>{const de=y4(Date.now()-E,_,m);if(de.fini){Z(!0);return}const le=r.querySelector("[data-phase]"),y=r.querySelector(".oi-souffle i");le&&(le.textContent=`${de.phase} · ${de.reste} · cycle ${de.cycle}/${m}`);const g=de.phase==="Inspire"?1:de.phase==="Retiens"?.92:.55;y&&(y.style.transform=`scale(${g})`)},200)})}function Z(V){h!==null&&window.clearInterval(h),h=null;const xe=V?Math.min(Ko(_)*m,Math.round((Date.now()-E)/1e3)):0;xe>=3&&M4(t,{secondes:xe}),U()}function he(){r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-res">Colle ou dicte un texte</label>
        <textarea id="oi-res" class="oi-champ" rows="4" placeholder="Cours, article, message long…">${Ie(c)}</textarea>
        <div class="oi-actions">
          <button data-act="puces">Résumer ici (hors-ligne)</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="res">🎤 Dictater</button>':""}
          ${e.ttsDisponible?'<button data-act="lire">🔊 Lire</button>':""}
          ${Y()?'<button data-act="cereau">Résumer avec le grand cerveau</button>':""}
          <button data-act="cartes">En faire des cartes</button>
        </div>
        <div data-zone>${d.length?`<ol class="oi-pas">${d.map(M=>`<li>${Ie(M)}</li>`).join("")}</ol>`:""}</div>
      </div>${q()}`;const V=r.querySelector("#oi-res");V.addEventListener("input",()=>c=V.value);const xe=r.querySelector("[data-zone]");r.querySelector('[data-act="puces"]').addEventListener("click",()=>{d=Tm(c,5),xe.innerHTML=d.length?`<ol class="oi-pas">${d.map(M=>`<li>${Ie(M)}</li>`).join("")}</ol>`:'<p class="oi-note">Trop court pour être coupé en puces — ajoute quelques phrases.</p>'}),r.querySelector('[data-act="lire"]')?.addEventListener("click",()=>{e.parler(d.length?d.join(" . "):c.slice(0,400),"posee")}),ae(r.querySelector('[data-act="micro"]'),V,M=>c=M),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async M=>{const ue=M.currentTarget;ue.disabled=!0,ue.textContent="Je lis…";const re=await _4(sn(t),c,fetch,Pr(t));d=re?re.split(/\n+/).map(de=>de.replace(/^[-•*]\s*/,"").trim()).filter(Boolean):[],xe.innerHTML=d.length?`<ol class="oi-pas">${d.map(de=>`<li>${Ie(de)}</li>`).join("")}</ol>`:'<p class="oi-note">Rien n’est revenu — le bouton « Résumer ici » marche sans réseau.</p>',ue.disabled=!1,ue.textContent="Résumer avec le grand cerveau"}),r.querySelector('[data-act="cartes"]').addEventListener("click",()=>{const M=d.length?Am(d):Am(Tm(c,5)),ue=j("Résumés",M);xe.insertAdjacentHTML("beforeend",`<p class="oi-reponse">${ue?`${ue} carte${ue>1?"s":""} dans le paquet « Résumés ».`:"Résume d’abord (bouton hors-ligne) pour obtenir des cartes."}</p>`)})}function F(){const V=Wv,xe=T4(V),M=T?xe.find(re=>re.nom===T)??null:null,ue=M?V.filter(re=>M.ids.includes(re.id)):[];r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">L’archipel des savoirs · ${V.length} notices</p>
        <div class="oi-iles">${xe.map(re=>`<button class="oi-ile${re.nom===T?" actif":""}" data-ile="${Ie(re.nom)}" style="--p:${Math.max(6,Math.round(re.part))}%"><span>${Ie(re.nom)}</span><small>${re.nombre} · ${re.part}%</small></button>`).join("")}</div>
        ${M?`<p class="oi-titre2">${Ie(M.nom)}</p><div class="oi-grille">${ue.map(re=>`<div class="oi-puce"><strong>${Ie(re.titre)}</strong><p>${Ie(re.resume)}</p></div>`).join("")}</div>`:'<p class="oi-note">Choisis une île : ses notices s’ouvrent ici, même sans réseau. Les étoiles et la recherche t’attendent dans le coin d’études.</p>'}
      </div>${q()}`,r.querySelectorAll("[data-ile]").forEach(re=>re.addEventListener("click",()=>{T=re.dataset.ile??null,F()}))}function j(V,xe){const M=xe.filter(de=>de.verso.trim()&&de.recto.trim());if(!M.length)return 0;let ue=Gn(t).find(de=>de.nom===V);if(ue||(ue=ls(t,V)??void 0),!ue)return 0;let re=0;for(const de of M)va(t,ue.id,de.verso,de.recto)&&re++;return re}function ae(V,xe,M){const ue=V;!ue||!e.sttDisponible||ue.addEventListener("click",()=>{ue.disabled=!0,ue.textContent="🎤 Je t’écoute…",e.ecouter(re=>{const de=jv(re),le=$v(de?`${de.de}, ${de.a}`:re);xe.value=le,M(le),ue.disabled=!1,ue.textContent="🎤 Dictater"})})}const B=[["wolof","Wolof"],["nouchi","Nouchi"],["anglais","Anglais"],["espagnol","Espagnol"],["arabe","Arabe"],["chinois","Chinois"]];function ee(){const V=Sa(t);r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">&#128483;&#65039; Parler ta langue</p>
        <p class="oi-note">Traduire un mot, une petite phrase — ici, même sans réseau. Ce que tu apprends ici reste sur ton appareil et voyage avec ton coffre.</p>
        <div class="oi-actions">
          ${B.map(([re,de])=>`<button data-lg="${re}"${re===A?' class="actif"':""}>${de}</button>`).join("")}
        </div>
        <label class="oi-libelle" for="oi-lg-mot">Le mot ou la phrase, en français</label>
        <input id="oi-lg-mot" class="oi-champ" type="text" placeholder="ex. merci, de l’eau, ma maison" value="${Ie(w)}" />
        <div class="oi-actions">
          <button data-act="dire">Traduire</button>
          ${e.ttsDisponible?'<button data-act="lire">&#128266; Me le dire</button>':""}
        </div>
        <div data-res>${x?`<p class="oi-reponse">${Ie(x.resultat??"Je ne sais pas encore ce mot.")}</p>${x.manques.length?`<p class="oi-note">Il me manque : ${x.manques.map(Ie).join(", ")} — donne-le moi en dessous.</p>`:""}`:""}</div>
        <p class="oi-titre2">Lui apprendre un mot</p>
        <input id="oi-lg-de" class="oi-champ" type="text" placeholder="en français (ex. voiture)" value="${Ie(C)}" />
        <input id="oi-lg-a" class="oi-champ" type="text" placeholder="dans ta langue (ex. gaara)" value="${Ie(R)}" />
        <div class="oi-actions"><button data-act="donner">Ajouter au carnet</button></div>
        ${z?`<p class="oi-note">${Ie(z)}</p>`:""}
        <p class="oi-note">${V.length} mot${V.length>1?"s":""} appris${V.length>1?"s":""} de toi, gardés sur cet appareil.</p>
      </div>${q()}`;const xe=r.querySelector("#oi-lg-mot");xe.addEventListener("input",()=>w=xe.value);const M=r.querySelector("#oi-lg-de");M.addEventListener("input",()=>C=M.value);const ue=r.querySelector("#oi-lg-a");ue.addEventListener("input",()=>R=ue.value),r.querySelectorAll("[data-lg]").forEach(re=>re.addEventListener("click",()=>{A=re.dataset.lg??"wolof",x=null,ee()})),r.querySelector('[data-act="dire"]').addEventListener("click",()=>{x=kA(w,A,t),ee()}),r.querySelector('[data-act="lire"]')?.addEventListener("click",()=>{x?.resultat&&e.parler(x.resultat,"posee")}),r.querySelector('[data-act="donner"]').addEventListener("click",()=>{const re=Sa(t).length;BA(t,C,R,A);const de=Sa(t).length,le=C.trim();de>re?z=`C’est noté : « ${le} » se dit « ${R.trim()} ». Merci.`:le&&R.trim()?z=`Ta parole remplace l’ancienne pour « ${le} ».`:z="Il me faut le mot et sa traduction pour l’apprendre.",C="",R="",ee()})}function pe(){const V=Gn(t);!S&&V.length&&(S=V[0].id);const xe=V.find(le=>le.id===S)??null,M=J??[],ue=K!==null,re=xe?`<div class="oi-actions">${V.map(le=>`<button data-pq="${Ie(le.id)}"${le.id===S?' class="actif"':""}>${Ie(le.nom)} (${le.fiches.length})</button>`).join("")}</div>`:"",de=M.length?`<p class="oi-titre2">Ton sujet · ${M.length} cartes · vise ${qA(M.length)} s</p><div class="oi-liste">${M.map((le,y)=>`<div class="oi-ligne"><span><strong>${y+1}. ${Ie(le.verso)}</strong></span><button data-mark="${Ie(le.id)}"${k[le.id]?' class="actif"':""}>${k[le.id]?"Je savais":"À revoir"}</button></div>`+(ue?`<p class="oi-pet">${Ie(le.recto)}</p>`:"")).join("")}</div><div class="oi-actions"><button data-act="corriger">Voir mon résultat</button><button data-act="nouveau">Un autre sujet</button></div>`+(ue?`<p class="oi-reponse">${K.corrects}/${K.total} · ${Math.round(K.score*100)} % — ${Ie(GA(K.score))}</p>`:""):"";r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">&#128221; L’examen blanc</p>
        <p class="oi-note">Avant le vrai jour, teste-toi dans les mêmes conditions — ici, même sans réseau. Choisis un paquet, compose un sujet, souviens-toi, puis dis ce que tu savais.</p>
        ${V.length?re:'<p class="oi-note">Aucun paquet encore. Crée des fiches dans le coin d’études, ou envoie-en depuis le résumé.</p>'}
        ${xe&&!M.length?`<div class="oi-actions"><button data-act="composer"${xe.fiches.length<2?" disabled":""}>Composer un sujet (${Math.min(10,xe.fiches.length)} cartes)</button></div>${xe.fiches.length<2?'<p class="oi-note">Il faut au moins deux cartes dans ce paquet.</p>':""}`:""}
        ${de}
      </div>${q()}`,r.querySelectorAll("[data-pq]").forEach(le=>le.addEventListener("click",()=>{S=le.dataset.pq??S,J=null,k={},K=null,pe()})),r.querySelector('[data-act="composer"]')?.addEventListener("click",()=>{xe&&(L=`${xe.id}-${Date.now()}`,J=xm(xe.fiches,10,L),k={},K=null,pe())}),r.querySelector('[data-act="nouveau"]')?.addEventListener("click",()=>{xe&&(L=`${xe.id}-${Date.now()}`,J=xm(xe.fiches,10,L),k={},K=null,pe())}),r.querySelectorAll("[data-mark]").forEach(le=>le.addEventListener("click",()=>{const y=le.dataset.mark??"";k={...k,[y]:!k[y]},pe()})),r.querySelector('[data-act="corriger"]')?.addEventListener("click",()=>{M.length&&(K=VA(M.map(le=>({id:le.id,juste:!!k[le.id]}))),pe())})}function Re(){const V=QA(t),xe=navigator.languages?.length?Array.from(navigator.languages):[navigator.language??""],M=t4(V,xe),ue=$A(jA(dd,M));ue.some(ce=>ce.id===te)||(te=ue[0]?.id??"");const re=HA(te)??ue[0];if(!re){r.innerHTML='<div class="oi-carte"><p class="oi-note">Aucun pack métier pour l’instant.</p></div>';return}const de=JA(re.id,t),le=WA(re,de),y=XA(re,de),g=YA(re,de),N=ue.map(ce=>`<button data-mt="${Ie(ce.id)}"${ce.id===re.id?' class="actif"':""}>${ce.emoji} ${Ie(ce.nom)}</button>`).join(""),ne=[`<button data-pays=""${M===""?' class="actif"':""}>Tous</button>`,...Df.map(ce=>`<button data-pays="${Ie(ce.code)}"${M===ce.code?' class="actif"':""}>${ce.emoji} ${Ie(ce.nom)}</button>`)].join(""),ie=M?u_(M):null,Q=ie?`<p class="oi-titre2">Urgences ${ie.emoji} ${Ie(ie.nom)}</p>
         <p class="oi-pet">Police ${Ie(ie.urgence.police)} · Pompiers ${Ie(ie.urgence.pompiers)} · SAMU ${Ie(ie.urgence.samu)}${ie.urgence.commun?" · Numéro commun "+Ie(ie.urgence.commun):""}</p>
         <p class="oi-pet">${Ie(ZA)}</p>`:"",Oe=V.crise?"✓ Mode crise activé":"Mode crise (priorise survie & approvisionnement)";r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">&#129520; Un métier, un jour, un geste</p>
        <p class="oi-note">Apprends le métier comme on l’apprend sur le terrain : aujourd’hui une tâche, un mot exact, un piège à éviter. Hors-ligne, sans compte ; ta progression voyage avec le coffre.</p>
        <p class="oi-titre2">Pays</p>
        <div class="oi-actions">${ne}</div>
        <div class="oi-actions"><button data-act="crise"${V.crise?' class="actif"':""}>${Oe}</button></div>
        ${Q}
        <p class="oi-titre2">Le métier</p>
        <div class="oi-actions">${N}</div>
        <p class="oi-note">${Ie(re.resume)}</p>
        <p class="oi-titre2">Jour ${de+1} — la tâche du jour</p>
        <p><strong>${Ie(le.titre)}</strong></p>
        <ul class="oi-liste">${le.gestes.map(ce=>`<li>• ${Ie(ce)}</li>`).join("")}</ul>
        <p class="oi-titre2">Le mot juste</p>
        <p><strong>${Ie(y.mot)}</strong> — ${Ie(y.sens)}</p>
        <p class="oi-titre2">Le piège du jour</p>
        <p>${Ie(g.enoncé)}</p>
        <p class="oi-pet">Pour l’éviter : ${Ie(g.eviter)}</p>
        <div class="oi-actions"><button data-act="demain">Jour suivant</button></div>
      </div>${q()}`,r.querySelectorAll("[data-mt]").forEach(ce=>ce.addEventListener("click",()=>{te=ce.dataset.mt??te,Re()})),r.querySelectorAll("[data-pays]").forEach(ce=>ce.addEventListener("click",()=>{const Fe=ce.dataset.pays??"";ym(t,{...V,pays:Fe}),Re()})),r.querySelector('[data-act="crise"]')?.addEventListener("click",()=>{ym(t,{...V,crise:!V.crise}),Re()}),r.querySelector('[data-act="demain"]')?.addEventListener("click",()=>{KA(re.id,t),Re()})}function be(){r.innerHTML=`
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
      </div>${q()}`;const V=r.querySelector("#oi-coffre"),xe=r.querySelector("[data-zone]"),M=ue=>{xe.innerHTML=`<p class="oi-note">${Ie(ue)}</p>`};r.querySelector('[data-act="emporter"]')?.addEventListener("click",()=>{V.value=FA(t),M("Tes affaires tiennent dans ce texte. Copie-le et garde-le pour toi — personne d’autre n’y lit quoi que ce soit.")}),r.querySelector('[data-act="copier"]')?.addEventListener("click",async()=>{if(!V.value.trim()){M("D’abord « Emporter mes affaires », puis copie.");return}try{await navigator.clipboard.writeText(V.value),M("Copié. Colle-le là où tu veux le garder.")}catch{V.focus(),V.select(),M("Tout est sélectionné — copie-le à la main.")}}),r.querySelector('[data-act="reposer"]')?.addEventListener("click",()=>{const ue=OA(t,V.value);M(ue>0?`${ue} affaire${ue>1?"s":""} remise${ue>1?"s":""} en place. Recharge la page pour tout retrouver.`:"Rien à reposer ici : ce texte n’est pas un coffre valide.")})}const Ce={flamme:se,frigo:D,assiette:W,journal:$,tuteur:ve,souffle:U,resume:he,carte:F,langues:ee,examen:pe,metiers:Re,coffre:be};function Ve(V){s=V,i.querySelectorAll(".outils-onglets button").forEach(xe=>{xe.classList.toggle("actif",xe.dataset.ot===V)}),h!==null&&V!=="souffle"&&Z(!1),r.innerHTML="",Ce[V]()}return i.querySelectorAll(".outils-onglets button").forEach(V=>{V.addEventListener("click",()=>Ve(V.dataset.ot??"flamme"))}),n.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden||Ve(s)}),i.querySelector(".outils-fermer").addEventListener("click",()=>{h!==null&&Z(!1),i.hidden=!0}),window.addEventListener("online",()=>{i.hidden||Ve(s)}),window.addEventListener("offline",()=>{i.hidden||Ve(s)}),n}function w4(t,e){return{eclair:(t==="tension"?.45:t==="tristesse"?.12:0)*(.3+.7*e),filer:e*.4}}function C4(t,e){let n=0,i=.85,r=.15,s=!1,a="le ciel respire";t===0||t===1?(i=.95,a=t===0?"ciel dégagé":"à peine voilé"):t===2?(i=.8,a="nuages passagers"):t===3?(i=.55,r=.25,a="ciel couvert"):t===45||t===48?(i=.35,r=.1,n=.08,a="brouillard"):t>=51&&t<=57?(n=.35,i=.45,a="bruine"):t>=61&&t<=67?(n=t===65||t===67?.8:.55,i=.4,a="pluie"):t>=71&&t<=77?(n=.45,i=.65,a="neige"):t>=80&&t<=82?(n=t===82?.9:.6,i=.4,r=.3,a="averses"):t===85||t===86?(n=.5,i=.6,a="neiges"):t>=95&&t<=99&&(s=!0,n=.9,i=.3,r=.7,a="orage");const o=Math.min(1,r+Math.min(.4,Math.max(0,e)/100));return{pluie:n,turbulence:o,luminosite:i,orage:s,libelle:a}}async function R4(t,e,n){try{const i="https://api.open-meteo.com/v1/forecast?latitude="+encodeURIComponent(String(t))+"&longitude="+encodeURIComponent(String(e))+"&current=weather_code,wind_speed_10m",r=await n(i);if(!r.ok)return null;const s=await r.json(),a=s?.current?.weather_code;if(typeof a!="number")return null;const o=typeof s.current.wind_speed_10m=="number"?s.current.wind_speed_10m:0;return C4(a,o)}catch{return null}}async function L4(t,e){if(!t)return null;try{const n=await e(`${t.replace(/\/+$/,"")}/lieu`,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});if(!n.ok)return null;const i=await n.json();if(!i?.lieu)return null;const r=Number(i.lieu.latitude),s=Number(i.lieu.longitude);return!Number.isFinite(r)||!Number.isFinite(s)?null:{latitude:r,longitude:s}}catch{return null}}function P4(t){const e=t.match(/assets\/index-[\w-]+\.js/);return e?e[0].split("/").pop()??null:null}function D4(t,e){return!!t&&t!==e}const g_="nath.mise-a-jour.ecartee";function N4(t,e){try{return t.getItem(g_)===e}catch{return!1}}function I4(t,e){try{t.setItem(g_,e)}catch{}}async function F4(t,e){try{const n=e.includes("?")?"&":"?",i=await t(`${e}${n}revoir=${Date.now()}`,{cache:"no-store"});return i.ok?P4(await i.text()):null}catch{return null}}function U4(){return import.meta.url.split("/").pop()?.split("?")[0]??""}function O4(t,e,n=6e4){return t===0||e-t>=n}function B4(t,e){const n=document.createElement("div");n.className="maj-puce visible",n.setAttribute("role","status"),n.setAttribute("aria-live","polite");const i=()=>{I4(e,t),n.remove()};n.addEventListener("keydown",a=>{a.key==="Escape"&&i()});const r=document.createElement("button");r.type="button",r.className="maj-agir",r.textContent="Nouvelle version prête — recharger",r.title="Rien ne se recharge tout seul : appuie quand tu veux changer de version",r.addEventListener("click",()=>window.location.reload());const s=document.createElement("button");s.type="button",s.className="maj-refus",s.textContent="×",s.setAttribute("aria-label","Ne pas recharger maintenant"),s.title="Pour cette version-là, on n’y revient plus",s.addEventListener("click",i),n.append(r,s),document.body.append(n)}function k4(t=fetch){if(typeof document>"u")return;const e=window.location.href.split("?")[0],n=U4();if(!n)return;const i={getItem:o=>{try{return sessionStorage.getItem(o)}catch{return null}},setItem:(o,l)=>{try{sessionStorage.setItem(o,l)}catch{}}};let r=!1,s=0;const a=async()=>{if(r)return;const o=Date.now();if(!O4(s,o))return;s=o;const l=await F4(t,e);!D4(l,n)||!l||N4(i,l)||(r=!0,B4(l,i))};window.setTimeout(()=>{a()},8e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&a()})}const Zo=document.getElementById("scene"),Ss=VS(Zo),ot=qS();ot.seed=localStorage.getItem("nuage.seed")??crypto.randomUUID();localStorage.setItem("nuage.seed",ot.seed);const Qo={cameraOn:!1,micOn:!1};$S(t=>{ot.breath=Math.max(ot.breath,t)}).then(t=>{Qo.micOn=t});const hd=document.getElementById("cam"),z4=GM(),qu=new VM(hd,localStorage,t=>{ot.emotion=z4(qM(t))},t=>{Qo.cameraOn=t,hd.classList.toggle("video-actif",t)}),V4=typeof navigator<"u"&&!!navigator.mediaDevices?.getUserMedia,q4=document.getElementById("etat"),ys=YM(ot.seed);let v_=[.5,.5];JM(Zo,(t,e)=>{v_=[t,e]});KM(t=>{ot.breath=Math.max(ot.breath,Math.abs(t))});BT(()=>({emotion:ot.emotion,breath:ot.breath,timeOfDay:ot.timeOfDay,seed:ys.musiqueSeed,bpm:ot.bpm,cameraOn:Qo.cameraOn,micOn:Qo.micOn}),{cameraDisponible:V4,estOuverte:()=>qu.ouverte,basculer:()=>qu.basculer(),changerFace:()=>qu.basculerFace(),consentement:IM});NA(localStorage);A4(localStorage);setInterval(()=>{const t=w4(ot.emotion,hg(ot).night);(ot.cielReel?.orage&&Math.random()<.4||Math.random()<t.eclair)&&Ss.eclair(),Math.random()<t.filer&&Ss.filer(.08+Math.random()*.75,.7+Math.random()*.25)},15e3);const $n=document.createElement("button");$n.className="ciel-btn";$n.type="button";$n.textContent="⛅";$n.title="Le ciel réel — laisser respirer au nuage le temps de chez toi";$n.setAttribute("aria-label","Laisser au nuage le temps réel de chez toi");document.body.append($n);let fs=0,Fo=!1;async function el(t,e){const n=await R4(t,e,fetch);n&&(ot.cielReel=n,$n.classList.add("actif"),$n.title=`Dehors, ${n.libelle} — le nuage respire avec lui`)}$n.addEventListener("click",()=>{if(fs){window.clearInterval(fs),fs=0,Fo=!1,ot.cielReel=null,$n.classList.remove("actif"),$n.title="Le ciel réel — laisser respirer au nuage le temps de chez toi";return}if(Fo=!0,!navigator.geolocation){Pm();return}navigator.geolocation.getCurrentPosition(t=>{Fo&&(el(t.coords.latitude,t.coords.longitude),fs=window.setInterval(()=>{el(t.coords.latitude,t.coords.longitude)},6e5))},()=>{Pm()},{enableHighAccuracy:!1,timeout:1e4,maximumAge:6e5})});async function Pm(){const t=await L4(sn(localStorage),fetch);if(!t){$n.classList.remove("actif");return}Fo&&(await el(t.latitude,t.longitude),window.clearInterval(fs),fs=window.setInterval(()=>{el(t.latitude,t.longitude)},6e5))}let ks=!1;const di=document.createElement("button");di.className="musique-btn";di.type="button";di.setAttribute("aria-label","La musique de l’aura — l’endormir ou la réveiller");document.body.append(di);function Nf(){const t=Rl(localStorage);di.textContent=t?"🔇":"🎵",di.classList.toggle("eteinte",t),di.classList.toggle("actif",!t&&ks),di.title=t?"La musique dort — appuie pour l’éveiller":"La musique de l’aura — appuie pour l’endormir",di.setAttribute("aria-pressed",String(!t))}di.addEventListener("click",()=>{rE(localStorage)?Sv():(iE(),ks||(ks=bv(ys.musiqueSeed))),Nf()});Rl(localStorage)&&Sv();Nf();Zo.addEventListener("pointerdown",t=>{const e=Zo.getBoundingClientRect();Ss.tap((t.clientX-e.left)/e.width,1-(t.clientY-e.top)/e.height),ks||(ks=bv(ys.musiqueSeed),Nf())});const G4=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Mo=[];setInterval(()=>{const t=XM(hd,G4);t!=null&&(Mo.push(t),Mo.length>80&&Mo.shift(),ot.bpm=WM(Mo,8))},125);let Dm=performance.now();function __(t){const e=(t-Dm)/1e3;Dm=t;const n=new Date;if(ot.timeOfDay=(n.getHours()+n.getMinutes()/60)/24,ot.breath=Math.max(0,ot.breath-e*.5),ot.bpm){const i=Math.sin(Date.now()/(6e4/ot.bpm)*2*Math.PI);ot.breath=Math.max(ot.breath,.08*i+.08)}Ss.apply(hg(ot),v_),Ss.setBpm(ot.bpm),Ss.frame(e),tE(ot.emotion),nE(ot.breath),q4.textContent=ks?`aura : ${ys.nom} · humeur : ${ot.emotion} · souffle : ${ot.breath*100|0}% · pouls : ${ot.bpm?Math.round(ot.bpm):"—"}`:Rl(localStorage)?`aura : ${ys.nom} · la musique dort — 🎵 pour la réveiller`:`aura : ${ys.nom} · touche le ciel pour éveiller la musique`,requestAnimationFrame(__)}requestAnimationFrame(__);console.log("Nath Assist v1-alpha — ICF·Future by Nath-Tech");k4(fetch);
