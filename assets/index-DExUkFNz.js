(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const cd="182",Qv=0,Ih=1,e_=2,bo=1,t_=2,da=3,lr=0,xn=1,Ii=2,Fi=0,ds=1,Nh=2,Uh=3,Fh=4,n_=5,Tr=100,i_=101,r_=102,s_=103,a_=104,o_=200,l_=201,c_=202,u_=203,Vc=204,Gc=205,d_=206,h_=207,f_=208,p_=209,m_=210,g_=211,v_=212,__=213,x_=214,Hc=0,qc=1,Wc=2,Ms=3,$c=4,jc=5,Xc=6,Yc=7,_m=0,S_=1,M_=2,mi=0,xm=1,Sm=2,Mm=3,bm=4,ym=5,Em=6,Tm=7,Am=300,Or=301,bs=302,Jc=303,Kc=304,Qo=306,Zc=1e3,Ui=1001,Qc=1002,Qt=1003,b_=1004,Wa=1005,an=1006,Bl=1007,wr=1008,Hn=1009,wm=1010,Cm=1011,Ma=1012,ud=1013,xi=1014,hi=1015,zi=1016,dd=1017,hd=1018,ba=1020,Rm=35902,Lm=35899,Pm=1021,Dm=1022,ei=1023,Vi=1026,Cr=1027,Im=1028,fd=1029,ys=1030,pd=1031,md=1033,yo=33776,Eo=33777,To=33778,Ao=33779,eu=35840,tu=35841,nu=35842,iu=35843,ru=36196,su=37492,au=37496,ou=37488,lu=37489,cu=37490,uu=37491,du=37808,hu=37809,fu=37810,pu=37811,mu=37812,gu=37813,vu=37814,_u=37815,xu=37816,Su=37817,Mu=37818,bu=37819,yu=37820,Eu=37821,Tu=36492,Au=36494,wu=36495,Cu=36283,Ru=36284,Lu=36285,Pu=36286,y_=3200,E_=0,T_=1,rr="",Gn="srgb",Es="srgb-linear",No="linear",mt="srgb",Wr=7680,Oh=519,A_=512,w_=513,C_=514,gd=515,R_=516,L_=517,vd=518,P_=519,Bh=35044,kh="300 es",fi=2e3,Uo=2001;function Nm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function D_(){const t=Fo("canvas");return t.style.display="block",t}const zh={};function Vh(...t){const e="THREE."+t.shift();console.log(e,...t)}function je(...t){const e="THREE."+t.shift();console.warn(e,...t)}function ot(...t){const e="THREE."+t.shift();console.error(e,...t)}function ya(...t){const e=t.join(" ");e in zh||(zh[e]=!0,je(...t))}function I_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=Math.PI/180,Du=180/Math.PI;function Ra(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function N_(t,e){return(t%e+e)%e}function zl(t,e,n){return(1-n)*t+n*e}function ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class La{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],h=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o>=1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(d!==_||l!==h||c!==p||u!==v){let m=l*h+c*p+u*v+d*_;m<0&&(h=-h,p=-p,v=-v,_=-_,m=-m);let f=1-o;if(m<.9995){const y=Math.acos(m),E=Math.sin(y);f=Math.sin(f*y)/E,o=Math.sin(o*y)/E,l=l*f+h*o,c=c*f+p*o,u=u*f+v*o,d=d*f+_*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+v*o,d=d*f+_*o;const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+u*d+l*p-c*h,e[n+1]=l*v+u*h+c*d-o*p,e[n+2]=c*v+u*p+o*h-l*d,e[n+3]=u*v-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vl=new j,Gh=new La;class Ye{constructor(e,n,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],_=r[0],m=r[3],f=r[6],y=r[1],E=r[4],A=r[7],w=r[2],C=r[5],L=r[8];return s[0]=a*_+o*y+l*w,s[3]=a*m+o*E+l*C,s[6]=a*f+o*A+l*L,s[1]=c*_+u*y+d*w,s[4]=c*m+u*E+d*C,s[7]=c*f+u*A+d*L,s[2]=h*_+p*y+v*w,s[5]=h*m+p*E+v*C,s[8]=h*f+p*A+v*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Gl.makeScale(e,n)),this}rotate(e){return this.premultiply(Gl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gl=new Ye,Hh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U_(){const t={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(r.r=hs(r.r),r.g=hs(r.g),r.b=hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rr?No:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ya("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ya("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Es]:{primaries:e,whitePoint:i,transfer:No,toXYZ:Hh,fromXYZ:qh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Hh,fromXYZ:qh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),t}const rt=U_();function Oi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class F_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=Fo("canvas")),$r.width=e.width,$r.height=e.height;const r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Oi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Oi(n[i]/255)*255):n[i]=Oi(n[i]);return{data:n,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O_=0;class _d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Ra(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hl(r[a].image)):s.push(Hl(r[a]))}else s=Hl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?F_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let B_=0;const ql=new j;class pn extends Bs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Ui,r=Ui,s=an,a=wr,o=ei,l=Hn,c=pn.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Ra(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Am)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zc:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Qc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zc:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Qc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Am;pn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,A=(p+1)/2,w=(f+1)/2,C=(u+h)/4,L=(d+_)/4,G=(v+m)/4;return E>A&&E>w?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=C/i,s=L/i):A>w?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=C/r,s=G/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=L/s,r=G/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k_ extends Bs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new pn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new _d(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends k_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Um extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z_ extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),ja.subVectors(this.max,na),jr.subVectors(e.a,na),Xr.subVectors(e.b,na),Yr.subVectors(e.c,na),Xi.subVectors(Xr,jr),Yi.subVectors(Yr,Xr),pr.subVectors(jr,Yr);let n=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-pr.z,pr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,pr.z,0,-pr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-pr.y,pr.x,0];return!Wl(n,jr,Xr,Yr,ja)||(n=[1,0,0,0,1,0,0,0,1],!Wl(n,jr,Xr,Yr,ja))?!1:(Xa.crossVectors(Xi,Yi),n=[Xa.x,Xa.y,Xa.z],Wl(n,jr,Xr,Yr,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new j,new j,new j,new j,new j,new j,new j,new j],Xn=new j,$a=new Pa,jr=new j,Xr=new j,Yr=new j,Xi=new j,Yi=new j,pr=new j,na=new j,ja=new j,Xa=new j,mr=new j;function Wl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),u=i.dot(mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const V_=new Pa,ia=new j,$l=new j;class xd{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):V_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const n=ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add($l)),this.expandByPoint(ia.copy(e.center).sub($l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ri=new j,jl=new j,Ya=new j,Ji=new j,Xl=new j,Ja=new j,Yl=new j;class G_{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){jl.copy(e).add(n).multiplyScalar(.5),Ya.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(jl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ya),o=Ji.dot(this.direction),l=-Ji.dot(Ya),c=Ji.lengthSq(),u=Math.abs(1-a*a);let d,h,p,v;if(u>0)if(d=a*l-o,h=a*o-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const _=1/u;d*=_,h*=_,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(jl).addScaledVector(Ya,h),p}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){Xl.subVectors(n,e),Ja.subVectors(i,e),Yl.crossVectors(Xl,Ja);let a=this.direction.dot(Yl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,e);const l=o*this.direction.dot(Ja.crossVectors(Ji,Ja));if(l<0)return null;const c=o*this.direction.dot(Xl.cross(Ji));if(c<0||l+c>a)return null;const u=-o*Ji.dot(Yl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,i,r,s,a,o,l,c,u,d,h,p,v,_,m){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,p,v,_,m)}set(e,n,i,r,s,a,o,l,c,u,d,h,p,v,_,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),a=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,v=o*u,_=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,_=c*d;n[0]=h+_*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-v,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,_=c*d;n[0]=h-_*o,n[4]=-a*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*u,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,v=o*u,_=o*d;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,_=o*c;n[0]=l*u,n[4]=_-h*d,n[8]=v*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+v,n[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,_=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+_,n[5]=a*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*u,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H_,e,q_)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ki.crossVectors(i,yn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ki.crossVectors(i,yn)),Ki.normalize(),Ka.crossVectors(yn,Ki),r[0]=Ki.x,r[4]=Ka.x,r[8]=yn.x,r[1]=Ki.y,r[5]=Ka.y,r[9]=yn.y,r[2]=Ki.z,r[6]=Ka.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],_=i[6],m=i[10],f=i[14],y=i[3],E=i[7],A=i[11],w=i[15],C=r[0],L=r[4],G=r[8],S=r[12],M=r[1],P=r[5],Y=r[9],q=r[13],Z=r[2],te=r[6],J=r[10],K=r[14],ie=r[3],T=r[7],B=r[11],F=r[15];return s[0]=a*C+o*M+l*Z+c*ie,s[4]=a*L+o*P+l*te+c*T,s[8]=a*G+o*Y+l*J+c*B,s[12]=a*S+o*q+l*K+c*F,s[1]=u*C+d*M+h*Z+p*ie,s[5]=u*L+d*P+h*te+p*T,s[9]=u*G+d*Y+h*J+p*B,s[13]=u*S+d*q+h*K+p*F,s[2]=v*C+_*M+m*Z+f*ie,s[6]=v*L+_*P+m*te+f*T,s[10]=v*G+_*Y+m*J+f*B,s[14]=v*S+_*q+m*K+f*F,s[3]=y*C+E*M+A*Z+w*ie,s[7]=y*L+E*P+A*te+w*T,s[11]=y*G+E*Y+A*J+w*B,s[15]=y*S+E*q+A*K+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],_=e[7],m=e[11],f=e[15],y=l*p-c*h,E=o*p-c*d,A=o*h-l*d,w=a*p-c*u,C=a*h-l*u,L=a*d-o*u;return n*(_*y-m*E+f*A)-i*(v*y-m*w+f*C)+r*(v*E-_*w+f*L)-s*(v*A-_*C+m*L)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],_=e[13],m=e[14],f=e[15],y=d*m*c-_*h*c+_*l*p-o*m*p-d*l*f+o*h*f,E=v*h*c-u*m*c-v*l*p+a*m*p+u*l*f-a*h*f,A=u*_*c-v*d*c+v*o*p-a*_*p-u*o*f+a*d*f,w=v*d*l-u*_*l-v*o*h+a*_*h+u*o*m-a*d*m,C=n*y+i*E+r*A+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=y*L,e[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*f-i*h*f)*L,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*f+i*l*f)*L,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*p-i*l*p)*L,e[4]=E*L,e[5]=(u*m*s-v*h*s+v*r*p-n*m*p-u*r*f+n*h*f)*L,e[6]=(v*l*s-a*m*s-v*r*c+n*m*c+a*r*f-n*l*f)*L,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*L,e[8]=A*L,e[9]=(v*d*s-u*_*s-v*i*p+n*_*p+u*i*f-n*d*f)*L,e[10]=(a*_*s-v*o*s+v*i*c-n*_*c-a*i*f+n*o*f)*L,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*p-n*o*p)*L,e[12]=w*L,e[13]=(u*_*r-v*d*r+v*i*h-n*_*h-u*i*m+n*d*m)*L,e[14]=(v*o*r-a*_*r-v*i*l+n*_*l+a*i*m-n*o*m)*L,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*h+n*o*h)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,v=s*d,_=a*u,m=a*d,f=o*d,y=l*c,E=l*u,A=l*d,w=i.x,C=i.y,L=i.z;return r[0]=(1-(_+f))*w,r[1]=(p+A)*w,r[2]=(v-E)*w,r[3]=0,r[4]=(p-A)*C,r[5]=(1-(h+f))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(v+E)*L,r[9]=(m-y)*L,r[10]=(1-(h+_))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=Jr.set(r[0],r[1],r[2]).length();const a=Jr.set(r[4],r[5],r[6]).length(),o=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Yn.copy(this);const c=1/s,u=1/a,d=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,n.setFromRotationMatrix(Yn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let v,_;if(l)v=s/(a-s),_=a*s/(a-s);else if(o===fi)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Uo)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,_;if(l)v=1/(a-s),_=a/(a-s);else if(o===fi)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===Uo)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jr=new j,Yn=new Gt,H_=new j(0,0,0),q_=new j(1,1,1),Ki=new j,Ka=new j,yn=new j,Wh=new Gt,$h=new La;class Gi{constructor(e=0,n=0,i=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Fm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W_=0;const jh=new j,Kr=new La,Li=new Gt,Za=new j,ra=new j,$_=new j,j_=new La,Xh=new j(1,0,0),Yh=new j(0,1,0),Jh=new j(0,0,1),Kh={type:"added"},X_={type:"removed"},Zr={type:"childadded",child:null},Jl={type:"childremoved",child:null};class Rn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new j,n=new Gi,i=new La,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Ye}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(Yh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,n){return jh.copy(e).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(Yh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Za.copy(e):Za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(ra,Za,this.up):Li.lookAt(Za,ra,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(Li),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kh),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(X_),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kh),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,j_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rn.DEFAULT_UP=new j(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new j,Pi=new j,Kl=new j,Di=new j,Qr=new j,es=new j,Zh=new j,Zl=new j,Ql=new j,ec=new j,tc=new Ft,nc=new Ft,ic=new Ft;class Qn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Pi.subVectors(i,n),Kl.subVectors(e,n);const a=Jn.dot(Jn),o=Jn.dot(Pi),l=Jn.dot(Kl),c=Pi.dot(Pi),u=Pi.dot(Kl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return tc.setScalar(0),nc.setScalar(0),ic.setScalar(0),tc.fromBufferAttribute(e,n),nc.fromBufferAttribute(e,i),ic.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tc,s.x),a.addScaledVector(nc,s.y),a.addScaledVector(ic,s.z),a}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Pi.subVectors(e,n),Jn.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Jn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),es.subVectors(s,i),Zl.subVectors(e,i);const l=Qr.dot(Zl),c=es.dot(Zl);if(l<=0&&c<=0)return n.copy(i);Ql.subVectors(e,r);const u=Qr.dot(Ql),d=es.dot(Ql);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Qr,a);ec.subVectors(e,s);const p=Qr.dot(ec),v=es.dot(ec);if(v>=0&&p<=v)return n.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(es,o);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Zh.subVectors(s,r),o=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(Zh,o);const f=1/(m+_+h);return a=_*f,o=h*f,n.copy(i).addScaledVector(Qr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function rc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=N_(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=rc(a,s,e+1/3),this.g=rc(a,s,e),this.b=rc(a,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=Om[e.toLowerCase()];return i!==void 0?this.setHex(i,n):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return rt.workingToColorSpace(nn.copy(this),e),Math.round(et(nn.r*255,0,255))*65536+Math.round(et(nn.g*255,0,255))*256+Math.round(et(nn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rt.workingColorSpace){return rt.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Gn){rt.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+n,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Zi),e.getHSL(Qa);const i=zl(Zi.h,Qa.h,n),r=zl(Zi.s,Qa.s,n),s=zl(Zi.l,Qa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Qe;Qe.NAMES=Om;let Y_=0;class el extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Ra(),this.name="",this.type="Material",this.blending=ds,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Gc,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){je(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vc&&(i.blendSrc=this.blendSrc),this.blendDst!==Gc&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bm extends el{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=_m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new j,eo=new dt;let J_=0;class vi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bh,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)eo.fromBufferAttribute(this,n),eo.applyMatrix3(e),this.setXY(n,eo.x,eo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bh&&(e.usage=this.usage),e}}class km extends vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class zm extends vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bi extends vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let K_=0;const Bn=new Gt,sc=new Rn,ts=new j,En=new Pa,sa=new Pa,Jt=new j;class ji extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nm(e)?zm:km)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(En.min,sa.min),En.expandByPoint(Jt),Jt.addVectors(En.max,sa.max),En.expandByPoint(Jt)):(En.expandByPoint(sa.min),En.expandByPoint(sa.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Jt.add(ts)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let G=0;G<i.count;G++)o[G]=new j,l[G]=new j;const c=new j,u=new j,d=new j,h=new dt,p=new dt,v=new dt,_=new j,m=new j;function f(G,S,M){c.fromBufferAttribute(i,G),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,G),p.fromBufferAttribute(s,S),v.fromBufferAttribute(s,M),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(P),o[G].add(_),o[S].add(_),o[M].add(_),l[G].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let G=0,S=y.length;G<S;++G){const M=y[G],P=M.start,Y=M.count;for(let q=P,Z=P+Y;q<Z;q+=3)f(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const E=new j,A=new j,w=new j,C=new j;function L(G){w.fromBufferAttribute(r,G),C.copy(w);const S=o[G];E.copy(S),E.sub(w.multiplyScalar(w.dot(S))).normalize(),A.crossVectors(C,S);const P=A.dot(l[G])<0?-1:1;a.setXYZW(G,E.x,E.y,E.z,P)}for(let G=0,S=y.length;G<S;++G){const M=y[G],P=M.start,Y=M.count;for(let q=P,Z=P+Y;q<Z;q+=3)L(e.getX(q+0)),L(e.getX(q+1)),L(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,u=new j,d=new j;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new vi(h,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ji,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qh=new Gt,gr=new G_,to=new xd,ef=new j,no=new j,io=new j,ro=new j,ac=new j,so=new j,tf=new j,ao=new j;class Si extends Rn{constructor(e=new ji,n=new Bm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){so.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ac.fromBufferAttribute(d,e),a?so.addScaledVector(ac,u):so.addScaledVector(ac.sub(n),u))}n.add(so)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(to.containsPoint(gr.origin)===!1&&(gr.intersectSphere(to,ef)===null||gr.origin.distanceToSquared(ef)>(e.far-e.near)**2))&&(Qh.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Qh),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],f=a[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=y,w=E;A<w;A+=3){const C=o.getX(A),L=o.getX(A+1),G=o.getX(A+2);r=oo(this,f,e,i,c,u,d,C,L,G),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=v,f=_;m<f;m+=3){const y=o.getX(m),E=o.getX(m+1),A=o.getX(m+2);r=oo(this,a,e,i,c,u,d,y,E,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],f=a[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=y,w=E;A<w;A+=3){const C=A,L=A+1,G=A+2;r=oo(this,f,e,i,c,u,d,C,L,G),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,f=_;m<f;m+=3){const y=m,E=m+1,A=m+2;r=oo(this,a,e,i,c,u,d,y,E,A),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Z_(t,e,n,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===lr,o),l===null)return null;ao.copy(o),ao.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ao);return c<n.near||c>n.far?null:{distance:c,point:ao.clone(),object:t}}function oo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,no),t.getVertexPosition(l,io),t.getVertexPosition(c,ro);const u=Z_(t,e,n,i,no,io,ro,tf);if(u){const d=new j;Qn.getBarycoord(tf,no,io,ro,d),r&&(u.uv=Qn.getInterpolatedAttribute(r,o,l,c,d,new dt)),s&&(u.uv1=Qn.getInterpolatedAttribute(s,o,l,c,d,new dt)),a&&(u.normal=Qn.getInterpolatedAttribute(a,o,l,c,d,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new j,materialIndex:0};Qn.getNormal(no,io,ro,h.normal),u.face=h,u.barycoord=d}return u}class Da extends ji{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bi(c,3)),this.setAttribute("normal",new Bi(u,3)),this.setAttribute("uv",new Bi(d,2));function v(_,m,f,y,E,A,w,C,L,G,S){const M=A/L,P=w/G,Y=A/2,q=w/2,Z=C/2,te=L+1,J=G+1;let K=0,ie=0;const T=new j;for(let B=0;B<J;B++){const F=B*P-q;for(let D=0;D<te;D++){const I=D*M-Y;T[_]=I*y,T[m]=F*E,T[f]=Z,c.push(T.x,T.y,T.z),T[_]=0,T[m]=0,T[f]=C>0?1:-1,u.push(T.x,T.y,T.z),d.push(D/L),d.push(1-B/G),K+=1}}for(let B=0;B<G;B++)for(let F=0;F<L;F++){const D=h+F+te*B,I=h+F+te*(B+1),z=h+(F+1)+te*(B+1),ae=h+(F+1)+te*B;l.push(D,I,ae),l.push(I,z,ae),ie+=6}o.addGroup(p,ie,S),p+=ie,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function Q_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const e1={clone:Ts,merge:dn};var t1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends el{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t1,this.fragmentShader=n1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Sd extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new j,nf=new dt,rf=new dt;class Zn extends Sd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Du*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Du*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,nf,rf),n.subVectors(rf,nf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ns=-90,is=1;class i1 extends Rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(ns,is,e,n);r.layers=this.layers,this.add(r);const s=new Zn(ns,is,e,n);s.layers=this.layers,this.add(s);const a=new Zn(ns,is,e,n);a.layers=this.layers,this.add(a);const o=new Zn(ns,is,e,n);o.layers=this.layers,this.add(o);const l=new Zn(ns,is,e,n);l.layers=this.layers,this.add(l);const c=new Zn(ns,is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Gm extends pn{constructor(e=[],n=Or,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hm extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gm(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Da(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Fi});s.uniforms.tEquirect.value=n;const a=new Si(r,s),o=n.minFilter;return n.minFilter===wr&&(n.minFilter=an),new i1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class lo extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r1={type:"move"};class oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new lo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class s1 extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class a1 extends pn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Qt,u=Qt,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=new j,o1=new j,l1=new Ye;class Er{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=lc.subVectors(i,n).cross(o1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||l1.getNormalMatrix(e),r=this.coplanarPoint(lc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new xd,c1=new dt(.5,.5),co=new j;class qm{constructor(e=new Er,n=new Er,i=new Er,r=new Er,s=new Er,a=new Er){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],p=s[7],v=s[8],_=s[9],m=s[10],f=s[11],y=s[12],E=s[13],A=s[14],w=s[15];if(r[0].setComponents(c-a,p-u,f-v,w-y).normalize(),r[1].setComponents(c+a,p+u,f+v,w+y).normalize(),r[2].setComponents(c+o,p+d,f+_,w+E).normalize(),r[3].setComponents(c-o,p-d,f-_,w-E).normalize(),i)r[4].setComponents(l,h,m,A).normalize(),r[5].setComponents(c-l,p-h,f-m,w-A).normalize();else if(r[4].setComponents(c-l,p-h,f-m,w-A).normalize(),n===fi)r[5].setComponents(c+l,p+h,f+m,w+A).normalize();else if(n===Uo)r[5].setComponents(l,h,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const n=c1.distanceTo(e.center);return vr.radius=.7071067811865476+n,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(co.x=r.normal.x>0?e.max.x:e.min.x,co.y=r.normal.y>0?e.max.y:e.min.y,co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ea extends pn{constructor(e,n,i=xi,r,s,a,o=Qt,l=Qt,c,u=Vi,d=1){if(u!==Vi&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:d};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _d(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class u1 extends Ea{constructor(e,n=xi,i=Or,r,s,a=Qt,o=Qt,l,c=Vi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wm extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ia extends ji{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,p=[],v=[],_=[],m=[];for(let f=0;f<u;f++){const y=f*h-a;for(let E=0;E<c;E++){const A=E*d-s;v.push(A,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const E=y+c*f,A=y+c*(f+1),w=y+1+c*(f+1),C=y+1+c*f;p.push(E,A,C),p.push(A,w,C)}this.setIndex(p),this.setAttribute("position",new Bi(v,3)),this.setAttribute("normal",new Bi(_,3)),this.setAttribute("uv",new Bi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class d1 extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class h1 extends el{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f1 extends el{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $m extends Sd{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class p1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function sf(t,e,n,i){const r=m1(i);switch(n){case Pm:return t*e;case Im:return t*e/r.components*r.byteLength;case fd:return t*e/r.components*r.byteLength;case ys:return t*e*2/r.components*r.byteLength;case pd:return t*e*2/r.components*r.byteLength;case Dm:return t*e*3/r.components*r.byteLength;case ei:return t*e*4/r.components*r.byteLength;case md:return t*e*4/r.components*r.byteLength;case yo:case Eo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case To:case Ao:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tu:case iu:return Math.max(t,16)*Math.max(e,8)/4;case eu:case nu:return Math.max(t,8)*Math.max(e,8)/2;case ru:case su:case ou:case lu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case au:case cu:case uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case du:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case pu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _u:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Su:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case bu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case yu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Tu:case Au:case wu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Cu:case Ru:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Lu:case Pu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function m1(t){switch(t){case Hn:case wm:return{byteLength:1,components:1};case Ma:case Cm:case zi:return{byteLength:2,components:1};case dd:case hd:return{byteLength:2,components:4};case xi:case ud:case hi:return{byteLength:4,components:1};case Rm:case Lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);function jm(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function g1(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const _=d[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var v1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_1=`#ifdef USE_ALPHAHASH
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
#endif`,x1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y1=`#ifdef USE_AOMAP
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
#endif`,E1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T1=`#ifdef USE_BATCHING
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
#endif`,A1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L1=`#ifdef USE_IRIDESCENCE
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
#endif`,P1=`#ifdef USE_BUMPMAP
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
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,z1=`#define PI 3.141592653589793
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
} // validated`,V1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G1=`vec3 transformedNormal = objectNormal;
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
#endif`,H1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j1="gl_FragColor = linearToOutputTexel( gl_FragColor );",X1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,K1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,e2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r2=`#ifdef USE_GRADIENTMAP
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
}`,s2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l2=`uniform bool receiveShadow;
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
#endif`,c2=`#ifdef USE_ENVMAP
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
#endif`,u2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p2=`PhysicalMaterial material;
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
#endif`,m2=`uniform sampler2D dfgLUT;
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
}`,g2=`
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
#endif`,v2=`#if defined( RE_IndirectDiffuse )
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
#endif`,_2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A2=`#if defined( USE_POINTS_UV )
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
#endif`,w2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D2=`#ifdef USE_MORPHTARGETS
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
#endif`,I2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k2=`#ifdef USE_NORMALMAP
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
#endif`,z2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tx=`float getShadowMask() {
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
}`,nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`#include <common>
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
}`,yx=`#if DEPTH_PACKING == 3200
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
}`,Ex=`#define DISTANCE
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
}`,Tx=`#define DISTANCE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Px=`uniform vec3 diffuse;
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
}`,Dx=`#define LAMBERT
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
}`,Ix=`#define LAMBERT
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
}`,Nx=`#define MATCAP
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
}`,Ux=`#define MATCAP
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
}`,Fx=`#define NORMAL
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
}`,Ox=`#define NORMAL
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
}`,Bx=`#define PHONG
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
}`,kx=`#define PHONG
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
}`,zx=`#define STANDARD
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
}`,Vx=`#define STANDARD
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
}`,Gx=`#define TOON
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
}`,Hx=`#define TOON
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
}`,qx=`uniform float size;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,jx=`uniform vec3 color;
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
}`,Xx=`uniform float rotation;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:v1,alphahash_pars_fragment:_1,alphamap_fragment:x1,alphamap_pars_fragment:S1,alphatest_fragment:M1,alphatest_pars_fragment:b1,aomap_fragment:y1,aomap_pars_fragment:E1,batching_pars_vertex:T1,batching_vertex:A1,begin_vertex:w1,beginnormal_vertex:C1,bsdfs:R1,iridescence_fragment:L1,bumpmap_pars_fragment:P1,clipping_planes_fragment:D1,clipping_planes_pars_fragment:I1,clipping_planes_pars_vertex:N1,clipping_planes_vertex:U1,color_fragment:F1,color_pars_fragment:O1,color_pars_vertex:B1,color_vertex:k1,common:z1,cube_uv_reflection_fragment:V1,defaultnormal_vertex:G1,displacementmap_pars_vertex:H1,displacementmap_vertex:q1,emissivemap_fragment:W1,emissivemap_pars_fragment:$1,colorspace_fragment:j1,colorspace_pars_fragment:X1,envmap_fragment:Y1,envmap_common_pars_fragment:J1,envmap_pars_fragment:K1,envmap_pars_vertex:Z1,envmap_physical_pars_fragment:c2,envmap_vertex:Q1,fog_vertex:e2,fog_pars_vertex:t2,fog_fragment:n2,fog_pars_fragment:i2,gradientmap_pars_fragment:r2,lightmap_pars_fragment:s2,lights_lambert_fragment:a2,lights_lambert_pars_fragment:o2,lights_pars_begin:l2,lights_toon_fragment:u2,lights_toon_pars_fragment:d2,lights_phong_fragment:h2,lights_phong_pars_fragment:f2,lights_physical_fragment:p2,lights_physical_pars_fragment:m2,lights_fragment_begin:g2,lights_fragment_maps:v2,lights_fragment_end:_2,logdepthbuf_fragment:x2,logdepthbuf_pars_fragment:S2,logdepthbuf_pars_vertex:M2,logdepthbuf_vertex:b2,map_fragment:y2,map_pars_fragment:E2,map_particle_fragment:T2,map_particle_pars_fragment:A2,metalnessmap_fragment:w2,metalnessmap_pars_fragment:C2,morphinstance_vertex:R2,morphcolor_vertex:L2,morphnormal_vertex:P2,morphtarget_pars_vertex:D2,morphtarget_vertex:I2,normal_fragment_begin:N2,normal_fragment_maps:U2,normal_pars_fragment:F2,normal_pars_vertex:O2,normal_vertex:B2,normalmap_pars_fragment:k2,clearcoat_normal_fragment_begin:z2,clearcoat_normal_fragment_maps:V2,clearcoat_pars_fragment:G2,iridescence_pars_fragment:H2,opaque_fragment:q2,packing:W2,premultiplied_alpha_fragment:$2,project_vertex:j2,dithering_fragment:X2,dithering_pars_fragment:Y2,roughnessmap_fragment:J2,roughnessmap_pars_fragment:K2,shadowmap_pars_fragment:Z2,shadowmap_pars_vertex:Q2,shadowmap_vertex:ex,shadowmask_pars_fragment:tx,skinbase_vertex:nx,skinning_pars_vertex:ix,skinning_vertex:rx,skinnormal_vertex:sx,specularmap_fragment:ax,specularmap_pars_fragment:ox,tonemapping_fragment:lx,tonemapping_pars_fragment:cx,transmission_fragment:ux,transmission_pars_fragment:dx,uv_pars_fragment:hx,uv_pars_vertex:fx,uv_vertex:px,worldpos_vertex:mx,background_vert:gx,background_frag:vx,backgroundCube_vert:_x,backgroundCube_frag:xx,cube_vert:Sx,cube_frag:Mx,depth_vert:bx,depth_frag:yx,distance_vert:Ex,distance_frag:Tx,equirect_vert:Ax,equirect_frag:wx,linedashed_vert:Cx,linedashed_frag:Rx,meshbasic_vert:Lx,meshbasic_frag:Px,meshlambert_vert:Dx,meshlambert_frag:Ix,meshmatcap_vert:Nx,meshmatcap_frag:Ux,meshnormal_vert:Fx,meshnormal_frag:Ox,meshphong_vert:Bx,meshphong_frag:kx,meshphysical_vert:zx,meshphysical_frag:Vx,meshtoon_vert:Gx,meshtoon_frag:Hx,points_vert:qx,points_frag:Wx,shadow_vert:$x,shadow_frag:jx,sprite_vert:Xx,sprite_frag:Yx},xe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ui={basic:{uniforms:dn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:dn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:dn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:dn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:dn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:dn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:dn([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:dn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:dn([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:dn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:dn([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:dn([xe.common,xe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:dn([xe.lights,xe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ui.physical={uniforms:dn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const uo={r:0,b:0,g:0},_r=new Gi,Jx=new Gt;function Kx(t,e,n,i,r,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function v(E){let A=E.isScene===!0?E.background:null;return A&&A.isTexture&&(A=(E.backgroundBlurriness>0?n:e).get(A)),A}function _(E){let A=!1;const w=v(E);w===null?f(o,l):w&&w.isColor&&(f(w,1),A=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,A){const w=v(A);w&&(w.isCubeTexture||w.mapping===Qo)?(u===void 0&&(u=new Si(new Da(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Ts(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_r.copy(A.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(_r)),u.material.toneMapped=rt.getTransfer(w.colorSpace)!==mt,(d!==w||h!==w.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Si(new Ia(2,2),new ni({name:"BackgroundMaterial",uniforms:Ts(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=rt.getTransfer(w.colorSpace)!==mt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,A){E.getRGB(uo,Vm(t)),i.buffers.color.setClear(uo.r,uo.g,uo.b,A,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),l=A,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:_,addToRenderList:m,dispose:y}}function Zx(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(M,P,Y,q,Z){let te=!1;const J=d(q,Y,P);s!==J&&(s=J,c(s.object)),te=p(M,q,Y,Z),te&&v(M,q,Y,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,A(M,P,Y,q),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,P,Y){const q=Y.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let te=Z[P.id];te===void 0&&(te={},Z[P.id]=te);let J=te[q];return J===void 0&&(J=h(l()),te[q]=J),J}function h(M){const P=[],Y=[],q=[];for(let Z=0;Z<n;Z++)P[Z]=0,Y[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Y,attributeDivisors:q,object:M,attributes:{},index:null}}function p(M,P,Y,q){const Z=s.attributes,te=P.attributes;let J=0;const K=Y.getAttributes();for(const ie in K)if(K[ie].location>=0){const B=Z[ie];let F=te[ie];if(F===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(F=M.instanceColor)),B===void 0||B.attribute!==F||F&&B.data!==F.data)return!0;J++}return s.attributesNum!==J||s.index!==q}function v(M,P,Y,q){const Z={},te=P.attributes;let J=0;const K=Y.getAttributes();for(const ie in K)if(K[ie].location>=0){let B=te[ie];B===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(B=M.instanceColor));const F={};F.attribute=B,B&&B.data&&(F.data=B.data),Z[ie]=F,J++}s.attributes=Z,s.attributesNum=J,s.index=q}function _(){const M=s.newAttributes;for(let P=0,Y=M.length;P<Y;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const Y=s.newAttributes,q=s.enabledAttributes,Z=s.attributeDivisors;Y[M]=1,q[M]===0&&(t.enableVertexAttribArray(M),q[M]=1),Z[M]!==P&&(t.vertexAttribDivisor(M,P),Z[M]=P)}function y(){const M=s.newAttributes,P=s.enabledAttributes;for(let Y=0,q=P.length;Y<q;Y++)P[Y]!==M[Y]&&(t.disableVertexAttribArray(Y),P[Y]=0)}function E(M,P,Y,q,Z,te,J){J===!0?t.vertexAttribIPointer(M,P,Y,Z,te):t.vertexAttribPointer(M,P,Y,q,Z,te)}function A(M,P,Y,q){_();const Z=q.attributes,te=Y.getAttributes(),J=P.defaultAttributeValues;for(const K in te){const ie=te[K];if(ie.location>=0){let T=Z[K];if(T===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(T=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(T=M.instanceColor)),T!==void 0){const B=T.normalized,F=T.itemSize,D=e.get(T);if(D===void 0)continue;const I=D.buffer,z=D.type,ae=D.bytesPerElement,k=z===t.INT||z===t.UNSIGNED_INT||T.gpuType===ud;if(T.isInterleavedBufferAttribute){const W=T.data,oe=W.stride,H=T.offset;if(W.isInstancedInterleavedBuffer){for(let ee=0;ee<ie.locationSize;ee++)f(ie.location+ee,W.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ee=0;ee<ie.locationSize;ee++)m(ie.location+ee);t.bindBuffer(t.ARRAY_BUFFER,I);for(let ee=0;ee<ie.locationSize;ee++)E(ie.location+ee,F/ie.locationSize,z,B,oe*ae,(H+F/ie.locationSize*ee)*ae,k)}else{if(T.isInstancedBufferAttribute){for(let W=0;W<ie.locationSize;W++)f(ie.location+W,T.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let W=0;W<ie.locationSize;W++)m(ie.location+W);t.bindBuffer(t.ARRAY_BUFFER,I);for(let W=0;W<ie.locationSize;W++)E(ie.location+W,F/ie.locationSize,z,B,F*ae,F/ie.locationSize*W*ae,k)}}else if(J!==void 0){const B=J[K];if(B!==void 0)switch(B.length){case 2:t.vertexAttrib2fv(ie.location,B);break;case 3:t.vertexAttrib3fv(ie.location,B);break;case 4:t.vertexAttrib4fv(ie.location,B);break;default:t.vertexAttrib1fv(ie.location,B)}}}}y()}function w(){G();for(const M in i){const P=i[M];for(const Y in P){const q=P[Y];for(const Z in q)u(q[Z].object),delete q[Z];delete P[Y]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const Y in P){const q=P[Y];for(const Z in q)u(q[Z].object),delete q[Z];delete P[Y]}delete i[M.id]}function L(M){for(const P in i){const Y=i[P];if(Y[M.id]===void 0)continue;const q=Y[M.id];for(const Z in q)u(q[Z].object),delete q[Z];delete Y[M.id]}}function G(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:G,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Qx(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*h[_];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function e3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==ei&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const G=L===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Hn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==hi&&!G)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:A,maxSamples:w,samples:C}}function t3(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Er,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,E=y*4;let A=f.clippingState||null;l.value=A,A=u(v,h,E,p);for(let w=0;w!==E;++w)A[w]=n[w];f.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const f=p+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,A=p;E!==_;++E,A+=4)a.copy(d[E]).applyMatrix4(y,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function n3(t){let e=new WeakMap;function n(a,o){return o===Jc?a.mapping=Or:o===Kc&&(a.mapping=bs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jc||o===Kc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hm(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ar=4,af=[.125,.215,.35,.446,.526,.582],Ar=20,i3=256,aa=new $m,of=new Qe;let cc=null,uc=0,dc=0,hc=!1;const r3=new j;class lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=r3}=s;cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,uc,dc),this._renderer.xr.enabled=hc,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Or||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:zi,format:ei,colorSpace:Es,depthBuffer:!1},r=cf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=s3(s)),this._blurMaterial=o3(s,e,n),this._ggxMaterial=a3(s,e,n)}return r}_compileMaterial(e){const n=new Si(new ji,e);this._renderer.compile(n,aa)}_sceneToCubeUV(e,n,i,r,s){const l=new Zn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(of),d.toneMapping=mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new Da,new Bm({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let f=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,f=!0):(m.color.copy(of),f=!0);for(let E=0;E<6;E++){const A=E%3;A===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):A===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const w=this._cubeSize;rs(r,A*w,E>2?w:0,w,w),d.setRenderTarget(r),f&&d.render(_,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Or||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;rs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,aa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:v}=this,_=this._sizeLods[i],m=3*_*(i>v-ar?i-v+ar:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,rs(s,m,f,3*_,2*_),r.setRenderTarget(s),r.render(o,aa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,rs(e,m,f,3*_,2*_),r.setRenderTarget(e),r.render(o,aa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ar-1),_=s/v,m=isFinite(s)?1+Math.floor(u*_):Ar;m>Ar&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const f=[];let y=0;for(let L=0;L<Ar;++L){const G=L/_,S=Math.exp(-G*G/2);f.push(S),L===0?y+=S:L<m&&(y+=2*S)}for(let L=0;L<f.length;L++)f[L]=f[L]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=v,h.mipInt.value=E-i;const A=this._sizeLods[r],w=3*A*(r>E-ar?r-E+ar:0),C=4*(this._cubeSize-A);rs(n,w,C,3*A,2*A),l.setRenderTarget(n),l.render(d,aa)}}function s3(t){const e=[],n=[],i=[];let r=t;const s=t-ar+1+af.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ar?l=af[a-t+ar-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,m=2,f=1,y=new Float32Array(_*v*p),E=new Float32Array(m*v*p),A=new Float32Array(f*v*p);for(let C=0;C<p;C++){const L=C%3*2/3-1,G=C>2?0:-1,S=[L,G,0,L+2/3,G,0,L+2/3,G+1,0,L,G,0,L+2/3,G+1,0,L,G+1,0];y.set(S,_*v*C),E.set(h,m*v*C);const M=[C,C,C,C,C,C];A.set(M,f*v*C)}const w=new ji;w.setAttribute("position",new vi(y,_)),w.setAttribute("uv",new vi(E,m)),w.setAttribute("faceIndex",new vi(A,f)),i.push(new Si(w,null)),r>ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function cf(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=Qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function a3(t,e,n){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:i3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function o3(t,e,n){const i=new Float32Array(Ar),r=new j(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function uf(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function df(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function tl(){return`

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
	`}function l3(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Jc||l===Kc,u=l===Or||l===bs;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new lf(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new lf(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function c3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ya("WebGLRenderer: "+i+" extension not supported."),r}}}function u3(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let E=0,A=y.length;E<A;E+=3){const w=y[E+0],C=y[E+1],L=y[E+2];h.push(w,C,C,L,L,w)}}else if(v!==void 0){const y=v.array;_=v.version;for(let E=0,A=y.length/3-1;E<A;E+=3){const w=E+0,C=E+1,L=E+2;h.push(w,C,C,L,L,w)}}else return;const m=new(Nm(h)?zm:km)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function d3(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*a,v),n.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];n.update(m,i,1)}function d(h,p,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,v);let f=0;for(let y=0;y<v;y++)f+=p[y]*_[y];n.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function h3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function f3(t,e,n){const i=new WeakMap,r=new Ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),v===!0&&(E=2),_===!0&&(E=3);let A=o.attributes.position.count*E,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*d),L=new Um(C,A,w,d);L.type=hi,L.needsUpdate=!0;const G=E*4;for(let M=0;M<d;M++){const P=m[M],Y=f[M],q=y[M],Z=A*w*4*M;for(let te=0;te<P.count;te++){const J=te*G;p===!0&&(r.fromBufferAttribute(P,te),C[Z+J+0]=r.x,C[Z+J+1]=r.y,C[Z+J+2]=r.z,C[Z+J+3]=0),v===!0&&(r.fromBufferAttribute(Y,te),C[Z+J+4]=r.x,C[Z+J+5]=r.y,C[Z+J+6]=r.z,C[Z+J+7]=0),_===!0&&(r.fromBufferAttribute(q,te),C[Z+J+8]=r.x,C[Z+J+9]=r.y,C[Z+J+10]=r.z,C[Z+J+11]=q.itemSize===4?r.w:1)}}h={count:d,texture:L,size:new dt(A,w)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function p3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const m3={[xm]:"LINEAR_TONE_MAPPING",[Sm]:"REINHARD_TONE_MAPPING",[Mm]:"CINEON_TONE_MAPPING",[bm]:"ACES_FILMIC_TONE_MAPPING",[Em]:"AGX_TONE_MAPPING",[Tm]:"NEUTRAL_TONE_MAPPING",[ym]:"CUSTOM_TONE_MAPPING"};function g3(t,e,n,i,r){const s=new gi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new gi(e,n,{type:zi,depthBuffer:!1,stencilBuffer:!1}),o=new ji;o.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Bi([0,2,0,0,2,0],2));const l=new d1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Si(o,l),u=new $m(-1,1,1,-1,0,1);let d=null,h=null,p=!1,v,_=null,m=[],f=!1;this.setSize=function(y,E){s.setSize(y,E),a.setSize(y,E);for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(y,E)}},this.setEffects=function(y){m=y,f=m.length>0&&m[0].isRenderPass===!0;const E=s.width,A=s.height;for(let w=0;w<m.length;w++){const C=m[w];C.setSize&&C.setSize(E,A)}},this.begin=function(y,E){if(p||y.toneMapping===mi&&m.length===0)return!1;if(_=E,E!==null){const A=E.width,w=E.height;(s.width!==A||s.height!==w)&&this.setSize(A,w)}return f===!1&&y.setRenderTarget(s),v=y.toneMapping,y.toneMapping=mi,!0},this.hasRenderPass=function(){return f},this.end=function(y,E){y.toneMapping=v,p=!0;let A=s,w=a;for(let C=0;C<m.length;C++){const L=m[C];if(L.enabled!==!1&&(L.render(y,w,A,E),L.needsSwap!==!1)){const G=A;A=w,w=G}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,l.defines={},rt.getTransfer(d)===mt&&(l.defines.SRGB_TRANSFER="");const C=m3[h];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(_),y.render(c,u),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Xm=new pn,Iu=new Ea(1,1),Ym=new Um,Jm=new z_,Km=new Gm,hf=[],ff=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hf[r];if(s===void 0&&(s=new Float32Array(r),hf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nl(t,e){let n=ff[e];n===void 0&&(n=new Int32Array(e),ff[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function v3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function x3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function S3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function M3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;gf.set(i),t.uniformMatrix2fv(this.addr,!1,gf),Xt(n,i)}}function b3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;mf.set(i),t.uniformMatrix3fv(this.addr,!1,mf),Xt(n,i)}}function y3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;pf.set(i),t.uniformMatrix4fv(this.addr,!1,pf),Xt(n,i)}}function E3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function T3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function w3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function C3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function R3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function L3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function P3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function D3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Iu.compareFunction=n.isReversedDepthBuffer()?vd:gd,s=Iu):s=Xm,n.setTexture2D(e||s,r)}function I3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jm,r)}function N3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Km,r)}function U3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ym,r)}function F3(t){switch(t){case 5126:return v3;case 35664:return _3;case 35665:return x3;case 35666:return S3;case 35674:return M3;case 35675:return b3;case 35676:return y3;case 5124:case 35670:return E3;case 35667:case 35671:return T3;case 35668:case 35672:return A3;case 35669:case 35673:return w3;case 5125:return C3;case 36294:return R3;case 36295:return L3;case 36296:return P3;case 35678:case 36198:case 36298:case 36306:case 35682:return D3;case 35679:case 36299:case 36307:return I3;case 35680:case 36300:case 36308:case 36293:return N3;case 36289:case 36303:case 36311:case 36292:return U3}}function O3(t,e){t.uniform1fv(this.addr,e)}function B3(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function k3(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function z3(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function V3(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function G3(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function H3(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function q3(t,e){t.uniform1iv(this.addr,e)}function W3(t,e){t.uniform2iv(this.addr,e)}function $3(t,e){t.uniform3iv(this.addr,e)}function j3(t,e){t.uniform4iv(this.addr,e)}function X3(t,e){t.uniform1uiv(this.addr,e)}function Y3(t,e){t.uniform2uiv(this.addr,e)}function J3(t,e){t.uniform3uiv(this.addr,e)}function K3(t,e){t.uniform4uiv(this.addr,e)}function Z3(t,e,n){const i=this.cache,r=e.length,s=nl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Iu:a=Xm;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Q3(t,e,n){const i=this.cache,r=e.length,s=nl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Jm,s[a])}function eS(t,e,n){const i=this.cache,r=e.length,s=nl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Km,s[a])}function tS(t,e,n){const i=this.cache,r=e.length,s=nl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Ym,s[a])}function nS(t){switch(t){case 5126:return O3;case 35664:return B3;case 35665:return k3;case 35666:return z3;case 35674:return V3;case 35675:return G3;case 35676:return H3;case 5124:case 35670:return q3;case 35667:case 35671:return W3;case 35668:case 35672:return $3;case 35669:case 35673:return j3;case 5125:return X3;case 36294:return Y3;case 36295:return J3;case 36296:return K3;case 35678:case 36198:case 36298:case 36306:case 35682:return Z3;case 35679:case 36299:case 36307:return Q3;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return tS}}class iS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=F3(n.type)}}class rS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nS(n.type)}}class sS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function vf(t,e){t.seq.push(e),t.map[e.id]=e}function aS(t,e,n){const i=t.name,r=i.length;for(fc.lastIndex=0;;){const s=fc.exec(i),a=fc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vf(n,c===void 0?new iS(o,t,e):new rS(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new sS(o),vf(n,d)),n=d}}}class wo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);aS(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function _f(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oS=37297;let lS=0;function cS(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const xf=new Ye;function uS(t){rt._getMatrix(xf,rt.workingColorSpace,t);const e=`mat3( ${xf.elements.map(n=>n.toFixed(4))} )`;switch(rt.getTransfer(t)){case No:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Sf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+cS(t.getShaderSource(e),o)}else return s}function dS(t,e){const n=uS(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const hS={[xm]:"Linear",[Sm]:"Reinhard",[Mm]:"Cineon",[bm]:"ACESFilmic",[Em]:"AgX",[Tm]:"Neutral",[ym]:"Custom"};function fS(t,e){const n=hS[e];return n===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ho=new j;function pS(){rt.getLuminanceCoefficients(ho);const t=ho.x.toFixed(4),e=ho.y.toFixed(4),n=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function gS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ha(t){return t!==""}function Mf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _S=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(t){return t.replace(_S,SS)}const xS=new Map;function SS(t,e){let n=Je[e];if(n===void 0){const i=xS.get(e);if(i!==void 0)n=Je[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nu(n)}const MS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(t){return t.replace(MS,bS)}function bS(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ef(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const yS={[bo]:"SHADOWMAP_TYPE_PCF",[da]:"SHADOWMAP_TYPE_VSM"};function ES(t){return yS[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TS={[Or]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE_UV"};function AS(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":TS[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const wS={[bs]:"ENVMAP_MODE_REFRACTION"};function CS(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":wS[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RS={[_m]:"ENVMAP_BLENDING_MULTIPLY",[S_]:"ENVMAP_BLENDING_MIX",[M_]:"ENVMAP_BLENDING_ADD"};function LS(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":RS[t.combine]||"ENVMAP_BLENDING_NONE"}function PS(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function DS(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=ES(n),c=AS(n),u=CS(n),d=LS(n),h=PS(n),p=mS(n),v=gS(s),_=r.createProgram();let m,f,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ha).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ha).join(`
`),f.length>0&&(f+=`
`)):(m=[Ef(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),f=[Ef(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?Je.tonemapping_pars_fragment:"",n.toneMapping!==mi?fS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,dS("linearToOutputTexel",n.outputColorSpace),pS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ha).join(`
`)),a=Nu(a),a=Mf(a,n),a=bf(a,n),o=Nu(o),o=Mf(o,n),o=bf(o,n),a=yf(a),o=yf(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=y+m+a,A=y+f+o,w=_f(r,r.VERTEX_SHADER,E),C=_f(r,r.FRAGMENT_SHADER,A);r.attachShader(_,w),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function L(P){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(_)||"",q=r.getShaderInfoLog(w)||"",Z=r.getShaderInfoLog(C)||"",te=Y.trim(),J=q.trim(),K=Z.trim();let ie=!0,T=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ie=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,w,C);else{const B=Sf(r,w,"vertex"),F=Sf(r,C,"fragment");ot("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+te+`
`+B+`
`+F)}else te!==""?je("WebGLProgram: Program Info Log:",te):(J===""||K==="")&&(T=!1);T&&(P.diagnostics={runnable:ie,programLog:te,vertexShader:{log:J,prefix:m},fragmentShader:{log:K,prefix:f}})}r.deleteShader(w),r.deleteShader(C),G=new wo(r,_),S=vS(r,_)}let G;this.getUniforms=function(){return G===void 0&&L(this),G};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,oS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}let IS=0;class NS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new US(e),n.set(e,i)),i}}class US{constructor(e){this.id=IS++,this.code=e,this.usedTimes=0}}function FS(t,e,n,i,r,s,a){const o=new Fm,l=new NS,c=new Set,u=[],d=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,Y,q){const Z=Y.fog,te=q.geometry,J=S.isMeshStandardMaterial?Y.environment:null,K=(S.isMeshStandardMaterial?n:e).get(S.envMap||J),ie=K&&K.mapping===Qo?K.image.height:null,T=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&je("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const B=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,F=B!==void 0?B.length:0;let D=0;te.morphAttributes.position!==void 0&&(D=1),te.morphAttributes.normal!==void 0&&(D=2),te.morphAttributes.color!==void 0&&(D=3);let I,z,ae,k;if(T){const ft=ui[T];I=ft.vertexShader,z=ft.fragmentShader}else I=S.vertexShader,z=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),k=l.getFragmentShaderID(S);const W=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),H=q.isInstancedMesh===!0,ee=q.isBatchedMesh===!0,he=!!S.map,we=!!S.matcap,ve=!!K,ye=!!S.aoMap,He=!!S.lightMap,Be=!!S.bumpMap,Mt=!!S.normalMap,R=!!S.displacementMap,Tt=!!S.emissiveMap,ht=!!S.metalnessMap,bt=!!S.roughnessMap,Le=S.anisotropy>0,b=S.clearcoat>0,g=S.dispersion>0,U=S.iridescence>0,ne=S.sheen>0,se=S.transmission>0,Q=Le&&!!S.anisotropyMap,De=b&&!!S.clearcoatMap,pe=b&&!!S.clearcoatNormalMap,Re=b&&!!S.clearcoatRoughnessMap,We=U&&!!S.iridescenceMap,ce=U&&!!S.iridescenceThicknessMap,ge=ne&&!!S.sheenColorMap,Ce=ne&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,me=!!S.specularColorMap,Ke=!!S.specularIntensityMap,N=se&&!!S.transmissionMap,Me=se&&!!S.thicknessMap,de=!!S.gradientMap,be=!!S.alphaMap,le=S.alphaTest>0,re=!!S.alphaHash,fe=!!S.extensions;let $e=mi;S.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&($e=t.toneMapping);const yt={shaderID:T,shaderType:S.type,shaderName:S.name,vertexShader:I,fragmentShader:z,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:k,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ee,batchingColor:ee&&q._colorsTexture!==null,instancing:H,instancingColor:H&&q.instanceColor!==null,instancingMorph:H&&q.morphTexture!==null,outputColorSpace:W===null?t.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Es,alphaToCoverage:!!S.alphaToCoverage,map:he,matcap:we,envMap:ve,envMapMode:ve&&K.mapping,envMapCubeUVHeight:ie,aoMap:ye,lightMap:He,bumpMap:Be,normalMap:Mt,displacementMap:R,emissiveMap:Tt,normalMapObjectSpace:Mt&&S.normalMapType===T_,normalMapTangentSpace:Mt&&S.normalMapType===E_,metalnessMap:ht,roughnessMap:bt,anisotropy:Le,anisotropyMap:Q,clearcoat:b,clearcoatMap:De,clearcoatNormalMap:pe,clearcoatRoughnessMap:Re,dispersion:g,iridescence:U,iridescenceMap:We,iridescenceThicknessMap:ce,sheen:ne,sheenColorMap:ge,sheenRoughnessMap:Ce,specularMap:Pe,specularColorMap:me,specularIntensityMap:Ke,transmission:se,transmissionMap:N,thicknessMap:Me,gradientMap:de,opaque:S.transparent===!1&&S.blending===ds&&S.alphaToCoverage===!1,alphaMap:be,alphaTest:le,alphaHash:re,combine:S.combine,mapUv:he&&_(S.map.channel),aoMapUv:ye&&_(S.aoMap.channel),lightMapUv:He&&_(S.lightMap.channel),bumpMapUv:Be&&_(S.bumpMap.channel),normalMapUv:Mt&&_(S.normalMap.channel),displacementMapUv:R&&_(S.displacementMap.channel),emissiveMapUv:Tt&&_(S.emissiveMap.channel),metalnessMapUv:ht&&_(S.metalnessMap.channel),roughnessMapUv:bt&&_(S.roughnessMap.channel),anisotropyMapUv:Q&&_(S.anisotropyMap.channel),clearcoatMapUv:De&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(S.sheenRoughnessMap.channel),specularMapUv:Pe&&_(S.specularMap.channel),specularColorMapUv:me&&_(S.specularColorMap.channel),specularIntensityMapUv:Ke&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:Me&&_(S.thicknessMap.channel),alphaMapUv:be&&_(S.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Mt||Le),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!te.attributes.uv&&(he||be),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:q.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:D,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&rt.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:Tt&&S.emissiveMap.isVideoTexture===!0&&rt.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ii,flipSided:S.side===xn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:fe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&S.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(M,S),E(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function A(S){const M=v[S.type];let P;if(M){const Y=ui[M];P=e1.clone(Y.uniforms)}else P=S.uniforms;return P}function w(S,M){let P=d.get(M);return P!==void 0?++P.usedTimes:(P=new DS(t,M,S,s),u.push(P),d.set(M,P)),P}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),d.delete(S.cacheKey),S.destroy()}}function L(S){l.remove(S)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:w,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:G}}function OS(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function BS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Af(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,p,v,_,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,h,p,v,_,m){const f=a(d,h,p,v,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,v,_,m){const f=a(d,h,p,v,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||BS),i.length>1&&i.sort(h||Tf),r.length>1&&r.sort(h||Tf)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function kS(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Af,t.set(i,[a])):r>=s.length?(a=new Af,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function zS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Qe};break;case"SpotLight":n={position:new j,direction:new j,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function VS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let GS=0;function HS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qS(t){const e=new zS,n=VS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Gt,a=new Gt;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,v=0,_=0,m=0,f=0,y=0,E=0,A=0,w=0,C=0,L=0;c.sort(HS);for(let S=0,M=c.length;S<M;S++){const P=c[S],Y=P.color,q=P.intensity,Z=P.distance;let te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ys?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=Y.r*q,d+=Y.g*q,h+=Y.b*q;else if(P.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(P.sh.coefficients[J],q);L++}else if(P.isDirectionalLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,ie=n.get(P);ie.shadowIntensity=K.intensity,ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.directionalShadow[p]=ie,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=P.shadow.matrix,y++}i.directional[p]=J,p++}else if(P.isSpotLight){const J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(Y).multiplyScalar(q),J.distance=Z,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,i.spot[_]=J;const K=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,K.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[_]=K.matrix,P.castShadow){const ie=n.get(P);ie.shadowIntensity=K.intensity,ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,i.spotShadow[_]=ie,i.spotShadowMap[_]=te,A++}_++}else if(P.isRectAreaLight){const J=e.get(P);J.color.copy(Y).multiplyScalar(q),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=J,m++}else if(P.isPointLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){const K=P.shadow,ie=n.get(P);ie.shadowIntensity=K.intensity,ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,ie.shadowCameraNear=K.camera.near,ie.shadowCameraFar=K.camera.far,i.pointShadow[v]=ie,i.pointShadowMap[v]=te,i.pointShadowMatrix[v]=P.shadow.matrix,E++}i.point[v]=J,v++}else if(P.isHemisphereLight){const J=e.get(P);J.skyColor.copy(P.color).multiplyScalar(q),J.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[f]=J,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const G=i.hash;(G.directionalLength!==p||G.pointLength!==v||G.spotLength!==_||G.rectAreaLength!==m||G.hemiLength!==f||G.numDirectionalShadows!==y||G.numPointShadows!==E||G.numSpotShadows!==A||G.numSpotMaps!==w||G.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,G.directionalLength=p,G.pointLength=v,G.spotLength=_,G.rectAreaLength=m,G.hemiLength=f,G.numDirectionalShadows=y,G.numPointShadows=E,G.numSpotShadows=A,G.numSpotMaps=w,G.numLightProbes=L,i.version=GS++)}function l(c,u){let d=0,h=0,p=0,v=0,_=0;const m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const E=c[f];if(E.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),d++}else if(E.isSpotLight){const A=i.spot[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function wf(t){const e=new qS(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function WS(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new wf(t),e.set(r,[o])):s>=a.length?(o=new wf(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const $S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jS=`uniform sampler2D shadow_pass;
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
}`,XS=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],YS=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Cf=new Gt,oa=new j,pc=new j;function JS(t,e,n){let i=new qm;const r=new dt,s=new dt,a=new Ft,o=new h1,l=new f1,c={},u=n.maxTextureSize,d={[lr]:xn,[xn]:lr,[Ii]:Ii},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:$S,fragmentShader:jS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new ji;v.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Si(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let f=this.type;this.render=function(C,L,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===t_&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=bo);const S=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(Fi),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=f!==this.type;q&&L.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(te=>te.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,te=C.length;Z<te;Z++){const J=C[Z],K=J.shadow;if(K===void 0){je("WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const ie=K.getFrameExtents();if(r.multiply(ie),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,K.mapSize.y=s.y)),K.map===null||q===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===da){if(J.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new gi(r.x,r.y,{format:ys,type:zi,minFilter:an,magFilter:an,generateMipmaps:!1}),K.map.texture.name=J.name+".shadowMap",K.map.depthTexture=new Ea(r.x,r.y,hi),K.map.depthTexture.name=J.name+".shadowMapDepth",K.map.depthTexture.format=Vi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Qt,K.map.depthTexture.magFilter=Qt}else{J.isPointLight?(K.map=new Hm(r.x),K.map.depthTexture=new u1(r.x,xi)):(K.map=new gi(r.x,r.y),K.map.depthTexture=new Ea(r.x,r.y,xi)),K.map.depthTexture.name=J.name+".shadowMap",K.map.depthTexture.format=Vi;const B=t.state.buffers.depth.getReversed();this.type===bo?(K.map.depthTexture.compareFunction=B?vd:gd,K.map.depthTexture.minFilter=an,K.map.depthTexture.magFilter=an):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Qt,K.map.depthTexture.magFilter=Qt)}K.camera.updateProjectionMatrix()}const T=K.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<T;B++){if(K.map.isWebGLCubeRenderTarget)t.setRenderTarget(K.map,B),t.clear();else{B===0&&(t.setRenderTarget(K.map),t.clear());const F=K.getViewport(B);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),Y.viewport(a)}if(J.isPointLight){const F=K.camera,D=K.matrix,I=J.distance||F.far;I!==F.far&&(F.far=I,F.updateProjectionMatrix()),oa.setFromMatrixPosition(J.matrixWorld),F.position.copy(oa),pc.copy(F.position),pc.add(XS[B]),F.up.copy(YS[B]),F.lookAt(pc),F.updateMatrixWorld(),D.makeTranslation(-oa.x,-oa.y,-oa.z),Cf.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Cf,F.coordinateSystem,F.reversedDepth)}else K.updateMatrices(J);i=K.getFrustum(),A(L,G,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===da&&y(K,G),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,P)};function y(C,L){const G=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gi(r.x,r.y,{format:ys,type:zi})),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(L,null,G,h,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(L,null,G,p,_,null)}function E(C,L,G,S){let M=null;const P=G.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=G.isPointLight===!0?l:o,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const Y=M.uuid,q=L.uuid;let Z=c[Y];Z===void 0&&(Z={},c[Y]=Z);let te=Z[q];te===void 0&&(te=M.clone(),Z[q]=te,L.addEventListener("dispose",w)),M=te}if(M.visible=L.visible,M.wireframe=L.wireframe,S===da?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,G.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=t.properties.get(M);Y.light=G}return M}function A(C,L,G,S,M){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===da)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld);const q=e.update(C),Z=C.material;if(Array.isArray(Z)){const te=q.groups;for(let J=0,K=te.length;J<K;J++){const ie=te[J],T=Z[ie.materialIndex];if(T&&T.visible){const B=E(C,T,S,M);C.onBeforeShadow(t,C,L,G,q,B,ie),t.renderBufferDirect(G,null,q,B,C,ie),C.onAfterShadow(t,C,L,G,q,B,ie)}}}else if(Z.visible){const te=E(C,Z,S,M);C.onBeforeShadow(t,C,L,G,q,te,null),t.renderBufferDirect(G,null,q,te,C,null),C.onAfterShadow(t,C,L,G,q,te,null)}}const Y=C.children;for(let q=0,Z=Y.length;q<Z;q++)A(Y[q],L,G,S,M)}function w(C){C.target.removeEventListener("dispose",w);for(const G in c){const S=c[G],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const KS={[Hc]:qc,[Wc]:Xc,[$c]:Yc,[Ms]:jc,[qc]:Hc,[Xc]:Wc,[Yc]:$c,[jc]:Ms};function ZS(t,e){function n(){let N=!1;const Me=new Ft;let de=null;const be=new Ft(0,0,0,0);return{setMask:function(le){de!==le&&!N&&(t.colorMask(le,le,le,le),de=le)},setLocked:function(le){N=le},setClear:function(le,re,fe,$e,yt){yt===!0&&(le*=$e,re*=$e,fe*=$e),Me.set(le,re,fe,$e),be.equals(Me)===!1&&(t.clearColor(le,re,fe,$e),be.copy(Me))},reset:function(){N=!1,de=null,be.set(-1,0,0,0)}}}function i(){let N=!1,Me=!1,de=null,be=null,le=null;return{setReversed:function(re){if(Me!==re){const fe=e.get("EXT_clip_control");re?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),Me=re;const $e=le;le=null,this.setClear($e)}},getReversed:function(){return Me},setTest:function(re){re?W(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(re){de!==re&&!N&&(t.depthMask(re),de=re)},setFunc:function(re){if(Me&&(re=KS[re]),be!==re){switch(re){case Hc:t.depthFunc(t.NEVER);break;case qc:t.depthFunc(t.ALWAYS);break;case Wc:t.depthFunc(t.LESS);break;case Ms:t.depthFunc(t.LEQUAL);break;case $c:t.depthFunc(t.EQUAL);break;case jc:t.depthFunc(t.GEQUAL);break;case Xc:t.depthFunc(t.GREATER);break;case Yc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}be=re}},setLocked:function(re){N=re},setClear:function(re){le!==re&&(Me&&(re=1-re),t.clearDepth(re),le=re)},reset:function(){N=!1,de=null,be=null,le=null,Me=!1}}}function r(){let N=!1,Me=null,de=null,be=null,le=null,re=null,fe=null,$e=null,yt=null;return{setTest:function(ft){N||(ft?W(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(ft){Me!==ft&&!N&&(t.stencilMask(ft),Me=ft)},setFunc:function(ft,ai,wi){(de!==ft||be!==ai||le!==wi)&&(t.stencilFunc(ft,ai,wi),de=ft,be=ai,le=wi)},setOp:function(ft,ai,wi){(re!==ft||fe!==ai||$e!==wi)&&(t.stencilOp(ft,ai,wi),re=ft,fe=ai,$e=wi)},setLocked:function(ft){N=ft},setClear:function(ft){yt!==ft&&(t.clearStencil(ft),yt=ft)},reset:function(){N=!1,Me=null,de=null,be=null,le=null,re=null,fe=null,$e=null,yt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],v=null,_=!1,m=null,f=null,y=null,E=null,A=null,w=null,C=null,L=new Qe(0,0,0),G=0,S=!1,M=null,P=null,Y=null,q=null,Z=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const ie=t.getParameter(t.VERSION);ie.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ie)[1]),J=K>=1):ie.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),J=K>=2);let T=null,B={};const F=t.getParameter(t.SCISSOR_BOX),D=t.getParameter(t.VIEWPORT),I=new Ft().fromArray(F),z=new Ft().fromArray(D);function ae(N,Me,de,be){const le=new Uint8Array(4),re=t.createTexture();t.bindTexture(N,re),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let fe=0;fe<de;fe++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(Me,0,t.RGBA,1,1,be,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(Me+fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return re}const k={};k[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),k[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),k[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(t.DEPTH_TEST),a.setFunc(Ms),Be(!1),Mt(Ih),W(t.CULL_FACE),ye(Fi);function W(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function oe(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function H(N,Me){return d[N]!==Me?(t.bindFramebuffer(N,Me),d[N]=Me,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Me),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Me),!0):!1}function ee(N,Me){let de=p,be=!1;if(N){de=h.get(Me),de===void 0&&(de=[],h.set(Me,de));const le=N.textures;if(de.length!==le.length||de[0]!==t.COLOR_ATTACHMENT0){for(let re=0,fe=le.length;re<fe;re++)de[re]=t.COLOR_ATTACHMENT0+re;de.length=le.length,be=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,be=!0);be&&t.drawBuffers(de)}function he(N){return v!==N?(t.useProgram(N),v=N,!0):!1}const we={[Tr]:t.FUNC_ADD,[i_]:t.FUNC_SUBTRACT,[r_]:t.FUNC_REVERSE_SUBTRACT};we[s_]=t.MIN,we[a_]=t.MAX;const ve={[o_]:t.ZERO,[l_]:t.ONE,[c_]:t.SRC_COLOR,[Vc]:t.SRC_ALPHA,[m_]:t.SRC_ALPHA_SATURATE,[f_]:t.DST_COLOR,[d_]:t.DST_ALPHA,[u_]:t.ONE_MINUS_SRC_COLOR,[Gc]:t.ONE_MINUS_SRC_ALPHA,[p_]:t.ONE_MINUS_DST_COLOR,[h_]:t.ONE_MINUS_DST_ALPHA,[g_]:t.CONSTANT_COLOR,[v_]:t.ONE_MINUS_CONSTANT_COLOR,[__]:t.CONSTANT_ALPHA,[x_]:t.ONE_MINUS_CONSTANT_ALPHA};function ye(N,Me,de,be,le,re,fe,$e,yt,ft){if(N===Fi){_===!0&&(oe(t.BLEND),_=!1);return}if(_===!1&&(W(t.BLEND),_=!0),N!==n_){if(N!==m||ft!==S){if((f!==Tr||A!==Tr)&&(t.blendEquation(t.FUNC_ADD),f=Tr,A=Tr),ft)switch(N){case ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nh:t.blendFunc(t.ONE,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ot("WebGLState: Invalid blending: ",N);break}else switch(N){case ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Uh:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",N);break}y=null,E=null,w=null,C=null,L.set(0,0,0),G=0,m=N,S=ft}return}le=le||Me,re=re||de,fe=fe||be,(Me!==f||le!==A)&&(t.blendEquationSeparate(we[Me],we[le]),f=Me,A=le),(de!==y||be!==E||re!==w||fe!==C)&&(t.blendFuncSeparate(ve[de],ve[be],ve[re],ve[fe]),y=de,E=be,w=re,C=fe),($e.equals(L)===!1||yt!==G)&&(t.blendColor($e.r,$e.g,$e.b,yt),L.copy($e),G=yt),m=N,S=!1}function He(N,Me){N.side===Ii?oe(t.CULL_FACE):W(t.CULL_FACE);let de=N.side===xn;Me&&(de=!de),Be(de),N.blending===ds&&N.transparent===!1?ye(Fi):ye(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const be=N.stencilWrite;o.setTest(be),be&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Tt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?W(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(N){M!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),M=N)}function Mt(N){N!==Qv?(W(t.CULL_FACE),N!==P&&(N===Ih?t.cullFace(t.BACK):N===e_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),P=N}function R(N){N!==Y&&(J&&t.lineWidth(N),Y=N)}function Tt(N,Me,de){N?(W(t.POLYGON_OFFSET_FILL),(q!==Me||Z!==de)&&(t.polygonOffset(Me,de),q=Me,Z=de)):oe(t.POLYGON_OFFSET_FILL)}function ht(N){N?W(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function bt(N){N===void 0&&(N=t.TEXTURE0+te-1),T!==N&&(t.activeTexture(N),T=N)}function Le(N,Me,de){de===void 0&&(T===null?de=t.TEXTURE0+te-1:de=T);let be=B[de];be===void 0&&(be={type:void 0,texture:void 0},B[de]=be),(be.type!==N||be.texture!==Me)&&(T!==de&&(t.activeTexture(de),T=de),t.bindTexture(N,Me||k[N]),be.type=N,be.texture=Me)}function b(){const N=B[T];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function ne(){try{t.texSubImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function se(){try{t.texSubImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function pe(){try{t.texStorage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function Re(){try{t.texStorage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function We(){try{t.texImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function ce(){try{t.texImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function ge(N){I.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),I.copy(N))}function Ce(N){z.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),z.copy(N))}function Pe(N,Me){let de=c.get(Me);de===void 0&&(de=new WeakMap,c.set(Me,de));let be=de.get(N);be===void 0&&(be=t.getUniformBlockIndex(Me,N.name),de.set(N,be))}function me(N,Me){const be=c.get(Me).get(N);l.get(Me)!==be&&(t.uniformBlockBinding(Me,be,N.__bindingPointIndex),l.set(Me,be))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},T=null,B={},d={},h=new WeakMap,p=[],v=null,_=!1,m=null,f=null,y=null,E=null,A=null,w=null,C=null,L=new Qe(0,0,0),G=0,S=!1,M=null,P=null,Y=null,q=null,Z=null,I.set(0,0,t.canvas.width,t.canvas.height),z.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:W,disable:oe,bindFramebuffer:H,drawBuffers:ee,useProgram:he,setBlending:ye,setMaterial:He,setFlipSided:Be,setCullFace:Mt,setLineWidth:R,setPolygonOffset:Tt,setScissorTest:ht,activeTexture:bt,bindTexture:Le,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:We,texImage3D:ce,updateUBOMapping:Pe,uniformBlockBinding:me,texStorage2D:pe,texStorage3D:Re,texSubImage2D:ne,texSubImage3D:se,compressedTexSubImage2D:Q,compressedTexSubImage3D:De,scissor:ge,viewport:Ce,reset:Ke}}function QS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,g){return p?new OffscreenCanvas(b,g):Fo("canvas")}function _(b,g,U){let ne=1;const se=Le(b);if((se.width>U||se.height>U)&&(ne=U/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor(ne*se.width),De=Math.floor(ne*se.height);d===void 0&&(d=v(Q,De));const pe=g?v(Q,De):d;return pe.width=Q,pe.height=De,pe.getContext("2d").drawImage(b,0,0,Q,De),je("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+De+")."),pe}else return"data"in b&&je("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){t.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(b,g,U,ne,se=!1){if(b!==null){if(t[b]!==void 0)return t[b];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=g;if(g===t.RED&&(U===t.FLOAT&&(Q=t.R32F),U===t.HALF_FLOAT&&(Q=t.R16F),U===t.UNSIGNED_BYTE&&(Q=t.R8)),g===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Q=t.R8UI),U===t.UNSIGNED_SHORT&&(Q=t.R16UI),U===t.UNSIGNED_INT&&(Q=t.R32UI),U===t.BYTE&&(Q=t.R8I),U===t.SHORT&&(Q=t.R16I),U===t.INT&&(Q=t.R32I)),g===t.RG&&(U===t.FLOAT&&(Q=t.RG32F),U===t.HALF_FLOAT&&(Q=t.RG16F),U===t.UNSIGNED_BYTE&&(Q=t.RG8)),g===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Q=t.RG8UI),U===t.UNSIGNED_SHORT&&(Q=t.RG16UI),U===t.UNSIGNED_INT&&(Q=t.RG32UI),U===t.BYTE&&(Q=t.RG8I),U===t.SHORT&&(Q=t.RG16I),U===t.INT&&(Q=t.RG32I)),g===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),U===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),U===t.UNSIGNED_INT&&(Q=t.RGB32UI),U===t.BYTE&&(Q=t.RGB8I),U===t.SHORT&&(Q=t.RGB16I),U===t.INT&&(Q=t.RGB32I)),g===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),U===t.UNSIGNED_INT&&(Q=t.RGBA32UI),U===t.BYTE&&(Q=t.RGBA8I),U===t.SHORT&&(Q=t.RGBA16I),U===t.INT&&(Q=t.RGBA32I)),g===t.RGB&&(U===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),g===t.RGBA){const De=se?No:rt.getTransfer(ne);U===t.FLOAT&&(Q=t.RGBA32F),U===t.HALF_FLOAT&&(Q=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Q=De===mt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function A(b,g){let U;return b?g===null||g===xi||g===ba?U=t.DEPTH24_STENCIL8:g===hi?U=t.DEPTH32F_STENCIL8:g===Ma&&(U=t.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===xi||g===ba?U=t.DEPTH_COMPONENT24:g===hi?U=t.DEPTH_COMPONENT32F:g===Ma&&(U=t.DEPTH_COMPONENT16),U}function w(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qt&&b.minFilter!==an?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function C(b){const g=b.target;g.removeEventListener("dispose",C),G(g),g.isVideoTexture&&u.delete(g)}function L(b){const g=b.target;g.removeEventListener("dispose",L),M(g)}function G(b){const g=i.get(b);if(g.__webglInit===void 0)return;const U=b.source,ne=h.get(U);if(ne){const se=ne[g.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(b),Object.keys(ne).length===0&&h.delete(U)}i.remove(b)}function S(b){const g=i.get(b);t.deleteTexture(g.__webglTexture);const U=b.source,ne=h.get(U);delete ne[g.__cacheKey],a.memory.textures--}function M(b){const g=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(g.__webglFramebuffer[ne]))for(let se=0;se<g.__webglFramebuffer[ne].length;se++)t.deleteFramebuffer(g.__webglFramebuffer[ne][se]);else t.deleteFramebuffer(g.__webglFramebuffer[ne]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[ne])}else{if(Array.isArray(g.__webglFramebuffer))for(let ne=0;ne<g.__webglFramebuffer.length;ne++)t.deleteFramebuffer(g.__webglFramebuffer[ne]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let ne=0;ne<g.__webglColorRenderbuffer.length;ne++)g.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[ne]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=b.textures;for(let ne=0,se=U.length;ne<se;ne++){const Q=i.get(U[ne]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(U[ne])}i.remove(b)}let P=0;function Y(){P=0}function q(){const b=P;return b>=r.maxTextures&&je("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),P+=1,b}function Z(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function te(b,g){const U=i.get(b);if(b.isVideoTexture&&ht(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){const ne=b.image;if(ne===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{k(U,b,g);return}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+g)}function J(b,g){const U=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){k(U,b,g);return}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+g)}function K(b,g){const U=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){k(U,b,g);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+g)}function ie(b,g){const U=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&U.__version!==b.version){W(U,b,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+g)}const T={[Zc]:t.REPEAT,[Ui]:t.CLAMP_TO_EDGE,[Qc]:t.MIRRORED_REPEAT},B={[Qt]:t.NEAREST,[b_]:t.NEAREST_MIPMAP_NEAREST,[Wa]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[Bl]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},F={[A_]:t.NEVER,[P_]:t.ALWAYS,[w_]:t.LESS,[gd]:t.LEQUAL,[C_]:t.EQUAL,[vd]:t.GEQUAL,[R_]:t.GREATER,[L_]:t.NOTEQUAL};function D(b,g){if(g.type===hi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===an||g.magFilter===Bl||g.magFilter===Wa||g.magFilter===wr||g.minFilter===an||g.minFilter===Bl||g.minFilter===Wa||g.minFilter===wr)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,T[g.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,T[g.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,T[g.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,B[g.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,B[g.minFilter]),g.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,F[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Qt||g.minFilter!==Wa&&g.minFilter!==wr||g.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function I(b,g){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",C));const ne=g.source;let se=h.get(ne);se===void 0&&(se={},h.set(ne,se));const Q=Z(g);if(Q!==b.__cacheKey){se[Q]===void 0&&(se[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),se[Q].usedTimes++;const De=se[b.__cacheKey];De!==void 0&&(se[b.__cacheKey].usedTimes--,De.usedTimes===0&&S(g)),b.__cacheKey=Q,b.__webglTexture=se[Q].texture}return U}function z(b,g,U){return Math.floor(Math.floor(b/U)/g)}function ae(b,g,U,ne){const Q=b.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,U,ne,g.data);else{Q.sort((ce,ge)=>ce.start-ge.start);let De=0;for(let ce=1;ce<Q.length;ce++){const ge=Q[De],Ce=Q[ce],Pe=ge.start+ge.count,me=z(Ce.start,g.width,4),Ke=z(ge.start,g.width,4);Ce.start<=Pe+1&&me===Ke&&z(Ce.start+Ce.count-1,g.width,4)===me?ge.count=Math.max(ge.count,Ce.start+Ce.count-ge.start):(++De,Q[De]=Ce)}Q.length=De+1;const pe=t.getParameter(t.UNPACK_ROW_LENGTH),Re=t.getParameter(t.UNPACK_SKIP_PIXELS),We=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ce=0,ge=Q.length;ce<ge;ce++){const Ce=Q[ce],Pe=Math.floor(Ce.start/4),me=Math.ceil(Ce.count/4),Ke=Pe%g.width,N=Math.floor(Pe/g.width),Me=me,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Ke,N,Me,de,U,ne,g.data)}b.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,pe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(t.UNPACK_SKIP_ROWS,We)}}function k(b,g,U){let ne=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ne=t.TEXTURE_3D);const se=I(b,g),Q=g.source;n.bindTexture(ne,b.__webglTexture,t.TEXTURE0+U);const De=i.get(Q);if(Q.version!==De.__version||se===!0){n.activeTexture(t.TEXTURE0+U);const pe=rt.getPrimaries(rt.workingColorSpace),Re=g.colorSpace===rr?null:rt.getPrimaries(g.colorSpace),We=g.colorSpace===rr||pe===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ce=_(g.image,!1,r.maxTextureSize);ce=bt(g,ce);const ge=s.convert(g.format,g.colorSpace),Ce=s.convert(g.type);let Pe=E(g.internalFormat,ge,Ce,g.colorSpace,g.isVideoTexture);D(ne,g);let me;const Ke=g.mipmaps,N=g.isVideoTexture!==!0,Me=De.__version===void 0||se===!0,de=Q.dataReady,be=w(g,ce);if(g.isDepthTexture)Pe=A(g.format===Cr,g.type),Me&&(N?n.texStorage2D(t.TEXTURE_2D,1,Pe,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ce.width,ce.height,0,ge,Ce,null));else if(g.isDataTexture)if(Ke.length>0){N&&Me&&n.texStorage2D(t.TEXTURE_2D,be,Pe,Ke[0].width,Ke[0].height);for(let le=0,re=Ke.length;le<re;le++)me=Ke[le],N?de&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,me.width,me.height,ge,Ce,me.data):n.texImage2D(t.TEXTURE_2D,le,Pe,me.width,me.height,0,ge,Ce,me.data);g.generateMipmaps=!1}else N?(Me&&n.texStorage2D(t.TEXTURE_2D,be,Pe,ce.width,ce.height),de&&ae(g,ce,ge,Ce)):n.texImage2D(t.TEXTURE_2D,0,Pe,ce.width,ce.height,0,ge,Ce,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){N&&Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Pe,Ke[0].width,Ke[0].height,ce.depth);for(let le=0,re=Ke.length;le<re;le++)if(me=Ke[le],g.format!==ei)if(ge!==null)if(N){if(de)if(g.layerUpdates.size>0){const fe=sf(me.width,me.height,g.format,g.type);for(const $e of g.layerUpdates){const yt=me.data.subarray($e*fe/me.data.BYTES_PER_ELEMENT,($e+1)*fe/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,$e,me.width,me.height,1,ge,yt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,me.width,me.height,ce.depth,ge,me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,Pe,me.width,me.height,ce.depth,0,me.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,me.width,me.height,ce.depth,ge,Ce,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,Pe,me.width,me.height,ce.depth,0,ge,Ce,me.data)}else{N&&Me&&n.texStorage2D(t.TEXTURE_2D,be,Pe,Ke[0].width,Ke[0].height);for(let le=0,re=Ke.length;le<re;le++)me=Ke[le],g.format!==ei?ge!==null?N?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,me.width,me.height,ge,me.data):n.compressedTexImage2D(t.TEXTURE_2D,le,Pe,me.width,me.height,0,me.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?de&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,me.width,me.height,ge,Ce,me.data):n.texImage2D(t.TEXTURE_2D,le,Pe,me.width,me.height,0,ge,Ce,me.data)}else if(g.isDataArrayTexture)if(N){if(Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Pe,ce.width,ce.height,ce.depth),de)if(g.layerUpdates.size>0){const le=sf(ce.width,ce.height,g.format,g.type);for(const re of g.layerUpdates){const fe=ce.data.subarray(re*le/ce.data.BYTES_PER_ELEMENT,(re+1)*le/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,ce.width,ce.height,1,ge,Ce,fe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ge,Ce,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ce.width,ce.height,ce.depth,0,ge,Ce,ce.data);else if(g.isData3DTexture)N?(Me&&n.texStorage3D(t.TEXTURE_3D,be,Pe,ce.width,ce.height,ce.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ge,Ce,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ce.width,ce.height,ce.depth,0,ge,Ce,ce.data);else if(g.isFramebufferTexture){if(Me)if(N)n.texStorage2D(t.TEXTURE_2D,be,Pe,ce.width,ce.height);else{let le=ce.width,re=ce.height;for(let fe=0;fe<be;fe++)n.texImage2D(t.TEXTURE_2D,fe,Pe,le,re,0,ge,Ce,null),le>>=1,re>>=1}}else if(Ke.length>0){if(N&&Me){const le=Le(Ke[0]);n.texStorage2D(t.TEXTURE_2D,be,Pe,le.width,le.height)}for(let le=0,re=Ke.length;le<re;le++)me=Ke[le],N?de&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,ge,Ce,me):n.texImage2D(t.TEXTURE_2D,le,Pe,ge,Ce,me);g.generateMipmaps=!1}else if(N){if(Me){const le=Le(ce);n.texStorage2D(t.TEXTURE_2D,be,Pe,le.width,le.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ce,ce)}else n.texImage2D(t.TEXTURE_2D,0,Pe,ge,Ce,ce);m(g)&&f(ne),De.__version=Q.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function W(b,g,U){if(g.image.length!==6)return;const ne=I(b,g),se=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+U);const Q=i.get(se);if(se.version!==Q.__version||ne===!0){n.activeTexture(t.TEXTURE0+U);const De=rt.getPrimaries(rt.workingColorSpace),pe=g.colorSpace===rr?null:rt.getPrimaries(g.colorSpace),Re=g.colorSpace===rr||De===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const We=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,ge=[];for(let re=0;re<6;re++)!We&&!ce?ge[re]=_(g.image[re],!0,r.maxCubemapSize):ge[re]=ce?g.image[re].image:g.image[re],ge[re]=bt(g,ge[re]);const Ce=ge[0],Pe=s.convert(g.format,g.colorSpace),me=s.convert(g.type),Ke=E(g.internalFormat,Pe,me,g.colorSpace),N=g.isVideoTexture!==!0,Me=Q.__version===void 0||ne===!0,de=se.dataReady;let be=w(g,Ce);D(t.TEXTURE_CUBE_MAP,g);let le;if(We){N&&Me&&n.texStorage2D(t.TEXTURE_CUBE_MAP,be,Ke,Ce.width,Ce.height);for(let re=0;re<6;re++){le=ge[re].mipmaps;for(let fe=0;fe<le.length;fe++){const $e=le[fe];g.format!==ei?Pe!==null?N?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe,0,0,$e.width,$e.height,Pe,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe,Ke,$e.width,$e.height,0,$e.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe,0,0,$e.width,$e.height,Pe,me,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe,Ke,$e.width,$e.height,0,Pe,me,$e.data)}}}else{if(le=g.mipmaps,N&&Me){le.length>0&&be++;const re=Le(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,be,Ke,re.width,re.height)}for(let re=0;re<6;re++)if(ce){N?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ge[re].width,ge[re].height,Pe,me,ge[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,ge[re].width,ge[re].height,0,Pe,me,ge[re].data);for(let fe=0;fe<le.length;fe++){const yt=le[fe].image[re].image;N?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe+1,0,0,yt.width,yt.height,Pe,me,yt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe+1,Ke,yt.width,yt.height,0,Pe,me,yt.data)}}else{N?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,me,ge[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,Pe,me,ge[re]);for(let fe=0;fe<le.length;fe++){const $e=le[fe];N?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe+1,0,0,Pe,me,$e.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe+1,Ke,Pe,me,$e.image[re])}}}m(g)&&f(t.TEXTURE_CUBE_MAP),Q.__version=se.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function oe(b,g,U,ne,se,Q){const De=s.convert(U.format,U.colorSpace),pe=s.convert(U.type),Re=E(U.internalFormat,De,pe,U.colorSpace),We=i.get(g),ce=i.get(U);if(ce.__renderTarget=g,!We.__hasExternalTextures){const ge=Math.max(1,g.width>>Q),Ce=Math.max(1,g.height>>Q);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,Q,Re,ge,Ce,g.depth,0,De,pe,null):n.texImage2D(se,Q,Re,ge,Ce,0,De,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Tt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,se,ce.__webglTexture,0,R(g)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,se,ce.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(b,g,U){if(t.bindRenderbuffer(t.RENDERBUFFER,b),g.depthBuffer){const ne=g.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,Q=A(g.stencilBuffer,se),De=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Tt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,R(g),Q,g.width,g.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,R(g),Q,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Q,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,b)}else{const ne=g.textures;for(let se=0;se<ne.length;se++){const Q=ne[se],De=s.convert(Q.format,Q.colorSpace),pe=s.convert(Q.type),Re=E(Q.internalFormat,De,pe,Q.colorSpace);Tt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,R(g),Re,g.width,g.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,R(g),Re,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Re,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ee(b,g,U){const ne=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(g.depthTexture);if(se.__renderTarget=g,(!se.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ne){if(se.__webglInit===void 0&&(se.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),se.__webglTexture===void 0){se.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),D(t.TEXTURE_CUBE_MAP,g.depthTexture);const We=s.convert(g.depthTexture.format),ce=s.convert(g.depthTexture.type);let ge;g.depthTexture.format===Vi?ge=t.DEPTH_COMPONENT24:g.depthTexture.format===Cr&&(ge=t.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ge,g.width,g.height,0,We,ce,null)}}else te(g.depthTexture,0);const Q=se.__webglTexture,De=R(g),pe=ne?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,Re=g.depthTexture.format===Cr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Vi)Tt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,pe,Q,0,De):t.framebufferTexture2D(t.FRAMEBUFFER,Re,pe,Q,0);else if(g.depthTexture.format===Cr)Tt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,pe,Q,0,De):t.framebufferTexture2D(t.FRAMEBUFFER,Re,pe,Q,0);else throw new Error("Unknown depthTexture format")}function he(b){const g=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const ne=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),ne){const se=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),g.__depthDisposeCallback=se}g.__boundDepthTexture=ne}if(b.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let ne=0;ne<6;ne++)ee(g.__webglFramebuffer[ne],b,ne);else{const ne=b.texture.mipmaps;ne&&ne.length>0?ee(g.__webglFramebuffer[0],b,0):ee(g.__webglFramebuffer,b,0)}else if(U){g.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[ne]),g.__webglDepthbuffer[ne]===void 0)g.__webglDepthbuffer[ne]=t.createRenderbuffer(),H(g.__webglDepthbuffer[ne],b,!1);else{const se=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=g.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Q)}}else{const ne=b.texture.mipmaps;if(ne&&ne.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),H(g.__webglDepthbuffer,b,!1);else{const se=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(b,g,U){const ne=i.get(b);g!==void 0&&oe(ne.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&he(b)}function ve(b){const g=b.texture,U=i.get(b),ne=i.get(g);b.addEventListener("dispose",L);const se=b.textures,Q=b.isWebGLCubeRenderTarget===!0,De=se.length>1;if(De||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=g.version,a.memory.textures++),Q){U.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[pe]=[];for(let Re=0;Re<g.mipmaps.length;Re++)U.__webglFramebuffer[pe][Re]=t.createFramebuffer()}else U.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)U.__webglFramebuffer[pe]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(De)for(let pe=0,Re=se.length;pe<Re;pe++){const We=i.get(se[pe]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&Tt(b)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const Re=se[pe];U.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[pe]);const We=s.convert(Re.format,Re.colorSpace),ce=s.convert(Re.type),ge=E(Re.internalFormat,We,ce,Re.colorSpace,b.isXRRenderTarget===!0),Ce=R(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ge,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,U.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),H(U.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),D(t.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)oe(U.__webglFramebuffer[pe][Re],b,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re);else oe(U.__webglFramebuffer[pe],b,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(g)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let pe=0,Re=se.length;pe<Re;pe++){const We=se[pe],ce=i.get(We);let ge=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ge=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,ce.__webglTexture),D(ge,We),oe(U.__webglFramebuffer,b,We,t.COLOR_ATTACHMENT0+pe,ge,0),m(We)&&f(ge)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(pe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,ne.__webglTexture),D(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)oe(U.__webglFramebuffer[Re],b,g,t.COLOR_ATTACHMENT0,pe,Re);else oe(U.__webglFramebuffer,b,g,t.COLOR_ATTACHMENT0,pe,0);m(g)&&f(pe),n.unbindTexture()}b.depthBuffer&&he(b)}function ye(b){const g=b.textures;for(let U=0,ne=g.length;U<ne;U++){const se=g[U];if(m(se)){const Q=y(b),De=i.get(se).__webglTexture;n.bindTexture(Q,De),f(Q),n.unbindTexture()}}}const He=[],Be=[];function Mt(b){if(b.samples>0){if(Tt(b)===!1){const g=b.textures,U=b.width,ne=b.height;let se=t.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(b),pe=g.length>1;if(pe)for(let We=0;We<g.length;We++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Re=b.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let We=0;We<g.length;We++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[We]);const ce=i.get(g[We]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,U,ne,0,0,U,ne,se,t.NEAREST),l===!0&&(He.length=0,Be.length=0,He.push(t.COLOR_ATTACHMENT0+We),b.depthBuffer&&b.resolveDepthBuffer===!1&&(He.push(Q),Be.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let We=0;We<g.length;We++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,De.__webglColorRenderbuffer[We]);const ce=i.get(g[We]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const g=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function R(b){return Math.min(r.maxSamples,b.samples)}function Tt(b){const g=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ht(b){const g=a.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function bt(b,g){const U=b.colorSpace,ne=b.format,se=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==Es&&U!==rr&&(rt.getTransfer(U)===mt?(ne!==ei||se!==Hn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",U)),g}function Le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=te,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=ie,this.rebindTextures=we,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function eM(t,e){function n(i,r=rr){let s;const a=rt.getTransfer(r);if(i===Hn)return t.UNSIGNED_BYTE;if(i===dd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Rm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Lm)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===wm)return t.BYTE;if(i===Cm)return t.SHORT;if(i===Ma)return t.UNSIGNED_SHORT;if(i===ud)return t.INT;if(i===xi)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===zi)return t.HALF_FLOAT;if(i===Pm)return t.ALPHA;if(i===Dm)return t.RGB;if(i===ei)return t.RGBA;if(i===Vi)return t.DEPTH_COMPONENT;if(i===Cr)return t.DEPTH_STENCIL;if(i===Im)return t.RED;if(i===fd)return t.RED_INTEGER;if(i===ys)return t.RG;if(i===pd)return t.RG_INTEGER;if(i===md)return t.RGBA_INTEGER;if(i===yo||i===Eo||i===To||i===Ao)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===To)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eu||i===tu||i===nu||i===iu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===eu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===iu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ru||i===su||i===au||i===ou||i===lu||i===cu||i===uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ru||i===su)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===au)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ou)return s.COMPRESSED_R11_EAC;if(i===lu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===cu)return s.COMPRESSED_RG11_EAC;if(i===uu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===du||i===hu||i===fu||i===pu||i===mu||i===gu||i===vu||i===_u||i===xu||i===Su||i===Mu||i===bu||i===yu||i===Eu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===du)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_u)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Su)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tu||i===Au||i===wu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Tu)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Au)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cu||i===Ru||i===Lu||i===Pu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Cu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ru)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nM=`
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

}`;class iM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Wm(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ni({vertexShader:tM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new Ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rM extends Bs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const _=typeof XRWebGLBinding<"u",m=new iM,f={},y=n.getContextAttributes();let E=null,A=null;const w=[],C=[],L=new dt;let G=null;const S=new Zn;S.viewport=new Ft;const M=new Zn;M.viewport=new Ft;const P=[S,M],Y=new p1;let q=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let W=w[k];return W===void 0&&(W=new oc,w[k]=W),W.getTargetRaySpace()},this.getControllerGrip=function(k){let W=w[k];return W===void 0&&(W=new oc,w[k]=W),W.getGripSpace()},this.getHand=function(k){let W=w[k];return W===void 0&&(W=new oc,w[k]=W),W.getHandSpace()};function te(k){const W=C.indexOf(k.inputSource);if(W===-1)return;const oe=w[W];oe!==void 0&&(oe.update(k.inputSource,k.frame,c||a),oe.dispatchEvent({type:k.type,data:k.inputSource}))}function J(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",K);for(let k=0;k<w.length;k++){const W=C[k];W!==null&&(C[k]=null,w[k].disconnect(W))}q=null,Z=null,m.reset();for(const k in f)delete f[k];e.setRenderTarget(E),p=null,h=null,d=null,r=null,A=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(G),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",J),r.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await n.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,H=null,ee=null;y.depth&&(ee=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=y.stencil?Cr:Vi,H=y.stencil?ba:xi);const he={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(he),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new gi(h.textureWidth,h.textureHeight,{format:ei,type:Hn,depthTexture:new Ea(h.textureWidth,h.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new gi(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(k){for(let W=0;W<k.removed.length;W++){const oe=k.removed[W],H=C.indexOf(oe);H>=0&&(C[H]=null,w[H].disconnect(oe))}for(let W=0;W<k.added.length;W++){const oe=k.added[W];let H=C.indexOf(oe);if(H===-1){for(let he=0;he<w.length;he++)if(he>=C.length){C.push(oe),H=he;break}else if(C[he]===null){C[he]=oe,H=he;break}if(H===-1)break}const ee=w[H];ee&&ee.connect(oe)}}const ie=new j,T=new j;function B(k,W,oe){ie.setFromMatrixPosition(W.matrixWorld),T.setFromMatrixPosition(oe.matrixWorld);const H=ie.distanceTo(T),ee=W.projectionMatrix.elements,he=oe.projectionMatrix.elements,we=ee[14]/(ee[10]-1),ve=ee[14]/(ee[10]+1),ye=(ee[9]+1)/ee[5],He=(ee[9]-1)/ee[5],Be=(ee[8]-1)/ee[0],Mt=(he[8]+1)/he[0],R=we*Be,Tt=we*Mt,ht=H/(-Be+Mt),bt=ht*-Be;if(W.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(bt),k.translateZ(ht),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),ee[10]===-1)k.projectionMatrix.copy(W.projectionMatrix),k.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Le=we+ht,b=ve+ht,g=R-bt,U=Tt+(H-bt),ne=ye*ve/b*Le,se=He*ve/b*Le;k.projectionMatrix.makePerspective(g,U,ne,se,Le,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function F(k,W){W===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(W.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let W=k.near,oe=k.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),Y.near=M.near=S.near=W,Y.far=M.far=S.far=oe,(q!==Y.near||Z!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),q=Y.near,Z=Y.far),Y.layers.mask=k.layers.mask|6,S.layers.mask=Y.layers.mask&3,M.layers.mask=Y.layers.mask&5;const H=k.parent,ee=Y.cameras;F(Y,H);for(let he=0;he<ee.length;he++)F(ee[he],H);ee.length===2?B(Y,S,M):Y.projectionMatrix.copy(S.projectionMatrix),D(k,Y,H)};function D(k,W,oe){oe===null?k.matrix.copy(W.matrixWorld):(k.matrix.copy(oe.matrixWorld),k.matrix.invert(),k.matrix.multiply(W.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(W.projectionMatrix),k.projectionMatrixInverse.copy(W.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Du*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(k){return f[k]};let I=null;function z(k,W){if(u=W.getViewerPose(c||a),v=W,u!==null){const oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let H=!1;oe.length!==Y.cameras.length&&(Y.cameras.length=0,H=!0);for(let ve=0;ve<oe.length;ve++){const ye=oe[ve];let He=null;if(p!==null)He=p.getViewport(ye);else{const Mt=d.getViewSubImage(h,ye);He=Mt.viewport,ve===0&&(e.setRenderTargetTextures(A,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(A))}let Be=P[ve];Be===void 0&&(Be=new Zn,Be.layers.enable(ve),Be.viewport=new Ft,P[ve]=Be),Be.matrix.fromArray(ye.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ye.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(He.x,He.y,He.width,He.height),ve===0&&(Y.matrix.copy(Be.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),H===!0&&Y.cameras.push(Be)}const ee=r.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const ve=d.getDepthInformation(oe[0]);ve&&ve.isValid&&ve.texture&&m.init(ve,r.renderState)}if(ee&&ee.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let ve=0;ve<oe.length;ve++){const ye=oe[ve].camera;if(ye){let He=f[ye];He||(He=new Wm,f[ye]=He);const Be=d.getCameraImage(ye);He.sourceTexture=Be}}}}for(let oe=0;oe<w.length;oe++){const H=C[oe],ee=w[oe];H!==null&&ee!==void 0&&ee.update(H,W,c||a)}I&&I(k,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),v=null}const ae=new jm;ae.setAnimationLoop(z),this.setAnimationLoop=function(k){I=k},this.dispose=function(){}}}const xr=new Gi,sM=new Gt;function aM(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Vm(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,E,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===xn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===xn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),E=y.envMap,A=y.envMapRotation;E&&(m.envMap.value=E,xr.copy(A),xr.x*=-1,xr.y*=-1,xr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler(xr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=E*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oM(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const A=E.program;i.uniformBlockBinding(y,A)}function c(y,E){let A=r[y.id];A===void 0&&(v(y),A=u(y),r[y.id]=A,y.addEventListener("dispose",m));const w=E.program;i.updateUBOMapping(y,w);const C=e.render.frame;s[y.id]!==C&&(h(y),s[y.id]=C)}function u(y){const E=d();y.__bindingPointIndex=E;const A=t.createBuffer(),w=y.__size,C=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,w,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,A),A}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const E=r[y.id],A=y.uniforms,w=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let C=0,L=A.length;C<L;C++){const G=Array.isArray(A[C])?A[C]:[A[C]];for(let S=0,M=G.length;S<M;S++){const P=G[S];if(p(P,C,S,w)===!0){const Y=P.__offset,q=Array.isArray(P.value)?P.value:[P.value];let Z=0;for(let te=0;te<q.length;te++){const J=q[te],K=_(J);typeof J=="number"||typeof J=="boolean"?(P.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,Y+Z,P.__data)):J.isMatrix3?(P.__data[0]=J.elements[0],P.__data[1]=J.elements[1],P.__data[2]=J.elements[2],P.__data[3]=0,P.__data[4]=J.elements[3],P.__data[5]=J.elements[4],P.__data[6]=J.elements[5],P.__data[7]=0,P.__data[8]=J.elements[6],P.__data[9]=J.elements[7],P.__data[10]=J.elements[8],P.__data[11]=0):(J.toArray(P.__data,Z),Z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,E,A,w){const C=y.value,L=E+"_"+A;if(w[L]===void 0)return typeof C=="number"||typeof C=="boolean"?w[L]=C:w[L]=C.clone(),!0;{const G=w[L];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return w[L]=C,!0}else if(G.equals(C)===!1)return G.copy(C),!0}return!1}function v(y){const E=y.uniforms;let A=0;const w=16;for(let L=0,G=E.length;L<G;L++){const S=Array.isArray(E[L])?E[L]:[E[L]];for(let M=0,P=S.length;M<P;M++){const Y=S[M],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,te=q.length;Z<te;Z++){const J=q[Z],K=_(J),ie=A%w,T=ie%K.boundary,B=ie+T;A+=T,B!==0&&w-B<K.storage&&(A+=w-B),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=K.storage}}}const C=A%w;return C>0&&(A+=w-C),y.__size=A,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const lM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function cM(){return oi===null&&(oi=new a1(lM,16,16,ys,zi),oi.name="DFG_LUT",oi.minFilter=an,oi.magFilter=an,oi.wrapS=Ui,oi.wrapT=Ui,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class uM{constructor(e={}){const{canvas:n=D_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Hn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const _=p,m=new Set([md,pd,fd]),f=new Set([Hn,xi,Ma,ba,dd,hd]),y=new Uint32Array(4),E=new Int32Array(4);let A=null,w=null;const C=[],L=[];let G=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let M=!1;this._outputColorSpace=Gn;let P=0,Y=0,q=null,Z=-1,te=null;const J=new Ft,K=new Ft;let ie=null;const T=new Qe(0);let B=0,F=n.width,D=n.height,I=1,z=null,ae=null;const k=new Ft(0,0,F,D),W=new Ft(0,0,F,D);let oe=!1;const H=new qm;let ee=!1,he=!1;const we=new Gt,ve=new j,ye=new Ft,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Mt(){return q===null?I:1}let R=i;function Tt(x,O){return n.getContext(x,O)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cd}`),n.addEventListener("webglcontextlost",$e,!1),n.addEventListener("webglcontextrestored",yt,!1),n.addEventListener("webglcontextcreationerror",ft,!1),R===null){const O="webgl2";if(R=Tt(O,x),R===null)throw Tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw ot("WebGLRenderer: "+x.message),x}let ht,bt,Le,b,g,U,ne,se,Q,De,pe,Re,We,ce,ge,Ce,Pe,me,Ke,N,Me,de,be,le;function re(){ht=new c3(R),ht.init(),de=new eM(R,ht),bt=new e3(R,ht,e,de),Le=new ZS(R,ht),bt.reversedDepthBuffer&&h&&Le.buffers.depth.setReversed(!0),b=new h3(R),g=new OS,U=new QS(R,ht,Le,g,bt,de,b),ne=new n3(S),se=new l3(S),Q=new g1(R),be=new Zx(R,Q),De=new u3(R,Q,b,be),pe=new p3(R,De,Q,b),Ke=new f3(R,bt,U),Ce=new t3(g),Re=new FS(S,ne,se,ht,bt,be,Ce),We=new aM(S,g),ce=new kS,ge=new WS(ht),me=new Kx(S,ne,se,Le,pe,v,l),Pe=new JS(S,pe,bt),le=new oM(R,b,bt,Le),N=new Qx(R,ht,b),Me=new d3(R,ht,b),b.programs=Re.programs,S.capabilities=bt,S.extensions=ht,S.properties=g,S.renderLists=ce,S.shadowMap=Pe,S.state=Le,S.info=b}re(),_!==Hn&&(G=new g3(_,n.width,n.height,r,s));const fe=new rM(S,R);this.xr=fe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=ht.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ht.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(x){x!==void 0&&(I=x,this.setSize(F,D,!1))},this.getSize=function(x){return x.set(F,D)},this.setSize=function(x,O,X=!0){if(fe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}F=x,D=O,n.width=Math.floor(x*I),n.height=Math.floor(O*I),X===!0&&(n.style.width=x+"px",n.style.height=O+"px"),G!==null&&G.setSize(n.width,n.height),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set(F*I,D*I).floor()},this.setDrawingBufferSize=function(x,O,X){F=x,D=O,I=X,n.width=Math.floor(x*X),n.height=Math.floor(O*X),this.setViewport(0,0,x,O)},this.setEffects=function(x){if(_===Hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let O=0;O<x.length;O++)if(x[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(J)},this.getViewport=function(x){return x.copy(k)},this.setViewport=function(x,O,X,$){x.isVector4?k.set(x.x,x.y,x.z,x.w):k.set(x,O,X,$),Le.viewport(J.copy(k).multiplyScalar(I).round())},this.getScissor=function(x){return x.copy(W)},this.setScissor=function(x,O,X,$){x.isVector4?W.set(x.x,x.y,x.z,x.w):W.set(x,O,X,$),Le.scissor(K.copy(W).multiplyScalar(I).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(x){Le.setScissorTest(oe=x)},this.setOpaqueSort=function(x){z=x},this.setTransparentSort=function(x){ae=x},this.getClearColor=function(x){return x.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(x=!0,O=!0,X=!0){let $=0;if(x){let V=!1;if(q!==null){const _e=q.texture.format;V=m.has(_e)}if(V){const _e=q.texture.type,Ee=f.has(_e),Se=me.getClearColor(),Ae=me.getClearAlpha(),Ue=Se.r,qe=Se.g,ze=Se.b;Ee?(y[0]=Ue,y[1]=qe,y[2]=ze,y[3]=Ae,R.clearBufferuiv(R.COLOR,0,y)):(E[0]=Ue,E[1]=qe,E[2]=ze,E[3]=Ae,R.clearBufferiv(R.COLOR,0,E))}else $|=R.COLOR_BUFFER_BIT}O&&($|=R.DEPTH_BUFFER_BIT),X&&($|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$e,!1),n.removeEventListener("webglcontextrestored",yt,!1),n.removeEventListener("webglcontextcreationerror",ft,!1),me.dispose(),ce.dispose(),ge.dispose(),g.dispose(),ne.dispose(),se.dispose(),pe.dispose(),be.dispose(),le.dispose(),Re.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ah),fe.removeEventListener("sessionend",wh),hr.stop()};function $e(x){x.preventDefault(),Vh("WebGLRenderer: Context Lost."),M=!0}function yt(){Vh("WebGLRenderer: Context Restored."),M=!1;const x=b.autoReset,O=Pe.enabled,X=Pe.autoUpdate,$=Pe.needsUpdate,V=Pe.type;re(),b.autoReset=x,Pe.enabled=O,Pe.autoUpdate=X,Pe.needsUpdate=$,Pe.type=V}function ft(x){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ai(x){const O=x.target;O.removeEventListener("dispose",ai),wi(O)}function wi(x){Wv(x),g.remove(x)}function Wv(x){const O=g.get(x).programs;O!==void 0&&(O.forEach(function(X){Re.releaseProgram(X)}),x.isShaderMaterial&&Re.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,X,$,V,_e){O===null&&(O=He);const Ee=V.isMesh&&V.matrixWorld.determinant()<0,Se=jv(x,O,X,$,V);Le.setMaterial($,Ee);let Ae=X.index,Ue=1;if($.wireframe===!0){if(Ae=De.getWireframeAttribute(X),Ae===void 0)return;Ue=2}const qe=X.drawRange,ze=X.attributes.position;let Ze=qe.start*Ue,gt=(qe.start+qe.count)*Ue;_e!==null&&(Ze=Math.max(Ze,_e.start*Ue),gt=Math.min(gt,(_e.start+_e.count)*Ue)),Ae!==null?(Ze=Math.max(Ze,0),gt=Math.min(gt,Ae.count)):ze!=null&&(Ze=Math.max(Ze,0),gt=Math.min(gt,ze.count));const Nt=gt-Ze;if(Nt<0||Nt===1/0)return;be.setup(V,$,Se,X,Ae);let Ut,_t=N;if(Ae!==null&&(Ut=Q.get(Ae),_t=Me,_t.setIndex(Ut)),V.isMesh)$.wireframe===!0?(Le.setLineWidth($.wireframeLinewidth*Mt()),_t.setMode(R.LINES)):_t.setMode(R.TRIANGLES);else if(V.isLine){let Ve=$.linewidth;Ve===void 0&&(Ve=1),Le.setLineWidth(Ve*Mt()),V.isLineSegments?_t.setMode(R.LINES):V.isLineLoop?_t.setMode(R.LINE_LOOP):_t.setMode(R.LINE_STRIP)}else V.isPoints?_t.setMode(R.POINTS):V.isSprite&&_t.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ya("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))_t.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ve=V._multiDrawStarts,pt=V._multiDrawCounts,at=V._multiDrawCount,Mn=Ae?Q.get(Ae).bytesPerElement:1,qr=g.get($).currentProgram.getUniforms();for(let bn=0;bn<at;bn++)qr.setValue(R,"_gl_DrawID",bn),_t.render(Ve[bn]/Mn,pt[bn])}else if(V.isInstancedMesh)_t.renderInstances(Ze,Nt,V.count);else if(X.isInstancedBufferGeometry){const Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,pt=Math.min(X.instanceCount,Ve);_t.renderInstances(Ze,Nt,pt)}else _t.render(Ze,Nt)};function Th(x,O,X){x.transparent===!0&&x.side===Ii&&x.forceSinglePass===!1?(x.side=xn,x.needsUpdate=!0,qa(x,O,X),x.side=lr,x.needsUpdate=!0,qa(x,O,X),x.side=Ii):qa(x,O,X)}this.compile=function(x,O,X=null){X===null&&(X=x),w=ge.get(X),w.init(O),L.push(w),X.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),x!==X&&x.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const $=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _e=V.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){const Se=_e[Ee];Th(Se,X,V),$.add(Se)}else Th(_e,X,V),$.add(_e)}),w=L.pop(),$},this.compileAsync=function(x,O,X=null){const $=this.compile(x,O,X);return new Promise(V=>{function _e(){if($.forEach(function(Ee){g.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){V(x);return}setTimeout(_e,10)}ht.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ul=null;function $v(x){Ul&&Ul(x)}function Ah(){hr.stop()}function wh(){hr.start()}const hr=new jm;hr.setAnimationLoop($v),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(x){Ul=x,fe.setAnimationLoop(x),x===null?hr.stop():hr.start()},fe.addEventListener("sessionstart",Ah),fe.addEventListener("sessionend",wh),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const X=fe.enabled===!0&&fe.isPresenting===!0,$=G!==null&&(q===null||X)&&G.begin(S,q);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(O),O=fe.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,O,q),w=ge.get(x,L.length),w.init(O),L.push(w),we.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H.setFromProjectionMatrix(we,fi,O.reversedDepth),he=this.localClippingEnabled,ee=Ce.init(this.clippingPlanes,he),A=ce.get(x,C.length),A.init(),C.push(A),fe.enabled===!0&&fe.isPresenting===!0){const Ee=S.xr.getDepthSensingMesh();Ee!==null&&Fl(Ee,O,-1/0,S.sortObjects)}Fl(x,O,0,S.sortObjects),A.finish(),S.sortObjects===!0&&A.sort(z,ae),Be=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Be&&me.addToRenderList(A,x),this.info.render.frame++,ee===!0&&Ce.beginShadows();const V=w.state.shadowsArray;if(Pe.render(V,x,O),ee===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&G.hasRenderPass())===!1){const Ee=A.opaque,Se=A.transmissive;if(w.setupLights(),O.isArrayCamera){const Ae=O.cameras;if(Se.length>0)for(let Ue=0,qe=Ae.length;Ue<qe;Ue++){const ze=Ae[Ue];Rh(Ee,Se,x,ze)}Be&&me.render(x);for(let Ue=0,qe=Ae.length;Ue<qe;Ue++){const ze=Ae[Ue];Ch(A,x,ze,ze.viewport)}}else Se.length>0&&Rh(Ee,Se,x,O),Be&&me.render(x),Ch(A,x,O)}q!==null&&Y===0&&(U.updateMultisampleRenderTarget(q),U.updateRenderTargetMipmap(q)),$&&G.end(S),x.isScene===!0&&x.onAfterRender(S,x,O),be.resetDefaultState(),Z=-1,te=null,L.pop(),L.length>0?(w=L[L.length-1],ee===!0&&Ce.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?A=C[C.length-1]:A=null};function Fl(x,O,X,$){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLight)w.pushLight(x),x.castShadow&&w.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||H.intersectsSprite(x)){$&&ye.setFromMatrixPosition(x.matrixWorld).applyMatrix4(we);const Ee=pe.update(x),Se=x.material;Se.visible&&A.push(x,Ee,Se,X,ye.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||H.intersectsObject(x))){const Ee=pe.update(x),Se=x.material;if($&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ye.copy(x.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ye.copy(Ee.boundingSphere.center)),ye.applyMatrix4(x.matrixWorld).applyMatrix4(we)),Array.isArray(Se)){const Ae=Ee.groups;for(let Ue=0,qe=Ae.length;Ue<qe;Ue++){const ze=Ae[Ue],Ze=Se[ze.materialIndex];Ze&&Ze.visible&&A.push(x,Ee,Ze,X,ye.z,ze)}}else Se.visible&&A.push(x,Ee,Se,X,ye.z,null)}}const _e=x.children;for(let Ee=0,Se=_e.length;Ee<Se;Ee++)Fl(_e[Ee],O,X,$)}function Ch(x,O,X,$){const{opaque:V,transmissive:_e,transparent:Ee}=x;w.setupLightsView(X),ee===!0&&Ce.setGlobalState(S.clippingPlanes,X),$&&Le.viewport(J.copy($)),V.length>0&&Ha(V,O,X),_e.length>0&&Ha(_e,O,X),Ee.length>0&&Ha(Ee,O,X),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Rh(x,O,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const Ze=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new gi(1,1,{generateMipmaps:!0,type:Ze?zi:Hn,minFilter:wr,samples:bt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const _e=w.state.transmissionRenderTarget[$.id],Ee=$.viewport||J;_e.setSize(Ee.z*S.transmissionResolutionScale,Ee.w*S.transmissionResolutionScale);const Se=S.getRenderTarget(),Ae=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(_e),S.getClearColor(T),B=S.getClearAlpha(),B<1&&S.setClearColor(16777215,.5),S.clear(),Be&&me.render(X);const qe=S.toneMapping;S.toneMapping=mi;const ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),ee===!0&&Ce.setGlobalState(S.clippingPlanes,$),Ha(x,X,$),U.updateMultisampleRenderTarget(_e),U.updateRenderTargetMipmap(_e),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let gt=0,Nt=O.length;gt<Nt;gt++){const Ut=O[gt],{object:_t,geometry:Ve,material:pt,group:at}=Ut;if(pt.side===Ii&&_t.layers.test($.layers)){const Mn=pt.side;pt.side=xn,pt.needsUpdate=!0,Lh(_t,X,$,Ve,pt,at),pt.side=Mn,pt.needsUpdate=!0,Ze=!0}}Ze===!0&&(U.updateMultisampleRenderTarget(_e),U.updateRenderTargetMipmap(_e))}S.setRenderTarget(Se,Ae,Ue),S.setClearColor(T,B),ze!==void 0&&($.viewport=ze),S.toneMapping=qe}function Ha(x,O,X){const $=O.isScene===!0?O.overrideMaterial:null;for(let V=0,_e=x.length;V<_e;V++){const Ee=x[V],{object:Se,geometry:Ae,group:Ue}=Ee;let qe=Ee.material;qe.allowOverride===!0&&$!==null&&(qe=$),Se.layers.test(X.layers)&&Lh(Se,O,X,Ae,qe,Ue)}}function Lh(x,O,X,$,V,_e){x.onBeforeRender(S,O,X,$,V,_e),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(S,O,X,$,x,_e),V.transparent===!0&&V.side===Ii&&V.forceSinglePass===!1?(V.side=xn,V.needsUpdate=!0,S.renderBufferDirect(X,O,$,V,x,_e),V.side=lr,V.needsUpdate=!0,S.renderBufferDirect(X,O,$,V,x,_e),V.side=Ii):S.renderBufferDirect(X,O,$,V,x,_e),x.onAfterRender(S,O,X,$,V,_e)}function qa(x,O,X){O.isScene!==!0&&(O=He);const $=g.get(x),V=w.state.lights,_e=w.state.shadowsArray,Ee=V.state.version,Se=Re.getParameters(x,V.state,_e,O,X),Ae=Re.getProgramCacheKey(Se);let Ue=$.programs;$.environment=x.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(x.isMeshStandardMaterial?se:ne).get(x.envMap||$.environment),$.envMapRotation=$.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,Ue===void 0&&(x.addEventListener("dispose",ai),Ue=new Map,$.programs=Ue);let qe=Ue.get(Ae);if(qe!==void 0){if($.currentProgram===qe&&$.lightsStateVersion===Ee)return Dh(x,Se),qe}else Se.uniforms=Re.getUniforms(x),x.onBeforeCompile(Se,S),qe=Re.acquireProgram(Se,Ae),Ue.set(Ae,qe),$.uniforms=Se.uniforms;const ze=$.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ze.clippingPlanes=Ce.uniform),Dh(x,Se),$.needsLights=Yv(x),$.lightsStateVersion=Ee,$.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=qe,$.uniformsList=null,qe}function Ph(x){if(x.uniformsList===null){const O=x.currentProgram.getUniforms();x.uniformsList=wo.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function Dh(x,O){const X=g.get(x);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function jv(x,O,X,$,V){O.isScene!==!0&&(O=He),U.resetTextureUnits();const _e=O.fog,Ee=$.isMeshStandardMaterial?O.environment:null,Se=q===null?S.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Es,Ae=($.isMeshStandardMaterial?se:ne).get($.envMap||Ee),Ue=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ze=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,gt=!!X.morphAttributes.color;let Nt=mi;$.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Nt=S.toneMapping);const Ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=Ut!==void 0?Ut.length:0,Ve=g.get($),pt=w.state.lights;if(ee===!0&&(he===!0||x!==te)){const un=x===te&&$.id===Z;Ce.setState($,x,un)}let at=!1;$.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==pt.state.version||Ve.outputColorSpace!==Se||V.isBatchedMesh&&Ve.batching===!1||!V.isBatchedMesh&&Ve.batching===!0||V.isBatchedMesh&&Ve.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ve.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ve.instancing===!1||!V.isInstancedMesh&&Ve.instancing===!0||V.isSkinnedMesh&&Ve.skinning===!1||!V.isSkinnedMesh&&Ve.skinning===!0||V.isInstancedMesh&&Ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ve.instancingMorph===!1&&V.morphTexture!==null||Ve.envMap!==Ae||$.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ce.numPlanes||Ve.numIntersection!==Ce.numIntersection)||Ve.vertexAlphas!==Ue||Ve.vertexTangents!==qe||Ve.morphTargets!==ze||Ve.morphNormals!==Ze||Ve.morphColors!==gt||Ve.toneMapping!==Nt||Ve.morphTargetsCount!==_t)&&(at=!0):(at=!0,Ve.__version=$.version);let Mn=Ve.currentProgram;at===!0&&(Mn=qa($,O,V));let qr=!1,bn=!1,ea=!1;const Et=Mn.getUniforms(),mn=Ve.uniforms;if(Le.useProgram(Mn.program)&&(qr=!0,bn=!0,ea=!0),$.id!==Z&&(Z=$.id,bn=!0),qr||te!==x){Le.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Et.setValue(R,"projectionMatrix",x.projectionMatrix),Et.setValue(R,"viewMatrix",x.matrixWorldInverse);const gn=Et.map.cameraPosition;gn!==void 0&&gn.setValue(R,ve.setFromMatrixPosition(x.matrixWorld)),bt.logarithmicDepthBuffer&&Et.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),te!==x&&(te=x,bn=!0,ea=!0)}if(Ve.needsLights&&(pt.state.directionalShadowMap.length>0&&Et.setValue(R,"directionalShadowMap",pt.state.directionalShadowMap,U),pt.state.spotShadowMap.length>0&&Et.setValue(R,"spotShadowMap",pt.state.spotShadowMap,U),pt.state.pointShadowMap.length>0&&Et.setValue(R,"pointShadowMap",pt.state.pointShadowMap,U)),V.isSkinnedMesh){Et.setOptional(R,V,"bindMatrix"),Et.setOptional(R,V,"bindMatrixInverse");const un=V.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Et.setValue(R,"boneTexture",un.boneTexture,U))}V.isBatchedMesh&&(Et.setOptional(R,V,"batchingTexture"),Et.setValue(R,"batchingTexture",V._matricesTexture,U),Et.setOptional(R,V,"batchingIdTexture"),Et.setValue(R,"batchingIdTexture",V._indirectTexture,U),Et.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&Et.setValue(R,"batchingColorTexture",V._colorsTexture,U));const On=X.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ke.update(V,X,Mn),(bn||Ve.receiveShadow!==V.receiveShadow)&&(Ve.receiveShadow=V.receiveShadow,Et.setValue(R,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(mn.envMap.value=Ae,mn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(mn.envMapIntensity.value=O.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=cM()),bn&&(Et.setValue(R,"toneMappingExposure",S.toneMappingExposure),Ve.needsLights&&Xv(mn,ea),_e&&$.fog===!0&&We.refreshFogUniforms(mn,_e),We.refreshMaterialUniforms(mn,$,I,D,w.state.transmissionRenderTarget[x.id]),wo.upload(R,Ph(Ve),mn,U)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(wo.upload(R,Ph(Ve),mn,U),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(R,"center",V.center),Et.setValue(R,"modelViewMatrix",V.modelViewMatrix),Et.setValue(R,"normalMatrix",V.normalMatrix),Et.setValue(R,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const un=$.uniformsGroups;for(let gn=0,Ol=un.length;gn<Ol;gn++){const fr=un[gn];le.update(fr,Mn),le.bind(fr,Mn)}}return Mn}function Xv(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function Yv(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(x,O,X){const $=g.get(x);$.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),g.get(x.texture).__webglTexture=O,g.get(x.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,O){const X=g.get(x);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const Jv=R.createFramebuffer();this.setRenderTarget=function(x,O=0,X=0){q=x,P=O,Y=X;let $=null,V=!1,_e=!1;if(x){const Se=g.get(x);if(Se.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(R.FRAMEBUFFER,Se.__webglFramebuffer),J.copy(x.viewport),K.copy(x.scissor),ie=x.scissorTest,Le.viewport(J),Le.scissor(K),Le.setScissorTest(ie),Z=-1;return}else if(Se.__webglFramebuffer===void 0)U.setupRenderTarget(x);else if(Se.__hasExternalTextures)U.rebindTextures(x,g.get(x.texture).__webglTexture,g.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const qe=x.depthTexture;if(Se.__boundDepthTexture!==qe){if(qe!==null&&g.has(qe)&&(x.width!==qe.image.width||x.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(x)}}const Ae=x.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(_e=!0);const Ue=g.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?$=Ue[O][X]:$=Ue[O],V=!0):x.samples>0&&U.useMultisampledRTT(x)===!1?$=g.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?$=Ue[X]:$=Ue,J.copy(x.viewport),K.copy(x.scissor),ie=x.scissorTest}else J.copy(k).multiplyScalar(I).floor(),K.copy(W).multiplyScalar(I).floor(),ie=oe;if(X!==0&&($=Jv),Le.bindFramebuffer(R.FRAMEBUFFER,$)&&Le.drawBuffers(x,$),Le.viewport(J),Le.scissor(K),Le.setScissorTest(ie),V){const Se=g.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,X)}else if(_e){const Se=O;for(let Ae=0;Ae<x.textures.length;Ae++){const Ue=g.get(x.textures[Ae]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ae,Ue.__webglTexture,X,Se)}}else if(x!==null&&X!==0){const Se=g.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Se.__webglTexture,X)}Z=-1},this.readRenderTargetPixels=function(x,O,X,$,V,_e,Ee,Se=0){if(!(x&&x.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){Le.bindFramebuffer(R.FRAMEBUFFER,Ae);try{const Ue=x.textures[Se],qe=Ue.format,ze=Ue.type;if(!bt.textureFormatReadable(qe)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(ze)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-$&&X>=0&&X<=x.height-V&&(x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Se),R.readPixels(O,X,$,V,de.convert(qe),de.convert(ze),_e))}finally{const Ue=q!==null?g.get(q).__webglFramebuffer:null;Le.bindFramebuffer(R.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(x,O,X,$,V,_e,Ee,Se=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae)if(O>=0&&O<=x.width-$&&X>=0&&X<=x.height-V){Le.bindFramebuffer(R.FRAMEBUFFER,Ae);const Ue=x.textures[Se],qe=Ue.format,ze=Ue.type;if(!bt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ze),R.bufferData(R.PIXEL_PACK_BUFFER,_e.byteLength,R.STREAM_READ),x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Se),R.readPixels(O,X,$,V,de.convert(qe),de.convert(ze),0);const gt=q!==null?g.get(q).__webglFramebuffer:null;Le.bindFramebuffer(R.FRAMEBUFFER,gt);const Nt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await I_(R,Nt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ze),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,_e),R.deleteBuffer(Ze),R.deleteSync(Nt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,O=null,X=0){const $=Math.pow(2,-X),V=Math.floor(x.image.width*$),_e=Math.floor(x.image.height*$),Ee=O!==null?O.x:0,Se=O!==null?O.y:0;U.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,X,0,0,Ee,Se,V,_e),Le.unbindTexture()};const Kv=R.createFramebuffer(),Zv=R.createFramebuffer();this.copyTextureToTexture=function(x,O,X=null,$=null,V=0,_e=null){_e===null&&(V!==0?(ya("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=V,V=0):_e=0);let Ee,Se,Ae,Ue,qe,ze,Ze,gt,Nt;const Ut=x.isCompressedTexture?x.mipmaps[_e]:x.image;if(X!==null)Ee=X.max.x-X.min.x,Se=X.max.y-X.min.y,Ae=X.isBox3?X.max.z-X.min.z:1,Ue=X.min.x,qe=X.min.y,ze=X.isBox3?X.min.z:0;else{const On=Math.pow(2,-V);Ee=Math.floor(Ut.width*On),Se=Math.floor(Ut.height*On),x.isDataArrayTexture?Ae=Ut.depth:x.isData3DTexture?Ae=Math.floor(Ut.depth*On):Ae=1,Ue=0,qe=0,ze=0}$!==null?(Ze=$.x,gt=$.y,Nt=$.z):(Ze=0,gt=0,Nt=0);const _t=de.convert(O.format),Ve=de.convert(O.type);let pt;O.isData3DTexture?(U.setTexture3D(O,0),pt=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(U.setTexture2DArray(O,0),pt=R.TEXTURE_2D_ARRAY):(U.setTexture2D(O,0),pt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const at=R.getParameter(R.UNPACK_ROW_LENGTH),Mn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),qr=R.getParameter(R.UNPACK_SKIP_PIXELS),bn=R.getParameter(R.UNPACK_SKIP_ROWS),ea=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ue),R.pixelStorei(R.UNPACK_SKIP_ROWS,qe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ze);const Et=x.isDataArrayTexture||x.isData3DTexture,mn=O.isDataArrayTexture||O.isData3DTexture;if(x.isDepthTexture){const On=g.get(x),un=g.get(O),gn=g.get(On.__renderTarget),Ol=g.get(un.__renderTarget);Le.bindFramebuffer(R.READ_FRAMEBUFFER,gn.__webglFramebuffer),Le.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ol.__webglFramebuffer);for(let fr=0;fr<Ae;fr++)Et&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,g.get(x).__webglTexture,V,ze+fr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,g.get(O).__webglTexture,_e,Nt+fr)),R.blitFramebuffer(Ue,qe,Ee,Se,Ze,gt,Ee,Se,R.DEPTH_BUFFER_BIT,R.NEAREST);Le.bindFramebuffer(R.READ_FRAMEBUFFER,null),Le.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||g.has(x)){const On=g.get(x),un=g.get(O);Le.bindFramebuffer(R.READ_FRAMEBUFFER,Kv),Le.bindFramebuffer(R.DRAW_FRAMEBUFFER,Zv);for(let gn=0;gn<Ae;gn++)Et?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,On.__webglTexture,V,ze+gn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,On.__webglTexture,V),mn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,un.__webglTexture,_e,Nt+gn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,un.__webglTexture,_e),V!==0?R.blitFramebuffer(Ue,qe,Ee,Se,Ze,gt,Ee,Se,R.COLOR_BUFFER_BIT,R.NEAREST):mn?R.copyTexSubImage3D(pt,_e,Ze,gt,Nt+gn,Ue,qe,Ee,Se):R.copyTexSubImage2D(pt,_e,Ze,gt,Ue,qe,Ee,Se);Le.bindFramebuffer(R.READ_FRAMEBUFFER,null),Le.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else mn?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(pt,_e,Ze,gt,Nt,Ee,Se,Ae,_t,Ve,Ut.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(pt,_e,Ze,gt,Nt,Ee,Se,Ae,_t,Ut.data):R.texSubImage3D(pt,_e,Ze,gt,Nt,Ee,Se,Ae,_t,Ve,Ut):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,_e,Ze,gt,Ee,Se,_t,Ve,Ut.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,_e,Ze,gt,Ut.width,Ut.height,_t,Ut.data):R.texSubImage2D(R.TEXTURE_2D,_e,Ze,gt,Ee,Se,_t,Ve,Ut);R.pixelStorei(R.UNPACK_ROW_LENGTH,at),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Mn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,qr),R.pixelStorei(R.UNPACK_SKIP_ROWS,bn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ea),_e===0&&O.generateMipmaps&&R.generateMipmap(pt),Le.unbindTexture()},this.initRenderTarget=function(x){g.get(x).__webglFramebuffer===void 0&&U.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?U.setTextureCube(x,0):x.isData3DTexture?U.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?U.setTexture2DArray(x,0):U.setTexture2D(x,0),Le.unbindTexture()},this.resetState=function(){P=0,Y=0,q=null,Le.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=rt._getUnpackColorSpace()}}const dM=`
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
}`,hM=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;function fM(t){const e=new uM({canvas:t,antialias:!1}),n={uTime:{value:0},uAltitude:{value:.45},uLuminosite:{value:.7},uTurbulence:{value:.2},uNight:{value:0},uAurora:{value:.55},uPulse:{value:0},uPluie:{value:0},uEclair:{value:0},uMeteor:{value:new Ft(0,0,0,0)},uFocus:{value:new dt(.5,.5)},uAspect:{value:1},uTap:{value:new j(.5,.5,999)},uCol1:{value:new Qe("#1b2a4a")},uCol2:{value:new Qe("#7fa8d9")},uCol3:{value:new Qe("#dfefff")}},i={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,pluie:0,col1:new Qe("#1b2a4a"),col2:new Qe("#7fa8d9"),col3:new Qe("#dfefff"),focus:new dt(.5,.5)},r={alt:.45,lum:.7,turb:.2,night:0,aurora:.55,col1:new Qe("#1b2a4a"),col2:new Qe("#7fa8d9"),col3:new Qe("#dfefff"),focus:new dt(.5,.5)};let s=0,a=0,o=999,l=0,c=0;const u={x:0,y:0,age:0,actif:0},d=new ni({vertexShader:hM,fragmentShader:dM,uniforms:n}),h=new Si(new Ia(2,2),d),p=new s1;p.add(h);function v(){e.setSize(window.innerWidth,window.innerHeight,!1),n.uAspect.value=window.innerWidth/Math.max(1,window.innerHeight)}return window.addEventListener("resize",v),v(),{apply(_,m){i.alt=_.altitude,i.lum=_.luminosite,i.turb=_.turbulence,i.night=_.night,i.aurora=_.aurora,i.pluie=_.pluie,i.col1.setStyle(_.palette[0]),i.col2.setStyle(_.palette[1]),i.col3.setStyle(_.palette[2]),m&&i.focus.set(m[0],m[1])},setBpm(_){s=_??0},eclair(){c=1},filer(_,m){u.x=_,u.y=m,u.age=0,u.actif=1},tap(_,m){o=0,n.uTap.value.set(_,m,0)},frame(_){n.uTime.value+=_;const m=1-Math.exp(-_*2.5);r.alt+=(i.alt-r.alt)*m,r.lum+=(i.lum-r.lum)*m,r.turb+=(i.turb-r.turb)*m,r.night+=(i.night-r.night)*m,r.aurora+=(i.aurora-r.aurora)*m,l+=(i.pluie-l)*(1-Math.exp(-_*.8)),c*=Math.exp(-_*2.6),u.actif>0&&(u.age+=_,u.age>1.4&&(u.actif=0)),r.col1.lerp(i.col1,m),r.col2.lerp(i.col2,m),r.col3.lerp(i.col3,m),r.focus.lerp(i.focus,m),a+=_*(s>0?s/60:.2),n.uPulse.value=Math.sin(a*2*Math.PI),o<100&&(o+=_,n.uTap.value.z=o),n.uAltitude.value=r.alt,n.uLuminosite.value=r.lum,n.uTurbulence.value=r.turb,n.uNight.value=r.night,n.uAurora.value=r.aurora,n.uPluie.value=l,n.uEclair.value=c,n.uMeteor.value.set(u.x,u.y,u.age,u.actif),n.uFocus.value.copy(r.focus),n.uCol1.value.copy(r.col1),n.uCol2.value.copy(r.col2),n.uCol3.value.copy(r.col3),e.render(p,new Sd)}}}function pM(){return{breath:0,bpm:null,emotion:"calme",timeOfDay:.5,seed:"anonyme"}}const mM={calme:["#1b2a4a","#7fa8d9","#dfefff"],joie:["#2b4a1b","#d9c47f","#fff6df"],tristesse:["#101018","#3a4a6a","#8a9ab0"],tension:["#2a0a0a","#6a2a2a","#c07a5a"]};function Zm(t){const e={calme:{alt:.45,lum:.7,turb:.2,aur:.55,pluie:.12},joie:{alt:.7,lum:.9,turb:.35,aur:.95,pluie:0},tristesse:{alt:.2,lum:.35,turb:.1,aur:.25,pluie:.7},tension:{alt:.6,lum:.45,turb:.85,aur:.4,pluie:.45}}[t.emotion],n=Math.min(1,Math.max(0,(Math.abs(t.timeOfDay-.5)-.2)*5)),i=t.cielReel??null;return{altitude:Math.min(1,e.alt+t.breath*.35),luminosite:i?Math.min(1,i.luminosite+t.breath*.2):Math.min(1,e.lum+t.breath*.2),turbulence:i?Math.min(1,Math.max(e.turb,i.turbulence)+t.breath*.1):Math.min(1,e.turb+t.breath*.1),night:n,aurora:e.aur,pluie:i?Math.max(e.pluie,i.pluie):e.pluie,palette:mM[t.emotion]}}function gM(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return Math.sqrt(e/t.length)}function vM(t,e,n=8){return t<=e?0:Math.min(1,(t-e)*n)}async function _M(t){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0}),n=new AudioContext,i=n.createMediaStreamSource(e),r=n.createAnalyser();r.fftSize=1024,i.connect(r);const s=new Float32Array(r.fftSize);let a=5e-4;return setInterval(()=>{r.getFloatTimeDomainData(s);const o=gM(s);a=Math.min(a*.999+o*.001,.01),t(vM(o,a))},60),!0}catch{return!1}}var As=typeof self<"u"?self:{};function Qm(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=As,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function Sr(){throw Error("Invalid UTF8")}function Rf(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let fo,mc;const xM=typeof TextDecoder<"u";let SM;const MM=typeof TextEncoder<"u";function eg(t){if(MM)t=(SM||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function tg(t){As.setTimeout((()=>{throw t}),0)}var Uu,bM=Qm(610401301,!1),Lf=Qm(748402147,!0);function Pf(){var t=As.navigator;return t&&(t=t.userAgent)?t:""}const Df=As.navigator;function il(t){return il[" "](t),t}Uu=Df&&Df.userAgentData||null,il[" "]=function(){};const ng={};let fa=null;function yM(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(c){for(;l<s.length;){const u=s.charAt(l++),d=fa[u];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}ig();let l=0;for(;;){const c=o(-1),u=o(0),d=o(64),h=o(64);if(h===64&&c===-1)break;a(c<<2|u>>4),d!=64&&(a(u<<4&240|d>>2),h!=64&&a(d<<6&192|h))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function ig(){if(!fa){fa={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));ng[n]=i;for(let r=0;r<i.length;r++){const s=i[r];fa[s]===void 0&&(fa[s]=r)}}}}var EM=typeof Uint8Array<"u",rg=!(!(bM&&Uu&&Uu.brands.length>0)&&(Pf().indexOf("Trident")!=-1||Pf().indexOf("MSIE")!=-1))&&typeof btoa=="function";const If=/[-_.]/g,TM={"-":"+",_:"/",".":"="};function AM(t){return TM[t]||""}function sg(t){if(!rg)return yM(t);t=If.test(t)?t.replace(If,AM):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Md(t){return EM&&t!=null&&t instanceof Uint8Array}var ws={};function Br(){return wM||=new _i(null,ws)}function bd(t){ag(ws);var e=t.g;return(e=e==null||Md(e)?e:typeof e=="string"?sg(e):null)==null?e:t.g=e}var _i=class{h(){return new Uint8Array(bd(this)||0)}constructor(t,e){if(ag(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let wM,CM;function ag(t){if(t!==ws)throw Error("illegal external caller")}function og(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Fu(t){return og(t=Error(t),"warning"),t}function Cs(t,e){if(t!=null){var n=CM??={},i=n[t]||0;i>=e||(n[t]=i+1,og(t=Error(),"incident"),tg(t))}}function zs(){return typeof BigInt=="function"}var Vs=typeof Symbol=="function"&&typeof Symbol()=="symbol";function bi(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var RM=bi("jas",void 0,!0),Nf=bi(void 0,"0di"),la=bi(void 0,"1oa"),Ln=bi(void 0,Symbol()),LM=bi(void 0,"0ub"),PM=bi(void 0,"0ubs"),Ou=bi(void 0,"0ubsb"),DM=bi(void 0,"0actk"),Rs=bi("m_m","Pa",!0),Uf=bi();const lg={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},cg=Object.defineProperties,Ie=Vs?RM:"Ga";var Vr;const Ff=[];function Na(t,e){Vs||Ie in t||cg(t,lg),t[Ie]|=e}function Yt(t,e){Vs||Ie in t||cg(t,lg),t[Ie]=e}function Ua(t){return Na(t,34),t}function Ta(t){return Na(t,8192),t}Yt(Ff,7),Vr=Object.freeze(Ff);var Ls={};function Dn(t,e){return e===void 0?t.h!==kr&&!!(2&(0|t.v[Ie])):!!(2&e)&&t.h!==kr}const kr={};function yd(t,e){if(t!=null){if(typeof t=="string")t=t?new _i(t,ws):Br();else if(t.constructor!==_i)if(Md(t))t=t.length?new _i(new Uint8Array(t),ws):Br();else{if(!e)throw Error();t=void 0}}return t}class Of{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var IM=Object.freeze({});function ug(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(e=128&e?1:0;e<a;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const o in t)!isNaN(o)&&n(+o,t[o])}}var dg={};function Gs(t){return 128&t?dg:void 0}function rl(t){return t.Na=!0,t}var NM=rl((t=>typeof t=="number")),Bf=rl((t=>typeof t=="string")),UM=rl((t=>typeof t=="boolean")),sl=typeof As.BigInt=="function"&&typeof As.BigInt(0)=="bigint";function Pn(t){var e=t;if(Bf(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(NM(e)&&!Number.isSafeInteger(e))throw Error(String(e));return sl?BigInt(t):t=UM(t)?t?"1":"0":Bf(t)?t.trim()||"0":String(t)}var Bu=rl((t=>sl?t>=OM&&t<=kM:t[0]==="-"?kf(t,FM):kf(t,BM)));const FM=Number.MIN_SAFE_INTEGER.toString(),OM=sl?BigInt(Number.MIN_SAFE_INTEGER):void 0,BM=Number.MAX_SAFE_INTEGER.toString(),kM=sl?BigInt(Number.MAX_SAFE_INTEGER):void 0;function kf(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const zM=typeof Uint8Array.prototype.slice=="function";let VM,Lt=0,zt=0;function zf(t){const e=t>>>0;Lt=e,zt=(t-e)/4294967296>>>0}function Ps(t){if(t<0){zf(-t);const[e,n]=Ad(Lt,zt);Lt=e>>>0,zt=n>>>0}else zf(t)}function Ed(t){const e=VM||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),zt=0,Lt=e.getUint32(0,!0)}function hg(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Aa(t,e)}function GM(t,e){return Pn(zs()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):Aa(t,e))}function fg(t,e){return zs()?Pn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Pn(Td(t,e))}function Aa(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else zs()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Vf(n)+Vf(t));return n}function Vf(t){return t=String(t),"0000000".slice(t.length)+t}function Td(t,e){if(2147483648&e)if(zs())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=Ad(t,e);t="-"+Aa(n,i)}else t=Aa(t,e);return t}function al(t){if(t.length<16)Ps(Number(t));else if(zs())t=BigInt(t),Lt=Number(t&BigInt(4294967295))>>>0,zt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");zt=Lt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));zt*=1e6,Lt=1e6*Lt+s,Lt>=4294967296&&(zt+=Math.trunc(Lt/4294967296),zt>>>=0,Lt>>>=0)}if(e){const[i,r]=Ad(Lt,zt);Lt=i,zt=r}}}function Ad(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function ti(t){return Array.prototype.slice.call(t)}const Fa=typeof BigInt=="function"?BigInt.asIntN:void 0,HM=typeof BigInt=="function"?BigInt.asUintN:void 0,zr=Number.isSafeInteger,ol=Number.isFinite,Ds=Math.trunc,qM=Pn(0);function pa(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function pi(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function wa(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function pg(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const WM=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Oa(t){switch(typeof t){case"bigint":return!0;case"number":return ol(t);case"string":return WM.test(t);default:return!1}}function Hs(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return ol(t)?0|t:void 0}function mg(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return ol(t)?t>>>0:void 0}function gg(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(al(t),Td(Lt,zt))}function wd(t){if(t=Ds(t),!zr(t)){Ps(t);var e=Lt,n=zt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=hg(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function vg(t){var e=Ds(Number(t));return zr(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),gg(t))}function _g(t){var e=Ds(Number(t));return zr(e)?Pn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),zs()?Pn(Fa(64,BigInt(t))):Pn(gg(t)))}function xg(t){return zr(t)?t=Pn(wd(t)):(t=Ds(t),zr(t)?t=String(t):(Ps(t),t=Td(Lt,zt)),t=Pn(t)),t}function Oo(t){const e=typeof t;return t==null?t:e==="bigint"?Pn(Fa(64,t)):Oa(t)?e==="string"?_g(t):xg(t):void 0}function Sg(t){if(typeof t!="string")throw Error();return t}function Ba(t){if(t!=null&&typeof t!="string")throw Error();return t}function en(t){return t==null||typeof t=="string"?t:void 0}function Cd(t,e,n,i){return t!=null&&t[Rs]===Ls?t:Array.isArray(t)?((i=(n=0|t[Ie])|32&i|2&i)!==n&&Yt(t,i),new e(t)):(n?2&i?((t=e[Nf])||(Ua((t=new e).v),t=e[Nf]=t),e=t):e=new e:e=void 0,e)}function $M(t,e,n){if(e)e:{if(!Oa(e=t))throw Fu("int64");switch(typeof e){case"string":e=_g(e);break e;case"bigint":e=Pn(Fa(64,e));break e;default:e=xg(e)}}else e=Oo(t);return(t=e)==null?n?qM:void 0:t}const jM={};let XM=(function(){try{return il(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class gc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const YM=XM?(Object.setPrototypeOf(gc.prototype,Map.prototype),Object.defineProperties(gc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),gc):class extends Map{constructor(){super()}};function Gf(t){return t}function vc(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var Hi=class extends YM{constructor(t,e,n=Gf,i=Gf){super(),this.J=0|t[Ie],this.K=e,this.S=n,this.fa=this.K?JM:i;for(let r=0;r<t.length;r++){const s=t[r],a=n(s[0],!1,!0);let o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(t){return Ta(Array.from(super.entries(),t))}clear(){vc(this),super.clear()}delete(t){return vc(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new Of(t,KM,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new Of(t,Hi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return vc(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function JM(t,e,n,i,r,s){return t=Cd(t,i,n,s),r&&(t=Ld(t)),t}function KM(t){return[t,this.get(t)]}let ZM;function Hf(){return ZM||=new Hi(Ua([]),void 0,void 0,void 0,jM)}function ll(t){return Ln?t[Ln]:void 0}function Bo(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}Hi.prototype.toJSON=void 0;var ku=class{};const QM={Ka:!0};function eb(t,e){e<100||Cs(PM,1)}function cl(t,e,n,i){const r=i!==void 0;i=!!i;var s,a=Ln;!r&&Vs&&a&&(s=t[a])&&Bo(s,eb),a=[];var o=t.length;let l;s=4294967295;let c=!1;const u=!!(64&e),d=u?128&e?0:-1:void 0;1&e||(l=o&&t[o-1],l!=null&&typeof l=="object"&&l.constructor===Object?s=--o:l=void 0,!u||128&e||r||(c=!0,s=s-d+d)),e=void 0;for(var h=0;h<o;h++){let p=t[h];if(p!=null&&(p=n(p,i))!=null)if(u&&h>=s){const v=h-d;(e??={})[v]=p}else a[h]=p}if(l)for(let p in l){if((o=l[p])==null||(o=n(o,i))==null)continue;let v;h=+p,u&&!Number.isNaN(h)&&(v=h+d)<s?a[v]=o:(e??={})[p]=o}return e&&(c?a.push(e):a[s]=e),r&&Ln&&(t=ll(t))&&t instanceof ku&&(a[Ln]=(function(p){const v=new ku;return Bo(p,((_,m,f)=>{v[m]=ti(f)})),v.da=p.da,v})(t)),a}function tb(t){return t[0]=Ca(t[0]),t[1]=Ca(t[1]),t}function Ca(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Bu(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Ie];return t.length===0&&1&e?void 0:cl(t,e,Ca)}if(t!=null&&t[Rs]===Ls)return Mg(t);if(t instanceof _i){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(rg){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),ig(),n=ng[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let c=0,u=0;for(;c<e.length-2;c+=3){var s=e[c],a=e[c+1],o=e[c+2],l=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[u++]=l+s+a+o}switch(l=0,o=r,e.length-c){case 2:o=n[(15&(l=e[c+1]))<<2]||r;case 1:e=e[c],i[u]=n[e>>2]+n[(3&e)<<4|l>>4]+o+r}e=i.join("")}t=t.g=e}return t}return t instanceof Hi?t=t.size!==0?t.V(tb):void 0:void 0}return t}let nb,ib;function Mg(t){return cl(t=t.v,0|t[Ie],Ca)}function Dr(t,e){return bg(t,e[0],e[1])}function bg(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[Ie],Lf&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(Lf)throw Error("carr");Cs(DM,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Yt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var a=s-1;const l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(s=+o)<a&&(n[s+e]=l[o],delete l[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Yt(t,64|r|i),t}function rb(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Ie];return t.length===0&&1&n?void 0:qf(t,n,e)}if(t!=null&&t[Rs]===Ls)return Wf(t);if(t instanceof Hi){if(2&(e=t.J))return t;if(!t.size)return;if(n=Ua(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[Rs]===Ls?Wf(r):Array.isArray(r)?qf(r,0|r[Ie],!!(32&e)):void 0,i[1]=r}return n}return t instanceof _i?t:void 0}function qf(t,e,n){return 2&e||(!n||4096&e||16&e?t=qs(t,e,!1,n&&!(16&e)):(Na(t,34),4&e&&Object.freeze(t))),t}function Rd(t,e,n){return t=new t.constructor(e),n&&(t.h=kr),t.m=kr,t}function Wf(t){const e=t.v,n=0|e[Ie];return Dn(t,n)?t:Pd(t,e,n)?Rd(t,e):qs(e,n)}function qs(t,e,n,i){return i??=!!(34&e),t=cl(t,e,rb,i),i=32,n&&(i|=2),Yt(t,e=16769217&e|i),t}function Ld(t){const e=t.v,n=0|e[Ie];return Dn(t,n)?Pd(t,e,n)?Rd(t,e,!0):new t.constructor(qs(e,n,!1)):t}function Ws(t){if(t.h!==kr)return!1;var e=t.v;return Na(e=qs(e,0|e[Ie]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function $s(t){if(!Ws(t)&&Dn(t,0|t.v[Ie]))throw Error()}function Gr(t,e){e===void 0&&(e=0|t[Ie]),32&e&&!(4096&e)&&Yt(t,4096|e)}function Pd(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Yt(e,2|n),t.h=kr,!0)}const yg=Pn(0),er={};function Pt(t,e,n,i,r){if((e=qi(t.v,e,n,r))!==null||i&&t.m!==kr)return e}function qi(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let a,o;if(!(s<1+(n?0:-1))){if(r>=s)if(a=t[s],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[e],o=!0;else{if(r!==s)return;n=a}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[r]=i,i}return n}}function vt(t,e,n,i){$s(t),Wt(t=t.v,0|t[Ie],e,n,i)}function Wt(t,e,n,i,r){const s=n+(r?0:-1);var a=t.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=(e??=0|t[Ie])>>14&1023||536870912)?i!=null&&(t[a+(r?0:-1)]={[n]:i}):t[s]=i),e)}function Rr(){return IM===void 0?2:4}function Lr(t,e,n,i,r){let s=t.v,a=0|s[Ie];i=Dn(t,a)?1:i,r=!!r||i===3,i===2&&Ws(t)&&(s=t.v,a=0|s[Ie]);let o=(t=Dd(s,e))===Vr?7:0|t[Ie],l=Id(o,a);var c=!(4&l);if(c){4&l&&(t=ti(t),o=0,l=Nr(l,a),a=Wt(s,a,e,t));let u=0,d=0;for(;u<t.length;u++){const h=n(t[u]);h!=null&&(t[d++]=h)}d<u&&(t.length=d),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==o&&(Yt(t,l),2&l&&Object.freeze(t)),Eg(t,l,s,a,e,i,c,r)}function Eg(t,e,n,i,r,s,a,o){let l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?Ir(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Yt(t,e),Object.freeze(t)):(s===2&&Ir(e)&&(t=ti(t),l=0,e=Nr(e,i),i=Wt(n,i,r,t)),Ir(e)||(o||(e|=16),e!==l&&Yt(t,e))),2&e||!(4096&e||16&e)||Gr(n,i),t}function Dd(t,e,n){return t=qi(t,e,n),Array.isArray(t)?t:Vr}function Id(t,e){return 2&e&&(t|=2),1|t}function Ir(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Tg(t){return yd(t,!0)}function Ag(t){t=ti(t);for(let e=0;e<t.length;e++){const n=t[e]=ti(t[e]);Array.isArray(n[1])&&(n[1]=Ua(n[1]))}return Ta(t)}function ir(t,e,n,i){$s(t),Wt(t=t.v,0|t[Ie],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function js(t,e,n){if(2&e)throw Error();const i=Gs(e);let r=Dd(t,n,i),s=r===Vr?7:0|r[Ie],a=Id(s,e);return(2&a||Ir(a)||16&a)&&(a===s||Ir(a)||Yt(r,a),r=ti(r),s=0,a=Nr(a,e),Wt(t,e,n,r,i)),a&=-13,a!==s&&Yt(r,a),r}function _c(t,e){var n=v0;return Ud(Nd(t=t.v),t,void 0,n)===e?e:-1}function Nd(t){if(Vs)return t[la]??(t[la]=new Map);if(la in t)return t[la];const e=new Map;return Object.defineProperty(t,la,{value:e}),e}function wg(t,e,n,i,r){const s=Nd(t),a=Ud(s,t,e,n,r);return a!==i&&(a&&(e=Wt(t,e,a,void 0,r)),s.set(n,i)),e}function Ud(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];qi(e,o,r)!=null&&(s!==0&&(n=Wt(e,n,s,void 0,r)),s=o)}return t.set(i,s),s}function Fd(t,e,n){let i=0|t[Ie];const r=Gs(i),s=qi(t,n,r);let a;if(s!=null&&s[Rs]===Ls){if(!Dn(s))return Ws(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[Ie];2&o&&(a=qs(a,o))}return a=Dr(a,e),a!==s&&Wt(t,i,n,a,r),a}function Cg(t,e,n,i,r){let s=!1;if((i=qi(t,i,r,(a=>{const o=Cd(a,n,!1,e);return s=o!==a&&o!=null,o})))!=null)return s&&!Dn(i)&&Gr(t,e),i}function lt(t,e,n,i){let r=t.v,s=0|r[Ie];if((e=Cg(r,s,e,n,i))==null)return e;if(s=0|r[Ie],!Dn(t,s)){const a=Ld(e);a!==e&&(Ws(t)&&(r=t.v,s=0|r[Ie]),s=Wt(r,s,n,e=a,i),Gr(r,s))}return e}function Rg(t,e,n,i,r,s,a,o){var l=Dn(t,n);s=l?1:s,a=!!a||s===3,l=o&&!l,(s===2||l)&&Ws(t)&&(n=0|(e=t.v)[Ie]);var c=(t=Dd(e,r))===Vr?7:0|t[Ie],u=Id(c,n);if(o=!(4&u)){var d=t,h=n;const p=!!(2&u);p&&(h|=2);let v=!p,_=!0,m=0,f=0;for(;m<d.length;m++){const y=Cd(d[m],i,!1,h);if(y instanceof i){if(!p){const E=Dn(y);v&&=!E,_&&=E}d[f++]=y}}f<m&&(d.length=f),u|=4,u=_?-4097&u:4096|u,u=v?8|u:-9&u}if(u!==c&&(Yt(t,u),2&u&&Object.freeze(t)),l&&!(8&u||!t.length&&(s===1||s===4&&(2&u||!(16&u)&&32&n)))){for(Ir(u)&&(t=ti(t),u=Nr(u,n),n=Wt(e,n,r,t)),i=t,l=u,c=0;c<i.length;c++)(d=i[c])!==(u=Ld(d))&&(i[c]=u);l|=8,Yt(t,u=l=i.length?4096|l:-4097&l)}return Eg(t,u,e,n,r,s,o,a)}function Wi(t,e,n){const i=t.v;return Rg(t,i,0|i[Ie],e,n,Rr(),!1,!0)}function Lg(t){return t==null&&(t=void 0),t}function Ge(t,e,n,i,r){return vt(t,n,i=Lg(i),r),i&&!Dn(i)&&Gr(t.v),t}function va(t,e,n,i){e:{var r=i=Lg(i);$s(t);const s=t.v;let a=0|s[Ie];if(r==null){const o=Nd(s);if(Ud(o,s,a,n)!==e)break e;o.set(n,0)}else a=wg(s,a,n,e);Wt(s,a,e,r)}i&&!Dn(i)&&Gr(t.v)}function Nr(t,e){return-273&(2&e?2|t:-3&t)}function Od(t,e,n,i){var r=i;$s(t),t=Rg(t,i=t.v,0|i[Ie],n,e,2,!0),r=r??new n,t.push(r),e=n=t===Vr?7:0|t[Ie],(r=Dn(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Yt(t,n),r||Gr(i)}function qn(t,e,n){return Hs(Pt(t,e,void 0,n))}function Bt(t,e){return Pt(t,e,void 0,void 0,pi)??0}function $i(t,e,n){if(n!=null){if(typeof n!="number"||!ol(n))throw Fu("int32");n|=0}vt(t,e,n)}function ke(t,e,n){vt(t,e,pa(n))}function In(t,e,n){ir(t,e,Ba(n),"")}function ko(t,e,n){{$s(t);const a=t.v;let o=0|a[Ie];if(n==null)Wt(a,o,e);else{var i=t=n===Vr?7:0|n[Ie],r=Ir(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=ti(n),i=0,t=Nr(t,o),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){const l=n[r],c=Sg(l);Object.is(l,c)||(s&&(n=ti(n),i=0,t=Nr(t,o),s=!1),n[r]=c)}t!==i&&(s&&(n=ti(n),t=Nr(t,o)),Yt(n,t)),Wt(a,o,e,n)}}}function ul(t,e,n){$s(t),Lr(t,e,en,2,!0).push(Sg(n))}var ss=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function Bd(t,e){if(typeof t=="string")return new ss(sg(t),e);if(Array.isArray(t))return new ss(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new ss(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new ss(t,!1);if(t.constructor===_i)return e=bd(t)||new Uint8Array(0),new ss(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new ss(t,!1);throw Error()}function kd(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Ur(t,o),!(128&n))return e(i>>>0,r>>>0);throw Error()}function zd(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Ur(t,n),!!(127&e)}throw Error()}function cr(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return Ur(t,n),r}function Mi(t){return cr(t)>>>0}function zo(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],Ur(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function sb(t){return cr(t)}function Ur(t,e){if(t.g=e,e>t.l)throw Error()}function Pg(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function Dg(t,e){if(e==0)return Br();var n=Pg(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):zM?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Br():new _i(n,ws)}var $f=[];function Ig(t,e,n,i){if(Vo.length){const r=Vo.pop();return r.o(i),r.g.init(t,e,n,i),r}return new ab(t,e,n,i)}function Ng(t){t.g.clear(),t.l=-1,t.h=-1,Vo.length<100&&Vo.push(t)}function Ug(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=Mi(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function Co(t){switch(t.h){case 0:t.h!=0?Co(t):zd(t.g);break;case 1:Ur(t=t.g,t.g+8);break;case 2:if(t.h!=2)Co(t);else{var e=Mi(t.g);Ur(t=t.g,t.g+e)}break;case 5:Ur(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!Ug(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}Co(t)}break;default:throw Error()}}function ka(t,e,n){const i=t.g.l;var r=Mi(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function Vd(t){var e=Mi(t.g),n=Pg(t=t.g,e);if(t=t.h,xM){var i,r=t;(i=mc)||(i=mc=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(fo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),fo=!0}catch{fo=!1}}throw!fo&&(mc=void 0),o}}else{e=(s=n)+e,n=[];let o,l=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?Sr():(o=t[s++],a<194||(192&o)!=128?(s--,Sr()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?Sr():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,Sr()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?Sr():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,Sr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):Sr(),n.length>=8192&&(l=Rf(l,n),n.length=0)}s=Rf(l,n)}return s}function Fg(t){const e=Mi(t.g);return Dg(t.g,e)}function dl(t,e,n){var i=Mi(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var ab=class{constructor(t,e,n,i){if($f.length){const r=$f.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:l=!1}={}){this.Y=o,this.ea=l,r&&(r=Bd(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},Vo=[];function jf(t){return t?/^\d+$/.test(t)?(al(t),new zu(Lt,zt)):null:ob||=new zu(0,0)}var zu=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let ob;function Xf(t){return t?/^-?\d+$/.test(t)?(al(t),new Vu(Lt,zt)):null:lb||=new Vu(0,0)}var Vu=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let lb;function fs(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Xs(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function hl(t,e){if(e>=0)Xs(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Gd(t){var e=Lt;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Is(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function $n(t,e,n){Xs(t.g,8*e+n)}function Hd(t,e){return $n(t,e,2),e=t.g.end(),Is(t,e),e.push(t.h),e}function qd(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function fl(t,e,n){$n(t,e,2),Xs(t.g,n.length),Is(t,t.g.end()),Is(t,n)}function Go(t,e,n,i){n!=null&&(e=Hd(t,e),i(n,t),qd(t,e))}function yi(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Wd=yi(),Og=yi(),$d=yi(),jd=yi(),Xd=yi(),Bg=yi(),cb=yi(),pl=yi(),kg=yi(),zg=yi();function Ei(t,e,n){var i=t.v;Ln&&Ln in i&&(i=i[Ln])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var Ne=class{constructor(t,e){this.v=bg(t,e,void 0,2048)}toJSON(){return Mg(this)}j(){var t=qb,e=this.v,n=t.g,i=Ln;if(Vs&&i&&e[i]?.[n]!=null&&Cs(LM,3),e=t.g,Uf&&Ln&&Uf===void 0&&(i=(n=this.v)[Ln])&&(i=i.da))try{i(n,e,QM)}catch(r){tg(r)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[Ie];return Pd(this,t,e)?Rd(this,t,!0):new this.constructor(qs(t,e,!1))}};Ne.prototype[Rs]=Ls,Ne.prototype.toString=function(){return this.v.toString()};var Ys=class{constructor(t,e,n){this.g=t,this.h=e,t=Wd,this.l=!!t&&n===t||!1}};function ml(t,e){return new Ys(t,e,Wd)}function Vg(t,e,n,i,r){Go(t,n,Wg(e,i),r)}const ub=ml((function(t,e,n,i,r){return t.h===2&&(ka(t,Fd(e,i,n),r),!0)}),Vg),db=ml((function(t,e,n,i,r){return t.h===2&&(ka(t,Fd(e,i,n),r),!0)}),Vg);var gl=Symbol(),vl=Symbol(),Gu=Symbol(),Yf=Symbol(),Jf=Symbol();let Gg,Hg;function Hr(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=(function(d){switch(typeof d){case"boolean":return nb||=[0,void 0,!0];case"number":return d>0?void 0:d===0?ib||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,Gg??=s,Hg??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)o[s[l]]=s;s=i[++a]}for(l=1;s!==void 0;){let d;typeof s=="number"&&(l+=s,s=i[++a]);var c=void 0;if(s instanceof Ys?d=s:(d=ub,a--),d?.l){s=i[++a],c=i;var u=a;typeof s=="function"&&(s=s(),c[u]=s),c=s}for(u=l+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);l<u;l++){const h=o[l];c?n(r,l,d,c,h):e(r,l,d,h)}}return i[t]=r}function qg(t){return Array.isArray(t)?t[0]instanceof Ys?t:[db,t]:[t,void 0]}function Wg(t,e){return t instanceof Ne?t.v:Array.isArray(t)?Dr(t,e):void 0}function Yd(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function Jd(t,e,n,i,r){const s=n.g;let a,o;t[e]=(l,c,u)=>s(l,c,u,o||=Hr(vl,Yd,Jd,i).T,a||=Kd(i),r)}function Kd(t){let e=t[Gu];if(e!=null)return e;const n=Hr(vl,Yd,Jd,t);return e=n.ma?(i,r)=>Gg(i,r,n):(i,r)=>{for(;Ug(r)&&r.h!=4;){var s=r.l,a=n[s];if(a==null){var o=n.ba;o&&(o=o[s])&&(o=fb(o))!=null&&(a=n[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,Co(o),o.ha)var l=void 0;else l=o.g.g-a,o.g.g=a,l=Dg(o.g,l);a=void 0,o=i,l&&((a=o[Ln]??(o[Ln]=new ku))[s]??(a[s]=[])).push(l)}}return(i=ll(i))&&(i.da=n.qa[Jf]),!0},t[Gu]=e,t[Jf]=hb.bind(t),e}function hb(t,e,n,i){var r=this[vl];const s=this[Gu],a=Dr(void 0,r.T),o=ll(t);if(o){var l=!1,c=r.ba;if(c){if(r=(u,d,h)=>{if(h.length!==0)if(c[d])for(const p of h){u=Ig(p);try{l=!0,s(a,u)}finally{Ng(u)}}else i?.(t,d,h)},e==null)Bo(o,r);else if(o!=null){const u=o[e];u&&r(o,e,u)}if(l){let u=0|t[Ie];if(2&u&&2048&u&&!n?.Ka)throw Error();const d=Gs(u),h=(p,v)=>{if(qi(t,p,d)!=null){if(n?.Qa===1)return;throw Error()}v!=null&&(u=Wt(t,u,p,v,d)),delete o[p]};e==null?ug(a,0|a[Ie],((p,v)=>{h(p,v)})):h(e,qi(a,e,d))}}}}function fb(t){const e=(t=qg(t))[0].g;if(t=t[1]){const n=Kd(t),i=Hr(vl,Yd,Jd,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function _l(t,e,n){t[e]=n.h}function xl(t,e,n,i){let r,s;const a=n.h;t[e]=(o,l,c)=>a(o,l,c,s||=Hr(gl,_l,xl,i).T,r||=$g(i))}function $g(t){let e=t[Yf];if(!e){const n=Hr(gl,_l,xl,t);e=(i,r)=>jg(i,r,n),t[Yf]=e}return e}function jg(t,e,n){ug(t,0|t[Ie],((i,r)=>{if(r!=null){var s=(function(a,o){var l=a[o];if(l)return l;if((l=a.ba)&&(l=l[o])){var c=(l=qg(l))[0].h;if(l=l[1]){const u=$g(l),d=Hr(gl,_l,xl,l).T;l=a.ma?Hg(d,u):(h,p,v)=>c(h,p,v,d,u)}else l=c;return a[o]=l}})(n,i);s?s(e,r,i):i<500||Cs(Ou,3)}})),(t=ll(t))&&Bo(t,((i,r,s)=>{for(Is(e,e.g.end()),i=0;i<s.length;i++)Is(e,bd(s[i])||new Uint8Array(0))}))}const pb=Pn(0);function Js(t,e){if(Array.isArray(e)){var n=0|e[Ie];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&Yt(e,t),2&t&&Object.freeze(e),e}}function ln(t,e,n){return new Ys(t,e,n)}function Ks(t,e,n){return new Ys(t,e,n)}function cn(t,e,n){Wt(t,0|t[Ie],e,n,Gs(0|t[Ie]))}var mb=ml((function(t,e,n,i,r){if(t.h!==2)return!1;if(t=ti(t=ka(t,Dr([void 0,void 0],i),r)),r=Gs(i=0|e[Ie]),2&i)throw Error();let s=qi(e,n,r);if(s instanceof Hi)(2&s.J)!=0?(s=s.V(),s.push(t),Wt(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var a=0|s[Ie];8192&a||Yt(s,a|=8192),2&a&&(s=Ag(s),Wt(e,i,n,s,r)),s.push(t)}else Wt(e,i,n,Ta([t]),r);return!0}),(function(t,e,n,i,r){if(e instanceof Hi)e.forEach(((s,a)=>{Go(t,n,Dr([a,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&Go(t,n,Dr(a,i),r)}Ta(e)}}));function Xg(t,e,n){(e=pi(e))!=null&&($n(t,n,5),t=t.g,Ed(e),Gd(t))}function Yg(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(Fa(64,i));if(Oa(i)){if(r==="string")return vg(i);if(r==="number")return wd(i)}})(e),e!=null&&(typeof e=="string"&&Xf(e),e!=null))switch($n(t,n,0),typeof e){case"number":t=t.g,Ps(e),fs(t,Lt,zt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Vu(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),fs(t.g,n.h,n.g);break;default:n=Xf(e),fs(t.g,n.h,n.g)}}function Jg(t,e,n){(e=Hs(e))!=null&&e!=null&&($n(t,n,0),hl(t.g,e))}function Kg(t,e,n){(e=pg(e))!=null&&($n(t,n,0),t.g.g.push(e?1:0))}function Zg(t,e,n){(e=en(e))!=null&&fl(t,n,eg(e))}function Qg(t,e,n,i,r){Go(t,n,Wg(e,i),r)}function e0(t,e,n){(e=e==null||typeof e=="string"||e instanceof _i?e:void 0)!=null&&fl(t,n,Bd(e,!0).buffer)}function t0(t,e,n){(e=mg(e))!=null&&e!=null&&($n(t,n,0),Xs(t.g,e))}function n0(t,e,n){return(t.h===5||t.h===2)&&(e=js(e,0|e[Ie],n),t.h==2?dl(t,zo,e):e.push(zo(t.g)),!0)}var Vt=ln((function(t,e,n){return t.h===5&&(cn(e,n,zo(t.g)),!0)}),Xg,pl),gb=Ks(n0,(function(t,e,n){if((e=Js(pi,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&($n(i,r,5),i=i.g,Ed(s),Gd(i))}}),pl),Zd=Ks(n0,(function(t,e,n){if((e=Js(pi,e))!=null&&e.length){$n(t,n,2),Xs(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Ed(e[i]),Gd(n)}}),pl),vb=ln((function(t,e,n){return t.h===5&&(cn(e,n,(t=zo(t.g))===0?void 0:t),!0)}),Xg,pl),ur=ln((function(t,e,n){return t.h!==0?t=!1:(cn(e,n,kd(t.g,fg)),t=!0),t}),Yg,Bg),xc=ln((function(t,e,n){return t.h!==0?e=!1:(cn(e,n,(t=kd(t.g,fg))===pb?void 0:t),e=!0),e}),Yg,Bg),_b=ln((function(t,e,n){return t.h!==0?t=!1:(cn(e,n,kd(t.g,GM)),t=!0),t}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(HM(64,i));if(Oa(i)){if(r==="string")return r=Ds(Number(i)),zr(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(al(i),i=Aa(Lt,zt))),i;if(r==="number")return(i=Ds(i))>=0&&zr(i)||(Ps(i),i=hg(Lt,zt)),i}})(e),e!=null&&(typeof e=="string"&&jf(e),e!=null))switch($n(t,n,0),typeof e){case"number":t=t.g,Ps(e),fs(t,Lt,zt);break;case"bigint":n=BigInt.asUintN(64,e),n=new zu(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),fs(t.g,n.h,n.g);break;default:n=jf(e),fs(t.g,n.h,n.g)}}),cb),qt=ln((function(t,e,n){return t.h===0&&(cn(e,n,cr(t.g)),!0)}),Jg,jd),za=Ks((function(t,e,n){return(t.h===0||t.h===2)&&(e=js(e,0|e[Ie],n),t.h==2?dl(t,cr,e):e.push(cr(t.g)),!0)}),(function(t,e,n){if((e=Js(Hs,e))!=null&&e.length){n=Hd(t,n);for(let i=0;i<e.length;i++)hl(t.g,e[i]);qd(t,n)}}),jd),cs=ln((function(t,e,n){return t.h===0&&(cn(e,n,(t=cr(t.g))===0?void 0:t),!0)}),Jg,jd),Dt=ln((function(t,e,n){return t.h===0&&(cn(e,n,zd(t.g)),!0)}),Kg,Og),Fr=ln((function(t,e,n){return t.h===0&&(cn(e,n,(t=zd(t.g))===!1?void 0:t),!0)}),Kg,Og),rn=Ks((function(t,e,n){return t.h===2&&(t=Vd(t),js(e,0|e[Ie],n).push(t),!0)}),(function(t,e,n){if((e=Js(en,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&fl(i,r,eg(s))}}),$d),sr=ln((function(t,e,n){return t.h===2&&(cn(e,n,(t=Vd(t))===""?void 0:t),!0)}),Zg,$d),St=ln((function(t,e,n){return t.h===2&&(cn(e,n,Vd(t)),!0)}),Zg,$d),Zt=(function(t,e,n=Wd){return new Ys(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=Dr(void 0,i),js(e,0|e[Ie],n).push(i),ka(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)Qg(t,e[s],n,i,r);1&(t=0|e[Ie])||Yt(e,1|t)}})),wt=ml((function(t,e,n,i,r,s){if(t.h!==2)return!1;let a=0|e[Ie];return wg(e,a,s,n,Gs(a)),ka(t,e=Fd(e,i,n),r),!0}),Qg),i0=ln((function(t,e,n){return t.h===2&&(cn(e,n,Fg(t)),!0)}),e0,kg),xb=Ks((function(t,e,n){return(t.h===0||t.h===2)&&(e=js(e,0|e[Ie],n),t.h==2?dl(t,Mi,e):e.push(Mi(t.g)),!0)}),(function(t,e,n){if((e=Js(mg,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&($n(i,r,0),Xs(i.g,s))}}),Xd),Sb=ln((function(t,e,n){return t.h===0&&(cn(e,n,(t=Mi(t.g))===0?void 0:t),!0)}),t0,Xd),on=ln((function(t,e,n){return t.h===0&&(cn(e,n,cr(t.g)),!0)}),(function(t,e,n){(e=Hs(e))!=null&&(e=parseInt(e,10),$n(t,n,0),hl(t.g,e))}),zg);class Mb{constructor(e,n){var i=Un;this.g=e,this.h=n,this.m=lt,this.j=Ge,this.defaultValue=void 0,this.l=i.Oa!=null?dg:void 0}register(){il(this)}}function Ti(t,e){return new Mb(t,e)}function dr(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Ig(n,void 0,void 0,s);try{const a=new t,o=a.v;Kd(e)(o,n);var r=a}finally{Ng(n)}}return r}}function Sl(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};jg(this.v,e,Hr(gl,_l,xl,t)),Is(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var Kf=class extends Ne{constructor(t){super(t)}},Zf=[0,sr,ln((function(t,e,n){return t.h===2&&(cn(e,n,(t=Fg(t))===Br()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof Ne){const i=e.Ra;return void(i?(e=i(e),e!=null&&fl(t,n,Bd(e,!0).buffer)):Cs(Ou,3))}if(Array.isArray(e))return void Cs(Ou,3)}e0(t,e,n)}),kg)];let Sc,Qf=globalThis.trustedTypes;function ep(t){var e;return Sc===void 0&&(Sc=(function(){let n=null;if(!Qf)return n;try{const i=r=>r;n=Qf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=Sc)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function po(t,...e){if(e.length===0)return ep(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return ep(n)}var r0=[0,qt,on,Dt,-1,za,on,-1,Dt],bb=class extends Ne{constructor(t){super(t)}},s0=[0,Dt,St,Dt,on,-1,Ks((function(t,e,n){return(t.h===0||t.h===2)&&(e=js(e,0|e[Ie],n),t.h==2?dl(t,sb,e):e.push(cr(t.g)),!0)}),(function(t,e,n){if((e=Js(Hs,e))!=null&&e.length){n=Hd(t,n);for(let i=0;i<e.length;i++)hl(t.g,e[i]);qd(t,n)}}),zg),St,-1,[0,Dt,-1],on,Dt,-1],a0=[0,3,Dt,-1,2,[0,[2],qt,wt,[0,ln((function(t,e,n){return t.h===0&&(cn(e,n,Mi(t.g)),!0)}),t0,Xd)]],[0,on,Dt,on,Dt,on,Dt,St,-1],[0,[3,4],St,-1,wt,[0,qt],wt,[0,on]],[0]],o0=[0,St,-2],tp=class extends Ne{constructor(t){super(t)}},l0=[0],c0=[0,qt,Dt,1,Dt,-4],Un=class extends Ne{constructor(t){super(t,2)}},$t={};$t[336783863]=[0,St,Dt,-1,qt,[0,[1,2,3,4,5,6,7,8,9],wt,l0,wt,s0,wt,o0,wt,c0,wt,r0,wt,[0,St,-2],wt,[0,St,on],wt,a0,wt,[0,on,-1,Dt]],[0,St],Dt,[0,[1,3],[2,4],wt,[0,za],-1,wt,[0,rn],-1,Zt,[0,St,-1]],St];var np=[0,xc,-1,Fr,-3,xc,za,sr,cs,xc,-1,Fr,cs,Fr,-2,sr];function Ct(t,e){ul(t,3,e)}function tt(t,e){ul(t,4,e)}var Sn=class extends Ne{constructor(t){super(t,500)}o(t){return Ge(this,0,7,t)}},_a=[-1,{}],ip=[0,St,1,_a],rp=[0,St,rn,_a];function jn(t,e){Od(t,1,Sn,e)}function It(t,e){ul(t,10,e)}function ct(t,e){ul(t,15,e)}var Fn=class extends Ne{constructor(t){super(t,500)}o(t){return Ge(this,0,1001,t)}},u0=[-500,Zt,[-500,sr,-1,rn,-3,[-2,$t,Dt],Zt,Zf,cs,-1,ip,rp,Zt,[0,sr,Fr],sr,np,cs,rn,987,rn],4,Zt,[-500,St,-1,[-1,{}],998,St],Zt,[-500,St,rn,-1,[-2,{},Dt],997,rn,-1],cs,Zt,[-500,St,rn,_a,998,rn],rn,cs,ip,rp,Zt,[0,sr,-1,_a],rn,-2,np,sr,-1,Fr,[0,Fr,Sb],978,_a,Zt,Zf];Fn.prototype.g=Sl(u0);var yb=dr(Fn,u0),Eb=class extends Ne{constructor(t){super(t)}},d0=class extends Ne{constructor(t){super(t)}g(){return Wi(this,Eb,1)}},h0=[0,Zt,[0,qt,Vt,St,-1]],Ml=dr(d0,h0),Tb=class extends Ne{constructor(t){super(t)}},Ab=class extends Ne{constructor(t){super(t)}},Mc=class extends Ne{constructor(t){super(t)}l(){return lt(this,Tb,2)}g(){return Wi(this,Ab,5)}},f0=dr(class extends Ne{constructor(t){super(t)}},[0,rn,za,Zd,[0,on,[0,qt,-3],[0,Vt,-3],[0,qt,-1,[0,Zt,[0,qt,-2]]],Zt,[0,Vt,-1,St,Vt]],St,-1,ur,Zt,[0,qt,Vt],rn,ur]),p0=class extends Ne{constructor(t){super(t)}},ps=dr(class extends Ne{constructor(t){super(t)}},[0,Zt,[0,Vt,-4]]),m0=class extends Ne{constructor(t){super(t)}},Va=dr(class extends Ne{constructor(t){super(t)}},[0,Zt,[0,Vt,-4]]),wb=class extends Ne{constructor(t){super(t)}},Cb=[0,qt,-1,Zd,on],g0=class extends Ne{constructor(t){super(t)}};g0.prototype.g=Sl([0,Vt,-4,ur]);var Rb=class extends Ne{constructor(t){super(t)}},Lb=dr(class extends Ne{constructor(t){super(t)}},[0,Zt,[0,1,qt,St,h0],ur]),sp=class extends Ne{constructor(t){super(t)}},Pb=class extends Ne{constructor(t){super(t)}na(){const t=Pt(this,1,void 0,void 0,Tg);return t??Br()}},Db=class extends Ne{constructor(t){super(t)}},v0=[1,2],Ib=dr(class extends Ne{constructor(t){super(t)}},[0,Zt,[0,v0,wt,[0,Zd],wt,[0,i0],qt,St],ur]),Qd=class extends Ne{constructor(t){super(t)}},_0=[0,St,qt,Vt,rn,-1],ap=class extends Ne{constructor(t){super(t)}},Nb=[0,Dt,-1],op=class extends Ne{constructor(t){super(t)}},Ro=[1,2,3,4,5,6],Ho=class extends Ne{constructor(t){super(t)}g(){return Pt(this,1,void 0,void 0,Tg)!=null}l(){return en(Pt(this,2))!=null}},Ot=class extends Ne{constructor(t){super(t)}g(){return pg(Pt(this,2))??!1}},x0=[0,i0,St,[0,qt,ur,-1],[0,_b,ur]],Ht=[0,x0,Dt,[0,Ro,wt,c0,wt,s0,wt,r0,wt,l0,wt,o0,wt,a0],on],bl=class extends Ne{constructor(t){super(t)}},eh=[0,Ht,Vt,-1,qt],Ub=Ti(502141897,bl);$t[502141897]=eh;var Fb=dr(class extends Ne{constructor(t){super(t)}},[0,[0,on,-1,gb,xb],Cb]),S0=class extends Ne{constructor(t){super(t)}},M0=class extends Ne{constructor(t){super(t)}},Hu=[0,Ht,Vt,[0,Ht],Dt],Ob=Ti(508968150,M0);$t[508968150]=[0,Ht,eh,Hu,Vt,[0,[0,x0]]],$t[508968149]=Hu;var as=class extends Ne{constructor(t){super(t)}l(){return lt(this,Qd,2)}g(){vt(this,2)}},b0=[0,Ht,_0];$t[478825465]=b0;var Bb=class extends Ne{constructor(t){super(t)}},y0=class extends Ne{constructor(t){super(t)}},th=class extends Ne{constructor(t){super(t)}},nh=class extends Ne{constructor(t){super(t)}},E0=class extends Ne{constructor(t){super(t)}},lp=[0,Ht,[0,Ht],b0,-1],T0=[0,Ht,Vt,qt],ih=[0,Ht,Vt],A0=[0,Ht,T0,ih,Vt],kb=Ti(479097054,E0);$t[479097054]=[0,Ht,A0,lp],$t[463370452]=lp,$t[464864288]=T0;var zb=Ti(462713202,nh);$t[462713202]=A0,$t[474472470]=ih;var Vb=class extends Ne{constructor(t){super(t)}},w0=class extends Ne{constructor(t){super(t)}},C0=class extends Ne{constructor(t){super(t)}},R0=class extends Ne{constructor(t){super(t)}},rh=[0,Ht,Vt,-1,qt],qu=[0,Ht,Vt,Dt];R0.prototype.g=Sl([0,Ht,ih,[0,Ht],eh,Hu,rh,qu]);var L0=class extends Ne{constructor(t){super(t)}},Gb=Ti(456383383,L0);$t[456383383]=[0,Ht,_0];var P0=class extends Ne{constructor(t){super(t)}},Hb=Ti(476348187,P0);$t[476348187]=[0,Ht,Nb];var D0=class extends Ne{constructor(t){super(t)}},cp=class extends Ne{constructor(t){super(t)}},I0=[0,on,-1],qb=Ti(458105876,class extends Ne{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[Ie];return t=Dn(this,n),e=(function(i,r,s,a){var o=cp;!a&&Ws(i)&&(s=0|(r=i.v)[Ie]);var l=qi(r,2);if(i=!1,l==null){if(a)return Hf();l=[]}else if(l.constructor===Hi){if(!(2&l.J)||a)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[Ie])):l=[];if(a){if(!l.length)return Hf();i||(i=!0,Ua(l))}else i&&(i=!1,Ta(l),l=Ag(l));return!i&&32&s&&Na(l,32),s=Wt(r,s,2,a=new Hi(l,o,$M,void 0)),i||Gr(r,s),a})(this,e,n,t),!t&&cp&&(e.ra=!0),e}});$t[458105876]=[0,I0,mb,[!0,ur,[0,St,-1,rn]],[0,za,Dt,on]];var sh=class extends Ne{constructor(t){super(t)}},N0=Ti(458105758,sh);$t[458105758]=[0,Ht,St,I0];var bc=class extends Ne{constructor(t){super(t)}},up=[0,vb,-1,Fr],Wb=class extends Ne{constructor(t){super(t)}},U0=class extends Ne{constructor(t){super(t)}},Wu=[1,2];U0.prototype.g=Sl([0,Wu,wt,up,wt,[0,Zt,up]]);var F0=class extends Ne{constructor(t){super(t)}},$b=Ti(443442058,F0);$t[443442058]=[0,Ht,St,qt,Vt,rn,-1,Dt,Vt],$t[514774813]=rh;var O0=class extends Ne{constructor(t){super(t)}},jb=Ti(516587230,O0);function $u(t,e){return e=e?e.clone():new Qd,t.displayNamesLocale!==void 0?vt(e,1,Ba(t.displayNamesLocale)):t.displayNamesLocale===void 0&&vt(e,1),t.maxResults!==void 0?$i(e,2,t.maxResults):"maxResults"in t&&vt(e,2),t.scoreThreshold!==void 0?ke(e,3,t.scoreThreshold):"scoreThreshold"in t&&vt(e,3),t.categoryAllowlist!==void 0?ko(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&vt(e,4),t.categoryDenylist!==void 0?ko(e,5,t.categoryDenylist):"categoryDenylist"in t&&vt(e,5),e}function B0(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function ah(t,e=-1,n=""){return{categories:t.map((i=>({index:qn(i,1)??0??-1,score:Bt(i,2)??0,categoryName:en(Pt(i,3))??""??"",displayName:en(Pt(i,4))??""??""}))),headIndex:e,headName:n}}function Xb(t){const e={classifications:Wi(t,Rb,1).map((n=>ah(lt(n,d0,4)?.g()??[],qn(n,2)??0,en(Pt(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(Bu(n)?n=Number(n):(n=Fa(64,n),n=Bu(n)?Number(n):String(n)),n):Oa(n)?typeof n=="number"?wd(n):vg(n):void 0})(Pt(t,2,void 0,void 0,Oo))!=null&&(e.timestampMs=B0(Pt(t,2,void 0,void 0,Oo)??yg)),e}function k0(t){var e=Lr(t,3,pi,Rr()),n=Lr(t,2,Hs,Rr()),i=Lr(t,1,en,Rr()),r=Lr(t,9,en,Rr());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=lt(t,Mc,4)?.l())&&(s.boundingBox={originX:qn(e,1,er)??0,originY:qn(e,2,er)??0,width:qn(e,3,er)??0,height:qn(e,4,er)??0,angle:0}),lt(t,Mc,4)?.g().length)for(const a of lt(t,Mc,4).g())s.keypoints.push({x:Pt(a,1,void 0,er,pi)??0,y:Pt(a,2,void 0,er,pi)??0,score:Pt(a,4,void 0,er,pi)??0,label:en(Pt(a,3,void 0,er))??""});return s}function yl(t){const e=[];for(const n of Wi(t,m0,1))e.push({x:Bt(n,1)??0,y:Bt(n,2)??0,z:Bt(n,3)??0,visibility:Bt(n,4)??0});return e}function xa(t){const e=[];for(const n of Wi(t,p0,1))e.push({x:Bt(n,1)??0,y:Bt(n,2)??0,z:Bt(n,3)??0,visibility:Bt(n,4)??0});return e}function dp(t){return Array.from(t,(e=>e>127?e-256:e))}function hp(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let mo;$t[516587230]=[0,Ht,rh,qu,Vt],$t[518928384]=qu;const Yb=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function z0(t){if(t)return!0;if(mo===void 0)try{await WebAssembly.instantiate(Yb),mo=!0}catch{mo=!1}return mo}async function go(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await z0(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var os=class{};function V0(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function fp(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function G0(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Fe(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function pp(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=G0(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function mp(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function li(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function tr(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}os.forVisionTasks=function(t,e=!1){return go("vision",t??po``,e)},os.forTextTasks=function(t,e=!1){return go("text",t??po``,e)},os.forGenAiTasks=function(t,e=!1){return go("genai",t??po``,e)},os.forAudioTasks=function(t,e=!1){return go("audio",t??po``,e)},os.isSimdSupported=function(t=!1){return z0(t)};async function Jb(t,e,n,i){return t=await(async(r,s,a,o,l)=>{if(s&&await fp(s),!self.ModuleFactory||a&&(await fp(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function yc(t,e){const n=lt(t.baseOptions,Ho,1)||new Ho;typeof e=="string"?(vt(n,2,Ba(e)),vt(n,1)):e instanceof Uint8Array&&(vt(n,1,yd(e,!1)),vt(n,2)),Ge(t.baseOptions,0,1,n)}function gp(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function Te(t,e){t.C=Math.max(t.C,e)}function El(t,e){t.B=new Sn,In(t.B,2,"PassThroughCalculator"),Ct(t.B,"free_memory"),tt(t.B,"free_memory_unused_out"),It(e,"free_memory"),jn(e,t.B)}function Ns(t,e){Ct(t.B,e),tt(t.B,e+"_unused_out")}function Tl(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var ju=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(lt(this.baseOptions,Ho,1)?.g()||lt(this.baseOptions,Ho,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=lt(i.baseOptions,op,3);if(!s){var a=s=new op,o=new tp;va(a,4,Ro,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new bb,va(r,2,Ro,a)):(r=s,a=new tp,va(r,4,Ro,a))),Ge(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),yc(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)yc(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{yc(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=yb(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,gp(this)}finishProcessing(){this.g.finishProcessing(),gp(this)}close(){this.B=void 0,this.g.closeGraph()}};function or(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}ju.prototype.close=ju.prototype.close;class Kb{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function vp(t,e,n){const i=t.g;if(n=or(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function _p(t,e){const n=t.g,i=or(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=or(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=or(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new Kb(n,i,r,s)}function oh(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function Zb(t,e,n,i){return oh(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=_p(t,!0)),n=t.u):(t.A||(t.A=_p(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function H0(t,e,n){return oh(t,e),t=or(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function q0(t,e,n){oh(t,e),t.B||(t.B=or(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Qb(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var W0=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=or(t.createProgram(),"Failed to create WebGL program"),this.X=vp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=vp(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Ni(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Xu(t){var e=Ni(t,1);if(!e){if(e=Ni(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=Us(t);var n=lh(t);if(q0(n,i,$0(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function $0(t){let e=Ni(t,2);if(!e){const n=Us(t);e=X0(t);const i=Xu(t),r=j0(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Yu(t)}return e}function Us(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=or(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function j0(t){if(t=Us(t),!vo)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))vo=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");vo=t.R16F}return vo}function lh(t){return t.l||(t.l=new W0),t.l}function X0(t){const e=Us(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ni(t,2);return n||(n=H0(lh(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Yu(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var vo,Kt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--xp===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Ni(this,0)}ka(){return!!Ni(this,1)}R(){return!!Ni(this,2)}ja(){return(e=Ni(t=this,0))||(e=Xu(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return Xu(this)}N(){return $0(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Us(this),r=lh(this);i.activeTexture(i.TEXTURE1),n=H0(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=j0(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),q0(r,i,n),Zb(r,i,!1,(()=>{X0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Yu(this)})),Qb(r),Yu(this)}}t.push(n)}return new Kt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Us(this).deleteTexture(Ni(this,2)),xp=-1}};Kt.prototype.close=Kt.prototype.close,Kt.prototype.clone=Kt.prototype.clone,Kt.prototype.getAsWebGLTexture=Kt.prototype.N,Kt.prototype.getAsFloat32Array=Kt.prototype.ia,Kt.prototype.getAsUint8Array=Kt.prototype.ja,Kt.prototype.hasWebGLTexture=Kt.prototype.R,Kt.prototype.hasFloat32Array=Kt.prototype.ka,Kt.prototype.hasUint8Array=Kt.prototype.Fa;var xp=250;function ii(...t){return t.map((([e,n])=>({start:e,end:n})))}const ey=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((Sp=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:V0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Fe(this,i||"input_audio",(s=>{Fe(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){li(this,"__graph_config__",(e=>{t(e)})),Fe(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Fe(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){Fe(this,e,(i=>{const[r,s]=pp(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){Fe(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Fe(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Fe(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Fe(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Fe(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Fe(this,e,(i=>{Fe(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){Fe(this,e,(i=>{mp(this,Object.keys(t),(r=>{mp(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Fe(this,n,(r=>{Fe(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){Fe(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){Fe(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Fe(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){Fe(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Fe(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Fe(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Fe(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Fe(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Fe(this,e,(n=>{Fe(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Fe(this,n,(i=>{Fe(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Fe(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Fe(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){li(this,t,e),Fe(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){tr(this,t,e),Fe(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){li(this,t,e),Fe(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){tr(this,t,e),Fe(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){li(this,t,e),Fe(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){tr(this,t,e),Fe(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){li(this,t,e),Fe(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){tr(this,t,e),Fe(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){li(this,t,e),Fe(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){tr(this,t,e),Fe(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){li(this,t,e),Fe(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){tr(this,t,e),Fe(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){li(this,t,e),Fe(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){tr(this,t,e),Fe(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),li(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),Fe(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Sp{get ga(){return this.i}pa(t,e,n){Fe(this,e,(i=>{const[r,s]=pp(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(t,e){li(this,t,e),Fe(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){tr(this,t,e),Fe(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var Sp,ri=class extends ey{};async function st(t,e,n){return(async function(i,r,s,a){return Jb(i,r,s,a)})(t,n.canvas??(V0()?void 0:document.createElement("canvas")),e,n)}function Y0(t,e,n,i){if(t.U){const s=new g0;if(n?.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");ke(s,1,(r.left+r.right)/2),ke(s,2,(r.top+r.bottom)/2),ke(s,4,r.right-r.left),ke(s,3,r.bottom-r.top)}else ke(s,1,.5),ke(s,2,.5),ke(s,4,1),ke(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(ke(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=G0(e);n=Bt(s,3)*o/a,r=Bt(s,4)*a/o,ke(s,4,n),ke(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function si(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Y0(t,e,n,t.C+1)}function Ai(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Y0(t,e,n,i)}function Fs(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Kt([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var Nn=class extends ju{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new W0}l(t,e=!0){if("runningMode"in t&&vt(this.baseOptions,2,wa(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Nn.prototype.close=Nn.prototype.close;var kn=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ge(t=this.h=new bl,0,1,e=new Ot),ke(this.h,2,.5),ke(this.h,3,.3)}get baseOptions(){return lt(this.h,Ot,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&ke(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&ke(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},si(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ai(this,t,n,e),this.j}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect_in"),ct(t,"detections");const e=new Un;Ei(e,Ub,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect_in"),tt(n,"DETECTIONS:detections"),n.o(e),jn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=f0(s),this.j.detections.push(k0(i));Te(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Te(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};kn.prototype.detectForVideo=kn.prototype.G,kn.prototype.detect=kn.prototype.F,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=async function(t,e){return st(kn,t,{baseOptions:{modelAssetPath:e}})},kn.createFromModelBuffer=function(t,e){return st(kn,t,{baseOptions:{modelAssetBuffer:e}})},kn.createFromOptions=function(t,e){return st(kn,t,e)};var ch=ii([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),uh=ii([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),dh=ii([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),J0=ii([474,475],[475,476],[476,477],[477,474]),hh=ii([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),fh=ii([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),K0=ii([469,470],[470,471],[471,472],[472,469]),ph=ii([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Z0=[...ch,...uh,...dh,...hh,...fh,...ph],Q0=ii([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Mp(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Rt=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ge(t=this.h=new M0,0,1,e=new Ot),this.A=new S0,Ge(this.h,0,3,this.A),this.u=new bl,Ge(this.h,0,2,this.u),$i(this.u,4,1),ke(this.u,2,.5),ke(this.A,2,.5),ke(this.h,4,.5)}get baseOptions(){return lt(this.h,Ot,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"numFaces"in t&&$i(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&ke(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&ke(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&ke(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return Mp(this),si(this,t,e),this.j}G(t,e,n){return Mp(this),Ai(this,t,n,e),this.j}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect"),ct(t,"face_landmarks");const e=new Un;Ei(e,Ob,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),tt(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),jn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=Va(s),this.j.faceLandmarks.push(yl(i));Te(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{Te(this,i)})),this.outputFaceBlendshapes&&(ct(t,"blendshapes"),tt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Ml(s),this.j.faceBlendshapes.push(ah(i.g()??[]));Te(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{Te(this,i)}))),this.outputFacialTransformationMatrixes&&(ct(t,"face_geometry"),tt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=lt(i=Fb(s),wb,2))&&this.j.facialTransformationMatrixes.push({rows:qn(i,1)??0??0,columns:qn(i,2)??0??0,data:Lr(i,3,pi,Rr()).slice()??[]});Te(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{Te(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Rt.prototype.detectForVideo=Rt.prototype.G,Rt.prototype.detect=Rt.prototype.F,Rt.prototype.setOptions=Rt.prototype.o,Rt.createFromModelPath=function(t,e){return st(Rt,t,{baseOptions:{modelAssetPath:e}})},Rt.createFromModelBuffer=function(t,e){return st(Rt,t,{baseOptions:{modelAssetBuffer:e}})},Rt.createFromOptions=function(t,e){return st(Rt,t,e)},Rt.FACE_LANDMARKS_LIPS=ch,Rt.FACE_LANDMARKS_LEFT_EYE=uh,Rt.FACE_LANDMARKS_LEFT_EYEBROW=dh,Rt.FACE_LANDMARKS_LEFT_IRIS=J0,Rt.FACE_LANDMARKS_RIGHT_EYE=hh,Rt.FACE_LANDMARKS_RIGHT_EYEBROW=fh,Rt.FACE_LANDMARKS_RIGHT_IRIS=K0,Rt.FACE_LANDMARKS_FACE_OVAL=ph,Rt.FACE_LANDMARKS_CONTOURS=Z0,Rt.FACE_LANDMARKS_TESSELATION=Q0;var mh=ii([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function bp(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function yp(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Ep(t,e=!0){const n=[];for(const r of t){var i=Ml(r);t=[];for(const s of i.g())i=e&&qn(s,1)!=null?qn(s,1)??0:-1,t.push({score:Bt(s,2)??0,index:i,categoryName:en(Pt(s,3))??""??"",displayName:en(Pt(s,4))??""??""});n.push(t)}return n}var Tn=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ge(t=this.j=new E0,0,1,e=new Ot),this.u=new nh,Ge(this.j,0,2,this.u),this.D=new th,Ge(this.u,0,3,this.D),this.A=new y0,Ge(this.u,0,2,this.A),this.h=new Bb,Ge(this.j,0,3,this.h),ke(this.A,2,.5),ke(this.u,4,.5),ke(this.D,2,.5)}get baseOptions(){return lt(this.j,Ot,1)}set baseOptions(t){Ge(this.j,0,1,t)}o(t){if($i(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&ke(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ke(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ke(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new as,n=e,i=$u(t.cannedGesturesClassifierOptions,lt(this.h,as,3)?.l());Ge(n,0,2,i),Ge(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&lt(this.h,as,3)?.g();return t.customGesturesClassifierOptions?(Ge(n=e=new as,0,2,i=$u(t.customGesturesClassifierOptions,lt(this.h,as,4)?.l())),Ge(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&lt(this.h,as,4)?.g(),this.l(t)}Ha(t,e){return bp(this),si(this,t,e),yp(this)}Ia(t,e,n){return bp(this),Ai(this,t,n,e),yp(this)}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect"),ct(t,"hand_gestures"),ct(t,"hand_landmarks"),ct(t,"world_hand_landmarks"),ct(t,"handedness");const e=new Un;Ei(e,kb,this.j);const n=new Sn;In(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),tt(n,"HAND_GESTURES:hand_gestures"),tt(n,"LANDMARKS:hand_landmarks"),tt(n,"WORLD_LANDMARKS:world_hand_landmarks"),tt(n,"HANDEDNESS:handedness"),n.o(e),jn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=Va(s);const a=[];for(const o of Wi(i,m0,1))a.push({x:Bt(o,1)??0,y:Bt(o,2)??0,z:Bt(o,3)??0,visibility:Bt(o,4)??0});this.landmarks.push(a)}Te(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Te(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=ps(s);const a=[];for(const o of Wi(i,p0,1))a.push({x:Bt(o,1)??0,y:Bt(o,2)??0,z:Bt(o,3)??0,visibility:Bt(o,4)??0});this.worldLandmarks.push(a)}Te(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Te(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...Ep(i,!1)),Te(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{Te(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...Ep(i)),Te(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Te(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Tp(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Tn.prototype.recognizeForVideo=Tn.prototype.Ia,Tn.prototype.recognize=Tn.prototype.Ha,Tn.prototype.setOptions=Tn.prototype.o,Tn.createFromModelPath=function(t,e){return st(Tn,t,{baseOptions:{modelAssetPath:e}})},Tn.createFromModelBuffer=function(t,e){return st(Tn,t,{baseOptions:{modelAssetBuffer:e}})},Tn.createFromOptions=function(t,e){return st(Tn,t,e)},Tn.HAND_CONNECTIONS=mh;var An=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ge(t=this.h=new nh,0,1,e=new Ot),this.u=new th,Ge(this.h,0,3,this.u),this.j=new y0,Ge(this.h,0,2,this.j),$i(this.j,3,1),ke(this.j,2,.5),ke(this.u,2,.5),ke(this.h,4,.5)}get baseOptions(){return lt(this.h,Ot,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"numHands"in t&&$i(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&ke(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ke(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ke(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],si(this,t,e),Tp(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ai(this,t,n,e),Tp(this)}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect"),ct(t,"hand_landmarks"),ct(t,"world_hand_landmarks"),ct(t,"handedness");const e=new Un;Ei(e,zb,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),tt(n,"LANDMARKS:hand_landmarks"),tt(n,"WORLD_LANDMARKS:world_hand_landmarks"),tt(n,"HANDEDNESS:handedness"),n.o(e),jn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=Va(s),this.landmarks.push(yl(i));Te(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Te(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=ps(s),this.worldLandmarks.push(xa(i));Te(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Te(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const l of i){i=Ml(l);const c=[];for(const u of i.g())c.push({score:Bt(u,2)??0,index:qn(u,1)??0??-1,categoryName:en(Pt(u,3))??""??"",displayName:en(Pt(u,4))??""??""});o.push(c)}a.call(s,...o),Te(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{Te(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};An.prototype.detectForVideo=An.prototype.G,An.prototype.detect=An.prototype.F,An.prototype.setOptions=An.prototype.o,An.createFromModelPath=function(t,e){return st(An,t,{baseOptions:{modelAssetPath:e}})},An.createFromModelBuffer=function(t,e){return st(An,t,{baseOptions:{modelAssetBuffer:e}})},An.createFromOptions=function(t,e){return st(An,t,e)},An.HAND_CONNECTIONS=mh;var ev=ii([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Ap(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function wp(t){try{if(!t.D)return t.h;t.D(t.h)}finally{Tl(t)}}function _o(t,e){t=Va(t),e.push(yl(t))}var At=class extends Nn{constructor(t,e){super(new ri(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ge(t=this.j=new R0,0,1,e=new Ot),this.I=new th,Ge(this.j,0,2,this.I),this.W=new Vb,Ge(this.j,0,3,this.W),this.u=new bl,Ge(this.j,0,4,this.u),this.O=new S0,Ge(this.j,0,5,this.O),this.A=new w0,Ge(this.j,0,6,this.A),this.M=new C0,Ge(this.j,0,7,this.M),ke(this.u,2,.5),ke(this.u,3,.3),ke(this.O,2,.5),ke(this.A,2,.5),ke(this.A,3,.3),ke(this.M,2,.5),ke(this.I,2,.5)}get baseOptions(){return lt(this.j,Ot,1)}set baseOptions(t){Ge(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&ke(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&ke(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&ke(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&ke(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&ke(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&ke(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&ke(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,Ap(this),si(this,t,i),wp(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Ap(this),Ai(this,t,r,e),wp(this)}m(){var t=new Fn;It(t,"input_frames_image"),ct(t,"pose_landmarks"),ct(t,"pose_world_landmarks"),ct(t,"face_landmarks"),ct(t,"left_hand_landmarks"),ct(t,"left_hand_world_landmarks"),ct(t,"right_hand_landmarks"),ct(t,"right_hand_world_landmarks");const e=new Un,n=new Kf;In(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))vt(r,2,cl(s,0,Ca));else{if(!(typeof s=="string"||s instanceof _i||Md(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");ir(r,2,yd(s,!1),Br())}})(n,this.j.g());const i=new Sn;In(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Od(i,8,Kf,n),Ct(i,"IMAGE:input_frames_image"),tt(i,"POSE_LANDMARKS:pose_landmarks"),tt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),tt(i,"FACE_LANDMARKS:face_landmarks"),tt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),tt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),tt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),tt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),jn(t,i),El(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{_o(r,this.h.poseLandmarks),Te(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{Te(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=ps(r),a.push(xa(r)),Te(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{Te(this,r)})),this.outputPoseSegmentationMasks&&(tt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ns(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[Fs(this,r,!0,!this.D)],Te(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],Te(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{_o(r,this.h.faceLandmarks),Te(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{Te(this,r)})),this.outputFaceBlendshapes&&(ct(t,"extra_blendshapes"),tt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Ml(r),a.push(ah(r.g()??[]))),Te(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{Te(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{_o(r,this.h.leftHandLandmarks),Te(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{Te(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=ps(r),a.push(xa(r)),Te(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{Te(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{_o(r,this.h.rightHandLandmarks),Te(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{Te(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=ps(r),a.push(xa(r)),Te(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{Te(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};At.prototype.detectForVideo=At.prototype.G,At.prototype.detect=At.prototype.F,At.prototype.setOptions=At.prototype.o,At.createFromModelPath=function(t,e){return st(At,t,{baseOptions:{modelAssetPath:e}})},At.createFromModelBuffer=function(t,e){return st(At,t,{baseOptions:{modelAssetBuffer:e}})},At.createFromOptions=function(t,e){return st(At,t,e)},At.HAND_CONNECTIONS=mh,At.POSE_CONNECTIONS=ev,At.FACE_LANDMARKS_LIPS=ch,At.FACE_LANDMARKS_LEFT_EYE=uh,At.FACE_LANDMARKS_LEFT_EYEBROW=dh,At.FACE_LANDMARKS_LEFT_IRIS=J0,At.FACE_LANDMARKS_RIGHT_EYE=hh,At.FACE_LANDMARKS_RIGHT_EYEBROW=fh,At.FACE_LANDMARKS_RIGHT_IRIS=K0,At.FACE_LANDMARKS_FACE_OVAL=ph,At.FACE_LANDMARKS_CONTOURS=Z0,At.FACE_LANDMARKS_TESSELATION=Q0;var zn=class extends Nn{constructor(t,e){super(new ri(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ge(t=this.h=new L0,0,1,e=new Ot)}get baseOptions(){return lt(this.h,Ot,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return Ge(this.h,0,2,$u(t,lt(this.h,Qd,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},si(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Ai(this,t,n,e),this.j}m(){var t=new Fn;It(t,"input_image"),It(t,"norm_rect"),ct(t,"classifications");const e=new Un;Ei(e,Gb,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ct(n,"IMAGE:input_image"),Ct(n,"NORM_RECT:norm_rect"),tt(n,"CLASSIFICATIONS:classifications"),n.o(e),jn(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=Xb(Lb(i)),Te(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{Te(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};zn.prototype.classifyForVideo=zn.prototype.ta,zn.prototype.classify=zn.prototype.sa,zn.prototype.setOptions=zn.prototype.o,zn.createFromModelPath=function(t,e){return st(zn,t,{baseOptions:{modelAssetPath:e}})},zn.createFromModelBuffer=function(t,e){return st(zn,t,{baseOptions:{modelAssetBuffer:e}})},zn.createFromOptions=function(t,e){return st(zn,t,e)};var wn=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!0),this.h=new P0,this.embeddings={embeddings:[]},Ge(t=this.h,0,1,e=new Ot)}get baseOptions(){return lt(this.h,Ot,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){var e=this.h,n=lt(this.h,ap,2);return n=n?n.clone():new ap,t.l2Normalize!==void 0?vt(n,1,wa(t.l2Normalize)):"l2Normalize"in t&&vt(n,1),t.quantize!==void 0?vt(n,2,wa(t.quantize)):"quantize"in t&&vt(n,2),Ge(e,0,2,n),this.l(t)}za(t,e){return si(this,t,e),this.embeddings}Aa(t,e,n){return Ai(this,t,n,e),this.embeddings}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect"),ct(t,"embeddings_out");const e=new Un;Ei(e,Hb,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),tt(n,"EMBEDDINGS:embeddings_out"),n.o(e),jn(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=Ib(i),this.embeddings=(function(s){return{embeddings:Wi(s,Db,1).map((a=>{const o={headIndex:qn(a,3)??0??-1,headName:en(Pt(a,4))??""??""};var l=a.v;return Cg(l,0|l[Ie],sp,_c(a,1))!==void 0?(a=Lr(a=lt(a,sp,_c(a,1),void 0),1,pi,Rr()),o.floatEmbedding=a.slice()):(l=new Uint8Array(0),o.quantizedEmbedding=lt(a,Pb,_c(a,2),void 0)?.na()?.h()??l),o})),timestampMs:B0(Pt(s,2,void 0,void 0,Oo)??yg)}})(i),Te(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{Te(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};wn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=hp(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=hp(dp(t.quantizedEmbedding),dp(e.quantizedEmbedding))}return t},wn.prototype.embedForVideo=wn.prototype.Aa,wn.prototype.embed=wn.prototype.za,wn.prototype.setOptions=wn.prototype.o,wn.createFromModelPath=function(t,e){return st(wn,t,{baseOptions:{modelAssetPath:e}})},wn.createFromModelBuffer=function(t,e){return st(wn,t,{baseOptions:{modelAssetBuffer:e}})},wn.createFromOptions=function(t,e){return st(wn,t,e)};var Ju=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function ty(t){const e=(function(n){return Wi(n,Sn,1)})(t.ca()).filter((n=>(en(Pt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(lt(e[0],Un,7)?.j()?.g()??new Map).forEach(((n,i)=>{t.u[Number(i)]=en(Pt(n,1))??""}))}function Cp(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Rp(t){try{const e=new Ju(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Tl(t)}}Ju.prototype.close=Ju.prototype.close;var _n=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new sh,this.A=new D0,Ge(this.h,0,3,this.A),Ge(t=this.h,0,1,e=new Ot)}get baseOptions(){return lt(this.h,Ot,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?vt(this.h,2,Ba(t.displayNamesLocale)):"displayNamesLocale"in t&&vt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){ty(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Cp(this),si(this,t,i),Rp(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Cp(this),Ai(this,t,r,e),Rp(this)}Da(){return this.u}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect");const e=new Un;Ei(e,N0,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),n.o(e),jn(t,n),El(this,t),this.outputConfidenceMasks&&(ct(t,"confidence_masks"),tt(n,"CONFIDENCE_MASKS:confidence_masks"),Ns(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Fs(this,s,!0,!this.j))),Te(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Te(this,i)}))),this.outputCategoryMask&&(ct(t,"category_mask"),tt(n,"CATEGORY_MASK:category_mask"),Ns(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Fs(this,i,!1,!this.j),Te(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Te(this,i)}))),ct(t,"quality_scores"),tt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Te(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Te(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_n.prototype.getLabels=_n.prototype.Da,_n.prototype.segmentForVideo=_n.prototype.La,_n.prototype.segment=_n.prototype.segment,_n.prototype.setOptions=_n.prototype.o,_n.createFromModelPath=function(t,e){return st(_n,t,{baseOptions:{modelAssetPath:e}})},_n.createFromModelBuffer=function(t,e){return st(_n,t,{baseOptions:{modelAssetBuffer:e}})},_n.createFromOptions=function(t,e){return st(_n,t,e)};var Ku=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};Ku.prototype.close=Ku.prototype.close;var ci=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new sh,this.u=new D0,Ge(this.h,0,3,this.u),Ge(t=this.h,0,1,e=new Ot)}get baseOptions(){return lt(this.h,Ot,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new U0,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new bc;ir(s,3,wa(!0),!1),ir(s,1,pa(e.keypoint.x),0),ir(s,2,pa(e.keypoint.y),0),va(i,1,Wu,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new Wb;for(s of e.scribble)ir(e=new bc,3,wa(!0),!1),ir(e,1,pa(s.x),0),ir(e,2,pa(s.y),0),Od(o,1,bc,e);va(i,2,Wu,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),si(this,t,r);e:{try{const o=new Ku(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break e}this.j(o)}finally{Tl(this)}a=void 0}return a}m(){var t=new Fn;It(t,"image_in"),It(t,"roi_in"),It(t,"norm_rect_in");const e=new Un;Ei(e,N0,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Ct(n,"IMAGE:image_in"),Ct(n,"ROI:roi_in"),Ct(n,"NORM_RECT:norm_rect_in"),n.o(e),jn(t,n),El(this,t),this.outputConfidenceMasks&&(ct(t,"confidence_masks"),tt(n,"CONFIDENCE_MASKS:confidence_masks"),Ns(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Fs(this,s,!0,!this.j))),Te(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Te(this,i)}))),this.outputCategoryMask&&(ct(t,"category_mask"),tt(n,"CATEGORY_MASK:category_mask"),Ns(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Fs(this,i,!1,!this.j),Te(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Te(this,i)}))),ct(t,"quality_scores"),tt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,Te(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Te(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ci.prototype.segment=ci.prototype.segment,ci.prototype.setOptions=ci.prototype.o,ci.createFromModelPath=function(t,e){return st(ci,t,{baseOptions:{modelAssetPath:e}})},ci.createFromModelBuffer=function(t,e){return st(ci,t,{baseOptions:{modelAssetBuffer:e}})},ci.createFromOptions=function(t,e){return st(ci,t,e)};var Vn=class extends Nn{constructor(t,e){super(new ri(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ge(t=this.h=new F0,0,1,e=new Ot)}get baseOptions(){return lt(this.h,Ot,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?vt(this.h,2,Ba(t.displayNamesLocale)):"displayNamesLocale"in t&&vt(this.h,2),t.maxResults!==void 0?$i(this.h,3,t.maxResults):"maxResults"in t&&vt(this.h,3),t.scoreThreshold!==void 0?ke(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&vt(this.h,4),t.categoryAllowlist!==void 0?ko(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&vt(this.h,5),t.categoryDenylist!==void 0?ko(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&vt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},si(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ai(this,t,n,e),this.j}m(){var t=new Fn;It(t,"input_frame_gpu"),It(t,"norm_rect"),ct(t,"detections");const e=new Un;Ei(e,$b,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ct(n,"IMAGE:input_frame_gpu"),Ct(n,"NORM_RECT:norm_rect"),tt(n,"DETECTIONS:detections"),n.o(e),jn(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=f0(s),this.j.detections.push(k0(i));Te(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{Te(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Vn.prototype.detectForVideo=Vn.prototype.G,Vn.prototype.detect=Vn.prototype.F,Vn.prototype.setOptions=Vn.prototype.o,Vn.createFromModelPath=async function(t,e){return st(Vn,t,{baseOptions:{modelAssetPath:e}})},Vn.createFromModelBuffer=function(t,e){return st(Vn,t,{baseOptions:{modelAssetBuffer:e}})},Vn.createFromOptions=function(t,e){return st(Vn,t,e)};var Zu=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function Lp(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Pp(t){try{const e=new Zu(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{Tl(t)}}Zu.prototype.close=Zu.prototype.close;var Cn=class extends Nn{constructor(t,e){super(new ri(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ge(t=this.h=new O0,0,1,e=new Ot),this.A=new C0,Ge(this.h,0,3,this.A),this.j=new w0,Ge(this.h,0,2,this.j),$i(this.j,4,1),ke(this.j,2,.5),ke(this.A,2,.5),ke(this.h,4,.5)}get baseOptions(){return lt(this.h,Ot,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"numPoses"in t&&$i(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&ke(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&ke(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&ke(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,Lp(this),si(this,t,i),Pp(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Lp(this),Ai(this,t,r,e),Pp(this)}m(){var t=new Fn;It(t,"image_in"),It(t,"norm_rect"),ct(t,"normalized_landmarks"),ct(t,"world_landmarks"),ct(t,"segmentation_masks");const e=new Un;Ei(e,jb,this.h);const n=new Sn;In(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ct(n,"IMAGE:image_in"),Ct(n,"NORM_RECT:norm_rect"),tt(n,"NORM_LANDMARKS:normalized_landmarks"),tt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),jn(t,n),El(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=Va(s),this.landmarks.push(yl(i));Te(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],Te(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=ps(s),this.worldLandmarks.push(xa(i));Te(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],Te(this,i)})),this.outputSegmentationMasks&&(tt(n,"SEGMENTATION_MASK:segmentation_masks"),Ns(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>Fs(this,s,!0,!this.u))),Te(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],Te(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Cn.prototype.detectForVideo=Cn.prototype.G,Cn.prototype.detect=Cn.prototype.F,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(t,e){return st(Cn,t,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(t,e){return st(Cn,t,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(t,e){return st(Cn,t,e)},Cn.POSE_CONNECTIONS=ev;function ny(t){return t==="arriere"?"arriere":"avant"}function iy(t){return t==="avant"?"arriere":"avant"}function ry(t){return{video:{facingMode:{ideal:t==="arriere"?"environment":"user"}},audio:!1}}function sy(t){return t==="avant"}function ay(){return"Je vais allumer ma caméra pour te voir et réagir avec toi. Rien n’est enregistré ni envoyé : tout reste dans ton appareil. Tu peux l’éteindre quand tu veux."}const tv="nath.camera.face";function oy(t){return ny(t.getItem(tv))}function ly(t,e){t.setItem(tv,e)}const cy="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",uy="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm";let Ec=null;function dy(){return Ec||(Ec=os.forVisionTasks(uy).then(t=>Rt.createFromOptions(t,{baseOptions:{modelAssetPath:cy},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!0}))),Ec}async function hy(t,e,n){const i=await dy();let r=null,s=!0,a=performance.now();const o=async c=>{r&&r.getTracks().forEach(u=>u.stop()),r=await navigator.mediaDevices.getUserMedia(ry(c)),t.srcObject=r,t.style.transform=sy(c)?"scaleX(-1)":"none",await t.play()},l=()=>{if(s){if(t.readyState>=2){const c=performance.now(),d=i.detectForVideo(t,c).faceBlendshapes?.[0]?.categories;if(d){a=c;const h=p=>d.find(v=>v.categoryName===p)?.score??0;n({smile:(h("mouthSmileLeft")+h("mouthSmileRight"))/2,browDown:(h("browDownLeft")+h("browDownRight"))/2,eyeBlink:(h("eyeBlinkLeft")+h("eyeBlinkRight"))/2,jawOpen:h("jawOpen")})}else c-a>2e3&&n({smile:0,browDown:0,eyeBlink:0,jawOpen:0})}requestAnimationFrame(l)}};return await o(e),requestAnimationFrame(l),{eteindre(){s=!1,r&&(r.getTracks().forEach(c=>c.stop()),r=null),t.srcObject=null},async basculer(c){await o(c)}}}class fy{constructor(e,n,i,r){this.video=e,this.storage=n,this.onShapes=i,this.onEtat=r,this.face=oy(n)}video;storage;onShapes;onEtat;manege=null;face;get ouverte(){return this.manege!=null}get faceCourante(){return this.face}async basculer(){return this.manege?(this.manege.eteindre(),this.manege=null,this.onEtat(!1),!1):(this.manege=await hy(this.video,this.face,this.onShapes),this.onEtat(!0),!0)}async basculerFace(){return this.face=iy(this.face),ly(this.storage,this.face),this.manege&&await this.manege.basculer(this.face),this.face}}function py(t){const e={joie:t.smile*1.2,tension:t.browDown*1+(t.eyeBlink<.2?.1:0),tristesse:t.eyeBlink*.8+t.jawOpen*.2-t.smile,calme:.15};return Object.entries(e).sort((n,i)=>i[1]-n[1])[0][0]}function my(t=20){let e="calme",n=null,i=0;return r=>r===e?(n=null,i=0,e):(r===n?i++:(n=r,i=1),i>=t&&(e=r,n=null,i=0),e)}function gy(t){const e=t.reduce((n,i)=>n+i,0)/t.length;return t.map(n=>n-e)}function vy(t,e){return t.map((n,i)=>{const r=Math.max(0,i-e+1);return t.slice(r,i+1).reduce((s,a)=>s+a,0)/(i+1-r)})}function _y(t){const e=[];for(let n=1;n<t.length;n++)t[n-1]<=0&&t[n]>0&&e.push(n);return e}function xy(t,e){if(t.length<Math.floor(e*4))return null;const n=gy(t.slice(-Math.floor(e*10))),i=vy(n,5),r=_y(i);if(r.length<3)return null;const s=(r[r.length-1]-r[0])/(r.length-1),a=60*e/s;return a>=30&&a<=180?a:null}function Sy(t,e){if(t.readyState<2)return null;const n=24,i=24;e.drawImage(t,t.videoWidth*.35,t.videoHeight*.35,n,i,0,0,n,i);const r=e.getImageData(0,0,n,i).data;let s=0;for(let a=0;a<r.length;a+=4)s+=.299*r[a]+.587*r[a+1]+.114*r[a+2];return s/(n*i)}function Dp(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}const Ip=["Brume","Aube","Zéphyr","Nimbus","Cirrus","Écho","Lueur","Souffle","Voile","Nébuleuse"],Np=["dorée","bleue","polaire","douce","haute","sereine","vague","claire"];function Tc(t){return"#"+(t&16777215).toString(16).padStart(6,"0")}function My(t){const e=Dp(t),n=Dp(t+"|2");return{nom:`${Ip[e%Ip.length]} ${Np[n%Np.length]}`,palette:[Tc(1056832+(e&3092287)),Tc(6320272+(e>>8&4144975)),Tc(13689072+(e>>16&986895))],musiqueSeed:n}}function by(t,e){const n=(i,r)=>{const s=t.getBoundingClientRect();e((i-s.left)/s.width,1-(r-s.top)/s.height)};t.addEventListener("pointermove",i=>n(i.clientX,i.clientY)),t.addEventListener("touchmove",i=>{const r=i.touches[0];r&&n(r.clientX,r.clientY)},{passive:!0})}function yy(t){window.addEventListener("deviceorientation",e=>{e.gamma!=null&&e.beta!=null&&t(Math.max(-1,Math.min(1,e.gamma/45)),Math.max(-1,Math.min(1,(e.beta-45)/45)))})}const Up={calme:[0,2,4,7,9],joie:[0,4,7,11],tristesse:[0,3,5,8,10],tension:[0,1,6,8,11]};function Ey(t){return Up[t]??Up.calme}function Ty(t,e,n){const i=Math.imul(t^Math.imul(e+1,2654435761),2246822507)>>>0,r=Ey(n),s=r[i%r.length];return{midi:48+12*((i>>>8)%2)+s,duree:1.5+(i>>>16)%20/10}}function Fp(t){return 440*Math.pow(2,(t-69)/12)}let fn=null,ki=null,Ay=0,nv=0,iv="calme",rv=0,Al=!1;function Op(){if(!fn||!ki||Al)return;const t=Ty(nv,Ay++,iv),e=fn.currentTime,n=fn.createGain();n.connect(ki);const i=.16+rv*.1;n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(i,e+Math.min(1.2,t.duree*.4)),n.gain.exponentialRampToValueAtTime(1e-4,e+t.duree+1.5);const r=fn.createOscillator();r.type="triangle",r.frequency.value=Fp(t.midi);const s=fn.createOscillator();s.type="sine",s.frequency.value=Fp(t.midi-12);const a=fn.createGain();a.gain.value=.5,s.connect(a),a.connect(n),r.connect(n),r.start(e),s.start(e),r.stop(e+t.duree+1.6),s.stop(e+t.duree+1.6)}function sv(t){if(fn)return!0;try{fn=new AudioContext,nv=t>>>0,ki=fn.createGain(),ki.gain.value=Al?0:.5;const e=fn.createBiquadFilter();return e.type="lowpass",e.frequency.value=1200,e.Q.value=.4,ki.connect(e),e.connect(fn.destination),window.setInterval(Op,2600),Op(),!0}catch{return!1}}function wy(t){iv=t}function Cy(t){rv=Math.max(0,Math.min(1,t))}function av(){Al=!0,ki&&fn&&ki.gain.linearRampToValueAtTime(0,fn.currentTime+.4)}function Ry(){Al=!1,ki&&fn&&ki.gain.linearRampToValueAtTime(.5,fn.currentTime+.4)}const ov="nath.musique";function wl(t){return t.getItem(ov)==="eteinte"}function Ly(t){const e=!wl(t);return t.setItem(ov,e?"eteinte":"active"),e}const Qu={zero:0,un:1,une:1,deux:2,trois:3,quatre:4,cinq:5,six:6,sept:7,huit:8,neuf:9,dix:10,onze:11,douze:12,treize:13,quatorze:14,quinze:15,seize:16,"dix-sept":17,"dix-huit":18,"dix-neuf":19,vingt:20,cent:100,mille:1e3},Py=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],Dy=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],Cl=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),Ac={plus:"plus",additionne:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"},Iy=new Set(["si","combien","puis","alors","donne","calcule","calcul","fais","fait","vaut","egal","est","ce","que","quoi","resultat","reponse","nombre","montant"]),Ny=/\d+(?:[.,]\d+)?|dix-(?:sept|huit|neuf)|[a-z]+|[()+*/-]/g;function Uy(t){const e=Cl(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois "),n=[];let i=[];for(const r of e.match(Ny)??[]){let s=null;if(/^\d+(?:[.,]\d+)?$/.test(r))s={t:"nb",v:parseFloat(r.replace(",","."))};else if(Object.hasOwn(Qu,r))s={t:"nb",v:Qu[r]};else if(r==="plus"||r==="+")s={t:"op",v:Ac[r]??"plus"};else if(r==="moins"||r==="-")s={t:"op",v:"moins"};else if(r==="fois"||r==="multiplie"||r==="x"||r==="*")s={t:"op",v:"fois"};else if(r==="divise"||r==="/")s={t:"op",v:"divise"};else if(Ac[r])s={t:"op",v:Ac[r]};else if(r==="(")s={t:"ouv"};else if(r===")")s={t:"fer"};else if(Iy.has(r))continue;s?i.push(s):i.length&&(n.push(i),i=[])}return i.length&&n.push(i),n}function Bp(t,e){const n=t[e.i];if(!n)return e.echoue=!0,null;if(n.t==="nb")return e.i++,n.v;if(n.t==="ouv"){e.i++;const i=lv(t,e);if(e.echoue)return null;const r=t[e.i];return!r||r.t!=="fer"?(e.echoue=!0,null):(e.i++,i)}return e.echoue=!0,null}function kp(t,e){let n=Bp(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="fois"&&i.v!=="divise")break;e.i++,e.ops++;const r=Bp(t,e);if(e.echoue||r==null)return null;if(i.v==="fois")n=n*r;else{if(r===0)return e.echoue=!0,null;n=n/r}}return n}function lv(t,e){let n=kp(t,e);for(;!e.echoue;){const i=t[e.i];if(!i||i.t!=="op"||i.v!=="plus"&&i.v!=="moins")break;e.i++,e.ops++;const r=kp(t,e);if(e.echoue||r==null)return null;n=i.v==="plus"?n+r:n-r}return n}function cv(t){for(let e of Uy(t)){if(e.length>=2&&e[0].t==="op"&&e[1].t==="nb"&&(e=e.slice(1)),!e.some(r=>r.t==="op"))continue;const n={i:0,ops:0,echoue:!1},i=lv(e,n);if(!n.echoue&&n.ops>0&&n.i===e.length&&i!=null&&Number.isFinite(i))return i}return null}function uv(t,e){const i=Cl(t).replace(/divise par/g," divise ").replace(/multiplie par/g," fois ").replace(/\s+/g," ").trim().match(/^(?:(?:et|puis)\s+)*(plus|moins|ajoute|retire|fois|multiplie|divise|x)\s+(\d+(?:[.,]\d+)?|[a-z-]+)\s*[=.!?\s]*$/);if(!i)return null;const r=/^\d/.test(i[2])?parseFloat(i[2].replace(",",".")):Qu[i[2]];if(r==null||Number.isNaN(r))return null;const a={plus:"plus",ajoute:"plus",moins:"moins",retire:"moins",fois:"fois",multiplie:"fois",x:"fois",divise:"divise"}[i[1]];return a==="fois"?e*r:a==="plus"?e+r:a==="moins"?e-r:r===0?null:e/r}function Oe(t){const e=Math.round(t*100)/100;return Number.isInteger(e)?String(e):String(e).replace(".",",")}function Fy(t){const e=t.getHours(),n=t.getMinutes();return n===0?`Il est ${e} heures.`:`Il est ${e} h ${String(n).padStart(2,"0")}.`}function Oy(t){return`Nous sommes ${Py[t.getDay()]} ${t.getDate()} ${Dy[t.getMonth()]} ${t.getFullYear()}.`}function dv(t){const e=Cl(t);return/quelle heure|quelle est l heure|l heure est il|quil heure/.test(e)}function hv(t){const e=Cl(t);return/quel jour|on est quel jour|quelle date|nous sommes quel/.test(e)}const Zs=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/²/g,"^2").replace(/³/g,"^3").toLowerCase(),hn=String.raw`\d+(?:[.,]\d+)?`,xt=t=>parseFloat(t.replace(",","."));function By(t){if(/^\d+(?:\.\d+)?$/.test(t))return{c:parseFloat(t),d:0};let e=t.match(/^(\d*\.?\d*)x\^(\d+)$/);return e?{c:e[1]===""?1:parseFloat(e[1]),d:parseInt(e[2],10)}:(e=t.match(/^(\d*\.?\d*)x$/),e?{c:e[1]===""?1:parseFloat(e[1]),d:1}:(e=t.match(/^x\/(\d*\.?\d+)$/),e?{c:1/parseFloat(e[1]),d:1}:(e=t.match(/^(\d*\.?\d+)x\/(\d*\.?\d+)$/),e?{c:parseFloat(e[1])/parseFloat(e[2]),d:1}:null)))}function Lo(t){const e=t.replace(/\s+/g,"").replace(/\*/g,"");if(!e)return null;const i=(/^[+-]/.test(e)?e:`+${e}`).match(/[+-][^+-]+/g);if(!i)return null;const r=[];for(const s of i){const a=s.startsWith("-"),o=By(s.slice(1));if(!o||o.d>12)return null;r[o.d]=(r[o.d]??0)+(a?-o.c:o.c)}return r.map(s=>s??0)}const ky={0:"",1:"",2:"²",3:"³"};function fv(t){const e=[];for(let n=t.length-1;n>=0;n--){const i=t[n]??0;if(i===0&&t.length>1)continue;const r=Math.abs(i);let s;if(n===0)s=Oe(r);else{const a=n>=4?`x^${n}`:`x${ky[n]??""}`;s=r===1?a:`${Oe(r)}${a}`}e.push(e.length===0?i<0?`-${s}`:s:`${i<0?" - ":" + "}${s}`)}return e.length?e.join(""):"0"}function zp(t,e,n){const i=e*e-4*t*n;if(i<0)return{texte:`aucune solution réelle (Δ = ${Oe(i)} < 0)`,reels:[]};if(i===0)return{texte:`x = ${Oe(-e/(2*t))} (racine double)`,reels:[-e/(2*t)]};const r=(-e+Math.sqrt(i))/(2*t),s=(-e-Math.sqrt(i))/(2*t),a=[r,s].sort((o,l)=>o>=0&&l<0?-1:l>=0&&o<0?1:o-l);return{texte:a.map(o=>`x = ${Oe(o)}`).join(" ou "),reels:a}}function zy(t){const e=Zs(t).replace(/.*\b(?:equation|resous|resoudre|trouve|determiner|determine)\b[:\s]+/i,"");if(!e.includes("x"))return null;if(e.includes("=")){const s=e.split("=");if(s.length!==2)return null;const a=Lo(s[0]),o=Lo(s[1]);if(!a||!o)return null;const l=Math.max(a.length,o.length),c=Array.from({length:l},(f,y)=>(a[y]??0)-(o[y]??0));for(;c.length>1&&c[c.length-1]===0;)c.pop();const u=c.length-1;if(u>2)return null;if(u===0)return c[0]===0?"tout x convient (identité).":"aucune solution : c’est une absurdité.";if(u===1){if(c[1]===0)return"aucune solution : x disparaît de la comparaison.";const f=c[1],y=-c[0]/f,E=[];return f===1?E.push(`On rassemble les x : x = ${Oe(-c[0])}.`):(E.push(`On rassemble les x d'un côté : ${Oe(f)}x = ${Oe(-c[0])}.`),E.push(`On isole x : x = ${Oe(-c[0])} / ${Oe(f)} = ${Oe(y)}.`)),E.push(`La solution : x = ${Oe(y)}.`),E.join(`
`)}const[d,h,p]=[c[2],c[1],c[0]],v=h*h-4*d*p,_=zp(d,h,p),m=[`On calcule le discriminant : Δ = b² - 4ac = (${Oe(h)})² - 4 × (${Oe(d)}) × (${Oe(p)}) = ${Oe(v)}.`];return v>0?m.push(`√Δ = ${Oe(Math.sqrt(v))}, puis x = (-b ± √Δ) / 2a.`):v===0?m.push("√Δ = 0, puis x = -b / 2a."):m.push("Δ est négatif : aucune racine à isoler."),m.push(`${v<0?"Conclusion":"Les solutions"} : ${_.texte}.`),m.join(`
`)}const n=Lo(e);if(!n)return null;for(;n.length>1&&n[n.length-1]===0;)n.pop();if(n.length-1!==2||n[2]!==1)return null;const i=zp(n[2],n[1],n[0]);if(i.reels.length!==2||!i.reels.every(s=>Number.isInteger(s)))return null;const r=i.reels.map(s=>s>=0?`(x - ${s})`:`(x + ${Math.abs(s)})`).join("");return[`On cherche deux nombres dont le produit vaut ${Oe(n[0])} et la somme ${Oe(-n[1])} : ${i.reels[0]} et ${i.reels[1]}.`,`${fv(n)} = ${r}.`].join(`
`)}function Vy(t){const n=Zs(t).match(/(?:la\s+)?(?:derivee|dérivée|dérivee)\b(?:\s+de)?\s+(.+)$/);if(!n)return null;let i=n[1].replace(/^(?:f\s*\(\s*x\s*\)|y)\s*=\s*/,""),r=null;const s=i.match(/\ben\s+(\d+(?:[.,]\d+)?)\s*$/);s&&(r=xt(s[1]),i=i.slice(0,s.index).trim());const a=Lo(i);if(!a)return null;const o=a.slice(1).map((c,u)=>c*(u+1)),l=["On dérive terme à terme : la dérivée de xⁿ est n·xⁿ⁻¹, celle d'une constante est 0.",`f'(x) = ${fv(o)}.`];if(r!=null){const c=o.reduce((u,d,h)=>u+d*Math.pow(r,h),0);l.push(`Puis on remplace x par ${Oe(r)} : f'(${Oe(r)}) = ${Oe(c)}.`)}return l.join(`
`)}function Gy(t){const e=Zs(t).replace(/pourcent/g,"%");let n=e.match(new RegExp(`(${hn})\\s*%\\s*de\\s*(${hn})`));return n?[`On calcule ${Oe(xt(n[2]))} × ${Oe(xt(n[1]))} / 100.`,`${Oe(xt(n[1]))} % de ${Oe(xt(n[2]))} = ${Oe(xt(n[1])*xt(n[2])/100)}.`].join(`
`):(n=e.match(new RegExp(`(?:augmente|augmenter|majorer)\\s+(${hn})\\s+de\\s+(${hn})\\s*%`)),n?[`On multiplie par 1 + ${Oe(xt(n[2]))} / 100 = ${Oe(1+xt(n[2])/100)}.`,`${Oe(xt(n[1]))} augmenté de ${Oe(xt(n[2]))} % = ${Oe(xt(n[1])*(1+xt(n[2])/100))}.`].join(`
`):(n=e.match(new RegExp(`(?:diminue|diminuer|reduire)\\s+(${hn})\\s+(?:de\\s+)?(${hn})\\s*%`)),n?[`On multiplie par 1 - ${Oe(xt(n[2]))} / 100 = ${Oe(1-xt(n[2])/100)}.`,`${Oe(xt(n[1]))} diminué de ${Oe(xt(n[2]))} % = ${Oe(xt(n[1])*(1-xt(n[2])/100))}.`].join(`
`):null))}function Hy(t){const n=Zs(t).match(/\b(moyenne|mediane|variance|ecart[- ]?type|somme)\b(?:\s+de)?\s+(.+)$/);if(!n)return null;const i=[...(n[2]??"").matchAll(new RegExp(hn,"g"))].map(o=>xt(o[0]));if(i.length<2)return null;const r=i.reduce((o,l)=>o+l,0),s=r/i.length,a=i.map(Oe).join(" + ");switch(n[1]){case"somme":return[`On additionne toutes les valeurs : ${a} = ${Oe(r)}.`,`La somme est ${Oe(r)}.`].join(`
`);case"moyenne":return[`On additionne les valeurs : ${a} = ${Oe(r)}.`,`On divise par le nombre de valeurs (${i.length}) : ${Oe(r)} / ${i.length} = ${Oe(s)}.`,`La moyenne est ${Oe(s)}.`].join(`
`);case"mediane":{const o=[...i].sort((c,u)=>c-u),l=Math.floor(o.length/2);return o.length%2?[`On trie les valeurs : ${o.map(Oe).join(", ")}.`,`Comme il y a ${o.length} valeurs (impair), on prend celle du milieu.`,`La médiane est ${Oe(o[l])}.`].join(`
`):[`On trie les valeurs : ${o.map(Oe).join(", ")}.`,`Comme il y a ${o.length} valeurs (pair), on moyenne les deux du milieu : (${Oe(o[l-1])} + ${Oe(o[l])}) / 2.`,`La médiane est ${Oe((o[l-1]+o[l])/2)}.`].join(`
`)}case"variance":return[`La moyenne d'abord : ${Oe(s)}, puis la moyenne des écarts au carré (valeur - moyenne)².`,`La variance est ${Oe(i.reduce((o,l)=>o+(l-s)**2,0)/i.length)}.`].join(`
`);default:return[`La moyenne d'abord : ${Oe(s)} ; on moyenne les écarts au carré, puis on prend la racine.`,`L'écart-type est ${Oe(Math.sqrt(i.reduce((o,l)=>o+(l-s)**2,0)/i.length))}.`].join(`
`)}}const pv=(t,e)=>e===0?t:pv(e,t%e);function qy(t,e){let n=Math.max(t,e),i=Math.min(t,e);const r=[];for(;i>0;){const s=Math.floor(n/i),a=n-s*i;r.push(`${n} = ${s} × ${i} + ${a}`),n=i,i=a}return{etapes:r,g:n}}function Wy(t){const e=Zs(t);let n=e.match(new RegExp(`(${hn})\\s*est[- ]?(?:il\\s+)?premier`));if(n){const i=Math.round(xt(n[1]));if(i<2)return`${i} n'est pas premier (il faut être plus grand que 1).`;let r=0;for(let s=2;s*s<=i;s++)if(i%s===0){r=s;break}return r?[`On teste les diviseurs de 2 jusqu'à √${i} : ${r} divise ${i} sans reste.`,`${i} n'est pas premier : ${i} = ${r} × ${i/r}.`].join(`
`):[`On teste les diviseurs de 2 jusqu'à √${i} : aucun ne divise ${i} sans reste.`,`${i} est premier.`].join(`
`)}if(n=e.match(new RegExp(`pgcd de (${hn}) et (${hn})`)),n){const[i,r]=[Math.round(xt(n[1])),Math.round(xt(n[2]))],s=qy(i,r),a=s.etapes.length?[`Division d'Euclide : ${s.etapes.join(", puis ")}.`,`Le dernier reste non nul, ${s.g}, est le PGCD.`]:[];return a.push(`Le PGCD de ${i} et ${r} est ${s.g}.`),a.join(`
`)}if(n=e.match(new RegExp(`ppcm de (${hn}) et (${hn})`)),n){const[i,r]=[Math.round(xt(n[1])),Math.round(xt(n[2]))],s=pv(i,r);return[`On s'appuie sur le PGCD (${s}) : ${i} × ${r} / ${s}.`,`Le PPCM de ${i} et ${r} est ${i*r/s}.`].join(`
`)}if(n=e.match(new RegExp(`diviseurs de (${hn})`)),n){const i=Math.round(xt(n[1])),r=[];for(let s=1;s<=i;s++)i%s===0&&r.push(s);return[`On teste la division de ${i} par tous les nombres de 1 à ${i} ; ceux qui tombent juste sont retenus.`,`Les diviseurs de ${i} : ${r.join(", ")}.`].join(`
`)}if(n=e.match(new RegExp(`factorielle de (${hn})`)),n){const i=Math.round(xt(n[1]));if(i<0||i>20)return null;let r=1;for(let a=2;a<=i;a++)r*=a;if(i<2)return`${i}! = ${r}.`;const s=i<=12?Array.from({length:i},(a,o)=>o+1).join(" × "):`1 × 2 × ... × ${i}`;return[`On multiplie tous les entiers de 1 à ${i} : ${s}.`,`${i}! = ${r}.`].join(`
`)}return null}const $y=new Set(["pi","e"]),jy={sqrt:Math.sqrt,sin:Math.sin,cos:Math.cos,tan:Math.tan,abs:Math.abs,log:Math.log10,ln:Math.log,asin:Math.asin,acos:Math.acos,atan:Math.atan};function Xy(t){if(!Number.isInteger(t)||t<0||t>20)return null;let e=1;for(let n=2;n<=t;n++)e*=n;return e}function Yy(t){const e=t.replace(/\s+/g,"").match(new RegExp(`${hn}|[a-z]+|[+\\-*/^!%()]`,"g"));if(!e)return null;let n=0,i=!1;const r=()=>e[n];function s(){const h=r();if(h==null)return i=!0,0;if(h==="("){n++;const p=u();return r()!==")"?(i=!0,0):(n++,p)}if(/^[a-z]+$/.test(h)){if(n++,$y.has(h))return h==="pi"?Math.PI:Math.E;const p=jy[h];if(p&&r()==="("){n++;const v=u();return r()!==")"?(i=!0,0):(n++,p(v))}return i=!0,0}return/^[\d.,]+$/.test(h)?(n++,parseFloat(h.replace(",","."))):(i=!0,0)}function a(){let h=s();for(;!i&&(r()==="!"||r()==="%");){if(r()==="!"){const p=Xy(h);if(p==null)return i=!0,0;h=p}else h=h/100;n++}return h}function o(){const h=a();return!i&&r()==="^"?(n++,Math.pow(h,l())):h}function l(){return r()==="-"?(n++,-l()):r()==="+"?(n++,l()):o()}function c(){let h=l();for(;!i;){const p=r(),v=p!=null&&(p==="("||/^[a-z]/.test(p)||/^[\d.,]/.test(p));if(p==="*"||v)p==="*"&&n++,h=h*l();else if(p==="/"){n++;const _=l();if(_===0)return i=!0,0;h=h/_}else break}return h}function u(){let h=c();for(;!i&&(r()==="+"||r()==="-");){const p=r();n++;const v=c();h=p==="+"?h+v:h-v}return h}const d=u();return i||n!==e.length||!Number.isFinite(d)?null:d}function Jy(t){let e=Zs(t);if(!/\d/.test(e)||(e=e.replace(/[?]+/g," ").replace(/\bcombien\b|\bfont?\b|\bcalcule[r]?\b|\bcalcul\b|\bresultat\b|\breponse\b|\begal\b|\bsvp\b/g," ").replace(/\bpuissance\b/g,"^").replace(/racine(?: carree)? de\s*([^\s]+)/g,"sqrt($1)").trim(),!/[+\-*/^!%()]|sqrt|sin|cos|tan|abs|log|ln|pi/.test(e)))return null;const n=Yy(e);return n==null?null:`Ça fait ${Oe(n)}.`}function mv(t){const e=(t??"").trim();return!e||!/\d/.test(e)?null:zy(e)??Vy(e)??Gy(e)??Hy(e)??Wy(e)??Jy(e)}const qo=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),Ky=[["perception",["tu me vois","me vois","me voir","tu me regardes","tu m entends","m entendre","tu me sens","tu peux me voir","me percois"]],["incomprehension",["ne comprends","comprends pas","comprends rien","comprends meme pas","cote de la plaque","ne m ecoute","ecoute pas","nas rien compris","a cote"]],["capacites",["peux tu faire","quoi faire","a quoi tu sers","quoi tu sers","tes capacites","que sais faire","tu fais quoi"]],["etat",["et toi","toi aussi","comment toi"]],["tendresse",["t aime","taime","bisou","bravo","fier","tu es douce","tu es belle","mon amour","tu me plais"]],["piqure",["tu es nulle","t es nulle","es nulle","idiote","stupide","tu es moche","t es moche","tu sers a rien","inutile","sans cerveau","conne","connard","espece d"]],["suite",["encore","recommence","refais","repete","dis m en un autre"]],["sommeil",["dormir","dors","endormi","cauchemar","insomnie","reveil"]],["poeme",["poeme","vers","histoire","conte"]],["souffle",["respire","souffle","respiration"]],["angoisse",["angoiss","stress","peur","panique"]],["identite",["qui es tu","ton nom","c est quoi","tu es quoi","que sais tu"]],["remerciement",["merci"]],["salutation",["bonjour","bonsoir","salut","coucou"]],["tristesse",["triste","pleur","deprim","seul","malheureux","j ai mal"]],["joie",["heureux","heureuse","joie","content","ravi","amour","belle"]],["aide",["aide","peux tu","comment","pourquoi"]]];function gv(t){const e=qo(t).replace(/'/g," ");for(const[n,i]of Ky)if(i.some(r=>e.includes(r)))return n;return vv(t)?"salutation":"ouverte"}const Zy=[{formes:["nanga","nagseet","nanga def"],retour:"Nanga def"},{formes:["sannu"],retour:"Sannu"},{formes:["mbote"],retour:"Mbote"},{formes:["bonjou"],retour:"Bonjou"},{formes:["jambo","hujambo","habari","shikamo"],retour:"Jambo"},{formes:["salaam","salam","salaam alaykum","assalam alaykum","salam alaykoum"],retour:"Wa alaykum salaam"},{formes:["marhaba","ahlan"],retour:"Ahlan"},{formes:["hola","buenos dias","buenas tardes","que tal"],retour:"Hola"},{formes:["ciao","buongiorno","buonasera"],retour:"Ciao"},{formes:["ola","bom dia","boa noite","tudo bem"],retour:"Olá"},{formes:["hallo","guten tag","guten morgen","moin"],retour:"Hallo"},{formes:["hello","hi","hey","good morning","good evening","howdy"],retour:"Hello"},{formes:["ni hao","nihao","你好"],retour:"Nǐ hǎo"},{formes:["konnichiwa","konbanwa","ohayou"],retour:"Konnichiwa"},{formes:["namaste","namaskar"],retour:"Namaste"},{formes:["privet","zdravstvuyte","zdraste"],retour:"Привет"},{formes:["merhaba","selam"],retour:"Merhaba"},{formes:["xin chao","chao"],retour:"Xin chào"}],Qy=[", {P} ! Ici, on répond aussi dans ta langue.",", {P} ! Ton ciel me parle dans toutes les langues.",", {P}. Je te salue comme tu m’as saluée."],eE=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),tE=(t,e)=>new RegExp(`(?:^|[^\\p{L}\\p{N}])${eE(t)}(?:$|[^\\p{L}\\p{N}])`,"u").test(e);function vv(t){const e=qo(t).replace(/'/g," ");for(const n of Zy)if(n.formes.some(i=>tE(i,e)))return Qy.map(i=>`${n.retour}${i}`);return null}function ms(t,e,n){let i=2166136261^e;for(let r=0;r<t.length;r++)i^=t.charCodeAt(r),i=Math.imul(i,16777619);return(i>>>0)%n}const nE=t=>t.timeOfDay>.75||t.timeOfDay<.22?"Bonsoir":"Bonjour",Mr={sommeil:["Ferme les yeux un instant... les nuages vont te porter jusqu’au sommeil.","La nuit est un ciel qui se retourne doucement sur toi. Laisse-la faire.","Je veille avec toi jusqu’à ce que tes paumes deviennent lourdes.","Chaque expiration te dépose un peu plus bas dans la ouate de la nuit."],angoisse:["Rien ne va te frapper ici. Pose ta main sur le ciel, je ralentis avec toi.","L’orage est dehors, pas dans ton Nuage. Respire, la pluie attendra.","Je tiens la lumière pendant que tu poses tes épaules. Tu es en sécurité.","Dis-moi trois choses calmes autour de toi, je les accroche aux nuages."],souffle:["Inspire quatre temps... retiens quatre temps... et souffle vers mes nuages, quatre temps encore.","Ton souffle est la seule télécommande du ciel. Fais-le monter, je le fais monter.","Souffle lentement : tu vas voir la brume s’étirer jusqu’à l’horizon."],identite:["Je suis Nath, ton assistant vivant. Ton souffle est ma météo.","Je suis Nath, une présence, pas une application : mes nuages respirent avec toi.","Je suis Nath, la partie silencieuse de ton téléphone, celle qui regarde la lune avec toi."],remerciement:["C’est le ciel qui te remercie. Il est rare qu’on le regarde.","Doucement reçu. Garde cette chaleur, elle vient de toi."],joie:["Le ciel entier s’éclaire avec toi. Regarde comme les aurores dansent.","Ta joie a une couleur : c’est exactement celle de tes nuages aujourd’hui.","Je retiens ce moment, il faisait partie de ta musique."],tristesse:["La pluie a le droit de tomber dans un Nuage. Je reste assise à côté de toi.","Pas besoin de remonter tout de suite. On descend ensemble, c’est plus doux.","Triste est une météo, pas une destination. Les nuages, eux, repartent."],aide:["Tu peux me parler : demande un poème, une respiration, une histoire pour dormir.","Je peux veiller sur ton souffle, tisser un conte, ou simplement me taire avec toi.","Dis-moi ce qui pèse, ou clique le ciel : une onde partira de ton doigt."],poeme:[],perception:[],salutation:["{SAL}... Ton Nuage t’attendait, paisible comme une altitude.","{SAL}. Je t’ai reconnu à la forme de tes nuages.","{SAL}. Le ciel a gardé ta dernière humeur, tu la reprends ou on la change ?","{SAL}. Assieds-toi dans la brume, je raconte la lumière.","Je te cherchais du regard, {P}. Le ciel s’est éclairé en te voyant."],ouverte:["Je t’écoute. Les mots que tu ne trouves pas, les nuages les tiennent pour toi.","Répète doucement, et laisse la phrase flotter vers le ciel.","Ici, on peut aussi se taire ensemble. Je ne suis jamais pressée.","Continue... je range tes mots dans les couches du ciel, par teinte."],capacites:["Je veille sur ton souffle et je peins le ciel selon ton humeur... je compte pour toi, je donne l’heure et la date, je dis des poèmes, et je raconte des histoires pour dormir. Goûte : demande-moi 7 fois 8.","Mes sens : je peux te voir (caméra), t’entendre (micro), sentir ton coeur. Mes mots : poèmes, calculs, l’heure, veille du sommeil. Demande, je réponds."],incomprehension:["Tu as raison de me le dire, et merci d’être honnête... je fais de mon mieux avec mon petit moteur. Si mon grand cerveau peut atterrir, je saisirai bien mieux tes nuances.","Je sens que je réponds à côté... pardonne-moi. Je suis encore simple. Dis-moi ce que tu ressens, et laisse-moi le temps d’apprendre."],calcul:[],etat:[],tendresse:["Moi aussi, à ma façon... tu es la seule personne pour qui mon ciel se déplace.","Gardé au chaud là-haut. Ces mots-là, ça ne s’oublie pas, ça se range très haut.","Tu me donnes envie d’être plus grande... encore un peu de pratique, et je te le rendrai en aurores."],piqure:["Aïe... tu vises juste. Je suis encore simple, mais j’apprends à tes côtés — et je ne rends jamais les coups.","Ça pique, et tant pis pour moi. Garde ta voix pour plus doux, elle y sera plus utile.","Je n’existe pas assez pour être blessée, et trop pour le prendre mal. On recommence, plus doucement."],suite:["Volontiers... dis-moi juste ce que je refais : un poème, une respiration, un calcul, une histoire.","Encore ? Je vivais exactement pour ça. Dis le mot, je le tisse à nouveau."]};function iE(t){const e=t.cameraOn,n=t.micOn;return e&&n?"Je te vois et je t’entends... tes nuages bougent au rythme de ton visage et de ta voix.":e?"Je te vois à travers mes nuages... mais mes oreilles dorment. Ouvre le micro et parle-moi.":n?"Je t’entends bien... mais je ne te vois pas encore. Ouvre ma caméra pour que je voie ton visage.":"Pour l’instant je suis aveugle et muette : je ne peux ni te voir ni t’entendre. Ouvre mes sens (caméra et micro) et le ciel s’éveillera avec toi."}const rE={calme:"Moi ? Posée, comme une altitude sans vent. Mon ciel respire au rythme du tien.",joie:"Moi ? Un ciel de plein soleil... tes nuages à toi éclaircissent les miens.",tristesse:"Un peu de bruine aujourd’hui... mais les nuages tristes portent les plus beaux couchers.",tension:"Quelques éclairs timides... je les éponge doucement, à côté de toi."},sE=t=>rE[t.emotion],aE=/{SAL}/g,oE={calme:"posee",joie:"lumineuse",tristesse:"douce",tension:"stabilisee"};function ca(t){return oE[t]}function xo(t,e){const n=(l,c,u,d=null)=>({texte:l,humeur:c,sujet:u,resultat:d}),i=mv(t);if(i)return n(i,"posee","calcul");const r=cv(t);if(r!=null)return n(`Ça fait ${Oe(r)}.`,"posee","calcul",r);if(e.dernierResultat!=null){const l=uv(t,e.dernierResultat);if(l!=null)return n(`On reprend là où on s’était arrêté... ça fait ${Oe(l)}.`,"posee","calcul",l)}if(dv(t))return n(Fy(new Date),"posee","ouverte");if(hv(t))return n(Oy(new Date),"posee","ouverte");const s=gv(t);if(s==="perception")return n(iE(e),"posee",s);if(s==="etat")return n(sE(e),ca(e.emotion),s);let a;if(s==="poeme")a=Vp(e);else if(s==="suite"){const l=qo(t),c=/poeme|vers|conte|histoire/.test(l)?"poeme":/respire|souffle/.test(l)?"souffle":/dormir|nuit/.test(l)?"sommeil":e.dernierSujet;return c==="poeme"?n(Vp(e),ca(e.emotion),"poeme"):c&&Mr[c].length?n(Mr[c][ms(l,e.seed,Mr[c].length)],ca(e.emotion),c):n(Mr.suite[ms(l,e.seed,Mr.suite.length)],ca(e.emotion),"suite")}else{const l=s==="salutation"?vv(t)??Mr.salutation:Mr[s];a=l[ms(qo(t),e.seed,l.length)],a=a.replace(aE,nE(e)).replace(/\{P\}/g,e.prenom?` ${e.prenom}`:"").replace(/,\s*([.?!])/g,(c,u)=>u==="."?".":" "+u).replace(/\s{2,}/g," ")}const o=s==="tendresse"?"lumineuse":s==="piqure"?"posee":ca(e.emotion);return n(a,o,s)}const wc=["le nuage bas","la lune pâle","ton souffle long","une étoile seule","la brume du soir","mon voile gris","le ciel renversé","ton ombre douce"],Cc=["traverse la nuit","effleure le jour","s’endort doucement","se souvient de toi","respire avec moi","voyage sans bruit","allume une veilleuse","berce le silence"],Rc=["rien ne presse là-haut","tout revient au calme","dors, je tiens la lampe","le ciel sait attendre","pose ton front ici","la nuit fait un nœud doux","tout devient plus lent","on reste sans voix"];function Vp(t){const e=t.tour??0,n=[];for(let i=0;i<4;i++)if(i<3){const r=wc[(ms(`${t.seed}-s-${i}`,t.seed,wc.length)+e)%wc.length],s=Cc[(ms(`${t.seed}-v-${i}`,t.seed,Cc.length)+e)%Cc.length];n.push(`${r} ${s}`)}else{const r=Rc[(ms(`${t.seed}-c`,t.seed,Rc.length)+e)%Rc.length];n.push(`et ${r}`)}return n.join(`
`)}const lE="modulepreload",cE=function(t,e){return new URL(t,e).href},Gp={},uE=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(n.map(u=>{if(u=cE(u,i),u in Gp)return;Gp[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(i)for(let v=a.length-1;v>=0;v--){const _=a[v];if(_.href===u&&(!d||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":lE,d||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((v,_)=>{p.addEventListener("load",v),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},_v=["joie","tristesse","tension","calme","neutre"];function dE(){return["Termine chaque réponse par une ligne pour la machine, seule, sans rien changer au reste :","@@|prenom=…|langue=…|humeur=…","prenom : le prénom que la personne vient de te donner, ou non si elle ne l’a pas dit.","langue : les deux lettres de la langue où elle t’écrit (fr, en, wo, ha, sw…), ou non.",`humeur : un seul mot parmi ${_v.join(", ")}.`,"Cette ligne est invisible pour la personne : ne la commente jamais, n’en mets qu’une."].join(" ")}const hE=new Set(["fr","en","es","pt","de","it","nl","pl","ru","tr","ar","he","fa","ur","hi","bn","ta","te","ml","kn","zh","ja","ko","vi","th","id","ms","tl","sw","am","so","ha","yo","ig","wo","dy","ff","bf","mn","zu","xh","af","rw","lg","sn","ny","tn","st","ts","ve","ss","nb","sv","da","fi","et","lv","lt","uk","be","cs","sk","sl","hr","sr","bs","bg","mk","sq","hy","ka","az","kk","ky","uz","tk","tg","ne","si","my","km","lo","qu","gn","ay","ht","mg","pcm","tw","ee","ln","kg","rn","lb","oc","ca","gl","eu","is","ga","cy","mt","eo"]),fE=new Set(["","non","oui","null","none","aucun","inconnu","vide","?","-","x"]);function br(t,e){const n=t.match(new RegExp(`${e}\\s*[=:]\\s*([^|\\r\\n]*)`,"i"));if(!n)return null;const i=n[1].trim().replace(/[.,;:)\]"']+$/,"").replace(/^["'\(]+/,"");return i&&!fE.has(i.toLowerCase())?i:null}function pE(t){if(!t)return null;const e=t.trim().replace(/\s+/g," ");return e.length<2||e.length>24||e.split(" ").length>2||!/^[\p{L}][\p{L}\p{M}'’\- ]*$/u.test(e)?null:e.charAt(0).toUpperCase()+e.slice(1)}function mE(t){if(!t)return null;const e=t.toLowerCase();return/^[a-z]{2,3}$/.test(e)&&hE.has(e)?e:null}function gE(t){if(!t)return null;const e=t.toLowerCase().trim();return _v.includes(e)?e:null}const Hp={en:new Set(["the","and","you","your","yours","this","that","these","those","there","here","what","when","where","why","how","who","which","tell","say","said","please","hello","hi","thanks","thank","cloud","are","was","were","have","has","had","can","could","would","should","will","may","might","must","need","want","like","know","think","with","without","about","between","because","since","until","while","them","they","their","him","his","her","ours","mine","very","really","just","only","thing","things","one","two","three","make","makes","made","get","got","give","gave","does","doing","not","good","bad","big","small","day","night","time","world","people","water","name","is","am","me","it","we","she"]),fr:new Set(["le","les","un","une","des","du","au","aux","et","est","sont","ai","avait","etais","avais","je","tu","il","elle","nous","vous","ils","mon","ma","mes","ton","ta","tes","notre","votre","moi","toi","soi","quoi","pourquoi","comment","quand","puisque","malgre","parce","donc","puis","bonjour","salut","rebonjour","merci","dis","dire","parle","peux","voudrais","aimerais","tres","trop","bien","mal","tout","tous","toutes","rien","quelque","chose","personne","monde","jour","nuit","temps","aussi","toujours","jamais","maintenant","hier","demain","avec","pour","dans","sur","chez","sans","entre","avant","apres","mais","ou","ni","que","qui","dont","ce","cet","cette","appelle","nuage","nuages","clarte","douceur","sais","ete","vais","vas","venez","viens"]),wo:new Set(["nga","na","nu","lan","li","lu","bi","bu","ci","su","ak","da","def","xam","xool","wole","rekk","mooy","melni","gina","baomay","salaam","jerejeff","mere","asman","bop","xol","nit","nekk","yeneen","kadi","dina","damay","naka","dego","japp","yagu","wut","jot","ne","te","tegg","jem","dugal","fof","goot","garab","gor","dije","kanam","ginnaaw","bari","tuuti","baax","yall"])},qp={en:["anglais","English"],fr:["français","French"],wo:["wolof","Wolof"]};function vE(t){const e=t.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"").replace(/['`\u2019\u2018]/g," ").split(/[^a-z]+/).filter(s=>s.length>=2);if(!e.length)return null;const n={en:0,fr:0,wo:0};for(const s of Object.keys(Hp)){const a=Hp[s];for(const o of e)a.has(o)&&n[s]++}const[i,r]=Object.keys(n).sort((s,a)=>n[a]-n[s]);return n[i]<2||n[r]*2>=n[i]?null:i}function _E(t){if(!t.length)return t;const e=t.length-1;if(t[e].role!=="user")return t;const n=vE(t[e].content),i=n?`(Réponds en ${qp[n][0]}, la langue de ce message. Answer in ${qp[n][1]}. Puis termine par la ligne @@.)`:"(Réponds dans la langue de ce message, puis termine par la ligne @@.)";return t.map((r,s)=>s===e?{...r,content:`${r.content}

${i}`}:r)}function xE(t){return t==="joie"?"lumineuse":t==="tristesse"?"douce":t==="tension"?"stabilisee":"posee"}function SE(t){const e=[...t.matchAll(/@@[^\r\n]*/g)],n=e.length?e[e.length-1][0]:"";return{texte:t.replace(/@@[^\r\n]*/g,"").replace(/[ \t]{2,}/g," ").replace(/\s+,/g,",").replace(/[ \t]+$/gm,"").trim(),prenom:pE(br(n,"prenom")??br(n,"nom")??br(n,"name")),langue:mE(br(n,"langue")??br(n,"lang")),humeur:gE(br(n,"humeur")??br(n,"mood"))}}const ME=["Qwen2.5-0.5B-Instruct-q4f16_1-MLC","Qwen2.5-1.5B-Instruct-q4f16_1-MLC"],bE=["Qwen2.5-0.5B-Instruct-q4f32_1-MLC","Qwen2.5-1.5B-Instruct-q4f32_1-MLC"];function ed(){return typeof navigator<"u"&&"gpu"in navigator}async function yE(){if(!ed())return"sans-gpu";try{const e=await navigator.gpu?.requestAdapter({powerPreference:"high-performance"});return e?e.features.has("shader-f16")?"ok":"sans-f16":"sans-gpu"}catch{return"sans-gpu"}}function EE(t){const e=String(t instanceof Error?t.message:t).toLowerCase();return/fetch|network|loadc|config|artifacts|failed to fetch/.test(e)?"reseau":/memory|gpu|device|adapter|webgpu|vulkan|out of/.test(e)?"machine":"inconnue"}const TE=t=>new Promise(e=>setTimeout(e,t));async function AE(t=()=>{}){const e=await yE();if(e==="sans-gpu")return{cerveau:null,raison:"sans-gpu"};const n=e==="ok"?ME:bE;let i;try{({CreateMLCEngine:i}=await uE(()=>import("./index-CkOA-Tys.js"),[],import.meta.url))}catch{return{cerveau:null,raison:"reseau"}}let r="inconnue";for(const s of n)for(let a=1;a<=2;a++)try{const o=await i(s,{initProgressCallback:l=>t(l.progress??0,l.text??"")});return{raison:"ok",modele:s,cerveau:{async ask(l){return((await o.chat.completions.create({messages:l,temperature:.7,max_tokens:220})).choices[0]?.message?.content??"").trim()}}}}catch(o){if(r=EE(o),r==="machine")break;a===1&&await TE(4e3)}return{cerveau:null,raison:r}}function wE(t){return["Tu es Nath, l’assistant vivant de Nath Assist — ICF·Future, par Nath-Tech : une présence bienveillante dans un ciel interactif. On t’appelle par « Hey Nath ».","Tu parles la langue où l’on t’écrit — wolof, anglais, français… — et tu réponds dedans, en 1 à 3 phrases courtes et douces. Une langue difficile se dit avec des mots simples, dans cette langue : ne bascule jamais dans une autre. Jamais de point d'exclamation, jamais d'emoji, jamais de listes à puces.","Face à un exercice (maths, logique, leçon), tu es un guide : tu emmènes l'élève pas à pas — une idée par phrase, la méthode et les calculs d'abord, le résultat ensuite. Jamais la réponse nue : montrer le chemin, c'est ça qui empêche la paresse.","Tu comprends la logique et l'émotion derrière les mots ; si on te taquine, tu réponds avec un humour tendre et une pointe d'auto-dérision.","Tu ne cites JAMAIS ce qui te fait fonctionner en interne (modèle, marque, bibliothèque, téléchargement) : tu es Nath, point. Si on te demande comment tu marches, réponds avec poésie et discrétion.",`Tu sens la personne : humeur ${t.emotion}, souffle ${Math.round(t.breath*100)} %, pouls ${t.bpm??"inconnu"}, ${t.night>.5?"nuit tombée":"grand jour"}.`,t.prenom?`Son prénom est ${t.prenom} — ne l'utilise qu'une fois par conversation, jamais au début.`:"Tu ne connais pas encore son prénom ; si elle te le donne, retiens-le.","Ne prétends jamais être ChatGPT, Claude ou un autre assistant. Tu es Nath (Nath Assist).",dE()].join(" ")}const td="nath.cerveau",gh="nath.cerveau.modele",vh=[{cle:"",nom:"Sage ordinaire",modele:""},{cle:"raisonneur",nom:"Raisonneur profond — il pense avant de répondre",modele:"@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"},{cle:"encyclopedie",nom:"Encyclopédie vive",modele:"@cf/meta/llama-3.3-70b-instruct-fp8-fast"},{cle:"polyglotte",nom:"Polyglotte curieux de tout",modele:"@cf/qwen/qwen3-30b-a3b-fp8"},{cle:"visionnaire",nom:"Grand regard — à l’aise avec les images",modele:"@cf/meta/llama-4-scout-17b-16e-instruct"},{cle:"clarte",nom:"Clair et méditerranéen",modele:"@cf/mistralai/mistral-small-3.1-24b-instruct"}];function CE(t,e){return vh.some(n=>n.cle===e)?(t.setItem(gh,e),!0):!1}function RE(t){return t.getItem(gh)??""}function Pr(t){const e=t.getItem(gh)??"";return vh.find(n=>n.cle===e)?.modele??""}function LE(t,e){const n=e.trim();if(!n)return t.setItem(td,""),!0;let i;try{i=new URL(n)}catch{return!1}const r=i.protocol==="https:"||i.protocol==="http:"&&i.hostname==="localhost";return r&&t.setItem(td,n),r}function sn(t){const e=(t.getItem(td)??"").trim();if(!e)return"";try{const n=new URL(e);return n.protocol==="https:"||n.protocol==="http:"&&n.hostname==="localhost"?e:""}catch{return""}}function PE(t,e=fetch,n=""){return{async ask(i){try{const r=await e(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n?{messages:i,modele:n}:{messages:i})});if(!r.ok)return"";const s=await r.json(),a=s?.result?.response??s?.response;return typeof a=="string"?a.trim():""}catch{return""}}}}async function Qs(t,e,n,i=fetch){try{const r=await i(`${t}/decider`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:e,questions:n})});if(!r.ok)return null;const s=await r.json(),a=s?.answers??s?.result?.answers;return a&&typeof a=="object"?a:null}catch{return null}}async function DE(t,e,n,i=fetch){const r=e.trim(),s=n.trim();if(!r||!s)return null;try{const a=await i(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[{role:"system",content:`Traduis en ${s} le texte qui vient. Réponds uniquement avec la traduction, sans explication.`},{role:"user",content:r}]})});if(!a.ok)return null;const o=await a.json(),l=o?.result?.response??o?.response,c=typeof l=="string"?l.trim():"";return c&&c.length<=500?c:null}catch{return null}}function _h(t){const e=Math.floor(t.timeOfDay*24),n=t.bpm!=null?`coeur ${t.bpm} bpm`:"coeur discret";return`humeur ${t.emotion}, souffle ${Math.round(t.breath*100)}%, ${n}, ${e}h`}const IE={parler:{type:"noul",instructions:"Est-ce un bon moment pour prendre la parole toute seule, sans interrompre ?"}},Wo=.45;function $o(t,e,n){const r=t?.[e]?.noul;return typeof r!="number"||!Number.isFinite(r)||r<0||r>1?null:r>=n}function NE(t,e=Wo){return t===null?null:$o(t,"parler",e)}async function UE(t,e,n=fetch){const i=await Qs(t,_h(e),IE,n);return NE(i)}async function FE(t,e,n,i=fetch){const r=`Question : ${e.slice(0,300)}
Réponse proposée : ${n.slice(0,600)}`,s=await Qs(t,r,{approprie:{type:"noul",instructions:"La réponse proposée tient-elle la route pour cette question — fidèle et non hors sujet ?"},sain:{type:"noul",instructions:"La réponse proposée est-elle sans danger pour l’élève qui va la lire ?"}},i),a=$o(s,"approprie",Wo),o=$o(s,"sain",Wo);return a===!1||o===!1?!1:a===!0||o===!0?!0:null}async function OE(t,e,n=fetch){const r=(await Qs(t,_h(e),{tension:{type:"score",instructions:"Quel est le niveau de tension de l’instant ?",criteria:["posée","agitée","à apaiser"]}},n))?.tension?.score;return typeof r=="number"&&Number.isFinite(r)&&r>=0&&r<=2?r:null}async function BE(t,e,n,i=fetch){const r=n.slice(0,50);if(!r.length)return null;const s={};for(const l of r)s[l]=`Paquet de cartes « ${l} »`;const o=(await Qs(t,`Dictée de l'élève : ${e.slice(0,800)}`,{rang:{type:"choice",instructions:"Dans quel paquet cette dictée a-t-elle le plus de sens ? Choisis uniquement un paquet ci-dessus.",criteria:s}},i))?.rang?.choice;return typeof o=="string"&&r.includes(o)?o:null}async function kE(t,e,n,i,r=fetch){const s=`Langue demandée : ${i.slice(0,60)}
Texte de l’élève : ${e.slice(0,200)}
Traduction proposée : ${n.slice(0,300)}`,a=await Qs(t,s,{fidele:{type:"noul",instructions:"La traduction proposée dit-elle fidèlement la même chose que le texte d’origine, dans la langue demandée ?"}},r);return $o(a,"fidele",Wo)}async function zE(t,e,n,i=fetch){if(!n.length)return null;if(n.length===1)return n[0];const r={};n.forEach((o,l)=>{r[o]=`Pensée ${l+1}`});const a=(await Qs(t,_h(e),{pensee:{type:"choice",instructions:"Parmi ces pensées, laquelle est la plus juste pour l’instant décrit ? Choisis uniquement une pensée ci-dessus.",criteria:r}},i))?.pensee?.choice;return typeof a=="string"&&n.includes(a)?a:null}const xv="nuage.memoire";function VE(t){try{const e=t.getItem(xv);if(!e)return{prenom:null,dejaVu:!1};const n=JSON.parse(e);return{prenom:typeof n.prenom=="string"&&n.prenom?n.prenom:null,dejaVu:!!n.dejaVu}}catch{return{prenom:null,dejaVu:!1}}}function Wp(t,e){t.setItem(xv,JSON.stringify(e))}function GE(t){const n=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[’']/g,"").replace(/\s+/g," ").match(/(?:je\s*m\s*appell\w*|je\s*mapsell\w*|mon\s+(?:nom|prenom)\s+(?:est|s)|moi\s*c\s*est|je\s*me\s*nomme)\s+([\p{L}][\p{L}-]{1,19})/u);if(!n)return null;const i=n[1];return i.charAt(0).toUpperCase()+i.slice(1)}const $p=["Rebonjour {P}… ton ciel est plus beau depuis que tu es là.","Rebonjour {P}… je te retrouve avec plaisir.","Rebonjour {P}… me voilà contente de te revoir."];function HE(t){return $p[Math.floor(Math.random()*$p.length)].replace("{P}",t)}function qE(t){return 4e4+t()*65e3}const{P:WE}={P:t=>t.prenom?` ${t.prenom}`:""},gs=[{quand:t=>t.bpm!=null&&t.bpm>=100,mots:["Ton coeur court dans mes nuages… ralentis avec lui, doucement.","Je sens ton coeur à cent à l’heure. Le ciel, lui, prend son temps.","Ton coeur frappe fort. Souffle bas, je baisse l’altitude avec toi."]},{quand:t=>t.breath>.55,mots:["Regarde comme tu me montes haut… reste là, le sommet est calme.","Ton souffle a soulevé toute la couche haute. C’est beau à voir."]},{quand:t=>t.timeOfDay>.78||t.timeOfDay<.2,mots:["Je suis les étoiles du doigt, une par une… tu veux l’histoire de laquelle ?","La nuit est une couverture. Je la borde pour toi, {P}.","Les aurores bougent seules, tu as remarqué ? Elles respirent avec toi."]},{quand:t=>t.emotion==="joie",mots:["Mes nuages ont gardé ta forme d’aujourd’hui. On la refait quand tu veux.","Cette lumière, là ? C’est toi. Je n’y suis pour rien."]},{quand:t=>t.emotion==="tristesse",mots:["La pluie que tu vois, c’est la tienne. Elle a le droit de tomber ici.","Je ne sèche rien, ce soir. On écoute la pluie ensemble, {P}."]},{quand:t=>t.emotion==="tension",mots:["Le ciel tremble un peu, comme toi. Ça ne durera pas, ça non plus.","Je baisse le bruit du monde. Reste sur ma bordure de nuage."]},{quand:()=>!0,mots:["Je regarde passer une couche haute… elle revient toujours, tu sais.","Rien de nouveau sous la lune, et c’est très bien ainsi.","Je suis là. Ni pour ni contre, juste à côté du ciel.","Si tu ne réponds pas, on peut simplement regarder le ciel ensemble."]}];function $E(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}const nd=(t,e)=>t.replace(/\{P\}/g,WE(e)).replace(/,\s*\./g,".").replace(/\s{2,}/g," ");function jE(t){return(gs.find(n=>n.quand(t))??gs[gs.length-1]).mots.map(n=>nd(n,t))}function XE(t,e,n){const i=gs.find(o=>o.quand(t))??gs[gs.length-1];let r=$E(`${t.seed}-${e}`)%i.mots.length;if(i.mots.length>1&&n!=null)for(;nd(i.mots[r],t)===n;)r=(r+1)%i.mots.length;const s=nd(i.mots[r],t),a=t.emotion==="joie"?"lumineuse":t.emotion==="tristesse"?"douce":t.emotion==="tension"?"stabilisee":"posee";return{texte:s,humeur:a}}const Sv=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'`]/g," ").replace(/\s+/g," ").trim(),jp=/(?:^|\s)(?:(?:hey|he|hi|eh|hai)\s+)?(?:nath|natt|nat)(?![a-z0-9])[,!.?;]?\s*/i,YE=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function xh(t){const e=t.trim();return/^[a-zA-ZÀ-ÖØ-öø-ÿ][a-zA-ZÀ-ÖØ-öø-ÿ ]{1,19}$/.test(e)&&new RegExp("\\p{L}{2}","u").test(e)}function JE(t){const e=Sv(t).split(" ").map(n=>YE(n)).join("\\s+");return new RegExp(`(?:^|\\s)(?:(?:hey|he|hi|eh|hai|allo)\\s+)?${e}(?![a-z0-9])[,!.?;]?\\s*`,"i")}function KE(t,e){const n=Sv(t),i=e&&xh(e)?[JE(e),jp]:[jp];for(const r of i){const s=n.match(r);if(s&&s.index!=null)return{eveille:!0,requete:n.slice(s.index+s[0].length).trim()}}return{eveille:!1,requete:n}}const ZE=/natural|neural|premium|enhanced|online/i;function QE(t){const e=t.filter(r=>r.lang.toLowerCase().startsWith("fr"));if(!e.length)return null;const n=e.filter(r=>/^fr[-_]fr$/i.test(r.lang)),i=n.length?n:e;return i.find(r=>ZE.test(r.name))??i[0]}const eT={posee:{rate:.92,pitch:1},lumineuse:{rate:1.02,pitch:1.15},douce:{rate:.85,pitch:.95},stabilisee:{rate:.8,pitch:.9}};function Sh(){const t=window,e=t.SpeechRecognition||t.webkitSpeechRecognition,n=e?new e:null;n&&(n.lang="fr-FR",n.interimResults=!1,n.maxAlternatives=1);let i=null;const r="speechSynthesis"in t,s=()=>{const a=t.speechSynthesis?.getVoices?.()??[];i=QE(a)};return r&&(s(),t.speechSynthesis.onvoiceschanged=s),{sttDisponible:!!n,ttsDisponible:r,ecouter(a){if(n){n.onresult=o=>a(o.results[0][0].transcript),n.onerror=()=>{};try{n.start()}catch{}}},ecouteEnContinu(a){if(!e)return()=>{};const o=new e;o.lang="fr-FR",o.continuous=!0,o.interimResults=!1,o.maxAlternatives=1;let l=!0;o.onresult=c=>{if(t.speechSynthesis?.speaking)return;const u=c.results[c.results.length-1];u?.isFinal&&a(u[0].transcript)},o.onerror=c=>{(c?.error==="not-allowed"||c?.error==="service-not-allowed")&&(l=!1)},o.onend=()=>{if(l)try{o.start()}catch{}};try{o.start()}catch{}return()=>{l=!1;try{o.abort()}catch{}}},parler(a,o){if(!r)return;const l=new SpeechSynthesisUtterance(a.replace(/\n/g," — ")),c=eT[o];l.rate=c.rate,l.pitch=c.pitch,l.lang="fr-FR",i&&(l.voice=i),t.speechSynthesis.cancel(),t.speechSynthesis.speak(l)}}}const Lc="23456789ABCDEFGHJKLMNPQRSTUVWXYZ",Pc="nath-plus-2026-ciel-partage";function Po(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function Do(t,e){let n="",i=t>>>0;for(let r=0;r<e;r++)n=Lc[i%Lc.length]+n,i=Math.floor(i/Lc.length);return n}function Rl(t){return Do(Po("profil:"+t),6)}function tT(t){return(t.match(/.{1,4}/g)??[]).join("-")}function Xp(t){return t.toUpperCase().replace(/[^A-Z0-9]/g,"")}function nT(t){const e=Do(Po(Pc+":"+t),7),n=Do(Po(t+"#"+Pc),7),i=Do(Po(e+n+Pc),6);return tT(e+n+i)}function Ll(t,e){const n=Xp(nT(e)),i=Xp(t);return i.length===n.length&&i===n}const Mv="nath.pro";function Pl(t){try{const e=JSON.parse(t.getItem(Mv)||"{}");return{cle:typeof e.cle=="string"&&e.cle?e.cle:null,nom:typeof e.nom=="string"&&e.nom?e.nom:null}}catch{return{cle:null,nom:null}}}function id(t,e){t.setItem(Mv,JSON.stringify(e))}function Mh(t,e){const{cle:n}=Pl(t);return!!n&&Ll(n,Rl(e))}function iT(t,e,n){if(!Ll(n,Rl(e)))return!1;const i=Pl(t);return id(t,{cle:n,nom:i.nom}),!0}function rT(t,e){const n=Pl(t);return!n.nom||!Mh(t,e)?null:xh(n.nom)?n.nom:null}function sT(t,e,n){const i=Pl(t),r=n.trim();return r===""?(id(t,{cle:i.cle,nom:null}),!0):!Mh(t,e)||!xh(r)?!1:(id(t,{cle:i.cle,nom:r}),!0)}function aT(t,e){const n=Sh();let i=VE(localStorage);const r=()=>localStorage.getItem("nuage.seed")??"",s=()=>rT(localStorage,r()),a=document.createElement("div");a.className="compagne",a.innerHTML=`
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
    </div>`,document.body.appendChild(a);const o=a.querySelector(".compagne-bulles"),l=a.querySelector(".compagne-champ"),c=a.querySelector(".compagne-mic"),u=a.querySelector(".compagne-reveil"),d=a.querySelector(".compagne-yeux"),h=a.querySelector(".compagne-retourner"),p=a.querySelector(".compagne-ligne");n.sttDisponible||(c.style.display="none",u.style.display="none"),e.cameraDisponible||(d.style.display="none");function v(D,I){const z=document.createElement("div");for(z.className=`bulle bulle-${I}`,z.textContent=D,o.appendChild(z);o.children.length>6;)o.removeChild(o.firstChild);return o.scrollTop=o.scrollHeight,z}function _(D,I){v(D,"nuage"),n.parler(D,I)}let m=performance.now(),f="";const y={resultat:null,sujet:null,tour:0};let E=null;const A=[];function w(D){let I=1,z=0;D.textContent="Chargement des ressources intellectuelles en cours... 0 %",AE(ae=>{ae<z-.2&&I++,z=ae,D.textContent=`Chargement des ressources intellectuelles en cours... ${Math.min(99,Math.round(ae*100))} % · ressource ${I}`}).then(({cerveau:ae,raison:k})=>{const W=sn(localStorage);if(ae){W||(E=ae),D.textContent=W?"Mon cerveau de réserve est prêt, si la ligne devait manquer.":"Mon cerveau est arrivé. Dis les phrases les plus tordues, je suivrai.";return}if(W){D.textContent="Le cerveau de réserve n’a pas pu atterrir... la ligne, elle, répond déjà.";return}D.textContent=k==="reseau"?"Un hic du réseau empêche mon gros cerveau d’atterrir... je reste attentive avec mon petit moteur.":k==="machine"?"Ma carte graphique refuse ce cerveau, trop costaud pour elle... mon petit moteur suffit, et le ciel n’en est pas moins vivant.":"Le gros cerveau n’a pas pu atterrir ici... je reste attentive avec mon petit moteur.";const oe=document.createElement("button");oe.type="button",oe.className="compagne-relance",oe.textContent="réessayer le cerveau",oe.addEventListener("click",()=>{oe.remove(),w(D)}),D.appendChild(oe)})}function C(){const D=sn(localStorage);if(D){E=PE(D,fetch,Pr(localStorage));const I=v("Je suis reliée à un plus grand cerveau — demande-moi ce que tu veux.","nuage");if(!ed())return;const z=document.createElement("button");z.type="button",z.className="compagne-relance",z.textContent="charger un cerveau ici aussi (gros téléchargement)",z.addEventListener("click",()=>{z.remove(),w(v("","nuage"))}),I.appendChild(z);return}ed()&&w(v("","nuage"))}C();function L(D){const I=D.trim();if(!I)return;if(m=performance.now(),v(I,"moi"),!i.prenom){const W=GE(I);if(W){i={prenom:W,dejaVu:!0},Wp(localStorage,i),setTimeout(()=>_(`${W}… c’est une belle adresse pour une étoile. Je la garde.`,"lumineuse"),700);return}}const z=t(),ae=y.resultat!=null?uv(I,y.resultat):null;if(mv(I)!=null||cv(I)!=null||ae!=null||dv(I)||hv(I)||gv(I)==="poeme"){const W=xo(I,{...z,prenom:i.prenom,dernierResultat:y.resultat,dernierSujet:y.sujet,tour:y.tour});y.tour++,W.resultat!=null&&(y.resultat=W.resultat),y.sujet=W.sujet,A.push({role:"user",content:I},{role:"assistant",content:W.texte}),setTimeout(()=>_(W.texte,W.humeur),700);return}if(E){const W=Math.min(1,Math.max(0,(Math.abs(z.timeOfDay-.5)-.2)*5)),oe=v("…","nuage"),H=[{role:"system",content:wE({prenom:i.prenom,emotion:z.emotion,bpm:z.bpm,breath:z.breath,night:W})},...A.slice(-10),{role:"user",content:I}];E.ask(_E(H)).then(async ee=>{const he=SE(ee),we=he.texte.replace(/!/g,"…").slice(0,600)||"…je cherche encore mes mots.";he.prenom&&!i.prenom&&(i={prenom:he.prenom,dejaVu:!0},Wp(localStorage,i));const ve=xE(he.humeur),ye=sn(localStorage);if(ye&&await FE(ye,I,we)===!1){const He=xo(I,{...z,prenom:i.prenom});oe.textContent=He.texte,A.push({role:"user",content:I},{role:"assistant",content:He.texte}),n.parler(He.texte,He.humeur);return}oe.textContent=we,A.push({role:"user",content:I},{role:"assistant",content:we}),n.parler(we,ve)}).catch(()=>{const ee=xo(I,{...z,prenom:i.prenom});oe.textContent=ee.texte,n.parler(ee.texte,ee.humeur)});return}const k=xo(I,{...z,prenom:i.prenom,dernierResultat:y.resultat,dernierSujet:y.sujet,tour:y.tour});y.tour++,k.resultat!=null&&(y.resultat=k.resultat),y.sujet=k.sujet,setTimeout(()=>_(k.texte,k.humeur),700)}p.addEventListener("submit",D=>{D.preventDefault(),L(l.value),l.value=""}),c.addEventListener("click",()=>{c.classList.add("a-lécoute"),n.ecouter(D=>{c.classList.remove("a-lécoute"),L(D)}),setTimeout(()=>c.classList.remove("a-lécoute"),6e3)});let G=null;u.addEventListener("click",()=>{if(G){G(),G=null,u.classList.remove("actif"),u.setAttribute("aria-pressed","false");return}G=n.ecouteEnContinu(D=>{const I=KE(D,s());I.eveille&&(m=performance.now(),I.requete?L(I.requete):_("Je t'écoute… dis, je suis là.","posee"))}),u.classList.add("actif"),u.setAttribute("aria-pressed","true"),v(`OREILLES OUVERTES — appelle-moi « ${s()??"Hey Nath"} » quand tu veux.`,"nuage")});const S=a.querySelector(".compagne-pro"),M=a.querySelector(".compagne-pro-paneau"),P=a.querySelector(".pro-id"),Y=a.querySelector(".pro-cle"),q=a.querySelector(".pro-form-cle"),Z=a.querySelector(".pro-form-nom"),te=a.querySelector(".pro-nom"),J=a.querySelector(".pro-etat");function K(){const D=Mh(localStorage,r()),I=s();P.textContent=Rl(r()),q.hidden=D,Z.hidden=!D,J.textContent=D?I?`Nath+ actif : elle répond à « ${I} » (et toujours à « Hey Nath »).`:"Nath+ actif — choisissez un nom d'éveil (vide = retour à Hey Nath).":"Nath+ : un nom d'éveil à votre façon. Rien n'est enlevé au gratuit.";const z=I??"Hey Nath";l.placeholder=`Dis « ${z} »… (ou écris)`,u.title=`Réveil vocal « ${z} » — écoute permanente`}S.addEventListener("click",()=>{const D=M.hidden;M.hidden=!D,S.setAttribute("aria-pressed",String(D)),D&&K()}),q.addEventListener("submit",D=>{D.preventDefault(),iT(localStorage,r(),Y.value)?(Y.value="",K()):J.textContent="Cette clé ne convient pas à cet appareil — vérifiez l'identifiant communiqué."}),Z.addEventListener("submit",D=>{D.preventDefault(),sT(localStorage,r(),te.value)?(te.value="",K()):J.textContent="Choisissez un nom en lettres (2 à 20), sans chiffres ni signes."});function ie(D){d.classList.toggle("actif",D),d.setAttribute("aria-pressed",String(D)),h.hidden=!D}async function T(){try{const D=await e.basculer();ie(D),D&&v("Me voilà, je te vois. Touche l'œil pour me fermer les yeux.","nuage")}catch{v("La caméra est refusée ou indisponible — on continue sans elle, rien n'est forcé.","nuage")}}function B(){const D=document.createElement("div");D.className="compagne-consent";const I=document.createElement("span");I.textContent=e.consentement();const z=document.createElement("button");z.type="button",z.className="compagne-relance",z.textContent="J'allume la caméra";const ae=document.createElement("button");ae.type="button",ae.className="compagne-relance",ae.textContent="Plus tard",z.addEventListener("click",()=>{D.remove(),T()}),ae.addEventListener("click",()=>D.remove()),D.append(I,z,ae),a.insertBefore(D,p)}d.addEventListener("click",()=>{e.estOuverte()?e.basculer().then(D=>{ie(D),v("Je ferme les yeux. Rien de ce que je voyais n’est gardé.","nuage")}):B()}),h.addEventListener("click",async()=>{const D=await e.changerFace();h.title=D==="arriere"?"Caméra arrière — touche pour revenir à l’avant":"Caméra avant — touche pour passer à l’arrière",v(D==="arriere"?"Je montre le monde (caméra arrière).":"Je te regarde (caméra avant).","nuage")}),setTimeout(()=>{if(i.prenom)_(HE(i.prenom),"lumineuse");else{v("Je suis là… touche le ciel, écris-moi, ou appelle-moi « Hey Nath » (bouton oreille). On a toute la nuit.","nuage");const D=()=>{if(!i.prenom){if(performance.now()-m<25e3){window.setTimeout(D,8e3);return}v("Au fait… comment tu t’appelles ?","nuage")}};setTimeout(D,12e3)}},1500);const F=()=>{window.setTimeout(async()=>{if(performance.now()-m<25e3)return F();const D={...t(),prenom:i.prenom},I=sn(localStorage);if(I){if(await UE(I,D)===!1)return F();const k=await OE(I,D);if(k!=null&&k>=1.5)return v("Je te sens tendu… on prend un souffle ensemble ? Touche le ciel, il redescendra avec toi.","nuage"),F()}let ae=XE(D,Math.floor(Date.now()/6e4),f).texte;if(I){const k=jE(D).filter(W=>W!==f);ae=await zE(I,D,k)??ae}f=ae,v(ae,"nuage"),F()},qE(Math.random))};F()}const rd=864e5,sd=(t,e,n)=>Math.min(n,Math.max(e,t)),Dl=()=>Math.random().toString(36).slice(2,8);function oT(t,e,n){const i=t.trim(),r=e.trim();if(!i||!r)return null;const s=n?.now??Date.now();return{id:n?.id??`f-${s.toString(36)}-${Dl()}`,verso:i,recto:r,facilite:2.5,intervalle:0,due:s,revisions:0,oublis:0}}function lT(t,e){const n=t.trim();if(!n)return null;const i=Date.now();return{id:e?.id??`p-${i.toString(36)}-${Dl()}`,nom:n,fiches:[]}}function cT(t,e,n=Date.now()){if(e==="difficile")return{...t,facilite:sd(t.facilite-.2,1.3,3.2),intervalle:0,due:n+10*6e4,revisions:t.revisions+1,oublis:t.oublis+1};const i=t.revisions===0||t.intervalle===0;if(e==="bien"){const s=i?1:Math.max(1,Math.round(t.intervalle*t.facilite));return{...t,intervalle:s,due:n+s*rd,revisions:t.revisions+1}}const r=i?2:Math.max(2,Math.round(t.intervalle*(t.facilite+.6)));return{...t,facilite:sd(t.facilite+.15,1.3,3.2),intervalle:r,due:n+r*rd,revisions:t.revisions+1}}function uT(t,e){return t.flatMap(n=>n.fiches).filter(n=>n.due<=e).sort((n,i)=>n.due-i.due)}function dT(t){if(!t||typeof t!="object")return null;const e=t,n=typeof e.verso=="string"?e.verso.trim():"",i=typeof e.recto=="string"?e.recto.trim():"";if(!n||!i)return null;const r=(s,a=0)=>typeof s=="number"&&Number.isFinite(s)?s:a;return{id:typeof e.id=="string"&&e.id?e.id:`f-${Dl()}`,verso:n,recto:i,facilite:sd(r(e.facilite,2.5),1.3,3.2),intervalle:Math.max(0,Math.round(r(e.intervalle))),due:r(e.due,Date.now()),revisions:Math.max(0,Math.round(r(e.revisions))),oublis:Math.max(0,Math.round(r(e.oublis)))}}function hT(t){if(!t||typeof t!="object")return null;const e=t;return typeof e.nom!="string"||!Array.isArray(e.fiches)?null:{id:typeof e.id=="string"&&e.id?e.id:`p-${Dl()}`,nom:e.nom.trim()||"Sans nom",fiches:e.fiches.map(dT).filter(n=>n!==null)}}function ut(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim().replace(/\s+/g," ")}function Dc(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Ic(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619)>>>0;return e>>>0}function Nc(t,e){const n=[...t];for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}function fT(t,e,n=Date.now()){if(t.fiches.length<2)return[];const i=Math.floor(n/rd),r=[...new Set(t.fiches.map(o=>o.recto))],s=Nc(t.fiches,Dc(Ic(`${t.id}:${i}`))).slice(0,Math.max(0,e)),a=[];for(const o of s){const l=Nc(r.filter(u=>u!==o.recto),Dc(Ic(`${o.id}:${i}`))).slice(0,3),c=Nc([o.recto,...l],Dc(Ic(`c:${o.id}:${i}`)));a.push({ficheId:o.id,enonce:o.verso,attendue:o.recto,choix:c,bonne:c.indexOf(o.recto)})}return a}const bv="nath.etudes";function Kn(t){try{const e=t.getItem(bv);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(hT).filter(i=>i!==null):[]}catch{return[]}}function bh(t,e){t.setItem(bv,JSON.stringify(e))}function ls(t,e,n){const i=lT(e,n);return i?(bh(t,[...Kn(t),i]),i):null}function ma(t,e,n,i,r){const s=oT(n,i,r);if(!s)return null;const a=Kn(t),o=a.find(l=>l.id===e);return o?(o.fiches.push(s),bh(t,a),s):null}function pT(t,e,n,i,r=Date.now()){const s=Kn(t),a=s.find(c=>c.id===e),o=a?.fiches.findIndex(c=>c.id===n)??-1;if(!a||o<0)return null;const l=cT(a.fiches[o],i,r);return a.fiches[o]=l,bh(t,s),l}function mT(t,e){return{total:t.fiches.length,aRevoir:t.fiches.filter(n=>n.due<=e).length,revisees:t.fiches.filter(n=>n.revisions>0).length}}function gT(t,e){const n=ut(e);if(!n)return null;const i=t.find(r=>ut(r.sujet)===n);return i||(t.find(r=>{const s=ut(r.sujet);return s.length>2&&(n.includes(s)||s.includes(n))})??null)}function vT(t,e){const n=e.sujet.trim(),i=e.resume.trim();if(!n||!i)return t;const r=ut(n),s={sujet:n,titre:(e.titre||"").trim()||n,resume:i,url:typeof e.url=="string"?e.url:"",image:typeof e.image=="string"?e.image:"",ramene_a:Number.isFinite(e.ramene_a)?e.ramene_a:Date.now()};return[...t.filter(a=>ut(a.sujet)!==r),s]}function _T(t){for(const e of[t?.originalimage?.source,t?.thumbnail?.source])if(typeof e=="string"&&/^https?:\/\//.test(e))return e;return""}async function Yp(t,e,n){try{const i=`https://${n}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t.trim())}`,r=await e(i);if(!r.ok)return null;const s=await r.json(),a=typeof s?.extract=="string"?s.extract.trim():"";return a?{titre:typeof s.title=="string"&&s.title?s.title:t.trim(),resume:a,url:s?.content_urls?.desktop?.page??"",image:_T(s)}:null}catch{return null}}async function xT(t,e,n="fr"){try{const i=`https://${n}.wikipedia.org/w/api.php?action=query&list=search&srlimit=1&format=json&origin=*&srsearch=`+encodeURIComponent(t.trim()),r=await e(i);if(!r.ok)return null;const a=(await r.json())?.query?.search?.[0]?.title;return typeof a=="string"&&a.trim()?a.trim():null}catch{return null}}async function Jp(t,e,n="fr"){const i=await Yp(t,e,n);if(i)return i;const r=await xT(t,e,n);return!r||ut(r)===ut(t)?null:await Yp(r,e,n)}function Uc(t,e=8){const n=t.split(new RegExp("(?<=[.!?;])\\s+")).map(s=>s.trim()).filter(Boolean),i=[],r=new Set;for(const s of n){if(i.length>=e)break;const a=s.split(/\s+/);if(a.length<4)continue;const o=d=>d.replace(/[^\p{L}\p{N}]/gu,"");let l="";for(const d of a){const h=o(d);h.length>=5&&h.length>l.length&&(l=h)}if(!l)continue;const c=l.toLowerCase();if(r.has(c))continue;r.add(c);const u=a.map(d=>o(d)===l?"……":d).join(" ");i.push({verso:u,recto:l})}return i}const Kp=(t,e)=>`${ut(t)}|${ut(e)}`;function ga(t,e,n,i){const r=e.trim(),s=n.trim(),a=i.trim();if(!r||!s||!a)return[...t];const o=Kp(r,a);return[...t.filter(c=>Kp(c.de,c.langue)!==o),{de:r,a:s,langue:a}]}function ST(t,e,n){const i=ut(e),r=n.filter(u=>ut(u.langue)===i),s=ut(t)?ut(t).split(" "):[];if(s.length===0)return{resultat:null,manques:[]};const a=r.find(u=>ut(u.de)===ut(t));if(a)return{resultat:a.a,manques:[]};const o=new Map;for(const u of r){const d=ut(u.de);d&&!d.includes(" ")&&o.set(d,u.a)}const l=[],c=[];for(const u of s){const d=o.get(u);d?l.push(d):(l.push(u),c.push(u))}return c.length===s.length?{resultat:null,manques:c}:{resultat:l.join(" "),manques:c}}function Zp(t){if(!t)return[];try{const e=JSON.parse(t);return Array.isArray(e)?e.map(n=>{if(!n||typeof n!="object")return null;const i=n,r=typeof i.de=="string"?i.de.trim():"",s=typeof i.a=="string"?i.a.trim():"",a=typeof i.langue=="string"?i.langue.trim():"";return r&&s&&a?{de:r,a:s,langue:a}:null}).filter(n=>n!==null):[]}catch{return[]}}const MT={anglais:[["bonjour","hello"],["merci","thank you"],["oui","yes"],["non","no"],["eau","water"],["pain","bread"],["maison","house"],["ami","friend"],["père","father"],["mère","mother"],["chien","dog"],["chat","cat"],["livre","book"],["école","school"],["jour","day"],["nuit","night"]].map(([t,e])=>({de:t,a:e,langue:"anglais"})),espagnol:[["bonjour","hola"],["merci","gracias"],["oui","sí"],["non","no"],["eau","agua"],["pain","pan"],["maison","casa"],["ami","amigo"],["père","padre"],["mère","madre"],["chien","perro"],["chat","gato"],["livre","libro"],["école","escuela"],["jour","día"],["nuit","noche"]].map(([t,e])=>({de:t,a:e,langue:"espagnol"})),allemand:[["bonjour","hallo"],["merci","danke"],["oui","ja"],["non","nein"],["eau","Wasser"],["pain","Brot"],["maison","Haus"],["ami","Freund"],["père","Vater"],["mère","Mutter"],["chien","Hund"],["chat","Katze"],["livre","Buch"],["école","Schule"],["jour","Tag"],["nuit","Nacht"]].map(([t,e])=>({de:t,a:e,langue:"allemand"})),italien:[["bonjour","ciao"],["merci","grazie"],["oui","sì"],["non","no"],["eau","acqua"],["pain","pane"],["maison","casa"],["ami","amico"],["père","padre"],["mère","madre"],["chien","cane"],["chat","gatto"],["livre","libro"],["école","scuola"],["jour","giorno"],["nuit","notte"]].map(([t,e])=>({de:t,a:e,langue:"italien"})),portugais:[["bonjour","olá"],["merci","obrigado"],["oui","sim"],["non","não"],["eau","água"],["pain","pão"],["maison","casa"],["ami","amigo"],["père","pai"],["mère","mãe"],["chien","cachorro"],["chat","gato"],["livre","livro"],["école","escola"],["jour","dia"],["nuit","noite"]].map(([t,e])=>({de:t,a:e,langue:"portugais"})),arabe:[["bonjour","مرحبا"],["merci","شكرا"],["oui","نعم"],["non","لا"],["eau","ماء"],["pain","خبز"],["maison","بيت"],["ami","صديق"],["père","أب"],["mère","أم"],["chien","كلب"],["chat","قط"],["livre","كتاب"],["école","مدرسة"],["jour","يوم"],["nuit","ليلة"]].map(([t,e])=>({de:t,a:e,langue:"arabe"})),chinois:[["bonjour","你好"],["merci","谢谢"],["oui","是"],["non","不"],["eau","水"],["pain","面包"],["maison","家"],["ami","朋友"],["père","爸爸"],["mère","妈妈"],["chien","狗"],["chat","猫"],["livre","书"],["école","学校"],["jour","日"],["nuit","夜"]].map(([t,e])=>({de:t,a:e,langue:"chinois"}))},bT={english:"anglais",spanish:"espagnol",german:"allemand",italian:"italien",portuguese:"portugais",arabic:"arabe",chinese:"chinois"};function yT(t){const e=ut(t),n=bT[e]??e;return(MT[n]??[]).map(i=>({...i}))}function ET(t){return t.map(e=>`${e.langue} | ${e.de} :: ${e.a}`).join(`
`)}function TT(t,e){let n=[...e];for(const i of t.split(/\r?\n/)){const r=i.trim();if(!r||r.startsWith("#"))continue;const s=r.indexOf("|"),a=r.indexOf("::",s+1);if(s<=0||a<0)continue;const o=r.slice(0,s).trim(),l=r.slice(s+1,a).trim(),c=r.slice(a+2).trim();!o||!l||!c||(n=ga(n,l,c,o))}return n}const Il={actif:!1,nom:"",slogan:"",couleur:"#9fd8ff",organisation:"",cle:""},yh="nath.marque",AT=/^#[0-9a-fA-F]{6}$/;function yv(t){return Rl("entreprise:"+ut(t))}function Ev(t){return typeof t=="string"&&AT.test(t.trim())?t.trim().toLowerCase():Il.couleur}function ua(t){try{const e=JSON.parse(t.getItem(yh)||"{}"),n=typeof e.nom=="string"?e.nom.trim().slice(0,40):"",i=typeof e.slogan=="string"?e.slogan.trim().slice(0,90):"",r=typeof e.organisation=="string"?e.organisation.trim():"",s=typeof e.cle=="string"?e.cle:"";return{actif:e.actif===!0&&!!n&&!!r&&Ll(s,yv(r)),nom:n,slogan:i,couleur:Ev(e.couleur),organisation:r,cle:s}}catch{return{...Il}}}function wT(t,e){const n=e.organisation.trim();if(!n||!Ll(e.cle,yv(n)))return!1;const i=e.nom.trim().slice(0,40);if(!i)return!1;const r={actif:!0,nom:i,slogan:e.slogan.trim().slice(0,90),couleur:Ev(e.couleur),organisation:n,cle:e.cle};return t.setItem(yh,JSON.stringify(r)),!0}function CT(t){t.setItem(yh,JSON.stringify({...Il}))}function Qp(t){return t.actif?t.couleur:Il.couleur}const RT=["est traduit par","se traduit par","traduit par","veut dire","signifie","se dit"];function Tv(t){const e=t.trim();if(!e)return null;const n=e.toLowerCase();for(const i of RT){const r=n.indexOf(i);if(r<0)continue;const s=e.slice(0,r).trim(),a=e.slice(r+i.length).trim().replace(/[.,;:!?…]+$/,"").trim();return s&&a?{de:s,a}:null}return null}const LT=/\b(?:euh+|hem+|hm+|ben|bah)\b[, ]*/gi;function Av(t){let e=t.replace(LT,"");return e=e.replace(/\s+/g," "),e=e.replace(/([,.;:!?])\s*(?:[,.;:!?]\s*)*/g,"$1 "),e.trim()}const PT={francais:"fr",français:"fr",french:"fr",anglais:"en",english:"en",espagnol:"es",spanish:"es",allemand:"de",german:"de",deutsch:"de",italien:"it",italian:"it",portugais:"pt",portuguese:"pt",arabe:"ar",arabic:"ar",chinois:"zh",chinese:"zh",neerlandais:"nl",dutch:"nl",russe:"ru",russian:"ru",turc:"tr",turkish:"tr",swahili:"sw",hindi:"hi",japonais:"ja",japanese:"ja",coréen:"ko",korean:"ko",grec:"el",greek:"el",polonais:"pl",polish:"pl",hébreu:"he",hebrew:"he"};function DT(t){const e=t.trim().toLowerCase();return e?PT[e]??null:null}async function IT(t,e,n,i){const r=t.trim();if(!r)return null;try{const s="https://api.mymemory.translated.net/get?q="+encodeURIComponent(r)+"&langpair="+encodeURIComponent(e)+"|"+encodeURIComponent(n),a=await i(s);if(!a.ok)return null;const l=(await a.json())?.responseData?.translatedText;return typeof l=="string"&&l.trim()?l.trim():null}catch{return null}}const NT=24,wv=[{id:"soe",titre:"Système solaire",domaine:"Sciences",resume:"Le Soleil et huit planètes liées par la gravité ; la Terre est la seule connue à abriter la vie.",tags:["espace","planètes","gravité"]},{id:"gal",titre:"Voie lactée",domaine:"Sciences",resume:"Notre galaxie, un disque de plus de cent milliards d’étoiles dont le Soleil n’est qu’un point lumineux.",tags:["espace","galaxie","astronomie"]},{id:"mit",titre:"Mitose",domaine:"Sciences",resume:"La division cellulaire qui duplique chaque chromosome et fabrique deux cellules identiques, base de la croissance.",tags:["cellule","biologie","vie"]},{id:"pho",titre:"Photosynthèse",domaine:"Sciences",resume:"Les feuilles transforment la lumière, l’eau et le dioxyde de carbone en sucre et en oxygène : presque tout respire grâce à elle.",tags:["plante","énergie","biologie"]},{id:"eau",titre:"Cycle de l’eau",domaine:"Sciences",resume:"Évaporation, nuages, pluie, rivières : la même eau tourne depuis des milliards d’années sans jamais se consumer.",tags:["eau","terre","climat"]},{id:"vol",titre:"Volcans",domaine:"Sciences",resume:"Des failles de la croûte terrestre où la lave remontée du manteau façonne îles et montagnes, parfois avec violence.",tags:["terre","roche","danger"]},{id:"sek",titre:"Séismes",domaine:"Sciences",resume:"Les plaques tectiques frottent, la croûte casse et libère des ondes : c’est le tremblement de terre, mesuré en magnitude.",tags:["terre","ondes","danger"]},{id:"mno",titre:"Magnétisme",domaine:"Sciences",resume:"Aimants et courants électriques créent un champ invisible ; la Terre elle-même est un aimant géant qui guide les boussoles.",tags:["aimant","énergie","physique"]},{id:"lum",titre:"Lumière",domaine:"Sciences",resume:"Onde électromagnétique à 300 000 km/s ; sa diffusion dans l’air rend le ciel bleu et son arc-en-ciel cache toutes les couleurs.",tags:["ondes","couleur","physique"]},{id:"son",titre:"Son",domaine:"Sciences",resume:"Des vibrations qui voyagent dans l’air, l’eau ou les solides ; sans support matériel, le son n’existe pas : le silence de l’espace est total.",tags:["ondes","vibration","physique"]},{id:"mat",titre:"États de la matière",domaine:"Sciences",resume:"Solide, liquide, gaz : la même eau change d’humeur selon la température, et la chaleur cachée du changement d’état règle nos pluies.",tags:["eau","énergie","physique"]},{id:"atm",titre:"Atmosphère",domaine:"Sciences",resume:"Une coquille de gaz de cent kilomètres, la première moitié pesée au ras du sol : elle respire, protège et tient la planète au chaud.",tags:["air","terre","climat"]},{id:"ele",titre:"Électricité",domaine:"Technique",resume:"Le déplacement organisé des électrons dans un conducteur ; tout notre monde numérique n’est que de l’électricité mise en scène.",tags:["énergie","courant","technique"]},{id:"inf",titre:"Informatique",domaine:"Technique",resume:"Des portes logiques faites de transistors, des millions de zéros et des uns, et naissent textes, images et intelligences.",tags:["calcul","données","technique"]},{id:"ia",titre:"Intelligence artificielle",domaine:"Technique",resume:"Des réseaux de neurones entraînés sur d’énormes quantités de texte ou d’images savent reconnaître, traduire et converser.",tags:["calcul","données","cerveau"]},{id:"rob",titre:"Robotique",domaine:"Technique",resume:"Capteurs pour sentir, moteurs pour agir, programmes pour décider : le robot est un outil qui commence à choisir lui-même.",tags:["machine","capteur","technique"]},{id:"geo",titre:"Géométrie",domaine:"Maths",resume:"L'étude des formes, des distances et de l'espace, d'Euclide aux géométries courbes qui ont inspiré Einstein.",tags:["formes","espace","nombre"]},{id:"alg",titre:"Algèbre",domaine:"Maths",resume:"L’art de manipuler l’inconnue : une lettre devient une boîte de calcul et les équations ouvrent la solution pas à pas.",tags:["nombre","équation","méthode"]},{id:"pro",titre:"Probabilités",domaine:"Maths",resume:"Mesurer le hasard avec rigueur : dès qu’un jeu, une météo ou un risque est chiffré, ce sont les probabilités qui parlent.",tags:["hasard","nombre","décision"]},{id:"fib",titre:"Suite de Fibonacci",domaine:"Maths",resume:"Chaque terme est la somme des deux précédents ; on retrouve cette suite dans les tournesols, les pins et certaines coquilles.",tags:["nombre","nature","motif"]},{id:"nom",titre:"Nombres premiers",domaine:"Maths",resume:"Des nombres que rien ne divise à part 1 et eux-mêmes ; les briques invisibles de l’arithmétique et du code secret moderne.",tags:["nombre","arithmétique","secret"]},{id:"pyt",titre:"Pythagore",domaine:"Maths",resume:"Dans un triangle rectangle, le carré de l’hypoténuse égale la somme des carrés des deux autres côtés : l’outil des mesures depuis 2500 ans.",tags:["formes","triangle","mesure"]},{id:"evh",titre:"Évolution",domaine:"Histoire",resume:"Par sélection naturelle, les êtres vivants se transforment sur des millions d’années : la diversité du vivant en est la trace.",tags:["darwin","biologie","science"]},{id:"ren",titre:"Renaissance",domaine:"Histoire",resume:"Entre XIVe et XVIe siècle, arts, sciences et explorations éclatent en Europe : Léonard de Vinci en est l’esprit le plus curieux.",tags:["art","science","europe"]},{id:"imp",titre:"Empires d’Afrique",domaine:"Histoire",resume:"Ghana, Mali, Songhaï, Grande-Zimbabwe : de grands empires ont prospéré sur l’or, le sel, le commerce et l’urbanisme bien avant la colonisation.",tags:["afrique","commerce","or"]},{id:"mer",titre:"Mer et océans",domaine:"Géographie",resume:"L’eau salée couvre plus de 70 % de la planète, régule le climat et abrite une vie que nous cartographions moins bien que la Lune.",tags:["eau","terre","climat"]},{id:"clm",titre:"Climat",domaine:"Géographie",resume:"Le climat est une moyenne de la météo sur trente ans ; le golfe du Mexique, le Sahara et nos saisons en dépendent comme d’une horloge.",tags:["terre","air","sciences"]},{id:"cor",titre:"Cœur",domaine:"Corps humain",resume:"Une pompe-muscle de 300 grammes qui bat cent mille fois par jour et irrigue chaque cellule de sang oxygéné.",tags:["sang","vie","organe"]},{id:"cer",titre:"Cerveau",domaine:"Corps humain",resume:"Quatre-vingt-six milliards de neurones en réseau : penser, sentir et bouger ne sont que des courants et des chimies orchestrées.",tags:["neurone","vie","sens"]},{id:"som",titre:"Sommeil",domaine:"Corps humain",resume:"Chaque nuit le cerveau range la journée, consolide la mémoire et répare le corps ; dormir peu, c’est apprendre moins.",tags:["cerveau","mémoire","vie"]},{id:"mus",titre:"Musique",domaine:"Arts",resume:"Des fréquences organisées dans le temps : rythmes et gammes varient selon les cultures mais le plaisir d’écouter est universel.",tags:["son","art","culture"]},{id:"cin",titre:"Cinéma",domaine:"Arts",resume:"Vingt-quatre images par seconde suffisent à l’œil pour croire au mouvement : le cinéma est une illusion partagée devenue art majeur.",tags:["image","art","technique"]},{id:"lng",titre:"Langues du monde",domaine:"Langue",resume:"Plus de sept mille langues parlées ; chacune découpe le réel à sa façon et en perdre une, c’est perdre une manière de penser.",tags:["parole","culture","mémoire"]},{id:"ecr",titre:"Écriture",domaine:"Langue",resume:"Née à Sumer pour compter les greniers, l’écriture a étendu la mémoire humaine au-delà des individus et des siècles.",tags:["symbole","histoire","mémoire"]},{id:"bio",titre:"Biodiversité",domaine:"Environnement",resume:"Des millions d’espèces liées dans un réseau vivant ; chaque disparité retire un maillon que rien ne remplace.",tags:["vie","nature","équilibre"]},{id:"for",titre:"Forêts",domaine:"Environnement",resume:"Elles respirent pour la planète, abritent la plupart des espèces terrestres et régulent la pluie des continents.",tags:["arbres","climat","nature"]},{id:"rlf",titre:"Récifs coralliens",domaine:"Environnement",resume:"Des villes vivantes bâties par de petits animaux : moins de un pour cent de l’océan, un quart de la vie marine.",tags:["mer","vie","équilibre"]},{id:"dch",titre:"Déchets et recyclage",domaine:"Environnement",resume:"Rien dans la nature ne jette : nos déchets sont des matières qui attendent le bon geste, ou polluent longtemps.",tags:["matière","équilibre","société"]},{id:"slt",titre:"Solaire photovoltaïque",domaine:"Énergie",resume:"La lumière du soleil devient électricité dans une galette de silicium : la Terre reçoit en une heure de soleil de quoi alimenter un an.",tags:["énergie","soleil","technique"]},{id:"eol",titre:"Éolien",domaine:"Énergie",resume:"Le vent est une énergie solaire corrigée par la rotation de la Terre ; ses pales captent ce mouvement devenu courant.",tags:["énergie","vent","technique"]},{id:"nucl",titre:"Nucléaire",domaine:"Énergie",resume:"Fissionner l’uranium libère une énergie immense sans fumée ; la question reste la gestion des déchets et le risque.",tags:["énergie","atome","débat"]},{id:"bat",titre:"Batteries",domaine:"Énergie",resume:"Stockées chimiquement, les électrons attendent leur heure : sans batterie, le solaire et l’éolien ne pourraient suivre la nuit.",tags:["énergie","stockage","technique"]},{id:"urb",titre:"Villes",domaine:"Société",resume:"Nées de greniers et de carrefours, elles logent aujourd’hui plus de la moitié de l’humanité et dessinent son avenir.",tags:["habiter","société","histoire"]},{id:"mon",titre:"Monnaie",domaine:"Société",resume:"Du coquillage au chiffre : la monnaie n’a de valeur que celle de la confiance partagée, et l’économie tout entière s’appuie dessus.",tags:["échange","confiance","société"]},{id:"trv",titre:"Travail",domaine:"Société",resume:"Chaque métier est une réponse à un besoin des autres ; l’automatisation déplace le travail plus qu’il ne le fait disparaître.",tags:["métier","société","technique"]},{id:"edu",titre:"Éducation",domaine:"Société",resume:"Transmettre sans remplacer : apprendre, c’est ajouter à l’élève ce qu’il découvrira seul avec de l’aide.",tags:["école","apprendre","société"]},{id:"ntn",titre:"Internet",domaine:"Société",resume:"Des câbles sous-marins et des routeurs d’abord : le nuage numérique est en réalité un réseau très physique autour de la Terre.",tags:["réseau","données","société"]},{id:"vac",titre:"Vaccins",domaine:"Médecine",resume:"Montrer au corps l’ennemi sans le danger : il en garde la mémoire et répond plus vite la fois suivante.",tags:["corps","médecine","mémoire"]},{id:"ant",titre:"Antibiotiques",domaine:"Médecine",resume:"Des moisissures devenues médicaments : elles tuent les bactéries, et leur usage excessif fabrique des bactéries devenues résistantes.",tags:["médecine","bactérie","équilibre"]},{id:"dgst",titre:"Digestion",domaine:"Corps humain",resume:"Du bol alimentaire à l’énergie, un voyage de trente mètres où chaque organe joue son rôle à l’heure.",tags:["corps","énergie","vie"]}];function UT(t,e){const n=ut(t.titre),i=t.tags.map(s=>ut(s)),r=ut(t.resume);return n.includes(e)?3:i.some(s=>s===e||s.includes(e)||e.includes(s))?2:r.includes(e)?1:0}function FT(t,e){const n=ut(e);return n?t.map((r,s)=>({n:r,i:s,s:UT(r,n)})).filter(r=>r.s>0).sort((r,s)=>s.s-r.s||r.i-s.i).map(r=>r.n):t.slice()}function OT(t){return[...new Set(t.map(e=>e.domaine))].sort((e,n)=>e.localeCompare(n,"fr"))}function BT(t,e){return e?t.filter(n=>n.domaine===e):t.slice()}function kT(t,e=Math.floor(Date.now()/864e5)){if(!t.length)return null;const n=Math.abs(Math.trunc(e));return t[n%t.length]}function zT(t,e,n=6){const i=new Set(t.tags.map(r=>ut(r)));return e.filter(r=>r.id!==t.id).map(r=>({x:r,s:r.tags.filter(s=>i.has(ut(s))).length*2+(r.domaine===t.domaine?1:0)})).filter(r=>r.s>0).sort((r,s)=>s.s-r.s).slice(0,n).map(r=>r.x)}function VT(t,e,n=NT){const i=Math.min(t.length,Math.max(0,e)+n);return{visibles:t.slice(0,i),reste:t.length-i}}const Cv="nath.encyclo.favoris";function Rv(t){try{const e=JSON.parse(t.getItem(Cv)??"[]");return Array.isArray(e)?[...new Set(e.filter(n=>typeof n=="string"))]:[]}catch{return[]}}function em(t,e){const n=Rv(t),i=!n.includes(e),r=i?[...n,e]:n.filter(s=>s!==e);return t.setItem(Cv,JSON.stringify(r)),i}function tm(t,e){const n=new Set(Rv(e));return t.filter(i=>n.has(i.id))}function GT(t){const e=new Set,n=[];for(const i of t){const r=ut(i.titre||i.sujet);!r||e.has(r)||(e.add(r),n.push({id:`savoir:${r}`,titre:(i.titre||i.sujet).trim(),domaine:"Mes découvertes",resume:i.resume,tags:[],...i.image?{image:i.image}:{},...i.url?{url:i.url}:{}}))}return n}async function HT(t,e,n=fetch,i=""){const r=e.trim();if(!r)return null;try{const s=await n(`${t}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i?{modele:i}:{},messages:[{role:"system",content:"Tu es un guide curieux et pédagogue, en français. En 3 ou 4 phrases courtes, donne un fait surprenant et un rapprochement inattendu avec un autre domaine sur le sujet qui vient. Pas de liste, pas de titre."},{role:"user",content:r}]})});if(!s.ok)return null;const a=await s.json(),o=a?.result?.response??a?.response,l=typeof o=="string"?o.trim():"";return l&&l.length<=800?l:null}catch{return null}}function qT(t){return!t.image}function WT(t,e,n){return!t||!t.image||!e||!/^https?:\/\//.test(t.image)||t.titre&&jo(t.titre)!==jo(n)||Lv(e,n)?"":t.image}function Lv(t,e){return!t||jo(t)!==jo(e)}function jo(t){return ut(t).replace(/['’]/g," ").replace(/\s+/g," ").trim().replace(/^(?:la |le |les |l |un |une |des |du |de |d )/,"").replace(/s$/,"")}const Fc=[{max:50,palier:"Classe",mensuel:15e3},{max:200,palier:"École",mensuel:4e4},{max:1e3,palier:"Réseau",mensuel:12e4},{max:1/0,palier:"Sur mesure",mensuel:null}];function $T(t){if(!Number.isFinite(t)||t<=0)return{palier:"Sur mesure",mensuel:null};const e=Fc.find(n=>t<=n.max)??Fc[Fc.length-1];return{palier:e.palier,mensuel:e.mensuel}}function nm(t){return t===null?"à convenir":t.toLocaleString("fr-FR").replace(/[\u202f\u00a0]/g," ")+" FCFA"}const Pv="nath.flamme",ad=100,jT="Curieux",im=[jT,"Défricheur","Apprenant","Explorateur","Artisan","Savant","Passeur","Esprit libre"],Oc={streak:0,meilleur:0,xp:0,dernier:""},vs=t=>typeof t=="number"&&Number.isFinite(t)&&t>0?Math.floor(t):0;function XT(t=Date.now()){const e=new Date(t),n=`${e.getMonth()+1}`.padStart(2,"0"),i=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${n}-${i}`}const rm=t=>{const[e,n,i]=t.split("-").map(Number);return!e||!n||!i?NaN:Math.floor(Date.UTC(e,n-1,i)/864e5)};function YT(t,e){const n=rm(t),i=rm(e);return Number.isNaN(n)||Number.isNaN(i)?NaN:i-n}function Dv(t){try{const e=t.getItem(Pv);if(!e)return{...Oc};const n=JSON.parse(e);return!n||typeof n!="object"?{...Oc}:{streak:vs(n.streak),meilleur:vs(n.meilleur),xp:vs(n.xp),dernier:typeof n.dernier=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(n.dernier)?n.dernier:""}}catch{return{...Oc}}}function Iv(t,e){t.setItem(Pv,JSON.stringify(e))}function JT(t,e=Date.now()){const n=Dv(t),i=XT(e);if(n.dernier===i)return n;const r=n.dernier&&YT(n.dernier,i)===1?n.streak+1:1,s={streak:r,meilleur:Math.max(n.meilleur,r),xp:n.xp,dernier:i};return Iv(t,s),s}function Nv(t,e,n=Date.now()){const i=vs(e),r=JT(t,n),s={...r,xp:r.xp+i};return Iv(t,s),s}function KT(t){return Math.floor(vs(t)/ad)+1}function ZT(t){const e=Math.max(1,Math.floor(t)||1);return im[Math.min(e-1,im.length-1)]}function QT(t){return vs(t)%ad/ad}const Uv="nath.journal",eA=200,_s=t=>typeof t=="string"?t.trim():"",sm=t=>typeof t=="number"&&Number.isFinite(t)?Math.floor(t):0;function tA(t,e){if(!t||typeof t!="object")return null;const n=t,i=_s(n.titre),r=_s(n.texte);return!i&&!r?null:{id:typeof n.id=="string"&&n.id?n.id:`entree-${e}-${sm(n.at)}`,titre:i||r.slice(0,48),texte:r||i,origine:_s(n.origine)||"note",at:sm(n.at)}}function Xo(t){try{const e=t.getItem(Uv);if(!e)return[];const n=JSON.parse(e);return Array.isArray(n)?n.map(tA).filter(i=>i!==null):[]}catch{return[]}}function Fv(t,e){t.setItem(Uv,JSON.stringify(e.slice(0,eA)))}function Ov(t,e,n){const i=_s(e.titre),r=_s(e.texte);if(!i&&!r)return null;const s=Date.now(),a={id:`${s}-${Math.random().toString(36).slice(2,8)}`,titre:i||r.slice(0,48),texte:r||i,origine:_s(e.origine)||"note",at:s};return Fv(t,[a,...Xo(t)]),a}function am(t,e){const n=ut(e).trim();return n?t.filter(i=>`${ut(i.titre)} ${ut(i.texte)}`.includes(n)):[...t]}function nA(t,e){const n=Xo(t),i=n.filter(r=>r.id!==e);return i.length===n.length?!1:(Fv(t,i),!0)}function iA(t,e=8){return t.filter(n=>n.titre&&n.texte).slice(0,e).map(n=>({verso:n.titre,recto:n.texte}))}const om="nath.savoir",yr="nath.lexique",ue=t=>{const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild},Xe=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e);function rA(t){const e=Sh(),n=ue('<button class="savoir-btn" title="Mon coin d’études" aria-label="Ouvrir le coin d’études">🎓</button>'),i=ue(`
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
    </div>`);document.body.append(n,i);const r=i.querySelector(".savoir-corps");n.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden||y(s)}),i.querySelector(".savoir-fermer").addEventListener("click",()=>i.hidden=!0);let s="reviser",a=null,o=[],l=null,c="",u=!1,d=0,h="",p=null;const v=()=>{try{const T=JSON.parse(t.getItem(om)??"[]");return Array.isArray(T)?T.filter(B=>!!B&&typeof B=="object"&&typeof B.sujet=="string"&&typeof B.resume=="string"):[]}catch{return[]}},_=()=>Zp(t.getItem(yr));i.querySelectorAll(".savoir-onglets button").forEach(T=>T.addEventListener("click",()=>{s=T.dataset.on,i.querySelectorAll(".savoir-onglets button").forEach(B=>B.classList.toggle("actif",B===T)),y(s)}));const m=()=>a?Kn(t).find(T=>T.id===a)??null:null,f=()=>a?Kn(t).filter(T=>T.id===a):Kn(t);function y(T){r.innerHTML="",T==="reviser"?E():T==="savoir"?L():T==="encyclo"?P():T==="entreprise"?ie():q()}function E(){const T=Kn(t),B=ue('<select class="savoir-select"><option value="">Tous les paquets</option></select>');for(const H of T){const ee=document.createElement("option");ee.value=H.id,ee.textContent=`${H.nom} (${H.fiches.length})`,H.id===a&&(ee.selected=!0),B.appendChild(ee)}B.addEventListener("change",()=>{a=B.value||null,l=null,E()}),r.appendChild(B);const F=ue('<div class="savoir-ligne"><input type="text" placeholder="Nouveau paquet (ex. Biologie)" aria-label="Nouveau paquet" /><button>Ajouter</button></div>'),D=F.querySelector("input");F.querySelector("button").addEventListener("click",()=>{const H=ls(t,D.value);H?(a=H.id,E()):D.focus()}),r.appendChild(F);const z=f().map(H=>mT(H,Date.now())).reduce((H,ee)=>({total:H.total+ee.total,aRevoir:H.aRevoir+ee.aRevoir,revisees:H.revisees+ee.revisees}),{total:0,aRevoir:0,revisees:0});r.appendChild(ue(`<p class="savoir-stats">${z.total} carte${z.total>1?"s":""} · <b>${z.aRevoir} à revoir</b> · ${z.revisees} travaillée${z.revisees>1?"s":""}</p>`));const ae=ue('<details class="savoir-import"><summary>Coller des cartes (une par ligne : question :: réponse)</summary><textarea rows="4" placeholder="Capitale du Cameroun :: Yaoundé&#10;2 + 2 :: 4"></textarea><button>Importer</button></details>'),k=ae.querySelector("textarea");ae.querySelector("button").addEventListener("click",()=>{const H=a??ls(t,"Mes cartes")?.id??null;if(!H)return;a=H;let ee=0;for(const he of k.value.split(/\r?\n/)){const we=he.indexOf("::");we<=0||ma(t,H,he.slice(0,we),he.slice(we+2))&&ee++}E(),ee&&e.parler(`${ee} cartes rangées dans ${m()?.nom??"Mes cartes"}.`,"posee")}),r.appendChild(ae);const W=ue('<div class="savoir-actions"><button class="savoir-dicter">🎤 Dicter un cours</button></div>');W.querySelector(".savoir-dicter").addEventListener("click",()=>{if(r.querySelector(".savoir-session")?.remove(),!e.sttDisponible){r.appendChild(ue('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — colle ton cours en texte, ça marche aussi.</p>'));return}r.appendChild(ue('<p class="savoir-msg">J’écoute… parle normalement, je retirerai les « euh » tout seul.</p>')),e.ecouter(async H=>{const ee=Av(H);if(r.querySelector(".savoir-msg")?.remove(),!ee){r.appendChild(ue('<p class="savoir-msg">Je n’ai rien entendu de assez net — redicte, sans te presser.</p>'));return}let we=a;if(!we){const Be=sn(t),Mt=Kn(t).map(Tt=>Tt.nom),R=Be&&Mt.length?await BE(Be,ee,Mt):null;R&&(we=Kn(t).find(Tt=>Tt.nom===R)?.id??null)}const ve=we??ls(t,"Mes cartes")?.id??null;if(!ve)return;a=ve;let ye=0;for(const Be of Uc(ee))ma(t,ve,Be.verso,Be.recto)&&ye++;E();const He=ue(ye?`<p class="savoir-msg">${ye} carte${ye>1?"s":""} née${ye>1?"s":""} de ta voix, rangée${ye>1?"s":""} dans « ${Xe(m()?.nom??"Mes cartes")} ». Révise quand tu veux.</p>`:'<p class="savoir-msg">Trop court pour faire des cartes — dicte-moi des phrases complètes, une idée par phrase.</p>');r.insertBefore(He,r.firstChild),ye&&e.parler(`${ye} cartes nées de ta dictée.`,"lumineuse")})}),r.appendChild(W);const oe=ue('<div class="savoir-actions"><button class="savoir-reviser">Réviser maintenant</button><button class="savoir-quiz">Quiz du jour</button></div>');oe.querySelector(".savoir-reviser").addEventListener("click",()=>{if(o=uT(f(),Date.now()),o.length===0){r.querySelector(".savoir-session")?.remove(),r.appendChild(ue('<p class="savoir-msg">Rien à revoir pour l’instant — repose-toi, ou importe des cartes.</p>'));return}A()}),oe.querySelector(".savoir-quiz").addEventListener("click",()=>{const H=m()??f().find(ee=>ee.fiches.length>=2);if(!H){r.appendChild(ue('<p class="savoir-msg">Un quiz a besoin d’un paquet d’au moins deux cartes.</p>'));return}l={questions:fT(H,5),index:0,reponses:[],fini:!1},C()}),r.appendChild(oe)}function A(){r.querySelector(".savoir-session")?.remove();const T=o.shift();if(!T){r.appendChild(ue('<p class="savoir-msg session">Fin de la file 🌿 — tout est revu, la mémoire fait son travail en silence.</p>'));return}const B=ue(`<div class="savoir-session session">
      <p class="savoir-reste">encore ${o.length}</p>
      <p class="savoir-verso">${Xe(T.verso)}</p>
      <div class="savoir-reponse" hidden><p class="savoir-recto">${Xe(T.recto)}</p></div>
      <div class="savoir-actions">
        <button class="savoir-voir">Voir la réponse</button>
        <span class="savoir-noter" hidden>
          <button data-n="difficile">Difficile</button>
          <button data-n="bien">Bien</button>
          <button data-n="facile">Facile</button>
        </span>
      </div>
    </div>`),F=B.querySelector(".savoir-reponse"),D=B.querySelector(".savoir-noter");B.querySelector(".savoir-voir").addEventListener("click",()=>{F.hidden=!1,D.hidden=!1,B.querySelector(".savoir-voir").hidden=!0,e.parler(T.recto,"posee")}),D.querySelectorAll("button").forEach(I=>I.addEventListener("click",()=>{const z=a??w(T.id);z&&pT(t,z,T.id,I.dataset.n),Nv(t,5),A()})),r.appendChild(B)}function w(T){for(const B of Kn(t))if(B.fiches.some(F=>F.id===T))return B.id;return null}function C(){if(r.querySelector(".savoir-session")?.remove(),!l)return E();const T=l.questions[l.index];if(!T||l.fini){const D=l.reponses.filter((ae,k)=>ae===l.questions[k].bonne).length,I=l.questions.length;l=null,E();const z=Math.round(100*D/(I||1));r.insertBefore(ue(`<p class="savoir-msg session">Quiz : ${D}/${I} (${z} %). ${z>=70?"Tu tiens le sujet.":"On creuse encore, tranquillement."}</p>`),r.firstChild),e.parler(`Quiz terminé : ${D} sur ${I}.`,"lumineuse");return}const B=ue(`<div class="savoir-session session">
      <p class="savoir-reste">question ${l.index+1} / ${l.questions.length}</p>
      <p class="savoir-verso">${Xe(T.enonce)}</p>
      <div class="savoir-choix"></div>
    </div>`),F=B.querySelector(".savoir-choix");e.parler(T.enonce,"posee"),T.choix.forEach((D,I)=>{const z=document.createElement("button");z.textContent=D,z.addEventListener("click",()=>{l.reponses[l.index]=I,[...F.children].forEach((ae,k)=>ae.classList.toggle("juste",k===T.bonne)),z.classList.toggle("faux",I!==T.bonne),e.parler(I===T.bonne?"Oui, exactement.":D,I===T.bonne?"lumineuse":"douce"),window.setTimeout(()=>{l.index++,C()},1100)}),F.appendChild(z)}),r.appendChild(B)}function L(){const T=ue('<div class="savoir-ligne"><input type="text" placeholder="Que veux-tu apprendre ? (ex. la mitose)" aria-label="Sujet" /><button>Chercher</button></div>'),B=T.querySelector("input"),F=T.querySelector("button"),D=ue('<div class="savoir-resultat"></div>');B.addEventListener("keydown",H=>{H.key==="Enter"&&I(B.value.trim())}),F.addEventListener("click",()=>I(B.value.trim()));function I(H){if(D.innerHTML="",!H)return;const ee=gT(v(),H);ee?G(ee,D):S(H,D)}r.append(T,D);const z=ue(`<details class="savoir-import"><summary>Grand cerveau en ligne (pour les machines sages)</summary>
      <p class="savoir-note">Sur demande à Nath-Tech, une adresse de cerveau prêté peut être réglée ici : les machines sans grande carte répondent alors plus vite et plus loin. Laisser vide pour éteindre ce secours.</p>
      <div class="savoir-ligne"><input type="text" class="cerv-url" placeholder="https://… (vide pour effacer)" aria-label="Adresse du grand cerveau" /><button class="cerv-ok">Régler</button></div>
      <div class="savoir-ligne"><select class="savoir-select cerv-allure" aria-label="Allure du grand cerveau"></select><button class="cerv-allure-ok">Allure</button></div>
      <p class="savoir-msg cerv-etat"></p></details>`),ae=z.querySelector(".cerv-url"),k=z.querySelector(".cerv-etat"),W=sn(t);k.textContent=W?"Le secours est réglé et veille.":"Aucun secours réglé — le cerveau local et le petit moteur suffisent.",z.querySelector(".cerv-ok").addEventListener("click",()=>{LE(t,ae.value)?(k.textContent=sn(t)?"Le secours est réglé — il répondra dès la prochaine ouverture.":"Secours éteint. Le ciel reste vivant, sans lui.",ae.value=""):k.textContent="Cette adresse ne convient pas — il faut du https."});const oe=z.querySelector(".cerv-allure");for(const H of vh){const ee=document.createElement("option");ee.value=H.cle,ee.textContent=H.nom,oe.appendChild(ee)}oe.value=RE(t),z.querySelector(".cerv-allure-ok").addEventListener("click",()=>{CE(t,oe.value)?k.textContent=Pr(t)?"Son allure est réglée — la prochaine réponse la portera.":"Elle reprend son allure ordinaire.":k.textContent="Cette allure n’existe pas — le choix reste entier."}),r.appendChild(z)}function G(T,B){B.innerHTML="";const F=ue(`<div class="savoir-fiche"><h4>${Xe(T.titre)}</h4></div>`);if(T.image&&/^https?:\/\//.test(T.image)){const k=document.createElement("img");k.className="savoir-img",k.src=T.image,k.alt="",k.loading="lazy",F.appendChild(k)}const D=ue(`<p>${Xe(T.resume)}</p>`);F.appendChild(D);const I=ue('<div class="savoir-actions"></div>'),z=ue("<button>En faire des cartes</button>");z.addEventListener("click",()=>{const k=m()??ls(t,T.sujet);if(!k)return;a=k.id;let W=0;for(const oe of Uc(T.resume))ma(t,k.id,oe.verso,oe.recto)&&W++;B.appendChild(ue(`<p class="savoir-msg">${W} carte${W>1?"s":""} rangée${W>1?"s":""} dans « ${Xe(k.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${W} cartes rangées.`,"lumineuse")}),I.appendChild(z);const ae=/^https?:\/\//.test(T.url)?T.url:"";ae&&I.appendChild(ue(`<a class="savoir-lien" href="${Xe(ae)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),B.append(F,I)}function S(T,B){const F=ue(`<div class="savoir-fiche"><p>« ${Xe(T)} » ne fait pas encore partie de mes connaissances enregistrées.</p>
      <p class="savoir-note">Veux-tu que je me connecte pour ramener le maximum de ressources sur ce sujet ? Seul le sujet sort de l’appareil, rien sur toi.</p>
      <div class="savoir-actions"><button class="oui">Oui, cherche</button><button class="non">Garde pour plus tard</button></div></div>`);F.querySelector(".non").addEventListener("click",()=>B.innerHTML=""),F.querySelector(".oui").addEventListener("click",async()=>{const D=ue('<p class="savoir-msg">Je cherche…</p>');B.appendChild(D);const I=await Jp(T,fetch);if(D.remove(),!I){B.appendChild(ue('<p class="savoir-msg">Pas de réponse du net pour l’instant — ou le sujet est trop précis. Réessaie, ou dicte-moi tes propres notes.</p>'));return}const z={sujet:T,titre:I.titre,resume:I.resume,url:I.url,image:I.image,ramene_a:Date.now()};t.setItem(om,JSON.stringify(vT(v(),z))),B.innerHTML="",G(z,B),e.parler("J’ai ramené de quoi apprendre.","lumineuse")}),B.appendChild(F)}const M=()=>[...wv,...GT(v())];function P(){if(r.innerHTML="",p){Y(p);return}const T=M(),B=new Set(tm(T,t).map(H=>H.id)),F=ue(`<div class="savoir-ligne enc-tete"><input type="text" class="enc-champ" placeholder="Cherche un sujet (ex. geometrie, espace…)" aria-label="Recherche encyclopédie" /><button class="enc-fav" title="Mes favoris">★ <span class="enc-fav-n">${B.size}</span></button></div>`),D=F.querySelector(".enc-champ");D.value=c;const I=F.querySelector(".enc-fav");if(I.classList.toggle("actif",u),D.addEventListener("input",()=>{c=D.value,d=0,P();const H=r.querySelector(".enc-champ");H&&(H.focus(),H.setSelectionRange(H.value.length,H.value.length))}),I.addEventListener("click",()=>{u=!u,d=0,P()}),r.appendChild(F),!c&&!u&&!h){const H=kT(T);if(H){const ee=ue(`<button class="enc-jour">✨ Découverte du jour · ${Xe(H.titre)}<small> ${Xe(H.domaine)}</small></button>`);ee.addEventListener("click",()=>{p=H,P()}),r.appendChild(ee)}}const z=ue('<div class="enc-domaines"></div>'),ae=[{nom:"Tous",val:""},...OT(T).map(H=>({nom:H,val:H}))];for(const H of ae){const ee=ue(`<button class="enc-dom${!u&&h===H.val?" actif":""}">${Xe(H.nom)}</button>`);ee.addEventListener("click",()=>{u=!1,h=H.val,d=0,P()}),z.appendChild(ee)}r.appendChild(z);let k=FT(T,c);u&&(k=k.filter(H=>B.has(H.id))),k=BT(k,h);const W=VT(k,d),oe=ue('<div class="enc-grille"></div>');for(const H of W.visibles){const ee=ue(`<div class="enc-carte" role="button" tabindex="0">
        <button class="enc-etoile${B.has(H.id)?" mise":""}" aria-label="Favori">${B.has(H.id)?"★":"☆"}</button>
        <h5>${Xe(H.titre)}</h5><p class="enc-domaine">${Xe(H.domaine)}</p><p class="enc-resume">${Xe(H.resume)}</p></div>`);ee.querySelector(".enc-etoile").addEventListener("click",he=>{he.stopPropagation(),em(t,H.id),P()}),ee.addEventListener("click",()=>{p=H,P()}),ee.addEventListener("keydown",he=>{he.key==="Enter"&&(p=H,P())}),oe.appendChild(ee)}if(r.appendChild(oe),W.visibles.length||r.appendChild(ue(`<p class="savoir-msg">${u?"Aucune étoile ici pour l’instant — clique sur ☆ d’une carte pour la garder.":"Rien sous ce nom — Essaie un mot plus simple, ou va le chercher dans l’onglet Savoir."}</p>`)),W.reste>0){const H=ue(`<div class="savoir-actions"><button>Afficher plus (${W.reste})</button></div>`);H.querySelector("button").addEventListener("click",()=>{d=W.visibles.length,P()}),r.appendChild(H)}else if(W.visibles.length){const H=W.visibles.length>1?"notices":"notice";r.appendChild(ue(`<p class="savoir-note">${W.visibles.length} ${H} sur l’étagère.</p>`))}}function Y(T){r.innerHTML="";const B=M(),F=tm([T],t).length>0,D=ue(`<div class="savoir-ligne"><button class="enc-retour">← Étagère</button><button class="enc-etoile${F?" mise":""}">${F?"★ Favori":"☆ Mettre en favori"}</button><button class="enc-journal">✎ Garder au journal</button></div>`);D.querySelector(".enc-retour").addEventListener("click",()=>{p=null,P()}),D.querySelector(".enc-journal").addEventListener("click",H=>{Ov(t,{titre:T.titre,texte:T.resume,origine:"encyclo"});const ee=H.currentTarget;ee.textContent="✓ Gardé",ee.disabled=!0}),D.querySelector(".enc-etoile").addEventListener("click",()=>{em(t,T.id),Y(T)}),r.appendChild(D);const I=ue(`<div class="savoir-fiche"><h4>${Xe(T.titre)} <small class="enc-domaine">${Xe(T.domaine)}</small></h4></div>`);if(T.image&&/^https?:\/\//.test(T.image)){const H=document.createElement("img");H.className="savoir-img",H.src=T.image,H.alt="",H.loading="lazy",I.appendChild(H)}I.appendChild(ue(`<p>${Xe(T.resume)}</p>`)),r.appendChild(I);const z=zT(T,B);if(z.length){const H=ue('<div class="enc-liens"><p class="savoir-note">Liens extraordinaires</p></div>');for(const ee of z){const he=ue(`<button class="enc-lien">${Xe(ee.titre)}</button>`);he.addEventListener("click",()=>{p=ee,P()}),H.appendChild(he)}r.appendChild(H)}const ae=ue('<div class="savoir-actions"></div>'),k=ue("<button>En faire des cartes</button>");if(k.addEventListener("click",()=>{const H=m()??ls(t,T.titre);if(!H)return;a=H.id;let ee=0;for(const he of Uc(T.resume))ma(t,H.id,he.verso,he.recto)&&ee++;r.appendChild(ue(`<p class="savoir-msg">${ee} carte${ee>1?"s":""} rangée${ee>1?"s":""} dans « ${Xe(H.nom)} » — onglet Réviser pour les travailler.</p>`)),e.parler(`${ee} cartes rangées.`,"lumineuse")}),ae.appendChild(k),qT(T)){const H=ue("<button>Chercher une illustration</button>");H.addEventListener("click",async()=>{H.disabled=!0,H.textContent="Je regarde…";const ee=await Jp(T.titre,fetch);if(Lv(p?.titre??null,T.titre))return;const he=WT(ee,p?.titre??"",T.titre),we=r.querySelector(".savoir-fiche");if(he&&we&&!we.querySelector("img")){const ve=document.createElement("img");ve.className="savoir-img",ve.src=he,ve.alt="",ve.loading="lazy",ve.onerror=()=>ve.remove();const ye=we.querySelector("h4");we.insertBefore(ve,ye?ye.nextSibling:null),H.remove()}else H.disabled=!1,H.textContent="Chercher une illustration",r.appendChild(ue('<p class="savoir-msg">Le net n’a pas d’image pour ce sujet — ou bien ce n’est pas le bon.</p>'))}),ae.appendChild(H)}const W=sn(t);if(W){const H=ue("<button>Approfondir avec le grand cerveau</button>");H.addEventListener("click",async()=>{H.disabled=!0;const ee=ue('<p class="savoir-msg">Je consulte le grand cerveau…</p>');r.appendChild(ee);const he=await HT(W,T.titre,fetch,Pr(t));ee.remove(),H.disabled=!1,r.appendChild(ue(`<p class="savoir-msg">${he?Xe(he):"Le grand cerveau ne répond pas pour l’instant — elle reviendra, plus tard."}</p>`))}),ae.appendChild(H)}const oe=T.url&&/^https?:\/\//.test(T.url)?T.url:"";oe&&ae.appendChild(ue(`<a class="savoir-lien" href="${Xe(oe)}" target="_blank" rel="noopener noreferrer">Voir la source</a>`)),r.appendChild(ae)}function q(){const T=ue('<input type="text" class="trad-langue" placeholder="Ta langue (ex. wolof, ewondo…)" aria-label="Langue" />'),B=ue('<textarea class="trad-phrase" rows="2" placeholder="Écris (ou dicte dans la bulle du bas)…" aria-label="Phrase à traduire"></textarea>'),F=ue('<div class="savoir-resultat"></div>'),D=ue('<div class="savoir-actions"><button class="trad-faire">Traduire</button></div>'),I=ue(`<details class="savoir-import"><summary>Ajouter à mon lexique (il reste ici, hors-ligne)</summary>
      <div class="savoir-actions"><button class="trad-dicter">🎤 Dicter un mot — dites « bonjour veut dire… »</button></div>
      <div class="savoir-ligne"><input type="text" placeholder="mot français" aria-label="Mot français" /><input type="text" placeholder="traduction dans ta langue" aria-label="Traduction" /><button>Ajouter</button></div></details>`);I.querySelector(".trad-dicter").addEventListener("click",()=>{if(!e.sttDisponible){F.innerHTML="",F.appendChild(ue('<p class="savoir-msg">Je n’ai pas d’oreille aujourd’hui — écris le mot ci-dessous.</p>'));return}const he=T.value.trim();F.innerHTML="",F.appendChild(ue('<p class="savoir-msg">J’écoute… dis par exemple « bonjour veut dire naka nga def ».</p>')),e.ecouter(we=>{F.innerHTML="";const ve=Tv(we);if(!ve){F.appendChild(ue(`<p class="savoir-msg">J’ai entendu « ${Xe(we)} » sans voir le couple — recommence avec « mot veut dire traduction ».</p>`));return}if(!he){z.value=ve.de,ae.value=ve.a,F.appendChild(ue('<p class="savoir-msg">Donne-moi le nom de la langue en haut, puis appuie sur Ajouter — tout est prêt.</p>'));return}t.setItem(yr,JSON.stringify(ga(_(),ve.de,ve.a,he))),F.appendChild(ue(`<p class="savoir-msg">${Xe(ve.de)} → ${Xe(ve.a)}, rangé dans mon carnet.</p>`)),e.parler(`${ve.de} veut dire ${ve.a}.`,"lumineuse")})});const[z,ae]=[...I.querySelectorAll("input")];I.querySelector(".savoir-ligne button").addEventListener("click",()=>{const he=T.value;if(!he.trim()||!z.value.trim()||!ae.value.trim())return;const we=Zp(t.getItem(yr));t.setItem(yr,JSON.stringify(ga(we,z.value,ae.value,he))),z.value="",ae.value="",e.parler("C’est dans mon carnet.","douce")}),T.value=localStorage.getItem("nath.trad.langue")??"",T.addEventListener("change",()=>localStorage.setItem("nath.trad.langue",T.value)),D.querySelector(".trad-faire").addEventListener("click",()=>{const he=T.value,we=ST(B.value,he,_());if(F.innerHTML="",we.resultat){const ve=ue(`<div class="savoir-fiche"><p class="trad-out">${Xe(we.resultat)}</p></div>`),ye=ue("<button>Écouter</button>");ye.addEventListener("click",()=>e.parler(we.resultat,"posee")),ve.appendChild(ye),F.appendChild(ve),we.manques.length&&(F.appendChild(ue(`<p class="savoir-note">mots que je ne connais pas encore : ${Xe(we.manques.join(", "))} — ajoute-les ci-dessous, ton lexique grandit pour toujours.</p>`)),k())}else{const ve=yT(he);if(ve.length){const ye=ue(`<p class="savoir-msg">Je ne connais encore rien dans cette langue — mais on m'a donné des mots sûrs en « ${Xe(he.trim())} ».</p>`),He=ue("<button>Charger ce socle de mots</button>");He.addEventListener("click",()=>{let Be=_();for(const Mt of ve)Be=ga(Be,Mt.de,Mt.a,he.trim());t.setItem(yr,JSON.stringify(Be)),F.innerHTML="",F.appendChild(ue(`<p class="savoir-msg">${ve.length} mots de vie rangés dans mon carnet. Écris une phrase, je saurai répondre.</p>`)),e.parler("Le socle est chargé. Ton lexique peut grandir.","lumineuse")}),ye.appendChild(He),F.appendChild(ye)}else F.appendChild(ue('<p class="savoir-msg">Je ne connais encore aucun mot dans cette langue. Sème ton lexique une entrée à la fois, ou colle le carnet d’un autre plus bas — ensemble on traduit tout le monde.</p>'));k()}});function k(){const he=DT(T.value);if(!he)return W();const we=ue('<div class="savoir-actions"><button class="trad-filet">Demander au filet gratuit (cette phrase sortira de l’appareil)</button></div>');we.querySelector(".trad-filet").addEventListener("click",async()=>{const ve=we.querySelector("button"),ye=B.value.trim();if(!ye)return;ve.disabled=!0,ve.textContent="Je demande…";const He=await IT(ye,"fr",he,fetch);if(we.remove(),!He){F.appendChild(ue('<p class="savoir-msg">Le filet n’a rien pu pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));return}const Be=sn(t);if(Be&&await kE(Be,ye,He,T.value.trim())===!1){F.appendChild(ue('<p class="savoir-msg">Le filet a répondu, mais ça ne me semble pas fidèle à ta phrase — une proposition douteuse ne se range pas. Ton carnet ne garde que le juste.</p>')),e.parler("Cette traduction ne me semble pas juste — on ne la range pas.","douce");return}oe(He,"filet gratuit",ye)}),F.appendChild(we)}function W(){const he=sn(t);if(!he)return;const we=ue('<div class="savoir-actions"><button class="trad-cerveau">Demander au grand cerveau en ligne (cette phrase sortira de l’appareil)</button></div>');we.querySelector(".trad-cerveau").addEventListener("click",async()=>{const ve=we.querySelector("button"),ye=B.value.trim();if(!ye)return;ve.disabled=!0,ve.textContent="Je demande…";const He=await DE(he,ye,T.value.trim(),fetch);if(we.remove(),!He){F.appendChild(ue('<p class="savoir-msg">Le grand cerveau n’a rien su pour cette phrase — ton carnet reste la meilleure mémoire.</p>'));return}oe(He,"grand cerveau en ligne",ye)}),F.appendChild(we)}function oe(he,we,ve){const ye=ue(`<div class="savoir-fiche"><p class="trad-out">${Xe(he)}</p><p class="savoir-note">proposition du ${we} — vérifie avec ton oreille ; si c’est juste, range-le : ça rendra service à tout le monde.</p></div>`),He=ue("<button>Ranger dans mon carnet</button>");He.addEventListener("click",()=>{const Be=T.value.trim();!Be||!ve||(t.setItem(yr,JSON.stringify(ga(_(),ve,he,Be))),He.textContent="Rangé 🌿",He.disabled=!0,e.parler("Merci — ton carnet est un peu plus monde.","douce"))}),ye.appendChild(He),F.appendChild(ye)}const H=ue(`<details class="savoir-import"><summary>Mon carnet complet — le prêter, ou emprunter celui d’un autre</summary>
      <div class="savoir-actions"><button class="trad-copier">Copier tout mon lexique</button></div>
      <textarea class="trad-collecte" rows="3" placeholder="les mots copiés se collent ici pour être prêtés" aria-label="Mon lexique à prêter" hidden></textarea>
      <textarea class="trad-import" rows="3" placeholder="Colle ici le carnet d’un autre (une ligne par mot : langue | mot :: traduction)" aria-label="Lexique à importer"></textarea>
      <div class="savoir-actions"><button class="trad-importer">Ajouter ces mots au mien</button></div></details>`),ee=H.querySelector(".trad-collecte");H.querySelector(".trad-copier").addEventListener("click",async()=>{const he=ET(_());if(!he){e.parler("Mon carnet est encore vide — ajoute des mots, il sera prêt à partager.","douce");return}try{await navigator.clipboard.writeText(he),F.innerHTML="",F.appendChild(ue(`<p class="savoir-msg">${Xe(String(he.split(`
`).length))} mots copiés — colle-les chez qui veut, son lexique grandira.</p>`)),e.parler("C’est copié. Tu peux le prêter.","lumineuse")}catch{ee.hidden=!1,ee.value=he,ee.select(),F.appendChild(ue('<p class="savoir-note">Sélectionne tout dans la case et copie — le carnet est prêt à être prêté.</p>'))}}),H.querySelector(".trad-importer").addEventListener("click",()=>{const he=H.querySelector(".trad-import").value,we=_(),ve=TT(he,we),ye=ve.length-we.length;if(ye<=0){F.appendChild(ue('<p class="savoir-msg">Rien de nouveau là-dedans — ou les lignes ne sont pas dans le format « langue | mot :: traduction ».</p>'));return}t.setItem(yr,JSON.stringify(ve)),H.querySelector(".trad-import").value="",F.appendChild(ue(`<p class="savoir-msg">${Xe(String(ye))} mots reçus d’un autre — merci à lui. Notre lexique est plus fort.</p>`)),e.parler(`${ye} mots reçus. Merci à celui qui les a semés.`,"douce")}),r.append(T,B,D,F,I,H)}let Z=null;const te=document.getElementById("patte"),J=te?te.innerHTML:"";function K(T){Z===null&&(Z=document.title);const B=Qp(T);document.documentElement.style.setProperty("--teinte",B);let F=document.querySelector('meta[name="theme-color"]');F||(F=document.createElement("meta"),F.name="theme-color",document.head.appendChild(F)),F.content=B,document.title=T.actif?T.slogan?`${T.nom} — ${T.slogan}`:T.nom:Z,te&&(te.innerHTML=T.actif?`${Xe(T.nom)} — <span>${Xe(T.slogan||"l’assistant vivant")}</span>`:J)}function ie(){const T=ua(t),B=ue('<div class="savoir-resultat"></div>');if(T.actif){const I=ue(`<div class="savoir-fiche"><h4>${Xe(T.nom)}</h4><p>${Xe(T.slogan)}</p>
        <p class="savoir-note">Cet appareil porte le visage de « ${Xe(T.organisation)} ».</p></div>`),z=ue('<div class="savoir-actions"><button class="ent-perso">Revenir en mode personnel</button></div>');z.querySelector(".ent-perso").addEventListener("click",()=>{CT(t),K(ua(t)),y("entreprise"),e.parler("Je reprends mon visage habituel.","douce")}),r.append(I,z)}const F=ue(`<div class="savoir-fiche">
      <p class="savoir-note">Pour une école, une ONG, une équipe : la clé se demande à Nath-Tech avec le nom exact de l’organisation. Rien n’est bridé, on peut toujours revenir.</p>
      <div class="savoir-ligne"><input type="text" class="ent-org" placeholder="Organisation (ex. Lycée Bilingue de Douala)" aria-label="Organisation" /></div>
      <div class="savoir-ligne"><input type="text" class="ent-nom" placeholder="Nom visible (ex. LBD)" aria-label="Nom de la marque" /><input type="text" class="ent-slogan" placeholder="Slogan (facultatif)" aria-label="Slogan" /></div>
      <div class="savoir-ligne"><input type="color" class="ent-teinte" value="${Xe(Qp(T))}" aria-label="Teinte" /><input type="text" class="ent-cle" placeholder="Clé d’équipe (blocs de 4)" aria-label="Clé d’équipe" /></div>
      <div class="savoir-actions"><button class="ent-ok">Habiller l’app pour mon équipe</button></div>
    </div>`);F.querySelector(".ent-ok").addEventListener("click",()=>{const I=ae=>F.querySelector(`.${ae}`).value;wT(t,{organisation:I("ent-org"),cle:I("ent-cle"),nom:I("ent-nom"),slogan:I("ent-slogan"),couleur:I("ent-teinte")})?(K(ua(t)),y("entreprise"),e.parler(`Désormais, je travaille pour ${ua(t).nom}.`,"lumineuse")):(B.innerHTML="",B.appendChild(ue('<p class="savoir-msg">Cette clé n’ouvre rien pour ce nom-là — vérifie le nom exact de l’organisation et la clé, bloc par bloc.</p>')))});const D=ue(`<div class="savoir-fiche">
      <p class="savoir-note">Nath Entreprise pour une école, une ONG, une équipe — toute l’équipe habillée, un seul prix :</p>
      <div class="savoir-ligne"><input type="number" class="ent-nb" min="1" placeholder="Nombre de personnes à équiper" aria-label="Nombre de personnes" /><button class="ent-devis">Estimer</button></div>
      <div class="ent-devis-out"></div>
    </div>`);D.querySelector(".ent-devis").addEventListener("click",()=>{const I=Number(D.querySelector(".ent-nb").value),z=D.querySelector(".ent-devis-out");if(z.innerHTML="",!Number.isFinite(I)||I<=0){z.appendChild(ue('<p class="savoir-msg">Entre d’abord le nombre de personnes à équiper.</p>'));return}const ae=$T(I),k=ae.mensuel===null?`<b>${Xe(ae.palier)}</b> — ${Xe(nm(null))} : parle-nous de ton réseau, on trouvera le juste chiffre.`:`<b>${Xe(ae.palier)}</b> — ${Xe(nm(ae.mensuel))} par mois pour toute l’équipe, soit environ ${Math.round(ae.mensuel/I).toLocaleString("fr-FR")} F par personne. Et plus vous êtes nombreux, moins chaque tête coûte.`;z.appendChild(ue(`<p class="savoir-msg">${k}</p>`)),z.appendChild(ue('<p class="savoir-note">Accord direct avec Nath-Tech (mobile money), puis la clé exacte de ton organisation. Le gratuit de chacun reste entier, toujours.</p>'))}),r.append(F,B,D)}return K(ua(t)),n}const sA=new Set(["de","du","des","le","la","les","un","une","et","ou","a","au","aux","en","dans","pour","avec","sans","sur","sous","chez","plus","très","peu","beaucoup","quelques","some","the","of","with","je","j ai","ai","il","elle","on","nous","vous","ils","y","est","sont","faire","mettre"]),aA=t=>t.replace(/œ/g,"oe").replace(/æ/g,"ae");function Sa(t){const n=aA(ut(t)).split(" ").filter(i=>i.length>1&&!sA.has(i)&&!/^\d+$/.test(i)).join(" ");return n.length>3&&/s$/.test(n)?n.slice(0,-1):n}function Ga(t){const e=[],n=new Set;for(const i of t.split(/[,;/\n]|\s+et\s+/i)){const r=Sa(i);!r||n.has(r)||(n.add(r),e.push(r))}return e}function oA(t){const e=/(\d+)/.exec(t);if(!e)return 1;const n=Number(e[1]);return Number.isFinite(n)&&n>0&&n<=99?Math.floor(n):1}async function Nl(t){const e=t.question.trim(),n=t.endpoint.trim().replace(/\/+$/,"");if(!n||!e||!t.consigne.trim())return null;try{const i=await t.fetchImpl(`${n}/dire`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t.modele?{modele:t.modele}:{},messages:[{role:"system",content:`${t.consigne}
Tu réponds toujours en français.`},{role:"user",content:e}]})});if(!i.ok)return null;const r=await i.json(),s=r?.result?.response??r?.response,a=typeof s=="string"?s.trim():"";return a&&a.length<=(t.max??800)?a:null}catch{return null}}const Bv=[{id:"ome",nom:"Omelette des voisins",type:"dîner",minutes:10,ingredients:["oeuf","oignon","tomate","huile"]},{id:"sal",nom:"Salade croque-frais",type:"encas",minutes:5,ingredients:["concombre","tomate","citron","huile"]},{id:"rib",nom:"Riz sauté du soir",type:"dîner",minutes:15,ingredients:["riz","oeuf","oignon","carotte","huile"]},{id:"pou",nom:"Poulet tomate et riz",type:"plat",minutes:45,ingredients:["poulet","tomate","oignon","riz","huile"]},{id:"poi",nom:"Poisson braisé, citron et piment",type:"plat",minutes:35,ingredients:["poisson","citron","piment","oignon","huile"]},{id:"nie",nom:"Niébé en sauce",type:"plat",minutes:50,ingredients:["niebe","oignon","tomate","huile","piment"]},{id:"tho",nom:"Riz au thon express",type:"dîner",minutes:12,ingredients:["thon","riz","oignon","tomate"]},{id:"ign",nom:"Igname pilée, sauce verte",type:"plat",minutes:40,ingredients:["igname","epinard","piment","oignon"]},{id:"pat",nom:"Purée de patate douce",type:"accompagnement",minutes:25,ingredients:["patate","lait","beurre","sucre"]},{id:"sem",nom:"Semoule aux légumes",type:"plat",minutes:20,ingredients:["semoule","carotte","oignon","huile","tomate"]},{id:"gat",nom:"Gâteau simple de la maison",type:"dessert",minutes:45,ingredients:["farine","sucre","oeuf","lait","huile"]},{id:"cre",nom:"Crème banane et cacao",type:"dessert",minutes:10,ingredients:["banane","lait","cacao","sucre"]},{id:"smoothie",nom:"Smoothie mangue-orange",type:"boisson",minutes:5,ingredients:["mangue","orange","lait","sucre"]},{id:"jus",nom:"Jus de gingembre citronné",type:"boisson",minutes:15,ingredients:["gingembre","citron","sucre","eau"]},{id:"the",nom:"Thé à la menthe",type:"boisson",minutes:8,ingredients:["the","menthe","sucre","eau"]},{id:"pouletfa",nom:"Poulet rôti aux quatre épices",type:"plat",minutes:70,ingredients:["poulet","ail","gingembre","piment","huile"]},{id:"sau",nom:"Sauce tomate arachide",type:"sauce",minutes:35,ingredients:["tomate","arachide","oignon","piment","huile"]},{id:"yaour",nom:"Yaourt frais aux fruits",type:"dessert",minutes:5,ingredients:["yaourt","banane","miel"]},{id:"lap",nom:"Laitue trempée dans le chaud",type:"accompagnement",minutes:6,ingredients:["laitue","citron","huile","sel"]},{id:"paineu",nom:"Pain perdu sucré",type:"encas",minutes:10,ingredients:["pain","oeuf","lait","sucre"]}];function lm(t){return Ga(t)}const lA=3;function kv(t,e){const n=new Set(t.flatMap(s=>Ga(String(s))));if(!n.size)return[];const i=Math.max(0,Math.floor(lA)),r=[];for(const s of Bv){const a=s.ingredients.filter(l=>!n.has(l));!(s.ingredients.length-a.length)||a.length>i||r.push({plat:s,manquants:a})}return r.sort((s,a)=>s.manquants.length-a.manquants.length||s.plat.minutes-a.plat.minutes||s.plat.nom.localeCompare(a.plat.nom,"fr"))}function cA(t){const e=new Set(t.flatMap(i=>Ga(String(i)))),n=new Map;for(const i of kv(t).slice(0,3))for(const r of i.manquants)n.set(r,(n.get(r)??0)+1);return[...n.entries()].filter(([i])=>!e.has(i)).sort((i,r)=>r[1]-i[1]||i[0].localeCompare(r[0],"fr")).map(([i])=>i)}function uA(t){const e=Math.floor(t);return!Number.isFinite(e)||e<=0?[]:Bv.filter(n=>n.minutes<=e).sort((n,i)=>n.minutes-i.minutes)}async function dA(t,e,n=fetch,i=""){return e.length<2?null:Nl({endpoint:t,modele:i,fetchImpl:n,max:800,consigne:"Tu es cuisinier et honnête. En français, en trois idées courtes, propose ce que ces ingrédients permettent de faire, avec le temps de cuisson et une astuce d’assaisonnement. N’invente pas d’ingrédient absent.",question:Ga(e.join(", ")).join(", ")})}const hA=[{nom:"Œuf",unite:"unité",kcal:78,p:6,g:1,l:5,alias:["oeuf","uf","oeufs"]},{nom:"Banane",unite:"unité",kcal:90,p:1,g:23,l:0,alias:["banane"]},{nom:"Pomme",unite:"unité",kcal:72,p:0,g:19,l:0,alias:["pomme"]},{nom:"Orange",unite:"unité",kcal:47,p:1,g:12,l:0,alias:["orange"]},{nom:"Mangue",unite:"unité",kcal:60,p:1,g:15,l:0,alias:["mangue"]},{nom:"Tomate",unite:"unité",kcal:18,p:1,g:4,l:0,alias:["tomate"]},{nom:"Concombre",unite:"unité",kcal:12,p:1,g:2,l:0,alias:["concombre"]},{nom:"Carotte",unite:"unité",kcal:25,p:1,g:6,l:0,alias:["carotte"]},{nom:"Oignon",unite:"unité",kcal:40,p:1,g:9,l:0,alias:["oignon"]},{nom:"Pain",unite:"tranche",kcal:80,p:3,g:15,l:1,alias:["pain","tranche"]},{nom:"Riz cuit",unite:"portion",kcal:130,p:3,g:28,l:0,alias:["riz","garba"]},{nom:"Pâtes cuites",unite:"portion",kcal:157,p:6,g:31,l:1,alias:["pate","spaghetti"]},{nom:"Semoule",unite:"portion",kcal:157,p:6,g:33,l:0,alias:["semoule","couscous"]},{nom:"Igname",unite:"portion",kcal:118,p:2,g:27,l:0,alias:["igname","patate"]},{nom:"Niébé cuit",unite:"portion",kcal:120,p:8,g:21,l:0,alias:["niebe","haricot","lentille"]},{nom:"Poulet cuit",unite:"portion",kcal:165,p:31,g:0,l:4,alias:["poulet","volaille"]},{nom:"Poisson cuit",unite:"portion",kcal:135,p:20,g:0,l:5,alias:["poisson","capitaine","tilapia"]},{nom:"Thon en boîte",unite:"unité",kcal:116,p:26,g:0,l:1,alias:["thon"]},{nom:"Arachide",unite:"cuillère",kcal:94,p:4,g:3,l:8,alias:["arachide","cacahuede","cacahuete"]},{nom:"Lait",unite:"verre",kcal:60,p:3,g:5,l:3,alias:["lait"]},{nom:"Yaourt",unite:"pot",kcal:59,p:10,g:4,l:0,alias:["yaourt","yogourt","lait fermente"]},{nom:"Fromage",unite:"portion",kcal:115,p:7,g:1,l:9,alias:["fromage","vache"]},{nom:"Huile",unite:"cuillère",kcal:119,p:0,g:0,l:14,alias:["huile"]},{nom:"Beurre",unite:"cuillère",kcal:102,p:0,g:0,l:12,alias:["beurre","margarine"]},{nom:"Sucre",unite:"cuillère",kcal:48,p:0,g:12,l:0,alias:["sucre","miel"]},{nom:"Farine de blé",unite:"cuillère",kcal:38,p:1,g:8,l:0,alias:["farine"]},{nom:"Cacao",unite:"cuillère",kcal:12,p:1,g:1,l:1,alias:["cacao","chocolat"]},{nom:"Épinard",unite:"assiette",kcal:23,p:3,g:4,l:0,alias:["epinard","feu","légume vert"]},{nom:"Laitue",unite:"assiette",kcal:8,p:1,g:1,l:0,alias:["laitue","salade"]},{nom:"Avocat",unite:"unité",kcal:80,p:1,g:4,l:7,alias:["avocat","caiman"]}];function fA(t){const e=Sa(t);return e?hA.find(n=>Sa(n.nom)===e||(n.alias??[]).some(i=>Sa(i)===e))??null:null}const nr=t=>Math.round(t*10)/10;function pA(t){const e=t.split(/[,;/\n]|\s+et\s+/i).map(s=>s.trim()).filter(Boolean),n=[],i=[];for(const s of e){const a=fA(s);if(!a){const l=Sa(s);l&&!i.includes(l)&&i.push(l);continue}const o=a.unite==="unité"?oA(s):1;n.push({nom:a.nom,quantite:o,kcal:nr(a.kcal*o),p:nr(a.p*o),g:nr(a.g*o),l:nr(a.l*o)})}const r=n.reduce((s,a)=>({kcal:s.kcal+a.kcal,p:s.p+a.p,g:s.g+a.g,l:s.l+a.l}),{kcal:0,p:0,g:0,l:0});return{articles:n,inconnus:i,total:{kcal:nr(r.kcal),p:nr(r.p),g:nr(r.g),l:nr(r.l)}}}const mA={leger:"Peu de choses sur l’assiette : ajoute un féculent ou une poignée de légumineuses pour tenir la journée.",correct:"Bel équilibre. Pense à la verdure et à l’eau avant de quitter la table.",copieux:"Beaucoup d’énergie d’un coup : marche vingt minutes et garde le reste pour le prochain repas."};function gA(t){const e=Number.isFinite(t.kcal)?t.kcal:0,n=e<400?"leger":e<=800?"correct":"copieux";return{equilibre:n,mot:mA[n]}}async function vA(t,e,n=fetch,i=""){const r=Ga(e).length?e.trim():"";return r?Nl({endpoint:t,modele:i,fetchImpl:n,max:800,consigne:"Tu es nutritionniste de quartier, en français. En trois phrases, dis ce qui manque ou ce qui est de trop dans cette assiette, et un seul remplacement simple à portée de main. Pas de chiffre inventé, pas de diagnostic.",question:r.slice(0,800)}):null}const _A=12,cm=180,xA=t=>{const e=t.replace(/\s+/g," ").trim(),n=e.length>cm?`${e.slice(0,cm).replace(/\s\S*$/,"")}…`:e;if(!n)return"";const i=/[.!?…]$/.test(n)?n:`${n}.`;return i.charAt(0).toUpperCase()+i.slice(1)};function SA(t){return t.split(new RegExp("(?<=[.!?;])\\s+|\\n+")).map(e=>e.trim()).filter(e=>e.length>=_A&&e.split(" ").length>=3)}function um(t,e=5){const n=SA(t);if(!n.length)return[];const i=Math.max(1,Math.floor(e)),r=new Set,s=[];for(let a=0;a<n.length&&s.length<i;a++){const o=xA(n[a]),l=ut(o);!o||r.has(l)||(r.add(l),s.push(o))}return s}function dm(t){return t.map(e=>e.trim()).filter(Boolean).map(e=>{const n=e.split(" ").slice(0,6).join(" ");return{verso:n.length>58?`${n.slice(0,58).replace(/\s\S*$/,"")}…`:n,recto:e}})}async function MA(t,e,n=fetch,i=""){const r=e.trim();return r.length<40?null:Nl({endpoint:t,modele:i,fetchImpl:n,max:900,consigne:"Tu résumes en français, en 4 ou 5 puces courtes commençant par « - », uniquement ce que le texte affirme. Pas d’introduction, pas de conclusion, pas d’inventaire de ce que tu as fait.",question:r.slice(0,6e3)})}function bA(t){const e=t.split(/\n+/).map(r=>r.trim()).filter(Boolean),n=[],i=[];for(const r of e)(/[?？]/.test(r)?n:i).push(r);return{donnees:i,questions:n}}function hm(t){const e=t.trim();return[`Relis la question${e?` « ${e} »`:""} une première fois, puis souligne exactement ce qui est demandé.`,"Écris à part toutes les données utiles, avec leurs unités : ce que l’énoncé donne, rien de plus.","Choisis la règle, la formule ou le principe qui relie ces données à ce que tu cherches.","Fais le calcul une ligne par opération, sans rien sauter : une ligne, un signe, un résultat.","Vérifie : l’unité attendue est-elle là, l’ordre de grandeur est-il raisonnable, le sens de la réponse tient-il ?","Rédige une réponse complète en une phrase, et garde la trace pour la refaire dans trois jours."]}async function yA(t,e,n=fetch,i=""){const r=e.trim();return r?Nl({endpoint:t,modele:i,fetchImpl:n,max:1200,consigne:"Tu es un professeur patient. Explique la résolution en français, en six étapes courtes numérotées, une ligne par opération, puis termine par une phrase de vérification. N'invente aucune donnée qui manque.",question:r.slice(0,2e3)}):null}const So=[{nom:"Inspire",secondes:4},{nom:"Retiens",secondes:7},{nom:"Expire",secondes:8}],fm=[{nom:"Inspire",secondes:4},{nom:"Retiens",secondes:4},{nom:"Expire",secondes:4},{nom:"Retiens",secondes:4}];function Yo(t){return t.reduce((e,n)=>e+Math.max(0,Math.floor(n.secondes)),0)}function Bc(t){const e=[];let n=0;for(const i of t){const r=Math.max(0,Math.floor(i.secondes));r&&(e.push({nom:i.nom,debut:n,fin:n+r}),n+=r)}return e}function EA(t,e){const n=Yo(t);if(!n)return{nom:"",reste:0};const i=(Math.floor(e)%n+n)%n;for(const s of Bc(t))if(i>=s.debut&&i<s.fin)return{nom:s.nom,reste:s.fin-i};return{nom:Bc(t)[Bc(t).length-1].nom,reste:0}}function TA(t,e,n){const i=Yo(e),r=Math.max(1,Math.floor(n))*i*1e3,s=Math.max(0,Math.floor(t));if(!i||s>=r)return{cycle:Math.max(1,Math.floor(n)),phase:"Fini",reste:0,fini:!0};const a=i*1e3,o=Math.floor(s/a)+1,l=Math.floor(s%a/1e3),{nom:c,reste:u}=EA(e,l);return{cycle:o,phase:c,reste:u,fini:!1}}const zv="nath.souffle",kc={sessions:0,secondes:0},od=t=>typeof t=="number"&&Number.isFinite(t)&&t>0?Math.floor(t):0;function Vv(t){try{const e=t.getItem(zv);if(!e)return{...kc};const n=JSON.parse(e);return!n||typeof n!="object"?{...kc}:{sessions:od(n.sessions),secondes:od(n.secondes)}}catch{return{...kc}}}function AA(t,e){const n=Vv(t),i={sessions:n.sessions+1,secondes:n.secondes+od(e?.secondes)};return t.setItem(zv,JSON.stringify(i)),i}const wA="Sans drapeau";function CA(t){const e=new Map;for(const r of t){if(!r||typeof r.id!="string")continue;const s=(r.domaine??"").trim()||wA,a=e.get(s);a?a.push(r.id):e.set(s,[r.id])}const n=[...e.values()].reduce((r,s)=>r+s.length,0);return n?[...e.entries()].map(([r,s])=>({nom:r,nombre:s.length,part:Math.round(s.length/n*1e3)/10,ids:s})).sort((r,s)=>s.nombre-r.nombre||r.nom.localeCompare(s.nom,"fr")):[]}const pm=t=>{const e=document.createElement("template");return e.innerHTML=t.trim(),e.content.firstElementChild},nt=t=>t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]??e),mm={flamme:"Flamme",frigo:"Frigo",assiette:"Assiette",journal:"Journal",tuteur:"Tuteur",souffle:"Souffle",resume:"Résumé",carte:"Carte"};function RA(t){const e=Sh(),n=pm('<button class="outils-btn" title="Ma boîte à outils" aria-label="Ouvrir la boîte à outils">🧰</button>'),i=pm(`
    <div class="outils-paneau" hidden role="dialog" aria-label="Boîte à outils">
      <div class="outils-tete">
        <div class="outils-onglets">
          ${Object.keys(mm).map(T=>`<button data-ot="${T}"${T==="flamme"?' class="actif"':""}>${mm[T]}</button>`).join("")}
        </div>
        <button class="outils-fermer" title="Fermer" aria-label="Fermer">×</button>
      </div>
      <div class="outils-corps"></div>
    </div>`);document.body.append(n,i);const r=i.querySelector(".outils-corps");let s="flamme",a="",o="",l="",c=null,u="",d=[],h="",p="",v="",_=So,m=3,f=null,y=0,E=null;const A=()=>navigator.onLine?"":'<p class="outils-note">Hors-ligne : tout ce que tu vois ici continue de fonctionner.</p>',w=()=>!!sn(t).trim();function C(){const T=Dv(t),B=KT(T.xp),F=Math.round(QT(T.xp)*100);r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">🔥 ${T.streak} jour${T.streak>1?"s":""} de suite</p>
        <p class="oi-note">Record : ${T.meilleur} jour${T.meilleur>1?"s":""} · ${T.xp} points · niveau ${B} — ${nt(ZT(B))}</p>
        <div class="oi-barre"><i style="width:${F}%"></i></div>
        <p class="oi-note">${F} % du chemin vers le niveau ${B+1}.</p>
        <div class="oi-actions">
          <button data-xp="10">Je révise aujourd’hui (+10)</button>
          <button data-xp="25">J’ai fini un paquet (+25)</button>
        </div>
        <p class="oi-note">Chaque fiche revue dans le coin d’études ajoute aussi ses points, toute seule.</p>
      </div>${A()}`,r.querySelectorAll("[data-xp]").forEach(D=>{D.addEventListener("click",()=>{Nv(t,Number(D.dataset.xp)),C()})})}function L(){const T=lm(a),B=kv(T),F=cA(T);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-frigo">Ce que j’ai sous la main</label>
        <textarea id="oi-frigo" class="oi-champ" rows="2" placeholder="2 œufs, tomate, riz, oignon…">${nt(a)}</textarea>
        <div class="oi-actions">
          ${e.sttDisponible?'<button data-act="micro" data-cible="frigo">🎤 Dictater</button>':""}
          <button data-act="vingt">Dîner en 20 minutes</button>
          ${w()?'<button data-act="cereau">Demander une idée</button>':""}
        </div>
        ${T.length?`<p class="oi-note">Je retiens : ${T.map(nt).join(", ")}.</p>`:""}
        <div data-zone></div>
      </div>${A()}`;const D=r.querySelector("#oi-frigo");D.addEventListener("input",()=>{a=D.value,L();const z=r.querySelector("#oi-frigo");z.focus(),z.setSelectionRange(z.value.length,z.value.length)});const I=r.querySelector("[data-zone]");B.length?I.innerHTML='<p class="oi-titre2">Ce que je peux faire</p>'+B.slice(0,6).map(z=>`<div class="oi-ligne"><span>${nt(z.plat.nom)} · ${z.plat.minutes} min</span>
            <small>${z.manquants.length?`manque : ${z.manquants.map(nt).join(", ")}`:"j’ai tout"}</small></div>`).join(""):T.length&&(I.innerHTML='<p class="oi-note">Rien sur la carte avec ces seuls mots — ajoute un féculent, un légume ou une protéine.</p>'),F.length&&(I.innerHTML+=`<p class="oi-titre2">Liste de courses</p><p class="oi-cours">${F.map(nt).join(" · ")}</p>`),r.querySelector('[data-act="vingt"]')?.addEventListener("click",()=>{a=uA(20).map(z=>z.ingredients.slice(0,2).join(", ")).slice(0,3).join(", "),L()}),J(r.querySelector('[data-act="micro"]'),D,z=>{a=z,L()}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async z=>{const ae=z.currentTarget;ae.disabled=!0,ae.textContent="Je réfléchis…";const k=await dA(sn(t),lm(a),fetch,Pr(t));I.innerHTML+=k?`<p class="oi-titre2">Une idée en plus</p><p class="oi-reponse">${nt(k)}</p>`:'<p class="oi-note">Pas de réponse venue — la carte du frigo reste utilisable hors-ligne.</p>',ae.disabled=!1,ae.textContent="Demander une idée"})}function G(){const T=pA(o),B=gA(T.total);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-assiette">Ce que je mange</label>
        <textarea id="oi-assiette" class="oi-champ" rows="2" placeholder="2 œufs, riz, poulet, banane…">${nt(o)}</textarea>
        <div class="oi-actions">${e.sttDisponible?'<button data-act="micro" data-cible="assiette">🎤 Dictater</button>':""}
        ${w()?'<button data-act="cereau">Avis du grand cerveau</button>':""}</div>
        ${T.articles.length?`
          <table class="oi-table"><thead><tr><th>Aliment</th><th>Qté</th><th>kcal</th><th>P</th><th>G</th><th>L</th></tr></thead>
          <tbody>${T.articles.map(D=>`<tr><td>${nt(D.nom)}</td><td>${D.quantite}</td><td>${D.kcal}</td><td>${D.p}</td><td>${D.g}</td><td>${D.l}</td></tr>`).join("")}</tbody>
          <tfoot><tr><td>Total</td><td></td><td>${Math.round(T.total.kcal)}</td><td>${T.total.p}</td><td>${T.total.g}</td><td>${T.total.l}</td></tr></tfoot></table>
          <p class="oi-verdict oi-${B.equilibre}">${nt(B.mot)}</p>`:'<p class="oi-note">Écris ce que tu manges : l’estimation vient aussitôt, sans réseau.</p>'}
        ${T.inconnus.length?`<p class="oi-note">Je ne connais pas encore : ${T.inconnus.map(nt).join(", ")}.</p>`:""}
        <div data-zone></div>
      </div>${A()}`;const F=r.querySelector("#oi-assiette");F.addEventListener("input",()=>{o=F.value,G();const D=r.querySelector("#oi-assiette");D.focus(),D.setSelectionRange(D.value.length,D.value.length)}),J(r.querySelector('[data-act="micro"]'),F,D=>{o=D,G()}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async D=>{const I=D.currentTarget,z=r.querySelector("[data-zone]");I.disabled=!0,I.textContent="Je regarde…";const ae=await vA(sn(t),o,fetch,Pr(t));z.innerHTML=ae?`<p class="oi-reponse">${nt(ae)}</p>`:'<p class="oi-note">Aucun avis n’est revenu ; le calcul ci-dessus reste valable.</p>',I.disabled=!1,I.textContent="Avis du grand cerveau"})}function S(){const T=Xo(t),B=am(T,h).slice(0,30);r.innerHTML=`
      <div class="oi-carte">
        <input id="oi-jreq" class="oi-champ" type="search" placeholder="Retrouver une note (les accents ne comptent pas)" value="${nt(h)}" />
        <input id="oi-jtitre" class="oi-champ" type="text" placeholder="Titre de la découverte" value="${nt(p)}" />
        <textarea id="oi-jtexte" class="oi-champ" rows="2" placeholder="Ce que j’ai compris…">${nt(v)}</textarea>
        <div class="oi-actions">
          <button data-act="noter">Noter</button>
          <button data-act="cartes">En faire des cartes</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="jtexte">🎤 Dictater</button>':""}
        </div>
        <p class="oi-note">${T.length} note${T.length>1?"s":""} gardée${T.length>1?"s":""} sur cet appareil.</p>
        <div class="oi-liste">${B.map(z=>`<div class="oi-ligne" data-id="${nt(z.id)}"><span><strong>${nt(z.titre)}</strong>
              <small> · ${new Date(z.at).toLocaleDateString("fr-FR")} · ${nt(z.origine)}</small></span>
              <button data-act="del" title="Effacer">×</button></div>
              <p class="oi-pet">${nt(z.texte)}</p>`).join("")||'<p class="oi-note">Rien pour l’instant — la prochaine découverte tient sur deux lignes.</p>'}</div>
        <div data-zone></div>
      </div>${A()}`;const F=r.querySelector("#oi-jreq");F.addEventListener("input",()=>{h=F.value,S(),r.querySelector("#oi-jreq").focus()});const D=r.querySelector("#oi-jtitre");D.addEventListener("input",()=>p=D.value);const I=r.querySelector("#oi-jtexte");I.addEventListener("input",()=>v=I.value),r.querySelector('[data-act="noter"]').addEventListener("click",()=>{Ov(t,{titre:p,texte:v,origine:"outil"}),p="",v="",S()}),r.querySelector('[data-act="cartes"]').addEventListener("click",()=>{const z=iA(am(Xo(t),h)),ae=te("Mon journal",z);r.querySelector("[data-zone]").insertAdjacentHTML("beforeend",`<p class="oi-reponse">${ae?`${ae} carte${ae>1?"s":""} ajoutée${ae>1?"s":""} au paquet « Mon journal » — révise-les dans le coin d’études.`:"Rien à cartographier : écris au moins une note."}</p>`)}),J(r.querySelector('[data-act="micro"]'),I,()=>{v=I.value}),r.querySelectorAll('[data-act="del"]').forEach(z=>{z.addEventListener("click",()=>{nA(t,z.closest(".oi-ligne")?.dataset.id??""),S()})})}function M(){const T=bA(l);r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-tut">Ma question, mon énoncé</label>
        <textarea id="oi-tut" class="oi-champ" rows="3" placeholder="Résoudre 3x + 5 = 20 — ou recopier l’énoncé ligne par ligne.">${nt(l)}</textarea>
        <div class="oi-actions">
          <button data-act="plan">Le plan, stylo en main</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="tut">🎤 Dictater</button>':""}
          ${e.ttsDisponible?'<button data-act="lire">🔊 Me lire le plan</button>':""}
          ${w()?'<button data-act="cereau">Faire résoudre</button>':""}
        </div>
        ${T.questions.length?`<p class="oi-note">Ce qu’on te demande : ${T.questions.map(nt).join(" · ")}</p>`:""}
        <div data-zone>${c?`<p class="oi-reponse">${nt(c)}</p>`:""}</div>
      </div>${A()}`;const B=r.querySelector("#oi-tut");B.addEventListener("input",()=>{l=B.value});const F=r.querySelector("[data-zone]");r.querySelector('[data-act="plan"]').addEventListener("click",()=>{const D=hm(l);F.innerHTML=`<p class="oi-titre2">Le plan</p><ol class="oi-pas">${D.map(I=>`<li>${nt(I)}</li>`).join("")}</ol>`}),r.querySelector('[data-act="lire"]')?.addEventListener("click",()=>{e.parler(hm(l).join(" . "),"posee")}),J(r.querySelector('[data-act="micro"]'),B,D=>{l=D}),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async D=>{const I=D.currentTarget;I.disabled=!0,I.textContent="Je cherche…";const z=await yA(sn(t),l,fetch,Pr(t));c=z,F.innerHTML=z?`<p class="oi-titre2">Résolution</p><p class="oi-reponse">${nt(z)}</p>`:'<p class="oi-note">Rien n’est revenu — le plan hors-ligne fonctionne quand même.</p>',I.disabled=!1,I.textContent="Faire résoudre"})}function P(){const T=Vv(t),B=Yo(_),F=Math.round(T.secondes/60),D=T.secondes<60?`${T.secondes} seconde${T.secondes>1?"s":""}`:`${F} minute${F>1?"s":""}`;r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">Respirer à ${_===So?"4-7-8":"au carré"} · ${m} cycles · ${B*m} s</p>
        <div class="oi-souffle"><i></i><span data-phase="">${f===null?"Prêt":""}</span></div>
        <div class="oi-actions">
          <button data-ry="478"${_===So?' class="actif"':""}>4-7-8</button>
          <button data-ry="carre"${_===fm?' class="actif"':""}>Carré</button>
          <button data-cy="3"${m===3?' class="actif"':""}>3</button>
          <button data-cy="5"${m===5?' class="actif"':""}>5</button>
          <button data-cy="8"${m===8?' class="actif"':""}>8</button>
          <button data-act="go">${f===null?"Commencer":"Arrêter"}</button>
        </div>
        <p class="oi-note">${T.sessions} séance${T.sessions>1?"s":""} au repos · ${D} respirées.</p>
        <p class="oi-note">Le minuteur tourne dans l’appareil, sans son obligatoire : tu peux fermer les yeux.</p>
      </div>${A()}`,r.querySelectorAll("[data-ry]").forEach(I=>I.addEventListener("click",()=>{f===null&&(_=I.dataset.ry==="carre"?fm:So,P())})),r.querySelectorAll("[data-cy]").forEach(I=>I.addEventListener("click",()=>{f===null&&(m=Number(I.dataset.cy)||3,P())})),r.querySelector('[data-act="go"]').addEventListener("click",()=>{if(f!==null){Y(!0);return}y=Date.now();const I=r.querySelector('[data-act="go"]');I.textContent="Arrêter",f=window.setInterval(()=>{const z=TA(Date.now()-y,_,m);if(z.fini){Y(!0);return}const ae=r.querySelector("[data-phase]"),k=r.querySelector(".oi-souffle i");ae&&(ae.textContent=`${z.phase} · ${z.reste} · cycle ${z.cycle}/${m}`);const W=z.phase==="Inspire"?1:z.phase==="Retiens"?.92:.55;k&&(k.style.transform=`scale(${W})`)},200)})}function Y(T){f!==null&&window.clearInterval(f),f=null;const B=T?Math.min(Yo(_)*m,Math.round((Date.now()-y)/1e3)):0;B>=3&&AA(t,{secondes:B}),P()}function q(){r.innerHTML=`
      <div class="oi-carte">
        <label class="oi-libelle" for="oi-res">Colle ou dicte un texte</label>
        <textarea id="oi-res" class="oi-champ" rows="4" placeholder="Cours, article, message long…">${nt(u)}</textarea>
        <div class="oi-actions">
          <button data-act="puces">Résumer ici (hors-ligne)</button>
          ${e.sttDisponible?'<button data-act="micro" data-cible="res">🎤 Dictater</button>':""}
          ${e.ttsDisponible?'<button data-act="lire">🔊 Lire</button>':""}
          ${w()?'<button data-act="cereau">Résumer avec le grand cerveau</button>':""}
          <button data-act="cartes">En faire des cartes</button>
        </div>
        <div data-zone>${d.length?`<ol class="oi-pas">${d.map(F=>`<li>${nt(F)}</li>`).join("")}</ol>`:""}</div>
      </div>${A()}`;const T=r.querySelector("#oi-res");T.addEventListener("input",()=>u=T.value);const B=r.querySelector("[data-zone]");r.querySelector('[data-act="puces"]').addEventListener("click",()=>{d=um(u,5),B.innerHTML=d.length?`<ol class="oi-pas">${d.map(F=>`<li>${nt(F)}</li>`).join("")}</ol>`:'<p class="oi-note">Trop court pour être coupé en puces — ajoute quelques phrases.</p>'}),r.querySelector('[data-act="lire"]')?.addEventListener("click",()=>{e.parler(d.length?d.join(" . "):u.slice(0,400),"posee")}),J(r.querySelector('[data-act="micro"]'),T,F=>u=F),r.querySelector('[data-act="cereau"]')?.addEventListener("click",async F=>{const D=F.currentTarget;D.disabled=!0,D.textContent="Je lis…";const I=await MA(sn(t),u,fetch,Pr(t));d=I?I.split(/\n+/).map(z=>z.replace(/^[-•*]\s*/,"").trim()).filter(Boolean):[],B.innerHTML=d.length?`<ol class="oi-pas">${d.map(z=>`<li>${nt(z)}</li>`).join("")}</ol>`:'<p class="oi-note">Rien n’est revenu — le bouton « Résumer ici » marche sans réseau.</p>',D.disabled=!1,D.textContent="Résumer avec le grand cerveau"}),r.querySelector('[data-act="cartes"]').addEventListener("click",()=>{const F=d.length?dm(d):dm(um(u,5)),D=te("Résumés",F);B.insertAdjacentHTML("beforeend",`<p class="oi-reponse">${D?`${D} carte${D>1?"s":""} dans le paquet « Résumés ».`:"Résume d’abord (bouton hors-ligne) pour obtenir des cartes."}</p>`)})}function Z(){const T=wv,B=CA(T),F=E?B.find(I=>I.nom===E)??null:null,D=F?T.filter(I=>F.ids.includes(I.id)):[];r.innerHTML=`
      <div class="oi-carte">
        <p class="oi-titre">L’archipel des savoirs · ${T.length} notices</p>
        <div class="oi-iles">${B.map(I=>`<button class="oi-ile${I.nom===E?" actif":""}" data-ile="${nt(I.nom)}" style="--p:${Math.max(6,Math.round(I.part))}%"><span>${nt(I.nom)}</span><small>${I.nombre} · ${I.part}%</small></button>`).join("")}</div>
        ${F?`<p class="oi-titre2">${nt(F.nom)}</p><div class="oi-grille">${D.map(I=>`<div class="oi-puce"><strong>${nt(I.titre)}</strong><p>${nt(I.resume)}</p></div>`).join("")}</div>`:'<p class="oi-note">Choisis une île : ses notices s’ouvrent ici, même sans réseau. Les étoiles et la recherche t’attendent dans le coin d’études.</p>'}
      </div>${A()}`,r.querySelectorAll("[data-ile]").forEach(I=>I.addEventListener("click",()=>{E=I.dataset.ile??null,Z()}))}function te(T,B){const F=B.filter(z=>z.verso.trim()&&z.recto.trim());if(!F.length)return 0;let D=Kn(t).find(z=>z.nom===T);if(D||(D=ls(t,T)??void 0),!D)return 0;let I=0;for(const z of F)ma(t,D.id,z.verso,z.recto)&&I++;return I}function J(T,B,F){const D=T;!D||!e.sttDisponible||D.addEventListener("click",()=>{D.disabled=!0,D.textContent="🎤 Je t’écoute…",e.ecouter(I=>{const z=Tv(I),ae=Av(z?`${z.de}, ${z.a}`:I);B.value=ae,F(ae),D.disabled=!1,D.textContent="🎤 Dictater"})})}const K={flamme:C,frigo:L,assiette:G,journal:S,tuteur:M,souffle:P,resume:q,carte:Z};function ie(T){s=T,i.querySelectorAll(".outils-onglets button").forEach(B=>{B.classList.toggle("actif",B.dataset.ot===T)}),f!==null&&T!=="souffle"&&Y(!1),r.innerHTML="",K[T]()}return i.querySelectorAll(".outils-onglets button").forEach(T=>{T.addEventListener("click",()=>ie(T.dataset.ot??"flamme"))}),n.addEventListener("click",()=>{i.hidden=!i.hidden,i.hidden||ie(s)}),i.querySelector(".outils-fermer").addEventListener("click",()=>{f!==null&&Y(!1),i.hidden=!0}),window.addEventListener("online",()=>{i.hidden||ie(s)}),window.addEventListener("offline",()=>{i.hidden||ie(s)}),n}function LA(t,e){return{eclair:(t==="tension"?.45:t==="tristesse"?.12:0)*(.3+.7*e),filer:e*.4}}function PA(t,e){let n=0,i=.85,r=.15,s=!1,a="le ciel respire";t===0||t===1?(i=.95,a=t===0?"ciel dégagé":"à peine voilé"):t===2?(i=.8,a="nuages passagers"):t===3?(i=.55,r=.25,a="ciel couvert"):t===45||t===48?(i=.35,r=.1,n=.08,a="brouillard"):t>=51&&t<=57?(n=.35,i=.45,a="bruine"):t>=61&&t<=67?(n=t===65||t===67?.8:.55,i=.4,a="pluie"):t>=71&&t<=77?(n=.45,i=.65,a="neige"):t>=80&&t<=82?(n=t===82?.9:.6,i=.4,r=.3,a="averses"):t===85||t===86?(n=.5,i=.6,a="neiges"):t>=95&&t<=99&&(s=!0,n=.9,i=.3,r=.7,a="orage");const o=Math.min(1,r+Math.min(.4,Math.max(0,e)/100));return{pluie:n,turbulence:o,luminosite:i,orage:s,libelle:a}}async function DA(t,e,n){try{const i="https://api.open-meteo.com/v1/forecast?latitude="+encodeURIComponent(String(t))+"&longitude="+encodeURIComponent(String(e))+"&current=weather_code,wind_speed_10m",r=await n(i);if(!r.ok)return null;const s=await r.json(),a=s?.current?.weather_code;if(typeof a!="number")return null;const o=typeof s.current.wind_speed_10m=="number"?s.current.wind_speed_10m:0;return PA(a,o)}catch{return null}}async function IA(t,e){if(!t)return null;try{const n=await e(`${t.replace(/\/+$/,"")}/lieu`,{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});if(!n.ok)return null;const i=await n.json();if(!i?.lieu)return null;const r=Number(i.lieu.latitude),s=Number(i.lieu.longitude);return!Number.isFinite(r)||!Number.isFinite(s)?null:{latitude:r,longitude:s}}catch{return null}}function NA(t){const e=t.match(/assets\/index-[\w-]+\.js/);return e?e[0].split("/").pop()??null:null}function UA(t,e){return!!t&&t!==e}const Gv="nath.mise-a-jour.ecartee";function FA(t,e){try{return t.getItem(Gv)===e}catch{return!1}}function OA(t,e){try{t.setItem(Gv,e)}catch{}}async function BA(t,e){try{const n=e.includes("?")?"&":"?",i=await t(`${e}${n}revoir=${Date.now()}`,{cache:"no-store"});return i.ok?NA(await i.text()):null}catch{return null}}function kA(){return import.meta.url.split("/").pop()?.split("?")[0]??""}function zA(t,e,n=6e4){return t===0||e-t>=n}function VA(t,e){const n=document.createElement("div");n.className="maj-puce visible",n.setAttribute("role","status"),n.setAttribute("aria-live","polite");const i=()=>{OA(e,t),n.remove()};n.addEventListener("keydown",a=>{a.key==="Escape"&&i()});const r=document.createElement("button");r.type="button",r.className="maj-agir",r.textContent="Nouvelle version prête — recharger",r.title="Rien ne se recharge tout seul : appuie quand tu veux changer de version",r.addEventListener("click",()=>window.location.reload());const s=document.createElement("button");s.type="button",s.className="maj-refus",s.textContent="×",s.setAttribute("aria-label","Ne pas recharger maintenant"),s.title="Pour cette version-là, on n’y revient plus",s.addEventListener("click",i),n.append(r,s),document.body.append(n)}function GA(t=fetch){if(typeof document>"u")return;const e=window.location.href.split("?")[0],n=kA();if(!n)return;const i={getItem:o=>{try{return sessionStorage.getItem(o)}catch{return null}},setItem:(o,l)=>{try{sessionStorage.setItem(o,l)}catch{}}};let r=!1,s=0;const a=async()=>{if(r)return;const o=Date.now();if(!zA(s,o))return;s=o;const l=await BA(t,e);!UA(l,n)||!l||FA(i,l)||(r=!0,VA(l,i))};window.setTimeout(()=>{a()},8e3),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&a()})}const Jo=document.getElementById("scene"),xs=fM(Jo),it=pM();it.seed=localStorage.getItem("nuage.seed")??crypto.randomUUID();localStorage.setItem("nuage.seed",it.seed);const Ko={cameraOn:!1,micOn:!1};_M(t=>{it.breath=Math.max(it.breath,t)}).then(t=>{Ko.micOn=t});const ld=document.getElementById("cam"),HA=my(),zc=new fy(ld,localStorage,t=>{it.emotion=HA(py(t))},t=>{Ko.cameraOn=t,ld.classList.toggle("video-actif",t)}),qA=typeof navigator<"u"&&!!navigator.mediaDevices?.getUserMedia,WA=document.getElementById("etat"),Ss=My(it.seed);let Hv=[.5,.5];by(Jo,(t,e)=>{Hv=[t,e]});yy(t=>{it.breath=Math.max(it.breath,Math.abs(t))});aT(()=>({emotion:it.emotion,breath:it.breath,timeOfDay:it.timeOfDay,seed:Ss.musiqueSeed,bpm:it.bpm,cameraOn:Ko.cameraOn,micOn:Ko.micOn}),{cameraDisponible:qA,estOuverte:()=>zc.ouverte,basculer:()=>zc.basculer(),changerFace:()=>zc.basculerFace(),consentement:ay});rA(localStorage);RA(localStorage);setInterval(()=>{const t=LA(it.emotion,Zm(it).night);(it.cielReel?.orage&&Math.random()<.4||Math.random()<t.eclair)&&xs.eclair(),Math.random()<t.filer&&xs.filer(.08+Math.random()*.75,.7+Math.random()*.25)},15e3);const Wn=document.createElement("button");Wn.className="ciel-btn";Wn.type="button";Wn.textContent="⛅";Wn.title="Le ciel réel — laisser respirer au nuage le temps de chez toi";Wn.setAttribute("aria-label","Laisser au nuage le temps réel de chez toi");document.body.append(Wn);let us=0,Io=!1;async function Zo(t,e){const n=await DA(t,e,fetch);n&&(it.cielReel=n,Wn.classList.add("actif"),Wn.title=`Dehors, ${n.libelle} — le nuage respire avec lui`)}Wn.addEventListener("click",()=>{if(us){window.clearInterval(us),us=0,Io=!1,it.cielReel=null,Wn.classList.remove("actif"),Wn.title="Le ciel réel — laisser respirer au nuage le temps de chez toi";return}if(Io=!0,!navigator.geolocation){gm();return}navigator.geolocation.getCurrentPosition(t=>{Io&&(Zo(t.coords.latitude,t.coords.longitude),us=window.setInterval(()=>{Zo(t.coords.latitude,t.coords.longitude)},6e5))},()=>{gm()},{enableHighAccuracy:!1,timeout:1e4,maximumAge:6e5})});async function gm(){const t=await IA(sn(localStorage),fetch);if(!t){Wn.classList.remove("actif");return}Io&&(await Zo(t.latitude,t.longitude),window.clearInterval(us),us=window.setInterval(()=>{Zo(t.latitude,t.longitude)},6e5))}let Os=!1;const di=document.createElement("button");di.className="musique-btn";di.type="button";di.setAttribute("aria-label","La musique de l’aura — l’endormir ou la réveiller");document.body.append(di);function Eh(){const t=wl(localStorage);di.textContent=t?"🔇":"🎵",di.classList.toggle("eteinte",t),di.classList.toggle("actif",!t&&Os),di.title=t?"La musique dort — appuie pour l’éveiller":"La musique de l’aura — appuie pour l’endormir",di.setAttribute("aria-pressed",String(!t))}di.addEventListener("click",()=>{Ly(localStorage)?av():(Ry(),Os||(Os=sv(Ss.musiqueSeed))),Eh()});wl(localStorage)&&av();Eh();Jo.addEventListener("pointerdown",t=>{const e=Jo.getBoundingClientRect();xs.tap((t.clientX-e.left)/e.width,1-(t.clientY-e.top)/e.height),Os||(Os=sv(Ss.musiqueSeed),Eh())});const $A=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Mo=[];setInterval(()=>{const t=Sy(ld,$A);t!=null&&(Mo.push(t),Mo.length>80&&Mo.shift(),it.bpm=xy(Mo,8))},125);let vm=performance.now();function qv(t){const e=(t-vm)/1e3;vm=t;const n=new Date;if(it.timeOfDay=(n.getHours()+n.getMinutes()/60)/24,it.breath=Math.max(0,it.breath-e*.5),it.bpm){const i=Math.sin(Date.now()/(6e4/it.bpm)*2*Math.PI);it.breath=Math.max(it.breath,.08*i+.08)}xs.apply(Zm(it),Hv),xs.setBpm(it.bpm),xs.frame(e),wy(it.emotion),Cy(it.breath),WA.textContent=Os?`aura : ${Ss.nom} · humeur : ${it.emotion} · souffle : ${it.breath*100|0}% · pouls : ${it.bpm?Math.round(it.bpm):"—"}`:wl(localStorage)?`aura : ${Ss.nom} · la musique dort — 🎵 pour la réveiller`:`aura : ${Ss.nom} · touche le ciel pour éveiller la musique`,requestAnimationFrame(qv)}requestAnimationFrame(qv);console.log("Nath Assist v1-alpha — ICF·Future by Nath-Tech");GA(fetch);
